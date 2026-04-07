export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Length (m) ─── 10 units ───────────────────────────────────────────────

  // Dwayne Johnson is 6'5" = 1.96m
  { name: "Dwayne The Rock Johnsons", name_singular: "Dwayne The Rock Johnson", dimension: "length", si_value: 1.96 },
  // Taylor Swift is 5'11" = 1.80m
  { name: "Taylor Swifts", name_singular: "Taylor Swift", dimension: "length", si_value: 1.80 },
  // Burj Khalifa total height 828m
  { name: "Burj Khalifas", name_singular: "Burj Khalifa", dimension: "length", si_value: 828 },
  // King cobra max length ~5.5m
  { name: "King cobras", name_singular: "King cobra", dimension: "length", si_value: 5.5 },
  // Blue whale heart ~1.5m across
  { name: "Blue whale hearts", name_singular: "Blue whale heart", dimension: "length", si_value: 1.5 },
  // Golden Gate Bridge total length 2737m
  { name: "Golden Gate Bridges", name_singular: "Golden Gate Bridge", dimension: "length", si_value: 2737 },
  // Standard #2 pencil ~19cm = 0.19m
  { name: "Pencils", name_singular: "Pencil", dimension: "length", si_value: 0.19 },

  // ── Mass (kg) ─── 10 units ────────────────────────────────────────────────

  // Dwayne Johnson ~260lbs = 118kg
  { name: "Dwayne The Rock Johnson weights", name_singular: "Dwayne The Rock Johnson weight", dimension: "mass", si_value: 118 },
  // African elephant newborn ~100kg
  { name: "Baby elephants", name_singular: "Baby elephant", dimension: "mass", si_value: 100 },
  // Tesla Cybertruck curb weight ~6830lbs = 3100kg
  { name: "Tesla Cybertrucks", name_singular: "Tesla Cybertruck", dimension: "mass", si_value: 3100 },
  // A well-loaded grocery cart ~45kg
  { name: "Grocery carts", name_singular: "Grocery cart", dimension: "mass", si_value: 45 },
  // Average Thanksgiving turkey ~15lbs = 7kg
  { name: "Thanksgiving turkeys", name_singular: "Thanksgiving turkey", dimension: "mass", si_value: 7 },
  // Olympic gold medal ~525g = 0.525kg
  { name: "Olympic gold medals", name_singular: "Olympic gold medal", dimension: "mass", si_value: 0.525 },
  // Hummingbird egg ~0.5g = 0.0005kg
  { name: "Hummingbird eggs", name_singular: "Hummingbird egg", dimension: "mass", si_value: 0.0005 },
  // Nimitz-class aircraft carrier ~100,000 metric tons
  { name: "Aircraft carriers", name_singular: "Aircraft carrier", dimension: "mass", si_value: 100000000 },
  // Eiffel Tower iron structure ~7300 metric tons
  { name: "Eiffel Tower masses", name_singular: "Eiffel Tower mass", dimension: "mass", si_value: 7300000 },
  // Single grain of rice ~29mg = 0.000029kg
  { name: "Grains of rice", name_singular: "Grain of rice", dimension: "mass", si_value: 0.000029 },

  // ── Time (s) ─── 10 units ─────────────────────────────────────────────────

  // Average Taylor Swift song ~3.5 min = 210s
  { name: "Taylor Swift songs", name_singular: "Taylor Swift song", dimension: "time", si_value: 210 },
  // Average MCU film ~150min = 9000s
  { name: "Marvel movies", name_singular: "Marvel movie", dimension: "time", si_value: 9000 },
  // Guaranteed pizza delivery window = 30min = 1800s
  { name: "Pizza deliveries", name_singular: "Pizza delivery", dimension: "time", si_value: 1800 },
  // The myth says 3 seconds (reality is months)
  { name: "Goldfish memories", name_singular: "Goldfish memory", dimension: "time", si_value: 3 },
  // Synodic lunar month = 29.53 days = 2551443s
  { name: "Lunar months", name_singular: "Lunar month", dimension: "time", si_value: 2551443 },
  // Usain Bolt 100m world record = 9.58s
  { name: "100m dash records", name_singular: "100m dash record", dimension: "time", si_value: 9.58 },
  // Holocene epoch ~11700 years = ~3.69e11s
  { name: "Holocene eras", name_singular: "Holocene era", dimension: "time", si_value: 3.69e11 },
  // Standard power nap = 20min = 1200s
  { name: "Power naps", name_singular: "Power nap", dimension: "time", si_value: 1200 },
  // Titanic took ~160min to sink = 9600s
  { name: "Titanic sinkings", name_singular: "Titanic sinking", dimension: "time", si_value: 9600 },
  // Microwave popcorn bag cycle ~2.5min = 150s
  { name: "Popcorn bags", name_singular: "Popcorn bag", dimension: "time", si_value: 150 },

  // ── Volume (m³) ─── 5 units ───────────────────────────────────────────────

  // Pool noodle hollow core ~0.0003m³
  { name: "Pool noodle hollows", name_singular: "Pool noodle hollow", dimension: "volume", si_value: 0.0003 },
  // Grand Canyon volume ~41.9 billion m³
  { name: "Grand Canyons", name_singular: "Grand Canyon", dimension: "volume", si_value: 4.19e10 },
  // All five Great Lakes combined ~22,671 km³ = 2.267e13 m³
  { name: "Great Lakes combined", name_singular: "Great Lakes combined", dimension: "volume", si_value: 2.267e13 },
  // Human stomach capacity when full ~1L = 0.001m³
  { name: "Human stomachs", name_singular: "Human stomach", dimension: "volume", si_value: 0.001 },
  // Average watermelon ~10L = 0.01m³
  { name: "Watermelons", name_singular: "Watermelon", dimension: "volume", si_value: 0.01 },

  // ── Area (m²) ─── 5 units ─────────────────────────────────────────────────

  // NBA basketball court 94ft x 50ft = 436.6m²
  { name: "Basketball courts", name_singular: "Basketball court", dimension: "area", si_value: 436.6 },
  // Olympic swimming pool 50m x 25m = 1250m²
  { name: "Olympic pools (area)", name_singular: "Olympic pool (area)", dimension: "area", si_value: 1250 },
  // Texas area = 696,241 km² = 6.96241e11 m²
  { name: "Texases", name_singular: "Texas", dimension: "area", si_value: 6.96241e11 },
  // Standard US postage stamp ~24mm x 25mm = 0.0006m²
  { name: "Postage stamps", name_singular: "Postage stamp", dimension: "area", si_value: 0.0006 },
  // Human palm area ~170cm² = 0.017m²
  { name: "Human palms", name_singular: "Human palm", dimension: "area", si_value: 0.017 },

  // ── Speed (m/s) ─── 5 units ───────────────────────────────────────────────

  // Cat terminal velocity ~97km/h = 27m/s
  { name: "Falling cats", name_singular: "Falling cat", dimension: "speed", si_value: 27 },
  // Olympic 50m freestyle pace ~2.2m/s
  { name: "Olympic swimmers", name_singular: "Olympic swimmer", dimension: "speed", si_value: 2.2 },

  // ── Energy (J) ─── 5 units ────────────────────────────────────────────────

  // Average candy bar ~250 kcal = ~1.046e6 J
  { name: "Candy bars", name_singular: "Candy bar", dimension: "energy", si_value: 1.046e6 },
  // Kinetic energy of a car at 60mph (~26.8m/s), ~1500kg: 0.5*1500*26.8² ≈ 538,000J
  { name: "Highway car crashes", name_singular: "Highway car crash", dimension: "energy", si_value: 538000 },
  // Mt St Helens 1980 eruption ~1.7e18 J
  { name: "Mt St Helens eruptions", name_singular: "Mt St Helens eruption", dimension: "energy", si_value: 1.7e18 },
  // Alkaline D battery ~75,000 J (about 20Wh)
  { name: "Alkaline D batteries", name_singular: "Alkaline D battery", dimension: "energy", si_value: 75000 },
  // Cup of coffee ~100 kcal worth of metabolic energy = ~420,000 J
  { name: "Cups of coffee", name_singular: "Cup of coffee", dimension: "energy", si_value: 420000 },

  // ── Force (N) ─── 3 units ─────────────────────────────────────────────────

  // T-rex bite force ~57,000 N
  { name: "T-rex bites", name_singular: "T-rex bite", dimension: "force", si_value: 57000 },
  // Force to pop bubble wrap bubble ~1.5 N
  { name: "Bubble wrap pops", name_singular: "Bubble wrap pop", dimension: "force", si_value: 1.5 },

  // ── Pressure (Pa) ─── 3 units ─────────────────────────────────────────────

  // Bottom of the Mariana Trench ~108.6 MPa
  { name: "Mariana Trenches", name_singular: "Mariana Trench", dimension: "pressure", si_value: 1.086e8 },

  // ── Power (W) ─── 3 units ─────────────────────────────────────────────────

  // Actual horse sustained output ~746 W
  { name: "Horses", name_singular: "Horse", dimension: "power", si_value: 746 },
  // Human brain power consumption ~20 W
  { name: "Human brains", name_singular: "Human brain", dimension: "power", si_value: 20 },
  // DeLorean flux capacitor needs 1.21 gigawatts
  { name: "Flux capacitors", name_singular: "Flux capacitor", dimension: "power", si_value: 1.21e9 },

  // ── Frequency (Hz) ─── 3 units ────────────────────────────────────────────


  // ── Data (bytes) ─── 3 units ──────────────────────────────────────────────

  // Entire text of War and Peace ~3.2 MB = 3,200,000 bytes
  { name: "Copies of War and Peace", name_singular: "Copy of War and Peace", dimension: "data", si_value: 3200000 },
  // Average TikTok video ~15MB = 15,000,000 bytes
  { name: "TikTok videos", name_singular: "TikTok video", dimension: "data", si_value: 15000000 },
];
