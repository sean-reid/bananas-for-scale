export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Temperature (K) ─── 15 units ──────────────────────────────────────────

  // Chicken body temp ~41.1C = 314.25K
  { name: "Live chickens", name_singular: "Live chicken", dimension: "temperature", si_value: 314.25 },
  // Average cat body temp ~38.6C = 311.75K
  { name: "Cat body temperatures", name_singular: "Cat body temperature", dimension: "temperature", si_value: 311.75 },
  // Liquid nitrogen boiling point = 77.36K
  { name: "Liquid nitrogen baths", name_singular: "Liquid nitrogen bath", dimension: "temperature", si_value: 77.36 },
  // Chocolate melting ~34C = 307.15K
  { name: "Chocolate melting points", name_singular: "Chocolate melting point", dimension: "temperature", si_value: 307.15 },
  // Sahara peak ~56.7C = 329.85K
  { name: "Sahara Desert peaks", name_singular: "Sahara Desert peak", dimension: "temperature", si_value: 329.85 },
  // Antarctic winter avg ~-60C = 213.15K
  { name: "Antarctic winters", name_singular: "Antarctic winter", dimension: "temperature", si_value: 213.15 },
  // Cookie baking temp 350F = 177C = 450.15K
  { name: "Baking ovens", name_singular: "Baking oven", dimension: "temperature", si_value: 450.15 },
  // Candle flame ~1100C = 1373.15K
  { name: "Candle flames", name_singular: "Candle flame", dimension: "temperature", si_value: 1373.15 },
  // Dog body temp ~38.9C = 312.05K
  { name: "Dog body temperatures", name_singular: "Dog body temperature", dimension: "temperature", si_value: 312.05 },
  // Dryer cycle ~57C = 330.15K
  { name: "Clothes dryer temps", name_singular: "Clothes dryer temp", dimension: "temperature", si_value: 330.15 },
  // Room temp in an office set too cold ~19C = 292.15K
  { name: "Office thermostats", name_singular: "Office thermostat", dimension: "temperature", si_value: 292.15 },
  // Lava ~1200C = 1473.15K
  { name: "Lava flows", name_singular: "Lava flow", dimension: "temperature", si_value: 1473.15 },
  // Brain freeze / ice cream ~-18C = 255.15K
  { name: "Freezer temperatures", name_singular: "Freezer temperature", dimension: "temperature", si_value: 255.15 },
  // Welding arc ~3400C = 3673.15K
  { name: "Welding arcs", name_singular: "Welding arc", dimension: "temperature", si_value: 3673.15 },
  // Cosmic microwave background = 2.725K
  { name: "Cosmic backgrounds", name_singular: "Cosmic background", dimension: "temperature", si_value: 2.725 },

  // ── Energy (J) ─── 15 units ───────────────────────────────────────────────

  // Single photon of green light: E = hf = 6.626e-34 * 5.5e14 ~ 3.64e-19 J
  { name: "Green photons", name_singular: "Green photon", dimension: "energy", si_value: 3.64e-19 },
  // Single keystroke ~0.01 J (key depression force ~0.5N over 2cm)
  { name: "Keystrokes", name_singular: "Keystroke", dimension: "energy", si_value: 0.01 },
  // Cricket chirp ~0.001 J
  { name: "Cricket chirps", name_singular: "Cricket chirp", dimension: "energy", si_value: 0.001 },
  // Throwing a baseball: 0.5 * 0.145 * 40^2 = 116 J
  { name: "Fastballs", name_singular: "Fastball", dimension: "energy", si_value: 116 },
  // Candy bar (Snickers ~250 kcal = 1.046 MJ)
  { name: "Snickers bars", name_singular: "Snickers bar", dimension: "energy", si_value: 1046000 },
  // Stick of dynamite ~4.2 MJ
  { name: "Sticks of dynamite", name_singular: "Stick of dynamite", dimension: "energy", si_value: 4200000 },
  // Gallon of gasoline ~131 MJ
  { name: "Gallons of gasoline", name_singular: "Gallon of gasoline", dimension: "energy", si_value: 131000000 },
  // Ton of TNT = 4.184e9 J
  { name: "Tons of TNT", name_singular: "Ton of TNT", dimension: "energy", si_value: 4.184e9 },
  // Daily food intake for average person ~2000 kcal = 8.368 MJ
  { name: "Daily food intakes", name_singular: "Daily food intake", dimension: "energy", si_value: 8368000 },
  // Hiroshima bomb ~6.3e13 J
  { name: "Hiroshima blasts", name_singular: "Hiroshima blast", dimension: "energy", si_value: 6.3e13 },
  // World annual energy consumption ~5.8e20 J
  { name: "World energy years", name_singular: "World energy year", dimension: "energy", si_value: 5.8e20 },
  // Supernova ~1e44 J
  { name: "Supernovae", name_singular: "Supernova", dimension: "energy", si_value: 1e44 },
  // Tesla Model 3 battery ~75 kWh = 2.7e8 J
  { name: "Tesla batteries", name_singular: "Tesla battery", dimension: "energy", si_value: 2.7e8 },
  // Slamming a door ~10 J
  { name: "Door slams", name_singular: "Door slam", dimension: "energy", si_value: 10 },
  // Dropped piece of toast: mgh = 0.03 * 9.81 * 1 ~ 0.29 J
  { name: "Dropped toast slices", name_singular: "Dropped toast slice", dimension: "energy", si_value: 0.29 },

  // ── Force (N) ─── 10 units ────────────────────────────────────────────────

  // Ant carrying capacity ~0.005 N (can carry 50x its weight, ~0.001g body * 50 * 9.81)
  { name: "Ant carries", name_singular: "Ant carry", dimension: "force", si_value: 0.005 },
  // Tennis serve: ball ~0.058 kg, delta-v ~60 m/s over 0.005s = ~696 N
  { name: "Tennis serves", name_singular: "Tennis serve", dimension: "force", si_value: 696 },
  // Alligator bite ~13000 N
  { name: "Alligator bites", name_singular: "Alligator bite", dimension: "force", si_value: 13000 },
  // Space Shuttle thrust ~30 MN total from SRBs + main engines
  { name: "Space Shuttle thrusts", name_singular: "Space Shuttle thrust", dimension: "force", si_value: 30000000 },
  // Tornado (EF5) wind force on a house wall ~500000 N
  { name: "EF5 tornado forces", name_singular: "EF5 tornado force", dimension: "force", si_value: 500000 },
  // Dog pulling on leash ~50 N
  { name: "Dog leash pulls", name_singular: "Dog leash pull", dimension: "force", si_value: 50 },
  // Toddler grip on a cookie ~8 N
  { name: "Toddler grips", name_singular: "Toddler grip", dimension: "force", si_value: 8 },
  // Human bite ~700 N
  { name: "Human bites", name_singular: "Human bite", dimension: "force", si_value: 700 },
  // Gecko foot adhesion ~10 N per foot
  { name: "Gecko foot grips", name_singular: "Gecko foot grip", dimension: "force", si_value: 10 },
  // Elevator cable tension for a standard elevator ~30000 N
  { name: "Elevator cables", name_singular: "Elevator cable", dimension: "force", si_value: 30000 },

  // ── Pressure (Pa) ─── 10 units ────────────────────────────────────────────

  // Grandma hug ~2000 Pa (gentle distributed pressure)
  { name: "Gentle hugs", name_singular: "Gentle hug", dimension: "pressure", si_value: 2000 },
  // Car tire ~220 kPa (32 psi)
  { name: "Car tires", name_singular: "Car tire", dimension: "pressure", si_value: 220000 },
  // Blood pressure systolic (120 mmHg = 15998 Pa)
  { name: "Blood pressures", name_singular: "Blood pressure", dimension: "pressure", si_value: 15998 },
  // Champagne bottle ~600 kPa (6 atm)
  { name: "Champagne bottles", name_singular: "Champagne bottle", dimension: "pressure", si_value: 600000 },
  // Bicycle tire ~690 kPa (100 psi)
  { name: "Road bike tires", name_singular: "Road bike tire", dimension: "pressure", si_value: 690000 },
  // Vacuum of space ~0 but interplanetary ~1e-7 Pa
  { name: "Outer space vacuums", name_singular: "Outer space vacuum", dimension: "pressure", si_value: 1e-7 },
  // Fire hose ~1.4 MPa
  { name: "Fire hoses", name_singular: "Fire hose", dimension: "pressure", si_value: 1400000 },
  // Bottom of swimming pool (3m deep) ~129735 Pa (atm + rho*g*h)
  { name: "Pool bottoms", name_singular: "Pool bottom", dimension: "pressure", si_value: 129735 },
  // Espresso machine ~900 kPa (9 bar)
  { name: "Espresso machines", name_singular: "Espresso machine", dimension: "pressure", si_value: 900000 },
  // Venus surface atmosphere ~9.2 MPa
  { name: "Venus atmospheres", name_singular: "Venus atmosphere", dimension: "pressure", si_value: 9200000 },

  // ── Power (W) ─── 10 units ────────────────────────────────────────────────

  // Firefly bioluminescence ~0.001 W
  { name: "Fireflies", name_singular: "Firefly", dimension: "power", si_value: 0.001 },
  // Smartphone charging ~5 W
  { name: "Phone chargers", name_singular: "Phone charger", dimension: "power", si_value: 5 },
  // Microwave oven ~1000 W
  { name: "Running microwaves", name_singular: "Running microwave", dimension: "power", si_value: 1000 },
  // Sprinting human ~2000 W
  { name: "Sprinting humans", name_singular: "Sprinting human", dimension: "power", si_value: 2000 },
  // Formula 1 car ~750 kW
  { name: "Formula 1 engines", name_singular: "Formula 1 engine", dimension: "power", si_value: 750000 },
  // Cruise ship ~60 MW
  { name: "Cruise ships", name_singular: "Cruise ship", dimension: "power", si_value: 60000000 },
  // Saturn V rocket first stage ~190 GW
  { name: "Saturn V first stages", name_singular: "Saturn V first stage", dimension: "power", si_value: 1.9e11 },
  // Human heart ~1.3 W
  { name: "Human hearts", name_singular: "Human heart", dimension: "power", si_value: 1.3 },
  // Toaster ~850 W
  { name: "Toasters", name_singular: "Toaster", dimension: "power", si_value: 850 },
  // Average lightning bolt ~1e12 W (instantaneous)
  { name: "Lightning strikes", name_singular: "Lightning strike", dimension: "power", si_value: 1e12 },

  // ── Frequency (Hz) ─── 10 units ───────────────────────────────────────────

  // Earth rotation = 1/86400 Hz ~ 1.157e-5 Hz
  { name: "Earth rotations", name_singular: "Earth rotation", dimension: "frequency", si_value: 1.157e-5 },
  // Blinking ~0.25 Hz (about 15 per minute)
  { name: "Human blinks", name_singular: "Human blink", dimension: "frequency", si_value: 0.25 },
  // Dog tail wag ~5 Hz
  { name: "Dog tail wags", name_singular: "Dog tail wag", dimension: "frequency", si_value: 5 },
  // Middle C note = 261.63 Hz
  { name: "Middle C notes", name_singular: "Middle C note", dimension: "frequency", si_value: 261.63 },
  // WiFi 2.4 GHz = 2.4e9 Hz
  { name: "WiFi signals", name_singular: "WiFi signal", dimension: "frequency", si_value: 2.4e9 },
  // Dripping faucet ~0.5 Hz
  { name: "Dripping faucets", name_singular: "Dripping faucet", dimension: "frequency", si_value: 0.5 },
  // Rattlesnake rattle ~60 Hz
  { name: "Rattlesnake rattles", name_singular: "Rattlesnake rattle", dimension: "frequency", si_value: 60 },
  // Cesium atomic clock = 9192631770 Hz
  { name: "Cesium atoms", name_singular: "Cesium atom", dimension: "frequency", si_value: 9192631770 },
  // Ceiling fan on high ~3.5 Hz (210 RPM)
  { name: "Ceiling fans on high", name_singular: "Ceiling fan on high", dimension: "frequency", si_value: 3.5 },
  // Halley's Comet orbit = 1/(75.3 yr * 3.156e7 s/yr) ~ 4.21e-10 Hz
  { name: "Halley's Comet orbits", name_singular: "Halley's Comet orbit", dimension: "frequency", si_value: 4.21e-10 },

  // ── Data (bytes) ─── 10 units ─────────────────────────────────────────────

  // Single text message (SMS) = 160 bytes
  { name: "Text messages", name_singular: "Text message", dimension: "data", si_value: 160 },
  // Average MP3 song ~4 MB = 4e6 bytes
  { name: "Downloaded MP3s", name_singular: "Downloaded MP3", dimension: "data", si_value: 4000000 },
  // Wikipedia (text only) ~22 GB = 2.2e10 bytes
  { name: "Wikipedia text dumps", name_singular: "Wikipedia text dump", dimension: "data", si_value: 2.2e10 },
  // Single email ~75 KB = 75000 bytes
  { name: "Emails", name_singular: "Email", dimension: "data", si_value: 75000 },
  // One minute of Spotify streaming ~1 MB
  { name: "Spotify minutes", name_singular: "Spotify minute", dimension: "data", si_value: 1000000 },
  // NES cartridge ROM = 256 KB = 262144 bytes
  { name: "NES game cartridges", name_singular: "NES game cartridge", dimension: "data", si_value: 262144 },
  // Library of Congress ~10 TB = 1e13 bytes
  { name: "Libraries of Congress", name_singular: "Library of Congress", dimension: "data", si_value: 1e13 },
  // One TikTok video ~10 MB = 1e7 bytes
  { name: "TikTok video files", name_singular: "TikTok video file", dimension: "data", si_value: 10000000 },
  // Global daily internet traffic ~5 EB = 5e18 bytes
  { name: "Daily internet traffics", name_singular: "Daily internet traffic", dimension: "data", si_value: 5e18 },
  // Single printed page (plain text) ~2 KB = 2000 bytes
  { name: "Printed pages", name_singular: "Printed page", dimension: "data", si_value: 2000 },
];
