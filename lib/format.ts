// ── Number Formatting Utilities ───────────────────────────────────────────

const MAGNITUDE_SUFFIXES: [number, string][] = [
  [1e30, "nonillion"],
  [1e27, "octillion"],
  [1e24, "septillion"],
  [1e21, "sextillion"],
  [1e18, "quintillion"],
  [1e15, "quadrillion"],
  [1e12, "trillion"],
  [1e9, "billion"],
  [1e6, "million"],
];

// Mirror of magnitude suffixes for small numbers
const SMALL_SUFFIXES: [number, string][] = [
  [1e-6, "millionths"],
  [1e-9, "billionths"],
  [1e-12, "trillionths"],
  [1e-15, "quadrillionths"],
  [1e-18, "quintillionths"],
  [1e-21, "sextillionths"],
  [1e-24, "septillionths"],
  [1e-27, "octillionths"],
  [1e-30, "nonillionths"],
];

/**
 * Formats the "coefficient" part of a number (the part before a suffix).
 * Keeps it clean: "2.9", "57", "150,000"
 */
function formatCoefficient(n: number): string {
  if (n >= 1000000) {
    // Recursively format with magnitude words
    return formatNumber(n);
  }
  if (n >= 1000) {
    return Math.round(n).toLocaleString("en-US");
  }
  if (n >= 100) {
    return Math.round(n).toString();
  }
  if (n >= 10) {
    return n.toFixed(1).replace(/\.0$/, "");
  }
  return n.toFixed(1).replace(/\.0$/, "");
}

/**
 * Smart number formatting:
 *
 * Large:  "1.2 million", "340 billion", "2.9 trillion nonillion"
 * Normal: "29.9", "150,000", "3"
 * Small:  "33 thousandths", "710 millionths", "5 trillionths"
 */
export function formatNumber(n: number): string {
  if (n === 0) return "0";

  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";

  // Large numbers: use magnitude suffixes
  for (const [threshold, suffix] of MAGNITUDE_SUFFIXES) {
    if (abs >= threshold * 0.99) {
      const coeff = formatCoefficient(abs / threshold);
      return `${sign}${coeff} ${suffix}`;
    }
  }

  // >= 1000: use commas
  if (abs >= 1000) {
    return `${sign}${Math.round(abs).toLocaleString("en-US")}`;
  }

  // >= 100: round to integer
  if (abs >= 100) {
    return `${sign}${Math.round(abs)}`;
  }

  // >= 10: one decimal
  if (abs >= 10) {
    return `${sign}${abs.toFixed(1).replace(/\.0$/, "")}`;
  }

  // >= 1: two decimals
  if (abs >= 1) {
    return `${sign}${abs.toFixed(2).replace(/\.?0+$/, "")}`;
  }

  // 0.1 - 1: tenths
  if (abs >= 0.1) {
    const tenths = abs * 10;
    return `${sign}${formatCoefficient(tenths)} tenths`;
  }

  // 0.01 - 0.1: hundredths
  if (abs >= 0.01) {
    const hundredths = abs * 100;
    return `${sign}${formatCoefficient(hundredths)} hundredths`;
  }

  // 0.001 - 0.01: thousandths
  if (abs >= 0.001) {
    const thousandths = abs * 1000;
    return `${sign}${formatCoefficient(thousandths)} thousandths`;
  }

  // Very small: use mirrored magnitude suffixes
  for (const [threshold, suffix] of SMALL_SUFFIXES) {
    if (abs >= threshold * 0.99) {
      const coeff = formatCoefficient(abs / threshold);
      return `${sign}${coeff} ${suffix}`;
    }
  }

  // Fallback: use the smallest suffix available and let the coefficient handle the rest
  const smallestSuffix = SMALL_SUFFIXES[SMALL_SUFFIXES.length - 1];
  const fallbackCoeff = abs / smallestSuffix[0];
  return `${sign}${formatCoefficient(fallbackCoeff)} ${smallestSuffix[1]}`;
}

/**
 * Format an SI measurement value with its unit.
 */
export function formatSIValue(value: number, unit: string): string {
  return `${formatNumber(value)} ${unit}`;
}
