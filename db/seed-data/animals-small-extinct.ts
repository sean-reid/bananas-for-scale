// ── Seed data: Small Animals, Insects, Dinosaurs/Extinct, Plants, Microscopic ─

import type { ThingInput } from "../types";

export const categoriesData = [
  {
    id: "small-animals",
    name: "Small Animals",
    description:
      "The petite members of the animal kingdom, from pocket-sized pets to backyard birds.",
    sort_order: 20,
  },
  {
    id: "insects",
    name: "Insects & Arachnids",
    description:
      "The six- and eight-legged creatures that outnumber us in every conceivable way.",
    sort_order: 21,
  },
  {
    id: "plants",
    name: "Plants",
    description:
      "The silent giants and crafty carnivores of the botanical world, measured root to tip.",
    sort_order: 22,
  },
  {
    id: "microscopic",
    name: "Microscopic",
    description:
      "Life at the edge of visibility, where a millimeter feels like a marathon.",
    sort_order: 23,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SMALL ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "chihuahua",
    name: "Chihuahua",
    subtitle: "The world's smallest recognized dog breed",
    category_id: "small-animals",
    description:
      "The Chihuahua packs an outsized personality into a body that barely tips the scales. Originating in the Mexican state of the same name, these tiny dogs have the largest brain-to-body ratio of any breed and a resting heart rate that would alarm a cardiologist. They shiver not just from cold but from sheer excitement at existing.",
    search_terms: "chihuahua|dog|small dog|toy breed|mexican dog",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height at shoulder", value: 0.2, si_unit: "m", note: "Breed standard 15-23 cm" },
      { dimension: "length", label: "Body length", value: 0.24, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 2, si_unit: "kg", note: "Breed standard 1.5-3 kg" },
      { dimension: "frequency", label: "Resting heart rate", value: 2.33, si_unit: "Hz", note: "About 140 bpm" },
      { dimension: "temperature", label: "Body temperature", value: 311.5, si_unit: "K", note: "About 38.3 C" },
      { dimension: "speed", label: "Top running speed", value: 6.7, si_unit: "m/s", note: "About 24 km/h" },
      { dimension: "time", label: "Average lifespan", value: 473040000, si_unit: "s", note: "About 15 years" },
    ],
  },
  {
    slug: "hamster",
    name: "Hamster",
    subtitle: "The tiny rodent that logs marathon miles on a wheel each night",
    category_id: "small-animals",
    description:
      "Syrian hamsters are nocturnal hoarders that can stuff their cheek pouches with food equal to their own body mass. On a wheel, they routinely cover 8 km per night. Despite their cuddly reputation, those incisors never stop growing, and a startled hamster will absolutely let you know it.",
    search_terms: "hamster|rodent|pet|syrian hamster|golden hamster|wheel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.13, si_unit: "m", note: "Syrian hamster, nose to rump" },
      { dimension: "mass", label: "Body mass", value: 0.03, si_unit: "kg", note: "Typical Syrian hamster ~30 g" },
      { dimension: "frequency", label: "Heart rate", value: 7, si_unit: "Hz", note: "About 420 bpm" },
      { dimension: "length", label: "Nightly distance on wheel", value: 8000, si_unit: "m", note: "About 8 km per night" },
      { dimension: "temperature", label: "Body temperature", value: 310, si_unit: "K", note: "About 37 C" },
      { dimension: "time", label: "Average lifespan", value: 63072000, si_unit: "s", note: "About 2 years" },
      { dimension: "speed", label: "Top running speed", value: 1.3, si_unit: "m/s", note: "About 4.7 km/h" },
    ],
  },
  {
    slug: "ruby-throated-hummingbird",
    name: "Hummingbird (Ruby-throated)",
    subtitle: "A flying jewel that beats its wings 53 times per second",
    category_id: "small-animals",
    description:
      "The ruby-throated hummingbird is a 3-gram metabolic miracle that crosses the Gulf of Mexico nonstop during migration. Its heart beats over 1,200 times per minute during flight, and it can hover, fly backward, and even fly upside down briefly. At night it enters torpor, dropping its body temperature to save energy.",
    search_terms: "hummingbird|ruby-throated|bird|hovering|nectar|migration",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Body mass", value: 0.003, si_unit: "kg", note: "About 3 grams" },
      { dimension: "length", label: "Wingspan", value: 0.1, si_unit: "m", note: "About 10 cm tip to tip" },
      { dimension: "frequency", label: "Wingbeat frequency", value: 53, si_unit: "Hz", note: "53 beats per second in normal flight" },
      { dimension: "frequency", label: "Heart rate in flight", value: 20, si_unit: "Hz", note: "About 1,200 bpm" },
      { dimension: "speed", label: "Forward flight speed", value: 12, si_unit: "m/s", note: "About 43 km/h" },
      { dimension: "length", label: "Body length", value: 0.08, si_unit: "m", note: "Bill tip to tail" },
      { dimension: "length", label: "Gulf of Mexico crossing", value: 800000, si_unit: "m", note: "Nonstop ~800 km over open water" },
      { dimension: "energy", label: "Daily energy expenditure", value: 30000, si_unit: "J", note: "About 30 kJ per day" },
    ],
  },
  {
    slug: "red-eyed-tree-frog",
    name: "Red-Eyed Tree Frog",
    subtitle: "The neon-eyed poster child of tropical rainforests",
    category_id: "small-animals",
    description:
      "With its vivid crimson eyes and lime-green body, the red-eyed tree frog is the ambassador of Central American rainforests. Those shocking eyes serve a purpose: when startled, it flashes them open to startle predators, a defense called startle coloration. Despite looking exotic, it is completely non-venomous.",
    search_terms: "frog|tree frog|red-eyed|amphibian|rainforest|agalychnis",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.07, si_unit: "m", note: "Snout to vent, females slightly larger" },
      { dimension: "mass", label: "Body mass", value: 0.01, si_unit: "kg", note: "About 10 g" },
      { dimension: "length", label: "Jump distance", value: 1.5, si_unit: "m", note: "Over 20 times its body length" },
      { dimension: "length", label: "Toe pad diameter", value: 0.005, si_unit: "m" },
      { dimension: "time", label: "Egg development time", value: 604800, si_unit: "s", note: "About 7 days" },
      { dimension: "temperature", label: "Preferred temperature", value: 299, si_unit: "K", note: "About 26 C" },
    ],
  },
  {
    slug: "tokay-gecko",
    name: "Gecko (Tokay)",
    subtitle: "A loud, colorful lizard that can walk on ceilings",
    category_id: "small-animals",
    description:
      "The tokay gecko is one of the largest gecko species and one of the loudest. Named for its distinctive \"TO-kay!\" call, it uses millions of microscopic hair-like setae on its toe pads to cling to nearly any surface via van der Waals forces. It has a notoriously strong bite for its size and a personality to match.",
    search_terms: "gecko|tokay|lizard|reptile|climbing|adhesion|setae",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 0.35, si_unit: "m", note: "Head to tail tip" },
      { dimension: "mass", label: "Body mass", value: 0.15, si_unit: "kg", note: "About 150 g for large males" },
      { dimension: "force", label: "Adhesion force per toe", value: 20, si_unit: "N", note: "Each toe pad can support ~20 N" },
      { dimension: "force", label: "Bite force", value: 25, si_unit: "N", note: "Strong for its size" },
      { dimension: "length", label: "Seta length", value: 0.0001, si_unit: "m", note: "About 100 micrometers each" },
      { dimension: "time", label: "Average lifespan", value: 315360000, si_unit: "s", note: "About 10 years" },
      { dimension: "speed", label: "Running speed", value: 1.5, si_unit: "m/s" },
    ],
  },
  {
    slug: "domestic-cat",
    name: "Domestic Cat",
    subtitle: "Humanity's favorite apex predator in a 4.5 kg package",
    category_id: "small-animals",
    description:
      "The domestic cat has convinced half the planet to serve as its personal staff. Behind those adorable toe beans lies one of nature's most efficient predators, capable of leaping six times its body length and rotating its ears 180 degrees independently. A cat's purr vibrates at a frequency that may actually promote bone healing.",
    search_terms: "cat|domestic cat|house cat|feline|kitten|purr",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.46, si_unit: "m", note: "Nose to base of tail" },
      { dimension: "mass", label: "Body mass", value: 4.5, si_unit: "kg", note: "Average adult" },
      { dimension: "length", label: "Vertical jump height", value: 1.8, si_unit: "m", note: "About 6 times body length" },
      { dimension: "speed", label: "Top sprint speed", value: 13.4, si_unit: "m/s", note: "About 48 km/h" },
      { dimension: "frequency", label: "Purr frequency", value: 25, si_unit: "Hz", note: "Range 25-50 Hz, promotes tissue healing" },
      { dimension: "frequency", label: "Resting heart rate", value: 2.5, si_unit: "Hz", note: "About 150 bpm" },
      { dimension: "length", label: "Whisker span", value: 0.16, si_unit: "m", note: "Roughly matches body width" },
      { dimension: "time", label: "Daily sleep time", value: 50400, si_unit: "s", note: "About 14 hours per day" },
      { dimension: "temperature", label: "Body temperature", value: 311.9, si_unit: "K", note: "About 38.9 C" },
    ],
  },
  {
    slug: "corgi",
    name: "Corgi",
    subtitle: "The low-rider herding dog favored by royalty",
    category_id: "small-animals",
    description:
      "The Pembroke Welsh Corgi was bred to herd cattle by nipping at their heels, low enough to dodge retaliatory kicks. Despite those comically short legs, corgis are athletic, surprisingly fast, and powered by an apparently infinite energy source. Queen Elizabeth II owned more than 30 during her reign.",
    search_terms: "corgi|pembroke|welsh corgi|dog|herding|queen|short legs",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height at shoulder", value: 0.3, si_unit: "m", note: "25-30 cm at the shoulder" },
      { dimension: "length", label: "Body length", value: 0.6, si_unit: "m", note: "Nose to tail" },
      { dimension: "mass", label: "Body mass", value: 12, si_unit: "kg", note: "Breed standard 10-14 kg" },
      { dimension: "speed", label: "Top running speed", value: 11, si_unit: "m/s", note: "About 40 km/h, surprisingly fast" },
      { dimension: "frequency", label: "Resting heart rate", value: 1.67, si_unit: "Hz", note: "About 100 bpm" },
      { dimension: "time", label: "Average lifespan", value: 394200000, si_unit: "s", note: "About 12.5 years" },
      { dimension: "temperature", label: "Body temperature", value: 311.5, si_unit: "K", note: "About 38.3 C" },
    ],
  },
  {
    slug: "bald-eagle",
    name: "Bald Eagle",
    subtitle: "America's national bird and a fearsome aerial hunter",
    category_id: "small-animals",
    description:
      "The bald eagle is not actually bald; the name comes from the Old English \"balde,\" meaning white. With a 2-meter wingspan, talons that grip with over 400 newtons of force, and eyesight roughly 4 to 8 times sharper than a human's, this raptor is built to snatch fish from the water at highway speeds. Their nests can weigh over a metric ton.",
    search_terms: "eagle|bald eagle|raptor|bird of prey|america|national bird",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 2.1, si_unit: "m", note: "Average adult female" },
      { dimension: "mass", label: "Body mass", value: 5, si_unit: "kg", note: "Females 4.3-6.3 kg, males smaller" },
      { dimension: "speed", label: "Diving speed", value: 44, si_unit: "m/s", note: "About 160 km/h in a dive" },
      { dimension: "force", label: "Talon grip force", value: 440, si_unit: "N", note: "About 10 times human grip strength" },
      { dimension: "speed", label: "Cruising flight speed", value: 18, si_unit: "m/s", note: "About 65 km/h" },
      { dimension: "length", label: "Nest diameter", value: 2.5, si_unit: "m", note: "Largest recorded was 2.9 m across" },
      { dimension: "mass", label: "Nest mass", value: 907, si_unit: "kg", note: "Some nests exceed 1,000 kg over years" },
      { dimension: "length", label: "Talon length", value: 0.05, si_unit: "m", note: "Rear hallux talon" },
    ],
  },
  {
    slug: "emperor-penguin",
    name: "Emperor Penguin",
    subtitle: "The tallest penguin and deepest avian diver on Earth",
    category_id: "small-animals",
    description:
      "Emperor penguins breed during the Antarctic winter, enduring temperatures of -60 C and winds of 200 km/h. Males incubate eggs on their feet for over two months without eating, losing nearly half their body mass. They are the deepest-diving birds, plunging over 500 meters below the surface on a single breath.",
    search_terms: "penguin|emperor penguin|antarctic|diving|bird|flightless",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Standing height", value: 1.15, si_unit: "m", note: "Tallest of all penguin species" },
      { dimension: "mass", label: "Body mass", value: 40, si_unit: "kg", note: "30-45 kg depending on season" },
      { dimension: "length", label: "Maximum dive depth", value: 535, si_unit: "m", note: "Deepest recorded avian dive" },
      { dimension: "speed", label: "Swimming speed", value: 3.6, si_unit: "m/s", note: "About 13 km/h" },
      { dimension: "time", label: "Maximum dive duration", value: 1380, si_unit: "s", note: "About 23 minutes on one breath" },
      { dimension: "time", label: "Egg incubation period", value: 5702400, si_unit: "s", note: "About 66 days" },
      { dimension: "temperature", label: "Survival temperature", value: 213, si_unit: "K", note: "Survives -60 C Antarctic winters" },
      { dimension: "speed", label: "Tobogganing speed", value: 1.7, si_unit: "m/s", note: "Sliding on belly across ice" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INSECTS & ARACHNIDS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "mosquito",
    name: "Mosquito",
    subtitle: "The deadliest animal on Earth, weighing less than a raindrop",
    category_id: "insects",
    description:
      "Mosquitoes kill more humans annually than any other animal, roughly 700,000 per year via diseases like malaria. At just 2.5 milligrams, a single mosquito weighs about 1/40th of a raindrop, yet it can drink up to three times its body mass in blood. Their wings beat 600 times per second, producing that maddening whine at roughly the pitch of a D-sharp.",
    search_terms: "mosquito|insect|malaria|blood|disease|bite|fly",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Body mass", value: 0.0000025, si_unit: "kg", note: "About 2.5 mg" },
      { dimension: "length", label: "Wingspan", value: 0.005, si_unit: "m", note: "About 5 mm" },
      { dimension: "frequency", label: "Wingbeat frequency", value: 600, si_unit: "Hz", note: "Produces the characteristic whine" },
      { dimension: "speed", label: "Flight speed", value: 2, si_unit: "m/s", note: "About 7 km/h" },
      { dimension: "length", label: "Body length", value: 0.006, si_unit: "m", note: "About 6 mm" },
      { dimension: "mass", label: "Blood meal mass", value: 0.000005, si_unit: "kg", note: "Can drink 2-3x its body weight" },
      { dimension: "length", label: "Proboscis length", value: 0.002, si_unit: "m" },
      { dimension: "time", label: "Adult lifespan", value: 3456000, si_unit: "s", note: "About 40 days for females" },
    ],
  },
  {
    slug: "goliath-birdeater-spider",
    name: "Goliath Bird-Eating Spider",
    subtitle: "The world's heaviest spider, with a leg span wider than a dinner plate",
    category_id: "insects",
    description:
      "The Goliath birdeater (Theraphosa blondi) is the world's heaviest spider and can weigh as much as a baseball. Despite its name, it rarely eats birds, preferring earthworms and insects. When threatened, it rubs its legs together to fling urticating hairs that irritate predators. Its fangs are long enough to puncture a mouse skull.",
    search_terms: "spider|goliath|birdeater|tarantula|arachnid|theraphosa",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Leg span", value: 0.3, si_unit: "m", note: "Up to 30 cm across" },
      { dimension: "mass", label: "Body mass", value: 0.175, si_unit: "kg", note: "About 175 g, heaviest spider on record" },
      { dimension: "length", label: "Fang length", value: 0.025, si_unit: "m", note: "About 2.5 cm, like small cat claws" },
      { dimension: "length", label: "Body length", value: 0.12, si_unit: "m", note: "Abdomen and cephalothorax" },
      { dimension: "time", label: "Lifespan (female)", value: 630720000, si_unit: "s", note: "Females can live 15-25 years" },
      { dimension: "force", label: "Bite force", value: 1.5, si_unit: "N" },
      { dimension: "speed", label: "Striking speed", value: 0.5, si_unit: "m/s" },
    ],
  },
  {
    slug: "monarch-butterfly",
    name: "Monarch Butterfly",
    subtitle: "A half-gram insect that migrates 4,800 km on paper-thin wings",
    category_id: "insects",
    description:
      "The monarch butterfly undertakes one of the longest insect migrations on Earth, traveling up to 4,800 km from Canada to central Mexico. No single butterfly completes the round trip; it takes multiple generations. They navigate using a sun compass in their antennae and are toxic to predators thanks to milkweed consumed as caterpillars.",
    search_terms: "butterfly|monarch|migration|insect|milkweed|danaus",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Body mass", value: 0.0005, si_unit: "kg", note: "About 0.5 g" },
      { dimension: "length", label: "Wingspan", value: 0.1, si_unit: "m", note: "About 10 cm" },
      { dimension: "length", label: "Migration distance", value: 4800000, si_unit: "m", note: "One-way, Canada to Mexico" },
      { dimension: "speed", label: "Flight speed", value: 5, si_unit: "m/s", note: "About 18 km/h cruising" },
      { dimension: "length", label: "Daily migration distance", value: 130000, si_unit: "m", note: "Up to 130 km per day" },
      { dimension: "time", label: "Migration generation lifespan", value: 6912000, si_unit: "s", note: "About 8 months for the migratory generation" },
      { dimension: "length", label: "Altitude during migration", value: 3000, si_unit: "m", note: "Glides at up to 3,000 m elevation" },
    ],
  },
  {
    slug: "leafcutter-ant",
    name: "Ant (Leafcutter)",
    subtitle: "Tiny farmers that carry 50 times their body weight",
    category_id: "insects",
    description:
      "Leafcutter ants don't eat the leaves they carry. Instead, they use them to cultivate fungus gardens underground, making them one of the few non-human species that practice agriculture. A single colony can contain 8 million individuals and strip a tree bare overnight. Relative to their size, their carrying ability is like a human hauling a car with their teeth.",
    search_terms: "ant|leafcutter|insect|colony|fungus|agriculture|atta",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Worker body mass", value: 0.000001, si_unit: "kg", note: "About 1 mg" },
      { dimension: "mass", label: "Carrying capacity", value: 0.00005, si_unit: "kg", note: "Can carry 50 times body weight" },
      { dimension: "length", label: "Worker body length", value: 0.01, si_unit: "m", note: "Workers range 1-15 mm by caste" },
      { dimension: "force", label: "Mandible force", value: 0.06, si_unit: "N", note: "Relative to size, immensely strong" },
      { dimension: "length", label: "Colony tunnel depth", value: 8, si_unit: "m", note: "Nests extend up to 8 m underground" },
      { dimension: "speed", label: "Foraging speed", value: 0.03, si_unit: "m/s", note: "About 3 cm per second" },
      { dimension: "time", label: "Queen lifespan", value: 630720000, si_unit: "s", note: "Queens can live about 20 years" },
    ],
  },
  {
    slug: "praying-mantis",
    name: "Praying Mantis",
    subtitle: "A patient ambush predator with reflexes faster than a blink",
    category_id: "insects",
    description:
      "The praying mantis strikes with its raptorial forelegs in as little as 30 milliseconds, far faster than the human eye can follow. It is the only insect that can rotate its head 180 degrees to scan for prey. Some species are known to eat hummingbirds, and the females' reputation for decapitating mates, while exaggerated, is grounded in real behavior.",
    search_terms: "mantis|praying mantis|insect|predator|ambush|mantodea",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.1, si_unit: "m", note: "Typical large species" },
      { dimension: "mass", label: "Body mass", value: 0.007, si_unit: "kg", note: "About 7 g" },
      { dimension: "time", label: "Strike time", value: 0.03, si_unit: "s", note: "Raptorial foreleg strike in 30 ms" },
      { dimension: "speed", label: "Strike speed", value: 2.5, si_unit: "m/s", note: "Foreleg extension speed" },
      { dimension: "length", label: "Visual range", value: 18, si_unit: "m", note: "Can detect movement at ~18 m; head rotates 180 degrees" },
      { dimension: "time", label: "Adult lifespan", value: 31536000, si_unit: "s", note: "About 12 months in the wild" },
    ],
  },
  {
    slug: "hercules-beetle",
    name: "Hercules Beetle",
    subtitle: "The strongest animal relative to body weight on the planet",
    category_id: "insects",
    description:
      "The Hercules beetle (Dynastes hercules) can carry up to 850 times its own body weight, the equivalent of a human lifting 65 tons. Males sport an enormous horn that can exceed the length of their body, used in shoving matches with rivals. They are the longest beetles in the world, and their elytra can change color from green to black depending on humidity.",
    search_terms: "beetle|hercules|insect|strong|horn|dynastes|rhinoceros",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (with horn)", value: 0.17, si_unit: "m", note: "Males up to 17 cm including horn" },
      { dimension: "mass", label: "Body mass", value: 0.04, si_unit: "kg", note: "About 40 g" },
      { dimension: "force", label: "Carrying force", value: 333, si_unit: "N", note: "Can support 850x body weight" },
      { dimension: "length", label: "Horn length", value: 0.08, si_unit: "m", note: "Male's thoracic horn up to 8 cm" },
      { dimension: "length", label: "Wingspan", value: 0.22, si_unit: "m", note: "Hindwing span when open" },
      { dimension: "time", label: "Larval stage duration", value: 47304000, si_unit: "s", note: "About 1.5 years as a grub" },
      { dimension: "mass", label: "Larval mass", value: 0.12, si_unit: "kg", note: "Grubs can weigh up to 120 g" },
    ],
  },
  {
    slug: "dragonfly",
    name: "Dragonfly",
    subtitle: "An ancient aerial predator with a 95% hunting success rate",
    category_id: "insects",
    description:
      "Dragonflies have been flying for over 300 million years, predating dinosaurs by a comfortable margin. With a hunting success rate of up to 95%, they are among the most efficient predators on Earth. Each of their four wings can operate independently, allowing them to hover, fly backward, and change direction almost instantaneously.",
    search_terms: "dragonfly|insect|odonata|flying|predator|wings|pond",
    featured: 0,
    measurements: [
      { dimension: "speed", label: "Top flight speed", value: 15, si_unit: "m/s", note: "About 54 km/h" },
      { dimension: "length", label: "Wingspan", value: 0.1, si_unit: "m", note: "Typical species; some reach 16 cm" },
      { dimension: "mass", label: "Body mass", value: 0.001, si_unit: "kg", note: "About 1 g" },
      { dimension: "frequency", label: "Wingbeat frequency", value: 30, si_unit: "Hz", note: "About 30 beats per second" },
      { dimension: "length", label: "Body length", value: 0.07, si_unit: "m", note: "Common species average" },
      { dimension: "length", label: "Visual detection range", value: 12, si_unit: "m", note: "Can spot prey at distance" },
      { dimension: "time", label: "Reaction time", value: 0.03, si_unit: "s", note: "About 30 ms to intercept prey" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DINOSAURS & EXTINCT ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "velociraptor",
    name: "Velociraptor",
    subtitle: "A feathered pack hunter the size of a turkey, not a movie monster",
    category_id: "dinosaurs",
    description:
      "Forget the Jurassic Park version. The real Velociraptor was about the size of a large turkey, covered in feathers, and had a devastating sickle-shaped claw on each foot. Fossils found in Mongolia show it was an agile predator of the Late Cretaceous, and one famous fossil preserves it locked in combat with a Protoceratops.",
    search_terms: "velociraptor|dinosaur|raptor|cretaceous|feathered|dromaeosaur",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 2, si_unit: "m", note: "Nose to tail" },
      { dimension: "mass", label: "Body mass", value: 15, si_unit: "kg", note: "About the size of a large turkey" },
      { dimension: "speed", label: "Estimated top speed", value: 11, si_unit: "m/s", note: "About 40 km/h" },
      { dimension: "length", label: "Standing height", value: 0.5, si_unit: "m", note: "At the hip" },
      { dimension: "length", label: "Sickle claw length", value: 0.065, si_unit: "m", note: "The famous killing claw, ~6.5 cm" },
      { dimension: "length", label: "Skull length", value: 0.25, si_unit: "m", note: "Long, narrow snout" },
      { dimension: "time", label: "Era", value: 2.37e15, si_unit: "s", note: "Lived about 75 million years ago" },
    ],
  },
  {
    slug: "woolly-mammoth",
    name: "Woolly Mammoth",
    subtitle: "The ice age icon with tusks longer than a car",
    category_id: "dinosaurs",
    description:
      "Woolly mammoths roamed the frozen steppe of Europe, Asia, and North America until roughly 4,000 years ago, meaning they overlapped with the Egyptian pyramids. Their curved tusks could grow over 4 meters long, and their dense fur kept them warm at -50 C. Frozen specimens have been found so well preserved that scientists have extracted viable DNA.",
    search_terms: "mammoth|woolly mammoth|ice age|tusk|extinct|pleistocene|elephant",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Shoulder height", value: 3.4, si_unit: "m", note: "Males averaged 3.4 m at the shoulder" },
      { dimension: "mass", label: "Body mass", value: 6000, si_unit: "kg", note: "About 6 metric tons" },
      { dimension: "length", label: "Tusk length", value: 4.2, si_unit: "m", note: "Longest recorded tusk along the curve" },
      { dimension: "length", label: "Fur length", value: 0.9, si_unit: "m", note: "Outer guard hairs up to 90 cm" },
      { dimension: "mass", label: "Daily food intake", value: 180, si_unit: "kg", note: "About 180 kg of vegetation per day" },
      { dimension: "temperature", label: "Survival temperature", value: 223, si_unit: "K", note: "Survived -50 C winters" },
      { dimension: "time", label: "Extinction date", value: 1.26e11, si_unit: "s", note: "Last population ~4,000 years ago on Wrangel Island" },
    ],
  },
  {
    slug: "megalodon",
    name: "Megalodon",
    subtitle: "A prehistoric shark with jaws wide enough to swallow a car",
    category_id: "dinosaurs",
    description:
      "Otodus megalodon was the apex predator of the Miocene oceans, dwarfing the modern great white shark. With teeth the size of a human hand and a bite force estimated at over 100,000 newtons, it could crush whale bone. It went extinct roughly 3.6 million years ago, likely due to cooling oceans and competition from evolving whale-hunting orcas.",
    search_terms: "megalodon|shark|prehistoric|ocean|teeth|otodus|giant shark",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Estimated body length", value: 15, si_unit: "m", note: "Estimates range 15-18 m" },
      { dimension: "mass", label: "Estimated body mass", value: 48000, si_unit: "kg", note: "About 48 metric tons" },
      { dimension: "force", label: "Bite force", value: 108500, si_unit: "N", note: "Estimated peak, strongest bite ever" },
      { dimension: "length", label: "Tooth length", value: 0.18, si_unit: "m", note: "Largest teeth about 18 cm" },
      { dimension: "length", label: "Jaw gape width", value: 3.4, si_unit: "m", note: "Estimated open jaw diameter" },
      { dimension: "speed", label: "Estimated swimming speed", value: 5, si_unit: "m/s", note: "About 18 km/h cruising" },
      { dimension: "time", label: "Extinction date", value: 1.14e14, si_unit: "s", note: "About 3.6 million years ago" },
      { dimension: "length", label: "Dorsal fin height", value: 1.6, si_unit: "m", note: "Estimated from body proportions" },
    ],
  },
  {
    slug: "dodo",
    name: "Dodo",
    subtitle: "The flightless bird whose name became synonymous with extinction",
    category_id: "dinosaurs",
    description:
      "The dodo (Raphus cucullatus) lived exclusively on Mauritius and had no natural predators, which is exactly why it didn't survive meeting Dutch sailors in 1598. Flightless, fearless, and apparently delicious, it was extinct by 1681. Despite its reputation for stupidity, it was simply a well-adapted bird that had no experience with mammals or their appetites.",
    search_terms: "dodo|bird|extinct|mauritius|flightless|raphus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 1, si_unit: "m", note: "About 1 meter tall" },
      { dimension: "mass", label: "Body mass", value: 17.5, si_unit: "kg", note: "Estimates range 10-21 kg" },
      { dimension: "length", label: "Beak length", value: 0.23, si_unit: "m", note: "Distinctive hooked beak" },
      { dimension: "length", label: "Femur length", value: 0.12, si_unit: "m", note: "From skeletal remains" },
      { dimension: "time", label: "Years of human contact before extinction", value: 2619000000, si_unit: "s", note: "About 83 years from discovery (1598) to extinction (1681)" },
      { dimension: "mass", label: "Estimated egg mass", value: 0.5, si_unit: "kg" },
    ],
  },
  {
    slug: "brachiosaurus",
    name: "Brachiosaurus",
    subtitle: "A sauropod tall enough to peer into a four-story window",
    category_id: "dinosaurs",
    description:
      "Brachiosaurus was one of the tallest dinosaurs, with front legs longer than its hind legs, giving it an upward-sloping body profile unlike most sauropods. Its head could reach 13 meters above the ground, allowing it to browse treetops like a living crane. It needed to eat an estimated 200 kg of vegetation daily to fuel its massive body.",
    search_terms: "brachiosaurus|dinosaur|sauropod|jurassic|tall|herbivore",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 22, si_unit: "m", note: "Nose to tail" },
      { dimension: "mass", label: "Body mass", value: 56000, si_unit: "kg", note: "About 56 metric tons" },
      { dimension: "length", label: "Head height", value: 13, si_unit: "m", note: "Head could reach 13 m above ground" },
      { dimension: "length", label: "Neck length", value: 9, si_unit: "m", note: "About 9 m long" },
      { dimension: "mass", label: "Daily food intake", value: 200, si_unit: "kg", note: "About 200 kg of vegetation per day" },
      { dimension: "length", label: "Humerus length", value: 2.04, si_unit: "m", note: "Upper arm bone" },
      { dimension: "time", label: "Era", value: 4.73e15, si_unit: "s", note: "Lived about 150 million years ago" },
    ],
  },
  {
    slug: "stegosaurus",
    name: "Stegosaurus",
    subtitle: "The plated dinosaur with a brain the size of a walnut",
    category_id: "dinosaurs",
    description:
      "Stegosaurus is famous for two things: its double row of bony plates and its spectacularly small brain. At roughly 80 grams, its brain was the size of a walnut in a 5-ton body, giving it one of the lowest brain-to-body ratios of any dinosaur. Its spiked tail (the \"thagomizer\") was a fearsome defensive weapon, though, so it didn't need to outthink its enemies.",
    search_terms: "stegosaurus|dinosaur|plates|thagomizer|jurassic|herbivore",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 9, si_unit: "m", note: "Nose to tail tip" },
      { dimension: "mass", label: "Body mass", value: 5000, si_unit: "kg", note: "About 5 metric tons" },
      { dimension: "mass", label: "Brain mass", value: 0.08, si_unit: "kg", note: "About 80 g, the size of a walnut" },
      { dimension: "length", label: "Dorsal plate height", value: 0.6, si_unit: "m", note: "Largest plates about 60 cm tall" },
      { dimension: "length", label: "Tail spike length", value: 0.9, si_unit: "m", note: "The thagomizer spikes, ~90 cm" },
      { dimension: "length", label: "Standing height", value: 4, si_unit: "m", note: "About 4 m at the tallest plate" },
      { dimension: "time", label: "Era", value: 4.73e15, si_unit: "s", note: "Lived about 150 million years ago" },
    ],
  },
  {
    slug: "pteranodon",
    name: "Pteranodon",
    subtitle: "A flying reptile with a wingspan wider than a small airplane",
    category_id: "dinosaurs",
    description:
      "Pteranodon was not a dinosaur but a pterosaur, a flying reptile that soared over Late Cretaceous seas. With a 5.6-meter wingspan and a body mass of only 20 kg, it was built for efficient gliding. Its distinctive backward-pointing head crest likely served as a counterbalance to its long beak and may have been used in mating displays.",
    search_terms: "pteranodon|pterosaur|flying reptile|cretaceous|wing|prehistoric",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 5.6, si_unit: "m", note: "Average adult male" },
      { dimension: "mass", label: "Body mass", value: 20, si_unit: "kg", note: "Extremely lightweight for its size" },
      { dimension: "length", label: "Head crest length", value: 0.8, si_unit: "m", note: "Males had longer crests" },
      { dimension: "length", label: "Beak length", value: 1.2, si_unit: "m", note: "Long, toothless beak" },
      { dimension: "speed", label: "Estimated gliding speed", value: 11, si_unit: "m/s", note: "About 40 km/h" },
      { dimension: "length", label: "Body length", value: 1.8, si_unit: "m", note: "Head to tail" },
      { dimension: "time", label: "Era", value: 2.68e15, si_unit: "s", note: "Lived about 85 million years ago" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLANTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "giant-sequoia",
    name: "Giant Sequoia",
    subtitle: "The most massive living thing on Earth",
    category_id: "plants",
    description:
      "Giant sequoias (Sequoiadendron giganteum) are the largest trees by volume on the planet. General Sherman, the biggest, contains enough wood to build 40 five-room houses. Their bark can be 60 cm thick and is virtually fireproof, which is handy because they actually depend on periodic fires to reproduce. Some living specimens started growing before the Roman Empire existed.",
    search_terms: "sequoia|giant sequoia|tree|redwood|general sherman|massive|california",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 84, si_unit: "m", note: "General Sherman is 84 m tall" },
      { dimension: "mass", label: "Total mass", value: 1200000, si_unit: "kg", note: "About 1,200 metric tons" },
      { dimension: "length", label: "Trunk base diameter", value: 7, si_unit: "m", note: "At ground level" },
      { dimension: "time", label: "Age of oldest specimens", value: 1.01e11, si_unit: "s", note: "About 3,200 years" },
      { dimension: "length", label: "Bark thickness", value: 0.6, si_unit: "m", note: "Fireproof bark up to 60 cm thick" },
      { dimension: "volume", label: "Trunk volume", value: 1487, si_unit: "m³", note: "General Sherman trunk volume" },
      { dimension: "length", label: "Root spread radius", value: 30, si_unit: "m", note: "Shallow but wide root system" },
      { dimension: "length", label: "Cone length", value: 0.07, si_unit: "m", note: "Surprisingly small, about 7 cm" },
    ],
  },
  {
    slug: "baobab",
    name: "Baobab",
    subtitle: "The upside-down tree that stores a swimming pool in its trunk",
    category_id: "plants",
    description:
      "Baobabs (Adansonia) look like they've been yanked out of the ground and stuck back in upside down, earning them the nickname \"upside-down tree.\" Their swollen trunks can store up to 120,000 liters of water, making them living reservoirs in the African savanna. Some are so massive that their hollowed trunks have been used as bars, prisons, and bus shelters.",
    search_terms: "baobab|tree|africa|water storage|adansonia|upside down",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 25, si_unit: "m", note: "Typical mature specimen" },
      { dimension: "length", label: "Trunk diameter", value: 11, si_unit: "m", note: "Some trunks exceed 11 m across" },
      { dimension: "mass", label: "Total mass", value: 75000, si_unit: "kg", note: "About 75 metric tons when hydrated" },
      { dimension: "volume", label: "Water storage volume", value: 120, si_unit: "m³", note: "Up to 120,000 liters in the trunk" },
      { dimension: "length", label: "Trunk circumference", value: 34, si_unit: "m", note: "Largest recorded circumference" },
      { dimension: "time", label: "Maximum age", value: 6.31e10, si_unit: "s", note: "Some specimens over 2,000 years old" },
      { dimension: "length", label: "Fruit length", value: 0.3, si_unit: "m", note: "Fruit pods about 30 cm long" },
    ],
  },
  {
    slug: "corpse-flower",
    name: "Corpse Flower",
    subtitle: "A 3-meter flower that smells like rotting flesh",
    category_id: "plants",
    description:
      "Amorphophallus titanum produces the largest unbranched flower structure in the world, and it smells exactly like death. The stench of rotting meat attracts carrion beetles and flies for pollination. It blooms only once every 7-10 years, and each bloom lasts just 24-48 hours, making it one of the most dramatic events in botany.",
    search_terms: "corpse flower|titan arum|amorphophallus|stink|bloom|largest flower",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height when blooming", value: 3, si_unit: "m", note: "Tallest recorded was 3.1 m" },
      { dimension: "mass", label: "Total mass", value: 75, si_unit: "kg", note: "Corm and inflorescence combined" },
      { dimension: "time", label: "Bloom duration", value: 172800, si_unit: "s", note: "About 24-48 hours" },
      { dimension: "temperature", label: "Spadix temperature during bloom", value: 309, si_unit: "K", note: "About 36 C, heated to spread odor" },
      { dimension: "time", label: "Time between blooms", value: 252288000, si_unit: "s", note: "About 7-10 years between blooms" },
      { dimension: "length", label: "Leaf span", value: 6, si_unit: "m", note: "Single leaf can span 6 m across" },
      { dimension: "mass", label: "Corm mass", value: 50, si_unit: "kg", note: "Underground tuber up to 50 kg" },
    ],
  },
  {
    slug: "venus-flytrap",
    name: "Venus Flytrap",
    subtitle: "A carnivorous plant that snaps shut faster than you can blink",
    category_id: "plants",
    description:
      "The Venus flytrap (Dionaea muscipula) is native only to a small region around Wilmington, North Carolina. Its trap snaps shut in about 100 milliseconds, three times faster than a human blink. The trigger hairs inside must be touched twice within 20 seconds to prevent false alarms from raindrops. It then seals and digests the prey over 5-12 days.",
    search_terms: "venus flytrap|carnivorous plant|dionaea|trap|insect eating",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Trap size", value: 0.03, si_unit: "m", note: "Each trap lobe about 3 cm" },
      { dimension: "time", label: "Trap closing time", value: 0.1, si_unit: "s", note: "About 100 milliseconds" },
      { dimension: "mass", label: "Whole plant mass", value: 0.01, si_unit: "kg", note: "About 10 g" },
      { dimension: "length", label: "Plant diameter", value: 0.12, si_unit: "m", note: "Rosette spread ~12 cm" },
      { dimension: "time", label: "Digestion time", value: 864000, si_unit: "s", note: "About 5-12 days per prey item" },
      { dimension: "time", label: "Trigger hair threshold", value: 20, si_unit: "s", note: "Must touch twice within 20 s to trigger" },
      { dimension: "force", label: "Trap closure force", value: 0.15, si_unit: "N", note: "Enough to hold a struggling insect" },
      { dimension: "length", label: "Trigger hair length", value: 0.002, si_unit: "m", note: "About 2 mm each" },
    ],
  },
  {
    slug: "coast-redwood",
    name: "Redwood (Coast)",
    subtitle: "The tallest tree on Earth, towering above the Statue of Liberty",
    category_id: "plants",
    description:
      "Coast redwoods (Sequoia sempervirens) are the tallest living organisms on the planet. Hyperion, the current record-holder, stands at 115.7 meters, taller than the Statue of Liberty including its pedestal. These trees can live over 2,000 years and draw water to their tops through a combination of capillary action, transpiration, and negative pressure that defies easy explanation.",
    search_terms: "redwood|coast redwood|sequoia sempervirens|tallest tree|hyperion|california",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (Hyperion)", value: 115.7, si_unit: "m", note: "Tallest living tree on Earth" },
      { dimension: "mass", label: "Estimated mass", value: 500000, si_unit: "kg", note: "About 500 metric tons" },
      { dimension: "length", label: "Trunk diameter", value: 7, si_unit: "m", note: "At base; some exceed 7 m" },
      { dimension: "length", label: "Bark thickness", value: 0.3, si_unit: "m", note: "Fire-resistant bark up to 30 cm" },
      { dimension: "time", label: "Maximum age", value: 6.94e10, si_unit: "s", note: "Over 2,200 years" },
      { dimension: "volume", label: "Trunk volume", value: 1045, si_unit: "m³", note: "Largest specimens by trunk volume" },
      { dimension: "speed", label: "Growth rate", value: 6.3e-8, si_unit: "m/s", note: "About 2 m per year in height when young" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MICROSCOPIC
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "tardigrade",
    name: "Tardigrade",
    subtitle: "The nearly indestructible micro-animal that survives in outer space",
    category_id: "microscopic",
    description:
      "Tardigrades, or \"water bears,\" are 0.5 mm long and virtually indestructible. They survive temperatures from near absolute zero to 150 C, pressures six times that of the deepest ocean trench, radiation doses hundreds of times the lethal human dose, and the vacuum of space. They do this by entering a desiccated state called a tun, expelling nearly all water from their bodies.",
    search_terms: "tardigrade|water bear|microscopic|extremophile|indestructible|tun",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.0005, si_unit: "m", note: "About 0.5 mm" },
      { dimension: "mass", label: "Body mass", value: 1.5e-9, si_unit: "kg", note: "About 1.5 micrograms" },
      { dimension: "temperature", label: "Maximum survival temperature", value: 424, si_unit: "K", note: "Survives up to ~151 C" },
      { dimension: "temperature", label: "Minimum survival temperature", value: 1, si_unit: "K", note: "Survives near absolute zero, -272 C" },
      { dimension: "pressure", label: "Maximum survival pressure", value: 6e8, si_unit: "Pa", note: "Survives 600 MPa, ~6x Mariana Trench" },
      { dimension: "time", label: "Survival in desiccated state", value: 946080000, si_unit: "s", note: "Can survive ~30 years dried out" },
    ],
  },
  {
    slug: "dust-mite",
    name: "Dust Mite",
    subtitle: "The invisible roommate living in your pillow by the millions",
    category_id: "microscopic",
    description:
      "Dust mites are 0.3 mm arachnids that feed on dead skin flakes, and your mattress is an all-you-can-eat buffet. An average bed contains roughly 2 million of them. They don't bite or burrow, but their fecal pellets are one of the most common allergen triggers worldwide. Each mite produces about 20 droppings per day.",
    search_terms: "dust mite|mite|allergen|arachnid|microscopic|dermatophagoides",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.0003, si_unit: "m", note: "About 0.3 mm" },
      { dimension: "mass", label: "Body mass", value: 5.7e-9, si_unit: "kg", note: "About 5.7 micrograms" },
      { dimension: "length", label: "Fecal pellet diameter", value: 0.00002, si_unit: "m", note: "About 20 micrometers" },
      { dimension: "time", label: "Lifespan", value: 5184000, si_unit: "s", note: "About 60-90 days" },
      { dimension: "temperature", label: "Preferred temperature", value: 298, si_unit: "K", note: "About 25 C" },
      { dimension: "speed", label: "Walking speed", value: 0.001, si_unit: "m/s", note: "About 1 mm per second" },
    ],
  },
  {
    slug: "e-coli",
    name: "E. coli",
    subtitle: "The best-studied bacterium, and mostly your friend",
    category_id: "microscopic",
    description:
      "Escherichia coli is the workhorse of molecular biology and a mostly harmless resident of your gut. A single cell is about 2 micrometers long, and it can divide every 20 minutes under ideal conditions, meaning one bacterium could theoretically become a billion in about 10 hours. Most strains are beneficial, producing vitamin K and keeping harmful bacteria in check.",
    search_terms: "e coli|bacteria|microbe|gut|escherichia|cell division|prokaryote",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell length", value: 0.000002, si_unit: "m", note: "About 2 micrometers" },
      { dimension: "mass", label: "Cell mass", value: 1e-15, si_unit: "kg", note: "About 1 femtogram" },
      { dimension: "time", label: "Division time", value: 1200, si_unit: "s", note: "About 20 minutes under optimal conditions" },
      { dimension: "length", label: "Cell width", value: 0.0000008, si_unit: "m", note: "About 0.8 micrometers" },
      { dimension: "speed", label: "Swimming speed", value: 0.00003, si_unit: "m/s", note: "About 30 micrometers per second" },
      { dimension: "length", label: "Flagellum length", value: 0.00001, si_unit: "m", note: "About 10 micrometers" },
      { dimension: "frequency", label: "Flagellum rotation rate", value: 100, si_unit: "Hz", note: "About 100 revolutions per second" },
      { dimension: "data", label: "Genome size", value: 4600000, si_unit: "bytes", note: "About 4.6 million base pairs" },
    ],
  },
  {
    slug: "amoeba",
    name: "Amoeba",
    subtitle: "A shape-shifting single cell visible to the naked eye",
    category_id: "microscopic",
    description:
      "Amoebae are single-celled organisms that move by extending temporary projections called pseudopods, literally \"false feet.\" Some species like Amoeba proteus are large enough to see without a microscope. They engulf food by surrounding it completely in a process called phagocytosis. Despite having no brain, no organs, and no fixed shape, they can solve simple mazes.",
    search_terms: "amoeba|protozoa|single cell|pseudopod|protist|microscopic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell diameter", value: 0.0005, si_unit: "m", note: "Amoeba proteus, about 0.5 mm" },
      { dimension: "mass", label: "Cell mass", value: 1e-9, si_unit: "kg", note: "About 1 microgram" },
      { dimension: "speed", label: "Movement speed", value: 0.000005, si_unit: "m/s", note: "About 5 micrometers per second" },
      { dimension: "time", label: "Division time", value: 86400, si_unit: "s", note: "About 24 hours" },
      { dimension: "length", label: "Pseudopod length", value: 0.0003, si_unit: "m", note: "About 300 micrometers" },
      { dimension: "temperature", label: "Optimal temperature", value: 298, si_unit: "K", note: "About 25 C" },
      { dimension: "data", label: "Genome size", value: 290000000, si_unit: "bytes", note: "About 290 million base pairs; some amoebae have genomes 200x larger than humans" },
    ],
  },
  {
    slug: "human-red-blood-cell",
    name: "Human Red Blood Cell",
    subtitle: "The oxygen courier making 300,000 round trips through your body",
    category_id: "microscopic",
    description:
      "Red blood cells are biconcave discs just 7 micrometers across that carry oxygen from your lungs to every tissue in your body. Each cell contains about 270 million hemoglobin molecules, and your body produces roughly 2.4 million new ones per second. They lack a nucleus, which maximizes space for hemoglobin but means they cannot divide or repair themselves.",
    search_terms: "red blood cell|erythrocyte|blood|hemoglobin|oxygen|rbc",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.000007, si_unit: "m", note: "About 7 micrometers" },
      { dimension: "mass", label: "Cell mass", value: 2.7e-14, si_unit: "kg", note: "About 27 picograms" },
      { dimension: "length", label: "Thickness", value: 0.000002, si_unit: "m", note: "About 2 micrometers at thickest" },
      { dimension: "time", label: "Lifespan", value: 10368000, si_unit: "s", note: "About 120 days" },
      { dimension: "speed", label: "Speed in aorta", value: 0.4, si_unit: "m/s", note: "About 40 cm/s in the aorta" },
      { dimension: "length", label: "Total distance traveled in lifetime", value: 480000, si_unit: "m", note: "About 480 km over its ~120-day life" },
      { dimension: "area", label: "Surface area", value: 1.3e-10, si_unit: "m²", note: "About 130 square micrometers" },
    ],
  },
];
