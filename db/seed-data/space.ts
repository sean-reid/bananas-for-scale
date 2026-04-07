import type { ThingInput } from "../types";

// ── Categories ──────────────────────────────────────────────────────────────

export const categoriesData = [
  {
    id: "planets",
    name: "Planets",
    description:
      "The worlds that orbit our Sun, from scorching Mercury to frigid Pluto and everything in between.",
    sort_order: 20,
  },
  {
    id: "stars",
    name: "Stars",
    description:
      "Celestial furnaces that light up the universe with unimaginable power.",
    sort_order: 21,
  },
  {
    id: "moons",
    name: "Moons",
    description:
      "Natural satellites that orbit the planets of our solar system, each with its own unique character.",
    sort_order: 22,
  },
  {
    id: "space-other",
    name: "Other Space Objects",
    description:
      "Black holes, galaxies, comets, asteroids, and other cosmic oddities that defy everyday comprehension.",
    sort_order: 23,
  },
];

// ── Things ──────────────────────────────────────────────────────────────────

export const thingsData: ThingInput[] = [
  // ════════════════════════════════════════════════════════════════════════
  // PLANETS
  // ════════════════════════════════════════════════════════════════════════
  {
    slug: "mercury",
    name: "Mercury",
    subtitle: "The smallest planet and closest to the Sun",
    category_id: "planets",
    description:
      "Mercury is the smallest planet in our solar system and the nearest to the Sun, orbiting at an average distance of about 58 million kilometers. Despite its proximity to the Sun, it is not the hottest planet; that title goes to Venus. Mercury has virtually no atmosphere, leading to extreme temperature swings between day and night.",
    search_terms: "mercury|planet|innermost|smallest planet|solar system",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 4879400, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 3.3011e23, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 47362, si_unit: "m/s" },
{ dimension: "temperature", label: "Mean surface temperature", value: 440, si_unit: "K", note: "Daytime up to 700 K, nighttime as low as 100 K" },
      { dimension: "time", label: "Sidereal day length", value: 5067360, si_unit: "s", note: "About 58.65 Earth days" },
      { dimension: "length", label: "Mean distance from the Sun", value: 5.791e10, si_unit: "m" },
    ],
  },
  {
    slug: "venus",
    name: "Venus",
    subtitle: "Earth's scorching twin with a runaway greenhouse effect",
    category_id: "planets",
    description:
      "Venus is the second planet from the Sun and the hottest in our solar system, with surface temperatures hot enough to melt lead. Its thick carbon-dioxide atmosphere creates a runaway greenhouse effect. Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east.",
    search_terms: "venus|planet|morning star|evening star|greenhouse",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 12103600, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 4.8675e24, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 35020, si_unit: "m/s" },
      { dimension: "temperature", label: "Mean surface temperature", value: 737, si_unit: "K" },
      { dimension: "time", label: "Sidereal day length", value: 20996798, si_unit: "s", note: "About 243 Earth days, longer than its year" },
      { dimension: "length", label: "Mean distance from the Sun", value: 1.0821e11, si_unit: "m" },
      { dimension: "pressure", label: "Surface atmospheric pressure", value: 9.2e6, si_unit: "Pa", note: "About 92 times Earth's sea-level pressure" },
    ],
  },
  {
    slug: "earth",
    name: "Earth",
    subtitle: "The only known planet with life",
    category_id: "planets",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbour life. About 71% of its surface is covered by ocean, and it has a protective magnetic field and atmosphere. Its single large moon stabilizes the axial tilt that gives Earth its seasons.",
    search_terms: "earth|planet|home|blue marble|terra|world",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 12756274, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 5.9722e24, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 29783, si_unit: "m/s" },
{ dimension: "temperature", label: "Mean surface temperature", value: 288, si_unit: "K", note: "About 15 °C" },
      { dimension: "time", label: "Sidereal day length", value: 86164.1, si_unit: "s", note: "23 hours 56 minutes 4.1 seconds" },
      { dimension: "length", label: "Mean distance from the Sun", value: 1.496e11, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 1.08321e21, si_unit: "m³" },
    ],
  },
  {
    slug: "mars",
    name: "Mars",
    subtitle: "The Red Planet with the tallest volcano in the solar system",
    category_id: "planets",
    description:
      "Mars is the fourth planet from the Sun, known for its reddish appearance caused by iron oxide on its surface. It hosts Olympus Mons, the tallest known volcano and mountain in the solar system at about 21.9 km high. Mars has two small, irregularly shaped moons, Phobos and Deimos.",
    search_terms: "mars|planet|red planet|olympus mons",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 6792400, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 6.4171e23, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 24077, si_unit: "m/s" },
{ dimension: "temperature", label: "Mean surface temperature", value: 210, si_unit: "K", note: "About −63 °C" },
      { dimension: "time", label: "Sidereal day length", value: 88775.244, si_unit: "s", note: "About 24 hours 37 minutes, a sol" },
      { dimension: "length", label: "Mean distance from the Sun", value: 2.2792e11, si_unit: "m" },
    ],
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    subtitle: "The largest planet in the solar system",
    category_id: "planets",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in our solar system, more than twice as massive as all other planets combined. Its Great Red Spot is a storm larger than Earth that has raged for centuries. Jupiter has at least 95 known moons, including the four large Galilean moons.",
    search_terms: "jupiter|planet|gas giant|great red spot|largest planet",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 142984000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.8982e27, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 13070, si_unit: "m/s" },
{ dimension: "temperature", label: "Cloud-top temperature", value: 165, si_unit: "K", note: "At 1 bar pressure level" },
      { dimension: "time", label: "Sidereal day length", value: 35730, si_unit: "s", note: "About 9 hours 55 minutes, fastest spin in the solar system" },
      { dimension: "length", label: "Mean distance from the Sun", value: 7.7857e11, si_unit: "m" },
      { dimension: "volume", label: "Volume", value: 1.4313e24, si_unit: "m³" },
    ],
  },
  {
    slug: "saturn",
    name: "Saturn",
    subtitle: "The ringed jewel of the solar system",
    category_id: "planets",
    description:
      "Saturn is the sixth planet from the Sun, famous for its spectacular ring system made of ice and rock particles. It is the least dense planet in the solar system, less dense than water. Saturn has over 140 known moons, including Titan, the second-largest moon in the solar system.",
    search_terms: "saturn|planet|rings|gas giant|cassini",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 120536000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 5.6834e26, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 9680, si_unit: "m/s" },
{ dimension: "temperature", label: "Cloud-top temperature", value: 134, si_unit: "K", note: "At 1 bar pressure level" },
      { dimension: "time", label: "Sidereal day length", value: 38018, si_unit: "s", note: "About 10 hours 33 minutes" },
      { dimension: "length", label: "Mean distance from the Sun", value: 1.4335e12, si_unit: "m" },
      { dimension: "length", label: "Ring outer diameter", value: 2.828e8, si_unit: "m", note: "Outer edge of the main rings (A ring)" },
    ],
  },
  {
    slug: "uranus",
    name: "Uranus",
    subtitle: "The sideways ice giant",
    category_id: "planets",
    description:
      "Uranus is the seventh planet from the Sun and has the most extreme axial tilt of any planet; it essentially rolls around the Sun on its side at 97.8 degrees. Its blue-green colour comes from methane in its atmosphere. Uranus was the first planet discovered with a telescope, by William Herschel in 1781.",
    search_terms: "uranus|planet|ice giant|sideways|herschel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 51118000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 8.6810e25, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 6800, si_unit: "m/s" },
{ dimension: "temperature", label: "Cloud-top temperature", value: 76, si_unit: "K", note: "Minimum temperature at 1 bar level" },
      { dimension: "time", label: "Sidereal day length", value: 62064, si_unit: "s", note: "About 17 hours 14 minutes" },
      { dimension: "length", label: "Mean distance from the Sun", value: 2.8725e12, si_unit: "m" },
    ],
  },
  {
    slug: "neptune",
    name: "Neptune",
    subtitle: "The windiest planet in the solar system",
    category_id: "planets",
    description:
      "Neptune is the eighth and most distant planet from the Sun. It has the strongest sustained winds of any planet in the solar system, reaching speeds of over 2,000 km/h. Neptune was the first planet located through mathematical predictions rather than empirical observation, discovered in 1846.",
    search_terms: "neptune|planet|ice giant|windiest|trident",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 49528000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.02413e26, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 5430, si_unit: "m/s" },
{ dimension: "temperature", label: "Cloud-top temperature", value: 72, si_unit: "K", note: "At 1 bar pressure level" },
      { dimension: "time", label: "Sidereal day length", value: 57996, si_unit: "s", note: "About 16 hours 6 minutes" },
      { dimension: "length", label: "Mean distance from the Sun", value: 4.4951e12, si_unit: "m" },
      { dimension: "speed", label: "Peak wind speed", value: 580, si_unit: "m/s", note: "About 2,100 km/h, fastest in the solar system" },
    ],
  },
  {
    slug: "pluto",
    name: "Pluto",
    subtitle: "The beloved dwarf planet at the edge of the solar system",
    category_id: "planets",
    description:
      "Pluto was reclassified as a dwarf planet in 2006 but remains one of the most fascinating objects in the outer solar system. NASA's New Horizons flyby in 2015 revealed a heart-shaped nitrogen-ice glacier, towering water-ice mountains, and a thin atmosphere. Pluto is smaller than Earth's Moon.",
    search_terms: "pluto|dwarf planet|kuiper belt|new horizons",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Equatorial diameter", value: 2376600, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.303e22, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 4743, si_unit: "m/s" },
{ dimension: "temperature", label: "Mean surface temperature", value: 44, si_unit: "K", note: "About −229 °C" },
      { dimension: "time", label: "Sidereal day length", value: 551856.7, si_unit: "s", note: "About 6.39 Earth days" },
      { dimension: "length", label: "Mean distance from the Sun", value: 5.9064e12, si_unit: "m" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // STARS
  // ════════════════════════════════════════════════════════════════════════
  {
    slug: "betelgeuse",
    name: "Betelgeuse",
    subtitle: "A red supergiant on the brink of a supernova",
    category_id: "stars",
    description:
      "Betelgeuse is a red supergiant star in the constellation Orion, one of the largest and most luminous stars visible to the naked eye. It is roughly 700 light-years from Earth and could explode as a supernova within the next 100,000 years. Its diameter is large enough that if placed at the centre of our solar system, its surface would extend past the orbit of Jupiter.",
    search_terms: "betelgeuse|orion|red supergiant|supernova|alpha orionis",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Estimated diameter", value: 1.235e12, si_unit: "m", note: "Roughly 887 solar diameters" },
      { dimension: "mass", label: "Mass", value: 2.19e31, si_unit: "kg", note: "About 11 solar masses" },
      { dimension: "power", label: "Luminosity", value: 7.5e31, si_unit: "W", note: "About 196,000 times solar luminosity" },
      { dimension: "temperature", label: "Effective surface temperature", value: 3500, si_unit: "K" },
      { dimension: "length", label: "Distance from Earth", value: 6.18e18, si_unit: "m", note: "About 653 light-years" },
    ],
  },
  {
    slug: "uy-scuti",
    name: "UY Scuti",
    subtitle: "One of the largest known stars by radius",
    category_id: "stars",
    description:
      "UY Scuti is a red supergiant and pulsating variable star in the constellation Scutum. It is one of the largest stars ever measured by radius, with estimates suggesting it could engulf the orbit of Jupiter if placed at the centre of our solar system. Despite its immense size, its mass is relatively modest for a supergiant.",
    search_terms: "uy scuti|largest star|red supergiant|scutum",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Estimated diameter", value: 2.38e12, si_unit: "m", note: "Roughly 1,708 solar diameters" },
      { dimension: "mass", label: "Mass", value: 1.39e31, si_unit: "kg", note: "About 7 solar masses" },
      { dimension: "power", label: "Luminosity", value: 3.4e32, si_unit: "W", note: "About 890,000 times solar luminosity" },
      { dimension: "temperature", label: "Effective surface temperature", value: 3365, si_unit: "K" },
      { dimension: "length", label: "Distance from Earth", value: 5.68e19, si_unit: "m", note: "About 5,900 light-years" },
    ],
  },
  {
    slug: "proxima-centauri",
    name: "Proxima Centauri",
    subtitle: "The closest star to our solar system",
    category_id: "stars",
    description:
      "Proxima Centauri is a small red dwarf star about 4.24 light-years from Earth, the closest known star to the Sun. Despite being our nearest stellar neighbour, it is far too faint to see with the naked eye. It hosts at least two confirmed exoplanets, including Proxima Centauri b in the habitable zone.",
    search_terms: "proxima centauri|closest star|red dwarf|alpha centauri",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 2.14e8, si_unit: "m", note: "About 0.154 solar diameters" },
      { dimension: "mass", label: "Mass", value: 2.446e29, si_unit: "kg", note: "About 0.122 solar masses" },
      { dimension: "power", label: "Luminosity", value: 6.5e23, si_unit: "W", note: "About 0.0017 times solar luminosity" },
      { dimension: "temperature", label: "Effective surface temperature", value: 3042, si_unit: "K" },
      { dimension: "length", label: "Distance from Earth", value: 3.991e16, si_unit: "m", note: "About 4.24 light-years" },
    ],
  },
  {
    slug: "sirius",
    name: "Sirius",
    subtitle: "The brightest star in Earth's night sky",
    category_id: "stars",
    description:
      "Sirius, also known as the Dog Star, is the brightest star in the night sky as seen from Earth. It is actually a binary system consisting of Sirius A, a main-sequence star roughly twice the mass of the Sun, and Sirius B, a faint white dwarf companion. Located about 8.6 light-years away, it is one of the nearest stars to Earth.",
    search_terms: "sirius|dog star|brightest star|canis major|alpha canis majoris",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (Sirius A)", value: 2.38e9, si_unit: "m", note: "About 1.71 solar diameters" },
      { dimension: "mass", label: "Mass (Sirius A)", value: 4.0e30, si_unit: "kg", note: "About 2.02 solar masses" },
      { dimension: "power", label: "Luminosity (Sirius A)", value: 9.7e27, si_unit: "W", note: "About 25.4 times solar luminosity" },
      { dimension: "temperature", label: "Effective surface temperature", value: 9940, si_unit: "K" },
      { dimension: "length", label: "Distance from Earth", value: 8.15e16, si_unit: "m", note: "About 8.6 light-years" },
    ],
  },
  {
    slug: "rigel",
    name: "Rigel",
    subtitle: "A blue supergiant illuminating Orion's foot",
    category_id: "stars",
    description:
      "Rigel is a blue supergiant star marking the lower-left foot of the constellation Orion. It is one of the most luminous stars in our region of the Milky Way, shining with roughly 120,000 times the luminosity of the Sun. Despite being about 860 light-years away, it is the seventh-brightest star in the night sky.",
    search_terms: "rigel|orion|blue supergiant|beta orionis",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Estimated diameter", value: 1.1e11, si_unit: "m", note: "About 79 solar diameters" },
      { dimension: "mass", label: "Mass", value: 4.2e31, si_unit: "kg", note: "About 21 solar masses" },
      { dimension: "power", label: "Luminosity", value: 4.7e31, si_unit: "W", note: "About 120,000 times solar luminosity" },
      { dimension: "temperature", label: "Effective surface temperature", value: 12100, si_unit: "K" },
      { dimension: "length", label: "Distance from Earth", value: 8.1e18, si_unit: "m", note: "About 860 light-years" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // MOONS
  // ════════════════════════════════════════════════════════════════════════
  {
    slug: "the-moon",
    name: "The Moon",
    subtitle: "Earth's only natural satellite",
    category_id: "moons",
    description:
      "The Moon is Earth's sole natural satellite and the fifth-largest moon in the solar system. It is the brightest and largest object in our night sky, and its gravitational pull drives Earth's tides. Twelve humans have walked on its surface during NASA's Apollo programme between 1969 and 1972.",
    search_terms: "moon|luna|earth moon|apollo|tides|satellite",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 3474000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 7.342e22, si_unit: "kg" },
      { dimension: "length", label: "Mean distance from Earth", value: 384400000, si_unit: "m" },
      { dimension: "speed", label: "Mean orbital speed", value: 1022, si_unit: "m/s" },
{ dimension: "temperature", label: "Daytime surface temperature", value: 400, si_unit: "K", note: "Up to about 127 °C" },
      { dimension: "temperature", label: "Nighttime surface temperature", value: 100, si_unit: "K", note: "Down to about −173 °C" },
    ],
  },
  {
    slug: "europa",
    name: "Europa",
    subtitle: "Jupiter's ice-covered moon with a hidden ocean",
    category_id: "moons",
    description:
      "Europa is one of Jupiter's four Galilean moons and is considered one of the most promising places to search for extraterrestrial life. Beneath its smooth icy surface lies a global saltwater ocean that may contain more than twice the water of all Earth's oceans combined. NASA's Europa Clipper mission launched in 2024 to study this intriguing world.",
    search_terms: "europa|jupiter moon|galilean|ice|ocean|subsurface",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 3121600, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 4.7998e22, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 13740, si_unit: "m/s" },
{ dimension: "temperature", label: "Surface temperature", value: 102, si_unit: "K", note: "Average, ranges from about 86 K to 132 K" },
      { dimension: "length", label: "Ice shell thickness", value: 15000, si_unit: "m", note: "Estimated 10-30 km" },
      { dimension: "length", label: "Mean distance from Jupiter", value: 6.709e8, si_unit: "m" },
    ],
  },
  {
    slug: "titan",
    name: "Titan",
    subtitle: "Saturn's giant moon with lakes of liquid methane",
    category_id: "moons",
    description:
      "Titan is Saturn's largest moon and the second-largest moon in the solar system. It is the only moon with a dense atmosphere and the only body besides Earth known to have stable surface liquids: lakes and seas of liquid methane and ethane. ESA's Huygens probe landed on Titan in 2005, and NASA's Dragonfly rotorcraft is planned to arrive in the 2030s.",
    search_terms: "titan|saturn moon|methane|huygens|dragonfly|atmosphere",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 5149500, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.3452e23, si_unit: "kg" },
      { dimension: "temperature", label: "Surface temperature", value: 94, si_unit: "K", note: "About −179 °C" },
      { dimension: "pressure", label: "Surface atmospheric pressure", value: 146700, si_unit: "Pa", note: "About 1.45 times Earth's sea-level pressure" },
{ dimension: "speed", label: "Mean orbital speed", value: 5570, si_unit: "m/s" },
      { dimension: "length", label: "Mean distance from Saturn", value: 1.2218e9, si_unit: "m" },
    ],
  },
  {
    slug: "ganymede",
    name: "Ganymede",
    subtitle: "The largest moon in the solar system",
    category_id: "moons",
    description:
      "Ganymede is the largest moon in the solar system, even bigger than the planet Mercury. It is the only moon known to possess its own internally generated magnetic field. Ganymede is one of Jupiter's four Galilean moons, and scientists believe a saltwater ocean may exist beneath its icy crust.",
    search_terms: "ganymede|jupiter moon|galilean|largest moon|magnetic field",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 5268200, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.4819e23, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 10880, si_unit: "m/s" },
{ dimension: "temperature", label: "Surface temperature", value: 110, si_unit: "K", note: "Average, ranges from 70 K to 152 K" },
      { dimension: "length", label: "Mean distance from Jupiter", value: 1.0704e9, si_unit: "m" },
    ],
  },
  {
    slug: "io",
    name: "Io",
    subtitle: "The most volcanically active body in the solar system",
    category_id: "moons",
    description:
      "Io is Jupiter's innermost Galilean moon and the most volcanically active object in the solar system, with over 400 active volcanoes. Tidal heating from Jupiter's immense gravity drives this extreme volcanism. Its surface is constantly reshaped by lava flows and volcanic deposits, giving it a colourful, pizza-like appearance.",
    search_terms: "io|jupiter moon|galilean|volcanic|tidal heating",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 3643200, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 8.932e22, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 17334, si_unit: "m/s" },
{ dimension: "temperature", label: "Mean surface temperature", value: 110, si_unit: "K", note: "Background; volcanic hotspots exceed 1600 K" },
      { dimension: "time", label: "Orbital period", value: 152853, si_unit: "s", note: "About 1.77 Earth days" },
      { dimension: "length", label: "Mean distance from Jupiter", value: 4.217e8, si_unit: "m" },
    ],
  },
  {
    slug: "phobos",
    name: "Phobos",
    subtitle: "Mars's larger, doomed moon",
    category_id: "moons",
    description:
      "Phobos is the larger and closer of Mars's two moons. It is a small, irregularly shaped body covered in craters, with the prominent Stickney crater spanning nearly half its width. Phobos orbits closer to its planet than any other known moon and is slowly spiralling inward; in roughly 50 million years it will either crash into Mars or break apart into a ring.",
    search_terms: "phobos|mars moon|stickney|doomed moon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Longest dimension", value: 27000, si_unit: "m", note: "Irregularly shaped: ~27 × 22 × 18 km" },
      { dimension: "length", label: "Intermediate dimension", value: 22000, si_unit: "m" },
      { dimension: "length", label: "Shortest dimension", value: 18000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.0659e16, si_unit: "kg" },
{ dimension: "speed", label: "Mean orbital speed", value: 2138, si_unit: "m/s" },
      { dimension: "time", label: "Orbital period", value: 27554, si_unit: "s", note: "About 7.66 hours, faster than Mars's rotation" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // OTHER SPACE OBJECTS
  // ════════════════════════════════════════════════════════════════════════
  {
    slug: "sagittarius-a-star",
    name: "Sagittarius A*",
    subtitle: "The supermassive black hole at the centre of the Milky Way",
    category_id: "space-other",
    description:
      "Sagittarius A* (Sgr A*) is the supermassive black hole at the centre of our Milky Way galaxy, with a mass of roughly 4.15 million Suns. In 2022, the Event Horizon Telescope collaboration released the first direct image of its shadow. Stars orbit it at tremendous speeds; the star S2 reaches over 7,600 km/s at closest approach.",
    search_terms: "sagittarius a|sgr a|black hole|milky way centre|event horizon",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 8.26e36, si_unit: "kg", note: "About 4.15 million solar masses" },
      { dimension: "length", label: "Event horizon diameter (Schwarzschild)", value: 2.47e10, si_unit: "m", note: "About 0.17 AU" },
      { dimension: "length", label: "Distance from Earth", value: 2.47e20, si_unit: "m", note: "About 26,000 light-years" },
    ],
  },
  {
    slug: "milky-way",
    name: "Milky Way",
    subtitle: "Our home galaxy with hundreds of billions of stars",
    category_id: "space-other",
    description:
      "The Milky Way is a barred spiral galaxy that contains our solar system. It spans roughly 100,000 light-years in diameter and harbours an estimated 100 to 400 billion stars. Our Sun is located about 26,000 light-years from the galactic centre, in one of the spiral arms.",
    search_terms: "milky way|galaxy|home galaxy|barred spiral",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Disk diameter", value: 9.46e20, si_unit: "m", note: "About 100,000 light-years" },
      { dimension: "mass", label: "Total mass (including dark matter)", value: 2.85e42, si_unit: "kg", note: "About 1.5 trillion solar masses" },
      { dimension: "length", label: "Disk thickness", value: 1.89e19, si_unit: "m", note: "About 2,000 light-years" },
      { dimension: "length", label: "Sun's distance from centre", value: 2.47e20, si_unit: "m", note: "About 26,000 light-years" },
      { dimension: "speed", label: "Sun's orbital speed around centre", value: 230000, si_unit: "m/s" },
    ],
  },
  {
    slug: "andromeda-galaxy",
    name: "Andromeda Galaxy",
    subtitle: "The nearest large galaxy to the Milky Way",
    category_id: "space-other",
    description:
      "The Andromeda Galaxy (M31) is the closest large spiral galaxy to the Milky Way and the most distant object visible to the naked eye. It is on a collision course with the Milky Way, expected to merge in about 4.5 billion years. Andromeda contains roughly one trillion stars and is accompanied by several satellite galaxies.",
    search_terms: "andromeda|m31|nearest galaxy|spiral galaxy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 2.09e21, si_unit: "m", note: "About 220,000 light-years" },
      { dimension: "mass", label: "Total mass", value: 2.39e42, si_unit: "kg", note: "About 1.26 trillion solar masses" },
      { dimension: "length", label: "Distance from the Milky Way", value: 2.37e22, si_unit: "m", note: "About 2.537 million light-years" },
      { dimension: "speed", label: "Approach speed toward Milky Way", value: 110000, si_unit: "m/s", note: "About 110 km/s" },
    ],
  },
  {
    slug: "neutron-star",
    name: "Neutron Star (typical)",
    subtitle: "A collapsed stellar core with incredible density",
    category_id: "space-other",
    description:
      "A neutron star is the dense remnant core left behind after a massive star explodes as a supernova. Packing about 1.4 solar masses into a sphere only 20 km across, their density rivals that of an atomic nucleus. A teaspoon of neutron star material would weigh about 6 billion tonnes on Earth. The fastest neutron stars (pulsars) can spin hundreds of times per second.",
    search_terms: "neutron star|pulsar|magnetar|collapsed star|dense",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Typical diameter", value: 20000, si_unit: "m", note: "About 20 km" },
      { dimension: "mass", label: "Typical mass", value: 2.78e30, si_unit: "kg", note: "About 1.4 solar masses" },
{ dimension: "frequency", label: "Spin frequency (fast pulsar)", value: 716, si_unit: "Hz", note: "PSR J1748-2446ad, fastest known pulsar at 716 rotations per second" },
      { dimension: "time", label: "Rotation period (fast pulsar)", value: 0.00140, si_unit: "s", note: "Period of PSR J1748−2446ad" },
      { dimension: "temperature", label: "Surface temperature (young)", value: 1e6, si_unit: "K", note: "Young neutron stars; cools over millions of years" },
    ],
  },
  {
    slug: "halleys-comet",
    name: "Halley's Comet",
    subtitle: "The most famous periodic comet, visible every 75-79 years",
    category_id: "space-other",
    description:
      "Halley's Comet (1P/Halley) is the most well-known short-period comet, returning to the inner solar system roughly every 75-79 years. It was last visible from Earth in 1986 and will return around 2061. Edmund Halley first predicted its periodic return in 1705, making it the first comet recognized as periodic.",
    search_terms: "halley|comet|1p halley|periodic comet|1986",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Nucleus length", value: 15000, si_unit: "m", note: "Roughly 15 × 8 km, peanut-shaped" },
      { dimension: "length", label: "Nucleus width", value: 8000, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 2.2e14, si_unit: "kg" },
      { dimension: "time", label: "Orbital period", value: 2.38e9, si_unit: "s", note: "About 75.3 years" },
      { dimension: "speed", label: "Speed at perihelion", value: 54500, si_unit: "m/s", note: "About 196,000 km/h at closest approach to the Sun" },
      { dimension: "length", label: "Perihelion distance", value: 8.77e10, si_unit: "m", note: "About 0.586 AU" },
    ],
  },
  {
    slug: "asteroid-ceres",
    name: "Ceres",
    subtitle: "The largest object in the asteroid belt",
    category_id: "space-other",
    description:
      "Ceres is the largest object in the asteroid belt between Mars and Jupiter, and the only dwarf planet in the inner solar system. NASA's Dawn spacecraft orbited Ceres from 2015 to 2018, discovering bright salt deposits in Occator Crater that suggest recent geological activity. Ceres contains roughly a third of the entire mass of the asteroid belt.",
    search_terms: "ceres|asteroid|dwarf planet|asteroid belt|dawn",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Mean diameter", value: 939400, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 9.3835e20, si_unit: "kg" },
      { dimension: "speed", label: "Mean orbital speed", value: 17905, si_unit: "m/s" },
{ dimension: "temperature", label: "Surface temperature", value: 168, si_unit: "K", note: "Average, ranges from about 110 K to 235 K" },
      { dimension: "time", label: "Sidereal day length", value: 32667, si_unit: "s", note: "About 9.074 hours" },
      { dimension: "length", label: "Mean distance from the Sun", value: 4.14e11, si_unit: "m" },
    ],
  },
];
