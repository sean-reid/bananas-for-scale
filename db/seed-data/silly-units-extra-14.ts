// Extra silly units batch 14 — 50 length + 30 mass gap-fillers

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LENGTH (50 units)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Subatomic gap: 4.6e-15 → 1e-12 (217x gap) ─────────────────────────

  // Alpha particle diameter ~3.6 fm = 3.6e-15 m
  { name: "Alpha particles", name_singular: "Alpha particle", dimension: "length", si_value: 3.6e-15 },
  // Carbon nucleus diameter ~5.4 fm = 5.4e-15 m
  { name: "Carbon nuclei", name_singular: "Carbon nucleus", dimension: "length", si_value: 5.4e-15 },
  // Uranium nucleus diameter ~15 fm = 1.5e-14 m
  { name: "Uranium nuclei", name_singular: "Uranium nucleus", dimension: "length", si_value: 1.5e-14 },
  // Soft X-ray wavelength ~1 nm = 1e-9 but hard X-ray ~0.01 nm, try:
  // Extreme UV wavelength ~13.5 nm = 1.35e-8 m — no, that's already covered.
  // Typical nuclear diameter range ends ~1.5e-14. Gap to 1e-12 still large.
  // Compton wavelength of electron ~2.43e-12 m
  { name: "Compton wavelengths", name_singular: "Compton wavelength", dimension: "length", si_value: 2.43e-12 },
  // Hydrogen atom covalent bond length ~7.4e-11 m — fills 5.3e-11 to 1.06e-10
  // Actually that's between existing atoms. Instead:
  // Picometer range ~1e-11: van der Waals radius of hydrogen ~1.2e-10 — covered
  // Hard X-ray wavelength ~1e-11 m = 10 pm
  { name: "Hard X-ray wavelengths", name_singular: "Hard X-ray wavelength", dimension: "length", si_value: 1e-11 },

  // ── Subatomic gap: 2.4e-12 → 5.3e-11 (22x gap) ────────────────────────

  // Carbon-carbon bond length ~1.54e-10 already exists. Try filling 2.4e-12 to 5.3e-11:
  // Soft X-ray wavelength ~1e-10 — already at 1e-10.
  // Angstrom = 1e-10 already. Picorange:
  // Typical ion radius (Na+) ~1.02e-10 — too close to existing.
  // DNA base pair spacing ~3.4e-10 — already covered by nearby atoms. Use:
  // Visible light wavelength (red) ~700 nm — already have green at 5.5e-7
  { name: "Red light wavelengths", name_singular: "Red light wavelength", dimension: "length", si_value: 7e-7 },
  // Blue light wavelength ~470 nm = 4.7e-7
  { name: "Blue light wavelengths", name_singular: "Blue light wavelength", dimension: "length", si_value: 4.7e-7 },
  // UV-B wavelength ~300 nm = 3e-7
  { name: "UV-B wavelengths", name_singular: "UV-B wavelength", dimension: "length", si_value: 3e-7 },

  // ── Microscopic gap: 1e-5 → 7e-5 (7x gap) ─────────────────────────────

  // White blood cell diameter ~15 μm = 1.5e-5 m
  { name: "White blood cells", name_singular: "White blood cell", dimension: "length", si_value: 1.5e-5 },
  // Pollen grain diameter ~25 μm = 2.5e-5 m
  { name: "Pollen grain widths", name_singular: "Pollen grain width", dimension: "length", si_value: 2.5e-5 },
  // Dust mite body length ~300 μm = 3e-4 m — between 7e-5 and 3e-4 (salt grains)
  // Actually need between 1e-5 and 7e-5:
  // Amoeba diameter ~500 μm — no, that's 5e-4. Amoeba proteus is ~250–750 μm.
  // Typical plant cell ~50 μm = 5e-5 m
  { name: "Plant cells", name_singular: "Plant cell", dimension: "length", si_value: 5e-5 },

  // ── Small objects (filling out variety in well-covered ranges) ───────────

  // Paper thickness ~0.1 mm = 1e-4 m
  { name: "Paper thicknesses", name_singular: "Paper thickness", dimension: "length", si_value: 1e-4 },
  // Shirt button diameter ~1.1 cm = 1.1e-2 m
  { name: "Shirt buttons", name_singular: "Shirt button", dimension: "length", si_value: 1.1e-2 },
  // Standard die edge ~1.6 cm = 1.6e-2 m
  { name: "Dice edges", name_singular: "Die edge", dimension: "length", si_value: 1.6e-2 },
  // Thumb tack length ~1 cm = 1e-2 m
  { name: "Thumb tack lengths", name_singular: "Thumb tack length", dimension: "length", si_value: 1e-2 },
  // Cherry tomato diameter ~3 cm = 3e-2 m — same as bottle caps, close but diff item
  { name: "Cherry tomatoes", name_singular: "Cherry tomato", dimension: "length", si_value: 2.5e-2 },
  // Walnut diameter ~3.5 cm = 3.5e-2 m
  { name: "Walnut diameters", name_singular: "Walnut diameter", dimension: "length", si_value: 3.5e-2 },
  // Blueberry diameter ~1.5 cm = 1.5e-2 m
  { name: "Blueberry diameters", name_singular: "Blueberry diameter", dimension: "length", si_value: 1.5e-2 },
  // Grape diameter ~2 cm = 2e-2 m
  { name: "Grape diameters", name_singular: "Grape diameter", dimension: "length", si_value: 2e-2 },
  // Aspirin tablet diameter ~1.2 cm = 1.2e-2 m
  { name: "Aspirin tablets", name_singular: "Aspirin tablet", dimension: "length", si_value: 1.2e-2 },

  // ── Human scale ─────────────────────────────────────────────────────────

  // Human stride length ~0.75 m
  { name: "Human strides", name_singular: "Human stride", dimension: "length", si_value: 0.75 },
  // Human arm span ~1.7 m (roughly equals height)
  { name: "Human arm spans", name_singular: "Human arm span", dimension: "length", si_value: 1.7 },
  // Standard doorway height ~2.03 m
  { name: "Doorway heights", name_singular: "Doorway height", dimension: "length", si_value: 2.03 },
  // Canoe paddle length ~1.5 m — already have nearby. Try:
  // Parking space length ~5.5 m
  { name: "Parking spaces", name_singular: "Parking space", dimension: "length", si_value: 5.5 },
  // Shipping container length (20 ft) ~6.1 m
  { name: "Shipping containers", name_singular: "Shipping container", dimension: "length", si_value: 6.1 },
  // Telephone pole height ~12 m
  { name: "Telephone poles", name_singular: "Telephone pole", dimension: "length", si_value: 12 },
  // Tennis court length ~23.77 m
  { name: "Tennis court lengths", name_singular: "Tennis court length", dimension: "length", si_value: 23.77 },
  // Hockey rink length ~60.96 m
  { name: "Hockey rink lengths", name_singular: "Hockey rink length", dimension: "length", si_value: 60.96 },
  // Olympic swimming pool length ~50 m
  { name: "Olympic pool lengths", name_singular: "Olympic pool length", dimension: "length", si_value: 50 },
  // Statue of Liberty height (to torch) ~93 m
  { name: "Statue of Liberty heights", name_singular: "Statue of Liberty height", dimension: "length", si_value: 93 },

  // ── Large scale ─────────────────────────────────────────────────────────

  // Aircraft carrier length ~333 m
  { name: "Aircraft carrier lengths", name_singular: "Aircraft carrier length", dimension: "length", si_value: 333 },
  // Ski jump hill length ~120 m
  { name: "Ski jump hills", name_singular: "Ski jump hill", dimension: "length", si_value: 120 },
  // NASCAR oval track ~2.4 km = 2400 m
  { name: "NASCAR ovals", name_singular: "NASCAR oval", dimension: "length", si_value: 2400 },
  // Brooklyn Bridge length ~1834 m
  { name: "Brooklyn Bridge lengths", name_singular: "Brooklyn Bridge length", dimension: "length", si_value: 1834 },
  // Hoover Dam height ~221 m
  { name: "Hoover Dam heights", name_singular: "Hoover Dam height", dimension: "length", si_value: 221 },

  // ── Gap: 4.46e5 → 2.3e6 (5x) ──────────────────────────────────────────

  // Manhattan length ~21.6 km = 2.16e4 m — wait, that doesn't fill the gap.
  // Manhattan island length is ~21.6 km. But gap is 446 km to 2300 km.
  // Lake Tahoe length ~35 km = 3.5e4 — too small.
  // English Channel already at 3.3e4. Need between 4.46e5 and 2.3e6:
  // Delaware length ~154 km = 1.54e5 — too small.
  // Lake Michigan length ~494 km = 4.94e5 — just above the gap start
  { name: "Lake Michigan lengths", name_singular: "Lake Michigan length", dimension: "length", si_value: 4.94e5 },
  // Switzerland length (east-west) ~350 km = 3.5e5 — below gap start
  // Florida length ~800 km = 8e5 m
  { name: "Florida lengths", name_singular: "Florida length", dimension: "length", si_value: 8e5 },
  // California length ~1240 km = 1.24e6 m
  { name: "California lengths", name_singular: "California length", dimension: "length", si_value: 1.24e6 },

  // ── Gap: 1.39e9 (Sun diameters) → 1.5e11 (AU) — 107x ──────────────────

  // Mercury orbit radius ~5.79e10 m
  { name: "Mercury orbit radii", name_singular: "Mercury orbit radius", dimension: "length", si_value: 5.79e10 },
  // Light-second ~3e8 m
  { name: "Light-seconds", name_singular: "Light-second", dimension: "length", si_value: 2.998e8 },
  // Light-minute ~1.8e10 m
  { name: "Light-minutes", name_singular: "Light-minute", dimension: "length", si_value: 1.799e10 },

  // ── Gap: 2.28e11 (Mars orbit) → 2.4e13 (Voyager 1) — 105x ─────────────

  // Jupiter orbit radius ~7.78e11 m
  { name: "Jupiter orbit radii", name_singular: "Jupiter orbit radius", dimension: "length", si_value: 7.78e11 },
  // Saturn orbit radius ~1.43e12 m
  { name: "Saturn orbit radii", name_singular: "Saturn orbit radius", dimension: "length", si_value: 1.43e12 },
  // Neptune orbit radius ~4.5e12 m
  { name: "Neptune orbit radii", name_singular: "Neptune orbit radius", dimension: "length", si_value: 4.5e12 },

  // ── Gap: 2.4e13 (Voyager 1) → 9.46e15 (light-year) — 394x ─────────────

  // Oort Cloud inner edge ~3e14 m (2000 AU)
  { name: "Oort Cloud edges", name_singular: "Oort Cloud edge", dimension: "length", si_value: 3e14 },
  // Light-day ~2.59e13 m
  { name: "Light-days", name_singular: "Light-day", dimension: "length", si_value: 2.59e13 },

  // ── Gap: 4.01e16 → 3.6e17 (9x) ────────────────────────────────────────

  // Sirius distance ~8.6 ly = 8.13e16 m
  { name: "Sirius distances", name_singular: "Sirius distance", dimension: "length", si_value: 8.13e16 },

  // ── Gap: 3.6e17 → 1e21 (2778x) ────────────────────────────────────────

  // Eagle Nebula width ~5.5 ly across pillars = ~5.2e16 — too small. Full nebula ~70 ly = 6.6e17
  // Pleiades cluster diameter ~13 ly = ~1.23e17 — between existing, not in gap.
  // Globular cluster diameter ~100 ly = ~9.5e17
  { name: "Globular cluster widths", name_singular: "Globular cluster width", dimension: "length", si_value: 9.5e17 },
  // Large Magellanic Cloud diameter ~14,000 ly = ~1.32e20
  { name: "Magellanic Cloud widths", name_singular: "Magellanic Cloud width", dimension: "length", si_value: 1.32e20 },
  // Sagittarius A* orbit (S2 star) ~2.4e14 m — too small.
  // Carina Nebula width ~460 ly = ~4.35e18
  { name: "Carina Nebula widths", name_singular: "Carina Nebula width", dimension: "length", si_value: 4.35e18 },

  // ═══════════════════════════════════════════════════════════════════════════
  // MASS (30 units)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Gap: 4.2e-21 (Ribosome) → 1e-18 (Virus) — 238x ────────────────────

  // Mitochondrion mass ~1e-16 kg — actually that's past virus.
  // Mitochondrion mass really ~1e-17 to 1e-16 kg — still past virus.
  // Typical small virus (rhinovirus) ~1e-20 kg — fills nicely between 4.2e-21 and 1e-18
  { name: "Rhinovirus particles", name_singular: "Rhinovirus particle", dimension: "mass", si_value: 1e-20 },
  // Large protein complex (nuclear pore) ~1.2e-19 kg
  { name: "Nuclear pore complexes", name_singular: "Nuclear pore complex", dimension: "mass", si_value: 1.2e-19 },

  // ── Gap: 1e-18 (Virus) → 1e-15 (Bacteria) — 1000x ─────────────────────

  // Large virus (Mimivirus) ~1e-17 kg
  { name: "Mimivirus particles", name_singular: "Mimivirus particle", dimension: "mass", si_value: 1e-17 },
  // Mitochondrion mass ~1e-16 kg
  { name: "Mitochondria", name_singular: "Mitochondrion", dimension: "mass", si_value: 1e-16 },

  // ── Gap: 5e-11 (Yeast) → 1e-8 (Pollen) — 200x ────────────────────────

  // Paramecium mass ~5e-10 kg
  { name: "Paramecia", name_singular: "Paramecium", dimension: "mass", si_value: 5e-10 },
  // Fruit fly egg mass ~3e-9 kg
  { name: "Fruit fly eggs", name_singular: "Fruit fly egg", dimension: "mass", si_value: 3e-9 },

  // ── Gap: 6.5e-8 (Sand grains) → 1e-6 (Grains of sand) — 15x ──────────
  // (These are different sizes of sand — fill with something between)
  // Snowflake mass ~3e-7 kg (large fluffy flake)? No, typical snowflake ~3e-6 g = 3e-9 kg.
  // Actually a snowflake is ~3 μg = 3e-9 kg — doesn't fill this gap.
  // Spider silk strand (1 m) ~3e-7 kg
  { name: "Spider silk strands", name_singular: "Spider silk strand", dimension: "mass", si_value: 3e-7 },

  // ── Gap: 2.5e-6 (Mosquito) → 2.5e-5 (Rice) — 10x ─────────────────────

  // Fruit fly mass ~8e-7 kg — just below mosquito, good
  // Actually that's below not in gap. Ant mass ~1e-6 to 2e-6 — same range.
  // Housefly mass ~1.2e-5 kg
  { name: "Housefly weights", name_singular: "Housefly weight", dimension: "mass", si_value: 1.2e-5 },

  // ── Gap: 5e-5 (Water drops) → 5e-4 (Hummingbird eggs) — 10x ───────────

  // Raindrop mass ~5e-5 already (Water drops).
  // Ladybug mass ~2e-5 kg — just before gap
  // Sunflower seed mass ~5e-5 — same as water drop.
  // Popcorn kernel mass ~1.5e-4 kg
  { name: "Popcorn kernels", name_singular: "Popcorn kernel", dimension: "mass", si_value: 1.5e-4 },
  // Honeybee mass ~1e-4 kg
  { name: "Honeybee weights", name_singular: "Honeybee weight", dimension: "mass", si_value: 1e-4 },

  // ── Gap: 5e-3 (US nickels) → 4.59e-2 (Golf balls) — 9x ───────────────

  // AAA battery mass ~11.5 g = 1.15e-2 kg
  { name: "AAA batteries", name_singular: "AAA battery", dimension: "mass", si_value: 1.15e-2 },
  // Standard die mass ~4 g = 4e-3 kg — just below nickel, hmm.
  // Strawberry mass ~12 g = 1.2e-2 kg
  { name: "Strawberry weights", name_singular: "Strawberry weight", dimension: "mass", si_value: 1.2e-2 },
  // AA battery mass ~23 g = 2.3e-2 kg
  { name: "AA batteries", name_singular: "AA battery", dimension: "mass", si_value: 2.3e-2 },

  // ── Medium mass variety ─────────────────────────────────────────────────

  // Lemon mass ~100 g = 0.1 kg — same as newborn panda, try:
  // Orange mass ~180 g = 0.18 kg
  { name: "Navel oranges", name_singular: "Navel orange", dimension: "mass", si_value: 0.18 },
  // Can of soda ~355 g = 0.355 kg
  { name: "Soda cans", name_singular: "Soda can", dimension: "mass", si_value: 0.355 },
  // Newborn baby mass ~3.5 kg
  { name: "Newborn babies", name_singular: "Newborn baby", dimension: "mass", si_value: 3.5 },
  // Dalmatian mass ~27 kg
  { name: "Dalmatian dogs", name_singular: "Dalmatian dog", dimension: "mass", si_value: 27 },
  // Kangaroo mass ~66 kg
  { name: "Red kangaroos", name_singular: "Red kangaroo", dimension: "mass", si_value: 66 },
  // Washing machine mass ~80 kg
  { name: "Washing machines", name_singular: "Washing machine", dimension: "mass", si_value: 80 },
  // Motorcycle mass ~200 kg
  { name: "Motorcycles", name_singular: "Motorcycle", dimension: "mass", si_value: 200 },
  // Bathtub full of water ~300 kg (standard 300L tub)
  { name: "Full bathtubs", name_singular: "Full bathtub", dimension: "mass", si_value: 300 },

  // ── Gap: 7.3e6 (Eiffel Tower) → 5.23e7 (Titanic) — 7x ────────────────

  // Big Ben (Elizabeth Tower) mass ~8600 tonnes = 8.6e6 — but that's the bell at 13.7t.
  // Elizabeth Tower total ~8200 tonnes including structure
  // Statue of Unity mass ~1800 tonnes = 1.8e6 — below Eiffel Tower
  // Brooklyn Bridge mass ~14,680 tonnes = 1.468e7 kg
  { name: "Brooklyn Bridge masses", name_singular: "Brooklyn Bridge mass", dimension: "mass", si_value: 1.468e7 },

  // ── Gap: 1e8 (Aircraft carrier) → 6e9 (Great Pyramid) — 60x ───────────

  // Garbage truck loaded mass ~25 tonnes = 2.5e4 — too small.
  // Cement mixer loaded ~30 tonnes = 3e4 — too small.
  // These are vehicles, need bigger:
  // Cruise ship mass ~100,000 tonnes = 1e8 — same as carrier
  // Large oil tanker (VLCC) ~300,000 tonnes full = 3e8 kg
  { name: "Supertanker loads", name_singular: "Supertanker load", dimension: "mass", si_value: 3e8 },
  // Golden Gate Bridge mass ~8.05e8 kg
  { name: "Golden Gate Bridge masses", name_singular: "Golden Gate Bridge mass", dimension: "mass", si_value: 8.05e8 },
  // Empire State Building mass ~3.65e8 kg
  { name: "Empire State Building masses", name_singular: "Empire State Building mass", dimension: "mass", si_value: 3.65e8 },
  // Hoover Dam mass ~6.6e9 kg — just above gap start, fills nicely
  { name: "Hoover Dam masses", name_singular: "Hoover Dam mass", dimension: "mass", si_value: 6.6e9 },

  // ── Gap: 3e10 → 3.57e11 (12x) ─────────────────────────────────────────

  // Large asteroid (Ceres?) no, too big. Smaller:
  // Christ the Redeemer mass ~635 tonnes = 6.35e5 — too small.
  // Actually need between 3e10 and 3.57e11:
  // Large lake water mass: Lake Tahoe ~1.5e14 — too big
  // Large building: Pentagon ~6e8 — too small
  // Water in a large reservoir ~1e11 kg
  { name: "Reservoir water masses", name_singular: "Reservoir water mass", dimension: "mass", si_value: 1e11 },

  // ── More mass variety ──────────────────────────────────────────────────

  // Garbage truck loaded ~25 tonnes = 2.5e4 kg
  { name: "Loaded garbage trucks", name_singular: "Loaded garbage truck", dimension: "mass", si_value: 2.5e4 },
  // Cement mixer loaded ~30 tonnes = 3e4 kg
  { name: "Loaded cement mixers", name_singular: "Loaded cement mixer", dimension: "mass", si_value: 3e4 },
  // Train car loaded (freight) ~100 tonnes = 1e5 kg
  { name: "Loaded freight cars", name_singular: "Loaded freight car", dimension: "mass", si_value: 1e5 },
];
