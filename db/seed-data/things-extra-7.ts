// ── Extra things seed data (batch 7) ──────────────────────────────────────
// Pop Culture, History, World Landmarks, Transportation, Oceans & Seas,
// Deserts, Forests, Rivers, Islands, Cities & Urban, plus more Sports & Nature

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [
  {
    id: "pop-culture",
    name: "Pop Culture",
    description:
      "Iconic objects, vehicles, and characters from movies, TV, comics, and literature, measured according to their canonical or on-screen dimensions.",
    sort_order: 48,
  },
  {
    id: "history",
    name: "Historical",
    description:
      "Artifacts, weapons, machines, and monuments from human history that shaped civilizations, from ancient swords to revolutionary inventions.",
    sort_order: 49,
  },
  {
    id: "world-landmarks",
    name: "World Landmarks",
    description:
      "Temples, palaces, castles, and sacred sites from every inhabited continent, each a testament to human ambition and artistry.",
    sort_order: 50,
  },
  {
    id: "transportation",
    name: "Transportation",
    description:
      "Human-powered, wind-driven, and mechanized ways of getting around, from bicycles to zeppelins and everything in between.",
    sort_order: 51,
  },
  {
    id: "ocean",
    name: "Oceans & Seas",
    description:
      "The vast bodies of saltwater that cover over 70% of Earth's surface, shaping climate, culture, and the course of history.",
    sort_order: 52,
  },
  {
    id: "deserts",
    name: "Deserts",
    description:
      "The driest landscapes on Earth, from scorching sand seas to frozen polar expanses, where life persists against extraordinary odds.",
    sort_order: 53,
  },
  {
    id: "forests",
    name: "Forests",
    description:
      "Woodlands and rainforests that serve as the planet's lungs, from ancient European groves to vast boreal expanses.",
    sort_order: 54,
  },
  {
    id: "rivers",
    name: "Rivers",
    description:
      "The arteries of continents, carving valleys, sustaining civilizations, and draining vast watersheds on their journeys to the sea.",
    sort_order: 55,
  },
  {
    id: "islands",
    name: "Islands",
    description:
      "Land masses surrounded by water, from the world's largest near-continent to tiny volcanic outposts teeming with unique life.",
    sort_order: 56,
  },
  {
    id: "cities",
    name: "Cities & Urban",
    description:
      "Metropolitan areas where millions live, work, and shape the modern world, measured by the footprints they stamp on the planet.",
    sort_order: 57,
  },
  {
    id: "nature",
    name: "Nature & Natural Wonders",
    description:
      "Reefs, glaciers, waterfalls, and other natural phenomena that showcase the planet's raw power and beauty.",
    sort_order: 58,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // POP CULTURE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "lightsaber-blade",
    name: "Lightsaber Blade",
    subtitle: "The elegant weapon of a Jedi Knight",
    category_id: "pop-culture",
    description:
      "The lightsaber is the signature weapon of the Star Wars universe, a plasma blade powered by a kyber crystal and projected from a metal hilt. According to canon, standard blade length is roughly 0.91 to 1.37 meters. The hilt itself is about 25-30 cm long, and the whole assembly weighs very little since the blade is made of contained plasma. Real-world prop sabers weigh about 0.45 kg for the hilt alone.",
    search_terms:
      "lightsaber|star wars|jedi|sith|kyber crystal|laser sword",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Blade length", value: 1.3, si_unit: "m", note: "Standard Jedi lightsaber blade" },
      { dimension: "length", label: "Hilt length", value: 0.28, si_unit: "m", note: "Typical single-handed hilt" },
      { dimension: "length", label: "Total length", value: 1.58, si_unit: "m", note: "Hilt plus blade" },
      { dimension: "length", label: "Blade diameter", value: 0.03, si_unit: "m", note: "Approximate blade thickness" },
      { dimension: "mass", label: "Hilt mass (prop)", value: 0.45, si_unit: "kg", note: "Real-world prop replica weight" },
      { dimension: "temperature", label: "Blade temperature (lore)", value: 25000, si_unit: "K", note: "Estimated plasma temperature in-universe" },
    ],
  },

  {
    slug: "tardis-exterior",
    name: "TARDIS (Exterior)",
    subtitle: "The Doctor's time-and-space machine disguised as a police box",
    category_id: "pop-culture",
    description:
      "The TARDIS (Time And Relative Dimension In Space) from Doctor Who is famously bigger on the inside. Its exterior, stuck in the form of a 1960s British police telephone box due to a broken chameleon circuit, is a modest blue wooden cabinet. The real Metropolitan Police boxes measured about 2.7 m tall, 1.37 m wide, and 1.37 m deep. The TARDIS weighs approximately 1,000 kg in its external form, though it contains infinite dimensions within.",
    search_terms:
      "tardis|doctor who|police box|time machine|bigger on the inside|bbc",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 2.7, si_unit: "m", note: "Based on real Metropolitan Police box" },
      { dimension: "length", label: "Width", value: 1.37, si_unit: "m", note: "Square footprint" },
      { dimension: "length", label: "Depth", value: 1.37, si_unit: "m", note: "Square footprint" },
      { dimension: "area", label: "Floor area (exterior)", value: 1.88, si_unit: "m2", note: "Exterior footprint only" },
      { dimension: "mass", label: "Exterior mass", value: 1000, si_unit: "kg", note: "Approximate for the external shell" },
      { dimension: "volume", label: "Exterior volume", value: 5.07, si_unit: "m3", note: "Interior volume is, of course, infinite" },
    ],
  },

  {
    slug: "hogwarts-express",
    name: "Hogwarts Express",
    subtitle: "The scarlet steam engine running Platform 9 3/4 to Hogsmeade",
    category_id: "pop-culture",
    description:
      "The Hogwarts Express is the magical train that transports students from Platform 9 3/4 at King's Cross Station to Hogwarts School. In the films, it was portrayed by GWR Hall Class locomotive 5972 'Olton Hall', a real 4-6-0 steam engine built in 1937. The locomotive is about 19 m long and weighs roughly 75 tonnes. With its tender and typical rake of eight coaches, the full consist stretches about 200 meters.",
    search_terms:
      "hogwarts express|harry potter|platform 9 3/4|olton hall|hogwarts train|king's cross",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Locomotive length", value: 19.0, si_unit: "m", note: "GWR Hall Class 5972 Olton Hall" },
      { dimension: "length", label: "Full train length", value: 200, si_unit: "m", note: "Locomotive, tender, and eight coaches" },
      { dimension: "mass", label: "Locomotive mass", value: 75000, si_unit: "kg", note: "Engine only without tender" },
      { dimension: "length", label: "Driving wheel diameter", value: 1.83, si_unit: "m", note: "6-foot driving wheels" },
      { dimension: "length", label: "Track gauge", value: 1.435, si_unit: "m", note: "Standard gauge" },
      { dimension: "mass", label: "Full train mass", value: 400000, si_unit: "kg", note: "Estimated loaded consist" },
    ],
  },

  {
    slug: "batmobile-1989",
    name: "Batmobile (1989 Film)",
    subtitle: "The jet-turbine-powered ride from Tim Burton's Batman",
    category_id: "pop-culture",
    description:
      "The 1989 Batmobile, designed by Anton Furst for Tim Burton's Batman, is one of the most iconic movie vehicles ever built. It was constructed on a Chevrolet Impala chassis and powered by a jet turbine engine. The car measured about 6.1 m long and 2.4 m wide, with a distinctive elongated nose and massive rear fins. Two road-worthy versions were built for the film, each weighing around 1,500 kg.",
    search_terms:
      "batmobile|batman 1989|tim burton|anton furst|gotham|bat car|dark knight",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 6.1, si_unit: "m", note: "Nose to tail" },
      { dimension: "length", label: "Width", value: 2.4, si_unit: "m", note: "At widest point including fins" },
      { dimension: "length", label: "Height", value: 1.3, si_unit: "m", note: "Low-slung cockpit profile" },
      { dimension: "mass", label: "Curb weight", value: 1500, si_unit: "kg", note: "Road-worthy film version" },
      { dimension: "length", label: "Wheelbase", value: 3.7, si_unit: "m", note: "Modified Impala chassis" },
      { dimension: "length", label: "Wheel diameter", value: 0.58, si_unit: "m", note: "Custom 15-inch wheels with covers" },
    ],
  },

  {
    slug: "iron-man-suit",
    name: "Iron Man Suit (Mark III)",
    subtitle: "Tony Stark's gold-titanium alloy armor from the MCU",
    category_id: "pop-culture",
    description:
      "The Mark III Iron Man suit from the Marvel Cinematic Universe is the first fully realized red-and-gold armor. According to MCU supplementary materials and visual estimates, the suit adds roughly 10-15 cm of height to its wearer, bringing Tony Stark to about 1.93 m tall in the armor. The suit's stated mass is around 25 kg for the gold-titanium alloy shell, though with all systems the functional weight would be considerably higher.",
    search_terms:
      "iron man|mark iii|tony stark|mcu|marvel|armor|avengers",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (suited)", value: 1.93, si_unit: "m", note: "Tony Stark (1.78 m) plus armor" },
      { dimension: "length", label: "Shoulder width", value: 0.61, si_unit: "m", note: "Broadened by pauldrons" },
      { dimension: "mass", label: "Suit mass", value: 25, si_unit: "kg", note: "Gold-titanium alloy shell stated weight" },
      { dimension: "length", label: "Armor thickness", value: 0.02, si_unit: "m", note: "Approximate plating thickness" },
      { dimension: "length", label: "Boot height", value: 0.4, si_unit: "m", note: "Thruster-equipped boots" },
      { dimension: "length", label: "Repulsor palm diameter", value: 0.06, si_unit: "m", note: "Palm-mounted repulsor disc" },
    ],
  },

  {
    slug: "captain-americas-shield",
    name: "Captain America's Shield",
    subtitle: "The vibranium disc that always comes back",
    category_id: "pop-culture",
    description:
      "Captain America's shield is a concave disc forged from vibranium, a fictional metal that absorbs kinetic energy. According to Marvel specs and the MCU films, the shield is 0.76 m (30 inches) in diameter and about 3.8 cm thick at the center. In the comics, it weighs about 5.4 kg. The shield is virtually indestructible under normal circumstances and can be thrown with precise ricocheting trajectories, presumably because Steve Rogers took a lot of geometry classes.",
    search_terms:
      "captain america|shield|vibranium|avengers|steve rogers|marvel|mcu",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.76, si_unit: "m", note: "30 inches across" },
      { dimension: "length", label: "Center thickness", value: 0.038, si_unit: "m", note: "Thickest at the center boss" },
      { dimension: "length", label: "Edge thickness", value: 0.013, si_unit: "m", note: "Tapered vibranium edge" },
      { dimension: "mass", label: "Mass", value: 5.4, si_unit: "kg", note: "Per Marvel comics specifications" },
      { dimension: "area", label: "Face area", value: 0.454, si_unit: "m2", note: "Circular face area" },
      { dimension: "length", label: "Concavity depth", value: 0.075, si_unit: "m", note: "Depth of the concave dish shape" },
    ],
  },

  {
    slug: "uss-enterprise-ncc-1701",
    name: "USS Enterprise NCC-1701",
    subtitle: "The Constitution-class flagship of the United Federation of Planets",
    category_id: "pop-culture",
    description:
      "The USS Enterprise NCC-1701 from Star Trek: The Original Series is one of the most recognizable spacecraft in fiction. According to official Star Trek technical manuals, the ship is 289 m long, 127 m wide across the saucer section, and has a mass of approximately 1 million metric tons. The ship carries a crew of 430 and can achieve speeds faster than light via its warp drive. Its design, with a saucer section connected to twin nacelles by a secondary hull, became the template for starship design in popular culture.",
    search_terms:
      "enterprise|star trek|ncc-1701|constitution class|kirk|starship|federation",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 289, si_unit: "m", note: "Bow to aft of nacelles" },
      { dimension: "length", label: "Saucer diameter", value: 127, si_unit: "m", note: "Primary hull width" },
      { dimension: "length", label: "Height", value: 73, si_unit: "m", note: "Keel to top of bridge" },
      { dimension: "mass", label: "Mass", value: 1e9, si_unit: "kg", note: "Approximately 1 million metric tons" },
      { dimension: "length", label: "Nacelle length", value: 154, si_unit: "m", note: "Each warp nacelle" },
      { dimension: "length", label: "Bridge diameter", value: 18, si_unit: "m", note: "Main bridge module atop saucer" },
    ],
  },

  {
    slug: "jurassic-park-t-rex-paddock",
    name: "Jurassic Park T-Rex Paddock",
    subtitle: "The enclosure that famously failed to contain its occupant",
    category_id: "pop-culture",
    description:
      "The Tyrannosaurus Rex paddock in Jurassic Park (1993) was one of the most heavily fortified enclosures on Isla Nublar. Based on film analysis and production documents, the paddock featured electrified fences approximately 7.3 m (24 feet) tall, with 10,000 volts running through the cables. The paddock itself covered roughly 5 hectares of forested terrain. The fence spacing was designed to hold an animal that stood 6 m tall at the hip, though the film memorably demonstrated that electric fences are only useful when the electricity is on.",
    search_terms:
      "jurassic park|t-rex paddock|dinosaur enclosure|isla nublar|spielberg|tyrannosaurus fence",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fence height", value: 7.3, si_unit: "m", note: "24-foot electrified perimeter" },
      { dimension: "area", label: "Paddock area", value: 50000, si_unit: "m2", note: "Approximately 5 hectares" },
      { dimension: "length", label: "Fence post spacing", value: 4.6, si_unit: "m", note: "Estimated from film footage" },
      { dimension: "length", label: "Moat depth", value: 9.1, si_unit: "m", note: "Concrete moat on one side" },
      { dimension: "length", label: "Perimeter", value: 900, si_unit: "m", note: "Estimated total fence line" },
      { dimension: "length", label: "Cable diameter", value: 0.025, si_unit: "m", note: "Heavy-gauge electrified cables" },
    ],
  },

  {
    slug: "excalibur-sword",
    name: "Excalibur",
    subtitle: "The legendary sword of King Arthur",
    category_id: "pop-culture",
    description:
      "Excalibur is the mythical sword of King Arthur in Arthurian legend. While its dimensions are never precisely stated in medieval texts, historical medieval longswords of the type Excalibur is usually depicted as measure roughly 1.1 m in total length with a blade of about 0.9 m. A high-quality medieval arming sword or longsword typically weighed between 1.1 and 1.8 kg. Excalibur is usually portrayed as a finely crafted hand-and-a-half sword with a cruciform hilt and a jeweled pommel.",
    search_terms:
      "excalibur|king arthur|sword in the stone|camelot|arthurian|legendary sword|lady of the lake",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1.1, si_unit: "m", note: "Based on historical longsword proportions" },
      { dimension: "length", label: "Blade length", value: 0.9, si_unit: "m", note: "Double-edged blade" },
      { dimension: "length", label: "Grip length", value: 0.2, si_unit: "m", note: "Hand-and-a-half hilt" },
      { dimension: "length", label: "Blade width", value: 0.05, si_unit: "m", note: "At the base near the crossguard" },
      { dimension: "mass", label: "Mass", value: 1.5, si_unit: "kg", note: "Typical for a quality medieval longsword" },
      { dimension: "length", label: "Crossguard width", value: 0.22, si_unit: "m", note: "Cruciform guard" },
    ],
  },

  {
    slug: "king-kong-2005",
    name: "King Kong (2005)",
    subtitle: "Peter Jackson's enormous silverback from Skull Island",
    category_id: "pop-culture",
    description:
      "In Peter Jackson's 2005 King Kong, the giant ape stands approximately 7.6 meters (25 feet) tall, making him considerably larger than any real gorilla but more grounded than some other cinematic Kongs. Weta Digital modeled Kong as a silverback gorilla scaled up, with an arm span of roughly 18 meters and an estimated mass of about 8,000 kg. Despite his size, Kong was animated with extraordinarily nuanced facial expressions captured from Andy Serkis's performance.",
    search_terms:
      "king kong|peter jackson|skull island|giant ape|2005|weta digital|ann darrow",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 7.6, si_unit: "m", note: "25 feet tall in bipedal stance" },
      { dimension: "length", label: "Arm span", value: 18, si_unit: "m", note: "Gorilla-proportioned arms" },
      { dimension: "mass", label: "Estimated mass", value: 8000, si_unit: "kg", note: "Based on scaled gorilla physiology" },
      { dimension: "length", label: "Chest width", value: 4.5, si_unit: "m", note: "Broad silverback torso" },
      { dimension: "length", label: "Hand length", value: 1.8, si_unit: "m", note: "Large enough to hold a human" },
      { dimension: "length", label: "Foot length", value: 2.1, si_unit: "m", note: "Scaled from gorilla proportions" },
    ],
  },

  {
    slug: "delorean-time-machine",
    name: "DeLorean Time Machine",
    subtitle: "The flux-capacitor-equipped DMC-12 from Back to the Future",
    category_id: "pop-culture",
    description:
      "The time-traveling DeLorean from Back to the Future is a modified 1981 DeLorean DMC-12 equipped with a flux capacitor and a Mr. Fusion home energy reactor. The base car is 4.27 m long, 1.86 m wide, and features distinctive gull-wing doors. With Doc Brown's modifications including the time circuits, flux capacitor, and nuclear/fusion reactor, the vehicle must reach exactly 88 miles per hour (141.6 km/h) to activate temporal displacement.",
    search_terms:
      "delorean|back to the future|flux capacitor|time machine|doc brown|marty mcfly|dmc-12|88 mph",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 4.27, si_unit: "m", note: "Standard DMC-12 body" },
      { dimension: "length", label: "Width", value: 1.86, si_unit: "m", note: "Including side panels" },
      { dimension: "length", label: "Height", value: 1.14, si_unit: "m", note: "Low stainless steel body" },
      { dimension: "mass", label: "Curb weight", value: 1233, si_unit: "kg", note: "Base DMC-12 weight" },
      { dimension: "length", label: "Door height (open)", value: 2.0, si_unit: "m", note: "Gull-wing doors fully raised" },
      { dimension: "speed", label: "Time travel activation speed", value: 39.3, si_unit: "m/s", note: "88 mph required for temporal displacement" },
    ],
  },

  {
    slug: "one-ring-dimensions",
    name: "The One Ring (Physical)",
    subtitle: "The actual prop ring used in Peter Jackson's films",
    category_id: "pop-culture",
    description:
      "While the One Ring from Tolkien's Lord of the Rings is a magical artifact of immense power, the physical prop used in Peter Jackson's films was a plain gold band. Multiple rings were made in various sizes for different shots, from finger-sized to much larger versions for close-ups. A standard-sized prop ring was approximately 2 cm in outer diameter, 1.8 cm inner diameter, 4 mm wide, and weighed about 10 grams. In the story, the ring weighs far more than it should for its size when it 'wants' to be found.",
    search_terms:
      "one ring|lord of the rings|tolkien|precious|sauron|prop ring|gold band|peter jackson",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Outer diameter", value: 0.02, si_unit: "m", note: "Standard-sized prop ring" },
      { dimension: "length", label: "Inner diameter", value: 0.018, si_unit: "m", note: "Finger opening" },
      { dimension: "length", label: "Band width", value: 0.004, si_unit: "m", note: "Width of the band" },
      { dimension: "length", label: "Band thickness", value: 0.002, si_unit: "m", note: "Wall thickness" },
      { dimension: "mass", label: "Prop mass", value: 0.01, si_unit: "kg", note: "18-karat gold prop weight" },
    ],
  },

  {
    slug: "vorpal-sword",
    name: "Vorpal Sword",
    subtitle: "The snicker-snack blade from Lewis Carroll's Jabberwocky",
    category_id: "pop-culture",
    description:
      "The Vorpal Sword appears in Lewis Carroll's 1871 poem 'Jabberwocky' (from Through the Looking-Glass) as the weapon used to slay the fearsome Jabberwock. Carroll never specified dimensions, but in Tim Burton's 2010 Alice in Wonderland, the Vorpal Sword was depicted as a longsword roughly 1.2 m long. In Dungeons & Dragons, where it became a legendary magic item, a vorpal sword is typically a longsword or greatsword. Based on typical fantasy longsword depictions, measurements follow a standard medieval longsword.",
    search_terms:
      "vorpal sword|jabberwocky|carroll|snicker-snack|alice in wonderland|d&d|dungeons dragons",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1.2, si_unit: "m", note: "Based on film depiction" },
      { dimension: "length", label: "Blade length", value: 0.95, si_unit: "m", note: "Long enough to behead a Jabberwock" },
      { dimension: "length", label: "Hilt length", value: 0.25, si_unit: "m", note: "Two-handed grip" },
      { dimension: "mass", label: "Mass", value: 1.6, si_unit: "kg", note: "Typical longsword weight" },
      { dimension: "length", label: "Blade width", value: 0.05, si_unit: "m", note: "At the crossguard" },
    ],
  },

  {
    slug: "golden-snitch",
    name: "Golden Snitch",
    subtitle: "The tiny winged ball worth 150 points in Quidditch",
    category_id: "pop-culture",
    description:
      "The Golden Snitch is the smallest ball used in the wizarding sport of Quidditch, described in J.K. Rowling's Harry Potter series. It is walnut-sized with a diameter of about 2.5 cm and features delicate silver wings that allow it to fly at extreme speeds. The Snitch has flesh memory and remembers the first person to touch it. In official Quidditch rules, catching the Snitch ends the game and awards 150 points to the catching team's side.",
    search_terms:
      "golden snitch|quidditch|harry potter|seeker|winged ball|hogwarts|rowling",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.025, si_unit: "m", note: "Walnut-sized sphere" },
      { dimension: "mass", label: "Mass", value: 0.028, si_unit: "kg", note: "About 1 ounce" },
      { dimension: "length", label: "Wingspan", value: 0.1, si_unit: "m", note: "Silver wings fully extended" },
      { dimension: "length", label: "Wing length", value: 0.05, si_unit: "m", note: "Each individual wing" },
      { dimension: "area", label: "Surface area", value: 0.00196, si_unit: "m2", note: "Spherical surface area" },
    ],
  },

  {
    slug: "ecto-1",
    name: "Ecto-1",
    subtitle: "The Ghostbusters' converted 1959 Cadillac ambulance",
    category_id: "pop-culture",
    description:
      "The Ecto-1 is the iconic vehicle from the 1984 film Ghostbusters, a modified 1959 Cadillac Miller-Meteor ambulance/hearse combination. The car is 6.07 m long and weighs approximately 2,400 kg before the addition of all the ghost-catching equipment mounted on its roof rack. With its distinctive siren and flashing lights, the Ecto-1 was purchased by Ray Stantz for $4,800 because it needed 'some suspension work, shocks, brakes, brake pads, lining, steering box, transmission, rear end... also new rings, mufflers, a little wiring.'",
    search_terms:
      "ecto-1|ghostbusters|cadillac|miller-meteor|ambulance|who you gonna call|proton pack car",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 6.07, si_unit: "m", note: "1959 Cadillac Miller-Meteor" },
      { dimension: "length", label: "Width", value: 2.02, si_unit: "m", note: "Cadillac professional chassis" },
      { dimension: "length", label: "Height", value: 1.73, si_unit: "m", note: "Before roof equipment" },
      { dimension: "mass", label: "Curb weight", value: 2400, si_unit: "kg", note: "Before ghost-catching gear" },
      { dimension: "length", label: "Wheelbase", value: 3.91, si_unit: "m", note: "Commercial chassis wheelbase" },
      { dimension: "length", label: "Roof rack height", value: 2.2, si_unit: "m", note: "With proton equipment on roof" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HISTORY
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "first-telephone",
    name: "Bell's First Telephone (1876)",
    subtitle: "Alexander Graham Bell's patent model that changed communication",
    category_id: "history",
    description:
      "Alexander Graham Bell's first practical telephone, demonstrated in 1876, was a simple device with a diaphragm, an electromagnet, and a liquid transmitter. The device that made the famous first call ('Mr. Watson, come here, I want to see you') was roughly the size of a small box, about 23 cm tall and 15 cm wide. The original patent model is held at the Smithsonian National Museum of American History.",
    search_terms:
      "telephone|bell|1876|invention|mr watson|communication|patent|smithsonian",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.23, si_unit: "m", note: "Patent model telephone" },
      { dimension: "length", label: "Width", value: 0.15, si_unit: "m", note: "Box-style housing" },
      { dimension: "length", label: "Depth", value: 0.12, si_unit: "m", note: "Including mounting board" },
      { dimension: "mass", label: "Mass", value: 0.9, si_unit: "kg", note: "Approximate weight of early model" },
      { dimension: "length", label: "Diaphragm diameter", value: 0.07, si_unit: "m", note: "Vibrating membrane" },
      { dimension: "length", label: "Wire length (demo)", value: 12, si_unit: "m", note: "Between rooms in the demonstration" },
    ],
  },

  {
    slug: "transatlantic-telegraph-cable",
    name: "Transatlantic Telegraph Cable (1858)",
    subtitle: "The first cable to electrically connect Europe and North America",
    category_id: "history",
    description:
      "The first successful transatlantic telegraph cable was laid in 1858, connecting Valentia Island, Ireland to Heart's Content, Newfoundland. The cable stretched approximately 3,200 km across the Atlantic Ocean floor. It consisted of seven copper wires insulated with gutta-percha, wrapped in tarred hemp and armored with iron wire. The cable was about 1.6 cm in diameter. It functioned for only three weeks before failing, but proved the concept was viable. A permanent cable was completed in 1866.",
    search_terms:
      "transatlantic cable|telegraph|1858|undersea cable|cyrus field|atlantic ocean|communication",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total cable length", value: 3200000, si_unit: "m", note: "Ireland to Newfoundland" },
      { dimension: "length", label: "Cable diameter", value: 0.016, si_unit: "m", note: "Including armor winding" },
      { dimension: "mass", label: "Total cable mass", value: 2500000, si_unit: "kg", note: "Approximately 2,500 tonnes" },
      { dimension: "length", label: "Copper core diameter", value: 0.0016, si_unit: "m", note: "Seven-strand copper conductor" },
      { dimension: "length", label: "Maximum ocean depth crossed", value: 4600, si_unit: "m", note: "Deepest point along the route" },
      { dimension: "mass", label: "Mass per meter", value: 0.78, si_unit: "kg", note: "Linear density of cable" },
    ],
  },

  {
    slug: "gutenberg-press",
    name: "Gutenberg Printing Press",
    subtitle: "The movable-type press that launched the information age",
    category_id: "history",
    description:
      "Johannes Gutenberg's printing press, developed around 1440 in Mainz, Germany, was adapted from existing screw presses used for wine and olive oil. The press stood about 2.1 m tall and 1.5 m wide, with a flat stone or metal platen pressed against inked movable metal type. A skilled operator could produce about 240 impressions per hour. The invention of movable-type printing in Europe (independently developed earlier in East Asia) revolutionized the spread of knowledge and is often cited as one of the most important inventions in human history.",
    search_terms:
      "gutenberg|printing press|movable type|1440|mainz|bible|invention|printing revolution",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 2.1, si_unit: "m", note: "Full press assembly" },
      { dimension: "length", label: "Width", value: 1.5, si_unit: "m", note: "Frame width" },
      { dimension: "length", label: "Depth", value: 0.9, si_unit: "m", note: "Bed depth" },
      { dimension: "mass", label: "Mass", value: 300, si_unit: "kg", note: "Wooden frame with metal fittings" },
      { dimension: "area", label: "Platen area", value: 0.15, si_unit: "m2", note: "Printing surface per impression" },
      { dimension: "length", label: "Screw length", value: 0.6, si_unit: "m", note: "Main pressure screw" },
    ],
  },

  {
    slug: "magna-carta",
    name: "Magna Carta",
    subtitle: "The 1215 charter that laid foundations for constitutional law",
    category_id: "history",
    description:
      "The Magna Carta (Great Charter) was sealed at Runnymede, England, on June 15, 1215. The original document is written in Latin on a single sheet of parchment made from sheepskin. Only four copies of the 1215 original survive today, held at the British Library (two copies), Lincoln Cathedral, and Salisbury Cathedral. The parchment measures roughly 53 cm by 68 cm, with the text written in abbreviated medieval Latin. The Great Seal of King John was attached at the bottom by a wax impression.",
    search_terms:
      "magna carta|1215|king john|runnymede|charter|english law|constitutional|parchment",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.53, si_unit: "m", note: "Parchment sheet height" },
      { dimension: "length", label: "Width", value: 0.68, si_unit: "m", note: "Parchment sheet width" },
      { dimension: "area", label: "Document area", value: 0.36, si_unit: "m2", note: "Single sheet of sheepskin" },
      { dimension: "length", label: "Parchment thickness", value: 0.0003, si_unit: "m", note: "Thin sheepskin vellum" },
      { dimension: "mass", label: "Document mass", value: 0.08, si_unit: "kg", note: "Parchment alone without seal" },
      { dimension: "length", label: "Seal diameter", value: 0.1, si_unit: "m", note: "Great Seal of King John" },
    ],
  },

  {
    slug: "cleopatras-needle-london",
    name: "Cleopatra's Needle (London)",
    subtitle: "A 3,500-year-old Egyptian obelisk on the Thames Embankment",
    category_id: "history",
    description:
      "Cleopatra's Needle on London's Victoria Embankment is an ancient Egyptian obelisk made of red granite, originally erected in Heliopolis around 1450 BC during the reign of Thutmose III. It has no actual connection to Cleopatra; the name is a misnomer. The obelisk stands 20.9 m tall and weighs about 187 tonnes. It was transported to London in 1877 inside a specially built cylindrical iron vessel. A time capsule beneath it contains newspapers, coins, a razor, cigars, photographs of the 12 best-looking Englishwomen, and other Victorian curiosities.",
    search_terms:
      "cleopatra's needle|obelisk|london|egyptian|thutmose|victoria embankment|granite|thames",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 20.9, si_unit: "m", note: "Shaft including pyramidion" },
      { dimension: "length", label: "Base width", value: 2.44, si_unit: "m", note: "Square base side" },
      { dimension: "mass", label: "Mass", value: 187000, si_unit: "kg", note: "Red granite obelisk" },
      { dimension: "length", label: "Pyramidion height", value: 1.8, si_unit: "m", note: "Pointed capstone at top" },
      { dimension: "area", label: "Base area", value: 5.95, si_unit: "m2", note: "Square footprint" },
      { dimension: "length", label: "Inscription depth", value: 0.015, si_unit: "m", note: "Carved hieroglyphic depth" },
    ],
  },

  {
    slug: "samurai-katana",
    name: "Samurai Katana",
    subtitle: "The curved single-edged blade of feudal Japanese warriors",
    category_id: "history",
    description:
      "The katana is the iconic curved sword of the Japanese samurai, developed during the Muromachi period (1336-1573). A standard katana has a blade length (nagasa) of about 60-80 cm, with an overall length including the handle (tsuka) of roughly 100-110 cm. The blade has a distinctive curve (sori) of 1-2 cm and is forged from tamahagane steel through a complex folding process that can involve thousands of layers. A quality katana weighs about 1.1 kg and is designed primarily as a cutting weapon.",
    search_terms:
      "katana|samurai|japanese sword|bushido|tamahagane|muromachi|seppuku|nihonto",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 1.05, si_unit: "m", note: "Including tsuka (handle)" },
      { dimension: "length", label: "Blade length (nagasa)", value: 0.71, si_unit: "m", note: "Standard katana blade" },
      { dimension: "length", label: "Handle length (tsuka)", value: 0.28, si_unit: "m", note: "Two-handed grip" },
      { dimension: "length", label: "Blade curvature (sori)", value: 0.018, si_unit: "m", note: "Depth of curve" },
      { dimension: "mass", label: "Mass", value: 1.1, si_unit: "kg", note: "Complete sword with fittings" },
      { dimension: "length", label: "Blade width (motohaba)", value: 0.032, si_unit: "m", note: "At the base of the blade" },
      { dimension: "length", label: "Blade thickness (motokasane)", value: 0.007, si_unit: "m", note: "Spine thickness at base" },
    ],
  },

  {
    slug: "roman-gladius",
    name: "Roman Gladius",
    subtitle: "The short sword that conquered the ancient world",
    category_id: "history",
    description:
      "The gladius was the standard sword of the Roman legionary from the 3rd century BC through the 3rd century AD. The 'Mainz' type gladius, one of the most common variants, had a blade about 50-56 cm long and 7-8 cm wide, with a waisted profile that widened toward a triangular point designed for thrusting. The entire weapon including the wooden grip weighed about 0.7-1.0 kg. The gladius was designed for close-quarters combat in the Roman formation, where its short length was an advantage in tight spaces.",
    search_terms:
      "gladius|roman sword|legionary|roman army|mainz|pompeii|latin|centurion",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 0.68, si_unit: "m", note: "Including hilt" },
      { dimension: "length", label: "Blade length", value: 0.53, si_unit: "m", note: "Mainz-type gladius" },
      { dimension: "length", label: "Blade width", value: 0.075, si_unit: "m", note: "At widest point" },
      { dimension: "mass", label: "Mass", value: 0.8, si_unit: "kg", note: "Complete with wooden grip and pommel" },
      { dimension: "length", label: "Grip length", value: 0.12, si_unit: "m", note: "Single-handed wooden hilt" },
      { dimension: "length", label: "Blade thickness", value: 0.005, si_unit: "m", note: "Center ridge thickness" },
    ],
  },

  {
    slug: "medieval-knight-armor",
    name: "Medieval Plate Armor (Full Suit)",
    subtitle: "A complete 15th-century Gothic plate harness",
    category_id: "history",
    description:
      "A full suit of 15th-century Gothic plate armor (the height of European armored design) weighed between 20 and 25 kg, distributed across the entire body. Contrary to popular myth, a knight in full plate could mount a horse, run, and even do somersaults. The armor consisted of roughly 20 major articulated plates of hardened steel, each about 1-2 mm thick. A complete harness covered the wearer from head to toe and was custom-fitted to the individual knight. The Metropolitan Museum of Art in New York houses several exceptional examples.",
    search_terms:
      "plate armor|medieval knight|gothic armor|harness|jousting|15th century|steel|chivalry",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (on stand)", value: 1.8, si_unit: "m", note: "Full suit for average-height knight" },
      { dimension: "mass", label: "Total mass", value: 23, si_unit: "kg", note: "Complete Gothic plate harness" },
      { dimension: "length", label: "Plate thickness", value: 0.0015, si_unit: "m", note: "Hardened steel plate average" },
      { dimension: "length", label: "Breastplate width", value: 0.4, si_unit: "m", note: "Across the chest" },
      { dimension: "length", label: "Gauntlet length", value: 0.3, si_unit: "m", note: "Articulated hand protection" },
      { dimension: "length", label: "Helmet height", value: 0.35, si_unit: "m", note: "Sallet or great bascinet" },
      { dimension: "mass", label: "Helmet mass", value: 2.5, si_unit: "kg", note: "Including visor" },
    ],
  },

  {
    slug: "trebuchet-medieval",
    name: "Trebuchet (Medieval)",
    subtitle: "The counterweight siege engine that shattered castle walls",
    category_id: "history",
    description:
      "The counterweight trebuchet was the most powerful siege engine of the medieval period, capable of hurling projectiles weighing 100-150 kg over 300 meters. A large trebuchet stood about 10-17 m tall with a throwing arm of 10-15 m. The counterweight box held 10-20 tonnes of stone or earth. Edward I's famous 'Warwolf' trebuchet, used at the Siege of Stirling Castle in 1304, was reportedly so large it took 30 wagons to transport and five master carpenters three months to build.",
    search_terms:
      "trebuchet|siege engine|medieval|catapult|counterweight|warwolf|castle siege|projectile",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 15, si_unit: "m", note: "Large siege trebuchet at full height" },
      { dimension: "length", label: "Arm length", value: 12, si_unit: "m", note: "Throwing beam" },
      { dimension: "mass", label: "Counterweight mass", value: 15000, si_unit: "kg", note: "Stone and earth fill" },
      { dimension: "mass", label: "Projectile mass", value: 140, si_unit: "kg", note: "Typical stone projectile" },
      { dimension: "length", label: "Range", value: 300, si_unit: "m", note: "Maximum effective range" },
      { dimension: "length", label: "Base width", value: 6, si_unit: "m", note: "Timber frame footprint" },
      { dimension: "mass", label: "Total machine mass", value: 20000, si_unit: "kg", note: "Frame and mechanism" },
    ],
  },

  {
    slug: "great-fire-of-london-area",
    name: "Great Fire of London (1666)",
    subtitle: "The area devastated by four days of uncontrolled fire",
    category_id: "history",
    description:
      "The Great Fire of London burned from September 2-6, 1666, starting at a bakery on Pudding Lane. The fire destroyed about 13,200 houses, 87 churches, and most of the buildings of the City of London within the old Roman walls. The burned area covered approximately 1.6 square kilometers (400 acres), roughly 80% of the City of London. Despite the scale of destruction, only six verified deaths were recorded, though the actual number was likely much higher. The fire led to Christopher Wren's rebuilding of St. Paul's Cathedral and 51 other churches.",
    search_terms:
      "great fire|london 1666|pudding lane|bakery|samuel pepys|christopher wren|city of london",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area destroyed", value: 1600000, si_unit: "m2", note: "Approximately 400 acres" },
      { dimension: "length", label: "East-west extent", value: 1600, si_unit: "m", note: "From Tower to Temple" },
      { dimension: "length", label: "North-south extent", value: 800, si_unit: "m", note: "Thames to city walls" },
      { dimension: "length", label: "City wall perimeter", value: 2900, si_unit: "m", note: "Old Roman wall circuit" },
      { dimension: "temperature", label: "Estimated peak temperature", value: 1523, si_unit: "K", note: "Hot enough to melt pottery and iron locks" },
    ],
  },

  {
    slug: "spanish-galleon",
    name: "Spanish Galleon",
    subtitle: "The armed cargo ship that defined the Age of Exploration",
    category_id: "history",
    description:
      "The Spanish galleon was the principal vessel of Spain's treasure fleets from the 16th through 18th centuries. A typical Manila galleon or Atlantic treasure galleon measured about 40-50 m in length, 10-15 m in beam, and displaced around 500-1,500 tonnes. These ships carried gold, silver, spices, and silk between the Americas, Spain, and the Philippines. They were armed with 20-40 cannons and crewed by 200-400 men. The galleon's design combined cargo capacity with enough armament to discourage all but the most determined pirates.",
    search_terms:
      "galleon|spanish|treasure fleet|manila|armada|age of exploration|carrack|16th century",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 45, si_unit: "m", note: "Typical large galleon hull" },
      { dimension: "length", label: "Beam", value: 12, si_unit: "m", note: "Maximum hull width" },
      { dimension: "length", label: "Draft", value: 4.5, si_unit: "m", note: "Depth below waterline" },
      { dimension: "mass", label: "Displacement", value: 1000000, si_unit: "kg", note: "Approximately 1,000 tonnes laden" },
      { dimension: "length", label: "Mainmast height", value: 30, si_unit: "m", note: "Above deck level" },
      { dimension: "area", label: "Sail area", value: 800, si_unit: "m2", note: "Total canvas across all masts" },
      { dimension: "length", label: "Keel length", value: 35, si_unit: "m", note: "Structural backbone" },
    ],
  },

  {
    slug: "roman-aqueduct-pont-du-gard",
    name: "Roman Aqueduct (Pont du Gard dimensions)",
    subtitle: "The engineering that brought water to Roman cities",
    category_id: "history",
    description:
      "While Pont du Gard exists as a landmark entry, the Roman aqueduct system it served illustrates Roman hydraulic engineering at its finest. The Nimes aqueduct stretched 50 km from the spring at Uzes to the city of Nemausus (Nimes). The water channel maintained a precise gradient of just 34 cm per km. The Pont du Gard bridge section stands 49 m tall with three tiers of arches, making it the tallest Roman aqueduct bridge ever built. It delivered 20,000 cubic meters of water per day to Nimes.",
    search_terms:
      "roman aqueduct|nimes|uzes|hydraulic engineering|ancient rome|water supply|gradient",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total aqueduct length", value: 50000, si_unit: "m", note: "Uzes to Nimes" },
      { dimension: "length", label: "Bridge height", value: 49, si_unit: "m", note: "Pont du Gard at its tallest" },
      { dimension: "length", label: "Bridge length", value: 275, si_unit: "m", note: "Spanning the Gardon river" },
      { dimension: "length", label: "Channel width", value: 1.2, si_unit: "m", note: "Water conduit dimensions" },
      { dimension: "length", label: "Channel height", value: 1.8, si_unit: "m", note: "Covered stone channel" },
      { dimension: "volume", label: "Daily water flow", value: 20000, si_unit: "m3", note: "Volume delivered per day to Nimes" },
    ],
  },

  {
    slug: "florence-cathedral-dome",
    name: "Florence Cathedral Dome",
    subtitle: "Brunelleschi's revolutionary double-shell dome of 1436",
    category_id: "history",
    description:
      "The dome of the Cathedral of Santa Maria del Fiore in Florence, designed by Filippo Brunelleschi and completed in 1436, was the largest dome in the world for centuries and remains the largest masonry dome ever built. It spans 45 m at its base and rises 114.5 m from the cathedral floor to the top of the lantern. Brunelleschi solved the seemingly impossible engineering challenge of spanning such a vast space without traditional centering by using a double-shell construction with interlocking herringbone bricks.",
    search_terms:
      "florence dome|brunelleschi|duomo|cathedral|santa maria del fiore|renaissance|cupola",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Interior diameter", value: 45, si_unit: "m", note: "Largest masonry dome ever built" },
      { dimension: "length", label: "Height to lantern top", value: 114.5, si_unit: "m", note: "From cathedral floor" },
      { dimension: "length", label: "Dome height alone", value: 34.5, si_unit: "m", note: "From drum to oculus" },
      { dimension: "mass", label: "Dome mass", value: 37000000, si_unit: "kg", note: "Approximately 37,000 tonnes" },
      { dimension: "length", label: "Outer shell thickness", value: 0.6, si_unit: "m", note: "Outer brick shell" },
      { dimension: "length", label: "Inner shell thickness", value: 2.1, si_unit: "m", note: "Thicker inner shell" },
    ],
  },

  {
    slug: "terracotta-army-pit-1",
    name: "Terracotta Army (Pit 1)",
    subtitle: "The largest pit of Emperor Qin's underground clay army",
    category_id: "history",
    description:
      "Pit 1 of the Terracotta Army near Xi'an, China, is the largest of three pits containing life-size clay soldiers built to protect Emperor Qin Shi Huang in the afterlife. Discovered in 1974 by farmers digging a well, Pit 1 measures 230 m by 62 m and contains an estimated 6,000 warriors arranged in battle formation. Each figure is unique, standing about 1.8 m tall (with officers up to 2 m). The pit is divided by rammed-earth walls into 11 corridors, creating an underground army in perpetual formation.",
    search_terms:
      "terracotta army|pit 1|qin shi huang|xi'an|china|clay warriors|emperor|tomb",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Pit length", value: 230, si_unit: "m", note: "East-west dimension" },
      { dimension: "length", label: "Pit width", value: 62, si_unit: "m", note: "North-south dimension" },
      { dimension: "area", label: "Pit area", value: 14260, si_unit: "m2", note: "Total excavated area" },
      { dimension: "length", label: "Pit depth", value: 5, si_unit: "m", note: "Below ground surface" },
      { dimension: "length", label: "Warrior height (average)", value: 1.8, si_unit: "m", note: "Life-size infantry figures" },
      { dimension: "mass", label: "Single warrior mass", value: 200, si_unit: "kg", note: "Hollow fired clay construction" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WORLD LANDMARKS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "forbidden-city",
    name: "Forbidden City",
    subtitle: "The imperial palace complex at the heart of Beijing",
    category_id: "world-landmarks",
    description:
      "The Forbidden City (now the Palace Museum) in Beijing is the world's largest palace complex, home to Chinese emperors from 1420 to 1912. It covers 720,000 square meters and contains 980 surviving buildings with 8,704 rooms. The complex is surrounded by a 7.9 m high wall and a 52 m wide moat. The name 'Forbidden' reflects that no one could enter or leave without the emperor's permission. It took 14 years and reportedly one million workers to build.",
    search_terms:
      "forbidden city|beijing|palace museum|imperial palace|china|ming dynasty|qing dynasty|emperor",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Total area", value: 720000, si_unit: "m2", note: "72 hectares, world's largest palace complex" },
      { dimension: "length", label: "North-south length", value: 961, si_unit: "m", note: "Along the central axis" },
      { dimension: "length", label: "East-west width", value: 753, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Wall height", value: 7.9, si_unit: "m", note: "Surrounding perimeter wall" },
      { dimension: "length", label: "Moat width", value: 52, si_unit: "m", note: "Water-filled defensive moat" },
      { dimension: "length", label: "Wall perimeter", value: 3420, si_unit: "m", note: "Total wall circuit" },
    ],
  },

  {
    slug: "kremlin-walls",
    name: "Moscow Kremlin Walls",
    subtitle: "The red-brick fortress enclosing Russia's seat of power",
    category_id: "world-landmarks",
    description:
      "The Moscow Kremlin walls, built between 1485 and 1495, form an irregular triangle enclosing 27.5 hectares of fortified citadel on a hill above the Moskva River. The red-brick walls stretch 2,235 m in total length, vary from 5 to 19 m in height, and are 3.5 to 6.5 m thick. Twenty towers punctuate the walls, with the tallest (Trinity Tower) reaching 80 m. The walls originally had merlons in the distinctive swallow-tail Ghibelline pattern, reflecting the Italian architects (primarily Pietro Antonio Solari) who designed them.",
    search_terms:
      "kremlin|moscow|russia|red brick|fortress|citadel|towers|russian government",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total wall length", value: 2235, si_unit: "m", note: "Full perimeter circuit" },
      { dimension: "length", label: "Maximum wall height", value: 19, si_unit: "m", note: "Highest sections" },
      { dimension: "length", label: "Wall thickness", value: 6.5, si_unit: "m", note: "At thickest point" },
      { dimension: "area", label: "Enclosed area", value: 275000, si_unit: "m2", note: "27.5 hectares" },
      { dimension: "length", label: "Trinity Tower height", value: 80, si_unit: "m", note: "Tallest of 20 towers" },
      { dimension: "length", label: "Minimum wall height", value: 5, si_unit: "m", note: "Lowest sections along river" },
    ],
  },

  {
    slug: "alhambra-palace",
    name: "Alhambra",
    subtitle: "The Moorish palace and fortress crowning Granada's hilltop",
    category_id: "world-landmarks",
    description:
      "The Alhambra in Granada, Spain, is a sprawling palace and fortress complex built primarily between the 13th and 14th centuries during the Nasrid dynasty of the Emirate of Granada. Perched on the Sabika hill, the complex covers about 142,000 square meters and features some of the finest Islamic architecture in Europe. The Court of the Lions, with its 124 marble columns and central fountain, and the elaborate muqarnas (honeycomb vaulting) of the Hall of the Abencerrajes are considered masterpieces of Moorish design.",
    search_terms:
      "alhambra|granada|spain|moorish|nasrid|islamic architecture|court of lions|andalusia",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Complex area", value: 142000, si_unit: "m2", note: "Palace, fortress, and gardens" },
      { dimension: "length", label: "Length", value: 740, si_unit: "m", note: "Along the hilltop ridge" },
      { dimension: "length", label: "Maximum width", value: 205, si_unit: "m", note: "At widest point" },
      { dimension: "length", label: "Outer wall perimeter", value: 2200, si_unit: "m", note: "Including all towers" },
      { dimension: "length", label: "Tower of Comares height", value: 45, si_unit: "m", note: "Tallest structure in the complex" },
      { dimension: "length", label: "Elevation above city", value: 150, si_unit: "m", note: "Sabika hill above Granada" },
    ],
  },

  {
    slug: "borobudur-temple",
    name: "Borobudur Temple",
    subtitle: "The world's largest Buddhist temple in central Java",
    category_id: "world-landmarks",
    description:
      "Borobudur in Central Java, Indonesia, is the world's largest Buddhist temple, built in the 9th century during the Sailendra dynasty. The monument consists of nine stacked platforms (six square, three circular) topped by a central dome. It is decorated with 2,672 relief panels and 504 Buddha statues. The entire structure was built from approximately 2 million blocks of andesite stone without mortar. Abandoned and buried under volcanic ash for centuries, it was rediscovered in 1814 during the British administration of Java.",
    search_terms:
      "borobudur|java|indonesia|buddhist temple|sailendra|stupa|relief panels|mahayana",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Base length", value: 123, si_unit: "m", note: "Square base side" },
      { dimension: "length", label: "Height", value: 35, si_unit: "m", note: "From base to top of central stupa" },
      { dimension: "area", label: "Base area", value: 15129, si_unit: "m2", note: "Square footprint" },
      { dimension: "length", label: "Central stupa diameter", value: 11, si_unit: "m", note: "Crowning dome" },
      { dimension: "length", label: "Total relief panel length", value: 2500, si_unit: "m", note: "Combined length of all narrative panels" },
      { dimension: "volume", label: "Stone volume", value: 55000, si_unit: "m3", note: "Approximately 2 million stone blocks" },
    ],
  },

  {
    slug: "easter-island",
    name: "Easter Island (Rapa Nui)",
    subtitle: "The remote Pacific island famous for its moai statues",
    category_id: "world-landmarks",
    description:
      "Easter Island (Rapa Nui) is one of the most remote inhabited islands on Earth, located 3,500 km from the Chilean coast in the southeastern Pacific Ocean. The island covers about 164 square kilometers and is roughly triangular, formed by three extinct volcanoes. It is famous for its 887 moai, monolithic carved stone figures averaging 4 m tall and 12.5 tonnes each, though the largest erected moai (Paro) stood 10 m tall and weighed 82 tonnes. The Rapa Nui people carved and transported these statues between roughly 1250 and 1500 AD.",
    search_terms:
      "easter island|rapa nui|moai|chile|pacific|polynesia|statues|volcanic island",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Island area", value: 164000000, si_unit: "m2", note: "164 square kilometers" },
      { dimension: "length", label: "Maximum length", value: 24000, si_unit: "m", note: "Roughly triangular shape" },
      { dimension: "length", label: "Maximum width", value: 12300, si_unit: "m", note: "At widest point" },
      { dimension: "length", label: "Highest point", value: 507, si_unit: "m", note: "Maunga Terevaka volcano summit" },
      { dimension: "length", label: "Average moai height", value: 4, si_unit: "m", note: "Typical erected statue" },
      { dimension: "mass", label: "Average moai mass", value: 12500, si_unit: "kg", note: "Typical carved tuff statue" },
    ],
  },

  {
    slug: "neuschwanstein-castle",
    name: "Neuschwanstein Castle",
    subtitle: "The fairy-tale castle that inspired Disney's Sleeping Beauty Castle",
    category_id: "world-landmarks",
    description:
      "Neuschwanstein Castle in Bavaria, Germany, was commissioned by King Ludwig II in 1869 as a personal retreat. The Romanesque Revival palace sits atop a rugged cliff at 800 m elevation above Hohenschwangau village. The castle is 150 m long, stands roughly 65 m tall at its highest tower, and contains about 200 rooms (only 14 were completed before Ludwig's death in 1886). Today it receives about 1.4 million visitors per year, making it one of the most visited castles in Europe and the direct inspiration for the Sleeping Beauty Castle at Disneyland.",
    search_terms:
      "neuschwanstein|ludwig|bavaria|germany|fairy tale castle|disney|sleeping beauty|romanesque",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 150, si_unit: "m", note: "Along the ridge" },
      { dimension: "length", label: "Main tower height", value: 65, si_unit: "m", note: "Tallest tower above foundations" },
      { dimension: "length", label: "Elevation", value: 800, si_unit: "m", note: "Above sea level" },
      { dimension: "length", label: "Width", value: 50, si_unit: "m", note: "Constrained by cliff top" },
      { dimension: "length", label: "Throne Room height", value: 13, si_unit: "m", note: "Ceiling height of the largest interior space" },
      { dimension: "area", label: "Floor area", value: 6000, si_unit: "m2", note: "Total usable interior" },
    ],
  },

  {
    slug: "edinburgh-castle",
    name: "Edinburgh Castle",
    subtitle: "Scotland's fortress dominating the capital from an ancient volcanic plug",
    category_id: "world-landmarks",
    description:
      "Edinburgh Castle sits atop Castle Rock, a volcanic plug that has been a fortified site for at least 3,000 years, making it one of the oldest fortified places in Europe. The castle dominates the Edinburgh skyline from its 130 m high position above the city. The complex covers about 35,000 square meters and includes the 12th-century St Margaret's Chapel (Edinburgh's oldest surviving building), the Scottish Crown Jewels, and the Stone of Destiny. Over 2 million visitors make it the most visited paid attraction in Scotland.",
    search_terms:
      "edinburgh castle|scotland|castle rock|volcanic plug|crown jewels|stone of destiny|royal mile",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Castle area", value: 35000, si_unit: "m2", note: "Entire complex on Castle Rock" },
      { dimension: "length", label: "Castle Rock height", value: 130, si_unit: "m", note: "Above sea level" },
      { dimension: "length", label: "Rock face height (north)", value: 80, si_unit: "m", note: "Sheer cliff on north side" },
      { dimension: "length", label: "Esplanade length", value: 160, si_unit: "m", note: "Parade ground approach" },
      { dimension: "length", label: "Half Moon Battery height", value: 26, si_unit: "m", note: "Above the castle approach" },
      { dimension: "length", label: "Mons Meg barrel length", value: 4.04, si_unit: "m", note: "Famous medieval siege cannon on display" },
    ],
  },

  {
    slug: "blue-mosque-istanbul",
    name: "Blue Mosque (Sultan Ahmed Mosque)",
    subtitle: "Istanbul's iconic six-minareted Ottoman imperial mosque",
    category_id: "world-landmarks",
    description:
      "The Sultan Ahmed Mosque, known as the Blue Mosque for the 20,000 handmade Iznik tiles adorning its interior, was built between 1609 and 1616 during the rule of Sultan Ahmed I. It is unique among Ottoman mosques for having six minarets, which caused controversy at the time as only the mosque in Mecca had that many. The main dome is 23.5 m in diameter and reaches 43 m at its peak. The mosque can accommodate about 10,000 worshippers and remains an active place of worship.",
    search_terms:
      "blue mosque|sultan ahmed|istanbul|turkey|ottoman|iznik tiles|minarets|dome",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Main dome diameter", value: 23.5, si_unit: "m", note: "Central dome span" },
      { dimension: "length", label: "Dome height (interior)", value: 43, si_unit: "m", note: "Floor to dome apex" },
      { dimension: "length", label: "Tallest minaret height", value: 64, si_unit: "m", note: "Six minarets total" },
      { dimension: "area", label: "Prayer hall area", value: 4000, si_unit: "m2", note: "Interior worship space" },
      { dimension: "length", label: "Courtyard length", value: 72, si_unit: "m", note: "Inner courtyard" },
      { dimension: "area", label: "Total complex area", value: 16000, si_unit: "m2", note: "Including courtyard and dependencies" },
    ],
  },

  {
    slug: "golden-gate-park",
    name: "Golden Gate Park",
    subtitle: "San Francisco's 1,000-acre urban green space",
    category_id: "world-landmarks",
    description:
      "Golden Gate Park in San Francisco stretches from the Haight-Ashbury neighborhood to the Pacific Ocean, covering 1,017 acres (412 hectares) of carefully landscaped terrain. Designed by William Hammond Hall and later developed by John McLaren, the park is 20% larger than New York's Central Park. It contains a bison paddock, a Japanese tea garden, two windmill-powered irrigation systems, several museums (including the de Young and California Academy of Sciences), and an estimated 150,000 trees.",
    search_terms:
      "golden gate park|san francisco|california|urban park|de young|mclaren|bison paddock",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 4120000, si_unit: "m2", note: "1,017 acres or 412 hectares" },
      { dimension: "length", label: "Length", value: 4800, si_unit: "m", note: "East to west, about 3 miles" },
      { dimension: "length", label: "Width", value: 800, si_unit: "m", note: "Average north-south width" },
      { dimension: "length", label: "Stow Lake circumference", value: 1600, si_unit: "m", note: "Largest artificial lake" },
      { dimension: "length", label: "Spreckels Lake length", value: 180, si_unit: "m", note: "Model boat lake" },
      { dimension: "length", label: "Dutch Windmill height", value: 23, si_unit: "m", note: "Western windmill" },
    ],
  },

  {
    slug: "versailles-palace",
    name: "Palace of Versailles",
    subtitle: "The extravagant seat of French monarchy outside Paris",
    category_id: "world-landmarks",
    description:
      "The Palace of Versailles, built and expanded from 1661 under Louis XIV, is one of the most opulent royal residences ever constructed. The palace has 2,300 rooms spread across 63,154 square meters of floor space. The famous Hall of Mirrors is 73 m long and contains 357 mirrors. The gardens, designed by Andre Le Notre, cover 800 hectares and include 1,400 fountains. Versailles served as the seat of French government from 1682 until the French Revolution in 1789 and was where the Treaty of Versailles was signed in 1919.",
    search_terms:
      "versailles|palace|france|louis xiv|hall of mirrors|le notre|gardens|french monarchy",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Palace floor area", value: 63154, si_unit: "m2", note: "2,300 rooms total" },
      { dimension: "area", label: "Garden area", value: 8000000, si_unit: "m2", note: "800 hectares of formal gardens" },
      { dimension: "length", label: "Palace facade length", value: 570, si_unit: "m", note: "Garden-facing facade" },
      { dimension: "length", label: "Hall of Mirrors length", value: 73, si_unit: "m", note: "357 mirrors reflecting 357 windows" },
      { dimension: "length", label: "Grand Canal length", value: 1670, si_unit: "m", note: "Cruciform water feature" },
      { dimension: "area", label: "Total estate area", value: 87000000, si_unit: "m2", note: "Including all grounds and parkland" },
    ],
  },

  {
    slug: "acropolis-athens",
    name: "Acropolis of Athens",
    subtitle: "The ancient hilltop citadel crowning the Greek capital",
    category_id: "world-landmarks",
    description:
      "The Acropolis of Athens is a limestone hill rising 150 m above the city, topped by the remains of several ancient buildings of great architectural and historic significance, most notably the Parthenon. The flat-topped rock covers about 30,000 square meters and has been continuously occupied since at least the 4th millennium BC. The Parthenon, built between 447 and 432 BC under Pericles, measures 69.5 m by 30.9 m and originally contained a 12 m tall gold-and-ivory statue of Athena by Phidias.",
    search_terms:
      "acropolis|athens|greece|parthenon|pericles|athena|ancient greek|classical",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Acropolis summit area", value: 30000, si_unit: "m2", note: "Flat-topped limestone hilltop" },
      { dimension: "length", label: "Hill height", value: 150, si_unit: "m", note: "Above surrounding city" },
      { dimension: "length", label: "Parthenon length", value: 69.5, si_unit: "m", note: "Along the stylobate" },
      { dimension: "length", label: "Parthenon width", value: 30.9, si_unit: "m", note: "Along the stylobate" },
      { dimension: "length", label: "Parthenon column height", value: 10.4, si_unit: "m", note: "Doric columns" },
      { dimension: "length", label: "Propylaea width", value: 47, si_unit: "m", note: "Monumental gateway entrance" },
    ],
  },

  {
    slug: "persepolis",
    name: "Persepolis",
    subtitle: "The ceremonial capital of the Achaemenid Persian Empire",
    category_id: "world-landmarks",
    description:
      "Persepolis (Takht-e Jamshid) in modern Iran was the ceremonial capital of the Achaemenid Empire, founded by Darius I around 515 BC. Built on a massive stone terrace 455 m by 300 m, the complex included the Apadana (audience hall) with 72 columns each standing 19 m tall, the Gate of All Nations, and the Throne Hall (Hall of Hundred Columns). Alexander the Great burned Persepolis in 330 BC, but the ruins remain one of the most impressive archaeological sites in the world.",
    search_terms:
      "persepolis|persia|iran|achaemenid|darius|xerxes|apadana|takht-e jamshid|ancient",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Terrace length", value: 455, si_unit: "m", note: "Main platform north-south" },
      { dimension: "length", label: "Terrace width", value: 300, si_unit: "m", note: "Main platform east-west" },
      { dimension: "area", label: "Terrace area", value: 136500, si_unit: "m2", note: "Raised stone platform" },
      { dimension: "length", label: "Terrace height", value: 14, si_unit: "m", note: "Above surrounding plain" },
      { dimension: "length", label: "Apadana column height", value: 19, si_unit: "m", note: "Audience hall columns" },
      { dimension: "length", label: "Grand Stairway width", value: 7, si_unit: "m", note: "Monumental double-return staircase" },
    ],
  },

  {
    slug: "tikal-temple-iv",
    name: "Tikal Temple IV",
    subtitle: "The tallest pre-Columbian structure in the Americas",
    category_id: "world-landmarks",
    description:
      "Temple IV at Tikal in Guatemala, also known as the Temple of the Two-Headed Serpent, is the tallest structure at one of the greatest Mayan cities and the tallest pre-Columbian structure in the Americas. Built around 741 AD to honor the ruler Yik'in Chan K'awiil, the temple-pyramid stands 64.6 m above the jungle floor. Tikal itself covers about 16 square kilometers and at its peak around 700 AD had a population of 60,000-90,000. The site was famously used as the rebel base on Yavin 4 in the original Star Wars film.",
    search_terms:
      "tikal|guatemala|maya|mayan pyramid|temple iv|pre-columbian|peten|jungle|yavin",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 64.6, si_unit: "m", note: "Tallest pre-Columbian structure in the Americas" },
      { dimension: "length", label: "Base length", value: 59, si_unit: "m", note: "Square pyramid base" },
      { dimension: "area", label: "Tikal total area", value: 16000000, si_unit: "m2", note: "16 square kilometers of ancient city" },
      { dimension: "length", label: "Roof comb height", value: 12, si_unit: "m", note: "Decorative stone crest atop temple" },
      { dimension: "length", label: "Temple chamber width", value: 3, si_unit: "m", note: "Narrow corbel-vaulted room at summit" },
      { dimension: "length", label: "Base width", value: 59, si_unit: "m", note: "Square footprint" },
    ],
  },

  {
    slug: "abu-simbel-temple",
    name: "Abu Simbel Temple",
    subtitle: "Ramesses II's massive rock-cut temple with four colossal statues",
    category_id: "world-landmarks",
    description:
      "The Great Temple of Abu Simbel in southern Egypt was carved out of a sandstone cliff during the reign of Pharaoh Ramesses II in the 13th century BC. The temple's most striking feature is its facade, which includes four seated colossi of Ramesses, each 20 m tall. The temple extends 56 m into the cliff and is aligned so that twice a year (February 22 and October 22), sunlight penetrates the entire length to illuminate the statues of gods in the innermost sanctuary. The entire temple was relocated in 1968 to save it from flooding caused by the Aswan High Dam.",
    search_terms:
      "abu simbel|ramesses|egypt|nubia|rock temple|aswan|colossi|pharaoh|relocated",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Facade height", value: 33, si_unit: "m", note: "Rock-cut cliff face" },
      { dimension: "length", label: "Facade width", value: 38, si_unit: "m", note: "Across the front" },
      { dimension: "length", label: "Temple depth", value: 56, si_unit: "m", note: "Into the cliff from facade to sanctuary" },
      { dimension: "length", label: "Seated colossus height", value: 20, si_unit: "m", note: "Each of four Ramesses statues" },
      { dimension: "length", label: "Relocation height", value: 65, si_unit: "m", note: "Raised 65 m above original site" },
      { dimension: "mass", label: "Relocated rock mass", value: 250000000, si_unit: "kg", note: "Approximately 250,000 tonnes moved" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSPORTATION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "bicycle-road",
    name: "Bicycle (Road Bike)",
    subtitle: "The efficient two-wheeled human-powered vehicle",
    category_id: "transportation",
    description:
      "A standard road bicycle is one of the most energy-efficient vehicles ever devised, converting human pedaling into forward motion at roughly 99% mechanical efficiency. A typical modern road bike measures about 1.7 m long, has a seat height of approximately 0.75-0.90 m, and weighs 7-10 kg for a high-end carbon frame model. The standard wheel diameter is 700c (approximately 0.622 m rim diameter). More people worldwide use bicycles for daily transportation than any other vehicle.",
    search_terms:
      "bicycle|road bike|cycling|two wheels|pedal|carbon frame|700c|human powered",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 1.7, si_unit: "m", note: "Axle to axle plus overhang" },
      { dimension: "length", label: "Handlebar height", value: 1.0, si_unit: "m", note: "Ground to handlebars" },
      { dimension: "mass", label: "Mass", value: 8.5, si_unit: "kg", note: "High-end road bike" },
      { dimension: "length", label: "Wheel diameter", value: 0.622, si_unit: "m", note: "700c rim diameter" },
      { dimension: "length", label: "Wheelbase", value: 0.99, si_unit: "m", note: "Front to rear axle" },
      { dimension: "length", label: "Width (handlebars)", value: 0.42, si_unit: "m", note: "Standard drop bar width" },
    ],
  },

  {
    slug: "skateboard",
    name: "Skateboard",
    subtitle: "The four-wheeled plank that launched a subculture",
    category_id: "transportation",
    description:
      "A standard street skateboard consists of a seven-ply maple wood deck, two aluminum trucks, four polyurethane wheels, and eight bearings. A typical deck measures 78-84 cm long and 19-21 cm wide, with a concave shape, a kicked nose, and a kicked tail. Complete boards weigh about 2-3 kg. Originally called 'sidewalk surfing' in 1950s California, skateboarding has grown into a global sport and was included in the Olympic Games starting at Tokyo 2020.",
    search_terms:
      "skateboard|deck|trucks|wheels|skating|street|halfpipe|ollie|kickflip",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Deck length", value: 0.81, si_unit: "m", note: "Standard street board" },
      { dimension: "length", label: "Deck width", value: 0.2, si_unit: "m", note: "8-inch standard width" },
      { dimension: "mass", label: "Complete mass", value: 2.5, si_unit: "kg", note: "Deck, trucks, wheels, bearings" },
      { dimension: "length", label: "Wheel diameter", value: 0.054, si_unit: "m", note: "54mm street wheels" },
      { dimension: "length", label: "Wheelbase", value: 0.36, si_unit: "m", note: "Distance between truck mounting holes" },
      { dimension: "length", label: "Deck thickness", value: 0.01, si_unit: "m", note: "Seven-ply Canadian maple" },
    ],
  },

  {
    slug: "segway-pt",
    name: "Segway PT",
    subtitle: "The self-balancing personal transporter that divided opinion",
    category_id: "transportation",
    description:
      "The Segway PT (Personal Transporter), invented by Dean Kamen and unveiled in 2001, is a two-wheeled, self-balancing electric vehicle. Using gyroscopes and tilt sensors, it stays upright and moves in response to the rider's shifts in weight. The Segway stands about 1.3 m tall at the handlebars, weighs 47.7 kg, and can travel at up to 20 km/h with a range of about 38 km on a single charge. Despite massive initial hype, it became more of a tourist rental and security patrol vehicle than the transportation revolution it was predicted to be.",
    search_terms:
      "segway|self-balancing|personal transporter|dean kamen|electric|gyroscope|two wheel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (handlebars)", value: 1.3, si_unit: "m", note: "Top of steering column" },
      { dimension: "length", label: "Platform length", value: 0.63, si_unit: "m", note: "Foot platform" },
      { dimension: "length", label: "Width", value: 0.63, si_unit: "m", note: "Wheel to wheel" },
      { dimension: "mass", label: "Mass", value: 47.7, si_unit: "kg", note: "Including batteries" },
      { dimension: "length", label: "Wheel diameter", value: 0.48, si_unit: "m", note: "Large pneumatic tires" },
      { dimension: "speed", label: "Maximum speed", value: 5.6, si_unit: "m/s", note: "About 20 km/h" },
    ],
  },

  {
    slug: "electric-scooter",
    name: "Electric Scooter (Kick Style)",
    subtitle: "The foldable e-scooter ubiquitous in modern cities",
    category_id: "transportation",
    description:
      "The modern electric kick scooter, popularized by companies like Xiaomi, Ninebot, and Bird, has become a fixture of urban transportation worldwide. A typical commuter e-scooter stands about 1.2 m tall at the handlebars, has a deck roughly 50 cm long, and weighs 12-15 kg. Most fold for carrying and storage. They typically reach 25 km/h with a range of 25-45 km per charge. Love them or hate them, they have fundamentally changed the last-mile transportation landscape in cities around the globe.",
    search_terms:
      "electric scooter|e-scooter|kick scooter|xiaomi|bird|lime|urban transport|foldable",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (handlebars)", value: 1.2, si_unit: "m", note: "Unfolded riding position" },
      { dimension: "length", label: "Length", value: 1.08, si_unit: "m", note: "Front wheel to rear fender" },
      { dimension: "length", label: "Folded length", value: 0.49, si_unit: "m", note: "Compact for carrying" },
      { dimension: "mass", label: "Mass", value: 14, si_unit: "kg", note: "Typical commuter model" },
      { dimension: "length", label: "Wheel diameter", value: 0.254, si_unit: "m", note: "10-inch pneumatic tires" },
      { dimension: "speed", label: "Maximum speed", value: 6.9, si_unit: "m/s", note: "About 25 km/h" },
    ],
  },

  {
    slug: "rickshaw-cycle",
    name: "Cycle Rickshaw",
    subtitle: "The pedal-powered passenger taxi of South and Southeast Asia",
    category_id: "transportation",
    description:
      "The cycle rickshaw is a human-powered three-wheeled passenger vehicle widely used across South and Southeast Asia, particularly in India, Bangladesh, and Indonesia. A typical cycle rickshaw has a front bicycle wheel driven by pedals and two rear wheels supporting a passenger seat with a canopy. They measure about 2.5 m long, 1.0 m wide, and can carry two passengers. In Dhaka, Bangladesh alone, an estimated 400,000 cycle rickshaws operate daily, making it the 'rickshaw capital of the world.'",
    search_terms:
      "rickshaw|cycle rickshaw|trishaw|pedicab|dhaka|india|bangladesh|three wheel|pedal taxi",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 2.5, si_unit: "m", note: "Front wheel to rear" },
      { dimension: "length", label: "Width", value: 1.0, si_unit: "m", note: "Rear axle width" },
      { dimension: "length", label: "Height (with canopy)", value: 1.8, si_unit: "m", note: "Including passenger shade" },
      { dimension: "mass", label: "Unladen mass", value: 80, si_unit: "kg", note: "Steel frame with canopy" },
      { dimension: "length", label: "Seat width", value: 0.75, si_unit: "m", note: "Two-passenger bench" },
      { dimension: "length", label: "Front wheel diameter", value: 0.66, si_unit: "m", note: "Standard bicycle wheel" },
    ],
  },

  {
    slug: "venetian-gondola",
    name: "Venetian Gondola",
    subtitle: "The asymmetric black boat that glides through Venice's canals",
    category_id: "transportation",
    description:
      "The gondola is a traditional, flat-bottomed rowing boat unique to Venice, Italy. It is asymmetric: the left side is wider than the right by 24 cm, compensating for the gondolier rowing on one side. A gondola is exactly 10.85 m long and 1.40 m wide at its widest point, made from 280 pieces of eight types of wood, and weighs about 350 kg. The distinctive six-pronged ferro (prow ornament) represents Venice's six sestieri (districts), while the curved top represents the Doge's cap. Only about 400 gondolas remain in active service.",
    search_terms:
      "gondola|venice|italy|canal|gondolier|ferro|rowing|flat-bottomed boat|sestieri",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 10.85, si_unit: "m", note: "Precisely standardized" },
      { dimension: "length", label: "Maximum width", value: 1.4, si_unit: "m", note: "At widest beam" },
      { dimension: "length", label: "Asymmetry offset", value: 0.24, si_unit: "m", note: "Left side wider than right" },
      { dimension: "mass", label: "Mass", value: 350, si_unit: "kg", note: "280 pieces of wood" },
      { dimension: "length", label: "Ferro height", value: 0.55, si_unit: "m", note: "Ornamental prow comb" },
      { dimension: "length", label: "Oar length", value: 4.2, si_unit: "m", note: "Single sculling oar" },
    ],
  },

  {
    slug: "cable-car-san-francisco",
    name: "San Francisco Cable Car",
    subtitle: "The beloved grip-and-cable streetcar climbing steep hills since 1873",
    category_id: "transportation",
    description:
      "San Francisco's cable cars are the last manually operated cable car system in the world and a National Historic Landmark. Andrew Hallidie's invention uses a continuously moving underground cable at 15.5 km/h, which the gripman grasps to pull the car along. A cable car is about 9 m long, 2.4 m wide, and weighs approximately 7,700 kg empty. The system includes three routes, 73 operational cars, and 600-volt electric motors powering the cables from a central powerhouse. About 7 million riders use the system annually.",
    search_terms:
      "cable car|san francisco|grip car|hallidie|streetcar|powell mason|california|historic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Car length", value: 9, si_unit: "m", note: "Standard grip car" },
      { dimension: "length", label: "Car width", value: 2.4, si_unit: "m", note: "Including running boards" },
      { dimension: "length", label: "Car height", value: 3.2, si_unit: "m", note: "Rail to roof peak" },
      { dimension: "mass", label: "Empty mass", value: 7700, si_unit: "kg", note: "Without passengers" },
      { dimension: "speed", label: "Cable speed", value: 4.3, si_unit: "m/s", note: "Constant 15.5 km/h" },
      { dimension: "length", label: "Cable diameter", value: 0.032, si_unit: "m", note: "1.25-inch steel cable" },
    ],
  },

  {
    slug: "hovercraft-srn4",
    name: "SRN4 Hovercraft",
    subtitle: "The massive cross-Channel air-cushion vehicle",
    category_id: "transportation",
    description:
      "The SR.N4 Mountbatten class was the largest hovercraft ever built and operated the cross-English Channel route between Dover and Calais from 1968 to 2000. The craft measured 56.4 m long and 23.8 m wide, riding on a cushion of air contained by a flexible rubber skirt. It could carry 418 passengers and 60 cars at speeds up to 130 km/h, crossing the Channel in about 35 minutes. Four Rolls-Royce Marine Proteus gas turbines provided both lift and propulsion through massive ducted fans.",
    search_terms:
      "hovercraft|srn4|mountbatten|channel|dover|calais|air cushion|hoverspeed|cross-channel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 56.4, si_unit: "m", note: "Mk III stretched version" },
      { dimension: "length", label: "Width", value: 23.8, si_unit: "m", note: "Including side skirts" },
      { dimension: "length", label: "Height on cushion", value: 11.2, si_unit: "m", note: "On full air cushion" },
      { dimension: "mass", label: "Maximum mass", value: 310000, si_unit: "kg", note: "Fully loaded weight" },
      { dimension: "speed", label: "Maximum speed", value: 36.1, si_unit: "m/s", note: "About 130 km/h" },
      { dimension: "length", label: "Skirt depth", value: 2.8, si_unit: "m", note: "Flexible rubber air-containment skirt" },
    ],
  },

  {
    slug: "hindenburg-zeppelin",
    name: "Hindenburg (LZ 129)",
    subtitle: "The ill-fated hydrogen airship that ended the age of rigid dirigibles",
    category_id: "transportation",
    description:
      "The LZ 129 Hindenburg was the largest airship ever built at 245 m long and 41.2 m in diameter, making it longer than three Boeing 747s end to end. Filled with 200,000 cubic meters of hydrogen (helium was preferred but unavailable due to a US export embargo), it could carry 72 passengers and 61 crew in luxurious comfort across the Atlantic in about 2.5 days. The Hindenburg made 63 successful flights before its catastrophic fire while landing at Lakehurst, New Jersey, on May 6, 1937, killing 36 people and effectively ending the era of passenger airships.",
    search_terms:
      "hindenburg|zeppelin|airship|dirigible|lakehurst|hydrogen|lz 129|1937|disaster",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 245, si_unit: "m", note: "Largest airship ever built" },
      { dimension: "length", label: "Maximum diameter", value: 41.2, si_unit: "m", note: "At widest point" },
      { dimension: "volume", label: "Gas volume", value: 200000, si_unit: "m3", note: "Hydrogen lifting gas" },
      { dimension: "mass", label: "Maximum gross mass", value: 242000, si_unit: "kg", note: "Fully loaded" },
      { dimension: "speed", label: "Maximum speed", value: 37.5, si_unit: "m/s", note: "About 135 km/h" },
      { dimension: "length", label: "Gondola length", value: 22, si_unit: "m", note: "Main passenger gondola" },
    ],
  },

  {
    slug: "canoe-standard",
    name: "Canoe (Standard Recreational)",
    subtitle: "The open-top paddled watercraft used for millennia",
    category_id: "transportation",
    description:
      "The canoe is one of humanity's oldest forms of watercraft, with archaeological evidence dating back 8,000 years. A standard recreational canoe is typically 4.9 m (16 feet) long, about 0.91 m wide at its beam, and weighs 25-35 kg depending on material (aluminum, fiberglass, or polyethylene). It is paddled from a kneeling or seated position using single-bladed paddles and can carry two adults plus gear totaling about 300 kg. Canoe designs vary enormously, from the birch bark canoes of Indigenous North Americans to modern carbon fiber racing shells.",
    search_terms:
      "canoe|paddle|watercraft|kayak|birch bark|recreational|portage|canoeing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 4.9, si_unit: "m", note: "Standard 16-foot recreational canoe" },
      { dimension: "length", label: "Beam", value: 0.91, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Depth", value: 0.34, si_unit: "m", note: "Gunwale to bottom at center" },
      { dimension: "mass", label: "Mass", value: 30, si_unit: "kg", note: "Fiberglass construction" },
      { dimension: "mass", label: "Load capacity", value: 300, si_unit: "kg", note: "Maximum recommended payload" },
      { dimension: "length", label: "Paddle length", value: 1.52, si_unit: "m", note: "Standard single-blade paddle" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCEANS & SEAS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "atlantic-ocean",
    name: "Atlantic Ocean",
    subtitle: "The second-largest ocean, separating the Old World from the New",
    category_id: "ocean",
    description:
      "The Atlantic Ocean is the second-largest of the world's five oceans, covering approximately 106.5 million square kilometers (about 20% of Earth's surface). It separates the Americas from Europe and Africa, with an average depth of 3,332 m and a maximum depth of 8,376 m in the Puerto Rico Trench. The Mid-Atlantic Ridge, the longest mountain range on Earth, runs through its center for 16,000 km. The Atlantic carries the Gulf Stream, which moderates the climate of Western Europe, making London warmer than cities at the same latitude in Canada.",
    search_terms:
      "atlantic ocean|mid-atlantic ridge|gulf stream|puerto rico trench|transatlantic",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 1.065e14, si_unit: "m2", note: "106.5 million square kilometers" },
      { dimension: "length", label: "North-south length", value: 15490000, si_unit: "m", note: "Arctic to Antarctic" },
      { dimension: "length", label: "Maximum width", value: 11800000, si_unit: "m", note: "US Gulf Coast to North Africa" },
      { dimension: "length", label: "Average depth", value: 3332, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 8376, si_unit: "m", note: "Puerto Rico Trench" },
      { dimension: "volume", label: "Volume", value: 3.1e17, si_unit: "m3", note: "310 million cubic kilometers" },
    ],
  },

  {
    slug: "indian-ocean",
    name: "Indian Ocean",
    subtitle: "The warmest ocean, cradled between Africa, Asia, and Australia",
    category_id: "ocean",
    description:
      "The Indian Ocean is the third-largest ocean, covering about 70.6 million square kilometers. It is bounded by Africa to the west, Asia to the north, Australia to the east, and the Southern Ocean to the south. Its average depth is 3,741 m, with the maximum depth of 7,258 m in the Sunda Trench (Java Trench) off Indonesia. The Indian Ocean is the warmest ocean and is home to the monsoon wind system that has governed trade routes and agriculture in South Asia for thousands of years.",
    search_terms:
      "indian ocean|monsoon|sunda trench|java trench|madagascar|trade routes|warm ocean",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 7.06e13, si_unit: "m2", note: "70.6 million square kilometers" },
      { dimension: "length", label: "Maximum width", value: 10000000, si_unit: "m", note: "Africa to Australia" },
      { dimension: "length", label: "Average depth", value: 3741, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 7258, si_unit: "m", note: "Sunda (Java) Trench" },
      { dimension: "volume", label: "Volume", value: 2.64e17, si_unit: "m3", note: "264 million cubic kilometers" },
      { dimension: "temperature", label: "Surface temperature (average)", value: 300, si_unit: "K", note: "About 27 degrees C, warmest ocean" },
    ],
  },

  {
    slug: "arctic-ocean",
    name: "Arctic Ocean",
    subtitle: "The smallest and shallowest ocean, blanketed in sea ice",
    category_id: "ocean",
    description:
      "The Arctic Ocean is the smallest and shallowest of the world's five oceans, covering about 14.06 million square kilometers around the North Pole. Its average depth is 1,205 m, with a maximum depth of 5,550 m in the Molloy Deep (Fram Strait). Much of the ocean is covered by sea ice year-round, though the extent has been declining dramatically due to climate change. Five countries (Russia, Canada, Norway, Denmark/Greenland, and the US) border the Arctic Ocean, and it contains the geographic North Pole.",
    search_terms:
      "arctic ocean|north pole|sea ice|molloy deep|polar|arctic circle|ice cap|climate change",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 1.406e13, si_unit: "m2", note: "14.06 million square kilometers" },
      { dimension: "length", label: "Average depth", value: 1205, si_unit: "m", note: "Shallowest ocean" },
      { dimension: "length", label: "Maximum depth", value: 5550, si_unit: "m", note: "Molloy Deep in Fram Strait" },
      { dimension: "volume", label: "Volume", value: 1.8e16, si_unit: "m3", note: "18 million cubic kilometers" },
      { dimension: "area", label: "Summer ice extent (minimum)", value: 3.4e12, si_unit: "m2", note: "Recent minimums around 3.4 million km2" },
      { dimension: "temperature", label: "Surface temperature (winter)", value: 271, si_unit: "K", note: "About -2 degrees C under ice" },
    ],
  },

  {
    slug: "mediterranean-sea",
    name: "Mediterranean Sea",
    subtitle: "The inland sea at the crossroads of European, African, and Asian civilizations",
    category_id: "ocean",
    description:
      "The Mediterranean Sea is an almost-enclosed body of water connected to the Atlantic through the narrow Strait of Gibraltar. It covers about 2.5 million square kilometers and has an average depth of 1,500 m, reaching a maximum of 5,267 m in the Calypso Deep off the coast of Greece. The name means 'middle of the Earth' in Latin, and it has been central to human civilization for millennia: the Phoenicians, Greeks, Romans, Byzantines, and Ottoman Turks all built empires around its shores.",
    search_terms:
      "mediterranean|inland sea|strait of gibraltar|calypso deep|roman|civilization|europe africa",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 2.5e12, si_unit: "m2", note: "2.5 million square kilometers" },
      { dimension: "length", label: "East-west length", value: 3860000, si_unit: "m", note: "Gibraltar to Levant coast" },
      { dimension: "length", label: "Maximum width", value: 1600000, si_unit: "m", note: "North to south" },
      { dimension: "length", label: "Average depth", value: 1500, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 5267, si_unit: "m", note: "Calypso Deep, SW of Greece" },
      { dimension: "length", label: "Strait of Gibraltar width", value: 14300, si_unit: "m", note: "Narrowest point to Atlantic" },
    ],
  },

  {
    slug: "caribbean-sea",
    name: "Caribbean Sea",
    subtitle: "The tropical sea dotted with islands between the Americas",
    category_id: "ocean",
    description:
      "The Caribbean Sea lies between Central America, South America, and the Caribbean island arc. It covers approximately 2.75 million square kilometers and has an average depth of 2,200 m, with the deepest point at 7,686 m in the Cayman Trough. The Caribbean is known for its warm, clear waters, coral reefs, and tropical climate. It was the stage for centuries of colonial conflict, piracy, and the transatlantic slave trade, and today is one of the world's most popular tourist destinations.",
    search_terms:
      "caribbean sea|cayman trough|islands|tropical|coral reef|piracy|west indies|antilles",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 2.75e12, si_unit: "m2", note: "2.75 million square kilometers" },
      { dimension: "length", label: "East-west extent", value: 3100000, si_unit: "m", note: "Yucatan to Lesser Antilles" },
      { dimension: "length", label: "North-south extent", value: 1400000, si_unit: "m", note: "Cuba to South America" },
      { dimension: "length", label: "Average depth", value: 2200, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 7686, si_unit: "m", note: "Cayman Trough" },
      { dimension: "temperature", label: "Surface temperature", value: 300, si_unit: "K", note: "About 27 degrees C year-round" },
    ],
  },

  {
    slug: "red-sea",
    name: "Red Sea",
    subtitle: "The narrow seawater inlet between Africa and Arabia",
    category_id: "ocean",
    description:
      "The Red Sea is a narrow body of water lying between Africa and the Arabian Peninsula, connected to the Indian Ocean through the Bab-el-Mandeb strait and to the Mediterranean via the Suez Canal. It covers about 438,000 square kilometers with an average depth of 490 m and maximum depth of 3,040 m. The Red Sea is one of the world's warmest and saltiest bodies of seawater, and its extraordinary coral reefs support some of the most biodiverse marine ecosystems outside the Coral Triangle.",
    search_terms:
      "red sea|suez canal|bab-el-mandeb|coral reef|egypt|saudi arabia|africa|arabian",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 4.38e11, si_unit: "m2", note: "438,000 square kilometers" },
      { dimension: "length", label: "Length", value: 2250000, si_unit: "m", note: "NW to SE extent" },
      { dimension: "length", label: "Maximum width", value: 355000, si_unit: "m", note: "At widest point" },
      { dimension: "length", label: "Average depth", value: 490, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 3040, si_unit: "m", note: "Suakin Trough" },
      { dimension: "temperature", label: "Surface temperature", value: 305, si_unit: "K", note: "About 32 degrees C in summer" },
    ],
  },

  {
    slug: "black-sea",
    name: "Black Sea",
    subtitle: "The anoxic inland sea between Europe and Asia Minor",
    category_id: "ocean",
    description:
      "The Black Sea is an inland sea bounded by six countries: Turkey, Bulgaria, Romania, Ukraine, Russia, and Georgia. It covers about 436,000 square kilometers with a maximum depth of 2,212 m. The Black Sea is remarkable for being the world's largest meromictic (permanently stratified) body of water: below about 150 m, the water is anoxic (devoid of oxygen), creating a 'dead zone' that preserves ancient shipwrecks in extraordinary condition. It connects to the Mediterranean through the narrow Bosphorus strait.",
    search_terms:
      "black sea|anoxic|bosphorus|turkey|ukraine|romania|meromictic|dead zone|inland sea",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 4.36e11, si_unit: "m2", note: "436,000 square kilometers" },
      { dimension: "length", label: "East-west length", value: 1175000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "North-south width", value: 580000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Maximum depth", value: 2212, si_unit: "m", note: "Central basin" },
      { dimension: "length", label: "Anoxic layer depth", value: 150, si_unit: "m", note: "Oxygen-free below this depth" },
      { dimension: "length", label: "Bosphorus width", value: 700, si_unit: "m", note: "Narrowest point of the outlet" },
    ],
  },

  {
    slug: "south-china-sea",
    name: "South China Sea",
    subtitle: "The contested marginal sea of the western Pacific",
    category_id: "ocean",
    description:
      "The South China Sea is a marginal sea of the Pacific Ocean covering about 3.5 million square kilometers, bounded by China, Taiwan, the Philippines, Borneo, Indonesia, the Malay Peninsula, and Vietnam. It has an average depth of 1,060 m and a maximum depth of 5,016 m in the Manila Trench. Roughly one-third of the world's shipping passes through it, carrying over $3 trillion in trade annually. The sea contains numerous disputed islands, reefs, and atolls, including the Spratly and Paracel Islands.",
    search_terms:
      "south china sea|spratly|paracel|manila trench|shipping|pacific|disputed|trade route",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 3.5e12, si_unit: "m2", note: "3.5 million square kilometers" },
      { dimension: "length", label: "North-south extent", value: 3500000, si_unit: "m", note: "Taiwan Strait to Borneo" },
      { dimension: "length", label: "East-west extent", value: 1000000, si_unit: "m", note: "Vietnam to Philippines" },
      { dimension: "length", label: "Average depth", value: 1060, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 5016, si_unit: "m", note: "Manila Trench" },
      { dimension: "volume", label: "Volume", value: 3.7e15, si_unit: "m3", note: "3.7 million cubic kilometers" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESERTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "gobi-desert",
    name: "Gobi Desert",
    subtitle: "The vast cold desert spanning Mongolia and northern China",
    category_id: "deserts",
    description:
      "The Gobi Desert stretches across southern Mongolia and northern China, covering about 1.3 million square kilometers. Unlike the stereotypical sandy desert, the Gobi is mostly bare rock and gravel (gobi means 'waterless place' in Mongolian), with only about 5% sand dunes. Temperatures range from -40 degrees C in winter to 50 degrees C in summer. The Gobi is famous for its paleontological riches: the first confirmed dinosaur eggs were discovered here in 1923, and it remains one of the world's premier fossil sites.",
    search_terms:
      "gobi desert|mongolia|china|cold desert|dinosaur eggs|gravel|steppe|dry",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.3e12, si_unit: "m2", note: "1.3 million square kilometers" },
      { dimension: "length", label: "East-west extent", value: 1600000, si_unit: "m", note: "Maximum length" },
      { dimension: "length", label: "North-south extent", value: 800000, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Average elevation", value: 1500, si_unit: "m", note: "High plateau desert" },
      { dimension: "temperature", label: "Maximum temperature", value: 323, si_unit: "K", note: "About 50 degrees C in summer" },
      { dimension: "temperature", label: "Minimum temperature", value: 233, si_unit: "K", note: "About -40 degrees C in winter" },
    ],
  },

  {
    slug: "kalahari-desert",
    name: "Kalahari Desert",
    subtitle: "The great thirstland of southern Africa",
    category_id: "deserts",
    description:
      "The Kalahari Desert spans about 900,000 square kilometers across Botswana, Namibia, and South Africa. Despite being called a desert, it receives more rainfall (200-500 mm per year) than true deserts and supports considerable wildlife, including the famous Kalahari lions, meerkats, and the San (Bushmen) people who have inhabited it for 20,000 years. The Kalahari is covered in reddish sand, with the Okavango Delta forming a remarkable inland oasis where the Okavango River empties into the desert and evaporates.",
    search_terms:
      "kalahari|botswana|namibia|south africa|san bushmen|okavango|meerkats|red sand",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 9e11, si_unit: "m2", note: "900,000 square kilometers" },
      { dimension: "length", label: "North-south extent", value: 2500000, si_unit: "m", note: "From Democratic Republic of Congo to South Africa" },
      { dimension: "length", label: "East-west extent", value: 900000, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Average elevation", value: 900, si_unit: "m", note: "Above sea level" },
      { dimension: "temperature", label: "Maximum temperature", value: 318, si_unit: "K", note: "About 45 degrees C in summer" },
      { dimension: "length", label: "Sand depth", value: 60, si_unit: "m", note: "Maximum depth of sand deposits" },
    ],
  },

  {
    slug: "atacama-desert",
    name: "Atacama Desert",
    subtitle: "The driest non-polar desert on Earth, along Chile's Pacific coast",
    category_id: "deserts",
    description:
      "The Atacama Desert in northern Chile is the driest non-polar desert on Earth, with some weather stations having never recorded rain. It stretches about 1,600 km along the Pacific coast and covers approximately 105,000 square kilometers. Some regions receive as little as 1 mm of precipitation per year. The extreme aridity makes it an ideal site for astronomical observatories (including ALMA and the Very Large Telescope), and NASA uses it as a Mars analog for testing rovers. Despite the harsh conditions, over one million people live in Atacama cities.",
    search_terms:
      "atacama|chile|driest desert|pacific coast|observatory|alma|mars analog|arid",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.05e11, si_unit: "m2", note: "105,000 square kilometers" },
      { dimension: "length", label: "Length (N-S)", value: 1600000, si_unit: "m", note: "Along the Chilean coast" },
      { dimension: "length", label: "Width", value: 180000, si_unit: "m", note: "Average east-west extent" },
      { dimension: "length", label: "Average elevation", value: 2400, si_unit: "m", note: "High desert plateau" },
      { dimension: "length", label: "Annual rainfall (driest)", value: 0.001, si_unit: "m", note: "About 1 mm in the driest areas" },
      { dimension: "temperature", label: "Daytime temperature", value: 303, si_unit: "K", note: "About 30 degrees C typical" },
    ],
  },

  {
    slug: "arabian-desert",
    name: "Arabian Desert",
    subtitle: "The vast sandy expanse covering most of the Arabian Peninsula",
    category_id: "deserts",
    description:
      "The Arabian Desert covers approximately 2.33 million square kilometers across most of the Arabian Peninsula, including large portions of Saudi Arabia, Yemen, Oman, and the UAE. It includes the Rub' al Khali (Empty Quarter), the largest contiguous sand desert in the world at 650,000 square kilometers. Temperatures can exceed 50 degrees C, and some areas receive no rain for years at a time. Despite this, the desert sits atop roughly 30% of the world's proven oil reserves, making it one of the most economically significant landscapes on Earth.",
    search_terms:
      "arabian desert|rub al khali|empty quarter|saudi arabia|sand dunes|peninsula|oil reserves",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 2.33e12, si_unit: "m2", note: "2.33 million square kilometers" },
      { dimension: "area", label: "Rub' al Khali area", value: 6.5e11, si_unit: "m2", note: "Largest contiguous sand desert" },
      { dimension: "length", label: "North-south extent", value: 2100000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "East-west extent", value: 2600000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Maximum dune height", value: 250, si_unit: "m", note: "Tallest sand dunes in Rub' al Khali" },
      { dimension: "temperature", label: "Maximum temperature", value: 329, si_unit: "K", note: "About 56 degrees C recorded" },
    ],
  },

  {
    slug: "antarctic-desert",
    name: "Antarctic Polar Desert",
    subtitle: "The largest and coldest desert on Earth, covering an entire continent",
    category_id: "deserts",
    description:
      "Antarctica is technically the world's largest desert by area, receiving less than 200 mm of precipitation annually (mostly as snow), with some interior regions receiving less than 50 mm. The ice-free McMurdo Dry Valleys haven't seen rain in roughly 2 million years. The Antarctic ice sheet averages 2,160 m thick and contains about 26.5 million cubic kilometers of ice, representing roughly 70% of the world's fresh water. Temperatures have reached -89.2 degrees C at Vostok Station, the coldest reliably recorded temperature on Earth.",
    search_terms:
      "antarctic desert|polar desert|dry valleys|ice sheet|vostok|coldest|driest continent",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.42e13, si_unit: "m2", note: "14.2 million square kilometers" },
      { dimension: "length", label: "Average ice thickness", value: 2160, si_unit: "m", note: "Continental ice sheet average" },
      { dimension: "length", label: "Maximum ice thickness", value: 4776, si_unit: "m", note: "Astrolabe Subglacial Basin" },
      { dimension: "volume", label: "Ice volume", value: 2.65e16, si_unit: "m3", note: "26.5 million cubic kilometers" },
      { dimension: "temperature", label: "Lowest recorded temperature", value: 184, si_unit: "K", note: "-89.2 degrees C at Vostok Station" },
      { dimension: "length", label: "Annual precipitation (interior)", value: 0.05, si_unit: "m", note: "Less than 50 mm water equivalent" },
    ],
  },

  {
    slug: "mojave-desert",
    name: "Mojave Desert",
    subtitle: "The American Southwest desert home to Joshua trees and Death Valley",
    category_id: "deserts",
    description:
      "The Mojave Desert spans about 124,000 square kilometers across southeastern California, southern Nevada, southwestern Utah, and northwestern Arizona. It includes Death Valley, the lowest, driest, and hottest place in North America (86 m below sea level, with the highest reliably recorded air temperature on Earth at 56.7 degrees C). The Mojave's iconic Joshua tree grows nowhere else on Earth. The desert also hosts Edwards Air Force Base, numerous solar farms, and the ruins of Route 66 motels.",
    search_terms:
      "mojave|death valley|joshua tree|california|nevada|american southwest|hot desert|route 66",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.24e11, si_unit: "m2", note: "124,000 square kilometers" },
      { dimension: "length", label: "North-south extent", value: 350000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "East-west extent", value: 500000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Death Valley depth below sea level", value: -86, si_unit: "m", note: "Badwater Basin, lowest point in North America" },
      { dimension: "temperature", label: "Highest recorded temperature", value: 329.8, si_unit: "K", note: "56.7 degrees C at Furnace Creek, July 10, 1913" },
      { dimension: "length", label: "Average elevation", value: 610, si_unit: "m", note: "High desert outside Death Valley" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FORESTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "black-forest",
    name: "Black Forest (Schwarzwald)",
    subtitle: "Germany's densely wooded mountain range of fairy-tale fame",
    category_id: "forests",
    description:
      "The Black Forest (Schwarzwald) in Baden-Wurttemberg, southwestern Germany, is a mountain range covered by dense dark coniferous forest. It extends about 160 km long and up to 60 km wide, covering roughly 6,000 square kilometers. The highest peak, Feldberg, reaches 1,493 m. The name comes from the canopy of evergreens blocking so much sunlight that the forest floor is perpetually dim. The Black Forest is famous for cuckoo clocks, Black Forest ham, Black Forest cake, and for inspiring the Brothers Grimm fairy tales of dark woods filled with wolves and witches.",
    search_terms:
      "black forest|schwarzwald|germany|baden-wurttemberg|feldberg|cuckoo clock|grimm|coniferous",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 6e9, si_unit: "m2", note: "About 6,000 square kilometers" },
      { dimension: "length", label: "Length (N-S)", value: 160000, si_unit: "m", note: "North to south extent" },
      { dimension: "length", label: "Width", value: 60000, si_unit: "m", note: "Maximum east-west extent" },
      { dimension: "length", label: "Highest peak (Feldberg)", value: 1493, si_unit: "m", note: "Above sea level" },
      { dimension: "length", label: "Average tree height", value: 30, si_unit: "m", note: "Mature Norway spruce" },
      { dimension: "length", label: "Average elevation", value: 700, si_unit: "m", note: "Mean forested altitude" },
    ],
  },

  {
    slug: "taiga-boreal-forest",
    name: "Taiga (Boreal Forest)",
    subtitle: "The largest terrestrial biome, circling the Northern Hemisphere",
    category_id: "forests",
    description:
      "The taiga, or boreal forest, is the world's largest land biome, forming a vast belt of coniferous forest across Russia, Canada, Alaska, and Scandinavia. It covers approximately 17 million square kilometers, representing about 29% of the world's total forest area. The taiga is dominated by cold-hardy species like spruce, pine, and larch. Winter temperatures can reach -50 degrees C, with only 50-100 frost-free days per year. The taiga stores more carbon in its soils and peatlands than all the world's tropical rainforests combined.",
    search_terms:
      "taiga|boreal forest|coniferous|russia|canada|spruce|carbon sink|northern|subarctic",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 1.7e13, si_unit: "m2", note: "17 million square kilometers worldwide" },
      { dimension: "length", label: "East-west extent (Russia)", value: 9000000, si_unit: "m", note: "Russian taiga alone spans 9,000 km" },
      { dimension: "length", label: "Average tree height", value: 15, si_unit: "m", note: "Stunted by cold and short growing season" },
      { dimension: "temperature", label: "Winter minimum", value: 223, si_unit: "K", note: "About -50 degrees C" },
      { dimension: "temperature", label: "Summer maximum", value: 303, si_unit: "K", note: "About 30 degrees C briefly" },
      { dimension: "length", label: "Growing season tree growth", value: 0.1, si_unit: "m", note: "Annual height growth of mature trees" },
    ],
  },

  {
    slug: "congo-rainforest",
    name: "Congo Rainforest",
    subtitle: "The second-largest tropical rainforest, in the heart of Africa",
    category_id: "forests",
    description:
      "The Congo Rainforest in central Africa is the world's second-largest tropical rainforest, covering approximately 2 million square kilometers across six countries (Democratic Republic of Congo, Republic of Congo, Cameroon, Central African Republic, Equatorial Guinea, and Gabon). It is home to over 10,000 plant species, 1,000 bird species, and 400 mammal species including forest elephants, gorillas, and bonobos. The Congo Basin absorbs roughly 1.5 billion tonnes of CO2 annually, making it critical to global climate regulation.",
    search_terms:
      "congo rainforest|central africa|tropical forest|basin|gorilla|bonobo|drc|biodiversity",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Forest area", value: 2e12, si_unit: "m2", note: "2 million square kilometers" },
      { dimension: "length", label: "East-west extent", value: 2400000, si_unit: "m", note: "Across the Congo Basin" },
      { dimension: "length", label: "Average canopy height", value: 40, si_unit: "m", note: "Dense tropical canopy" },
      { dimension: "length", label: "Tallest trees", value: 65, si_unit: "m", note: "Emergent layer giants" },
      { dimension: "temperature", label: "Average temperature", value: 298, si_unit: "K", note: "About 25 degrees C year-round" },
      { dimension: "length", label: "Annual rainfall", value: 1.8, si_unit: "m", note: "1,800 mm average" },
    ],
  },

  {
    slug: "daintree-rainforest",
    name: "Daintree Rainforest",
    subtitle: "The oldest continuously surviving tropical rainforest on Earth",
    category_id: "forests",
    description:
      "The Daintree Rainforest in Queensland, Australia, is estimated to be 180 million years old, making it the oldest continuously surviving tropical rainforest on Earth, predating the Amazon by at least 100 million years. It covers about 1,200 square kilometers and contains an extraordinary concentration of biodiversity: 30% of Australia's frog species, 65% of its bat and butterfly species, and 20% of its bird species live here. The Daintree is the only place on Earth where two World Heritage sites meet: the rainforest and the Great Barrier Reef.",
    search_terms:
      "daintree|queensland|australia|oldest rainforest|tropical|biodiversity|world heritage|ancient",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.2e9, si_unit: "m2", note: "1,200 square kilometers" },
      { dimension: "length", label: "North-south extent", value: 120000, si_unit: "m", note: "Along the coast" },
      { dimension: "length", label: "Average canopy height", value: 35, si_unit: "m", note: "Dense tropical canopy" },
      { dimension: "length", label: "Tallest trees", value: 55, si_unit: "m", note: "Emergent rainforest trees" },
      { dimension: "length", label: "Annual rainfall", value: 3, si_unit: "m", note: "3,000 mm average in lowlands" },
      { dimension: "temperature", label: "Average temperature", value: 301, si_unit: "K", note: "About 28 degrees C" },
    ],
  },

  {
    slug: "redwood-national-park",
    name: "Redwood National Park",
    subtitle: "Home to the world's tallest living trees in coastal California",
    category_id: "forests",
    description:
      "Redwood National and State Parks in northern California protect 45% of all remaining old-growth coast redwood (Sequoia sempervirens) forest, covering about 540 square kilometers. These forests contain the tallest trees on Earth; the current record holder, Hyperion, stands 115.92 m tall. Old-growth redwoods are 600-2,000 years old and create a unique ecosystem: their canopies are so high that they support aerial fern mats, soil accumulations, and even other trees growing on their branches 80 m above the ground.",
    search_terms:
      "redwood|national park|tallest trees|hyperion|sequoia sempervirens|california|old growth|coast",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Park area", value: 5.4e8, si_unit: "m2", note: "540 square kilometers combined parks" },
      { dimension: "length", label: "Tallest tree (Hyperion)", value: 115.92, si_unit: "m", note: "Tallest known living tree" },
      { dimension: "length", label: "Average old-growth height", value: 90, si_unit: "m", note: "Typical mature coast redwood" },
      { dimension: "length", label: "Largest trunk diameter", value: 7.9, si_unit: "m", note: "Near the base of the largest specimens" },
      { dimension: "length", label: "Annual rainfall", value: 2.5, si_unit: "m", note: "2,500 mm in the coastal belt" },
      { dimension: "length", label: "Fog drip contribution", value: 0.3, si_unit: "m", note: "300 mm additional moisture from fog" },
    ],
  },

  {
    slug: "sherwood-forest",
    name: "Sherwood Forest",
    subtitle: "Robin Hood's legendary woodland in Nottinghamshire, England",
    category_id: "forests",
    description:
      "Sherwood Forest in Nottinghamshire, England, is famous as the legendary home of Robin Hood and his Merry Men. Once a vast royal hunting forest covering much of Nottinghamshire (perhaps 400 square kilometers in medieval times), the designated National Nature Reserve today covers about 4.24 square kilometers. It contains over 900 veteran oak trees, including the Major Oak, estimated to be 800-1,000 years old with a canopy spread of 28 m. The forest was a royal hunting ground from the Norman Conquest until the English Civil War.",
    search_terms:
      "sherwood forest|robin hood|nottinghamshire|major oak|england|royal forest|merry men|medieval",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Current NNR area", value: 4240000, si_unit: "m2", note: "4.24 square kilometers today" },
      { dimension: "area", label: "Medieval extent", value: 4e8, si_unit: "m2", note: "About 400 km2 in the Middle Ages" },
      { dimension: "length", label: "Major Oak canopy spread", value: 28, si_unit: "m", note: "Supported by poles" },
      { dimension: "length", label: "Major Oak trunk girth", value: 10, si_unit: "m", note: "Circumference of the famous tree" },
      { dimension: "length", label: "Major Oak height", value: 23, si_unit: "m", note: "Shortened by age" },
      { dimension: "length", label: "Average oak height", value: 25, si_unit: "m", note: "Mature English oaks" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RIVERS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "yangtze-river",
    name: "Yangtze River",
    subtitle: "Asia's longest river, flowing 6,300 km through the heart of China",
    category_id: "rivers",
    description:
      "The Yangtze (Chang Jiang) is the longest river in Asia and the third-longest in the world at 6,300 km. It rises on the Qinghai-Tibet Plateau at over 5,000 m elevation and flows east through gorges, plains, and megacities to the East China Sea near Shanghai. Its basin is home to one-third of China's population (about 400 million people). The Three Gorges Dam on the Yangtze is the world's largest hydroelectric power station. The river is also home to the critically endangered Yangtze finless porpoise.",
    search_terms:
      "yangtze|chang jiang|china|longest asian river|three gorges dam|shanghai|tibet|river",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 6300000, si_unit: "m", note: "Third-longest river in the world" },
      { dimension: "area", label: "Drainage basin", value: 1.8e12, si_unit: "m2", note: "1.8 million square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 30000, si_unit: "m3", note: "Per second at the mouth" },
      { dimension: "length", label: "Source elevation", value: 5170, si_unit: "m", note: "Tanggula Mountains, Tibet" },
      { dimension: "length", label: "Maximum width", value: 2800, si_unit: "m", note: "At the river mouth near Shanghai" },
      { dimension: "length", label: "Three Gorges Dam height", value: 181, si_unit: "m", note: "World's largest hydroelectric dam" },
    ],
  },

  {
    slug: "danube-river",
    name: "Danube River",
    subtitle: "Europe's second-longest river, passing through ten countries",
    category_id: "rivers",
    description:
      "The Danube flows 2,850 km from the Black Forest in Germany to the Black Sea in Romania, passing through or bordering ten countries, more than any other river in the world. Its basin covers 801,000 square kilometers and is home to about 80 million people. The Danube passes through four capital cities (Vienna, Bratislava, Budapest, and Belgrade), more than any other river. It has inspired countless works of art and music, most famously Johann Strauss II's waltz 'The Blue Danube,' though the river is rarely actually blue.",
    search_terms:
      "danube|europe|black forest|black sea|vienna|budapest|blue danube|strauss|ten countries",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2850000, si_unit: "m", note: "Europe's second-longest river" },
      { dimension: "area", label: "Drainage basin", value: 8.01e11, si_unit: "m2", note: "801,000 square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 6500, si_unit: "m3", note: "Per second at the mouth" },
      { dimension: "length", label: "Source elevation", value: 1078, si_unit: "m", note: "Black Forest, Germany" },
      { dimension: "length", label: "Width at Budapest", value: 550, si_unit: "m", note: "Through the Hungarian capital" },
      { dimension: "area", label: "Danube Delta area", value: 4.15e9, si_unit: "m2", note: "4,150 km2 wetland at the Black Sea" },
    ],
  },

  {
    slug: "thames-river",
    name: "River Thames",
    subtitle: "England's most famous river, flowing through the heart of London",
    category_id: "rivers",
    description:
      "The Thames is the longest river entirely in England at 346 km, rising in the Cotswold Hills of Gloucestershire and flowing east through Oxford, Reading, and London to the North Sea. Although modest by global standards, the Thames has played an outsized role in history: it was the highway of Roman Londinium, the scene of Viking raids, the route of royal processions, and the artery of the world's largest city for centuries. The Thames Barrier, completed in 1984, protects London from tidal surges.",
    search_terms:
      "thames|london|england|river|tower bridge|thames barrier|oxford|tidal|estuary",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 346000, si_unit: "m", note: "Longest river entirely in England" },
      { dimension: "area", label: "Drainage basin", value: 1.28e10, si_unit: "m2", note: "12,800 square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 66, si_unit: "m3", note: "Per second at Kingston" },
      { dimension: "length", label: "Width at Tower Bridge", value: 265, si_unit: "m", note: "Through central London" },
      { dimension: "length", label: "Tidal range at London Bridge", value: 7, si_unit: "m", note: "Significant tidal influence" },
      { dimension: "length", label: "Thames Barrier width", value: 520, si_unit: "m", note: "Spanning the river at Woolwich" },
    ],
  },

  {
    slug: "rhine-river",
    name: "Rhine River",
    subtitle: "Western Europe's great commercial waterway from Alps to North Sea",
    category_id: "rivers",
    description:
      "The Rhine flows 1,230 km from the Swiss Alps to the North Sea in the Netherlands, passing through or bordering six countries (Switzerland, Liechtenstein, Austria, Germany, France, and the Netherlands). It is one of the busiest commercial waterways in the world, carrying about 300 million tonnes of cargo annually. The Middle Rhine Valley in Germany, with its castle-crowned cliffs and the legendary Lorelei rock, is a UNESCO World Heritage Site. The Rhine has been a natural border, trade route, and cultural symbol of Europe for millennia.",
    search_terms:
      "rhine|germany|netherlands|switzerland|alps|lorelei|commercial waterway|north sea|cargo",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1230000, si_unit: "m", note: "Swiss Alps to North Sea" },
      { dimension: "area", label: "Drainage basin", value: 1.85e11, si_unit: "m2", note: "185,000 square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 2300, si_unit: "m3", note: "Per second at the mouth" },
      { dimension: "length", label: "Source elevation", value: 2345, si_unit: "m", note: "Lake Toma, Swiss Alps" },
      { dimension: "length", label: "Width at Cologne", value: 350, si_unit: "m", note: "Through the major German city" },
      { dimension: "length", label: "Navigable length", value: 883000, si_unit: "m", note: "For large commercial vessels" },
    ],
  },

  {
    slug: "ganges-river",
    name: "Ganges River",
    subtitle: "India's holiest river, sustaining 400 million people",
    category_id: "rivers",
    description:
      "The Ganges (Ganga) flows 2,525 km from the Gangotri Glacier in the Himalayas to the Bay of Bengal, where it forms the world's largest river delta (with the Brahmaputra). The Ganges basin supports about 400 million people, making it the most densely populated river basin in the world. The river is sacred in Hinduism, and the city of Varanasi on its banks is one of the oldest continuously inhabited cities in the world. Ritual bathing in the Ganges is believed to wash away sins and break the cycle of reincarnation.",
    search_terms:
      "ganges|ganga|india|holy river|varanasi|himalayas|hinduism|bay of bengal|delta",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2525000, si_unit: "m", note: "Himalayas to Bay of Bengal" },
      { dimension: "area", label: "Drainage basin", value: 1.06e12, si_unit: "m2", note: "1.06 million square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 12015, si_unit: "m3", note: "Per second at the mouth" },
      { dimension: "length", label: "Source elevation", value: 3892, si_unit: "m", note: "Gangotri Glacier terminus" },
      { dimension: "length", label: "Width at Varanasi", value: 450, si_unit: "m", note: "Through the holy city" },
      { dimension: "area", label: "Delta area", value: 1.05e11, si_unit: "m2", note: "Ganges-Brahmaputra delta, largest in the world" },
    ],
  },

  {
    slug: "mekong-river",
    name: "Mekong River",
    subtitle: "Southeast Asia's lifeline flowing through six countries",
    category_id: "rivers",
    description:
      "The Mekong River flows approximately 4,350 km from the Tibetan Plateau through China, Myanmar, Laos, Thailand, Cambodia, and Vietnam. It is the 12th longest river in the world and the longest in Southeast Asia. The Mekong basin supports about 60 million people who depend on it for food, water, and transportation. The Tonle Sap system in Cambodia, connected to the Mekong, is the largest freshwater lake in Southeast Asia and reverses its flow direction seasonally, a unique hydrological phenomenon.",
    search_terms:
      "mekong|southeast asia|laos|cambodia|vietnam|thailand|tonle sap|tibetan plateau",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 4350000, si_unit: "m", note: "12th longest river in the world" },
      { dimension: "area", label: "Drainage basin", value: 7.95e11, si_unit: "m2", note: "795,000 square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 16000, si_unit: "m3", note: "Per second at the delta" },
      { dimension: "length", label: "Source elevation", value: 5224, si_unit: "m", note: "Tibetan Plateau" },
      { dimension: "length", label: "Delta extent", value: 65000, si_unit: "m", note: "Mekong Delta in Vietnam" },
      { dimension: "length", label: "Width at Phnom Penh", value: 1500, si_unit: "m", note: "Through the Cambodian capital" },
    ],
  },

  {
    slug: "colorado-river",
    name: "Colorado River",
    subtitle: "The river that carved the Grand Canyon and waters the American West",
    category_id: "rivers",
    description:
      "The Colorado River flows 2,330 km from the Rocky Mountains of Colorado through Utah, Arizona, Nevada, and California to the Gulf of California in Mexico. Over millions of years, it carved the Grand Canyon, one of the most spectacular geological features on Earth. Today, the Colorado supplies water to about 40 million people and irrigates 2.3 million hectares of farmland, making it the most litigated and regulated river in the world. Due to overuse, the river frequently runs dry before reaching the sea.",
    search_terms:
      "colorado river|grand canyon|hoover dam|glen canyon|american west|rocky mountains|water rights",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2330000, si_unit: "m", note: "Rocky Mountains to Gulf of California" },
      { dimension: "area", label: "Drainage basin", value: 6.37e11, si_unit: "m2", note: "637,000 square kilometers" },
      { dimension: "volume", label: "Average discharge (natural)", value: 620, si_unit: "m3", note: "Per second, before diversions" },
      { dimension: "length", label: "Source elevation", value: 3104, si_unit: "m", note: "La Poudre Pass, Colorado" },
      { dimension: "length", label: "Grand Canyon depth", value: 1829, si_unit: "m", note: "Maximum depth carved by the river" },
      { dimension: "length", label: "Grand Canyon length", value: 446000, si_unit: "m", note: "446 km of canyon carved by the Colorado" },
    ],
  },

  {
    slug: "zambezi-river",
    name: "Zambezi River",
    subtitle: "Africa's fourth-longest river, home to Victoria Falls",
    category_id: "rivers",
    description:
      "The Zambezi flows 2,574 km from northwestern Zambia through Angola, Namibia, Botswana, Zimbabwe, and Mozambique to the Indian Ocean. It is best known for Victoria Falls (Mosi-oa-Tunya, 'The Smoke That Thunders'), where the river plunges 108 m over a 1,708 m wide basalt lip, creating the world's largest sheet of falling water. The Zambezi basin covers 1.39 million square kilometers and supports about 40 million people. Two major dams, Kariba and Cahora Bassa, generate hydroelectric power for the region.",
    search_terms:
      "zambezi|victoria falls|africa|zambia|zimbabwe|mozambique|mosi-oa-tunya|kariba dam",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2574000, si_unit: "m", note: "Fourth-longest river in Africa" },
      { dimension: "area", label: "Drainage basin", value: 1.39e12, si_unit: "m2", note: "1.39 million square kilometers" },
      { dimension: "volume", label: "Average discharge", value: 3400, si_unit: "m3", note: "Per second at the mouth" },
      { dimension: "length", label: "Victoria Falls height", value: 108, si_unit: "m", note: "Maximum drop" },
      { dimension: "length", label: "Victoria Falls width", value: 1708, si_unit: "m", note: "Widest curtain of falling water" },
      { dimension: "length", label: "Source elevation", value: 1500, si_unit: "m", note: "Northwestern Zambia" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ISLANDS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "greenland-island",
    name: "Greenland",
    subtitle: "The world's largest island, covered by a massive ice sheet",
    category_id: "islands",
    description:
      "Greenland is the world's largest island at 2.166 million square kilometers (Australia, being a continent, doesn't count). About 80% of its surface is covered by the Greenland ice sheet, which is up to 3 km thick and contains enough ice to raise global sea levels by about 7.2 m if it all melted. Despite its vast size, Greenland has only about 56,000 inhabitants, almost all of whom live along the ice-free coast. Politically part of Denmark, it has extensive self-governance and its own parliament.",
    search_terms:
      "greenland|largest island|ice sheet|denmark|arctic|inuit|kalaallit nunaat|glacier",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 2.166e12, si_unit: "m2", note: "World's largest island" },
      { dimension: "length", label: "North-south length", value: 2670000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "East-west width", value: 1050000, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Ice sheet maximum thickness", value: 3000, si_unit: "m", note: "Central ice dome" },
      { dimension: "area", label: "Ice-free coastal area", value: 4.1e11, si_unit: "m2", note: "About 19% of total area" },
      { dimension: "length", label: "Highest point", value: 3694, si_unit: "m", note: "Gunnbjorn Fjeld" },
    ],
  },

  {
    slug: "madagascar-island",
    name: "Madagascar",
    subtitle: "The world's fourth-largest island with unparalleled biodiversity",
    category_id: "islands",
    description:
      "Madagascar, located off the southeast coast of Africa in the Indian Ocean, is the world's fourth-largest island at 587,041 square kilometers. Having separated from India about 88 million years ago, it has evolved an extraordinary level of endemic biodiversity: roughly 90% of its wildlife is found nowhere else on Earth, including all lemur species, most chameleon species, and over 10,000 endemic plant species. The island has a remarkable diversity of ecosystems, from rainforest in the east to spiny desert in the south.",
    search_terms:
      "madagascar|lemur|indian ocean|fourth largest island|endemic|biodiversity|africa|baobab",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 5.87e11, si_unit: "m2", note: "Fourth-largest island in the world" },
      { dimension: "length", label: "Length (N-S)", value: 1580000, si_unit: "m", note: "From Cap d'Ambre to Cap Sainte-Marie" },
      { dimension: "length", label: "Maximum width", value: 580000, si_unit: "m", note: "East-west extent" },
      { dimension: "length", label: "Highest point", value: 2876, si_unit: "m", note: "Maromokotro" },
      { dimension: "length", label: "Coastline length", value: 4828000, si_unit: "m", note: "Total shoreline" },
      { dimension: "length", label: "Distance from Africa", value: 400000, si_unit: "m", note: "Across the Mozambique Channel" },
    ],
  },

  {
    slug: "borneo-island",
    name: "Borneo",
    subtitle: "The world's third-largest island, shared by three nations",
    category_id: "islands",
    description:
      "Borneo is the third-largest island in the world at 743,330 square kilometers, shared by Malaysia (Sabah and Sarawak), Indonesia (Kalimantan), and Brunei. Its lowland and montane rainforests are among the oldest on Earth (estimated 130-140 million years old) and contain extraordinary biodiversity including orangutans, pygmy elephants, and the world's largest flower (Rafflesia). Mount Kinabalu at 4,095 m is the highest peak in Southeast Asia. Sadly, rapid deforestation for palm oil has destroyed much of Borneo's forest cover.",
    search_terms:
      "borneo|kalimantan|malaysia|indonesia|brunei|orangutan|rainforest|kinabalu|third largest island",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 7.43e11, si_unit: "m2", note: "Third-largest island in the world" },
      { dimension: "length", label: "North-south extent", value: 1100000, si_unit: "m", note: "Maximum length" },
      { dimension: "length", label: "East-west extent", value: 960000, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Highest point (Mt. Kinabalu)", value: 4095, si_unit: "m", note: "Highest in Southeast Asia" },
      { dimension: "length", label: "Coastline", value: 4971000, si_unit: "m", note: "Total shoreline" },
      { dimension: "area", label: "Remaining primary forest", value: 2.5e11, si_unit: "m2", note: "About 34% of original forest cover" },
    ],
  },

  {
    slug: "iceland-island",
    name: "Iceland",
    subtitle: "The volcanic island nation straddling the Mid-Atlantic Ridge",
    category_id: "islands",
    description:
      "Iceland sits on the Mid-Atlantic Ridge in the North Atlantic, making it one of the most geologically active places on Earth. The island covers 103,000 square kilometers and features active volcanoes, geysers, hot springs, lava fields, and glaciers, often in close proximity. Vatnajokull, Europe's largest glacier by volume, shares the island with over 30 active volcanic systems. About 85% of Iceland's energy comes from geothermal and hydroelectric sources, making it one of the greenest energy economies in the world.",
    search_terms:
      "iceland|volcanic|mid-atlantic ridge|geothermal|geyser|vatnajokull|reykjavik|norse|viking",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.03e11, si_unit: "m2", note: "103,000 square kilometers" },
      { dimension: "length", label: "East-west extent", value: 500000, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "North-south extent", value: 300000, si_unit: "m", note: "Maximum length" },
      { dimension: "length", label: "Highest point (Hvannadalshnukur)", value: 2110, si_unit: "m", note: "On the rim of Oraefajokull volcano" },
      { dimension: "area", label: "Glacier coverage", value: 1.1e10, si_unit: "m2", note: "About 11% of the island" },
      { dimension: "length", label: "Coastline", value: 4970000, si_unit: "m", note: "Deeply indented by fjords" },
    ],
  },

  {
    slug: "hawaii-big-island",
    name: "Hawaii (Big Island)",
    subtitle: "The youngest and largest Hawaiian island, still growing from lava",
    category_id: "islands",
    description:
      "The Island of Hawaii, known as the Big Island, is the largest of the Hawaiian islands at 10,430 square kilometers and the youngest at under 700,000 years old. It is still growing: Kilauea, one of the world's most active volcanoes, has been erupting almost continuously since 1983, and Mauna Loa is the world's largest shield volcano. Mauna Kea, measured from its base on the ocean floor, is technically taller than Mount Everest at over 10,000 m. The Big Island contains 8 of the world's 13 climate zones.",
    search_terms:
      "hawaii|big island|kilauea|mauna kea|mauna loa|volcano|pacific|hawaiian islands",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.043e10, si_unit: "m2", note: "10,430 square kilometers" },
      { dimension: "length", label: "Length (NW-SE)", value: 150000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Width", value: 120000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Mauna Kea (above sea level)", value: 4207, si_unit: "m", note: "Highest point in Hawaii" },
      { dimension: "length", label: "Mauna Kea (from ocean floor)", value: 10203, si_unit: "m", note: "Taller than Everest from base to peak" },
      { dimension: "length", label: "Coastline", value: 428000, si_unit: "m", note: "Total shoreline" },
    ],
  },

  {
    slug: "galapagos-islands",
    name: "Galapagos Islands",
    subtitle: "The Pacific archipelago that inspired Darwin's theory of evolution",
    category_id: "islands",
    description:
      "The Galapagos Islands are a volcanic archipelago of 13 major islands, 6 smaller islands, and over 100 islets straddling the equator 906 km off Ecuador's coast. Total land area is about 7,880 square kilometers. Charles Darwin's visit in 1835 on HMS Beagle and his observations of the islands' unique finches, tortoises, and iguanas were crucial in developing his theory of evolution by natural selection. The islands' isolation has produced extraordinary endemic species including the Galapagos giant tortoise, marine iguana, and flightless cormorant.",
    search_terms:
      "galapagos|darwin|evolution|ecuador|pacific|giant tortoise|marine iguana|volcanic|finch",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total land area", value: 7.88e9, si_unit: "m2", note: "7,880 square kilometers across all islands" },
      { dimension: "area", label: "Largest island (Isabela)", value: 4.59e9, si_unit: "m2", note: "4,588 square kilometers" },
      { dimension: "length", label: "Archipelago extent", value: 300000, si_unit: "m", note: "NW to SE span" },
      { dimension: "length", label: "Distance from mainland", value: 906000, si_unit: "m", note: "From Ecuador's coast" },
      { dimension: "length", label: "Highest point (Wolf Volcano)", value: 1707, si_unit: "m", note: "On Isabela island" },
      { dimension: "area", label: "Marine reserve", value: 1.38e11, si_unit: "m2", note: "138,000 km2 of protected ocean" },
    ],
  },

  {
    slug: "manhattan-island",
    name: "Manhattan Island",
    subtitle: "The 59-square-kilometer island at the center of New York City",
    category_id: "islands",
    description:
      "Manhattan is a narrow island at the confluence of the Hudson and East Rivers, serving as the economic and cultural heart of New York City. Measuring just 21.6 km long and 3.7 km at its widest, its 59 square kilometers contain Wall Street, Times Square, Central Park, and the densest urban core in the United States. About 1.6 million people live on the island, with the daytime population swelling to nearly 4 million as commuters arrive. The island was famously purchased from the Lenape people in 1626.",
    search_terms:
      "manhattan|new york|nyc|island|wall street|central park|times square|hudson river",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 5.9e7, si_unit: "m2", note: "59 square kilometers" },
      { dimension: "length", label: "Length", value: 21600, si_unit: "m", note: "North to south" },
      { dimension: "length", label: "Maximum width", value: 3700, si_unit: "m", note: "At 14th Street area" },
      { dimension: "length", label: "Circumference", value: 48000, si_unit: "m", note: "Approximate shoreline" },
      { dimension: "length", label: "Highest natural point", value: 81, si_unit: "m", note: "Bennett Park in Washington Heights" },
      { dimension: "length", label: "Street grid block length", value: 250, si_unit: "m", note: "Typical north-south block" },
    ],
  },

  {
    slug: "singapore-island",
    name: "Singapore",
    subtitle: "The city-state island at the southern tip of the Malay Peninsula",
    category_id: "islands",
    description:
      "Singapore is a city-state comprising one main island and 63 satellite islands at the southern tip of the Malay Peninsula. The main island is about 50 km east-west and 27 km north-south, covering 733 square kilometers (and growing through extensive land reclamation, which has added about 25% more area since independence in 1965). Despite its tiny size, Singapore is one of the world's most important financial centers, busiest ports, and most densely populated countries, with 5.9 million people.",
    search_terms:
      "singapore|city-state|island|malay peninsula|port|garden city|asia|land reclamation",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 7.33e8, si_unit: "m2", note: "733 square kilometers including reclaimed land" },
      { dimension: "length", label: "East-west extent", value: 50000, si_unit: "m", note: "Maximum length of main island" },
      { dimension: "length", label: "North-south extent", value: 27000, si_unit: "m", note: "Maximum width of main island" },
      { dimension: "length", label: "Highest point (Bukit Timah)", value: 163, si_unit: "m", note: "Above sea level" },
      { dimension: "length", label: "Coastline", value: 193000, si_unit: "m", note: "All islands combined" },
      { dimension: "area", label: "Reclaimed land", value: 1.5e8, si_unit: "m2", note: "About 150 km2 added since 1965" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CITIES & URBAN
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "tokyo-metro-area",
    name: "Tokyo Metropolitan Area",
    subtitle: "The world's most populous metropolitan area with 37 million residents",
    category_id: "cities",
    description:
      "The Greater Tokyo Area (Tokyo-Yokohama metropolitan area) is the most populous metropolitan area in the world, home to approximately 37.4 million people across 13,572 square kilometers. The Tokyo Metropolis proper covers 2,194 square kilometers. The area includes 23 special wards, 26 cities, and the dense urban corridor stretching through Yokohama, Kawasaki, and Saitama. Tokyo's GDP exceeds that of many countries, and its rail system handles over 40 million passenger trips per day, making it the busiest in the world.",
    search_terms:
      "tokyo|japan|metropolitan area|most populous|yokohama|shinjuku|shibuya|rail|megacity",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Metro area", value: 1.36e10, si_unit: "m2", note: "13,572 square kilometers" },
      { dimension: "area", label: "Tokyo Metropolis", value: 2.194e9, si_unit: "m2", note: "Tokyo proper, 2,194 km2" },
      { dimension: "length", label: "North-south extent", value: 90000, si_unit: "m", note: "Metro area extent" },
      { dimension: "length", label: "East-west extent", value: 80000, si_unit: "m", note: "Metro area extent" },
      { dimension: "length", label: "Tokyo Skytree height", value: 634, si_unit: "m", note: "Tallest structure in Japan" },
      { dimension: "length", label: "Rail network length", value: 2500000, si_unit: "m", note: "2,500 km of metro, commuter, and bullet train lines" },
    ],
  },

  {
    slug: "london-metro-area",
    name: "Greater London",
    subtitle: "The sprawling English capital governing 32 boroughs and the City",
    category_id: "cities",
    description:
      "Greater London covers 1,572 square kilometers along both banks of the River Thames, comprising 32 boroughs plus the City of London. With about 9 million residents, it is Europe's largest city by population within city limits. The London Underground ('the Tube') was the world's first underground railway (1863) and now covers 402 km. London's skyline ranges from the 11th-century Tower of London to the 310 m Shard, reflecting nearly 2,000 years of continuous urban development since Roman Londinium.",
    search_terms:
      "london|greater london|england|uk|thames|tube|underground|boroughs|city|capital",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Greater London area", value: 1.572e9, si_unit: "m2", note: "1,572 square kilometers" },
      { dimension: "length", label: "North-south extent", value: 40000, si_unit: "m", note: "Approximate diameter" },
      { dimension: "length", label: "East-west extent", value: 60000, si_unit: "m", note: "Including outer suburbs" },
      { dimension: "length", label: "Underground network length", value: 402000, si_unit: "m", note: "402 km of Tube lines" },
      { dimension: "length", label: "The Shard height", value: 310, si_unit: "m", note: "Tallest building in London" },
      { dimension: "length", label: "M25 orbital length", value: 188000, si_unit: "m", note: "Ring motorway around London" },
    ],
  },

  {
    slug: "paris-metro-area",
    name: "Paris (Ile-de-France)",
    subtitle: "The City of Light and its surrounding region",
    category_id: "cities",
    description:
      "The Paris metropolitan area (Ile-de-France region) covers about 12,012 square kilometers and is home to approximately 12.2 million people, making it the most populous metro area in the European Union. The city proper (Paris intra-muros) is remarkably compact at just 105 square kilometers, bounded by the Boulevard Peripherique ring road. Paris contains some of the world's most visited landmarks including the Eiffel Tower (330 m), the Louvre, Notre-Dame, and the Arc de Triomphe, drawing over 30 million international tourists annually.",
    search_terms:
      "paris|france|ile-de-france|city of light|eiffel tower|louvre|notre-dame|metro|champs-elysees",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Ile-de-France area", value: 1.2e10, si_unit: "m2", note: "12,012 square kilometers" },
      { dimension: "area", label: "City proper area", value: 1.05e8, si_unit: "m2", note: "105 km2 within the Peripherique" },
      { dimension: "length", label: "Peripherique length", value: 35000, si_unit: "m", note: "Ring road around Paris proper" },
      { dimension: "length", label: "Metro network length", value: 226000, si_unit: "m", note: "226 km, 16 lines" },
      { dimension: "length", label: "Eiffel Tower height", value: 330, si_unit: "m", note: "Including antenna" },
      { dimension: "length", label: "Champs-Elysees length", value: 1910, si_unit: "m", note: "Famous boulevard" },
    ],
  },

  {
    slug: "rome-urban-area",
    name: "Rome (Metropolitan Area)",
    subtitle: "The Eternal City, capital of modern Italy and the ancient Roman Empire",
    category_id: "cities",
    description:
      "Rome, the Eternal City, covers about 1,285 square kilometers as a municipality, making it the most extensive comune in Italy and one of the largest cities by area in Europe. The wider metropolitan area extends to about 5,352 square kilometers with a population of roughly 4.3 million. Founded traditionally in 753 BC, Rome served as the capital of an empire that controlled the entire Mediterranean world. The city contains an independent country (Vatican City, the smallest in the world at 0.44 km2) and an extraordinary concentration of ancient ruins, Renaissance churches, and Baroque fountains.",
    search_terms:
      "rome|italy|eternal city|vatican|colosseum|roman empire|tiber|pantheon|renaissance|baroque",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Municipal area", value: 1.285e9, si_unit: "m2", note: "1,285 square kilometers" },
      { dimension: "area", label: "Metro area", value: 5.352e9, si_unit: "m2", note: "5,352 square kilometers" },
      { dimension: "length", label: "Aurelian Walls circuit", value: 19000, si_unit: "m", note: "Ancient city wall perimeter" },
      { dimension: "length", label: "Metro network length", value: 60000, si_unit: "m", note: "3 lines, expanding slowly due to archaeology" },
      { dimension: "area", label: "Vatican City area", value: 440000, si_unit: "m2", note: "Independent state within Rome" },
      { dimension: "length", label: "Tiber width through Rome", value: 100, si_unit: "m", note: "Average width through the city center" },
    ],
  },

  {
    slug: "dubai-urban-area",
    name: "Dubai",
    subtitle: "The desert city reinvented as a global hub of commerce and spectacle",
    category_id: "cities",
    description:
      "Dubai, one of seven emirates of the UAE, covers about 4,114 square kilometers, though the built-up urban area is a fraction of that. The city has transformed from a modest trading port into one of the world's most ambitious urban experiments, featuring the Burj Khalifa (828 m, the world's tallest building), artificial islands shaped like palm trees, an indoor ski slope, and the world's largest shopping mall. Dubai's population has grown from about 183,000 in 1975 to over 3.5 million, with roughly 85% of residents being expatriates.",
    search_terms:
      "dubai|uae|emirates|burj khalifa|palm islands|desert city|skyscraper|arabian gulf",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Emirate area", value: 4.114e9, si_unit: "m2", note: "4,114 square kilometers total" },
      { dimension: "area", label: "Urban built-up area", value: 1.5e9, si_unit: "m2", note: "Approximately 1,500 km2" },
      { dimension: "length", label: "Burj Khalifa height", value: 828, si_unit: "m", note: "World's tallest building" },
      { dimension: "length", label: "Coastline", value: 72000, si_unit: "m", note: "Including artificial islands" },
      { dimension: "length", label: "Metro network length", value: 90000, si_unit: "m", note: "90 km driverless metro" },
      { dimension: "length", label: "Palm Jumeirah diameter", value: 5000, si_unit: "m", note: "Artificial palm-shaped island" },
    ],
  },

  {
    slug: "mumbai-metro-area",
    name: "Mumbai Metropolitan Area",
    subtitle: "India's financial capital on a narrow peninsula and reclaimed land",
    category_id: "cities",
    description:
      "The Mumbai Metropolitan Region covers about 6,328 square kilometers and is home to roughly 23 million people, making it one of the most densely populated urban areas on Earth. Mumbai city proper occupies a narrow peninsula of just 603 square kilometers, much of it reclaimed from the sea over centuries (the original settlement was seven separate islands). Mumbai is India's financial capital, producing about 6% of the country's GDP, and is the center of Bollywood, the world's largest film industry by number of films produced annually.",
    search_terms:
      "mumbai|bombay|india|bollywood|financial capital|peninsula|dharavi|gateway of india|marine drive",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Metro region area", value: 6.328e9, si_unit: "m2", note: "6,328 square kilometers" },
      { dimension: "area", label: "City proper area", value: 6.03e8, si_unit: "m2", note: "603 square kilometers" },
      { dimension: "length", label: "Peninsula length", value: 60000, si_unit: "m", note: "North to south" },
      { dimension: "length", label: "Maximum width", value: 15000, si_unit: "m", note: "Narrow coastal city" },
      { dimension: "length", label: "Suburban rail network", value: 465000, si_unit: "m", note: "465 km, carrying 7.5 million daily riders" },
      { dimension: "length", label: "Bandra-Worli Sea Link", value: 5600, si_unit: "m", note: "Cable-stayed bridge across Mahim Bay" },
    ],
  },

  {
    slug: "sydney-metro-area",
    name: "Sydney Metropolitan Area",
    subtitle: "Australia's largest city, spread around one of the world's great harbours",
    category_id: "cities",
    description:
      "The Sydney metropolitan area covers about 12,368 square kilometers, making it one of the most sprawling cities in the world by area despite having a population of about 5.3 million. The city is built around Sydney Harbour (Port Jackson), one of the largest natural harbours on Earth, spanned by the iconic Sydney Harbour Bridge (1,149 m long). Sydney's urban area stretches about 70 km from east to west and 60 km north to south, bounded by the Blue Mountains to the west and the Pacific Ocean to the east.",
    search_terms:
      "sydney|australia|harbour bridge|opera house|port jackson|bondi|pacific|new south wales",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Metro area", value: 1.24e10, si_unit: "m2", note: "12,368 square kilometers" },
      { dimension: "length", label: "East-west extent", value: 70000, si_unit: "m", note: "Coast to Blue Mountains" },
      { dimension: "length", label: "North-south extent", value: 60000, si_unit: "m", note: "Urban spread" },
      { dimension: "length", label: "Harbour Bridge length", value: 1149, si_unit: "m", note: "Including approach spans" },
      { dimension: "length", label: "Harbour Bridge arch span", value: 503, si_unit: "m", note: "Main steel arch" },
      { dimension: "area", label: "Sydney Harbour area", value: 5.5e7, si_unit: "m2", note: "55 square kilometers of waterway" },
    ],
  },

  {
    slug: "mexico-city-metro",
    name: "Mexico City Metropolitan Area",
    subtitle: "One of the Western Hemisphere's largest cities, built on a drained lakebed",
    category_id: "cities",
    description:
      "The Mexico City metropolitan area (Zona Metropolitana del Valle de Mexico) is home to approximately 21.8 million people across 7,866 square kilometers, making it the largest metropolitan area in the Western Hemisphere. The city was originally built by the Aztecs as Tenochtitlan on an island in Lake Texcoco in 1325. After the Spanish conquest, the lake was gradually drained, and the city expanded onto the soft lakebed sediments, which cause it to sink at about 50 cm per year in some areas, making many buildings visibly tilted.",
    search_terms:
      "mexico city|cdmx|tenochtitlan|aztec|lake texcoco|sinking city|zocalo|chapultepec",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Metro area", value: 7.866e9, si_unit: "m2", note: "7,866 square kilometers" },
      { dimension: "area", label: "Federal District", value: 1.485e9, si_unit: "m2", note: "1,485 square kilometers" },
      { dimension: "length", label: "Metro network length", value: 226000, si_unit: "m", note: "226 km, 12 lines" },
      { dimension: "length", label: "Elevation", value: 2240, si_unit: "m", note: "Above sea level in the Valley of Mexico" },
      { dimension: "length", label: "Subsidence rate", value: 0.5, si_unit: "m", note: "Sinking per year in worst areas" },
      { dimension: "length", label: "Zocalo side length", value: 240, si_unit: "m", note: "One of the world's largest public squares" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPORTS (additional)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "tennis-racket",
    name: "Tennis Racket",
    subtitle: "The strung frame used to wallop felt-covered rubber balls",
    category_id: "sports",
    description:
      "A modern tennis racket is typically 68.5-73.7 cm (27-29 inches) long, with a head size of 580-710 square centimeters. The frame is usually made of graphite composite and weighs 255-340 grams unstrung. ITF rules limit the overall length to 73.7 cm and width to 31.7 cm. The string bed consists of 16-18 main strings and 18-20 cross strings, strung at 20-30 kg of tension. Early rackets were wooden with smaller heads; modern materials and larger head sizes have transformed the sport's power and spin.",
    search_terms:
      "tennis racket|racquet|strings|graphite|head size|itf|wimbledon|court",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 0.686, si_unit: "m", note: "Standard 27-inch racket" },
      { dimension: "length", label: "Head width", value: 0.267, si_unit: "m", note: "Mid-plus head size" },
      { dimension: "length", label: "Head length", value: 0.33, si_unit: "m", note: "Oval string bed" },
      { dimension: "mass", label: "Mass (strung)", value: 0.31, si_unit: "kg", note: "Typical intermediate frame" },
      { dimension: "area", label: "String bed area", value: 0.065, si_unit: "m2", note: "About 650 cm2" },
      { dimension: "length", label: "Grip circumference", value: 0.108, si_unit: "m", note: "Size 3 (4 3/8 inches)" },
    ],
  },

  {
    slug: "baseball-bat",
    name: "Baseball Bat",
    subtitle: "The smooth round stick at the heart of America's pastime",
    category_id: "sports",
    description:
      "A Major League Baseball bat is made from a single piece of solid wood (typically northern white ash or maple) and must not exceed 1.067 m (42 inches) in length or 7.0 cm (2.75 inches) in diameter at its thickest point. Most MLB bats are 0.84-0.86 m long and weigh 0.85-0.94 kg. The bat's 'sweet spot,' where maximum energy transfer occurs, is located about 12-17 cm from the end of the barrel. Each MLB player goes through an average of 100 bats per season.",
    search_terms:
      "baseball bat|mlb|lumber|ash|maple|slugger|barrel|sweet spot|home run",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.86, si_unit: "m", note: "Standard 34-inch MLB bat" },
      { dimension: "length", label: "Barrel diameter", value: 0.067, si_unit: "m", note: "Maximum 2.75 inches per rules" },
      { dimension: "length", label: "Handle diameter", value: 0.025, si_unit: "m", note: "Tapered grip area" },
      { dimension: "mass", label: "Mass", value: 0.88, si_unit: "kg", note: "Typical MLB game bat" },
      { dimension: "length", label: "Knob diameter", value: 0.04, si_unit: "m", note: "End cap at base of handle" },
      { dimension: "length", label: "Sweet spot from tip", value: 0.15, si_unit: "m", note: "Optimal contact zone" },
    ],
  },

  {
    slug: "hockey-puck",
    name: "Ice Hockey Puck",
    subtitle: "The frozen rubber disc that moves at up to 170 km/h",
    category_id: "sports",
    description:
      "An official NHL hockey puck is a vulcanized rubber disc, 7.62 cm in diameter, 2.54 cm thick, and weighing between 156 and 170 grams. Pucks are frozen before games to reduce bouncing on the ice. During play, pucks can reach speeds of 170+ km/h on slap shots; Zdeno Chara's 2012 All-Star Skills Competition shot clocked 175.1 km/h. Roughly 40-50 pucks are used per NHL game, as they frequently leave the rink or become too warm from friction to slide properly.",
    search_terms:
      "hockey puck|nhl|ice hockey|rubber disc|frozen|slap shot|vulcanized",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.0762, si_unit: "m", note: "3 inches, official NHL specification" },
      { dimension: "length", label: "Thickness", value: 0.0254, si_unit: "m", note: "1 inch" },
      { dimension: "mass", label: "Mass", value: 0.163, si_unit: "kg", note: "Between 156-170 grams" },
      { dimension: "area", label: "Face area", value: 0.00456, si_unit: "m2", note: "Circular flat face" },
      { dimension: "speed", label: "Record slap shot speed", value: 48.6, si_unit: "m/s", note: "175.1 km/h by Zdeno Chara" },
    ],
  },

  {
    slug: "surfboard-shortboard",
    name: "Surfboard (Shortboard)",
    subtitle: "The high-performance wave-riding plank for turns and tricks",
    category_id: "sports",
    description:
      "A shortboard surfboard, the standard high-performance board used in competitive surfing, is typically 1.7-1.9 m (5'7\" to 6'4\") long, about 47 cm wide, and 6 cm thick. Made from a polyurethane or EPS foam core wrapped in fiberglass and resin, it weighs 2.5-3.5 kg. The board features a pointed nose, a three-fin (thruster) setup, and a rocker (lengthwise curve) designed for speed, sharp turns, and aerial maneuvers on the wave face. Surfing became an Olympic sport at Tokyo 2020.",
    search_terms:
      "surfboard|shortboard|surfing|thruster|wave|fiberglass|fins|shred|ocean|competition",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1.83, si_unit: "m", note: "Standard 6'0\" shortboard" },
      { dimension: "length", label: "Width", value: 0.47, si_unit: "m", note: "At widest point" },
      { dimension: "length", label: "Thickness", value: 0.06, si_unit: "m", note: "Center stringer area" },
      { dimension: "mass", label: "Mass", value: 3.0, si_unit: "kg", note: "Typical fiberglass construction" },
      { dimension: "length", label: "Fin height", value: 0.115, si_unit: "m", note: "Center fin of thruster setup" },
      { dimension: "volume", label: "Board volume", value: 0.028, si_unit: "m3", note: "About 28 liters, determines floatation" },
    ],
  },

  {
    slug: "olympic-gold-medal",
    name: "Olympic Gold Medal",
    subtitle: "The most coveted prize in international sport",
    category_id: "sports",
    description:
      "Olympic gold medals haven't been made of solid gold since 1912. Modern Olympic gold medals are actually sterling silver (92.5% silver) plated with at least 6 grams of gold. For the Paris 2024 Games, the medals weighed about 529 grams, were 85 mm in diameter and 9.2 mm thick, and uniquely incorporated a hexagonal piece of iron from the original Eiffel Tower. The design varies for each Games, but the IOC sets minimum specifications: at least 60 mm diameter, at least 3 mm thick, and the required gold plating.",
    search_terms:
      "olympic medal|gold medal|olympics|ioc|silver plated|paris 2024|podium|champion",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.085, si_unit: "m", note: "Paris 2024 specification" },
      { dimension: "length", label: "Thickness", value: 0.0092, si_unit: "m", note: "Including relief design" },
      { dimension: "mass", label: "Total mass", value: 0.529, si_unit: "kg", note: "Paris 2024 gold medal" },
      { dimension: "mass", label: "Gold content", value: 0.006, si_unit: "kg", note: "Minimum 6 grams of gold plating" },
      { dimension: "area", label: "Face area", value: 0.00567, si_unit: "m2", note: "Circular medal face" },
      { dimension: "length", label: "Ribbon length", value: 0.55, si_unit: "m", note: "Neck ribbon" },
    ],
  },

  {
    slug: "boxing-ring",
    name: "Boxing Ring",
    subtitle: "The raised square platform where fighters meet",
    category_id: "sports",
    description:
      "A professional boxing ring is actually a square, not a ring, with inside rope dimensions of 4.9-6.1 m (16-20 feet) per side. The raised platform is typically 0.91-1.22 m above the floor, with four corner posts and three or four rows of ropes. The ring floor is padded with about 2.5 cm of felt or rubber beneath a canvas surface. The term 'ring' dates back to early bare-knuckle boxing when spectators formed a circle around the fighters. Modern professional title fights typically use a 6.1 m (20-foot) ring.",
    search_terms:
      "boxing ring|fight|canvas|ropes|corner|heavyweight|squared circle|boxing match",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Side length (inside ropes)", value: 6.1, si_unit: "m", note: "Professional 20-foot ring" },
      { dimension: "area", label: "Fighting area", value: 37.2, si_unit: "m2", note: "Inside the ropes" },
      { dimension: "length", label: "Platform height", value: 1.07, si_unit: "m", note: "Above arena floor" },
      { dimension: "length", label: "Corner post height", value: 1.52, si_unit: "m", note: "Above the ring floor" },
      { dimension: "length", label: "Rope spacing", value: 0.3, si_unit: "m", note: "Between each of four ropes" },
      { dimension: "length", label: "Padding thickness", value: 0.025, si_unit: "m", note: "Under the canvas" },
    ],
  },

  {
    slug: "wrestling-mat",
    name: "Wrestling Mat",
    subtitle: "The circular competition surface for Olympic-style wrestling",
    category_id: "sports",
    description:
      "An Olympic wrestling mat is a 12 m by 12 m square padded surface with a circular competition area of 9 m diameter at its center. Within this circle, a central wrestling area of 7 m diameter is marked, with a 1 m red 'passivity zone' around it. The mat is made of high-density foam typically 5-7 cm thick, covered with a vinyl surface. The surrounding protection area prevents injuries when wrestlers are pushed near the edge. Both freestyle and Greco-Roman wrestling use the same mat specifications.",
    search_terms:
      "wrestling mat|olympic wrestling|freestyle|greco-roman|competition mat|grappling|mat surface",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Mat side length", value: 12, si_unit: "m", note: "Square total mat" },
      { dimension: "area", label: "Total mat area", value: 144, si_unit: "m2", note: "12 m x 12 m" },
      { dimension: "length", label: "Competition circle diameter", value: 9, si_unit: "m", note: "Active wrestling area" },
      { dimension: "length", label: "Central area diameter", value: 7, si_unit: "m", note: "Inside the passivity zone" },
      { dimension: "length", label: "Mat thickness", value: 0.06, si_unit: "m", note: "High-density foam padding" },
      { dimension: "length", label: "Passivity zone width", value: 1, si_unit: "m", note: "Red warning band" },
    ],
  },

  {
    slug: "volleyball-court",
    name: "Volleyball Court",
    subtitle: "The divided rectangular court for the six-a-side team sport",
    category_id: "sports",
    description:
      "A regulation indoor volleyball court is 18 m long and 9 m wide, divided into two equal halves by a net. The net height is 2.43 m for men and 2.24 m for women. A free zone of at least 3 m (5 m in FIVB World Championship play) surrounds the court on all sides. The attack line is drawn 3 m from the center line on each side. The sport was invented in 1895 by William G. Morgan in Holyoke, Massachusetts, as a less-strenuous alternative to basketball.",
    search_terms:
      "volleyball court|fivb|net|indoor volleyball|spike|serve|team sport|morgan",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Court length", value: 18, si_unit: "m", note: "Sideline to sideline" },
      { dimension: "length", label: "Court width", value: 9, si_unit: "m", note: "Baseline to baseline" },
      { dimension: "area", label: "Court area", value: 162, si_unit: "m2", note: "Playing surface" },
      { dimension: "length", label: "Net height (men)", value: 2.43, si_unit: "m", note: "Top of the net" },
      { dimension: "length", label: "Net height (women)", value: 2.24, si_unit: "m", note: "Top of the net" },
      { dimension: "length", label: "Attack line distance", value: 3, si_unit: "m", note: "From center line on each side" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE NATURE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "typical-coral-reef",
    name: "Coral Reef (Typical)",
    subtitle: "The living limestone structures that support 25% of marine life",
    category_id: "nature",
    description:
      "Coral reefs are massive underwater structures built by colonies of tiny coral polyps that secrete calcium carbonate skeletons. A typical reef system covers a few square kilometers, rises 10-30 m from the seabed, and grows at a rate of 1-3 cm per year. Despite covering less than 0.1% of the ocean floor, coral reefs support about 25% of all marine species. They take thousands of years to form, with some reef systems being over 10,000 years old. The Great Barrier Reef is the largest at over 344,000 km2.",
    search_terms:
      "coral reef|marine|polyp|calcium carbonate|tropical|ocean|biodiversity|bleaching",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Typical reef area", value: 5000000, si_unit: "m2", note: "5 km2 for a mid-sized reef system" },
      { dimension: "length", label: "Typical height", value: 20, si_unit: "m", note: "Rise above seabed" },
      { dimension: "length", label: "Growth rate", value: 0.02, si_unit: "m", note: "About 2 cm per year" },
      { dimension: "length", label: "Polyp diameter", value: 0.003, si_unit: "m", note: "Individual coral polyp" },
      { dimension: "length", label: "Typical depth range", value: 30, si_unit: "m", note: "Sunlit zone requirement" },
      { dimension: "temperature", label: "Optimal water temperature", value: 299, si_unit: "K", note: "About 26 degrees C" },
    ],
  },

  {
    slug: "typical-glacier",
    name: "Glacier (Typical Valley)",
    subtitle: "A slow-moving river of ice carved into mountain valleys",
    category_id: "nature",
    description:
      "A typical valley glacier (also called an alpine glacier) is a river of compacted ice flowing down a mountain valley under its own weight. A mid-sized valley glacier might be 10-30 km long, 0.5-2 km wide, and 100-300 m thick. Glaciers form when annual snowfall exceeds melting over many years, compressing snow into glacial ice. They move at about 0.1-2 m per day through a combination of internal deformation and basal sliding. Valley glaciers worldwide are retreating at accelerating rates due to climate change.",
    search_terms:
      "glacier|valley glacier|alpine|ice river|moraine|crevasse|retreat|climate change|ice",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical length", value: 15000, si_unit: "m", note: "Mid-sized valley glacier" },
      { dimension: "length", label: "Typical width", value: 1000, si_unit: "m", note: "In the main valley" },
      { dimension: "length", label: "Typical thickness", value: 200, si_unit: "m", note: "Average ice depth" },
      { dimension: "area", label: "Surface area", value: 15000000, si_unit: "m2", note: "15 km2" },
      { dimension: "speed", label: "Flow speed", value: 0.00001, si_unit: "m/s", note: "About 1 m per day" },
      { dimension: "temperature", label: "Ice temperature (core)", value: 273, si_unit: "K", note: "At the pressure melting point" },
    ],
  },

  {
    slug: "typical-iceberg",
    name: "Iceberg (Typical)",
    subtitle: "A massive chunk of freshwater ice floating in the ocean",
    category_id: "nature",
    description:
      "A typical large iceberg is roughly 100-200 m long at the waterline, 50-100 m wide, and extends 70-100 m above the surface. Since ice is less dense than seawater, about 90% of an iceberg's mass lies below the waterline (the origin of the phrase 'tip of the iceberg'). A large iceberg might weigh 10-20 million tonnes. Icebergs calve from glaciers and ice shelves; the largest ever recorded (B-15, from the Ross Ice Shelf in 2000) was 295 km long and 37 km wide, larger than Jamaica.",
    search_terms:
      "iceberg|floating ice|calving|freshwater|titanic|arctic|antarctic|tip of the iceberg",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (above water)", value: 150, si_unit: "m", note: "Typical large iceberg" },
      { dimension: "length", label: "Width", value: 75, si_unit: "m", note: "Above the waterline" },
      { dimension: "length", label: "Height above water", value: 80, si_unit: "m", note: "Freeboard" },
      { dimension: "length", label: "Draft (below water)", value: 200, si_unit: "m", note: "About 90% is submerged" },
      { dimension: "mass", label: "Mass", value: 1.5e10, si_unit: "kg", note: "15 million tonnes typical" },
      { dimension: "temperature", label: "Core temperature", value: 258, si_unit: "K", note: "About -15 degrees C" },
    ],
  },

  {
    slug: "sargasso-sea",
    name: "Sargasso Sea",
    subtitle: "The only sea defined by ocean currents rather than coastlines",
    category_id: "ocean",
    description:
      "The Sargasso Sea is unique among Earth's seas: it has no land boundaries, instead being defined by four ocean currents that form the North Atlantic subtropical gyre. Covering about 3.1 million square kilometers in the western North Atlantic, it is named for the floating Sargassum seaweed that accumulates on its surface. The sea is remarkably clear (visibility up to 60 m) and calm, and serves as the spawning ground for both European and American eels, which make epic migrations to breed here. The Bermuda Triangle overlaps its western edge.",
    search_terms:
      "sargasso sea|sargassum|atlantic|gyre|bermuda triangle|eel|seaweed|currents|calm",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Approximate area", value: 3.1e12, si_unit: "m2", note: "3.1 million km2, varies with currents" },
      { dimension: "length", label: "East-west extent", value: 3200000, si_unit: "m", note: "Approximate width" },
      { dimension: "length", label: "North-south extent", value: 1100000, si_unit: "m", note: "Approximate height" },
      { dimension: "length", label: "Average depth", value: 4500, si_unit: "m", note: "Deep open ocean" },
      { dimension: "length", label: "Water clarity (visibility)", value: 60, si_unit: "m", note: "Exceptionally clear water" },
      { dimension: "temperature", label: "Surface temperature", value: 297, si_unit: "K", note: "About 24 degrees C" },
    ],
  },

  {
    slug: "tornado-alley-area",
    name: "Tornado Alley",
    subtitle: "The broad swath of the US Great Plains most prone to tornadoes",
    category_id: "nature",
    description:
      "Tornado Alley is an informal term for the region of the central United States with the highest frequency of tornadoes, stretching roughly from central Texas through Oklahoma, Kansas, Nebraska, and into South Dakota. The area covers approximately 1.3 million square kilometers. The US experiences about 1,200 tornadoes per year on average, more than any other country, with Tornado Alley accounting for a disproportionate share. The convergence of warm, moist Gulf air with cold, dry Canadian air and dry air from the Rockies creates ideal conditions for severe thunderstorms and tornadic supercells.",
    search_terms:
      "tornado alley|great plains|tornado|twister|oklahoma|kansas|texas|supercell|severe weather",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Approximate area", value: 1.3e12, si_unit: "m2", note: "1.3 million km2 loosely defined" },
      { dimension: "length", label: "North-south extent", value: 1500000, si_unit: "m", note: "Texas to South Dakota" },
      { dimension: "length", label: "East-west extent", value: 800000, si_unit: "m", note: "Central Great Plains width" },
      { dimension: "length", label: "Average tornado path length", value: 8000, si_unit: "m", note: "Typical tornado track" },
      { dimension: "length", label: "Average tornado width", value: 150, si_unit: "m", note: "Typical damage path" },
      { dimension: "speed", label: "EF5 tornado wind speed", value: 89, si_unit: "m/s", note: "Over 320 km/h for the strongest tornadoes" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL POP CULTURE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "x-wing-starfighter",
    name: "X-wing Starfighter (T-65B)",
    subtitle: "The Rebel Alliance's iconic four-winged space superiority fighter",
    category_id: "pop-culture",
    description:
      "The T-65B X-wing starfighter is the primary fighter of the Rebel Alliance in Star Wars. According to official Star Wars technical manuals, the X-wing is 12.5 m long, 11.76 m wide with S-foils in attack position, and has a mass of about 10 tonnes fully loaded. The ship is armed with four laser cannons and two proton torpedo launchers, and carries an astromech droid (such as R2-D2) for in-flight repairs and navigation. It was the fighter that Luke Skywalker used to destroy the first Death Star.",
    search_terms:
      "x-wing|star wars|rebel alliance|luke skywalker|t-65b|starfighter|s-foils|death star run",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 12.5, si_unit: "m", note: "Nose to engine nozzles" },
      { dimension: "length", label: "Wingspan (attack)", value: 11.76, si_unit: "m", note: "S-foils in attack position" },
      { dimension: "length", label: "Height", value: 2.4, si_unit: "m", note: "Landing gear to canopy" },
      { dimension: "mass", label: "Loaded mass", value: 10000, si_unit: "kg", note: "Fully fueled with ordnance" },
      { dimension: "length", label: "Cockpit length", value: 2.0, si_unit: "m", note: "Single-seat fighter cockpit" },
      { dimension: "length", label: "Engine nozzle diameter", value: 1.2, si_unit: "m", note: "Four fusial thrust engines" },
    ],
  },

  {
    slug: "the-enterprise-d",
    name: "USS Enterprise NCC-1701-D",
    subtitle: "The Galaxy-class flagship from Star Trek: The Next Generation",
    category_id: "pop-culture",
    description:
      "The Enterprise-D from Star Trek: The Next Generation is a Galaxy-class starship, significantly larger than Kirk's original Constitution-class vessel. According to Star Trek technical manuals, the ship is 641 m long, 467 m wide, and 137 m tall. It carries a crew of over 1,000 plus civilians and families (a first for Starfleet), has 42 decks, and can separate its saucer section from the engineering hull. The ship served as Captain Jean-Luc Picard's command from 2364 to 2371.",
    search_terms:
      "enterprise-d|star trek|tng|next generation|picard|galaxy class|ncc-1701-d|starfleet",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 641, si_unit: "m", note: "Galaxy-class specification" },
      { dimension: "length", label: "Width", value: 467, si_unit: "m", note: "Saucer section beam" },
      { dimension: "length", label: "Height", value: 137, si_unit: "m", note: "Keel to top of bridge" },
      { dimension: "length", label: "Saucer diameter", value: 372, si_unit: "m", note: "Separable saucer section" },
      { dimension: "mass", label: "Mass", value: 4.5e9, si_unit: "kg", note: "4.5 million metric tonnes" },
      { dimension: "length", label: "Main shuttle bay length", value: 80, si_unit: "m", note: "Aft shuttlebay" },
    ],
  },

  {
    slug: "minecraft-block",
    name: "Minecraft Block",
    subtitle: "The cubic meter building unit of the world's best-selling game",
    category_id: "pop-culture",
    description:
      "In Minecraft, the fundamental unit of the world is a cube measuring exactly 1 m on each side. The game world stretches 60 million meters in each horizontal direction and 384 blocks vertically (from Y=-64 to Y=320 in Java Edition). Each block type has a distinct texture on its six faces. Despite being simple cubes, Minecraft blocks have been used to create astonishingly complex structures, from scale replicas of real cities to functioning computers, all within the game's procedurally generated worlds.",
    search_terms:
      "minecraft|block|cube|voxel|sandbox|mojang|steve|building|pixel|survival",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Side length", value: 1.0, si_unit: "m", note: "Exact cube, 1 m on each side" },
      { dimension: "volume", label: "Volume", value: 1.0, si_unit: "m3", note: "One cubic meter" },
      { dimension: "area", label: "Face area", value: 1.0, si_unit: "m2", note: "Each of six faces" },
      { dimension: "area", label: "Surface area", value: 6.0, si_unit: "m2", note: "Total for all six faces" },
      { dimension: "length", label: "Texture resolution", value: 0.0625, si_unit: "m", note: "Each pixel is 6.25 cm on a 16x16 texture" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL HISTORY
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "viking-knarr",
    name: "Viking Knarr (Cargo Ship)",
    subtitle: "The sturdy Norse cargo vessel that crossed the Atlantic",
    category_id: "history",
    description:
      "The knarr was the Norse cargo ship that made Viking expansion across the North Atlantic possible, carrying settlers, livestock, and supplies to Iceland, Greenland, and briefly North America around 1000 AD. Unlike the sleek longship designed for raiding, the knarr was broader and deeper, optimized for cargo capacity. A typical knarr was about 16 m long, 5 m wide, and could carry 24 tonnes of cargo. The Skuldelev 1 wreck, excavated from Roskilde Fjord in Denmark, is one of the best-preserved examples.",
    search_terms:
      "knarr|viking cargo|norse|atlantic crossing|skuldelev|cargo ship|merchant|greenland|iceland",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 16, si_unit: "m", note: "Based on Skuldelev 1 reconstruction" },
      { dimension: "length", label: "Beam", value: 5, si_unit: "m", note: "Maximum width" },
      { dimension: "length", label: "Draft", value: 1.3, si_unit: "m", note: "Laden depth below waterline" },
      { dimension: "mass", label: "Cargo capacity", value: 24000, si_unit: "kg", note: "About 24 tonnes" },
      { dimension: "length", label: "Mast height", value: 10, si_unit: "m", note: "Single square-rigged mast" },
      { dimension: "area", label: "Sail area", value: 90, si_unit: "m2", note: "Wool or linen square sail" },
    ],
  },

  {
    slug: "war-elephant-armor",
    name: "War Elephant (Armored)",
    subtitle: "The ancient world's living tank, from Carthage to Mughal India",
    category_id: "history",
    description:
      "Armored war elephants were used across Asia, the Middle East, and North Africa from antiquity through the 18th century. A large Asian elephant in full battle armor stood about 3 m at the shoulder, measured 6 m in length, and weighed up to 6,000 kg including armor and howdah (fighting platform). The armor consisted of iron or leather plates protecting the head, trunk, and flanks. Hannibal's crossing of the Alps with 37 war elephants in 218 BC remains one of military history's most legendary feats.",
    search_terms:
      "war elephant|hannibal|armor|howdah|carthage|mughal|battle|ancient warfare|cavalry",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Shoulder height", value: 3.0, si_unit: "m", note: "Large Asian bull elephant" },
      { dimension: "length", label: "Body length", value: 6.0, si_unit: "m", note: "Head to tail" },
      { dimension: "mass", label: "Total mass (armored)", value: 6000, si_unit: "kg", note: "Elephant plus armor and howdah" },
      { dimension: "mass", label: "Armor mass", value: 150, si_unit: "kg", note: "Iron plate and leather armor" },
      { dimension: "length", label: "Howdah height", value: 1.5, si_unit: "m", note: "Fighting platform on back" },
      { dimension: "length", label: "Tusk length", value: 1.5, si_unit: "m", note: "Often fitted with metal tips" },
    ],
  },

  {
    slug: "pharos-lighthouse",
    name: "Pharos Lighthouse of Alexandria",
    subtitle: "One of the Seven Wonders of the Ancient World, guiding ships for 1,500 years",
    category_id: "history",
    description:
      "The Lighthouse of Alexandria (Pharos) was built between 280 and 247 BC on Pharos island in the harbor of Alexandria, Egypt. Ancient sources describe it as approximately 100-130 m tall (estimates vary), making it one of the tallest structures in the ancient world. The lighthouse had three stages: a square base, an octagonal middle section, and a cylindrical top housing the fire and mirror system that could be seen from 47 km away. It stood for roughly 1,500 years before being progressively destroyed by earthquakes between 956 and 1323 AD.",
    search_terms:
      "pharos|lighthouse|alexandria|seven wonders|ancient world|egypt|ptolemy|harbor|beacon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Estimated height", value: 120, si_unit: "m", note: "Best scholarly estimate" },
      { dimension: "length", label: "Base side length", value: 30, si_unit: "m", note: "Square base stage" },
      { dimension: "length", label: "Base height", value: 60, si_unit: "m", note: "First (square) stage" },
      { dimension: "length", label: "Octagonal stage height", value: 30, si_unit: "m", note: "Second (octagonal) stage" },
      { dimension: "length", label: "Light visibility range", value: 47000, si_unit: "m", note: "Visible from 47 km at sea" },
      { dimension: "mass", label: "Estimated stone mass", value: 30000000, si_unit: "kg", note: "Limestone and granite blocks" },
    ],
  },

  {
    slug: "chinese-junk-ship",
    name: "Chinese Junk (Treasure Ship)",
    subtitle: "The massive vessels of Zheng He's 15th-century fleet",
    category_id: "history",
    description:
      "The treasure ships (baochuan) of Admiral Zheng He's fleet (1405-1433) were among the largest wooden vessels ever built. While exact dimensions are debated, Chinese records describe the largest ships as approximately 120 m long and 50 m wide with nine masts, though many historians consider these exaggerated and estimate more conservative dimensions of 60-75 m. Even at the smaller estimates, these ships dwarfed anything in contemporary European navies. Zheng He's fleet of 300+ ships explored Southeast Asia, India, the Persian Gulf, and East Africa decades before European voyages of exploration.",
    search_terms:
      "chinese junk|zheng he|treasure ship|baochuan|ming dynasty|fleet|exploration|maritime",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (conservative)", value: 70, si_unit: "m", note: "Scholarly conservative estimate" },
      { dimension: "length", label: "Beam", value: 28, si_unit: "m", note: "Conservative estimate width" },
      { dimension: "mass", label: "Displacement", value: 1500000, si_unit: "kg", note: "Approximately 1,500 tonnes" },
      { dimension: "length", label: "Mainmast height", value: 27, si_unit: "m", note: "Tallest of nine masts" },
      { dimension: "area", label: "Total sail area", value: 2000, si_unit: "m2", note: "Battened junk rig sails" },
      { dimension: "length", label: "Rudder height", value: 11, si_unit: "m", note: "Massive stern rudder" },
    ],
  },

  {
    slug: "musket-brown-bess",
    name: "Brown Bess Musket",
    subtitle: "The British flintlock musket that dominated 18th-century warfare",
    category_id: "history",
    description:
      "The Land Pattern Musket, nicknamed 'Brown Bess,' was the standard British military musket from 1722 to 1838, serving through the Seven Years' War, American Revolution, and Napoleonic Wars. The Long Land Pattern version was 1.59 m long with a 1.17 m barrel firing a 19 mm (.75 caliber) lead ball. The musket weighed about 4.7 kg and had an effective range of only about 75 m due to its smoothbore barrel. A trained soldier could fire 3-4 rounds per minute. Over 4 million were produced.",
    search_terms:
      "brown bess|musket|flintlock|british army|redcoat|smoothbore|revolutionary war|napoleonic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 1.59, si_unit: "m", note: "Long Land Pattern with bayonet lug" },
      { dimension: "length", label: "Barrel length", value: 1.17, si_unit: "m", note: "Smoothbore .75 caliber" },
      { dimension: "mass", label: "Mass", value: 4.7, si_unit: "kg", note: "Without bayonet" },
      { dimension: "length", label: "Bore diameter", value: 0.019, si_unit: "m", note: ".75 caliber" },
      { dimension: "length", label: "Bayonet length", value: 0.43, si_unit: "m", note: "Socket bayonet" },
      { dimension: "length", label: "Effective range", value: 75, si_unit: "m", note: "Smoothbore accuracy limit" },
    ],
  },

  {
    slug: "greek-trireme",
    name: "Greek Trireme",
    subtitle: "The three-banked oar warship that dominated the ancient Mediterranean",
    category_id: "history",
    description:
      "The trireme was the dominant warship of the ancient Mediterranean from the 7th to 4th centuries BC, used most famously by Athens at the decisive Battle of Salamis in 480 BC. A trireme had three banks of oars on each side, crewed by 170 rowers, plus about 30 additional crew. The Olympias, a full-scale reconstruction launched in 1987, is 36.8 m long and 5.5 m wide, with a draft of only 1 m. It achieved 8.5 knots under oar power alone. The bronze ram at the prow was the primary weapon, designed to punch through enemy hulls.",
    search_terms:
      "trireme|greek|athens|warship|oar|salamis|ancient|mediterranean|ram|olympias",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 36.8, si_unit: "m", note: "Based on Olympias reconstruction" },
      { dimension: "length", label: "Beam", value: 5.5, si_unit: "m", note: "Maximum hull width" },
      { dimension: "length", label: "Draft", value: 1.0, si_unit: "m", note: "Shallow for beach landings" },
      { dimension: "mass", label: "Displacement", value: 45000, si_unit: "kg", note: "About 45 tonnes fully crewed" },
      { dimension: "length", label: "Oar length (thranite)", value: 4.2, si_unit: "m", note: "Top-bank oar" },
      { dimension: "speed", label: "Maximum speed", value: 4.4, si_unit: "m/s", note: "8.5 knots under 170 oars" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL WORLD LANDMARKS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "mesa-verde-cliff-palace",
    name: "Mesa Verde Cliff Palace",
    subtitle: "The largest cliff dwelling in North America, built by ancestral Puebloans",
    category_id: "world-landmarks",
    description:
      "Cliff Palace at Mesa Verde National Park in Colorado is the largest cliff dwelling in North America, built by Ancestral Puebloans around 1190-1260 AD. Tucked beneath a massive sandstone overhang, the complex contains 150 rooms and 23 kivas (circular ceremonial rooms). The alcove is about 27 m deep and 18 m high, providing natural shelter from weather. At its peak, it housed approximately 100-120 people. The site was 'rediscovered' by ranchers in 1888 and became one of the first protected archaeological sites in the United States.",
    search_terms:
      "mesa verde|cliff palace|puebloan|anasazi|colorado|cliff dwelling|kiva|sandstone|alcove",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Alcove width", value: 66, si_unit: "m", note: "Along the cliff face" },
      { dimension: "length", label: "Alcove depth", value: 27, si_unit: "m", note: "From cliff face to overhang edge" },
      { dimension: "length", label: "Alcove height", value: 18, si_unit: "m", note: "Floor to ceiling of overhang" },
      { dimension: "length", label: "Tower height", value: 8, si_unit: "m", note: "Tallest standing structure, 4 stories" },
      { dimension: "length", label: "Kiva diameter", value: 4, si_unit: "m", note: "Typical circular ceremonial room" },
      { dimension: "length", label: "Elevation", value: 2130, si_unit: "m", note: "Above sea level" },
    ],
  },

  {
    slug: "potala-palace",
    name: "Potala Palace",
    subtitle: "The Dalai Lama's former winter residence towering over Lhasa, Tibet",
    category_id: "world-landmarks",
    description:
      "The Potala Palace in Lhasa, Tibet, sits atop Marpo Ri hill at 3,700 m above sea level, making it one of the highest palaces in the world. The complex rises 117 m above the hillside, has 13 stories, contains over 1,000 rooms, 10,000 shrines, and about 200,000 statues. It was the chief residence of the Dalai Lama from 1649 until the 14th Dalai Lama's flight to India in 1959. The structure consists of the White Palace (administrative quarters) and the Red Palace (religious halls and chapels).",
    search_terms:
      "potala palace|lhasa|tibet|dalai lama|buddhist|marpo ri|white palace|red palace|himalaya",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height above hillside", value: 117, si_unit: "m", note: "13 stories above the slope" },
      { dimension: "length", label: "Length", value: 360, si_unit: "m", note: "East to west along the hill" },
      { dimension: "length", label: "Width", value: 300, si_unit: "m", note: "North to south" },
      { dimension: "area", label: "Total floor area", value: 130000, si_unit: "m2", note: "Over 1,000 rooms" },
      { dimension: "length", label: "Elevation", value: 3700, si_unit: "m", note: "Above sea level" },
      { dimension: "length", label: "Wall thickness (base)", value: 5, si_unit: "m", note: "Massive stone foundations with copper poured in" },
    ],
  },

  {
    slug: "petra-siq",
    name: "The Siq at Petra",
    subtitle: "The narrow gorge entrance to the ancient Nabataean city",
    category_id: "world-landmarks",
    description:
      "The Siq is the main entrance to the ancient Nabataean city of Petra in Jordan, a narrow gorge 1.2 km long with walls rising up to 80 m high on either side. At its narrowest, the Siq is only 3 m wide. The gorge was formed by tectonic forces splitting the sandstone mountain, not by water erosion. Walking through the Siq with its towering multicolored sandstone walls is one of archaeology's most dramatic experiences, culminating in the first glimpse of Al-Khazneh (The Treasury) framed between the canyon walls.",
    search_terms:
      "siq|petra|jordan|nabataean|gorge|canyon|treasury|al-khazneh|sandstone|ancient",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1200, si_unit: "m", note: "Entrance to the Treasury" },
      { dimension: "length", label: "Maximum wall height", value: 80, si_unit: "m", note: "Towering sandstone walls" },
      { dimension: "length", label: "Narrowest width", value: 3, si_unit: "m", note: "At the tightest point" },
      { dimension: "length", label: "Average width", value: 5, si_unit: "m", note: "Typical passage width" },
      { dimension: "length", label: "Treasury facade height", value: 39.1, si_unit: "m", note: "Al-Khazneh at the end of the Siq" },
      { dimension: "length", label: "Treasury facade width", value: 25.3, si_unit: "m", note: "Carved directly from rock face" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL TRANSPORTATION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "kayak-ocean",
    name: "Sea Kayak",
    subtitle: "The sleek enclosed-cockpit boat for coastal and open-water paddling",
    category_id: "transportation",
    description:
      "A sea kayak (touring kayak) is designed for paddling on open water, coastal environments, and multi-day expeditions. A typical single sea kayak is 4.5-5.5 m long, about 56 cm wide, and weighs 20-30 kg. Sea kayaks feature a longer waterline than recreational kayaks for better tracking and speed, sealed bulkheads for buoyancy and gear storage, and a spray skirt to keep water out of the cockpit. The design descends from the Inuit qajaq, used for thousands of years in Arctic waters.",
    search_terms:
      "sea kayak|touring kayak|ocean|paddle|inuit|qajaq|cockpit|expedition|coastal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 5.0, si_unit: "m", note: "Typical single sea kayak" },
      { dimension: "length", label: "Beam", value: 0.56, si_unit: "m", note: "Narrow for efficiency" },
      { dimension: "length", label: "Cockpit length", value: 0.8, si_unit: "m", note: "Standard cockpit opening" },
      { dimension: "mass", label: "Mass", value: 25, si_unit: "kg", note: "Fiberglass construction" },
      { dimension: "mass", label: "Load capacity", value: 150, si_unit: "kg", note: "Paddler plus gear" },
      { dimension: "length", label: "Double paddle length", value: 2.2, si_unit: "m", note: "Standard kayak paddle" },
    ],
  },

  {
    slug: "hot-air-balloon-standard",
    name: "Hot Air Balloon (Standard)",
    subtitle: "The gentle giant of recreational aviation, floating on heated air",
    category_id: "transportation",
    description:
      "A standard recreational hot air balloon envelope holds about 2,800 cubic meters of heated air, stands roughly 20 m tall and 15 m wide when inflated, and carries a wicker basket with 2-4 passengers plus a pilot. The nylon or polyester envelope weighs about 113 kg, while the complete system including basket, burners, and fuel weighs about 250 kg. The air inside is heated to about 100 degrees C above ambient temperature by propane burners producing up to 3 million BTU. Modern recreational ballooning began in 1960 with Ed Yost's flights.",
    search_terms:
      "hot air balloon|envelope|basket|burner|propane|recreational|montgolfier|floating|aviation",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Envelope height", value: 20, si_unit: "m", note: "Inflated envelope" },
      { dimension: "length", label: "Envelope diameter", value: 15, si_unit: "m", note: "At widest point" },
      { dimension: "volume", label: "Envelope volume", value: 2800, si_unit: "m3", note: "Standard recreational size" },
      { dimension: "mass", label: "Envelope mass", value: 113, si_unit: "kg", note: "Nylon or polyester fabric" },
      { dimension: "mass", label: "Total system mass", value: 250, si_unit: "kg", note: "Envelope, basket, burners, fuel" },
      { dimension: "length", label: "Basket dimensions", value: 1.2, si_unit: "m", note: "Typical wicker basket width" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL CITIES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "singapore-city-state",
    name: "Singapore (City-State)",
    subtitle: "The island nation that became one of the world's richest urban centers",
    category_id: "cities",
    description:
      "As a city-state, Singapore functions simultaneously as a city, a country, and an island. Its urban area covers essentially the entire territory of 733 square kilometers, with a population density of about 8,000 people per square kilometer. Despite its tiny size, Singapore has the world's second-busiest container port, Changi Airport (consistently rated the world's best), and one of the highest GDP per capita figures globally. Its skyline along Marina Bay, featuring the distinctive Marina Bay Sands hotel, has become one of Asia's most photographed vistas.",
    search_terms:
      "singapore|city-state|marina bay sands|changi|lion city|garden city|port|southeast asia",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 7.33e8, si_unit: "m2", note: "733 square kilometers" },
      { dimension: "length", label: "East-west extent", value: 50000, si_unit: "m", note: "Main island maximum" },
      { dimension: "length", label: "North-south extent", value: 27000, si_unit: "m", note: "Main island maximum" },
      { dimension: "length", label: "MRT network length", value: 230000, si_unit: "m", note: "230 km mass rapid transit" },
      { dimension: "length", label: "Marina Bay Sands height", value: 200, si_unit: "m", note: "57-story integrated resort" },
      { dimension: "length", label: "Jewel Changi waterfall height", value: 40, si_unit: "m", note: "World's tallest indoor waterfall" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL NATURE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "aurora-borealis-curtain",
    name: "Aurora Borealis (Typical Curtain)",
    subtitle: "The shimmering curtains of light dancing in polar skies",
    category_id: "nature",
    description:
      "An aurora borealis (northern lights) display typically consists of luminous curtains, arcs, and bands of light stretching across the sky at altitudes of 80-300 km above Earth's surface. A single auroral curtain can extend 1,000+ km horizontally while being remarkably thin, only about 1-10 km in the direction perpendicular to the curtain. The green color (most common) comes from oxygen atoms at about 120 km altitude, while red and purple hues come from higher-altitude oxygen and nitrogen. Auroras occur when charged particles from the solar wind interact with atmospheric gases.",
    search_terms:
      "aurora borealis|northern lights|polar|solar wind|magnetic|ionosphere|curtain|green|sky",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Horizontal extent", value: 1000000, si_unit: "m", note: "A single curtain can span 1,000+ km" },
      { dimension: "length", label: "Altitude (green)", value: 120000, si_unit: "m", note: "Typical green oxygen emission height" },
      { dimension: "length", label: "Altitude range", value: 220000, si_unit: "m", note: "From 80 km to 300 km" },
      { dimension: "length", label: "Curtain thickness", value: 5000, si_unit: "m", note: "Remarkably thin perpendicular to the curtain" },
      { dimension: "length", label: "Vertical extent", value: 100000, si_unit: "m", note: "Height of a typical curtain fold" },
    ],
  },

  {
    slug: "giant-kelp-forest",
    name: "Giant Kelp Forest",
    subtitle: "The underwater forests of the Pacific that grow up to 60 cm per day",
    category_id: "nature",
    description:
      "Giant kelp (Macrocystis pyrifera) forms towering underwater forests along temperate Pacific coastlines, growing from the seafloor to the surface where fronds form a dense canopy. Individual kelp plants can reach 45-60 m in length and grow at rates of up to 60 cm per day, making giant kelp one of the fastest-growing organisms on Earth. A typical kelp forest covers several square kilometers along the coast and provides habitat for over 1,000 species including sea otters, garibaldi fish, and countless invertebrates.",
    search_terms:
      "giant kelp|kelp forest|macrocystis|underwater forest|pacific|sea otter|marine|seaweed",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum plant length", value: 60, si_unit: "m", note: "From holdfast to surface canopy" },
      { dimension: "length", label: "Growth rate (daily max)", value: 0.6, si_unit: "m", note: "Up to 60 cm per day" },
      { dimension: "length", label: "Typical forest depth", value: 25, si_unit: "m", note: "Water depth where kelp grows" },
      { dimension: "area", label: "Typical forest area", value: 5000000, si_unit: "m2", note: "5 km2 for a healthy coastal forest" },
      { dimension: "length", label: "Blade length", value: 0.6, si_unit: "m", note: "Individual leaf-like blade" },
      { dimension: "length", label: "Holdfast diameter", value: 0.5, si_unit: "m", note: "Root-like anchor structure" },
    ],
  },

  {
    slug: "bioluminescent-bay",
    name: "Bioluminescent Bay (Mosquito Bay)",
    subtitle: "The brightest bioluminescent bay on Earth in Vieques, Puerto Rico",
    category_id: "nature",
    description:
      "Mosquito Bay on the island of Vieques, Puerto Rico, holds the Guinness World Record for the brightest bioluminescent bay. The glow is produced by dinoflagellates (Pyrodinium bahamense), microscopic organisms that emit blue-green light when disturbed, at concentrations of up to 700,000 per liter of water. The bay is about 800 m long and 400 m wide, surrounded by mangroves that provide nutrients for the dinoflagellates. Every movement through the water creates trails of ghostly blue light, making nighttime kayaking here one of the most otherworldly natural experiences on Earth.",
    search_terms:
      "bioluminescent bay|mosquito bay|vieques|puerto rico|dinoflagellate|glow|pyrodinium|blue light",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Bay length", value: 800, si_unit: "m", note: "Approximate extent" },
      { dimension: "length", label: "Bay width", value: 400, si_unit: "m", note: "Approximate extent" },
      { dimension: "area", label: "Bay area", value: 250000, si_unit: "m2", note: "Approximately 0.25 km2" },
      { dimension: "length", label: "Average depth", value: 3, si_unit: "m", note: "Shallow mangrove bay" },
      { dimension: "length", label: "Channel entrance width", value: 20, si_unit: "m", note: "Narrow connection to Caribbean Sea" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL OCEANS & SEAS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "coral-sea",
    name: "Coral Sea",
    subtitle: "The tropical sea east of Australia containing the Great Barrier Reef",
    category_id: "ocean",
    description:
      "The Coral Sea lies between Australia's northeast coast, New Guinea, the Solomon Islands, and New Caledonia. Covering approximately 4.79 million square kilometers, it is home to the Great Barrier Reef, the world's largest coral reef system at over 2,300 km long. The sea has an average depth of 2,394 m, with the maximum at 9,140 m in the New Britain Trench. The Battle of the Coral Sea in May 1942 was the first naval battle in history in which the opposing ships never sighted each other, fighting entirely through carrier aircraft.",
    search_terms:
      "coral sea|great barrier reef|australia|pacific|new guinea|solomon islands|tropical|battle",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 4.79e12, si_unit: "m2", note: "4.79 million square kilometers" },
      { dimension: "length", label: "Great Barrier Reef length", value: 2300000, si_unit: "m", note: "World's largest reef system" },
      { dimension: "length", label: "Average depth", value: 2394, si_unit: "m", note: "Mean depth" },
      { dimension: "length", label: "Maximum depth", value: 9140, si_unit: "m", note: "New Britain Trench" },
      { dimension: "length", label: "East-west extent", value: 2400000, si_unit: "m", note: "Australia to Vanuatu" },
      { dimension: "temperature", label: "Surface temperature", value: 301, si_unit: "K", note: "About 28 degrees C in tropical zones" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL DESERTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "thar-desert",
    name: "Thar Desert",
    subtitle: "The Great Indian Desert straddling India and Pakistan",
    category_id: "deserts",
    description:
      "The Thar Desert (Great Indian Desert) covers approximately 200,000 square kilometers across the Indian state of Rajasthan and Pakistan's Sindh province. Unlike many deserts, the Thar is one of the most densely populated arid regions in the world, supporting about 83 people per square kilometer. The landscape features sand dunes, rocky terrain, and salt flats. The Thar is also one of the youngest deserts, becoming arid only about 4,000-10,000 years ago. Jaisalmer, the 'Golden City,' rises from its dunes with sandstone architecture that glows at sunset.",
    search_terms:
      "thar desert|great indian desert|rajasthan|jaisalmer|sand dunes|india|pakistan|arid",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 2e11, si_unit: "m2", note: "200,000 square kilometers" },
      { dimension: "length", label: "North-south extent", value: 640000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "East-west extent", value: 400000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Maximum dune height", value: 150, si_unit: "m", note: "Tall barchan dunes" },
      { dimension: "temperature", label: "Maximum temperature", value: 325, si_unit: "K", note: "About 52 degrees C in summer" },
      { dimension: "length", label: "Annual rainfall", value: 0.25, si_unit: "m", note: "About 250 mm average" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL RIVERS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "amazon-river",
    name: "Amazon River",
    subtitle: "The world's largest river by volume, draining 40% of South America",
    category_id: "rivers",
    description:
      "The Amazon River is the world's largest river by volume of water discharged, releasing approximately 209,000 cubic meters per second into the Atlantic Ocean, more than the next seven largest rivers combined. Its length is debated (6,400-6,992 km, competing with the Nile for longest), and its drainage basin of 7 million square kilometers covers about 40% of South America. During the wet season, the river can be over 48 km wide in some stretches. The Amazon bore (pororoca) is a tidal wave that travels up to 800 km inland.",
    search_terms:
      "amazon river|south america|largest river|volume|drainage basin|pororoca|brazil|tributary",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 6400000, si_unit: "m", note: "One of the two longest rivers" },
      { dimension: "area", label: "Drainage basin", value: 7e12, si_unit: "m2", note: "7 million km2, 40% of South America" },
      { dimension: "volume", label: "Average discharge", value: 209000, si_unit: "m3", note: "Per second, largest in the world" },
      { dimension: "length", label: "Maximum width (wet season)", value: 48000, si_unit: "m", note: "48 km during peak flooding" },
      { dimension: "length", label: "Mouth width", value: 325000, si_unit: "m", note: "325 km wide estuary" },
      { dimension: "length", label: "Average depth", value: 40, si_unit: "m", note: "In the main channel" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL ISLANDS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "crete-island",
    name: "Crete",
    subtitle: "The largest Greek island and birthplace of Minoan civilization",
    category_id: "islands",
    description:
      "Crete is the largest of the Greek islands and the fifth-largest in the Mediterranean, covering 8,450 square kilometers. It was the center of the Minoan civilization (2700-1450 BC), the first advanced civilization in Europe, which built the famous Palace of Knossos. The island is 260 km long but only 12-60 km wide, with a mountainous interior reaching 2,456 m at Mount Ida (Psiloritis). Crete's strategic location in the eastern Mediterranean has made it a prized territory for Romans, Byzantines, Arabs, Venetians, Ottomans, and Germans throughout history.",
    search_terms:
      "crete|greece|minoan|knossos|mediterranean|island|ida|psiloritis|palace|greek",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 8.45e9, si_unit: "m2", note: "8,450 square kilometers" },
      { dimension: "length", label: "Length (E-W)", value: 260000, si_unit: "m", note: "Elongated east-west shape" },
      { dimension: "length", label: "Maximum width", value: 60000, si_unit: "m", note: "Widest point" },
      { dimension: "length", label: "Minimum width", value: 12000, si_unit: "m", note: "Narrowest point near Ierapetra" },
      { dimension: "length", label: "Highest point (Mt. Ida)", value: 2456, si_unit: "m", note: "Psiloritis summit" },
      { dimension: "length", label: "Coastline", value: 1046000, si_unit: "m", note: "Highly indented shoreline" },
    ],
  },

  {
    slug: "sri-lanka-island",
    name: "Sri Lanka",
    subtitle: "The teardrop-shaped island nation off India's southern coast",
    category_id: "islands",
    description:
      "Sri Lanka, formerly known as Ceylon, is a teardrop-shaped island nation in the Indian Ocean covering 65,610 square kilometers, separated from India by the narrow Palk Strait (just 35 km wide). The island has been a crossroads of maritime trade for millennia, known for spices, tea, gemstones, and its strategic position on Indian Ocean shipping lanes. Its diverse landscape includes tropical beaches, ancient ruins (such as the 5th-century rock fortress of Sigiriya), lush hill country, and one of Asia's highest biodiversity levels per unit area.",
    search_terms:
      "sri lanka|ceylon|indian ocean|teardrop|sigiriya|palk strait|colombo|buddhist|tea|spices",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 6.56e10, si_unit: "m2", note: "65,610 square kilometers" },
      { dimension: "length", label: "Length (N-S)", value: 432000, si_unit: "m", note: "Maximum north-south extent" },
      { dimension: "length", label: "Width (E-W)", value: 224000, si_unit: "m", note: "Maximum east-west extent" },
      { dimension: "length", label: "Highest point", value: 2524, si_unit: "m", note: "Pidurutalagala" },
      { dimension: "length", label: "Coastline", value: 1340000, si_unit: "m", note: "Total shoreline" },
      { dimension: "length", label: "Palk Strait width", value: 35000, si_unit: "m", note: "Distance from India" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL FORESTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "amazon-rainforest-canopy",
    name: "Amazon Rainforest Canopy",
    subtitle: "The largest tropical rainforest's towering green ceiling",
    category_id: "forests",
    description:
      "While the Amazon Rainforest as a whole is already in the database, its canopy layer deserves separate attention as one of Earth's most complex and biodiverse habitats. The canopy forms a nearly continuous ceiling at 25-45 m above the forest floor, with emergent trees poking through at 50-60 m. This layer intercepts up to 99% of sunlight, creating a dark and humid understory below. An estimated 50% of all Amazon species live exclusively in the canopy, including sloths, howler monkeys, toucans, and an astonishing diversity of epiphytes, bromeliads, and orchids.",
    search_terms:
      "amazon canopy|rainforest canopy|emergent layer|epiphyte|bromeliad|tropical canopy|understory",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Canopy area", value: 5.5e12, si_unit: "m2", note: "5.5 million km2 of continuous canopy" },
      { dimension: "length", label: "Canopy height", value: 35, si_unit: "m", note: "Average closed canopy level" },
      { dimension: "length", label: "Emergent tree height", value: 55, si_unit: "m", note: "Trees piercing through the canopy" },
      { dimension: "length", label: "Tallest recorded tree", value: 88.5, si_unit: "m", note: "Dinizia excelsa, discovered 2019" },
      { dimension: "length", label: "Annual rainfall", value: 2.3, si_unit: "m", note: "2,300 mm average" },
      { dimension: "temperature", label: "Canopy temperature", value: 308, si_unit: "K", note: "About 35 degrees C in sun-exposed canopy" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL SPORTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "cricket-pitch",
    name: "Cricket Pitch",
    subtitle: "The 22-yard strip at the center of the gentleman's game",
    category_id: "sports",
    description:
      "The cricket pitch is the carefully prepared strip of ground at the center of a cricket field where the bowler delivers the ball and the batsman plays. It measures exactly 20.12 m (22 yards or 1 chain) between the bowling creases and 3.05 m wide. The pitch is prepared from rolled clay soil, cut short, and is maintained throughout a match. At each end, three wooden stumps 71.1 cm tall and 22.86 cm wide collectively, topped by two bails, form the wicket. The pitch condition (hard, green, dusty, cracked) profoundly affects how the game plays.",
    search_terms:
      "cricket pitch|22 yards|wicket|stumps|crease|bowling|batting|cricket ground|test match",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Pitch length", value: 20.12, si_unit: "m", note: "22 yards between bowling creases" },
      { dimension: "length", label: "Pitch width", value: 3.05, si_unit: "m", note: "10 feet" },
      { dimension: "area", label: "Pitch area", value: 61.4, si_unit: "m2", note: "Strip between creases" },
      { dimension: "length", label: "Stump height", value: 0.711, si_unit: "m", note: "28 inches above ground" },
      { dimension: "length", label: "Wicket width (3 stumps)", value: 0.2286, si_unit: "m", note: "9 inches total" },
      { dimension: "length", label: "Popping crease to stumps", value: 1.22, si_unit: "m", note: "4 feet safety line for batsman" },
    ],
  },

  {
    slug: "table-tennis-table",
    name: "Table Tennis Table",
    subtitle: "The compact arena for the world's fastest racket sport",
    category_id: "sports",
    description:
      "An official ITTF table tennis table is 2.74 m long, 1.525 m wide, and stands 0.76 m above the floor. The playing surface must be uniformly dark-colored (typically blue or green) with a matte finish and produce a uniform bounce of about 23 cm when a standard ball is dropped from 30 cm. The net is 15.25 cm high and extends 15.25 cm beyond each side of the table. Despite the table's modest size, professional players generate ball speeds exceeding 100 km/h and apply spins of up to 9,000 rpm.",
    search_terms:
      "table tennis|ping pong|ittf|table|net|paddle|racket sport|small ball",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2.74, si_unit: "m", note: "ITTF regulation" },
      { dimension: "length", label: "Width", value: 1.525, si_unit: "m", note: "ITTF regulation" },
      { dimension: "length", label: "Height", value: 0.76, si_unit: "m", note: "Playing surface above floor" },
      { dimension: "area", label: "Playing surface area", value: 4.18, si_unit: "m2", note: "Total table top" },
      { dimension: "length", label: "Net height", value: 0.1525, si_unit: "m", note: "15.25 cm" },
      { dimension: "length", label: "Ball diameter", value: 0.04, si_unit: "m", note: "40 mm polymer ball" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL HISTORY
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "moai-statue-average",
    name: "Moai Statue (Average)",
    subtitle: "The stone sentinels of Rapa Nui, carved from volcanic tuff",
    category_id: "history",
    description:
      "The moai of Easter Island (Rapa Nui) are monolithic human figures carved between 1250 and 1500 AD by the Rapa Nui people. The 887 known moai average about 4 m tall and weigh 12.5 tonnes, though sizes vary enormously. The largest erected moai, Paro, stands 10 m tall and weighs 82 tonnes. All but 53 of the moai were carved from tuff (compressed volcanic ash) at the Rano Raraku quarry. How the Rapa Nui transported these massive statues across the island remains debated, though recent experiments suggest they may have been 'walked' upright using ropes.",
    search_terms:
      "moai|easter island|rapa nui|statue|volcanic tuff|rano raraku|paro|stone heads|polynesia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Average height", value: 4.0, si_unit: "m", note: "Typical completed moai" },
      { dimension: "mass", label: "Average mass", value: 12500, si_unit: "kg", note: "Typical volcanic tuff statue" },
      { dimension: "length", label: "Average width", value: 1.6, si_unit: "m", note: "Across the torso" },
      { dimension: "length", label: "Average depth", value: 1.2, si_unit: "m", note: "Front to back" },
      { dimension: "length", label: "Largest (Paro) height", value: 10, si_unit: "m", note: "Tallest erected moai" },
      { dimension: "mass", label: "Largest (Paro) mass", value: 82000, si_unit: "kg", note: "Heaviest transported moai" },
    ],
  },

  {
    slug: "cuneiform-tablet",
    name: "Cuneiform Tablet (Typical)",
    subtitle: "The clay tablets of ancient Mesopotamia bearing humanity's first writing",
    category_id: "history",
    description:
      "Cuneiform is one of the earliest known writing systems, developed by the Sumerians around 3400 BC in Mesopotamia (modern Iraq). The writing was produced by pressing a reed stylus into soft clay tablets, creating distinctive wedge-shaped marks (cuneus means 'wedge' in Latin). A typical administrative tablet was roughly 5-10 cm across, though tablets ranged from tiny 2 cm tags to large 30 cm literary works. Over 500,000 cuneiform tablets have been excavated, covering everything from temple receipts to the Epic of Gilgamesh, the oldest known work of literature.",
    search_terms:
      "cuneiform|tablet|mesopotamia|sumerian|clay|stylus|writing|gilgamesh|babylon|akkadian",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical width", value: 0.07, si_unit: "m", note: "Average administrative tablet" },
      { dimension: "length", label: "Typical height", value: 0.06, si_unit: "m", note: "Average tablet size" },
      { dimension: "length", label: "Thickness", value: 0.025, si_unit: "m", note: "Pressed clay" },
      { dimension: "mass", label: "Mass", value: 0.15, si_unit: "kg", note: "Fired clay average" },
      { dimension: "length", label: "Character size", value: 0.003, si_unit: "m", note: "Individual cuneiform wedge marks" },
      { dimension: "length", label: "Stylus tip width", value: 0.002, si_unit: "m", note: "Reed writing implement" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL TRANSPORTATION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "orient-express-car",
    name: "Orient Express Sleeping Car",
    subtitle: "The luxurious carriage of the world's most famous train",
    category_id: "transportation",
    description:
      "The Compagnie Internationale des Wagons-Lits (CIWL) sleeping cars of the Orient Express were the epitome of railway luxury. The iconic Lx-type sleeping cars, built in the 1920s-1930s and used on the Venice Simplon-Orient-Express heritage service, are about 23.5 m long, 2.95 m wide, and weigh approximately 56 tonnes. Each car contains private sleeping compartments with wood-paneled walls, brass fittings, and crisp linen. The original Orient Express ran from Paris to Constantinople (Istanbul) starting in 1883.",
    search_terms:
      "orient express|sleeping car|wagon-lits|luxury train|venice simplon|paris istanbul|railway",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Car length", value: 23.5, si_unit: "m", note: "Lx-type sleeping car" },
      { dimension: "length", label: "Car width", value: 2.95, si_unit: "m", note: "Standard European gauge width" },
      { dimension: "length", label: "Car height", value: 4.28, si_unit: "m", note: "Rail to roof" },
      { dimension: "mass", label: "Car mass", value: 56000, si_unit: "kg", note: "Fully equipped sleeping car" },
      { dimension: "length", label: "Compartment width", value: 1.9, si_unit: "m", note: "Private sleeping compartment" },
      { dimension: "length", label: "Track gauge", value: 1.435, si_unit: "m", note: "Standard gauge" },
    ],
  },

  {
    slug: "tuk-tuk",
    name: "Tuk-Tuk (Auto Rickshaw)",
    subtitle: "The buzzy three-wheeled taxi ubiquitous across South and Southeast Asia",
    category_id: "transportation",
    description:
      "The tuk-tuk (auto rickshaw) is a three-wheeled motorized vehicle used as a taxi in cities across South Asia, Southeast Asia, Africa, and Latin America. The name is onomatopoeic, mimicking the sound of its small two-stroke engine. A typical tuk-tuk is about 2.6 m long, 1.3 m wide, and 1.7 m tall, weighing about 200 kg. They can carry 2-3 passengers plus a driver. In Bangkok alone, an estimated 20,000 tuk-tuks operate, though the Indian auto-rickshaw market numbers in the millions.",
    search_terms:
      "tuk-tuk|auto rickshaw|three wheeler|bangkok|india|taxi|motorized|bajaj|piaggio",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2.6, si_unit: "m", note: "Typical Thai-style tuk-tuk" },
      { dimension: "length", label: "Width", value: 1.3, si_unit: "m", note: "Including canopy" },
      { dimension: "length", label: "Height", value: 1.7, si_unit: "m", note: "To top of canopy" },
      { dimension: "mass", label: "Curb weight", value: 200, si_unit: "kg", note: "Empty vehicle" },
      { dimension: "length", label: "Wheelbase", value: 1.95, si_unit: "m", note: "Front to rear axle" },
      { dimension: "speed", label: "Maximum speed", value: 14, si_unit: "m/s", note: "About 50 km/h" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL WORLD LANDMARKS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "great-zimbabwe",
    name: "Great Zimbabwe",
    subtitle: "The largest stone ruins in Africa south of the Sahara",
    category_id: "world-landmarks",
    description:
      "Great Zimbabwe is a ruined city in southeastern Zimbabwe that was the capital of the Kingdom of Zimbabwe during the country's Late Iron Age (11th-15th century). The Great Enclosure, the most iconic structure, has walls up to 11 m high and 5 m thick, built entirely of granite blocks without mortar. The complex covers about 722 hectares and once housed up to 18,000 people. The word 'Zimbabwe' derives from the Shona dzimba-dza-mabwe, meaning 'houses of stone.' The ruins give the modern nation its name.",
    search_terms:
      "great zimbabwe|ruins|shona|stone|enclosure|kingdom|africa|iron age|granite|mabwe",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Complex area", value: 7220000, si_unit: "m2", note: "722 hectares total" },
      { dimension: "length", label: "Great Enclosure circumference", value: 250, si_unit: "m", note: "Outer wall perimeter" },
      { dimension: "length", label: "Great Enclosure wall height", value: 11, si_unit: "m", note: "Maximum height" },
      { dimension: "length", label: "Wall thickness", value: 5, si_unit: "m", note: "At the base, tapering upward" },
      { dimension: "length", label: "Conical Tower height", value: 9, si_unit: "m", note: "Solid stone cone inside the enclosure" },
      { dimension: "length", label: "Hill Complex elevation", value: 80, si_unit: "m", note: "Above surrounding terrain" },
    ],
  },

  {
    slug: "sigiriya-rock-fortress",
    name: "Sigiriya Rock Fortress",
    subtitle: "The ancient palace atop a 200-meter column of rock in Sri Lanka",
    category_id: "world-landmarks",
    description:
      "Sigiriya (Lion Rock) is a massive column of rock nearly 200 m high in central Sri Lanka, topped by the ruins of an ancient palace complex built by King Kashyapa I in the 5th century AD. The summit plateau covers about 1.6 hectares and contained a palace, cisterns cut into the rock, and frescoes of celestial maidens on the rock face. The entrance was carved in the form of an enormous lion, of which only the paws survive. The surrounding gardens include some of the oldest landscaped gardens in the world, with sophisticated hydraulic features that still function.",
    search_terms:
      "sigiriya|lion rock|sri lanka|kashyapa|fortress|palace|rock|frescoes|gardens|5th century",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Rock height", value: 200, si_unit: "m", note: "Above surrounding jungle" },
      { dimension: "area", label: "Summit area", value: 16000, si_unit: "m2", note: "1.6 hectares on top" },
      { dimension: "length", label: "Rock column diameter", value: 180, si_unit: "m", note: "At the base" },
      { dimension: "length", label: "Lion paw height", value: 14, si_unit: "m", note: "Surviving carved entrance" },
      { dimension: "area", label: "Garden complex area", value: 600000, si_unit: "m2", note: "Surrounding landscaped gardens" },
      { dimension: "length", label: "Mirror Wall length", value: 140, si_unit: "m", note: "Polished plaster wall with ancient graffiti" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINAL ADDITIONS (diverse categories to reach 150+)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "lake-titicaca",
    name: "Lake Titicaca",
    subtitle: "The highest navigable lake in the world, straddling Peru and Bolivia",
    category_id: "nature",
    description:
      "Lake Titicaca sits at 3,812 m above sea level on the Altiplano between Peru and Bolivia, making it the highest navigable lake for large vessels in the world. It covers about 8,372 square kilometers, is 190 km long and 80 km wide, with a maximum depth of 281 m. The Uru people have lived on floating reed islands on the lake for centuries. Incan mythology holds that the creator god Viracocha emerged from Lake Titicaca to create the sun, moon, and stars.",
    search_terms:
      "titicaca|peru|bolivia|altiplano|highest lake|uru|reed islands|andes|inca",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Surface area", value: 8.372e9, si_unit: "m2", note: "8,372 square kilometers" },
      { dimension: "length", label: "Length", value: 190000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Width", value: 80000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Maximum depth", value: 281, si_unit: "m", note: "Deepest point" },
      { dimension: "length", label: "Elevation", value: 3812, si_unit: "m", note: "Above sea level" },
      { dimension: "volume", label: "Water volume", value: 8.93e11, si_unit: "m3", note: "893 cubic kilometers" },
    ],
  },

  {
    slug: "trans-siberian-length",
    name: "Trans-Siberian Railway (Route)",
    subtitle: "The longest railway line in the world, crossing 9 time zones",
    category_id: "transportation",
    description:
      "The Trans-Siberian Railway connects Moscow to Vladivostok across 9,289 km, making it the longest railway line in the world. The journey crosses 9 time zones and takes about 6 days and 22 hours without stops. Construction began in 1891 and was completed in 1916. The route passes through 87 cities and crosses 16 major rivers including the Volga, Ob, and Amur. A branch line (Trans-Manchurian) continues to Beijing, adding another 2,000 km. The railway was instrumental in developing Russia's vast Siberian interior.",
    search_terms:
      "trans-siberian|railway|moscow|vladivostok|siberia|longest railway|time zones|russia|train",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total route length", value: 9289000, si_unit: "m", note: "Moscow to Vladivostok" },
      { dimension: "time", label: "Travel time (non-stop)", value: 597600, si_unit: "s", note: "About 6 days 22 hours" },
      { dimension: "length", label: "Track gauge", value: 1.52, si_unit: "m", note: "Russian broad gauge" },
      { dimension: "length", label: "Highest point", value: 1040, si_unit: "m", note: "Yablonovy Range" },
      { dimension: "length", label: "Longest bridge", value: 2568, si_unit: "m", note: "Khabarovsk Bridge over the Amur River" },
    ],
  },

  {
    slug: "sumo-wrestling-ring",
    name: "Sumo Dohyo",
    subtitle: "The sacred clay ring of Japan's ancient national sport",
    category_id: "sports",
    description:
      "The dohyo is the ring in which sumo wrestling bouts take place. It is a raised platform of packed clay 34-60 cm high and 6.7 m on each side, with a circular ring (tawara) 4.55 m in diameter marked by partially buried rice-straw bales. A new dohyo is built for each tournament, with a Shinto ceremony to purify the ground. The roof above the ring (tsuriyane) represents a Shinto shrine. The simplicity of the dohyo belies the complexity of the sport: two wrestlers in a 4.55 m circle, first to touch the ground or leave the ring loses.",
    search_terms:
      "sumo|dohyo|wrestling ring|japan|tawara|clay|shinto|tournament|rikishi",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Ring diameter (tawara)", value: 4.55, si_unit: "m", note: "Inner rice-straw boundary" },
      { dimension: "length", label: "Platform side length", value: 6.7, si_unit: "m", note: "Square raised clay platform" },
      { dimension: "length", label: "Platform height", value: 0.5, si_unit: "m", note: "Raised above arena floor" },
      { dimension: "area", label: "Ring area", value: 16.3, si_unit: "m2", note: "Circular fighting area" },
      { dimension: "length", label: "Tawara (bale) diameter", value: 0.1, si_unit: "m", note: "Rice-straw boundary bales" },
      { dimension: "mass", label: "Clay mass", value: 15000, si_unit: "kg", note: "Packed clay platform" },
    ],
  },

  {
    slug: "niagara-falls-horseshoe",
    name: "Horseshoe Falls (Niagara)",
    subtitle: "The most powerful waterfall in North America by volume",
    category_id: "nature",
    description:
      "Horseshoe Falls, also known as Canadian Falls, is the largest of the three waterfalls that make up Niagara Falls, straddling the US-Canada border. The crest line is approximately 790 m wide in a curved horseshoe shape, with water falling 51 m. About 90% of the Niagara River's flow (averaging 2,832 cubic meters per second) goes over Horseshoe Falls. The falls erode the dolomite limestone at a rate of about 0.3 m per year, having retreated roughly 11 km upstream from their original position since the last ice age.",
    search_terms:
      "horseshoe falls|niagara|canadian falls|waterfall|ontario|new york|erosion|hydroelectric",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Crest width", value: 790, si_unit: "m", note: "Curved horseshoe shape" },
      { dimension: "length", label: "Height", value: 51, si_unit: "m", note: "Vertical drop" },
      { dimension: "volume", label: "Average flow", value: 2832, si_unit: "m3", note: "Per second, 90% of Niagara River" },
      { dimension: "length", label: "Retreat rate", value: 0.3, si_unit: "m", note: "Erosion per year" },
      { dimension: "length", label: "Plunge pool depth", value: 56, si_unit: "m", note: "Deeper than the falls are tall" },
      { dimension: "length", label: "Total retreat since ice age", value: 11000, si_unit: "m", note: "11 km of gorge carved" },
    ],
  },

  {
    slug: "dead-sea-surface",
    name: "Dead Sea (Details)",
    subtitle: "The saltiest major body of water and lowest land surface on Earth",
    category_id: "ocean",
    description:
      "The Dead Sea, bordering Jordan, Israel, and the West Bank, lies at approximately 430 m below sea level, making its shores the lowest exposed land surface on Earth. The lake is about 50 km long and 15 km wide, with a surface area of roughly 605 square kilometers (shrinking due to diversion of feeder rivers). Its salinity of about 34% (nearly ten times the ocean) makes it impossible for most organisms to survive, hence the name, but allows bathers to float effortlessly. The sea has been receding at about 1 m per year.",
    search_terms:
      "dead sea|lowest point|salt lake|jordan|israel|floating|hypersaline|below sea level",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Surface elevation", value: -430, si_unit: "m", note: "Below sea level, lowest land surface" },
      { dimension: "length", label: "Length", value: 50000, si_unit: "m", note: "North to south" },
      { dimension: "length", label: "Width", value: 15000, si_unit: "m", note: "Maximum east-west" },
      { dimension: "area", label: "Surface area", value: 6.05e8, si_unit: "m2", note: "605 km2 and shrinking" },
      { dimension: "length", label: "Maximum depth", value: 304, si_unit: "m", note: "Northern basin" },
      { dimension: "length", label: "Annual recession rate", value: 1, si_unit: "m", note: "Water level dropping per year" },
    ],
  },

  {
    slug: "strait-of-gibraltar",
    name: "Strait of Gibraltar",
    subtitle: "The narrow passage connecting the Atlantic and the Mediterranean",
    category_id: "ocean",
    description:
      "The Strait of Gibraltar separates Europe (Spain) from Africa (Morocco) at the western end of the Mediterranean Sea. At its narrowest point, the strait is only 14.3 km wide, and it is about 58 km long. The maximum depth is 900 m. The strait is one of the busiest shipping lanes in the world, with over 300 ships passing through daily. The two promontories flanking the strait (the Rock of Gibraltar and Jebel Musa) were known in antiquity as the Pillars of Hercules, marking the edge of the known world.",
    search_terms:
      "gibraltar|strait|pillars of hercules|spain|morocco|mediterranean|atlantic|shipping lane|rock",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 58000, si_unit: "m", note: "East-west through the strait" },
      { dimension: "length", label: "Narrowest width", value: 14300, si_unit: "m", note: "Europe to Africa at closest point" },
      { dimension: "length", label: "Maximum depth", value: 900, si_unit: "m", note: "In the main channel" },
      { dimension: "length", label: "Rock of Gibraltar height", value: 426, si_unit: "m", note: "European pillar" },
      { dimension: "speed", label: "Current speed", value: 1.5, si_unit: "m/s", note: "Tidal and density-driven current" },
      { dimension: "length", label: "Sill depth", value: 284, si_unit: "m", note: "Camarinal Sill, shallowest point" },
    ],
  },

  {
    slug: "polo-field",
    name: "Polo Field",
    subtitle: "The largest field in organized sport, the size of nine football pitches",
    category_id: "sports",
    description:
      "A regulation polo field is the largest playing field in organized sport, measuring 274 m (300 yards) long and 146 m (160 yards) wide, covering about 4 hectares or roughly nine football pitches. Goal posts are set 7.3 m apart at each end. The field is traditionally grass, and its enormous size is necessary because the game is played on horseback at speeds up to 55 km/h. Each match consists of four to six 7-minute periods called chukkers. The field must be flat and well-drained to prevent injuries to horses galloping at full speed.",
    search_terms:
      "polo field|equestrian|horseback|chukker|largest field|sport|goal|grass|pitch",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 274, si_unit: "m", note: "300 yards" },
      { dimension: "length", label: "Width", value: 146, si_unit: "m", note: "160 yards" },
      { dimension: "area", label: "Playing area", value: 40000, si_unit: "m2", note: "About 4 hectares, largest in sport" },
      { dimension: "length", label: "Goal width", value: 7.3, si_unit: "m", note: "Between goal posts" },
      { dimension: "length", label: "Goal post height", value: 3.0, si_unit: "m", note: "Minimum height" },
      { dimension: "length", label: "Ball diameter", value: 0.083, si_unit: "m", note: "Hard white plastic ball" },
    ],
  },

  {
    slug: "volga-river",
    name: "Volga River",
    subtitle: "Europe's longest river, draining a third of European Russia",
    category_id: "rivers",
    description:
      "The Volga is the longest river in Europe at 3,530 km, flowing from the Valdai Hills northwest of Moscow south to the Caspian Sea. Its drainage basin of 1.38 million square kilometers covers about one-third of European Russia. The Volga is central to Russian identity, often called 'Mother Volga' (Volga-Matushka). Eleven of Russia's twenty largest cities, including Nizhny Novgorod, Kazan, Samara, and Volgograd (formerly Stalingrad), sit along its banks. The Volga-Don Canal connects it to the Black Sea and thus to the world's oceans.",
    search_terms:
      "volga|russia|europe longest river|caspian sea|mother volga|kazan|volgograd|stalingrad",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 3530000, si_unit: "m", note: "Longest river in Europe" },
      { dimension: "area", label: "Drainage basin", value: 1.38e12, si_unit: "m2", note: "1.38 million km2" },
      { dimension: "volume", label: "Average discharge", value: 8060, si_unit: "m3", note: "Per second at the delta" },
      { dimension: "length", label: "Source elevation", value: 228, si_unit: "m", note: "Valdai Hills" },
      { dimension: "area", label: "Delta area", value: 2.8e10, si_unit: "m2", note: "28,000 km2 at the Caspian Sea" },
      { dimension: "length", label: "Maximum width", value: 2500, si_unit: "m", note: "At Kuibyshev Reservoir" },
    ],
  },

  {
    slug: "new-zealand-south-island",
    name: "South Island (New Zealand)",
    subtitle: "New Zealand's larger island with fjords, glaciers, and the Southern Alps",
    category_id: "islands",
    description:
      "The South Island of New Zealand (Te Waipounamu) is the 12th-largest island in the world at 150,437 square kilometers. It is dominated by the Southern Alps mountain range running along its spine, with the highest peak, Aoraki / Mount Cook, reaching 3,724 m. Despite being larger than the North Island, it has only about one-quarter of New Zealand's population. The island's western coast features dramatic fjords (Milford Sound, Doubtful Sound), temperate rainforests, and glaciers that descend almost to sea level.",
    search_terms:
      "south island|new zealand|te waipounamu|southern alps|aoraki|mount cook|milford sound|fjord",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Area", value: 1.5e11, si_unit: "m2", note: "150,437 km2, 12th largest island" },
      { dimension: "length", label: "Length (NE-SW)", value: 840000, si_unit: "m", note: "Maximum extent" },
      { dimension: "length", label: "Maximum width", value: 250000, si_unit: "m", note: "East-west at widest" },
      { dimension: "length", label: "Highest point (Aoraki)", value: 3724, si_unit: "m", note: "Mount Cook / Aoraki" },
      { dimension: "length", label: "Coastline", value: 6233000, si_unit: "m", note: "Highly indented by fjords" },
      { dimension: "length", label: "Franz Josef Glacier length", value: 12000, si_unit: "m", note: "Glacier descending near sea level" },
    ],
  },
];
