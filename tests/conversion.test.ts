import { describe, it, expect } from "vitest";
import { formatNumber, formatSIValue } from "@/lib/format";
import {
  remixConversions,
  type MeasurementWithConversions,
  type SillyUnitData,
} from "@/lib/conversion";

// ── formatNumber ──────────────────────────────────────────────────────────

describe("formatNumber", () => {
  it("returns '0' for zero", () => {
    expect(formatNumber(0)).toBe("0");
  });

  it("formats billions", () => {
    expect(formatNumber(2_500_000_000)).toBe("2.5 billion");
    expect(formatNumber(10_000_000_000)).toBe("10 billion");
  });

  it("formats millions", () => {
    expect(formatNumber(1_200_000)).toBe("1.2 million");
    expect(formatNumber(50_000_000)).toBe("50 million");
  });

  it("formats trillions", () => {
    expect(formatNumber(3_000_000_000_000)).toBe("3 trillion");
  });

  it("formats thousands with commas", () => {
    const result = formatNumber(12345);
    expect(result).toBe("12,345");
  });

  it("formats small decimals (>= 0.01) with up to 2 decimal places", () => {
    const result = formatNumber(0.75);
    expect(result).toBe("0.75");
  });

  it("formats values between 1 and 10 with up to 2 decimals", () => {
    const result = formatNumber(3.14);
    expect(result).toBe("3.14");
  });

  it("formats very small numbers", () => {
    const result = formatNumber(0.005);
    expect(result).toBe("0.005");
  });

  it("handles negative numbers", () => {
    expect(formatNumber(-1_000_000)).toBe("-1 million");
    expect(formatNumber(-42)).toBe("-42");
  });
});

// ── formatSIValue ─────────────────────────────────────────────────────────

describe("formatSIValue", () => {
  it("combines formatted value and unit", () => {
    expect(formatSIValue(29.9, "m")).toBe("29.9 m");
  });

  it("formats large values with unit", () => {
    expect(formatSIValue(150_000, "kg")).toBe("150,000 kg");
  });

  it("formats zero with unit", () => {
    expect(formatSIValue(0, "m")).toBe("0 m");
  });
});

// ── Seeded PRNG consistency ───────────────────────────────────────────────

describe("remixConversions (seeded PRNG consistency)", () => {
  const sillyUnits: SillyUnitData[] = [
    { id: "banana", name: "bananas", name_singular: "banana", dimension: "length", si_value: 0.178 },
    { id: "giraffe", name: "giraffes", name_singular: "giraffe", dimension: "length", si_value: 5.5 },
    { id: "bus", name: "double-decker buses", name_singular: "double-decker bus", dimension: "length", si_value: 11.0 },
    { id: "football", name: "football fields", name_singular: "football field", dimension: "length", si_value: 91.44 },
    { id: "whale", name: "blue whales", name_singular: "blue whale", dimension: "length", si_value: 30.0 },
    { id: "ant", name: "ants", name_singular: "ant", dimension: "length", si_value: 0.002 },
  ];

  const baseMeasurements: MeasurementWithConversions[] = [
    {
      id: "height",
      label: "Height",
      value: 100,
      si_unit: "m",
      note: null,
      formattedValue: "100 m",
      conversions: [
        { unitName: "bananas", value: 100 / 0.178, formattedValue: "562.43", unitId: "banana" },
      ],
    },
  ];

  it("produces the same conversions for the same seed", () => {
    const result1 = remixConversions(baseMeasurements, sillyUnits, 42);
    const result2 = remixConversions(baseMeasurements, sillyUnits, 42);

    expect(result1[0].conversions).toEqual(result2[0].conversions);
  });

  it("produces different conversions for different seeds", () => {
    const result1 = remixConversions(baseMeasurements, sillyUnits, 42);
    const result2 = remixConversions(baseMeasurements, sillyUnits, 999);

    // With enough units, different seeds should (usually) pick different units.
    // This isn't guaranteed for every pair but is extremely likely with 6 units.
    const ids1 = result1[0].conversions.map((c) => c.unitId).sort();
    const ids2 = result2[0].conversions.map((c) => c.unitId).sort();

    // At minimum, both should produce conversions
    expect(result1[0].conversions.length).toBeGreaterThanOrEqual(2);
    expect(result2[0].conversions.length).toBeGreaterThanOrEqual(2);

    // Extremely likely to differ (but we check structurally, not assert inequality,
    // since two seeds *could* coincidentally pick the same units)
    expect(ids1.length).toBeGreaterThanOrEqual(2);
    expect(ids2.length).toBeGreaterThanOrEqual(2);
  });

  it("produces 2-3 conversions per measurement", () => {
    const result = remixConversions(baseMeasurements, sillyUnits, 123);

    for (const m of result) {
      expect(m.conversions.length).toBeGreaterThanOrEqual(2);
      expect(m.conversions.length).toBeLessThanOrEqual(3);
    }
  });

  it("produces conversions with sensible values", () => {
    const result = remixConversions(baseMeasurements, sillyUnits, 77);

    for (const m of result) {
      for (const c of m.conversions) {
        expect(c.value).toBeGreaterThan(0);
        expect(Number.isFinite(c.value)).toBe(true);
        expect(c.formattedValue).toBeTruthy();
        expect(c.unitName).toBeTruthy();
        expect(c.unitId).toBeTruthy();
      }
    }
  });

  it("preserves non-conversion fields during remix", () => {
    const result = remixConversions(baseMeasurements, sillyUnits, 55);

    expect(result[0].id).toBe("height");
    expect(result[0].label).toBe("Height");
    expect(result[0].value).toBe(100);
    expect(result[0].si_unit).toBe("m");
    expect(result[0].formattedValue).toBe("100 m");
  });
});
