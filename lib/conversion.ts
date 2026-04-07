import type { ThingWithDetails } from "@/lib/data";
import { getDb, schema } from "@/db";
import { formatSIValue } from "@/lib/format";

// Re-export everything from the client-safe module so existing imports still work
export type {
  SillyConversion,
  MeasurementWithConversions,
  SillyUnitData,
} from "@/lib/conversion-client";
export { remixConversions } from "@/lib/conversion-client";

import {
  type SillyUnitData,
  type MeasurementWithConversions,
  hashString,
  mulberry32,
  scoreUnits,
  pickUnits,
  buildConversion,
} from "@/lib/conversion-client";

// ── Server-only Public API ────────────────────────────────────────────────

/**
 * Main conversion function: takes a ThingWithDetails, fetches matching
 * silly units from the database, and returns measurements with silly conversions.
 */
export function computeConversions(thing: ThingWithDetails): MeasurementWithConversions[] {
  const db = getDb();

  // Fetch all silly units grouped by dimension
  const allUnits = db.select().from(schema.sillyUnits).all();
  const unitsByDimension = new Map<string, SillyUnitData[]>();
  for (const u of allUnits) {
    const list = unitsByDimension.get(u.dimension) ?? [];
    list.push(u);
    unitsByDimension.set(u.dimension, list);
  }

  return thing.measurements
    .map((m) => {
      const dimensionUnits = unitsByDimension.get(m.dimension) ?? [];
      const seed = hashString(`${thing.slug}:${m.id}`);
      const rng = mulberry32(seed);

      const scored = scoreUnits(m.value, dimensionUnits);
      const picks = pickUnits(scored, rng);
      const conversions = picks.map(buildConversion);

      return {
        id: m.id,
        label: m.label,
        value: m.value,
        si_unit: m.si_unit,
        note: m.note ?? null,
        formattedValue: formatSIValue(m.value, m.si_unit),
        conversions,
      };
    })
    .filter((m) => m.conversions.length > 0);
}
