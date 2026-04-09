export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Length (m) ─── 20 units ───────────────────────────────────────────────

  // Hydrogen atom diameter ~1.06e-10 m
  { name: "Hydrogen atoms", name_singular: "Hydrogen atom", dimension: "length", si_value: 1.06e-10 },
  // DNA double helix width ~2.0e-9 m
  { name: "DNA helices", name_singular: "DNA helix", dimension: "length", si_value: 2.0e-9 },
  // Visible light wavelength (green, 550nm) ~5.5e-7 m
  { name: "Green light wavelengths", name_singular: "Green light wavelength", dimension: "length", si_value: 5.5e-7 },
  // E. coli bacterium length ~2e-6 m
  { name: "E. coli bacteria", name_singular: "E. coli bacterium", dimension: "length", si_value: 2e-6 },
  // US quarter diameter ~24.26 mm
  { name: "Quarters", name_singular: "Quarter", dimension: "length", si_value: 0.02426 },
  // Standard dinner plate diameter ~26.7 cm
  { name: "Dinner plates", name_singular: "Dinner plate", dimension: "length", si_value: 0.267 },
  // New York City block ~80 m (short side)
  { name: "City blocks", name_singular: "City block", dimension: "length", si_value: 80 },
  // Panama Canal length ~82 km
  { name: "Panama Canals", name_singular: "Panama Canal", dimension: "length", si_value: 82000 },
  // Mount Everest height 8848.86 m
  { name: "Mount Everest heights", name_singular: "Mount Everest height", dimension: "length", si_value: 8848.86 },
  // Great Wall of China ~21196 km
  { name: "Great Walls of China", name_singular: "Great Wall of China", dimension: "length", si_value: 21196000 },
  // Jupiter diameter ~139820 km
  { name: "Jupiter diameters", name_singular: "Jupiter diameter", dimension: "length", si_value: 1.3982e8 },
  // 1 AU ~1.496e11 m
  { name: "Astronomical units", name_singular: "Astronomical unit", dimension: "length", si_value: 1.496e11 },
  // Distance to Proxima Centauri ~4.014e16 m (4.246 ly)
  { name: "Proxima Centauri trips", name_singular: "Proxima Centauri trip", dimension: "length", si_value: 4.014e16 },
  // Light-year ~9.461e15 m
  { name: "Light-years", name_singular: "Light-year", dimension: "length", si_value: 9.461e15 },
  // Milky Way diameter ~1e21 m
  { name: "Milky Way diameters", name_singular: "Milky Way diameter", dimension: "length", si_value: 1.0e21 },

  // ── Mass (kg) ─── 15 units ────────────────────────────────────────────────

  // Electron mass ~9.109e-31 kg
  { name: "Electrons", name_singular: "Electron", dimension: "mass", si_value: 9.109e-31 },
  // Grain of sand ~6.5e-8 kg
  { name: "Sand grains", name_singular: "Sand grain", dimension: "mass", si_value: 6.5e-8 },
  // Water drop ~5e-5 kg (50 mg)
  { name: "Water drops", name_singular: "Water drop", dimension: "mass", si_value: 5e-5 },
  // Paperclip ~1g
  { name: "Paperclips", name_singular: "Paperclip", dimension: "mass", si_value: 0.001 },
  // Apple ~182 g
  { name: "Apples", name_singular: "Apple", dimension: "mass", si_value: 0.182 },
  // House cat ~4.5 kg
  { name: "House cats", name_singular: "House cat", dimension: "mass", si_value: 4.5 },
  // Sedan ~1500 kg
  { name: "Sedans", name_singular: "Sedan", dimension: "mass", si_value: 1500 },
  // Blue whale ~140000 kg
  { name: "Blue whales", name_singular: "Blue whale", dimension: "mass", si_value: 140000 },
  // International Space Station ~420000 kg
  { name: "Space Stations", name_singular: "Space Station", dimension: "mass", si_value: 420000 },
  // Titanic ~52310000 kg
  { name: "Titanics", name_singular: "Titanic", dimension: "mass", si_value: 5.231e7 },
  // Great Pyramid of Giza mass ~6e9 kg
  { name: "Great Pyramid masses", name_singular: "Great Pyramid mass", dimension: "mass", si_value: 6e9 },
  // Earth's Moon ~7.342e22 kg
  { name: "Moons", name_singular: "Moon", dimension: "mass", si_value: 7.342e22 },

  // ── Time (s) ─── 15 units ────────────────────────────────────────────────

  // Processor cycle at 4 GHz ~2.5e-10 s
  { name: "Processor cycles", name_singular: "Processor cycle", dimension: "time", si_value: 2.5e-10 },
  // Camera shutter 1/1000s exposure ~0.001 s
  { name: "Camera shutters", name_singular: "Camera shutter", dimension: "time", si_value: 0.001 },
  // Heartbeat interval ~0.86 s (70 bpm)
  { name: "Heartbeats", name_singular: "Heartbeat", dimension: "time", si_value: 0.857 },
  // Average pop song ~3.5 min = 210 s
  { name: "Pop songs", name_singular: "Pop song", dimension: "time", si_value: 210 },
  // TV episode ~42 min = 2520 s
  { name: "TV episodes", name_singular: "TV episode", dimension: "time", si_value: 2520 },
  // Soccer match ~90 min = 5400 s
  { name: "Soccer matches", name_singular: "Soccer match", dimension: "time", si_value: 5400 },
  // School semester ~16 weeks = 9.677e6 s
  { name: "School semesters", name_singular: "School semester", dimension: "time", si_value: 9.677e6 },
  // Pregnancy ~40 weeks = 2.419e7 s
  { name: "Human pregnancies", name_singular: "Human pregnancy", dimension: "time", si_value: 2.419e7 },
  // US presidency ~4 years = 1.261e8 s
  { name: "US presidencies", name_singular: "US presidency", dimension: "time", si_value: 1.261e8 },
  // Average human lifespan ~73 years = 2.303e9 s
  { name: "Human lifespans", name_singular: "Human lifespan", dimension: "time", si_value: 2.303e9 },
  // Great Wall construction ~1800 years = 5.68e10 s
  { name: "Great Wall constructions", name_singular: "Great Wall construction", dimension: "time", si_value: 5.68e10 },
  // Last ice age ~11700 years = 3.692e11 s
  { name: "Ice ages", name_singular: "Ice age", dimension: "time", si_value: 3.692e11 },
  // Age of dinosaurs (Mesozoic) ~186 million years = 5.87e15 s
  { name: "Mesozoic eras", name_singular: "Mesozoic era", dimension: "time", si_value: 5.87e15 },
  // Age of universe ~13.8 billion years = 4.355e17 s
  { name: "Universe ages", name_singular: "Universe age", dimension: "time", si_value: 4.355e17 },

  // ── Volume (m³) ─── 15 units ──────────────────────────────────────────────

  // Eyedrop ~50 µL = 5e-8 m³
  { name: "Eyedrops", name_singular: "Eyedrop", dimension: "volume", si_value: 5e-8 },
  // Soda can ~355 mL = 3.55e-4 m³
  { name: "Soda cans", name_singular: "Soda can", dimension: "volume", si_value: 3.55e-4 },
  // Standard bucket ~18.9 L = 0.0189 m³
  { name: "Buckets", name_singular: "Bucket", dimension: "volume", si_value: 0.0189 },
  // Bedroom ~33 m³ (12x12x9 ft)
  { name: "Bedrooms", name_singular: "Bedroom", dimension: "volume", si_value: 33 },
  // Typical house interior ~450 m³
  { name: "Houses", name_singular: "House", dimension: "volume", si_value: 450 },
  // Olympic swimming pool 2500 m³
  { name: "Olympic pools", name_singular: "Olympic pool", dimension: "volume", si_value: 2500 },
  // Boeing 747 cabin ~876 m³
  { name: "Boeing 747 cabins", name_singular: "Boeing 747 cabin", dimension: "volume", si_value: 876 },
  // Supertanker cargo ~318000 m³
  { name: "Supertanker holds", name_singular: "Supertanker hold", dimension: "volume", si_value: 318000 },
  // Lake Tahoe ~150.7 km³ = 1.507e11 m³
  { name: "Lake Tahoes", name_singular: "Lake Tahoe", dimension: "volume", si_value: 1.507e11 },

  // ── Area (m²) ─── 15 units ───────────────────────────────────────────────

  // Postage stamp ~0.00097 m² (already exists, using fingernail)
  // Fingernail ~1.5e-4 m²
  { name: "Fingernails", name_singular: "Fingernail", dimension: "area", si_value: 1.5e-4 },
  // Phone screen ~0.009 m² (6.1 inch)
  { name: "Phone screens", name_singular: "Phone screen", dimension: "area", si_value: 0.009 },
  // Sheet of paper ~0.0603 m²
  { name: "Sheets of paper", name_singular: "Sheet of paper", dimension: "area", si_value: 0.0603 },
  // Office desk ~1.4 m²
  { name: "Office desks", name_singular: "Office desk", dimension: "area", si_value: 1.4 },
  // Tennis court 260.87 m²
  { name: "Tennis court areas", name_singular: "Tennis court area", dimension: "area", si_value: 260.87 },
  // Ice hockey rink 1580 m²
  { name: "Hockey rinks", name_singular: "Hockey rink", dimension: "area", si_value: 1580 },
  // Disneyland ~340000 m² (85 acres)
  { name: "Disneylands", name_singular: "Disneyland", dimension: "area", si_value: 340000 },
  // Monaco ~2.02 km² = 2.02e6 m²
  { name: "Monacos", name_singular: "Monaco", dimension: "area", si_value: 2.02e6 },
  // Manhattan ~59.1 km² = 5.91e7 m²
  { name: "Manhattans", name_singular: "Manhattan", dimension: "area", si_value: 5.91e7 },
  // Lake Michigan surface ~57800 km² = 5.78e10 m²
  { name: "Lake Michigan surfaces", name_singular: "Lake Michigan surface", dimension: "area", si_value: 5.78e10 },
  // Alaska ~1.718e6 km² = 1.718e12 m²
  { name: "Alaskas", name_singular: "Alaska", dimension: "area", si_value: 1.718e12 },
  // Africa ~30.37 million km² = 3.037e13 m²
  { name: "Africas", name_singular: "Africa", dimension: "area", si_value: 3.037e13 },

  // ── Speed (m/s) ─── 15 units ─────────────────────────────────────────────

  // Hair growth ~15 cm/year = ~4.76e-9 m/s
  { name: "Hair growths", name_singular: "Hair growth", dimension: "speed", si_value: 4.76e-9 },
  // Army ant march ~0.03 m/s
  { name: "Marching ants", name_singular: "Marching ant", dimension: "speed", si_value: 0.03 },
  // Jogging human ~2.5 m/s
  { name: "Jogging humans", name_singular: "Jogging human", dimension: "speed", si_value: 2.5 },
  // City bus ~11.2 m/s (25 mph)
  { name: "City buses", name_singular: "City bus", dimension: "speed", si_value: 11.2 },
  // Highway speed limit ~31.3 m/s (70 mph)
  { name: "Highway speeds", name_singular: "Highway speed", dimension: "speed", si_value: 31.3 },
  // Passenger jet ~250 m/s
  { name: "Passenger jets", name_singular: "Passenger jet", dimension: "speed", si_value: 250 },
  // Speed of sound in water ~1480 m/s
  { name: "Sounds in water", name_singular: "Sound in water", dimension: "speed", si_value: 1480 },
  // SR-71 Blackbird ~980 m/s (Mach 3.2)
  { name: "SR-71 Blackbirds", name_singular: "SR-71 Blackbird", dimension: "speed", si_value: 980 },
  // ISS orbital speed ~7660 m/s
  { name: "Space Station orbits", name_singular: "Space Station orbit", dimension: "speed", si_value: 7660 },
  // Earth orbital speed ~29783 m/s
  { name: "Earth orbit speeds", name_singular: "Earth orbit speed", dimension: "speed", si_value: 29783 },
  // Speed of light 299792458 m/s
  { name: "Light speeds", name_singular: "Light speed", dimension: "speed", si_value: 299792458 },

  // ── Temperature (K) ─── 15 units ─────────────────────────────────────────

  // Home freezer ~255 K (-18°C)
  { name: "Deep freezers", name_singular: "Deep freezer", dimension: "temperature", si_value: 255 },
  // Human body 310.15 K (37°C)
  { name: "Body temperatures", name_singular: "Body temperature", dimension: "temperature", si_value: 310.15 },
  // Human fever ~311.65 K (38.5°C)
  { name: "Human fevers", name_singular: "Human fever", dimension: "temperature", si_value: 311.65 },
  // Boiling water 373.15 K
  { name: "Boiling water", name_singular: "Boiling water", dimension: "temperature", si_value: 373.15 },
  // Bread oven ~473 K (200°C)
  { name: "Bread ovens", name_singular: "Bread oven", dimension: "temperature", si_value: 473.15 },
  // Campfire ~873 K (600°C)
  { name: "Campfires", name_singular: "Campfire", dimension: "temperature", si_value: 873 },
  // Molten steel ~1800 K
  { name: "Molten steel pours", name_singular: "Molten steel pour", dimension: "temperature", si_value: 1800 },
  { name: "Sun surfaces", name_singular: "Sun surface", dimension: "temperature", si_value: 5778 },
  // Sun core ~1.57e7 K
  { name: "Sun cores", name_singular: "Sun core", dimension: "temperature", si_value: 1.57e7 },

  // ── Energy (J) ─── 15 units ──────────────────────────────────────────────

  // Single photon (red 700nm) ~2.84e-19 J
  { name: "Red photons", name_singular: "Red photon", dimension: "energy", si_value: 2.84e-19 },
  // ATP molecule hydrolysis ~5.4e-20 J
  { name: "ATP molecules", name_singular: "ATP molecule", dimension: "energy", si_value: 5.4e-20 },
  // Thrown baseball ~120 J (40 m/s, 0.145 kg)
  { name: "Thrown baseballs", name_singular: "Thrown baseball", dimension: "energy", si_value: 116 },
  // Food calorie (kcal) = 4184 J
  { name: "Food calories", name_singular: "Food calorie", dimension: "energy", si_value: 4184 },
  // Car fuel tank ~1.26e9 J (10 gal gasoline)
  { name: "Car fuel tanks", name_singular: "Car fuel tank", dimension: "energy", si_value: 1.26e9 },
  // Stick of dynamite ~2.1e6 J
  { name: "Dynamite sticks", name_singular: "Dynamite stick", dimension: "energy", si_value: 2.1e6 },
  // Ton of coal ~2.93e10 J
  { name: "Tons of coal", name_singular: "Ton of coal", dimension: "energy", si_value: 2.93e10 },
  // Household daily electricity ~36 MJ (~10 kWh)
  { name: "Household power days", name_singular: "Household power day", dimension: "energy", si_value: 3.6e7 },
  // Space Shuttle launch ~1.2e13 J
  { name: "Shuttle launches", name_singular: "Shuttle launch", dimension: "energy", si_value: 1.2e13 },
  // Annual US electricity ~1.39e19 J
  { name: "US annual grids", name_singular: "US annual grid", dimension: "energy", si_value: 1.39e19 },
  // Sun daily output ~3.35e31 J
  { name: "Sun daily outputs", name_singular: "Sun daily output", dimension: "energy", si_value: 3.35e31 },
  // Supernova ~1e44 J
  { name: "Supernova blasts", name_singular: "Supernova blast", dimension: "energy", si_value: 1e44 },

  // ── Force (N) ─── 15 units ───────────────────────────────────────────────

  // Dust grain settling ~1e-9 N
  { name: "Dust motes", name_singular: "Dust mote", dimension: "force", si_value: 1e-9 },
  // Ant lifting force ~0.001 N
  { name: "Ant lifts", name_singular: "Ant lift", dimension: "force", si_value: 0.001 },
  // Fridge magnet ~1 N
  { name: "Fridge magnets", name_singular: "Fridge magnet", dimension: "force", si_value: 1 },
  // Finger tap ~0.5 N
  { name: "Finger taps", name_singular: "Finger tap", dimension: "force", si_value: 0.5 },
  // Mouse click ~0.6 N
  { name: "Mouse clicks", name_singular: "Mouse click", dimension: "force", si_value: 0.6 },
  // Apple weight ~1.78 N
  { name: "Apple weights", name_singular: "Apple weight", dimension: "force", si_value: 1.78 },
  // Handshake grip ~50 N
  { name: "Handshake grips", name_singular: "Handshake grip", dimension: "force", si_value: 50 },
  // Boxing punch ~4000 N (pro heavyweight)
  { name: "Boxing punches", name_singular: "Boxing punch", dimension: "force", si_value: 4000 },
  // Car braking force ~10000 N
  { name: "Car brakes", name_singular: "Car brake", dimension: "force", si_value: 10000 },
  // Horse pulling ~800 N
  { name: "Draft horses", name_singular: "Draft horse", dimension: "force", si_value: 800 },
  // Car engine thrust ~7000 N
  { name: "Sedan engines", name_singular: "Sedan engine", dimension: "force", si_value: 7000 },
  // Crane cable max ~500000 N
  { name: "Crane cables", name_singular: "Crane cable", dimension: "force", si_value: 500000 },
  // Locomotive tractive effort ~500000 N
  { name: "Locomotive pulls", name_singular: "Locomotive pull", dimension: "force", si_value: 500000 },
  // F-16 engine thrust ~127000 N (with afterburner)
  { name: "F-16 afterburners", name_singular: "F-16 afterburner", dimension: "force", si_value: 127000 },
  // Saturn V liftoff thrust ~33.4e6 N
  { name: "Saturn V thrusts", name_singular: "Saturn V thrust", dimension: "force", si_value: 3.34e7 },

  // ── Pressure (Pa) ─── 15 units ───────────────────────────────────────────

  // Sound of breathing ~1e-3 Pa
  { name: "Quiet breaths", name_singular: "Quiet breath", dimension: "pressure", si_value: 1e-3 },
  // Whisper sound pressure ~2e-3 Pa
  { name: "Whispers", name_singular: "Whisper", dimension: "pressure", si_value: 2e-3 },
  // Normal conversation ~0.02 Pa (sound pressure)
  { name: "Conversations", name_singular: "Conversation", dimension: "pressure", si_value: 0.02 },
  // Human blowing air ~500 Pa
  { name: "Blown candles", name_singular: "Blown candle", dimension: "pressure", si_value: 500 },
  // Standard atmosphere 101325 Pa
  { name: "Atmospheres", name_singular: "Atmosphere", dimension: "pressure", si_value: 101325 },
  // Scuba tank ~2.07e7 Pa (3000 psi)
  { name: "Scuba tanks", name_singular: "Scuba tank", dimension: "pressure", si_value: 2.07e7 },
  // Fire hydrant ~690000 Pa (100 psi)
  { name: "Fire hydrants", name_singular: "Fire hydrant", dimension: "pressure", si_value: 690000 },
  // Hydraulic press ~7e7 Pa
  { name: "Hydraulic presses", name_singular: "Hydraulic press", dimension: "pressure", si_value: 7e7 },
  // Ocean deepest point ~1.1e8 Pa
  { name: "Mariana depths", name_singular: "Mariana depth", dimension: "pressure", si_value: 1.1e8 },
  // Diamond anvil cell ~1e11 Pa
  { name: "Diamond anvil cells", name_singular: "Diamond anvil cell", dimension: "pressure", si_value: 1e11 },
  // Earth core ~3.6e11 Pa
  { name: "Earth core pressures", name_singular: "Earth core pressure", dimension: "pressure", si_value: 3.6e11 },
  // Neutron star surface ~1e33 Pa
  { name: "Neutron star surfaces", name_singular: "Neutron star surface", dimension: "pressure", si_value: 1e33 },

  // ── Power (W) ─── 15 units ───────────────────────────────────────────────

  // Human cell metabolism ~1e-12 W
  { name: "Human cells", name_singular: "Human cell", dimension: "power", si_value: 1e-12 },
  // LED indicator light ~0.02 W
  { name: "LED indicators", name_singular: "LED indicator", dimension: "power", si_value: 0.02 },
  // Phone charger ~5 W
  { name: "USB chargers", name_singular: "USB charger", dimension: "power", si_value: 5 },
  // Laptop ~65 W
  { name: "Laptops", name_singular: "Laptop", dimension: "power", si_value: 65 },
  // Human body at rest ~80 W
  { name: "Resting humans", name_singular: "Resting human", dimension: "power", si_value: 80 },
  // Space heater ~1500 W
  { name: "Space heaters", name_singular: "Space heater", dimension: "power", si_value: 1500 },
  // Car engine ~150 kW
  { name: "Car engines", name_singular: "Car engine", dimension: "power", si_value: 150000 },
  // Diesel locomotive ~3.3 MW
  { name: "Locomotives", name_singular: "Locomotive", dimension: "power", si_value: 3.3e6 },
  // Boeing 747 engines ~90 MW
  { name: "Boeing 747 engines", name_singular: "Boeing 747 engine", dimension: "power", si_value: 9e7 },
  // Nuclear power plant ~1 GW
  { name: "Nuclear plants", name_singular: "Nuclear plant", dimension: "power", si_value: 1e9 },
  // Three Gorges Dam ~22.5 GW
  { name: "Three Gorges Dams", name_singular: "Three Gorges Dam", dimension: "power", si_value: 2.25e10 },
  // Hurricane ~6e14 W
  { name: "Hurricanes", name_singular: "Hurricane", dimension: "power", si_value: 6e14 },
  // Sun luminosity ~3.828e26 W
  { name: "Sun luminosities", name_singular: "Sun luminosity", dimension: "power", si_value: 3.828e26 },

  // ── Frequency (Hz) ─── 15 units ──────────────────────────────────────────

  // Earth rotation ~1.157e-5 Hz (once per day)
  { name: "Earth days", name_singular: "Earth day", dimension: "frequency", si_value: 1.157e-5 },
  // Seasons ~1.27e-7 Hz (once per ~91 days)
  { name: "Seasons", name_singular: "Season", dimension: "frequency", si_value: 1.27e-7 },
  // Human resting breaths ~0.25 Hz (15/min)
  { name: "Human breaths", name_singular: "Human breath", dimension: "frequency", si_value: 0.25 },
  // Walking footsteps ~1.8 Hz
  { name: "Walking footsteps", name_singular: "Walking footstep", dimension: "frequency", si_value: 1.8 },
  // Bass guitar low E ~41.2 Hz
  { name: "Bass guitar notes", name_singular: "Bass guitar note", dimension: "frequency", si_value: 41.2 },
  // Middle A (tuning) 440 Hz
  { name: "Concert A notes", name_singular: "Concert A note", dimension: "frequency", si_value: 440 },
  // Smoke detector beep ~3200 Hz
  { name: "Smoke detector beeps", name_singular: "Smoke detector beep", dimension: "frequency", si_value: 3200 },
  // Highest piano key ~4186 Hz
  { name: "Piano high C notes", name_singular: "Piano high C note", dimension: "frequency", si_value: 4186 },
  // CD sample rate 44100 Hz
  { name: "CD sample rates", name_singular: "CD sample rate", dimension: "frequency", si_value: 44100 },
  // AM radio ~1 MHz
  { name: "AM radio waves", name_singular: "AM radio wave", dimension: "frequency", si_value: 1e6 },
  // Microwave oven 2.45 GHz
  { name: "Microwave frequencies", name_singular: "Microwave frequency", dimension: "frequency", si_value: 2.45e9 },
  // 5G mmWave ~39 GHz
  { name: "5G millimeter waves", name_singular: "5G millimeter wave", dimension: "frequency", si_value: 3.9e10 },
  // Visible light (green) ~5.45e14 Hz
  { name: "Green light frequencies", name_singular: "Green light frequency", dimension: "frequency", si_value: 5.45e14 },

  // ── Data (bytes) ─── 15 units ────────────────────────────────────────────

  // Single ASCII character = 1 byte
  { name: "Text characters", name_singular: "Text character", dimension: "data", si_value: 1 },
  // MP3 song ~4 MB
  { name: "MP3 songs", name_singular: "MP3 song", dimension: "data", si_value: 4e6 },
  // Spotify playlist (50 songs) ~200 MB
  { name: "Spotify playlists", name_singular: "Spotify playlist", dimension: "data", si_value: 2e8 },
  // DVD ~4.7 GB
  { name: "DVDs", name_singular: "DVD", dimension: "data", si_value: 4.7e9 },
  // HD movie ~5 GB
  { name: "HD movies", name_singular: "HD movie", dimension: "data", si_value: 5e9 },
  // Blu-ray disc 25 GB
  { name: "Blu-ray discs", name_singular: "Blu-ray disc", dimension: "data", si_value: 2.5e10 },
  // Laptop hard drive ~512 GB
  { name: "Laptop hard drives", name_singular: "Laptop hard drive", dimension: "data", si_value: 5.12e11 },
  // iPhone storage ~256 GB
  { name: "iPhone storages", name_singular: "iPhone storage", dimension: "data", si_value: 2.56e11 },
  // 4K movie ~100 GB
  { name: "4K movies", name_singular: "4K movie", dimension: "data", si_value: 1e11 },
  // Server rack ~1 PB
  { name: "Server racks", name_singular: "Server rack", dimension: "data", si_value: 1e15 },
  // Global daily internet traffic ~4.6e18 bytes (2024 estimate)
  { name: "Internet days", name_singular: "Internet day", dimension: "data", si_value: 4.6e18 },
];
