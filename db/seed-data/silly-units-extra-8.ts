// 150 additional silly units — batch 8

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Data (15 units) ──────────────────────────────────────────────────
  // Selfie photo ~3.5 MB = 3.5e6 bytes
  { name: "Selfies", name_singular: "Selfie", dimension: "data", si_value: 3.5e6 },
  // Slack message ~0.5 KB = 500 bytes
  { name: "Slack messages", name_singular: "Slack message", dimension: "data", si_value: 500 },
  // Kindle ebook ~2 MB = 2e6 bytes
  { name: "Kindle books", name_singular: "Kindle book", dimension: "data", si_value: 2e6 },
  // Git repo average ~50 MB = 5e7 bytes
  { name: "Git repositories", name_singular: "Git repository", dimension: "data", si_value: 5e7 },
  // Steam game install average ~30 GB = 3e10 bytes
  { name: "Steam game installs", name_singular: "Steam game install", dimension: "data", si_value: 3e10 },
  // Netflix movie stream HD ~3 GB = 3e9 bytes
  { name: "Netflix movies", name_singular: "Netflix movie", dimension: "data", si_value: 3e9 },
  // Wikipedia article ~70 KB = 7e4 bytes
  { name: "Wikipedia articles", name_singular: "Wikipedia article", dimension: "data", si_value: 7e4 },
  // iPhone photo (12MP HEIF) ~2.5 MB = 2.5e6 bytes
  { name: "iPhone photos", name_singular: "iPhone photo", dimension: "data", si_value: 2.5e6 },
  // Spotify song ~10 MB = 1e7 bytes
  { name: "Spotify songs", name_singular: "Spotify song", dimension: "data", si_value: 1e7 },
  // Twitter/X post ~1 KB = 1000 bytes
  { name: "Tweets", name_singular: "Tweet", dimension: "data", si_value: 1000 },
  // Excel spreadsheet ~100 KB = 1e5 bytes
  { name: "Excel spreadsheets", name_singular: "Excel spreadsheet", dimension: "data", si_value: 1e5 },
  // Zoom meeting hour ~540 MB = 5.4e8 bytes
  { name: "Zoom meeting hours", name_singular: "Zoom meeting hour", dimension: "data", si_value: 5.4e8 },
  // QR code ~3 KB = 3000 bytes
  { name: "QR codes", name_singular: "QR code", dimension: "data", si_value: 3000 },
  // Windows update ~1 GB = 1e9 bytes
  { name: "Windows updates", name_singular: "Windows update", dimension: "data", si_value: 1e9 },
  // PDF page scan ~200 KB = 2e5 bytes
  { name: "Scanned pages", name_singular: "Scanned page", dimension: "data", si_value: 2e5 },

  // ── Frequency (15 units) ─────────────────────────────────────────────
  // Dog panting ~5 Hz
  { name: "Dog pants", name_singular: "Dog pant", dimension: "frequency", si_value: 5 },
  // Ceiling fan low speed ~3 Hz (revolutions per second)
  { name: "Ceiling fan rotations", name_singular: "Ceiling fan rotation", dimension: "frequency", si_value: 3 },
  // Car engine idle ~15 Hz (revolutions per second, ~900 RPM)
  { name: "Car engines idling", name_singular: "Car engine idling", dimension: "frequency", si_value: 15 },
  // Bicycle wheel at cruising speed ~4 Hz
  { name: "Bike wheel rotations", name_singular: "Bike wheel rotation", dimension: "frequency", si_value: 4 },
  // Grandfather clock pendulum ~0.5 Hz
  { name: "Grandfather clocks", name_singular: "Grandfather clock", dimension: "frequency", si_value: 0.5 },
  // Spinning top ~50 Hz
  { name: "Spinning tops", name_singular: "Spinning top", dimension: "frequency", si_value: 50 },
  // Record player 33 RPM ~0.55 Hz
  { name: "Record players", name_singular: "Record player", dimension: "frequency", si_value: 0.55 },
  // Clothes dryer tumble ~0.75 Hz
  { name: "Dryer tumbles", name_singular: "Dryer tumble", dimension: "frequency", si_value: 0.75 },
  // Hummingbird wingbeats ~80 Hz
  { name: "Hummingbird wingbeats", name_singular: "Hummingbird wingbeat", dimension: "frequency", si_value: 80 },
  // Jump rope ~2.5 Hz
  { name: "Jump rope swings", name_singular: "Jump rope swing", dimension: "frequency", si_value: 2.5 },
  // Blender blade ~300 Hz (~18000 RPM)
  { name: "Blender blade spins", name_singular: "Blender blade spin", dimension: "frequency", si_value: 300 },
  // Windshield wipers ~1.5 Hz
  { name: "Windshield wipers", name_singular: "Windshield wiper", dimension: "frequency", si_value: 1.5 },
  // Mosquito wingbeats ~600 Hz
  { name: "Mosquito wingbeats", name_singular: "Mosquito wingbeat", dimension: "frequency", si_value: 600 },
  // Metronome allegro ~2.3 Hz (140 BPM)
  { name: "Metronome ticks", name_singular: "Metronome tick", dimension: "frequency", si_value: 2.3 },
  // Dentist drill ~6000 Hz (~360000 RPM)
  { name: "Dentist drill spins", name_singular: "Dentist drill spin", dimension: "frequency", si_value: 6000 },

  // ── Power (12 units) ─────────────────────────────────────────────────
  // Night light ~4 W
  { name: "Night lights", name_singular: "Night light", dimension: "power", si_value: 4 },
  // Laptop charger ~65 W
  { name: "Laptop chargers", name_singular: "Laptop charger", dimension: "power", si_value: 65 },
  // Lawnmower gas engine ~3700 W (5 HP)
  { name: "Lawnmowers", name_singular: "Lawnmower", dimension: "power", si_value: 3700 },
  // Treadmill ~1500 W
  { name: "Treadmills", name_singular: "Treadmill", dimension: "power", si_value: 1500 },
  // Jet engine ~75 MW = 7.5e7 W
  { name: "Jet engines", name_singular: "Jet engine", dimension: "power", si_value: 7.5e7 },
  // Nuclear reactor ~1 GW = 1e9 W
  { name: "Nuclear reactors", name_singular: "Nuclear reactor", dimension: "power", si_value: 1e9 },
  // Ceiling fan ~75 W
  { name: "Ceiling fans", name_singular: "Ceiling fan", dimension: "power", si_value: 75 },
  // Dishwasher ~1800 W
  { name: "Dishwashers", name_singular: "Dishwasher", dimension: "power", si_value: 1800 },
  // Clothes iron ~1200 W
  { name: "Clothes irons", name_singular: "Clothes iron", dimension: "power", si_value: 1200 },
  // Christmas tree lights (string of 100) ~40 W
  { name: "Christmas light strings", name_singular: "Christmas light string", dimension: "power", si_value: 40 },
  // Garage door opener ~550 W
  { name: "Garage door openers", name_singular: "Garage door opener", dimension: "power", si_value: 550 },
  // Cruise ship engine ~60 MW = 6e7 W
  { name: "Cruise ship engines", name_singular: "Cruise ship engine", dimension: "power", si_value: 6e7 },

  // ── Pressure (12 units) ──────────────────────────────────────────────
  // Yoga mat compression underfoot ~5000 Pa
  { name: "Yoga mat compressions", name_singular: "Yoga mat compression", dimension: "pressure", si_value: 5000 },
  // Pressure cooker ~200 kPa = 2e5 Pa
  { name: "Pressure cookers", name_singular: "Pressure cooker", dimension: "pressure", si_value: 2e5 },
  // Basketball bounce ~150 kPa = 1.5e5 Pa
  { name: "Basketball pressures", name_singular: "Basketball pressure", dimension: "pressure", si_value: 1.5e5 },
  // Espresso machine ~900 kPa = 9e5 Pa (9 bar)
  { name: "Espresso machine pressures", name_singular: "Espresso machine pressure", dimension: "pressure", si_value: 9e5 },
  // Bike tire ~700 kPa = 7e5 Pa
  { name: "Road bike pressures", name_singular: "Road bike pressure", dimension: "pressure", si_value: 7e5 },
  // Blood vessel capillary ~3300 Pa
  { name: "Capillary pressures", name_singular: "Capillary pressure", dimension: "pressure", si_value: 3300 },
  // Champagne bottle ~600 kPa = 6e5 Pa
  { name: "Champagne bottle pressures", name_singular: "Champagne bottle pressure", dimension: "pressure", si_value: 6e5 },
  // Water balloon at burst ~30 kPa = 3e4 Pa
  { name: "Water balloon bursts", name_singular: "Water balloon burst", dimension: "pressure", si_value: 3e4 },
  // Suction cup ~70 kPa = 7e4 Pa
  { name: "Suction cups", name_singular: "Suction cup", dimension: "pressure", si_value: 7e4 },
  // Human footstep on ground ~50 kPa = 5e4 Pa
  { name: "Footstep pressures", name_singular: "Footstep pressure", dimension: "pressure", si_value: 5e4 },
  // Submarine hull at depth ~4e7 Pa (400 atm at 4000m)
  { name: "Submarine hull pressures", name_singular: "Submarine hull pressure", dimension: "pressure", si_value: 4e7 },
  // Tennis ball internal ~82 kPa above atm ~1.8e5 Pa absolute
  { name: "Tennis ball pressures", name_singular: "Tennis ball pressure", dimension: "pressure", si_value: 1.8e5 },

  // ── Speed (12 units) ─────────────────────────────────────────────────
  // Escalator ~0.5 m/s
  { name: "Escalators", name_singular: "Escalator", dimension: "speed", si_value: 0.5 },
  // Conveyor belt (grocery checkout) ~0.3 m/s
  { name: "Conveyor belts", name_singular: "Conveyor belt", dimension: "speed", si_value: 0.3 },
  // River current (moderate) ~1.5 m/s
  { name: "River currents", name_singular: "River current", dimension: "speed", si_value: 1.5 },
  // Sailboat ~6 m/s (~12 knots)
  { name: "Sailing boats", name_singular: "Sailing boat", dimension: "speed", si_value: 6 },
  // Commuter train ~35 m/s (~78 mph)
  { name: "Commuter trains", name_singular: "Commuter train", dimension: "speed", si_value: 35 },
  // Meteor entering atmosphere ~20000 m/s
  { name: "Meteorites", name_singular: "Meteorite", dimension: "speed", si_value: 20000 },
  // Elevator ~2 m/s
  { name: "Elevator rides", name_singular: "Elevator ride", dimension: "speed", si_value: 2 },
  // Shopping cart roll ~1 m/s
  { name: "Shopping cart rolls", name_singular: "Shopping cart roll", dimension: "speed", si_value: 1 },
  // Skateboard cruising ~5 m/s
  { name: "Skateboards", name_singular: "Skateboard", dimension: "speed", si_value: 5 },
  // Golf drive ~70 m/s
  { name: "Golf ball drives", name_singular: "Golf ball drive", dimension: "speed", si_value: 70 },
  // Tsunami wave in open ocean ~200 m/s
  { name: "Tsunami waves", name_singular: "Tsunami wave", dimension: "speed", si_value: 200 },
  // Garden snail ~0.001 m/s
  { name: "Garden snails", name_singular: "Garden snail", dimension: "speed", si_value: 0.001 },

  // ── Temperature (12 units) ───────────────────────────────────────────
  // Liquid nitrogen boiling point ~77 K
  { name: "Liquid nitrogen", name_singular: "Liquid nitrogen", dimension: "temperature", si_value: 77 },
  // Wine cellar ~286 K (13C)
  { name: "Wine cellars", name_singular: "Wine cellar", dimension: "temperature", si_value: 286 },
  // Sauna ~358 K (85C)
  { name: "Saunas", name_singular: "Sauna", dimension: "temperature", si_value: 358 },
  // Pottery kiln ~1273 K (1000C)
  { name: "Kiln firings", name_singular: "Kiln firing", dimension: "temperature", si_value: 1273 },
  // Welding torch (oxy-acetylene) ~3773 K (3500C)
  { name: "Welding torches", name_singular: "Welding torch", dimension: "temperature", si_value: 3773 },
  // Cup of hot cocoa ~333 K (60C)
  { name: "Hot cocoa cups", name_singular: "Hot cocoa cup", dimension: "temperature", si_value: 333 },
  // Arctic winter average ~243 K (-30C)
  { name: "Arctic winters", name_singular: "Arctic winter", dimension: "temperature", si_value: 243 },
  // Car engine running ~373 K (100C)
  { name: "Running car engines", name_singular: "Running car engine", dimension: "temperature", si_value: 373 },
  // Fresh-baked cookie ~450 K (177C)
  { name: "Cookie ovens", name_singular: "Cookie oven", dimension: "temperature", si_value: 450 },

  // ── Force (10 units) ─────────────────────────────────────────────────
  // Door closer spring ~20 N
  { name: "Door closers", name_singular: "Door closer", dimension: "force", si_value: 20 },
  // Bicycle brake pad ~200 N
  { name: "Bicycle brakes", name_singular: "Bicycle brake", dimension: "force", si_value: 200 },
  // Karate chop ~3000 N
  { name: "Karate chops", name_singular: "Karate chop", dimension: "force", si_value: 3000 },
  // Hydraulic jack (small) ~20000 N
  { name: "Hydraulic jacks", name_singular: "Hydraulic jack", dimension: "force", si_value: 20000 },
  // Anchor chain load ~1e5 N
  { name: "Anchor chains", name_singular: "Anchor chain", dimension: "force", si_value: 1e5 },
  // Rubber band snap ~5 N
  { name: "Rubber band snaps", name_singular: "Rubber band snap", dimension: "force", si_value: 5 },
  // Stapler press ~30 N
  { name: "Stapler presses", name_singular: "Stapler press", dimension: "force", si_value: 30 },
  // Shopping cart push ~50 N
  { name: "Shopping cart pushes", name_singular: "Shopping cart push", dimension: "force", si_value: 50 },
  // Seatbelt in crash ~15000 N
  { name: "Seatbelt catches", name_singular: "Seatbelt catch", dimension: "force", si_value: 15000 },
  // Toddler pull on finger ~10 N
  { name: "Toddler pulls", name_singular: "Toddler pull", dimension: "force", si_value: 10 },

  // ── Area (10 units) ──────────────────────────────────────────────────
  // Business card ~0.005 m² (3.5x2 in)
  { name: "Business cards", name_singular: "Business card", dimension: "area", si_value: 0.005 },
  // License plate ~0.065 m² (12x6 in)
  { name: "License plates", name_singular: "License plate", dimension: "area", si_value: 0.065 },
  // Ping pong table ~4.18 m²
  { name: "Ping pong tables", name_singular: "Ping pong table", dimension: "area", si_value: 4.18 },
  // Golf course ~550000 m² (55 hectares)
  { name: "Golf courses", name_singular: "Golf course", dimension: "area", si_value: 5.5e5 },
  // Airport runway ~900000 m² (3000x300m)
  { name: "Airport runways", name_singular: "Airport runway", dimension: "area", si_value: 9e5 },
  // Sticky note ~0.0058 m² (3x3 in)
  { name: "Sticky notes", name_singular: "Sticky note", dimension: "area", si_value: 0.0058 },
  // Yoga mat ~1.5 m²
  { name: "Yoga mats", name_singular: "Yoga mat", dimension: "area", si_value: 1.5 },
  // Bath towel ~0.72 m²
  { name: "Bath towels", name_singular: "Bath towel", dimension: "area", si_value: 0.72 },
  // Movie screen ~200 m²
  { name: "Movie screens", name_singular: "Movie screen", dimension: "area", si_value: 200 },
  // Trampoline ~10.5 m² (14ft round)
  { name: "Trampoline surfaces", name_singular: "Trampoline surface", dimension: "area", si_value: 10.5 },

  // ── Energy (10 units) ────────────────────────────────────────────────
  // Popping one bubble wrap bubble ~0.07 J
  { name: "Bubble wrap pop energies", name_singular: "Bubble wrap pop energy", dimension: "energy", si_value: 0.07 },
  // Slamming a door ~5 J
  { name: "Slamming doors", name_singular: "Slamming door", dimension: "energy", si_value: 5 },
  // Bowling strike ~250 J
  { name: "Bowling strikes", name_singular: "Bowling strike", dimension: "energy", si_value: 250 },
  // Car crash at 60 mph ~5e5 J
  { name: "Car crashes", name_singular: "Car crash", dimension: "energy", si_value: 5e5 },
  // TNT stick ~4.2e6 J (1 kg TNT)
  { name: "TNT sticks", name_singular: "TNT stick", dimension: "energy", si_value: 4.2e6 },
  // Nuclear fuel pellet ~3.4e11 J
  { name: "Nuclear fuel pellets", name_singular: "Nuclear fuel pellet", dimension: "energy", si_value: 3.4e11 },
  // Dropping phone on face in bed ~0.01 J
  { name: "Dropped phones", name_singular: "Dropped phone", dimension: "energy", si_value: 0.01 },
  // Snapping a pencil ~1 J
  { name: "Pencil snaps", name_singular: "Pencil snap", dimension: "energy", si_value: 1 },
  // Flushing a toilet ~3000 J (pumping ~10L up ~30m equivalent)
  { name: "Toilet flushes", name_singular: "Toilet flush", dimension: "energy", si_value: 3000 },
  // Cannonball shot (historical) ~2e5 J
  { name: "Cannonball shots", name_singular: "Cannonball shot", dimension: "energy", si_value: 2e5 },

  // ── Volume (10 units) ────────────────────────────────────────────────
  // Champagne flute ~0.00018 m³ (180 mL)
  { name: "Champagne flutes", name_singular: "Champagne flute", dimension: "volume", si_value: 1.8e-4 },
  // Fish tank (20 gallon) ~0.076 m³
  { name: "Fish tanks", name_singular: "Fish tank", dimension: "volume", si_value: 0.076 },
  // Hot tub ~1.5 m³
  { name: "Hot tubs", name_singular: "Hot tub", dimension: "volume", si_value: 1.5 },
  // Oil tanker cargo ~300000 m³
  { name: "Oil tankers", name_singular: "Oil tanker", dimension: "volume", si_value: 3e5 },
  // Thimble ~1e-6 m³ (1 mL)
  { name: "Thimbles", name_singular: "Thimble", dimension: "volume", si_value: 1e-6 },
  // Shipping container (20ft) ~33.2 m³
  { name: "Shipping containers", name_singular: "Shipping container", dimension: "volume", si_value: 33.2 },
  // Kiddie pool ~0.3 m³ (300 L)
  { name: "Kiddie pools", name_singular: "Kiddie pool", dimension: "volume", si_value: 0.3 },
  // Red Solo cup ~0.000473 m³ (473 mL / 16 oz)
  { name: "Solo cups", name_singular: "Solo cup", dimension: "volume", si_value: 4.73e-4 },
  // Kitchen sink ~0.04 m³ (40 L)
  { name: "Kitchen sinks", name_singular: "Kitchen sink", dimension: "volume", si_value: 0.04 },
  // Water tower ~4000 m³
  { name: "Water towers", name_singular: "Water tower", dimension: "volume", si_value: 4000 },

  // ── Time (10 units) ──────────────────────────────────────────────────
  // Snooze alarm ~540 s (9 min)
  { name: "Snooze alarms", name_singular: "Snooze alarm", dimension: "time", si_value: 540 },
  // Halftime show ~1200 s (20 min)
  { name: "Halftime shows", name_singular: "Halftime show", dimension: "time", si_value: 1200 },
  // Lunch break ~3600 s (1 hr)
  { name: "Lunch breaks", name_singular: "Lunch break", dimension: "time", si_value: 3600 },
  // Semester ~1.26e7 s (~146 days)
  { name: "Semesters", name_singular: "Semester", dimension: "time", si_value: 1.26e7 },
  // Generation ~9.46e8 s (~30 years)
  { name: "Generations", name_singular: "Generation", dimension: "time", si_value: 9.46e8 },
  // Microwave minute ~60 s
  { name: "Microwave minutes", name_singular: "Microwave minute", dimension: "time", si_value: 60 },
  // Elevator ride ~30 s
  { name: "Elevator ride durations", name_singular: "Elevator ride duration", dimension: "time", si_value: 30 },
  // Dog walk ~1800 s (30 min)
  { name: "Dog walks", name_singular: "Dog walk", dimension: "time", si_value: 1800 },
  // Car wash ~600 s (10 min)
  { name: "Car washes", name_singular: "Car wash", dimension: "time", si_value: 600 },
  // Oil change appointment ~2700 s (45 min)
  { name: "Oil changes", name_singular: "Oil change", dimension: "time", si_value: 2700 },

  // ── Mass (10 units) ──────────────────────────────────────────────────
  // Paperclip ~0.001 kg (1 gram)
  { name: "Paperclip weights", name_singular: "Paperclip weight", dimension: "mass", si_value: 0.001 },
  // Baseball ~0.145 kg
  { name: "Baseballs", name_singular: "Baseball", dimension: "mass", si_value: 0.145 },
  // Textbook ~1.5 kg
  { name: "Textbooks", name_singular: "Textbook", dimension: "mass", si_value: 1.5 },
  // Labrador retriever ~30 kg
  { name: "Labrador retrievers", name_singular: "Labrador retriever", dimension: "mass", si_value: 30 },
  // Locomotive ~100000 kg (100 tonnes)
  { name: "Locomotive weights", name_singular: "Locomotive weight", dimension: "mass", si_value: 1e5 },
  // Boeing 747 max takeoff ~412775 kg
  { name: "Empty Boeing 747s", name_singular: "Empty Boeing 747", dimension: "mass", si_value: 4.12e5 },
  // Bowling ball ~6.35 kg (14 lbs)
  { name: "Bowling balls", name_singular: "Bowling ball", dimension: "mass", si_value: 6.35 },
  // Bag of flour ~2.27 kg (5 lbs)
  { name: "Bags of flour", name_singular: "Bag of flour", dimension: "mass", si_value: 2.27 },
  // Manhole cover ~113 kg (250 lbs)
  { name: "Manhole covers", name_singular: "Manhole cover", dimension: "mass", si_value: 113 },
  // Anchor (ship) ~5000 kg
  { name: "Ship anchors", name_singular: "Ship anchor", dimension: "mass", si_value: 5000 },

  // ── Length (12 units) ────────────────────────────────────────────────
  // Chopstick ~0.24 m
  { name: "Chopsticks", name_singular: "Chopstick", dimension: "length", si_value: 0.24 },
  // Cricket bat ~0.85 m
  { name: "Cricket bats", name_singular: "Cricket bat", dimension: "length", si_value: 0.85 },
  // Surfboard ~2.1 m (shortboard)
  { name: "Surfboards", name_singular: "Surfboard", dimension: "length", si_value: 2.1 },
  // Tennis net height ~0.914 m
  { name: "Tennis nets", name_singular: "Tennis net", dimension: "length", si_value: 0.914 },
  // City block ~100 m
  { name: "City block lengths", name_singular: "City block length", dimension: "length", si_value: 100 },
  // Marathon route ~42195 m
  { name: "Marathon routes", name_singular: "Marathon route", dimension: "length", si_value: 42195 },
  // Skateboard ~0.81 m (32 in)
  { name: "Skateboard lengths", name_singular: "Skateboard length", dimension: "length", si_value: 0.81 },
  // Bowling lane ~18.29 m (60 ft)
  { name: "Bowling lane lengths", name_singular: "Bowling lane length", dimension: "length", si_value: 18.29 },
  // Shipping lane (English Channel) ~34000 m
  { name: "English Channel crossings", name_singular: "English Channel crossing", dimension: "length", si_value: 34000 },
  // Suspension bridge span (Golden Gate main span) ~1280 m
  { name: "Bridge spans", name_singular: "Bridge span", dimension: "length", si_value: 1280 },
  // Paper towel sheet ~0.28 m
  { name: "Paper towel sheets", name_singular: "Paper towel sheet", dimension: "length", si_value: 0.28 },
  // Garden hose ~15.24 m (50 ft)
  { name: "Garden hose lengths", name_singular: "Garden hose length", dimension: "length", si_value: 15.24 },
];
