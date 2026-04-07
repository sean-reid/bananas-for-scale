// ── Extra things seed data (batch 1) ──────────────────────────────────────
// Marine Life, Small Animals, Everyday Objects, Cars, Ancient Structures,
// Food, Space, Events, Sports

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MARINE LIFE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "clownfish",
    name: "Clownfish",
    subtitle: "Nemo's real-life doppelganger with a taste for anemone rent-free living",
    category_id: "marine-life",
    description:
      "The clownfish (Amphiprioninae) is one of the few fish that can live among the stinging tentacles of sea anemones without being harmed, thanks to a protective mucus coating. They are sequential hermaphrodites — all are born male, and the dominant fish in a group becomes female. The largest individual in a colony is always the female, proving that size really does matter in fish politics.",
    search_terms: "clownfish|nemo|anemone|reef fish|amphiprion|tropical fish|coral reef",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.11, si_unit: "m", note: "About 11 cm; the size of a small smartphone" },
      { dimension: "mass", label: "Weight", value: 0.25, si_unit: "kg", note: "About 250 grams" },
      { dimension: "speed", label: "Swimming speed", value: 0.15, si_unit: "m/s", note: "Not built for speed — more of a homebody" },
      { dimension: "length", label: "Stripe width", value: 0.005, si_unit: "m", note: "Iconic white bands about 5 mm wide" },
      { dimension: "length", label: "Typical anemone territory radius", value: 0.3, si_unit: "m", note: "They rarely stray far from home" },
      { dimension: "time", label: "Lifespan", value: 189216000, si_unit: "s", note: "About 6 years in the wild" },
    ],
  },

  {
    slug: "whale-shark",
    name: "Whale Shark",
    subtitle: "The world's largest fish that eats the world's smallest food",
    category_id: "marine-life",
    description:
      "The whale shark (Rhincodon typus) is the largest living fish species, reaching lengths of 12 meters or more, yet it feeds almost exclusively on plankton and small fish by filter feeding. Its mouth alone can be 1.5 meters wide. Despite their enormous size, they are gentle giants that pose no threat to humans. Each whale shark has a unique pattern of spots, like a fingerprint made of polka dots.",
    search_terms: "whale shark|rhincodon|largest fish|filter feeder|gentle giant|shark|plankton",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total length", value: 12, si_unit: "m", note: "Longer than a city bus" },
      { dimension: "mass", label: "Weight", value: 19000, si_unit: "kg", note: "About 19 tonnes" },
      { dimension: "speed", label: "Cruising speed", value: 1.3, si_unit: "m/s", note: "About 5 km/h; a leisurely stroll pace" },
      { dimension: "length", label: "Mouth width", value: 1.5, si_unit: "m", note: "Wide enough to swallow a sofa, if it wanted to" },
      { dimension: "volume", label: "Water filtered per hour", value: 6, si_unit: "m³", note: "Over 6,000 liters per hour" },
      { dimension: "length", label: "Skin thickness", value: 0.1, si_unit: "m", note: "About 10 cm; the thickest skin of any animal" },
      { dimension: "time", label: "Estimated lifespan", value: 4.42e9, si_unit: "s", note: "About 70-140 years" },
    ],
  },

  {
    slug: "seahorse",
    name: "Seahorse",
    subtitle: "Nature's proof that dads can handle pregnancy",
    category_id: "marine-life",
    description:
      "Seahorses (Hippocampus) are unique among fish in that the males carry the fertilized eggs in a brood pouch until they hatch. They are remarkably poor swimmers, relying on a tiny dorsal fin that flutters up to 35 times per second. Their prehensile tail can grip coral and seagrass to keep them from drifting away. They have no stomach, so food passes through their digestive system so quickly that they must eat almost constantly.",
    search_terms: "seahorse|hippocampus|male pregnancy|ocean|coral|prehensile tail",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body height", value: 0.15, si_unit: "m", note: "About 15 cm from head to tail tip" },
      { dimension: "mass", label: "Weight", value: 0.01, si_unit: "kg", note: "About 10 grams; lighter than two nickels" },
      { dimension: "speed", label: "Swimming speed", value: 0.0015, si_unit: "m/s", note: "About 5 meters per hour; the slowest fish" },
      { dimension: "frequency", label: "Dorsal fin beat frequency", value: 35, si_unit: "Hz", note: "35 beats per second to barely move" },
      { dimension: "length", label: "Snout length", value: 0.02, si_unit: "m", note: "Tubular snout for suction feeding" },
      { dimension: "time", label: "Male pregnancy duration", value: 1728000, si_unit: "s", note: "About 14-28 days depending on species" },
    ],
  },

  {
    slug: "blue-ringed-octopus",
    name: "Blue-Ringed Octopus",
    subtitle: "A golf-ball-sized octopus with enough venom to kill 26 adults",
    category_id: "marine-life",
    description:
      "The blue-ringed octopus (Hapalochlaena) is one of the most venomous marine animals in the world, carrying tetrodotoxin — a neurotoxin 1,200 times more potent than cyanide. Despite being small enough to fit in the palm of your hand, a single bite contains enough venom to kill 26 adult humans within minutes. Its iridescent blue rings flash as a warning display. There is no known antivenom.",
    search_terms: "blue ringed octopus|venomous|tetrodotoxin|hapalochlaena|deadly|octopus|toxic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (mantle)", value: 0.05, si_unit: "m", note: "Mantle about 5 cm; total span about 20 cm" },
      { dimension: "length", label: "Total arm span", value: 0.2, si_unit: "m", note: "About 20 cm across with arms extended" },
      { dimension: "mass", label: "Weight", value: 0.08, si_unit: "kg", note: "About 80 grams; lighter than a deck of cards" },
      { dimension: "speed", label: "Jet propulsion speed", value: 0.4, si_unit: "m/s", note: "Quick bursts when threatened" },
      { dimension: "length", label: "Ring diameter", value: 0.003, si_unit: "m", note: "Distinctive blue rings about 3 mm across" },
      { dimension: "time", label: "Lifespan", value: 63072000, si_unit: "s", note: "About 2 years; live fast, die young" },
    ],
  },

  {
    slug: "leatherback-sea-turtle",
    name: "Leatherback Sea Turtle",
    subtitle: "The ocean's deepest-diving reptile with a shell made of leather, not bone",
    category_id: "marine-life",
    description:
      "The leatherback sea turtle (Dermochelys coriacea) is the largest living turtle and can dive deeper than 1,200 meters, deeper than most submarines operate. Unlike other sea turtles, its shell is flexible and leathery rather than hard and bony, which helps it withstand the immense pressure of deep dives. They migrate farther than almost any other reptile, crossing entire ocean basins to feed on jellyfish.",
    search_terms: "leatherback|sea turtle|dermochelys|deep dive|largest turtle|marine reptile|jellyfish",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Carapace length", value: 2, si_unit: "m", note: "Shell length up to 2 meters" },
      { dimension: "mass", label: "Weight", value: 700, si_unit: "kg", note: "About 700 kg; heavier than a grand piano" },
      { dimension: "speed", label: "Swimming speed", value: 2.5, si_unit: "m/s", note: "About 9 km/h; surprisingly fast for a turtle" },
      { dimension: "length", label: "Maximum dive depth", value: 1280, si_unit: "m", note: "Deeper than the Empire State Building is tall" },
      { dimension: "length", label: "Flipper span", value: 2.7, si_unit: "m", note: "Enormous front flippers for long-distance swimming" },
      { dimension: "time", label: "Dive duration", value: 4200, si_unit: "s", note: "Can hold breath for about 70 minutes" },
      { dimension: "mass", label: "Daily jellyfish consumption", value: 73, si_unit: "kg", note: "Eats roughly its own weight in jellyfish weekly" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SMALL ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "fennec-fox",
    name: "Fennec Fox",
    subtitle: "The Sahara's smallest fox with the largest ears-to-body ratio",
    category_id: "small-animals",
    description:
      "The fennec fox (Vulpes zerda) is the smallest canid in the world, but its ears — up to 15 centimeters long — are the largest relative to body size of any fox. Those comically oversized ears serve as radiators, dissipating heat in the Saharan desert where temperatures regularly exceed 50°C. They can hear prey moving underground and dig with astonishing speed to catch it.",
    search_terms: "fennec fox|vulpes zerda|desert fox|big ears|sahara|smallest fox|canid",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.4, si_unit: "m", note: "About 40 cm head to rump; tail adds another 20 cm" },
      { dimension: "mass", label: "Weight", value: 1.5, si_unit: "kg", note: "About 1.5 kg; lighter than a chihuahua" },
      { dimension: "length", label: "Ear length", value: 0.15, si_unit: "m", note: "15 cm ears — nearly 40% of body length" },
      { dimension: "speed", label: "Running speed", value: 11, si_unit: "m/s", note: "About 40 km/h in short bursts" },
      { dimension: "length", label: "Tail length", value: 0.2, si_unit: "m", note: "Fluffy tail used as a blanket during cold desert nights" },
      { dimension: "length", label: "Burrow depth", value: 1, si_unit: "m", note: "Digs burrows up to 1 meter deep" },
    ],
  },

  {
    slug: "three-toed-sloth",
    name: "Three-Toed Sloth",
    subtitle: "The world champion of doing absolutely nothing quickly",
    category_id: "small-animals",
    description:
      "The three-toed sloth (Bradypus) moves so slowly that algae grows on its fur, providing camouflage and a tiny portable ecosystem. It sleeps 15-20 hours per day and moves at a top speed of about 0.06 m/s. Its metabolic rate is about 40-45% of what would be expected for its body size. Sloths descend from the trees once a week to defecate, which is the most dangerous thing they do.",
    search_terms: "sloth|three toed|bradypus|slow|lazy|tree|central america|rainforest",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.6, si_unit: "m", note: "About 60 cm; roughly the size of a house cat" },
      { dimension: "mass", label: "Weight", value: 4, si_unit: "kg", note: "About 4 kg" },
      { dimension: "speed", label: "Maximum speed", value: 0.06, si_unit: "m/s", note: "About 0.2 km/h; a snail is only 3x slower" },
      { dimension: "length", label: "Claw length", value: 0.1, si_unit: "m", note: "10 cm claws for gripping branches" },
      { dimension: "time", label: "Daily sleep duration", value: 64800, si_unit: "s", note: "About 18 hours per day" },
      { dimension: "length", label: "Neck rotation range arc", value: 0.3, si_unit: "m", note: "Can rotate head 270 degrees thanks to extra vertebrae" },
      { dimension: "power", label: "Metabolic rate at rest", value: 2.3, si_unit: "W", note: "Extremely low metabolic rate" },
    ],
  },

  {
    slug: "hedgehog",
    name: "Hedgehog",
    subtitle: "A spiny ball of attitude that can run 6 km per night",
    category_id: "small-animals",
    description:
      "The European hedgehog (Erinaceus europaeus) is covered in about 5,000-7,000 spines, each about 2 cm long, made of keratin (the same protein as human fingernails). When threatened, it curls into a tight ball, presenting nothing but spines to predators. Despite their prickly appearance, hedgehogs are surprisingly fast runners and can cover 6 km in a single night while foraging for insects, snails, and the occasional garden slug.",
    search_terms: "hedgehog|erinaceus|spines|prickly|garden|nocturnal|insectivore",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.25, si_unit: "m", note: "About 25 cm from nose to tail" },
      { dimension: "mass", label: "Weight", value: 1, si_unit: "kg", note: "About 1 kg; heavier before hibernation" },
      { dimension: "speed", label: "Running speed", value: 1.8, si_unit: "m/s", note: "About 6.5 km/h; quick for a spiky potato" },
      { dimension: "length", label: "Spine length", value: 0.02, si_unit: "m", note: "Each spine about 2 cm long" },
      { dimension: "length", label: "Nightly foraging distance", value: 6000, si_unit: "m", note: "Covers up to 6 km per night" },
      { dimension: "time", label: "Hibernation duration", value: 15552000, si_unit: "s", note: "About 5-6 months through winter" },
    ],
  },

  {
    slug: "capybara",
    name: "Capybara",
    subtitle: "The world's largest rodent and everyone's favorite chill animal",
    category_id: "small-animals",
    description:
      "The capybara (Hydrochoerus hydrochaeris) is the world's largest living rodent, native to South America. They are semi-aquatic and can hold their breath for up to five minutes. Capybaras are famously relaxed and social, often seen with birds perched on their backs. They are basically oversized guinea pigs that have achieved a level of zen that most humans can only dream of.",
    search_terms: "capybara|hydrochoerus|largest rodent|south america|guinea pig|social|semi-aquatic",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.2, si_unit: "m", note: "About 1.2 meters long" },
      { dimension: "mass", label: "Weight", value: 55, si_unit: "kg", note: "About 55 kg; the size of a large dog" },
      { dimension: "speed", label: "Running speed", value: 8.9, si_unit: "m/s", note: "About 32 km/h; surprisingly quick" },
      { dimension: "length", label: "Height at shoulder", value: 0.6, si_unit: "m", note: "About 60 cm tall at the shoulder" },
      { dimension: "time", label: "Breath-hold duration", value: 300, si_unit: "s", note: "Can hold breath for about 5 minutes underwater" },
      { dimension: "length", label: "Incisor length", value: 0.02, si_unit: "m", note: "Ever-growing incisors about 2 cm long" },
      { dimension: "mass", label: "Daily food intake", value: 3.5, si_unit: "kg", note: "Eats about 3.5 kg of grass per day" },
    ],
  },

  {
    slug: "red-panda",
    name: "Red Panda",
    subtitle: "The original panda, discovered 48 years before its giant namesake",
    category_id: "small-animals",
    description:
      "The red panda (Ailurus fulgens) was described in Western science in 1825, nearly half a century before the giant panda. Despite the name, they are not closely related to giant pandas and are the sole living member of their family, Ailuridae. Their bushy, ringed tail serves as a blanket in cold weather and a balance aid when climbing. They spend most of their lives in trees and are crepuscular, most active at dawn and dusk.",
    search_terms: "red panda|ailurus|firefox|lesser panda|bamboo|himalaya|crepuscular",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.6, si_unit: "m", note: "About 60 cm head to rump" },
      { dimension: "mass", label: "Weight", value: 5, si_unit: "kg", note: "About 5 kg; roughly the size of a large house cat" },
      { dimension: "length", label: "Tail length", value: 0.47, si_unit: "m", note: "47 cm; nearly as long as the body" },
      { dimension: "length", label: "Home range diameter", value: 5000, si_unit: "m", note: "Territory of about 5 km across" },
      { dimension: "speed", label: "Climbing speed", value: 1.5, si_unit: "m/s", note: "Agile climber at about 5.4 km/h" },
      { dimension: "time", label: "Daily active period", value: 28800, si_unit: "s", note: "Active about 8 hours per day, mostly at dawn and dusk" },
    ],
  },

  {
    slug: "platypus",
    name: "Platypus",
    subtitle: "The venomous, egg-laying, duck-billed mammal that broke taxonomy",
    category_id: "small-animals",
    description:
      "The platypus (Ornithorhynchus anatinus) is one of only five species of egg-laying mammals. It has a duck-like bill, a beaver-like tail, venomous spurs on its hind legs, and electroreceptors in its bill that detect the electric fields of prey. When European scientists first examined a platypus specimen in 1799, they thought it was a hoax — someone sewing bits of different animals together. It is arguably the most improbable animal on Earth.",
    search_terms: "platypus|ornithorhynchus|monotreme|duck bill|venomous|egg laying|electroreception|australia",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.5, si_unit: "m", note: "About 50 cm including tail" },
      { dimension: "mass", label: "Weight", value: 2.4, si_unit: "kg", note: "About 2.4 kg for males; females are smaller" },
      { dimension: "speed", label: "Swimming speed", value: 1, si_unit: "m/s", note: "About 3.6 km/h in water" },
      { dimension: "length", label: "Bill length", value: 0.06, si_unit: "m", note: "About 6 cm; packed with electroreceptors" },
      { dimension: "length", label: "Venomous spur length", value: 0.015, si_unit: "m", note: "15 mm keratinous spur on hind ankles" },
      { dimension: "length", label: "Tail length", value: 0.12, si_unit: "m", note: "Flat, beaver-like tail for fat storage" },
      { dimension: "time", label: "Egg incubation period", value: 864000, si_unit: "s", note: "About 10 days; one of the shortest for any egg-layer" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVERYDAY OBJECTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "standard-bathtub",
    name: "Standard Bathtub",
    subtitle: "150 liters of questionable life decisions and rubber ducks",
    category_id: "everyday-objects",
    description:
      "A standard bathtub holds about 300 liters of water (0.3 cubic meters), weighs roughly 80 kg empty if made of cast iron or acrylic, and is about 1.5 meters long. Bathtubs have been around since at least 1700 BCE — the Minoans had them in Crete. Archimedes famously had his eureka moment in one, discovering the principle of buoyancy and allegedly running through the streets of Syracuse naked.",
    search_terms: "bathtub|bath|tub|bathroom|soak|water|plumbing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1.5, si_unit: "m", note: "Standard adult bathtub" },
      { dimension: "volume", label: "Water capacity", value: 0.3, si_unit: "m³", note: "About 300 liters when full" },
      { dimension: "mass", label: "Empty weight (cast iron)", value: 80, si_unit: "kg", note: "Cast iron tub; acrylic ones weigh much less" },
      { dimension: "length", label: "Width", value: 0.7, si_unit: "m", note: "About 70 cm wide" },
      { dimension: "length", label: "Depth", value: 0.4, si_unit: "m", note: "About 40 cm deep" },
      { dimension: "mass", label: "Weight when full of water", value: 380, si_unit: "kg", note: "Empty tub plus 300 kg of water" },
    ],
  },

  {
    slug: "fire-hydrant",
    name: "Fire Hydrant",
    subtitle: "The street's most kicked, painted, and peed-on piece of critical infrastructure",
    category_id: "everyday-objects",
    description:
      "A standard fire hydrant stands about 76 centimeters above ground (with another 60 cm below the surface), weighs around 230 kg, and delivers water at pressures around 550 kPa. Modern hydrants can flow over 5,000 liters per minute. They are painted specific colors to indicate flow capacity: blue for the highest, green, orange, and red for the lowest. Dogs have opinions about none of this.",
    search_terms: "fire hydrant|hydrant|firefighting|water|street|fire|plumbing|emergency",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height above ground", value: 0.76, si_unit: "m", note: "About 76 cm visible above street level" },
      { dimension: "mass", label: "Weight", value: 230, si_unit: "kg", note: "Cast iron is heavy" },
      { dimension: "pressure", label: "Water pressure", value: 550000, si_unit: "Pa", note: "About 550 kPa or 80 psi" },
      { dimension: "length", label: "Below-ground depth", value: 0.6, si_unit: "m", note: "60 cm buried below the frost line" },
      { dimension: "length", label: "Outlet diameter", value: 0.114, si_unit: "m", note: "Standard 4.5-inch pumper nozzle" },
      { dimension: "volume", label: "Volume delivered per minute", value: 5, si_unit: "m³", note: "Over 5,000 liters per minute at full flow" },
    ],
  },

  {
    slug: "refrigerator",
    name: "Refrigerator",
    subtitle: "The humming monolith that knows all your 2 AM secrets",
    category_id: "everyday-objects",
    description:
      "A standard household refrigerator stands about 1.78 meters tall, weighs around 100 kg, and holds roughly 500 liters of internal volume. It runs on about 150 watts and maintains an interior temperature of about 4°C. The modern fridge is one of the most important inventions of the 20th century, dramatically reducing foodborne illness and enabling entirely new cuisines. It is also where leftovers go to be forgotten.",
    search_terms: "refrigerator|fridge|kitchen|appliance|cold|cooling|food storage",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.78, si_unit: "m", note: "Standard full-size fridge" },
      { dimension: "mass", label: "Weight", value: 100, si_unit: "kg", note: "Empty weight; heavier when stocked" },
      { dimension: "volume", label: "Internal volume", value: 0.5, si_unit: "m³", note: "About 500 liters of storage space" },
      { dimension: "power", label: "Power consumption", value: 150, si_unit: "W", note: "About 150 watts average; varies with door openings" },
      { dimension: "temperature", label: "Interior temperature", value: 277, si_unit: "K", note: "About 4°C; the food safety sweet spot" },
      { dimension: "length", label: "Width", value: 0.9, si_unit: "m", note: "About 90 cm wide" },
      { dimension: "energy", label: "Annual energy consumption", value: 1.314e9, si_unit: "J", note: "About 365 kWh per year" },
    ],
  },

  {
    slug: "washing-machine",
    name: "Washing Machine",
    subtitle: "The appliance that eats socks and calls it a cycle",
    category_id: "everyday-objects",
    description:
      "A standard front-loading washing machine weighs about 80 kg, has a drum volume of about 80 liters, and spins at up to 1,000-1,400 RPM during the spin cycle. It uses about 500 watts during washing and generates enough centrifugal force to push water through fabric at high speed. The missing sock phenomenon remains one of the great unsolved mysteries of domestic science.",
    search_terms: "washing machine|washer|laundry|appliance|spin cycle|clothes|cleaning",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight", value: 80, si_unit: "kg", note: "Heavy enough to stay put during spin cycle... usually" },
      { dimension: "volume", label: "Drum volume", value: 0.08, si_unit: "m³", note: "About 80 liters; fits roughly 8 kg of laundry" },
      { dimension: "power", label: "Power consumption", value: 500, si_unit: "W", note: "About 500 watts during wash cycle" },
      { dimension: "frequency", label: "Maximum spin frequency", value: 16.7, si_unit: "Hz", note: "About 1,000 RPM; some go to 1,400 RPM" },
      { dimension: "length", label: "Height", value: 0.85, si_unit: "m", note: "Standard 85 cm tall" },
      { dimension: "length", label: "Width", value: 0.6, si_unit: "m", note: "Standard 60 cm wide" },
      { dimension: "volume", label: "Water usage per cycle", value: 0.05, si_unit: "m³", note: "About 50 liters per wash" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CARS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "volkswagen-beetle",
    name: "Volkswagen Beetle",
    subtitle: "The people's car that conquered the world one sputter at a time",
    category_id: "cars",
    description:
      "The original Volkswagen Beetle, designed by Ferdinand Porsche under commission from Adolf Hitler, became one of the best-selling cars of all time with over 21 million units produced. The air-cooled flat-four engine produced a modest 25-50 horsepower, yet the car's simplicity, reliability, and charm made it a counterculture icon. It starred in Disney movies, was adopted by hippies, and proved that a car designed by a dictator could become a symbol of peace and love.",
    search_terms: "volkswagen beetle|vw bug|beetle|peoples car|herbie|air cooled|classic car",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 4.08, si_unit: "m", note: "About 4.08 meters; compact by any era's standards" },
      { dimension: "mass", label: "Curb weight", value: 840, si_unit: "kg", note: "About 840 kg; remarkably light" },
      { dimension: "power", label: "Engine power (original)", value: 37000, si_unit: "W", note: "About 50 HP from the flat-four engine" },
      { dimension: "speed", label: "Top speed", value: 32, si_unit: "m/s", note: "About 115 km/h; downhill with a tailwind" },
      { dimension: "length", label: "Width", value: 1.54, si_unit: "m", note: "1.54 meters wide" },
      { dimension: "length", label: "Height", value: 1.5, si_unit: "m", note: "1.5 meters tall; the iconic dome" },
      { dimension: "volume", label: "Trunk volume (front)", value: 0.14, si_unit: "m³", note: "About 140 liters in the front trunk" },
    ],
  },

  {
    slug: "mini-cooper",
    name: "Mini Cooper",
    subtitle: "The tiny British icon that proved less is more at 200 km/h",
    category_id: "cars",
    description:
      "The Mini Cooper, born in 1961 as a performance variant of the BMC Mini, became a motorsport legend by winning the Monte Carlo Rally three times in the 1960s. The modern BMW-era Mini Cooper has grown considerably but retains the go-kart-like handling that made the original famous. It remains one of the most recognizable car silhouettes in the world and a staple of every car chase scene set in London or Turin.",
    search_terms: "mini cooper|mini|bmc|british|compact|rally|italian job|go kart",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 3.82, si_unit: "m", note: "Modern Mini Cooper; the original was only 3.05 m" },
      { dimension: "mass", label: "Curb weight", value: 1200, si_unit: "kg", note: "About 1,200 kg; the original was just 620 kg" },
      { dimension: "speed", label: "Top speed", value: 55, si_unit: "m/s", note: "About 200 km/h for the Cooper S" },
      { dimension: "length", label: "Width", value: 1.73, si_unit: "m", note: "1.73 meters wide" },
      { dimension: "length", label: "Height", value: 1.41, si_unit: "m", note: "Low profile at 1.41 meters" },
      { dimension: "power", label: "Engine power", value: 100000, si_unit: "W", note: "About 136 HP for base model" },
      { dimension: "length", label: "Wheelbase", value: 2.5, si_unit: "m", note: "2.5 meter wheelbase" },
    ],
  },

  {
    slug: "ford-f150",
    name: "Ford F-150",
    subtitle: "America's best-selling vehicle for 47 straight years and counting",
    category_id: "cars",
    description:
      "The Ford F-150 has been the best-selling vehicle in the United States for nearly half a century. It is large, powerful, and quintessentially American. With a 3.5-liter twin-turbo V6 producing nearly 400 horsepower and a towing capacity of over 6,000 kg, it is both a workhorse and a status symbol. The aluminum body (since 2015) saved about 300 kg, which Ford immediately reinvested into making the truck bigger.",
    search_terms: "ford f150|f-150|truck|pickup|america|towing|v6|aluminum",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 5.9, si_unit: "m", note: "5.9 meters; longer than many European parking spaces" },
      { dimension: "mass", label: "Curb weight", value: 2100, si_unit: "kg", note: "About 2,100 kg; varies by configuration" },
      { dimension: "power", label: "Engine power", value: 298000, si_unit: "W", note: "About 400 HP from the 3.5L EcoBoost V6" },
      { dimension: "force", label: "Maximum towing force", value: 60000, si_unit: "N", note: "Can tow about 6,100 kg" },
      { dimension: "length", label: "Width", value: 2.03, si_unit: "m", note: "Over 2 meters wide without mirrors" },
      { dimension: "length", label: "Height", value: 1.96, si_unit: "m", note: "Nearly 2 meters tall" },
      { dimension: "length", label: "Bed length", value: 1.68, si_unit: "m", note: "5.5-foot bed; longer options available" },
      { dimension: "volume", label: "Fuel tank", value: 0.098, si_unit: "m³", note: "About 98 liters (26 gallons)" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ANCIENT STRUCTURES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "petra-the-treasury",
    name: "Petra — The Treasury",
    subtitle: "A temple carved from a cliff face that Indiana Jones made famous",
    category_id: "ancient-structures",
    description:
      "Al-Khazneh (The Treasury) in Petra, Jordan, was carved directly into the sandstone cliff face by the Nabataean people around the 1st century BCE. Standing 40 meters tall and 25 meters wide, it was likely a royal tomb rather than an actual treasury. The rose-red facade has survived over 2,000 years of desert winds, earthquakes, and flash floods. It became world-famous as the setting for the climax of Indiana Jones and the Last Crusade.",
    search_terms: "petra|treasury|al khazneh|nabataean|jordan|carved|sandstone|indiana jones",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 40, si_unit: "m", note: "40 meters tall; about a 13-story building" },
      { dimension: "length", label: "Width", value: 25, si_unit: "m", note: "25-meter wide facade" },
      { dimension: "length", label: "Column height", value: 12, si_unit: "m", note: "Each of the six main columns is 12 meters" },
      { dimension: "length", label: "Interior depth", value: 12, si_unit: "m", note: "The main chamber extends 12 meters into the cliff" },
      { dimension: "time", label: "Age", value: 6.63e10, si_unit: "s", note: "About 2,100 years old" },
      { dimension: "area", label: "Facade area", value: 1000, si_unit: "m²", note: "Approximately 1,000 m² of carved surface" },
    ],
  },

  {
    slug: "chichen-itza-el-castillo",
    name: "Chichen Itza — El Castillo",
    subtitle: "A Mayan pyramid that puts on a serpent light show twice a year",
    category_id: "ancient-structures",
    description:
      "El Castillo (the Temple of Kukulcan) at Chichen Itza is a step pyramid built by the Maya civilization around the 9th-12th century CE. It stands 30 meters tall on a 55-meter base. During the spring and autumn equinoxes, sunlight creates a shadow pattern on the north staircase that resembles a feathered serpent descending the pyramid. The structure encodes astronomical knowledge: 365 steps (one for each day), 52 panels (one for each year in the Maya calendar round), and 18 terraces (one for each month).",
    search_terms: "chichen itza|el castillo|kukulcan|maya|pyramid|equinox|serpent|yucatan|mexico",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 30, si_unit: "m", note: "30 meters from base to temple top" },
      { dimension: "length", label: "Base length", value: 55, si_unit: "m", note: "55-meter square base" },
      { dimension: "mass", label: "Estimated mass", value: 1e8, si_unit: "kg", note: "About 100,000 tonnes of limestone" },
      { dimension: "area", label: "Base area", value: 3025, si_unit: "m²", note: "55 m x 55 m square footprint" },
      { dimension: "length", label: "Step width", value: 0.26, si_unit: "m", note: "91 steps per side, 364 total plus the temple platform = 365" },
      { dimension: "time", label: "Age", value: 3.47e10, si_unit: "s", note: "About 1,000-1,100 years old" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FOOD
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "a-single-egg",
    name: "A Single Egg",
    subtitle: "Nature's most perfectly packaged protein delivery system",
    category_id: "food",
    description:
      "A standard large chicken egg weighs about 60 grams, has a volume of about 53 milliliters, and can withstand a force of roughly 30 newtons before the shell cracks. The shell itself is only about 0.3 mm thick yet is an engineering marvel — its arch shape distributes force so efficiently that you cannot crush it by squeezing it uniformly in your palm. It contains about 6 grams of protein, 5 grams of fat, and the complete nutritional blueprint for building an entire chicken.",
    search_terms: "egg|chicken egg|shell|protein|breakfast|poultry|oval",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight", value: 0.06, si_unit: "kg", note: "About 60 grams for a large egg" },
      { dimension: "volume", label: "Volume", value: 5.3e-5, si_unit: "m³", note: "About 53 milliliters" },
      { dimension: "force", label: "Shell breaking force", value: 30, si_unit: "N", note: "About 30 N applied at a point" },
      { dimension: "length", label: "Length", value: 0.056, si_unit: "m", note: "About 5.6 cm long" },
      { dimension: "length", label: "Shell thickness", value: 0.0003, si_unit: "m", note: "Only 0.3 mm thick; architectural genius" },
      { dimension: "energy", label: "Caloric energy", value: 293000, si_unit: "J", note: "About 70 calories or 293 kJ" },
    ],
  },

  {
    slug: "a-slice-of-bread",
    name: "A Slice of Bread",
    subtitle: "The greatest thing since... well, itself",
    category_id: "food",
    description:
      "A standard slice of white bread weighs about 30 grams, is about 12 mm thick, and contains roughly 67 calories (280 kJ) of energy. Sliced bread was first sold in 1928 by the Chillicothe Baking Company in Missouri, and was advertised as 'the greatest forward step in the baking industry since bread was wrapped.' It quickly became the benchmark against which all other innovations would be judged.",
    search_terms: "bread|slice|toast|wheat|loaf|sandwich|carbs|bakery",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight", value: 0.03, si_unit: "kg", note: "About 30 grams per slice" },
      { dimension: "energy", label: "Caloric energy", value: 280000, si_unit: "J", note: "About 67 calories or 280 kJ" },
      { dimension: "length", label: "Thickness", value: 0.012, si_unit: "m", note: "About 12 mm; standard pre-sliced" },
      { dimension: "length", label: "Height", value: 0.12, si_unit: "m", note: "About 12 cm tall" },
      { dimension: "length", label: "Width", value: 0.1, si_unit: "m", note: "About 10 cm wide" },
      { dimension: "area", label: "Surface area (one face)", value: 0.012, si_unit: "m²", note: "About 120 cm² of toast-able surface" },
    ],
  },

  {
    slug: "a-cup-of-coffee",
    name: "A Cup of Coffee",
    subtitle: "The liquid that turns 'I can't even' into 'I am unstoppable'",
    category_id: "food",
    description:
      "A standard cup of brewed coffee is about 236 milliliters, weighs roughly 240 grams (slightly denser than water due to dissolved solids), and is served at around 67°C (340 K). It contains about 95 mg of caffeine, which provides roughly 8,400 joules of metabolic energy boost. Coffee is the world's second most traded commodity after crude oil, and about 2.25 billion cups are consumed globally every day.",
    search_terms: "coffee|cup|caffeine|espresso|brew|morning|java|bean",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Volume", value: 0.000236, si_unit: "m³", note: "About 236 mL; one standard US cup" },
      { dimension: "mass", label: "Weight", value: 0.24, si_unit: "kg", note: "About 240 grams" },
      { dimension: "temperature", label: "Serving temperature", value: 340, si_unit: "K", note: "About 67°C; hot but not scalding" },
      { dimension: "energy", label: "Caffeine metabolic energy", value: 8400, si_unit: "J", note: "Energy boost from ~95 mg of caffeine" },
      { dimension: "energy", label: "Caloric energy (black)", value: 8400, si_unit: "J", note: "About 2 calories black; add milk at your own caloric risk" },
      { dimension: "mass", label: "Caffeine content", value: 0.000095, si_unit: "kg", note: "About 95 mg of caffeine" },
    ],
  },

  {
    slug: "chocolate-bar",
    name: "Chocolate Bar",
    subtitle: "100 grams of happiness in a foil wrapper",
    category_id: "food",
    description:
      "A standard chocolate bar weighs about 100 grams, is roughly 20 cm long, and packs about 2.3 million joules (550 calories) of energy. Chocolate was consumed as a bitter drink by the Aztecs for centuries before Europeans added sugar and turned it into the confection we know today. The melting point of cocoa butter (about 34°C) is just below human body temperature, which is why chocolate melts so satisfyingly on the tongue.",
    search_terms: "chocolate|candy bar|cocoa|sweet|confection|cacao|candy",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight", value: 0.1, si_unit: "kg", note: "Standard 100-gram bar" },
      { dimension: "energy", label: "Caloric energy", value: 2.3e6, si_unit: "J", note: "About 550 calories; no regrets" },
      { dimension: "length", label: "Length", value: 0.2, si_unit: "m", note: "About 20 cm long" },
      { dimension: "length", label: "Width", value: 0.08, si_unit: "m", note: "About 8 cm wide" },
      { dimension: "length", label: "Thickness", value: 0.01, si_unit: "m", note: "About 10 mm thick" },
      { dimension: "temperature", label: "Melting point", value: 307, si_unit: "K", note: "About 34°C; just below body temperature" },
    ],
  },

  {
    slug: "a-pint-of-beer",
    name: "A Pint of Beer",
    subtitle: "473 milliliters of liquid courage served at precisely the right temperature",
    category_id: "food",
    description:
      "A US pint of beer is 473 milliliters (an Imperial pint is 568 mL, but we will not start that argument). It weighs about 480 grams, should be served at about 4°C (277 K) for a lager or 10-14°C for an ale, and contains roughly 600,000 joules of energy. Beer is one of the oldest beverages in human history, with evidence of brewing dating back to 3400 BCE in Iran. It may have been the reason humans invented agriculture in the first place.",
    search_terms: "beer|pint|ale|lager|brew|pub|draft|alcohol|brewery",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Volume", value: 0.000473, si_unit: "m³", note: "US pint; 473 mL" },
      { dimension: "mass", label: "Weight", value: 0.48, si_unit: "kg", note: "About 480 grams; slightly denser than water" },
      { dimension: "temperature", label: "Ideal serving temperature (lager)", value: 277, si_unit: "K", note: "About 4°C; properly cold" },
      { dimension: "energy", label: "Caloric energy", value: 600000, si_unit: "J", note: "About 150 calories per pint" },
      { dimension: "length", label: "Glass height", value: 0.18, si_unit: "m", note: "Standard pint glass about 18 cm tall" },
      { dimension: "pressure", label: "Carbonation pressure", value: 250000, si_unit: "Pa", note: "About 2.5 atm of CO₂ in a typical lager" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPACE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "stellar-black-hole",
    name: "Black Hole — Stellar Mass",
    subtitle: "A dead star so dense that light itself cannot escape",
    category_id: "space-other",
    description:
      "A stellar-mass black hole forms when a massive star (at least 20-25 times the mass of the Sun) collapses at the end of its life. A typical stellar black hole has about 10 solar masses and an event horizon diameter of about 60 km. Within that boundary, the escape velocity exceeds the speed of light, making it a one-way trip for anything that crosses it. Despite their fearsome reputation, stellar black holes are relatively common — there may be 100 million of them in the Milky Way alone.",
    search_terms: "black hole|stellar|event horizon|singularity|collapse|gravity|spacetime",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 2e31, si_unit: "kg", note: "About 10 solar masses" },
      { dimension: "length", label: "Event horizon diameter", value: 60000, si_unit: "m", note: "About 60 km across; smaller than a city" },
      { dimension: "speed", label: "Escape velocity (at horizon)", value: 299792458, si_unit: "m/s", note: "The speed of light; that is the whole point" },
      { dimension: "length", label: "Schwarzschild radius", value: 30000, si_unit: "m", note: "About 30 km" },
      { dimension: "force", label: "Tidal force at 1000 km", value: 5e10, si_unit: "N", note: "Extreme tidal stretching (spaghettification)" },
      { dimension: "temperature", label: "Hawking temperature", value: 6e-9, si_unit: "K", note: "About 6 nanokelvin; essentially zero" },
    ],
  },

  {
    slug: "asteroid-belt",
    name: "The Asteroid Belt",
    subtitle: "Less dramatic than Star Wars suggests — mostly empty space",
    category_id: "space-other",
    description:
      "The asteroid belt lies between Mars and Jupiter, spanning a width of about 150 million km (1 AU). Despite what movies show, the average distance between asteroids is about 1 million km, so spacecraft pass through without incident. The total mass of the entire belt is only about 4% of the Moon's mass, with the dwarf planet Ceres accounting for about a third of that. If you gathered all the asteroids together, they would form an object smaller than the Moon.",
    search_terms: "asteroid belt|asteroids|ceres|mars jupiter|main belt|solar system|rocky",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Total mass", value: 3.2e21, si_unit: "kg", note: "About 4% of the Moon's mass" },
      { dimension: "length", label: "Radial width", value: 1.5e11, si_unit: "m", note: "About 1 AU or 150 million km" },
      { dimension: "length", label: "Inner edge distance from Sun", value: 3.3e11, si_unit: "m", note: "About 2.2 AU from the Sun" },
      { dimension: "length", label: "Outer edge distance from Sun", value: 4.8e11, si_unit: "m", note: "About 3.2 AU from the Sun" },
      { dimension: "length", label: "Average spacing between asteroids", value: 1e9, si_unit: "m", note: "About 1 million km apart; very empty" },
      { dimension: "speed", label: "Average orbital speed", value: 18000, si_unit: "m/s", note: "About 18 km/s" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENTS & PHENOMENA
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "a-human-hiccup",
    name: "A Human Hiccup",
    subtitle: "An involuntary spasm that serves absolutely no known purpose",
    category_id: "events",
    description:
      "A hiccup is an involuntary contraction of the diaphragm followed by a rapid closure of the vocal cords, producing the characteristic 'hic' sound. Each hiccup lasts about 35 milliseconds and involves a diaphragm contraction force of about 50 newtons. The longest recorded case of hiccups lasted 68 years (Charles Osborne, 1922-1990). Despite extensive research, the biological purpose of hiccups remains unknown — they may be a vestigial reflex from our amphibian ancestors.",
    search_terms: "hiccup|hiccough|diaphragm|spasm|involuntary|reflex",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Duration of single hiccup", value: 0.035, si_unit: "s", note: "About 35 milliseconds" },
      { dimension: "force", label: "Diaphragm contraction force", value: 50, si_unit: "N", note: "About 50 newtons of involuntary force" },
      { dimension: "frequency", label: "Typical hiccup rate", value: 0.25, si_unit: "Hz", note: "About 4-15 per minute when hiccupping" },
      { dimension: "speed", label: "Air velocity through glottis", value: 12, si_unit: "m/s", note: "Air rushes in at about 12 m/s before the snap" },
      { dimension: "time", label: "Longest recorded bout", value: 2.15e9, si_unit: "s", note: "Charles Osborne hiccupped for 68 years straight" },
      { dimension: "pressure", label: "Intrathoracic pressure drop", value: 5000, si_unit: "Pa", note: "About 5 kPa negative pressure" },
    ],
  },

  {
    slug: "a-heartbeat",
    name: "A Heartbeat",
    subtitle: "The 0.8-second rhythm that keeps the whole show running",
    category_id: "events",
    description:
      "A single human heartbeat lasts about 0.8 seconds and generates roughly 1.3 joules of energy — enough to lift a 130-gram object one meter. The heart contracts with a force of about 1.5 newtons and pushes about 70 milliliters of blood per beat. Over a 75-year lifetime, the heart beats approximately 2.5 billion times without taking a single break, pumping enough blood to fill about 200 train tanker cars. It is the most reliable pump ever engineered — by nature.",
    search_terms: "heartbeat|heart|cardiac|pulse|beat|cardiovascular|rhythm",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Duration of one beat", value: 0.8, si_unit: "s", note: "About 0.8 seconds at resting heart rate" },
      { dimension: "force", label: "Contraction force", value: 1.5, si_unit: "N", note: "Left ventricle squeeze force" },
      { dimension: "energy", label: "Energy per beat", value: 1.3, si_unit: "J", note: "About 1.3 joules per contraction" },
      { dimension: "volume", label: "Stroke volume", value: 7e-5, si_unit: "m³", note: "About 70 mL of blood per beat" },
      { dimension: "pressure", label: "Peak systolic pressure", value: 16000, si_unit: "Pa", note: "About 120 mmHg; normal blood pressure" },
      { dimension: "power", label: "Cardiac power output", value: 1.5, si_unit: "W", note: "About 1.5 watts at rest; the body's tireless engine" },
      { dimension: "frequency", label: "Resting heart rate", value: 1.17, si_unit: "Hz", note: "About 70 beats per minute" },
    ],
  },

  {
    slug: "a-clap-of-thunder",
    name: "A Clap of Thunder",
    subtitle: "Nature's way of applauding its own lightning show",
    category_id: "events",
    description:
      "Thunder is the shockwave produced when lightning superheats the air to about 30,000 K (five times the surface temperature of the Sun), causing it to expand faster than the speed of sound. A single clap of thunder releases roughly 250 million joules of acoustic energy and lasts about 0.2 seconds for the initial crack, followed by rumbling that can last 15-20 seconds as sound echoes off terrain. The sound travels at 343 m/s, which is why you can estimate lightning distance by counting seconds between flash and boom.",
    search_terms: "thunder|lightning|storm|acoustic|shockwave|weather|electric|boom",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Acoustic energy", value: 250e6, si_unit: "J", note: "About 250 million joules; incredibly loud" },
      { dimension: "time", label: "Initial crack duration", value: 0.2, si_unit: "s", note: "The sharp crack lasts about 0.2 seconds" },
      { dimension: "speed", label: "Speed of sound", value: 343, si_unit: "m/s", note: "About 1,235 km/h in air at sea level" },
      { dimension: "temperature", label: "Lightning channel temperature", value: 30000, si_unit: "K", note: "Five times hotter than the Sun's surface" },
      { dimension: "pressure", label: "Shockwave overpressure", value: 500000, si_unit: "Pa", note: "About 5 atm near the strike; enough to shatter windows" },
      { dimension: "length", label: "Audible range", value: 25000, si_unit: "m", note: "Thunder can be heard up to 25 km away" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPORTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "soccer-goal",
    name: "Soccer Goal",
    subtitle: "7.32 meters of hope, heartbreak, and occasionally a net",
    category_id: "sports",
    description:
      "A regulation soccer (football) goal is exactly 7.32 meters wide and 2.44 meters tall, dimensions that have remained unchanged since 1882. The total goal mouth area is about 17.86 square meters. The posts and crossbar must be white and no more than 12 cm in diameter. Professional goalkeepers must cover this area against shots traveling up to 130 km/h, which mathematically means they have no business saving anything — yet somehow they do.",
    search_terms: "soccer goal|football goal|goalpost|net|pitch|regulation|FIFA",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 7.32, si_unit: "m", note: "Exactly 7.32 meters (8 yards) inside measurement" },
      { dimension: "length", label: "Height", value: 2.44, si_unit: "m", note: "Exactly 2.44 meters (8 feet) to underside of crossbar" },
      { dimension: "area", label: "Goal mouth area", value: 17.86, si_unit: "m²", note: "About 17.86 m² to defend" },
      { dimension: "length", label: "Post diameter", value: 0.12, si_unit: "m", note: "Maximum 12 cm diameter; usually round or elliptical" },
      { dimension: "length", label: "Net depth", value: 2, si_unit: "m", note: "Net extends about 2 meters back from the goal line" },
      { dimension: "mass", label: "Goal weight (aluminum)", value: 55, si_unit: "kg", note: "Full-size aluminum goal weighs about 55 kg" },
    ],
  },

  {
    slug: "basketball-court",
    name: "Basketball Court",
    subtitle: "436 square meters of squeaking sneakers and dramatic flopping",
    category_id: "sports",
    description:
      "An NBA regulation basketball court is 28.65 meters long and 15.24 meters wide, giving a total playing area of about 436.6 square meters. The court surface is typically made of hard maple wood, specifically sugar maple (Acer saccharum), which provides the optimal balance of hardness, smoothness, and bounce. Each floor consists of 220 panels, and many are sourced from the same forests in Michigan and Wisconsin.",
    search_terms: "basketball court|nba|court|hardwood|maple|three point|regulation",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Court length", value: 28.65, si_unit: "m", note: "94 feet in freedom units" },
      { dimension: "length", label: "Court width", value: 15.24, si_unit: "m", note: "50 feet wide" },
      { dimension: "area", label: "Total playing area", value: 436.6, si_unit: "m²", note: "About 437 m²" },
      { dimension: "length", label: "Rim height", value: 3.05, si_unit: "m", note: "Exactly 10 feet; unchanged since 1891" },
      { dimension: "length", label: "Three-point line distance", value: 7.24, si_unit: "m", note: "NBA three-point arc (23 feet 9 inches)" },
      { dimension: "length", label: "Free-throw distance", value: 4.57, si_unit: "m", note: "15 feet from the backboard" },
      { dimension: "length", label: "Rim diameter", value: 0.457, si_unit: "m", note: "18 inches; just wide enough for the ball with clearance" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE MARINE LIFE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "giant-pacific-octopus",
    name: "Giant Pacific Octopus",
    subtitle: "The ocean's smartest invertebrate with three hearts and blue blood",
    category_id: "marine-life",
    description:
      "The giant Pacific octopus (Enteroctopus dofleini) is the largest octopus species, with an arm span of up to 6 meters and a mass of around 50 kg. It has three hearts, blue blood (copper-based hemocyanin), nine brains (one central, one in each arm), and can squeeze through any opening larger than its beak. They can change color and texture in milliseconds, solve puzzles, open jars, and have been known to escape aquariums through plumbing.",
    search_terms: "giant pacific octopus|enteroctopus|cephalopod|intelligent|tentacles|blue blood",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Arm span", value: 6, si_unit: "m", note: "Up to 6 meters from arm tip to arm tip" },
      { dimension: "mass", label: "Weight", value: 50, si_unit: "kg", note: "About 50 kg; record specimens over 70 kg" },
      { dimension: "speed", label: "Jet speed", value: 11, si_unit: "m/s", note: "About 40 km/h in short bursts via jet propulsion" },
      { dimension: "length", label: "Mantle length", value: 0.6, si_unit: "m", note: "Body (mantle) about 60 cm" },
      { dimension: "length", label: "Sucker diameter", value: 0.065, si_unit: "m", note: "Largest suckers about 6.5 cm across" },
      { dimension: "time", label: "Lifespan", value: 1.26e8, si_unit: "s", note: "Only 3-5 years; tragically short for such intelligence" },
    ],
  },

  {
    slug: "nautilus",
    name: "Chambered Nautilus",
    subtitle: "A living fossil that has been cruising the deep for 500 million years",
    category_id: "marine-life",
    description:
      "The chambered nautilus (Nautilus pompilius) is a cephalopod that has remained virtually unchanged for over 500 million years, predating dinosaurs by a quarter billion years. Its beautiful spiral shell contains gas-filled chambers that regulate buoyancy — essentially a natural submarine. Unlike its octopus and squid relatives, it has up to 90 tentacles but no suckers, relying on a sticky mucus instead.",
    search_terms: "nautilus|chambered|living fossil|cephalopod|spiral shell|deep sea|buoyancy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Shell diameter", value: 0.2, si_unit: "m", note: "About 20 cm across" },
      { dimension: "mass", label: "Weight", value: 1, si_unit: "kg", note: "About 1 kg with shell" },
      { dimension: "length", label: "Maximum depth", value: 700, si_unit: "m", note: "Lives at depths down to 700 m" },
      { dimension: "speed", label: "Jet propulsion speed", value: 0.3, si_unit: "m/s", note: "Slow but steady at about 1 km/h" },
      { dimension: "time", label: "Evolutionary age", value: 1.58e16, si_unit: "s", note: "Lineage over 500 million years old" },
      { dimension: "length", label: "Tentacle length", value: 0.1, si_unit: "m", note: "Up to 90 short tentacles, about 10 cm each" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE SMALL ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "axolotl",
    name: "Axolotl",
    subtitle: "The perpetually smiling salamander that can regrow its own brain",
    category_id: "small-animals",
    description:
      "The axolotl (Ambystoma mexicanum) is a neotenic salamander that retains its larval features throughout its life, including external gills that look like feathery crowns. Native only to Lake Xochimilco in Mexico City, it can regenerate limbs, spinal cord, heart tissue, and even parts of its brain — abilities that make it invaluable to medical research. It is critically endangered in the wild but thrives in laboratories and aquariums worldwide.",
    search_terms: "axolotl|salamander|regeneration|mexican|amphibian|neotenic|xochimilco|walking fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.25, si_unit: "m", note: "About 25 cm; can reach 30 cm" },
      { dimension: "mass", label: "Weight", value: 0.2, si_unit: "kg", note: "About 200 grams" },
      { dimension: "length", label: "Gill branch length", value: 0.04, si_unit: "m", note: "External gills about 4 cm long" },
      { dimension: "speed", label: "Swimming speed", value: 0.15, si_unit: "m/s", note: "Leisurely swimmer at about 0.5 km/h" },
      { dimension: "time", label: "Limb regeneration time", value: 5.184e6, si_unit: "s", note: "About 60 days to fully regrow a limb" },
      { dimension: "time", label: "Lifespan", value: 4.73e8, si_unit: "s", note: "About 10-15 years in captivity" },
    ],
  },

  {
    slug: "sugar-glider",
    name: "Sugar Glider",
    subtitle: "A palm-sized marsupial that glides 50 meters between trees",
    category_id: "small-animals",
    description:
      "The sugar glider (Petaurus breviceps) is a tiny marsupial that can glide up to 50 meters between trees using a membrane called a patagium that stretches from its wrists to its ankles. Weighing only about 130 grams, it is nocturnal, omnivorous, and intensely social — they will become depressed if kept alone. They are named for their preference for sugary foods like nectar and tree sap.",
    search_terms: "sugar glider|petaurus|marsupial|gliding|patagium|nocturnal|pocket pet",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.17, si_unit: "m", note: "About 17 cm head to rump" },
      { dimension: "mass", label: "Weight", value: 0.13, si_unit: "kg", note: "About 130 grams; fits in your palm" },
      { dimension: "length", label: "Tail length", value: 0.19, si_unit: "m", note: "Tail longer than the body at 19 cm" },
      { dimension: "length", label: "Maximum glide distance", value: 50, si_unit: "m", note: "Can glide 50 meters in a single leap" },
      { dimension: "speed", label: "Gliding speed", value: 15, si_unit: "m/s", note: "About 54 km/h while gliding" },
      { dimension: "area", label: "Patagium area (spread)", value: 0.02, si_unit: "m²", note: "About 200 cm² of gliding membrane" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE EVERYDAY OBJECTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "traffic-cone",
    name: "Traffic Cone",
    subtitle: "The orange sentinel of roadwork that doubles as a party hat",
    category_id: "everyday-objects",
    description:
      "The standard traffic cone stands 71 cm tall, weighs about 4.5 kg (with rubber base), and is made of PVC or rubber. Invented in 1940 by Charles D. Scanlon, a street painter in Los Angeles, traffic cones have become one of the most recognized safety devices in the world. They are also one of the most stolen objects on college campuses, frequently appearing on statues, rooftops, and the heads of inebriated students.",
    search_terms: "traffic cone|cone|road|construction|orange|safety|road work|pylon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.71, si_unit: "m", note: "Standard 28-inch cone" },
      { dimension: "mass", label: "Weight", value: 4.5, si_unit: "kg", note: "About 4.5 kg with weighted base" },
      { dimension: "length", label: "Base width", value: 0.36, si_unit: "m", note: "About 36 cm square base" },
      { dimension: "length", label: "Top diameter", value: 0.05, si_unit: "m", note: "About 5 cm at the tip" },
      { dimension: "area", label: "Reflective band area", value: 0.04, si_unit: "m²", note: "Two reflective bands totaling about 400 cm²" },
      { dimension: "volume", label: "Volume of cone", value: 0.003, si_unit: "m³", note: "About 3 liters if you somehow filled one" },
    ],
  },

  {
    slug: "grand-piano",
    name: "Grand Piano",
    subtitle: "Two tonnes of wire, wood, and exquisite tension",
    category_id: "everyday-objects",
    description:
      "A concert grand piano (Steinway Model D) is about 2.74 meters long, weighs approximately 480 kg, and contains about 230 steel strings under a combined tension of roughly 200,000 newtons (20 tonnes). The cast iron plate inside must withstand this enormous force without warping. Each of the 88 keys can produce dynamics from pianissimo to fortissimo, and the entire instrument has a frequency range from 27.5 Hz (A0) to 4,186 Hz (C8).",
    search_terms: "grand piano|steinway|concert piano|keyboard|classical|music|instrument",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2.74, si_unit: "m", note: "Steinway Model D concert grand" },
      { dimension: "mass", label: "Weight", value: 480, si_unit: "kg", note: "About 480 kg; requires professional movers" },
      { dimension: "force", label: "Total string tension", value: 200000, si_unit: "N", note: "About 20 tonnes of tension across all strings" },
      { dimension: "frequency", label: "Lowest note frequency (A0)", value: 27.5, si_unit: "Hz", note: "The lowest A on the keyboard" },
      { dimension: "frequency", label: "Highest note frequency (C8)", value: 4186, si_unit: "Hz", note: "The highest C on the keyboard" },
      { dimension: "length", label: "Width", value: 1.57, si_unit: "m", note: "About 1.57 meters at the widest point" },
      { dimension: "length", label: "Longest string length", value: 2, si_unit: "m", note: "Bass strings up to 2 meters long" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE FOOD
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "a-grain-of-rice",
    name: "A Grain of Rice",
    subtitle: "The tiny seed that feeds half of humanity",
    category_id: "food",
    description:
      "A single grain of long-grain white rice weighs about 25 milligrams, is about 7 mm long, and contains roughly 300 joules of energy. Rice feeds more than 3.5 billion people daily and has been cultivated for over 10,000 years. There are more than 40,000 varieties of rice. A typical serving contains about 3,500 grains, and global production exceeds 500 million tonnes per year — about 60 kg for every person on Earth.",
    search_terms: "rice|grain|oryza|staple food|asia|paddy|carbohydrate",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight of one grain", value: 0.000025, si_unit: "kg", note: "About 25 milligrams" },
      { dimension: "length", label: "Length", value: 0.007, si_unit: "m", note: "About 7 mm for long-grain variety" },
      { dimension: "energy", label: "Caloric energy per grain", value: 300, si_unit: "J", note: "About 0.07 calories per grain" },
      { dimension: "length", label: "Width", value: 0.002, si_unit: "m", note: "About 2 mm wide" },
      { dimension: "volume", label: "Volume of one grain", value: 1.5e-8, si_unit: "m³", note: "About 0.015 mL per grain" },
      { dimension: "mass", label: "Global annual production", value: 5e11, si_unit: "kg", note: "Over 500 million tonnes per year" },
    ],
  },

];
