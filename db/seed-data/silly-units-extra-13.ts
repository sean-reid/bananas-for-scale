// Extra silly units batch 13 — filling length & mass magnitude gaps

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Length ~1e-8 (nanoscale, 7nm–100nm gap) ─────────────────────────────

  // Cell membrane thickness ~7–8 nm = 7.5e-9 m
  { name: "Cell membranes", name_singular: "Cell membrane", dimension: "length", si_value: 7.5e-9 },
  // Smoke particle diameter ~30 nm = 3e-8 m
  { name: "Smoke particles", name_singular: "Smoke particle", dimension: "length", si_value: 3e-8 },
  // Modern chip transistor gate length (7 nm process) ~7e-9 m
  { name: "Chip transistor gates", name_singular: "Chip transistor gate", dimension: "length", si_value: 7e-9 },

  // ── Length ~1e-4 to 1e-3 (sub-millimeter gap) ───────────────────────────

  // Staple wire diameter ~0.5 mm = 5e-4 m — already have 5e-4, use pencil lead
  // Mechanical pencil lead diameter (0.7 mm) = 7e-4 m
  { name: "Pencil lead widths", name_singular: "Pencil lead width", dimension: "length", si_value: 7e-4 },
  // Poppy seed diameter ~1 mm = 1e-3 m
  { name: "Poppy seeds", name_singular: "Poppy seed", dimension: "length", si_value: 1e-3 },

  // ── Length ~1e5 (100–500 km gap) ─────────────────────────────────────────

  // Big Island of Hawaii length ~150 km = 1.5e5 m
  { name: "Big Island lengths", name_singular: "Big Island length", dimension: "length", si_value: 150000 },
  // Luxembourg north-to-south ~82 km = 8.2e4 m — but 82000 already exists (check: it's in the list). Use different:
  // Rhode Island north-to-south ~77 km = 7.7e4 m — no existing. But 82000 exists so close.
  // Jamaica length ~235 km = 2.35e5 m
  { name: "Jamaica lengths", name_singular: "Jamaica length", dimension: "length", si_value: 235000 },

  // ── Length ~1e8 to 1e11 (astronomical gap) ──────────────────────────────

  // Earth circumference ~4.007e7 m
  { name: "Earth circumferences", name_singular: "Earth circumference", dimension: "length", si_value: 4.007e7 },
  // Sun diameter ~1.3927e9 m
  { name: "Sun diameters", name_singular: "Sun diameter", dimension: "length", si_value: 1.3927e9 },
  // Earth–Moon distance ~3.844e8 m (already exists as 384400000 — skip, use Mars orbit)
  // Mars orbit radius (semi-major axis) ~2.279e11 m
  { name: "Mars orbit radii", name_singular: "Mars orbit radius", dimension: "length", si_value: 2.279e11 },

  // ── Mass ~1e-14 to 1e-13 (between 1e-15 and 1e-12) ─────────────────────

  // Red blood cell mass ~2.7e-14 kg
  { name: "Red blood cell weights", name_singular: "Red blood cell weight", dimension: "mass", si_value: 2.7e-14 },
  // White blood cell mass ~1e-12 kg — already at 1e-12, try:
  // Typical human cell mass ~1e-12 kg — same. Use:
  // E. coli bacterium mass ~1e-15 kg — already at 1e-15. Use:
  // Platelet mass ~1e-13 kg
  { name: "Platelet weights", name_singular: "Platelet weight", dimension: "mass", si_value: 1e-13 },
  // Yeast cell mass ~5e-11 kg — gap between 1e-12 and 1e-8
  { name: "Yeast cells", name_singular: "Yeast cell", dimension: "mass", si_value: 5e-11 },

  // ── Mass ~1e6 (1000–5000 tonne gap) ─────────────────────────────────────

  // Space Shuttle at launch ~2.04e6 kg (orbiter already exists at 78000, this is full stack)
  { name: "Space Shuttle launches", name_singular: "Space Shuttle launch", dimension: "mass", si_value: 2.04e6 },
  // M1 Abrams tank ~6.2e4 kg
  { name: "M1 Abrams tanks", name_singular: "M1 Abrams tank", dimension: "mass", si_value: 6.2e4 },

  // ── Mass ~1e10 to 1e11 (between 6e9 and 5.5e12) ────────────────────────

  // Great Wall of China estimated mass ~3e10 kg
  { name: "Great Wall masses", name_singular: "Great Wall mass", dimension: "mass", si_value: 3e10 },
  // Hoover Dam mass ~6.6e9 kg — too close to 6e9 (Great Pyramid). Use:
  // Mount Everest estimated mass ~3.57e11 kg — fills the 1e11 gap nicely
  { name: "Mount Everest masses", name_singular: "Mount Everest mass", dimension: "mass", si_value: 3.57e11 },
];
