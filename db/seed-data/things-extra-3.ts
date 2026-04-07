// ── Extra things seed data (batch 3) ──────────────────────────────────────
// Trains, Stadiums, Ships, Plants, Microscopic Life, Bridges
// Filling sparse categories for better balance

import type { ThingInput } from "../types";

export const categoriesData: never[] = [];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TRAINS & RAIL
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "orient-express",
    name: "Orient Express",
    subtitle: "The legendary luxury train from Paris to Istanbul",
    category_id: "trains",
    description:
      "The Orient Express began service in 1883 and quickly became the world's most famous train, immortalized by Agatha Christie and countless films. At its peak, the full consist stretched nearly 400 meters and carried passengers in unparalleled luxury across Europe. The dining car alone served meals on fine china with real silverware, making modern airline food look even sadder by comparison.",
    search_terms:
      "orient express|luxury train|paris istanbul|agatha christie|railway|european train",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Full train length", value: 400, si_unit: "m", note: "Full consist with all carriages" },
      { dimension: "mass", label: "Total mass", value: 600000, si_unit: "kg", note: "Locomotive plus all carriages" },
      { dimension: "speed", label: "Cruising speed", value: 40, si_unit: "m/s", note: "About 144 km/h" },
      { dimension: "length", label: "Carriage width", value: 3.1, si_unit: "m" },
      { dimension: "length", label: "Carriage height", value: 4.3, si_unit: "m" },
      { dimension: "time", label: "Paris-Istanbul journey", value: 200000, si_unit: "s", note: "About 56 hours historically" },
    ],
  },

  {
    slug: "tgv-french-high-speed",
    name: "TGV (Train à Grande Vitesse)",
    subtitle: "France's bullet that runs on rails and Gallic pride",
    category_id: "trains",
    description:
      "The TGV has been France's flagship high-speed train since 1981, routinely whisking passengers between Paris and Lyon at speeds that make highway driving feel medieval. In 2007 a modified TGV set the world rail speed record at 574.8 km/h. The standard Duplex version carries over 500 passengers on two decks, proving that the French can stack people as efficiently as they stack cheese on a baguette.",
    search_terms:
      "tgv|french train|high speed rail|bullet train|sncf|grande vitesse",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Train length", value: 200, si_unit: "m", note: "Standard Duplex set" },
      { dimension: "speed", label: "Maximum operating speed", value: 90, si_unit: "m/s", note: "320 km/h in regular service" },
      { dimension: "mass", label: "Total mass", value: 380000, si_unit: "kg", note: "Fully loaded" },
      { dimension: "power", label: "Total traction power", value: 9280000, si_unit: "W", note: "9.28 MW" },
      { dimension: "speed", label: "World record speed", value: 159.7, si_unit: "m/s", note: "574.8 km/h set in 2007" },
    ],
  },

  {
    slug: "trans-siberian-railway",
    name: "Trans-Siberian Railway",
    subtitle: "The longest railway line on Earth, spanning 9,289 km",
    category_id: "trains",
    description:
      "Stretching from Moscow to Vladivostok, the Trans-Siberian Railway is the longest railway line in the world. Construction began in 1891 and took over 25 years. The full journey crosses 8 time zones, 87 cities, and 16 rivers. Passengers spend roughly 6 days aboard, during which they will consume approximately infinite cups of tea from the samovar at the end of each carriage.",
    search_terms:
      "trans-siberian|trans siberian|railway|russia|moscow vladivostok|longest railway",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total route length", value: 9289000, si_unit: "m", note: "Moscow to Vladivostok" },
      { dimension: "time", label: "Journey duration", value: 518400, si_unit: "s", note: "About 6 days non-stop" },
      { dimension: "speed", label: "Average speed", value: 18, si_unit: "m/s", note: "Including all stops" },
      { dimension: "time", label: "Construction time", value: 788400000, si_unit: "s", note: "About 25 years" },
      { dimension: "length", label: "Number of bridges total span", value: 100000, si_unit: "m", note: "Estimated combined bridge length" },
    ],
  },

  {
    slug: "london-underground-train",
    name: "London Underground Train",
    subtitle: "The Tube train that navigates the world's oldest metro",
    category_id: "trains",
    description:
      "The London Underground opened in 1863, making it the world's first underground railway. Modern Tube trains on the deep-level lines are remarkably narrow to fit through tunnels built in the Victorian era. The network carries over 1.3 billion passengers per year through 272 stations. The famous 'Mind the Gap' announcement has been scaring tourists since 1969.",
    search_terms:
      "london underground|tube|metro|mind the gap|subway|transport for london|tfl",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Train length", value: 133, si_unit: "m", note: "8-car formation" },
      { dimension: "mass", label: "Total mass", value: 168000, si_unit: "kg", note: "Empty weight" },
      { dimension: "speed", label: "Maximum speed", value: 27, si_unit: "m/s", note: "About 97 km/h" },
      { dimension: "length", label: "Car width", value: 2.63, si_unit: "m", note: "Narrow to fit Victorian tunnels" },
      { dimension: "length", label: "Car height", value: 2.88, si_unit: "m" },
      { dimension: "length", label: "Network total length", value: 402000, si_unit: "m", note: "402 km of track" },
    ],
  },

  {
    slug: "big-boy-locomotive",
    name: "Big Boy Locomotive",
    subtitle: "The largest steam locomotive ever built",
    category_id: "trains",
    description:
      "The Union Pacific Big Boy is the largest steam locomotive ever built. Only 25 were manufactured between 1941 and 1944 to haul freight over the Wasatch Mountains. Each one is an absolute unit of riveted steel and controlled explosions. Big Boy No. 4014 was restored to operation in 2019 and remains the world's largest operating steam locomotive, delighting railfans and terrifying anyone standing too close to the tracks.",
    search_terms:
      "big boy|union pacific|steam locomotive|largest locomotive|4014|steam train",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length with tender", value: 40.5, si_unit: "m" },
      { dimension: "mass", label: "Total mass with tender", value: 548000, si_unit: "kg", note: "Loaded weight" },
      { dimension: "power", label: "Tractive effort", value: 4700000, si_unit: "W", note: "About 6,300 horsepower" },
      { dimension: "length", label: "Driving wheel diameter", value: 1.73, si_unit: "m", note: "68-inch drivers" },
      { dimension: "speed", label: "Maximum speed", value: 36, si_unit: "m/s", note: "About 130 km/h" },
      { dimension: "mass", label: "Coal capacity", value: 25400, si_unit: "kg", note: "28 tons in the tender" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STADIUMS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "rose-bowl-stadium",
    name: "Rose Bowl Stadium",
    subtitle: "Pasadena's grand old dame of American football",
    category_id: "stadiums",
    description:
      "The Rose Bowl in Pasadena, California has hosted five Super Bowls, the 1994 FIFA World Cup Final, and countless New Year's Day college football games. Built in 1922, it was originally horseshoe-shaped before being enclosed into its iconic bowl form. It seats over 90,000 people, all of whom will somehow end up in the same parking lot trying to leave at once.",
    search_terms:
      "rose bowl|pasadena|stadium|super bowl|college football|ucla|nfl",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total footprint area", value: 37000, si_unit: "m²" },
      { dimension: "length", label: "Height", value: 28, si_unit: "m", note: "Rim height" },
      { dimension: "length", label: "Circumference", value: 700, si_unit: "m", note: "Approximate outer perimeter" },
      { dimension: "area", label: "Playing field area", value: 5350, si_unit: "m²", note: "Standard football field" },
      { dimension: "length", label: "Field length", value: 110, si_unit: "m", note: "Including end zones" },
    ],
  },

  {
    slug: "birds-nest-beijing",
    name: "Bird's Nest (Beijing National Stadium)",
    subtitle: "The steel lattice icon of the 2008 Olympics",
    category_id: "stadiums",
    description:
      "Designed by Herzog & de Meuron and artist Ai Weiwei, the Beijing National Stadium earned its 'Bird's Nest' nickname from the interwoven steel beams that form its exterior. Built for the 2008 Summer Olympics, it used 42,000 tonnes of steel in a structure that looks like a giant picked up a ball of rebar and carefully bent it into a stadium. It seats 91,000 and cost approximately $423 million to build.",
    search_terms:
      "birds nest|beijing stadium|olympics 2008|national stadium|china|herzog de meuron",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 69, si_unit: "m", note: "Maximum roof height" },
      { dimension: "mass", label: "Steel mass", value: 42000000, si_unit: "kg", note: "42,000 tonnes of structural steel" },
      { dimension: "area", label: "Total floor area", value: 258000, si_unit: "m²" },
      { dimension: "length", label: "Exterior length", value: 333, si_unit: "m" },
      { dimension: "length", label: "Exterior width", value: 294, si_unit: "m" },
    ],
  },

  {
    slug: "camp-nou-barcelona",
    name: "Camp Nou",
    subtitle: "Europe's largest football stadium and the cathedral of FC Barcelona",
    category_id: "stadiums",
    description:
      "Camp Nou has been the home of FC Barcelona since 1957 and is the largest stadium in Europe with a capacity of 99,354. The name means 'New Ground' in Catalan, which feels increasingly ironic given the stadium is older than most of its fans' grandparents. It has witnessed some of the greatest moments in football history, including Messi's entire career arc from teenager to legend.",
    search_terms:
      "camp nou|barcelona|fc barcelona|barca|football stadium|la liga|spain|soccer",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Playing field area", value: 7140, si_unit: "m²", note: "105m x 68m pitch" },
      { dimension: "length", label: "Height", value: 48, si_unit: "m", note: "Maximum height of stands" },
      { dimension: "length", label: "Pitch length", value: 105, si_unit: "m" },
      { dimension: "length", label: "Pitch width", value: 68, si_unit: "m" },
      { dimension: "area", label: "Total site area", value: 55000, si_unit: "m²" },
    ],
  },

  {
    slug: "yankee-stadium",
    name: "Yankee Stadium",
    subtitle: "The House That Jeter Re-Built",
    category_id: "stadiums",
    description:
      "The current Yankee Stadium opened in 2009 across the street from the original 'House That Ruth Built.' It cost $2.3 billion to construct, making it one of the most expensive stadiums ever built. It seats 46,537 for baseball and features 56 luxury suites. The short right field porch continues the proud Yankee tradition of being suspiciously friendly to left-handed power hitters.",
    search_terms:
      "yankee stadium|new york yankees|bronx|mlb|baseball|yankees|jeter",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Playing field area", value: 5000, si_unit: "m²", note: "Approximate outfield and infield" },
      { dimension: "volume", label: "Interior volume", value: 800000, si_unit: "m³", note: "Estimated enclosed volume" },
      { dimension: "length", label: "Left field line", value: 97.5, si_unit: "m", note: "318 feet" },
      { dimension: "length", label: "Center field", value: 124, si_unit: "m", note: "408 feet" },
      { dimension: "length", label: "Right field line", value: 96, si_unit: "m", note: "314 feet" },
      { dimension: "length", label: "Height", value: 40, si_unit: "m", note: "Approximate roof height" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SHIPS & BOATS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "mayflower",
    name: "Mayflower",
    subtitle: "The ship that delivered 102 seasick Pilgrims to the New World",
    category_id: "ships",
    description:
      "The Mayflower carried the Pilgrims from Plymouth, England to Plymouth, Massachusetts in 1620, a 66-day voyage across the Atlantic. The ship was originally a cargo vessel used to transport wine and cloth, which explains why conditions aboard were roughly as comfortable as being stored in a wine barrel. The 102 passengers and about 30 crew members shared a space smaller than a modern tennis court.",
    search_terms:
      "mayflower|pilgrims|plymouth|1620|colonial|thanksgiving|pilgrim fathers",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 30, si_unit: "m", note: "Approximately 100 feet" },
      { dimension: "mass", label: "Displacement", value: 180000, si_unit: "kg", note: "About 180 tonnes" },
      { dimension: "speed", label: "Average sailing speed", value: 3.6, si_unit: "m/s", note: "About 7 knots" },
      { dimension: "length", label: "Beam (width)", value: 7.6, si_unit: "m" },
      { dimension: "area", label: "Sail area", value: 450, si_unit: "m²", note: "Estimated total canvas" },
      { dimension: "time", label: "Atlantic crossing time", value: 5702400, si_unit: "s", note: "66 days" },
    ],
  },

  {
    slug: "bismarck-battleship",
    name: "Bismarck",
    subtitle: "Nazi Germany's most feared warship, sunk on her maiden voyage",
    category_id: "ships",
    description:
      "The Bismarck was the pride of the German Kriegsmarine and one of the largest battleships ever built by a European power. On her maiden combat voyage in May 1941, she sank HMS Hood in a spectacular explosion, then was hunted across the Atlantic by virtually the entire Royal Navy. She was finally sunk after a torpedo jammed her rudder, leaving her sailing in circles. The metaphor writes itself.",
    search_terms:
      "bismarck|battleship|wwii|world war 2|kriegsmarine|german navy|hms hood|warship",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length", value: 251, si_unit: "m" },
      { dimension: "mass", label: "Full displacement", value: 50300000, si_unit: "kg", note: "50,300 tonnes fully loaded" },
      { dimension: "speed", label: "Maximum speed", value: 15.5, si_unit: "m/s", note: "About 30 knots" },
      { dimension: "power", label: "Engine power", value: 110000000, si_unit: "W", note: "About 150,000 shaft horsepower" },
      { dimension: "length", label: "Beam (width)", value: 36, si_unit: "m" },
      { dimension: "length", label: "Main gun caliber", value: 0.38, si_unit: "m", note: "380 mm (15-inch) guns" },
    ],
  },

  {
    slug: "viking-longship",
    name: "Viking Longship",
    subtitle: "The shallow-draft raider that terrorized medieval Europe",
    category_id: "ships",
    description:
      "Viking longships were engineering marvels of the early medieval world. Their shallow draft allowed them to sail up rivers and land directly on beaches, which was very convenient for the Vikings and very inconvenient for everyone else. Built from overlapping oak planks (clinker construction), they were flexible enough to ride ocean swells yet light enough to be portaged overland between waterways.",
    search_terms:
      "viking|longship|norse|scandinavia|raiders|medieval|drakkar|longboat",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length", value: 24, si_unit: "m", note: "Typical large longship" },
      { dimension: "mass", label: "Displacement", value: 20000, si_unit: "kg", note: "About 20 tonnes" },
      { dimension: "speed", label: "Speed under sail", value: 5.7, si_unit: "m/s", note: "About 11 knots" },
      { dimension: "length", label: "Beam (width)", value: 5, si_unit: "m" },
      { dimension: "length", label: "Draft", value: 0.5, si_unit: "m", note: "Remarkably shallow" },
      { dimension: "area", label: "Sail area", value: 90, si_unit: "m²", note: "Single square sail" },
    ],
  },

  {
    slug: "noahs-ark-biblical",
    name: "Noah's Ark (Biblical Dimensions)",
    subtitle: "The original cruise ship, capacity: two of everything",
    category_id: "ships",
    description:
      "According to Genesis 6:15, Noah's Ark was 300 cubits long, 50 cubits wide, and 30 cubits high. Using the standard ancient cubit of about 457 mm, this gives a vessel roughly 137 meters long. Whether or not it actually existed, the specified dimensions describe a remarkably stable hull form. Naval architects who have analyzed the proportions note they are well-suited to surviving heavy seas, though fitting two of every species remains a logistics problem that would make Amazon's warehouse team weep.",
    search_terms:
      "noahs ark|noah|genesis|bible|biblical|flood|ark|two by two",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length", value: 137, si_unit: "m", note: "300 cubits" },
      { dimension: "length", label: "Width", value: 23, si_unit: "m", note: "50 cubits" },
      { dimension: "length", label: "Height", value: 14, si_unit: "m", note: "30 cubits (3 decks)" },
      { dimension: "volume", label: "Interior volume", value: 44000, si_unit: "m³", note: "Estimated from biblical dimensions" },
      { dimension: "area", label: "Deck area per level", value: 3151, si_unit: "m²", note: "137m x 23m" },
    ],
  },

  {
    slug: "uss-virginia-submarine",
    name: "USS Virginia-Class Submarine",
    subtitle: "America's most advanced nuclear attack submarine",
    category_id: "ships",
    description:
      "The Virginia class is the U.S. Navy's newest class of nuclear-powered fast attack submarine. Designed to operate in both deep ocean and shallow coastal waters, these boats carry Tomahawk cruise missiles and can deploy Navy SEALs. Each submarine costs about $3.4 billion and is built to be quieter than the ocean itself. The crew of 132 lives underwater for months at a time, which is either impressive or a very expensive way to avoid sunlight.",
    search_terms:
      "virginia class|submarine|nuclear submarine|us navy|ssn|attack submarine|underwater",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length", value: 115, si_unit: "m" },
      { dimension: "mass", label: "Submerged displacement", value: 7800000, si_unit: "kg", note: "7,800 tonnes" },
      { dimension: "speed", label: "Maximum submerged speed", value: 17.5, si_unit: "m/s", note: "About 34 knots" },
      { dimension: "length", label: "Maximum operating depth", value: 240, si_unit: "m", note: "Estimated; classified exact figure" },
      { dimension: "length", label: "Beam (width)", value: 10.4, si_unit: "m" },
      { dimension: "power", label: "Reactor power", value: 30000000, si_unit: "W", note: "S9G reactor, about 40,000 shp" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLANTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "rafflesia-flower",
    name: "Rafflesia arnoldii",
    subtitle: "The world's largest individual flower, and it smells like death",
    category_id: "plants",
    description:
      "Rafflesia arnoldii produces the largest individual flower on Earth, sometimes exceeding one meter in diameter. It is a parasitic plant with no stems, leaves, or roots of its own, instead stealing nutrients from tropical vines. The flower smells like rotting flesh to attract pollinating flies, earning it the nickname 'corpse flower.' It takes 9 months to develop and lasts only about 5 days, making it nature's most dramatic and disgusting one-hit wonder.",
    search_terms:
      "rafflesia|corpse flower|largest flower|parasitic plant|stinking flower|borneo|sumatra",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Flower diameter", value: 1, si_unit: "m", note: "Up to 1.07 m recorded" },
      { dimension: "mass", label: "Flower mass", value: 11, si_unit: "kg", note: "Up to 11 kg" },
      { dimension: "length", label: "Petal thickness", value: 0.02, si_unit: "m" },
      { dimension: "time", label: "Development time", value: 23328000, si_unit: "s", note: "About 9 months from bud to bloom" },
      { dimension: "time", label: "Bloom duration", value: 432000, si_unit: "s", note: "About 5 days" },
    ],
  },

  {
    slug: "giant-bamboo",
    name: "Giant Bamboo",
    subtitle: "The fastest-growing plant on Earth, and technically a grass",
    category_id: "plants",
    description:
      "Giant bamboo (Dendrocalamus giganteus) is the largest species of bamboo and one of the fastest-growing plants on Earth. It can grow up to 1 meter per day under ideal conditions, which means you could theoretically watch it grow if you were patient enough. Despite being classified as a grass, mature culms can reach 30 meters tall and be strong enough to use as building scaffolding. It grows in dense clumps that can weigh several tonnes.",
    search_terms:
      "bamboo|giant bamboo|fastest growing|grass|dendrocalamus|building material",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum height", value: 30, si_unit: "m" },
      { dimension: "speed", label: "Growth rate", value: 0.00028, si_unit: "m/s", note: "About 1 meter per day" },
      { dimension: "mass", label: "Clump mass", value: 5000, si_unit: "kg", note: "Large mature clump" },
      { dimension: "length", label: "Culm diameter", value: 0.3, si_unit: "m", note: "Up to 30 cm" },
      { dimension: "length", label: "Internode length", value: 0.5, si_unit: "m" },
    ],
  },

  {
    slug: "sunflower",
    name: "Sunflower",
    subtitle: "The cheerful giant that tracks the sun across the sky",
    category_id: "plants",
    description:
      "Sunflowers (Helianthus annuus) are one of the most recognizable plants on Earth. Young sunflowers exhibit heliotropism, tracking the sun from east to west during the day, then resetting overnight. A mature sunflower head contains up to 2,000 individual florets arranged in a precise Fibonacci spiral, because even plants are better at math than most humans. The tallest sunflower ever grown reached 9.17 meters in Germany.",
    search_terms:
      "sunflower|helianthus|heliotropism|fibonacci|seeds|garden flower|yellow flower",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical height", value: 3, si_unit: "m" },
      { dimension: "length", label: "Head diameter", value: 0.3, si_unit: "m", note: "Up to 30 cm across" },
      { dimension: "mass", label: "Plant mass", value: 0.5, si_unit: "kg", note: "Mature plant" },
      { dimension: "length", label: "Stem diameter", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Tallest ever recorded", value: 9.17, si_unit: "m", note: "Grown in Germany, 2014" },
    ],
  },

  {
    slug: "saguaro-cactus",
    name: "Saguaro Cactus",
    subtitle: "The iconic sentinel of the American Southwest",
    category_id: "plants",
    description:
      "The saguaro (Carnegiea gigantea) is the largest cactus in the United States and the defining symbol of the Sonoran Desert. They grow incredibly slowly, not producing their first arm until around age 75. A fully hydrated saguaro can hold over 3,000 kg of water, which is the desert equivalent of a camel crossed with a water tower. They can live over 200 years and provide homes for woodpeckers, owls, and various other creatures who appreciate rent-free housing.",
    search_terms:
      "saguaro|cactus|desert|sonoran|arizona|southwest|giant cactus",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Maximum height", value: 12, si_unit: "m", note: "Up to 40 feet" },
      { dimension: "mass", label: "Dry mass", value: 3200, si_unit: "kg" },
      { dimension: "time", label: "Maximum lifespan", value: 6.3e9, si_unit: "s", note: "About 200 years" },
      { dimension: "mass", label: "Water mass when full", value: 3000, si_unit: "kg", note: "After heavy rain" },
      { dimension: "length", label: "Root spread diameter", value: 30, si_unit: "m", note: "Shallow but wide root system" },
      { dimension: "length", label: "Trunk diameter", value: 0.75, si_unit: "m" },
    ],
  },

  {
    slug: "bristlecone-pine",
    name: "Great Basin Bristlecone Pine",
    subtitle: "The oldest living non-clonal organisms on Earth",
    category_id: "plants",
    description:
      "Great Basin bristlecone pines (Pinus longaeva) are the oldest known non-clonal organisms on Earth. The oldest confirmed individual, named Methuselah, is over 4,850 years old, meaning it was already ancient when the Egyptian pyramids were being built. They grow at high altitudes in harsh, windswept environments, and their twisted, gnarled forms look like nature's attempt at abstract sculpture. Their exact locations are kept secret to prevent vandalism.",
    search_terms:
      "bristlecone pine|oldest tree|methuselah|ancient tree|pinus longaeva|great basin",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Typical height", value: 15, si_unit: "m" },
      { dimension: "time", label: "Maximum age", value: 1.58e11, si_unit: "s", note: "About 5,000 years" },
      { dimension: "length", label: "Trunk diameter", value: 3, si_unit: "m", note: "At base of oldest specimens" },
      { dimension: "length", label: "Needle length", value: 0.03, si_unit: "m", note: "Short, tightly packed needles" },
      { dimension: "time", label: "Needle lifespan", value: 1.26e9, si_unit: "s", note: "Needles persist up to 40 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MICROSCOPIC LIFE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "human-sperm-cell",
    name: "Human Sperm Cell",
    subtitle: "The smallest human cell with the biggest ambition",
    category_id: "microscopic",
    description:
      "The human sperm cell is one of the smallest cells in the body yet one of the most determined. At about 50 micrometers long (mostly tail), it must navigate a distance equivalent to a human swimming from Los Angeles to Hawaii, relative to its size. Each one carries half the genetic blueprint for a new human, and yet approximately 250 million of them will fail on every attempt. Natural selection starts early.",
    search_terms:
      "sperm|sperm cell|human cell|reproduction|gamete|spermatozoon|microscopic cell",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 0.00005, si_unit: "m", note: "About 50 micrometers" },
      { dimension: "speed", label: "Swimming speed", value: 0.00003, si_unit: "m/s", note: "About 3 mm per minute" },
      { dimension: "mass", label: "Mass", value: 3e-14, si_unit: "kg", note: "About 30 picograms" },
      { dimension: "length", label: "Head length", value: 0.000005, si_unit: "m", note: "About 5 micrometers" },
      { dimension: "length", label: "Tail length", value: 0.000045, si_unit: "m", note: "About 45 micrometers" },
    ],
  },

  {
    slug: "bacteriophage-t4",
    name: "Bacteriophage T4",
    subtitle: "A virus that looks like a lunar lander and hunts bacteria",
    category_id: "microscopic",
    description:
      "Bacteriophage T4 is one of the most studied viruses in molecular biology. It infects E. coli bacteria by landing on them with its spider-like tail fibers, injecting its DNA like a molecular syringe, then hijacking the bacterium's machinery to produce about 200 copies of itself before exploding the host cell open. It looks like a tiny lunar lander designed by H.R. Giger, and it kills more organisms per day than any predator on Earth.",
    search_terms:
      "bacteriophage|t4|phage|virus|bacteria killer|molecular biology|e coli",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 2e-7, si_unit: "m", note: "About 200 nanometers" },
      { dimension: "mass", label: "Mass", value: 2e-19, si_unit: "kg", note: "About 200 attograms" },
      { dimension: "length", label: "Head diameter", value: 1.2e-7, si_unit: "m", note: "Icosahedral head, 120 nm" },
      { dimension: "length", label: "Tail length", value: 1e-7, si_unit: "m", note: "About 100 nm" },
      { dimension: "length", label: "Tail fiber span", value: 1.4e-7, si_unit: "m", note: "Six long tail fibers" },
    ],
  },

  {
    slug: "water-bear-larva",
    name: "Tardigrade Larva (Water Bear)",
    subtitle: "The baby version of Earth's most indestructible animal",
    category_id: "microscopic",
    description:
      "Tardigrade larvae are even tinier than their famously tough adult forms. Born with the same eight legs and chubby body plan, they immediately possess the survival abilities that make tardigrades legendary: they can survive extreme temperatures, radiation, the vacuum of space, and pressures that would crush a submarine. A tardigrade larva is essentially a microscopic tank wrapped in a cute bear suit.",
    search_terms:
      "tardigrade|water bear|tardigrade larva|moss piglet|extremophile|indestructible",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.00015, si_unit: "m", note: "About 150 micrometers" },
      { dimension: "mass", label: "Mass", value: 5e-10, si_unit: "kg", note: "About 0.5 micrograms" },
      { dimension: "length", label: "Leg length", value: 0.00003, si_unit: "m", note: "Tiny but functional" },
      { dimension: "length", label: "Claw length", value: 0.000005, si_unit: "m", note: "5 micrometers" },
      { dimension: "length", label: "Body width", value: 0.0001, si_unit: "m" },
    ],
  },

  {
    slug: "paramecium",
    name: "Paramecium",
    subtitle: "The slipper-shaped sprinter of the microscopic world",
    category_id: "microscopic",
    description:
      "Paramecium is a single-celled organism found in freshwater environments around the world. Shaped like a slipper and covered in thousands of hair-like cilia, it moves with a graceful spinning motion that would be beautiful if you could see it without a microscope. Paramecia are voracious predators of bacteria and algae, sweeping food into their oral groove like a microscopic vacuum cleaner. They can also learn from experience, despite having no brain whatsoever.",
    search_terms:
      "paramecium|ciliate|protozoan|single cell|microscopic|freshwater|protist",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.0003, si_unit: "m", note: "About 300 micrometers" },
      { dimension: "mass", label: "Mass", value: 1e-9, si_unit: "kg", note: "About 1 microgram" },
      { dimension: "speed", label: "Swimming speed", value: 0.001, si_unit: "m/s", note: "About 1 mm per second" },
      { dimension: "length", label: "Body width", value: 0.00005, si_unit: "m", note: "About 50 micrometers" },
      { dimension: "length", label: "Cilia length", value: 0.00001, si_unit: "m", note: "About 10 micrometers each" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRIDGES & TUNNELS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "akashi-kaikyo-bridge",
    name: "Akashi Kaikyo Bridge",
    subtitle: "The world's longest suspension bridge, spanning Japan's Inland Sea",
    category_id: "bridges",
    description:
      "The Akashi Kaikyo Bridge connects Kobe and Awaji Island across the treacherous Akashi Strait in Japan. Completed in 1998, it holds the record for the longest central span of any suspension bridge at 1,991 meters. It was designed to withstand earthquakes up to magnitude 8.5, typhoon winds of 290 km/h, and harsh tidal currents. During construction, the 1995 Kobe earthquake actually stretched the bridge by about 1 meter, and the engineers just shrugged and adjusted the plans.",
    search_terms:
      "akashi kaikyo|pearl bridge|longest bridge|suspension bridge|japan|kobe|awaji",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 3911, si_unit: "m" },
      { dimension: "length", label: "Main span", value: 1991, si_unit: "m", note: "Longest suspension bridge span" },
      { dimension: "length", label: "Tower height", value: 298, si_unit: "m", note: "Above sea level" },
      { dimension: "mass", label: "Total mass", value: 200000000, si_unit: "kg", note: "Estimated 200,000 tonnes" },
      { dimension: "length", label: "Cable diameter", value: 1.12, si_unit: "m", note: "Main cables" },
      { dimension: "length", label: "Total cable wire length", value: 300000000, si_unit: "m", note: "If unwound, enough to circle Earth 7.5 times" },
    ],
  },

  {
    slug: "sydney-harbour-bridge",
    name: "Sydney Harbour Bridge",
    subtitle: "The 'Coathanger' that became Australia's most iconic bridge",
    category_id: "bridges",
    description:
      "The Sydney Harbour Bridge opened in 1932 and is one of the most recognizable bridges in the world. Nicknamed 'The Coathanger' for its arch shape, it carries eight lanes of traffic, two railway lines, a cycleway, and a footpath across Sydney Harbour. It is the world's largest steel arch bridge by width and the sixth-longest spanning arch bridge. Tourists can climb to the top of the arch for spectacular views and spectacular vertigo.",
    search_terms:
      "sydney harbour bridge|coathanger|australia|arch bridge|sydney|nsw",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1149, si_unit: "m" },
      { dimension: "length", label: "Arch height", value: 134, si_unit: "m", note: "Above mean sea level" },
      { dimension: "mass", label: "Total steel mass", value: 52800000, si_unit: "kg", note: "52,800 tonnes of steel" },
      { dimension: "length", label: "Width", value: 49, si_unit: "m", note: "One of the widest bridges in the world" },
      { dimension: "length", label: "Arch span", value: 503, si_unit: "m" },
    ],
  },

  {
    slug: "pont-du-gard",
    name: "Pont du Gard",
    subtitle: "A 2,000-year-old Roman aqueduct that still stands tall",
    category_id: "bridges",
    description:
      "The Pont du Gard is an ancient Roman aqueduct bridge that crosses the Gardon River in southern France. Built in the first century AD without any mortar, its massive limestone blocks are held together purely by friction and precise cutting. It carried water 50 km from a spring to the city of Nimes, dropping only 17 meters over the entire distance, a gradient so gentle it would make a civil engineer weep with admiration. It is the highest of all Roman aqueduct bridges and one of the best-preserved.",
    search_terms:
      "pont du gard|roman aqueduct|france|ancient rome|aqueduct bridge|nimes|gard",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 49, si_unit: "m", note: "Highest Roman aqueduct bridge" },
      { dimension: "length", label: "Length", value: 275, si_unit: "m" },
      { dimension: "time", label: "Age", value: 6.3e10, si_unit: "s", note: "About 2,000 years old" },
      { dimension: "length", label: "Top tier length", value: 275, si_unit: "m", note: "Water channel level" },
      { dimension: "length", label: "Bottom tier arch span", value: 24.5, si_unit: "m", note: "Largest arch" },
      { dimension: "length", label: "Total aqueduct length", value: 50000, si_unit: "m", note: "Full 50 km system to Nimes" },
    ],
  },
];
