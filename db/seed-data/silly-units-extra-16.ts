// Extra silly units batch 16 — 100 length units
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

  // ── Food items ─────────────────────────────────────────────────────────

  // Standard burrito length ~20 cm
  { name: "Burrito lengths", name_singular: "Burrito length", dimension: "length", si_value: 0.20 },
  // Corn cob length ~20 cm
  { name: "Corn cobs", name_singular: "Corn cob", dimension: "length", si_value: 0.20 },
  // Average carrot length ~18 cm
  { name: "Carrot lengths", name_singular: "Carrot length", dimension: "length", si_value: 0.18 },
  // Cucumber length ~20 cm
  { name: "Cucumber lengths", name_singular: "Cucumber length", dimension: "length", si_value: 0.20 },
  // Celery stalk length ~30 cm
  { name: "Celery stalks", name_singular: "Celery stalk", dimension: "length", si_value: 0.30 },
  // McDonald's large fry ~9 cm
  { name: "French fry lengths", name_singular: "French fry length", dimension: "length", si_value: 0.09 },
  // Chicken wing length ~10 cm
  { name: "Chicken wing lengths", name_singular: "Chicken wing length", dimension: "length", si_value: 0.10 },
  // Standard glazed donut diameter ~10 cm
  { name: "Donut diameters", name_singular: "Donut diameter", dimension: "length", si_value: 0.10 },
  // Standard bagel diameter ~10.5 cm
  { name: "Bagel diameters", name_singular: "Bagel diameter", dimension: "length", si_value: 0.105 },
  // Snickers bar length ~12 cm
  { name: "Candy bar lengths", name_singular: "Candy bar length", dimension: "length", si_value: 0.12 },
  // Standard popsicle stick length ~11.4 cm
  { name: "Popsicle lengths", name_singular: "Popsicle length", dimension: "length", si_value: 0.114 },
  // Ice cream cone height ~15 cm
  { name: "Ice cream cones", name_singular: "Ice cream cone", dimension: "length", si_value: 0.15 },
  // Sandwich half ~15 cm
  { name: "Sandwich halves", name_singular: "Sandwich half", dimension: "length", si_value: 0.15 },

  // ── Body parts ─────────────────────────────────────────────────────────

  // Adult thumb length ~6 cm
  { name: "Thumb lengths", name_singular: "Thumb length", dimension: "length", si_value: 0.06 },
  // Adult index finger ~7.5 cm
  { name: "Index finger lengths", name_singular: "Index finger length", dimension: "length", si_value: 0.075 },
  // Hand breadth ~10 cm
  { name: "Hand breadths", name_singular: "Hand breadth", dimension: "length", si_value: 0.10 },
  // Shoulder width ~45 cm
  { name: "Shoulder widths", name_singular: "Shoulder width", dimension: "length", si_value: 0.45 },
  // Hip width average ~36 cm
  { name: "Hip widths", name_singular: "Hip width", dimension: "length", si_value: 0.36 },
  // Adult head circumference ~56 cm
  { name: "Head circumferences", name_singular: "Head circumference", dimension: "length", si_value: 0.56 },
  // Adult tooth length ~10 mm
  { name: "Tooth lengths", name_singular: "Tooth length", dimension: "length", si_value: 0.01 },

  // ── Clothing / accessories ─────────────────────────────────────────────

  // Standard necktie length ~147 cm
  { name: "Necktie lengths", name_singular: "Necktie length", dimension: "length", si_value: 1.47 },
  // Winter scarf length ~150 cm
  { name: "Scarf lengths", name_singular: "Scarf length", dimension: "length", si_value: 1.50 },
  // Men's belt length ~100 cm
  { name: "Belt lengths", name_singular: "Belt length", dimension: "length", si_value: 1.00 },
  // Shoelace length ~114 cm
  { name: "Shoelace lengths", name_singular: "Shoelace length", dimension: "length", si_value: 1.14 },
  // Necklace length ~45 cm
  { name: "Necklace lengths", name_singular: "Necklace length", dimension: "length", si_value: 0.45 },
  // Ring inner diameter ~18 mm
  { name: "Ring diameters", name_singular: "Ring diameter", dimension: "length", si_value: 0.018 },
  // Watch face diameter ~42 mm
  { name: "Watch face widths", name_singular: "Watch face width", dimension: "length", si_value: 0.042 },
  // Sunglasses frame width ~14 cm
  { name: "Sunglasses widths", name_singular: "Sunglasses width", dimension: "length", si_value: 0.14 },
  // Hat brim width ~7.5 cm
  { name: "Hat brim widths", name_singular: "Hat brim width", dimension: "length", si_value: 0.075 },

  // ── Tools ──────────────────────────────────────────────────────────────

  // Standard screwdriver length ~25 cm
  { name: "Screwdriver lengths", name_singular: "Screwdriver length", dimension: "length", si_value: 0.25 },
  // Adjustable wrench ~25 cm
  { name: "Wrench lengths", name_singular: "Wrench length", dimension: "length", si_value: 0.25 },
  // Claw hammer length ~33 cm
  { name: "Hammer lengths", name_singular: "Hammer length", dimension: "length", si_value: 0.33 },
  // Slip-joint pliers ~20 cm
  { name: "Plier lengths", name_singular: "Plier length", dimension: "length", si_value: 0.20 },
  // 25 ft tape measure extended ~7.62 m
  { name: "Tape measure lengths", name_singular: "Tape measure length", dimension: "length", si_value: 7.62 },
  // Standard step ladder height ~1.83 m (6 ft)
  { name: "Step ladder heights", name_singular: "Step ladder height", dimension: "length", si_value: 1.83 },

  // ── Sports equipment ───────────────────────────────────────────────────

  // Hockey puck diameter ~76 mm
  { name: "Hockey puck diameters", name_singular: "Hockey puck diameter", dimension: "length", si_value: 0.076 },
  // Baseball diameter ~74 mm
  { name: "Baseball diameters", name_singular: "Baseball diameter", dimension: "length", si_value: 0.074 },
  // Softball diameter ~97 mm
  { name: "Softball circumferences", name_singular: "Softball circumference", dimension: "length", si_value: 0.097 },
  // American football length ~28 cm
  { name: "Football lengths", name_singular: "Football length", dimension: "length", si_value: 0.28 },
  // Rugby ball length ~28 cm
  { name: "Rugby ball lengths", name_singular: "Rugby ball length", dimension: "length", si_value: 0.28 },
  // Shuttlecock length ~8.5 cm
  { name: "Shuttlecock lengths", name_singular: "Shuttlecock length", dimension: "length", si_value: 0.085 },
  // Discus diameter ~22 cm
  { name: "Discus diameters", name_singular: "Discus diameter", dimension: "length", si_value: 0.22 },
  // Track hurdle height ~1.067 m (men's 110m)
  { name: "Hurdle heights", name_singular: "Hurdle height", dimension: "length", si_value: 1.067 },
  // Balance beam length ~5.0 m
  { name: "Balance beam lengths", name_singular: "Balance beam length", dimension: "length", si_value: 5.0 },
  // Parallel bars length ~3.5 m
  { name: "Parallel bar lengths", name_singular: "Parallel bar length", dimension: "length", si_value: 3.5 },
  // High jump bar length ~4.0 m
  { name: "High jump bar lengths", name_singular: "High jump bar length", dimension: "length", si_value: 4.0 },

  // ── Musical instruments ────────────────────────────────────────────────

  // Concert flute length ~67 cm
  { name: "Flute lengths", name_singular: "Flute length", dimension: "length", si_value: 0.67 },
  // Clarinet length ~66 cm
  { name: "Clarinet lengths", name_singular: "Clarinet length", dimension: "length", si_value: 0.66 },
  // Oboe length ~65 cm
  { name: "Oboe lengths", name_singular: "Oboe length", dimension: "length", si_value: 0.65 },
  // Tuba height ~100 cm
  { name: "Tuba heights", name_singular: "Tuba height", dimension: "length", si_value: 1.00 },
  // Soprano ukulele length ~53 cm
  { name: "Ukulele lengths", name_singular: "Ukulele length", dimension: "length", si_value: 0.53 },
  // Harmonica length ~10 cm
  { name: "Harmonica lengths", name_singular: "Harmonica length", dimension: "length", si_value: 0.10 },
  // Tambourine diameter ~25 cm
  { name: "Tambourine diameters", name_singular: "Tambourine diameter", dimension: "length", si_value: 0.25 },
  // Snare drum diameter ~35.6 cm (14 in)
  { name: "Snare drum diameters", name_singular: "Snare drum diameter", dimension: "length", si_value: 0.356 },

  // ── Furniture ──────────────────────────────────────────────────────────

  // Coffee table length ~120 cm
  { name: "Coffee table lengths", name_singular: "Coffee table length", dimension: "length", si_value: 1.20 },
  // Nightstand height ~61 cm
  { name: "Nightstand heights", name_singular: "Nightstand height", dimension: "length", si_value: 0.61 },
  // Bookcase height ~180 cm
  { name: "Bookcase heights", name_singular: "Bookcase height", dimension: "length", si_value: 1.80 },
  // Bar stool seat height ~76 cm
  { name: "Bar stool heights", name_singular: "Bar stool height", dimension: "length", si_value: 0.76 },
  // Dining table length ~183 cm
  { name: "Dining table lengths", name_singular: "Dining table length", dimension: "length", si_value: 1.83 },
  // Standard desk width ~152 cm
  { name: "Desk widths", name_singular: "Desk width", dimension: "length", si_value: 1.52 },
  // Office chair seat height ~48 cm
  { name: "Office chair heights", name_singular: "Office chair height", dimension: "length", si_value: 0.48 },
  // Filing cabinet height (4-drawer) ~132 cm
  { name: "Filing cabinet heights", name_singular: "Filing cabinet height", dimension: "length", si_value: 1.32 },

  // ── Vehicles ───────────────────────────────────────────────────────────

  // Average motorcycle length ~2.2 m
  { name: "Motorcycle lengths", name_singular: "Motorcycle length", dimension: "length", si_value: 2.2 },
  // Golf cart length ~2.4 m
  { name: "Golf cart lengths", name_singular: "Golf cart length", dimension: "length", si_value: 2.4 },
  // Forklift length ~2.4 m
  { name: "Forklift lengths", name_singular: "Forklift length", dimension: "length", si_value: 2.4 },
  // Tractor trailer length ~16.2 m (53 ft)
  { name: "Tractor trailer lengths", name_singular: "Tractor trailer length", dimension: "length", si_value: 16.2 },
  // Garbage truck length ~10.7 m
  { name: "Garbage truck lengths", name_singular: "Garbage truck length", dimension: "length", si_value: 10.7 },
  // Ice cream truck length ~6.0 m
  { name: "Ice cream truck lengths", name_singular: "Ice cream truck length", dimension: "length", si_value: 6.0 },
  // USPS mail truck (LLV) length ~4.9 m
  { name: "Mail truck lengths", name_singular: "Mail truck length", dimension: "length", si_value: 4.9 },
  // Tow truck length ~7.0 m
  { name: "Tow truck lengths", name_singular: "Tow truck length", dimension: "length", si_value: 7.0 },

  // ── Buildings / structures ─────────────────────────────────────────────

  // British phone booth height ~2.51 m
  { name: "Phone booth heights", name_singular: "Phone booth height", dimension: "length", si_value: 2.51 },
  // ATM height ~1.5 m
  { name: "ATM heights", name_singular: "ATM height", dimension: "length", si_value: 1.50 },
  // Vending machine height ~1.83 m
  { name: "Vending machine heights", name_singular: "Vending machine height", dimension: "length", si_value: 1.83 },
  // Porta-potty height ~2.3 m
  { name: "Porta-potty heights", name_singular: "Porta-potty height", dimension: "length", si_value: 2.30 },
  // Gazebo diameter ~3.6 m (12 ft)
  { name: "Gazebo diameters", name_singular: "Gazebo diameter", dimension: "length", si_value: 3.6 },
  // Average lighthouse height ~30 m
  { name: "Lighthouse heights", name_singular: "Lighthouse height", dimension: "length", si_value: 30.0 },
  // Traditional windmill height ~20 m
  { name: "Windmill heights", name_singular: "Windmill height", dimension: "length", si_value: 20.0 },
  // Water tower height ~40 m
  { name: "Water tower heights", name_singular: "Water tower height", dimension: "length", si_value: 40.0 },
  // Grain silo height ~20 m
  { name: "Grain silo heights", name_singular: "Grain silo height", dimension: "length", si_value: 20.0 },
  // Church steeple height ~30 m
  { name: "Church steeple heights", name_singular: "Church steeple height", dimension: "length", si_value: 30.0 },
  // Clock tower height ~25 m
  { name: "Clock tower heights", name_singular: "Clock tower height", dimension: "length", si_value: 25.0 },

  // ── Nature ─────────────────────────────────────────────────────────────

  // Large lily pad diameter ~30 cm
  { name: "Lily pad diameters", name_singular: "Lily pad diameter", dimension: "length", si_value: 0.30 },
  // Pine cone length ~10 cm
  { name: "Pine cone lengths", name_singular: "Pine cone length", dimension: "length", si_value: 0.10 },
  // Corn stalk height ~2.4 m
  { name: "Corn stalk heights", name_singular: "Corn stalk height", dimension: "length", si_value: 2.4 },
  // Bamboo pole length ~5 m
  { name: "Bamboo pole lengths", name_singular: "Bamboo pole length", dimension: "length", si_value: 5.0 },
  // Tree stump diameter ~50 cm
  { name: "Tree stump diameters", name_singular: "Tree stump diameter", dimension: "length", si_value: 0.50 },
  // Robin's nest diameter ~15 cm
  { name: "Bird nest diameters", name_singular: "Bird nest diameter", dimension: "length", si_value: 0.15 },
  // Beaver dam length ~5 m (average)
  { name: "Beaver dam lengths", name_singular: "Beaver dam length", dimension: "length", si_value: 5.0 },
  // Ant hill height ~30 cm
  { name: "Ant hill heights", name_singular: "Ant hill height", dimension: "length", si_value: 0.30 },
  // Garden spider web diameter ~35 cm
  { name: "Spider web diameters", name_singular: "Spider web diameter", dimension: "length", si_value: 0.35 },
  // Sunflower height ~2.5 m
  { name: "Sunflower heights", name_singular: "Sunflower height", dimension: "length", si_value: 2.5 },
  // Cattail height ~2.0 m
  { name: "Cattail heights", name_singular: "Cattail height", dimension: "length", si_value: 2.0 },
  // Tumbleweed diameter ~60 cm
  { name: "Tumbleweed diameters", name_singular: "Tumbleweed diameter", dimension: "length", si_value: 0.60 },

  // ── Miscellaneous ──────────────────────────────────────────────────────

  // Standard yoga mat length ~173 cm
  { name: "Yoga mat lengths", name_singular: "Yoga mat length", dimension: "length", si_value: 1.73 },
  // Broomstick length ~145 cm (handle only)
  { name: "Broomstick lengths", name_singular: "Broomstick length", dimension: "length", si_value: 1.45 },
  // Standard parking space length ~5.5 m
  { name: "Parking space lengths", name_singular: "Parking space length", dimension: "length", si_value: 5.5 },
  // Standard door height ~2.03 m (80 in)
  { name: "Door heights", name_singular: "Door height", dimension: "length", si_value: 2.03 },
  // Standard folding chair height ~80 cm
  { name: "Folding chair heights", name_singular: "Folding chair height", dimension: "length", si_value: 0.80 },
  // Standard candle height ~25 cm
  { name: "Candle heights", name_singular: "Candle height", dimension: "length", si_value: 0.25 },
  // Wine cork length ~44 mm
  { name: "Wine cork lengths", name_singular: "Wine cork length", dimension: "length", si_value: 0.044 },
];
