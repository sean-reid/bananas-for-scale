// Extra silly units batch 12 — filling thinnest dimensions
// Targets: count +10, frequency +8, data +8, power +6, pressure +6, force +6, temperature +6

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Count (10) ───────────────────────────────────────────────────────────

  // Soccer/football team = 11 players
  { name: "Soccer teams", name_singular: "Soccer team", dimension: "count", si_value: 11 },
  // Standard egg carton = 12
  { name: "Eggs in a carton", name_singular: "Egg carton", dimension: "count", si_value: 12 },
  // Standard Tarot deck = 78 cards
  { name: "Tarot decks", name_singular: "Tarot deck", dimension: "count", si_value: 78 },
  // Monopoly board has 28 properties
  { name: "Monopoly properties", name_singular: "Monopoly property set", dimension: "count", si_value: 28 },
  // United States = 50 states
  { name: "US states", name_singular: "US state set", dimension: "count", si_value: 50 },
  // Africa has 54 countries
  { name: "African countries", name_singular: "African country set", dimension: "count", si_value: 54 },
  // Shakespeare wrote 37 plays
  { name: "Shakespeare plays", name_singular: "Shakespeare canon", dimension: "count", si_value: 37 },
  // Summer Olympics ~32 sports
  { name: "Olympic sports", name_singular: "Olympic sport set", dimension: "count", si_value: 32 },
  // Adult human = 32 teeth
  { name: "Adult teeth sets", name_singular: "Adult teeth set", dimension: "count", si_value: 32 },
  // Baskin-Robbins = 31 flavors
  { name: "Baskin-Robbins flavors", name_singular: "Baskin-Robbins menu", dimension: "count", si_value: 31 },

  // ── Frequency (8) ────────────────────────────────────────────────────────

  // Sewing machine needle ~15 Hz (~900 stitches/min)
  { name: "Sewing machine needles", name_singular: "Sewing machine needle", dimension: "frequency", si_value: 15 },
  // Jump rope turning ~3 Hz
  { name: "Jump rope turns", name_singular: "Jump rope turn", dimension: "frequency", si_value: 3 },
  // Woodpecker drumming ~20 Hz
  { name: "Woodpecker pecks", name_singular: "Woodpecker peck", dimension: "frequency", si_value: 20 },
  // Electric razor vibrations ~100 Hz
  { name: "Electric razor buzzes", name_singular: "Electric razor buzz", dimension: "frequency", si_value: 100 },
  // Bicycle pedal cadence ~1.5 Hz (90 rpm)
  { name: "Bicycle pedal cadences", name_singular: "Bicycle pedal cadence", dimension: "frequency", si_value: 1.5 },
  // Lawn sprinkler rotation ~0.2 Hz
  { name: "Sprinkler rotations", name_singular: "Sprinkler rotation", dimension: "frequency", si_value: 0.2 },
  // Wind turbine blade pass ~0.25 Hz
  { name: "Wind turbine rotations", name_singular: "Wind turbine rotation", dimension: "frequency", si_value: 0.25 },
  // Lighthouse lamp rotation ~0.1 Hz (one revolution per 10s)
  { name: "Lighthouse rotations", name_singular: "Lighthouse rotation", dimension: "frequency", si_value: 0.1 },

  // ── Data (8) ─────────────────────────────────────────────────────────────

  // Average phone contact vCard entry ~500 bytes
  { name: "Phone contacts", name_singular: "Phone contact", dimension: "data", si_value: 500 },
  // GPS coordinate string ~20 bytes
  { name: "GPS coordinates", name_singular: "GPS coordinate", dimension: "data", si_value: 20 },
  // Human genome ~750 MB
  { name: "Human genomes", name_singular: "Human genome", dimension: "data", si_value: 7.5e8 },
  // Average Wikipedia article ~5000 bytes
  { name: "Wikipedia articles", name_singular: "Wikipedia article", dimension: "data", si_value: 5000 },
  // Average iPhone app ~200 MB
  { name: "iPhone app installs", name_singular: "iPhone app install", dimension: "data", si_value: 2e8 },
  // Vinyl record digitized ~650 MB
  { name: "Vinyl record albums", name_singular: "Vinyl record album", dimension: "data", si_value: 6.5e8 },
  // NES cartridge ROM ~256 KB
  { name: "NES cartridges", name_singular: "NES cartridge", dimension: "data", si_value: 262144 },
  // Average tweet/post text ~280 bytes
  { name: "Tweet texts", name_singular: "Tweet text", dimension: "data", si_value: 280 },

  // ── Power (6) ─────────────────────────────────────────────────────────────

  // Refrigerator compressor running ~150 W
  { name: "Refrigerator compressors", name_singular: "Refrigerator compressor", dimension: "power", si_value: 150 },
  // Pressure washer motor ~2000 W
  { name: "Pressure washers", name_singular: "Pressure washer", dimension: "power", si_value: 2000 },
  // Tesla Supercharger V3 ~250 kW
  { name: "Tesla Superchargers", name_singular: "Tesla Supercharger", dimension: "power", si_value: 250000 },
  // Aircraft carrier nuclear reactor ~200 MW
  { name: "Carrier reactors", name_singular: "Carrier reactor", dimension: "power", si_value: 2e8 },
  // Leaf blower gas-powered ~1000 W
  { name: "Leaf blowers", name_singular: "Leaf blower", dimension: "power", si_value: 1000 },
  // Pool pump ~1.5 kW
  { name: "Pool pumps", name_singular: "Pool pump", dimension: "power", si_value: 1500 },

  // ── Pressure (6) ──────────────────────────────────────────────────────────

  // Firm handshake squeeze ~70 kPa
  { name: "Handshake squeezes", name_singular: "Handshake squeeze", dimension: "pressure", si_value: 70000 },
  // Tennis ball internal pressure ~100 kPa gauge (~200 kPa absolute, ~100 kPa above atm)
  { name: "Tennis ball pressures", name_singular: "Tennis ball pressure", dimension: "pressure", si_value: 100000 },
  // American football inflation ~90 kPa gauge
  { name: "Football inflations", name_singular: "Football inflation", dimension: "pressure", si_value: 90000 },
  // Clenched fist pressure ~500 kPa
  { name: "Clenched fist pressures", name_singular: "Clenched fist pressure", dimension: "pressure", si_value: 500000 },
  // Deep sea fish habitat ~4000m depth ~400 atm ~40 MPa
  { name: "Deep sea pressures", name_singular: "Deep sea pressure", dimension: "pressure", si_value: 4e7 },
  // Earth upper mantle pressure ~1.4e11 Pa (140 GPa)
  { name: "Earth mantle pressures", name_singular: "Earth mantle pressure", dimension: "pressure", si_value: 1.4e11 },

  // ── Force (6) ──────────────────────────────────────────────────────────────

  // Pulling a zipper ~10 N
  { name: "Zipper pulls", name_singular: "Zipper pull", dimension: "force", si_value: 10 },
  // Cork popping from a bottle ~25 N
  { name: "Cork pops", name_singular: "Cork pop", dimension: "force", si_value: 25 },
  // Slamming a car door ~100 N
  { name: "Car door slams", name_singular: "Car door slam", dimension: "force", si_value: 100 },
  // Gymnast landing impact ~8000 N
  { name: "Gymnast landings", name_singular: "Gymnast landing", dimension: "force", si_value: 8000 },
  // Tugboat line pull ~500 kN
  { name: "Tugboat pulls", name_singular: "Tugboat pull", dimension: "force", si_value: 500000 },
  // Wrecking ball impact ~200 kN
  { name: "Wrecking ball hits", name_singular: "Wrecking ball hit", dimension: "force", si_value: 200000 },

  // ── Temperature (6) ───────────────────────────────────────────────────────

  // Craft beer cellar ~12°C = 285 K
  { name: "Beer cellar temps", name_singular: "Beer cellar temp", dimension: "temperature", si_value: 285 },
  // Soldering iron tip ~350°C = 623 K
  { name: "Soldering iron tips", name_singular: "Soldering iron tip", dimension: "temperature", si_value: 623 },
  // Pottery kiln ~1227°C = 1500 K
  { name: "Pottery kiln firings", name_singular: "Pottery kiln firing", dimension: "temperature", si_value: 1500 },
  // Blast furnace ~1727°C = 2000 K
  { name: "Blast furnace cores", name_singular: "Blast furnace core", dimension: "temperature", si_value: 2000 },
  // Plasma cutting torch ~25000 K
  { name: "Plasma torch arcs", name_singular: "Plasma torch arc", dimension: "temperature", si_value: 25000 },
];
