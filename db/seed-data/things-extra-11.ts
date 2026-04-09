// ── Extra things seed data (batch 11) ─────────────────────────────────────
// Archaeology, Natural Wonders, Infrastructure, World Landmarks, Mountains,
// Rivers/Lakes, Islands, Cities, Oceans/Seas

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [
  {
    id: "archaeology",
    name: "Archaeology & Antiquities",
    description:
      "Ancient sites, artifacts, and ruins that reveal the story of human civilization through what was left behind.",
    sort_order: 62,
  },
  {
    id: "wonders",
    name: "Natural Wonders",
    description:
      "Extraordinary geological formations, thermal features, and landscapes shaped by millions of years of natural processes.",
    sort_order: 63,
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description:
      "The vast networks of roads, railways, canals, and transit systems that connect civilizations across continents.",
    sort_order: 64,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ARCHAEOLOGY & ANTIQUITIES (12)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "pompeii-archaeological-site",
    name: "Pompeii",
    subtitle: "A Roman city frozen in time by volcanic ash in 79 AD",
    category_id: "archaeology",
    description:
      "Pompeii was a thriving Roman city of roughly 11,000 people near modern Naples, Italy. When Mount Vesuvius erupted on August 24, 79 AD, it buried the city under 4 to 6 meters of volcanic ash and pumice, preserving streets, buildings, and even food in extraordinary detail. The excavated area covers about 44 hectares of the estimated 66-hectare city. Rediscovered in 1748, it remains one of the most important archaeological sites in the world, providing an unparalleled snapshot of daily Roman life.",
    search_terms:
      "pompeii|roman city|vesuvius|volcanic|naples|italy|archaeology|ancient rome",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total city area", value: 660000, si_unit: "m^2" },
      { dimension: "area", label: "Excavated area", value: 440000, si_unit: "m^2" },
      { dimension: "length", label: "City wall perimeter", value: 3200, si_unit: "m" },
      { dimension: "length", label: "Ash burial depth", value: 5, si_unit: "m" },
      { dimension: "time", label: "Age of destruction", value: 6.14e10, si_unit: "s", note: "Destroyed 79 AD" },
      { dimension: "length", label: "Forum length", value: 142, si_unit: "m" },
    ],
  },

  {
    slug: "tutankhamun-death-mask",
    name: "Tutankhamun's Death Mask",
    subtitle: "The golden face of Egypt's boy pharaoh",
    category_id: "archaeology",
    description:
      "The funerary mask of Tutankhamun is perhaps the most recognized artifact from ancient Egypt. Discovered by Howard Carter in 1925 inside the pharaoh's tomb in the Valley of the Kings, the mask is made of approximately 11 kilograms of solid gold inlaid with lapis lazuli, turquoise, and other semiprecious stones. It covered the head and shoulders of the mummified king, who died around 1323 BC at roughly 19 years of age. The mask now resides in the Egyptian Museum in Cairo.",
    search_terms:
      "tutankhamun|king tut|death mask|golden mask|egypt|pharaoh|valley of the kings|howard carter",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 0.54, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.393, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.49, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 11.04, si_unit: "kg" },
      { dimension: "time", label: "Age", value: 1.056e11, si_unit: "s", note: "Created circa 1323 BC" },
      { dimension: "length", label: "Nemes headcloth width", value: 0.39, si_unit: "m" },
    ],
  },

  {
    slug: "nazca-lines",
    name: "Nazca Lines",
    subtitle: "Giant desert drawings visible only from the air",
    category_id: "archaeology",
    description:
      "The Nazca Lines are a group of enormous geoglyphs etched into the arid coastal plain of southern Peru between roughly 500 BC and 500 AD by the Nazca culture. The designs include animals, plants, and geometric shapes, some stretching over 370 meters in length. Created by removing reddish surface pebbles to reveal lighter ground beneath, the lines have survived for millennia thanks to the region's extremely dry, windless climate. The full concentration spans approximately 450 square kilometers.",
    search_terms:
      "nazca lines|nazca|geoglyphs|peru|desert drawings|ancient|nazca culture",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total concentration area", value: 4.5e8, si_unit: "m^2" },
      { dimension: "length", label: "Longest single line", value: 370, si_unit: "m" },
      { dimension: "length", label: "Spider figure length", value: 46, si_unit: "m" },
      { dimension: "length", label: "Hummingbird length", value: 93, si_unit: "m" },
      { dimension: "length", label: "Line groove depth", value: 0.25, si_unit: "m" },
      { dimension: "time", label: "Age (oldest lines)", value: 7.9e10, si_unit: "s", note: "Created circa 500 BC" },
    ],
  },

  {
    slug: "lascaux-cave-paintings",
    name: "Lascaux Cave Paintings",
    subtitle: "A 17,000-year-old prehistoric art gallery in France",
    category_id: "archaeology",
    description:
      "The Lascaux cave complex in southwestern France contains some of the most remarkable examples of Paleolithic art ever discovered. Found in 1940 by four teenagers and their dog, the cave features over 600 painted figures and nearly 1,500 engravings depicting horses, aurochs, deer, and abstract symbols. The paintings were created roughly 17,000 years ago using mineral pigments. The original cave was closed to the public in 1963 to prevent deterioration, but a precise replica (Lascaux IV) opened in 2016.",
    search_terms:
      "lascaux|cave paintings|paleolithic|prehistoric art|france|dordogne|cave art",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Painted surface area", value: 2000, si_unit: "m^2" },
      { dimension: "length", label: "Cave system length", value: 250, si_unit: "m" },
      { dimension: "length", label: "Great Hall of the Bulls length", value: 19, si_unit: "m" },
      { dimension: "length", label: "Largest painted bull", value: 5.2, si_unit: "m" },
      { dimension: "time", label: "Age", value: 5.36e11, si_unit: "s", note: "Painted circa 15,000 BC" },
      { dimension: "length", label: "Great Hall width", value: 5.5, si_unit: "m" },
    ],
  },

  {
    slug: "antikythera-mechanism",
    name: "Antikythera Mechanism",
    subtitle: "The world's first known analog computer, built by ancient Greeks",
    category_id: "archaeology",
    description:
      "The Antikythera mechanism is an ancient Greek hand-powered orrery, often described as the first known analog computer. It was used to predict astronomical positions, eclipses, and even the dates of the ancient Olympic Games. Recovered from a Roman-era shipwreck near the Greek island of Antikythera in 1901, the device dates to roughly 100 BC. It contains at least 30 meshing bronze gears in a wooden case the size of a shoebox. Nothing of comparable complexity appeared in the archaeological record for over a thousand years.",
    search_terms:
      "antikythera|mechanism|ancient computer|greek|analog computer|astronomy|orrery",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 0.34, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.18, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.09, si_unit: "m" },
      { dimension: "mass", label: "Estimated original mass", value: 5, si_unit: "kg" },
      { dimension: "time", label: "Age", value: 6.7e10, si_unit: "s", note: "Built circa 100 BC" },
      { dimension: "length", label: "Largest gear diameter", value: 0.13, si_unit: "m" },
    ],
  },

  {
    slug: "stonehenge",
    name: "Stonehenge",
    subtitle: "A 5,000-year-old stone circle on Salisbury Plain",
    category_id: "archaeology",
    description:
      "Stonehenge is a prehistoric monument on Salisbury Plain in Wiltshire, England, constructed in stages from roughly 3000 BC to 2000 BC. The most iconic feature is the ring of standing sarsen stones, each about 4 meters tall, 2.1 meters wide, and weighing around 25 tonnes, topped with connecting lintel stones. The larger bluestones, weighing up to 4 tonnes each, were transported roughly 240 kilometers from the Preseli Hills in Wales. The site's exact purpose remains debated, though solar alignment on the solstices is well documented.",
    search_terms:
      "stonehenge|stone circle|salisbury|wiltshire|england|neolithic|prehistoric monument|solstice",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Outer circle diameter", value: 33, si_unit: "m" },
      { dimension: "length", label: "Tallest standing stone height", value: 7.3, si_unit: "m" },
      { dimension: "mass", label: "Heaviest sarsen stone", value: 25000, si_unit: "kg" },
      { dimension: "area", label: "Monument area (within ditch)", value: 10700, si_unit: "m^2" },
      { dimension: "time", label: "Age", value: 1.58e11, si_unit: "s", note: "Construction began circa 3000 BC" },
      { dimension: "length", label: "Bluestone transport distance", value: 240000, si_unit: "m" },
    ],
  },

  {
    slug: "troy-archaeological-site",
    name: "Troy",
    subtitle: "The legendary city of Homer's Iliad, layered with 4,000 years of history",
    category_id: "archaeology",
    description:
      "Troy (Hisarlik) is an archaeological site in northwestern Turkey that contains the remains of at least nine distinct cities built on top of one another over roughly 4,000 years, from about 3000 BC to 500 AD. The site was famously excavated by Heinrich Schliemann beginning in 1870. Troy VII is widely considered the most likely candidate for Homer's Troy. The citadel mound covers about 2 hectares, while the surrounding lower city extended to roughly 30 hectares. It became a UNESCO World Heritage Site in 1998.",
    search_terms:
      "troy|iliad|homer|hisarlik|turkey|archaeology|trojan war|schliemann|ancient city",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Lower city area", value: 300000, si_unit: "m^2" },
      { dimension: "area", label: "Citadel mound area", value: 20000, si_unit: "m^2" },
      { dimension: "length", label: "Fortification wall length (Troy VI)", value: 550, si_unit: "m" },
      { dimension: "length", label: "Excavation depth (layers)", value: 16, si_unit: "m" },
      { dimension: "time", label: "Oldest settlement age", value: 1.58e11, si_unit: "s", note: "Founded circa 3000 BC" },
      { dimension: "length", label: "Wall height (Troy VI)", value: 9, si_unit: "m" },
    ],
  },

  {
    slug: "gobekli-tepe",
    name: "Gobekli Tepe",
    subtitle: "A temple complex older than agriculture itself",
    category_id: "archaeology",
    description:
      "Gobekli Tepe in southeastern Turkey is the oldest known monumental structure built by humans, dating to approximately 9500 BC, making it roughly 11,500 years old. The site predates pottery, writing, the wheel, and even agriculture. It consists of massive T-shaped limestone pillars arranged in circles, carved with elaborate animal reliefs including foxes, lions, and vultures. The tallest pillars stand about 5.5 meters high and weigh up to 10 tonnes. Only about 5% of the site has been excavated so far.",
    search_terms:
      "gobekli tepe|turkey|oldest temple|neolithic|pre-pottery|t-shaped pillars|ancient",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Known site area", value: 90000, si_unit: "m^2" },
      { dimension: "length", label: "Tallest pillar height", value: 5.5, si_unit: "m" },
      { dimension: "mass", label: "Heaviest pillar", value: 10000, si_unit: "kg" },
      { dimension: "length", label: "Largest enclosure diameter", value: 20, si_unit: "m" },
      { dimension: "time", label: "Age", value: 3.63e11, si_unit: "s", note: "Built circa 9500 BC" },
      { dimension: "length", label: "Pillar width", value: 3, si_unit: "m" },
    ],
  },

  {
    slug: "mohenjo-daro",
    name: "Mohenjo-daro",
    subtitle: "A 4,500-year-old city with indoor plumbing and grid streets",
    category_id: "archaeology",
    description:
      "Mohenjo-daro was one of the largest cities of the ancient Indus Valley Civilization, located in present-day Sindh, Pakistan. Built around 2500 BC, the city featured remarkably advanced urban planning including a grid street layout, covered drainage systems, and private bathrooms connected to a citywide sewage network. At its peak, it housed an estimated 40,000 people across roughly 250 hectares. The Great Bath, a large public water tank, is one of the earliest known public bathing structures. The city was abandoned around 1900 BC.",
    search_terms:
      "mohenjo-daro|indus valley|pakistan|sindh|ancient city|harappan|great bath|urban planning",
    featured: 0,
    measurements: [
      { dimension: "area", label: "City area", value: 2500000, si_unit: "m^2" },
      { dimension: "length", label: "Great Bath length", value: 12, si_unit: "m" },
      { dimension: "length", label: "Great Bath width", value: 7, si_unit: "m" },
      { dimension: "length", label: "Great Bath depth", value: 2.4, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.42e11, si_unit: "s", note: "Built circa 2500 BC" },
      { dimension: "length", label: "Citadel mound height", value: 12, si_unit: "m" },
    ],
  },

  {
    slug: "altamira-cave",
    name: "Altamira Cave",
    subtitle: "The 'Sistine Chapel of Prehistory' in northern Spain",
    category_id: "archaeology",
    description:
      "The Cave of Altamira near Santillana del Mar in Cantabria, Spain, contains some of the finest examples of Upper Paleolithic cave art, dating from roughly 36,000 to 13,000 years ago. The painted ceiling of the main chamber features strikingly realistic polychrome bison, horses, deer, and hand stencils using red ochre and charcoal. When first revealed to the academic world in 1880, scholars refused to believe prehistoric people were capable of such sophisticated art. The cave was closed to the public in 2002 to preserve the paintings, with a replica museum nearby.",
    search_terms:
      "altamira|cave paintings|spain|cantabria|prehistoric art|bison|paleolithic|cave art",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cave length", value: 270, si_unit: "m" },
      { dimension: "area", label: "Painted ceiling area", value: 170, si_unit: "m^2" },
      { dimension: "length", label: "Largest bison painting", value: 2.25, si_unit: "m" },
      { dimension: "length", label: "Main chamber length", value: 18, si_unit: "m" },
      { dimension: "length", label: "Main chamber width", value: 9, si_unit: "m" },
      { dimension: "time", label: "Age (oldest paintings)", value: 1.14e12, si_unit: "s", note: "Created circa 34,000 BC" },
    ],
  },

  {
    slug: "dead-sea-scrolls-cave-4",
    name: "Dead Sea Scrolls (Cave 4 collection)",
    subtitle: "The largest cache of ancient biblical manuscripts ever found",
    category_id: "archaeology",
    description:
      "Cave 4 at Qumran near the Dead Sea yielded the largest collection of Dead Sea Scrolls when discovered in 1952. It contained fragments from over 15,000 pieces representing about 575 manuscripts, including biblical texts, community rules, and commentaries dating from the 3rd century BC to the 1st century AD. The scrolls were written mostly on parchment and papyrus in Hebrew, Aramaic, and Greek. Cave 4 alone held roughly 75% of all scrolls found across the 11 Qumran caves. These manuscripts predate the oldest previously known Hebrew Bible texts by nearly a thousand years.",
    search_terms:
      "dead sea scrolls|cave 4|qumran|biblical manuscripts|parchment|ancient texts|israel|hebrew",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cave depth", value: 7, si_unit: "m" },
      { dimension: "length", label: "Cave width", value: 5, si_unit: "m" },
      { dimension: "length", label: "Longest intact scroll (Isaiah)", value: 7.34, si_unit: "m" },
      { dimension: "area", label: "Cave floor area", value: 28, si_unit: "m^2" },
      { dimension: "time", label: "Age (oldest fragments)", value: 7.3e10, si_unit: "s", note: "Written circa 300 BC" },
      { dimension: "mass", label: "Estimated total fragment mass", value: 8, si_unit: "kg" },
    ],
  },

  {
    slug: "terracotta-army-site",
    name: "Terracotta Army Site",
    subtitle: "An underground army of 8,000 clay soldiers guarding an emperor",
    category_id: "archaeology",
    description:
      "The Terracotta Army is a collection of roughly 8,000 life-sized clay warriors, 130 chariots, and 670 horses buried near the mausoleum of Qin Shi Huang, China's first emperor, near Xi'an. Created around 210 BC, each figure has unique facial features. The three main pits cover approximately 22,780 square meters. Pit 1 alone contains over 6,000 figures arranged in battle formation. Discovered accidentally in 1974 by farmers digging a well, the site transformed our understanding of the Qin dynasty's military and artistic capabilities.",
    search_terms:
      "terracotta army|qin shi huang|xian|china|clay soldiers|emperor|archaeological site|warriors",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Three pits combined area", value: 22780, si_unit: "m^2" },
      { dimension: "area", label: "Pit 1 area", value: 14260, si_unit: "m^2" },
      { dimension: "length", label: "Pit 1 length", value: 230, si_unit: "m" },
      { dimension: "length", label: "Pit 1 width", value: 62, si_unit: "m" },
      { dimension: "time", label: "Age", value: 7.05e10, si_unit: "s", note: "Created circa 210 BC" },
      { dimension: "length", label: "Average warrior height", value: 1.8, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NATURAL WONDERS (15)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "grand-prismatic-spring",
    name: "Grand Prismatic Spring",
    subtitle: "The largest hot spring in the United States, painted by microbes",
    category_id: "wonders",
    description:
      "Grand Prismatic Spring in Yellowstone National Park is the largest hot spring in the United States and the third largest in the world, measuring approximately 112 meters across. Its vivid rainbow colors are produced by heat-loving microorganisms called thermophiles living in the mineral-rich water. The deep blue center reaches temperatures around 87 degrees Celsius, too hot for most life, while progressively cooler rings support different microbial communities that produce orange, yellow, and green pigments. It discharges roughly 2,120 liters per minute.",
    search_terms:
      "grand prismatic spring|yellowstone|hot spring|thermophiles|rainbow|wyoming|geothermal",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 112, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 50, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 9852, si_unit: "m^2" },
      { dimension: "temperature", label: "Center temperature", value: 360.15, si_unit: "K" },
      { dimension: "volume", label: "Estimated volume", value: 190000, si_unit: "m^3" },
      { dimension: "length", label: "Runoff channel length", value: 200, si_unit: "m" },
    ],
  },

  {
    slug: "cave-of-crystals-naica",
    name: "Cave of Crystals (Naica)",
    subtitle: "A cave containing the largest natural crystals ever found",
    category_id: "wonders",
    description:
      "The Cave of Crystals (Cueva de los Cristales) lies 300 meters below the surface in the Naica Mine in Chihuahua, Mexico. It contains the largest natural crystals ever discovered: translucent selenite (gypsum) beams up to 12 meters long and weighing 55 tonnes. The crystals formed over roughly 500,000 years in mineral-rich water at a nearly constant temperature of about 58 degrees Celsius. Without protective suits and refrigeration equipment, humans can only survive inside for about 10 minutes due to the extreme heat and 99% humidity.",
    search_terms:
      "cave of crystals|naica|selenite|gypsum|mexico|chihuahua|largest crystals|mine",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Largest crystal length", value: 12, si_unit: "m" },
      { dimension: "length", label: "Largest crystal diameter", value: 4, si_unit: "m" },
      { dimension: "mass", label: "Largest crystal mass", value: 55000, si_unit: "kg" },
      { dimension: "length", label: "Cave depth below surface", value: 300, si_unit: "m" },
      { dimension: "temperature", label: "Cave temperature", value: 331.15, si_unit: "K" },
      { dimension: "length", label: "Chamber length", value: 27, si_unit: "m" },
      { dimension: "length", label: "Chamber width", value: 9, si_unit: "m" },
    ],
  },

  {
    slug: "salar-de-uyuni",
    name: "Salar de Uyuni",
    subtitle: "The world's largest salt flat, a natural mirror in Bolivia",
    category_id: "wonders",
    description:
      "Salar de Uyuni in southwestern Bolivia is the world's largest salt flat, covering approximately 10,582 square kilometers at an elevation of 3,656 meters above sea level. It formed from the evaporation of prehistoric lakes and contains an estimated 10 billion tonnes of salt, with a crust varying from a few centimeters to several meters thick. During the rainy season, a thin layer of water transforms it into the world's largest natural mirror. The flat is also one of Earth's richest lithium reserves, containing roughly 50 to 70 percent of the world's known supply.",
    search_terms:
      "salar de uyuni|salt flat|bolivia|lithium|mirror|altiplano|south america",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Surface area", value: 1.0582e10, si_unit: "m^2" },
      { dimension: "length", label: "Maximum length", value: 160000, si_unit: "m" },
      { dimension: "length", label: "Maximum width", value: 135000, si_unit: "m" },
      { dimension: "length", label: "Elevation", value: 3656, si_unit: "m" },
      { dimension: "length", label: "Salt crust thickness (average)", value: 5, si_unit: "m" },
      { dimension: "mass", label: "Estimated salt mass", value: 1e13, si_unit: "kg" },
    ],
  },

  {
    slug: "paricutin-volcano",
    name: "Paricutin Volcano",
    subtitle: "The volcano that grew in a farmer's cornfield",
    category_id: "wonders",
    description:
      "Paricutin is a cinder cone volcano in Michoacan, Mexico, notable as the only volcano whose birth was witnessed and documented from beginning to end. On February 20, 1943, farmer Dionisio Pulido watched a crack in his cornfield begin to emit ash and smoke. Within a week, the cone was 50 meters tall. Within a year, it reached 336 meters above the original ground level. The volcano was active for nine years until 1952, eventually burying the nearby villages of Paricutin and San Juan Parangaricutiro under lava and ash. Its peak now stands at 2,800 meters above sea level.",
    search_terms:
      "paricutin|volcano|mexico|michoacan|cinder cone|cornfield volcano|eruption",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height above original ground", value: 424, si_unit: "m" },
      { dimension: "length", label: "Summit elevation", value: 2800, si_unit: "m" },
      { dimension: "length", label: "Base diameter", value: 1200, si_unit: "m" },
      { dimension: "area", label: "Lava flow area", value: 2.5e7, si_unit: "m^2" },
      { dimension: "time", label: "Active period", value: 2.84e8, si_unit: "s", note: "1943 to 1952" },
      { dimension: "length", label: "Crater diameter", value: 275, si_unit: "m" },
    ],
  },

  {
    slug: "ha-long-bay",
    name: "Ha Long Bay",
    subtitle: "Nearly 2,000 limestone karst islands rising from emerald waters",
    category_id: "wonders",
    description:
      "Ha Long Bay in northeastern Vietnam is a UNESCO World Heritage Site consisting of roughly 1,969 limestone karst islands and islets rising from the emerald waters of the Gulf of Tonkin. The bay covers approximately 1,553 square kilometers, with the densest cluster of islands in the core zone of 334 square kilometers. Many islands are hollow, containing enormous caves formed over millions of years. The tallest island peaks reach about 200 meters above sea level. The name translates to 'descending dragon,' reflecting a legend that a dragon family helped the Vietnamese defend against invaders.",
    search_terms:
      "ha long bay|vietnam|karst|limestone|gulf of tonkin|unesco|islands|caves",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Bay area", value: 1.553e9, si_unit: "m^2" },
      { dimension: "area", label: "Core zone area", value: 3.34e8, si_unit: "m^2" },
      { dimension: "length", label: "Tallest island peak", value: 200, si_unit: "m" },
      { dimension: "length", label: "Coastline length", value: 120000, si_unit: "m" },
      { dimension: "length", label: "Surprise Cave length", value: 10000, si_unit: "m" },
      { dimension: "length", label: "Average water depth", value: 10, si_unit: "m" },
    ],
  },

  {
    slug: "plitvice-lakes",
    name: "Plitvice Lakes",
    subtitle: "16 terraced lakes connected by cascading waterfalls in Croatia",
    category_id: "wonders",
    description:
      "Plitvice Lakes National Park in central Croatia contains 16 terraced lakes interconnected by a series of waterfalls and cascades, all set within a dense beech and fir forest. The lakes are renowned for their distinctive turquoise, green, and blue colors, which change depending on mineral content and the angle of sunlight. The park covers 296.85 square kilometers and was among the first natural sites inscribed on the UNESCO World Heritage List in 1979. The highest waterfall, Veliki Slap, drops 78 meters. Travertine barriers between the lakes grow at a rate of about 1 centimeter per year.",
    search_terms:
      "plitvice|lakes|croatia|waterfalls|terraced lakes|national park|unesco|turquoise",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Park area", value: 2.9685e8, si_unit: "m^2" },
      { dimension: "area", label: "Lake surface area (combined)", value: 2e6, si_unit: "m^2" },
      { dimension: "length", label: "Veliki Slap waterfall height", value: 78, si_unit: "m" },
      { dimension: "length", label: "Lake system length", value: 8000, si_unit: "m" },
      { dimension: "length", label: "Deepest lake depth", value: 46, si_unit: "m" },
      { dimension: "length", label: "Elevation range", value: 636, si_unit: "m", note: "417 m to 1280 m" },
    ],
  },

  {
    slug: "cappadocia-fairy-chimneys",
    name: "Cappadocia Fairy Chimneys",
    subtitle: "Surreal volcanic rock spires carved by wind and water",
    category_id: "wonders",
    description:
      "The fairy chimneys of Cappadocia in central Turkey are tall, cone-shaped rock formations created by millions of years of erosion acting on volcanic tuff deposited by ancient eruptions. The soft tuff eroded faster than the harder basalt caps on top, producing mushroom-like pillars ranging from a few meters to over 40 meters in height. People have carved homes, churches, and entire underground cities into the soft rock since at least the Bronze Age. The Goreme Open-Air Museum, a UNESCO World Heritage Site, showcases Byzantine-era cave churches with vivid frescoes dating to the 10th through 13th centuries.",
    search_terms:
      "cappadocia|fairy chimneys|turkey|goreme|volcanic|tuff|cave dwellings|hot air balloons",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tallest fairy chimney height", value: 40, si_unit: "m" },
      { dimension: "area", label: "Cappadocia region area", value: 5e9, si_unit: "m^2" },
      { dimension: "length", label: "Average chimney height", value: 15, si_unit: "m" },
      { dimension: "length", label: "Derinkuyu underground city depth", value: 85, si_unit: "m" },
      { dimension: "time", label: "Rock formation age", value: 3.15e14, si_unit: "s", note: "Volcanic tuff circa 10 million years old" },
      { dimension: "length", label: "Cap rock diameter (typical)", value: 4, si_unit: "m" },
    ],
  },

  {
    slug: "socotra-island",
    name: "Socotra Island",
    subtitle: "The most alien-looking place on Earth",
    category_id: "wonders",
    description:
      "Socotra is an island in the Arabian Sea belonging to Yemen, located about 240 kilometers east of the Horn of Africa. Often called 'the most alien-looking place on Earth,' it has been isolated from mainland Africa for at least 6 million years, resulting in extraordinary biodiversity. Roughly one-third of its plant species are found nowhere else, including the iconic dragon's blood tree (Dracaena cinnabari), which resembles an inside-out umbrella and produces red resin. The island is about 132 kilometers long and 50 kilometers wide, covering roughly 3,625 square kilometers.",
    search_terms:
      "socotra|yemen|dragon blood tree|alien island|arabian sea|endemic species|biodiversity",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Island area", value: 3.625e9, si_unit: "m^2" },
      { dimension: "length", label: "Length", value: 132000, si_unit: "m" },
      { dimension: "length", label: "Width", value: 50000, si_unit: "m" },
      { dimension: "length", label: "Highest point (Hajhir Mountains)", value: 1503, si_unit: "m" },
      { dimension: "length", label: "Coastline length", value: 237000, si_unit: "m" },
      { dimension: "time", label: "Isolation period", value: 1.89e14, si_unit: "s", note: "Separated from Africa roughly 6 million years ago" },
    ],
  },

  {
    slug: "chocolate-hills-philippines",
    name: "Chocolate Hills",
    subtitle: "Over 1,200 symmetrical grass-covered hills that turn brown in summer",
    category_id: "wonders",
    description:
      "The Chocolate Hills are a geological formation in Bohol, Philippines, consisting of at least 1,268 nearly symmetrical conical mounds spread across an area of more than 50 square kilometers. The hills range from 30 to 120 meters in height and are covered in green grass that turns chocolate brown during the dry season, giving them their name. They are believed to be the weathered remnants of marine limestone that was uplifted above sea level and sculpted by rainfall over millions of years. The Chocolate Hills are one of the Philippines' most iconic natural landmarks.",
    search_terms:
      "chocolate hills|bohol|philippines|limestone|conical hills|geological formation",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Spread area", value: 5e7, si_unit: "m^2" },
      { dimension: "length", label: "Tallest hill height", value: 120, si_unit: "m" },
      { dimension: "length", label: "Average hill height", value: 50, si_unit: "m" },
      { dimension: "length", label: "Typical base diameter", value: 150, si_unit: "m" },
      { dimension: "length", label: "Shortest hill height", value: 30, si_unit: "m" },
      { dimension: "time", label: "Formation age", value: 6.3e13, si_unit: "s", note: "Limestone formed roughly 2 million years ago" },
    ],
  },

  {
    slug: "wave-rock-australia",
    name: "Wave Rock",
    subtitle: "A 15-meter granite wave frozen in stone for 2.7 billion years",
    category_id: "wonders",
    description:
      "Wave Rock is a natural rock formation near Hyden in Western Australia that resembles a tall, breaking ocean wave. The 'wave' is about 15 meters high and 110 meters long, formed by weathering and water erosion of the granite over roughly 2.7 billion years. The curved shape was created by subsurface chemical weathering followed by exposure through erosion, while the colorful vertical stripes of grey, red, and yellow are caused by rainwater runoff depositing minerals. The formation is part of a larger granite inselberg called Hyden Rock.",
    search_terms:
      "wave rock|hyden|western australia|granite|rock formation|erosion|inselberg",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wave height", value: 15, si_unit: "m" },
      { dimension: "length", label: "Wave length", value: 110, si_unit: "m" },
      { dimension: "area", label: "Hyden Rock total area", value: 160000, si_unit: "m^2" },
      { dimension: "length", label: "Hyden Rock elevation", value: 348, si_unit: "m" },
      { dimension: "time", label: "Granite age", value: 8.5e16, si_unit: "s", note: "Roughly 2.7 billion years old" },
      { dimension: "length", label: "Overhang depth", value: 2, si_unit: "m" },
    ],
  },

  {
    slug: "door-to-hell-turkmenistan",
    name: "Door to Hell (Darvaza Gas Crater)",
    subtitle: "A burning gas crater in the Turkmen desert that has blazed since 1971",
    category_id: "wonders",
    description:
      "The Darvaza gas crater, colloquially known as the 'Door to Hell,' is a natural gas field in the Karakum Desert of Turkmenistan that collapsed into a cavern in 1971. Soviet geologists reportedly set it on fire expecting it to burn out in a few weeks, but the crater has been burning continuously ever since. The flaming pit measures roughly 70 meters in diameter and 30 meters deep. Temperatures at the bottom can exceed 1,000 degrees Celsius. Despite its harsh environment, in 2014 explorer George Kourounis descended to the bottom and discovered bacteria thriving in the extreme heat.",
    search_terms:
      "door to hell|darvaza|gas crater|turkmenistan|karakum|burning crater|natural gas",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 70, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 30, si_unit: "m" },
      { dimension: "area", label: "Crater area", value: 3848, si_unit: "m^2" },
      { dimension: "temperature", label: "Bottom temperature", value: 1273.15, si_unit: "K" },
      { dimension: "time", label: "Burning duration", value: 1.74e9, si_unit: "s", note: "Burning since 1971" },
      { dimension: "length", label: "Flame height (visible)", value: 15, si_unit: "m" },
    ],
  },

  {
    slug: "perito-moreno-glacier",
    name: "Perito Moreno Glacier",
    subtitle: "One of the few advancing glaciers left in the world",
    category_id: "wonders",
    description:
      "The Perito Moreno Glacier in Los Glaciares National Park in Patagonia, Argentina, is one of only a handful of glaciers worldwide that are still advancing rather than retreating. The glacier's ice front is approximately 5 kilometers wide and rises 60 to 75 meters above the surface of Lago Argentino. Its total area is about 250 square kilometers, and it extends 30 kilometers in length from the Southern Patagonian Ice Field. Periodically, the advancing ice dams a section of the lake, building up pressure until the ice bridge ruptures in a spectacular calving event.",
    search_terms:
      "perito moreno|glacier|patagonia|argentina|los glaciares|advancing glacier|calving|ice",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Glacier area", value: 2.5e8, si_unit: "m^2" },
      { dimension: "length", label: "Length", value: 30000, si_unit: "m" },
      { dimension: "length", label: "Ice front width", value: 5000, si_unit: "m" },
      { dimension: "length", label: "Ice front height above lake", value: 70, si_unit: "m" },
      { dimension: "length", label: "Maximum ice thickness", value: 700, si_unit: "m" },
      { dimension: "length", label: "Daily advance rate", value: 0.55, si_unit: "m", note: "About 2 meters per day at the front" },
    ],
  },

  {
    slug: "blood-falls-antarctica",
    name: "Blood Falls",
    subtitle: "A crimson waterfall pouring from a glacier in Antarctica",
    category_id: "wonders",
    description:
      "Blood Falls is a five-story-tall outflow of iron-rich, hypersaline water that emerges from the tongue of Taylor Glacier in the McMurdo Dry Valleys of Antarctica. The striking red color comes from iron oxide: when the iron-rich water contacts oxygen in the air, it rusts on contact, staining the ice below a vivid blood red. The water source is a subglacial lake that has been sealed beneath 400 meters of ice for roughly 1.5 to 2 million years. Despite being extremely salty and devoid of light or oxygen, the trapped water supports microbial life, offering clues about the possibility of life on icy moons like Europa.",
    search_terms:
      "blood falls|taylor glacier|antarctica|iron oxide|mcmurdo|red waterfall|subglacial",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Falls height", value: 15, si_unit: "m" },
      { dimension: "length", label: "Ice thickness above source", value: 400, si_unit: "m" },
      { dimension: "temperature", label: "Water temperature", value: 267.15, si_unit: "K", note: "About -6 degrees Celsius, liquid due to salinity" },
      { dimension: "length", label: "Red stain extent on glacier face", value: 50, si_unit: "m" },
      { dimension: "time", label: "Source lake sealed duration", value: 5e13, si_unit: "s", note: "Sealed roughly 1.5 million years ago" },
      { dimension: "length", label: "Taylor Glacier length", value: 35000, si_unit: "m" },
    ],
  },

  {
    slug: "great-blue-hole-belize",
    name: "Great Blue Hole",
    subtitle: "A giant marine sinkhole visible from space off the coast of Belize",
    category_id: "wonders",
    description:
      "The Great Blue Hole is a giant marine sinkhole off the coast of Belize near the center of Lighthouse Reef atoll. It is roughly 318 meters across and 124 meters deep, making it one of the world's largest natural sinkholes. The hole formed as a limestone cave system during several glacial periods when sea levels were much lower, then flooded as ice melted and oceans rose. Jacques Cousteau declared it one of the top ten scuba diving sites in the world in 1971. Stalactites found at a depth of about 40 meters confirm the cave's terrestrial origins.",
    search_terms:
      "great blue hole|belize|sinkhole|diving|lighthouse reef|caribbean|cousteau",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 318, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 124, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 79400, si_unit: "m^2" },
      { dimension: "length", label: "Stalactite depth zone", value: 40, si_unit: "m" },
      { dimension: "volume", label: "Estimated volume", value: 6.7e6, si_unit: "m^3" },
      { dimension: "time", label: "Formation age", value: 4.7e11, si_unit: "s", note: "Formed roughly 15,000 years ago during last Ice Age" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INFRASTRUCTURE (12)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "tokyo-metro-system",
    name: "Tokyo Metro System",
    subtitle: "The world's busiest subway system, moving 8.7 million riders daily",
    category_id: "infrastructure",
    description:
      "The Tokyo Metro system (combining Tokyo Metro and Toei Subway) consists of 13 lines with 286 stations spanning 304 kilometers of track beneath one of the world's most densely populated cities. On an average weekday, it carries roughly 8.7 million passengers, making it one of the busiest rapid transit systems on Earth. Trains during rush hour run at intervals of just 2 minutes. Professional 'pushers' (oshiya) are stationed at busy platforms to help squeeze passengers into packed cars. The first line opened in 1927 between Asakusa and Ueno.",
    search_terms:
      "tokyo metro|subway|japan|transit|underground|trains|toei|railway",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total track length", value: 304000, si_unit: "m" },
      { dimension: "length", label: "Longest line (Oedo)", value: 40700, si_unit: "m" },
      { dimension: "length", label: "Average station spacing", value: 1063, si_unit: "m" },
      { dimension: "length", label: "Deepest station depth (Roppongi)", value: 42.3, si_unit: "m" },
      { dimension: "time", label: "Age", value: 3.12e9, si_unit: "s", note: "First line opened 1927" },
      { dimension: "time", label: "Minimum headway (rush hour)", value: 120, si_unit: "s" },
    ],
  },

  {
    slug: "london-underground-system",
    name: "London Underground (System)",
    subtitle: "The world's first underground railway, spanning 402 kilometers",
    category_id: "infrastructure",
    description:
      "The London Underground, affectionately known as 'the Tube,' is the world's first underground railway, having opened its first section on January 10, 1863, between Paddington and Farringdon. Today the system consists of 11 lines serving 272 stations across 402 kilometers of track, of which 45% actually runs underground. It carries approximately 5 million passenger journeys daily. The deepest station is Hampstead at 58.5 meters below street level. The iconic Tube map, designed by Harry Beck in 1931, revolutionized transit cartography worldwide.",
    search_terms:
      "london underground|tube|metro|england|uk|subway|railway|transport for london",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total track length", value: 402000, si_unit: "m" },
      { dimension: "length", label: "Underground track length", value: 180900, si_unit: "m" },
      { dimension: "length", label: "Deepest station depth (Hampstead)", value: 58.5, si_unit: "m" },
      { dimension: "length", label: "Longest line (Central)", value: 74000, si_unit: "m" },
      { dimension: "time", label: "Age", value: 5.14e9, si_unit: "s", note: "Opened 1863" },
      { dimension: "length", label: "Average speed", value: 33000, si_unit: "m", note: "33 km/h average including stops" },
    ],
  },

  {
    slug: "interstate-highway-system",
    name: "U.S. Interstate Highway System",
    subtitle: "The largest public works project in American history",
    category_id: "infrastructure",
    description:
      "The Interstate Highway System, formally known as the Dwight D. Eisenhower National System of Interstate and Defense Highways, is a network of controlled-access highways spanning approximately 78,465 kilometers across the United States. Authorized by the Federal Aid Highway Act of 1956, it was initially justified partly as a defense measure to enable rapid military transport. Construction cost roughly $500 billion in today's dollars. The longest route, Interstate 90, stretches 4,987 kilometers from Seattle to Boston. One mile in every five was originally required to be straight enough to serve as an emergency aircraft runway, though this is sometimes disputed.",
    search_terms:
      "interstate highway|eisenhower|us highway|freeway|motorway|america|road system",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total network length", value: 7.8465e7, si_unit: "m" },
      { dimension: "length", label: "Longest route (I-90)", value: 4.987e6, si_unit: "m" },
      { dimension: "area", label: "Estimated total paved area", value: 2.5e9, si_unit: "m^2" },
      { dimension: "length", label: "Standard lane width", value: 3.66, si_unit: "m" },
      { dimension: "time", label: "Construction start", value: 2.21e9, si_unit: "s", note: "Authorized 1956" },
      { dimension: "length", label: "Shortest route (I-97)", value: 28000, si_unit: "m" },
    ],
  },

  {
    slug: "trans-siberian-railway-system",
    name: "Trans-Siberian Railway (Full Network)",
    subtitle: "The longest railway line in the world, spanning 9 time zones",
    category_id: "infrastructure",
    description:
      "The Trans-Siberian Railway connects Moscow to Vladivostok across 9,289 kilometers, making it the longest railway line in the world. Construction began in 1891 and was largely completed by 1916. The route crosses 9 time zones, 16 major rivers (including the Volga, Ob, and Amur), and passes through 87 cities and towns. Including the Trans-Manchurian and Trans-Mongolian branch lines, the total network extends even further. A complete journey from Moscow to Vladivostok takes approximately 6 days and 2 hours on the Rossiya train, with 65 scheduled stops.",
    search_terms:
      "trans-siberian|railway|russia|moscow|vladivostok|longest railway|train|siberia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Main line length", value: 9.289e6, si_unit: "m" },
      { dimension: "length", label: "Including branches total", value: 1.06e7, si_unit: "m" },
      { dimension: "time", label: "Journey time (Moscow to Vladivostok)", value: 525720, si_unit: "s", note: "About 6 days 2 hours" },
      { dimension: "time", label: "Construction period", value: 7.88e8, si_unit: "s", note: "1891 to 1916" },
      { dimension: "length", label: "Longest bridge (Khabarovsk)", value: 2590, si_unit: "m" },
      { dimension: "length", label: "Highest point elevation", value: 1040, si_unit: "m" },
    ],
  },

  {
    slug: "suez-canal",
    name: "Suez Canal",
    subtitle: "The shortcut between Europe and Asia that reshaped world trade",
    category_id: "infrastructure",
    description:
      "The Suez Canal is an artificial sea-level waterway in Egypt connecting the Mediterranean Sea to the Red Sea, providing the shortest maritime route between Europe and Asia. Opened on November 17, 1869, after 10 years of construction, the canal eliminated the need to navigate around the entire continent of Africa, shortening the London-to-Mumbai sea route by roughly 8,900 kilometers. The current canal is 193.3 kilometers long, 24 meters deep, and 205 meters wide at the surface. About 12 to 15 percent of world trade passes through it. The 2021 blockage by the Ever Given container ship demonstrated just how critical it remains.",
    search_terms:
      "suez canal|egypt|mediterranean|red sea|shipping|trade route|isthmus|ever given",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Canal length", value: 193300, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 24, si_unit: "m" },
      { dimension: "length", label: "Surface width", value: 205, si_unit: "m" },
      { dimension: "length", label: "Route savings vs Cape route", value: 8.9e6, si_unit: "m" },
      { dimension: "time", label: "Age", value: 4.95e9, si_unit: "s", note: "Opened 1869" },
      { dimension: "time", label: "Average transit time", value: 46800, si_unit: "s", note: "About 13 hours" },
    ],
  },

  {
    slug: "transcontinental-railroad",
    name: "First Transcontinental Railroad",
    subtitle: "The iron road that stitched together the American continent",
    category_id: "infrastructure",
    description:
      "The First Transcontinental Railroad in the United States was completed on May 10, 1869, when the Central Pacific and Union Pacific railroads met at Promontory Summit, Utah, and a ceremonial golden spike was driven. The route spanned approximately 3,069 kilometers from Council Bluffs, Iowa (connecting to existing eastern railroads) to Sacramento, California. Construction employed roughly 20,000 workers, many of them Chinese and Irish immigrants, who laid track across prairies, deserts, and the Sierra Nevada mountains. The railroad reduced cross-country travel time from months to about a week.",
    search_terms:
      "transcontinental railroad|golden spike|promontory|union pacific|central pacific|american railroad",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total route length", value: 3.069e6, si_unit: "m" },
      { dimension: "length", label: "Highest point (Sherman Summit)", value: 2443, si_unit: "m" },
      { dimension: "length", label: "Standard rail gauge", value: 1.435, si_unit: "m" },
      { dimension: "time", label: "Construction period", value: 2.02e8, si_unit: "s", note: "1863 to 1869" },
      { dimension: "time", label: "Cross-country travel time", value: 604800, si_unit: "s", note: "About 7 days" },
      { dimension: "length", label: "Summit Tunnel length (Central Pacific)", value: 509, si_unit: "m" },
    ],
  },

  {
    slug: "german-autobahn-network",
    name: "German Autobahn Network",
    subtitle: "13,191 kilometers of highway, parts with no speed limit",
    category_id: "infrastructure",
    description:
      "The German Autobahn is the federal controlled-access highway system of Germany, spanning approximately 13,191 kilometers and making it one of the longest and densest motorway networks in the world. Roughly 70% of the Autobahn has no permanent speed limit, though an advisory speed of 130 km/h is recommended. The first section, a 20-kilometer stretch between Cologne and Bonn, opened in 1932. The network handles about one-third of all motorized road traffic in Germany. Contrary to popular belief, sections near urban areas do have speed limits, and overall fatality rates are comparable to other European motorways.",
    search_terms:
      "autobahn|germany|motorway|highway|no speed limit|bundesautobahn|road network",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total network length", value: 1.3191e7, si_unit: "m" },
      { dimension: "length", label: "Standard lane width", value: 3.75, si_unit: "m" },
      { dimension: "length", label: "Advisory speed", value: 36.1, si_unit: "m", note: "130 km/h advisory speed, expressed as m/s" },
      { dimension: "time", label: "Age", value: 2.97e9, si_unit: "s", note: "First section opened 1932" },
      { dimension: "length", label: "Longest stretch without limit (A2)", value: 220000, si_unit: "m" },
      { dimension: "area", label: "Estimated total paved area", value: 3.3e8, si_unit: "m^2" },
    ],
  },

  {
    slug: "great-wall-of-china",
    name: "Great Wall of China",
    subtitle: "21,196 kilometers of wall built over 2,000 years",
    category_id: "infrastructure",
    description:
      "The Great Wall of China is a series of fortifications built across the historical northern borders of China to protect against various nomadic groups. While commonly associated with the Ming dynasty era (1368-1644), walls were built by multiple dynasties starting from the 7th century BC. A comprehensive archaeological survey completed in 2012 measured the total length of all sections at 21,196 kilometers, including walls, trenches, and natural defensive barriers. The most well-preserved and visited sections, dating to the Ming dynasty, feature walls averaging 7.8 meters high and 6.5 meters wide at the base. Contrary to popular myth, the wall is not visible from space with the naked eye.",
    search_terms:
      "great wall|china|fortification|ming dynasty|ancient|defense|wonder of the world",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length (all sections)", value: 2.1196e7, si_unit: "m" },
      { dimension: "length", label: "Ming dynasty wall length", value: 8.851e6, si_unit: "m" },
      { dimension: "length", label: "Average wall height (Ming)", value: 7.8, si_unit: "m" },
      { dimension: "length", label: "Base width (Ming)", value: 6.5, si_unit: "m" },
      { dimension: "time", label: "Construction span", value: 6.3e10, si_unit: "s", note: "7th century BC to 17th century AD" },
      { dimension: "length", label: "Watchtower spacing (typical)", value: 500, si_unit: "m" },
    ],
  },

  {
    slug: "aqueduct-of-segovia",
    name: "Aqueduct of Segovia",
    subtitle: "A Roman engineering marvel built without mortar that still stands",
    category_id: "infrastructure",
    description:
      "The Aqueduct of Segovia is a Roman aqueduct in Segovia, Spain, and one of the best-preserved examples of Roman engineering. Built in the late 1st or early 2nd century AD during the reigns of emperors Domitian and Trajan, it carried water from the Frio River 17 kilometers to the city. The most spectacular section features 167 arches reaching a maximum height of 28.5 meters, all constructed from roughly 20,400 granite blocks assembled without mortar or clamps, relying solely on the precision of the stonework and gravity. It continued to supply water to Segovia until the mid-20th century.",
    search_terms:
      "aqueduct|segovia|roman|spain|granite|arches|ancient engineering|roman aqueduct",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total aqueduct length", value: 17000, si_unit: "m" },
      { dimension: "length", label: "Above-ground section length", value: 818, si_unit: "m" },
      { dimension: "length", label: "Maximum height", value: 28.5, si_unit: "m" },
      { dimension: "length", label: "Typical arch span", value: 5.1, si_unit: "m" },
      { dimension: "time", label: "Age", value: 6.1e10, si_unit: "s", note: "Built circa 1st-2nd century AD" },
      { dimension: "mass", label: "Estimated total stone mass", value: 2e7, si_unit: "kg" },
    ],
  },

  {
    slug: "roman-road-network",
    name: "Roman Road Network",
    subtitle: "400,000 kilometers of roads that connected an empire",
    category_id: "infrastructure",
    description:
      "At its peak around the 2nd century AD, the Roman road network consisted of approximately 400,000 kilometers of roads, of which about 80,500 kilometers were stone-paved trunk routes connecting every province of the empire. The roads were engineering marvels: typically 4.2 meters wide with layered foundations of sand, gravel, and stone, crowned for drainage, and flanked by drainage ditches. The Appian Way (Via Appia), begun in 312 BC, is one of the oldest and most famous. Many modern European roads follow Roman routes. The phrase 'All roads lead to Rome' was literally true: a golden milestone in the Forum marked the starting point of all distances.",
    search_terms:
      "roman roads|via appia|appian way|ancient rome|road network|empire|engineering",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total network length", value: 4e8, si_unit: "m" },
      { dimension: "length", label: "Paved trunk routes", value: 8.05e7, si_unit: "m" },
      { dimension: "length", label: "Standard road width", value: 4.2, si_unit: "m" },
      { dimension: "length", label: "Road foundation depth", value: 1.5, si_unit: "m" },
      { dimension: "time", label: "Network age (oldest route)", value: 7.37e10, si_unit: "s", note: "Via Appia begun 312 BC" },
      { dimension: "length", label: "Via Appia length", value: 569000, si_unit: "m" },
    ],
  },

  {
    slug: "silk-road-network",
    name: "Silk Road",
    subtitle: "6,400 kilometers of ancient trade routes linking East and West",
    category_id: "infrastructure",
    description:
      "The Silk Road was an interconnected network of trade routes spanning roughly 6,400 kilometers from Chang'an (modern Xi'an) in China to the Mediterranean coast. Active from the 2nd century BC through the 15th century AD, it facilitated the exchange of silk, spices, precious metals, religions, technologies, and diseases between East and West. The routes crossed some of the harshest terrain on Earth, including the Taklamakan and Gobi deserts and the Pamir Mountains. The name was coined by German geographer Ferdinand von Richthofen in 1877. Maritime 'Silk Roads' through the Indian Ocean eventually extended the network's reach even further.",
    search_terms:
      "silk road|trade route|china|rome|ancient trade|caravan|chang'an|mediterranean",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Main overland route length", value: 6.4e6, si_unit: "m" },
      { dimension: "length", label: "Including all branches", value: 1.2e7, si_unit: "m" },
      { dimension: "length", label: "Highest pass elevation (Karakoram)", value: 4693, si_unit: "m" },
      { dimension: "time", label: "Active period", value: 5.36e10, si_unit: "s", note: "2nd century BC to 15th century AD" },
      { dimension: "length", label: "Typical daily caravan distance", value: 30000, si_unit: "m" },
      { dimension: "time", label: "Full journey duration", value: 3.15e7, si_unit: "s", note: "About one year each way" },
    ],
  },

  {
    slug: "international-date-line",
    name: "International Date Line",
    subtitle: "The imaginary line where today becomes tomorrow",
    category_id: "infrastructure",
    description:
      "The International Date Line (IDL) is an imaginary line running roughly along the 180th meridian in the Pacific Ocean, where the calendar date changes by one day. Traveling westward across the line advances the date by one day; traveling eastward sets it back. While conceptually straight, the actual line zigzags to avoid splitting countries and island groups into different dates. It was established by international agreement in 1884 at the International Meridian Conference in Washington, D.C. The line passes through no major landmass, traversing mostly open ocean from the Arctic to the Antarctic.",
    search_terms:
      "international date line|180th meridian|pacific ocean|time zone|date change|meridian",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Approximate length (pole to pole)", value: 2.0004e7, si_unit: "m" },
      { dimension: "length", label: "Maximum deviation from 180th meridian", value: 1.3e6, si_unit: "m" },
      { dimension: "time", label: "Time difference across line", value: 86400, si_unit: "s", note: "24 hours / 1 calendar day" },
      { dimension: "time", label: "Age of convention", value: 4.48e9, si_unit: "s", note: "Established 1884" },
      { dimension: "length", label: "180th meridian circumference portion", value: 2.0004e7, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WORLD LANDMARKS (15)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "christ-the-redeemer",
    name: "Christ the Redeemer",
    subtitle: "Rio de Janeiro's iconic Art Deco statue atop Corcovado mountain",
    category_id: "statues",
    description:
      "Christ the Redeemer (Cristo Redentor) is an Art Deco statue of Jesus Christ atop the 710-meter Corcovado mountain in Rio de Janeiro, Brazil. Completed in 1931, the statue stands 30 meters tall on an 8-meter pedestal, with arms stretching 28 meters wide. It was designed by Brazilian engineer Heitor da Silva Costa and sculpted by French sculptor Paul Landowski. Constructed of reinforced concrete and soapstone, it weighs approximately 635 tonnes. Lightning strikes the statue an average of three to six times per year, and it was named one of the New Seven Wonders of the World in 2007.",
    search_terms:
      "christ the redeemer|cristo redentor|rio de janeiro|brazil|corcovado|statue|art deco",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Statue height", value: 30, si_unit: "m" },
      { dimension: "length", label: "Pedestal height", value: 8, si_unit: "m" },
      { dimension: "length", label: "Arm span", value: 28, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 635000, si_unit: "kg" },
      { dimension: "length", label: "Mountain summit elevation", value: 710, si_unit: "m" },
      { dimension: "time", label: "Age", value: 3.0e9, si_unit: "s", note: "Completed 1931" },
    ],
  },

  {
    slug: "brandenburg-gate",
    name: "Brandenburg Gate",
    subtitle: "Berlin's neoclassical symbol of unity, once divided by a wall",
    category_id: "ancient-structures",
    description:
      "The Brandenburg Gate (Brandenburger Tor) is an 18th-century neoclassical monument in Berlin, Germany, built between 1788 and 1791 by Prussian King Frederick William II. Standing 26 meters tall with 12 Doric columns forming five passageways, it was modeled after the Propylaea gateway to the Acropolis in Athens. The quadriga, a chariot drawn by four horses atop the gate, was taken to Paris by Napoleon in 1806 and returned in 1814. During the Cold War, the gate stood in no-man's land between East and West Berlin, becoming the foremost symbol of German reunification when the wall fell in 1989.",
    search_terms:
      "brandenburg gate|berlin|germany|neoclassical|quadriga|reunification|prussian",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 26, si_unit: "m" },
      { dimension: "length", label: "Width", value: 65.5, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 11, si_unit: "m" },
      { dimension: "length", label: "Column height", value: 15, si_unit: "m" },
      { dimension: "length", label: "Quadriga height", value: 5, si_unit: "m" },
      { dimension: "time", label: "Age", value: 7.42e9, si_unit: "s", note: "Completed 1791" },
    ],
  },

  {
    slug: "arc-de-triomphe",
    name: "Arc de Triomphe",
    subtitle: "The monumental arch at the heart of Paris's star-shaped intersection",
    category_id: "ancient-structures",
    description:
      "The Arc de Triomphe de l'Etoile stands at the western end of the Champs-Elysees in Paris, at the center of the Place Charles de Gaulle, where 12 avenues radiate outward in a star pattern. Commissioned by Napoleon in 1806 to honor his military victories, it was not completed until 1836 due to construction halts. At 50 meters tall, 45 meters wide, and 22 meters deep, it is the second-largest triumphal arch in existence. The Tomb of the Unknown Soldier, commemorating the unidentified dead of World War I, has been situated beneath it since 1921, with an eternal flame rekindled every evening at 6:30 PM.",
    search_terms:
      "arc de triomphe|paris|france|napoleon|champs elysees|triumphal arch|unknown soldier",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 50, si_unit: "m" },
      { dimension: "length", label: "Width", value: 45, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 22, si_unit: "m" },
      { dimension: "length", label: "Main vault height", value: 29.19, si_unit: "m" },
      { dimension: "length", label: "Main vault width", value: 14.62, si_unit: "m" },
      { dimension: "time", label: "Age", value: 6e9, si_unit: "s", note: "Completed 1836" },
    ],
  },

  {
    slug: "temple-of-artemis",
    name: "Temple of Artemis (Reconstructed Dimensions)",
    subtitle: "One of the Seven Wonders of the Ancient World, now just a single column",
    category_id: "ancient-structures",
    description:
      "The Temple of Artemis at Ephesus in present-day Turkey was one of the Seven Wonders of the Ancient World. The final and grandest version, rebuilt after arson in 356 BC, measured roughly 137 meters long and 69 meters wide, making it about four times larger than the Parthenon. It featured 127 Ionic columns, each about 18 meters tall, and was adorned with sculptures by the finest Greek artists. The temple was destroyed and rebuilt multiple times before its final destruction by the Goths in 262 AD. Today, only a single reconstructed column and scattered foundation stones mark the site.",
    search_terms:
      "temple of artemis|ephesus|seven wonders|turkey|ancient greek|ionic columns|diana",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 137, si_unit: "m" },
      { dimension: "length", label: "Width", value: 69, si_unit: "m" },
      { dimension: "area", label: "Floor area", value: 9453, si_unit: "m^2" },
      { dimension: "length", label: "Column height", value: 18, si_unit: "m" },
      { dimension: "length", label: "Column diameter", value: 1.2, si_unit: "m" },
      { dimension: "time", label: "Age (final version)", value: 7.47e10, si_unit: "s", note: "Rebuilt circa 323 BC" },
    ],
  },

  {
    slug: "hanging-gardens-estimated",
    name: "Hanging Gardens of Babylon (Estimated)",
    subtitle: "The most mysterious of the Seven Wonders, possibly mythical",
    category_id: "ancient-structures",
    description:
      "The Hanging Gardens of Babylon are the most enigmatic of the Seven Wonders of the Ancient World because no definitive archaeological evidence has been found. Ancient accounts describe elaborate tiered gardens ascending like a green mountain, irrigated by screws or chains of buckets lifting water from the Euphrates River. Traditionally attributed to King Nebuchadnezzar II around 600 BC to please his homesick wife, some scholars now believe they may have been in Nineveh instead, or perhaps never existed at all. The descriptions suggest a structure roughly 23 meters tall with terraces supported by stone arches.",
    search_terms:
      "hanging gardens|babylon|seven wonders|nebuchadnezzar|mesopotamia|iraq|ancient|terraced",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Estimated height", value: 23, si_unit: "m" },
      { dimension: "length", label: "Estimated base width", value: 120, si_unit: "m" },
      { dimension: "area", label: "Estimated garden area", value: 14400, si_unit: "m^2" },
      { dimension: "length", label: "Estimated terrace depth", value: 3.4, si_unit: "m" },
      { dimension: "time", label: "Estimated age", value: 8.3e10, si_unit: "s", note: "Traditionally dated circa 600 BC" },
      { dimension: "length", label: "Estimated irrigation lift height", value: 23, si_unit: "m" },
    ],
  },

  {
    slug: "dome-of-the-rock",
    name: "Dome of the Rock",
    subtitle: "Jerusalem's golden-domed shrine on the Temple Mount",
    category_id: "ancient-structures",
    description:
      "The Dome of the Rock is an Islamic shrine located on the Temple Mount (Haram al-Sharif) in the Old City of Jerusalem. Completed in 691 AD by Umayyad Caliph Abd al-Malik ibn Marwan, it is one of the oldest extant works of Islamic architecture. The octagonal structure is topped by a golden dome 20 meters in diameter that shelters the Foundation Stone, sacred in Judaism, Christianity, and Islam. The dome was originally covered in gold but was replaced with anodized aluminum in 1964, then re-covered with 80 kilograms of gold leaf donated by King Hussein of Jordan in 1993.",
    search_terms:
      "dome of the rock|jerusalem|temple mount|islamic|shrine|golden dome|haram al-sharif",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Dome diameter", value: 20.44, si_unit: "m" },
      { dimension: "length", label: "Dome height from base", value: 35.3, si_unit: "m" },
      { dimension: "length", label: "Outer wall width (each side)", value: 20.6, si_unit: "m" },
      { dimension: "area", label: "Floor area", value: 1500, si_unit: "m^2" },
      { dimension: "time", label: "Age", value: 4.21e10, si_unit: "s", note: "Completed 691 AD" },
      { dimension: "mass", label: "Gold leaf on dome", value: 80, si_unit: "kg" },
    ],
  },

  {
    slug: "western-wall-jerusalem",
    name: "Western Wall",
    subtitle: "The holiest site where Jews are permitted to pray",
    category_id: "ancient-structures",
    description:
      "The Western Wall (Kotel) in the Old City of Jerusalem is a limestone retaining wall originally built by Herod the Great around 19 BC as part of the expansion of the Second Temple. The exposed section of the wall is about 57 meters long and 19 meters high, consisting of 45 stone courses, of which 28 are above ground. The largest stones, known as the Western Stone and others in the lower courses, weigh up to 570 tonnes. After the Romans destroyed the Temple in 70 AD, the wall became the closest accessible point to the Temple's former location, making it the holiest place where Jews are permitted to pray.",
    search_terms:
      "western wall|kotel|wailing wall|jerusalem|temple|herod|jewish|holy site",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Exposed wall length", value: 57, si_unit: "m" },
      { dimension: "length", label: "Visible height above ground", value: 19, si_unit: "m" },
      { dimension: "length", label: "Total wall height (including buried)", value: 32, si_unit: "m" },
      { dimension: "mass", label: "Heaviest single stone", value: 570000, si_unit: "kg" },
      { dimension: "time", label: "Age", value: 6.45e10, si_unit: "s", note: "Built circa 19 BC" },
      { dimension: "length", label: "Plaza width", value: 60, si_unit: "m" },
    ],
  },

  {
    slug: "golden-temple-amritsar",
    name: "Golden Temple (Harmandir Sahib)",
    subtitle: "The holiest Sikh shrine, gilded in 750 kilograms of gold",
    category_id: "ancient-structures",
    description:
      "The Golden Temple (Sri Harmandir Sahib) in Amritsar, Punjab, India, is the holiest gurdwara and the most important pilgrimage site of Sikhism. The current structure was completed in 1604 under the direction of the fifth Sikh Guru, Arjan Dev, who installed the Adi Granth (the Sikh holy scripture) inside. Maharaja Ranjit Singh covered the upper floors with 750 kilograms of gold in the early 19th century, giving it the popular name 'Golden Temple.' The temple sits in the center of the sacred Amrit Sarovar pool. Its community kitchen (langar) feeds up to 100,000 free meals daily, regardless of religion, caste, or background.",
    search_terms:
      "golden temple|harmandir sahib|amritsar|sikh|gurdwara|punjab|india|gold",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Temple length", value: 12.25, si_unit: "m" },
      { dimension: "length", label: "Temple width", value: 12.25, si_unit: "m" },
      { dimension: "length", label: "Height to dome top", value: 19.5, si_unit: "m" },
      { dimension: "area", label: "Amrit Sarovar pool area", value: 28800, si_unit: "m^2" },
      { dimension: "mass", label: "Gold plating", value: 750, si_unit: "kg" },
      { dimension: "time", label: "Age", value: 1.33e10, si_unit: "s", note: "Completed 1604" },
    ],
  },

  {
    slug: "fushimi-inari-shrine-gates",
    name: "Fushimi Inari Shrine Gates",
    subtitle: "10,000 vermilion torii gates winding up a mountain in Kyoto",
    category_id: "ancient-structures",
    description:
      "Fushimi Inari-taisha in Kyoto, Japan, is the head shrine of the kami Inari, the Shinto deity of rice, tea, sake, and prosperity. It is most famous for its roughly 10,000 vermilion torii gates (senbon torii) that straddle a network of trails winding 4 kilometers up Mount Inari (233 meters). The shrine was founded in 711 AD. The torii gates are donated by businesses and individuals seeking good fortune; the cost of a small gate starts at about 175,000 yen while larger ones can cost over 1 million yen. A full walk through all the gates and sub-shrines takes approximately 2 to 3 hours.",
    search_terms:
      "fushimi inari|torii gates|kyoto|japan|shinto|shrine|vermilion|senbon torii",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Trail length through gates", value: 4000, si_unit: "m" },
      { dimension: "length", label: "Mount Inari elevation", value: 233, si_unit: "m" },
      { dimension: "length", label: "Standard torii gate height", value: 3.5, si_unit: "m" },
      { dimension: "length", label: "Standard torii gate width", value: 3, si_unit: "m" },
      { dimension: "time", label: "Shrine age", value: 4.15e10, si_unit: "s", note: "Founded 711 AD" },
      { dimension: "time", label: "Full walk duration", value: 9000, si_unit: "s", note: "About 2.5 hours" },
    ],
  },

  {
    slug: "standard-torii-gate",
    name: "Standard Torii Gate",
    subtitle: "The iconic vermilion gateway marking the boundary of the sacred",
    category_id: "ancient-structures",
    description:
      "A torii gate is the traditional Japanese gate most commonly found at the entrance of or within a Shinto shrine, symbolically marking the transition from the mundane world to the sacred. The basic structure consists of two upright pillars topped by two horizontal crossbars, the upper one (kasagi) curving slightly upward at the ends. A standard torii in the most common myojin style stands about 3.4 meters tall and 3.6 meters wide. Torii are typically painted vermilion red, a color believed to ward off evil spirits. Japan has an estimated 80,000 to 100,000 torii gates nationwide across its 80,000 shrines.",
    search_terms:
      "torii gate|shinto|japan|shrine entrance|vermilion gate|sacred gateway",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standard height", value: 3.4, si_unit: "m" },
      { dimension: "length", label: "Standard width", value: 3.6, si_unit: "m" },
      { dimension: "length", label: "Pillar diameter", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Kasagi (top beam) thickness", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Typical mass (wooden)", value: 500, si_unit: "kg" },
      { dimension: "length", label: "Pillar spacing", value: 2.7, si_unit: "m" },
    ],
  },

  {
    slug: "wat-arun-bangkok",
    name: "Wat Arun",
    subtitle: "Bangkok's 'Temple of Dawn' glittering with porcelain",
    category_id: "ancient-structures",
    description:
      "Wat Arun Ratchawararam (Temple of Dawn) is a Buddhist temple on the west bank of the Chao Phraya River in Bangkok, Thailand. Its central prang (Khmer-style tower) rises 82 meters and is encrusted with colorful porcelain and seashells that catch the first light of dawn, creating a dazzling effect. The temple dates to at least the Ayutthaya period (circa 17th century) but was significantly expanded by King Rama II and Rama III in the early 19th century. Four smaller prangs surround the central tower, and the entire complex covers about 2.1 hectares. The central prang's steep staircase, symbolizing the difficulty of reaching higher spiritual levels, has steps at a 45-degree angle.",
    search_terms:
      "wat arun|temple of dawn|bangkok|thailand|buddhist temple|prang|chao phraya",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Central prang height", value: 82, si_unit: "m" },
      { dimension: "length", label: "Central prang base width", value: 37, si_unit: "m" },
      { dimension: "area", label: "Temple complex area", value: 21000, si_unit: "m^2" },
      { dimension: "length", label: "Smaller prang height", value: 16, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.26e10, si_unit: "s", note: "Original construction circa 17th century" },
      { dimension: "length", label: "River frontage", value: 200, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE MOUNTAINS & VOLCANOES (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "table-mountain",
    name: "Table Mountain",
    subtitle: "Cape Town's flat-topped icon, one of the oldest mountains on Earth",
    category_id: "mountains",
    description:
      "Table Mountain is a flat-topped mountain overlooking Cape Town, South Africa, and one of the most recognizable natural landmarks in the world. Its plateau is roughly 3 kilometers from side to side and is flanked by Devil's Peak to the east and Lion's Head to the west. At approximately 600 million years old, it is one of the oldest mountains on Earth, predating the Andes and Himalayas by hundreds of millions of years. The mountain hosts an extraordinarily diverse fynbos ecosystem with over 1,470 plant species, more than the entire United Kingdom. The famous 'tablecloth' cloud that drapes over the summit is caused by orographic lifting of moist air from the sea.",
    search_terms:
      "table mountain|cape town|south africa|flat top|fynbos|tablecloth cloud",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 1085, si_unit: "m" },
      { dimension: "length", label: "Plateau length", value: 3000, si_unit: "m" },
      { dimension: "area", label: "Summit plateau area", value: 5.7e6, si_unit: "m^2" },
      { dimension: "length", label: "Prominence", value: 1085, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.89e16, si_unit: "s", note: "Roughly 600 million years old" },
      { dimension: "length", label: "Cable car vertical rise", value: 704, si_unit: "m" },
    ],
  },

  {
    slug: "matterhorn",
    name: "Matterhorn",
    subtitle: "The pyramidal peak that became the symbol of the Swiss Alps",
    category_id: "mountains",
    description:
      "The Matterhorn is a pyramidal mountain straddling the border between Switzerland and Italy in the Pennine Alps. Rising to 4,478 meters, its four steep faces align almost perfectly with the cardinal compass points. The first successful ascent was on July 14, 1865, by Edward Whymper's party, but the triumph was marred by the deaths of four climbers during the descent. The mountain's distinctive shape, formed by glacial erosion carving away at all sides simultaneously (a horn), has made it perhaps the most photographed mountain in the world. It inspired the design of the Toblerone chocolate bar logo.",
    search_terms:
      "matterhorn|swiss alps|switzerland|italy|zermatt|cervino|pyramidal peak|pennine alps",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 4478, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 1042, si_unit: "m" },
      { dimension: "length", label: "North face height", value: 1200, si_unit: "m" },
      { dimension: "length", label: "Hornli Ridge route length", value: 3400, si_unit: "m" },
      { dimension: "time", label: "First ascent", value: 5.08e9, si_unit: "s", note: "July 14, 1865" },
      { dimension: "length", label: "Base circumference (approximate)", value: 14000, si_unit: "m" },
    ],
  },

  {
    slug: "uluru-ayers-rock",
    name: "Uluru (Ayers Rock)",
    subtitle: "A sacred monolith that changes color at sunset in the Australian outback",
    category_id: "mountains",
    description:
      "Uluru, also known as Ayers Rock, is a massive sandstone monolith in the Northern Territory of Australia, sacred to the Anangu Aboriginal people for tens of thousands of years. It stands 348 meters above the surrounding plain (863 meters above sea level) with a circumference of 9.4 kilometers. What appears on the surface is merely the tip of an underground formation extending several kilometers below ground. The rock famously changes color throughout the day, appearing to glow red at sunrise and sunset due to the iron oxide (rust) in its arkose sandstone reacting to different light angles. Climbing was permanently banned in 2019 out of respect for Anangu wishes.",
    search_terms:
      "uluru|ayers rock|australia|monolith|outback|aboriginal|anangu|northern territory|sandstone",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height above plain", value: 348, si_unit: "m" },
      { dimension: "length", label: "Elevation above sea level", value: 863, si_unit: "m" },
      { dimension: "length", label: "Circumference", value: 9400, si_unit: "m" },
      { dimension: "length", label: "Length", value: 3600, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1900, si_unit: "m" },
      { dimension: "time", label: "Rock formation age", value: 1.58e16, si_unit: "s", note: "Sandstone roughly 500 million years old" },
    ],
  },

  {
    slug: "half-dome",
    name: "Half Dome",
    subtitle: "Yosemite's iconic granite monolith with one sheer face",
    category_id: "mountains",
    description:
      "Half Dome is a granite dome at the eastern end of Yosemite Valley in Yosemite National Park, California. Its distinctive shape, with a sheer northwest face rising nearly vertically about 600 meters, was created by glacial erosion that carved away the 'missing' half. The summit stands at 2,693 meters above sea level and roughly 1,444 meters above the valley floor. The first recorded ascent was by George Anderson in 1875. Today, hikers can reach the summit via a cable route installed on the back side, though permits are required and only about 300 people per day are allowed. The granite is approximately 87 million years old.",
    search_terms:
      "half dome|yosemite|california|granite|national park|cable route|climbing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 2693, si_unit: "m" },
      { dimension: "length", label: "Rise above valley floor", value: 1444, si_unit: "m" },
      { dimension: "length", label: "Northwest face vertical rise", value: 600, si_unit: "m" },
      { dimension: "length", label: "Cable route length", value: 133, si_unit: "m" },
      { dimension: "time", label: "Granite age", value: 2.74e15, si_unit: "s", note: "Roughly 87 million years old" },
      { dimension: "length", label: "Summit area width", value: 100, si_unit: "m" },
    ],
  },

  {
    slug: "el-capitan",
    name: "El Capitan",
    subtitle: "The world's most famous big wall, a vertical granite monolith",
    category_id: "mountains",
    description:
      "El Capitan is a vertical rock formation in Yosemite National Park, California, featuring a sheer granite face rising approximately 914 meters from base to summit on its tallest face (the Dawn Wall). It is one of the most prominent rock faces in the world and the premier destination for big-wall climbing. The first ascent of The Nose route was completed by Warren Harding, Wayne Merry, and George Whitmore in 1958 after 47 days of climbing. In 2017, Alex Honnold made history by free-soloing the face without ropes in 3 hours 56 minutes. The granite formed from a pluton roughly 100 million years ago.",
    search_terms:
      "el capitan|yosemite|climbing|granite|big wall|the nose|free solo|california",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 2307, si_unit: "m" },
      { dimension: "length", label: "Vertical face height (Dawn Wall)", value: 914, si_unit: "m" },
      { dimension: "length", label: "The Nose route length", value: 884, si_unit: "m" },
      { dimension: "length", label: "Face width", value: 1100, si_unit: "m" },
      { dimension: "time", label: "Honnold free solo time", value: 14160, si_unit: "s", note: "3 hours 56 minutes, June 2017" },
      { dimension: "time", label: "Granite age", value: 3.15e15, si_unit: "s", note: "Roughly 100 million years old" },
    ],
  },

  {
    slug: "k2-mountain",
    name: "K2",
    subtitle: "The 'Savage Mountain,' the world's second highest and most dangerous peak",
    category_id: "mountains",
    description:
      "K2, at 8,611 meters, is the second-highest mountain on Earth after Everest, located on the border between Pakistan and China in the Karakoram range. Known as 'the Savage Mountain' because of its extreme difficulty and high fatality rate, roughly one person dies for every four who reach the summit. The mountain was first summited on July 31, 1954, by Italian climbers Achille Compagnoni and Lino Lacedelli. K2 has never been climbed in winter without supplemental oxygen. Its pyramid shape and steep, exposed ridges make it far more technically challenging than Everest. The name 'K2' simply means the second peak surveyed in the Karakoram range.",
    search_terms:
      "k2|karakoram|savage mountain|pakistan|china|second highest|mountaineering|8000er",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8611, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 4020, si_unit: "m" },
      { dimension: "length", label: "Abruzzi Spur route length", value: 4500, si_unit: "m" },
      { dimension: "length", label: "South face height", value: 3000, si_unit: "m" },
      { dimension: "length", label: "Base circumference", value: 22000, si_unit: "m" },
      { dimension: "time", label: "First ascent", value: 2.26e9, si_unit: "s", note: "July 31, 1954" },
    ],
  },

  {
    slug: "nanga-parbat",
    name: "Nanga Parbat",
    subtitle: "The 'Killer Mountain' with the tallest mountain face on Earth",
    category_id: "mountains",
    description:
      "Nanga Parbat (8,126 meters) is the ninth-highest mountain in the world, located in the Gilgit-Baltistan region of Pakistan. Its Rupal Face rises 4,600 meters from base to summit, making it the tallest mountain face on Earth. The mountain earned the grim nickname 'Killer Mountain' because of the numerous early expeditions that ended in disaster; 31 climbers died before the first successful ascent by Hermann Buhl on July 3, 1953, in a remarkable solo push without supplemental oxygen. The Rakhiot Face on the north side features an enormous hanging glacier that periodically calves devastating avalanches.",
    search_terms:
      "nanga parbat|killer mountain|pakistan|rupal face|himalaya|8000er|gilgit-baltistan",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8126, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 4608, si_unit: "m" },
      { dimension: "length", label: "Rupal Face height", value: 4600, si_unit: "m" },
      { dimension: "length", label: "Rakhiot Face height", value: 7000, si_unit: "m", note: "Including glacier approach" },
      { dimension: "length", label: "Base circumference", value: 25000, si_unit: "m" },
      { dimension: "time", label: "First ascent", value: 2.3e9, si_unit: "s", note: "July 3, 1953" },
    ],
  },

  {
    slug: "lhotse",
    name: "Lhotse",
    subtitle: "The world's fourth-highest peak, connected to Everest by a ridge",
    category_id: "mountains",
    description:
      "Lhotse (8,516 meters) is the fourth-highest mountain on Earth, located on the border of Nepal and Tibet, directly adjacent to and connected with Mount Everest via the South Col at 7,906 meters. Its name means 'South Peak' in Tibetan, reflecting its position relative to Everest. The south face of Lhotse is one of the steepest walls of its size in the world, rising 3,200 meters at angles exceeding 75 degrees. First summited on May 18, 1956, by Swiss climbers Fritz Luchsinger and Ernst Reiss, Lhotse shares its base camp and lower climbing route with Everest expeditions.",
    search_terms:
      "lhotse|himalaya|nepal|tibet|fourth highest|everest neighbor|8000er|south col",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8516, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 610, si_unit: "m" },
      { dimension: "length", label: "South face height", value: 3200, si_unit: "m" },
      { dimension: "length", label: "South Col elevation", value: 7906, si_unit: "m" },
      { dimension: "length", label: "Distance from Everest summit", value: 3500, si_unit: "m" },
      { dimension: "time", label: "First ascent", value: 2.21e9, si_unit: "s", note: "May 18, 1956" },
    ],
  },

  {
    slug: "makalu",
    name: "Makalu",
    subtitle: "The world's fifth-highest peak, shaped like a four-sided pyramid",
    category_id: "mountains",
    description:
      "Makalu (8,485 meters) is the fifth-highest mountain in the world, located 19 kilometers southeast of Mount Everest on the border of Nepal and Tibet. It is notable for its striking four-sided pyramid shape, considered one of the most beautiful mountain forms among the 8,000-meter peaks. First summited on May 15, 1955, by French climbers Lionel Terray and Jean Couzy, Makalu is regarded as one of the more difficult eight-thousanders due to its steep pitches and knife-edge ridges. Fewer than 400 people have reached its summit, compared to over 6,000 for Everest.",
    search_terms:
      "makalu|himalaya|nepal|tibet|fifth highest|pyramid peak|8000er",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8485, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 2386, si_unit: "m" },
      { dimension: "length", label: "Distance from Everest", value: 19000, si_unit: "m" },
      { dimension: "length", label: "Southeast ridge route length", value: 4200, si_unit: "m" },
      { dimension: "length", label: "Base camp elevation", value: 5650, si_unit: "m" },
      { dimension: "time", label: "First ascent", value: 2.24e9, si_unit: "s", note: "May 15, 1955" },
    ],
  },

  {
    slug: "cho-oyu",
    name: "Cho Oyu",
    subtitle: "The 'easiest' 8,000-meter peak, the world's sixth highest",
    category_id: "mountains",
    description:
      "Cho Oyu (8,188 meters) is the sixth-highest mountain in the world, situated on the Nepal-Tibet border about 20 kilometers west of Everest. Despite its great height, it is widely considered the 'easiest' of the fourteen 8,000-meter peaks due to its relatively gentle slopes and low technical difficulty on the standard northwest ridge route. First climbed on October 19, 1954, by Austrian Herbert Tichy, Joseph Joechler, and Pasang Dawa Lama, it has become a popular acclimatization climb for those preparing to attempt Everest. The name means 'Turquoise Goddess' in Tibetan.",
    search_terms:
      "cho oyu|himalaya|nepal|tibet|sixth highest|turquoise goddess|8000er",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8188, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 2340, si_unit: "m" },
      { dimension: "length", label: "Distance from Everest", value: 20000, si_unit: "m" },
      { dimension: "length", label: "Northwest ridge route length", value: 3800, si_unit: "m" },
      { dimension: "length", label: "Base camp elevation", value: 5600, si_unit: "m" },
      { dimension: "time", label: "First ascent", value: 2.27e9, si_unit: "s", note: "October 19, 1954" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE RIVERS & LAKES (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "congo-river",
    name: "Congo River",
    subtitle: "The world's deepest river, carving through the heart of Africa",
    category_id: "water",
    description:
      "The Congo River in Central Africa is the world's deepest river, with measured depths exceeding 220 meters in places, and the second-largest by discharge volume after the Amazon. It flows approximately 4,700 kilometers in a great arc through the Congo Basin rainforest, the second-largest tropical rainforest on Earth. Its drainage basin covers 3.7 million square kilometers across 11 countries. The river crosses the equator twice, ensuring it always has water from the rainy season in one hemisphere or the other, giving it a remarkably consistent flow. Livingstone Falls, despite the name, is actually a series of rapids dropping 270 meters over 350 kilometers.",
    search_terms:
      "congo river|deepest river|africa|congo basin|central africa|livingstone falls",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 4.7e6, si_unit: "m" },
      { dimension: "length", label: "Maximum depth", value: 220, si_unit: "m" },
      { dimension: "area", label: "Drainage basin area", value: 3.7e12, si_unit: "m^2" },
      { dimension: "length", label: "Maximum width", value: 16000, si_unit: "m" },
      { dimension: "volume", label: "Average discharge", value: 41000, si_unit: "m^3", note: "41,000 cubic meters per second" },
      { dimension: "length", label: "Livingstone Falls drop", value: 270, si_unit: "m" },
    ],
  },

  {
    slug: "tigris-river",
    name: "Tigris River",
    subtitle: "One of the two rivers that cradled the birth of civilization",
    category_id: "water",
    description:
      "The Tigris River flows approximately 1,850 kilometers from the Taurus Mountains of southeastern Turkey through Iraq to join the Euphrates, forming the Shatt al-Arab waterway before emptying into the Persian Gulf. Together with the Euphrates, it defined ancient Mesopotamia ('the land between the rivers'), where some of humanity's earliest civilizations, writing systems, and agricultural practices developed. The ancient cities of Nineveh, Assur, and Ctesiphon were built along its banks. The river's flow is highly seasonal, with spring floods from snowmelt that ancient Mesopotamians managed through some of the world's first irrigation systems.",
    search_terms:
      "tigris|river|mesopotamia|iraq|turkey|cradle of civilization|fertile crescent",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1.85e6, si_unit: "m" },
      { dimension: "area", label: "Drainage basin area", value: 3.75e11, si_unit: "m^2" },
      { dimension: "length", label: "Maximum width", value: 400, si_unit: "m" },
      { dimension: "volume", label: "Average discharge", value: 1014, si_unit: "m^3", note: "1,014 cubic meters per second" },
      { dimension: "length", label: "Source elevation", value: 1150, si_unit: "m" },
      { dimension: "length", label: "Average depth (lower course)", value: 8, si_unit: "m" },
    ],
  },

  {
    slug: "euphrates-river",
    name: "Euphrates River",
    subtitle: "The longest river of Western Asia, lifeline of ancient empires",
    category_id: "water",
    description:
      "The Euphrates is the longest river in Western Asia, flowing approximately 2,800 kilometers from its source in eastern Turkey through Syria and Iraq. It is historically one of the most important rivers in the world, nourishing the ancient civilizations of Sumer, Akkad, Babylonia, and Assyria. Babylon, one of the greatest cities of the ancient world, was built on its banks. The river's annual flooding deposited rich silt that made Mesopotamian agriculture possible. Today, a series of dams in Turkey, Syria, and Iraq regulate its flow, but these have also caused significant geopolitical tensions over water rights.",
    search_terms:
      "euphrates|river|mesopotamia|iraq|syria|turkey|babylon|fertile crescent",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2.8e6, si_unit: "m" },
      { dimension: "area", label: "Drainage basin area", value: 4.4e11, si_unit: "m^2" },
      { dimension: "length", label: "Maximum width", value: 500, si_unit: "m" },
      { dimension: "volume", label: "Average discharge", value: 356, si_unit: "m^3", note: "356 cubic meters per second at mouth" },
      { dimension: "length", label: "Source elevation", value: 3000, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 5, si_unit: "m" },
    ],
  },

  {
    slug: "jordan-river",
    name: "Jordan River",
    subtitle: "A modest river of immense religious significance",
    category_id: "water",
    description:
      "The Jordan River flows approximately 251 kilometers from the Anti-Lebanon Mountains through the Sea of Galilee and into the Dead Sea, the lowest point on Earth's surface. Despite its enormous religious significance in Judaism, Christianity, and Islam (Jesus was baptized in its waters), it is a surprisingly modest river, typically only about 2 meters deep and 15 meters wide in its lower course. Its waters are shared among Israel, Jordan, Syria, and the Palestinian territories, making it one of the most politically contested waterways in the world. Due to heavy diversion for agriculture, its flow has been reduced by roughly 90% since 1960.",
    search_terms:
      "jordan river|holy land|baptism|dead sea|sea of galilee|israel|jordan|religious river",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (straight-line)", value: 120000, si_unit: "m" },
      { dimension: "length", label: "Length (with meanders)", value: 251000, si_unit: "m" },
      { dimension: "length", label: "Typical width (lower course)", value: 15, si_unit: "m" },
      { dimension: "length", label: "Typical depth", value: 2, si_unit: "m" },
      { dimension: "area", label: "Drainage basin area", value: 1.82e10, si_unit: "m^2" },
      { dimension: "length", label: "Dead Sea surface elevation", value: -430.5, si_unit: "m", note: "430.5 meters below sea level" },
    ],
  },

  {
    slug: "huang-he-yellow-river",
    name: "Huang He (Yellow River)",
    subtitle: "China's 'Mother River' and 'Sorrow,' colored by loess silt",
    category_id: "water",
    description:
      "The Yellow River (Huang He) is the second-longest river in China at approximately 5,464 kilometers, flowing from the Tibetan Plateau to the Bohai Sea. It gets its name from the enormous quantity of fine loess silt it carries, giving the water a distinctive muddy yellow color. The river is often called both 'China's Mother River' for nurturing early Chinese civilization along its banks and 'China's Sorrow' for its catastrophic floods, which have killed millions throughout history. The 1931 flood alone may have killed up to 4 million people. Its sediment load of 1.6 billion tonnes per year makes it the muddiest major river on Earth.",
    search_terms:
      "yellow river|huang he|china|loess|silt|mother river|bohai sea|chinese civilization",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 5.464e6, si_unit: "m" },
      { dimension: "area", label: "Drainage basin area", value: 7.52e11, si_unit: "m^2" },
      { dimension: "volume", label: "Average discharge", value: 2571, si_unit: "m^3", note: "2,571 cubic meters per second" },
      { dimension: "length", label: "Source elevation", value: 4500, si_unit: "m" },
      { dimension: "mass", label: "Annual sediment load", value: 1.6e12, si_unit: "kg" },
      { dimension: "length", label: "Maximum width", value: 25000, si_unit: "m" },
    ],
  },

  {
    slug: "okavango-delta",
    name: "Okavango Delta",
    subtitle: "The world's largest inland delta, a desert oasis in Botswana",
    category_id: "water",
    description:
      "The Okavango Delta in northwestern Botswana is the world's largest inland delta, formed where the Okavango River empties not into the sea but into the Kalahari Desert. During the annual flood (which peaks between June and August, Botswana's winter), the delta swells from roughly 15,000 to 22,000 square kilometers, creating a lush oasis that supports one of Africa's densest concentrations of wildlife. Remarkably, approximately 96% of the water that enters the delta is lost to evaporation and transpiration rather than outflow. The delta became a UNESCO World Heritage Site in 2014.",
    search_terms:
      "okavango|delta|botswana|kalahari|inland delta|wetland|africa|wildlife|flood",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Peak flood area", value: 2.2e10, si_unit: "m^2" },
      { dimension: "area", label: "Permanent swamp area", value: 6e9, si_unit: "m^2" },
      { dimension: "length", label: "Delta length", value: 250000, si_unit: "m" },
      { dimension: "length", label: "Delta width", value: 150000, si_unit: "m" },
      { dimension: "volume", label: "Annual inflow", value: 1.1e10, si_unit: "m^3" },
      { dimension: "length", label: "Average water depth (flooded)", value: 1.5, si_unit: "m" },
    ],
  },

  {
    slug: "lake-tanganyika",
    name: "Lake Tanganyika",
    subtitle: "The world's longest and second-deepest freshwater lake",
    category_id: "water",
    description:
      "Lake Tanganyika in the East African Rift is the world's longest freshwater lake (673 km) and the second-deepest after Lake Baikal, reaching 1,470 meters. It holds roughly 18% of the world's available surface freshwater. The lake is shared by Burundi, the Democratic Republic of the Congo, Tanzania, and Zambia. Formed roughly 9 to 12 million years ago, it is one of the oldest lakes on Earth, and its great age and isolation have produced remarkable endemic biodiversity: approximately 98% of its cichlid fish species are found nowhere else. Explorer David Livingstone and Henry Morton Stanley visited the lake in 1871.",
    search_terms:
      "lake tanganyika|east africa|rift lake|deepest lake|longest lake|freshwater|cichlids",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 673000, si_unit: "m" },
      { dimension: "length", label: "Maximum width", value: 72000, si_unit: "m" },
      { dimension: "length", label: "Maximum depth", value: 1470, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 3.28e10, si_unit: "m^2" },
      { dimension: "volume", label: "Volume", value: 1.89e13, si_unit: "m^3" },
      { dimension: "time", label: "Age", value: 3.47e14, si_unit: "s", note: "Roughly 11 million years old" },
    ],
  },

  {
    slug: "lake-malawi",
    name: "Lake Malawi",
    subtitle: "Home to more fish species than any other lake on Earth",
    category_id: "water",
    description:
      "Lake Malawi (also called Lake Nyasa) is the ninth-largest lake in the world and the third-largest in Africa, located between Malawi, Mozambique, and Tanzania in the East African Rift. It is most famous for its extraordinary fish biodiversity: it contains more fish species than any other lake on Earth, with an estimated 700 to 1,000 species of cichlid fish, the vast majority of which are endemic. The lake is approximately 580 kilometers long, up to 75 kilometers wide, and reaches a maximum depth of 706 meters. Its clear, warm waters have earned it the nickname 'the Lake of Stars' for the way lanterns of fishermen in their boats appear at night.",
    search_terms:
      "lake malawi|lake nyasa|africa|cichlids|rift lake|malawi|mozambique|tanzania|freshwater",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 580000, si_unit: "m" },
      { dimension: "length", label: "Maximum width", value: 75000, si_unit: "m" },
      { dimension: "length", label: "Maximum depth", value: 706, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 2.95e10, si_unit: "m^2" },
      { dimension: "volume", label: "Volume", value: 8.4e12, si_unit: "m^3" },
      { dimension: "length", label: "Elevation", value: 474, si_unit: "m" },
    ],
  },

  {
    slug: "crater-lake",
    name: "Crater Lake",
    subtitle: "The deepest lake in the United States, filling a collapsed volcano",
    category_id: "water",
    description:
      "Crater Lake in southern Oregon is the deepest lake in the United States at 594 meters and among the deepest in the world. It fills the caldera of Mount Mazama, which collapsed roughly 7,700 years ago after a massive eruption. The lake has no rivers flowing in or out; it is maintained entirely by precipitation and snowmelt balanced by evaporation and seepage. This purity gives it a stunning deep blue color and remarkable clarity, with visibility sometimes exceeding 30 meters. Wizard Island, a cinder cone that formed after the caldera collapse, rises 230 meters above the lake surface near the western shore.",
    search_terms:
      "crater lake|oregon|caldera|deepest lake us|mount mazama|wizard island|volcanic lake",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum depth", value: 594, si_unit: "m" },
      { dimension: "length", label: "Caldera diameter", value: 8900, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 5.34e7, si_unit: "m^2" },
      { dimension: "length", label: "Elevation", value: 1883, si_unit: "m" },
      { dimension: "length", label: "Water clarity (visibility)", value: 30, si_unit: "m" },
      { dimension: "time", label: "Age", value: 2.43e11, si_unit: "s", note: "Caldera formed roughly 7,700 years ago" },
    ],
  },

  {
    slug: "tonle-sap",
    name: "Tonle Sap",
    subtitle: "Southeast Asia's largest lake that reverses its river's flow",
    category_id: "water",
    description:
      "Tonle Sap is the largest freshwater lake in Southeast Asia, located in Cambodia. It is one of the most unusual hydrological systems on Earth: during the dry season it covers roughly 2,700 square kilometers, but during the monsoon (June through October), the swollen Mekong River actually reverses the flow of the Tonle Sap River, pushing water back into the lake and expanding it to as much as 16,000 square kilometers, roughly six times its dry-season size. This expansion floods surrounding forests and creates one of the world's most productive freshwater fisheries, providing over 60% of Cambodia's protein intake.",
    search_terms:
      "tonle sap|cambodia|lake|mekong|reverse flow|freshwater|southeast asia|monsoon",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Dry season area", value: 2.7e9, si_unit: "m^2" },
      { dimension: "area", label: "Wet season area", value: 1.6e10, si_unit: "m^2" },
      { dimension: "length", label: "Dry season depth", value: 1, si_unit: "m" },
      { dimension: "length", label: "Wet season depth", value: 9, si_unit: "m" },
      { dimension: "length", label: "Lake length (wet season)", value: 250000, si_unit: "m" },
      { dimension: "length", label: "Tonle Sap River length", value: 120000, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE ISLANDS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "bali-island",
    name: "Bali",
    subtitle: "Indonesia's 'Island of the Gods,' where terraced rice paddies meet volcanic peaks",
    category_id: "landforms",
    description:
      "Bali is an Indonesian island located between Java and Lombok, known for its terraced rice paddies, volcanic mountains, coral reefs, and Hindu temples. Covering 5,780 square kilometers with a population of about 4.3 million, it is Indonesia's primary tourist destination. Mount Agung, the island's highest point at 3,031 meters, is an active volcano that last erupted in 2017-2019. The island's unique Hindu culture in the predominantly Muslim nation dates back to the 15th century when Hindu priests and nobles fled the Islamic conquest of Java. Bali's subak irrigation system, managing the terraced rice paddies, is a UNESCO World Heritage cultural landscape.",
    search_terms:
      "bali|indonesia|island of the gods|hindu|mount agung|rice terraces|tropical island",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Island area", value: 5.78e9, si_unit: "m^2" },
      { dimension: "length", label: "Length (east-west)", value: 153000, si_unit: "m" },
      { dimension: "length", label: "Width (north-south)", value: 112000, si_unit: "m" },
      { dimension: "length", label: "Mount Agung elevation", value: 3031, si_unit: "m" },
      { dimension: "length", label: "Coastline length", value: 633000, si_unit: "m" },
      { dimension: "length", label: "Highest rice terrace elevation", value: 700, si_unit: "m" },
    ],
  },

  {
    slug: "santorini-island",
    name: "Santorini",
    subtitle: "A crescent-shaped volcanic island with blue-domed churches",
    category_id: "landforms",
    description:
      "Santorini (Thira) is a crescent-shaped island in the southern Aegean Sea, Greece, formed by one of the largest volcanic eruptions in recorded history: the Minoan eruption around 1620 BC, which destroyed the center of the island and may have contributed to the decline of the Minoan civilization. The caldera created by the eruption is 12 kilometers long and 7 kilometers wide, with cliffs rising 300 meters above sea level on the inner rim. The island's iconic whitewashed buildings with blue domes cluster along these dramatic cliffs. Some scholars have linked Santorini to the legend of Atlantis.",
    search_terms:
      "santorini|thira|greece|volcanic island|caldera|aegean|blue domes|minoan eruption|atlantis",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Island area", value: 7.6e7, si_unit: "m^2" },
      { dimension: "length", label: "Caldera length", value: 12000, si_unit: "m" },
      { dimension: "length", label: "Caldera width", value: 7000, si_unit: "m" },
      { dimension: "length", label: "Caldera cliff height", value: 300, si_unit: "m" },
      { dimension: "length", label: "Highest point", value: 567, si_unit: "m" },
      { dimension: "time", label: "Minoan eruption age", value: 1.15e11, si_unit: "s", note: "Circa 1620 BC" },
    ],
  },

  {
    slug: "zanzibar-island",
    name: "Zanzibar (Unguja)",
    subtitle: "The spice island off the coast of East Africa",
    category_id: "landforms",
    description:
      "Zanzibar (the main island Unguja) is a semi-autonomous island off the coast of Tanzania in the Indian Ocean. Covering about 1,666 square kilometers, it was historically the world's foremost producer of cloves and a major hub in the East African spice trade and, tragically, the Indian Ocean slave trade. Stone Town, the island's historic center, is a UNESCO World Heritage Site with a maze of narrow alleys lined by Arab, Persian, Indian, and European architecture. The island was an independent sultanate until 1964, when a revolution overthrew the monarchy and led to union with Tanganyika to form modern Tanzania.",
    search_terms:
      "zanzibar|unguja|tanzania|spice island|stone town|indian ocean|east africa|cloves",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Island area", value: 1.666e9, si_unit: "m^2" },
      { dimension: "length", label: "Length", value: 85000, si_unit: "m" },
      { dimension: "length", label: "Width", value: 30000, si_unit: "m" },
      { dimension: "length", label: "Highest point", value: 120, si_unit: "m" },
      { dimension: "length", label: "Distance from mainland", value: 25000, si_unit: "m" },
      { dimension: "length", label: "Coastline length", value: 240000, si_unit: "m" },
    ],
  },

  {
    slug: "maldives-total-area",
    name: "Maldives",
    subtitle: "The world's lowest-lying country, scattered across 1,192 coral islands",
    category_id: "landforms",
    description:
      "The Maldives is a nation of 1,192 coral islands grouped into 26 atolls in the Indian Ocean, southwest of India. It holds the distinction of being the lowest-lying country on Earth, with an average ground-level elevation of just 1.5 meters above sea level and the highest natural point at only 5.1 meters. The total land area is just 298 square kilometers, but the atolls are spread across roughly 90,000 square kilometers of ocean. Climate change and rising sea levels pose an existential threat to the nation: scientists estimate that much of the country could become uninhabitable by 2100 if ocean levels rise as projected.",
    search_terms:
      "maldives|coral islands|atolls|indian ocean|lowest country|sea level|climate change",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 2.98e8, si_unit: "m^2" },
      { dimension: "area", label: "Ocean territory area", value: 9e10, si_unit: "m^2" },
      { dimension: "length", label: "Average elevation", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Highest natural point", value: 5.1, si_unit: "m" },
      { dimension: "length", label: "Archipelago length", value: 871000, si_unit: "m" },
      { dimension: "length", label: "Largest atoll diameter (Huvadhoo)", value: 75000, si_unit: "m" },
    ],
  },

  {
    slug: "svalbard-archipelago",
    name: "Svalbard",
    subtitle: "An Arctic archipelago where polar bears outnumber people",
    category_id: "landforms",
    description:
      "Svalbard is a Norwegian archipelago in the Arctic Ocean, located roughly midway between mainland Norway and the North Pole. Covering about 61,022 square kilometers, it is one of the northernmost permanently inhabited places on Earth. Approximately 60% of the land is covered by glaciers. The human population of around 2,500 is outnumbered by an estimated 3,000 polar bears, and carrying a rifle is recommended when traveling outside settlements. Svalbard is also home to the Global Seed Vault, a secure facility dug into a mountainside storing duplicates of seed samples from gene banks worldwide as insurance against catastrophe.",
    search_terms:
      "svalbard|spitsbergen|arctic|norway|polar bears|seed vault|archipelago|glaciers",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 6.1022e10, si_unit: "m^2" },
      { dimension: "length", label: "Largest island length (Spitsbergen)", value: 280000, si_unit: "m" },
      { dimension: "length", label: "Highest point (Newtontoppen)", value: 1713, si_unit: "m" },
      { dimension: "length", label: "Distance from North Pole", value: 1.1e6, si_unit: "m" },
      { dimension: "length", label: "Glacier coverage", value: 3.66e10, si_unit: "m", note: "About 60% of land area" },
      { dimension: "length", label: "Seed Vault depth into mountain", value: 130, si_unit: "m" },
    ],
  },

  {
    slug: "faroe-islands",
    name: "Faroe Islands",
    subtitle: "18 rugged islands in the North Atlantic with more sheep than people",
    category_id: "landforms",
    description:
      "The Faroe Islands are an autonomous territory of Denmark consisting of 18 volcanic islands in the North Atlantic between Norway, Iceland, and Scotland. With a total area of about 1,399 square kilometers and a population of roughly 54,000, the islands are home to approximately 80,000 sheep (the name 'Faroe' likely derives from Old Norse for 'sheep'). The terrain is rugged with cliffs, valleys, and no native trees. The islands have one of the highest standards of living in Europe despite their remoteness. The undersea tunnel system connecting the islands includes the Eysturoyartunnilin, which features the world's first undersea traffic roundabout.",
    search_terms:
      "faroe islands|denmark|north atlantic|sheep|volcanic islands|nordic|faeroese",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 1.399e9, si_unit: "m^2" },
      { dimension: "length", label: "Coastline length", value: 764000, si_unit: "m" },
      { dimension: "length", label: "Highest point (Slaettaratindur)", value: 882, si_unit: "m" },
      { dimension: "length", label: "Largest island length (Streymoy)", value: 47000, si_unit: "m" },
      { dimension: "length", label: "Undersea tunnel total length", value: 25000, si_unit: "m" },
      { dimension: "length", label: "Archipelago extent (N-S)", value: 113000, si_unit: "m" },
    ],
  },

  {
    slug: "azores-archipelago",
    name: "Azores",
    subtitle: "Nine volcanic islands in the middle of the Atlantic Ocean",
    category_id: "landforms",
    description:
      "The Azores are an autonomous region of Portugal consisting of nine volcanic islands in the middle of the North Atlantic Ocean, roughly 1,400 kilometers west of mainland Portugal. They sit at the triple junction of the North American, Eurasian, and African tectonic plates, making them one of the most volcanically active regions in the world. Mount Pico on Pico Island, at 2,351 meters, is the highest point in all of Portugal. The total land area is about 2,346 square kilometers across the nine islands. The Azores served as a crucial waypoint for transatlantic navigation from the Age of Exploration onward, and their mild climate produces world-renowned tea, pineapples, and dairy.",
    search_terms:
      "azores|portugal|atlantic ocean|volcanic islands|mount pico|tectonic|archipelago",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 2.346e9, si_unit: "m^2" },
      { dimension: "length", label: "Mount Pico elevation", value: 2351, si_unit: "m" },
      { dimension: "length", label: "Archipelago extent (WNW-ESE)", value: 630000, si_unit: "m" },
      { dimension: "length", label: "Largest island area (Sao Miguel)", value: 57000, si_unit: "m", note: "Length of Sao Miguel" },
      { dimension: "length", label: "Distance from mainland Portugal", value: 1.4e6, si_unit: "m" },
      { dimension: "length", label: "Sete Cidades caldera diameter", value: 5000, si_unit: "m" },
    ],
  },

  {
    slug: "seychelles-archipelago",
    name: "Seychelles",
    subtitle: "The world's smallest African country, with the oldest ocean islands",
    category_id: "landforms",
    description:
      "The Seychelles is an archipelago of 115 islands in the western Indian Ocean, northeast of Madagascar. With a total land area of just 459 square kilometers, it is the smallest country in Africa and one of the smallest in the world. Uniquely, the inner islands are granitic rather than volcanic or coral, making them the world's oldest ocean islands at roughly 750 million years old. The Vallee de Mai on Praslin Island is a UNESCO World Heritage Site home to the coco de mer palm, which produces the world's largest seed (up to 25 kg). The Seychelles giant tortoise can live over 150 years.",
    search_terms:
      "seychelles|indian ocean|archipelago|granite islands|coco de mer|tropical|africa|mahe",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 4.59e8, si_unit: "m^2" },
      { dimension: "area", label: "Exclusive economic zone", value: 1.34e12, si_unit: "m^2" },
      { dimension: "length", label: "Highest point (Morne Seychellois)", value: 905, si_unit: "m" },
      { dimension: "length", label: "Largest island (Mahe) length", value: 27000, si_unit: "m" },
      { dimension: "time", label: "Granite island age", value: 2.37e16, si_unit: "s", note: "Roughly 750 million years old" },
      { dimension: "mass", label: "Largest coco de mer seed", value: 25, si_unit: "kg" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE CITIES & URBAN (8)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "venice-city",
    name: "Venice",
    subtitle: "A city built on 118 islands with canals instead of roads",
    category_id: "everyday-places",
    description:
      "Venice is a city in northeastern Italy built on 118 small islands in a lagoon in the Adriatic Sea, connected by over 400 bridges. Instead of roads, the city relies on a network of 177 canals, the largest being the Grand Canal at 3.8 kilometers long and up to 90 meters wide. The city covers about 7.1 square kilometers (the historic islands only, not the mainland). Founded in the 5th century by Romans fleeing barbarian invasions, Venice became one of the greatest maritime republics. Buildings rest on millions of wooden piles driven into the soft lagoon bed. The city sinks at a rate of about 1-2 millimeters per year and faces increasing acqua alta (high water) flooding events.",
    search_terms:
      "venice|italy|canals|gondola|adriatic|lagoon|grand canal|islands|sinking city",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Historic city area", value: 7.1e6, si_unit: "m^2" },
      { dimension: "length", label: "Grand Canal length", value: 3800, si_unit: "m" },
      { dimension: "length", label: "Grand Canal width", value: 90, si_unit: "m" },
      { dimension: "length", label: "Total canal length", value: 42000, si_unit: "m" },
      { dimension: "length", label: "Rialto Bridge span", value: 48, si_unit: "m" },
      { dimension: "time", label: "City age", value: 4.89e10, si_unit: "s", note: "Founded circa 5th century AD" },
    ],
  },

  {
    slug: "amsterdam-city",
    name: "Amsterdam",
    subtitle: "A city built below sea level with 100 kilometers of canals",
    category_id: "everyday-places",
    description:
      "Amsterdam, the capital of the Netherlands, is famous for its concentric ring of canals (grachtengordel), built during the Dutch Golden Age in the 17th century and now a UNESCO World Heritage Site. The canal system includes four main concentric rings: Singel, Herengracht, Keizersgracht, and Prinsengracht, collectively measuring over 100 kilometers in total length. The city sits an average of 2 meters below sea level, protected by an elaborate system of dikes and pumping stations. Amsterdam has approximately 1,753 bridges (more per square kilometer than Venice), 881,000 inhabitants, and an estimated 880,000 bicycles.",
    search_terms:
      "amsterdam|netherlands|canals|below sea level|dutch|grachtengordel|golden age|bicycles",
    featured: 0,
    measurements: [
      { dimension: "area", label: "City area", value: 2.194e8, si_unit: "m^2" },
      { dimension: "length", label: "Total canal length", value: 100000, si_unit: "m" },
      { dimension: "length", label: "Average elevation below sea level", value: -2, si_unit: "m" },
      { dimension: "length", label: "Herengracht length", value: 2400, si_unit: "m" },
      { dimension: "length", label: "Average canal width", value: 25, si_unit: "m" },
      { dimension: "length", label: "Average canal depth", value: 2.8, si_unit: "m" },
    ],
  },

  {
    slug: "marrakech-medina",
    name: "Marrakech Medina",
    subtitle: "One of the largest traditional walled cities in North Africa",
    category_id: "everyday-places",
    description:
      "The Medina of Marrakech is the historic fortified old town at the heart of Marrakech, Morocco, enclosed within 19 kilometers of pink-red rammed-earth walls (pisé) dating to the 12th century. The medina covers approximately 6 square kilometers and is a UNESCO World Heritage Site. Its labyrinthine network of narrow alleys, covered markets (souks), riads, mosques, and palaces makes it one of the largest and most intact medieval Islamic cities. The famous Jemaa el-Fnaa square at its center has been a gathering place for storytellers, musicians, and food vendors for nearly a thousand years. The distinctive pink-red color of its walls gives Marrakech the nickname 'Red City.'",
    search_terms:
      "marrakech|medina|morocco|red city|souks|jemaa el-fnaa|north africa|walled city",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Medina area", value: 6e6, si_unit: "m^2" },
      { dimension: "length", label: "City wall perimeter", value: 19000, si_unit: "m" },
      { dimension: "length", label: "Wall height", value: 9, si_unit: "m" },
      { dimension: "area", label: "Jemaa el-Fnaa square area", value: 17000, si_unit: "m^2" },
      { dimension: "time", label: "Wall age", value: 2.84e10, si_unit: "s", note: "Walls built circa 12th century" },
      { dimension: "length", label: "Koutoubia Mosque minaret height", value: 77, si_unit: "m" },
    ],
  },

  {
    slug: "kyoto-city",
    name: "Kyoto",
    subtitle: "Japan's ancient capital, home to 2,000 temples and 17 UNESCO sites",
    category_id: "everyday-places",
    description:
      "Kyoto served as Japan's imperial capital for over 1,000 years, from 794 to 1868, and remains the cultural heart of the nation. The city was laid out in a grid pattern modeled on the Chinese Tang dynasty capital Chang'an. Kyoto contains approximately 2,000 temples and shrines, 17 UNESCO World Heritage Sites, and many of Japan's most famous cultural traditions including the geisha (geiko) of Gion, traditional tea ceremonies, and kaiseki cuisine. It was deliberately spared from Allied bombing during World War II, partly because of its cultural significance, though the decision was more complex than often portrayed. The city covers about 827 square kilometers.",
    search_terms:
      "kyoto|japan|temples|imperial capital|geisha|tea ceremony|unesco|shrines|ancient capital",
    featured: 0,
    measurements: [
      { dimension: "area", label: "City area", value: 8.27e8, si_unit: "m^2" },
      { dimension: "length", label: "Original grid city extent (N-S)", value: 5300, si_unit: "m" },
      { dimension: "length", label: "Original grid city extent (E-W)", value: 4500, si_unit: "m" },
      { dimension: "length", label: "Kamo River length through city", value: 23000, si_unit: "m" },
      { dimension: "time", label: "Age as capital", value: 3.39e10, si_unit: "s", note: "Capital from 794 to 1868 AD" },
      { dimension: "length", label: "Kinkaku-ji (Golden Pavilion) height", value: 12.5, si_unit: "m" },
    ],
  },

  {
    slug: "cusco-city",
    name: "Cusco",
    subtitle: "The ancient Inca capital at 3,400 meters, navel of the world",
    category_id: "everyday-places",
    description:
      "Cusco (or Cuzco) in southeastern Peru was the capital of the Inca Empire, the largest empire in pre-Columbian America. Situated at 3,400 meters above sea level in the Andes, the Incas designed the city in the shape of a puma. The Inca stone walls that remain throughout the city feature precisely fitted polygonal stones with no mortar, so perfectly joined that a knife blade cannot fit between them. The famous Sacsayhuaman fortress above the city contains stones weighing up to 200 tonnes. The name Cusco (Qusqu) means 'navel of the world' in Quechua. The city was the starting point for all Inca roads radiating to the four quarters of the empire.",
    search_terms:
      "cusco|cuzco|peru|inca|capital|andes|sacsayhuaman|quechua|empire|navel of the world",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Elevation", value: 3400, si_unit: "m" },
      { dimension: "area", label: "Historic center area", value: 2.5e6, si_unit: "m^2" },
      { dimension: "mass", label: "Heaviest Sacsayhuaman stone", value: 200000, si_unit: "kg" },
      { dimension: "length", label: "Sacsayhuaman wall length", value: 600, si_unit: "m" },
      { dimension: "length", label: "Sacsayhuaman wall height", value: 6, si_unit: "m" },
      { dimension: "time", label: "Inca founding age", value: 2.08e10, si_unit: "s", note: "Founded circa 13th century" },
    ],
  },

  {
    slug: "varanasi-city",
    name: "Varanasi",
    subtitle: "One of the world's oldest continuously inhabited cities",
    category_id: "everyday-places",
    description:
      "Varanasi (also known as Benares or Kashi) is a city on the banks of the Ganges River in Uttar Pradesh, India, and is widely regarded as one of the world's oldest continuously inhabited cities, with evidence of habitation stretching back roughly 5,000 years. It is the holiest city in Hinduism: Hindus believe that dying in Varanasi and being cremated on the banks of the Ganges breaks the cycle of rebirth and grants moksha (liberation). The city's ghats, a series of 88 stone steps leading down to the river along a 6.8-kilometer stretch, are the scene of daily rituals, cremations, and the famous Ganga Aarti ceremony each evening.",
    search_terms:
      "varanasi|benares|kashi|india|ganges|hindu|ghats|oldest city|holy city|cremation",
    featured: 0,
    measurements: [
      { dimension: "area", label: "City area", value: 8.2e7, si_unit: "m^2" },
      { dimension: "length", label: "Ghat-lined riverfront length", value: 6800, si_unit: "m" },
      { dimension: "length", label: "Ganges width at Varanasi", value: 350, si_unit: "m" },
      { dimension: "length", label: "Kashi Vishwanath Temple height", value: 15.5, si_unit: "m" },
      { dimension: "time", label: "Age of habitation", value: 1.58e11, si_unit: "s", note: "Roughly 5,000 years" },
      { dimension: "length", label: "Average ghat step run", value: 100, si_unit: "m" },
    ],
  },

  {
    slug: "petra-ancient-city",
    name: "Petra (Ancient City)",
    subtitle: "A rose-red city carved into desert cliffs by the Nabataean people",
    category_id: "everyday-places",
    description:
      "Petra is an ancient city in southern Jordan, carved directly into the rose-red sandstone cliffs of the Sharah Mountains by the Nabataean Arabs beginning around the 4th century BC. At its peak around the 1st century AD, the city was home to roughly 30,000 people and served as the capital of a wealthy trading empire controlling the incense and spice routes. The site covers approximately 264 square kilometers and contains over 800 carved structures, including tombs, temples, and an amphitheater for 4,000 spectators. The famous Treasury (Al-Khazneh) is merely the first of many monumental facades. A sophisticated water management system of dams, cisterns, and channels allowed the city to thrive in the desert.",
    search_terms:
      "petra|jordan|nabataean|rose city|treasury|ancient city|carved|sandstone|wonder",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Archaeological site area", value: 2.64e8, si_unit: "m^2" },
      { dimension: "length", label: "Siq canyon length", value: 1200, si_unit: "m" },
      { dimension: "length", label: "Treasury facade height", value: 39.1, si_unit: "m" },
      { dimension: "length", label: "Treasury facade width", value: 25, si_unit: "m" },
      { dimension: "length", label: "Amphitheater diameter", value: 95, si_unit: "m" },
      { dimension: "time", label: "Age", value: 7.57e10, si_unit: "s", note: "Founded circa 4th century BC" },
    ],
  },

  {
    slug: "timbuktu-city",
    name: "Timbuktu",
    subtitle: "The legendary Saharan city that was once a global center of learning",
    category_id: "everyday-places",
    description:
      "Timbuktu is a city in central Mali on the southern edge of the Sahara Desert, near the Niger River. Once synonymous in the Western imagination with the uttermost ends of the Earth, it was in reality one of the richest and most intellectually vibrant cities in the world during the 15th and 16th centuries, home to the University of Sankore and an estimated 700,000 manuscripts covering astronomy, mathematics, medicine, and law. At its peak under the Songhai Empire, the city's population reached roughly 100,000. Today, with a population of about 55,000, its ancient mud-brick mosques (Djinguereber, Sankore, and Sidi Yahia) are UNESCO World Heritage Sites.",
    search_terms:
      "timbuktu|mali|sahara|manuscripts|sankore|songhai|learning|desert city|africa",
    featured: 0,
    measurements: [
      { dimension: "area", label: "City area", value: 1.2e7, si_unit: "m^2" },
      { dimension: "length", label: "Djinguereber Mosque height", value: 16, si_unit: "m" },
      { dimension: "length", label: "Distance from Niger River", value: 15000, si_unit: "m" },
      { dimension: "length", label: "Sankore Mosque minaret height", value: 14, si_unit: "m" },
      { dimension: "time", label: "Age", value: 3.15e10, si_unit: "s", note: "Founded circa 11th century" },
      { dimension: "length", label: "Elevation", value: 261, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE OCEANS & SEAS (8)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "bering-sea",
    name: "Bering Sea",
    subtitle: "The stormy northern sea made infamous by crab fishing reality TV",
    category_id: "water",
    description:
      "The Bering Sea is a marginal sea of the northern Pacific Ocean, bordered by Alaska to the east, Russia to the west, and the Aleutian Islands to the south. Covering approximately 2.29 million square kilometers with an average depth of 1,600 meters, it is one of the most biologically productive marine ecosystems on Earth, supporting massive populations of salmon, pollock, crab, and marine mammals. The sea is notorious for its extreme weather, with winter storms generating waves exceeding 12 meters. It was made famous by the television show 'Deadliest Catch,' which documented the dangerous Alaskan king crab fishery. The Bering Strait, at its narrowest just 82 kilometers wide, once formed a land bridge connecting Asia and North America.",
    search_terms:
      "bering sea|alaska|russia|deadliest catch|crab fishing|bering strait|pacific|north",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 2.29e12, si_unit: "m^2" },
      { dimension: "length", label: "Average depth", value: 1600, si_unit: "m" },
      { dimension: "length", label: "Maximum depth", value: 4773, si_unit: "m" },
      { dimension: "length", label: "Bering Strait width (narrowest)", value: 82000, si_unit: "m" },
      { dimension: "length", label: "North-south extent", value: 1500000, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 3.7e15, si_unit: "m^3" },
    ],
  },

  {
    slug: "weddell-sea",
    name: "Weddell Sea",
    subtitle: "The Antarctic sea with the clearest ocean water ever measured",
    category_id: "water",
    description:
      "The Weddell Sea is a large bay in the Southern Ocean, bounded by the Antarctic Peninsula to the west and Coats Land to the east. It is one of the coldest and most hostile marine environments on Earth. In 1986, scientists measured the Weddell Sea's water clarity at a Secchi depth of 80 meters, the clearest ocean water ever recorded, nearly as transparent as distilled water. The sea is covered by a massive ice shelf and seasonal sea ice that can extend over 2 million square kilometers. Explorer Ernest Shackleton's ship Endurance was trapped and crushed by Weddell Sea pack ice in 1915; the wreck was discovered remarkably intact on the seafloor in 2022 at a depth of 3,008 meters.",
    search_terms:
      "weddell sea|antarctica|southern ocean|clearest water|endurance|shackleton|ice|polar",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 2.8e12, si_unit: "m^2" },
      { dimension: "length", label: "Maximum depth", value: 5720, si_unit: "m" },
      { dimension: "length", label: "Water clarity (Secchi depth)", value: 80, si_unit: "m" },
      { dimension: "length", label: "Endurance wreck depth", value: 3008, si_unit: "m" },
      { dimension: "area", label: "Maximum ice extent", value: 2e12, si_unit: "m^2" },
      { dimension: "length", label: "Ronne-Filchner Ice Shelf length", value: 480000, si_unit: "m" },
    ],
  },

  {
    slug: "ross-sea",
    name: "Ross Sea",
    subtitle: "The 'last ocean,' the least altered marine ecosystem on Earth",
    category_id: "water",
    description:
      "The Ross Sea is a deep bay in the Southern Ocean off Antarctica, often called 'the last ocean' because it is considered the least human-altered marine ecosystem remaining on Earth. Covering approximately 637,000 square kilometers, it supports an extraordinarily productive food web: roughly 38% of the world's Adelie penguins, 26% of emperor penguins, and about 30% of Antarctic petrels depend on it. The Ross Ice Shelf at its southern end is the largest floating ice shelf on Earth, roughly the size of France. In 2016, an international agreement established the Ross Sea Marine Protected Area, the world's largest at 1.55 million square kilometers.",
    search_terms:
      "ross sea|antarctica|southern ocean|last ocean|ross ice shelf|marine protected area|penguins",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Sea area", value: 6.37e11, si_unit: "m^2" },
      { dimension: "area", label: "Marine Protected Area", value: 1.55e12, si_unit: "m^2" },
      { dimension: "length", label: "Maximum depth", value: 2850, si_unit: "m" },
      { dimension: "area", label: "Ross Ice Shelf area", value: 4.87e11, si_unit: "m^2" },
      { dimension: "length", label: "Ross Ice Shelf thickness", value: 300, si_unit: "m" },
      { dimension: "length", label: "Ross Ice Shelf cliff height", value: 50, si_unit: "m" },
    ],
  },

  {
    slug: "tasman-sea",
    name: "Tasman Sea",
    subtitle: "The treacherous waters between Australia and New Zealand",
    category_id: "water",
    description:
      "The Tasman Sea is a marginal sea of the South Pacific between southeastern Australia and New Zealand, spanning roughly 2,000 kilometers at its widest. It covers approximately 2.33 million square kilometers with a maximum depth of about 5,943 meters. Named after Dutch explorer Abel Tasman, who was the first European to sight New Zealand and Tasmania in 1642, the sea is notorious among sailors for its violent storms and unpredictable conditions. The Sydney to Hobart yacht race, one of the world's most prestigious ocean races, crosses part of the Tasman and has a reputation for danger. The East Australian Current, made famous by the film Finding Nemo, flows through its western edge.",
    search_terms:
      "tasman sea|australia|new zealand|pacific|abel tasman|sydney hobart|ocean racing",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 2.33e12, si_unit: "m^2" },
      { dimension: "length", label: "Width (widest)", value: 2.0e6, si_unit: "m" },
      { dimension: "length", label: "Maximum depth", value: 5943, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 2471, si_unit: "m" },
      { dimension: "length", label: "Sydney to Auckland distance", value: 2.162e6, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 5.75e15, si_unit: "m^3" },
    ],
  },

  {
    slug: "bay-of-bengal",
    name: "Bay of Bengal",
    subtitle: "The world's largest bay, a cradle of devastating cyclones",
    category_id: "water",
    description:
      "The Bay of Bengal is the largest bay in the world, a northeastern extension of the Indian Ocean bordered by India, Bangladesh, Myanmar, Sri Lanka, and the Andaman and Nicobar Islands. Covering approximately 2.17 million square kilometers, its warm surface waters (often exceeding 28 degrees Celsius) provide ideal fuel for tropical cyclones, making it one of the most cyclone-prone basins on Earth. The 1970 Bhola cyclone that struck Bangladesh (then East Pakistan) killed an estimated 300,000 to 500,000 people. The bay receives enormous freshwater inflow from the Ganges-Brahmaputra-Meghna delta, the world's largest river delta, which discharges roughly 40,000 cubic meters per second.",
    search_terms:
      "bay of bengal|indian ocean|cyclone|bangladesh|india|myanmar|largest bay|ganges delta",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 2.17e12, si_unit: "m^2" },
      { dimension: "length", label: "Maximum depth", value: 4694, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 2600, si_unit: "m" },
      { dimension: "length", label: "North-south extent", value: 2.09e6, si_unit: "m" },
      { dimension: "length", label: "East-west extent", value: 1.61e6, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 5.62e15, si_unit: "m^3" },
    ],
  },

  {
    slug: "gulf-of-mexico",
    name: "Gulf of Mexico",
    subtitle: "A warm ocean basin that fuels hurricanes and feeds fisheries",
    category_id: "water",
    description:
      "The Gulf of Mexico is a partially enclosed ocean basin bordered by the United States, Mexico, and Cuba. Covering approximately 1.55 million square kilometers, its warm waters (reaching 30 degrees Celsius in summer) serve as a heat engine that fuels Atlantic hurricanes. The Gulf Loop Current carries warm Caribbean water into the basin, sometimes spawning eddies that intensify storms. It supports one of the most productive fisheries in the world, accounting for roughly 40% of U.S. commercial fish and shellfish landings. The 2010 Deepwater Horizon oil spill released an estimated 780 million liters of crude oil into the Gulf, the largest accidental marine oil spill in history.",
    search_terms:
      "gulf of mexico|ocean basin|hurricanes|fishing|deepwater horizon|oil spill|loop current",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 1.55e12, si_unit: "m^2" },
      { dimension: "length", label: "Maximum depth (Sigsbee Deep)", value: 4384, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 1615, si_unit: "m" },
      { dimension: "length", label: "Coastline length", value: 5.7e6, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 2.5e15, si_unit: "m^3" },
      { dimension: "length", label: "East-west extent", value: 1.6e6, si_unit: "m" },
    ],
  },

  {
    slug: "hudson-bay",
    name: "Hudson Bay",
    subtitle: "A vast inland sea where gravity is slightly weaker than normal",
    category_id: "water",
    description:
      "Hudson Bay is a large body of saltwater in northeastern Canada, the second-largest bay in the world after the Bay of Bengal. Covering approximately 1.23 million square kilometers (about 12% of Canada's total area), it is ice-covered for roughly 8 months of the year. The bay holds a gravitational anomaly: gravity in the region is measurably weaker than the global average, likely due to the lingering effects of the Laurentide Ice Sheet that depressed the land during the last ice age. The land is still rebounding at a rate of about 1 centimeter per year. Churchill, Manitoba, on its western shore, is known as the 'polar bear capital of the world.'",
    search_terms:
      "hudson bay|canada|inland sea|gravity anomaly|polar bears|churchill|arctic|ice",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 1.23e12, si_unit: "m^2" },
      { dimension: "length", label: "Maximum depth", value: 270, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 100, si_unit: "m" },
      { dimension: "length", label: "North-south extent", value: 1.37e6, si_unit: "m" },
      { dimension: "length", label: "East-west extent", value: 1.03e6, si_unit: "m" },
      { dimension: "length", label: "Post-glacial rebound rate", value: 0.01, si_unit: "m", note: "About 1 centimeter per year" },
    ],
  },

  {
    slug: "sea-of-japan",
    name: "Sea of Japan",
    subtitle: "A deep marginal sea that was once a freshwater lake",
    category_id: "water",
    description:
      "The Sea of Japan (also called the East Sea by Korea) is a marginal sea bordered by Japan, Russia, North Korea, and South Korea. Covering approximately 978,000 square kilometers with a maximum depth of 3,742 meters, it is almost entirely enclosed and connected to the Pacific only through narrow straits, the largest being the Korea Strait at 200 kilometers wide. During ice ages when sea levels dropped, these straits closed completely, turning the sea into an isolated freshwater lake. The Tsushima Current brings warm water from the south, creating a temperature gradient that produces heavy snowfall on Japan's western coast, making it one of the snowiest regions on Earth at sea level.",
    search_terms:
      "sea of japan|east sea|marginal sea|japan|korea|russia|tsushima current|straits",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 9.78e11, si_unit: "m^2" },
      { dimension: "length", label: "Maximum depth", value: 3742, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 1752, si_unit: "m" },
      { dimension: "length", label: "Korea Strait width", value: 200000, si_unit: "m" },
      { dimension: "length", label: "North-south extent", value: 2.255e6, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 1.71e15, si_unit: "m^3" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL ITEMS TO REACH 100 TOTAL
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "sutton-hoo-helmet",
    name: "Sutton Hoo Helmet",
    subtitle: "An Anglo-Saxon warrior king's iron and bronze face guard",
    category_id: "archaeology",
    description:
      "The Sutton Hoo helmet is one of the most iconic artifacts from early medieval England, discovered in 1939 during the excavation of a 27-meter-long ship burial mound in Suffolk. Dating to the early 7th century AD, the helmet belonged to a high-status Anglo-Saxon warrior, likely King Raedwald of East Anglia. Made of iron plates with tinned bronze decorative panels depicting heroic scenes, the helmet features a full face mask with eyebrows inlaid with silver wire and garnets, a nose-and-mouth guard shaped like a dragon or bird, and cheek flaps. It was found in fragments and painstakingly reconstructed by the British Museum, where it now resides as a centerpiece of the early medieval collection.",
    search_terms:
      "sutton hoo|helmet|anglo-saxon|burial|suffolk|raedwald|british museum|medieval|ship burial",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (crown to chin)", value: 0.318, si_unit: "m" },
      { dimension: "length", label: "Width (ear to ear)", value: 0.215, si_unit: "m" },
      { dimension: "length", label: "Depth (front to back)", value: 0.267, si_unit: "m" },
      { dimension: "mass", label: "Mass (reconstructed)", value: 2.5, si_unit: "kg" },
      { dimension: "length", label: "Iron plate thickness", value: 0.002, si_unit: "m" },
      { dimension: "time", label: "Age", value: 4.42e10, si_unit: "s", note: "Created circa 625 AD" },
      { dimension: "length", label: "Ship burial mound length", value: 27, si_unit: "m" },
    ],
  },

  {
    slug: "fingals-cave",
    name: "Fingal's Cave",
    subtitle: "A sea cave built from hexagonal basalt columns on a Scottish isle",
    category_id: "wonders",
    description:
      "Fingal's Cave is a sea cave on the uninhabited island of Staffa in the Inner Hebrides of Scotland. Formed entirely of hexagonal basalt columns created by the slow cooling of Paleocene lava flows roughly 60 million years ago, the cave is part of the same geological formation as the Giant's Causeway in Northern Ireland. The cave is approximately 72 meters deep with a ceiling about 20 meters above sea level. Its unusual acoustics, caused by ocean swells reverberating off the columnar walls, inspired Felix Mendelssohn to compose 'The Hebrides' overture in 1830 after visiting the cave. The Gaelic name, Uamh-Binn, means 'cave of melody.' Despite its remote location, it attracts tens of thousands of visitors each year during the summer boat season.",
    search_terms:
      "fingals cave|staffa|scotland|basalt columns|hebrides|mendelssohn|sea cave|geology|hexagonal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Depth into cliff", value: 72, si_unit: "m" },
      { dimension: "length", label: "Entrance height", value: 20, si_unit: "m" },
      { dimension: "length", label: "Entrance width", value: 13, si_unit: "m" },
      { dimension: "length", label: "Average column diameter", value: 0.6, si_unit: "m" },
      { dimension: "time", label: "Geological age", value: 1.89e15, si_unit: "s", note: "Formed roughly 60 million years ago" },
      { dimension: "length", label: "Staffa island length", value: 1200, si_unit: "m" },
    ],
  },

  {
    slug: "pamukkale-terraces",
    name: "Pamukkale Terraces",
    subtitle: "Cascading white travertine pools fed by thermal springs in Turkey",
    category_id: "wonders",
    description:
      "Pamukkale, meaning 'cotton castle' in Turkish, is a geological wonder in southwestern Turkey where mineral-rich thermal waters have deposited brilliant white travertine terraces over hundreds of thousands of years. The formation stretches approximately 2,700 meters in length, 600 meters in width, and rises about 160 meters above the valley floor. The thermal springs emerge at roughly 36 degrees Celsius and carry dissolved calcium carbonate that precipitates as the water cools, building up the terraces at a rate of a few millimeters per year. The ancient Greco-Roman city of Hierapolis was built directly above the terraces, and its ruins remain a UNESCO World Heritage Site alongside the natural formation.",
    search_terms:
      "pamukkale|cotton castle|turkey|travertine|thermal springs|hierapolis|denizli|calcium carbonate|terraces",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Formation length", value: 2700, si_unit: "m" },
      { dimension: "length", label: "Formation width", value: 600, si_unit: "m" },
      { dimension: "length", label: "Height above valley", value: 160, si_unit: "m" },
      { dimension: "area", label: "Total terrace area", value: 1.08e6, si_unit: "m^2" },
      { dimension: "temperature", label: "Spring water temperature", value: 309, si_unit: "K", note: "Approximately 36 degrees Celsius" },
      { dimension: "length", label: "Average pool depth", value: 0.3, si_unit: "m" },
    ],
  },

  {
    slug: "trans-alaska-pipeline",
    name: "Trans-Alaska Pipeline",
    subtitle: "An 800-mile oil artery crossing tundra, mountains, and permafrost",
    category_id: "infrastructure",
    description:
      "The Trans-Alaska Pipeline System (TAPS) stretches 1,288 kilometers from Prudhoe Bay on the Arctic coast to the port of Valdez on Prince William Sound. Completed in 1977 at a cost of roughly $8 billion (about $40 billion adjusted for inflation), the pipeline was one of the largest private construction projects in history. It crosses three mountain ranges, over 800 rivers and streams, and vast stretches of permafrost. About half of the pipeline is elevated on vertical support members with heat pipes to prevent the warm oil from melting the permafrost beneath. The pipe itself has an outer diameter of 1.22 meters (48 inches). At peak capacity, it moved roughly 2 million barrels per day, though throughput has declined significantly since the 1980s.",
    search_terms:
      "trans-alaska pipeline|TAPS|alaska|oil pipeline|prudhoe bay|valdez|permafrost|arctic|pipeline",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1.288e6, si_unit: "m" },
      { dimension: "length", label: "Pipe outer diameter", value: 1.22, si_unit: "m" },
      { dimension: "length", label: "Pipe wall thickness", value: 0.0127, si_unit: "m" },
      { dimension: "length", label: "Elevated section length", value: 676000, si_unit: "m" },
      { dimension: "length", label: "Highest elevation (Atigun Pass)", value: 1444, si_unit: "m" },
      { dimension: "time", label: "Construction duration", value: 9.46e7, si_unit: "s", note: "About 3 years, 1974 to 1977" },
    ],
  },

  {
    slug: "dubrovnik-city",
    name: "Dubrovnik",
    subtitle: "A fortified medieval port city on the Adriatic coast of Croatia",
    category_id: "cities",
    description:
      "Dubrovnik is a Croatian city on the Adriatic Sea whose medieval old town is enclosed by massive stone walls built between the 13th and 17th centuries. The walls stretch nearly 2 kilometers in total length and reach up to 25 meters in height, with towers spaced at regular intervals. Known historically as the Republic of Ragusa, Dubrovnik was a wealthy maritime republic that rivaled Venice for centuries. The old town covers about 14 hectares and is a UNESCO World Heritage Site. Heavily damaged during the Croatian War of Independence in 1991, the city underwent extensive restoration. Its limestone streets and terracotta rooftops have made it one of the most photographed cities in Europe, and it served as a filming location for the fictional city of King's Landing.",
    search_terms:
      "dubrovnik|croatia|adriatic|ragusa|city walls|old town|medieval|dalmatia|fortified city",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Old town area", value: 140000, si_unit: "m^2" },
      { dimension: "length", label: "City wall total length", value: 1940, si_unit: "m" },
      { dimension: "length", label: "Maximum wall height", value: 25, si_unit: "m" },
      { dimension: "length", label: "Wall thickness (land side)", value: 6, si_unit: "m" },
      { dimension: "length", label: "Stradun main street length", value: 300, si_unit: "m" },
      { dimension: "length", label: "Minceta Tower height", value: 31, si_unit: "m" },
    ],
  },

  {
    slug: "bruges-city",
    name: "Bruges",
    subtitle: "A canal-laced medieval trading hub preserved in Flemish stone",
    category_id: "cities",
    description:
      "Bruges is a medieval city in northwestern Belgium whose historic center is a UNESCO World Heritage Site. Once one of the wealthiest cities in Europe thanks to its textile trade and access to the sea, Bruges declined after its waterway silted up in the 15th century, which paradoxically preserved its medieval architecture. The city center covers about 4.3 square kilometers and is crisscrossed by canals spanning roughly 7 kilometers. The Belfry of Bruges rises 83 meters above the Markt square and contains a carillon of 47 bells. The city is connected to the North Sea by the Boudewijn Canal, and its population of roughly 120,000 makes it one of the best-preserved small medieval cities in Europe.",
    search_terms:
      "bruges|brugge|belgium|flemish|medieval city|canals|belfry|flanders|chocolate|lace",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Historic center area", value: 4.3e6, si_unit: "m^2" },
      { dimension: "length", label: "Canal network length", value: 7000, si_unit: "m" },
      { dimension: "length", label: "Belfry height", value: 83, si_unit: "m" },
      { dimension: "length", label: "Markt square length", value: 100, si_unit: "m" },
      { dimension: "length", label: "Boudewijn Canal length", value: 12000, si_unit: "m" },
      { dimension: "length", label: "Belfry staircase (366 steps)", value: 83, si_unit: "m", note: "366 steps to the top" },
    ],
  },

  {
    slug: "torres-del-paine",
    name: "Torres del Paine",
    subtitle: "Three granite towers rising from the Patagonian steppe",
    category_id: "mountains",
    description:
      "The Torres del Paine are a cluster of three distinctive granite peaks in the Torres del Paine National Park in Chilean Patagonia. The three towers, from south to north, are Torre Sur (2,850 m), Torre Central (2,800 m), and Torre Norte (2,600 m). They are the eroded remnants of a laccolith, a mass of igneous rock that intruded into older sedimentary layers roughly 12 million years ago. Glacial erosion during the ice ages carved the towers into their current dramatic form, with sheer faces rising over 1,000 meters above the surrounding terrain. The national park surrounding them covers about 2,420 square kilometers and is home to guanacos, pumas, and Andean condors. The W Trek, one of the most famous hiking routes in South America, passes directly beneath the towers.",
    search_terms:
      "torres del paine|patagonia|chile|granite towers|national park|hiking|w trek|patagonian andes",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Torre Sur elevation", value: 2850, si_unit: "m" },
      { dimension: "length", label: "Torre Central elevation", value: 2800, si_unit: "m" },
      { dimension: "length", label: "Torre Norte elevation", value: 2600, si_unit: "m" },
      { dimension: "length", label: "Sheer face height", value: 1000, si_unit: "m" },
      { dimension: "area", label: "National park area", value: 2.42e9, si_unit: "m^2" },
      { dimension: "time", label: "Geological age of laccolith", value: 3.78e14, si_unit: "s", note: "Formed roughly 12 million years ago" },
    ],
  },
];
