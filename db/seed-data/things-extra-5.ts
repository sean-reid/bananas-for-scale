// ── Extra things seed data (batch 5) ──────────────────────────────────────
// Mythical & Fictional, Modern Buildings, Weather & Climate,
// Deep Sea & Ocean Life, Human Records & Feats, Toys & Games

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [
  {
    id: "mythical",
    name: "Mythical & Fictional",
    description:
      "Legendary creatures, magical artifacts, and iconic vehicles from fiction, sized according to their canonical or described dimensions.",
    sort_order: 33,
  },
  {
    id: "buildings-modern",
    name: "Modern Buildings",
    description:
      "Architectural marvels of the modern era, from museums to mega-malls, each pushing the boundaries of engineering and design.",
    sort_order: 34,
  },
  {
    id: "weather",
    name: "Weather & Climate",
    description:
      "The atmosphere's greatest hits: storms, lightning, fog, and the extreme conditions that shape life on Earth.",
    sort_order: 35,
  },
  {
    id: "ocean-life",
    name: "Deep Sea & Ocean Life",
    description:
      "Creatures and phenomena from the ocean depths, where sunlight fades and pressure crushes all but the most adapted life forms.",
    sort_order: 36,
  },
  {
    id: "human-feats",
    name: "Human Records & Feats",
    description:
      "The outer limits of human performance: records in strength, speed, endurance, and sheer stubbornness.",
    sort_order: 37,
  },
  {
    id: "toys-games",
    name: "Toys & Games",
    description:
      "Board games, building sets, and childhood classics measured with scientific precision, because fun deserves rigor too.",
    sort_order: 38,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MYTHICAL & FICTIONAL
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "death-star",
    name: "Death Star",
    subtitle: "The Galactic Empire's planet-killing battle station",
    category_id: "mythical",
    description:
      "The Death Star from Star Wars is a moon-sized space station with a diameter of 160 kilometers, capable of destroying entire planets with its superlaser. According to Star Wars canon, the first Death Star (DS-1) took roughly 20 years to construct and housed over a million Imperial personnel. Despite its terrifying power, it was famously vulnerable to a single well-placed proton torpedo, making it history's most expensive design oversight.",
    search_terms:
      "death star|star wars|galactic empire|space station|superlaser|ds-1",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter", value: 160000, si_unit: "m", note: "DS-1 Orbital Battle Station from Star Wars canon" },
      { dimension: "mass", label: "Estimated mass", value: 1e24, si_unit: "kg", note: "Estimated based on volume and assumed density" },
      { dimension: "length", label: "Superlaser dish diameter", value: 47000, si_unit: "m", note: "Approximately 29% of total diameter" },
    ],
  },

  {
    slug: "godzilla-2014",
    name: "Godzilla (2014)",
    subtitle: "The 2014 Legendary Pictures version of the King of the Monsters",
    category_id: "mythical",
    description:
      "The 2014 Legendary Godzilla stands 108.2 meters tall, making it the tallest live-action Godzilla at the time of its release. This version was designed to be plausible enough that audiences could almost believe a creature that size could exist, which required ignoring the square-cube law so hard that physicists everywhere wept. He is roughly 90,000 metric tons of atomic-breath-wielding lizard who just wants to restore balance to nature, one destroyed city block at a time.",
    search_terms:
      "godzilla|legendary godzilla|2014 godzilla|king of monsters|kaiju|monster",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 108.2, si_unit: "m", note: "Legendary Pictures 2014 version" },
      { dimension: "mass", label: "Mass", value: 90000000, si_unit: "kg", note: "90,000 metric tons per official stats" },
      { dimension: "length", label: "Tail length", value: 167.7, si_unit: "m", note: "Measured from base to tip" },
    ],
  },

  {
    slug: "hogwarts-castle",
    name: "Hogwarts Castle",
    subtitle: "The magical school of witchcraft and wizardry",
    category_id: "mythical",
    description:
      "Hogwarts School of Witchcraft and Wizardry is a sprawling medieval castle somewhere in the Scottish Highlands, hidden from Muggles by an impressive array of concealment charms. Based on the film adaptations and theme park reconstructions, the castle rises roughly 120 meters at its tallest tower and covers an estimated 46,000 square meters of floor space. The interior is famously larger than the exterior suggests, which is either magic or just very good architecture.",
    search_terms:
      "hogwarts|harry potter|wizarding school|magic castle|dumbledore|gryffindor",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (tallest tower)", value: 120, si_unit: "m", note: "Estimated from film models and theme park recreation" },
      { dimension: "area", label: "Estimated floor area", value: 46000, si_unit: "m^2", note: "Based on film depictions and described rooms" },
      { dimension: "length", label: "Great Hall length", value: 30, si_unit: "m", note: "Estimated from set design and descriptions" },
    ],
  },

  {
    slug: "the-one-ring",
    name: "The One Ring",
    subtitle: "The ruling ring forged by Sauron in the fires of Mount Doom",
    category_id: "mythical",
    description:
      "The One Ring from Tolkien's Lord of the Rings is a plain gold band forged by the Dark Lord Sauron in the volcanic fires of Mount Doom. At roughly 19 millimeters in diameter and 21 grams in mass, it is physically indistinguishable from an ordinary gold ring. Its most remarkable physical property is that it can only be destroyed at the specific temperature of its forging, estimated around 1100 degrees Celsius. Spiritually, it makes you invisible and slowly corrupts your soul, which is a lot of baggage for 21 grams.",
    search_terms:
      "one ring|lord of the rings|sauron|tolkien|precious|mount doom|ring of power",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Outer diameter", value: 0.019, si_unit: "m", note: "Sized for a hobbit finger" },
      { dimension: "mass", label: "Mass", value: 0.021, si_unit: "kg", note: "Consistent with a solid gold ring of this size" },
      { dimension: "temperature", label: "Melting point (estimated)", value: 1373, si_unit: "K", note: "Approximately 1100 degrees Celsius, the temperature of Mount Doom's forge" },
    ],
  },

  {
    slug: "mjolnir",
    name: "Mjolnir",
    subtitle: "Thor's enchanted hammer, forged from a dying star",
    category_id: "mythical",
    description:
      "Mjolnir is the legendary hammer wielded by Thor in both Norse mythology and Marvel Comics. According to Marvel canon, it was forged from Uru metal in the heart of a dying star and weighs 42.3 pounds (19.1 kg). The handle is 44.5 centimeters long, wrapped in leather. It can only be lifted by those deemed worthy, which conveniently excludes everyone except Thor and a select few, making it the universe's most exclusive gym equipment.",
    search_terms:
      "mjolnir|thor hammer|marvel|norse mythology|uru|asgard|worthy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Handle length", value: 0.445, si_unit: "m", note: "Marvel Comics official dimensions" },
      { dimension: "mass", label: "Mass", value: 19.1, si_unit: "kg", note: "42.3 pounds per Marvel canon" },
      { dimension: "length", label: "Head width", value: 0.15, si_unit: "m", note: "Estimated from comic depictions" },
      { dimension: "force", label: "Estimated impact force", value: 500000, si_unit: "N", note: "Rough estimate based on depicted feats" },
    ],
  },

  {
    slug: "millennium-falcon",
    name: "Millennium Falcon",
    subtitle: "The fastest hunk of junk in the galaxy",
    category_id: "mythical",
    description:
      "The Millennium Falcon is a modified YT-1300 Corellian light freighter, piloted by Han Solo and Chewbacca in the Star Wars saga. At 34.75 meters long, it is relatively compact for a starship but makes up for it with highly modified engines that famously made the Kessel Run in less than twelve parsecs. The ship has a crew capacity of 6 and can carry 100 metric tons of cargo, making it the galaxy's most heavily armed delivery van.",
    search_terms:
      "millennium falcon|star wars|han solo|chewbacca|yt-1300|corellian|kessel run",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length", value: 34.75, si_unit: "m", note: "Official Star Wars canon" },
      { dimension: "length", label: "Width", value: 25.61, si_unit: "m", note: "Widest point including mandibles" },
      { dimension: "length", label: "Height", value: 7.8, si_unit: "m", note: "From landing gear to dorsal turret" },
      { dimension: "mass", label: "Estimated mass", value: 100000, si_unit: "kg", note: "Estimated unladen mass" },
    ],
  },

  {
    slug: "smaug-dragon",
    name: "Smaug",
    subtitle: "The greatest and last of the great fire-drakes of Middle-earth",
    category_id: "mythical",
    description:
      "Smaug is the fearsome dragon from Tolkien's The Hobbit who conquered the Lonely Mountain and hoarded its treasure for 171 years. Based on Tolkien's descriptions and Peter Jackson's film adaptations, Smaug has an estimated wingspan of 60 meters and a body length of roughly 40 meters. He is intelligent enough to hold a conversation, vain enough to be flattered, and just slightly too confident about the gap in his jewel-encrusted underbelly.",
    search_terms:
      "smaug|dragon|tolkien|hobbit|lonely mountain|erebor|fire drake",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 60, si_unit: "m", note: "Estimated from Tolkien descriptions and film adaptation" },
      { dimension: "length", label: "Body length", value: 40, si_unit: "m", note: "Nose to tail, estimated" },
      { dimension: "temperature", label: "Fire breath temperature", value: 1773, si_unit: "K", note: "Estimated, hot enough to melt gold (1337 K)" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MODERN BUILDINGS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "guggenheim-museum-bilbao",
    name: "Guggenheim Museum Bilbao",
    subtitle: "Frank Gehry's titanium-clad masterpiece that revitalized a city",
    category_id: "buildings-modern",
    description:
      "The Guggenheim Museum Bilbao, designed by Frank Gehry and opened in 1997, is one of the most celebrated works of contemporary architecture. Its swirling titanium-clad forms cover 24,000 square meters of gallery space and rise 50 meters above the Nervion River. The building single-handedly transformed Bilbao from an industrial backwater into a global tourist destination, an economic phenomenon now known as the 'Bilbao Effect.' It looks like a fish made of aluminum foil, and that is meant as a compliment.",
    search_terms:
      "guggenheim|bilbao|frank gehry|titanium|museum|spain|basque|architecture",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 50, si_unit: "m" },
      { dimension: "area", label: "Total floor area", value: 24000, si_unit: "m^2", note: "Including 11,000 m^2 of exhibition space" },
      { dimension: "mass", label: "Titanium cladding mass", value: 60000, si_unit: "kg", note: "Approximately 33,000 titanium panels" },
      { dimension: "length", label: "Length", value: 256, si_unit: "m", note: "Along the riverside" },
    ],
  },

  {
    slug: "petronas-towers",
    name: "Petronas Towers",
    subtitle: "Kuala Lumpur's twin towers that held the world's tallest title from 1998 to 2004",
    category_id: "buildings-modern",
    description:
      "The Petronas Towers in Kuala Lumpur, designed by Cesar Pelli, were the tallest buildings in the world from 1998 to 2004. Each tower rises 452 meters and contains 88 floors. The iconic sky bridge connecting the two towers at levels 41 and 42 is 58 meters long and sits 170 meters above the ground. The towers used over 160,000 cubic meters of high-strength concrete, making them the tallest concrete structures on Earth. They were intentionally designed as twin towers to symbolize unity and harmony, which is a lot of symbolism for 300,000 tons of concrete and steel.",
    search_terms:
      "petronas towers|twin towers|kuala lumpur|malaysia|cesar pelli|sky bridge|tallest building",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height to pinnacle", value: 452, si_unit: "m", note: "Including spire" },
      { dimension: "mass", label: "Estimated total mass", value: 300000000, si_unit: "kg", note: "Each tower approximately 150,000 metric tons" },
      { dimension: "length", label: "Sky bridge length", value: 58, si_unit: "m", note: "Connects towers at floors 41-42" },
      { dimension: "length", label: "Sky bridge height above ground", value: 170, si_unit: "m" },
    ],
  },

  {
    slug: "sagrada-familia",
    name: "Sagrada Familia",
    subtitle: "Gaudi's unfinished basilica, under construction since 1882",
    category_id: "buildings-modern",
    description:
      "The Basilica de la Sagrada Familia in Barcelona is Antoni Gaudi's magnum opus, a cathedral so ambitious that it has been under construction since 1882 and is projected for completion around 2026. When finished, its tallest tower dedicated to Jesus Christ will reach 172.5 meters, making it the tallest church in the world. The basilica is 90 meters long and 60 meters wide, with an interior that mimics a forest canopy through branching columns. It is simultaneously a UNESCO World Heritage site and an active construction zone, which is a uniquely Catalan achievement.",
    search_terms:
      "sagrada familia|gaudi|barcelona|basilica|cathedral|spain|art nouveau|modernisme",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (tallest tower, when complete)", value: 172.5, si_unit: "m", note: "Jesus Christ tower, to be completed" },
      { dimension: "length", label: "Length", value: 90, si_unit: "m" },
      { dimension: "length", label: "Width", value: 60, si_unit: "m" },
      { dimension: "length", label: "Nave height", value: 45, si_unit: "m" },
    ],
  },

  {
    slug: "the-pentagon",
    name: "The Pentagon",
    subtitle: "The world's largest office building by floor area",
    category_id: "buildings-modern",
    description:
      "The Pentagon in Arlington, Virginia, is the headquarters of the United States Department of Defense and the world's largest office building by floor area. Built in just 16 months during World War II, each of its five sides is 281 meters long, and the building covers a total floor area of 116,000 square meters across five concentric rings and five floors. Despite its enormous size, no point in the building is more than a 7-minute walk from any other point, thanks to its pentagonal design. It has its own zip code, its own fire department, and roughly 23,000 workers who probably still get lost sometimes.",
    search_terms:
      "pentagon|defense department|arlington|virginia|military headquarters|dod|office building",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total floor area", value: 116000, si_unit: "m^2", note: "Largest office building by floor area" },
      { dimension: "length", label: "Side length", value: 281, si_unit: "m", note: "Each of the five sides" },
      { dimension: "length", label: "Height", value: 23.5, si_unit: "m", note: "5 floors above ground" },
      { dimension: "mass", label: "Estimated mass", value: 680000000, si_unit: "kg", note: "Estimated total structural mass" },
    ],
  },

  {
    slug: "burj-al-arab",
    name: "Burj Al Arab",
    subtitle: "Dubai's sail-shaped luxury hotel on its own artificial island",
    category_id: "buildings-modern",
    description:
      "The Burj Al Arab in Dubai stands 321 meters tall and is built on an artificial island 280 meters offshore. Designed to resemble the sail of a dhow, a traditional Arabian vessel, it was the world's tallest hotel when completed in 1999. The building contains 111,000 square meters of floor space across 56 floors, including a helipad on the 56th floor that has been repurposed for everything from tennis matches to golf drives. It styles itself as the world's only 7-star hotel, a rating that does not officially exist but somehow still feels accurate.",
    search_terms:
      "burj al arab|dubai hotel|sail building|luxury hotel|jumeirah|uae",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 321, si_unit: "m", note: "To the top of the mast" },
      { dimension: "area", label: "Total floor area", value: 111000, si_unit: "m^2" },
      { dimension: "length", label: "Distance from shore", value: 280, si_unit: "m", note: "Built on an artificial island" },
    ],
  },

  {
    slug: "dubai-mall",
    name: "Dubai Mall",
    subtitle: "The world's largest shopping mall by total area",
    category_id: "buildings-modern",
    description:
      "The Dubai Mall is the largest shopping mall in the world by total area, encompassing 502,000 square meters of retail space within a total built area of over 1.1 million square meters. It contains over 1,200 shops, an Olympic-sized ice rink, a 10-million-liter aquarium, and a 24-screen cinema. Opened in 2008, it attracts over 80 million visitors per year, making it the most visited building on the planet. It is less a mall and more a small city that happens to have a lot of shoe stores.",
    search_terms:
      "dubai mall|shopping mall|largest mall|dubai|aquarium|uae|retail",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 502000, si_unit: "m^2", note: "Retail floor area" },
      { dimension: "area", label: "Total built area", value: 1124000, si_unit: "m^2", note: "Including non-retail space" },
      { dimension: "mass", label: "Estimated structural mass", value: 1500000000, si_unit: "kg", note: "Rough estimate" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WEATHER & CLIMATE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "cumulus-cloud",
    name: "Cumulus Cloud",
    subtitle: "The puffy white cloud that looks like everything and weighs nothing... right?",
    category_id: "weather",
    description:
      "A typical cumulus cloud -- the fluffy, flat-bottomed variety you drew as a child -- contains roughly 500,000 kilograms of water in the form of tiny suspended droplets. That is about 500 metric tons floating overhead, held aloft by updrafts of warm air. The average cumulus spans about a kilometer across and occupies a billion cubic meters of sky at an altitude of around 2,000 meters. They form and dissolve in minutes to hours, which is a lot of drama for something that is 99.99997% air.",
    search_terms:
      "cumulus cloud|cloud|water vapor|sky|weather|atmosphere|cloud weight",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Water mass", value: 500000, si_unit: "kg", note: "Typical fair-weather cumulus" },
      { dimension: "volume", label: "Volume", value: 1e9, si_unit: "m^3", note: "Approximately 1 cubic kilometer" },
      { dimension: "length", label: "Typical altitude (base)", value: 2000, si_unit: "m", note: "Above ground level" },
      { dimension: "length", label: "Horizontal extent", value: 1000, si_unit: "m" },
    ],
  },

  {
    slug: "rainstorm",
    name: "A Rainstorm",
    subtitle: "A moderate rainstorm and all the energy it carries",
    category_id: "weather",
    description:
      "A moderate rainstorm covering an area of 100 square kilometers releases an astonishing amount of energy -- roughly 1 petajoule over its lifetime, equivalent to about 240,000 tons of TNT. This energy comes from the latent heat released when water vapor condenses into rain droplets. A typical storm lasts about two hours and drops roughly 25 millimeters of rain. The next time you are annoyed at getting wet, remember that you are standing beneath an event that dwarfs most nuclear weapons in total energy output.",
    search_terms:
      "rainstorm|rain|storm|precipitation|weather|rainfall|downpour",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Total energy released", value: 1e15, si_unit: "J", note: "From latent heat of condensation" },
      { dimension: "area", label: "Storm coverage area", value: 1e8, si_unit: "m^2", note: "100 square kilometers" },
      { dimension: "time", label: "Typical duration", value: 7200, si_unit: "s", note: "About 2 hours" },
      { dimension: "length", label: "Rainfall depth", value: 0.025, si_unit: "m", note: "25 mm typical moderate storm" },
    ],
  },

  {
    slug: "fog-bank",
    name: "Fog Bank",
    subtitle: "A low-lying cloud that reduces visibility to near zero",
    category_id: "weather",
    description:
      "A fog bank is essentially a cloud that forms at ground level, reducing horizontal visibility to under 1,000 meters by definition (under 100 meters for dense fog). A typical fog bank covering 10 square kilometers contains only about 500 kilograms of suspended water -- remarkably little for something that can shut down airports and cause multi-car pileups. The water droplets are so tiny (2 to 50 micrometers) that they remain suspended in the air, turning the world into a soft-focus photograph that is far more dangerous than it looks.",
    search_terms:
      "fog|fog bank|mist|visibility|low cloud|marine layer|ground cloud",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Visibility in dense fog", value: 100, si_unit: "m", note: "Dense fog threshold" },
      { dimension: "area", label: "Typical coverage area", value: 1e7, si_unit: "m^2", note: "10 square kilometers" },
      { dimension: "mass", label: "Suspended water mass", value: 500, si_unit: "kg", note: "For a typical 10 km^2 fog bank" },
      { dimension: "length", label: "Water droplet diameter", value: 0.00001, si_unit: "m", note: "10 micrometers typical" },
    ],
  },

  {
    slug: "dust-devil",
    name: "Dust Devil",
    subtitle: "A small, vigorous whirlwind made visible by dust and debris",
    category_id: "weather",
    description:
      "A dust devil is a strong, well-formed whirlwind that forms on clear, hot days when the sun heats the ground unevenly. Unlike tornadoes, dust devils form from the ground up rather than descending from clouds. A typical dust devil is about 50 meters in diameter and 300 meters tall, with wind speeds around 25 meters per second (90 km/h). They last only a few minutes and are generally harmless, though large ones can occasionally flip over portable structures. Mars has dust devils too, some of which are 10 kilometers tall, making Earth's versions look adorably small.",
    search_terms:
      "dust devil|whirlwind|dust storm|vortex|desert wind|willy-willy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 300, si_unit: "m", note: "Typical large dust devil" },
      { dimension: "speed", label: "Wind speed", value: 25, si_unit: "m/s", note: "About 90 km/h" },
      { dimension: "length", label: "Diameter", value: 50, si_unit: "m" },
      { dimension: "time", label: "Typical duration", value: 300, si_unit: "s", note: "Most last a few minutes" },
    ],
  },

  {
    slug: "heatwave-record",
    name: "Heatwave Record (Death Valley 1913)",
    subtitle: "The highest reliably recorded air temperature on Earth",
    category_id: "weather",
    description:
      "On July 10, 1913, the temperature at Furnace Creek Ranch in Death Valley, California, reached 56.7 degrees Celsius (134 degrees Fahrenheit), the highest reliably recorded air temperature in history. Death Valley's extreme heat results from its low elevation (86 meters below sea level), arid conditions, and surrounding mountains that trap hot air. During sustained heatwaves, nighttime temperatures can remain above 40 degrees Celsius, which means even the desert cannot cool off. The thermometer reading has been disputed by some climatologists, but it remains the official WMO record.",
    search_terms:
      "heatwave|heat wave|death valley|highest temperature|furnace creek|record temperature|extreme heat",
    featured: 0,
    measurements: [
      { dimension: "temperature", label: "Record temperature", value: 329.85, si_unit: "K", note: "56.7 degrees Celsius at Death Valley, July 10, 1913" },
      { dimension: "time", label: "Heatwave duration (approximate)", value: 86400, si_unit: "s", note: "Sustained extreme heat period of about 1 day" },
      { dimension: "length", label: "Elevation of Furnace Creek", value: -86, si_unit: "m", note: "86 meters below sea level" },
    ],
  },

  {
    slug: "blizzard",
    name: "Blizzard",
    subtitle: "A severe snowstorm with sustained winds over 56 km/h",
    category_id: "weather",
    description:
      "A blizzard is officially defined as a snowstorm with sustained winds of at least 56 km/h (about 15.6 m/s), visibility below 400 meters, and a duration of at least 3 hours. Major blizzards can dump 0.05 cubic meters of snow per square meter per hour while driving temperatures down to minus 20 degrees Celsius or lower. Wind chill can make it feel far colder. The Great Blizzard of 1888 buried parts of the northeastern United States under 1.5 meters of snow and killed over 400 people, helping to convince New York City to bury its power lines and build the subway.",
    search_terms:
      "blizzard|snowstorm|winter storm|whiteout|snow|severe weather|nor'easter",
    featured: 0,
    measurements: [
      { dimension: "speed", label: "Minimum sustained wind speed", value: 15.6, si_unit: "m/s", note: "Official blizzard threshold: 56 km/h" },
      { dimension: "volume", label: "Snowfall rate", value: 0.05, si_unit: "m^3", note: "Per square meter per hour in heavy blizzard" },
      { dimension: "temperature", label: "Typical temperature", value: 253, si_unit: "K", note: "About -20 degrees Celsius" },
      { dimension: "length", label: "Visibility", value: 400, si_unit: "m", note: "Maximum visibility to qualify as blizzard" },
    ],
  },

  {
    slug: "polar-vortex",
    name: "Polar Vortex",
    subtitle: "A persistent large-scale cyclone near the Earth's poles",
    category_id: "weather",
    description:
      "The polar vortex is a massive low-pressure system that circulates counterclockwise around the Arctic (and clockwise around the Antarctic) in the upper atmosphere. It spans roughly 5,000 kilometers in diameter, with wind speeds reaching 100 meters per second (360 km/h) at the boundary jet stream. The stratospheric temperature inside can drop to minus 80 degrees Celsius. When the polar vortex weakens and wobbles southward, it delivers extreme cold snaps to normally temperate regions, giving weather forecasters something dramatic to talk about on the evening news.",
    search_terms:
      "polar vortex|arctic vortex|cold snap|jet stream|stratosphere|arctic|extreme cold",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 5000000, si_unit: "m", note: "Approximately 5,000 km across" },
      { dimension: "speed", label: "Jet stream wind speed", value: 100, si_unit: "m/s", note: "At the vortex boundary, about 360 km/h" },
      { dimension: "temperature", label: "Stratospheric temperature", value: 193, si_unit: "K", note: "About -80 degrees Celsius" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DEEP SEA & OCEAN LIFE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "anglerfish",
    name: "Anglerfish",
    subtitle: "The deep-sea predator that fishes with a built-in light",
    category_id: "ocean-life",
    description:
      "The deep-sea anglerfish is one of the ocean's most recognizable and unsettling creatures. Females grow to about 20 centimeters long and weigh around 50 grams, with a bioluminescent lure dangling from a modified dorsal spine to attract prey in the perpetual darkness below 1,000 meters. Males are dramatically smaller -- sometimes just a few centimeters -- and their life goal is to find a female, bite her, and fuse permanently to her body, becoming a parasitic appendage that provides sperm on demand. This is widely regarded as the worst dating strategy in the animal kingdom.",
    search_terms:
      "anglerfish|angler fish|deep sea fish|bioluminescence|lure fish|deep ocean",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Female body length", value: 0.2, si_unit: "m", note: "Typical deep-sea anglerfish species" },
      { dimension: "mass", label: "Female mass", value: 0.05, si_unit: "kg" },
      { dimension: "length", label: "Typical depth", value: 1000, si_unit: "m", note: "Found below 1,000 meters" },
      { dimension: "power", label: "Bioluminescence power", value: 0.001, si_unit: "W", note: "Approximate light output of the lure" },
    ],
  },

  {
    slug: "giant-isopod",
    name: "Giant Isopod",
    subtitle: "The deep-sea crustacean that looks like an enormous pill bug",
    category_id: "ocean-life",
    description:
      "The giant isopod (Bathynomus giganteus) is a deep-sea crustacean that can reach 50 centimeters in length and 1.7 kilograms in mass, making it the largest known isopod. Found at depths around 2,000 meters, it resembles an enormous version of the common pill bug (woodlouse) you might find in your garden, except this one lives in crushing darkness and has adapted to survive months or even years without food. In 2014, a giant isopod in a Japanese aquarium famously refused to eat for over five years before dying, setting a record for the world's most committed hunger strike.",
    search_terms:
      "giant isopod|bathynomus|deep sea crustacean|pill bug|woodlouse|isopod|deep sea",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.5, si_unit: "m", note: "Maximum recorded size" },
      { dimension: "mass", label: "Mass", value: 1.7, si_unit: "kg" },
      { dimension: "length", label: "Typical depth", value: 2000, si_unit: "m" },
    ],
  },

  {
    slug: "colossal-squid",
    name: "Colossal Squid",
    subtitle: "The heaviest known invertebrate, with eyes the size of dinner plates",
    category_id: "ocean-life",
    description:
      "The colossal squid (Mesonychoteuthis hamiltoni) is the heaviest known living invertebrate, reaching up to 14 meters in length and 495 kilograms in mass. Its eyes are the largest of any known animal at 27 centimeters in diameter -- roughly the size of a dinner plate -- allowing it to detect bioluminescent prey in the near-total darkness of the deep ocean. Unlike the giant squid's sucker-lined tentacles, the colossal squid's tentacles are armed with sharp, swiveling hooks. Very few intact specimens have been recovered, meaning most of what we know comes from pieces found in the stomachs of sperm whales.",
    search_terms:
      "colossal squid|mesonychoteuthis|giant squid|largest invertebrate|deep sea|squid eyes|cephalopod",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 14, si_unit: "m", note: "Estimated maximum" },
      { dimension: "mass", label: "Mass", value: 495, si_unit: "kg", note: "Heaviest known living invertebrate" },
      { dimension: "length", label: "Eye diameter", value: 0.27, si_unit: "m", note: "Largest eyes of any known animal" },
    ],
  },

  {
    slug: "deep-sea-hydrothermal-vent",
    name: "Deep Sea Hydrothermal Vent",
    subtitle: "An underwater volcanic chimney spewing superheated mineral-rich water",
    category_id: "ocean-life",
    description:
      "Deep sea hydrothermal vents, also called black smokers, are underwater chimneys that form when superheated water (up to 400 degrees Celsius) erupts from the ocean floor at mid-ocean ridges. Despite water temperatures that would melt lead at surface pressure, the extreme pressure at 2,000+ meters depth keeps the water in a liquid state. The mineral-rich fluid supports thriving ecosystems of tube worms, crabs, and bacteria that derive energy from chemosynthesis rather than sunlight. These vents are considered one of the most plausible environments for the origin of life on Earth.",
    search_terms:
      "hydrothermal vent|black smoker|deep sea vent|ocean floor|mid-ocean ridge|chemosynthesis|volcanic vent",
    featured: 1,
    measurements: [
      { dimension: "temperature", label: "Water temperature", value: 673, si_unit: "K", note: "Up to 400 degrees Celsius at the vent opening" },
      { dimension: "pressure", label: "Ambient pressure", value: 25000000, si_unit: "Pa", note: "At typical depth of 2,500 meters" },
      { dimension: "length", label: "Chimney height", value: 60, si_unit: "m", note: "Tallest recorded chimney structures" },
    ],
  },

  {
    slug: "sperm-whale",
    name: "Sperm Whale",
    subtitle: "The deepest-diving mammal and owner of the largest brain on Earth",
    category_id: "ocean-life",
    description:
      "The sperm whale (Physeter macrocephalus) is the largest toothed predator on Earth, reaching 18 meters in length and 45,000 kilograms in mass. Its enormous head makes up one-third of its body length and houses the largest brain of any animal (about 7.8 kg) plus a massive organ filled with spermaceti oil. Sperm whales routinely dive to 2,250 meters and can hold their breath for over 90 minutes while hunting giant squid in the abyss. Their clicks are the loudest biological sounds ever recorded at 230 decibels, technically loud enough to vibrate a human to death at close range.",
    search_terms:
      "sperm whale|physeter|toothed whale|deep dive|largest brain|whale|moby dick|cetacean",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 18, si_unit: "m", note: "Large adult male" },
      { dimension: "mass", label: "Mass", value: 45000, si_unit: "kg" },
      { dimension: "length", label: "Maximum dive depth", value: 2250, si_unit: "m", note: "Deepest reliably recorded dive" },
      { dimension: "speed", label: "Swimming speed", value: 9, si_unit: "m/s", note: "Top speed, about 32 km/h" },
    ],
  },

  {
    slug: "bluefin-tuna",
    name: "Atlantic Bluefin Tuna",
    subtitle: "The warm-blooded torpedo of the open ocean",
    category_id: "ocean-life",
    description:
      "The Atlantic bluefin tuna (Thunnus thynnus) is one of the largest and fastest bony fish in the sea, reaching 3 meters in length and 680 kilograms in mass. Unlike most fish, bluefin tuna are warm-blooded, maintaining body temperatures up to 21 degrees above the surrounding water, which gives them the sustained power to swim at speeds up to 20 meters per second (72 km/h). A single large bluefin sold for $3.1 million at Tokyo's Tsukiji fish market in 2019, making it pound-for-pound one of the most valuable animals on Earth.",
    search_terms:
      "bluefin tuna|tuna|thunnus|fish|sushi|sashimi|atlantic tuna|pelagic fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3, si_unit: "m", note: "Large adult" },
      { dimension: "mass", label: "Mass", value: 680, si_unit: "kg", note: "Maximum recorded" },
      { dimension: "speed", label: "Top speed", value: 20, si_unit: "m/s", note: "About 72 km/h" },
    ],
  },

  {
    slug: "portuguese-man-of-war",
    name: "Portuguese Man-of-War",
    subtitle: "Not a jellyfish but a floating colony with a devastating sting",
    category_id: "ocean-life",
    description:
      "The Portuguese man-of-war (Physalia physalis) is not a single animal but a colonial organism made up of specialized polyps working together. Its gas-filled float (pneumatophore) is about 30 centimeters long and sits above the waterline like a small sail, while its tentacles trail up to 30 meters below the surface. Each tentacle is covered in nematocysts that deliver an intensely painful venom capable of killing small fish instantly and occasionally causing fatal reactions in humans. Even dead specimens washed up on beaches can still sting, making them the gift that keeps on giving.",
    search_terms:
      "portuguese man-of-war|man of war|physalia|bluebottle|colonial organism|jellyfish|siphonophore",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tentacle length", value: 30, si_unit: "m", note: "Maximum extended length" },
      { dimension: "length", label: "Float (pneumatophore) length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Float height above water", value: 0.15, si_unit: "m" },
    ],
  },

  {
    slug: "coral-polyp",
    name: "Coral Polyp",
    subtitle: "The tiny animal that builds the largest living structures on Earth",
    category_id: "ocean-life",
    description:
      "A single coral polyp is a tiny soft-bodied animal typically just 1 to 3 millimeters in diameter, weighing about 1 milligram. Despite their minuscule size, colonies of coral polyps are responsible for building the largest biological structures on Earth -- the Great Barrier Reef stretches over 2,300 kilometers. Each polyp secretes calcium carbonate to form a hard skeleton, and over thousands of years these skeletons accumulate into massive reef structures. Coral polyps also maintain a symbiotic relationship with photosynthetic algae called zooxanthellae, which give corals their color and produce up to 90% of their energy. When stressed by heat, corals expel these algae and bleach white, which is as bad as it looks.",
    search_terms:
      "coral polyp|coral|reef|great barrier reef|zooxanthellae|cnidarian|coral bleaching",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.003, si_unit: "m", note: "Typical individual polyp" },
      { dimension: "mass", label: "Mass", value: 0.000001, si_unit: "kg", note: "About 1 milligram per polyp" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HUMAN RECORDS & FEATS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "deepest-scuba-dive",
    name: "Deepest Scuba Dive",
    subtitle: "Ahmed Gabr's record-breaking 332-meter descent",
    category_id: "human-feats",
    description:
      "On September 18, 2014, Egyptian diver Ahmed Gabr set the world record for the deepest scuba dive at 332.35 meters in the Red Sea off Dahab, Egypt. The descent took about 14 minutes, but the ascent required over 13 hours of carefully staged decompression stops to avoid the bends. At that depth, the water pressure exceeds 34 atmospheres, or about 3.4 megapascals. The dive required multiple gas mixtures, including trimix (helium, nitrogen, and oxygen) and pure oxygen for the final decompression stages. Gabr spent 4 years planning and training for roughly 14 minutes of going down.",
    search_terms:
      "deepest scuba dive|ahmed gabr|scuba record|deep dive|dahab|red sea|diving record",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Depth", value: 332, si_unit: "m", note: "332.35 m, Guinness World Record" },
      { dimension: "time", label: "Descent time", value: 840, si_unit: "s", note: "About 14 minutes" },
      { dimension: "pressure", label: "Water pressure at depth", value: 3400000, si_unit: "Pa", note: "About 34 atmospheres" },
      { dimension: "time", label: "Ascent time", value: 46800, si_unit: "s", note: "About 13 hours of decompression" },
    ],
  },

  {
    slug: "highest-skydive-baumgartner",
    name: "Highest Skydive (Felix Baumgartner)",
    subtitle: "The jump from the edge of space that broke the sound barrier",
    category_id: "human-feats",
    description:
      "On October 14, 2012, Austrian skydiver Felix Baumgartner jumped from a helium balloon at 39,045 meters altitude -- the stratosphere, where the sky is black and the curvature of the Earth is visible. During his 4 minute and 20 second freefall, he reached a maximum speed of 373 meters per second (1,342 km/h), becoming the first human to break the sound barrier without a vehicle. The total descent, including parachute phase, lasted about 9 minutes and 3 seconds. The entire event was watched live by 8 million people on YouTube, making it the most-viewed livestream at the time.",
    search_terms:
      "felix baumgartner|highest skydive|red bull stratos|space jump|stratosphere jump|sound barrier freefall",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Jump altitude", value: 39045, si_unit: "m", note: "Edge of the stratosphere" },
      { dimension: "speed", label: "Maximum freefall speed", value: 373, si_unit: "m/s", note: "Mach 1.25 -- broke the sound barrier" },
      { dimension: "time", label: "Freefall duration", value: 260, si_unit: "s", note: "4 minutes 20 seconds" },
      { dimension: "time", label: "Total descent time", value: 543, si_unit: "s", note: "Including parachute phase" },
    ],
  },

  {
    slug: "longest-held-breath",
    name: "Longest Held Breath",
    subtitle: "Budimir Sobat's 24 minute 37 second breath-hold record",
    category_id: "human-feats",
    description:
      "On March 27, 2021, Croatian freediver Budimir Sobat held his breath for 24 minutes and 37 seconds (1,477 seconds), setting the Guinness World Record for static apnea. The technique involves hyperventilating with pure oxygen beforehand to supersaturate the blood, then lying face-down in a pool while the body slowly consumes its oxygen reserves. Heart rate drops to as low as 20 beats per minute as the mammalian dive reflex kicks in. The urge to breathe becomes excruciating after about 5 minutes for most people, meaning Sobat endured nearly 20 minutes of what his brain was screaming was certain death.",
    search_terms:
      "longest breath hold|breath holding record|static apnea|budimir sobat|freediving|breath hold",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Duration", value: 1477, si_unit: "s", note: "24 minutes 37 seconds, Guinness World Record (2021)" },
    ],
  },

  {
    slug: "most-pull-ups-24-hours",
    name: "Most Pull-ups in 24 Hours",
    subtitle: "An extraordinary endurance record of over 7,600 pull-ups",
    category_id: "human-feats",
    description:
      "The Guinness World Record for most pull-ups in 24 hours is 7,715, set by Brandon Tucker in 2023. That averages out to about 5.4 pull-ups per minute, sustained for an entire day. Assuming an average body mass of about 80 kg and a pull distance of roughly 0.5 meters per rep, the total mechanical work performed is approximately 30 million joules, not counting the metabolic inefficiency of human muscles. The actual caloric expenditure is estimated at several times that. Tucker reportedly took only brief rest breaks throughout, which redefines what most people consider a 'long workout.'",
    search_terms:
      "pull-ups record|most pull-ups|24 hour pull-ups|endurance record|brandon tucker|calisthenics record",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Duration", value: 86400, si_unit: "s", note: "24 hours" },
      { dimension: "energy", label: "Estimated mechanical work", value: 3e7, si_unit: "J", note: "Based on ~7,700 reps at ~80 kg over ~0.5 m" },
    ],
  },

  {
    slug: "fastest-mile-run",
    name: "Fastest Mile Run",
    subtitle: "Hicham El Guerrouj's 3:43.13 world record mile",
    category_id: "human-feats",
    description:
      "On July 7, 1999, Moroccan runner Hicham El Guerrouj ran a mile (1,609.34 meters) in 3 minutes 43.13 seconds in Rome, a world record that has stood for over 25 years. His average speed was 7.21 meters per second (about 26 km/h), sustained for nearly four minutes. The mile record holds a special place in athletics history: Roger Bannister's breaking of the 4-minute barrier in 1954 was considered one of the great achievements of the 20th century. El Guerrouj shattered that by nearly 17 seconds, suggesting that human legs still had a lot more to give than anyone expected.",
    search_terms:
      "fastest mile|mile record|hicham el guerrouj|sub-4 minute mile|running record|track and field|middle distance",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Distance", value: 1609.34, si_unit: "m", note: "One mile" },
      { dimension: "time", label: "Record time", value: 223.13, si_unit: "s", note: "3:43.13 set in Rome, 1999" },
      { dimension: "speed", label: "Average speed", value: 7.21, si_unit: "m/s", note: "About 26 km/h" },
    ],
  },

  {
    slug: "heaviest-deadlift",
    name: "Heaviest Deadlift",
    subtitle: "Hafthor Bjornsson's 501 kg world record pull",
    category_id: "human-feats",
    description:
      "On May 2, 2020, Icelandic strongman Hafthor Bjornsson (best known as 'The Mountain' from Game of Thrones) deadlifted 501 kilograms, breaking Eddie Hall's previous record of 500 kg. The lift was performed in his home gym in Iceland during pandemic lockdowns and livestreamed to millions. The barbell and plates exert a gravitational force of approximately 4,915 newtons, which Bjornsson's body had to overcome through a coordinated effort of his legs, back, and grip. The lift lasted only a few seconds, during which his face turned a shade of red not found in nature.",
    search_terms:
      "heaviest deadlift|deadlift record|hafthor bjornsson|the mountain|strongman|501 kg|powerlifting",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass lifted", value: 501, si_unit: "kg", note: "World record, May 2, 2020" },
      { dimension: "force", label: "Gravitational force", value: 4915, si_unit: "N", note: "501 kg x 9.81 m/s^2" },
      { dimension: "length", label: "Lift height", value: 0.7, si_unit: "m", note: "Approximate distance from floor to lockout" },
    ],
  },

  {
    slug: "tallest-human-tower",
    name: "Tallest Human Tower (Castells)",
    subtitle: "The Catalan tradition of building towers out of people",
    category_id: "human-feats",
    description:
      "Castells are human towers built by groups called colles in Catalonia, Spain, a tradition dating back to the 18th century and recognized by UNESCO as Intangible Cultural Heritage. The tallest castells reach 10 complete levels plus the crowning child (enxaneta), achieving heights of roughly 12 meters. A castell can involve several hundred people: the pinya (base) alone may contain 200 or more members packed tightly to support the weight above. The entire structure is held together by nothing but grip strength, balance, and an apparently Catalan disregard for the laws of structural engineering.",
    search_terms:
      "human tower|castells|catalan towers|castellers|human pyramid|catalonia|enxaneta",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 12, si_unit: "m", note: "Estimated for a 10-level castell with crowning child" },
      { dimension: "mass", label: "Total mass of participants", value: 15000, si_unit: "kg", note: "Estimated for ~200 people in the structure" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TOYS & GAMES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "lego-millennium-falcon-set",
    name: "LEGO Millennium Falcon (Set 75192)",
    subtitle: "The largest LEGO set by piece count at the time of release",
    category_id: "toys-games",
    description:
      "The LEGO Ultimate Collector Series Millennium Falcon (set 75192), released in 2017, was the largest LEGO set ever produced at the time with 7,541 pieces. The completed model measures 84 centimeters long, 56 centimeters wide, and 21 centimeters tall, and weighs 5.2 kilograms. It takes an estimated 30+ hours to build, costs around $850, and requires a dedicated display surface that will generate at least one argument about furniture placement. The instruction manual alone is 496 pages, which is longer than many novels and significantly less forgiving of skipped pages.",
    search_terms:
      "lego millennium falcon|lego star wars|75192|ucs falcon|lego set|largest lego|building blocks",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Completed mass", value: 5.2, si_unit: "kg" },
      { dimension: "length", label: "Length", value: 0.84, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.56, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.21, si_unit: "m", note: "7,541 pieces total" },
    ],
  },

  {
    slug: "monopoly-board",
    name: "Monopoly Board",
    subtitle: "The board game that has ended more friendships than social media",
    category_id: "toys-games",
    description:
      "A standard Monopoly board is 50.8 centimeters (20 inches) square when unfolded, giving it an area of about 0.258 square meters. The complete game set, including board, pieces, cards, money, houses, and hotels, weighs approximately 900 grams. Monopoly was first published by Parker Brothers in 1935 and has since been sold in over 114 countries and 47 languages. The longest game on record lasted 70 days. The game was originally designed to demonstrate the problems of wealth concentration, which it does very effectively by making everyone at the table miserable except one person.",
    search_terms:
      "monopoly|board game|parker brothers|hasbro|property trading|game board|tabletop game",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Board area (unfolded)", value: 0.258, si_unit: "m^2", note: "50.8 cm x 50.8 cm" },
      { dimension: "mass", label: "Complete game mass", value: 0.9, si_unit: "kg", note: "Board, pieces, cards, and money" },
      { dimension: "length", label: "Board side length", value: 0.508, si_unit: "m" },
    ],
  },

  {
    slug: "jenga-tower-full",
    name: "Jenga Tower (Full Height)",
    subtitle: "54 wooden blocks stacked into a tower of increasing anxiety",
    category_id: "toys-games",
    description:
      "A complete Jenga tower at starting height stands about 25 centimeters tall, built from 54 wooden blocks arranged in 18 layers of three. Each block measures 7.5 cm long, 2.5 cm wide, and 1.5 cm tall, and the complete set weighs about 540 grams. During play, as blocks are removed from lower levels and placed on top, the tower can reach heights of 45 centimeters or more before its inevitable dramatic collapse. The force required to slide out a block ranges from about 1 to 5 newtons depending on how much weight it bears, making Jenga simultaneously a game of physics, dexterity, and psychological warfare.",
    search_terms:
      "jenga|stacking game|wooden blocks|tower game|block removal|dexterity game",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Maximum play height", value: 0.45, si_unit: "m", note: "When all blocks are restacked on top" },
      { dimension: "mass", label: "Total mass", value: 0.54, si_unit: "kg", note: "54 wooden blocks" },
      { dimension: "force", label: "Force to remove a loaded block", value: 5, si_unit: "N", note: "Approximate maximum for a weight-bearing block" },
      { dimension: "length", label: "Individual block length", value: 0.075, si_unit: "m" },
    ],
  },

  {
    slug: "hot-wheels-car",
    name: "Hot Wheels Car",
    subtitle: "The 1:64 scale die-cast car that has outsold real cars",
    category_id: "toys-games",
    description:
      "A standard Hot Wheels car is built at 1:64 scale, measuring about 7.6 centimeters long and weighing roughly 30 grams. Since their introduction by Mattel in 1968, over 6 billion Hot Wheels cars have been produced -- enough for nearly every person on Earth. If placed bumper to bumper, those 6 billion cars would stretch over 456,000 kilometers, enough to circle the Earth more than 11 times. They come with low-friction axles and wheels, which is why a Hot Wheels car rolling off a table achieves a surprisingly impressive speed relative to its size.",
    search_terms:
      "hot wheels|die-cast car|mattel|toy car|1:64 scale|miniature car|matchbox",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.076, si_unit: "m", note: "1:64 scale" },
      { dimension: "mass", label: "Mass", value: 0.03, si_unit: "kg", note: "Standard die-cast model" },
      { dimension: "length", label: "Width", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.02, si_unit: "m" },
    ],
  },

  {
    slug: "standard-playing-card",
    name: "Standard Playing Card",
    subtitle: "The poker-size card used in everything from solitaire to magic tricks",
    category_id: "toys-games",
    description:
      "A standard poker-size playing card measures 8.89 centimeters long by 6.35 centimeters wide, with a thickness of about 0.3 millimeters and a mass of approximately 1.8 grams. A full deck of 52 cards (plus jokers) weighs about 94 grams. The modern design with two-headed court cards dates to the mid-19th century, allowing players to read their hand without flipping cards upside down. A single card has an area of 56.5 square centimeters, which is just enough real estate to hide an ace up your sleeve but not enough to hide your poker face.",
    search_terms:
      "playing card|poker card|deck of cards|card game|52 cards|bridge card|standard deck",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.0889, si_unit: "m", note: "Poker size, 3.5 inches" },
      { dimension: "length", label: "Width", value: 0.0635, si_unit: "m", note: "Poker size, 2.5 inches" },
      { dimension: "mass", label: "Mass (single card)", value: 0.0018, si_unit: "kg" },
      { dimension: "area", label: "Face area", value: 0.00565, si_unit: "m^2" },
    ],
  },

  {
    slug: "chess-board",
    name: "Chess Board",
    subtitle: "64 squares of strategic possibility",
    category_id: "toys-games",
    description:
      "A standard tournament chess board measures 40 centimeters (about 16 inches) per side, with each of the 64 squares being 5 centimeters across. The board alone weighs about 500 grams, though a complete set with pieces can weigh considerably more depending on materials. Chess has been played for over 1,500 years, and the number of possible games is estimated at 10 to the power of 120, a number so vast it exceeds the total number of atoms in the observable universe. All of this complexity unfolds on 0.16 square meters of alternating light and dark squares.",
    search_terms:
      "chess board|chess|chessboard|tournament chess|board game|strategy game|64 squares",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Board area", value: 0.16, si_unit: "m^2", note: "40 cm x 40 cm tournament standard" },
      { dimension: "mass", label: "Board mass", value: 0.5, si_unit: "kg", note: "Board only, without pieces" },
      { dimension: "length", label: "Side length", value: 0.4, si_unit: "m" },
      { dimension: "length", label: "Square size", value: 0.05, si_unit: "m", note: "Each of 64 squares" },
    ],
  },

  {
    slug: "yo-yo",
    name: "Yo-Yo",
    subtitle: "The ancient toy that turns gravity into entertainment",
    category_id: "toys-games",
    description:
      "A standard yo-yo has a diameter of about 5.7 centimeters, weighs roughly 60 grams, and uses a string approximately 1.06 meters long. The yo-yo is one of the oldest toys in history, with depictions appearing on Greek vases from 500 BCE. Modern competitive yo-yos are precision-engineered with ball bearings, aluminum bodies, and response pads, spinning at over 3,000 RPM and sleeping for several minutes. The physics are elegant: the yo-yo converts potential energy to kinetic energy (both translational and rotational) as it descends, and a skilled player can recover nearly all of that energy on the return. It is, in essence, a gyroscope on a string that also happens to be fun.",
    search_terms:
      "yo-yo|yoyo|yo yo|string toy|spinning toy|sleep trick|competitive yoyo",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.057, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.06, si_unit: "kg" },
      { dimension: "length", label: "String length", value: 1.06, si_unit: "m" },
    ],
  },
];
