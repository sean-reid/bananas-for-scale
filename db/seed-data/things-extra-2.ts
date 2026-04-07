// ── Extra things seed data (batch 2) ──────────────────────────────────────
// Technology, Musical Instruments, Natural Wonders, Historical Objects,
// Buildings, Weather, Dinosaurs, Bridges

import type { ThingInput } from "../types";

export const categoriesData = [
  {
    id: "bridges",
    name: "Bridges & Tunnels",
    description:
      "The magnificent spans and underground passages that connect what geography tried to keep apart.",
    sort_order: 30,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "tesla-model-s-battery-pack",
    name: "Tesla Model S Battery Pack",
    subtitle: "The 100 kWh lithium-ion slab that powers a luxury EV",
    category_id: "cars",
    description:
      "The Tesla Model S battery pack is a flat, skateboard-shaped assembly bolted to the underside of the car. It contains thousands of individual lithium-ion cells arranged in modules and weighs roughly as much as a grand piano. It stores enough energy to drive over 600 km on a single charge, which is impressive until you remember it takes longer to recharge than a grand piano takes to tune.",
    search_terms:
      "tesla|battery|ev|electric vehicle|model s|lithium|car battery|energy storage",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Weight", value: 544, si_unit: "kg", note: "100 kWh pack" },
      { dimension: "energy", label: "Energy capacity", value: 3.6e8, si_unit: "J", note: "100 kWh = 360 MJ" },
      { dimension: "volume", label: "Pack volume", value: 0.4, si_unit: "m³", note: "Approximate external volume" },
      { dimension: "power", label: "Peak motor output", value: 310000, si_unit: "W", note: "Dual motor configuration" },
      { dimension: "length", label: "Pack length", value: 2.7, si_unit: "m", note: "Spans most of the wheelbase" },
      { dimension: "length", label: "Pack width", value: 1.5, si_unit: "m", note: "Nearly the full width of the car" },
      { dimension: "length", label: "Pack height", value: 0.1, si_unit: "m", note: "About 10 cm thick" },
    ],
  },

  {
    slug: "original-iphone",
    name: "Original iPhone (2007)",
    subtitle: "The device that started the smartphone revolution",
    category_id: "everyday-objects",
    description:
      "When Steve Jobs unveiled the original iPhone in January 2007, it had no App Store, no copy-paste, no 3G, and no front-facing camera. What it did have was a multi-touch screen and the audacity to charge $499 for a phone. It sold 6.1 million units and permanently rearranged the tech industry. By modern standards it is a charming paperweight with a 2-megapixel camera.",
    search_terms:
      "iphone|apple|smartphone|2007|original iphone|first iphone|steve jobs|mobile phone",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Weight", value: 0.135, si_unit: "kg", note: "135 grams" },
      { dimension: "length", label: "Height", value: 0.115, si_unit: "m", note: "115 mm" },
      { dimension: "length", label: "Width", value: 0.061, si_unit: "m", note: "61 mm" },
      { dimension: "length", label: "Thickness", value: 0.0116, si_unit: "m", note: "11.6 mm; chunky by today's standards" },
      { dimension: "area", label: "Screen area", value: 0.004, si_unit: "m²", note: "3.5-inch display diagonal" },
      { dimension: "data", label: "Max storage", value: 8.59e9, si_unit: "bytes", note: "8 GB model" },
      { dimension: "energy", label: "Battery capacity", value: 20520, si_unit: "J", note: "1400 mAh at 3.7V = 5.7 Wh" },
    ],
  },

  {
    slug: "nintendo-switch",
    name: "Nintendo Switch",
    subtitle: "The hybrid console that goes wherever you go",
    category_id: "everyday-objects",
    description:
      "The Nintendo Switch managed the neat trick of being both a home console and a portable, which is to say it is mediocre at both and beloved for it. With detachable Joy-Con controllers and a 6.2-inch touchscreen, it has sold over 140 million units worldwide. It runs The Legend of Zelda and Mario Kart, which turns out to be all you really need.",
    search_terms:
      "nintendo|switch|console|gaming|handheld|joy-con|zelda|mario|portable gaming",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight (with Joy-Cons)", value: 0.398, si_unit: "kg" },
      { dimension: "length", label: "Width", value: 0.239, si_unit: "m", note: "With Joy-Cons attached" },
      { dimension: "length", label: "Height", value: 0.102, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.0139, si_unit: "m", note: "13.9 mm" },
      { dimension: "area", label: "Screen area", value: 0.025, si_unit: "m²", note: "6.2-inch 720p LCD touchscreen" },
      { dimension: "energy", label: "Battery capacity", value: 57780, si_unit: "J", note: "4310 mAh at 3.7V = 16.05 Wh" },
      { dimension: "data", label: "Internal storage", value: 3.44e10, si_unit: "bytes", note: "32 GB eMMC" },
    ],
  },

  {
    slug: "large-hadron-collider",
    name: "Large Hadron Collider",
    subtitle: "The world's largest and most powerful particle accelerator",
    category_id: "everyday-places",
    description:
      "Buried beneath the Franco-Swiss border near Geneva, the Large Hadron Collider is a 27-kilometer ring of superconducting magnets that smashes protons together at 99.9999991% the speed of light. It confirmed the existence of the Higgs boson in 2012, which justified a few decades of construction and roughly $13.25 billion. The magnets are cooled to 1.9 Kelvin, making the LHC colder than outer space.",
    search_terms:
      "lhc|large hadron collider|cern|particle accelerator|higgs boson|physics|proton|geneva",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Circumference", value: 26659, si_unit: "m", note: "26.659 km ring" },
      { dimension: "length", label: "Depth underground", value: 175, si_unit: "m", note: "Maximum depth beneath the surface" },
      { dimension: "energy", label: "Energy per beam", value: 3.62e14, si_unit: "J", note: "362 MJ per proton beam at full energy" },
      { dimension: "temperature", label: "Operating temperature", value: 1.9, si_unit: "K", note: "Colder than outer space (2.7 K)" },
      { dimension: "speed", label: "Proton speed", value: 2.998e8, si_unit: "m/s", note: "99.9999991% of the speed of light" },
      { dimension: "length", label: "Tunnel diameter", value: 3.8, si_unit: "m" },
      { dimension: "mass", label: "Total magnet mass", value: 2.73e7, si_unit: "kg", note: "Approximately 27,300 tonnes of magnets" },
    ],
  },

  {
    slug: "james-webb-space-telescope",
    name: "James Webb Space Telescope",
    subtitle: "The most powerful space telescope ever launched",
    category_id: "spacecraft",
    description:
      "Launched on Christmas Day 2021, the James Webb Space Telescope orbits the Sun at the L2 Lagrange point, 1.5 million kilometers from Earth. Its 6.5-meter gold-coated beryllium mirror collects infrared light from the earliest galaxies in the universe. A tennis-court-sized sunshield keeps the instruments at a frosty 50 Kelvin. It cost $10 billion and took 25 years to build, making it both the most expensive and most overdue telescope in history.",
    search_terms:
      "jwst|james webb|space telescope|nasa|infrared|l2|mirror|astronomy|beryllium",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Primary mirror diameter", value: 6.5, si_unit: "m", note: "18 hexagonal gold-coated beryllium segments" },
      { dimension: "mass", label: "Total mass", value: 6500, si_unit: "kg", note: "About 6.5 tonnes at launch" },
      { dimension: "area", label: "Sunshield area", value: 300, si_unit: "m²", note: "Roughly the size of a tennis court" },
      { dimension: "temperature", label: "Operating temperature", value: 50, si_unit: "K", note: "Cold side of sunshield; -223°C" },
      { dimension: "length", label: "Sunshield length", value: 21.2, si_unit: "m" },
      { dimension: "length", label: "Sunshield width", value: 14.2, si_unit: "m" },
      { dimension: "area", label: "Primary mirror area", value: 25.4, si_unit: "m²", note: "Collecting area; 6× larger than Hubble" },
      { dimension: "length", label: "Distance from Earth", value: 1.5e9, si_unit: "m", note: "1.5 million km at L2 Lagrange point" },
    ],
  },

  {
    slug: "hoover-dam",
    name: "Hoover Dam",
    subtitle: "The concrete colossus that tamed the Colorado River",
    category_id: "everyday-places",
    description:
      "Built during the Great Depression between 1931 and 1936, the Hoover Dam was the largest concrete structure in the world at the time. It impounds Lake Mead, the largest reservoir in the United States by volume. The concrete in the dam would be enough to pave a two-lane highway from San Francisco to New York. It generates enough electricity to serve 1.3 million people, which is handy since Las Vegas is right there.",
    search_terms:
      "hoover dam|dam|colorado river|lake mead|nevada|hydroelectric|concrete|las vegas",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 221.4, si_unit: "m", note: "From foundation to crest" },
      { dimension: "mass", label: "Concrete mass", value: 6.6e9, si_unit: "kg", note: "About 6.6 million tonnes of concrete" },
      { dimension: "volume", label: "Concrete volume", value: 3.33e6, si_unit: "m³" },
      { dimension: "power", label: "Generating capacity", value: 2.08e9, si_unit: "W", note: "2,080 MW from 17 turbines" },
      { dimension: "length", label: "Crest length", value: 379.2, si_unit: "m" },
      { dimension: "length", label: "Base thickness", value: 201.2, si_unit: "m", note: "Tapers from base to crest" },
    ],
  },

  {
    slug: "panama-canal",
    name: "Panama Canal",
    subtitle: "The shortcut that saved ships 12,500 km around South America",
    category_id: "bridges",
    description:
      "The Panama Canal slices through the Isthmus of Panama, connecting the Atlantic and Pacific Oceans across 82 kilometers. Completed in 1914 after a decade of construction (and a failed French attempt before that), it uses a system of locks to raise ships 26 meters above sea level through Gatun Lake. About 14,000 ships transit the canal each year, each paying an average toll of around $150,000. The most expensive single transit toll was $829,468.",
    search_terms:
      "panama canal|canal|shipping|locks|panama|pacific|atlantic|gatun",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 82000, si_unit: "m", note: "82 km from ocean to ocean" },
      { dimension: "length", label: "Minimum depth", value: 12.8, si_unit: "m", note: "Navigation channel depth" },
      { dimension: "length", label: "Maximum lock width", value: 55, si_unit: "m", note: "Neopanamax locks (2016 expansion)" },
      { dimension: "length", label: "Lock chamber length", value: 427, si_unit: "m", note: "Neopanamax lock chambers" },
      { dimension: "volume", label: "Water used per transit", value: 197000, si_unit: "m³", note: "Original locks; about 197 million liters" },
      { dimension: "length", label: "Elevation above sea level", value: 26, si_unit: "m", note: "Ships are raised 26 m through Gatun Lake" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MUSICAL INSTRUMENTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "violin",
    name: "Violin",
    subtitle: "The soprano of the string family",
    category_id: "everyday-objects",
    description:
      "The violin has been making audiences weep since the 16th century. A standard full-size violin is just under 60 cm long and weighs less than half a kilogram, yet it can fill a concert hall with sound. Stradivari violins from the early 1700s sell for tens of millions of dollars, and scientists are still arguing about what makes them special. The four strings are tuned to G3, D4, A4, and E5.",
    search_terms:
      "violin|fiddle|string instrument|stradivarius|orchestra|classical|bow|strings",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 0.59, si_unit: "m", note: "Full-size (4/4) violin" },
      { dimension: "mass", label: "Weight", value: 0.46, si_unit: "kg", note: "Without case or bow" },
      { dimension: "frequency", label: "Lowest open string (G3)", value: 196, si_unit: "Hz" },
      { dimension: "frequency", label: "Highest open string (E5)", value: 659, si_unit: "Hz" },
      { dimension: "length", label: "Body length", value: 0.356, si_unit: "m", note: "Measured from top to bottom of body" },
      { dimension: "length", label: "Bow length", value: 0.745, si_unit: "m" },
      { dimension: "force", label: "String tension (total)", value: 220, si_unit: "N", note: "Combined tension of all four strings" },
    ],
  },

  {
    slug: "electric-guitar",
    name: "Electric Guitar",
    subtitle: "The instrument that gave rock and roll its voice",
    category_id: "everyday-objects",
    description:
      "The solid-body electric guitar emerged in the 1950s and promptly changed the course of Western music. A typical model like the Fender Stratocaster or Gibson Les Paul weighs between 3 and 5 kg and stretches just under a meter in length. The strings vibrate over magnetic pickups that convert the motion into electrical signals, which then get amplified into the glorious noise that has been annoying neighbors since the Eisenhower administration.",
    search_terms:
      "electric guitar|guitar|stratocaster|les paul|fender|gibson|rock|strings|pickup",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 0.99, si_unit: "m", note: "Typical Stratocaster-style" },
      { dimension: "mass", label: "Weight", value: 3.6, si_unit: "kg", note: "Varies by model; Les Paul can reach 5 kg" },
      { dimension: "force", label: "Total string tension", value: 730, si_unit: "N", note: "Standard tuning with .010-.046 gauge strings" },
      { dimension: "length", label: "Scale length", value: 0.648, si_unit: "m", note: "25.5 inches; Fender standard" },
      { dimension: "frequency", label: "Lowest open string (E2)", value: 82.4, si_unit: "Hz" },
      { dimension: "frequency", label: "Highest open string (E4)", value: 329.6, si_unit: "Hz" },
      { dimension: "length", label: "Body thickness", value: 0.045, si_unit: "m", note: "Solid body; about 45 mm" },
    ],
  },

  {
    slug: "pipe-organ-largest",
    name: "Pipe Organ (Boardwalk Hall)",
    subtitle: "The largest pipe organ ever built, with 33,114 pipes",
    category_id: "everyday-objects",
    description:
      "The Midmer-Losh organ at Boardwalk Hall in Atlantic City, New Jersey, is the largest pipe organ in the world by number of pipes. Built between 1929 and 1932, it has 33,114 pipes ranging from pencil-sized to 19.5 meters tall, seven manuals (keyboards), and a 64-foot Diaphone-Dulzian that produces a subsonic 8 Hz — a frequency so low you feel it more than hear it. Most of the organ is currently non-functional and under restoration, because maintaining 33,114 pipes is exactly as difficult as it sounds.",
    search_terms:
      "pipe organ|organ|boardwalk hall|atlantic city|largest organ|midmer-losh|pipes|keyboard",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Largest pipe height", value: 19.5, si_unit: "m", note: "64-foot Diaphone-Dulzian rank" },
      { dimension: "mass", label: "Estimated total mass", value: 150000, si_unit: "kg", note: "Approximately 150 tonnes" },
      { dimension: "frequency", label: "Lowest frequency", value: 8, si_unit: "Hz", note: "64-foot stop; below human hearing threshold (20 Hz)" },
      { dimension: "frequency", label: "Highest frequency", value: 16000, si_unit: "Hz", note: "Smallest pipes" },
      { dimension: "pressure", label: "Maximum wind pressure", value: 14000, si_unit: "Pa", note: "100 inches water column; extraordinarily high" },
      { dimension: "power", label: "Blower power", value: 447000, si_unit: "W", note: "600 HP of blowers to supply wind" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NATURAL WONDERS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "victoria-falls",
    name: "Victoria Falls",
    subtitle: "The largest curtain of falling water on Earth",
    category_id: "landforms",
    description:
      "Victoria Falls sits on the border of Zambia and Zimbabwe, where the Zambezi River plunges over a basalt cliff into a narrow gorge below. Known locally as Mosi-oa-Tunya (\"The Smoke That Thunders\"), the spray can rise 400 meters into the air and be seen from 50 kilometers away. It is neither the tallest nor widest waterfall, but it forms the largest single sheet of falling water, at 1,708 meters wide and 108 meters tall.",
    search_terms:
      "victoria falls|waterfall|zambezi|zambia|zimbabwe|mosi-oa-tunya|africa|smoke that thunders",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 108, si_unit: "m", note: "Maximum drop" },
      { dimension: "length", label: "Width", value: 1708, si_unit: "m", note: "Widest curtain of water on Earth" },
      { dimension: "volume", label: "Peak volume discharged per minute", value: 500000, si_unit: "m³", note: "About 500 million liters per minute in flood season (~8,300 m³/s)" },
      { dimension: "area", label: "Curtain area", value: 184464, si_unit: "m²", note: "Width × height; approximate" },
      { dimension: "speed", label: "Water speed at base", value: 25, si_unit: "m/s", note: "Approximately 90 km/h impact speed" },
      { dimension: "length", label: "Spray plume height", value: 400, si_unit: "m", note: "Visible from 50 km away" },
    ],
  },

  {
    slug: "dead-sea",
    name: "Dead Sea",
    subtitle: "Earth's lowest point on land and saltiest large body of water",
    category_id: "landforms",
    description:
      "The Dead Sea sits 430 meters below sea level, making its shores the lowest point on Earth's land surface. Its water is nearly 10 times saltier than the ocean, with a salinity of about 34%. This extreme salt concentration makes the water so dense that humans float effortlessly on its surface, which has been a tourist attraction since the Roman era. The Dead Sea is shrinking at an alarming rate — its surface has dropped about 1 meter per year in recent decades.",
    search_terms:
      "dead sea|salt lake|lowest point|jordan|israel|salinity|buoyancy|salty",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 6.05e8, si_unit: "m²", note: "About 605 km²; shrinking rapidly" },
      { dimension: "length", label: "Maximum depth", value: 304, si_unit: "m" },
      { dimension: "length", label: "Depth below sea level", value: 430, si_unit: "m", note: "Lowest land surface on Earth" },
      { dimension: "length", label: "Length", value: 50000, si_unit: "m", note: "About 50 km north to south" },
      { dimension: "length", label: "Maximum width", value: 15000, si_unit: "m", note: "About 15 km" },
      { dimension: "pressure", label: "Hydrostatic pressure at deepest point", value: 3.68e6, si_unit: "Pa", note: "Higher than normal due to extreme water density (~1,240 kg/m³)" },
    ],
  },

  {
    slug: "aurora-borealis",
    name: "Aurora Borealis",
    subtitle: "Nature's own light show, powered by the Sun",
    category_id: "events",
    description:
      "The Aurora Borealis, or Northern Lights, occurs when charged particles from the solar wind slam into gas molecules in Earth's upper atmosphere, causing them to glow. The result is shimmering curtains of green, purple, red, and blue light that can stretch thousands of kilometers across the sky. They typically occur between 100 and 300 km altitude and are best seen from high-latitude regions. Despite centuries of study, they still stop people in their tracks.",
    search_terms:
      "aurora|northern lights|borealis|solar wind|polar lights|magnetosphere|ionosphere",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Typical altitude", value: 100000, si_unit: "m", note: "100–300 km above the surface" },
      { dimension: "length", label: "Arc length", value: 3000000, si_unit: "m", note: "Can stretch 3,000+ km across the sky" },
      { dimension: "power", label: "Total power output", value: 1e12, si_unit: "W", note: "~1 TW during a strong geomagnetic storm" },
      { dimension: "length", label: "Curtain thickness", value: 1000, si_unit: "m", note: "Surprisingly thin; about 1 km" },
      { dimension: "speed", label: "Solar wind speed", value: 450000, si_unit: "m/s", note: "Typical solar wind: 400–500 km/s" },
      { dimension: "temperature", label: "Thermosphere temperature", value: 1000, si_unit: "K", note: "At aurora altitudes; ~700°C" },
    ],
  },

  {
    slug: "old-faithful-geyser",
    name: "Old Faithful",
    subtitle: "The world's most predictable geyser",
    category_id: "landforms",
    description:
      "Old Faithful in Yellowstone National Park has been erupting with remarkable regularity since at least 1870 when it was first documented by the Washburn Expedition. It erupts approximately every 90 minutes, shooting boiling water 30 to 55 meters into the air for 2 to 5 minutes. Each eruption expels between 14,000 and 32,000 liters of superheated water. It is not the tallest or most powerful geyser in Yellowstone, but it is the most famous because it shows up on time.",
    search_terms:
      "old faithful|geyser|yellowstone|eruption|hot spring|geothermal|national park",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum eruption height", value: 55, si_unit: "m" },
      { dimension: "volume", label: "Water per eruption", value: 23, si_unit: "m³", note: "14,000–32,000 liters; average ~23,000 liters" },
      { dimension: "time", label: "Average eruption duration", value: 240, si_unit: "s", note: "2–5 minutes; average about 4 minutes" },
      { dimension: "time", label: "Average interval between eruptions", value: 5580, si_unit: "s", note: "About 93 minutes" },
      { dimension: "temperature", label: "Water temperature at vent", value: 369, si_unit: "K", note: "96°C; just below boiling at Yellowstone's elevation" },
      { dimension: "speed", label: "Ejection speed", value: 32, si_unit: "m/s", note: "Water exits the vent at roughly 70 mph" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HISTORICAL OBJECTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "rosetta-stone",
    name: "Rosetta Stone",
    subtitle: "The key that unlocked ancient Egyptian hieroglyphs",
    category_id: "everyday-objects",
    description:
      "The Rosetta Stone is a granodiorite slab inscribed with a decree issued in 196 BC during the reign of Ptolemy V. The same text appears in three scripts: hieroglyphic, Demotic, and ancient Greek, which allowed Jean-François Champollion to crack the hieroglyphic code in 1822. Found by French soldiers in 1799 near the town of Rashid (Rosetta) in Egypt, it has been in the British Museum since 1802, much to Egypt's continued annoyance.",
    search_terms:
      "rosetta stone|hieroglyphs|egypt|champollion|british museum|ptolemy|ancient|decree",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 1.123, si_unit: "m", note: "Incomplete; the top is broken off" },
      { dimension: "length", label: "Width", value: 0.757, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.284, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 762, si_unit: "kg" },
      { dimension: "volume", label: "Approximate volume", value: 0.242, si_unit: "m³", note: "Roughly slab-shaped" },
      { dimension: "area", label: "Inscribed face area", value: 0.85, si_unit: "m²", note: "Front surface" },
    ],
  },

  {
    slug: "hope-diamond",
    name: "Hope Diamond",
    subtitle: "The most famous diamond in the world, allegedly cursed",
    category_id: "everyday-objects",
    description:
      "The Hope Diamond is a 45.52-carat deep-blue diamond currently housed in the Smithsonian National Museum of Natural History. Its blue color comes from trace amounts of boron in the crystal lattice. It was originally part of a larger stone brought to France from India in the 17th century and has passed through the hands of kings, merchants, and socialites, many of whom suffered misfortune — hence the legend of its curse. It glows red for several minutes after exposure to ultraviolet light, which is both beautiful and unsettling.",
    search_terms:
      "hope diamond|diamond|smithsonian|blue diamond|cursed|gemstone|jewel|boron",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight", value: 0.00907, si_unit: "kg", note: "45.52 carats; 1 carat = 0.2 grams" },
      { dimension: "volume", label: "Volume", value: 3.4e-6, si_unit: "m³", note: "Approximately 3.4 cm³" },
      { dimension: "length", label: "Length", value: 0.0256, si_unit: "m", note: "25.6 mm" },
      { dimension: "length", label: "Width", value: 0.0218, si_unit: "m", note: "21.8 mm" },
      { dimension: "length", label: "Depth", value: 0.0121, si_unit: "m", note: "12.1 mm" },
    ],
  },

  {
    slug: "wright-flyer-first-flight",
    name: "Wright Flyer (First Flight)",
    subtitle: "The aircraft that achieved the first powered flight",
    category_id: "everyday-objects",
    description:
      "On December 17, 1903, at Kitty Hawk, North Carolina, the Wright Flyer became the first heavier-than-air powered aircraft to achieve sustained, controlled flight. The first flight lasted 12 seconds and covered 36.6 meters — less than the wingspan of a modern Boeing 747. By the fourth flight that day, Wilbur Wright managed 59 seconds and 260 meters. The aircraft was built of spruce, ash, and muslin fabric, with a 12-horsepower gasoline engine.",
    search_terms:
      "wright brothers|wright flyer|first flight|kitty hawk|airplane|aviation|1903|powered flight",
    featured: 1,
    measurements: [
      { dimension: "length", label: "First flight distance", value: 36.6, si_unit: "m", note: "First of four flights that day" },
      { dimension: "time", label: "First flight duration", value: 12, si_unit: "s" },
      { dimension: "speed", label: "Flight speed", value: 3.05, si_unit: "m/s", note: "About 11 km/h ground speed" },
      { dimension: "length", label: "Wingspan", value: 12.3, si_unit: "m" },
      { dimension: "mass", label: "Empty weight", value: 274, si_unit: "kg" },
      { dimension: "power", label: "Engine power", value: 8950, si_unit: "W", note: "12 horsepower gasoline engine" },
      { dimension: "area", label: "Wing area", value: 47.4, si_unit: "m²", note: "Biplane configuration" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BUILDINGS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "white-house",
    name: "The White House",
    subtitle: "The most famous residence and office building in America",
    category_id: "everyday-places",
    description:
      "The White House at 1600 Pennsylvania Avenue has been the official residence of every U.S. president since John Adams in 1800. The building has 132 rooms, 35 bathrooms, 6 levels, and a bowling alley. It was burned by the British in 1814, rebuilt, and has been continuously renovated ever since. The Truman renovation of 1948–1952 essentially gutted the entire interior and rebuilt it with a steel frame while preserving the exterior walls.",
    search_terms:
      "white house|president|washington dc|oval office|residence|pennsylvania avenue|executive mansion",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 51.8, si_unit: "m", note: "170 feet across the front" },
      { dimension: "length", label: "Width", value: 25.9, si_unit: "m", note: "85 feet deep" },
      { dimension: "area", label: "Total floor area", value: 5110, si_unit: "m²", note: "About 55,000 square feet" },
      { dimension: "length", label: "Height", value: 21.3, si_unit: "m", note: "To the roofline; not counting the portico" },
      { dimension: "area", label: "Grounds area", value: 73000, si_unit: "m²", note: "18 acres total grounds" },
      { dimension: "mass", label: "Estimated structural mass", value: 3.2e7, si_unit: "kg", note: "Rough estimate including steel frame and stone" },
    ],
  },

  {
    slug: "taj-mahal",
    name: "Taj Mahal",
    subtitle: "A mausoleum that puts every love letter ever written to shame",
    category_id: "everyday-places",
    description:
      "The Taj Mahal was commissioned in 1632 by Mughal Emperor Shah Jahan as a tomb for his wife Mumtaz Mahal, who died giving birth to their 14th child. It took about 20,000 workers and 22 years to complete. The entire structure is clad in white Makrana marble that changes color throughout the day — pinkish at dawn, white at noon, golden in the evening. It is often cited as the finest example of Mughal architecture and a symbol of eternal love, though it is technically a grave.",
    search_terms:
      "taj mahal|india|agra|mughal|marble|mausoleum|shah jahan|mumtaz|monument",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (main dome)", value: 73, si_unit: "m", note: "Including finial" },
      { dimension: "area", label: "Platform base area", value: 9290, si_unit: "m²", note: "About 96 m × 96 m" },
      { dimension: "mass", label: "Estimated total mass", value: 1.2e8, si_unit: "kg", note: "Approximately 120,000 tonnes" },
      { dimension: "length", label: "Dome diameter", value: 17.7, si_unit: "m", note: "Inner dome; outer dome is slightly larger" },
      { dimension: "length", label: "Minaret height", value: 41.1, si_unit: "m", note: "Four minarets, one at each corner" },
      { dimension: "area", label: "Total complex area", value: 170000, si_unit: "m²", note: "Including gardens, gates, and mosque" },
    ],
  },

  {
    slug: "sydney-opera-house",
    name: "Sydney Opera House",
    subtitle: "The building that looks like sails, shells, or possibly orange peels",
    category_id: "everyday-places",
    description:
      "The Sydney Opera House is an architectural icon designed by Danish architect Jørn Utzon and opened in 1973. Its distinctive roof shells — which Utzon derived from the geometry of a sphere — are covered with over 1 million tiles. The project was originally budgeted at $7 million and ended up costing $102 million, which is a ratio that modern software projects can only aspire to. It hosts about 1,500 performances per year.",
    search_terms:
      "sydney opera house|opera|australia|utzon|architecture|shells|harbor|performing arts",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (highest shell)", value: 65, si_unit: "m", note: "67 m including the base platform" },
      { dimension: "area", label: "Site area", value: 18000, si_unit: "m²", note: "1.8 hectares on Bennelong Point" },
      { dimension: "mass", label: "Total mass", value: 1.61e8, si_unit: "kg", note: "161,000 tonnes" },
      { dimension: "length", label: "Length", value: 183, si_unit: "m" },
      { dimension: "length", label: "Width", value: 120, si_unit: "m" },
      { dimension: "area", label: "Roof tile area", value: 16000, si_unit: "m²", note: "Over 1 million Swedish-made ceramic tiles" },
    ],
  },

  {
    slug: "buckingham-palace",
    name: "Buckingham Palace",
    subtitle: "The official London residence of the British monarch",
    category_id: "everyday-places",
    description:
      "Buckingham Palace started life as a large townhouse built in 1703 and has been progressively expanded into the 775-room behemoth it is today. It has 19 state rooms, 52 royal and guest bedrooms, 188 staff bedrooms, 92 offices, and 78 bathrooms. The building serves as both the administrative headquarters of the monarch and a venue for state occasions. The Changing of the Guard ceremony out front attracts about 15 million tourists per year who all take the same photograph.",
    search_terms:
      "buckingham palace|palace|london|royal|queen|king|monarch|british|guard|england",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total floor area", value: 77000, si_unit: "m²", note: "775 rooms across multiple floors" },
      { dimension: "length", label: "East facade length", value: 108, si_unit: "m", note: "The iconic front face" },
      { dimension: "length", label: "Height", value: 24, si_unit: "m", note: "To the roofline" },
      { dimension: "area", label: "Garden area", value: 160000, si_unit: "m²", note: "16 hectares; the largest private garden in London" },
      { dimension: "length", label: "Palace width (depth)", value: 120, si_unit: "m", note: "Front to back" },
      { dimension: "volume", label: "Approximate building volume", value: 200000, si_unit: "m³", note: "Rough estimate" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WEATHER
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "average-raindrop",
    name: "Average Raindrop",
    subtitle: "An ordinary water droplet on its final descent",
    category_id: "events",
    description:
      "A typical raindrop is about 2 mm in diameter and falls at roughly 9 m/s — fast enough to sting but slow enough that umbrellas work. Raindrops are not teardrop-shaped; small ones are nearly spherical and larger ones flatten into a hamburger-bun shape due to air resistance. A single raindrop contains around 50 million billion water molecules, which sounds impressive until you realize it weighs about as much as a grain of sand.",
    search_terms:
      "raindrop|rain|water drop|precipitation|weather|droplet|rainfall",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 5e-5, si_unit: "kg", note: "About 50 milligrams" },
      { dimension: "length", label: "Diameter", value: 0.002, si_unit: "m", note: "2 mm; typical medium raindrop" },
      { dimension: "speed", label: "Terminal velocity", value: 9, si_unit: "m/s", note: "About 32 km/h for a 2 mm drop" },
      { dimension: "volume", label: "Volume", value: 4.2e-9, si_unit: "m³", note: "About 4.2 microliters" },
      { dimension: "force", label: "Impact force", value: 3.5e-4, si_unit: "N", note: "Approximate force on impact with a surface" },
      { dimension: "time", label: "Fall time from cloud", value: 200, si_unit: "s", note: "From a typical cloud at ~2,000 m altitude" },
    ],
  },

  {
    slug: "largest-recorded-hailstone",
    name: "Largest Recorded Hailstone",
    subtitle: "The ice ball that fell on Vivian, South Dakota in 2010",
    category_id: "events",
    description:
      "On July 23, 2010, a hailstone fell in Vivian, South Dakota, that measured 20.3 cm in diameter and weighed 0.88 kg. To put that in perspective, it was roughly the size of a volleyball and fell from a thunderstorm at terminal velocity. The stone was carefully preserved in a freezer and verified by the National Weather Service. The impact crater it left in the ground was 25 cm across. One does not wish to be outdoors when the sky starts throwing volleyballs.",
    search_terms:
      "hailstone|hail|largest hail|vivian|south dakota|ice|storm|record|weather",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 0.88, si_unit: "kg", note: "Nearly 2 pounds" },
      { dimension: "length", label: "Diameter", value: 0.203, si_unit: "m", note: "20.3 cm; volleyball-sized" },
      { dimension: "length", label: "Circumference", value: 0.476, si_unit: "m", note: "47.6 cm around" },
      { dimension: "speed", label: "Estimated terminal velocity", value: 53, si_unit: "m/s", note: "About 190 km/h" },
      { dimension: "energy", label: "Kinetic energy on impact", value: 1236, si_unit: "J", note: "Enough to shatter a car windshield" },
      { dimension: "volume", label: "Approximate volume", value: 4.4e-3, si_unit: "m³", note: "Roughly spherical" },
    ],
  },

  {
    slug: "snowflake",
    name: "Snowflake",
    subtitle: "A tiny ice crystal with famously unique geometry",
    category_id: "events",
    description:
      "No two snowflakes are alike — or so the saying goes. A typical snowflake is a hexagonal ice crystal about 5 mm across and weighing just 3 micrograms. They form when water vapor deposits directly onto ice nuclei in clouds at temperatures between -2°C and -35°C. The six-fold symmetry comes from the molecular structure of ice. A single snowflake takes about 30 to 45 minutes to fall from the cloud to the ground, drifting at a leisurely 1.5 m/s.",
    search_terms:
      "snowflake|snow|ice crystal|winter|hexagonal|precipitation|frost|flake",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 3e-6, si_unit: "kg", note: "About 3 micrograms" },
      { dimension: "length", label: "Diameter", value: 0.005, si_unit: "m", note: "5 mm typical; ranges from 1–10 mm" },
      { dimension: "speed", label: "Falling speed", value: 1.5, si_unit: "m/s", note: "About 5.4 km/h in still air" },
      { dimension: "temperature", label: "Formation temperature", value: 258, si_unit: "K", note: "-15°C; ideal for dendrite formation" },
      { dimension: "length", label: "Crystal thickness", value: 0.0001, si_unit: "m", note: "About 0.1 mm" },
      { dimension: "time", label: "Time to fall from cloud", value: 2400, si_unit: "s", note: "About 40 minutes from a typical cloud" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DINOSAURS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "triceratops",
    name: "Triceratops",
    subtitle: "The three-horned tank of the Late Cretaceous",
    category_id: "dinosaurs",
    description:
      "Triceratops is one of the most recognizable dinosaurs, thanks to its three facial horns and enormous bony frill. Living about 68 to 66 million years ago in what is now North America, it was one of the last non-avian dinosaurs. Despite its fearsome appearance, Triceratops was a herbivore that used its beak-like mouth and shearing teeth to process tough vegetation. Fossil evidence suggests they may have lived in herds and that their frills and horns were used in both defense and display.",
    search_terms:
      "triceratops|dinosaur|horns|frill|cretaceous|herbivore|ceratopsian|three horns",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 9, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 8000, si_unit: "kg", note: "About 8 tonnes" },
      { dimension: "length", label: "Brow horn length", value: 1, si_unit: "m", note: "Each of the two brow horns" },
      { dimension: "area", label: "Frill area", value: 0.5, si_unit: "m²", note: "Estimated area of the bony frill" },
      { dimension: "speed", label: "Estimated top speed", value: 5, si_unit: "m/s", note: "About 18 km/h" },
      { dimension: "length", label: "Skull length", value: 2.5, si_unit: "m", note: "One of the largest skulls of any land animal" },
      { dimension: "length", label: "Height at hip", value: 2.9, si_unit: "m" },
    ],
  },

  {
    slug: "spinosaurus",
    name: "Spinosaurus",
    subtitle: "The sail-backed aquatic predator larger than T. rex",
    category_id: "dinosaurs",
    description:
      "Spinosaurus is the largest known carnivorous dinosaur, possibly exceeding even Tyrannosaurus rex in length. Living about 95 to 70 million years ago in North Africa, it sported a massive sail on its back formed by elongated neural spines, some reaching 1.65 meters tall. Recent research suggests Spinosaurus was semi-aquatic, using its paddle-like tail and dense bones to hunt fish in rivers. It is essentially what you would get if a crocodile and a sailfish had a 15-meter baby.",
    search_terms:
      "spinosaurus|dinosaur|sail|carnivore|aquatic|cretaceous|north africa|largest predator",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 15, si_unit: "m", note: "Largest known carnivorous dinosaur" },
      { dimension: "mass", label: "Estimated mass", value: 7000, si_unit: "kg", note: "About 7 tonnes" },
      { dimension: "length", label: "Sail height", value: 1.65, si_unit: "m", note: "Maximum neural spine length" },
      { dimension: "speed", label: "Estimated swimming speed", value: 5, si_unit: "m/s", note: "In water; approximate" },
      { dimension: "length", label: "Skull length", value: 1.75, si_unit: "m", note: "Elongated, crocodile-like snout" },
      { dimension: "force", label: "Estimated bite force", value: 12000, si_unit: "N", note: "Adapted for gripping slippery fish" },
    ],
  },

  {
    slug: "ankylosaurus",
    name: "Ankylosaurus",
    subtitle: "The armored dinosaur with a built-in wrecking ball",
    category_id: "dinosaurs",
    description:
      "Ankylosaurus was a living tank — a heavily armored herbivore covered in bony plates called osteoderms embedded in its skin. Its signature feature was a massive bony club at the end of its tail, which it could swing with enough force to break a predator's leg. Living in the Late Cretaceous about 68 to 66 million years ago, it shared its habitat with T. rex, which may explain why it evolved such ridiculous levels of armor. Ankylosaurus essentially said \"hit me\" and meant it.",
    search_terms:
      "ankylosaurus|dinosaur|armor|tail club|cretaceous|herbivore|armored|osteoderms",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 6.25, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 6000, si_unit: "kg", note: "About 6 tonnes" },
      { dimension: "mass", label: "Tail club mass", value: 40, si_unit: "kg", note: "Estimated mass of the bony club" },
      { dimension: "length", label: "Armor thickness", value: 0.05, si_unit: "m", note: "Osteoderms up to 5 cm thick" },
      { dimension: "length", label: "Body width", value: 1.7, si_unit: "m", note: "Extremely wide and low-slung" },
      { dimension: "force", label: "Tail club impact force", value: 47000, si_unit: "N", note: "Estimated; enough to fracture bone" },
      { dimension: "length", label: "Height", value: 1.7, si_unit: "m", note: "At the hip" },
    ],
  },

  {
    slug: "diplodocus",
    name: "Diplodocus",
    subtitle: "The long-necked whip-tailed giant of the Late Jurassic",
    category_id: "dinosaurs",
    description:
      "Diplodocus was one of the longest land animals ever to live, stretching up to 26 meters from nose to tail tip. Its remarkably long neck (6.5 meters) and even longer tail (up to 13 meters) gave it the proportions of a suspension bridge on legs. Despite its enormous length, Diplodocus was relatively lightweight for a sauropod, with a slender build and hollow vertebrae that reduced its mass. Its tail may have been capable of producing a sonic crack when whipped, making it a literal thunder lizard.",
    search_terms:
      "diplodocus|dinosaur|sauropod|long neck|jurassic|herbivore|tail whip|carnegie",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total body length", value: 26, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 16000, si_unit: "kg", note: "About 16 tonnes; light for a sauropod" },
      { dimension: "length", label: "Neck length", value: 6.5, si_unit: "m", note: "15 cervical vertebrae" },
      { dimension: "length", label: "Tail length", value: 13, si_unit: "m", note: "About 80 caudal vertebrae; may have cracked like a whip" },
      { dimension: "length", label: "Height at hip", value: 4, si_unit: "m" },
      { dimension: "speed", label: "Estimated walking speed", value: 1.5, si_unit: "m/s", note: "About 5.4 km/h" },
      { dimension: "length", label: "Head length", value: 0.6, si_unit: "m", note: "Remarkably small for such a large animal" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRIDGES & TUNNELS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "brooklyn-bridge",
    name: "Brooklyn Bridge",
    subtitle: "The Gothic-towered icon that connected Manhattan and Brooklyn",
    category_id: "bridges",
    description:
      "When the Brooklyn Bridge opened in 1883, it was the longest suspension bridge in the world and the first to use steel wire for its cables. Designed by John Augustus Roebling (who died before construction began) and completed by his son Washington (who was bedridden with decompression sickness from the foundations), it is a monument to stubbornness as much as engineering. The bridge carries about 120,000 vehicles and pedestrians daily across the East River.",
    search_terms:
      "brooklyn bridge|bridge|new york|suspension|manhattan|east river|roebling|nyc",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 1825, si_unit: "m", note: "Including approaches" },
      { dimension: "mass", label: "Total mass", value: 14680000, si_unit: "kg", note: "About 14,680 tonnes" },
      { dimension: "length", label: "Tower height", value: 84, si_unit: "m", note: "Gothic limestone and granite towers" },
      { dimension: "length", label: "Main span", value: 486, si_unit: "m", note: "Between the two towers" },
      { dimension: "length", label: "Total cable length", value: 5690, si_unit: "m", note: "Each of four main cables" },
      { dimension: "length", label: "Clearance above water", value: 39.6, si_unit: "m", note: "At center of span" },
    ],
  },

  {
    slug: "millau-viaduct",
    name: "Millau Viaduct",
    subtitle: "The tallest bridge in the world, soaring above a French valley",
    category_id: "bridges",
    description:
      "The Millau Viaduct in southern France is the tallest bridge in the world, with its highest mast reaching 343 meters — taller than the Eiffel Tower. Designed by structural engineer Michel Virlogeux and architect Norman Foster, it spans the Tarn River valley as part of the A75 autoroute. The deck was built on both sides of the valley and pushed out over the void on hydraulic rams. It opened in December 2004 and carries about 4.5 million vehicles per year through the clouds.",
    search_terms:
      "millau viaduct|bridge|france|tallest bridge|cable-stayed|tarn valley|foster|viaduct",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Structural height (tallest mast)", value: 343, si_unit: "m", note: "Taller than the Eiffel Tower" },
      { dimension: "length", label: "Total length", value: 2460, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 36000000, si_unit: "kg", note: "36,000 tonnes of steel" },
      { dimension: "length", label: "Longest span", value: 342, si_unit: "m" },
      { dimension: "length", label: "Deck height above valley", value: 270, si_unit: "m", note: "Maximum clearance above the Tarn River" },
      { dimension: "length", label: "Deck width", value: 32.05, si_unit: "m", note: "Four lanes of traffic" },
    ],
  },

  {
    slug: "tower-bridge-london",
    name: "Tower Bridge",
    subtitle: "London's iconic bascule bridge, often mistaken for London Bridge",
    category_id: "bridges",
    description:
      "Tower Bridge was built between 1886 and 1894 to relieve traffic congestion in London while still allowing tall ships to pass up the Thames. Its two bascule (drawbridge) sections can be raised to an angle of 86 degrees in about five minutes. The bridge opens roughly 800 times per year. It is frequently confused with the much plainer London Bridge, which is the next bridge upstream and has zero towers, zero Gothic flourishes, and zero souvenir shops.",
    search_terms:
      "tower bridge|bridge|london|thames|bascule|drawbridge|victorian|england|uk",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 244, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 11000000, si_unit: "kg", note: "11,000 tonnes" },
      { dimension: "length", label: "Tower height", value: 65, si_unit: "m", note: "From river level to the top of the towers" },
      { dimension: "length", label: "Central span", value: 61, si_unit: "m", note: "Bascule opening span" },
      { dimension: "length", label: "Clearance when raised", value: 42.5, si_unit: "m", note: "Above the Thames at high tide" },
      { dimension: "length", label: "High-level walkway height", value: 44, si_unit: "m", note: "Glass-floored walkway between towers" },
      { dimension: "time", label: "Time to raise bascules", value: 300, si_unit: "s", note: "About 5 minutes to fully raise" },
    ],
  },

  {
    slug: "channel-tunnel",
    name: "Channel Tunnel",
    subtitle: "The 50-km undersea rail link between England and France",
    category_id: "bridges",
    description:
      "The Channel Tunnel — known affectionately as the Chunnel — runs 50.45 km beneath the English Channel between Folkestone, England, and Coquelles, France. Completed in 1994, it consists of three tunnels: two for rail traffic and a smaller service tunnel in between. At its deepest point, the tunnel is 75 meters below the seabed. It took six years to build and was, at the time, the most expensive construction project ever undertaken. Eurostar trains make the crossing in about 35 minutes.",
    search_terms:
      "channel tunnel|chunnel|tunnel|eurostar|english channel|undersea|england|france|rail",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 50450, si_unit: "m", note: "50.45 km; 37.9 km under the sea" },
      { dimension: "length", label: "Depth below seabed", value: 75, si_unit: "m", note: "Maximum depth beneath the Channel floor" },
      { dimension: "length", label: "Running tunnel diameter", value: 7.6, si_unit: "m", note: "Each of two main rail tunnels" },
      { dimension: "length", label: "Service tunnel diameter", value: 4.8, si_unit: "m", note: "Central service and evacuation tunnel" },
      { dimension: "speed", label: "Maximum train speed", value: 160, si_unit: "m/s", note: "Eurostar at 300 km/h in the tunnel section" },
      { dimension: "time", label: "Crossing time", value: 2100, si_unit: "s", note: "About 35 minutes for a Eurostar train" },
      { dimension: "mass", label: "Excavated material", value: 4.9e9, si_unit: "kg", note: "About 4.9 million tonnes of spoil removed" },
    ],
  },

  {
    slug: "saturn-v-rocket",
    name: "Saturn V Rocket",
    subtitle: "The launch vehicle that sent humans to the Moon",
    category_id: "everyday-objects",
    description:
      "The Saturn V remains the tallest, heaviest, and most powerful rocket ever brought to operational status. Standing 110.6 meters tall and weighing 2.97 million kg when fully fueled, it generated 35.1 million newtons of thrust at liftoff — enough to shake buildings 5 km away. It launched all Apollo lunar missions and the Skylab space station between 1967 and 1973. In 13 launches, it never suffered a catastrophic failure, which is a remarkable record for something that is essentially a controlled explosion.",
    search_terms:
      "saturn v|saturn 5|rocket|apollo|moon|nasa|launch vehicle|space|thrust|liftoff",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 110.6, si_unit: "m", note: "Taller than the Statue of Liberty" },
      { dimension: "mass", label: "Fully fueled mass", value: 2.97e6, si_unit: "kg", note: "About 2,970 tonnes at liftoff" },
      { dimension: "force", label: "Liftoff thrust", value: 3.51e7, si_unit: "N", note: "35.1 MN from five F-1 engines" },
      { dimension: "power", label: "First stage power", value: 1.9e11, si_unit: "W", note: "190 GW; more than all UK power stations combined" },
      { dimension: "length", label: "Diameter", value: 10.1, si_unit: "m" },
      { dimension: "speed", label: "Burnout velocity", value: 6900, si_unit: "m/s", note: "Speed at third-stage cutoff for translunar injection" },
    ],
  },

  {
    slug: "standard-shipping-container",
    name: "Standard Shipping Container (20-foot)",
    subtitle: "The humble steel box that globalized the world economy",
    category_id: "everyday-objects",
    description:
      "The 20-foot intermodal container, or TEU (Twenty-foot Equivalent Unit), is the standard unit of global shipping. Introduced by Malcolm McLean in 1956, this simple corrugated steel box is arguably the most important invention in modern trade. Its standardized dimensions mean it can be loaded onto ships, trains, and trucks without unpacking the contents. About 800 million TEU-equivalents move across the world's oceans each year, carrying everything from electronics to bananas.",
    search_terms:
      "shipping container|container|TEU|freight|cargo|intermodal|steel box|trade|logistics",
    featured: 0,
    measurements: [
      { dimension: "length", label: "External length", value: 6.058, si_unit: "m", note: "20 feet" },
      { dimension: "length", label: "External width", value: 2.438, si_unit: "m", note: "8 feet" },
      { dimension: "length", label: "External height", value: 2.591, si_unit: "m", note: "8 feet 6 inches" },
      { dimension: "mass", label: "Empty weight", value: 2230, si_unit: "kg", note: "Tare weight" },
      { dimension: "mass", label: "Maximum payload", value: 21770, si_unit: "kg", note: "Max gross mass 24,000 kg minus tare" },
      { dimension: "volume", label: "Internal volume", value: 33.2, si_unit: "m³" },
      { dimension: "area", label: "Floor area", value: 14.3, si_unit: "m²" },
    ],
  },

  {
    slug: "blue-whale-heart",
    name: "Blue Whale Heart",
    subtitle: "The largest heart in the animal kingdom",
    category_id: "everyday-objects",
    description:
      "The heart of a blue whale is roughly the size of a golf cart and weighs about as much as three adult humans. It beats only 8 to 10 times per minute at the surface and can slow to as few as 2 beats per minute during a deep dive. Each beat pumps about 80 liters of blood through a body that can exceed 30 meters in length. The aorta is large enough for a small child to crawl through, which is a fact that comes up at every marine biology lecture.",
    search_terms:
      "blue whale heart|whale heart|largest heart|cardiac|marine biology|cetacean",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Heart mass", value: 180, si_unit: "kg", note: "About 180 kg; size of a golf cart" },
      { dimension: "length", label: "Heart length", value: 0.6, si_unit: "m" },
      { dimension: "volume", label: "Blood per beat", value: 0.08, si_unit: "m³", note: "About 80 liters per heartbeat" },
      { dimension: "frequency", label: "Resting heart rate", value: 0.15, si_unit: "Hz", note: "8–10 beats per minute at the surface" },
      { dimension: "length", label: "Aorta diameter", value: 0.23, si_unit: "m", note: "Large enough for a toddler to crawl through" },
      { dimension: "power", label: "Cardiac output power", value: 2.5, si_unit: "W", note: "Estimated mechanical pumping power" },
    ],
  },

];
