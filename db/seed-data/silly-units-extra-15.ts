// Extra silly units batch 15 — 100 length + 30 mass units
// Focus: pack the 0.01m–1000m human-to-building range for length

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LENGTH (100 units)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── 0.01–0.05m (small objects, coins, bits) ─────────────────────────────

  // US penny diameter ~19.05 mm
  { name: "Penny diameters", name_singular: "Penny diameter", dimension: "length", si_value: 0.01905 },
  // US dime diameter ~17.9 mm
  { name: "Dime diameters", name_singular: "Dime diameter", dimension: "length", si_value: 0.01791 },
  // US silver dollar diameter ~38.1 mm
  { name: "Silver dollar diameters", name_singular: "Silver dollar diameter", dimension: "length", si_value: 0.0381 },
  // Standard house key length ~57 mm
  { name: "House keys", name_singular: "House key", dimension: "length", si_value: 0.057 },
  // USB-A plug width ~12 mm
  { name: "USB plug widths", name_singular: "USB plug width", dimension: "length", si_value: 0.012 },
  // Standard crayon length ~89 mm
  { name: "Crayons", name_singular: "Crayon", dimension: "length", si_value: 0.089 },
  // AA battery length ~50.5 mm
  { name: "AA battery lengths", name_singular: "AA battery length", dimension: "length", si_value: 0.0505 },
  // Standard domino length ~48 mm
  { name: "Dominoes", name_singular: "Domino", dimension: "length", si_value: 0.048 },
  // Chess king height ~95 mm (tournament)
  { name: "Chess kings", name_singular: "Chess king", dimension: "length", si_value: 0.095 },
  // Guitar pick length ~26 mm
  { name: "Guitar picks", name_singular: "Guitar pick", dimension: "length", si_value: 0.026 },
  // Almond length ~22 mm
  { name: "Almond lengths", name_singular: "Almond length", dimension: "length", si_value: 0.022 },
  // Olive length ~30 mm
  { name: "Olive lengths", name_singular: "Olive length", dimension: "length", si_value: 0.03 },
  // Sugar cube side ~13 mm
  { name: "Sugar cubes", name_singular: "Sugar cube", dimension: "length", si_value: 0.013 },
  // SD card length ~32 mm
  { name: "SD card lengths", name_singular: "SD card length", dimension: "length", si_value: 0.032 },
  // AirPod length ~30.2 mm
  { name: "AirPod lengths", name_singular: "AirPod length", dimension: "length", si_value: 0.0302 },
  // Oreo cookie diameter ~44 mm
  { name: "Oreo diameters", name_singular: "Oreo diameter", dimension: "length", si_value: 0.044 },
  // Standard eraser length ~55 mm
  { name: "Pink erasers", name_singular: "Pink eraser", dimension: "length", si_value: 0.055 },
  // Postage stamp width ~25 mm
  { name: "Postage stamp widths", name_singular: "Postage stamp width", dimension: "length", si_value: 0.025 },
  // Lipstick tube length ~73 mm
  { name: "Lipstick tubes", name_singular: "Lipstick tube", dimension: "length", si_value: 0.073 },
  // Acorn length ~20 mm
  { name: "Acorn lengths", name_singular: "Acorn length", dimension: "length", si_value: 0.02 },
  // Matchbox length ~53 mm
  { name: "Matchbox lengths", name_singular: "Matchbox length", dimension: "length", si_value: 0.053 },
  // Credit card width (short side) ~54 mm
  { name: "Credit card widths", name_singular: "Credit card width", dimension: "length", si_value: 0.054 },

  // ── 0.05–0.3m (hand-sized objects) ──────────────────────────────────────

  // Standard tennis ball diameter ~67 mm
  { name: "Tennis ball diameters", name_singular: "Tennis ball diameter", dimension: "length", si_value: 0.067 },
  // Rubik's cube side ~57 mm
  { name: "Rubik's cubes", name_singular: "Rubik's cube", dimension: "length", si_value: 0.057 },
  // Standard banana width ~35 mm
  { name: "Banana widths", name_singular: "Banana width", dimension: "length", si_value: 0.035 },
  // Softball diameter ~97 mm
  { name: "Softball diameters", name_singular: "Softball diameter", dimension: "length", si_value: 0.097 },
  // Standard brick length ~20 cm
  { name: "Brick lengths", name_singular: "Brick length", dimension: "length", si_value: 0.2 },
  // Standard envelope length ~24 cm
  { name: "Envelope lengths", name_singular: "Envelope length", dimension: "length", si_value: 0.241 },
  // Kindle reader height ~16 cm
  { name: "Kindle heights", name_singular: "Kindle height", dimension: "length", si_value: 0.16 },
  // iPad height ~24.7 cm
  { name: "iPad heights", name_singular: "iPad height", dimension: "length", si_value: 0.247 },
  // Wine glass height ~23 cm
  { name: "Wine glass heights", name_singular: "Wine glass height", dimension: "length", si_value: 0.23 },
  // Standard loaf of bread length ~30 cm
  { name: "Bread loaves", name_singular: "Bread loaf", dimension: "length", si_value: 0.3 },

  // ── 0.3–1m (arm-length objects) ─────────────────────────────────────────

  // Wine bottle height ~30 cm
  { name: "Wine bottle heights", name_singular: "Wine bottle height", dimension: "length", si_value: 0.3 },
  // Laptop screen diagonal (15") ~38 cm
  { name: "Laptop screens", name_singular: "Laptop screen", dimension: "length", si_value: 0.381 },
  // Tennis racket length ~69 cm
  { name: "Tennis rackets", name_singular: "Tennis racket", dimension: "length", si_value: 0.686 },
  // Violin body length ~36 cm
  { name: "Violins", name_singular: "Violin", dimension: "length", si_value: 0.356 },
  // Umbrella length ~91 cm
  { name: "Umbrellas", name_singular: "Umbrella", dimension: "length", si_value: 0.91 },
  // Standard pillow length ~66 cm
  { name: "Pillow lengths", name_singular: "Pillow length", dimension: "length", si_value: 0.66 },
  // Snow shovel length ~130 cm — skip, goes to next range
  // Golf club (driver) ~114 cm
  { name: "Golf drivers", name_singular: "Golf driver", dimension: "length", si_value: 1.143 },
  // Walking cane ~91 cm
  { name: "Walking canes", name_singular: "Walking cane", dimension: "length", si_value: 0.914 },
  // Yoga block length ~23 cm — too small, skip
  // Trumpet length ~49 cm
  { name: "Trumpet lengths", name_singular: "Trumpet length", dimension: "length", si_value: 0.49 },
  // Cello body length ~76 cm
  { name: "Cello lengths", name_singular: "Cello length", dimension: "length", si_value: 0.76 },
  // Standard sword (arming sword) ~90 cm
  { name: "Arming swords", name_singular: "Arming sword", dimension: "length", si_value: 0.9 },
  // Hockey stick ~150 cm
  { name: "Hockey sticks", name_singular: "Hockey stick", dimension: "length", si_value: 1.5 },
  // Broom length ~140 cm
  { name: "Broom lengths", name_singular: "Broom length", dimension: "length", si_value: 1.4 },
  // Standard window width ~91 cm
  { name: "Window widths", name_singular: "Window width", dimension: "length", si_value: 0.914 },
  // Ski pole length ~120 cm
  { name: "Ski pole lengths", name_singular: "Ski pole length", dimension: "length", si_value: 1.2 },

  // ── 1–5m (human to room scale) ─────────────────────────────────────────

  // Ping pong table length ~2.74 m — same as pool table, skip
  // Foosball table length ~1.4 m
  { name: "Foosball tables", name_singular: "Foosball table", dimension: "length", si_value: 1.4 },
  // King size bed length ~2.03 m
  { name: "King size beds", name_singular: "King size bed", dimension: "length", si_value: 2.03 },
  // Standard door width ~0.91 m
  { name: "Door widths", name_singular: "Door width", dimension: "length", si_value: 0.914 },
  // Parking space length ~5.5 m
  { name: "Parking spaces", name_singular: "Parking space", dimension: "length", si_value: 5.5 },
  // Trampoline diameter ~4.3 m (14 ft)
  { name: "Trampoline diameters", name_singular: "Trampoline diameter", dimension: "length", si_value: 4.27 },
  // Diving board length ~3 m
  { name: "Diving boards", name_singular: "Diving board", dimension: "length", si_value: 3.0 },
  // Grand piano length ~2.7 m
  { name: "Grand piano lengths", name_singular: "Grand piano length", dimension: "length", si_value: 2.74 },
  // Christmas tree height ~2.1 m (7 ft standard)
  { name: "Christmas trees", name_singular: "Christmas tree", dimension: "length", si_value: 2.13 },
  // SUV length ~5.0 m
  { name: "SUV lengths", name_singular: "SUV length", dimension: "length", si_value: 5.0 },
  // Ambulance length ~6.7 m
  { name: "Ambulance lengths", name_singular: "Ambulance length", dimension: "length", si_value: 6.7 },
  // Shipping pallet length ~1.2 m
  { name: "Shipping pallets", name_singular: "Shipping pallet", dimension: "length", si_value: 1.22 },
  // RV length ~9.1 m (30 ft)
  { name: "RV lengths", name_singular: "RV length", dimension: "length", si_value: 9.14 },
  // Limousine length ~8.5 m
  { name: "Limousine lengths", name_singular: "Limousine length", dimension: "length", si_value: 8.5 },
  // Rowboat length ~3.7 m
  { name: "Rowboat lengths", name_singular: "Rowboat length", dimension: "length", si_value: 3.7 },
  // Standard sailboat ~8 m
  { name: "Sailboat lengths", name_singular: "Sailboat length", dimension: "length", si_value: 8.0 },

  // ── 5–50m (building scale) ──────────────────────────────────────────────

  // Volleyball court length ~18 m
  { name: "Volleyball courts", name_singular: "Volleyball court", dimension: "length", si_value: 18.0 },
  // Badminton court length ~13.4 m
  { name: "Badminton courts", name_singular: "Badminton court", dimension: "length", si_value: 13.4 },
  // Cricket pitch length ~20.12 m
  { name: "Cricket pitches", name_singular: "Cricket pitch", dimension: "length", si_value: 20.12 },
  // Boxing ring side ~6.1 m (20 ft)
  { name: "Boxing ring sides", name_singular: "Boxing ring side", dimension: "length", si_value: 6.1 },
  // Blue whale length ~30 m
  { name: "Blue whale lengths", name_singular: "Blue whale length", dimension: "length", si_value: 30.0 },
  // Semi truck with trailer ~22 m
  { name: "Semi truck lengths", name_singular: "Semi truck length", dimension: "length", si_value: 22.0 },
  // Railroad car length ~18.3 m
  { name: "Railroad car lengths", name_singular: "Railroad car length", dimension: "length", si_value: 18.3 },
  // Boeing 747 length ~70.7 m
  { name: "Boeing 747 lengths", name_singular: "Boeing 747 length", dimension: "length", si_value: 70.7 },
  // Soccer goal width ~7.32 m
  { name: "Soccer goal widths", name_singular: "Soccer goal width", dimension: "length", si_value: 7.32 },
  // Yacht length (typical) ~15 m
  { name: "Yacht lengths", name_singular: "Yacht length", dimension: "length", si_value: 15.0 },
  // Typical house width ~12 m
  { name: "House widths", name_singular: "House width", dimension: "length", si_value: 12.0 },
  // School bus length ~10.7 m
  { name: "School bus lengths", name_singular: "School bus length", dimension: "length", si_value: 10.7 },
  // Fire engine length ~10 m
  { name: "Fire engine lengths", name_singular: "Fire engine length", dimension: "length", si_value: 10.0 },

  // ── 50–500m (large structure scale) ─────────────────────────────────────

  // Olympic track straight ~84 m
  { name: "Olympic straights", name_singular: "Olympic straight", dimension: "length", si_value: 84.55 },
  // Titanic length ~269 m
  { name: "Titanic lengths", name_singular: "Titanic length", dimension: "length", si_value: 269.0 },
  // Vatican City width ~450 m (roughly)
  { name: "Vatican City widths", name_singular: "Vatican City width", dimension: "length", si_value: 450.0 },
  // Typical runway length ~3000 m — goes to next range
  // Washington Monument height ~169 m
  { name: "Washington Monument heights", name_singular: "Washington Monument height", dimension: "length", si_value: 169.0 },
  // Petronas Towers height ~452 m
  { name: "Petronas Tower heights", name_singular: "Petronas Tower height", dimension: "length", si_value: 451.9 },
  // Gateway Arch height ~192 m
  { name: "Gateway Arch heights", name_singular: "Gateway Arch height", dimension: "length", si_value: 192.0 },
  // Great Pyramid height ~146 m
  { name: "Great Pyramid heights", name_singular: "Great Pyramid height", dimension: "length", si_value: 146.6 },

  // ── 500–10000m (district scale) ─────────────────────────────────────────

  // Mall of America length ~520 m
  { name: "Mall of America lengths", name_singular: "Mall of America length", dimension: "length", si_value: 520.0 },
  // Central Park length ~4023 m
  { name: "Central Park lengths", name_singular: "Central Park length", dimension: "length", si_value: 4023.0 },
  // Monaco length ~3.5 km
  { name: "Monaco lengths", name_singular: "Monaco length", dimension: "length", si_value: 3500.0 },
  // Suez Canal width ~205 m
  { name: "Suez Canal widths", name_singular: "Suez Canal width", dimension: "length", si_value: 205.0 },
  // Strait of Gibraltar width ~14.3 km
  { name: "Strait of Gibraltar widths", name_singular: "Strait of Gibraltar width", dimension: "length", si_value: 14300.0 },
  // Typical airport runway ~3000 m
  { name: "Airport runway lengths", name_singular: "Airport runway length", dimension: "length", si_value: 3000.0 },
  // Isle of Man length ~52 km
  { name: "Isle of Man lengths", name_singular: "Isle of Man length", dimension: "length", si_value: 52000.0 },
  // Bermuda length ~34 km
  { name: "Bermuda lengths", name_singular: "Bermuda length", dimension: "length", si_value: 34000.0 },
  // Bahrain length ~48 km
  { name: "Bahrain lengths", name_singular: "Bahrain length", dimension: "length", si_value: 48000.0 },
  // Malta length ~27 km
  { name: "Malta lengths", name_singular: "Malta length", dimension: "length", si_value: 27000.0 },

  // ── Extra mid-range fillers ─────────────────────────────────────────────

  // Tuba length (uncoiled) ~5.5 m — nah, use coiled ~0.99 m
  // Standard guitar length ~1 m
  { name: "Guitar lengths", name_singular: "Guitar length", dimension: "length", si_value: 1.0 },
  // Bathrobe length ~130 cm
  { name: "Bathrobe lengths", name_singular: "Bathrobe length", dimension: "length", si_value: 1.3 },
  // Standard door height (interior) ~2.03 m — same as doorway heights, skip
  // Hammock length ~3.3 m
  { name: "Hammock lengths", name_singular: "Hammock length", dimension: "length", si_value: 3.3 },
  // Picnic table length ~1.8 m
  { name: "Picnic table lengths", name_singular: "Picnic table length", dimension: "length", si_value: 1.83 },
  // Ladder (extension) ~7.3 m
  { name: "Extension ladders", name_singular: "Extension ladder", dimension: "length", si_value: 7.32 },
  // Shuffleboard court ~15.2 m
  { name: "Shuffleboard courts", name_singular: "Shuffleboard court", dimension: "length", si_value: 15.24 },
  // Water polo pool ~30 m
  { name: "Water polo pools", name_singular: "Water polo pool", dimension: "length", si_value: 30.0 },
  // Squash court length ~9.75 m
  { name: "Squash court lengths", name_singular: "Squash court length", dimension: "length", si_value: 9.75 },

  // ═══════════════════════════════════════════════════════════════════════════
  // MASS (30 units)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── 0.01–1kg (light everyday objects) ───────────────────────────────────

  // Deck of cards ~100g
  { name: "Decks of cards", name_singular: "Deck of cards", dimension: "mass", si_value: 0.1 },
  // Standard coffee mug ~350g
  { name: "Coffee mugs", name_singular: "Coffee mug", dimension: "mass", si_value: 0.35 },
  // Sneaker ~310g
  { name: "Sneakers", name_singular: "Sneaker", dimension: "mass", si_value: 0.31 },
  // Bottle of wine ~1.2 kg (full)
  { name: "Wine bottles", name_singular: "Wine bottle", dimension: "mass", si_value: 1.2 },
  // Toaster ~1.8 kg
  { name: "Toasters", name_singular: "Toaster", dimension: "mass", si_value: 1.8 },
  // Can of soup ~400g
  { name: "Cans of soup", name_singular: "Can of soup", dimension: "mass", si_value: 0.4 },
  // Bag of sugar (2 lb) ~0.91 kg
  { name: "Bags of sugar", name_singular: "Bag of sugar", dimension: "mass", si_value: 0.91 },
  // Water bottle (500ml full) ~0.52 kg
  { name: "Water bottles", name_singular: "Water bottle", dimension: "mass", si_value: 0.52 },

  // ── 1–100kg (medium objects) ────────────────────────────────────────────

  // Carry-on suitcase (full) ~10 kg
  { name: "Carry-on suitcases", name_singular: "Carry-on suitcase", dimension: "mass", si_value: 10.0 },
  // Car tire ~10 kg — too close to suitcase
  // Microwave ~15 kg
  { name: "Microwaves", name_singular: "Microwave", dimension: "mass", si_value: 15.0 },
  // Dishwasher ~50 kg
  { name: "Dishwashers", name_singular: "Dishwasher", dimension: "mass", si_value: 50.0 },
  // Full beer keg ~72 kg
  { name: "Full beer kegs", name_singular: "Full beer keg", dimension: "mass", si_value: 72.0 },
  // Washing machine ~80 kg
  { name: "Washing machines", name_singular: "Washing machine", dimension: "mass", si_value: 80.0 },
  // Refrigerator ~100 kg
  { name: "Refrigerators", name_singular: "Refrigerator", dimension: "mass", si_value: 100.0 },
  // Standard safe ~90 kg
  { name: "Home safes", name_singular: "Home safe", dimension: "mass", si_value: 90.0 },
  // Couch ~65 kg
  { name: "Couches", name_singular: "Couch", dimension: "mass", si_value: 65.0 },

  // ── 100–10000kg (large objects) ─────────────────────────────────────────

  // Moose ~450 kg
  { name: "Moose", name_singular: "Moose", dimension: "mass", si_value: 450.0 },
  // Horse ~500 kg
  { name: "Horses", name_singular: "Horse", dimension: "mass", si_value: 500.0 },
  // Rhinoceros ~2200 kg
  { name: "Rhinoceroses", name_singular: "Rhinoceros", dimension: "mass", si_value: 2200.0 },
  // Pickup truck ~2500 kg
  { name: "Pickup trucks", name_singular: "Pickup truck", dimension: "mass", si_value: 2500.0 },
  // Concert grand piano ~480 kg
  { name: "Concert grand pianos", name_singular: "Concert grand piano", dimension: "mass", si_value: 480.0 },
  // Ambulance ~4500 kg
  { name: "Ambulances", name_singular: "Ambulance", dimension: "mass", si_value: 4500.0 },
  // Empty hot tub ~340 kg
  { name: "Empty hot tubs", name_singular: "Empty hot tub", dimension: "mass", si_value: 340.0 },
  // Small car (Fiat 500) ~1050 kg
  { name: "Small cars", name_singular: "Small car", dimension: "mass", si_value: 1050.0 },
  // SUV ~2100 kg
  { name: "SUVs", name_singular: "SUV", dimension: "mass", si_value: 2100.0 },
  // Forklift ~3500 kg
  { name: "Forklifts", name_singular: "Forklift", dimension: "mass", si_value: 3500.0 },
  // Helicopter (Bell 206) ~1450 kg
  { name: "Helicopters", name_singular: "Helicopter", dimension: "mass", si_value: 1450.0 },
  // Speedboat ~1800 kg — same as hippo, use different
  // Dump truck empty ~12000 kg
  { name: "Empty dump trucks", name_singular: "Empty dump truck", dimension: "mass", si_value: 12000.0 },
  // Yacht ~8000 kg
  { name: "Yachts", name_singular: "Yacht", dimension: "mass", si_value: 8000.0 },
  // City bus ~12500 kg
  { name: "City buses", name_singular: "City bus", dimension: "mass", si_value: 12500.0 },
];
