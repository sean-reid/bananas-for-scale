// ── Extra things seed data (batch 8) ──────────────────────────────────────
// Filling sparse categories: buildings-modern, deserts, forests, human-feats,
// literature, mythical, toys-games

import type { ThingInput } from "../types";

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // BUILDINGS - MODERN (3 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "marina-bay-sands",
    name: "Marina Bay Sands",
    subtitle: "Three towers holding up a surfboard-shaped sky park",
    category_id: "buildings-modern",
    description:
      "Marina Bay Sands in Singapore, designed by Moshe Safdie and opened in 2010, is a resort complex defined by three 57-storey towers topped by a 340-meter-long SkyPark that cantilevers 67 meters beyond the tower edge. The rooftop infinity pool stretches 150 meters and holds about 1,400 cubic meters of water. The entire complex cost roughly $8 billion to build, making it one of the most expensive standalone buildings ever constructed. It looks like a giant decided to balance a canoe on three decks of cards, and somehow it works.",
    search_terms:
      "marina bay sands|singapore|moshe safdie|infinity pool|skypark|resort|casino",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 191, si_unit: "m", note: "Each tower, 57 storeys" },
      { dimension: "length", label: "SkyPark length", value: 340, si_unit: "m" },
      { dimension: "length", label: "Cantilever overhang", value: 67, si_unit: "m" },
      { dimension: "length", label: "Infinity pool length", value: 150, si_unit: "m" },
      { dimension: "volume", label: "Pool water volume", value: 1400, si_unit: "m^3" },
      { dimension: "area", label: "Total floor area", value: 120000, si_unit: "m^2", note: "Approximate total across three towers" },
    ],
  },

  {
    slug: "the-shard-london",
    name: "The Shard",
    subtitle: "London's glass splinter poking the sky since 2012",
    category_id: "buildings-modern",
    description:
      "The Shard in London, designed by Renzo Piano and completed in 2012, is the tallest building in the United Kingdom at 310 meters. Its tapered glass form contains 72 habitable floors plus a spire, with 11,000 glass panels covering its exterior. The building was inspired by the masts of sailing ships and church steeples in 18th-century engravings of London. It weighs roughly 500 million kilograms including foundations and contains offices, restaurants, a hotel, apartments, and a public observation deck. On a clear day you can see for 64 kilometers from the top, though in London 'clear day' is a relative concept.",
    search_terms:
      "the shard|london|renzo piano|tallest uk|skyscraper|glass tower|southwark",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 310, si_unit: "m", note: "Including spire" },
      { dimension: "length", label: "Habitable height", value: 244, si_unit: "m", note: "72 floors" },
      { dimension: "mass", label: "Estimated total mass", value: 500000000, si_unit: "kg", note: "Including foundations" },
      { dimension: "area", label: "Total floor area", value: 110000, si_unit: "m^2" },
      { dimension: "count", label: "Glass panels", value: 11000, si_unit: "units" },
      { dimension: "length", label: "Base footprint width", value: 67, si_unit: "m" },
    ],
  },

  {
    slug: "centre-pompidou",
    name: "Centre Pompidou",
    subtitle: "The building that wears its guts on the outside",
    category_id: "buildings-modern",
    description:
      "The Centre Pompidou in Paris, designed by Renzo Piano and Richard Rogers and opened in 1977, is one of the most provocatively designed buildings of the 20th century. Its defining feature is that all structural, mechanical, and circulation systems are exposed on the exterior, color-coded by function: blue for air, green for water, yellow for electricity, and red for movement (escalators and elevators). The building rises 42 meters across 7 floors and houses Europe's largest collection of modern art. Critics initially called it an oil refinery dropped into historic Paris. Nearly 50 years later, it draws over 3 million visitors annually, so the oil refinery won.",
    search_terms:
      "centre pompidou|pompidou center|renzo piano|richard rogers|beaubourg|paris|modern art|high-tech architecture",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 42, si_unit: "m" },
      { dimension: "length", label: "Length", value: 166, si_unit: "m" },
      { dimension: "length", label: "Width", value: 60, si_unit: "m" },
      { dimension: "area", label: "Total floor area", value: 103305, si_unit: "m^2" },
      { dimension: "mass", label: "Steel structure mass", value: 11000000, si_unit: "kg", note: "Approximately 11,000 tonnes of steel" },
      { dimension: "count", label: "Annual visitors", value: 3000000, si_unit: "units", note: "Approximate average" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESERTS (2 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "namib-desert",
    name: "Namib Desert",
    subtitle: "The oldest desert on Earth, 55 million years of being dry",
    category_id: "deserts",
    description:
      "The Namib Desert stretches along the Atlantic coast of southern Africa for over 2,000 kilometers, covering roughly 81,000 square kilometers of Namibia, Angola, and South Africa. At an estimated 55 million years old, it is considered the oldest desert in the world. Its sand dunes are among the tallest on Earth, with Big Daddy near Sossusvlei reaching about 325 meters. The desert is home to fog-basking beetles that drink condensation off their own backs, which is the kind of resourcefulness that would make a survivalist jealous.",
    search_terms:
      "namib desert|namibia|oldest desert|sossusvlei|sand dunes|skeleton coast|africa",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 81000000000, si_unit: "m^2", note: "Approximately 81,000 km^2" },
      { dimension: "length", label: "Coastline length", value: 2000000, si_unit: "m", note: "Roughly 2,000 km along the Atlantic" },
      { dimension: "length", label: "Tallest dune (Big Daddy)", value: 325, si_unit: "m" },
      { dimension: "time", label: "Estimated age", value: 1.74e15, si_unit: "s", note: "Approximately 55 million years" },
      { dimension: "temperature", label: "Average summer high", value: 318, si_unit: "K", note: "About 45 degrees C in the interior" },
    ],
  },

  {
    slug: "sonoran-desert",
    name: "Sonoran Desert",
    subtitle: "North America's hottest desert and saguaro cactus country",
    category_id: "deserts",
    description:
      "The Sonoran Desert spans approximately 260,000 square kilometers across the southwestern United States and northwestern Mexico, making it the hottest desert in North America. Summer temperatures regularly exceed 54 degrees Celsius (327 K) in the shade. It is uniquely biodiverse for a desert, home to roughly 2,000 plant species including the iconic saguaro cactus, which can live for 200 years and hold 3,000 liters of water. The Sonoran is proof that hostile environments breed the most interesting residents.",
    search_terms:
      "sonoran desert|arizona|mexico|saguaro|cactus|hot desert|north america|tucson|phoenix",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 260000000000, si_unit: "m^2", note: "Approximately 260,000 km^2" },
      { dimension: "temperature", label: "Record high temperature", value: 327, si_unit: "K", note: "About 54 degrees C" },
      { dimension: "length", label: "North-south extent", value: 500000, si_unit: "m", note: "About 500 km" },
      { dimension: "length", label: "East-west extent", value: 550000, si_unit: "m", note: "About 550 km" },
      { dimension: "count", label: "Known plant species", value: 2000, si_unit: "units", note: "Including the iconic saguaro cactus" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FORESTS (2 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "tongass-national-forest",
    name: "Tongass National Forest",
    subtitle: "America's largest national forest, bigger than some countries",
    category_id: "forests",
    description:
      "The Tongass National Forest in southeastern Alaska is the largest national forest in the United States, covering roughly 68,700 square kilometers of temperate rainforest across the Alexander Archipelago and mainland coast. It contains old-growth trees over 800 years old, some of which are Sitka spruce reaching 60 meters tall. The forest receives up to 4 meters of rainfall annually and is home to brown bears, bald eagles, and all five species of Pacific salmon. It is essentially Alaska's version of a tropical rainforest, minus the tropics.",
    search_terms:
      "tongass|national forest|alaska|temperate rainforest|sitka spruce|largest forest|alexander archipelago",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 68700000000, si_unit: "m^2", note: "Approximately 68,700 km^2" },
      { dimension: "length", label: "Tallest trees (Sitka spruce)", value: 60, si_unit: "m" },
      { dimension: "length", label: "Annual rainfall (max)", value: 4, si_unit: "m", note: "Up to 4 meters in some areas" },
      { dimension: "length", label: "Coastline within forest", value: 18000000, si_unit: "m", note: "About 18,000 km of shoreline" },
      { dimension: "time", label: "Age of oldest trees", value: 25200000000, si_unit: "s", note: "Approximately 800 years" },
    ],
  },

  {
    slug: "bialowieza-forest",
    name: "Bialowieza Forest",
    subtitle: "Europe's last primeval lowland forest, bison included",
    category_id: "forests",
    description:
      "Bialowieza Forest straddles the border of Poland and Belarus, covering roughly 1,500 square kilometers of ancient woodland that has remained continuously forested for over 8,000 years. It is the last significant remnant of the primeval forest that once blanketed the European Plain. The forest is home to the European bison, which was saved from extinction here, and contains oak trees over 500 years old reaching 40 meters in height. Walking through Bialowieza feels like visiting what all of Europe used to look like before people decided they needed more farmland.",
    search_terms:
      "bialowieza|primeval forest|poland|belarus|european bison|ancient forest|old growth|unesco",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 1500000000, si_unit: "m^2", note: "Approximately 1,500 km^2 across Poland and Belarus" },
      { dimension: "length", label: "Tallest trees", value: 40, si_unit: "m", note: "Oldest oaks, over 500 years" },
      { dimension: "time", label: "Continuous forest age", value: 2.52e11, si_unit: "s", note: "Over 8,000 years" },
      { dimension: "count", label: "European bison population", value: 900, si_unit: "units", note: "Largest free-roaming herd in the world" },
      { dimension: "count", label: "Tree species", value: 26, si_unit: "units", note: "Including oak, spruce, pine, and hornbeam" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HUMAN FEATS (2 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "most-hot-dogs-eaten-10-min",
    name: "Most Hot Dogs Eaten in 10 Minutes",
    subtitle: "76 hot dogs in 10 minutes, and somehow not a medical event",
    category_id: "human-feats",
    description:
      "Joey Chestnut's 2021 Nathan's Hot Dog Eating Contest record of 76 hot dogs (with buns) in 10 minutes remains one of competitive eating's most staggering achievements. That works out to roughly 6.25 kilograms of hot dogs consumed at a rate of 7.6 per minute. Each standard Nathan's hot dog with bun weighs about 82 grams and is roughly 18 centimeters long, meaning Chestnut consumed approximately 13.7 meters of hot dog in the time it takes most people to eat lunch. The human body was not designed for this, and yet here we are.",
    search_terms:
      "hot dog eating|joey chestnut|nathans|competitive eating|coney island|world record|food contest",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Total food consumed", value: 6.25, si_unit: "kg", note: "76 hot dogs with buns" },
      { dimension: "time", label: "Time limit", value: 600, si_unit: "s", note: "10 minutes" },
      { dimension: "count", label: "Hot dogs eaten", value: 76, si_unit: "units" },
      { dimension: "length", label: "Total hot dog length", value: 13.7, si_unit: "m", note: "End to end" },
      { dimension: "energy", label: "Estimated calories consumed", value: 87780000, si_unit: "J", note: "Roughly 21,000 kcal" },
    ],
  },

  {
    slug: "longest-continuous-walk",
    name: "Longest Continuous Walk (George Meegan)",
    subtitle: "Tierra del Fuego to Alaska on foot, 30,608 km over 2,426 days",
    category_id: "human-feats",
    description:
      "George Meegan walked the entire length of the Americas from the southern tip of South America (Ushuaia, Argentina) to Prudhoe Bay, Alaska, covering 30,608 kilometers in 2,426 days between 1977 and 1983. That is roughly three-quarters of Earth's circumference, accomplished entirely on foot through jungles, deserts, mountains, and the Darien Gap. He wore out 13 pairs of boots and crossed 14 countries. The walk averaged about 12.6 kilometers per day, which sounds modest until you remember he did it every single day for six and a half years.",
    search_terms:
      "george meegan|longest walk|americas|ushuaia|prudhoe bay|continuous walk|world record|endurance",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total distance walked", value: 30608000, si_unit: "m", note: "30,608 km" },
      { dimension: "time", label: "Total duration", value: 209606400, si_unit: "s", note: "2,426 days" },
      { dimension: "length", label: "Average daily distance", value: 12614, si_unit: "m", note: "About 12.6 km per day" },
      { dimension: "count", label: "Countries traversed", value: 14, si_unit: "units" },
      { dimension: "count", label: "Pairs of boots worn out", value: 13, si_unit: "units" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE (2 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "encyclopaedia-britannica",
    name: "Encyclopaedia Britannica (Full Set)",
    subtitle: "All of human knowledge in 32 volumes and 58 kilograms",
    category_id: "literature",
    description:
      "The final print edition of the Encyclopaedia Britannica (2010, 15th edition) consisted of 32 volumes containing 65,000 articles across 32,640 pages, weighing approximately 58 kilograms in total. Each volume measured roughly 31 cm tall by 24 cm wide by 4 cm thick. The complete set contained approximately 44 million words and about 4 gigabytes of textual data. First published in Edinburgh in 1768, it survived 244 years in print before going digital-only in 2012. It was the original Wikipedia, except you could not edit it from your couch.",
    search_terms:
      "encyclopaedia britannica|encyclopedia|reference|knowledge|32 volumes|print edition|edinburgh",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Total mass (32 volumes)", value: 58, si_unit: "kg" },
      { dimension: "count", label: "Volumes", value: 32, si_unit: "units" },
      { dimension: "count", label: "Pages", value: 32640, si_unit: "units" },
      { dimension: "data", label: "Text data", value: 4000000000, si_unit: "B", note: "Approximately 4 GB" },
      { dimension: "length", label: "Volume height", value: 0.31, si_unit: "m" },
      { dimension: "length", label: "Volume thickness", value: 0.04, si_unit: "m" },
    ],
  },

  {
    slug: "the-bible-standard",
    name: "The Bible (Standard Print Edition)",
    subtitle: "The most printed book in history, 5 billion copies and counting",
    category_id: "literature",
    description:
      "A standard print Bible contains 66 books (Protestant canon), roughly 783,137 words in English, and typically weighs about 600 grams for a standard hardcover edition. The text runs to about 1,200 pages at roughly 35 millimeters thick. In digital form, the complete text occupies approximately 4.4 megabytes. An estimated 5 billion copies have been printed since Gutenberg's first edition in 1455, making it by far the most widely distributed book in human history. If stacked, those 5 billion copies would reach to the Moon and back about 22 times.",
    search_terms:
      "bible|holy bible|scripture|most printed book|christianity|old testament|new testament",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass (standard hardcover)", value: 0.6, si_unit: "kg" },
      { dimension: "data", label: "Digital text size", value: 4400000, si_unit: "B", note: "About 4.4 MB" },
      { dimension: "length", label: "Thickness", value: 0.035, si_unit: "m" },
      { dimension: "count", label: "Pages (typical)", value: 1200, si_unit: "units" },
      { dimension: "count", label: "Books in canon", value: 66, si_unit: "units", note: "Protestant canon" },
      { dimension: "length", label: "Height", value: 0.235, si_unit: "m", note: "Standard hardcover" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MYTHICAL (2 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "thors-stormbreaker",
    name: "Thor's Stormbreaker",
    subtitle: "The axe forged by a dying star to kill an Infinity Stone collector",
    category_id: "mythical",
    description:
      "Stormbreaker is the Uru-metal battle axe forged at Nidavellir by Eitri the Dwarf King for Thor in Avengers: Infinity War. According to Marvel lore, the weapon is roughly 1.3 meters long with a broad axe head on one side and a hammer head on the other, mounted on a handle made from Groot's arm. It is said to be capable of summoning the Bifrost and was powerful enough to wound Thanos through a full blast from six Infinity Stones. For an axe with a tree branch for a handle, it punches remarkably above its weight class.",
    search_terms:
      "stormbreaker|thor|marvel|mcu|avengers|infinity war|uru|nidavellir|eitri|axe",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1.3, si_unit: "m", note: "Including Groot-branch handle" },
      { dimension: "mass", label: "Estimated mass", value: 20, si_unit: "kg", note: "Uru metal, denser than steel" },
      { dimension: "length", label: "Axe head width", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Handle diameter", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Axe head height", value: 0.6, si_unit: "m" },
    ],
  },

  {
    slug: "barad-dur",
    name: "Barad-dur (Sauron's Dark Tower)",
    subtitle: "Middle-earth's tallest tower, forged with the power of the One Ring",
    category_id: "mythical",
    description:
      "Barad-dur, the Dark Tower of Mordor in J.R.R. Tolkien's Lord of the Rings, was Sauron's fortress and the second tallest structure in Middle-earth's history after Thangorodrim. Based on descriptions in the text, scholarly estimates place its height at roughly 460 meters, with foundations laid using the power of the One Ring that could not be destroyed while the Ring endured. The tower housed the great Eye of Sauron at its peak and was surrounded by the desolation of the Plateau of Gorgoroth. It took Sauron 600 years to build and about three seconds to fall once the Ring was destroyed, which is the most dramatic demolition in fictional history.",
    search_terms:
      "barad-dur|dark tower|sauron|mordor|lord of the rings|tolkien|eye of sauron|middle earth",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Estimated height", value: 460, si_unit: "m", note: "Scholarly estimate from Tolkien's descriptions" },
      { dimension: "time", label: "Construction time", value: 18900000000, si_unit: "s", note: "Approximately 600 years" },
      { dimension: "length", label: "Estimated base diameter", value: 150, si_unit: "m", note: "Approximate from text descriptions" },
      { dimension: "length", label: "Eye of Sauron height (above tower)", value: 30, si_unit: "m", note: "The lidless eye at the summit" },
      { dimension: "count", label: "Times destroyed", value: 2, si_unit: "units", note: "Once in the Second Age, once in the Third" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TOYS & GAMES (2 new)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "barbie-doll",
    name: "Barbie Doll",
    subtitle: "11.5 inches of aspirational plastic since 1959",
    category_id: "toys-games",
    description:
      "The standard Barbie doll, first sold by Mattel in 1959, stands 29.2 centimeters (11.5 inches) tall and weighs approximately 200 grams. At 1:6 scale, she represents a person roughly 175 cm tall. Over one billion Barbie dolls have been sold worldwide, making her one of the most commercially successful toys in history. Her proportions have been famously unrealistic since day one: at full scale, her waist would be about 46 cm, which is anatomically unlikely but aerodynamically interesting. Mattel has since introduced dozens of body types, which is progress measured in plastic.",
    search_terms:
      "barbie|mattel|doll|fashion doll|toy|1959|ruth handler|plastic|iconic toy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.292, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.2, si_unit: "kg" },
      { dimension: "length", label: "Represented height (1:6 scale)", value: 1.75, si_unit: "m" },
      { dimension: "length", label: "Width (shoulder)", value: 0.05, si_unit: "m" },
      { dimension: "count", label: "Estimated total sold (all time)", value: 1000000000, si_unit: "units", note: "Over 1 billion since 1959" },
    ],
  },

  {
    slug: "frisbee",
    name: "Frisbee (Standard 175g)",
    subtitle: "A disc that turned throwing things into a sport",
    category_id: "toys-games",
    description:
      "The standard competition Frisbee, as regulated by the World Flying Disc Federation, is a 175-gram disc with a diameter of 27.3 centimeters. Originally inspired by pie tins from the Frisbie Pie Company of Bridgeport, Connecticut, it was patented by Wham-O in 1958. A well-thrown Frisbee can reach speeds of 130 km/h and cover distances over 250 meters. The disc achieves stable flight through gyroscopic precession, which is a fancy way of saying it stays flat because it spins. Over 200 million have been sold, making it possibly the most popular object that regularly ends up on roofs.",
    search_terms:
      "frisbee|flying disc|wham-o|ultimate|disc golf|175g|throwing disc|toy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.273, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.175, si_unit: "kg" },
      { dimension: "length", label: "Rim depth", value: 0.032, si_unit: "m" },
      { dimension: "length", label: "Height (profile)", value: 0.028, si_unit: "m" },
      { dimension: "speed", label: "Maximum throw speed", value: 36, si_unit: "m/s", note: "About 130 km/h" },
      { dimension: "length", label: "World record distance", value: 338, si_unit: "m", note: "Outdoor record" },
    ],
  },
];
