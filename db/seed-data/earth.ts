import type { ThingInput } from "../types";

export const categoriesData = [
  { id: "mountains", name: "Mountains", description: "The great peaks of the world, measured and compared." },
  { id: "volcanoes", name: "Volcanoes", description: "Fire-breathing geological features, from dormant giants to explosive legends." },
  { id: "water", name: "Water", description: "Oceans, lakes, rivers, and waterfalls that shape the planet." },
  { id: "landforms", name: "Landforms", description: "Deserts, canyons, caves, reefs, and other large-scale terrain features." },
];

export const thingsData: ThingInput[] = [
  // ───────────────────────────────────────────────
  // MOUNTAINS
  // ───────────────────────────────────────────────
  {
    slug: "mount-everest",
    name: "Mount Everest",
    subtitle: "The highest point on Earth's surface",
    category_id: "mountains",
    description:
      "Mount Everest sits on the border of Nepal and Tibet, topping out at 8,849 meters above sea level. Its summit is literally the closest point on Earth's surface to the edge of the atmosphere. The mountain gains about 4 millimeters per year thanks to ongoing tectonic uplift, so it's not done growing yet.",
    search_terms: "everest|sagarmatha|chomolungma|himalaya|tallest mountain|highest peak",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8849, si_unit: "m", note: "Above mean sea level, as measured in 2020 by China and Nepal" },
      { dimension: "mass", label: "Estimated mass", value: 357000000000, si_unit: "kg", note: "Rough geological estimate of the mountain above base elevation" },
      { dimension: "length", label: "Base circumference", value: 153000, si_unit: "m", note: "Approximate circumference at the base" },
      { dimension: "temperature", label: "Average summit temperature", value: 228, si_unit: "K", note: "Roughly -45 degrees C; can drop much lower in winter" },
      { dimension: "pressure", label: "Summit air pressure", value: 33700, si_unit: "Pa", note: "About one-third of sea-level pressure" },
      { dimension: "length", label: "Prominence", value: 8849, si_unit: "m", note: "Topographic prominence equals full height since it is the world's highest peak" },
      { dimension: "speed", label: "Summit wind speed (typical peak)", value: 67, si_unit: "m/s", note: "Jet-stream winds frequently exceed 150 mph at the summit" },
    ],
  },
  {
    slug: "k2",
    name: "K2",
    subtitle: "The Savage Mountain",
    category_id: "mountains",
    description:
      "K2 is the second-highest mountain on Earth and widely considered the most dangerous to climb. Sitting in the Karakoram range on the China-Pakistan border, it has a fatality rate of roughly one death for every four summits. Unlike Everest, there has never been a successful winter ascent without supplemental oxygen.",
    search_terms: "k2|karakoram|savage mountain|godwin austen|chhogori",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8611, si_unit: "m", note: "Second highest on Earth" },
      { dimension: "temperature", label: "Average summit temperature", value: 227, si_unit: "K", note: "Approximately -46 degrees C" },
      { dimension: "length", label: "Prominence", value: 4020, si_unit: "m" },
      { dimension: "length", label: "South face vertical drop", value: 3400, si_unit: "m", note: "One of the tallest mountain faces in the world" },
      { dimension: "pressure", label: "Summit air pressure", value: 33000, si_unit: "Pa", note: "Slightly lower than Everest due to latitude and atmospheric variations" },
      { dimension: "speed", label: "Typical summit wind speed", value: 56, si_unit: "m/s", note: "Ferocious winds contribute to K2's lethal reputation" },
    ],
  },
  {
    slug: "denali",
    name: "Denali",
    subtitle: "Tallest mountain from base to peak on land",
    category_id: "mountains",
    description:
      "Denali in Alaska stands 6,190 meters above sea level, but its real claim to fame is the sheer rise from base to summit -- about 5,500 meters of vertical gain, the largest of any mountain entirely on land. It's also the coldest major peak outside the polar regions, with temperatures that make Everest feel balmy.",
    search_terms: "denali|mckinley|alaska|tallest base to peak",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 6190, si_unit: "m", note: "Highest peak in North America" },
      { dimension: "length", label: "Prominence", value: 6144, si_unit: "m", note: "Third most prominent peak in the world" },
      { dimension: "length", label: "Base-to-peak height", value: 5500, si_unit: "m", note: "Greatest base-to-summit rise of any mountain on land" },
      { dimension: "temperature", label: "Average summit temperature", value: 237, si_unit: "K", note: "Approximately -36 degrees C; winter can plunge below -50 degrees C" },
      { dimension: "pressure", label: "Summit air pressure", value: 39500, si_unit: "Pa", note: "Effectively thinner atmosphere than elevation suggests due to high latitude" },
      { dimension: "length", label: "Wickersham Wall height", value: 4600, si_unit: "m", note: "One of the largest vertical mountain faces on Earth" },
    ],
  },
  {
    slug: "kilimanjaro",
    name: "Mount Kilimanjaro",
    subtitle: "Africa's highest peak and a freestanding volcanic giant",
    category_id: "mountains",
    description:
      "Kilimanjaro is a dormant stratovolcano in Tanzania and the highest freestanding mountain in the world. Its summit glaciers, once vast, have shrunk dramatically -- losing over 80% of their area since 1912. At nearly 5,895 meters, you can walk from tropical jungle to arctic ice in a single ascent.",
    search_terms: "kilimanjaro|uhuru peak|tanzania|africa highest|kibo",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Summit elevation (Uhuru Peak)", value: 5895, si_unit: "m", note: "Highest point in Africa" },
      { dimension: "area", label: "Summit glacier area", value: 1600000, si_unit: "m\u00B2", note: "As of recent surveys; was over 12 km squared in 1900" },
      { dimension: "length", label: "Base diameter", value: 50000, si_unit: "m", note: "Approximate diameter of the volcanic base" },
      { dimension: "length", label: "Base-to-peak rise", value: 4900, si_unit: "m", note: "Rises from the surrounding plateau at roughly 900 m elevation" },
      { dimension: "temperature", label: "Summit average temperature", value: 253, si_unit: "K", note: "About -20 degrees C; relatively mild for this altitude due to equatorial location" },
      { dimension: "length", label: "Crater diameter (Kibo)", value: 2400, si_unit: "m", note: "The main crater at the summit of Kibo cone" },
    ],
  },
  {
    slug: "mount-fuji",
    name: "Mount Fuji",
    subtitle: "Japan's iconic sacred peak",
    category_id: "mountains",
    description:
      "Mount Fuji is an active stratovolcano and the highest peak in Japan. Its near-perfect conical symmetry has made it one of the most recognizable mountains on Earth, inspiring centuries of art, poetry, and pilgrimages. It last erupted in 1707 and blanketed Tokyo -- then called Edo -- in ash.",
    search_terms: "fuji|fujisan|japan|sacred mountain|stratovolcano",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 3776, si_unit: "m", note: "Highest point in Japan" },
      { dimension: "length", label: "Base circumference", value: 126000, si_unit: "m", note: "About 126 km around the base" },
      { dimension: "length", label: "Summit crater diameter", value: 780, si_unit: "m", note: "Nearly circular crater at the top" },
      { dimension: "length", label: "Crater depth", value: 240, si_unit: "m", note: "Depth of the main summit crater" },
      { dimension: "temperature", label: "Average summit temperature", value: 255, si_unit: "K", note: "About -18 degrees C on average" },
      { dimension: "area", label: "Base area", value: 1200000000, si_unit: "m\u00B2", note: "Roughly 1200 square km at the base" },
    ],
  },
  {
    slug: "matterhorn",
    name: "Matterhorn",
    subtitle: "The iconic pyramid of the Alps",
    category_id: "mountains",
    description:
      "The Matterhorn straddles the Swiss-Italian border and is probably the most photographed mountain in Europe. Its four steep faces align almost perfectly with the cardinal directions, creating that unmistakable pyramidal silhouette. First climbed in 1865 in a famous ascent that ended in tragedy when four of the seven climbers fell to their deaths on the descent.",
    search_terms: "matterhorn|cervino|swiss alps|pyramid mountain|zermatt",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 4478, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 1042, si_unit: "m", note: "Relatively low prominence since it sits among other high Alpine peaks" },
      { dimension: "length", label: "North face height", value: 1200, si_unit: "m", note: "The famous north face, one of the great Alpine climbing challenges" },
      { dimension: "temperature", label: "Average summit temperature", value: 253, si_unit: "K", note: "About -20 degrees C" },
      { dimension: "speed", label: "Typical summit wind speed", value: 28, si_unit: "m/s", note: "High winds are common and a major hazard for climbers" },
      { dimension: "length", label: "Hornli Ridge length", value: 1200, si_unit: "m", note: "The most popular climbing route, vertical gain along the ridge" },
    ],
  },
  {
    slug: "mauna-kea",
    name: "Mauna Kea",
    subtitle: "Earth's tallest mountain measured from base to peak",
    category_id: "mountains",
    description:
      "Mauna Kea on Hawaii's Big Island rises just 4,207 meters above sea level, but measured from its base on the ocean floor, it towers over 10,000 meters -- making it taller than Everest by that metric. Its summit is one of the best astronomical observation sites on Earth, hosting some of the world's most powerful telescopes.",
    search_terms: "mauna kea|hawaii|tallest mountain|base to peak|observatory|big island",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total height (base to peak)", value: 10211, si_unit: "m", note: "Measured from the oceanic base; tallest mountain on Earth by this measure" },
      { dimension: "length", label: "Elevation above sea level", value: 4207, si_unit: "m" },
      { dimension: "length", label: "Depth of base below sea level", value: 6004, si_unit: "m", note: "The submarine portion of the mountain" },
      { dimension: "mass", label: "Estimated total mass", value: 3200000000000000, si_unit: "kg", note: "The sheer weight has depressed the ocean floor by about 6 km" },
      { dimension: "temperature", label: "Average summit temperature", value: 269, si_unit: "K", note: "About -4 degrees C; cold enough for permafrost and occasional snow" },
      { dimension: "length", label: "Base diameter on ocean floor", value: 120000, si_unit: "m", note: "Roughly 120 km across at the oceanic base" },
    ],
  },

  // ───────────────────────────────────────────────
  // VOLCANOES
  // ───────────────────────────────────────────────
  {
    slug: "mount-vesuvius",
    name: "Mount Vesuvius",
    subtitle: "The volcano that buried Pompeii",
    category_id: "volcanoes",
    description:
      "Vesuvius looms over the Bay of Naples and is one of the most dangerous volcanoes on Earth, with about three million people living in its shadow. Its catastrophic eruption in 79 AD buried the cities of Pompeii and Herculaneum under meters of ash and pumice, preserving them as time capsules. It has erupted more than 30 times since, most recently in 1944.",
    search_terms: "vesuvius|pompeii|naples|herculaneum|italy volcano",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Current summit elevation", value: 1281, si_unit: "m" },
      { dimension: "length", label: "Crater diameter", value: 600, si_unit: "m", note: "The main summit crater" },
      { dimension: "temperature", label: "Eruption temperature (magma)", value: 1373, si_unit: "K", note: "About 1100 degrees C" },
      { dimension: "length", label: "Crater depth", value: 300, si_unit: "m" },
      { dimension: "length", label: "79 AD ash column height", value: 33000, si_unit: "m", note: "The Plinian eruption column reached over 30 km" },
      { dimension: "energy", label: "79 AD eruption thermal energy", value: 1e18, si_unit: "J", note: "Estimated total thermal energy of the 79 AD eruption" },
    ],
  },
  {
    slug: "krakatoa",
    name: "Krakatoa",
    subtitle: "The eruption heard around the world",
    category_id: "volcanoes",
    description:
      "The 1883 eruption of Krakatoa in Indonesia was one of the most violent volcanic events in recorded history. The sound of the explosion was heard nearly 5,000 kilometers away in Australia, making it the loudest sound in modern history. The eruption destroyed two-thirds of the island and generated tsunamis up to 30 meters high.",
    search_terms: "krakatoa|krakatau|indonesia|1883 eruption|anak krakatau|loudest sound",
    featured: 1,
    measurements: [
      { dimension: "energy", label: "1883 eruption energy", value: 8.4e17, si_unit: "J", note: "Equivalent to roughly 200 megatons of TNT" },
      { dimension: "length", label: "Distance eruption sound traveled", value: 4800000, si_unit: "m", note: "Heard on Rodrigues Island near Mauritius, nearly 4800 km away" },
      { dimension: "length", label: "Original peak elevation", value: 813, si_unit: "m", note: "Before the 1883 eruption destroyed most of the island" },
      { dimension: "pressure", label: "Shockwave pressure at 160 km", value: 17000, si_unit: "Pa", note: "The atmospheric shockwave circled the globe multiple times" },
      { dimension: "length", label: "Tsunami height (max)", value: 30, si_unit: "m", note: "Tsunamis devastated coastal towns across the Sunda Strait" },
      { dimension: "length", label: "Ash column height", value: 36000, si_unit: "m", note: "Ash was ejected into the stratosphere, causing global cooling" },
      { dimension: "length", label: "Anak Krakatau current height", value: 157, si_unit: "m", note: "The child island that emerged in 1927 and continues growing" },
    ],
  },
  {
    slug: "olympus-mons",
    name: "Olympus Mons",
    subtitle: "The largest volcano in the solar system",
    category_id: "volcanoes",
    description:
      "Olympus Mons on Mars is so large that its base would cover most of France. At nearly 22 kilometers high, it dwarfs anything on Earth -- you could stack almost three Everests and still not reach the top. The volcano is a shield type built by thousands of fluid lava flows, and its slope is so gentle that standing on the edge, you couldn't see the summit due to the curvature of Mars.",
    search_terms: "olympus mons|mars volcano|largest volcano|solar system|tharsis",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 21900, si_unit: "m", note: "About 2.5 times the height of Everest" },
      { dimension: "length", label: "Base diameter", value: 600000, si_unit: "m", note: "Approximately 600 km across" },
      { dimension: "area", label: "Caldera area", value: 7.2e9, si_unit: "m\u00B2", note: "The summit caldera is about 80 km by 60 km" },
      { dimension: "volume", label: "Volume", value: 2.7e15, si_unit: "m\u00B3", note: "About 100 times the volume of Mauna Loa" },
      { dimension: "length", label: "Cliff height at edge", value: 8000, si_unit: "m", note: "Sheer escarpment around parts of the base" },
      { dimension: "area", label: "Base area", value: 2.83e11, si_unit: "m\u00B2", note: "Roughly the area of Italy" },
    ],
  },
  {
    slug: "yellowstone-caldera",
    name: "Yellowstone Caldera",
    subtitle: "A supervolcano hiding in plain sight",
    category_id: "volcanoes",
    description:
      "The Yellowstone Caldera is one of the largest active volcanic systems on Earth, so big it was only identified from satellite imagery. Its last supereruption about 640,000 years ago ejected over 1,000 cubic kilometers of material. Today it powers the park's famous geysers and hot springs, heated by a magma chamber that contains enough molten rock to fill the Grand Canyon more than 11 times.",
    search_terms: "yellowstone|supervolcano|caldera|geyser|wyoming|old faithful",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Caldera area", value: 4.5e9, si_unit: "m\u00B2", note: "Roughly 72 km by 55 km" },
      { dimension: "energy", label: "Last supereruption energy", value: 4.2e24, si_unit: "J", note: "The Lava Creek eruption 640,000 years ago" },
      { dimension: "volume", label: "Magma chamber volume (upper)", value: 10000e9, si_unit: "m\u00B3", note: "The upper magma reservoir holds roughly 10,000 cubic km; only a few percent is molten" },
      { dimension: "length", label: "Caldera length", value: 72000, si_unit: "m", note: "Long axis of the caldera" },
      { dimension: "length", label: "Caldera width", value: 55000, si_unit: "m", note: "Short axis" },
      { dimension: "temperature", label: "Magma chamber temperature", value: 1073, si_unit: "K", note: "About 800 degrees C in the upper chamber" },
      { dimension: "volume", label: "Last eruption ejecta volume", value: 1e12, si_unit: "m\u00B3", note: "Over 1,000 cubic km of material ejected in the Lava Creek eruption" },
    ],
  },
  {
    slug: "mount-st-helens",
    name: "Mount St. Helens",
    subtitle: "The eruption that reshaped a mountain in minutes",
    category_id: "volcanoes",
    description:
      "On May 18, 1980, Mount St. Helens in Washington state erupted with a lateral blast that flattened 600 square kilometers of forest in moments. The eruption blew 400 meters off the summit and triggered the largest landslide in recorded history. The mountain has been slowly rebuilding its dome ever since, a reminder that volcanoes are never truly done.",
    search_terms: "st helens|saint helens|washington|1980 eruption|lateral blast|cascade",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height before eruption", value: 2950, si_unit: "m" },
      { dimension: "length", label: "Height after eruption", value: 2549, si_unit: "m", note: "Lost about 400 m of summit elevation" },
      { dimension: "energy", label: "Eruption energy", value: 1.7e18, si_unit: "J", note: "Equivalent to about 400 megatons of TNT -- 7 times the 1883 Krakatoa figure by some estimates" },
      { dimension: "area", label: "Blast zone area", value: 600000000, si_unit: "m\u00B2", note: "600 square km of forest flattened by the lateral blast" },
      { dimension: "speed", label: "Lateral blast speed", value: 300, si_unit: "m/s", note: "The blast wave traveled at roughly the speed of sound" },
      { dimension: "volume", label: "Landslide volume", value: 2.8e9, si_unit: "m\u00B3", note: "Largest recorded landslide in history: 2.8 cubic km" },
      { dimension: "length", label: "Ash column height", value: 24400, si_unit: "m", note: "Ash rose to about 24 km in the first minutes" },
    ],
  },
  {
    slug: "mauna-loa",
    name: "Mauna Loa",
    subtitle: "Earth's largest active volcano by volume",
    category_id: "volcanoes",
    description:
      "Mauna Loa on Hawaii's Big Island is the largest active volcano on Earth, making up roughly half the island's land area. Its volume of about 75,000 cubic kilometers makes it so massive that it visibly depresses the ocean floor beneath it. It has erupted 33 times since 1843, most recently in 2022.",
    search_terms: "mauna loa|hawaii|largest volcano|shield volcano|big island",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 4169, si_unit: "m" },
      { dimension: "volume", label: "Total volume", value: 7.5e13, si_unit: "m\u00B3", note: "About 75,000 cubic km including the submarine portion" },
      { dimension: "area", label: "Base area", value: 5.271e9, si_unit: "m\u00B2", note: "About 5,271 square km" },
      { dimension: "length", label: "Caldera length (Mokuaweoweo)", value: 6000, si_unit: "m", note: "The summit caldera is roughly 6 km by 2.5 km" },
      { dimension: "length", label: "Total height from ocean floor", value: 9170, si_unit: "m", note: "Base on the sea floor to summit" },
      { dimension: "mass", label: "Estimated mass", value: 2.14e17, si_unit: "kg", note: "So heavy it has depressed the ocean crust by about 8 km" },
    ],
  },

  // ───────────────────────────────────────────────
  // WATER
  // ───────────────────────────────────────────────
  {
    slug: "pacific-ocean",
    name: "Pacific Ocean",
    subtitle: "Earth's largest and deepest ocean",
    category_id: "water",
    description:
      "The Pacific Ocean covers more area than all of Earth's land combined. It stretches from the Arctic to the Antarctic and contains more than half the planet's free water. The name means 'peaceful,' which is ironic given that it's ringed by the most seismically active zone on Earth -- the Ring of Fire.",
    search_terms: "pacific ocean|largest ocean|ring of fire|deepest ocean|mariana",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Surface area", value: 1.66e14, si_unit: "m\u00B2", note: "About 166 million square km -- larger than all land on Earth" },
      { dimension: "volume", label: "Total volume", value: 7.1e17, si_unit: "m\u00B3", note: "Over 710 million cubic km of water" },
      { dimension: "length", label: "Average depth", value: 4280, si_unit: "m" },
      { dimension: "length", label: "Maximum depth (Challenger Deep)", value: 10994, si_unit: "m", note: "Deepest point in any ocean" },
      { dimension: "length", label: "Width at equator", value: 19800000, si_unit: "m", note: "Nearly 20,000 km across at its widest" },
      { dimension: "mass", label: "Total water mass", value: 7.28e20, si_unit: "kg", note: "Roughly 728 billion billion kilograms" },
    ],
  },
  {
    slug: "lake-baikal",
    name: "Lake Baikal",
    subtitle: "The oldest and deepest lake on Earth",
    category_id: "water",
    description:
      "Lake Baikal in Siberia is roughly 25 million years old, making it the most ancient lake on the planet. It holds about 20% of the world's unfrozen surface freshwater -- more than all the North American Great Lakes combined. Its extreme depth and isolation have produced over 2,500 species found nowhere else, including the nerpa, the only exclusively freshwater seal.",
    search_terms: "baikal|siberia|deepest lake|oldest lake|russia|freshwater",
    featured: 1,
    measurements: [
      { dimension: "volume", label: "Water volume", value: 2.36e13, si_unit: "m\u00B3", note: "About 23,600 cubic km -- 20% of world's unfrozen surface freshwater" },
      { dimension: "length", label: "Maximum depth", value: 1642, si_unit: "m", note: "Deepest lake in the world" },
      { dimension: "length", label: "Length", value: 636000, si_unit: "m", note: "About 636 km long" },
      { dimension: "time", label: "Approximate age", value: 7.88e14, si_unit: "s", note: "About 25 million years old" },
      { dimension: "area", label: "Surface area", value: 3.15e10, si_unit: "m\u00B2", note: "About 31,500 square km" },
      { dimension: "length", label: "Maximum width", value: 79000, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 744, si_unit: "m" },
    ],
  },
  {
    slug: "mariana-trench",
    name: "Mariana Trench",
    subtitle: "The deepest place on Earth",
    category_id: "water",
    description:
      "The Mariana Trench plunges nearly 11 kilometers below the Pacific Ocean's surface. At its deepest point, Challenger Deep, the water pressure is over a thousand times atmospheric pressure -- enough to crush most submarines. Despite the crushing darkness and cold, life persists down there, including shrimp-like amphipods and xenophyophores.",
    search_terms: "mariana trench|challenger deep|deepest point|ocean trench|pacific",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Maximum depth (Challenger Deep)", value: 10994, si_unit: "m", note: "Deepest surveyed point on Earth" },
      { dimension: "length", label: "Trench length", value: 2550000, si_unit: "m", note: "About 2,550 km long" },
      { dimension: "pressure", label: "Pressure at bottom", value: 108600000, si_unit: "Pa", note: "About 1,086 atmospheres -- over 1,000 times surface pressure" },
      { dimension: "temperature", label: "Bottom water temperature", value: 274, si_unit: "K", note: "Just above freezing: 1-4 degrees C" },
      { dimension: "length", label: "Average width", value: 69000, si_unit: "m", note: "About 69 km average width" },
      { dimension: "length", label: "Depth of Sirena Deep", value: 10809, si_unit: "m", note: "Second deepest point in the trench" },
    ],
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    subtitle: "North America's most powerful waterfall",
    category_id: "water",
    description:
      "Niagara Falls straddles the US-Canada border and moves more water than any other waterfall in North America. About 2,800 cubic meters of water plunge over the falls every second during peak flow. The falls erode the underlying rock and have retreated about 11 kilometers upstream since they formed roughly 12,000 years ago.",
    search_terms: "niagara falls|horseshoe falls|waterfall|new york|ontario|canada",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (Horseshoe Falls)", value: 51, si_unit: "m", note: "About 167 feet" },
      { dimension: "length", label: "Width (Horseshoe Falls)", value: 1100, si_unit: "m", note: "The crest of the Canadian Horseshoe Falls" },
      { dimension: "volume", label: "Volume discharged per minute", value: 169920, si_unit: "m\u00B3", note: "About 2,832 m\u00B3/s peak flow \u00D7 60 seconds" },
      { dimension: "power", label: "Potential hydroelectric power", value: 4000000000, si_unit: "W", note: "About 4 GW; actual generation is shared between US and Canadian plants" },
      { dimension: "speed", label: "Water speed at base", value: 32, si_unit: "m/s", note: "Water reaches about 32 m/s when it hits the plunge pool" },
      { dimension: "length", label: "Retreat since formation", value: 11000, si_unit: "m", note: "About 11 km of erosional retreat over 12,000 years" },
    ],
  },
  {
    slug: "mississippi-river",
    name: "Mississippi River",
    subtitle: "North America's great central artery",
    category_id: "water",
    description:
      "The Mississippi drains about 40% of the contiguous United States, collecting water from 31 states and two Canadian provinces. Its discharge into the Gulf of Mexico is so massive it creates a visible plume of sediment stretching far out to sea. The river has shifted its course dramatically over geological time, and only an elaborate system of levees and spillways keeps it in its current channel.",
    search_terms: "mississippi river|mississippi|river|gulf of mexico|missouri river",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 3730000, si_unit: "m", note: "About 3,730 km from source to mouth" },
      { dimension: "volume", label: "Volume discharged per day", value: 1451520000, si_unit: "m\u00B3", note: "About 16,800 m\u00B3/s average discharge \u00D7 86,400 seconds per day" },
      { dimension: "area", label: "Drainage basin area", value: 2.98e12, si_unit: "m\u00B2", note: "About 2.98 million square km -- roughly 40% of the contiguous US" },
      { dimension: "length", label: "Maximum width", value: 17700, si_unit: "m", note: "At Lake Winnibigoshish in Minnesota, about 17.7 km wide" },
      { dimension: "length", label: "Maximum depth", value: 61, si_unit: "m", note: "Near Algiers Point in New Orleans" },
      { dimension: "mass", label: "Annual sediment load", value: 1.45e11, si_unit: "kg", note: "About 145 million metric tons of sediment per year" },
    ],
  },
  {
    slug: "lake-superior",
    name: "Lake Superior",
    subtitle: "Largest freshwater lake by surface area",
    category_id: "water",
    description:
      "Lake Superior is the largest of the North American Great Lakes and the largest freshwater lake by surface area in the world. It contains enough water to flood all of North and South America to a depth of about 30 centimeters. The lake is so large it generates its own weather patterns, and waves during storms can reach heights comparable to ocean swells.",
    search_terms: "lake superior|great lakes|largest lake|freshwater|michigan|ontario|minnesota|wisconsin",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 8.21e10, si_unit: "m\u00B2", note: "About 82,100 square km -- largest freshwater lake by area" },
      { dimension: "volume", label: "Water volume", value: 1.21e13, si_unit: "m\u00B3", note: "About 12,100 cubic km" },
      { dimension: "length", label: "Maximum depth", value: 406, si_unit: "m" },
      { dimension: "length", label: "Length", value: 560000, si_unit: "m", note: "About 560 km long" },
      { dimension: "length", label: "Maximum width", value: 257000, si_unit: "m", note: "About 257 km wide" },
      { dimension: "length", label: "Average depth", value: 149, si_unit: "m" },
      { dimension: "temperature", label: "Average surface temperature", value: 279, si_unit: "K", note: "About 6 degrees C; rarely exceeds 15 degrees C even in summer" },
    ],
  },

  // ───────────────────────────────────────────────
  // LANDFORMS
  // ───────────────────────────────────────────────
  {
    slug: "sahara-desert",
    name: "Sahara Desert",
    subtitle: "The world's largest hot desert",
    category_id: "landforms",
    description:
      "The Sahara stretches across most of North Africa and is roughly the size of the United States. Despite its reputation, only about 25% is sand dunes -- the rest is rocky plateau, gravel plains, and dry valleys. The Sahara wasn't always barren: just 5,000-10,000 years ago, it was a green savanna with lakes and rivers, thanks to shifts in Earth's orbital cycle.",
    search_terms: "sahara|desert|africa|largest desert|sand dunes|north africa",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total area", value: 9.2e12, si_unit: "m\u00B2", note: "About 9.2 million square km -- roughly the size of the US" },
      { dimension: "temperature", label: "Average temperature", value: 303, si_unit: "K", note: "About 30 degrees C average; extremes can exceed 330 K (57 degrees C)" },
      { dimension: "length", label: "Length (east-west)", value: 4800000, si_unit: "m", note: "Stretches about 4,800 km from the Atlantic to the Red Sea" },
      { dimension: "length", label: "Width (north-south)", value: 1800000, si_unit: "m", note: "About 1,800 km from the Mediterranean coast to the Sahel" },
      { dimension: "temperature", label: "Highest recorded temperature", value: 331, si_unit: "K", note: "58 degrees C recorded in Aziziya, Libya (though this record is disputed)" },
      { dimension: "length", label: "Tallest sand dune height", value: 180, si_unit: "m", note: "Some dunes in the Isaouane-n-Tifernine sand sea reach 180 m" },
    ],
  },
  {
    slug: "grand-canyon",
    name: "Grand Canyon",
    subtitle: "A mile-deep gash through two billion years of rock",
    category_id: "landforms",
    description:
      "The Grand Canyon in Arizona exposes nearly two billion years of Earth's geological history in its layered rock walls. The Colorado River carved it over roughly six million years, though some evidence suggests parts may be much older. Standing on the rim and looking down, you can see rocks from an era before complex life existed.",
    search_terms: "grand canyon|arizona|colorado river|canyon|geology|national park",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length", value: 446000, si_unit: "m", note: "About 446 km long" },
      { dimension: "length", label: "Maximum depth", value: 1829, si_unit: "m", note: "Over a mile deep at its deepest" },
      { dimension: "length", label: "Maximum width (rim to rim)", value: 29000, si_unit: "m", note: "Up to 29 km wide at some points" },
      { dimension: "time", label: "Approximate age of carving", value: 1.89e14, si_unit: "s", note: "About 5-6 million years; some sections may be older" },
      { dimension: "volume", label: "Estimated volume", value: 4.19e10, si_unit: "m\u00B3", note: "About 41.9 cubic km of rock removed by erosion" },
      { dimension: "time", label: "Age of oldest exposed rock", value: 5.68e16, si_unit: "s", note: "Vishnu Basement Rocks are about 1.8 billion years old" },
    ],
  },
  {
    slug: "amazon-rainforest",
    name: "Amazon Rainforest",
    subtitle: "The largest tropical rainforest on Earth",
    category_id: "landforms",
    description:
      "The Amazon Rainforest spans nine countries and contains about 10% of all species on Earth. It produces roughly 20% of the world's oxygen through photosynthesis and stores an estimated 150-200 billion tonnes of carbon in its biomass. The forest is so dense and vast that isolated indigenous groups still live within it who have never made contact with the outside world.",
    search_terms: "amazon rainforest|amazon|rainforest|brazil|jungle|south america|biodiversity",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total area", value: 5.5e12, si_unit: "m\u00B2", note: "About 5.5 million square km" },
      { dimension: "mass", label: "Estimated above-ground biomass", value: 1.86e11, si_unit: "kg", note: "About 186 billion tonnes of carbon stored in living vegetation; this is carbon mass alone" },
      { dimension: "volume", label: "River volume discharged per day", value: 18057600000, si_unit: "m\u00B3", note: "About 209,000 m\u00B3/s discharge \u00D7 86,400 s/day -- 20% of all river water reaching the ocean" },
      { dimension: "length", label: "East-west extent", value: 3300000, si_unit: "m", note: "About 3,300 km across" },
      { dimension: "temperature", label: "Average temperature", value: 300, si_unit: "K", note: "About 27 degrees C year-round" },
      { dimension: "length", label: "Canopy height (typical)", value: 45, si_unit: "m", note: "Emergent trees can reach 55 m or more" },
    ],
  },
  {
    slug: "mammoth-cave",
    name: "Mammoth Cave",
    subtitle: "The longest known cave system on Earth",
    category_id: "landforms",
    description:
      "Mammoth Cave in Kentucky has over 676 kilometers of surveyed passageways, making it the longest known cave system in the world by a huge margin -- more than twice the length of the second longest. New passages are still being discovered, so the true length keeps growing. The cave formed in limestone over the last 10 million years, carved by mildly acidic groundwater.",
    search_terms: "mammoth cave|kentucky|longest cave|cave system|limestone|national park",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total surveyed passage length", value: 676000, si_unit: "m", note: "Over 676 km and still growing with new discoveries" },
      { dimension: "length", label: "Maximum depth", value: 116, si_unit: "m", note: "Vertical extent from highest to lowest point" },
      { dimension: "length", label: "Longest single passage", value: 13000, si_unit: "m", note: "Some individual passages stretch over 13 km" },
      { dimension: "temperature", label: "Interior temperature", value: 287, si_unit: "K", note: "A constant 14 degrees C year-round deep in the cave" },
      { dimension: "time", label: "Approximate age", value: 3.15e14, si_unit: "s", note: "Primary formation began roughly 10 million years ago" },
      { dimension: "length", label: "Tallest passage height", value: 58, si_unit: "m", note: "Some chambers are impressively tall" },
    ],
  },
  {
    slug: "great-barrier-reef",
    name: "Great Barrier Reef",
    subtitle: "The largest living structure on Earth",
    category_id: "landforms",
    description:
      "The Great Barrier Reef off northeast Australia is the largest structure ever built by living organisms. It's visible from space and is composed of nearly 3,000 individual reef systems and hundreds of islands. Home to over 400 species of coral, 1,500 species of fish, and 4,000 species of mollusk, it is one of the most biodiverse ecosystems on the planet.",
    search_terms: "great barrier reef|coral reef|australia|reef|coral|queensland",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 2300000, si_unit: "m", note: "About 2,300 km along the Queensland coast" },
      { dimension: "area", label: "Total area", value: 3.448e11, si_unit: "m\u00B2", note: "About 344,800 square km" },
      { dimension: "length", label: "Maximum reef depth", value: 60, si_unit: "m", note: "Coral growth extends to about 60 m depth in clear water" },
      { dimension: "temperature", label: "Optimal water temperature", value: 299, si_unit: "K", note: "26 degrees C; bleaching risk increases above 302 K (29 degrees C)" },
      { dimension: "length", label: "Width (maximum)", value: 250000, si_unit: "m", note: "Up to 250 km wide in some sections" },
      { dimension: "time", label: "Age of current reef structure", value: 2.52e11, si_unit: "s", note: "Current structure began forming about 8,000 years ago after the last ice age" },
    ],
  },
  {
    slug: "antarctica",
    name: "Antarctica",
    subtitle: "Earth's frozen giant at the bottom of the world",
    category_id: "landforms",
    description:
      "Antarctica contains about 70% of all freshwater on Earth, locked in an ice sheet that averages over two kilometers thick. It is the coldest, driest, and windiest continent -- the interior receives less precipitation than the Sahara, making it technically a desert. If the ice sheet melted entirely, global sea levels would rise by about 58 meters.",
    search_terms: "antarctica|south pole|ice sheet|continent|frozen|coldest place",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total area", value: 1.42e13, si_unit: "m\u00B2", note: "About 14.2 million square km -- larger than Europe" },
      { dimension: "mass", label: "Ice sheet mass", value: 2.65e19, si_unit: "kg", note: "About 26.5 million gigatonnes of ice" },
      { dimension: "length", label: "Average ice thickness", value: 2160, si_unit: "m", note: "Over 2 km of ice on average; up to 4,776 m at the thickest point" },
      { dimension: "temperature", label: "Lowest recorded temperature", value: 184, si_unit: "K", note: "Minus 89.2 degrees C at Vostok Station on July 21, 1983" },
      { dimension: "temperature", label: "Average annual temperature", value: 218, si_unit: "K", note: "About minus 55 degrees C in the interior" },
      { dimension: "length", label: "Maximum ice thickness", value: 4776, si_unit: "m", note: "At Astrolabe Subglacial Basin in East Antarctica" },
      { dimension: "speed", label: "Record wind speed", value: 89, si_unit: "m/s", note: "About 320 km/h; katabatic winds make it the windiest continent" },
      { dimension: "volume", label: "Ice volume", value: 2.65e16, si_unit: "m\u00B3", note: "About 26.5 million cubic km of ice" },
    ],
  },
];
