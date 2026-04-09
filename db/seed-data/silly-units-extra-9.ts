// 100 additional silly units — batch 9
// Focused on most-used measurement dimensions:
// length: 35, mass: 20, area: 15, speed: 15, volume: 8, temperature: 7

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Length (35 units) ───────────────────────────────────────────────────

  // Tiny (1e-10 to 1e-3)
  // Skin cell ~30 µm = 3e-5 m
  { name: "Skin cells", name_singular: "Skin cell", dimension: "length", si_value: 3e-5 },
  // Spider silk thread diameter ~5 µm = 5e-6 m
  { name: "Spider silk threads", name_singular: "Spider silk thread", dimension: "length", si_value: 5e-6 },
  // Dust particle ~10 µm = 1e-5 m
  { name: "Dust particles", name_singular: "Dust particle", dimension: "length", si_value: 1e-5 },
  // Eyelash length ~10 mm = 0.01 m
  { name: "Eyelashes", name_singular: "Eyelash", dimension: "length", si_value: 0.01 },
  // Sesame seed ~3 mm = 0.003 m
  { name: "Sesame seeds", name_singular: "Sesame seed", dimension: "length", si_value: 0.003 },
  // Ladybug body ~8 mm = 0.008 m
  { name: "Ladybugs", name_singular: "Ladybug", dimension: "length", si_value: 0.008 },
  // Snowflake crystal ~3 mm = 0.003 m (using typical stellar dendrite)
  { name: "Snowflake crystals", name_singular: "Snowflake crystal", dimension: "length", si_value: 0.003 },
  // Ant antenna ~1.5 mm = 0.0015 m
  { name: "Ant antennae", name_singular: "Ant antenna", dimension: "length", si_value: 0.0015 },

  // Small (1e-3 to 1)
  // Bottle cap diameter ~30 mm = 0.03 m
  { name: "Bottle caps", name_singular: "Bottle cap", dimension: "length", si_value: 0.03 },
  // Golf tee height ~54 mm = 0.054 m
  { name: "Golf tees", name_singular: "Golf tee", dimension: "length", si_value: 0.054 },
  // Credit card length ~86 mm = 0.086 m
  { name: "Credit card lengths", name_singular: "Credit card length", dimension: "length", si_value: 0.086 },
  // Matchstick ~45 mm = 0.045 m
  { name: "Matchsticks", name_singular: "Matchstick", dimension: "length", si_value: 0.045 },
  // Toothbrush ~19 cm = 0.19 m
  { name: "Toothbrushes", name_singular: "Toothbrush", dimension: "length", si_value: 0.19 },
  // Fork length ~19 cm = 0.19 m — too close to toothbrush, use 0.20
  { name: "Dinner forks", name_singular: "Dinner fork", dimension: "length", si_value: 0.20 },
  // Remote control ~22 cm = 0.22 m
  { name: "TV remotes", name_singular: "TV remote", dimension: "length", si_value: 0.22 },
  // Dollar bill length ~15.6 cm = 0.156 m
  { name: "Dollar bills", name_singular: "Dollar bill", dimension: "length", si_value: 0.156 },

  // Human scale (1 to 10)
  // Bathtub length ~1.5 m
  { name: "Bathtub lengths", name_singular: "Bathtub length", dimension: "length", si_value: 1.5 },
  // Sofa length ~2.1 m
  { name: "Sofas", name_singular: "Sofa", dimension: "length", si_value: 2.1 },
  // Canoe length ~4.9 m (16 ft)
  { name: "Canoes", name_singular: "Canoe", dimension: "length", si_value: 4.9 },
  // Kayak length ~3.7 m (12 ft recreational)
  { name: "Kayaks", name_singular: "Kayak", dimension: "length", si_value: 3.7 },
  // Garage door width ~4.9 m (16 ft double)
  { name: "Garage doors", name_singular: "Garage door", dimension: "length", si_value: 4.9 },
  // Pool table ~2.74 m (9 ft regulation)
  { name: "Pool tables", name_singular: "Pool table", dimension: "length", si_value: 2.74 },

  // Large (10 to 1000)
  // Bowling alley lane ~18.29 m (60 ft)
  { name: "Bowling alleys", name_singular: "Bowling alley", dimension: "length", si_value: 18.29 },
  // Basketball court ~28.65 m (94 ft)
  { name: "Basketball court lengths", name_singular: "Basketball court length", dimension: "length", si_value: 28.65 },
  // Soccer field ~105 m
  { name: "Soccer pitches", name_singular: "Soccer pitch", dimension: "length", si_value: 105 },
  // Aircraft carrier ~333 m (Nimitz class)
  { name: "Aircraft carriers", name_singular: "Aircraft carrier", dimension: "length", si_value: 333 },
  // Cruise ship ~362 m (Oasis class)
  { name: "Cruise ship lengths", name_singular: "Cruise ship length", dimension: "length", si_value: 362 },
  // Airport runway ~3000 m
  { name: "Airport runways", name_singular: "Airport runway", dimension: "length", si_value: 3000 },

  // Very large (1000+)
  // Grand Canyon length ~446 km = 446000 m
  { name: "Grand Canyon lengths", name_singular: "Grand Canyon length", dimension: "length", si_value: 446000 },
  // English Channel width ~33.3 km at narrowest = 33300 m
  { name: "English Channel widths", name_singular: "English Channel width", dimension: "length", si_value: 33300 },
  // Great Barrier Reef length ~2300 km = 2.3e6 m
  { name: "Great Barrier Reefs", name_singular: "Great Barrier Reef", dimension: "length", si_value: 2.3e6 },
  // Nile River length ~6650 km = 6.65e6 m
  { name: "Nile Rivers", name_singular: "Nile River", dimension: "length", si_value: 6.65e6 },
  // Supertanker ~400 m (TI class)
  { name: "Supertankers", name_singular: "Supertanker", dimension: "length", si_value: 400 },
  // Suspension bridge main span — Golden Gate already exists, use Akashi Kaikyo ~3911 m
  { name: "Akashi Kaikyo spans", name_singular: "Akashi Kaikyo span", dimension: "length", si_value: 3911 },
  // Skyscraper height — Burj Khalifa exists, use One World Trade Center ~541 m
  { name: "One World Trade Centers", name_singular: "One World Trade Center", dimension: "length", si_value: 541 },

  // ── Mass (20 units) ─────────────────────────────────────────────────────

  // Paperclip ~1 g = 0.001 kg
  { name: "Paperclips", name_singular: "Paperclip", dimension: "mass", si_value: 0.001 },
  // US penny ~2.5 g = 0.0025 kg
  { name: "US pennies", name_singular: "US penny", dimension: "mass", si_value: 0.0025 },
  // Smartphone ~200 g = 0.2 kg
  { name: "Smartphones", name_singular: "Smartphone", dimension: "mass", si_value: 0.2 },
  // Hardcover book ~0.7 kg
  { name: "Hardcover books", name_singular: "Hardcover book", dimension: "mass", si_value: 0.7 },
  // Gallon of milk ~3.9 kg
  { name: "Gallons of milk", name_singular: "Gallon of milk", dimension: "mass", si_value: 3.9 },
  // Bicycle ~10 kg (road bike)
  { name: "Bicycles", name_singular: "Bicycle", dimension: "mass", si_value: 10 },
  // Average adult human ~70 kg
  { name: "Average adults", name_singular: "Average adult", dimension: "mass", si_value: 70 },
  // Grand piano — already exists, use upright piano ~230 kg
  { name: "Upright pianos", name_singular: "Upright piano", dimension: "mass", si_value: 230 },
  // Honda Civic ~1400 kg
  { name: "Honda Civics", name_singular: "Honda Civic", dimension: "mass", si_value: 1400 },
  // Fire truck ~16000 kg
  { name: "Fire trucks", name_singular: "Fire truck", dimension: "mass", si_value: 16000 },
  // African elephant — already exists, use hippo ~1500 kg
  { name: "Hippopotamuses", name_singular: "Hippopotamus", dimension: "mass", si_value: 1500 },
  // Space Shuttle orbiter ~78000 kg (empty)
  { name: "Space Shuttle orbiters", name_singular: "Space Shuttle orbiter", dimension: "mass", si_value: 78000 },
  // Loaded semi truck ~36000 kg
  { name: "Loaded semi trucks", name_singular: "Loaded semi truck", dimension: "mass", si_value: 36000 },
  // Aircraft carrier ~100000 tonnes = 1e8 kg (Nimitz class)
  { name: "Aircraft carrier masses", name_singular: "Aircraft carrier mass", dimension: "mass", si_value: 1e8 },
  // Hummingbird ~3 g = 0.003 kg
  { name: "Hummingbirds", name_singular: "Hummingbird", dimension: "mass", si_value: 0.003 },
  // Chicken egg ~60 g = 0.06 kg
  { name: "Chicken eggs", name_singular: "Chicken egg", dimension: "mass", si_value: 0.06 },
  // Baseball ~145 g = 0.145 kg
  { name: "Baseball weights", name_singular: "Baseball weight", dimension: "mass", si_value: 0.145 },
  // Great Pyramid of Giza — already exists, use Washington Monument ~82000 tonnes = 8.2e7 kg
  { name: "Washington Monuments", name_singular: "Washington Monument", dimension: "mass", si_value: 8.2e7 },
  // Grain of rice ~25 mg = 2.5e-5 kg
  { name: "Rice grain weights", name_singular: "Rice grain weight", dimension: "mass", si_value: 2.5e-5 },
  // Pineapple ~1 kg
  { name: "Pineapples", name_singular: "Pineapple", dimension: "mass", si_value: 1 },

  // ── Area (15 units) ─────────────────────────────────────────────────────

  // Postage stamp ~4.8 cm² = 4.8e-4 m²
  { name: "Postage stamp areas", name_singular: "Postage stamp area", dimension: "area", si_value: 4.8e-4 },
  // Laptop screen (15") ~0.065 m²
  { name: "Laptop screens", name_singular: "Laptop screen", dimension: "area", si_value: 0.065 },
  // Office desk top ~1.4 m²
  { name: "Office desk tops", name_singular: "Office desk top", dimension: "area", si_value: 1.4 },
  // Basketball court ~436 m²
  { name: "Basketball court areas", name_singular: "Basketball court area", dimension: "area", si_value: 436 },
  // Average US classroom ~65 m²
  { name: "Classrooms", name_singular: "Classroom", dimension: "area", si_value: 65 },
  // Volleyball court ~162 m²
  { name: "Volleyball courts", name_singular: "Volleyball court", dimension: "area", si_value: 162 },
  // Baseball infield diamond ~753 m²
  { name: "Baseball diamonds", name_singular: "Baseball diamond", dimension: "area", si_value: 753 },
  // Ice hockey rink ~1672 m² (NHL)
  { name: "Hockey rink areas", name_singular: "Hockey rink area", dimension: "area", si_value: 1672 },
  // Lake Tahoe surface area ~495 km² = 4.95e8 m²
  { name: "Lake Tahoe surfaces", name_singular: "Lake Tahoe surface", dimension: "area", si_value: 4.95e8 },
  // Playing card ~45.5 cm² = 4.55e-3 m²
  { name: "Playing cards", name_singular: "Playing card", dimension: "area", si_value: 4.55e-3 },
  // Index card (3x5") ~96.8 cm² = 9.68e-3 m²
  { name: "Index cards", name_singular: "Index card", dimension: "area", si_value: 9.68e-3 },
  // Ping pong table top ~4.18 m²
  { name: "Ping pong table tops", name_singular: "Ping pong table top", dimension: "area", si_value: 4.18 },
  // Average US garage ~37 m²
  { name: "Two-car garages", name_singular: "Two-car garage", dimension: "area", si_value: 37 },
  // San Francisco ~121.4 km² = 1.214e8 m²
  { name: "San Franciscos", name_singular: "San Francisco", dimension: "area", si_value: 1.214e8 },
  // Dollar bill area ~10.4 cm x 6.6 cm = 68.6 cm² = 6.86e-3 m²
  { name: "Dollar bill areas", name_singular: "Dollar bill area", dimension: "area", si_value: 6.86e-3 },

  // ── Speed (15 units) ────────────────────────────────────────────────────

  // Snail — already exists, use turtle ~0.07 m/s
  { name: "Box turtles", name_singular: "Box turtle", dimension: "speed", si_value: 0.07 },
  // Jogger ~2.7 m/s (6 mph)
  { name: "Casual joggers", name_singular: "Casual jogger", dimension: "speed", si_value: 2.7 },
  // Cyclist ~6.7 m/s (15 mph)
  { name: "Cyclists", name_singular: "Cyclist", dimension: "speed", si_value: 6.7 },
  // Galloping horse ~15 m/s (33 mph)
  { name: "Galloping horses", name_singular: "Galloping horse", dimension: "speed", si_value: 15 },
  // Highway car ~31 m/s (70 mph)
  { name: "Highway cars", name_singular: "Highway car", dimension: "speed", si_value: 31 },
  // Bullet train ~83 m/s (300 km/h)
  { name: "Bullet trains", name_singular: "Bullet train", dimension: "speed", si_value: 83 },
  // Commercial jet ~250 m/s (900 km/h)
  { name: "Commercial jets", name_singular: "Commercial jet", dimension: "speed", si_value: 250 },
  // Rifle bullet ~900 m/s
  { name: "Rifle bullet speeds", name_singular: "Rifle bullet speed", dimension: "speed", si_value: 900 },
  // Orbiting satellite (LEO) ~7700 m/s
  { name: "Orbiting satellites", name_singular: "Orbiting satellite", dimension: "speed", si_value: 7700 },
  // Housefly ~2 m/s
  { name: "Houseflies", name_singular: "Housefly", dimension: "speed", si_value: 2 },
  // Swimming human ~1.4 m/s
  { name: "Swimming humans", name_singular: "Swimming human", dimension: "speed", si_value: 1.4 },
  // Falling raindrop ~9 m/s
  { name: "Falling raindrops", name_singular: "Falling raindrop", dimension: "speed", si_value: 9 },
  // Thrown football ~27 m/s (60 mph)
  { name: "Thrown footballs", name_singular: "Thrown football", dimension: "speed", si_value: 27 },
  // Bowling ball roll ~8 m/s (18 mph)
  { name: "Rolled bowling balls", name_singular: "Rolled bowling ball", dimension: "speed", si_value: 8 },
  // Elevator ~1.5 m/s
  { name: "Elevator speeds", name_singular: "Elevator speed", dimension: "speed", si_value: 1.5 },

  // ── Volume (8 units) ────────────────────────────────────────────────────

  // Marble ~0.9 cm³ = 9e-7 m³
  { name: "Marbles", name_singular: "Marble", dimension: "volume", si_value: 9e-7 },
  // Suitcase carry-on ~0.1 m³ (100 L)
  { name: "Carry-on bags", name_singular: "Carry-on bag", dimension: "volume", si_value: 0.1 },
  // Refrigerator interior ~0.5 m³ (500 L)
  { name: "Refrigerator interiors", name_singular: "Refrigerator interior", dimension: "volume", si_value: 0.5 },
  // Cement mixer drum ~6 m³
  { name: "Cement mixer drums", name_singular: "Cement mixer drum", dimension: "volume", si_value: 6 },
  // Wine bottle ~0.00075 m³ (750 mL)
  { name: "Wine bottles", name_singular: "Wine bottle", dimension: "volume", si_value: 7.5e-4 },
  // Ping pong ball ~33.5 cm³ = 3.35e-5 m³
  { name: "Ping pong balls", name_singular: "Ping pong ball", dimension: "volume", si_value: 3.35e-5 },
  // Shipping container (20 ft) ~33 m³
  { name: "Shipping container volumes", name_singular: "Shipping container volume", dimension: "volume", si_value: 33 },
  // Mug of coffee ~350 mL = 3.5e-4 m³
  { name: "Coffee mugs", name_singular: "Coffee mug", dimension: "volume", si_value: 3.5e-4 },

  // ── Temperature (7 units) ──────────────────────────────────────────────

  // Mars surface average ~210 K (-63°C)
  { name: "Mars surface temps", name_singular: "Mars surface temp", dimension: "temperature", si_value: 210 },
];
