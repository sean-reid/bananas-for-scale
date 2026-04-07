import type { ThingInput } from "../types";

export const categoriesData = [
  {
    id: "stadiums",
    name: "Stadiums",
    description:
      "The colossal arenas where humanity gathers to scream at people chasing balls.",
    sort_order: 15,
  },
  {
    id: "statues",
    name: "Statues & Monuments",
    description:
      "Giant sculptures and carved monuments that prove humans love building really big versions of themselves.",
    sort_order: 16,
  },
  {
    id: "everyday-places",
    name: "Everyday Places",
    description:
      "The buildings and spaces you walk through daily without ever wondering how many bananas they are.",
    sort_order: 17,
  },
];

export const thingsData: ThingInput[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // TOWERS & SKYSCRAPERS
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "empire-state-building",
    name: "Empire State Building",
    subtitle: "New York City's most iconic Art Deco skyscraper",
    category_id: "towers",
    description:
      "Completed in 1931 in just 410 days, the Empire State Building held the title of world's tallest building for nearly 40 years. Its lightning rod gets struck by lightning about 20-25 times per year, which honestly seems like a lot. It has 73 elevators and its own zip code.",
    search_terms:
      "empire state|new york|nyc|skyscraper|art deco|manhattan|king kong",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height to roof", value: 381, si_unit: "m" },
      {
        dimension: "length",
        label: "Height with antenna",
        value: 443.2,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Total mass",
        value: 331000000,
        si_unit: "kg",
        note: "Including the building and its foundation",
      },
      { dimension: "area", label: "Total floor area", value: 257000, si_unit: "m²" },
      {
        dimension: "length",
        label: "Base width (5th Ave side)",
        value: 129,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Base depth (33rd St side)",
        value: 57,
        si_unit: "m",
      },
      {
        dimension: "volume",
        label: "Enclosed volume",
        value: 1045000,
        si_unit: "m³",
        note: "Approximate total enclosed volume",
      },
      {
        dimension: "speed",
        label: "Elevator speed",
        value: 6.1,
        si_unit: "m/s",
        note: "Express elevators",
      },
    ],
  },

  {
    slug: "cn-tower",
    name: "CN Tower",
    subtitle: "Toronto's needle in the sky and Canada's tallest structure",
    category_id: "towers",
    description:
      "The CN Tower was the world's tallest free-standing structure from 1975 until the Burj Khalifa overtook it in 2007. Its glass floor at 342 meters lets visitors stare straight down at Toronto, which is a great way to discover if you're afraid of heights. The tower flexes up to 1.1 meters in high winds.",
    search_terms:
      "cn tower|toronto|canada|communications tower|edgewalk|ontario",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Total height",
        value: 553.3,
        si_unit: "m",
        note: "Including antenna",
      },
      {
        dimension: "mass",
        label: "Total mass",
        value: 117910000,
        si_unit: "kg",
        note: "130,000 tons of reinforced concrete",
      },
      {
        dimension: "length",
        label: "Main observation deck height",
        value: 346,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "SkyPod height",
        value: 447,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Foundation depth",
        value: 15,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Base hexagonal width",
        value: 30,
        si_unit: "m",
        note: "Maximum width of the hollow hexagonal base",
      },
      {
        dimension: "speed",
        label: "Elevator speed",
        value: 6,
        si_unit: "m/s",
        note: "Glass-front elevators reach the Look Out level in 58 seconds",
      },
    ],
  },

  {
    slug: "shanghai-tower",
    name: "Shanghai Tower",
    subtitle: "China's tallest building and the world's second tallest",
    category_id: "towers",
    description:
      "The Shanghai Tower twists a full 120 degrees from base to tip, which reduces wind loads by 24% and looks extremely cool. It holds the world's fastest elevators at 20.5 m/s and has nine distinct zones stacked like vertical neighborhoods. The double-skin facade creates atriums between the inner and outer walls.",
    search_terms:
      "shanghai tower|china|tallest|supertall|pudong|twisted tower",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total height", value: 632, si_unit: "m" },
      {
        dimension: "mass",
        label: "Estimated total mass",
        value: 850000000,
        si_unit: "kg",
        note: "Approximate structural and finishing mass",
      },
      {
        dimension: "area",
        label: "Total floor area",
        value: 380000,
        si_unit: "m²",
      },
      {
        dimension: "length",
        label: "Foundation depth",
        value: 86,
        si_unit: "m",
      },
      {
        dimension: "speed",
        label: "Fastest elevator speed",
        value: 20.5,
        si_unit: "m/s",
        note: "World's fastest elevators by Mitsubishi",
      },
      {
        dimension: "length",
        label: "Base footprint diameter",
        value: 63,
        si_unit: "m",
        note: "Approximate ground-level diameter",
      },
      {
        dimension: "energy",
        label: "Annual wind turbine energy output",
        value: 540000000000,
        si_unit: "J",
        note: "270 wind turbines generate ~150,000 kWh/year",
      },
    ],
  },

  {
    slug: "taipei-101",
    name: "Taipei 101",
    subtitle: "Taiwan's bamboo-inspired supertall with a giant pendulum inside",
    category_id: "towers",
    description:
      "Taipei 101 was the world's tallest building from 2004 to 2010. Its design is inspired by a bamboo stalk, with eight sections of eight floors each (eight being a lucky number in Chinese culture). Inside hangs a 660-tonne tuned mass damper -- the world's largest -- that sways to counteract typhoon winds. You can watch it move during storms, which is both reassuring and terrifying.",
    search_terms:
      "taipei 101|taiwan|bamboo tower|tuned mass damper|tallest building",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Height including spire",
        value: 508,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Height to roof",
        value: 449.2,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Estimated total mass",
        value: 700000000,
        si_unit: "kg",
        note: "Including the 660-tonne tuned mass damper",
      },
      {
        dimension: "mass",
        label: "Tuned mass damper mass",
        value: 660000,
        si_unit: "kg",
        note: "5.5 m diameter sphere of welded steel plates",
      },
      {
        dimension: "area",
        label: "Total floor area",
        value: 412500,
        si_unit: "m²",
      },
      {
        dimension: "speed",
        label: "Elevator speed",
        value: 16.83,
        si_unit: "m/s",
        note: "Was the world's fastest when built; reaches 89th floor in 37 seconds",
      },
      {
        dimension: "length",
        label: "Foundation pile depth",
        value: 80,
        si_unit: "m",
        note: "380 piles driven to bedrock",
      },
    ],
  },

  {
    slug: "willis-tower",
    name: "Willis Tower",
    subtitle: "Chicago's former tallest building, still called the Sears Tower by locals",
    category_id: "towers",
    description:
      "Completed in 1973 as the Sears Tower, this bundled-tube skyscraper was the world's tallest building for 25 years. Chicagoans stubbornly refuse to call it by its newer name. Its Skydeck Ledge lets visitors step out onto glass boxes 412 meters above the street, which is one way to ruin your afternoon.",
    search_terms:
      "willis tower|sears tower|chicago|skydeck|bundled tube|illinois",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Height with antennas",
        value: 527,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Height to roof",
        value: 442,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Total floor area",
        value: 416000,
        si_unit: "m²",
      },
      {
        dimension: "mass",
        label: "Total structural steel mass",
        value: 76000000,
        si_unit: "kg",
        note: "76,000 tonnes of steel",
      },
      {
        dimension: "length",
        label: "Skydeck Ledge height",
        value: 412,
        si_unit: "m",
        note: "103rd floor glass observation boxes",
      },
      {
        dimension: "length",
        label: "Base footprint side",
        value: 69,
        si_unit: "m",
        note: "Each of the nine bundled tubes is 22.9m square",
      },
      {
        dimension: "speed",
        label: "Elevator speed",
        value: 8,
        si_unit: "m/s",
      },
    ],
  },

  {
    slug: "one-world-trade-center",
    name: "One World Trade Center",
    subtitle: "The tallest building in the Western Hemisphere",
    category_id: "towers",
    description:
      "One World Trade Center stands at a symbolic 1,776 feet (541 meters), referencing the year of the Declaration of Independence. Built on the northwest corner of the original World Trade Center site, it is the tallest building in the Western Hemisphere. Its base is a reinforced concrete fortress, and the facade transitions from a square base to eight elongated triangles as it rises.",
    search_terms:
      "one world trade|freedom tower|1wtc|new york|manhattan|world trade center",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Height including antenna",
        value: 541.3,
        si_unit: "m",
        note: "Symbolically 1,776 feet for the year of US independence",
      },
      {
        dimension: "length",
        label: "Height to roof",
        value: 417,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Total floor area",
        value: 325000,
        si_unit: "m²",
      },
      {
        dimension: "length",
        label: "Base side length",
        value: 61,
        si_unit: "m",
        note: "Square footprint at ground level, 200 feet per side",
      },
      {
        dimension: "mass",
        label: "Structural steel mass",
        value: 45000000,
        si_unit: "kg",
        note: "Approximately 45,000 tonnes of structural steel",
      },
      {
        dimension: "length",
        label: "Concrete foundation depth",
        value: 24,
        si_unit: "m",
        note: "Anchored to Manhattan bedrock",
      },
      {
        dimension: "speed",
        label: "Elevator speed",
        value: 10.16,
        si_unit: "m/s",
        note: "Express elevators to observation deck",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ANCIENT STRUCTURES
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "colosseum",
    name: "Colosseum",
    subtitle: "Rome's gladiatorial arena and the world's largest amphitheatre",
    category_id: "ancient-structures",
    description:
      "The Colosseum could seat around 50,000 spectators who came to watch gladiators, animal hunts, and mock naval battles. Built between 72 and 80 AD, it had a retractable awning system called the velarium that required 1,000 sailors to operate. Two thousand years later, roughly two-thirds of the original structure has been destroyed by earthquakes and stone robbers.",
    search_terms:
      "colosseum|coliseum|rome|italy|gladiator|amphitheatre|flavian",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Long axis length",
        value: 189,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Short axis width",
        value: 156,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Outer wall height",
        value: 48.5,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Arena floor area",
        value: 3357,
        si_unit: "m²",
        note: "Elliptical arena, roughly 87m x 55m",
      },
      {
        dimension: "area",
        label: "Total footprint area",
        value: 24000,
        si_unit: "m²",
        note: "Approximate ground-level footprint",
      },
      {
        dimension: "length",
        label: "Arena long axis",
        value: 87,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Arena short axis",
        value: 55,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Estimated original mass",
        value: 100000000,
        si_unit: "kg",
        note: "Approximately 100,000 tonnes of travertine stone alone",
      },
    ],
  },

  {
    slug: "great-wall-of-china",
    name: "Great Wall of China",
    subtitle: "The longest structure ever built by humans",
    category_id: "ancient-structures",
    description:
      "Despite the myth, you cannot actually see the Great Wall from space with the naked eye. What you can see from ground level is an astonishing 21,196 kilometers of walls, trenches, and natural barriers built over multiple dynasties spanning more than 2,000 years. Roughly a third of the original wall has disappeared entirely, which is impressive given how much wall there was to lose.",
    search_terms:
      "great wall|china|wanli changcheng|ming dynasty|longest wall",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Total length (all sections)",
        value: 21196000,
        si_unit: "m",
        note: "Including all branches and sections across multiple dynasties",
      },
      {
        dimension: "length",
        label: "Average height",
        value: 7.5,
        si_unit: "m",
        note: "Typical height of Ming Dynasty sections",
      },
      {
        dimension: "length",
        label: "Average width at base",
        value: 6.5,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Average width at top",
        value: 5.5,
        si_unit: "m",
        note: "Wide enough for five horses to ride abreast",
      },
      {
        dimension: "mass",
        label: "Estimated total mass",
        value: 3000000000000,
        si_unit: "kg",
        note: "Very rough estimate; approximately 3 billion tonnes of material",
      },
      {
        dimension: "area",
        label: "Approximate top surface area",
        value: 116578000,
        si_unit: "m²",
        note: "Length multiplied by average top width",
      },
      {
        dimension: "length",
        label: "Highest elevation point",
        value: 1534,
        si_unit: "m",
        note: "At Huanglouyuan, Beijing",
      },
    ],
  },

  {
    slug: "stonehenge",
    name: "Stonehenge",
    subtitle: "A prehistoric mystery of massive standing stones on Salisbury Plain",
    category_id: "ancient-structures",
    description:
      "Stonehenge was built in stages over roughly 1,500 years starting around 3000 BCE, and we still argue about exactly why. The largest sarsen stones weigh about 25 tonnes and were transported from Marlborough Downs, about 40 km away. The smaller bluestones came from Wales, some 240 km away, which is a truly absurd distance to carry a rock without a truck.",
    search_terms:
      "stonehenge|salisbury|wiltshire|england|prehistoric|megalith|stone circle",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Height of tallest stone",
        value: 7.3,
        si_unit: "m",
        note: "The tallest sarsen stone in the trilithon",
      },
      {
        dimension: "mass",
        label: "Mass of heaviest stone",
        value: 25000,
        si_unit: "kg",
        note: "Heel Stone weighs approximately 25 tonnes",
      },
      {
        dimension: "length",
        label: "Outer stone circle diameter",
        value: 33,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Average sarsen stone mass",
        value: 22700,
        si_unit: "kg",
        note: "Each sarsen in the outer ring weighs about 25 tons",
      },
      {
        dimension: "length",
        label: "Average sarsen height",
        value: 4,
        si_unit: "m",
        note: "Outer circle stones",
      },
      {
        dimension: "area",
        label: "Stone circle area",
        value: 855,
        si_unit: "m²",
        note: "Area enclosed by the outer stone circle",
      },
      {
        dimension: "length",
        label: "Distance bluestones were transported",
        value: 240000,
        si_unit: "m",
        note: "From Preseli Hills in Wales",
      },
    ],
  },

  {
    slug: "angkor-wat",
    name: "Angkor Wat",
    subtitle: "The world's largest religious monument",
    category_id: "ancient-structures",
    description:
      "Angkor Wat was originally built as a Hindu temple for the Khmer Empire in the early 12th century and gradually transformed into a Buddhist temple. It is the world's largest religious monument, covering an area larger than Vatican City. The entire complex is surrounded by a moat 190 meters wide, because apparently ancient Cambodians were serious about their landscaping.",
    search_terms:
      "angkor wat|cambodia|khmer|siem reap|temple|hindu|buddhist",
    featured: 1,
    measurements: [
      {
        dimension: "area",
        label: "Total site area (including moat)",
        value: 1626000,
        si_unit: "m²",
        note: "Approximately 162.6 hectares",
      },
      {
        dimension: "length",
        label: "Central tower height",
        value: 65,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Outer wall length (each side)",
        value: 1025,
        si_unit: "m",
        note: "The outer enclosure is roughly 1,025m x 802m",
      },
      {
        dimension: "length",
        label: "Moat perimeter",
        value: 5500,
        si_unit: "m",
        note: "Surrounds the entire complex",
      },
      {
        dimension: "length",
        label: "Moat width",
        value: 190,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Inner enclosure area",
        value: 820000,
        si_unit: "m²",
        note: "Within the outer gallery walls",
      },
      {
        dimension: "length",
        label: "Bas-relief gallery length",
        value: 800,
        si_unit: "m",
        note: "Continuous carved narrative along the outer gallery",
      },
    ],
  },

  {
    slug: "parthenon",
    name: "Parthenon",
    subtitle: "Athens' crown jewel of ancient Greek architecture",
    category_id: "ancient-structures",
    description:
      "Built between 447 and 432 BCE, the Parthenon is a temple dedicated to the goddess Athena. Its architects Ictinus and Callicrates incorporated subtle curves throughout -- no straight lines exist in the building, which corrects for optical illusions that would make it look warped. The British Museum has a lot of its sculptures, which is a sore subject in Greece.",
    search_terms:
      "parthenon|athens|greece|acropolis|athena|doric|greek temple",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Length",
        value: 69.5,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Width",
        value: 30.9,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Height to pediment peak",
        value: 13.7,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Column height",
        value: 10.4,
        si_unit: "m",
        note: "46 outer Doric columns",
      },
      {
        dimension: "length",
        label: "Column base diameter",
        value: 1.9,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Footprint area",
        value: 2148,
        si_unit: "m²",
        note: "Length times width of the stylobate",
      },
      {
        dimension: "mass",
        label: "Estimated mass of marble",
        value: 22000000,
        si_unit: "kg",
        note: "Approximately 22,000 tonnes of Pentelic marble",
      },
    ],
  },

  {
    slug: "machu-picchu",
    name: "Machu Picchu",
    subtitle: "The Inca citadel perched high in the Peruvian Andes",
    category_id: "ancient-structures",
    description:
      "Built around 1450 CE and abandoned roughly a century later during the Spanish conquest, Machu Picchu was unknown to the outside world until 1911. Sitting at 2,430 meters above sea level, its dry-stone walls fit together so precisely that you can't slip a knife blade between them. The site includes about 200 structures and an agricultural terrace system that would make modern landscapers weep with envy.",
    search_terms:
      "machu picchu|peru|inca|andes|cusco|lost city|hiram bingham",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Altitude above sea level",
        value: 2430,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Total site area",
        value: 32590,
        si_unit: "m²",
        note: "The urban sector covers about 5 hectares; total sanctuary area is much larger",
      },
      {
        dimension: "length",
        label: "Intihuatana stone height",
        value: 1.8,
        si_unit: "m",
        note: "The ritual stone carved from bedrock",
      },
      {
        dimension: "length",
        label: "Main temple height",
        value: 3.5,
        si_unit: "m",
        note: "Height of the principal temple walls",
      },
      {
        dimension: "length",
        label: "Extent north to south",
        value: 530,
        si_unit: "m",
        note: "Approximate length of the urban and agricultural sectors",
      },
      {
        dimension: "length",
        label: "Extent east to west",
        value: 200,
        si_unit: "m",
        note: "Approximate width",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // STADIUMS
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "wembley-stadium",
    name: "Wembley Stadium",
    subtitle: "England's national stadium and its iconic arch",
    category_id: "stadiums",
    description:
      "Wembley Stadium in London seats 90,000 and is crowned by a 133-meter arch that can be seen across the city. The arch is structural -- it supports the entire north roof, removing the need for columns that would block views. The stadium uses enough energy during an event to power a small town, and the pitch can be removed in its entirety on rail-mounted pallets.",
    search_terms:
      "wembley|london|england|football|soccer|fa cup|arch|national stadium",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Arch height",
        value: 133,
        si_unit: "m",
        note: "Visible from across London; supports the entire north roof",
      },
      {
        dimension: "area",
        label: "Pitch area",
        value: 7140,
        si_unit: "m²",
        note: "105m x 68m standard pitch dimensions",
      },
      {
        dimension: "length",
        label: "Arch span",
        value: 315,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Total floor area",
        value: 90000,
        si_unit: "m²",
        note: "Across all levels of the stadium bowl",
      },
      {
        dimension: "length",
        label: "Bowl circumference",
        value: 1000,
        si_unit: "m",
        note: "Approximately 1 km around the stadium bowl",
      },
      {
        dimension: "mass",
        label: "Arch mass",
        value: 1750000,
        si_unit: "kg",
        note: "The tubular steel arch weighs 1,750 tonnes",
      },
      {
        dimension: "volume",
        label: "Stadium enclosed volume",
        value: 4000000,
        si_unit: "m³",
        note: "Approximate total enclosed volume",
      },
    ],
  },

  {
    slug: "maracana-stadium",
    name: "Maracana Stadium",
    subtitle: "Brazil's legendary football cathedral in Rio de Janeiro",
    category_id: "stadiums",
    description:
      "The Maracana once held a record attendance of nearly 200,000 for the 1950 World Cup final, though its current capacity is a more sensible 78,838 after renovations. It hosted both the 2014 World Cup and 2016 Olympic ceremonies. The stadium's name comes from a Tupi word meaning 'resembling a rattle,' referring to local maracas-like birds.",
    search_terms:
      "maracana|rio de janeiro|brazil|football|soccer|world cup|olympic",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Outer diameter",
        value: 317,
        si_unit: "m",
        note: "Roughly circular footprint",
      },
      {
        dimension: "length",
        label: "Roof height",
        value: 44,
        si_unit: "m",
        note: "Maximum height of the tensile roof structure",
      },
      {
        dimension: "area",
        label: "Playing field area",
        value: 7140,
        si_unit: "m²",
        note: "Standard FIFA 105m x 68m pitch",
      },
      {
        dimension: "area",
        label: "Total footprint area",
        value: 78900,
        si_unit: "m²",
        note: "Approximate ground-level footprint",
      },
      {
        dimension: "length",
        label: "Circumference",
        value: 996,
        si_unit: "m",
        note: "Outer perimeter of the stadium",
      },
    ],
  },

  {
    slug: "att-stadium",
    name: "AT&T Stadium",
    subtitle: "Arlington's massive domed stadium with the world's largest column-free interior",
    category_id: "stadiums",
    description:
      "AT&T Stadium, home of the Dallas Cowboys, features one of the world's largest column-free interiors and a retractable roof. Its centerpiece is an enormous video display board stretching from one 20-yard line to the other. The stadium cost $1.3 billion when it opened in 2009, and you can see its reflection in the tears of visiting fans.",
    search_terms:
      "att stadium|cowboys stadium|dallas cowboys|arlington|texas|jerry jones",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Roof height",
        value: 82,
        si_unit: "m",
        note: "Maximum interior height at midfield",
      },
      {
        dimension: "area",
        label: "Video board display area",
        value: 2100,
        si_unit: "m²",
        note: "Roughly 49m x 22m, one of the largest in the world",
      },
      {
        dimension: "volume",
        label: "Enclosed volume",
        value: 2940000,
        si_unit: "m³",
        note: "One of the largest enclosed volumes in the world",
      },
      {
        dimension: "area",
        label: "Total floor area",
        value: 278700,
        si_unit: "m²",
        note: "Approximately 3 million square feet across all levels",
      },
      {
        dimension: "length",
        label: "Length of building",
        value: 275,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Width of building",
        value: 230,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Playing field area",
        value: 5350,
        si_unit: "m²",
        note: "American football field including end zones",
      },
    ],
  },

  {
    slug: "melbourne-cricket-ground",
    name: "Melbourne Cricket Ground",
    subtitle: "Australia's sporting colosseum and the world's largest cricket ground",
    category_id: "stadiums",
    description:
      "The MCG has been Melbourne's sporting heart since 1853 and is the 11th-largest stadium in the world by capacity at 100,024 seats. It hosted the 1956 and 2006 Olympic ceremonies and the annual Boxing Day Test match. Melburnians treat it like a second religion, which is saying something for a city that already worships coffee.",
    search_terms:
      "mcg|melbourne cricket ground|australia|afl|cricket|boxing day test|victoria",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Circumference",
        value: 860,
        si_unit: "m",
        note: "Outer circumference of the stadium",
      },
      {
        dimension: "area",
        label: "Playing surface area",
        value: 19464,
        si_unit: "m²",
        note: "Oval playing field approximately 171m x 146m",
      },
      {
        dimension: "length",
        label: "Stadium height",
        value: 55,
        si_unit: "m",
        note: "Height of the highest point of the Great Southern Stand",
      },
      {
        dimension: "area",
        label: "Total footprint area",
        value: 70000,
        si_unit: "m²",
        note: "Approximate ground-level footprint",
      },
      {
        dimension: "length",
        label: "Light tower height",
        value: 75,
        si_unit: "m",
        note: "Six light towers ring the ground",
      },
      {
        dimension: "length",
        label: "Boundary length (straight)",
        value: 76,
        si_unit: "m",
        note: "Typical straight boundary distance",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // STATUES & MONUMENTS
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "statue-of-liberty",
    name: "Statue of Liberty",
    subtitle: "Lady Liberty, the copper colossus of New York Harbor",
    category_id: "statues",
    description:
      "A gift from France in 1886, the Statue of Liberty is made of 300 copper sheets just 2.4 mm thick, attached to an iron framework designed by Gustave Eiffel (yes, that Eiffel). She was originally copper-colored but oxidized to her famous green patina within 20 years. Her crown has seven rays representing the seven continents and oceans, and she wears size 879 sandals.",
    search_terms:
      "statue of liberty|lady liberty|new york|bedloe|liberty island|france gift",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Height (statue + pedestal)",
        value: 93,
        si_unit: "m",
        note: "From ground to torch tip",
      },
      {
        dimension: "length",
        label: "Height of statue alone",
        value: 46,
        si_unit: "m",
        note: "From feet to torch",
      },
      {
        dimension: "mass",
        label: "Total mass (copper and steel)",
        value: 204000,
        si_unit: "kg",
        note: "Copper sheeting: 27,000 kg; iron/steel framework: 113,000 kg",
      },
      {
        dimension: "length",
        label: "Copper thickness",
        value: 0.0024,
        si_unit: "m",
        note: "2.4 mm, about the thickness of two pennies",
      },
      {
        dimension: "length",
        label: "Torch height above sea level",
        value: 93,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Index finger length",
        value: 2.44,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Head height (chin to cranium)",
        value: 5.26,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Waist thickness",
        value: 10.67,
        si_unit: "m",
        note: "35-foot waistline",
      },
    ],
  },

  {
    slug: "christ-the-redeemer",
    name: "Christ the Redeemer",
    subtitle: "Rio de Janeiro's open-armed icon atop Corcovado Mountain",
    category_id: "statues",
    description:
      "Standing atop Corcovado Mountain at 710 meters above sea level, Christ the Redeemer has been overlooking Rio de Janeiro since 1931. The statue is made of reinforced concrete clad in soapstone, chosen because of its durability and workability. Its outstretched arms span 28 meters, making it the world's largest Art Deco sculpture and a universal symbol of welcome.",
    search_terms:
      "christ the redeemer|cristo redentor|rio|brazil|corcovado|art deco statue",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Total height (with pedestal)",
        value: 38,
        si_unit: "m",
        note: "30m statue + 8m pedestal",
      },
      {
        dimension: "length",
        label: "Arm span",
        value: 28,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Total mass",
        value: 635000,
        si_unit: "kg",
        note: "Reinforced concrete and soapstone",
      },
      {
        dimension: "length",
        label: "Statue height (without pedestal)",
        value: 30,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Head height",
        value: 3.75,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Hand length",
        value: 3.2,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Altitude of base above sea level",
        value: 710,
        si_unit: "m",
        note: "Atop Corcovado Mountain",
      },
    ],
  },

  {
    slug: "moai-heads",
    name: "Moai Heads",
    subtitle: "Easter Island's enigmatic stone guardians",
    category_id: "statues",
    description:
      "The Moai of Easter Island (Rapa Nui) are monolithic human figures carved between 1250 and 1500 CE. Though called 'heads,' most Moai actually have full bodies -- they're just buried up to their necks. Nearly half of the 900 known Moai never left the quarry at Rano Raraku, suggesting the islanders were ambitious but may have overcommitted on the project.",
    search_terms:
      "moai|easter island|rapa nui|stone heads|polynesia|chile",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Average height",
        value: 4,
        si_unit: "m",
        note: "Typical Moai height",
      },
      {
        dimension: "mass",
        label: "Average mass",
        value: 12500,
        si_unit: "kg",
        note: "Average weight of a Moai",
      },
      {
        dimension: "length",
        label: "Tallest erected Moai (Paro)",
        value: 10,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Heaviest erected Moai (Paro)",
        value: 82000,
        si_unit: "kg",
        note: "About 82 tonnes",
      },
      {
        dimension: "length",
        label: "Largest unfinished Moai height",
        value: 21,
        si_unit: "m",
        note: "El Gigante, still attached to bedrock at Rano Raraku",
      },
      {
        dimension: "length",
        label: "Average head-to-body ratio",
        value: 1.5,
        si_unit: "m",
        note: "Heads are about 3/8 of total body length",
      },
    ],
  },

  {
    slug: "mount-rushmore",
    name: "Mount Rushmore",
    subtitle: "Four presidents carved into the granite of the Black Hills",
    category_id: "statues",
    description:
      "Mount Rushmore features the 18-meter-tall faces of Washington, Jefferson, Roosevelt, and Lincoln, carved between 1927 and 1941 using dynamite and jackhammers. About 450,000 tons of rock were removed from the mountainside. The original plan included the presidents carved to their waists, but funding ran out -- proof that even national monuments are subject to budget cuts.",
    search_terms:
      "mount rushmore|presidents|south dakota|black hills|washington|jefferson|roosevelt|lincoln",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Face height (each president)",
        value: 18,
        si_unit: "m",
        note: "Each face is about 18 meters from chin to forehead",
      },
      {
        dimension: "length",
        label: "Nose length",
        value: 6,
        si_unit: "m",
        note: "Each nose is approximately 6 meters long",
      },
      {
        dimension: "length",
        label: "Mouth width",
        value: 5.5,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Eye width",
        value: 3.4,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Mountain summit elevation",
        value: 1745,
        si_unit: "m",
        note: "1,745 meters above sea level",
      },
      {
        dimension: "mass",
        label: "Rock removed during carving",
        value: 410000000,
        si_unit: "kg",
        note: "Approximately 450,000 tons of granite blasted and chiseled away",
      },
      {
        dimension: "length",
        label: "Carving width",
        value: 56,
        si_unit: "m",
        note: "Total width across all four faces",
      },
    ],
  },

  {
    slug: "statue-of-unity",
    name: "Statue of Unity",
    subtitle: "The world's tallest statue, towering over India's Narmada Valley",
    category_id: "statues",
    description:
      "Dedicated to Sardar Vallabhbhai Patel, India's first Deputy Prime Minister, the Statue of Unity stands at 240 meters including its base -- nearly twice the height of the Statue of Liberty including her pedestal. Completed in 2018, it used 1,850 tonnes of bronze cladding and took 2,500 workers roughly four years to build. There is an observation gallery at chest height, which is 153 meters up.",
    search_terms:
      "statue of unity|sardar patel|india|tallest statue|gujarat|narmada",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Total height (with base)",
        value: 240,
        si_unit: "m",
        note: "182m statue + 58m base",
      },
      {
        dimension: "length",
        label: "Statue height (without base)",
        value: 182,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Total mass",
        value: 67000000,
        si_unit: "kg",
        note: "Including structural steel and bronze cladding",
      },
      {
        dimension: "mass",
        label: "Bronze cladding mass",
        value: 1850000,
        si_unit: "kg",
        note: "6,500 bronze panels",
      },
      {
        dimension: "length",
        label: "Observation gallery height",
        value: 153,
        si_unit: "m",
        note: "Located at the statue's chest level",
      },
      {
        dimension: "length",
        label: "Face height",
        value: 21,
        si_unit: "m",
      },
      {
        dimension: "area",
        label: "Base footprint area",
        value: 12000,
        si_unit: "m²",
        note: "Approximate footprint of the star-shaped base",
      },
    ],
  },

  {
    slug: "spring-temple-buddha",
    name: "Spring Temple Buddha",
    subtitle: "A colossal Vairocana Buddha in central China",
    category_id: "statues",
    description:
      "The Spring Temple Buddha in Henan Province, China, was the world's tallest statue from 2008 until the Statue of Unity surpassed it in 2018. The statue depicts Vairocana Buddha and sits atop a 25-meter lotus throne, which sits on a 20-meter pedestal building. It was built partly in response to the Taliban's destruction of the Bamiyan Buddhas in Afghanistan.",
    search_terms:
      "spring temple buddha|henan|china|vairocana|tallest buddha|lushan",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Total height (with pedestal and throne)",
        value: 153,
        si_unit: "m",
        note: "128m statue + 25m lotus throne + various base elements",
      },
      {
        dimension: "length",
        label: "Statue height alone",
        value: 128,
        si_unit: "m",
      },
      {
        dimension: "mass",
        label: "Copper used",
        value: 1100000,
        si_unit: "kg",
        note: "1,100 tonnes of copper casting",
      },
      {
        dimension: "mass",
        label: "Steel framework mass",
        value: 15000000,
        si_unit: "kg",
        note: "15,000 tonnes of steel structure",
      },
      {
        dimension: "length",
        label: "Lotus throne height",
        value: 25,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Pedestal building height",
        value: 20,
        si_unit: "m",
        note: "Multi-story building beneath the lotus throne",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EVERYDAY PLACES
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "average-us-house",
    name: "Average US House",
    subtitle: "The typical American single-family home",
    category_id: "everyday-places",
    description:
      "The median American single-family home has about 195 square meters (2,100 square feet) of floor space, which sounds like plenty until you fill it with furniture, children, and the accumulated regret of impulse Amazon purchases. The average house weighs around 90 tonnes, not counting the contents of your garage.",
    search_terms:
      "house|home|american house|residential|single family|median home",
    featured: 0,
    measurements: [
      {
        dimension: "area",
        label: "Floor area",
        value: 195,
        si_unit: "m²",
        note: "Median US single-family home, approximately 2,100 sq ft",
      },
      {
        dimension: "length",
        label: "Height (two stories)",
        value: 5.5,
        si_unit: "m",
        note: "Floor to roof peak for a typical two-story home",
      },
      {
        dimension: "mass",
        label: "Structural mass",
        value: 90000,
        si_unit: "kg",
        note: "Wood-frame house without contents",
      },
      {
        dimension: "volume",
        label: "Interior volume",
        value: 500,
        si_unit: "m³",
        note: "Approximate heated/cooled interior volume",
      },
      {
        dimension: "length",
        label: "Ceiling height (per floor)",
        value: 2.44,
        si_unit: "m",
        note: "Standard 8-foot ceilings",
      },
      {
        dimension: "area",
        label: "Average lot size",
        value: 780,
        si_unit: "m²",
        note: "Median US lot size, roughly 8,400 sq ft",
      },
    ],
  },

  {
    slug: "walmart-supercenter",
    name: "A Walmart Supercenter",
    subtitle: "America's cathedral of retail therapy",
    category_id: "everyday-places",
    description:
      "A typical Walmart Supercenter spans about 16,700 square meters of retail floor space -- roughly the size of three American football fields. These stores carry around 120,000 different items and serve about 37 million customers per week across all US locations. The sheer scale means employees sometimes use roller skates, which is either efficient or terrifying depending on the aisle.",
    search_terms:
      "walmart|supercenter|store|retail|shopping|big box",
    featured: 0,
    measurements: [
      {
        dimension: "area",
        label: "Retail floor area",
        value: 16700,
        si_unit: "m²",
        note: "Approximately 180,000 sq ft for a typical Supercenter",
      },
      {
        dimension: "length",
        label: "Ceiling height",
        value: 9,
        si_unit: "m",
        note: "Interior clearance height",
      },
      {
        dimension: "volume",
        label: "Interior volume",
        value: 150300,
        si_unit: "m³",
        note: "Approximate enclosed volume of retail space",
      },
      {
        dimension: "length",
        label: "Building length",
        value: 186,
        si_unit: "m",
        note: "Typical long dimension of a Supercenter",
      },
      {
        dimension: "length",
        label: "Building width",
        value: 90,
        si_unit: "m",
        note: "Typical short dimension",
      },
      {
        dimension: "area",
        label: "Parking lot area",
        value: 37200,
        si_unit: "m²",
        note: "Typical Supercenter parking lot, roughly 400,000 sq ft",
      },
    ],
  },

  {
    slug: "manhattan-studio-apartment",
    name: "Manhattan Studio Apartment",
    subtitle: "New York City's famously compact living arrangement",
    category_id: "everyday-places",
    description:
      "The average Manhattan studio apartment squeezes an entire life into about 28 square meters. Your bed is your couch, your kitchen is your hallway, and your rent is probably more per square meter than some countries' GDP per capita. Despite this, people will fight to the death for one with a window that faces anything other than a brick wall.",
    search_terms:
      "studio|apartment|manhattan|new york|nyc|small apartment|tiny living",
    featured: 0,
    measurements: [
      {
        dimension: "area",
        label: "Floor area",
        value: 28,
        si_unit: "m²",
        note: "Approximately 300 sq ft, average Manhattan studio",
      },
      {
        dimension: "length",
        label: "Ceiling height",
        value: 2.6,
        si_unit: "m",
        note: "Standard ceiling height in NYC pre-war and modern buildings",
      },
      {
        dimension: "volume",
        label: "Interior volume",
        value: 73,
        si_unit: "m³",
      },
      {
        dimension: "length",
        label: "Typical room length",
        value: 6.1,
        si_unit: "m",
        note: "Roughly 20 feet along the long wall",
      },
      {
        dimension: "length",
        label: "Typical room width",
        value: 4.6,
        si_unit: "m",
        note: "Roughly 15 feet",
      },
    ],
  },

  {
    slug: "olympic-swimming-pool",
    name: "An Olympic Swimming Pool",
    subtitle: "The world standard for competitive aquatic events",
    category_id: "everyday-places",
    description:
      "An Olympic swimming pool is precisely 50 meters long, 25 meters wide, and at least 2 meters deep, holding 2,500 cubic meters of water. That water weighs 2.5 million kilograms, which is why you never hear about someone building one on the second floor. The pool must be kept between 25 and 28 degrees Celsius, and each lane is exactly 2.5 meters wide.",
    search_terms:
      "olympic pool|swimming pool|50 meter pool|aquatic|competition pool",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Length",
        value: 50,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Width",
        value: 25,
        si_unit: "m",
      },
      {
        dimension: "length",
        label: "Minimum depth",
        value: 2,
        si_unit: "m",
      },
      {
        dimension: "volume",
        label: "Water volume",
        value: 2500,
        si_unit: "m³",
      },
      {
        dimension: "mass",
        label: "Water mass",
        value: 2500000,
        si_unit: "kg",
      },
      {
        dimension: "area",
        label: "Surface area",
        value: 1250,
        si_unit: "m²",
      },
      {
        dimension: "temperature",
        label: "Required water temperature",
        value: 299,
        si_unit: "K",
        note: "25-28 degrees Celsius (298-301 K); midpoint ~26 C",
      },
      {
        dimension: "length",
        label: "Lane width",
        value: 2.5,
        si_unit: "m",
        note: "10 lanes, each 2.5m wide",
      },
    ],
  },
];
