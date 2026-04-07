// ── Extra things seed data (batch 9) ──────────────────────────────────────
// Filling sparse categories: art, bridges, ocean-life, stadiums, trains,
// weather, cities, engineering, literature, mythical, nature

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ART (4 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "the-scream-munch",
    name: "The Scream (Edvard Munch)",
    subtitle: "The most anxious painting in art history",
    category_id: "art",
    description:
      "Edvard Munch created The Scream in 1893, and it has since become the universal symbol for existential dread and Monday mornings. The tempera and crayon composition on cardboard depicts a figure on a bridge with a swirling orange sky. Munch actually created four versions; the most famous one lives in the National Gallery in Oslo. In 2012, a pastel version sold for nearly $120 million at auction, making it one of the most expensive artworks ever sold.",
    search_terms:
      "the scream|edvard munch|expressionism|oslo|painting|anxiety|norwegian art",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.91, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.735, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 0.669, si_unit: "m^2" },
      { dimension: "time", label: "Age", value: 4.1e9, si_unit: "s", note: "Painted in 1893" },
      { dimension: "mass", label: "Estimated mass with frame", value: 3.5, si_unit: "kg" },
      { dimension: "length", label: "Frame depth", value: 0.025, si_unit: "m" },
    ],
  },

  {
    slug: "persistence-of-memory-dali",
    name: "The Persistence of Memory (Salvador Dali)",
    subtitle: "Melting clocks that redefined how we picture time",
    category_id: "art",
    description:
      "Salvador Dali painted The Persistence of Memory in 1931, reportedly inspired by the sight of Camembert cheese melting in the sun. The small oil-on-canvas work is one of the most recognizable paintings of the 20th century, depicting drooping watches draped across a barren landscape. Despite its enormous cultural impact, it is surprisingly tiny, measuring just 24.1 by 33 centimeters. It hangs in the Museum of Modern Art in New York.",
    search_terms:
      "persistence of memory|salvador dali|melting clocks|surrealism|moma|soft watches",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.241, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.33, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 0.0795, si_unit: "m^2" },
      { dimension: "time", label: "Age", value: 2.99e9, si_unit: "s", note: "Painted in 1931" },
      { dimension: "mass", label: "Estimated mass", value: 1.2, si_unit: "kg" },
      { dimension: "length", label: "Canvas thickness", value: 0.003, si_unit: "m" },
    ],
  },

  {
    slug: "birth-of-venus-botticelli",
    name: "The Birth of Venus (Sandro Botticelli)",
    subtitle: "A goddess on a giant shell, Renaissance style",
    category_id: "art",
    description:
      "Sandro Botticelli painted The Birth of Venus around 1485, depicting the goddess Venus emerging from the sea as a fully grown woman standing on a scallop shell. At 1.72 by 2.78 meters, it is a genuinely large painting and one of the first major works of the Italian Renaissance to depict a non-religious nude figure. It was painted with tempera on canvas rather than the more common wood panel. It resides in the Uffizi Gallery in Florence, where it has been since at least 1815.",
    search_terms:
      "birth of venus|botticelli|renaissance|uffizi|florence|goddess|shell|italian art",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.72, si_unit: "m" },
      { dimension: "length", label: "Width", value: 2.78, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 4.782, si_unit: "m^2" },
      { dimension: "time", label: "Age", value: 1.71e10, si_unit: "s", note: "Painted circa 1485" },
      { dimension: "mass", label: "Estimated mass", value: 15, si_unit: "kg", note: "Canvas and frame" },
      { dimension: "length", label: "Canvas thickness", value: 0.004, si_unit: "m" },
    ],
  },

  {
    slug: "girl-with-a-pearl-earring",
    name: "Girl with a Pearl Earring (Johannes Vermeer)",
    subtitle: "The Mona Lisa of the North, staring over her shoulder",
    category_id: "art",
    description:
      "Johannes Vermeer painted Girl with a Pearl Earring around 1665. Often called the 'Mona Lisa of the North,' it depicts a young woman in a blue and gold turban with a large pearl earring, turning to look at the viewer over her shoulder against a dark background. The painting is a tronie, a Dutch genre of character study rather than a portrait of a specific person. It hangs in the Mauritshuis museum in The Hague. Tracy Chevalier's 1999 novel and the subsequent 2003 film brought it renewed fame.",
    search_terms:
      "girl with a pearl earring|vermeer|dutch golden age|mauritshuis|hague|tronie|pearl",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.445, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.39, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 0.1736, si_unit: "m^2" },
      { dimension: "time", label: "Age", value: 1.14e10, si_unit: "s", note: "Painted circa 1665" },
      { dimension: "mass", label: "Estimated mass", value: 4, si_unit: "kg", note: "Oil on canvas with frame" },
      { dimension: "length", label: "Pearl diameter (depicted)", value: 0.015, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRIDGES (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "rialto-bridge-venice",
    name: "Rialto Bridge",
    subtitle: "Venice's oldest and most famous canal crossing",
    category_id: "bridges",
    description:
      "The Rialto Bridge spans the Grand Canal in Venice and is the oldest of the four bridges crossing that waterway. Completed in 1591 and designed by Antonio da Ponte, it replaced a series of wooden bridges that kept collapsing or burning down. The stone arch bridge features two inclined ramps leading to a central portico lined with shops. It remained the only way to cross the Grand Canal on foot for nearly 300 years. The single stone arch spans 28.8 meters and was considered an engineering marvel of its time.",
    search_terms:
      "rialto bridge|venice|grand canal|ponte di rialto|antonio da ponte|stone arch",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 48, si_unit: "m" },
      { dimension: "length", label: "Width", value: 22, si_unit: "m" },
      { dimension: "length", label: "Height above water", value: 7.5, si_unit: "m" },
      { dimension: "length", label: "Arch span", value: 28.8, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.37e10, si_unit: "s", note: "Completed in 1591" },
      { dimension: "mass", label: "Estimated stone mass", value: 7000000, si_unit: "kg" },
    ],
  },

  {
    slug: "forth-bridge-scotland",
    name: "Forth Bridge",
    subtitle: "The cantilever colossus that defines Scotland's skyline",
    category_id: "bridges",
    description:
      "The Forth Bridge is a cantilever railway bridge over the Firth of Forth in Scotland, completed in 1890. It was the first major structure in Britain to be built from steel rather than iron, and its distinctive diamond-shaped cantilever design was a direct response to the Tay Bridge disaster of 1879. The bridge uses about 53,000 tonnes of steel and 6.5 million rivets. The phrase 'painting the Forth Bridge' became a British idiom for a never-ending task, though a modern protective coating applied between 2002 and 2011 is expected to last 25 years.",
    search_terms:
      "forth bridge|firth of forth|scotland|cantilever|railway bridge|edinburgh|steel bridge",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 2467, si_unit: "m" },
      { dimension: "length", label: "Height above water", value: 110, si_unit: "m" },
      { dimension: "mass", label: "Steel mass", value: 53000000, si_unit: "kg" },
      { dimension: "length", label: "Main span", value: 521, si_unit: "m", note: "Each of two main spans" },
      { dimension: "time", label: "Age", value: 4.29e9, si_unit: "s", note: "Completed in 1890" },
      { dimension: "count", label: "Rivets", value: 6500000, si_unit: "units" },
    ],
  },

  {
    slug: "tsing-ma-bridge",
    name: "Tsing Ma Bridge",
    subtitle: "The world's longest suspension bridge carrying both road and rail",
    category_id: "bridges",
    description:
      "The Tsing Ma Bridge in Hong Kong connects Tsing Yi island to Ma Wan island and was completed in 1997, just in time for the opening of Hong Kong International Airport. It carries both road traffic on its upper deck and railway and sheltered road lanes on its lower deck. Its main span of 1,377 meters made it the world's longest suspension bridge carrying rail traffic. The bridge was designed to withstand typhoon winds and is closed to traffic during the strongest storms, with vehicles rerouted to the enclosed lower deck.",
    search_terms:
      "tsing ma bridge|hong kong|suspension bridge|lantau link|airport|rail bridge",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 2160, si_unit: "m" },
      { dimension: "length", label: "Main span", value: 1377, si_unit: "m" },
      { dimension: "length", label: "Tower height", value: 206, si_unit: "m" },
      { dimension: "mass", label: "Total steel mass", value: 49000000, si_unit: "kg" },
      { dimension: "length", label: "Deck width", value: 41, si_unit: "m" },
      { dimension: "speed", label: "Design wind speed", value: 74, si_unit: "m/s", note: "Typhoon resistance" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCEAN LIFE (4 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "hammerhead-shark",
    name: "Great Hammerhead Shark",
    subtitle: "The shark that looks like it lost a fight with a shovel",
    category_id: "ocean-life",
    description:
      "The great hammerhead shark (Sphyrna mokarran) is the largest of the nine hammerhead species. Its distinctive wide, flat head (called a cephalofoil) is thought to improve electroreception, allowing it to detect stingrays buried in the sand. The head also provides extra lift as the shark swims, functioning like a hydrofoil. Great hammerheads are solitary, nomadic hunters found in warm temperate and tropical waters worldwide. Despite their fearsome appearance, they are critically endangered due to overfishing for their fins.",
    search_terms:
      "hammerhead shark|sphyrna mokarran|cephalofoil|shark|predator|endangered|tropical",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 4.5, si_unit: "m", note: "Maximum around 6.1 m" },
      { dimension: "mass", label: "Body mass", value: 450, si_unit: "kg" },
      { dimension: "speed", label: "Swimming speed", value: 11, si_unit: "m/s" },
      { dimension: "length", label: "Head width (cephalofoil)", value: 0.9, si_unit: "m" },
      { dimension: "length", label: "Maximum dive depth", value: 300, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 1.42e9, si_unit: "s", note: "About 44 years" },
    ],
  },

  {
    slug: "sea-otter",
    name: "Sea Otter",
    subtitle: "The cuddliest marine mammal and champion rock user",
    category_id: "ocean-life",
    description:
      "The sea otter (Enhydra lutris) is the smallest marine mammal but has the densest fur of any animal, with up to 150,000 hairs per square centimeter. Unlike other marine mammals, sea otters rely on fur rather than blubber for insulation. They famously float on their backs, using their bellies as dining tables and cracking open shellfish with rocks, making them one of the few non-primate tool users. They eat about 25% of their body weight daily to fuel their high metabolism. They also hold hands while sleeping to avoid drifting apart.",
    search_terms:
      "sea otter|enhydra lutris|marine mammal|fur|kelp forest|tool use|shellfish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.2, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 30, si_unit: "kg" },
      { dimension: "length", label: "Maximum dive depth", value: 100, si_unit: "m" },
      { dimension: "time", label: "Dive duration", value: 300, si_unit: "s", note: "Up to 5 minutes" },
      { dimension: "temperature", label: "Body temperature", value: 311, si_unit: "K", note: "About 38 C" },
      { dimension: "time", label: "Lifespan", value: 6.3e8, si_unit: "s", note: "About 20 years" },
    ],
  },

  {
    slug: "moray-eel",
    name: "Giant Moray Eel",
    subtitle: "The toothy ambush predator hiding in coral crevices",
    category_id: "ocean-life",
    description:
      "The giant moray (Gymnothorax javanicus) is the largest moray eel by mass, found throughout the Indo-Pacific. It has a second set of jaws in its throat (pharyngeal jaws) that shoot forward to grasp prey and pull it down, which is basically the biological inspiration for the Alien franchise. Morays lack pectoral and pelvic fins and have a ribbon-like dorsal fin running the length of their body. They are often seen with their mouths gaping open, which looks threatening but is actually just how they breathe.",
    search_terms:
      "moray eel|gymnothorax|pharyngeal jaws|coral reef|predator|indo-pacific|eel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 30, si_unit: "kg" },
      { dimension: "length", label: "Body diameter", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Typical depth range", value: 50, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 1.1e9, si_unit: "s", note: "About 36 years" },
      { dimension: "length", label: "Jaw gape", value: 0.12, si_unit: "m" },
    ],
  },

  {
    slug: "pygmy-seahorse",
    name: "Pygmy Seahorse",
    subtitle: "A fish so tiny it was discovered living on coral researchers were studying",
    category_id: "ocean-life",
    description:
      "Pygmy seahorses (Hippocampus bargibanti) are among the smallest vertebrates in the ocean, typically less than 2 centimeters long. They were discovered in 1969 by accident when a marine biologist noticed them on a gorgonian coral specimen in a lab. Their camouflage is so effective that they are nearly impossible to spot in the wild. Like all seahorses, the males carry the young in a brood pouch. A single pygmy seahorse may spend its entire adult life on the same coral fan.",
    search_terms:
      "pygmy seahorse|hippocampus bargibanti|tiny fish|coral|camouflage|smallest seahorse",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.02, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.001, si_unit: "kg" },
      { dimension: "length", label: "Snout length", value: 0.002, si_unit: "m" },
      { dimension: "length", label: "Depth range", value: 40, si_unit: "m", note: "Typically 16-40 m" },
      { dimension: "time", label: "Lifespan", value: 6.3e7, si_unit: "s", note: "About 2 years" },
      { dimension: "count", label: "Brood size", value: 12, si_unit: "units", note: "Average per pregnancy" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STADIUMS (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "rungrado-may-day-stadium",
    name: "Rungrado May Day Stadium",
    subtitle: "The world's largest stadium, seating 114,000 in Pyongyang",
    category_id: "stadiums",
    description:
      "The Rungrado 1st of May Stadium in Pyongyang, North Korea, is the largest stadium in the world by capacity, seating approximately 114,000 spectators. Completed in 1989, its distinctive scalloped roof consists of 16 arches arranged in a ring, giving it a shape resembling a magnolia blossom or a parachute. The stadium hosts the Mass Games, an elaborate propaganda spectacle involving over 100,000 performers. It covers about 20.7 hectares and rises 60 meters above grade.",
    search_terms:
      "rungrado|may day stadium|pyongyang|north korea|largest stadium|mass games|dprk",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total site area", value: 207000, si_unit: "m^2" },
      { dimension: "length", label: "Height", value: 60, si_unit: "m" },
      { dimension: "mass", label: "Estimated structural mass", value: 500000000, si_unit: "kg" },
      { dimension: "count", label: "Seating capacity", value: 114000, si_unit: "units" },
      { dimension: "length", label: "Roof diameter", value: 250, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.17e9, si_unit: "s", note: "Completed in 1989" },
    ],
  },

  {
    slug: "azteca-stadium",
    name: "Estadio Azteca",
    subtitle: "The only stadium to host two FIFA World Cup finals",
    category_id: "stadiums",
    description:
      "Estadio Azteca in Mexico City is the only stadium in the world to have hosted two FIFA World Cup finals (1970 and 1986). It was the stage for Diego Maradona's infamous 'Hand of God' goal and his extraordinary solo goal against England, widely considered the greatest goal ever scored. Built at an elevation of 2,200 meters above sea level, its thin air has famously winded visiting teams. Opened in 1966 with a capacity of 105,000, it has since been reduced to about 87,500 for safety.",
    search_terms:
      "azteca stadium|estadio azteca|mexico city|world cup|maradona|football|soccer",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Playing field area", value: 7140, si_unit: "m^2" },
      { dimension: "length", label: "Height", value: 50, si_unit: "m" },
      { dimension: "count", label: "Current seating capacity", value: 87500, si_unit: "units" },
      { dimension: "length", label: "Elevation above sea level", value: 2200, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.89e9, si_unit: "s", note: "Opened in 1966" },
      { dimension: "length", label: "Pitch length", value: 105, si_unit: "m" },
    ],
  },

  {
    slug: "fisht-olympic-stadium",
    name: "Fisht Olympic Stadium",
    subtitle: "The jewel of the Sochi 2014 Winter Olympics",
    category_id: "stadiums",
    description:
      "Fisht Olympic Stadium in Sochi, Russia, was the centerpiece of the 2014 Winter Olympics, hosting the opening and closing ceremonies. Named after Mount Fisht in the western Caucasus, its translucent polycarbonate roof was designed to evoke a snow-capped mountain peak or a seashell. After the Olympics, it was converted into a football stadium for the 2018 FIFA World Cup. The conversion involved removing the roof to create an open-air venue and adding extra seating, bringing capacity to about 47,700.",
    search_terms:
      "fisht stadium|sochi|olympics 2014|winter olympics|russia|world cup 2018|caucasus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 69, si_unit: "m" },
      { dimension: "area", label: "Total area", value: 45000, si_unit: "m^2" },
      { dimension: "count", label: "Seating capacity", value: 47700, si_unit: "units" },
      { dimension: "length", label: "Roof span", value: 255, si_unit: "m" },
      { dimension: "mass", label: "Estimated structural mass", value: 85000000, si_unit: "kg" },
      { dimension: "time", label: "Age", value: 3.79e8, si_unit: "s", note: "Completed in 2013" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAINS (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "eurostar-e320",
    name: "Eurostar e320",
    subtitle: "The high-speed train that dashes under the English Channel",
    category_id: "trains",
    description:
      "The Eurostar e320 (Class 374), built by Siemens and based on the Velaro D platform, entered service in 2015 and is capable of 320 km/h (200 mph). Each 16-car set carries up to 900 passengers between London, Paris, Brussels, and Amsterdam. The train traverses the 50-kilometer Channel Tunnel in about 20 minutes, spending the rest of its journey on dedicated high-speed lines. The e320 replaced many of the original TGV-derived sets and features distributed power across the trainset rather than relying on separate power cars.",
    search_terms:
      "eurostar|e320|class 374|siemens|velaro|high speed|channel tunnel|london paris",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Train length", value: 200, si_unit: "m" },
      { dimension: "speed", label: "Maximum speed", value: 89, si_unit: "m/s", note: "320 km/h" },
      { dimension: "mass", label: "Total mass", value: 440000, si_unit: "kg" },
      { dimension: "count", label: "Passenger capacity", value: 900, si_unit: "units" },
      { dimension: "power", label: "Power output", value: 16000000, si_unit: "W", note: "16 MW distributed traction" },
      { dimension: "length", label: "Channel crossing distance", value: 50000, si_unit: "m" },
    ],
  },

  {
    slug: "indian-pacific-train",
    name: "Indian Pacific",
    subtitle: "Australia's transcontinental rail journey from ocean to ocean",
    category_id: "trains",
    description:
      "The Indian Pacific is one of the world's great train journeys, running 4,352 kilometers between Sydney on the Pacific Ocean and Perth on the Indian Ocean, hence the name. The journey takes about 65 hours and crosses the Nullarbor Plain, which includes the world's longest stretch of straight railway track at 478 kilometers. The train carries up to 210 passengers in Gold and Platinum classes. It passes through three time zones and some of the most remote terrain on Earth, where the nearest town might be 500 kilometers away.",
    search_terms:
      "indian pacific|australia|transcontinental|sydney|perth|nullarbor|great southern rail",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Train length", value: 774, si_unit: "m" },
      { dimension: "length", label: "Journey distance", value: 4352000, si_unit: "m" },
      { dimension: "time", label: "Journey duration", value: 234000, si_unit: "s", note: "About 65 hours" },
      { dimension: "length", label: "Longest straight section", value: 478000, si_unit: "m", note: "World record straight track across Nullarbor" },
      { dimension: "count", label: "Passenger capacity", value: 210, si_unit: "units" },
      { dimension: "speed", label: "Cruising speed", value: 29, si_unit: "m/s", note: "About 105 km/h average" },
    ],
  },

  {
    slug: "glacier-express",
    name: "Glacier Express",
    subtitle: "The slowest express train in the world, and proud of it",
    category_id: "trains",
    description:
      "The Glacier Express runs between Zermatt and St. Moritz in Switzerland, covering 291 kilometers in about 8 hours at an average speed of roughly 36 km/h. It crosses 291 bridges, passes through 91 tunnels, and climbs to 2,033 meters at the Oberalp Pass. The route was completed in 1930 and is considered one of the most scenic railway journeys on Earth. The train's panoramic cars have oversized windows tilted outward so passengers can see the Alpine peaks above. The dining car serves multi-course meals on tilted glasses designed for the steep gradients.",
    search_terms:
      "glacier express|switzerland|zermatt|st moritz|scenic railway|alps|oberalp pass",
    featured: 0,
    measurements: [
      { dimension: "speed", label: "Average speed", value: 10, si_unit: "m/s", note: "About 36 km/h" },
      { dimension: "length", label: "Route length", value: 291000, si_unit: "m" },
      { dimension: "time", label: "Journey duration", value: 28800, si_unit: "s", note: "About 8 hours" },
      { dimension: "length", label: "Maximum elevation", value: 2033, si_unit: "m", note: "Oberalp Pass" },
      { dimension: "count", label: "Bridges crossed", value: 291, si_unit: "units" },
      { dimension: "count", label: "Tunnels traversed", value: 91, si_unit: "units" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WEATHER (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "ball-lightning",
    name: "Ball Lightning",
    subtitle: "The rare glowing orb that science still cannot fully explain",
    category_id: "weather",
    description:
      "Ball lightning is one of the most mysterious atmospheric phenomena. Witnesses describe a luminous sphere, typically 10 to 50 centimeters in diameter, that floats through the air for several seconds before vanishing, sometimes with an explosion. Reports date back centuries, but it was only captured on video by Chinese researchers in 2012 during a thunderstorm on the Tibetan Plateau. Proposed explanations range from plasma vortices to silicon nanoparticles, but no single theory accounts for all observed characteristics. It remains one of the last genuinely unexplained weather phenomena.",
    search_terms:
      "ball lightning|plasma|atmospheric phenomenon|thunderstorm|luminous sphere|unexplained",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical diameter", value: 0.3, si_unit: "m" },
      { dimension: "temperature", label: "Estimated surface temperature", value: 5000, si_unit: "K" },
      { dimension: "time", label: "Typical duration", value: 5, si_unit: "s" },
      { dimension: "speed", label: "Typical drift speed", value: 2, si_unit: "m/s" },
      { dimension: "energy", label: "Estimated energy content", value: 10000, si_unit: "J" },
      { dimension: "length", label: "Observation height above ground", value: 1.5, si_unit: "m" },
    ],
  },

  {
    slug: "waterspout",
    name: "Waterspout",
    subtitle: "A tornado's aquatic cousin, spinning over open water",
    category_id: "weather",
    description:
      "A waterspout is a columnar vortex that forms over a body of water, essentially a tornado over water. Fair-weather waterspouts form from the surface up in relatively calm conditions and are common in the Florida Keys, where up to 500 are observed per year. Tornadic waterspouts, by contrast, form from severe thunderstorms and can be as dangerous as land tornadoes. Most waterspouts last 5 to 10 minutes and dissipate when they make landfall. Despite their dramatic appearance, fair-weather waterspouts are generally weak, with wind speeds around 30 m/s.",
    search_terms:
      "waterspout|tornado|vortex|ocean|water|florida keys|fair weather|marine weather",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical height", value: 100, si_unit: "m" },
      { dimension: "speed", label: "Wind speed", value: 30, si_unit: "m/s" },
      { dimension: "length", label: "Typical width", value: 50, si_unit: "m" },
      { dimension: "time", label: "Typical duration", value: 600, si_unit: "s", note: "5-10 minutes" },
      { dimension: "speed", label: "Forward movement speed", value: 5, si_unit: "m/s" },
      { dimension: "length", label: "Spray vortex height", value: 30, si_unit: "m" },
    ],
  },

  {
    slug: "supercell-thunderstorm",
    name: "Supercell Thunderstorm",
    subtitle: "The rotating monster that spawns tornadoes, hail, and chaos",
    category_id: "weather",
    description:
      "A supercell is the most powerful and dangerous type of thunderstorm, characterized by a deep, persistently rotating updraft called a mesocyclone. Supercells can persist for hours, produce tornadoes of EF5 intensity, hailstones larger than softballs, and downpours exceeding 100 mm per hour. A single supercell can contain energy equivalent to about 10 Hiroshima-sized nuclear bombs. They are most common in the Great Plains of the United States ('Tornado Alley') but can occur anywhere conditions favor strong wind shear and atmospheric instability.",
    search_terms:
      "supercell|thunderstorm|mesocyclone|tornado|hail|severe weather|tornado alley|storm",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical diameter", value: 30000, si_unit: "m" },
      { dimension: "length", label: "Cloud top height", value: 15000, si_unit: "m" },
      { dimension: "energy", label: "Total energy", value: 1e15, si_unit: "J" },
      { dimension: "speed", label: "Updraft speed", value: 50, si_unit: "m/s", note: "Can exceed 70 m/s" },
      { dimension: "speed", label: "Forward movement speed", value: 15, si_unit: "m/s" },
      { dimension: "time", label: "Typical lifespan", value: 7200, si_unit: "s", note: "1-4 hours" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CITIES (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "new-york-city",
    name: "New York City",
    subtitle: "The city so nice they named it twice, spread across five boroughs",
    category_id: "cities",
    description:
      "New York City is the most populous city in the United States, with about 8.3 million people packed into 783 square kilometers across five boroughs. Manhattan alone has a population density of about 27,500 people per square kilometer, making it one of the most densely populated places on Earth. The city has over 10,000 kilometers of streets, 472 subway stations, and more than one million buildings. Its skyline contains over 7,000 high-rise buildings, including 99 skyscrapers taller than 183 meters. The city never sleeps, and after visiting, neither will you.",
    search_terms:
      "new york city|nyc|manhattan|brooklyn|five boroughs|big apple|new york",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 7.83e8, si_unit: "m^2" },
      { dimension: "count", label: "Population", value: 8300000, si_unit: "units", note: "2023 estimate" },
      { dimension: "length", label: "Total street length", value: 10000000, si_unit: "m" },
      { dimension: "count", label: "Subway stations", value: 472, si_unit: "units" },
      { dimension: "count", label: "Buildings", value: 1000000, si_unit: "units" },
      { dimension: "length", label: "Highest point (One WTC)", value: 541, si_unit: "m" },
    ],
  },

  {
    slug: "beijing-city",
    name: "Beijing",
    subtitle: "China's capital spanning over 16,000 square kilometers",
    category_id: "cities",
    description:
      "Beijing, the capital of China, is one of the most populous cities on Earth with about 21.5 million residents across a municipal area of roughly 16,410 square kilometers. The city has been a center of power for over 800 years and contains six UNESCO World Heritage Sites, including the Forbidden City, the Temple of Heaven, and sections of the Great Wall. Its six concentric ring roads span progressively outward from the ancient city center. The Sixth Ring Road alone is 187 kilometers in circumference. Beijing hosted the Summer Olympics in 2008 and the Winter Olympics in 2022, the only city to host both.",
    search_terms:
      "beijing|peking|china capital|forbidden city|great wall|ring roads|olympics",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Municipal area", value: 1.641e10, si_unit: "m^2" },
      { dimension: "count", label: "Population", value: 21500000, si_unit: "units", note: "2023 estimate" },
      { dimension: "length", label: "Sixth Ring Road circumference", value: 187000, si_unit: "m" },
      { dimension: "count", label: "UNESCO World Heritage Sites", value: 6, si_unit: "units" },
      { dimension: "count", label: "Subway stations", value: 490, si_unit: "units" },
      { dimension: "length", label: "Subway network length", value: 807000, si_unit: "m" },
    ],
  },

  {
    slug: "istanbul-city",
    name: "Istanbul",
    subtitle: "The only city straddling two continents",
    category_id: "cities",
    description:
      "Istanbul is the only major city in the world that straddles two continents, with the Bosphorus strait dividing its European and Asian sides. With about 15.8 million people across 5,461 square kilometers, it is Turkey's largest city and economic heart. The city was previously known as Byzantium (660 BC) and Constantinople (330 AD) and served as the capital of the Roman, Byzantine, Latin, and Ottoman empires. Its skyline is defined by the domes and minarets of mosques alongside modern skyscrapers. The Bosphorus Bridge (now the 15 July Martyrs Bridge) was the first bridge to connect Europe and Asia when it opened in 1973.",
    search_terms:
      "istanbul|constantinople|byzantium|turkey|bosphorus|two continents|ottoman",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Metropolitan area", value: 5.461e9, si_unit: "m^2" },
      { dimension: "count", label: "Population", value: 15800000, si_unit: "units", note: "2023 estimate" },
      { dimension: "length", label: "Bosphorus length", value: 31000, si_unit: "m" },
      { dimension: "time", label: "Age of settlement", value: 8.5e10, si_unit: "s", note: "Founded as Byzantium circa 660 BC" },
      { dimension: "length", label: "Bosphorus Bridge span", value: 1560, si_unit: "m" },
      { dimension: "count", label: "Historic mosques", value: 3113, si_unit: "units" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGINEERING (3 new) -- Akashi Kaikyo and Millau Viaduct already exist
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "channel-tunnel-boring-machine",
    name: "Channel Tunnel Boring Machine",
    subtitle: "The 1,100-tonne mole that chewed through chalk under the sea",
    category_id: "engineering",
    description:
      "The Channel Tunnel was bored by 11 tunnel boring machines (TBMs), with the largest being the marine service tunnel machines at 8.36 meters in diameter. Each TBM weighed about 1,100 tonnes and could advance up to 75 meters per day through the chalk marl beneath the English Channel. The TBMs that bored from the English side were driven forward into the ground and buried in place when they completed their runs, as it was cheaper to buy new ones than to extract them. They remain entombed beneath the sea bed to this day.",
    search_terms:
      "tunnel boring machine|tbm|channel tunnel|chunnel|engineering|chalk marl|marine tunnel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Machine length", value: 200, si_unit: "m", note: "Including trailing support gantries" },
      { dimension: "mass", label: "Machine mass", value: 1100000, si_unit: "kg" },
      { dimension: "length", label: "Cutting head diameter", value: 8.36, si_unit: "m" },
      { dimension: "speed", label: "Maximum advance rate", value: 0.00087, si_unit: "m/s", note: "About 75 m per day" },
      { dimension: "power", label: "Cutting power", value: 3700000, si_unit: "W", note: "3.7 MW" },
      { dimension: "length", label: "Tunnel depth below seabed", value: 40, si_unit: "m" },
    ],
  },

  {
    slug: "itaipu-dam",
    name: "Itaipu Dam",
    subtitle: "The dam that generates more electricity than any other on Earth",
    category_id: "engineering",
    description:
      "The Itaipu Dam on the Parana River between Brazil and Paraguay is the world's largest generator of renewable electricity. In 2016, it produced 103.1 terawatt-hours, enough to supply about 15% of Brazil's and 86% of Paraguay's electricity consumption. The dam is 7,235 meters long and 196 meters high, and required moving 50 million tonnes of earth and rock during construction. To build it, engineers diverted the entire Parana River, one of the world's largest rivers by flow. The project required the relocation of 10,000 families and the flooding of the Guaira Falls, which had been the world's largest waterfall by volume.",
    search_terms:
      "itaipu dam|hydroelectric|brazil|paraguay|parana river|renewable energy|power station",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Dam length", value: 7235, si_unit: "m" },
      { dimension: "length", label: "Dam height", value: 196, si_unit: "m" },
      { dimension: "power", label: "Installed capacity", value: 14000000000, si_unit: "W", note: "14 GW from 20 turbines" },
      { dimension: "energy", label: "Annual energy output", value: 3.71e17, si_unit: "J", note: "103.1 TWh in record year 2016" },
      { dimension: "volume", label: "Reservoir volume", value: 2.9e10, si_unit: "m^3" },
      { dimension: "mass", label: "Concrete mass", value: 12300000000, si_unit: "kg" },
    ],
  },

  {
    slug: "three-gorges-dam",
    name: "Three Gorges Dam",
    subtitle: "The concrete colossus that slowed Earth's rotation",
    category_id: "engineering",
    description:
      "The Three Gorges Dam on the Yangtze River in China is the world's largest concrete structure and most powerful hydroelectric dam by installed capacity. When its reservoir is full, it holds 39.3 cubic kilometers of water, which is so much mass concentrated in one place that NASA calculated it measurably slows Earth's rotation, lengthening the day by 0.06 microseconds. The dam is 2,335 meters long and 181 meters high. Construction took 17 years and displaced over 1.3 million people. Its ship lift can raise vessels of up to 3,000 tonnes over the 113-meter height of the dam.",
    search_terms:
      "three gorges dam|yangtze river|china|hydroelectric|largest dam|hubei|reservoir",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Dam length", value: 2335, si_unit: "m" },
      { dimension: "length", label: "Dam height", value: 181, si_unit: "m" },
      { dimension: "power", label: "Installed capacity", value: 22500000000, si_unit: "W", note: "22.5 GW from 34 turbines" },
      { dimension: "volume", label: "Reservoir volume", value: 3.93e10, si_unit: "m^3" },
      { dimension: "mass", label: "Concrete mass", value: 28000000000, si_unit: "kg" },
      { dimension: "length", label: "Ship lift height", value: 113, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "voynich-manuscript",
    name: "Voynich Manuscript",
    subtitle: "The 600-year-old book nobody can read",
    category_id: "literature",
    description:
      "The Voynich Manuscript is a 240-page illustrated codex written in an unknown script and language that has defied every attempt at decipherment since its rediscovery in 1912 by Wilfrid Voynich. Radiocarbon dating places its creation between 1404 and 1438. The manuscript contains elaborate illustrations of unidentifiable plants, astronomical diagrams, and what appear to be bathing women connected by elaborate plumbing. Countless cryptographers, linguists, and codebreakers, including World War II codebreakers, have failed to crack it. It now resides in Yale University's Beinecke Rare Book Library.",
    search_terms:
      "voynich manuscript|undeciphered|unknown script|yale|beinecke|medieval|codex|mystery",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Page height", value: 0.235, si_unit: "m" },
      { dimension: "length", label: "Page width", value: 0.162, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 2, si_unit: "kg" },
      { dimension: "count", label: "Pages", value: 240, si_unit: "units" },
      { dimension: "time", label: "Age", value: 1.96e10, si_unit: "s", note: "Created circa 1404-1438" },
      { dimension: "area", label: "Page area", value: 0.0381, si_unit: "m^2" },
    ],
  },

  {
    slug: "codex-gigas",
    name: "Codex Gigas",
    subtitle: "The Devil's Bible, the largest surviving medieval manuscript",
    category_id: "literature",
    description:
      "The Codex Gigas (Latin for 'Giant Book') is the largest surviving medieval manuscript in the world, measuring 92 centimeters tall, 50 centimeters wide, and 22 centimeters thick. It weighs about 75 kilograms and requires two people to lift. Created in the early 13th century in Bohemia, it is famous for a large, full-page illustration of the Devil, earning it the nickname 'The Devil's Bible.' Legend says a monk wrote the entire thing in one night with the Devil's help. Paleographic analysis suggests it was actually the work of a single scribe over 20 to 30 years. It is housed in the National Library of Sweden in Stockholm.",
    search_terms:
      "codex gigas|devils bible|giant book|medieval manuscript|bohemia|sweden|largest book",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.92, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.22, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 75, si_unit: "kg" },
      { dimension: "count", label: "Pages", value: 310, si_unit: "units" },
      { dimension: "time", label: "Age", value: 2.52e10, si_unit: "s", note: "Created circa 1229" },
    ],
  },

  {
    slug: "diamond-sutra",
    name: "Diamond Sutra",
    subtitle: "The world's oldest dated printed book, from 868 AD",
    category_id: "literature",
    description:
      "The Diamond Sutra is the oldest known dated printed book in the world, produced on 11 May 868 AD using woodblock printing. It is a Buddhist text, and the copy held by the British Library is a 5.18-meter-long scroll made of seven panels of text glued together. It was discovered in 1900 in the Mogao Caves near Dunhuang, China, sealed in a hidden chamber for roughly a thousand years. The colophon at the end reads 'Reverently made for universal free distribution by Wang Jie,' making it possibly the world's oldest example of a work explicitly placed in the public domain.",
    search_terms:
      "diamond sutra|oldest printed book|woodblock|868 ad|dunhuang|mogao caves|buddhist|british library",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Scroll length", value: 5.18, si_unit: "m" },
      { dimension: "length", label: "Scroll height", value: 0.267, si_unit: "m" },
      { dimension: "time", label: "Age", value: 3.65e10, si_unit: "s", note: "Printed 11 May 868 AD" },
      { dimension: "count", label: "Panels", value: 7, si_unit: "units" },
      { dimension: "area", label: "Total surface area", value: 1.383, si_unit: "m^2" },
      { dimension: "mass", label: "Estimated mass", value: 0.5, si_unit: "kg" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MYTHICAL (3 new) -- TARDIS exterior already exists
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "galadriels-phial",
    name: "Galadriel's Phial",
    subtitle: "A small bottle containing the light of the most beloved star",
    category_id: "mythical",
    description:
      "The Phial of Galadriel is a gift given to Frodo Baggins by Galadriel in Lothlorien, containing the light of Earendil's star captured in the waters of her fountain. In The Lord of the Rings, it serves as 'a light when all other lights go out,' most notably in the tunnel of Shelob where Frodo and Sam use it to ward off a giant spider. Its light is described as penetrating darkness that no other light could touch. Despite being essentially a small crystal bottle, it contains light from a Silmaril, making it a container for one of the most powerful artifacts in Tolkien's mythology.",
    search_terms:
      "galadriel phial|light of earendil|lord of the rings|tolkien|frodo|shelob|lothlorien",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.15, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.2, si_unit: "kg" },
      { dimension: "power", label: "Luminous output (estimated)", value: 0.01, si_unit: "W", note: "In darkness; may increase in peril" },
      { dimension: "volume", label: "Liquid volume", value: 0.00005, si_unit: "m^3", note: "About 50 mL" },
      { dimension: "length", label: "Diameter", value: 0.04, si_unit: "m" },
      { dimension: "time", label: "Age of captured light (in-universe)", value: 2.2e11, si_unit: "s", note: "Light of Earendil from the First Age" },
    ],
  },

  {
    slug: "optimus-prime",
    name: "Optimus Prime",
    subtitle: "The Autobot leader who transforms into a surprisingly normal truck",
    category_id: "mythical",
    description:
      "Optimus Prime is the leader of the Autobots in the Transformers franchise, a sentient robot from the planet Cybertron who transforms into a Freightliner FL86 cab-over-engine truck (in the original 1984 cartoon) or a Peterbilt 379 (in the Michael Bay films). Standing about 8.5 meters tall in robot form, he wields the Matrix of Leadership and has died and been resurrected so many times that it has become a running joke in the fandom. Despite being a 4,300-kilogram alien robot wielding an energon axe, his primary character trait is making inspirational speeches about freedom.",
    search_terms:
      "optimus prime|transformers|autobot|cybertron|truck|hasbro|matrix of leadership",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (robot form)", value: 8.5, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 4300, si_unit: "kg" },
      { dimension: "length", label: "Truck form length", value: 8, si_unit: "m", note: "Peterbilt 379 cab with trailer" },
      { dimension: "speed", label: "Running speed", value: 20, si_unit: "m/s", note: "Estimated from animated appearances" },
      { dimension: "length", label: "Energon axe length", value: 2.5, si_unit: "m" },
      { dimension: "power", label: "Estimated power output", value: 5000000, si_unit: "W", note: "Based on feats in various media" },
    ],
  },

  {
    slug: "mjolnir-thors-hammer",
    name: "Mjolnir (Thor's Hammer)",
    subtitle: "The hammer that only the worthy can lift",
    category_id: "mythical",
    description:
      "Mjolnir is the enchanted hammer wielded by Thor in both Norse mythology and the Marvel Cinematic Universe. In the MCU, it was forged in the heart of a dying star from the fictional metal Uru. The inscription reads: 'Whosoever holds this hammer, if he be worthy, shall possess the power of Thor.' According to Marvel specifications, it weighs about 19.2 kilograms with a handle approximately 28 centimeters long. In Norse mythology, the handle was made short because Loki distracted the dwarven smiths during its creation. Astrophysicist Neil deGrasse Tyson calculated that if Mjolnir were made of neutron star material, it would weigh roughly 300 billion elephants.",
    search_terms:
      "mjolnir|thor|hammer|marvel|norse mythology|uru|worthy|avengers|asgard",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Handle length", value: 0.28, si_unit: "m" },
      { dimension: "length", label: "Head length", value: 0.15, si_unit: "m" },
      { dimension: "mass", label: "Mass (MCU)", value: 19.2, si_unit: "kg" },
      { dimension: "length", label: "Head width", value: 0.12, si_unit: "m" },
      { dimension: "speed", label: "Throwing speed (estimated)", value: 200, si_unit: "m/s", note: "Based on MCU combat scenes" },
      { dimension: "force", label: "Impact force (estimated)", value: 500000, si_unit: "N", note: "Based on MCU destructive feats" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NATURE (3 new) -- Niagara Falls, Old Faithful, Yellowstone already exist
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "iguazu-falls",
    name: "Iguazu Falls",
    subtitle: "275 waterfalls in a two-mile semicircle of thundering water",
    category_id: "nature",
    description:
      "Iguazu Falls sits on the border of Argentina and Brazil, consisting of 275 individual drops spread across nearly 2.7 kilometers of the Iguazu River. The tallest drop, known as the Devil's Throat (Garganta del Diablo), plunges 82 meters. The falls are wider than Victoria Falls and taller than Niagara Falls. When Eleanor Roosevelt first saw them, she reportedly said 'Poor Niagara!' The spray creates a permanent rainbow on sunny days, and the surrounding national parks protect one of the largest remnants of the Atlantic Forest. Average water flow is about 1,756 cubic meters per second.",
    search_terms:
      "iguazu falls|iguassu|argentina|brazil|devil's throat|waterfall|atlantic forest",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (Devil's Throat)", value: 82, si_unit: "m" },
      { dimension: "length", label: "Total width", value: 2700, si_unit: "m" },
      { dimension: "volume", label: "Average water flow", value: 1756, si_unit: "m^3", note: "Per second" },
      { dimension: "count", label: "Individual drops", value: 275, si_unit: "units" },
      { dimension: "length", label: "Devil's Throat width", value: 150, si_unit: "m" },
      { dimension: "temperature", label: "Average water temperature", value: 295, si_unit: "K", note: "About 22 C" },
    ],
  },

  {
    slug: "waitomo-glowworm-caves",
    name: "Waitomo Glowworm Caves",
    subtitle: "An underground galaxy of bioluminescent larvae",
    category_id: "nature",
    description:
      "The Waitomo Glowworm Caves on New Zealand's North Island contain one of the most surreal natural spectacles on Earth: thousands of bioluminescent Arachnocampa luminosa larvae that hang from the cave ceiling on silk threads, glowing blue-green to attract prey. The effect is like looking up at a starry sky underground. The limestone caves formed over 30 million years and were first explored by Maori chief Tane Tinorau and English surveyor Fred Mace in 1887 by candlelight on a raft. About 500,000 tourists visit annually, floating through the Glowworm Grotto in silent boats to avoid disturbing the larvae.",
    search_terms:
      "waitomo|glowworm caves|new zealand|bioluminescence|arachnocampa|limestone|cave",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cave system length", value: 300, si_unit: "m", note: "Tourist-accessible section" },
      { dimension: "temperature", label: "Cave temperature", value: 287, si_unit: "K", note: "About 14 C year-round" },
      { dimension: "time", label: "Cave formation age", value: 9.5e14, si_unit: "s", note: "About 30 million years" },
      { dimension: "length", label: "Grotto ceiling height", value: 14, si_unit: "m" },
      { dimension: "length", label: "Glowworm silk thread length", value: 0.4, si_unit: "m", note: "Average hanging thread" },
      { dimension: "count", label: "Annual visitors", value: 500000, si_unit: "units" },
    ],
  },

  {
    slug: "zhangjiajie-pillars",
    name: "Zhangjiajie Sandstone Pillars",
    subtitle: "The floating mountains that inspired Pandora in Avatar",
    category_id: "nature",
    description:
      "The sandstone pillar formations of Zhangjiajie National Forest Park in China's Hunan province are so otherworldly that they inspired the floating Hallelujah Mountains in James Cameron's Avatar. Over 3,000 quartzite sandstone pillars rise from the subtropical forest floor, some over 200 meters tall. The tallest, formerly called the Southern Sky Column and renamed 'Avatar Hallelujah Mountain' after the film, stands 1,080 meters above sea level. The pillars formed over millions of years through physical erosion and the expansion of ice in winter. The park also contains the world's longest and highest glass-bottom bridge, spanning 430 meters between two pillars at a height of 300 meters.",
    search_terms:
      "zhangjiajie|avatar mountains|sandstone pillars|hunan|china|floating mountains|national forest park",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tallest pillar height", value: 200, si_unit: "m", note: "Above forest floor" },
      { dimension: "length", label: "Avatar Hallelujah Mountain elevation", value: 1080, si_unit: "m", note: "Above sea level" },
      { dimension: "count", label: "Number of pillars", value: 3000, si_unit: "units", note: "Over 3,000 named pillars" },
      { dimension: "area", label: "Park area", value: 9.8e6, si_unit: "m^2", note: "Core scenic area" },
      { dimension: "length", label: "Glass bridge span", value: 430, si_unit: "m" },
      { dimension: "time", label: "Formation age", value: 1.26e13, si_unit: "s", note: "About 400,000 years of erosion" },
    ],
  },
];
