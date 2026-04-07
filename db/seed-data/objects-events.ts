// ── Objects, Events & Phenomena seed data ─────────────────────────────────
// Everyday Objects, Sports, Events & Phenomena, Collective/Conceptual

import type { ThingInput } from "../types";

export const categoriesData = [
  {
    id: "everyday-objects",
    name: "Everyday Objects",
    description:
      "The familiar things we use, sit on, throw, and occasionally step on in the dark. Measured with precision so you never have to wonder again.",
    sort_order: 10,
  },
  {
    id: "sports",
    name: "Sports",
    description:
      "Athletic feats, records, and the equipment that makes them possible. From world records to regulation gear.",
    sort_order: 11,
  },
  {
    id: "events",
    name: "Events & Phenomena",
    description:
      "The awe-inspiring, terrifying, and explosive events that shape our planet and universe. Nature does not mess around.",
    sort_order: 12,
  },
  {
    id: "conceptual",
    name: "Collective & Conceptual",
    description:
      "Mind-bending totals and aggregates that put humanity, nature, and civilization into perspective. Big numbers live here.",
    sort_order: 13,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EVERYDAY OBJECTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "macbook-pro-16",
    name: 'MacBook Pro 16"',
    subtitle: "Apple's flagship laptop for people who mean business",
    category_id: "everyday-objects",
    description:
      "The MacBook Pro 16-inch is the machine you buy when you want to edit 8K video on a plane and still have battery left for landing. With an M3 Max chip and a Liquid Retina XDR display, it is simultaneously a feat of engineering and a very expensive way to browse Reddit. It weighs just over 2 kg, which is remarkable given how much power is crammed inside.",
    search_terms:
      "macbook|laptop|apple|computer|macbook pro|notebook|m3|portable",
    featured: 1,
    measurements: [
      {
        dimension: "mass",
        label: "Weight",
        value: 2.14,
        si_unit: "kg",
        note: "M3 Max configuration",
      },
      {
        dimension: "length",
        label: "Width (longest edge)",
        value: 0.3554,
        si_unit: "m",
        note: "35.54 cm across",
      },
      {
        dimension: "length",
        label: "Depth",
        value: 0.2489,
        si_unit: "m",
        note: "24.89 cm front to back",
      },
      {
        dimension: "length",
        label: "Thickness",
        value: 0.01684,
        si_unit: "m",
        note: "16.84 mm closed; remarkably thin for a 16-inch laptop",
      },
      {
        dimension: "area",
        label: "Screen area",
        value: 0.0836,
        si_unit: "m²",
        note: "16.2-inch Liquid Retina XDR display diagonal",
      },
      {
        dimension: "power",
        label: "Max charging power",
        value: 140,
        si_unit: "W",
        note: "MagSafe 3 fast charging via 140W USB-C adapter",
      },
      {
        dimension: "energy",
        label: "Battery capacity",
        value: 360000,
        si_unit: "J",
        note: "100 Wh = 360,000 J; the FAA maximum for carry-on batteries",
      },
      {
        dimension: "data",
        label: "Max storage",
        value: 8.796e12,
        si_unit: "bytes",
        note: "8 TB SSD option",
      },
    ],
  },

  {
    slug: "hubble-space-telescope",
    name: "Hubble Space Telescope",
    subtitle: "Humanity's eye on the cosmos since 1990",
    category_id: "spacecraft",
    description:
      "Launched aboard Space Shuttle Discovery in April 1990, the Hubble Space Telescope orbits Earth every 95 minutes at roughly 540 km altitude. It has produced some of the most iconic images in astronomy, from the Pillars of Creation to the Hubble Deep Field. Despite an embarrassing mirror flaw at launch (fixed by a literal pair of corrective glasses in space), Hubble has been one of the most productive scientific instruments ever built.",
    search_terms:
      "hubble|telescope|space telescope|NASA|astronomy|orbit|HST|satellite",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Overall length",
        value: 13.2,
        si_unit: "m",
        note: "About the size of a large school bus",
      },
      {
        dimension: "mass",
        label: "Mass at launch",
        value: 11110,
        si_unit: "kg",
        note: "~24,500 lbs; serviced five times in orbit",
      },
      {
        dimension: "length",
        label: "Primary mirror diameter",
        value: 2.4,
        si_unit: "m",
        note: "Polished to within 10 nanometers of a perfect curve",
      },
      {
        dimension: "speed",
        label: "Orbital speed",
        value: 7500,
        si_unit: "m/s",
        note: "~27,000 km/h in low Earth orbit",
      },
      {
        dimension: "power",
        label: "Power generation",
        value: 2800,
        si_unit: "W",
        note: "Two 25-foot solar panels; about enough to run a hair dryer",
      },
      {
        dimension: "length",
        label: "Orbital altitude",
        value: 540000,
        si_unit: "m",
        note: "~540 km above Earth's surface",
      },
      {
        dimension: "length",
        label: "Maximum diameter",
        value: 4.2,
        si_unit: "m",
        note: "At the widest point of the spacecraft body",
      },
      {
        dimension: "time",
        label: "Orbital period",
        value: 5700,
        si_unit: "s",
        note: "~95 minutes per orbit; about 15 orbits per day",
      },
    ],
  },

  {
    slug: "king-size-bed",
    name: "King-Size Bed",
    subtitle: "76 by 80 inches of sleeping real estate",
    category_id: "everyday-objects",
    description:
      "The king-size bed is the undisputed champion of sleeping surfaces in the United States. At roughly 2 meters long and 1.9 meters wide, it provides enough room for two adults, three children, two dogs, and a cat to all sleep uncomfortably together. The mattress alone weighs around 60 kg, which is why moving day is everyone's least favorite day.",
    search_terms:
      "bed|king size|mattress|furniture|bedroom|sleep|king bed",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Length",
        value: 2.032,
        si_unit: "m",
        note: "80 inches; standard US king",
      },
      {
        dimension: "length",
        label: "Width",
        value: 1.93,
        si_unit: "m",
        note: "76 inches; Eastern/Standard king",
      },
      {
        dimension: "area",
        label: "Sleeping area",
        value: 3.92,
        si_unit: "m²",
        note: "~42.2 sq ft of mattress surface",
      },
      {
        dimension: "mass",
        label: "Mattress mass",
        value: 60,
        si_unit: "kg",
        note: "Typical innerspring mattress; memory foam can exceed 90 kg",
      },
      {
        dimension: "length",
        label: "Mattress thickness",
        value: 0.3,
        si_unit: "m",
        note: "Typical ~12 inches for a pillow-top mattress",
      },
      {
        dimension: "volume",
        label: "Mattress volume",
        value: 1.176,
        si_unit: "m³",
        note: "Approximate volume of the mattress slab",
      },
    ],
  },

  {
    slug: "steinway-model-d-grand-piano",
    name: "Steinway Model D Grand Piano",
    subtitle: "The concert grand that defines classical music",
    category_id: "everyday-objects",
    description:
      "The Steinway Model D is the 8-foot-11-inch concert grand piano found on virtually every major concert stage in the world. Each one contains over 12,000 individual parts and takes roughly a year to build. Its iron frame must withstand over 20 tons of string tension, which is more than most people's relationships. It is the instrument that makes pianists weep, both from the sound and the price tag.",
    search_terms:
      "piano|grand piano|steinway|concert grand|model d|keyboard|music|instrument",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Overall length",
        value: 2.74,
        si_unit: "m",
        note: "8 feet 11¾ inches; the flagship Steinway concert grand",
      },
      {
        dimension: "mass",
        label: "Weight",
        value: 480,
        si_unit: "kg",
        note: "~1,060 lbs; requires professional movers",
      },
      {
        dimension: "length",
        label: "Longest bass string",
        value: 2.0,
        si_unit: "m",
        note: "Lowest notes use copper-wound strings over 2 m long",
      },
      {
        dimension: "length",
        label: "Width",
        value: 1.57,
        si_unit: "m",
        note: "At the widest point of the rim",
      },
      {
        dimension: "force",
        label: "Total string tension",
        value: 196000,
        si_unit: "N",
        note: "~20 tonnes of combined tension across ~243 strings",
      },
      {
        dimension: "frequency",
        label: "Lowest note frequency (A0)",
        value: 27.5,
        si_unit: "Hz",
        note: "The lowest A on a standard 88-key piano",
      },
      {
        dimension: "frequency",
        label: "Highest note frequency (C8)",
        value: 4186,
        si_unit: "Hz",
        note: "The highest C on a standard 88-key piano",
      },
    ],
  },

  {
    slug: "bowling-ball",
    name: "Bowling Ball",
    subtitle: "A heavy sphere with three holes and a grudge against pins",
    category_id: "everyday-objects",
    description:
      "A regulation bowling ball has a maximum weight of 16 pounds (about 7.26 kg) and a circumference no larger than 27 inches. Most adult bowlers use a ball around 14 pounds (6.35 kg). The core shape inside the ball is engineered with the precision of aerospace components, all so you can hurl it down a lane and hope it doesn't end up in the gutter.",
    search_terms:
      "bowling|bowling ball|bowling alley|pins|strike|sport|sphere",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Diameter",
        value: 0.2185,
        si_unit: "m",
        note: "~8.6 inches; standardized by USBC",
      },
      {
        dimension: "mass",
        label: "Mass (typical adult)",
        value: 6.35,
        si_unit: "kg",
        note: "14 lbs; maximum regulation is 7.26 kg (16 lbs)",
      },
      {
        dimension: "volume",
        label: "Volume",
        value: 0.00546,
        si_unit: "m³",
        note: "Volume of the sphere, roughly 5.5 liters",
      },
      {
        dimension: "length",
        label: "Circumference",
        value: 0.686,
        si_unit: "m",
        note: "Maximum 27 inches per USBC regulations",
      },
      {
        dimension: "speed",
        label: "Typical throw speed",
        value: 7.6,
        si_unit: "m/s",
        note: "~17 mph; professional average",
      },
      {
        dimension: "energy",
        label: "Kinetic energy at release",
        value: 183,
        si_unit: "J",
        note: "At typical 7.6 m/s throw speed with 6.35 kg ball",
      },
    ],
  },

  {
    slug: "olympic-javelin",
    name: "Olympic Javelin",
    subtitle: "A spear optimized for throwing really, really far",
    category_id: "everyday-objects",
    description:
      "The men's Olympic javelin is 2.6 to 2.7 meters long and must weigh at least 800 grams. It is one of the oldest field events, dating back to ancient Greece, though the modern javelin was redesigned in 1986 after throws were getting dangerously close to clearing the stadium. The center of gravity was moved forward to make it nose-dive sooner, which is a polite way of saying they nerfed it for safety.",
    search_terms:
      "javelin|throw|field event|athletics|spear|track and field|olympic",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Overall length",
        value: 2.6,
        si_unit: "m",
        note: "Men's javelin; 2.6-2.7 m regulation range",
      },
      {
        dimension: "mass",
        label: "Minimum mass",
        value: 0.8,
        si_unit: "kg",
        note: "Men's specification; women's is 0.6 kg",
      },
      {
        dimension: "length",
        label: "World record throw distance",
        value: 98.48,
        si_unit: "m",
        note: "Jan Železný, 1996; the current men's world record",
      },
      {
        dimension: "speed",
        label: "Release speed (elite)",
        value: 30,
        si_unit: "m/s",
        note: "~108 km/h at release for top throwers",
      },
      {
        dimension: "length",
        label: "Grip cord diameter",
        value: 0.025,
        si_unit: "m",
        note: "The cord wrapping at the center of gravity",
      },
    ],
  },

  {
    slug: "regulation-basketball",
    name: "Regulation Basketball",
    subtitle: "The orange sphere that built a billion-dollar league",
    category_id: "everyday-objects",
    description:
      "An official NBA basketball is a size 7 ball with a circumference of 29.5 inches and a weight between 567 and 624 grams. It must bounce to a height of 1.2 to 1.4 meters when dropped from 1.8 meters. The iconic orange color with black seams was championed by Coach Tony Hinkle in the 1950s because it was easier for spectators to see. Before that, basketballs were dark brown.",
    search_terms:
      "basketball|NBA|ball|spalding|wilson|hoops|court|bounce|orange ball",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Diameter",
        value: 0.241,
        si_unit: "m",
        note: "~9.5 inches for official NBA size 7",
      },
      {
        dimension: "mass",
        label: "Mass",
        value: 0.624,
        si_unit: "kg",
        note: "Upper end of regulation range (567-624 g)",
      },
      {
        dimension: "length",
        label: "Circumference",
        value: 0.749,
        si_unit: "m",
        note: "29.5 inches per NBA regulation",
      },
      {
        dimension: "pressure",
        label: "Inflation pressure",
        value: 55158,
        si_unit: "Pa",
        note: "~8 psi; NBA regulation is 7.5-8.5 psi",
      },
      {
        dimension: "length",
        label: "Required bounce height",
        value: 1.32,
        si_unit: "m",
        note: "When dropped from 1.8 m onto hardwood; must reach 1.2-1.4 m",
      },
      {
        dimension: "volume",
        label: "Volume",
        value: 0.00735,
        si_unit: "m³",
        note: "About 7.35 liters of air inside",
      },
    ],
  },

  {
    slug: "shipping-container-40ft",
    name: "40-Foot Shipping Container",
    subtitle: "The steel box that globalized the world economy",
    category_id: "everyday-objects",
    description:
      "The 40-foot intermodal shipping container is the backbone of global trade. Invented by Malcolm McLean in 1956, this standardized steel box revolutionized logistics by making it possible to move goods seamlessly between ships, trains, and trucks. There are roughly 17 million shipping containers in circulation worldwide, and at any given moment, about 6 million are on the ocean. They are also increasingly popular as tiny homes, which says a lot about housing prices.",
    search_terms:
      "shipping container|freight|cargo|intermodal|trade|container ship|40 foot|steel box",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "External length",
        value: 12.192,
        si_unit: "m",
        note: "Exactly 40 feet; the ISO standard TEU x2",
      },
      {
        dimension: "length",
        label: "External width",
        value: 2.438,
        si_unit: "m",
        note: "8 feet; standardized for truck and rail transport",
      },
      {
        dimension: "length",
        label: "External height",
        value: 2.591,
        si_unit: "m",
        note: "8 ft 6 in; high-cube versions are 2.896 m",
      },
      {
        dimension: "mass",
        label: "Empty (tare) weight",
        value: 3750,
        si_unit: "kg",
        note: "~8,270 lbs empty; max gross is 30,480 kg",
      },
      {
        dimension: "volume",
        label: "Internal volume",
        value: 67.7,
        si_unit: "m³",
        note: "~2,390 cubic feet of cargo space",
      },
      {
        dimension: "mass",
        label: "Maximum payload",
        value: 26730,
        si_unit: "kg",
        note: "Max gross weight minus tare; ~58,900 lbs",
      },
      {
        dimension: "area",
        label: "Floor area",
        value: 28.27,
        si_unit: "m²",
        note: "Internal floor space; bigger than many studio apartments",
      },
    ],
  },

  {
    slug: "red-solo-cup",
    name: "Red Solo Cup",
    subtitle: "The unofficial vessel of every house party since 1970",
    category_id: "everyday-objects",
    description:
      "The Red Solo Cup is a 16-ounce disposable polystyrene cup that has transcended its humble origins to become a genuine cultural icon. Those lines on the side? They roughly correspond to 1 oz (liquor), 5 oz (wine), and 12 oz (beer), though the company insists this is coincidental. Over 60 billion Solo cups have been produced, and Toby Keith even wrote a country song about one.",
    search_terms:
      "solo cup|red cup|party cup|plastic cup|disposable cup|beer pong",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Height",
        value: 0.122,
        si_unit: "m",
        note: "~4.8 inches tall; the standard 16 oz size",
      },
      {
        dimension: "volume",
        label: "Capacity",
        value: 0.000473,
        si_unit: "m³",
        note: "16 oz = 473 mL; the classic party size",
      },
      {
        dimension: "mass",
        label: "Mass (empty)",
        value: 0.01,
        si_unit: "kg",
        note: "About 10 grams of polystyrene",
      },
      {
        dimension: "length",
        label: "Rim diameter",
        value: 0.095,
        si_unit: "m",
        note: "~3.7 inches across the top opening",
      },
      {
        dimension: "length",
        label: "Base diameter",
        value: 0.055,
        si_unit: "m",
        note: "~2.2 inches; designed for stability (somewhat)",
      },
    ],
  },

  {
    slug: "lego-brick-2x4",
    name: "LEGO Brick 2x4",
    subtitle: "The 32mm building block of childhood dreams and parental nightmares",
    category_id: "everyday-objects",
    description:
      "The classic 2x4 LEGO brick has remained virtually unchanged since 1958 and is manufactured to a tolerance of 10 micrometers. A 1958 brick will still snap perfectly onto one made today. There are approximately 915 million ways to combine six 2x4 bricks, and stepping on one barefoot generates a pain roughly equivalent to being judged by your childhood self.",
    search_terms:
      "lego|brick|building block|toy|construction|snap|plastic|denmark",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Length",
        value: 0.032,
        si_unit: "m",
        note: "31.8 mm; 4 studs x 8 mm pitch",
      },
      {
        dimension: "length",
        label: "Width",
        value: 0.016,
        si_unit: "m",
        note: "15.8 mm; 2 studs x 8 mm pitch",
      },
      {
        dimension: "length",
        label: "Height",
        value: 0.0115,
        si_unit: "m",
        note: "11.5 mm including the stud top",
      },
      {
        dimension: "mass",
        label: "Mass",
        value: 0.00231,
        si_unit: "kg",
        note: "2.31 grams of ABS plastic",
      },
      {
        dimension: "force",
        label: "Clutch force (separation)",
        value: 15.6,
        si_unit: "N",
        note: "Force needed to separate two 2x4 bricks; surprisingly high",
      },
      {
        dimension: "pressure",
        label: "Compressive strength",
        value: 4200000,
        si_unit: "Pa",
        note: "Can support ~432 kg before failing; ~375,000 bricks stacked",
      },
    ],
  },

  {
    slug: "rubiks-cube",
    name: "Rubik's Cube",
    subtitle: "43 quintillion combinations, one solved state",
    category_id: "everyday-objects",
    description:
      "Invented by Hungarian architect Erno Rubik in 1974, the Rubik's Cube has exactly 43,252,003,274,489,856,000 possible configurations but only one solution. It took Rubik himself over a month to solve his own creation the first time. The current world record for a human solve is under 3.5 seconds, and robots can now do it in under 0.4 seconds. Over 450 million cubes have been sold worldwide.",
    search_terms:
      "rubiks cube|puzzle|rubik|speedcube|3x3|toy|brain teaser|twisty puzzle",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Side length",
        value: 0.057,
        si_unit: "m",
        note: "Standard 3x3x3 competition size; 57 mm per side",
      },
      {
        dimension: "mass",
        label: "Mass",
        value: 0.12,
        si_unit: "kg",
        note: "~120 g for a standard-weight cube",
      },
      {
        dimension: "volume",
        label: "Volume",
        value: 0.000185,
        si_unit: "m³",
        note: "185 mL; a cube 5.7 cm on each side",
      },
      {
        dimension: "time",
        label: "World record solve time",
        value: 3.13,
        si_unit: "s",
        note: "Max Park, June 2023; human single solve",
      },
      {
        dimension: "time",
        label: "Robot solve time record",
        value: 0.305,
        si_unit: "s",
        note: "Mitsubishi robot, 2024; blink and you miss it",
      },
    ],
  },

  {
    slug: "standard-pencil",
    name: "Standard No. 2 Pencil",
    subtitle: "The writing instrument that built civilization, one graphite line at a time",
    category_id: "everyday-objects",
    description:
      "The standard No. 2 (HB) pencil is one of the most produced objects in human history, with over 14 billion manufactured annually worldwide. A single pencil can draw a line roughly 56 kilometers long or write around 45,000 words. The 'lead' inside is actually a mix of graphite and clay, and has never contained actual lead. The yellow color became standard in the 1890s to signal high-quality graphite from China, where yellow symbolizes royalty.",
    search_terms:
      "pencil|number 2|HB|graphite|writing|school|stationery|yellow pencil|no 2",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Length (new)",
        value: 0.19,
        si_unit: "m",
        note: "19 cm / 7.5 inches before sharpening",
      },
      {
        dimension: "mass",
        label: "Mass",
        value: 0.006,
        si_unit: "kg",
        note: "About 6 grams of cedar wood and graphite",
      },
      {
        dimension: "length",
        label: "Writing line distance",
        value: 56000,
        si_unit: "m",
        note: "~56 km of continuous line; roughly 45,000 words",
      },
      {
        dimension: "length",
        label: "Diameter",
        value: 0.007,
        si_unit: "m",
        note: "Standard hexagonal cross-section; ~7 mm across flats",
      },
      {
        dimension: "length",
        label: "Graphite core diameter",
        value: 0.002,
        si_unit: "m",
        note: "~2 mm for a standard No. 2 pencil",
      },
    ],
  },

  {
    slug: "tennis-ball",
    name: "Tennis Ball",
    subtitle: "The fuzzy yellow sphere of athletic agony",
    category_id: "everyday-objects",
    description:
      "A regulation tennis ball is a hollow rubber sphere covered in bright yellow felt, pressurized with air or nitrogen to give it a consistent bounce. The ITF mandates that a ball dropped from 2.54 meters must bounce to between 1.35 and 1.47 meters. The yellow color was adopted in 1972 because it showed up better on color television. Dogs consider them the single greatest invention in human history.",
    search_terms:
      "tennis|tennis ball|ball|racket sport|felt|bounce|yellow ball|ITF",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Diameter",
        value: 0.067,
        si_unit: "m",
        note: "6.54-6.86 cm per ITF regulations; ~6.7 cm typical",
      },
      {
        dimension: "mass",
        label: "Mass",
        value: 0.058,
        si_unit: "kg",
        note: "56.0-59.4 g per ITF regulations",
      },
      {
        dimension: "speed",
        label: "Fastest serve recorded",
        value: 73.2,
        si_unit: "m/s",
        note: "Sam Groth, 2012; 263.4 km/h (ATP-recognized record is lower)",
      },
      {
        dimension: "length",
        label: "Bounce height",
        value: 1.4,
        si_unit: "m",
        note: "When dropped from 2.54 m; ITF requires 1.35-1.47 m",
      },
      {
        dimension: "force",
        label: "Impact force (serve)",
        value: 700,
        si_unit: "N",
        note: "Approximate peak force on a 60 m/s serve impact",
      },
      {
        dimension: "pressure",
        label: "Internal pressure",
        value: 82737,
        si_unit: "Pa",
        note: "~12 psi gauge pressure inside a new ball",
      },
    ],
  },

  {
    slug: "golf-ball",
    name: "Golf Ball",
    subtitle: "A dimpled sphere designed to fly farther than physics says it should",
    category_id: "everyday-objects",
    description:
      "A golf ball has between 300 and 500 dimples on its surface, and those dimples are the key to its flight. A smooth golf ball would only travel about half as far because the dimples create turbulent airflow that reduces drag and increases lift. The ball must not weigh more than 45.93 grams and must have a diameter of at least 42.67 mm. The average professional drive launches the ball at over 270 km/h.",
    search_terms:
      "golf|golf ball|dimples|drive|tee|sport|fairway|PGA|titleist",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Diameter",
        value: 0.04267,
        si_unit: "m",
        note: "Minimum 42.67 mm per USGA/R&A rules",
      },
      {
        dimension: "mass",
        label: "Mass",
        value: 0.04593,
        si_unit: "kg",
        note: "Maximum 45.93 g per USGA/R&A rules",
      },
      {
        dimension: "speed",
        label: "Professional drive speed",
        value: 76,
        si_unit: "m/s",
        note: "~274 km/h ball speed off the clubface for PGA pros",
      },
      {
        dimension: "speed",
        label: "Terminal velocity",
        value: 32,
        si_unit: "m/s",
        note: "~115 km/h; the speed at which air drag equals gravity",
      },
      {
        dimension: "energy",
        label: "Kinetic energy at drive",
        value: 132.5,
        si_unit: "J",
        note: "½mv² at professional drive speed; 0.04593 kg at 76 m/s",
      },
      {
        dimension: "length",
        label: "Longest drive record",
        value: 471.5,
        si_unit: "m",
        note: "Mike Austin, 1974 US Senior Open qualifier; 515 yards with wind aid",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPORTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "marathon-world-record",
    name: "Marathon World Record",
    subtitle: "42.195 km in under two hours, almost",
    category_id: "sports",
    description:
      "The official men's marathon world record is 2:00:35, set by Kelvin Kiptum at the 2023 Chicago Marathon. Eliud Kipchoge broke the two-hour barrier in 2019 with a time of 1:59:40 in Vienna, but that effort used rotating pace-setters and is not recognized as an official record. Either way, these athletes sustain a pace of roughly 3 minutes per kilometer for over two hours, which most people cannot maintain for a single kilometer.",
    search_terms:
      "marathon|running|world record|42km|long distance|kiptum|kipchoge|endurance",
    featured: 1,
    measurements: [
      {
        dimension: "length",
        label: "Race distance",
        value: 42195,
        si_unit: "m",
        note: "26.2 miles; standardized since the 1908 London Olympics",
      },
      {
        dimension: "time",
        label: "Official world record time",
        value: 7235,
        si_unit: "s",
        note: "2:00:35; Kelvin Kiptum, Chicago 2023",
      },
      {
        dimension: "speed",
        label: "Average speed",
        value: 5.83,
        si_unit: "m/s",
        note: "~21.0 km/h sustained for over 2 hours",
      },
      {
        dimension: "energy",
        label: "Approximate energy expenditure",
        value: 11700000,
        si_unit: "J",
        note: "~2,800 kcal burned during a marathon for an elite runner",
      },
      {
        dimension: "time",
        label: "Sub-two-hour exhibition time",
        value: 7180,
        si_unit: "s",
        note: "1:59:40; Kipchoge, INEOS 1:59 Challenge, Vienna 2019 (unofficial)",
      },
    ],
  },

  {
    slug: "olympic-long-jump-record",
    name: "Olympic Long Jump Record",
    subtitle: "8.90 meters of pure horizontal flight",
    category_id: "sports",
    description:
      "Bob Beamon's long jump at the 1968 Mexico City Olympics shattered the existing world record by 55 centimeters, a margin so absurd that fellow competitor Igor Ter-Ovanesyan said 'compared to this jump, we are as children.' Beamon leaped 8.90 meters, a record that stood as the world record for 23 years until Mike Powell jumped 8.95 m in 1991. Beamon's Olympic record, however, still stands.",
    search_terms:
      "long jump|olympics|track and field|bob beamon|jumping|athletics",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "Olympic record distance",
        value: 8.9,
        si_unit: "m",
        note: "Bob Beamon, Mexico City 1968; stood as world record until 1991",
      },
      {
        dimension: "length",
        label: "World record distance",
        value: 8.95,
        si_unit: "m",
        note: "Mike Powell, Tokyo 1991 World Championships",
      },
      {
        dimension: "speed",
        label: "Approach speed (elite)",
        value: 10.5,
        si_unit: "m/s",
        note: "~38 km/h at the takeoff board for top jumpers",
      },
      {
        dimension: "time",
        label: "Flight time",
        value: 0.9,
        si_unit: "s",
        note: "Approximate airborne duration for an 8.9 m jump",
      },
      {
        dimension: "length",
        label: "Takeoff height (center of mass)",
        value: 1.2,
        si_unit: "m",
        note: "Approximate peak height of center of mass during flight",
      },
    ],
  },

  {
    slug: "olympic-high-jump-record",
    name: "Olympic High Jump Record",
    subtitle: "2.45 meters straight up, defying gravity with style",
    category_id: "sports",
    description:
      "The men's high jump world record of 2.45 meters has been held by Javier Sotomayor since 1993, an astonishing mark that has survived three decades of athletic advancement. For reference, 2.45 meters is about the height of a doorframe plus half a meter. Sotomayor clears this using the Fosbury Flop technique, arching his back over the bar while his center of mass actually passes below it, a beautiful exploit of physics.",
    search_terms:
      "high jump|olympics|track and field|sotomayor|fosbury flop|jumping|athletics",
    featured: 0,
    measurements: [
      {
        dimension: "length",
        label: "World record height",
        value: 2.45,
        si_unit: "m",
        note: "Javier Sotomayor, Salamanca 1993; also holds Olympic record at 2.39 m",
      },
      {
        dimension: "length",
        label: "Olympic record height",
        value: 2.39,
        si_unit: "m",
        note: "Charles Austin, Atlanta 1996",
      },
      {
        dimension: "speed",
        label: "Approach speed",
        value: 7.5,
        si_unit: "m/s",
        note: "~27 km/h on the curved approach run",
      },
      {
        dimension: "energy",
        label: "Gravitational PE at peak",
        value: 1800,
        si_unit: "J",
        note: "~75 kg athlete raised ~2.45 m; mgh ≈ 1,800 J",
      },
      {
        dimension: "time",
        label: "Ground contact at takeoff",
        value: 0.15,
        si_unit: "s",
        note: "Duration of the final takeoff foot contact with the ground",
      },
    ],
  },

  {
    slug: "fifa-world-cup-ball",
    name: "FIFA World Cup Match Ball",
    subtitle: "The most watched sphere on the planet every four years",
    category_id: "sports",
    description:
      "A FIFA-approved match ball must weigh between 410 and 450 grams and have a circumference of 68 to 70 cm. Modern World Cup balls use thermally bonded panels instead of stitching, which makes them more spherical and consistent in wet conditions. Every World Cup gets a new ball design with a new name, and every tournament sees at least one goalkeeper complaining about how unpredictable it is.",
    search_terms:
      "soccer ball|football|FIFA|world cup|match ball|al rihla|adidas",
    featured: 0,
    measurements: [
      {
        dimension: "mass",
        label: "Mass",
        value: 0.43,
        si_unit: "kg",
        note: "410-450 g per FIFA Quality Pro specification",
      },
      {
        dimension: "length",
        label: "Circumference",
        value: 0.69,
        si_unit: "m",
        note: "68-70 cm per FIFA Laws of the Game",
      },
      {
        dimension: "length",
        label: "Diameter",
        value: 0.22,
        si_unit: "m",
        note: "~22 cm derived from the circumference range",
      },
      {
        dimension: "pressure",
        label: "Inflation pressure",
        value: 83000,
        si_unit: "Pa",
        note: "0.6-1.1 atm (8.5-15.6 psi) per FIFA specification",
      },
      {
        dimension: "speed",
        label: "Fastest recorded shot",
        value: 58.1,
        si_unit: "m/s",
        note: "~209 km/h; Ronny Heberson free kick, often cited as fastest",
      },
      {
        dimension: "energy",
        label: "Kinetic energy of fast shot",
        value: 726,
        si_unit: "J",
        note: "At ~58 m/s with 0.43 kg ball; ½mv²",
      },
    ],
  },

  {
    slug: "fastest-baseball-pitch",
    name: "Fastest Baseball Pitch",
    subtitle: "A 5-ounce ball hurtling at 105+ mph toward your face",
    category_id: "sports",
    description:
      "The fastest recorded pitch in MLB history was Aroldis Chapman's 105.8 mph (46.7 m/s) fastball in 2010. At that speed, the ball reaches home plate in roughly 375 milliseconds, giving the batter about 150 milliseconds to decide whether to swing. A baseball weighs between 142 and 149 grams, and at 105 mph it carries enough kinetic energy to break bones on impact. Batters are a different breed of brave.",
    search_terms:
      "baseball|pitch|fastball|chapman|MLB|speed|105 mph|throwing",
    featured: 0,
    measurements: [
      {
        dimension: "speed",
        label: "Record pitch speed",
        value: 46.7,
        si_unit: "m/s",
        note: "Aroldis Chapman, 2010; 105.8 mph measured at release",
      },
      {
        dimension: "mass",
        label: "Ball mass",
        value: 0.145,
        si_unit: "kg",
        note: "Official MLB ball: 142-149 g (5-5.25 oz)",
      },
      {
        dimension: "energy",
        label: "Kinetic energy at release",
        value: 158,
        si_unit: "J",
        note: "½ × 0.145 × 46.7² ≈ 158 J",
      },
      {
        dimension: "time",
        label: "Travel time to home plate",
        value: 0.375,
        si_unit: "s",
        note: "From release point (~16.8 m from plate) at ~46.7 m/s with deceleration",
      },
      {
        dimension: "length",
        label: "Pitching distance",
        value: 18.44,
        si_unit: "m",
        note: "60 feet 6 inches from rubber to plate; the sacred MLB geometry",
      },
      {
        dimension: "length",
        label: "Ball circumference",
        value: 0.231,
        si_unit: "m",
        note: "9-9.25 inches per official MLB specifications",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENTS & PHENOMENA
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "category-5-hurricane",
    name: "Category 5 Hurricane",
    subtitle: "Nature's most powerful heat engine, wind included",
    category_id: "events",
    description:
      "A Category 5 hurricane on the Saffir-Simpson scale has sustained winds exceeding 157 mph (70 m/s) and represents the most intense classification for tropical cyclones. These storms can span over 800 km in diameter and release energy equivalent to multiple nuclear weapons per second. Hurricane Patricia (2015) reached a record 215 mph sustained winds. The eye of the storm, paradoxically calm, typically has dramatically lower atmospheric pressure than the surrounding maelstrom.",
    search_terms:
      "hurricane|category 5|cyclone|typhoon|storm|wind|tropical|eye wall",
    featured: 1,
    measurements: [
      {
        dimension: "speed",
        label: "Minimum sustained wind speed",
        value: 70,
        si_unit: "m/s",
        note: "≥157 mph / 137 kt; threshold for Category 5 classification",
      },
      {
        dimension: "length",
        label: "Typical storm diameter",
        value: 800000,
        si_unit: "m",
        note: "~800 km across; some exceed 1,000 km",
      },
      {
        dimension: "energy",
        label: "Energy released per day",
        value: 2.1e19,
        si_unit: "J",
        note: "Equivalent to ~200 times the world's daily electricity output",
      },
      {
        dimension: "pressure",
        label: "Eye pressure (intense storm)",
        value: 92000,
        si_unit: "Pa",
        note: "~920 hPa in the eye; normal sea level is 101,325 Pa",
      },
      {
        dimension: "speed",
        label: "Record sustained wind",
        value: 96,
        si_unit: "m/s",
        note: "Hurricane Patricia, 2015; 215 mph / 345 km/h",
      },
      {
        dimension: "power",
        label: "Kinetic energy dissipation rate",
        value: 3e12,
        si_unit: "W",
        note: "~3 TW of kinetic energy in the wind field alone",
      },
      {
        dimension: "length",
        label: "Eye diameter",
        value: 40000,
        si_unit: "m",
        note: "Typical eye is 30-65 km across; smaller eyes often mean stronger storms",
      },
    ],
  },

  {
    slug: "tornado-ef5",
    name: "EF5 Tornado",
    subtitle: "A rotating column of wind that erases everything in its path",
    category_id: "events",
    description:
      "An EF5 tornado sits at the top of the Enhanced Fujita scale with estimated wind speeds exceeding 200 mph (90 m/s). These extraordinarily rare events account for less than 0.1% of all tornadoes but cause a disproportionate share of fatalities and destruction. The 2011 Joplin, Missouri EF5 tornado had a path nearly a mile wide and killed 158 people. Inside the funnel, wind speeds can vary wildly within meters, creating bizarre damage patterns where one house is obliterated while its neighbor survives.",
    search_terms:
      "tornado|EF5|twister|funnel|wind|severe weather|joplin|storm|vortex",
    featured: 0,
    measurements: [
      {
        dimension: "speed",
        label: "Estimated wind speed",
        value: 90,
        si_unit: "m/s",
        note: "≥200 mph / ≥89 m/s; EF5 threshold on Enhanced Fujita scale",
      },
      {
        dimension: "length",
        label: "Typical path length",
        value: 40000,
        si_unit: "m",
        note: "~40 km average for violent tornadoes; some exceed 100 km",
      },
      {
        dimension: "length",
        label: "Maximum path width",
        value: 1600,
        si_unit: "m",
        note: "~1 mile; the 2013 El Reno tornado reached 4.2 km wide",
      },
      {
        dimension: "time",
        label: "Typical duration",
        value: 1800,
        si_unit: "s",
        note: "Strong tornadoes often last 20-60 minutes on the ground",
      },
      {
        dimension: "speed",
        label: "Forward travel speed",
        value: 18,
        si_unit: "m/s",
        note: "~65 km/h typical forward motion; can vary widely",
      },
      {
        dimension: "pressure",
        label: "Central pressure drop",
        value: 10000,
        si_unit: "Pa",
        note: "~100 hPa drop from ambient; measured in extreme cases",
      },
    ],
  },

  {
    slug: "a-sneeze",
    name: "A Sneeze",
    subtitle: "An involuntary explosion at 100 mph from your face",
    category_id: "events",
    description:
      "A sneeze is a semi-autonomous neurological event that propels air, mucus, and roughly 40,000 droplets from your nose and mouth at speeds up to 100 mph. You cannot sneeze with your eyes open (well, you can, but it takes effort and they definitely will not pop out). A sneeze generates a brief but surprisingly large force in the chest cavity, and the spray can travel up to 8 meters. After 2020, we all became painfully aware of this last fact.",
    search_terms:
      "sneeze|sneezing|achoo|droplets|respiratory|involuntary|spray",
    featured: 0,
    measurements: [
      {
        dimension: "speed",
        label: "Expulsion speed",
        value: 44.7,
        si_unit: "m/s",
        note: "~100 mph peak; some studies report 4.5-42 m/s range",
      },
      {
        dimension: "force",
        label: "Force generated",
        value: 40,
        si_unit: "N",
        note: "Approximate peak force from the diaphragm and chest muscles",
      },
      {
        dimension: "time",
        label: "Duration",
        value: 0.15,
        si_unit: "s",
        note: "~150 milliseconds from initiation to completion",
      },
      {
        dimension: "energy",
        label: "Kinetic energy of expelled air",
        value: 1,
        si_unit: "J",
        note: "Approximate; enough energy to feel, not enough to power anything useful",
      },
      {
        dimension: "length",
        label: "Droplet travel distance",
        value: 8,
        si_unit: "m",
        note: "Large droplets can travel up to 8 m in still air; MIT study 2014",
      },
      {
        dimension: "volume",
        label: "Air volume expelled",
        value: 0.0015,
        si_unit: "m³",
        note: "~1.5 liters of air per sneeze",
      },
    ],
  },

  {
    slug: "magnitude-9-earthquake",
    name: "Magnitude 9.0 Earthquake",
    subtitle: "When tectonic plates slip and the whole planet rings like a bell",
    category_id: "events",
    description:
      "A magnitude 9.0 earthquake releases roughly 2 exajoules of energy, equivalent to about 480 megatons of TNT. The 2011 Tohoku earthquake off Japan's coast was a 9.1, shifted the Earth's axis by an estimated 10 cm, and shortened the day by 1.8 microseconds. Seismic waves from such events travel through the planet at 8 km/s and can be detected on seismographs on the opposite side of the globe. Only five M9+ earthquakes have been recorded since 1900.",
    search_terms:
      "earthquake|seismic|magnitude 9|richter|tectonic|tsunami|plate boundary|quake",
    featured: 1,
    measurements: [
      {
        dimension: "energy",
        label: "Total energy released",
        value: 2e18,
        si_unit: "J",
        note: "~2 exajoules; equivalent to ~480 megatons of TNT",
      },
      {
        dimension: "time",
        label: "Rupture duration",
        value: 360,
        si_unit: "s",
        note: "The 2011 Tohoku M9.1 rupture lasted ~6 minutes along the fault",
      },
      {
        dimension: "speed",
        label: "P-wave velocity (crust)",
        value: 8000,
        si_unit: "m/s",
        note: "Primary (compression) waves through Earth's upper mantle",
      },
      {
        dimension: "length",
        label: "Fault slip distance",
        value: 50,
        si_unit: "m",
        note: "Maximum displacement along the fault plane; 2011 Tohoku measured ~50 m",
      },
      {
        dimension: "length",
        label: "Rupture zone length",
        value: 500000,
        si_unit: "m",
        note: "~500 km for a M9.0; the 2004 Sumatra M9.1 ruptured ~1,300 km",
      },
      {
        dimension: "speed",
        label: "Tsunami speed in open ocean",
        value: 200,
        si_unit: "m/s",
        note: "~720 km/h; the speed of a jet airplane across deep ocean",
      },
    ],
  },

  {
    slug: "chicxulub-asteroid-impact",
    name: "Chicxulub Asteroid Impact",
    subtitle: "The 10 km rock that ended 165 million years of dinosaur dominance",
    category_id: "events",
    description:
      "Approximately 66 million years ago, an asteroid roughly 10 km in diameter slammed into what is now the Yucatan Peninsula at about 20 km/s, releasing energy equivalent to 100 teratons of TNT. The impact created a crater 150 km wide, triggered mega-tsunamis over a kilometer tall, ignited global wildfires, and blotted out the sun with debris for months. It wiped out 75% of all species, including the non-avian dinosaurs. The silver lining: it cleared the way for mammals and eventually us.",
    search_terms:
      "chicxulub|asteroid|dinosaur|extinction|impact|crater|yucatan|KT boundary|cretaceous",
    featured: 1,
    measurements: [
      {
        dimension: "energy",
        label: "Impact energy",
        value: 4.2e23,
        si_unit: "J",
        note: "~100 teratons of TNT; 2 million times larger than the Tsar Bomba",
      },
      {
        dimension: "length",
        label: "Crater diameter",
        value: 150000,
        si_unit: "m",
        note: "~150 km across; the entire crater is buried under sediment today",
      },
      {
        dimension: "length",
        label: "Asteroid diameter",
        value: 10000,
        si_unit: "m",
        note: "Estimated 10-15 km; roughly the size of a large city",
      },
      {
        dimension: "speed",
        label: "Impact speed",
        value: 20000,
        si_unit: "m/s",
        note: "~72,000 km/h; about 60 times the speed of sound",
      },
      {
        dimension: "mass",
        label: "Estimated asteroid mass",
        value: 1.0e15,
        si_unit: "kg",
        note: "~1 quadrillion kg assuming ~2,600 kg/m³ density",
      },
      {
        dimension: "length",
        label: "Tsunami wave height (near field)",
        value: 1500,
        si_unit: "m",
        note: "Estimated initial wave height near the impact site; ~1.5 km",
      },
      {
        dimension: "temperature",
        label: "Fireball temperature",
        value: 20000,
        si_unit: "K",
        note: "Plasma fireball reached ~20,000 K at the impact site",
      },
    ],
  },

  {
    slug: "tsar-bomba",
    name: "Tsar Bomba",
    subtitle: "The largest nuclear detonation in human history, and hopefully ever",
    category_id: "events",
    description:
      "On October 30, 1961, the Soviet Union detonated the AN602 hydrogen bomb, known as Tsar Bomba, over Novaya Zemlya. At 50 megatons of TNT equivalent, it was the most powerful artificial explosion ever. The fireball was 8 km in diameter, the mushroom cloud rose 67 km high, and the shockwave circled the Earth three times. Windows broke 900 km away. The bomb was originally designed for 100 megatons but was deliberately halved because even the Soviets thought that was too much.",
    search_terms:
      "tsar bomba|nuclear bomb|hydrogen bomb|soviet|nuke|explosion|AN602|atomic|thermonuclear",
    featured: 1,
    measurements: [
      {
        dimension: "energy",
        label: "Explosive yield",
        value: 2.1e17,
        si_unit: "J",
        note: "50 megatons TNT equivalent; ~1,570 times Hiroshima",
      },
      {
        dimension: "length",
        label: "Fireball diameter",
        value: 8000,
        si_unit: "m",
        note: "~8 km across; visible 1,000 km away",
      },
      {
        dimension: "length",
        label: "Mushroom cloud height",
        value: 67000,
        si_unit: "m",
        note: "67 km high; well into the mesosphere",
      },
      {
        dimension: "length",
        label: "Shockwave damage distance",
        value: 1000000,
        si_unit: "m",
        note: "Windows broken ~900 km away; felt shockwave 1,000+ km away",
      },
      {
        dimension: "mass",
        label: "Bomb mass",
        value: 27000,
        si_unit: "kg",
        note: "~27 tonnes; had to be carried by a modified Tu-95V bomber",
      },
      {
        dimension: "length",
        label: "Bomb length",
        value: 8,
        si_unit: "m",
        note: "8 m long, 2.1 m diameter; it barely fit in the aircraft",
      },
      {
        dimension: "power",
        label: "Peak power output",
        value: 1.4e26,
        si_unit: "W",
        note: "For a brief instant; ~1.4% of the Sun's total luminosity",
      },
    ],
  },

  {
    slug: "tunguska-event",
    name: "Tunguska Event",
    subtitle: "The mysterious 1908 explosion that flattened 2,000 km² of Siberian forest",
    category_id: "events",
    description:
      "On the morning of June 30, 1908, something exploded in the atmosphere above the Tunguska River in Siberia with the force of 10-15 megatons of TNT. It flattened an estimated 80 million trees over 2,150 square kilometers but left no impact crater. The leading theory is an asteroid or comet fragment 50-60 meters in diameter that disintegrated in an airburst at roughly 5-10 km altitude. The remoteness of the region meant no human fatalities were confirmed, though reindeer were not so lucky.",
    search_terms:
      "tunguska|explosion|siberia|1908|airburst|asteroid|comet|meteor|impact",
    featured: 0,
    measurements: [
      {
        dimension: "energy",
        label: "Estimated explosive energy",
        value: 1e16,
        si_unit: "J",
        note: "~3-15 megatons TNT equivalent; ~1,000 times the Hiroshima bomb",
      },
      {
        dimension: "area",
        label: "Flattened forest area",
        value: 2.15e9,
        si_unit: "m²",
        note: "~2,150 km²; about the area of greater London",
      },
      {
        dimension: "length",
        label: "Blast radius",
        value: 40000,
        si_unit: "m",
        note: "Trees knocked flat over a ~40 km radius",
      },
      {
        dimension: "length",
        label: "Estimated airburst altitude",
        value: 8000,
        si_unit: "m",
        note: "5-10 km above the surface; explains the lack of a crater",
      },
      {
        dimension: "length",
        label: "Estimated object diameter",
        value: 55,
        si_unit: "m",
        note: "50-60 m asteroid or comet fragment; relatively small for such devastation",
      },
      {
        dimension: "pressure",
        label: "Overpressure at ground zero",
        value: 300000,
        si_unit: "Pa",
        note: "Estimated ~3 atm peak overpressure at the epicenter",
      },
    ],
  },

  {
    slug: "krakatoa-1883-eruption",
    name: "Krakatoa 1883 Eruption",
    subtitle: "The eruption heard literally around the world",
    category_id: "events",
    description:
      "The 1883 eruption of Krakatoa in Indonesia was one of the most violent volcanic events in recorded history. The explosion was heard nearly 5,000 km away in Rodrigues Island near Mauritius, making it the loudest sound in modern history. It ejected roughly 25 cubic kilometers of rock and ash, generated tsunamis up to 30 meters high that killed over 36,000 people, and lowered global temperatures by 1.2°C for five years. The pressure wave was recorded on barographs worldwide as it circled the Earth four times.",
    search_terms:
      "krakatoa|volcano|eruption|1883|indonesia|explosion|tsunami|volcanic|krakatau",
    featured: 1,
    measurements: [
      {
        dimension: "energy",
        label: "Eruption energy",
        value: 8.4e17,
        si_unit: "J",
        note: "~200 megatons TNT; four times the Tsar Bomba",
      },
      {
        dimension: "length",
        label: "Sound audible distance",
        value: 4800000,
        si_unit: "m",
        note: "~4,800 km; heard on Rodrigues Island, the farthest confirmed report",
      },
      {
        dimension: "length",
        label: "Ash cloud height",
        value: 27000,
        si_unit: "m",
        note: "27 km into the stratosphere; global sunsets turned vivid red for years",
      },
      {
        dimension: "pressure",
        label: "Peak overpressure (near)",
        value: 3500000,
        si_unit: "Pa",
        note: "~35 atm estimated at the caldera; ruptured eardrums 60 km away",
      },
      {
        dimension: "length",
        label: "Tsunami height",
        value: 30,
        si_unit: "m",
        note: "Up to 30 m waves struck the coasts of Java and Sumatra",
      },
      {
        dimension: "volume",
        label: "Ejected material",
        value: 2.5e10,
        si_unit: "m³",
        note: "~25 km³ of rock, ash, and pumice ejected",
      },
      {
        dimension: "temperature",
        label: "Post-eruption global average temperature",
        value: 286.8,
        si_unit: "K",
        note: "~13.8°C; roughly 1.2°C below the pre-eruption average of ~15°C, lasting ~5 years",
      },
    ],
  },

  {
    slug: "large-solar-flare",
    name: "Large Solar Flare (X-class)",
    subtitle: "When the Sun has a tantrum and everyone on Earth pays attention",
    category_id: "events",
    description:
      "An X-class solar flare is the most powerful category of solar explosion, releasing energy equivalent to billions of hydrogen bombs in minutes. The plasma eruption heats coronal material to tens of millions of kelvins and accelerates charged particles to nearly the speed of light. If the associated coronal mass ejection hits Earth, it can disrupt satellite communications, damage power grids, and produce stunning auroras visible at low latitudes. The 1859 Carrington Event, an estimated X45+ flare, caused telegraph lines to spark and catch fire.",
    search_terms:
      "solar flare|sun|X-class|CME|coronal mass ejection|space weather|carrington|aurora",
    featured: 0,
    measurements: [
      {
        dimension: "energy",
        label: "Total energy released",
        value: 1e25,
        si_unit: "J",
        note: "Large X-class flare; equivalent to ~10 billion megatons of TNT",
      },
      {
        dimension: "speed",
        label: "CME ejection speed",
        value: 2e6,
        si_unit: "m/s",
        note: "Fastest CMEs exceed 2,000 km/s; typical fast ones ~1,000 km/s",
      },
      {
        dimension: "temperature",
        label: "Flare plasma temperature",
        value: 2e7,
        si_unit: "K",
        note: "~20 million K at the reconnection site; hotter than the Sun's core",
      },
      {
        dimension: "length",
        label: "Flare loop height",
        value: 1e8,
        si_unit: "m",
        note: "~100,000 km; magnetic loops taller than Jupiter's diameter",
      },
      {
        dimension: "power",
        label: "Peak radiated power",
        value: 1e22,
        si_unit: "W",
        note: "Peak X-ray luminosity during the flare impulsive phase",
      },
      {
        dimension: "time",
        label: "Flare duration",
        value: 1800,
        si_unit: "s",
        note: "Impulsive phase lasts minutes; decay phase can last hours",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COLLECTIVE & CONCEPTUAL
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "all-the-ants-on-earth",
    name: "All the Ants on Earth",
    subtitle: "20 quadrillion tiny roommates we never invited",
    category_id: "conceptual",
    description:
      "A 2022 study in the Proceedings of the National Academy of Sciences estimated there are approximately 20 quadrillion (2 × 10^16) ants on Earth with a combined biomass of roughly 80 million tonnes of dry carbon, or about 80 billion kg of total wet weight. That is more mass than all wild birds and mammals combined. Ants have been around for over 100 million years, occupy every continent except Antarctica, and collectively outweigh humanity by a factor of roughly 150. They were here first and they will be here last.",
    search_terms:
      "ants|insects|biomass|population|all ants|colony|formicidae|collective",
    featured: 1,
    measurements: [
      {
        dimension: "mass",
        label: "Total estimated biomass",
        value: 8e13,
        si_unit: "kg",
        note: "~80 billion kg wet weight; ~80 million tonnes of dry carbon (PNAS 2022)",
      },
      {
        dimension: "mass",
        label: "Average single ant mass",
        value: 0.000004,
        si_unit: "kg",
        note: "~1-5 mg depending on species; ~4 mg average",
      },
      {
        dimension: "length",
        label: "Average ant body length",
        value: 0.002,
        si_unit: "m",
        note: "Ranges from 0.75 mm to 52 mm across species; ~2 mm average",
      },
      {
        dimension: "force",
        label: "Carrying force (single ant)",
        value: 0.005,
        si_unit: "N",
        note: "A single ant can carry 10-50× its body weight",
      },
      {
        dimension: "speed",
        label: "Fastest ant species speed",
        value: 0.855,
        si_unit: "m/s",
        note: "Saharan silver ant; ~3 km/h, 108 body lengths per second",
      },
    ],
  },

  {
    slug: "the-entire-internet",
    name: "The Entire Internet",
    subtitle: "All of human knowledge, plus a lot of cat videos",
    category_id: "conceptual",
    description:
      "The total amount of data on the internet is estimated at around 120 zettabytes (1.2 × 10^20 bytes) as of the mid-2020s, and it is growing by roughly 2.5 quintillion bytes per day. Keeping all of this data alive requires an estimated 300+ gigawatts of power across the world's data centers, networking equipment, and end-user devices. The physical infrastructure includes over 550 submarine cables spanning 1.4 million km under the ocean. Roughly 90% of all data ever created has been generated in the last two years.",
    search_terms:
      "internet|data|web|digital|zettabytes|online|data center|bandwidth|network",
    featured: 1,
    measurements: [
      {
        dimension: "data",
        label: "Total data volume",
        value: 1.2e20,
        si_unit: "bytes",
        note: "~120 zettabytes; growing ~2.5 exabytes per day",
      },
      {
        dimension: "power",
        label: "Total power consumption",
        value: 3e11,
        si_unit: "W",
        note: "~300 GW for data centers, networks, and devices worldwide",
      },
      {
        dimension: "length",
        label: "Submarine cable total length",
        value: 1.4e9,
        si_unit: "m",
        note: "~1.4 million km of undersea fiber optic cables as of 2024",
      },
      {
        dimension: "data",
        label: "Daily data creation",
        value: 2.5e18,
        si_unit: "bytes",
        note: "~2.5 exabytes created or replicated per day globally",
      },
      {
        dimension: "speed",
        label: "Signal speed in fiber optic cable",
        value: 2e8,
        si_unit: "m/s",
        note: "Light travels at ~2/3 the speed of light in fiber optic glass",
      },
    ],
  },

  {
    slug: "all-the-gold-ever-mined",
    name: "All the Gold Ever Mined",
    subtitle: "About 205,000 tonnes, enough to fit in three Olympic pools",
    category_id: "conceptual",
    description:
      "The World Gold Council estimates that approximately 204,000-208,000 tonnes of gold have been mined throughout all of human history. Because gold is virtually indestructible (it does not corrode or rust), nearly all of it is still around in some form: jewelry, bars, coins, electronics, and central bank reserves. If you melted it all into a single cube, each side would be about 22 meters long, which means all the gold ever extracted from the Earth would fit comfortably under the Eiffel Tower.",
    search_terms:
      "gold|mined gold|precious metal|bullion|all gold|gold reserves|total gold",
    featured: 0,
    measurements: [
      {
        dimension: "mass",
        label: "Total mass ever mined",
        value: 2.04e8,
        si_unit: "kg",
        note: "~204,000 tonnes as of 2023; World Gold Council estimate",
      },
      {
        dimension: "volume",
        label: "Total volume as a solid cube",
        value: 10570,
        si_unit: "m³",
        note: "At gold's density of 19,300 kg/m³; a cube ~22 m per side",
      },
      {
        dimension: "length",
        label: "Cube side length",
        value: 21.97,
        si_unit: "m",
        note: "All gold ever mined formed into a cube; fits under the Eiffel Tower",
      },
      {
        dimension: "mass",
        label: "Annual mining output",
        value: 3100000,
        si_unit: "kg",
        note: "~3,100 tonnes mined per year as of 2023",
      },
      {
        dimension: "mass",
        label: "Estimated gold in Earth's core",
        value: 1.6e19,
        si_unit: "kg",
        note: "~16 quintillion kg; enough to coat the Earth's surface 0.5 m deep",
      },
    ],
  },

  {
    slug: "all-the-water-on-earth",
    name: "All the Water on Earth",
    subtitle: "1.386 billion cubic kilometers of H₂O, and only 2.5% is fresh",
    category_id: "conceptual",
    description:
      "Earth contains roughly 1.386 billion cubic kilometers of water in all its forms: oceans, ice caps, groundwater, rivers, lakes, and the atmosphere. Despite being called the Blue Planet, 97.5% of that water is salty ocean water. Of the remaining 2.5% fresh water, most is locked in ice sheets and glaciers. Less than 1% of all Earth's water is readily accessible as liquid fresh water in lakes, rivers, and shallow aquifers. If all the water were gathered into a sphere, it would be about 1,385 km in diameter.",
    search_terms:
      "water|earth water|ocean|hydrosphere|fresh water|sea water|H2O|total water",
    featured: 1,
    measurements: [
      {
        dimension: "volume",
        label: "Total water volume",
        value: 1.386e18,
        si_unit: "m³",
        note: "1.386 billion km³; USGS estimate of all water on Earth",
      },
      {
        dimension: "mass",
        label: "Total water mass",
        value: 1.386e21,
        si_unit: "kg",
        note: "~1.386 × 10²¹ kg; about 0.023% of Earth's total mass",
      },
      {
        dimension: "volume",
        label: "Ocean volume",
        value: 1.335e18,
        si_unit: "m³",
        note: "~96.5% of all water; average depth ~3,688 m",
      },
      {
        dimension: "volume",
        label: "Fresh water volume",
        value: 3.47e16,
        si_unit: "m³",
        note: "~2.5% of total; most locked in glaciers and ice caps",
      },
      {
        dimension: "length",
        label: "Water sphere diameter",
        value: 1385000,
        si_unit: "m",
        note: "~1,385 km if all Earth's water were collected into a sphere",
      },
      {
        dimension: "volume",
        label: "Accessible fresh surface water",
        value: 9.39e13,
        si_unit: "m³",
        note: "Lakes, rivers, and swamps; only ~0.007% of total water",
      },
    ],
  },

  {
    slug: "total-human-population-mass",
    name: "Total Human Population Mass",
    subtitle: "8 billion people weigh about 518 million tonnes combined",
    category_id: "conceptual",
    description:
      "With approximately 8 billion people on Earth and an average body mass of roughly 62 kg (accounting for children and global variation), humanity's combined mass is about 518 million tonnes. Our total blood volume is approximately 40 billion liters, enough to fill 16,000 Olympic swimming pools. Despite these impressive numbers, humans make up only about 0.01% of all living biomass on Earth. Plants outweigh us by a factor of about 7,500.",
    search_terms:
      "human population|total mass|humanity|people|biomass|world population|8 billion",
    featured: 0,
    measurements: [
      {
        dimension: "mass",
        label: "Total human mass",
        value: 5.18e11,
        si_unit: "kg",
        note: "~518 million tonnes; based on ~8.1 billion people × ~64 kg average",
      },
      {
        dimension: "volume",
        label: "Total human blood volume",
        value: 4e7,
        si_unit: "m³",
        note: "~40 billion liters; ~5 liters per person × 8 billion people",
      },
      {
        dimension: "power",
        label: "Combined metabolic power",
        value: 6.48e11,
        si_unit: "W",
        note: "~80 W per person × 8.1 billion; humanity is a ~648 GW heater",
      },
      {
        dimension: "energy",
        label: "Daily food energy consumed",
        value: 6.8e16,
        si_unit: "J",
        note: "~8,400 kJ/day × 8.1 billion people",
      },
      {
        dimension: "mass",
        label: "Average individual mass",
        value: 64,
        si_unit: "kg",
        note: "Global average including all ages; varies widely by region",
      },
    ],
  },

  {
    slug: "worlds-annual-energy-consumption",
    name: "World's Annual Energy Consumption",
    subtitle: "Civilization runs on 580 exajoules per year and counting",
    category_id: "conceptual",
    description:
      "Global primary energy consumption reached approximately 580 exajoules in 2023, with fossil fuels still accounting for roughly 80% of the total. This works out to an average continuous power draw of about 18.4 terawatts for all of civilization: transportation, industry, heating, cooling, and that phone charger you leave plugged in 24/7. For perspective, the Sun delivers about 174 petawatts to Earth's upper atmosphere, so we use roughly 0.01% of the available solar energy.",
    search_terms:
      "energy|world energy|consumption|power|global energy|fossil fuel|electricity|terawatt",
    featured: 0,
    measurements: [
      {
        dimension: "energy",
        label: "Annual primary energy consumption",
        value: 5.8e20,
        si_unit: "J",
        note: "~580 EJ in 2023; IEA World Energy Outlook",
      },
      {
        dimension: "power",
        label: "Average continuous power draw",
        value: 1.84e13,
        si_unit: "W",
        note: "~18.4 TW; energy per year converted to average watts",
      },
      {
        dimension: "power",
        label: "Global electricity generation",
        value: 9.5e12,
        si_unit: "W",
        note: "~29,900 TWh/year ≈ ~3.4 TW average; electricity is ~52% of total energy use",
      },
      {
        dimension: "energy",
        label: "Per capita annual energy",
        value: 7.16e10,
        si_unit: "J",
        note: "~71.6 GJ per person per year; varies 10× between countries",
      },
      {
        dimension: "mass",
        label: "Annual CO2 emissions",
        value: 3.73e13,
        si_unit: "kg",
        note: "~37.3 billion tonnes of CO2 from fossil fuels (2023); ~4.6 tonnes per person",
      },
    ],
  },

  {
    slug: "all-data-ever-created",
    name: "All Data Ever Created",
    subtitle: "97 zettabytes and counting, mostly never looked at again",
    category_id: "conceptual",
    description:
      "The global datasphere, all data created, captured, copied, and consumed, is estimated to have reached roughly 97-120 zettabytes by the mid-2020s, with projections exceeding 180 zettabytes by 2025. The vast majority of this data is ephemeral: temporary files, streaming video, IoT sensor readings, and social media posts that are never stored permanently. If you stored all of it on standard Blu-ray discs, the stack would reach from Earth to the Moon over 40 times. About 2% of data created is actually retained and stored.",
    search_terms:
      "data|digital data|datasphere|zettabytes|information|storage|big data|total data",
    featured: 0,
    measurements: [
      {
        dimension: "data",
        label: "Total data ever created (cumulative)",
        value: 9.7e22,
        si_unit: "bytes",
        note: "~97 zettabytes by mid-2020s; IDC Global DataSphere estimate",
      },
      {
        dimension: "data",
        label: "Data actually stored/retained",
        value: 3.3e21,
        si_unit: "bytes",
        note: "Only ~2-3% of all data created is retained; ~33 ZB stored",
      },
      {
        dimension: "data",
        label: "Annual data creation rate",
        value: 1.2e22,
        si_unit: "bytes",
        note: "~120 ZB created or replicated per year as of 2023",
      },
      {
        dimension: "energy",
        label: "Annual energy for data storage",
        value: 2.2e18,
        si_unit: "J",
        note: "Data centers use ~1% of global electricity; ~700 TWh/year total",
      },
      {
        dimension: "mass",
        label: "Mass of all stored data (electrons)",
        value: 6e-8,
        si_unit: "kg",
        note: "All stored data weighs ~60 nanograms in electrons; lighter than a grain of sand",
      },
    ],
  },
];
