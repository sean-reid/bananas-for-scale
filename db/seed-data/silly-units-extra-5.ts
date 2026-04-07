export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Frequency (Hz) ─── 10 units ───────────────────────────────────────────

  // Average person blinks ~0.28 Hz (once every 3.5 seconds)
  { name: "Eye blinks", name_singular: "Eye blink", dimension: "frequency", si_value: 0.28 },
  // Old clock pendulum ~0.5 Hz
  { name: "Pendulum clocks", name_singular: "Pendulum clock", dimension: "frequency", si_value: 0.5 },
  // Dripping kitchen faucet ~2 Hz
  { name: "Leaky faucets", name_singular: "Leaky faucet", dimension: "frequency", si_value: 2 },
  // Turn signal clicking ~1.5 Hz
  { name: "Turn signals", name_singular: "Turn signal", dimension: "frequency", si_value: 1.5 },
  // Popcorn popping in the microwave peak rate ~40 Hz
  { name: "Popcorn pops", name_singular: "Popcorn pop", dimension: "frequency", si_value: 40 },
  // Bass guitar low E string ~41.2 Hz
  { name: "Bass guitar low E strings", name_singular: "Bass guitar low E string", dimension: "frequency", si_value: 41.2 },
  // Soprano high C ~1046.5 Hz
  { name: "Soprano high C notes", name_singular: "Soprano high C note", dimension: "frequency", si_value: 1046.5 },
  // Dog whistle ~23000 Hz
  { name: "Dog whistles", name_singular: "Dog whistle", dimension: "frequency", si_value: 23000 },
  // Bat echolocation ~100000 Hz
  { name: "Bat echolocations", name_singular: "Bat echolocation", dimension: "frequency", si_value: 100000 },
  // Medical ultrasound ~5 MHz
  { name: "Medical ultrasounds", name_singular: "Medical ultrasound", dimension: "frequency", si_value: 5000000 },

  // ── Pressure (Pa) ─── 10 units ────────────────────────────────────────────

  // Baby sucking on a bottle ~2000 Pa
  { name: "Baby bottle sucks", name_singular: "Baby bottle suck", dimension: "pressure", si_value: 2000 },
  // Pressure of a stiletto heel on a floor ~4,500,000 Pa
  { name: "Stiletto heel pressures", name_singular: "Stiletto heel pressure", dimension: "pressure", si_value: 4500000 },
  // Blood pressure systolic normal ~16,000 Pa (120 mmHg)
  { name: "Systolic blood pressures", name_singular: "Systolic blood pressure", dimension: "pressure", si_value: 16000 },
  // Bicycle tire ~690,000 Pa (100 psi)
  { name: "Bicycle tires", name_singular: "Bicycle tire", dimension: "pressure", si_value: 690000 },
  // Espresso machine ~900,000 Pa (9 bar)
  { name: "Espresso shots", name_singular: "Espresso shot", dimension: "pressure", si_value: 900000 },
  // Deep sea at Titanic wreck ~38,000,000 Pa
  { name: "Titanic wreck depths", name_singular: "Titanic wreck depth", dimension: "pressure", si_value: 38000000 },
  // Human bite average ~70,000,000 Pa (700 atm scaled to tooth area ~1cm2, actual force/area)
  // Actually human bite pressure on molar contact ~100 MPa
  { name: "Molar bite pressures", name_singular: "Molar bite pressure", dimension: "pressure", si_value: 100000000 },
  // Atmospheric pressure at Denver CO ~83,500 Pa
  { name: "Denver altitudes", name_singular: "Denver altitude", dimension: "pressure", si_value: 83500 },
  // Pressure inside a champagne bottle ~600,000 Pa (6 atm)
  { name: "Champagne corks", name_singular: "Champagne cork", dimension: "pressure", si_value: 600000 },
  // Pressure at bottom of a 2m swimming pool ~19,600 Pa
  { name: "Shallow pool pressures", name_singular: "Shallow pool pressure", dimension: "pressure", si_value: 19600 },

  // ── Data (bytes) ─── 8 units ──────────────────────────────────────────────

  // Single ASCII character = 1 byte
  { name: "ASCII characters", name_singular: "ASCII character", dimension: "data", si_value: 1 },
  // Average email ~75,000 bytes (75 KB)
  { name: "Work emails", name_singular: "Work email", dimension: "data", si_value: 75000 },
  // Average Instagram photo ~3,000,000 bytes (3 MB)
  { name: "Instagram photos", name_singular: "Instagram photo", dimension: "data", si_value: 3000000 },
  // Average podcast episode ~60,000,000 bytes (60 MB)
  { name: "Podcast episodes", name_singular: "Podcast episode", dimension: "data", si_value: 60000000 },
  // Floppy disk 1.44 MB = 1,474,560 bytes
  { name: "Floppy disk capacities", name_singular: "Floppy disk capacity", dimension: "data", si_value: 1474560 },
  // GTA V install ~100 GB = 100,000,000,000 bytes
  { name: "GTA V installs", name_singular: "GTA V install", dimension: "data", si_value: 100000000000 },
  // Average voicemail ~200,000 bytes (200 KB)
  { name: "Voicemails", name_singular: "Voicemail", dimension: "data", si_value: 200000 },
  // CD-ROM capacity 700 MB = 734,003,200 bytes
  { name: "CD-ROMs", name_singular: "CD-ROM", dimension: "data", si_value: 734003200 },

  // ── Power (W) ─── 8 units ─────────────────────────────────────────────────

  // LED nightlight ~0.5 W
  { name: "LED nightlights", name_singular: "LED nightlight", dimension: "power", si_value: 0.5 },
  // Human climbing stairs ~300 W
  { name: "Stair climbers", name_singular: "Stair climber", dimension: "power", si_value: 300 },
  // Blender making a smoothie ~600 W
  { name: "Blenders", name_singular: "Blender", dimension: "power", si_value: 600 },
  // Hair dryer ~1800 W
  { name: "Running hair dryers", name_singular: "Running hair dryer", dimension: "power", si_value: 1800 },
  // Electric oven ~5000 W
  { name: "Electric ovens", name_singular: "Electric oven", dimension: "power", si_value: 5000 },
  // Solar panel single residential ~400 W
  { name: "Solar panels", name_singular: "Solar panel", dimension: "power", si_value: 400 },
  // Locomotive diesel engine ~3,000,000 W (3 MW)
  { name: "Diesel locomotives", name_singular: "Diesel locomotive", dimension: "power", si_value: 3000000 },
  // Wind turbine ~2,500,000 W (2.5 MW)
  { name: "Wind turbines", name_singular: "Wind turbine", dimension: "power", si_value: 2500000 },

  // ── Force (N) ─── 8 units ─────────────────────────────────────────────────

  // Mosquito landing ~0.00001 N
  { name: "Mosquito landing forces", name_singular: "Mosquito landing force", dimension: "force", si_value: 0.00001 },
  // Force to press an elevator button ~1 N
  { name: "Button presses", name_singular: "Button press", dimension: "force", si_value: 1 },
  // Average dog pulling on a leash ~50 N — already exists, use cat knocking things off tables
  // Cat knocking a mug off a table ~3 N
  { name: "Cat nudges", name_singular: "Cat nudge", dimension: "force", si_value: 3 },
  // Force to pull a cork from a wine bottle ~200 N
  { name: "Wine cork pulls", name_singular: "Wine cork pull", dimension: "force", si_value: 200 },
  // Force of a bowling ball hitting pins ~5000 N
  { name: "Bowling ball strikes", name_singular: "Bowling ball strike", dimension: "force", si_value: 5000 },
  // Blue whale tail flick ~200,000 N
  { name: "Blue whale tails", name_singular: "Blue whale tail", dimension: "force", si_value: 200000 },
  // Force to crush an aluminum can ~350 N
  { name: "Aluminum can crushes", name_singular: "Aluminum can crush", dimension: "force", si_value: 350 },
  // Space Shuttle SRB thrust ~12,500,000 N each
  { name: "Shuttle booster rockets", name_singular: "Shuttle booster rocket", dimension: "force", si_value: 12500000 },

  // ── Temperature (K) ─── 8 units ───────────────────────────────────────────

  // Liquid helium ~4.2 K
  { name: "Liquid helium baths", name_singular: "Liquid helium bath", dimension: "temperature", si_value: 4.2 },
  // Dry ice surface ~194.65 K (-78.5 C)
  { name: "Dry ice surfaces", name_singular: "Dry ice surface", dimension: "temperature", si_value: 194.65 },
  // Warm bath ~313 K (40 C)
  { name: "Hot baths", name_singular: "Hot bath", dimension: "temperature", si_value: 313 },
  // Inside of a car parked in the sun ~340 K (67 C)
  { name: "Sun-baked car interiors", name_singular: "Sun-baked car interior", dimension: "temperature", si_value: 340 },
  // Pizza oven ~700 K (427 C)
  { name: "Pizza ovens", name_singular: "Pizza oven", dimension: "temperature", si_value: 700 },
  // Lightning bolt ~30000 K
  { name: "Lightning bolt channels", name_singular: "Lightning bolt channel", dimension: "temperature", si_value: 30000 },
  // Core of the Sun ~15,700,000 K
  { name: "Solar cores", name_singular: "Solar core", dimension: "temperature", si_value: 15700000 },
  // Room temperature ~293 K (20 C)
  { name: "Indoor temperatures", name_singular: "Indoor temperature", dimension: "temperature", si_value: 293 },

  // ── Energy (J) ─── 8 units ────────────────────────────────────────────────

  // Energy in a single grape ~2.9 J (0.7 calories)
  { name: "Grape calories", name_singular: "Grape calorie", dimension: "energy", si_value: 2.9 },
  // Snap of a finger ~0.001 J
  { name: "Finger snaps", name_singular: "Finger snap", dimension: "energy", si_value: 0.001 },
  // Energy to boil a cup of water ~330,000 J (330 kJ)
  { name: "Boiled kettles", name_singular: "Boiled kettle", dimension: "energy", si_value: 330000 },
  // Car battery ~2,700,000 J (2.7 MJ)
  { name: "Car batteries", name_singular: "Car battery", dimension: "energy", si_value: 2700000 },
  // Big Mac ~2,200,000 J (540 kcal)
  { name: "Big Macs", name_singular: "Big Mac", dimension: "energy", si_value: 2200000 },
  // Lightning bolt ~1,000,000,000 J (1 GJ)
  { name: "Lightning bolt energies", name_singular: "Lightning bolt energy", dimension: "energy", si_value: 1000000000 },
  // Tsar Bomba ~2.1e17 J
  { name: "Tsar Bombas", name_singular: "Tsar Bomba", dimension: "energy", si_value: 2.1e17 },

  // ── Speed (m/s) ─── 8 units ───────────────────────────────────────────────

  // Continental drift ~1.6e-9 m/s (1.6 nanometers per second, ~5 cm/year)
  { name: "Continental drifts", name_singular: "Continental drift", dimension: "speed", si_value: 1.6e-9 },
  // Average walking speed of a penguin ~1.1 m/s
  { name: "Waddling penguins", name_singular: "Waddling penguin", dimension: "speed", si_value: 1.1 },
  // Shopping cart with a bad wheel ~0.5 m/s
  { name: "Slow shopping carts", name_singular: "Slow shopping cart", dimension: "speed", si_value: 0.5 },
  // Usain Bolt top speed ~12.4 m/s
  { name: "Usain Bolt sprints", name_singular: "Usain Bolt sprint", dimension: "speed", si_value: 12.4 },
  // Sneeze ~44.7 m/s (100 mph)
  { name: "Sneeze velocities", name_singular: "Sneeze velocity", dimension: "speed", si_value: 44.7 },
  // Speed of sound in helium ~927 m/s
  { name: "Sound in helium", name_singular: "Sound in helium", dimension: "speed", si_value: 927 },
  // Bullet from an AK-47 ~715 m/s
  { name: "Rifle bullets", name_singular: "Rifle bullet", dimension: "speed", si_value: 715 },
  // International Space Station orbital speed ~7660 m/s
  { name: "ISS orbital speeds", name_singular: "ISS orbital speed", dimension: "speed", si_value: 7660 },

  // ── Area (m^2) ─── 8 units ────────────────────────────────────────────────

  // Fingernail ~1.5e-4 m^2 (1.5 cm^2)
  { name: "Pinky fingernails", name_singular: "Pinky fingernail", dimension: "area", si_value: 1.5e-4 },
  // Pizza box top ~0.16 m^2 (40cm x 40cm)
  { name: "Pizza box tops", name_singular: "Pizza box top", dimension: "area", si_value: 0.16 },
  // Twin bed ~1.6 m^2
  { name: "Twin beds", name_singular: "Twin bed", dimension: "area", si_value: 1.6 },
  // Parking space ~12.5 m^2
  { name: "Parking spots", name_singular: "Parking spot", dimension: "area", si_value: 12.5 },
  // Walmart Supercenter ~16,700 m^2
  { name: "Walmart Supercenters", name_singular: "Walmart Supercenter", dimension: "area", si_value: 16700 },

  // ── Volume (m^3) ─── 8 units ──────────────────────────────────────────────

  // Teaspoon ~5e-6 m^3
  { name: "Cough syrup doses", name_singular: "Cough syrup dose", dimension: "volume", si_value: 5e-6 },
  // Cement mixer truck ~8 m^3
  { name: "Cement mixers", name_singular: "Cement mixer", dimension: "volume", si_value: 8 },
  // Shot glass ~4.4e-5 m^3 (44 mL)
  { name: "Shot glasses", name_singular: "Shot glass", dimension: "volume", si_value: 4.4e-5 },
  // Lake Superior ~1.21e13 m^3
  { name: "Lake Superiors", name_singular: "Lake Superior", dimension: "volume", si_value: 1.21e13 },

  // ── Time (s) ─── 6 units ──────────────────────────────────────────────────

  // Time to say "Mississippi" ~1s — exists. Use other references.
  // Average red light ~90 s
  { name: "Red lights", name_singular: "Red light", dimension: "time", si_value: 90 },
  // Microwave minute ~60 s
  { name: "Minutes", name_singular: "Minute", dimension: "time", si_value: 60 },
  // Time between someone saying they are five minutes away and arriving ~900 s (15 min)
  { name: "Quarter hours", name_singular: "Quarter hour", dimension: "time", si_value: 900 },
  // Average commercial break ~240 s (4 min)
  { name: "TV commercial breaks", name_singular: "TV commercial break", dimension: "time", si_value: 240 },
  // Plank time ~5.39e-44 s
  { name: "Planck times", name_singular: "Planck time", dimension: "time", si_value: 5.39e-44 },

  // ── Mass (kg) ─── 5 units ─────────────────────────────────────────────────

  // Eyelash ~0.00006 kg (60 micrograms? No, ~60-100 micrograms = 6e-8 to 1e-7 kg)
  // Statue of Liberty (copper and steel) ~204,000 kg
  { name: "Statue of Liberty weights", name_singular: "Statue of Liberty weight", dimension: "mass", si_value: 204000 },

  // ── Length (m) ─── 5 units ────────────────────────────────────────────────

  // Width of a human hair ~7e-5 m (70 micrometers)
  { name: "Human hairs", name_singular: "Human hair", dimension: "length", si_value: 7e-5 },
  // Average subway car ~15.5 m
  { name: "Subway cars", name_singular: "Subway car", dimension: "length", si_value: 15.5 },
  // Football field (American) ~91.44 m (100 yards)
  { name: "Football field lengths", name_singular: "Football field length", dimension: "length", si_value: 91.44 },
  // Diameter of a red Skittle ~12 mm = 0.012 m
  { name: "Skittles", name_singular: "Skittle", dimension: "length", si_value: 0.012 },
  // Distance from Earth to Voyager 1 (approx 2024) ~2.4e13 m
  { name: "Voyager 1 distances", name_singular: "Voyager 1 distance", dimension: "length", si_value: 2.4e13 },
];
