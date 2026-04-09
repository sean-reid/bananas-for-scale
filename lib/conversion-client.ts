/**
 * Client-safe conversion utilities.
 * This module contains NO server-only imports (no better-sqlite3, no drizzle runtime).
 * It is safe to import from "use client" components.
 */

import { formatNumber } from "@/lib/format";

// ── Types ──────────────────────────────────────────────────────────────────

export type SillyConversion = {
  unitName: string;
  value: number;
  formattedValue: string;
  unitId: string;
};

export type MeasurementWithConversions = {
  id: string;
  label: string;
  value: number;
  si_unit: string;
  note: string | null;
  formattedValue: string;
  conversions: SillyConversion[];
};

/** Client-side representation of a silly unit (no DB dependency). */
export type SillyUnitData = {
  id: string;
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
};

// ── Seeded PRNG ────────────────────────────────────────────────────────────

/** Simple string hash (djb2). Returns a positive 32-bit integer. */
export function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0;
  }
  return hash >>> 0; // ensure unsigned
}

/** Mulberry32 PRNG — returns a function that produces floats in [0, 1). */
export function mulberry32(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Shared Conversion Logic ───────────────────────────────────────────────

const COMPREHENSIBLE_MIN = 1e-30;
const COMPREHENSIBLE_MAX = 1e30;

type ScoredUnit = {
  unit: SillyUnitData;
  result: number;
  comprehensible: boolean;
};

export function scoreUnits(measurementValue: number, units: SillyUnitData[]): ScoredUnit[] {
  return units.map((unit) => {
    const result = measurementValue / unit.si_value;
    const comprehensible = result >= COMPREHENSIBLE_MIN && result <= COMPREHENSIBLE_MAX;
    return { unit, result, comprehensible };
  });
}

/**
 * Pick 2–3 units for a measurement using a seeded RNG.
 * Guarantees at least 1 comprehensible pick, plus optionally 1 absurd pick for contrast.
 */
export function pickUnits(scored: ScoredUnit[], rng: () => number): ScoredUnit[] {
  if (scored.length === 0) return [];

  // Filter out results that are too extreme to format readably
  const viable = scored.filter((s) => s.result > 1e-30 && s.result < 1e30);
  if (viable.length === 0) return [];

  const comprehensible = viable.filter((s) => s.comprehensible);
  const absurd = viable.filter((s) => !s.comprehensible);

  const picks: ScoredUnit[] = [];
  const usedIds = new Set<string>();

  function addPick(pool: ScoredUnit[]): boolean {
    const available = pool.filter((s) => !usedIds.has(s.unit.id));
    if (available.length === 0) return false;
    const idx = Math.floor(rng() * available.length);
    const pick = available[idx];
    picks.push(pick);
    usedIds.add(pick.unit.id);
    return true;
  }

  // First pick: prefer comprehensible
  if (comprehensible.length > 0) {
    addPick(comprehensible);
  } else {
    addPick(viable);
  }

  // Second pick
  if (comprehensible.length > 1) {
    addPick(comprehensible);
  } else if (viable.length > 1) {
    addPick(viable);
  }

  // Third pick (~60% chance): prefer absurd for comic contrast
  if (viable.length > 2 && rng() < 0.6) {
    if (absurd.length > 0) {
      addPick(absurd);
    } else {
      addPick(viable);
    }
  }

  return picks;
}

function formatConversionValue(value: number): string {
  return formatNumber(value);
}

function unitDisplayName(unit: SillyUnitData, value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return rounded === 1 ? unit.name_singular : unit.name;
}

export function buildConversion(scored: ScoredUnit): SillyConversion {
  return {
    unitName: unitDisplayName(scored.unit, scored.result),
    value: scored.result,
    formattedValue: formatConversionValue(scored.result),
    unitId: scored.unit.id,
  };
}

// ── Client-safe Public API ────────────────────────────────────────────────

/**
 * Client-side remix: re-pick conversions with a different seed to show
 * the user fresh silly-unit comparisons without a server round-trip.
 */
export function remixConversions(
  measurements: MeasurementWithConversions[],
  sillyUnits: SillyUnitData[],
  seed: number,
): MeasurementWithConversions[] {
  const unitsByDimension = new Map<string, SillyUnitData[]>();
  for (const u of sillyUnits) {
    const list = unitsByDimension.get(u.dimension) ?? [];
    list.push(u);
    unitsByDimension.set(u.dimension, list);
  }

  return measurements.map((m, idx) => {
    const perMeasurementSeed = hashString(`${seed}:${m.id}:${idx}`);
    const rng = mulberry32(perMeasurementSeed);

    let dimensionUnits: SillyUnitData[] = [];

    if (m.conversions.length > 0) {
      const existingUnitId = m.conversions[0].unitId;
      const matchedUnit = sillyUnits.find((u) => u.id === existingUnitId);
      if (matchedUnit) {
        dimensionUnits = unitsByDimension.get(matchedUnit.dimension) ?? [];
      }
    }

    if (dimensionUnits.length === 0) {
      for (const [, units] of unitsByDimension) {
        if (units.length > 0) {
          dimensionUnits = units;
          break;
        }
      }
    }

    const scored = scoreUnits(m.value, dimensionUnits);
    const picks = pickUnits(scored, rng);
    const conversions = picks.map(buildConversion);

    return {
      ...m,
      conversions,
    };
  });
}
