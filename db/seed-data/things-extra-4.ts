// -- Extra things seed data (batch 4) ---------------------------------------
// Stars, Moons, Statues, Volcanoes, Aircraft, Insects, Mountains, Sports,
// Water, Conceptual -- filling sparse categories for better balance

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [];

export const thingsData: ThingInput[] = [
  // =========================================================================
  // STARS
  // =========================================================================

  {
    slug: "alpha-centauri-a",
    name: "Alpha Centauri A",
    subtitle: "The slightly bigger half of our nearest stellar neighbor",
    category_id: "stars",
    description:
      "Alpha Centauri A is the dominant star in the Alpha Centauri system, our closest stellar neighbor at roughly 4.37 light-years away. It is about 10% more massive and 50% more luminous than the Sun, making it a reassuringly sun-like star. If you could somehow drive there at highway speed, you would arrive in about 50 million years, so maybe pack a lunch.",
    search_terms:
      "alpha centauri|nearest star|rigil kentaurus|proxima|closest star system",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 2.188e30, si_unit: "kg", note: "About 1.1 solar masses" },
      { dimension: "length", label: "Diameter", value: 1.703e9, si_unit: "m", note: "About 1.22 solar diameters" },
      { dimension: "length", label: "Distance from Earth", value: 4.132e16, si_unit: "m", note: "About 4.37 light-years" },
      { dimension: "temperature", label: "Surface temperature", value: 5790, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 5.88e26, si_unit: "W", note: "About 1.52 solar luminosities" },
      { dimension: "time", label: "Orbital period (around B)", value: 2.52e9, si_unit: "s", note: "About 79.9 years" },
    ],
  },

  {
    slug: "polaris",
    name: "Polaris",
    subtitle: "The North Star that has guided travelers for millennia",
    category_id: "stars",
    description:
      "Polaris, the North Star, is a yellow supergiant that happens to sit almost directly above Earth's North Pole. It is actually a triple star system, with the primary star being a Cepheid variable roughly 2,500 times more luminous than the Sun. Sailors, hikers, and people who forgot to charge their phones have relied on it for navigation for thousands of years.",
    search_terms:
      "polaris|north star|pole star|alpha ursae minoris|navigation star",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 1.093e31, si_unit: "kg", note: "About 5.4 solar masses" },
      { dimension: "length", label: "Diameter", value: 5.2e10, si_unit: "m", note: "About 37.5 solar diameters" },
      { dimension: "length", label: "Distance from Earth", value: 4.07e18, si_unit: "m", note: "About 430 light-years" },
      { dimension: "temperature", label: "Surface temperature", value: 6015, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 9.56e29, si_unit: "W", note: "About 2,500 solar luminosities" },
      { dimension: "time", label: "Pulsation period", value: 342720, si_unit: "s", note: "About 3.97 days" },
    ],
  },

  {
    slug: "vega",
    name: "Vega",
    subtitle: "The brilliant blue-white jewel of the summer sky",
    category_id: "stars",
    description:
      "Vega is the fifth brightest star in the night sky and was once the North Star about 12,000 years ago. It spins so fast that it bulges noticeably at its equator, completing a full rotation in just 12.5 hours compared to the Sun's leisurely 25 days. Vega was also the first star other than the Sun to be photographed and the first to have its spectrum recorded.",
    search_terms:
      "vega|alpha lyrae|lyra|brightest star|summer triangle|blue star",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 4.175e30, si_unit: "kg", note: "About 2.1 solar masses" },
      { dimension: "length", label: "Equatorial diameter", value: 3.69e9, si_unit: "m", note: "About 2.65 solar diameters, bulges from fast spin" },
      { dimension: "length", label: "Distance from Earth", value: 2.37e17, si_unit: "m", note: "About 25 light-years" },
      { dimension: "temperature", label: "Surface temperature", value: 9602, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 1.53e28, si_unit: "W", note: "About 40 solar luminosities" },
      { dimension: "time", label: "Rotation period", value: 45000, si_unit: "s", note: "About 12.5 hours" },
    ],
  },

  {
    slug: "aldebaran",
    name: "Aldebaran",
    subtitle: "The angry red eye of Taurus the Bull",
    category_id: "stars",
    description:
      "Aldebaran is an orange giant star that forms the glaring eye of the constellation Taurus. Despite being only about 1.16 times the mass of the Sun, it has swollen to roughly 44 times the Sun's diameter as it exhausts its hydrogen fuel. It shines with a warm orange glow that has made it one of the most recognizable stars in the night sky for thousands of years.",
    search_terms:
      "aldebaran|taurus|bulls eye|alpha tauri|orange giant|red giant star",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 2.31e30, si_unit: "kg", note: "About 1.16 solar masses" },
      { dimension: "length", label: "Diameter", value: 6.12e10, si_unit: "m", note: "About 44 solar diameters" },
      { dimension: "length", label: "Distance from Earth", value: 6.22e17, si_unit: "m", note: "About 65 light-years" },
      { dimension: "temperature", label: "Surface temperature", value: 3910, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 2.0e29, si_unit: "W", note: "About 518 solar luminosities" },
      { dimension: "speed", label: "Radial velocity", value: 54260, si_unit: "m/s", note: "Moving toward us at 54.26 km/s" },
    ],
  },

  {
    slug: "canopus",
    name: "Canopus",
    subtitle: "The second brightest star in the night sky",
    category_id: "stars",
    description:
      "Canopus is a bright giant star in the constellation Carina and the second brightest star visible from Earth. It is roughly 10,000 times more luminous than the Sun, yet sits 310 light-years away, which gives you some idea of just how furiously it burns. Spacecraft including Voyager and Mars missions have used it as a reference point for navigation.",
    search_terms:
      "canopus|alpha carinae|carina|second brightest|navigation star|southern star",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 1.61e31, si_unit: "kg", note: "About 8.0 solar masses" },
      { dimension: "length", label: "Diameter", value: 1.0e11, si_unit: "m", note: "About 71 solar diameters" },
      { dimension: "length", label: "Distance from Earth", value: 2.93e18, si_unit: "m", note: "About 310 light-years" },
      { dimension: "temperature", label: "Surface temperature", value: 7400, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 3.83e30, si_unit: "W", note: "About 10,700 solar luminosities" },
    ],
  },

  {
    slug: "arcturus",
    name: "Arcturus",
    subtitle: "The brightest star in the northern celestial hemisphere",
    category_id: "stars",
    description:
      "Arcturus is a red giant in the constellation Bootes and the brightest star in the northern sky. It is about 25 times the diameter of the Sun but only slightly more massive, having puffed up as it aged. Arcturus is barreling through space at an unusual angle to most nearby stars, suggesting it may be an interloper from another part of the galaxy entirely.",
    search_terms:
      "arcturus|alpha bootis|bootes|brightest northern star|red giant|bear watcher",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 2.19e30, si_unit: "kg", note: "About 1.08 solar masses" },
      { dimension: "length", label: "Diameter", value: 3.54e10, si_unit: "m", note: "About 25.4 solar diameters" },
      { dimension: "length", label: "Distance from Earth", value: 3.41e17, si_unit: "m", note: "About 36.7 light-years" },
      { dimension: "temperature", label: "Surface temperature", value: 4286, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 6.7e28, si_unit: "W", note: "About 170 solar luminosities" },
      { dimension: "speed", label: "Space velocity", value: 122000, si_unit: "m/s", note: "122 km/s relative to the Sun" },
    ],
  },

  // =========================================================================
  // MOONS
  // =========================================================================

  {
    slug: "triton",
    name: "Triton",
    subtitle: "Neptune's largest moon that orbits the wrong way",
    category_id: "moons",
    description:
      "Triton is the largest moon of Neptune and the only large moon in the solar system with a retrograde orbit, meaning it orbits backwards relative to its planet's rotation. This strongly suggests Neptune captured it from the Kuiper Belt, which is basically cosmic shoplifting. Its surface temperature of about 38 K makes it one of the coldest known objects in the solar system.",
    search_terms:
      "triton|neptune moon|retrograde orbit|kuiper belt|coldest moon|captured moon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 2706800, si_unit: "m", note: "2,706.8 km" },
      { dimension: "mass", label: "Mass", value: 2.14e22, si_unit: "kg" },
      { dimension: "length", label: "Orbital radius", value: 3.548e8, si_unit: "m", note: "354,800 km from Neptune" },
      { dimension: "time", label: "Orbital period", value: 507773, si_unit: "s", note: "About 5.88 days (retrograde)" },
      { dimension: "temperature", label: "Surface temperature", value: 38, si_unit: "K", note: "One of the coldest surfaces in the solar system" },
      { dimension: "speed", label: "Orbital speed", value: 4390, si_unit: "m/s" },
    ],
  },

  {
    slug: "enceladus",
    name: "Enceladus",
    subtitle: "Saturn's tiny moon with geysers and a hidden ocean",
    category_id: "moons",
    description:
      "Enceladus is only 504 km across but punches far above its weight in scientific interest. The Cassini spacecraft discovered enormous plumes of water ice erupting from cracks near its south pole, hinting at a subsurface ocean beneath the icy crust. This makes it one of the most promising places to search for extraterrestrial life, assuming alien microbes enjoy extremely cold salt water.",
    search_terms:
      "enceladus|saturn moon|geysers|water plumes|subsurface ocean|cassini|ice moon",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 504200, si_unit: "m", note: "504.2 km" },
      { dimension: "mass", label: "Mass", value: 1.08e20, si_unit: "kg" },
      { dimension: "length", label: "Orbital radius", value: 2.38e8, si_unit: "m", note: "238,000 km from Saturn" },
      { dimension: "time", label: "Orbital period", value: 118386, si_unit: "s", note: "About 1.37 days" },
      { dimension: "temperature", label: "Surface temperature", value: 75, si_unit: "K", note: "Average surface" },
      { dimension: "temperature", label: "Geyser vent temperature", value: 197, si_unit: "K", note: "Warm spots near south pole vents" },
      { dimension: "speed", label: "Orbital speed", value: 12630, si_unit: "m/s" },
    ],
  },

  {
    slug: "callisto",
    name: "Callisto",
    subtitle: "Jupiter's most heavily cratered moon",
    category_id: "moons",
    description:
      "Callisto is the second largest moon of Jupiter and the third largest moon in the solar system. Its surface is the most heavily cratered of any body in the solar system, a battered landscape that has barely changed in 4 billion years. Unlike its siblings Io and Europa, Callisto is geologically dead, which honestly sounds like a relaxing way to spend eternity.",
    search_terms:
      "callisto|jupiter moon|galilean moon|cratered|most cratered|dead moon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 4820600, si_unit: "m", note: "4,820.6 km" },
      { dimension: "mass", label: "Mass", value: 1.076e23, si_unit: "kg" },
      { dimension: "length", label: "Orbital radius", value: 1.8827e9, si_unit: "m", note: "1,882,700 km from Jupiter" },
      { dimension: "time", label: "Orbital period", value: 1441930, si_unit: "s", note: "About 16.69 days" },
      { dimension: "temperature", label: "Surface temperature", value: 134, si_unit: "K", note: "Average" },
      { dimension: "speed", label: "Orbital speed", value: 8204, si_unit: "m/s" },
    ],
  },

  {
    slug: "deimos",
    name: "Deimos",
    subtitle: "The smaller and more distant of Mars's two potato-shaped moons",
    category_id: "moons",
    description:
      "Deimos is the smaller of Mars's two moons and is essentially a lumpy space potato about 12 km across. It orbits Mars every 30 hours, which is actually slower than Mars rotates, so from the Martian surface it rises in the east and sets in the west like a tiny, confused star. Scientists believe it is a captured asteroid, which is the celestial equivalent of adopting a stray.",
    search_terms:
      "deimos|mars moon|small moon|captured asteroid|phobos sibling|potato moon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Mean diameter", value: 12400, si_unit: "m", note: "Roughly 12.4 km, irregular shape" },
      { dimension: "mass", label: "Mass", value: 1.476e15, si_unit: "kg" },
      { dimension: "length", label: "Orbital radius", value: 2.346e7, si_unit: "m", note: "23,460 km from Mars" },
      { dimension: "time", label: "Orbital period", value: 109075, si_unit: "s", note: "About 30.3 hours" },
      { dimension: "speed", label: "Orbital speed", value: 1351, si_unit: "m/s" },
      { dimension: "temperature", label: "Surface temperature", value: 233, si_unit: "K", note: "Average, about -40 C" },
    ],
  },

  {
    slug: "charon",
    name: "Charon",
    subtitle: "Pluto's oversized companion in the Kuiper Belt",
    category_id: "moons",
    description:
      "Charon is so large relative to Pluto that the two actually orbit a point in space between them, making them more of a double dwarf planet than a planet-moon pair. At 1,212 km in diameter, Charon is over half the size of Pluto itself. The New Horizons flyby in 2015 revealed a surprisingly complex surface with canyons, mountains, and a dark reddish polar cap informally dubbed Mordor.",
    search_terms:
      "charon|pluto moon|double planet|kuiper belt|new horizons|mordor cap",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 1212000, si_unit: "m", note: "1,212 km" },
      { dimension: "mass", label: "Mass", value: 1.586e21, si_unit: "kg" },
      { dimension: "length", label: "Orbital radius", value: 1.9591e7, si_unit: "m", note: "19,591 km from Pluto" },
      { dimension: "time", label: "Orbital period", value: 551857, si_unit: "s", note: "About 6.39 days, tidally locked" },
      { dimension: "temperature", label: "Surface temperature", value: 53, si_unit: "K", note: "Extremely cold" },
      { dimension: "speed", label: "Orbital speed", value: 223, si_unit: "m/s" },
    ],
  },

  // =========================================================================
  // STATUES
  // =========================================================================

  {
    slug: "great-sphinx-of-giza",
    name: "Great Sphinx of Giza",
    subtitle: "The enigmatic limestone guardian of the Egyptian pyramids",
    category_id: "statues",
    description:
      "The Great Sphinx of Giza is the largest monolith statue in the world, carved from a single ridge of natural limestone around 2500 BCE. With the body of a lion and a human head, it has been staring inscrutably across the desert for over 4,500 years. Its nose went missing at some point in history, and despite popular myth, Napoleon's troops were almost certainly not responsible.",
    search_terms:
      "sphinx|great sphinx|giza|egypt|limestone|pharaoh|ancient statue|monolith",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 73.5, si_unit: "m", note: "Nose to tail" },
      { dimension: "length", label: "Height", value: 20.2, si_unit: "m", note: "Base to top of head" },
      { dimension: "length", label: "Width (shoulders)", value: 19.3, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 2.0e7, si_unit: "kg", note: "Roughly 20,000 tonnes of limestone" },
      { dimension: "time", label: "Age", value: 1.42e11, si_unit: "s", note: "About 4,500 years" },
      { dimension: "area", label: "Footprint area", value: 1417, si_unit: "m^2", note: "Approximate base area" },
    ],
  },

  {
    slug: "terracotta-warrior-single",
    name: "Terracotta Warriors (single)",
    subtitle: "One soldier from an army of 8,000 buried with China's first emperor",
    category_id: "statues",
    description:
      "Each Terracotta Warrior was individually crafted with unique facial features, hairstyles, and armor to guard Emperor Qin Shi Huang in the afterlife. Standing about 1.8 meters tall, they were assembled from separately molded parts and originally painted in vivid colors. Discovered by farmers digging a well in 1974, the full army of roughly 8,000 figures remains one of the most stunning archaeological finds in history.",
    search_terms:
      "terracotta warrior|terracotta army|qin shi huang|xian|china|clay soldier|tomb",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.8, si_unit: "m", note: "Varies from 1.7 to 2.0 m by rank" },
      { dimension: "mass", label: "Mass per figure", value: 150, si_unit: "kg", note: "Solid clay construction" },
      { dimension: "length", label: "Shoulder width", value: 0.55, si_unit: "m" },
      { dimension: "time", label: "Age", value: 7.0e10, si_unit: "s", note: "About 2,200 years" },
      { dimension: "length", label: "Base width", value: 0.45, si_unit: "m" },
    ],
  },

  {
    slug: "manneken-pis",
    name: "Manneken Pis",
    subtitle: "Brussels' famously tiny statue of a boy doing what boys do",
    category_id: "statues",
    description:
      "Manneken Pis is a small bronze fountain sculpture in Brussels depicting a cheerfully urinating boy. Standing just 61 cm tall, it has been a beloved Brussels landmark since 1619 and owns over 1,000 costumes donated by visiting dignitaries. The statue has been stolen several times throughout history, because apparently some people really want a tiny peeing boy in their collection.",
    search_terms:
      "manneken pis|brussels|belgium|fountain|peeing boy|bronze statue|small statue",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.61, si_unit: "m", note: "Just 61 cm tall" },
      { dimension: "mass", label: "Mass", value: 17, si_unit: "kg", note: "Solid bronze" },
      { dimension: "length", label: "Pedestal height", value: 1.07, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.28e10, si_unit: "s", note: "Current version from 1619, about 407 years" },
      { dimension: "volume", label: "Water flow rate per day", value: 1.0, si_unit: "m^3", note: "Approximate daily water throughput" },
    ],
  },

  {
    slug: "the-thinker-rodin",
    name: "The Thinker by Rodin",
    subtitle: "The world's most famous sculpture of someone having a really hard think",
    category_id: "statues",
    description:
      "Auguste Rodin's The Thinker was originally conceived in 1880 as part of a larger work called The Gates of Hell, depicting Dante contemplating the inferno below. The most famous full-size bronze cast stands about 1.86 meters tall and weighs roughly 680 kg. Over 25 authorized bronze casts exist worldwide, making it the most reproduced serious sculpture in history and the unofficial mascot of philosophy departments everywhere.",
    search_terms:
      "the thinker|rodin|bronze sculpture|dante|gates of hell|philosophy|thinking man",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.86, si_unit: "m", note: "Full-size bronze cast" },
      { dimension: "mass", label: "Mass", value: 680, si_unit: "kg", note: "Bronze cast" },
      { dimension: "length", label: "Base width", value: 0.98, si_unit: "m" },
      { dimension: "length", label: "Base depth", value: 1.4, si_unit: "m" },
      { dimension: "time", label: "Age of original", value: 4.6e9, si_unit: "s", note: "Conceived in 1880, about 146 years ago" },
    ],
  },

  {
    slug: "little-mermaid-copenhagen",
    name: "Little Mermaid Copenhagen",
    subtitle: "Denmark's most visited and most vandalized bronze icon",
    category_id: "statues",
    description:
      "The Little Mermaid statue in Copenhagen was unveiled in 1913, inspired by Hans Christian Andersen's fairy tale. At just 1.25 meters tall, she sits on a rock at the Langelinie promenade and has endured a truly astonishing amount of vandalism, including having her head sawn off twice. Despite all that, she remains Denmark's most famous landmark, proving that resilience is the real fairy tale.",
    search_terms:
      "little mermaid|copenhagen|denmark|hans christian andersen|bronze|langelinie",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.25, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 175, si_unit: "kg", note: "Bronze and granite" },
      { dimension: "length", label: "Rock base height", value: 0.8, si_unit: "m", note: "Granite boulder she sits on" },
      { dimension: "time", label: "Age", value: 3.56e9, si_unit: "s", note: "Unveiled in 1913, about 113 years" },
      { dimension: "length", label: "Width", value: 0.7, si_unit: "m" },
    ],
  },

  // =========================================================================
  // VOLCANOES
  // =========================================================================

  {
    slug: "mount-etna",
    name: "Mount Etna",
    subtitle: "Europe's tallest and most active volcano",
    category_id: "volcanoes",
    description:
      "Mount Etna on the east coast of Sicily is Europe's tallest active volcano and one of the most active in the world. Its summit height changes with each eruption, currently sitting around 3,357 meters. Etna has been erupting on and off for about 500,000 years, and the locals have adapted by growing excellent wine grapes in its mineral-rich volcanic soil.",
    search_terms:
      "mount etna|etna|sicily|italy|active volcano|europe tallest volcano|stratovolcano",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 3357, si_unit: "m" },
      { dimension: "length", label: "Base diameter", value: 40000, si_unit: "m", note: "About 40 km" },
      { dimension: "area", label: "Base area", value: 1.19e9, si_unit: "m^2", note: "About 1,190 km^2" },
      { dimension: "temperature", label: "Lava temperature", value: 1373, si_unit: "K", note: "About 1,100 C" },
      { dimension: "time", label: "Age", value: 1.58e13, si_unit: "s", note: "About 500,000 years" },
      { dimension: "volume", label: "Total volume", value: 3.5e11, si_unit: "m^3", note: "Estimated edifice volume" },
    ],
  },

  {
    slug: "mount-pinatubo",
    name: "Mount Pinatubo",
    subtitle: "The Philippine volcano whose 1991 eruption cooled the entire planet",
    category_id: "volcanoes",
    description:
      "Mount Pinatubo's cataclysmic 1991 eruption was the second largest of the 20th century, ejecting roughly 10 cubic kilometers of material and sending a sulfur dioxide cloud around the globe. The aerosol veil lowered global temperatures by about 0.5 degrees C for two years. Before the eruption, nobody paid it much attention, which is exactly the kind of thing a volcano would do before ruining everyone's day.",
    search_terms:
      "pinatubo|mount pinatubo|philippines|1991 eruption|volcanic winter|cooling|luzon",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Current summit elevation", value: 1486, si_unit: "m", note: "Reduced from 1,745 m by the 1991 eruption" },
      { dimension: "volume", label: "1991 eruption volume", value: 1.0e10, si_unit: "m^3", note: "About 10 km^3 of material ejected" },
      { dimension: "mass", label: "Sulfur dioxide released", value: 2.0e10, si_unit: "kg", note: "About 20 million tonnes of SO2" },
      { dimension: "length", label: "Eruption column height", value: 34000, si_unit: "m", note: "34 km into the stratosphere" },
      { dimension: "temperature", label: "Global cooling effect", value: 0.5, si_unit: "K", note: "Average global temperature drop" },
      { dimension: "energy", label: "Eruption energy", value: 2.5e18, si_unit: "J", note: "Roughly 600 times the Hiroshima bomb" },
    ],
  },

  {
    slug: "kilauea",
    name: "Kilauea",
    subtitle: "Hawaii's relentlessly active shield volcano",
    category_id: "volcanoes",
    description:
      "Kilauea on Hawaii's Big Island is one of the most active volcanoes on Earth, erupting almost continuously from 1983 to 2018. Rather than explosive eruptions, it typically produces rivers of basaltic lava that flow slowly enough that you could outrun them on foot. The 2018 eruption was more dramatic, destroying over 700 homes and adding about 3.5 square kilometers of new land to the island.",
    search_terms:
      "kilauea|hawaii|shield volcano|lava flow|big island|active volcano|hotspot",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 1247, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 1.43e9, si_unit: "m^2", note: "About 1,430 km^2" },
      { dimension: "temperature", label: "Lava temperature", value: 1443, si_unit: "K", note: "About 1,170 C for basaltic lava" },
      { dimension: "volume", label: "2018 eruption lava volume", value: 8.0e8, si_unit: "m^3", note: "About 0.8 km^3" },
      { dimension: "time", label: "1983-2018 eruption duration", value: 1.1e9, si_unit: "s", note: "About 35 years of continuous eruption" },
      { dimension: "speed", label: "Typical lava flow speed", value: 0.03, si_unit: "m/s", note: "About 100 m/hour for pahoehoe flows" },
    ],
  },

  {
    slug: "mount-tambora",
    name: "Mount Tambora",
    subtitle: "The volcano that erased summer from 1816",
    category_id: "volcanoes",
    description:
      "Mount Tambora's 1815 eruption on the Indonesian island of Sumbawa was the most powerful volcanic eruption in recorded history, rated VEI-7. It ejected roughly 160 cubic kilometers of material and killed an estimated 71,000 people. The ash and sulfur cloud caused the 'Year Without a Summer' in 1816, which at least inspired Mary Shelley to write Frankenstein while stuck indoors.",
    search_terms:
      "tambora|mount tambora|1815 eruption|year without summer|indonesia|sumbawa|vei 7",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Current summit elevation", value: 2850, si_unit: "m", note: "Reduced from about 4,300 m pre-eruption" },
      { dimension: "volume", label: "1815 eruption volume", value: 1.6e11, si_unit: "m^3", note: "About 160 km^3 of material ejected" },
      { dimension: "energy", label: "Eruption energy", value: 3.3e19, si_unit: "J", note: "About 4 times the 1883 Krakatoa eruption" },
      { dimension: "length", label: "Caldera diameter", value: 6000, si_unit: "m", note: "6 km wide caldera created by eruption" },
      { dimension: "length", label: "Eruption column height", value: 43000, si_unit: "m", note: "43 km into the atmosphere" },
      { dimension: "temperature", label: "Global cooling effect", value: 0.7, si_unit: "K", note: "Average Northern Hemisphere cooling in 1816" },
    ],
  },

  {
    slug: "cotopaxi",
    name: "Cotopaxi",
    subtitle: "One of the world's highest active volcanoes, topped with a glacier",
    category_id: "volcanoes",
    description:
      "Cotopaxi in Ecuador is one of the highest active volcanoes in the world, rising to 5,897 meters with a nearly perfect cone shape capped by a glacier. The combination of ice and volcanic heat creates dangerous lahars (volcanic mudflows) during eruptions. It has erupted more than 50 times since 1738, making it a stunningly beautiful place that periodically tries to destroy everything around it.",
    search_terms:
      "cotopaxi|ecuador|andes volcano|glacier volcano|stratovolcano|lahar|south america volcano",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 5897, si_unit: "m" },
      { dimension: "length", label: "Base diameter", value: 23000, si_unit: "m", note: "About 23 km" },
      { dimension: "area", label: "Glacier area", value: 1.42e7, si_unit: "m^2", note: "About 14.2 km^2 of glacial ice" },
      { dimension: "length", label: "Crater diameter", value: 800, si_unit: "m" },
      { dimension: "length", label: "Crater depth", value: 334, si_unit: "m" },
      { dimension: "temperature", label: "Fumarole temperature", value: 573, si_unit: "K", note: "About 300 C at summit vents" },
    ],
  },

  // =========================================================================
  // AIRCRAFT
  // =========================================================================

  {
    slug: "b-2-spirit-stealth-bomber",
    name: "B-2 Spirit Stealth Bomber",
    subtitle: "A $2 billion flying wing that radar cannot see",
    category_id: "aircraft",
    description:
      "The B-2 Spirit is a strategic stealth bomber with a distinctive flying wing design that gives it a radar cross-section roughly the size of a large bird. Each aircraft cost about $2 billion, making it literally worth its weight in gold many times over. Only 21 were ever built, and they can fly over 11,000 km without refueling, delivering ordnance anywhere on Earth from their home base in Missouri.",
    search_terms:
      "b-2|b2|spirit|stealth bomber|flying wing|northrop grumman|invisible|bomber",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 52.4, si_unit: "m" },
      { dimension: "length", label: "Overall length", value: 21.0, si_unit: "m" },
      { dimension: "mass", label: "Maximum takeoff mass", value: 170600, si_unit: "kg" },
      { dimension: "speed", label: "Maximum speed", value: 272, si_unit: "m/s", note: "About 980 km/h, high subsonic" },
      { dimension: "length", label: "Range", value: 1.1e7, si_unit: "m", note: "11,100 km unrefueled" },
      { dimension: "length", label: "Service ceiling", value: 15240, si_unit: "m", note: "50,000 feet" },
      { dimension: "mass", label: "Payload capacity", value: 18144, si_unit: "kg", note: "40,000 lbs of ordnance" },
    ],
  },

  {
    slug: "hughes-h-4-spruce-goose",
    name: "Spruce Goose (Hughes H-4)",
    subtitle: "The largest flying boat ever built, which flew exactly once",
    category_id: "aircraft",
    description:
      "The Hughes H-4 Hercules, better known as the Spruce Goose, has the largest wingspan of any aircraft that has ever flown. Built almost entirely of birch wood due to wartime material restrictions, it was designed by Howard Hughes to transport troops across the Atlantic. It flew exactly once on November 2, 1947, reaching an altitude of 21 meters for about a mile, which Hughes considered a roaring success.",
    search_terms:
      "spruce goose|hughes h-4|hercules|howard hughes|flying boat|wooden airplane|largest wingspan",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 97.5, si_unit: "m", note: "Largest wingspan of any aircraft ever flown" },
      { dimension: "length", label: "Overall length", value: 66.6, si_unit: "m" },
      { dimension: "length", label: "Height", value: 24.2, si_unit: "m" },
      { dimension: "mass", label: "Maximum takeoff mass", value: 180000, si_unit: "kg" },
      { dimension: "speed", label: "Speed during flight", value: 63, si_unit: "m/s", note: "About 226 km/h during its single flight" },
      { dimension: "length", label: "Maximum altitude achieved", value: 21, si_unit: "m", note: "70 feet, during its only flight" },
      { dimension: "power", label: "Total engine power", value: 1.79e7, si_unit: "W", note: "Eight 3,000 HP Pratt & Whitney engines" },
    ],
  },

  {
    slug: "supermarine-spitfire",
    name: "Spitfire",
    subtitle: "The elegant fighter that helped win the Battle of Britain",
    category_id: "aircraft",
    description:
      "The Supermarine Spitfire is perhaps the most iconic fighter aircraft ever built, with its distinctive elliptical wings and Merlin engine growl. Over 20,000 were produced during World War II, and they played a crucial role in the Battle of Britain. Pilots loved it for its responsiveness and grace, and it remains the aircraft most likely to make a grown aviation enthusiast weep at an airshow.",
    search_terms:
      "spitfire|supermarine|battle of britain|ww2 fighter|merlin engine|raf|elliptical wing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 11.23, si_unit: "m" },
      { dimension: "length", label: "Overall length", value: 9.12, si_unit: "m" },
      { dimension: "mass", label: "Loaded mass", value: 3039, si_unit: "kg" },
      { dimension: "speed", label: "Maximum speed", value: 182, si_unit: "m/s", note: "About 656 km/h for Mk XIV variant" },
      { dimension: "length", label: "Service ceiling", value: 11280, si_unit: "m", note: "37,000 feet" },
      { dimension: "power", label: "Engine power", value: 1.12e6, si_unit: "W", note: "1,500 HP Rolls-Royce Griffon in later marks" },
      { dimension: "length", label: "Combat range", value: 756000, si_unit: "m", note: "756 km" },
    ],
  },

  {
    slug: "f-22-raptor",
    name: "F-22 Raptor",
    subtitle: "The air superiority fighter that redefined stealth and agility",
    category_id: "aircraft",
    description:
      "The F-22 Raptor is widely considered the most capable air superiority fighter in the world, combining stealth, supercruise, and extreme maneuverability. It can fly at supersonic speeds without afterburner, a trick called supercruise that most fighters cannot manage. Only 195 were built before production ended, each costing roughly $150 million, making them expensive enough that the US banned their export to any other country.",
    search_terms:
      "f-22|f22|raptor|stealth fighter|lockheed martin|air superiority|supercruise",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 13.56, si_unit: "m" },
      { dimension: "length", label: "Overall length", value: 18.92, si_unit: "m" },
      { dimension: "mass", label: "Maximum takeoff mass", value: 38000, si_unit: "kg" },
      { dimension: "speed", label: "Maximum speed", value: 680, si_unit: "m/s", note: "Mach 2.25 with afterburner" },
      { dimension: "speed", label: "Supercruise speed", value: 510, si_unit: "m/s", note: "Mach 1.82 without afterburner" },
      { dimension: "length", label: "Service ceiling", value: 19812, si_unit: "m", note: "65,000 feet" },
      { dimension: "power", label: "Total thrust power", value: 2.06e8, si_unit: "W", note: "Two F119 engines with thrust vectoring" },
    ],
  },

  {
    slug: "hot-air-balloon",
    name: "Hot Air Balloon",
    subtitle: "The oldest form of human flight, powered by warm air and optimism",
    category_id: "aircraft",
    description:
      "A standard hot air balloon carries passengers in a wicker basket suspended beneath an envelope of heated air. The Montgolfier brothers launched the first crewed flight in 1783, making it the oldest successful human flight technology. A typical recreational balloon holds about 2,800 cubic meters of air heated to around 100 degrees C above ambient temperature. The entire contraption is at the mercy of the wind, which is either romantic or terrifying depending on your temperament.",
    search_terms:
      "hot air balloon|balloon|montgolfier|flight|basket|envelope|buoyancy|oldest aircraft",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Envelope height", value: 25, si_unit: "m", note: "Typical recreational balloon" },
      { dimension: "length", label: "Envelope diameter", value: 18, si_unit: "m" },
      { dimension: "volume", label: "Envelope volume", value: 2800, si_unit: "m^3" },
      { dimension: "mass", label: "Total mass (loaded)", value: 550, si_unit: "kg", note: "Envelope, basket, burner, fuel, and passengers" },
      { dimension: "temperature", label: "Air temperature inside", value: 373, si_unit: "K", note: "About 100 C, or roughly 65 C above ambient" },
      { dimension: "speed", label: "Typical ascent rate", value: 3, si_unit: "m/s", note: "About 200 m per minute" },
      { dimension: "length", label: "Typical flight altitude", value: 600, si_unit: "m", note: "Recreational flights stay below 1,000 m" },
    ],
  },

  // =========================================================================
  // INSECTS
  // =========================================================================

  {
    slug: "firefly",
    name: "Firefly",
    subtitle: "A beetle that makes its own light to find a date",
    category_id: "insects",
    description:
      "Fireflies are actually beetles, not flies, and they produce light through a chemical reaction in their abdomen called bioluminescence. Each species has a unique flash pattern used to attract mates, essentially running a tiny nightclub in a meadow. Their light-producing process is remarkably efficient, converting nearly 100% of energy into light with almost no heat, which puts every light bulb ever made to shame.",
    search_terms:
      "firefly|lightning bug|bioluminescence|glowing insect|beetle|lampyridae",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.015, si_unit: "m", note: "About 10-20 mm depending on species" },
      { dimension: "mass", label: "Body mass", value: 0.00002, si_unit: "kg", note: "About 20 mg" },
      { dimension: "length", label: "Wingspan", value: 0.025, si_unit: "m" },
      { dimension: "speed", label: "Flight speed", value: 0.5, si_unit: "m/s" },
      { dimension: "frequency", label: "Flash frequency", value: 0.5, si_unit: "Hz", note: "About one flash every 2 seconds, varies by species" },
      { dimension: "power", label: "Bioluminescent power", value: 0.0001, si_unit: "W", note: "Roughly 0.1 milliwatt, nearly 100% efficient" },
    ],
  },

  {
    slug: "atlas-moth",
    name: "Atlas Moth",
    subtitle: "The world's largest moth with wings like stained glass",
    category_id: "insects",
    description:
      "The Atlas moth of Southeast Asia has the largest wing area of any insect, with a total span reaching 30 cm tip to tip. Its wings feature translucent triangular patches that some researchers believe mimic snake heads to deter predators. Adults have no functional mouths and cannot eat, so they survive on fat reserves for only one to two weeks. Their entire adult life is a race to reproduce before they starve.",
    search_terms:
      "atlas moth|largest moth|attacus atlas|wing area|southeast asia|giant moth|silk moth",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 0.30, si_unit: "m", note: "Up to 30 cm" },
      { dimension: "area", label: "Wing area", value: 0.04, si_unit: "m^2", note: "About 400 cm^2, largest of any insect" },
      { dimension: "mass", label: "Body mass", value: 0.012, si_unit: "kg", note: "About 12 grams" },
      { dimension: "length", label: "Body length", value: 0.06, si_unit: "m" },
      { dimension: "time", label: "Adult lifespan", value: 864000, si_unit: "s", note: "About 1-2 weeks, they cannot eat" },
    ],
  },

  {
    slug: "dung-beetle",
    name: "Dung Beetle",
    subtitle: "The strongest animal on Earth relative to its body weight",
    category_id: "insects",
    description:
      "Dung beetles are nature's sanitation workers, rolling balls of animal dung across the landscape to bury and eat. The horned dung beetle (Onthophagus taurus) can pull 1,141 times its own body weight, making it the strongest animal on Earth relative to size. Some species navigate by the Milky Way, making them the only known insects to use the stars for orientation. They recycle an astonishing amount of waste and are genuinely essential to healthy ecosystems.",
    search_terms:
      "dung beetle|scarab|strongest insect|onthophagus|roller|dung ball|scarabaeidae",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.025, si_unit: "m", note: "About 10-30 mm depending on species" },
      { dimension: "mass", label: "Body mass", value: 0.003, si_unit: "kg", note: "About 3 grams" },
      { dimension: "force", label: "Maximum pulling force", value: 33.5, si_unit: "N", note: "1,141 times body weight for O. taurus" },
      { dimension: "speed", label: "Rolling speed", value: 0.08, si_unit: "m/s", note: "When rolling a dung ball" },
      { dimension: "mass", label: "Dung ball mass", value: 0.05, si_unit: "kg", note: "Typical ball, up to 10x body mass" },
      { dimension: "length", label: "Dung ball diameter", value: 0.04, si_unit: "m" },
    ],
  },

  {
    slug: "flea",
    name: "Flea",
    subtitle: "A tiny parasite with the greatest vertical leap in nature",
    category_id: "insects",
    description:
      "Fleas can jump up to 150 times their own body length, the equivalent of a human leaping over a 45-story building. They achieve this by storing energy in a pad of resilin, a nearly perfect elastic protein, then releasing it all at once to catapult themselves at accelerations exceeding 100 g. Fleas have plagued mammals for at least 50 million years and are so well adapted to their parasitic lifestyle that they are basically impossible to eradicate completely.",
    search_terms:
      "flea|jumping insect|parasite|siphonaptera|resilin|blood sucker|pest",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.003, si_unit: "m", note: "About 1.5-3.3 mm" },
      { dimension: "mass", label: "Body mass", value: 0.0000008, si_unit: "kg", note: "Less than 1 mg" },
      { dimension: "length", label: "Maximum jump height", value: 0.33, si_unit: "m", note: "Up to 150 times body length vertically" },
      { dimension: "length", label: "Maximum jump distance", value: 0.49, si_unit: "m", note: "Horizontal leap" },
      { dimension: "speed", label: "Jump launch speed", value: 1.9, si_unit: "m/s" },
      { dimension: "time", label: "Lifespan", value: 7.78e6, si_unit: "s", note: "About 60-90 days" },
    ],
  },

  {
    slug: "cockroach",
    name: "Cockroach",
    subtitle: "The ultimate survivor that has outlasted the dinosaurs",
    category_id: "insects",
    description:
      "Cockroaches have been around for roughly 300 million years, making them older than dinosaurs by a comfortable margin. The common American cockroach can survive a week without its head, hold its breath for 40 minutes, and sprint at 1.5 meters per second, which is the insect equivalent of about 330 km/h scaled to human size. They can eat almost anything including glue, soap, and other cockroaches, which is both impressive and deeply unpleasant.",
    search_terms:
      "cockroach|roach|blattodea|periplaneta|survivor|pest|indestructible insect",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.04, si_unit: "m", note: "American cockroach, about 35-40 mm" },
      { dimension: "mass", label: "Body mass", value: 0.001, si_unit: "kg", note: "About 1 gram" },
      { dimension: "speed", label: "Running speed", value: 1.5, si_unit: "m/s", note: "About 5.4 km/h" },
      { dimension: "time", label: "Survival without head", value: 604800, si_unit: "s", note: "About one week" },
      { dimension: "time", label: "Breath-holding time", value: 2400, si_unit: "s", note: "Up to 40 minutes" },
      { dimension: "time", label: "Species age", value: 9.46e15, si_unit: "s", note: "About 300 million years" },
      { dimension: "force", label: "Compression survival force", value: 9, si_unit: "N", note: "Can survive 900 times its body weight in compression" },
    ],
  },

  // =========================================================================
  // MOUNTAINS
  // =========================================================================

  {
    slug: "mont-blanc",
    name: "Mont Blanc",
    subtitle: "The highest peak in the Alps and Western Europe",
    category_id: "mountains",
    description:
      "Mont Blanc stands at 4,808 meters on the border of France and Italy, making it the tallest mountain in the Alps and Western Europe. About 20,000 people attempt to summit it each year, making it one of the most climbed high-altitude peaks in the world. The 11.6 km Mont Blanc Tunnel runs straight through its base, connecting France to Italy for people who prefer to go through mountains rather than over them.",
    search_terms:
      "mont blanc|alps|france|italy|highest alps|western europe|chamonix|alpine",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 4808, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 4696, si_unit: "m" },
      { dimension: "length", label: "Mont Blanc Tunnel length", value: 11611, si_unit: "m" },
      { dimension: "area", label: "Glacial coverage", value: 1.0e8, si_unit: "m^2", note: "About 100 km^2 of glaciers" },
      { dimension: "temperature", label: "Summit temperature (average)", value: 247, si_unit: "K", note: "About -26 C annual average" },
    ],
  },

  {
    slug: "aconcagua",
    name: "Aconcagua",
    subtitle: "The highest peak in the Americas and the Southern Hemisphere",
    category_id: "mountains",
    description:
      "Aconcagua in Argentina's Andes mountains stands at 6,961 meters, making it the tallest mountain outside of Asia. Despite its extreme height, it is technically one of the easier very high peaks to climb because it does not require technical mountaineering on its normal route. That said, 'easier' at nearly 7,000 meters still means altitude sickness, brutal cold, and winds that can flatten a tent.",
    search_terms:
      "aconcagua|andes|argentina|highest americas|south america|seven summits|mendoza",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 6961, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 6961, si_unit: "m", note: "Highest peak in its landmass" },
      { dimension: "temperature", label: "Summit temperature (average)", value: 243, si_unit: "K", note: "About -30 C" },
      { dimension: "speed", label: "Typical summit wind speed", value: 28, si_unit: "m/s", note: "About 100 km/h" },
      { dimension: "length", label: "Normal route distance", value: 38000, si_unit: "m", note: "38 km round trip from base camp" },
      { dimension: "time", label: "Typical climb duration", value: 1.21e6, si_unit: "s", note: "About 14 days for acclimatization and summit" },
    ],
  },

  {
    slug: "elbrus",
    name: "Elbrus",
    subtitle: "Europe's highest peak, a dormant volcano in the Caucasus",
    category_id: "mountains",
    description:
      "Mount Elbrus in southern Russia is a dormant stratovolcano with twin summits, the western one reaching 5,642 meters. Whether it counts as Europe's highest peak depends on where you draw the Europe-Asia boundary, but most mountaineering lists include it. A cable car system goes partway up, making the early stages of the ascent surprisingly civilized before the weather tries to kill you higher up.",
    search_terms:
      "elbrus|mount elbrus|caucasus|russia|europe highest|dormant volcano|seven summits",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation (west)", value: 5642, si_unit: "m" },
      { dimension: "length", label: "Summit elevation (east)", value: 5621, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 4741, si_unit: "m" },
      { dimension: "area", label: "Glacier area", value: 1.225e8, si_unit: "m^2", note: "About 122.5 km^2 of glaciers" },
      { dimension: "temperature", label: "Summit temperature (winter)", value: 213, si_unit: "K", note: "Can drop to -60 C" },
      { dimension: "time", label: "Last eruption", value: 6.31e10, si_unit: "s", note: "About 2,000 years ago" },
    ],
  },

  {
    slug: "kangchenjunga",
    name: "Kangchenjunga",
    subtitle: "The third highest mountain in the world, revered as sacred",
    category_id: "mountains",
    description:
      "Kangchenjunga straddles the border of Nepal and India at 8,586 meters, making it the third highest mountain on Earth. Out of respect for local Sikkimese beliefs that consider the summit sacred, climbers traditionally stop a few meters short of the very top. It was long believed to be the tallest mountain in the world before surveys established Everest's superiority. The name means 'Five Treasures of the Great Snow,' referring to its five peaks.",
    search_terms:
      "kangchenjunga|kanchenjunga|third highest|nepal|india|sikkim|himalaya|eight thousander",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Summit elevation", value: 8586, si_unit: "m" },
      { dimension: "length", label: "Prominence", value: 3922, si_unit: "m" },
      { dimension: "temperature", label: "Summit temperature (winter)", value: 228, si_unit: "K", note: "About -45 C" },
      { dimension: "speed", label: "Summit wind speed (typical)", value: 45, si_unit: "m/s", note: "About 160 km/h" },
      { dimension: "area", label: "Glacier area", value: 5.8e8, si_unit: "m^2", note: "About 580 km^2 of glaciers" },
      { dimension: "length", label: "Base to summit rise", value: 3500, si_unit: "m", note: "Vertical rise from base camp" },
    ],
  },

  // =========================================================================
  // SPORTS
  // =========================================================================

  {
    slug: "400m-olympic-record",
    name: "400m Olympic Record",
    subtitle: "Wayde van Niekerk's blistering 43.03 seconds at Rio 2016",
    category_id: "sports",
    description:
      "Wayde van Niekerk of South Africa set the 400m world and Olympic record at the 2016 Rio Games with a time of 43.03 seconds, running from the outside lane 8 where he could not even see his competitors. His average speed across the full lap was about 9.3 m/s, which is a pace that most humans cannot sustain for even 50 meters. He was coached by a 74-year-old great-grandmother, Ans Botha, which makes the whole story even better.",
    search_terms:
      "400m|olympic record|wayde van niekerk|rio 2016|sprint|one lap|track and field|athletics",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Race distance", value: 400, si_unit: "m" },
      { dimension: "time", label: "Record time", value: 43.03, si_unit: "s" },
      { dimension: "speed", label: "Average speed", value: 9.3, si_unit: "m/s", note: "About 33.5 km/h sustained" },
      { dimension: "speed", label: "Estimated peak speed", value: 10.5, si_unit: "m/s", note: "About 37.8 km/h" },
      { dimension: "energy", label: "Estimated energy expenditure", value: 90000, si_unit: "J", note: "About 21.5 kilocalories" },
      { dimension: "power", label: "Average power output", value: 2100, si_unit: "W", note: "Estimated metabolic power" },
    ],
  },

  {
    slug: "pole-vault-world-record",
    name: "Pole Vault World Record",
    subtitle: "Armand Duplantis clearing 6.26 meters of pure gravity defiance",
    category_id: "sports",
    description:
      "Swedish athlete Armand 'Mondo' Duplantis has pushed the pole vault world record to 6.26 meters, achieved in April 2025. To clear this height, he sprints at nearly 10 m/s while carrying a 5-meter carbon fiber pole, plants it in a box, and converts his horizontal speed into vertical flight. For context, 6.26 meters is higher than a standard two-story building. The physics involved would make a catapult jealous.",
    search_terms:
      "pole vault|world record|duplantis|mondo|highest jump|track and field|athletics",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Record height cleared", value: 6.26, si_unit: "m" },
      { dimension: "speed", label: "Approach speed", value: 9.8, si_unit: "m/s", note: "About 35 km/h at takeoff" },
      { dimension: "length", label: "Pole length", value: 5.15, si_unit: "m" },
      { dimension: "energy", label: "Kinetic energy at takeoff", value: 3840, si_unit: "J", note: "Converted to potential energy at the top" },
      { dimension: "mass", label: "Athlete mass", value: 80, si_unit: "kg" },
      { dimension: "time", label: "Time from plant to clearance", value: 1.1, si_unit: "s", note: "The entire vault takes just over a second" },
    ],
  },

  {
    slug: "shot-put-world-record",
    name: "Shot Put World Record",
    subtitle: "Ryan Crouser hurling a 7.26 kg ball 23.56 meters",
    category_id: "sports",
    description:
      "Ryan Crouser of the United States set the men's shot put world record at 23.56 meters in 2023. The shot weighs 7.26 kg (16 lbs), and to throw it that far requires launching it at roughly 14 m/s, which means his arm generates more power in that instant than a small car engine. The technique looks deceptively simple, but the glide or spin across the circle demands extraordinary coordination and explosive strength.",
    search_terms:
      "shot put|world record|ryan crouser|throwing|track and field|athletics|heavy throw",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Record distance", value: 23.56, si_unit: "m" },
      { dimension: "mass", label: "Shot mass", value: 7.26, si_unit: "kg" },
      { dimension: "speed", label: "Release speed", value: 14.0, si_unit: "m/s", note: "About 50 km/h" },
      { dimension: "energy", label: "Kinetic energy at release", value: 712, si_unit: "J" },
      { dimension: "force", label: "Estimated release force", value: 600, si_unit: "N", note: "Applied over about 0.2 seconds" },
      { dimension: "power", label: "Peak power output", value: 8400, si_unit: "W", note: "About 11 horsepower at release" },
    ],
  },

  {
    slug: "javelin-world-record",
    name: "Javelin World Record",
    subtitle: "Jan Zelezny's 98.48 meter throw that nearly hit 100",
    category_id: "sports",
    description:
      "Czech athlete Jan Zelezny set the men's javelin world record of 98.48 meters in 1996, a mark that has stood for decades and may never be broken. The javelin was actually redesigned in 1986 to move the center of gravity forward after throws were getting dangerously long and landing flat, threatening spectators at the far end of the field. At release, the 800-gram javelin leaves the hand at roughly 30 m/s.",
    search_terms:
      "javelin|world record|jan zelezny|throwing|track and field|athletics|spear throw",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Record distance", value: 98.48, si_unit: "m" },
      { dimension: "mass", label: "Javelin mass", value: 0.8, si_unit: "kg" },
      { dimension: "length", label: "Javelin length", value: 2.7, si_unit: "m" },
      { dimension: "speed", label: "Release speed", value: 30, si_unit: "m/s", note: "About 108 km/h" },
      { dimension: "energy", label: "Kinetic energy at release", value: 360, si_unit: "J" },
      { dimension: "time", label: "Record standing since", value: 9.46e8, si_unit: "s", note: "Set in 1996, about 30 years ago" },
    ],
  },

  {
    slug: "tour-de-france-total-distance",
    name: "Tour de France total distance",
    subtitle: "About 3,500 km of cycling through the French countryside and mountains",
    category_id: "sports",
    description:
      "The Tour de France covers roughly 3,500 km over 21 stages spread across 23 days, making it the most grueling annual sporting event in the world. Riders climb a cumulative elevation gain of about 50,000 meters, which is nearly six times the height of Everest. Each rider burns approximately 5,000 to 8,000 kilocalories per stage, consuming pasta and energy gels at a rate that would alarm a normal person's digestive system.",
    search_terms:
      "tour de france|cycling|bike race|france|grand tour|stages|endurance|peloton",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total race distance", value: 3500000, si_unit: "m", note: "About 3,500 km across 21 stages" },
      { dimension: "length", label: "Cumulative elevation gain", value: 50000, si_unit: "m", note: "About 50 km of total climbing" },
      { dimension: "time", label: "Total racing time (winner)", value: 3.06e5, si_unit: "s", note: "About 85 hours of riding" },
      { dimension: "speed", label: "Average winner speed", value: 11.4, si_unit: "m/s", note: "About 41 km/h" },
      { dimension: "energy", label: "Daily energy expenditure per rider", value: 2.5e7, si_unit: "J", note: "About 6,000 kilocalories per stage" },
      { dimension: "power", label: "Average power output (flat)", value: 250, si_unit: "W", note: "Sustained in the peloton" },
    ],
  },

  // =========================================================================
  // WATER
  // =========================================================================

  {
    slug: "nile-river",
    name: "Nile River",
    subtitle: "The longest river in Africa and one of the longest on Earth",
    category_id: "water",
    description:
      "The Nile flows roughly 6,650 km from central Africa to the Mediterranean Sea, making it the longest or second longest river in the world depending on how you measure the Amazon. Ancient Egyptian civilization was built entirely around its annual floods, which deposited rich silt across the floodplain. The river passes through 11 countries and supports about 300 million people, making it arguably the most important waterway on the planet.",
    search_terms:
      "nile|nile river|egypt|africa|longest river|white nile|blue nile|ancient egypt",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 6650000, si_unit: "m", note: "About 6,650 km" },
      { dimension: "area", label: "Drainage basin", value: 3.349e12, si_unit: "m^2", note: "About 3.35 million km^2" },
      { dimension: "volume", label: "Average discharge", value: 2830, si_unit: "m^3", note: "2,830 m^3/s at the mouth" },
      { dimension: "length", label: "Width at widest", value: 2800, si_unit: "m", note: "About 2.8 km at Lake Nasser outflow" },
      { dimension: "length", label: "Delta length", value: 160000, si_unit: "m", note: "160 km from Cairo to the coast" },
    ],
  },

  {
    slug: "caspian-sea",
    name: "Caspian Sea",
    subtitle: "The world's largest enclosed body of water, technically a lake",
    category_id: "water",
    description:
      "The Caspian Sea is the world's largest enclosed inland body of water, bordered by five countries. Despite its name, it is technically a lake since it has no connection to the ocean, which causes occasional heated debates among geographers. It covers an area larger than Germany and holds about 78,200 cubic kilometers of slightly salty water. It is also home to most of the world's sturgeon, the fish responsible for caviar, giving it outsized economic importance.",
    search_terms:
      "caspian sea|largest lake|inland sea|central asia|sturgeon|caviar|enclosed water",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 3.71e11, si_unit: "m^2", note: "About 371,000 km^2" },
      { dimension: "volume", label: "Water volume", value: 7.82e13, si_unit: "m^3", note: "78,200 km^3" },
      { dimension: "length", label: "North-south length", value: 1200000, si_unit: "m", note: "About 1,200 km" },
      { dimension: "length", label: "Maximum width", value: 435000, si_unit: "m", note: "About 435 km" },
      { dimension: "length", label: "Maximum depth", value: 1025, si_unit: "m" },
      { dimension: "length", label: "Surface elevation", value: -28, si_unit: "m", note: "28 meters below sea level" },
    ],
  },

  {
    slug: "lake-victoria",
    name: "Lake Victoria",
    subtitle: "Africa's largest lake and the source of the White Nile",
    category_id: "water",
    description:
      "Lake Victoria is the largest lake in Africa and the largest tropical lake in the world, shared by Tanzania, Uganda, and Kenya. It is the primary source of the White Nile and supports one of the densest freshwater fisheries on Earth. Despite its vast surface area, it is surprisingly shallow for its size, with an average depth of only 40 meters. The lake is also notorious for sudden violent storms that can whip up 3-meter waves with little warning.",
    search_terms:
      "lake victoria|africa lake|largest tropical lake|nile source|east africa|great lake",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 6.8e10, si_unit: "m^2", note: "About 68,800 km^2" },
      { dimension: "volume", label: "Water volume", value: 2.75e12, si_unit: "m^3", note: "2,750 km^3" },
      { dimension: "length", label: "Maximum length", value: 337000, si_unit: "m", note: "337 km" },
      { dimension: "length", label: "Maximum width", value: 250000, si_unit: "m", note: "250 km" },
      { dimension: "length", label: "Maximum depth", value: 84, si_unit: "m" },
      { dimension: "length", label: "Average depth", value: 40, si_unit: "m" },
    ],
  },

  {
    slug: "angel-falls",
    name: "Angel Falls",
    subtitle: "The world's tallest uninterrupted waterfall in Venezuela",
    category_id: "water",
    description:
      "Angel Falls in Venezuela plunges 979 meters from the summit of Auyantepui, a flat-topped mountain in Canaima National Park, making it the tallest uninterrupted waterfall in the world. The water falls so far that much of it turns to mist before reaching the base. The falls were named after American aviator Jimmie Angel, who crash-landed his plane on top of the tepui in 1937 and had to hike out. The indigenous Pemon people call it Kerepakupai Meru, which translates to 'waterfall of the deepest place.'",
    search_terms:
      "angel falls|tallest waterfall|venezuela|auyantepui|canaima|kerepakupai|highest waterfall",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total height", value: 979, si_unit: "m", note: "World's tallest uninterrupted waterfall" },
      { dimension: "length", label: "Longest single drop", value: 807, si_unit: "m" },
      { dimension: "speed", label: "Water speed at base", value: 70, si_unit: "m/s", note: "Terminal velocity of water droplets, slowed by mist" },
      { dimension: "time", label: "Fall time", value: 14.1, si_unit: "s", note: "Free fall time for the main drop" },
      { dimension: "length", label: "Width at base", value: 150, si_unit: "m" },
      { dimension: "volume", label: "Average flow rate", value: 8, si_unit: "m^3", note: "About 8 m^3/s, varies seasonally" },
    ],
  },

  // =========================================================================
  // CONCEPTUAL
  // =========================================================================

  {
    slug: "all-grains-of-sand-on-earth",
    name: "All Grains of Sand on Earth",
    subtitle: "Roughly 7.5 quintillion grains covering every beach and desert",
    category_id: "conceptual",
    description:
      "Scientists estimate there are approximately 7.5 x 10^18 grains of sand on Earth, covering beaches, deserts, and riverbeds worldwide. If you piled all of them together, the total volume would be roughly 7.5 billion cubic meters, enough to bury Manhattan under about 100 meters of sand. This number is often compared to the estimated number of stars in the observable universe, which is likely 10 to 100 times greater, making the cosmos even more humbling than a beach is vast.",
    search_terms:
      "grains of sand|sand count|all sand|earth sand|beach sand|desert sand|quintillion",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Total mass of all sand", value: 1.2e19, si_unit: "kg", note: "Roughly 12 billion billion kg" },
      { dimension: "volume", label: "Total volume", value: 7.5e9, si_unit: "m^3", note: "About 7.5 billion cubic meters" },
      { dimension: "length", label: "Average grain diameter", value: 0.0005, si_unit: "m", note: "0.5 mm for medium sand" },
      { dimension: "mass", label: "Average grain mass", value: 1.6e-6, si_unit: "kg", note: "About 1.6 milligrams per grain" },
      { dimension: "area", label: "Total sandy area on Earth", value: 3.2e13, si_unit: "m^2", note: "About 32 million km^2 of desert and beach" },
    ],
  },

  {
    slug: "total-lightning-strikes-per-year",
    name: "Total Lightning Strikes Per Year",
    subtitle: "About 1.4 billion bolts slamming into Earth every year",
    category_id: "conceptual",
    description:
      "Earth experiences roughly 1.4 billion cloud-to-ground lightning strikes per year, plus many times more cloud-to-cloud bolts that never touch the surface. At any given moment, about 1,800 thunderstorms are active worldwide. Each bolt heats the surrounding air to roughly 30,000 K, five times the surface temperature of the Sun, and carries a current of about 30,000 amperes. The total energy is staggering, but unfortunately too brief and unpredictable to harvest for electricity.",
    search_terms:
      "lightning|lightning strikes|thunderstorm|electrical storm|bolts per year|thunder",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Energy per bolt", value: 1.0e9, si_unit: "J", note: "About 1 gigajoule per typical bolt" },
      { dimension: "energy", label: "Total annual energy", value: 1.4e18, si_unit: "J", note: "1.4 billion bolts at ~1 GJ each" },
      { dimension: "temperature", label: "Bolt temperature", value: 30000, si_unit: "K", note: "Five times the surface of the Sun" },
      { dimension: "time", label: "Duration per bolt", value: 0.0002, si_unit: "s", note: "About 0.2 milliseconds for the main stroke" },
      { dimension: "length", label: "Average bolt length", value: 8000, si_unit: "m", note: "About 8 km cloud to ground" },
      { dimension: "frequency", label: "Global strike rate", value: 44, si_unit: "Hz", note: "About 44 strikes per second worldwide" },
    ],
  },

  {
    slug: "all-books-ever-written",
    name: "All Books Ever Written",
    subtitle: "An estimated 130 million unique titles across all of human history",
    category_id: "conceptual",
    description:
      "Google estimated in 2010 that approximately 130 million unique book titles had been published throughout history, and the number has grown since. If printed and stacked, they would form a tower about 3,250 km tall, reaching well into outer space. The total data contained in all those books is roughly 480 terabytes, which sounds like a lot until you realize a single modern data center dwarfs it easily. Humanity's entire written literary output fits on a rack of hard drives.",
    search_terms:
      "all books|books ever written|total books|publishing|literature|world books|google books",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Total mass of all books", value: 3.9e10, si_unit: "kg", note: "About 0.3 kg per book average, 130 million books" },
      { dimension: "length", label: "Stacked height", value: 3250000, si_unit: "m", note: "About 3,250 km if all stacked" },
      { dimension: "data", label: "Total data content", value: 5.28e14, si_unit: "B", note: "About 480 terabytes of text" },
      { dimension: "time", label: "Time to read all (one person)", value: 5.68e12, si_unit: "s", note: "About 180,000 years at 8 hours per day" },
      { dimension: "mass", label: "Average book mass", value: 0.3, si_unit: "kg" },
    ],
  },

  {
    slug: "worlds-daily-food-production",
    name: "World's Daily Food Production",
    subtitle: "About 17 billion kg of food produced every day to feed 8 billion people",
    category_id: "conceptual",
    description:
      "Humanity produces roughly 6 billion tonnes of food per year, which works out to about 17 billion kg per day. This includes grains, fruits, vegetables, meat, dairy, and seafood from farms, ranches, and fisheries across every continent except Antarctica. Roughly one third of all food produced is lost or wasted before anyone eats it, which amounts to about 1.3 billion tonnes per year thrown away while 800 million people go hungry.",
    search_terms:
      "food production|daily food|world food|agriculture|farming|global food supply|food waste",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Daily food production", value: 1.7e10, si_unit: "kg", note: "About 17 billion kg per day" },
      { dimension: "mass", label: "Annual food production", value: 6.0e12, si_unit: "kg", note: "About 6 billion tonnes" },
      { dimension: "mass", label: "Annual food waste", value: 1.3e12, si_unit: "kg", note: "About one third of production" },
      { dimension: "energy", label: "Daily caloric content", value: 4.0e16, si_unit: "J", note: "Roughly 10 trillion kilocalories daily" },
      { dimension: "area", label: "Global farmland", value: 4.8e13, si_unit: "m^2", note: "About 48 million km^2, 38% of land surface" },
      { dimension: "volume", label: "Daily water for agriculture", value: 7.0e9, si_unit: "m^3", note: "About 70% of global freshwater use" },
    ],
  },

  {
    slug: "speed-of-light-distance-per-second",
    name: "Speed of Light distance per second",
    subtitle: "299,792,458 meters in exactly one second, the universe's speed limit",
    category_id: "conceptual",
    description:
      "Light in a vacuum travels exactly 299,792,458 meters per second, a value so fundamental that the meter is now defined by it. In one second, a photon could circle the Earth 7.5 times, yet it still takes 8 minutes and 20 seconds for sunlight to reach Earth. The speed of light is not just fast; it is the absolute speed limit of the universe, baked into the fabric of spacetime itself. Nothing with mass can ever reach it, which is the cosmos's way of saying 'no.'",
    search_terms:
      "speed of light|c|light speed|photon|299792458|einstein|relativity|universal constant",
    featured: 1,
    measurements: [
      { dimension: "speed", label: "Speed of light (exact)", value: 299792458, si_unit: "m/s", note: "Exact by definition since 1983" },
      { dimension: "length", label: "Distance traveled in 1 second", value: 299792458, si_unit: "m" },
      { dimension: "length", label: "Distance in 1 nanosecond", value: 0.2998, si_unit: "m", note: "About 30 cm, roughly one foot" },
      { dimension: "time", label: "Sun to Earth travel time", value: 499, si_unit: "s", note: "About 8 minutes 19 seconds" },
      { dimension: "length", label: "One light-year", value: 9.461e15, si_unit: "m", note: "Distance light travels in one year" },
      { dimension: "energy", label: "Energy of 1 kg at light speed (E=mc^2)", value: 8.988e16, si_unit: "J", note: "About 21.5 megatons of TNT" },
    ],
  },
];
