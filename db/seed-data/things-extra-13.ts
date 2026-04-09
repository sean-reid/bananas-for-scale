// ── Extra things seed data (batch 13) ─────────────────────────────────────
// 100 educational things: small animals, large animals, deep sea, microscopic,
// weather, food, plants, extinct animals, human feats, conceptual

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SMALL ANIMALS (12)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "pufferfish",
    name: "Pufferfish",
    subtitle: "A spiny balloon that makes predators rethink their choices",
    category_id: "ocean-life",
    description:
      "Pufferfish, or Tetraodontidae, can inflate their bodies to several times their normal size by gulping water or air, making them nearly impossible to swallow. Most species carry tetrodotoxin, a neurotoxin up to 1,200 times more poisonous than cyanide. Despite this, pufferfish (fugu) is considered a delicacy in Japan, where only licensed chefs may prepare it. There are over 120 species, ranging from the tiny dwarf pufferfish at 2.5 cm to the freshwater Mbu pufferfish at 67 cm.",
    search_terms: "pufferfish|fugu|blowfish|tetraodontidae|toxic fish|inflating fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (typical)", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Inflated diameter", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.9, si_unit: "kg" },
      { dimension: "length", label: "Spine length", value: 0.008, si_unit: "m" },
      { dimension: "time", label: "Inflation time", value: 5, si_unit: "s" },
      { dimension: "time", label: "Lifespan", value: 3.15e8, si_unit: "s", note: "About 10 years" },
    ],
  },

  {
    slug: "flying-fish",
    name: "Flying Fish",
    subtitle: "An ocean fish that takes to the air to escape predators",
    category_id: "ocean-life",
    description:
      "Flying fish (Exocoetidae) have evolved oversized pectoral fins that function as wings, allowing them to glide above the ocean surface for distances up to 200 meters. They build speed underwater, then break the surface at around 60 km/h and spread their fins to become airborne. Some species have four wings, using both pectoral and pelvic fins. Sailors have long reported flying fish landing on ship decks. There are about 64 species found in tropical and warm temperate waters worldwide.",
    search_terms: "flying fish|exocoetidae|gliding fish|ocean glider|winged fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.4, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.5, si_unit: "kg" },
      { dimension: "length", label: "Glide distance (max)", value: 200, si_unit: "m" },
      { dimension: "speed", label: "Launch speed", value: 16.7, si_unit: "m/s", note: "About 60 km/h" },
      { dimension: "time", label: "Glide duration", value: 45, si_unit: "s" },
    ],
  },

  {
    slug: "kiwi-bird",
    name: "Kiwi Bird",
    subtitle: "A flightless bird with nostrils at the tip of its beak",
    category_id: "small-animals",
    description:
      "The kiwi is a flightless bird endemic to New Zealand and the national symbol of the country. Unlike almost all other birds, kiwis have nostrils at the tip of their long beak, giving them an exceptional sense of smell used to find insects and worms underground. They are roughly the size of a domestic chicken but lay eggs that are up to 20% of the mother's body weight, proportionally one of the largest eggs of any bird. Kiwis are nocturnal, monogamous, and can live for 25 to 50 years.",
    search_terms: "kiwi bird|new zealand|flightless bird|apteryx|nocturnal bird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Beak length", value: 0.12, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 3.3, si_unit: "kg" },
      { dimension: "mass", label: "Egg mass", value: 0.45, si_unit: "kg" },
      { dimension: "length", label: "Egg length", value: 0.13, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 1.26e9, si_unit: "s", note: "About 40 years" },
    ],
  },

  {
    slug: "toucan",
    name: "Toucan",
    subtitle: "A tropical bird whose beak is a third of its total length",
    category_id: "small-animals",
    description:
      "Toucans are members of the family Ramphastidae, instantly recognizable by their enormous, colorful bills. The toco toucan's bill can reach 20 cm in length, nearly a third of the bird's total body length. Despite its size, the bill is surprisingly lightweight, made of a honeycomb of keratin supported by thin bone struts. The bill helps regulate body temperature by adjusting blood flow. Toucans are found in Central and South American tropical forests, where they nest in tree hollows and eat mostly fruit.",
    search_terms: "toucan|ramphastidae|toco toucan|tropical bird|big beak|colorful bird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.63, si_unit: "m" },
      { dimension: "length", label: "Bill length", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.68, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.55, si_unit: "m" },
      { dimension: "mass", label: "Bill mass", value: 0.035, si_unit: "kg" },
      { dimension: "time", label: "Lifespan", value: 6.31e8, si_unit: "s", note: "About 20 years" },
    ],
  },

  {
    slug: "flamingo",
    name: "Flamingo",
    subtitle: "A pink wading bird that eats upside down",
    category_id: "small-animals",
    description:
      "Flamingos are large wading birds known for their vibrant pink plumage, which comes from carotenoid pigments in their diet of algae and brine shrimp. Without these pigments, flamingos would be white or pale gray. They feed with their heads upside down, using comb-like structures in their beaks to filter food from water. Flamingos are highly social, living in colonies of thousands or even hundreds of thousands. The greater flamingo stands up to 1.5 meters tall, making it the largest of the six species.",
    search_terms: "flamingo|pink bird|wading bird|phoenicopteridae|filter feeder",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 1.45, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 1.6, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 3.5, si_unit: "kg" },
      { dimension: "length", label: "Leg length", value: 0.8, si_unit: "m" },
      { dimension: "length", label: "Neck length", value: 0.6, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 1.26e9, si_unit: "s", note: "About 40 years" },
    ],
  },

  {
    slug: "pelican",
    name: "Pelican",
    subtitle: "A waterbird with a throat pouch that holds more than its stomach",
    category_id: "small-animals",
    description:
      "Pelicans are large waterbirds in the family Pelecanidae, famous for their enormous throat pouches used for catching fish. The pouch of the Australian pelican can hold up to 13 liters of water, roughly three times the capacity of its stomach. There are eight living species, found on every continent except Antarctica. The Dalmatian pelican, the largest species, has a wingspan of up to 3.5 meters, making it one of the heaviest flying birds. Pelicans fish cooperatively, herding schools of fish into shallow water.",
    search_terms: "pelican|pelecanidae|throat pouch|waterbird|fishing bird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.7, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 3.3, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 12, si_unit: "kg" },
      { dimension: "volume", label: "Pouch capacity", value: 0.013, si_unit: "m^3", note: "About 13 liters" },
      { dimension: "length", label: "Bill length", value: 0.47, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 7.88e8, si_unit: "s", note: "About 25 years" },
    ],
  },

  {
    slug: "porcupine",
    name: "Porcupine",
    subtitle: "A rodent wearing 30,000 sharp reminders to keep your distance",
    category_id: "small-animals",
    description:
      "Porcupines are large rodents covered in sharp quills that serve as their primary defense against predators. The African crested porcupine, the largest Old World species, can have quills up to 35 cm long. Contrary to myth, porcupines cannot shoot their quills, but the quills detach easily on contact and have barbed tips that make them difficult to remove. There are about 58 species divided into Old World and New World families. They are herbivores with a fondness for bark, and some species are excellent climbers.",
    search_terms: "porcupine|quills|rodent|erethizontidae|hystricidae|spiny animal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.7, si_unit: "m" },
      { dimension: "length", label: "Quill length (max)", value: 0.35, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 13, si_unit: "kg" },
      { dimension: "length", label: "Tail length", value: 0.2, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 6.31e8, si_unit: "s", note: "About 20 years" },
    ],
  },

  {
    slug: "armadillo",
    name: "Armadillo",
    subtitle: "A mammal in a suit of bony armor plates",
    category_id: "small-animals",
    description:
      "Armadillos are mammals of the order Cingulata, characterized by their leathery armor shell made of bony plates called osteoderms. The nine-banded armadillo, the most widespread species, almost always gives birth to identical quadruplets from a single fertilized egg. The giant armadillo can weigh up to 54 kg and has more teeth than any other land mammal, with up to 100 small peg-like teeth. Only the three-banded armadillo can curl into a complete ball. They have poor eyesight but an excellent sense of smell.",
    search_terms: "armadillo|cingulata|armored mammal|nine-banded|dasypodidae",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (nine-banded)", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Shell thickness", value: 0.003, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 5.5, si_unit: "kg" },
      { dimension: "length", label: "Tail length", value: 0.37, si_unit: "m" },
      { dimension: "speed", label: "Running speed", value: 8.9, si_unit: "m/s", note: "About 32 km/h" },
      { dimension: "time", label: "Lifespan", value: 3.78e8, si_unit: "s", note: "About 12 years" },
    ],
  },

  {
    slug: "opossum",
    name: "Opossum",
    subtitle: "North America's only marsupial, famous for playing dead",
    category_id: "small-animals",
    description:
      "The Virginia opossum is the only marsupial found in North America, carrying its young in a pouch just like kangaroos. When threatened, opossums involuntarily enter a catatonic state called thanatosis, or 'playing possum,' during which they lie motionless, drool, and emit a foul smell from their anal glands. This state can last from a few minutes to several hours. Opossums are remarkably resistant to snake venom and rabies. They have 50 teeth, more than any other North American land mammal, and prehensile tails used for grasping branches.",
    search_terms: "opossum|possum|marsupial|virginia opossum|didelphidae|playing dead",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.35, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 4.5, si_unit: "kg" },
      { dimension: "length", label: "Pouch size", value: 0.08, si_unit: "m" },
      { dimension: "time", label: "Thanatosis duration (max)", value: 14400, si_unit: "s", note: "Up to 4 hours" },
      { dimension: "time", label: "Lifespan", value: 6.31e7, si_unit: "s", note: "About 2 years" },
    ],
  },

  {
    slug: "chinchilla",
    name: "Chinchilla",
    subtitle: "A rodent with the densest fur of any land mammal",
    category_id: "small-animals",
    description:
      "Chinchillas are small rodents native to the Andes Mountains of South America. They possess the densest fur of any land mammal, with about 20,000 hairs per square centimeter, roughly 60 hairs growing from each follicle. This incredibly soft and thick fur originally evolved to keep them warm at elevations above 3,000 meters. Because their fur is so dense, chinchillas cannot get wet without risking fungal infections, so they bathe in volcanic dust instead. They can jump up to 1.8 meters high and live in colonies called herds.",
    search_terms: "chinchilla|chinchillidae|dense fur|andes rodent|dust bath|soft fur",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.26, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.13, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.6, si_unit: "kg" },
      { dimension: "length", label: "Maximum jump height", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Fur hair density per cm^2", value: 20000, si_unit: "m^-2", note: "About 20,000 hairs per cm^2" },
      { dimension: "time", label: "Lifespan", value: 4.73e8, si_unit: "s", note: "About 15 years" },
    ],
  },

  {
    slug: "slow-loris",
    name: "Slow Loris",
    subtitle: "One of the few venomous mammals, with enormous nocturnal eyes",
    category_id: "small-animals",
    description:
      "Slow lorises are a group of nocturnal primates found in Southeast Asia, remarkable for being among the very few venomous mammals. They produce a toxin from a gland on their inner elbow, which they mix with saliva to create a venomous bite used for defense. Their enormous forward-facing eyes are adapted for night vision and give them excellent depth perception. Slow lorises have an unusually strong grip, capable of hanging from branches for hours, and a specialized vascular network in their hands called a rete mirabile that prevents muscle fatigue.",
    search_terms: "slow loris|nycticebus|venomous mammal|primate|nocturnal primate|southeast asia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.27, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.9, si_unit: "kg" },
      { dimension: "length", label: "Eye diameter", value: 0.016, si_unit: "m" },
      { dimension: "length", label: "Arm span", value: 0.35, si_unit: "m" },
      { dimension: "speed", label: "Walking speed", value: 0.06, si_unit: "m/s" },
      { dimension: "time", label: "Lifespan", value: 6.31e8, si_unit: "s", note: "About 20 years" },
    ],
  },

  {
    slug: "golden-lion-tamarin",
    name: "Golden Lion Tamarin",
    subtitle: "A tiny golden primate that nearly went extinct in the 1960s",
    category_id: "small-animals",
    description:
      "The golden lion tamarin is a small New World monkey named for its striking reddish-gold mane that frames its face like a lion's. Native to the Atlantic coastal forests of Brazil, these tamarins were reduced to fewer than 200 individuals by the 1960s due to habitat loss. A decades-long conservation effort has brought their numbers back to about 3,700 in the wild. They live in family groups, with the father doing most of the infant carrying. Their long, slender fingers are specially adapted for probing into crevices to find insects and small vertebrates.",
    search_terms: "golden lion tamarin|leontopithecus rosalia|brazilian monkey|endangered primate|golden monkey",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.26, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.37, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.62, si_unit: "kg" },
      { dimension: "length", label: "Mane diameter", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Finger length", value: 0.035, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 4.73e8, si_unit: "s", note: "About 15 years in the wild" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LARGE ANIMALS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "saltwater-crocodile",
    name: "Saltwater Crocodile",
    subtitle: "The largest living reptile, with the strongest bite ever measured",
    category_id: "large-land-animals",
    description:
      "The saltwater crocodile (Crocodylus porosus) is the largest living reptile, with males reaching over 6 meters in length and weighing more than 1,000 kg. Found from eastern India to northern Australia, they inhabit both saltwater and freshwater environments and are capable of swimming long distances across open ocean. Their bite force has been measured at over 16,000 newtons, the strongest of any living animal. Despite their bulk, saltwater crocodiles can launch themselves almost entirely out of the water in a technique called the 'death roll' to overpower prey.",
    search_terms: "saltwater crocodile|crocodylus porosus|saltie|estuarine crocodile|largest reptile",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (male)", value: 5.2, si_unit: "m" },
      { dimension: "mass", label: "Body mass (male)", value: 450, si_unit: "kg" },
      { dimension: "length", label: "Jaw length", value: 0.75, si_unit: "m" },
      { dimension: "force", label: "Bite force", value: 16414, si_unit: "N" },
      { dimension: "speed", label: "Swimming speed", value: 6.7, si_unit: "m/s", note: "About 24 km/h" },
      { dimension: "time", label: "Lifespan", value: 2.21e9, si_unit: "s", note: "About 70 years" },
    ],
  },

  {
    slug: "hippopotamus",
    name: "Hippopotamus",
    subtitle: "A 1,500 kg herbivore that can outrun most humans on land",
    category_id: "large-land-animals",
    description:
      "The hippopotamus (Hippopotamus amphibius) is the third-largest living land mammal after elephants and white rhinoceroses. Despite their bulk, hippos can run at speeds up to 30 km/h on land, faster than most humans. They spend up to 16 hours per day submerged in rivers and lakes to keep their massive bodies cool, and their skin secretes a reddish oily substance that acts as a natural sunscreen and antibiotic. Hippos are responsible for more human deaths in Africa than any other large animal, as they are extremely territorial and aggressive when their space is threatened.",
    search_terms: "hippopotamus|hippo|hippopotamus amphibius|river horse|african hippo",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.5, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1500, si_unit: "kg" },
      { dimension: "length", label: "Tusk length", value: 0.5, si_unit: "m" },
      { dimension: "speed", label: "Running speed", value: 8.3, si_unit: "m/s", note: "About 30 km/h" },
      { dimension: "force", label: "Bite force", value: 8100, si_unit: "N" },
      { dimension: "time", label: "Lifespan", value: 1.42e9, si_unit: "s", note: "About 45 years" },
    ],
  },

  {
    slug: "yak",
    name: "Yak",
    subtitle: "A high-altitude bovine that thrives above 4,000 meters",
    category_id: "large-land-animals",
    description:
      "The wild yak (Bos mutus) is a massive bovine native to the Tibetan Plateau and surrounding highlands, where it lives at altitudes between 3,000 and 5,500 meters. Yaks have several adaptations for extreme cold and low oxygen: an enlarged heart and lungs, three times more red blood cells than cattle, and a thick double coat of shaggy fur. Domesticated over 4,500 years ago, yaks provide milk, meat, fiber, and transport for millions of people across Central Asia. Their dung is dried and used as fuel in treeless alpine regions.",
    search_terms: "yak|bos mutus|bos grunniens|tibetan yak|himalayan bovine|highland cattle",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.3, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 2.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass (wild male)", value: 1000, si_unit: "kg" },
      { dimension: "length", label: "Horn length", value: 0.95, si_unit: "m" },
      { dimension: "length", label: "Fur length (belly)", value: 0.6, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 6.31e8, si_unit: "s", note: "About 20 years" },
    ],
  },

  {
    slug: "dromedary-camel",
    name: "Dromedary Camel",
    subtitle: "A single-humped camel that can drink 100 liters in ten minutes",
    category_id: "large-land-animals",
    description:
      "The dromedary, or Arabian camel (Camelus dromedarius), is the single-humped camel that makes up about 94% of the world's camel population. Contrary to popular belief, a dromedary's hump stores fat, not water, providing up to 9.3 kg of metabolic energy. They can survive losing up to 25% of their body water without ill effects, and when they finally drink, they can consume up to 100 liters in just 10 minutes. Their oval-shaped red blood cells flow freely even when dehydrated, unlike the round cells of other mammals that clump. Dromedaries have been domesticated for about 4,000 years.",
    search_terms: "dromedary|arabian camel|camelus dromedarius|one hump camel|desert camel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Height at hump", value: 2.1, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 600, si_unit: "kg" },
      { dimension: "volume", label: "Water intake (max in 10 min)", value: 0.1, si_unit: "m^3", note: "About 100 liters" },
      { dimension: "speed", label: "Running speed (sustained)", value: 11.1, si_unit: "m/s", note: "About 40 km/h" },
      { dimension: "time", label: "Lifespan", value: 1.26e9, si_unit: "s", note: "About 40 years" },
    ],
  },

  {
    slug: "water-buffalo",
    name: "Water Buffalo",
    subtitle: "The workhorse of Asia, responsible for plowing most of the world's rice",
    category_id: "large-land-animals",
    description:
      "The domestic water buffalo (Bubalus bubalis) is one of the most important livestock animals in Asia, where an estimated 130 million are used for plowing rice paddies, pulling carts, and producing milk. Water buffalo milk has roughly twice the fat content of cow's milk and is the basis for Italian mozzarella di bufala. Wild water buffalo, found mainly in India and Southeast Asia, are larger than domestic breeds, with males weighing over 1,200 kg. Their wide, splayed hooves are perfectly adapted for walking through muddy wetlands.",
    search_terms: "water buffalo|bubalus bubalis|asian buffalo|domestic buffalo|rice paddy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 1.8, si_unit: "m" },
      { dimension: "mass", label: "Body mass (wild male)", value: 1200, si_unit: "kg" },
      { dimension: "length", label: "Horn span", value: 2.0, si_unit: "m" },
      { dimension: "length", label: "Hoof width", value: 0.18, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 7.88e8, si_unit: "s", note: "About 25 years" },
    ],
  },

  {
    slug: "okapi",
    name: "Okapi",
    subtitle: "A forest giraffe with zebra-striped legs, unknown to science until 1901",
    category_id: "large-land-animals",
    description:
      "The okapi (Okapia johnstoni) is the only living relative of the giraffe, found exclusively in the dense Ituri Rainforest of the Democratic Republic of the Congo. Despite being nearly 1.5 meters tall at the shoulder, the okapi eluded Western science until 1901 due to its secretive nature and remote habitat. Its distinctive dark brown body and white-striped hindquarters provide camouflage in the dappled light of the forest floor. Like giraffes, okapis have long, prehensile tongues (up to 36 cm) used to strip leaves and buds from branches.",
    search_terms: "okapi|okapia johnstoni|forest giraffe|congo|striped legs|african mammal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.5, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 300, si_unit: "kg" },
      { dimension: "length", label: "Tongue length", value: 0.36, si_unit: "m" },
      { dimension: "length", label: "Ear length", value: 0.18, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 9.46e8, si_unit: "s", note: "About 30 years" },
    ],
  },

  {
    slug: "tapir",
    name: "Tapir",
    subtitle: "A pig-like herbivore with a prehensile nose, largely unchanged for 20 million years",
    category_id: "large-land-animals",
    description:
      "Tapirs are large, pig-like herbivores with a short, prehensile trunk formed from their upper lip and nose. They are considered 'living fossils' because they have changed very little over the past 20 million years. There are four living species found in Central America, South America, and Southeast Asia. The Malayan tapir, the largest species, has a distinctive black-and-white coloring that breaks up its outline in moonlit forests. Tapirs are excellent swimmers and often submerge completely to escape predators or to cool off. They play a crucial role as seed dispersers in tropical forests.",
    search_terms: "tapir|tapiridae|prehensile nose|living fossil|malayan tapir|baird's tapir",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.4, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 1.1, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 350, si_unit: "kg" },
      { dimension: "length", label: "Proboscis length", value: 0.15, si_unit: "m" },
      { dimension: "speed", label: "Running speed", value: 13.4, si_unit: "m/s", note: "About 48 km/h" },
      { dimension: "time", label: "Lifespan", value: 9.46e8, si_unit: "s", note: "About 30 years" },
    ],
  },

  {
    slug: "wombat",
    name: "Wombat",
    subtitle: "An Australian marsupial that produces cube-shaped droppings",
    category_id: "large-land-animals",
    description:
      "Wombats are stout, burrowing marsupials native to Australia, best known for producing distinctively cube-shaped feces. Scientists discovered that the cubes form due to varying elasticity in the intestinal walls, which shape the droppings into neat blocks that do not roll away, helping wombats mark their territory. Wombats dig extensive burrow systems up to 200 meters long, using their powerful claws and reinforced rear ends (a plate of cartilage fused to the pelvis) to defend the entrance against predators. Despite their stocky build, they can sprint at 40 km/h over short distances.",
    search_terms: "wombat|vombatidae|australian marsupial|burrowing marsupial|cube poop",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.36, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 32, si_unit: "kg" },
      { dimension: "length", label: "Burrow length (max)", value: 200, si_unit: "m" },
      { dimension: "speed", label: "Sprint speed", value: 11.1, si_unit: "m/s", note: "About 40 km/h" },
      { dimension: "time", label: "Lifespan", value: 7.88e8, si_unit: "s", note: "About 25 years" },
    ],
  },

  {
    slug: "orangutan",
    name: "Orangutan",
    subtitle: "The largest arboreal mammal, sharing 97% of our DNA",
    category_id: "large-land-animals",
    description:
      "Orangutans are great apes native to the rainforests of Borneo and Sumatra, and the largest animals to live primarily in trees. Adult males develop wide cheek pads called flanges and can have an arm span of over 2 meters. They share about 97% of their DNA with humans and demonstrate remarkable intelligence: they use tools, build new sleeping nests every night from branches and leaves, and have been observed using medicinal plants to treat wounds. Orangutans are the most solitary of the great apes, with males living alone except during mating. All three species are critically endangered.",
    search_terms: "orangutan|pongo|great ape|borneo|sumatra|arboreal ape|primate",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Arm span", value: 2.25, si_unit: "m" },
      { dimension: "mass", label: "Body mass (male)", value: 75, si_unit: "kg" },
      { dimension: "length", label: "Flange width", value: 0.3, si_unit: "m" },
      { dimension: "force", label: "Grip strength", value: 2000, si_unit: "N" },
      { dimension: "time", label: "Lifespan", value: 1.26e9, si_unit: "s", note: "About 40 years" },
    ],
  },

  {
    slug: "gorilla",
    name: "Gorilla",
    subtitle: "The largest living primate, gentle giant of the African forests",
    category_id: "large-land-animals",
    description:
      "Gorillas are the largest living primates, with adult male silverbacks weighing up to 230 kg and standing 1.8 meters tall when upright. Found in the forests of central Sub-Saharan Africa, they live in family groups of 5 to 30 individuals led by a dominant silverback. Despite their fearsome reputation, gorillas are predominantly herbivorous and generally peaceful, spending about 14 hours a day foraging and the rest resting. Their DNA is about 98.3% identical to humans. Mountain gorillas, a subspecies with thicker fur adapted to cold elevations above 2,500 meters, number only about 1,000 individuals in the wild.",
    search_terms: "gorilla|silverback|great ape|gorilla gorilla|mountain gorilla|primate",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing, male)", value: 1.75, si_unit: "m" },
      { dimension: "length", label: "Arm span", value: 2.6, si_unit: "m" },
      { dimension: "mass", label: "Body mass (male)", value: 200, si_unit: "kg" },
      { dimension: "length", label: "Chest circumference", value: 1.65, si_unit: "m" },
      { dimension: "force", label: "Estimated bite force", value: 5800, si_unit: "N" },
      { dimension: "time", label: "Lifespan", value: 1.26e9, si_unit: "s", note: "About 40 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DEEP SEA / OCEAN (12)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "giant-tube-worm",
    name: "Giant Tube Worm",
    subtitle: "A gutless worm that lives on volcanic vents at the bottom of the ocean",
    category_id: "ocean-life",
    description:
      "Giant tube worms (Riftia pachyptila) live near hydrothermal vents on the deep ocean floor, at depths of over 2,000 meters where sunlight never reaches. They have no mouth, stomach, or gut. Instead, they rely entirely on billions of symbiotic chemosynthetic bacteria housed in a specialized organ called the trophosome, which converts hydrogen sulfide from the vents into nutrients. They can grow up to 2.4 meters long and are among the fastest-growing invertebrates, adding up to 85 cm of tube length per year. The blood-red plume at the top of each tube absorbs chemicals for the bacteria.",
    search_terms: "giant tube worm|riftia pachyptila|hydrothermal vent|deep sea worm|chemosynthesis",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tube length (max)", value: 2.4, si_unit: "m" },
      { dimension: "length", label: "Tube diameter", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Plume length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Growth rate per year", value: 0.85, si_unit: "m" },
      { dimension: "length", label: "Habitat depth", value: 2500, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 7.88e9, si_unit: "s", note: "Over 250 years" },
    ],
  },

  {
    slug: "viperfish",
    name: "Viperfish",
    subtitle: "A deep-sea predator with fangs so long they do not fit in its mouth",
    category_id: "ocean-life",
    description:
      "The Pacific viperfish (Chauliodus macouni) is a deep-sea fish found at depths of 200 to 5,000 meters, recognized by its enormous fang-like teeth that curve back toward the eyes. These needle-sharp teeth are so long that the fish cannot close its mouth fully. The viperfish uses bioluminescent photophores along its belly and a light organ on a modified dorsal fin ray to lure prey in the pitch-black deep ocean. It can swim at high speed in short bursts, impaling prey on its fangs. Despite its fearsome appearance, viperfish are only about 30 cm long.",
    search_terms: "viperfish|chauliodus|deep sea fish|fanged fish|bioluminescent fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Fang length", value: 0.02, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.03, si_unit: "kg" },
      { dimension: "length", label: "Habitat depth (typical)", value: 1500, si_unit: "m" },
      { dimension: "speed", label: "Strike speed", value: 1.0, si_unit: "m/s" },
      { dimension: "time", label: "Lifespan", value: 9.46e8, si_unit: "s", note: "About 30 years" },
    ],
  },

  {
    slug: "fangtooth-fish",
    name: "Fangtooth Fish",
    subtitle: "Owner of the largest teeth relative to body size of any fish",
    category_id: "ocean-life",
    description:
      "The fangtooth fish (Anoplogaster cornuta) has the largest teeth of any fish in proportion to its body size. Its lower fangs are so long that special pockets on either side of the brain accommodate them when the mouth is closed. Found at depths of 200 to 5,000 meters, the fangtooth is one of the deepest-living fish in the ocean. Despite its terrifying appearance, it is only about 18 cm long and is harmless to humans. Adults are dark brown or black, helping them remain invisible in the lightless deep. They can withstand the crushing pressure at depths of 5,000 meters.",
    search_terms: "fangtooth|anoplogaster|ogrefish|deep sea fish|deep ocean predator",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.18, si_unit: "m" },
      { dimension: "length", label: "Fang length", value: 0.015, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.12, si_unit: "kg" },
      { dimension: "length", label: "Maximum depth", value: 5000, si_unit: "m" },
      { dimension: "pressure", label: "Pressure at max depth", value: 5e7, si_unit: "Pa", note: "About 500 atmospheres" },
    ],
  },

  {
    slug: "barreleye-fish",
    name: "Barreleye Fish",
    subtitle: "A deep-sea fish with a transparent head and upward-pointing tubular eyes",
    category_id: "ocean-life",
    description:
      "The barreleye fish (Macropinna microstoma) has one of the most unusual heads in the animal kingdom: its skull is completely transparent, filled with clear fluid, with two bright green tubular eyes visible inside looking upward. This allows it to detect the silhouettes of prey above while protecting its sensitive eyes with the transparent shield. The fish can rotate its eyes to face forward when it moves upward to feed. Discovered in 1939, the transparent dome was only confirmed in 2004 when researchers first observed a live specimen at depths around 600 to 800 meters in the North Pacific.",
    search_terms: "barreleye|macropinna microstoma|spook fish|transparent head|tubular eyes|deep sea",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Eye diameter (tubular)", value: 0.012, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.06, si_unit: "kg" },
      { dimension: "length", label: "Transparent dome width", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Habitat depth (typical)", value: 700, si_unit: "m" },
    ],
  },

  {
    slug: "yeti-crab",
    name: "Yeti Crab",
    subtitle: "A blind, hairy crustacean living on volcanic vents in total darkness",
    category_id: "ocean-life",
    description:
      "The yeti crab (Kiwa hirsuta) was discovered in 2005 near hydrothermal vents south of Easter Island at a depth of 2,200 meters. Named for its dense coat of silky, hair-like setae covering its claws and legs, the yeti crab is thought to farm chemosynthetic bacteria on these hairs, then scrape them off to eat. It is completely blind, having no functional eyes, and navigates its volcanic vent habitat entirely through touch and chemical sensing. The setae may also help detoxify the poisonous minerals spewing from the vents.",
    search_terms: "yeti crab|kiwa hirsuta|hairy crab|hydrothermal vent crab|blind crab|deep sea crab",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Claw length", value: 0.1, si_unit: "m" },
      { dimension: "length", label: "Setae (hair) length", value: 0.02, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.2, si_unit: "kg" },
      { dimension: "length", label: "Habitat depth", value: 2200, si_unit: "m" },
    ],
  },

  {
    slug: "gulper-eel",
    name: "Gulper Eel",
    subtitle: "A deep-sea eel that can swallow prey larger than itself",
    category_id: "ocean-life",
    description:
      "The gulper eel (Eurypharynx pelecanoides), also called the pelican eel, has an enormous, loosely hinged mouth that can open wide enough to swallow prey much larger than itself. Its stomach can stretch to accommodate these oversized meals. Found at depths of 500 to 7,625 meters, the gulper eel has a long, whip-like tail tipped with a bioluminescent organ that may be used to lure prey. Despite its dramatic appearance, it grows to only about 75 cm. Its tiny eyes suggest it relies more on sensing vibrations and detecting bioluminescence than on vision.",
    search_terms: "gulper eel|pelican eel|eurypharynx|umbrella mouth|deep sea eel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.75, si_unit: "m" },
      { dimension: "length", label: "Mouth gape width", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.3, si_unit: "kg" },
      { dimension: "length", label: "Maximum depth", value: 7625, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.4, si_unit: "m" },
    ],
  },

  {
    slug: "sea-spider-giant",
    name: "Giant Sea Spider",
    subtitle: "A deep-sea arthropod with legs spanning over 70 cm in polar waters",
    category_id: "ocean-life",
    description:
      "Giant sea spiders (Colossendeis spp.) are marine arthropods of the class Pycnogonida found in the deep oceans and polar waters around Antarctica. Despite their name, they are not true spiders. In the frigid, oxygen-rich Antarctic waters, they grow to enormous sizes through a phenomenon called polar gigantism, with leg spans reaching over 70 cm. Their bodies are so small relative to their legs that their intestines and reproductive organs extend into the legs. They have a unique proboscis used to pierce and suck nutrients from soft-bodied invertebrates like anemones and bryozoans.",
    search_terms: "giant sea spider|colossendeis|pycnogonida|polar gigantism|antarctic sea spider",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Leg span", value: 0.7, si_unit: "m" },
      { dimension: "length", label: "Body length", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Proboscis length", value: 0.08, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.007, si_unit: "kg" },
      { dimension: "length", label: "Habitat depth (typical)", value: 1000, si_unit: "m" },
    ],
  },

  {
    slug: "ocean-sunfish",
    name: "Ocean Sunfish",
    subtitle: "The heaviest bony fish, shaped like a swimming head with no tail",
    category_id: "ocean-life",
    description:
      "The ocean sunfish (Mola mola) is the heaviest known bony fish in the world, with some individuals weighing over 2,300 kg. Its bizarre shape resembles a giant head with fins, as it appears to lack a true tail fin. Instead, its dorsal and anal fins extend backward, and a rounded clavus replaces the missing tail. Despite its awkward appearance, it can dive to depths of over 600 meters. Ocean sunfish can grow from a larva of just 2.5 mm to an adult over 3 meters long, an increase of roughly 60 million times in mass. They bask at the surface, prompting seabirds to pick parasites from their skin.",
    search_terms: "ocean sunfish|mola mola|heaviest bony fish|sunfish|mola",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (max)", value: 3.3, si_unit: "m" },
      { dimension: "length", label: "Height (fin to fin)", value: 4.2, si_unit: "m" },
      { dimension: "mass", label: "Body mass (max)", value: 2300, si_unit: "kg" },
      { dimension: "length", label: "Larval size", value: 0.0025, si_unit: "m" },
      { dimension: "length", label: "Maximum dive depth", value: 600, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 6.31e8, si_unit: "s", note: "Up to 20 years" },
    ],
  },

  {
    slug: "japanese-spider-crab",
    name: "Japanese Spider Crab",
    subtitle: "The largest arthropod alive, with a leg span wider than a car",
    category_id: "ocean-life",
    description:
      "The Japanese spider crab (Macrocheira kaempferi) is the largest living arthropod, with a leg span that can reach 3.7 meters from claw tip to claw tip, wider than many compact cars. Found in the deep waters around Japan at depths of 50 to 600 meters, these crabs can weigh up to 19 kg. Despite their intimidating size, they are gentle creatures that feed mainly on dead organisms and plant matter on the ocean floor. They are believed to live up to 100 years, though their exact lifespan in the wild is difficult to confirm. Young crabs decorate their shells with sponges and other organisms for camouflage.",
    search_terms: "japanese spider crab|macrocheira kaempferi|largest arthropod|giant crab|deep sea crab",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Leg span", value: 3.7, si_unit: "m" },
      { dimension: "length", label: "Carapace width", value: 0.4, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 19, si_unit: "kg" },
      { dimension: "length", label: "Claw length", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Habitat depth range", value: 600, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 3.15e9, si_unit: "s", note: "Up to 100 years" },
    ],
  },

  {
    slug: "crown-of-thorns-starfish",
    name: "Crown-of-Thorns Starfish",
    subtitle: "A coral-eating predator armed with venomous spines across its body",
    category_id: "ocean-life",
    description:
      "The crown-of-thorns starfish (Acanthaster planci) is one of the largest and most destructive starfish in the world. Named for the dense covering of sharp, venomous spines that protect its upper surface, a single adult can have up to 21 arms and reach 80 cm in diameter. It feeds by extruding its stomach onto live coral, digesting the tissue externally, and can consume up to 10 square meters of coral per year. Periodic population explosions have devastated large sections of the Great Barrier Reef and other Indo-Pacific reefs, making it a major concern for coral reef conservation.",
    search_terms: "crown of thorns starfish|acanthaster planci|coral predator|venomous starfish|reef pest",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (max)", value: 0.8, si_unit: "m" },
      { dimension: "length", label: "Spine length", value: 0.05, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 3.0, si_unit: "kg" },
      { dimension: "area", label: "Coral consumed per year", value: 10, si_unit: "m^2" },
      { dimension: "length", label: "Number of arms (typical)", value: 15, si_unit: "dimensionless" },
      { dimension: "time", label: "Lifespan", value: 5.05e8, si_unit: "s", note: "About 16 years" },
    ],
  },

  {
    slug: "giant-squid",
    name: "Giant Squid",
    subtitle: "A deep-ocean predator with eyes the size of dinner plates",
    category_id: "ocean-life",
    description:
      "The giant squid (Architeuthis dux) is one of the largest living invertebrates, reaching lengths of up to 13 meters including its two long feeding tentacles. Its eyes, measuring up to 27 cm in diameter, are the largest in the animal kingdom and are adapted to detect faint bioluminescence in the deep ocean. Giant squid live at depths of 300 to 1,000 meters and were not photographed alive in their natural habitat until 2004. They feature in maritime legends as the kraken. Each of their eight arms and two longer tentacles is lined with hundreds of toothed suckers that leave circular scars on the skin of sperm whales, their main predator.",
    search_terms: "giant squid|architeuthis dux|kraken|deep sea squid|largest invertebrate",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (with tentacles)", value: 13, si_unit: "m" },
      { dimension: "length", label: "Mantle length", value: 2.25, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 275, si_unit: "kg" },
      { dimension: "length", label: "Eye diameter", value: 0.27, si_unit: "m" },
      { dimension: "length", label: "Sucker diameter", value: 0.053, si_unit: "m" },
      { dimension: "length", label: "Habitat depth (typical)", value: 600, si_unit: "m" },
    ],
  },

  {
    slug: "coelacanth",
    name: "Coelacanth",
    subtitle: "A 'living fossil' fish thought extinct for 66 million years until found alive in 1938",
    category_id: "ocean-life",
    description:
      "The coelacanth (Latimeria chalumnae) is a deep-sea fish that was believed to have gone extinct with the dinosaurs 66 million years ago, until a living specimen was caught off South Africa in 1938. Often called a 'living fossil,' coelacanths have remained virtually unchanged for over 400 million years. They are one of the closest living fish relatives of tetrapods (four-limbed vertebrates, including humans). Their paired lobed fins move in an alternating pattern similar to the limbs of a walking animal. A second species (Latimeria menadoensis) was discovered in Indonesia in 1997.",
    search_terms: "coelacanth|latimeria|living fossil|lobe-finned fish|prehistoric fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 80, si_unit: "kg" },
      { dimension: "length", label: "Habitat depth", value: 200, si_unit: "m" },
      { dimension: "length", label: "Lobe fin length", value: 0.25, si_unit: "m" },
      { dimension: "time", label: "Species age", value: 1.26e16, si_unit: "s", note: "Over 400 million years" },
      { dimension: "time", label: "Lifespan", value: 1.89e9, si_unit: "s", note: "About 60 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MICROSCOPIC (8)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "diatom",
    name: "Diatom",
    subtitle: "A single-celled alga living inside an intricate glass house",
    category_id: "microscopic",
    description:
      "Diatoms are microscopic, single-celled algae encased in beautifully ornate cell walls (frustules) made of silica, essentially tiny glass houses. There are an estimated 100,000 species, each with a unique geometric pattern of pores, ribs, and spines etched into their silica shells. Diatoms are responsible for producing about 20% of the oxygen generated on Earth each year, more than all the world's tropical rainforests combined. When they die, their glass shells sink and accumulate on the ocean floor, forming deposits of diatomaceous earth that can be hundreds of meters thick over millions of years.",
    search_terms: "diatom|bacillariophyta|silica algae|phytoplankton|microscopic algae|frustule",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (typical)", value: 5e-5, si_unit: "m", note: "About 50 micrometers" },
      { dimension: "length", label: "Frustule wall thickness", value: 1e-6, si_unit: "m" },
      { dimension: "mass", label: "Cell mass", value: 1e-12, si_unit: "kg", note: "About 1 nanogram" },
      { dimension: "length", label: "Pore diameter", value: 2e-7, si_unit: "m" },
      { dimension: "length", label: "Size range", value: 2e-4, si_unit: "m", note: "2 micrometers to 200 micrometers" },
    ],
  },

  {
    slug: "rotifer",
    name: "Rotifer",
    subtitle: "A microscopic animal with spinning wheel-like cilia around its mouth",
    category_id: "microscopic",
    description:
      "Rotifers are microscopic aquatic animals, typically 100 to 500 micrometers long, named for the spinning, wheel-like ring of cilia (the corona) around their mouths that draws in food and creates the illusion of rotation. Despite their tiny size, rotifers have a complete digestive system with a mouth, stomach, and intestine. Some species, called bdelloid rotifers, have reproduced entirely without sex for over 50 million years. Rotifers can survive extreme conditions through cryptobiosis: when dried out, they enter a state of suspended animation and can revive years later when water returns. They are found in nearly every freshwater habitat on Earth.",
    search_terms: "rotifer|rotifera|wheel animal|microscopic animal|bdelloid|corona",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (typical)", value: 3e-4, si_unit: "m", note: "About 300 micrometers" },
      { dimension: "length", label: "Corona diameter", value: 1e-4, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1e-9, si_unit: "kg", note: "About 1 microgram" },
      { dimension: "frequency", label: "Cilia beat rate", value: 25, si_unit: "Hz" },
      { dimension: "time", label: "Lifespan", value: 1.2e6, si_unit: "s", note: "About 14 days" },
    ],
  },

  {
    slug: "hydra-organism",
    name: "Hydra",
    subtitle: "A freshwater polyp that can regenerate its entire body from a small fragment",
    category_id: "microscopic",
    description:
      "Hydra is a genus of tiny freshwater cnidarians, relatives of jellyfish and corals, typically 1 to 20 mm long. They are famous for their extraordinary regenerative abilities: a hydra can regrow its entire body from as little as 1/200th of the original organism. Scientists believe hydras are biologically immortal because their stem cells have unlimited self-renewal capability, showing no increase in mortality rate with age. They capture prey using stinging cells (cnidocytes) on their tentacles that fire microscopic harpoons called nematocysts at speeds of up to 2 m/s, making it one of the fastest cellular processes in nature.",
    search_terms: "hydra|cnidaria|freshwater polyp|regeneration|immortal animal|cnidocyte",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.01, si_unit: "m", note: "About 10 mm" },
      { dimension: "length", label: "Tentacle length", value: 0.025, si_unit: "m" },
      { dimension: "length", label: "Nematocyst length", value: 1e-5, si_unit: "m" },
      { dimension: "speed", label: "Nematocyst firing speed", value: 2, si_unit: "m/s" },
      { dimension: "mass", label: "Body mass", value: 1e-6, si_unit: "kg", note: "About 1 milligram" },
      { dimension: "time", label: "Regeneration time", value: 172800, si_unit: "s", note: "About 2 days" },
    ],
  },

  {
    slug: "volvox-colony",
    name: "Volvox Colony",
    subtitle: "A hollow sphere of thousands of cells that rolls through the water",
    category_id: "microscopic",
    description:
      "Volvox is a genus of freshwater green algae that form spherical colonies of 500 to 50,000 individual cells. Each colony is a hollow ball, with cells connected by cytoplasmic strands and coordinating their flagella to roll the sphere through the water toward light. Volvox is considered a key model organism for studying the evolution of multicellularity, as the colonies show a division of labor: most cells are small somatic cells responsible for movement, while a few larger cells (gonidia) specialize in reproduction. Daughter colonies form inside the mother sphere and are eventually released when the parent colony breaks apart.",
    search_terms: "volvox|colonial algae|green algae|chlorophyta|multicellularity|rolling colony",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Colony diameter", value: 5e-4, si_unit: "m", note: "About 500 micrometers" },
      { dimension: "length", label: "Individual cell diameter", value: 1e-5, si_unit: "m" },
      { dimension: "length", label: "Flagellum length", value: 2e-5, si_unit: "m" },
      { dimension: "speed", label: "Rolling speed", value: 3e-4, si_unit: "m/s" },
      { dimension: "mass", label: "Colony mass", value: 1e-7, si_unit: "kg", note: "About 0.1 microgram" },
    ],
  },

  {
    slug: "euglena",
    name: "Euglena",
    subtitle: "A single cell that is both plant and animal at the same time",
    category_id: "microscopic",
    description:
      "Euglena is a genus of single-celled organisms that blur the line between plant and animal. They contain chloroplasts and can photosynthesize like plants when light is available, but they can also consume food particles like animals when light is scarce. This dual lifestyle is called mixotrophy. Euglena have a flexible protein-rich outer layer called the pellicle, which allows them to change shape in a squirming motion called euglenoid movement. A red eyespot (stigma) near the base of their flagellum helps them detect light and swim toward it. There are over 1,000 described species, found mainly in freshwater environments.",
    search_terms: "euglena|euglenophyta|flagellate|protist|eyespot|mixotroph|photosynthetic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell length", value: 5.5e-5, si_unit: "m", note: "About 55 micrometers" },
      { dimension: "length", label: "Cell width", value: 1.5e-5, si_unit: "m" },
      { dimension: "length", label: "Flagellum length", value: 1e-4, si_unit: "m" },
      { dimension: "length", label: "Eyespot diameter", value: 3e-6, si_unit: "m" },
      { dimension: "speed", label: "Swimming speed", value: 1e-4, si_unit: "m/s" },
    ],
  },

  {
    slug: "nematode",
    name: "Nematode",
    subtitle: "The most abundant animal on Earth, with 57 billion per human",
    category_id: "microscopic",
    description:
      "Nematodes, or roundworms, are the most abundant multicellular animals on Earth. An estimated 57 billion nematodes exist for every human being. A single handful of soil may contain several thousand individuals. Most are microscopic, between 0.1 and 2.5 mm long, though some parasitic species can reach over a meter. The model organism Caenorhabditis elegans has exactly 959 cells in the adult hermaphrodite, making it one of the best-studied animals in biology. It was the first multicellular organism to have its complete genome sequenced and its entire neural connectome mapped (302 neurons, roughly 7,000 synapses).",
    search_terms: "nematode|roundworm|caenorhabditis elegans|c. elegans|soil worm|microscopic worm",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (C. elegans)", value: 1e-3, si_unit: "m", note: "About 1 mm" },
      { dimension: "length", label: "Body diameter", value: 8e-5, si_unit: "m" },
      { dimension: "mass", label: "Body mass (C. elegans)", value: 1e-9, si_unit: "kg", note: "About 1 microgram" },
      { dimension: "speed", label: "Crawling speed", value: 2.2e-4, si_unit: "m/s" },
      { dimension: "time", label: "Lifespan (C. elegans)", value: 1.73e6, si_unit: "s", note: "About 20 days" },
      { dimension: "length", label: "Number of cells (C. elegans)", value: 959, si_unit: "dimensionless" },
    ],
  },

  {
    slug: "copepod",
    name: "Copepod",
    subtitle: "The ocean's most numerous multicellular animal, fueling the marine food web",
    category_id: "microscopic",
    description:
      "Copepods are tiny crustaceans, typically 1 to 2 mm long, that constitute the most abundant multicellular animal group in the ocean and possibly on Earth. They form the critical link between microscopic phytoplankton and larger marine animals such as fish and whales. Copepods can jump at speeds of over 500 body lengths per second, making them among the fastest animals on Earth relative to their size. A single copepod can consume up to 370,000 phytoplankton cells per day. Their fecal pellets are a major component of 'marine snow,' the constant rain of organic matter that feeds deep-sea ecosystems.",
    search_terms: "copepod|copepoda|zooplankton|marine crustacean|plankton|calanus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.5e-3, si_unit: "m", note: "About 1.5 mm" },
      { dimension: "mass", label: "Body mass", value: 5e-9, si_unit: "kg", note: "About 5 micrograms" },
      { dimension: "speed", label: "Escape jump speed", value: 0.5, si_unit: "m/s" },
      { dimension: "length", label: "Antenna length", value: 1e-3, si_unit: "m" },
      { dimension: "length", label: "Egg size", value: 1e-4, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 5.18e6, si_unit: "s", note: "About 60 days" },
    ],
  },

  {
    slug: "radiolarian",
    name: "Radiolarian",
    subtitle: "A single-celled organism that builds intricate mineral skeletons of astonishing beauty",
    category_id: "microscopic",
    description:
      "Radiolarians are single-celled marine protists that construct elaborate mineral skeletons of silica or strontium sulfate, forming some of the most geometrically beautiful structures in the natural world. Ernst Haeckel's 1904 illustrations of radiolarians in 'Kunstformen der Natur' (Art Forms in Nature) remain celebrated for their artistic beauty and scientific accuracy. These skeletons feature perfect radial symmetry with ornate spines, lattices, and chambers. Radiolarians have existed for over 500 million years, and their accumulated skeletons form thick layers of siliceous ooze on the ocean floor. Many species harbor symbiotic algae that provide them with nutrients through photosynthesis.",
    search_terms: "radiolarian|radiolaria|silica skeleton|haeckel|marine protist|siliceous ooze",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell diameter (typical)", value: 2e-4, si_unit: "m", note: "About 200 micrometers" },
      { dimension: "length", label: "Spine length (max)", value: 5e-4, si_unit: "m" },
      { dimension: "length", label: "Skeleton pore size", value: 5e-6, si_unit: "m" },
      { dimension: "mass", label: "Cell mass", value: 1e-10, si_unit: "kg" },
      { dimension: "time", label: "Fossil record age", value: 1.58e16, si_unit: "s", note: "Over 500 million years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WEATHER (8)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "mammatus-clouds",
    name: "Mammatus Clouds",
    subtitle: "Eerie bubble-like pouches that hang from the underside of storm clouds",
    category_id: "weather",
    description:
      "Mammatus clouds are pouch-like protrusions hanging from the underside of cumulonimbus or other cloud types, creating a dramatic, almost otherworldly appearance. Each 'mammatus' (from the Latin for 'breast') is typically 1 to 3 km across and extends about 0.5 km below the cloud base. They form when cold, dense air sinks into warmer, less dense air below the cloud, creating the characteristic rounded lobes. While they often appear in association with severe weather, mammatus clouds themselves are not dangerous. They are most commonly seen in the central United States during spring and summer, often after the passage of strong thunderstorms.",
    search_terms: "mammatus|mammatus clouds|pouch clouds|storm clouds|cumulonimbus|severe weather",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Individual lobe diameter", value: 2000, si_unit: "m" },
      { dimension: "length", label: "Lobe vertical extent", value: 500, si_unit: "m" },
      { dimension: "length", label: "Cloud base altitude", value: 6000, si_unit: "m" },
      { dimension: "time", label: "Typical duration", value: 900, si_unit: "s", note: "About 15 minutes" },
      { dimension: "temperature", label: "Temperature difference (lobe vs. surroundings)", value: 5, si_unit: "K" },
    ],
  },

  {
    slug: "lenticular-cloud",
    name: "Lenticular Cloud",
    subtitle: "A smooth, lens-shaped cloud often mistaken for a UFO",
    category_id: "weather",
    description:
      "Lenticular clouds (altocumulus lenticularis) are smooth, lens-shaped or saucer-shaped clouds that form when stable, moist air flows over a mountain or ridge and creates standing waves on the downwind side. Unlike most clouds that move with the wind, lenticular clouds remain stationary, hovering in place as air continuously flows through them. Their smooth, rounded shape and stationary behavior have led to many UFO reports. They can stack in layers, forming dramatic 'pile of plates' formations. Pilots avoid them because the turbulent rotor zones beneath can produce severe downdrafts. They are commonly seen near mountain ranges worldwide.",
    search_terms: "lenticular cloud|altocumulus lenticularis|mountain wave|ufo cloud|saucer cloud|standing wave",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cloud diameter", value: 5000, si_unit: "m" },
      { dimension: "length", label: "Cloud thickness", value: 500, si_unit: "m" },
      { dimension: "length", label: "Altitude (typical)", value: 6000, si_unit: "m" },
      { dimension: "speed", label: "Wind speed through cloud", value: 25, si_unit: "m/s" },
      { dimension: "time", label: "Duration", value: 21600, si_unit: "s", note: "Can persist for hours" },
    ],
  },

  {
    slug: "rainbow-dimensions",
    name: "Rainbow",
    subtitle: "An optical arc spanning 84 degrees of sky, always centered on your shadow",
    category_id: "weather",
    description:
      "A rainbow is an optical phenomenon caused by the refraction, reflection, and dispersion of sunlight through water droplets. The primary rainbow forms an arc of about 42 degrees from the antisolar point (the point directly opposite the sun from the observer's perspective), giving the full bow an angular diameter of about 84 degrees. Each color refracts at a slightly different angle: red at 42 degrees, violet at 40 degrees, producing the familiar spectrum. A secondary rainbow, about 11 degrees outside the primary, has reversed colors and is caused by a second internal reflection. No two people see exactly the same rainbow because each observer's position defines a unique set of raindrops.",
    search_terms: "rainbow|optical phenomenon|refraction|dispersion|sunlight|water droplets",
    featured: 0,
    measurements: [
      { dimension: "angle", label: "Primary arc radius", value: 0.733, si_unit: "rad", note: "About 42 degrees" },
      { dimension: "angle", label: "Angular width of color band", value: 0.035, si_unit: "rad", note: "About 2 degrees" },
      { dimension: "angle", label: "Secondary arc radius", value: 0.908, si_unit: "rad", note: "About 52 degrees" },
      { dimension: "length", label: "Ideal raindrop size", value: 1e-3, si_unit: "m", note: "About 1 mm" },
      { dimension: "angle", label: "Full primary bow angular diameter", value: 1.466, si_unit: "rad", note: "About 84 degrees" },
    ],
  },

  {
    slug: "frost-crystal",
    name: "Frost Crystal",
    subtitle: "A feathery ice formation that grows overnight on cold surfaces",
    category_id: "weather",
    description:
      "Frost crystals form when water vapor in the air deposits directly as ice on surfaces that have cooled below the frost point (a process called deposition). On cold, calm nights, frost can grow into elaborate feathery or fernlike patterns called 'window frost' or 'fern frost' on glass surfaces. These patterns emerge because ice crystal growth is sensitive to tiny variations in temperature and humidity, causing branches to form at 60-degree angles following the hexagonal molecular structure of ice. A single frost crystal can grow from a few micrometers to several centimeters in a single night, adding new branches every few minutes.",
    search_terms: "frost crystal|window frost|fern frost|ice crystal|hoar frost|deposition|winter",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Crystal length (typical)", value: 0.02, si_unit: "m" },
      { dimension: "length", label: "Branch width", value: 5e-5, si_unit: "m" },
      { dimension: "length", label: "Growth rate per hour", value: 0.003, si_unit: "m" },
      { dimension: "temperature", label: "Formation temperature", value: 273, si_unit: "K", note: "At or below 0 C" },
      { dimension: "angle", label: "Branch angle", value: 1.047, si_unit: "rad", note: "60 degrees, hexagonal" },
    ],
  },

  {
    slug: "st-elmos-fire",
    name: "St. Elmo's Fire",
    subtitle: "A ghostly electric glow that appears on ship masts and airplane wings during storms",
    category_id: "weather",
    description:
      "St. Elmo's fire is a luminous plasma discharge caused by the ionization of air in a strong electric field, typically during thunderstorms. It appears as a bright blue or violet glow emanating from pointed objects such as ship masts, church steeples, airplane wingtips, and even cattle horns. Named after St. Erasmus of Formia, the patron saint of sailors, it was considered a good omen by Mediterranean sailors for centuries. The phenomenon occurs when the electric field at a pointed conductor exceeds about 30,000 volts per meter, strong enough to ionize the surrounding air but not strong enough to produce a full lightning strike. It is not actually fire and is barely warm to the touch.",
    search_terms: "st elmo's fire|corona discharge|plasma|electric glow|storm glow|ionization",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Glow extent (typical)", value: 0.3, si_unit: "m" },
      { dimension: "voltage", label: "Electric field threshold", value: 30000, si_unit: "V/m" },
      { dimension: "power", label: "Luminous power", value: 0.1, si_unit: "W" },
      { dimension: "temperature", label: "Plasma temperature", value: 400, si_unit: "K" },
      { dimension: "time", label: "Duration (typical)", value: 300, si_unit: "s", note: "Several minutes" },
    ],
  },

  {
    slug: "microburst",
    name: "Microburst",
    subtitle: "A column of sinking air that can slam into the ground at 270 km/h",
    category_id: "weather",
    description:
      "A microburst is a localized column of sinking air within a thunderstorm that produces damaging divergent winds at or near the surface. When the downdraft hits the ground, it spreads out in all directions, creating wind speeds that can exceed 270 km/h, comparable to an EF4 tornado. Microbursts affect an area less than 4 km across and last only 5 to 15 minutes, making them extremely difficult to predict. They are classified as wet (with heavy rain) or dry (with little or no precipitation reaching the ground). Microbursts have caused several major aviation disasters, leading to the development of wind shear detection systems at airports worldwide.",
    search_terms: "microburst|downburst|wind shear|thunderstorm|downdraft|aviation hazard",
    featured: 0,
    measurements: [
      { dimension: "speed", label: "Maximum wind speed", value: 75, si_unit: "m/s", note: "About 270 km/h" },
      { dimension: "length", label: "Diameter (max)", value: 4000, si_unit: "m" },
      { dimension: "length", label: "Downdraft altitude origin", value: 3000, si_unit: "m" },
      { dimension: "speed", label: "Downdraft speed", value: 30, si_unit: "m/s" },
      { dimension: "time", label: "Duration", value: 600, si_unit: "s", note: "5 to 15 minutes" },
    ],
  },

  {
    slug: "thundersnow",
    name: "Thundersnow",
    subtitle: "A rare winter thunderstorm where lightning crackles through falling snow",
    category_id: "weather",
    description:
      "Thundersnow is a rare meteorological phenomenon in which thunder and lightning occur during a snowstorm. It happens when a layer of warm air near the surface rises rapidly through a colder layer above, creating the same convective instability that powers ordinary thunderstorms but in a winter setting. Lightning during thundersnow is typically closer to the ground and appears brighter because the snow-filled air reflects the flash. Thunder is often muffled by the snow, audible only within about 3 km instead of the usual 16 km. Thundersnow events frequently produce extremely heavy snowfall rates of 5 to 10 cm per hour and are most common around large lake-effect snow bands.",
    search_terms: "thundersnow|winter thunderstorm|snow lightning|lake effect|winter storm",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Thunder audibility range", value: 3000, si_unit: "m" },
      { dimension: "length", label: "Snowfall rate per hour", value: 0.075, si_unit: "m", note: "5 to 10 cm per hour" },
      { dimension: "length", label: "Typical lightning altitude", value: 500, si_unit: "m" },
      { dimension: "temperature", label: "Surface temperature (typical)", value: 271, si_unit: "K", note: "About -2 C" },
      { dimension: "speed", label: "Updraft speed", value: 15, si_unit: "m/s" },
    ],
  },

  {
    slug: "haboob-dust-storm",
    name: "Haboob Dust Storm",
    subtitle: "A massive wall of dust up to 1,500 meters tall that swallows entire cities",
    category_id: "weather",
    description:
      "A haboob is a type of intense dust storm carried on the leading edge of a thunderstorm's outflow boundary, forming a towering wall of dust that can reach 1,500 meters high and stretch over 100 km wide. The word comes from the Arabic 'habb,' meaning 'to blow.' Haboobs are most common in the Sahara Desert, the Arabian Peninsula, and the southwestern United States. The wall of dust advances at speeds of 35 to 100 km/h, reducing visibility to near zero in seconds. The dust can contain fungal spores, bacteria, and fine particulate matter that poses serious respiratory health risks. A major haboob can transport millions of tonnes of dust across continents.",
    search_terms: "haboob|dust storm|sandstorm|dust wall|sahara|outflow boundary|desert storm",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wall height (max)", value: 1500, si_unit: "m" },
      { dimension: "length", label: "Width", value: 100000, si_unit: "m" },
      { dimension: "speed", label: "Advance speed", value: 20, si_unit: "m/s", note: "About 72 km/h" },
      { dimension: "length", label: "Visibility during storm", value: 10, si_unit: "m" },
      { dimension: "time", label: "Duration", value: 10800, si_unit: "s", note: "About 3 hours" },
      { dimension: "mass", label: "Dust transported (major event)", value: 1e9, si_unit: "kg", note: "Millions of tonnes" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FOOD (15)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "persimmon",
    name: "Persimmon",
    subtitle: "An autumn fruit that transforms from mouth-puckering to honey-sweet when ripe",
    category_id: "food",
    description:
      "Persimmons are the edible fruit of trees in the genus Diospyros, whose name means 'divine fruit' in Greek. The most common varieties are the Japanese persimmon (Diospyros kaki), which is one of the oldest cultivated fruits in East Asia, grown for over 2,000 years. Unripe persimmons contain high levels of tannins that produce an extreme astringent, mouth-drying sensation, but once fully ripe, the tannins break down and the fruit becomes intensely sweet with a honey-like flavor. The Hachiya variety must be fully soft before eating, while the Fuyu variety can be eaten firm like an apple.",
    search_terms: "persimmon|diospyros kaki|sharon fruit|fuyu|hachiya|autumn fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit diameter", value: 0.08, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 0.17, si_unit: "kg" },
      { dimension: "length", label: "Calyx diameter", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Skin thickness", value: 5e-4, si_unit: "m" },
      { dimension: "energy", label: "Energy per fruit", value: 293000, si_unit: "J", note: "About 70 kcal" },
    ],
  },

  {
    slug: "pomegranate",
    name: "Pomegranate",
    subtitle: "A fruit containing up to 1,400 jewel-like seeds in a leathery shell",
    category_id: "food",
    description:
      "The pomegranate (Punica granatum) is one of the oldest cultivated fruits, with evidence of cultivation dating back to 3000 BCE in the region of modern Iran. Each fruit contains 200 to 1,400 seeds (arils), each encased in a juicy, ruby-red pulp and separated by white pith membranes. The name 'pomegranate' comes from the Latin 'pomum granatum,' meaning 'seeded apple.' Pomegranates have been symbols of fertility, abundance, and immortality across many cultures, from ancient Egypt to Greece. The juice is rich in antioxidants, particularly punicalagins, which give it roughly three times the antioxidant activity of red wine or green tea.",
    search_terms: "pomegranate|punica granatum|arils|seeded fruit|antioxidant fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit diameter", value: 0.1, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 0.28, si_unit: "kg" },
      { dimension: "length", label: "Aril length", value: 0.012, si_unit: "m" },
      { dimension: "length", label: "Rind thickness", value: 0.005, si_unit: "m" },
      { dimension: "energy", label: "Energy per fruit", value: 556000, si_unit: "J", note: "About 133 kcal" },
    ],
  },

  {
    slug: "coconut",
    name: "Coconut",
    subtitle: "A seed, fruit, and nut in one that can float across oceans to colonize new islands",
    category_id: "food",
    description:
      "The coconut (Cocos nucifera) is the fruit of the coconut palm, and technically a drupe rather than a true nut. It has three layers: a smooth outer exocarp, a fibrous mesocarp (the husk, up to 5 cm thick), and a hard inner endocarp (the shell). Coconuts can float for months and still germinate after crossing thousands of kilometers of open ocean, which is how coconut palms colonized tropical coastlines worldwide. A single coconut contains about 400 ml of coconut water and up to 34 grams of fat in the white meat. Coconut palms produce 50 to 200 fruits per year and can live for up to 100 years.",
    search_terms: "coconut|cocos nucifera|coconut palm|drupe|tropical fruit|copra",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit length (with husk)", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Fruit diameter", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass (with husk)", value: 1.4, si_unit: "kg" },
      { dimension: "length", label: "Shell thickness", value: 0.005, si_unit: "m" },
      { dimension: "volume", label: "Coconut water volume", value: 4e-4, si_unit: "m^3", note: "About 400 ml" },
      { dimension: "energy", label: "Energy (meat + water)", value: 1.49e6, si_unit: "J", note: "About 354 kcal" },
    ],
  },

  {
    slug: "pineapple",
    name: "Pineapple",
    subtitle: "A fruit that takes two years to grow and is actually 200 fused berries",
    category_id: "food",
    description:
      "The pineapple (Ananas comosus) is a tropical fruit that is actually a composite of 100 to 200 individual fruitlets fused together around a central core. Each 'eye' on the surface represents one berry. A pineapple plant takes about 18 to 24 months to produce a single fruit and then typically produces just one more before the plant is replaced. Pineapples contain bromelain, a protein-digesting enzyme so potent that plantation workers wear gloves to prevent skin irritation. This enzyme is why pineapple can tenderize meat and why your mouth tingles when you eat it, as the fruit is literally digesting you back.",
    search_terms: "pineapple|ananas comosus|bromelain|tropical fruit|composite fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit height", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Fruit diameter", value: 0.14, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 1.0, si_unit: "kg" },
      { dimension: "length", label: "Crown height", value: 0.15, si_unit: "m" },
      { dimension: "energy", label: "Energy per fruit", value: 2.09e6, si_unit: "J", note: "About 500 kcal" },
    ],
  },

  {
    slug: "mango",
    name: "Mango",
    subtitle: "The world's most consumed tropical fruit, cultivated for 4,000 years",
    category_id: "food",
    description:
      "The mango (Mangifera indica) is a tropical stone fruit and the national fruit of India, Pakistan, and the Philippines. Mangoes have been cultivated in South and Southeast Asia for at least 4,000 years, and there are now over 1,000 named varieties worldwide. The fruit ranges from green to yellow, orange, or red when ripe, with sweet, aromatic flesh surrounding a large, flat seed. Mangoes are botanically related to cashews and poison ivy; the skin contains urushiol, the same compound that causes poison ivy rashes, which is why some people develop contact dermatitis when handling the peel. India produces roughly half of the world's mango supply.",
    search_terms: "mango|mangifera indica|tropical fruit|stone fruit|indian fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit length", value: 0.14, si_unit: "m" },
      { dimension: "length", label: "Fruit width", value: 0.08, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 0.3, si_unit: "kg" },
      { dimension: "mass", label: "Seed mass", value: 0.05, si_unit: "kg" },
      { dimension: "energy", label: "Energy per fruit", value: 836000, si_unit: "J", note: "About 200 kcal" },
    ],
  },

  {
    slug: "durian",
    name: "Durian",
    subtitle: "The 'king of fruits' so pungent it is banned on public transport in Southeast Asia",
    category_id: "food",
    description:
      "The durian (Durio zibethinus) is a large, spiny tropical fruit from Southeast Asia known for its overwhelmingly powerful smell, which has been compared to rotting onions, turpentine, and raw sewage. The odor is so intense that durians are banned on many forms of public transportation, in hotels, and in airports across Singapore, Thailand, and other Southeast Asian countries. Despite the smell, the custard-like flesh is considered a delicacy by many, with a complex sweet flavor. The fruit's husk is covered in sharp, thorn-like spines. Durians can fall from heights of 20 meters or more, and falling durians cause several injuries each year.",
    search_terms: "durian|durio zibethinus|king of fruits|smelly fruit|southeast asia fruit|spiny fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Fruit diameter", value: 0.15, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 2.0, si_unit: "kg" },
      { dimension: "length", label: "Spine length", value: 0.02, si_unit: "m" },
      { dimension: "length", label: "Husk thickness", value: 0.03, si_unit: "m" },
      { dimension: "energy", label: "Energy per fruit", value: 6.07e6, si_unit: "J", note: "About 1,450 kcal" },
    ],
  },

  {
    slug: "jackfruit",
    name: "Jackfruit",
    subtitle: "The largest tree-borne fruit in the world, up to 55 kg on a single stem",
    category_id: "food",
    description:
      "The jackfruit (Artocarpus heterophyllus) is the largest tree-borne fruit in the world. Individual fruits can weigh up to 55 kg, measure up to 90 cm long, and contain up to 500 edible seeds surrounded by sweet, yellow flesh. Native to the rainforests of India, jackfruit has been cultivated for at least 6,000 years. The unripe fruit has a meat-like texture when cooked, making it increasingly popular as a plant-based meat substitute. A single jackfruit tree can produce 100 to 200 fruits per year. The wood is termite-resistant and valued for furniture, while the tree's latex was traditionally used as glue.",
    search_terms: "jackfruit|artocarpus heterophyllus|largest fruit|tree fruit|meat substitute|tropical fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit length (max)", value: 0.9, si_unit: "m" },
      { dimension: "length", label: "Fruit diameter", value: 0.5, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass (max)", value: 55, si_unit: "kg" },
      { dimension: "mass", label: "Fruit mass (typical)", value: 10, si_unit: "kg" },
      { dimension: "length", label: "Seed length", value: 0.03, si_unit: "m" },
      { dimension: "energy", label: "Energy per kg of flesh", value: 410000, si_unit: "J", note: "About 98 kcal per 100g" },
    ],
  },

  {
    slug: "dragon-fruit",
    name: "Dragon Fruit",
    subtitle: "A cactus fruit with hot pink skin and speckled white or magenta flesh",
    category_id: "food",
    description:
      "Dragon fruit, or pitaya, is the fruit of several cactus species in the genus Hylocereus and Selenicereus. Native to Central America, it is now widely cultivated in Southeast Asia and has become a symbol of Vietnamese agriculture. The fruit has a striking appearance: bright pink or yellow skin with green-tipped scales and white or magenta flesh dotted with thousands of tiny black seeds. Dragon fruit cacti are night-blooming, with large, fragrant white flowers that open for just one night and are pollinated by moths and bats. The flowers can be up to 30 cm long, making them among the largest in the cactus family.",
    search_terms: "dragon fruit|pitaya|pitahaya|hylocereus|cactus fruit|night blooming",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit length", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Fruit diameter", value: 0.09, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 0.35, si_unit: "kg" },
      { dimension: "length", label: "Scale length", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Flower length", value: 0.3, si_unit: "m" },
      { dimension: "energy", label: "Energy per fruit", value: 251000, si_unit: "J", note: "About 60 kcal" },
    ],
  },

  {
    slug: "passion-fruit",
    name: "Passion Fruit",
    subtitle: "A wrinkly tropical fruit packed with crunchy, aromatic seeds",
    category_id: "food",
    description:
      "Passion fruit (Passiflora edulis) is a tropical fruit named by Spanish missionaries who saw symbols of the Passion of Christ in the flower's structure: the five petals and five sepals represented the ten faithful apostles, the corona filaments the crown of thorns, the five stamens the five wounds, and the three stigmas the three nails. The fruit has a tough outer rind that wrinkles when ripe, enclosing a fragrant, jelly-like pulp filled with crunchy edible seeds. Each fruit contains about 250 seeds. The purple and yellow varieties are the most common, with the yellow being slightly larger and more acidic.",
    search_terms: "passion fruit|passiflora edulis|granadilla|maracuya|tropical fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit diameter", value: 0.065, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass", value: 0.06, si_unit: "kg" },
      { dimension: "length", label: "Rind thickness", value: 0.003, si_unit: "m" },
      { dimension: "length", label: "Seed length", value: 0.005, si_unit: "m" },
      { dimension: "energy", label: "Energy per fruit", value: 71000, si_unit: "J", note: "About 17 kcal" },
    ],
  },

  {
    slug: "fig",
    name: "Fig",
    subtitle: "Not actually a fruit, but an inside-out flower pollinated by tiny wasps",
    category_id: "food",
    description:
      "The common fig (Ficus carica) is not technically a fruit but a syconium: a fleshy, hollow structure with the flowers lining the inside. Each fig is essentially an inside-out bouquet of tiny flowers, and the crunchy bits inside are not seeds but the actual fruits (drupelets). Figs have a remarkable mutualistic relationship with fig wasps: a tiny female wasp enters through a narrow opening (the ostiole), pollinates the internal flowers, lays her eggs, and dies inside. The fig then digests the wasp with an enzyme called ficin. Figs are among the earliest cultivated fruits, with evidence of cultivation dating back to about 9400 BCE.",
    search_terms: "fig|ficus carica|syconium|fig wasp|inside out flower|dried fruit",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fruit length", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Fruit diameter", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Fruit mass (fresh)", value: 0.05, si_unit: "kg" },
      { dimension: "length", label: "Ostiole diameter", value: 0.002, si_unit: "m" },
      { dimension: "energy", label: "Energy per fig (fresh)", value: 155000, si_unit: "J", note: "About 37 kcal" },
    ],
  },

  {
    slug: "artichoke",
    name: "Artichoke",
    subtitle: "An edible thistle bud that is actually an immature flower head",
    category_id: "food",
    description:
      "The globe artichoke (Cynara cardunculus var. scolymus) is the immature flower head of a species of thistle, harvested before it blooms. What we eat are the fleshy bases of the outer bracts and the 'heart' at the center. If left unharvested, the artichoke opens into a spectacular purple flower up to 15 cm across, attractive to bees and butterflies. Artichokes originated in the Mediterranean region and were cultivated by the ancient Greeks and Romans. Today, Italy produces about 34% of the world's supply. The artichoke contains cynarin, a compound that makes water taste sweet after eating, affecting roughly 60% of people.",
    search_terms: "artichoke|cynara cardunculus|globe artichoke|thistle bud|flower bud|heart",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Head diameter", value: 0.1, si_unit: "m" },
      { dimension: "length", label: "Head height", value: 0.12, si_unit: "m" },
      { dimension: "mass", label: "Head mass", value: 0.34, si_unit: "kg" },
      { dimension: "length", label: "Heart diameter", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Bract length", value: 0.05, si_unit: "m" },
      { dimension: "energy", label: "Energy per artichoke", value: 251000, si_unit: "J", note: "About 60 kcal" },
    ],
  },

  {
    slug: "brussels-sprout",
    name: "Brussels Sprout",
    subtitle: "A miniature cabbage that grows in rows of 80 along a single stalk",
    category_id: "food",
    description:
      "Brussels sprouts (Brassica oleracea var. gemmifera) are small, cabbage-like buds that grow in a spiral pattern along a thick stalk, with a single plant producing 60 to 80 sprouts. They are named after Brussels, Belgium, where they may have been cultivated as early as the 13th century. Brussels sprouts contain sinigrin, a compound that tastes bitter to people with certain genetic variants of the TAS2R38 taste receptor, which explains why some people love them and others find them repulsive. Modern cultivars have been bred to reduce bitterness. A frost actually improves their flavor by converting some starches to sugars.",
    search_terms: "brussels sprout|brassica oleracea|mini cabbage|cruciferous vegetable|winter vegetable",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Sprout diameter", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Sprout mass", value: 0.015, si_unit: "kg" },
      { dimension: "length", label: "Stalk height", value: 0.9, si_unit: "m" },
      { dimension: "length", label: "Leaf count per sprout", value: 30, si_unit: "dimensionless" },
      { dimension: "energy", label: "Energy per sprout", value: 33000, si_unit: "J", note: "About 8 kcal" },
    ],
  },

  {
    slug: "jalapeno-pepper",
    name: "Jalapeno Pepper",
    subtitle: "A medium-hot chili that ranks 2,500 to 8,000 on the Scoville scale",
    category_id: "food",
    description:
      "The jalapeno (Capsicum annuum) is the most popular chili pepper in the United States and Mexico, named after the city of Xalapa (Jalapa) in Veracruz, Mexico. It measures 2,500 to 8,000 Scoville heat units, placing it in the medium range of pepper heat. The 'heat' comes from capsaicin, concentrated in the white inner membranes (placenta) rather than the seeds as commonly believed. Jalapenos are one of the few peppers that are commonly eaten at all stages of ripeness, from green to fully red. When smoke-dried, jalapenos become chipotles. A single plant can produce 25 to 35 peppers per growing season.",
    search_terms: "jalapeno|capsicum annuum|chili pepper|hot pepper|scoville|chipotle",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Pepper length", value: 0.07, si_unit: "m" },
      { dimension: "length", label: "Pepper diameter", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Pepper mass", value: 0.025, si_unit: "kg" },
      { dimension: "length", label: "Placenta thickness", value: 0.003, si_unit: "m" },
      { dimension: "energy", label: "Energy per pepper", value: 17000, si_unit: "J", note: "About 4 kcal" },
    ],
  },

  {
    slug: "truffle-fungus",
    name: "Truffle",
    subtitle: "An underground fungus worth more per kilogram than gold",
    category_id: "food",
    description:
      "Truffles are the fruiting bodies of subterranean fungi in the genus Tuber that grow 5 to 30 cm underground in symbiotic association with the roots of certain trees, particularly oaks, hazels, and beeches. The white truffle of Alba (Tuber magnatum) is the most expensive food in the world, regularly selling for 3,000 to 5,000 euros per kilogram, with exceptional specimens fetching over 100,000 euros. Their intense, complex aroma contains dimethyl sulfide and other volatile compounds that can permeate through soil, which is why trained dogs (and historically pigs) are used to locate them. Despite centuries of effort, white truffles have never been successfully cultivated.",
    search_terms: "truffle|tuber magnatum|tuber melanosporum|alba truffle|black truffle|underground fungus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (typical)", value: 0.05, si_unit: "m" },
      { dimension: "mass", label: "Mass (typical)", value: 0.05, si_unit: "kg" },
      { dimension: "length", label: "Depth underground", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Spore diameter", value: 3.5e-5, si_unit: "m" },
      { dimension: "mass", label: "Largest specimen ever found", value: 1.89, si_unit: "kg" },
    ],
  },

  {
    slug: "lobster",
    name: "Lobster",
    subtitle: "A crustacean that tastes with its feet and chews with its stomach",
    category_id: "food",
    description:
      "The American lobster (Homarus americanus) is the heaviest crustacean in the world, with the largest recorded specimen weighing 20.1 kg. Lobsters taste food using chemosensory hairs on their feet and legs, and their stomach (the gastric mill) contains tooth-like structures that grind food after it is swallowed. They have blue blood because their oxygen-carrying molecule, hemocyanin, uses copper instead of the iron found in hemoglobin. Lobsters continue to grow throughout their lives and do not appear to slow down, weaken, or lose fertility with age. They can regenerate lost claws, legs, and antennae. Wild lobsters are greenish-brown; they turn red only when cooked, as heat breaks down all pigments except the red astaxanthin.",
    search_terms: "lobster|homarus americanus|crustacean|shellfish|seafood|clawed lobster",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (typical)", value: 0.3, si_unit: "m" },
      { dimension: "mass", label: "Body mass (typical)", value: 0.7, si_unit: "kg" },
      { dimension: "length", label: "Claw length", value: 0.12, si_unit: "m" },
      { dimension: "force", label: "Claw crush force", value: 200, si_unit: "N" },
      { dimension: "length", label: "Antenna length", value: 0.4, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 3.15e9, si_unit: "s", note: "Up to 100 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLANTS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "lotus-flower",
    name: "Lotus Flower",
    subtitle: "A sacred flower that can regulate its own temperature like a warm-blooded animal",
    category_id: "plants",
    description:
      "The sacred lotus (Nelumbo nucifera) is an aquatic plant revered across Asian cultures for thousands of years. It has a remarkable ability to thermoregulate, maintaining its flower temperature between 30 and 36 degrees Celsius even when the air temperature drops to 10 degrees, a trait almost unheard of in plants. The lotus leaf surface is covered in microscopic waxy bumps that repel water so effectively that dirt particles are carried away by rolling droplets, a self-cleaning property called the 'lotus effect' that has inspired waterproof materials. Lotus seeds are extraordinarily long-lived; a 1,300-year-old seed from a dry lakebed in China was successfully germinated.",
    search_terms: "lotus|nelumbo nucifera|sacred lotus|aquatic flower|lotus effect|self-cleaning",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Flower diameter", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Leaf diameter", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Stem length (underwater)", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Seed length", value: 0.015, si_unit: "m" },
      { dimension: "temperature", label: "Flower thermoregulation range", value: 306, si_unit: "K", note: "30 to 36 C" },
      { dimension: "length", label: "Leaf surface bump spacing", value: 1e-5, si_unit: "m" },
    ],
  },

  {
    slug: "banyan-tree",
    name: "Banyan Tree",
    subtitle: "A single tree that can spread across 2 hectares using aerial roots",
    category_id: "plants",
    description:
      "The banyan (Ficus benghalensis) is a fig tree famous for its aerial prop roots that grow down from branches to the ground, where they thicken into trunk-like pillars. Over time, a single tree can spread across enormous areas, creating the appearance of a small forest. The Great Banyan in the Acharya Jagadish Chandra Bose Indian Botanic Garden near Kolkata has a canopy circumference of about 486 meters and covers roughly 1.89 hectares, making it the widest tree in the world. The national tree of India, the banyan plays a central role in Hindu, Buddhist, and Jain traditions as a symbol of eternal life and interconnection.",
    search_terms: "banyan|ficus benghalensis|aerial roots|prop roots|indian fig|great banyan|strangler fig",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Canopy circumference (Great Banyan)", value: 486, si_unit: "m" },
      { dimension: "area", label: "Canopy area (Great Banyan)", value: 18900, si_unit: "m^2" },
      { dimension: "length", label: "Height", value: 25, si_unit: "m" },
      { dimension: "length", label: "Aerial root diameter", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Number of prop roots (Great Banyan)", value: 3600, si_unit: "dimensionless" },
      { dimension: "time", label: "Age (Great Banyan)", value: 7.88e9, si_unit: "s", note: "About 250 years" },
    ],
  },

  {
    slug: "joshua-tree",
    name: "Joshua Tree",
    subtitle: "A twisted desert tree that depends on one specific moth for pollination",
    category_id: "plants",
    description:
      "The Joshua tree (Yucca brevifolia) is an iconic tree-like plant of the Mojave Desert in the southwestern United States, growing at elevations between 400 and 1,800 meters. Despite its tree-like appearance, it is actually a member of the asparagus family. Joshua trees depend almost exclusively on the yucca moth (Tegeticula synthetica) for pollination in a classic example of obligate mutualism: the moth deliberately collects pollen and inserts it into the flower's stigma, then lays its eggs inside. The larvae eat some of the developing seeds but leave enough for the plant to reproduce. Individual trees can live for hundreds of years, growing only about 7.5 cm per year.",
    search_terms: "joshua tree|yucca brevifolia|mojave desert|yucca moth|desert tree|asparagus family",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (mature)", value: 12, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Leaf length", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Root system depth", value: 11, si_unit: "m" },
      { dimension: "length", label: "Growth rate per year", value: 0.075, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 2.84e10, si_unit: "s", note: "Up to 900 years" },
    ],
  },

  {
    slug: "barrel-cactus",
    name: "Barrel Cactus",
    subtitle: "A ribbed desert survivor that can store hundreds of liters of water",
    category_id: "plants",
    description:
      "Barrel cacti (Ferocactus and Echinocactus genera) are large, cylindrical cacti native to the deserts of North America. Their accordion-like ribs allow them to expand and contract as they absorb and use water, functioning like a living water tank. A large barrel cactus can store several hundred liters of moisture in its spongy tissue. The fishhook barrel cactus (Ferocactus wislizeni) develops a pronounced lean toward the south or southwest, earning it the nickname 'compass cactus.' Their thick, hooked spines provide shade, reduce air flow near the skin to minimize water loss, and channel rain toward the roots. Some species can live for over 100 years.",
    search_terms: "barrel cactus|ferocactus|echinocactus|compass cactus|desert cactus|ribbed cactus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (max)", value: 3, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.6, si_unit: "m" },
      { dimension: "mass", label: "Mass (when full of water)", value: 100, si_unit: "kg" },
      { dimension: "length", label: "Spine length", value: 0.1, si_unit: "m" },
      { dimension: "length", label: "Root spread", value: 1, si_unit: "m" },
      { dimension: "time", label: "Lifespan", value: 3.15e9, si_unit: "s", note: "Up to 100 years" },
    ],
  },

  {
    slug: "welwitschia",
    name: "Welwitschia",
    subtitle: "A desert plant with just two leaves that can live for over 1,000 years",
    category_id: "plants",
    description:
      "Welwitschia mirabilis is one of the strangest plants on Earth. Found only in the Namib Desert of Namibia and Angola, it produces just two leaves in its entire lifetime, which grow continuously from the base and can reach lengths of over 4 meters, becoming tattered and split by wind over the centuries. Some specimens are estimated to be over 2,000 years old based on carbon dating. The plant consists of a short, stout trunk (actually a woody crown) rarely more than 50 cm tall, a deep taproot, and those two extraordinary leaves. It absorbs most of its water from coastal fog through its leaf surfaces rather than through its roots.",
    search_terms: "welwitschia|welwitschia mirabilis|namib desert|two leaves|living fossil|ancient plant",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Leaf length (max)", value: 4, si_unit: "m" },
      { dimension: "length", label: "Leaf width", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Stem diameter", value: 1.2, si_unit: "m" },
      { dimension: "length", label: "Stem height", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Taproot depth", value: 3, si_unit: "m" },
      { dimension: "time", label: "Lifespan (max estimated)", value: 6.31e10, si_unit: "s", note: "Over 2,000 years" },
    ],
  },

  {
    slug: "pitcher-plant",
    name: "Pitcher Plant",
    subtitle: "A carnivorous plant that digests insects in pools of enzyme-filled liquid",
    category_id: "plants",
    description:
      "Pitcher plants are carnivorous plants that have evolved modified leaves shaped like deep pitchers or cups, which serve as passive pitfall traps for insects and other small prey. The rim (peristome) of the pitcher is covered in microscopic ridges that become extremely slippery when wet, causing insects to slide into the pool of digestive enzymes at the bottom. The largest species, Nepenthes rajah from Borneo, can hold up to 3.5 liters of fluid and has been known to trap rats, frogs, and even small birds. Pitcher plants have evolved independently in multiple plant families across the Americas, Asia, and Australia.",
    search_terms: "pitcher plant|nepenthes|sarracenia|carnivorous plant|insect trap|pitfall trap",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Pitcher height (N. rajah)", value: 0.35, si_unit: "m" },
      { dimension: "length", label: "Pitcher diameter (N. rajah)", value: 0.18, si_unit: "m" },
      { dimension: "volume", label: "Fluid volume (N. rajah max)", value: 0.0035, si_unit: "m^3", note: "About 3.5 liters" },
      { dimension: "length", label: "Peristome ridge spacing", value: 1e-5, si_unit: "m" },
      { dimension: "length", label: "Vine length (Nepenthes)", value: 15, si_unit: "m" },
    ],
  },

  {
    slug: "strangler-fig",
    name: "Strangler Fig",
    subtitle: "A parasitic tree that slowly envelops and kills its host over decades",
    category_id: "plants",
    description:
      "Strangler figs (multiple Ficus species) begin life as epiphytes when their seeds, deposited in bird droppings, germinate high in the canopy of a host tree. The fig sends roots down to the ground while simultaneously spreading a lattice of roots around the host's trunk. Over decades, this lattice tightens, restricting the host's growth, while the fig's crown expands to compete for sunlight. Eventually, the host tree dies and rots away, leaving the fig standing on a hollow, pillar-like cage of interwoven roots. This strategy allows figs to reach the sunlit canopy without growing a massive trunk from ground level, an enormous competitive advantage in dense tropical forests.",
    search_terms: "strangler fig|ficus|epiphyte|parasitic tree|hemiparasite|tropical fig|lattice roots",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 30, si_unit: "m" },
      { dimension: "length", label: "Root cage diameter", value: 2, si_unit: "m" },
      { dimension: "length", label: "Aerial root length", value: 25, si_unit: "m" },
      { dimension: "length", label: "Canopy diameter", value: 40, si_unit: "m" },
      { dimension: "time", label: "Time to strangle host", value: 4.73e8, si_unit: "s", note: "About 15 years" },
    ],
  },

  {
    slug: "titan-arum",
    name: "Titan Arum",
    subtitle: "The world's largest unbranched flower structure, smelling of rotting flesh",
    category_id: "plants",
    description:
      "The titan arum (Amorphophallus titanum) produces the largest unbranched inflorescence in the plant kingdom, reaching heights of over 3 meters. Native to the rainforests of western Sumatra, it is famous for its overwhelming stench of decomposing flesh during bloom, earning it the nickname 'corpse flower.' This smell, combined with the deep red color of the inner spathe and heat generated by the flower (which can reach 36 C), attracts carrion beetles and flesh flies that serve as pollinators. The bloom lasts only 24 to 48 hours and occurs unpredictably, sometimes with gaps of 7 to 10 years between blooms. The underground corm can weigh over 90 kg.",
    search_terms: "titan arum|amorphophallus titanum|corpse flower|largest flower|stinking flower|sumatra",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Inflorescence height (max)", value: 3.1, si_unit: "m" },
      { dimension: "length", label: "Spathe diameter", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Corm mass", value: 90, si_unit: "kg" },
      { dimension: "temperature", label: "Flower temperature (peak)", value: 309, si_unit: "K", note: "About 36 C" },
      { dimension: "time", label: "Bloom duration", value: 129600, si_unit: "s", note: "24 to 48 hours" },
      { dimension: "time", label: "Time between blooms", value: 2.52e8, si_unit: "s", note: "About 8 years" },
    ],
  },

  {
    slug: "wisteria-vine",
    name: "Wisteria Vine",
    subtitle: "A flowering vine that can live for centuries and demolish stone structures",
    category_id: "plants",
    description:
      "Wisteria is a genus of climbing vines in the legume family, famous for their spectacular cascading clusters of fragrant purple, blue, pink, or white flowers. The largest known wisteria vine, planted in 1894 in Sierra Madre, California, covers about 4,000 square meters and has been estimated to weigh over 115,000 kg. Wisteria vines are extraordinarily powerful: their twisting stems generate enough force to crush metal pipes, collapse pergolas, and crack stone walls. The vine of the Japanese wisteria (W. floribunda) can produce flower racemes over 1 meter long. Some specimens in Japan are over 1,200 years old.",
    search_terms: "wisteria|wisteria floribunda|wisteria sinensis|flowering vine|climbing vine|purple flowers",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Vine length (max)", value: 20, si_unit: "m" },
      { dimension: "length", label: "Flower raceme length (max)", value: 1.0, si_unit: "m" },
      { dimension: "area", label: "Canopy area (largest specimen)", value: 4000, si_unit: "m^2" },
      { dimension: "mass", label: "Mass (largest specimen)", value: 115000, si_unit: "kg" },
      { dimension: "length", label: "Stem diameter", value: 0.3, si_unit: "m" },
      { dimension: "time", label: "Lifespan (max known)", value: 3.78e10, si_unit: "s", note: "Over 1,200 years" },
    ],
  },

  {
    slug: "kapok-tree",
    name: "Kapok Tree",
    subtitle: "A rainforest giant with explosive seed pods that produce nature's lightest fiber",
    category_id: "plants",
    description:
      "The kapok tree (Ceiba pentandra) is one of the tallest trees in the tropical rainforest, reaching heights of 70 meters with a trunk diameter of up to 3 meters. Its massive buttress roots can extend 10 meters from the trunk and stand 3 meters tall. The tree produces large seed pods that burst open to release hundreds of seeds embedded in a silky, cotton-like fiber called kapok. This fiber is five times lighter than cotton, naturally water-resistant and buoyant, and was historically used to fill life jackets, mattresses, and pillows. A single tree can produce 4,000 pods per year, yielding about 15 kg of fiber. The kapok is sacred in Maya mythology as the World Tree connecting earth and sky.",
    search_terms: "kapok|ceiba pentandra|kapok tree|silk cotton tree|rainforest tree|buttress roots|world tree",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (max)", value: 70, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 3, si_unit: "m" },
      { dimension: "length", label: "Buttress root height", value: 3, si_unit: "m" },
      { dimension: "length", label: "Seed pod length", value: 0.15, si_unit: "m" },
      { dimension: "mass", label: "Fiber yield per year", value: 15, si_unit: "kg" },
      { dimension: "time", label: "Lifespan", value: 6.31e9, si_unit: "s", note: "About 200 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXTINCT ANIMALS (8)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "saber-toothed-cat",
    name: "Saber-Toothed Cat",
    subtitle: "A stocky predator with 18 cm canine teeth, extinct for 10,000 years",
    category_id: "dinosaurs",
    description:
      "Smilodon fatalis, the most famous of the saber-toothed cats, was a heavily built predator that roamed the Americas during the Pleistocene epoch. Despite being commonly called a 'saber-toothed tiger,' it was not closely related to modern tigers. Its upper canine teeth could reach 18 cm in length and were used to deliver precise, deep bites to the throat or belly of large prey such as bison and ground sloths. Smilodon had a more muscular build than any modern cat, with particularly powerful forelimbs used to wrestle prey to the ground. Over 2,000 Smilodon specimens have been recovered from the La Brea Tar Pits in Los Angeles.",
    search_terms: "saber tooth|smilodon|saber-toothed cat|saber-toothed tiger|ice age predator|la brea",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.75, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 1.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 280, si_unit: "kg" },
      { dimension: "length", label: "Canine tooth length", value: 0.18, si_unit: "m" },
      { dimension: "length", label: "Jaw gape", value: 0.12, si_unit: "m", note: "120-degree gape" },
      { dimension: "time", label: "Extinction date", value: 3.15e11, si_unit: "s", note: "About 10,000 years ago" },
    ],
  },

  {
    slug: "giant-ground-sloth",
    name: "Giant Ground Sloth",
    subtitle: "A bus-sized herbivore that stood on two legs to reach treetops",
    category_id: "dinosaurs",
    description:
      "Megatherium americanum, the giant ground sloth, was one of the largest land mammals ever to walk the Earth. Standing up to 6 meters tall on its hind legs and weighing up to 4 tonnes, it was roughly the size of a modern elephant. Unlike its tiny modern tree-dwelling relatives, Megatherium was a ground-dweller that used its massive curved claws (up to 30 cm long) to pull down tree branches and strip them of leaves. Its thick skin contained embedded bone nodules called osteoderms, providing natural armor. Giant ground sloths lived in South America and entered North America during the Great American Interchange. They went extinct about 10,000 years ago, possibly due to human hunting.",
    search_terms: "giant ground sloth|megatherium|ground sloth|ice age|pleistocene|megafauna",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 6, si_unit: "m" },
      { dimension: "length", label: "Height (standing upright)", value: 6, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 4000, si_unit: "kg" },
      { dimension: "length", label: "Claw length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Femur length", value: 0.56, si_unit: "m" },
      { dimension: "time", label: "Extinction date", value: 3.15e11, si_unit: "s", note: "About 10,000 years ago" },
    ],
  },

  {
    slug: "irish-elk",
    name: "Irish Elk",
    subtitle: "A deer with antlers spanning 3.6 meters, the largest headgear of any known animal",
    category_id: "dinosaurs",
    description:
      "The Irish elk (Megaloceros giganteus) was one of the largest deer that ever lived, despite its name being neither exclusively Irish nor a true elk. Its most striking feature was its enormous antlers, which could span up to 3.65 meters from tip to tip and weigh over 40 kg. These antlers were shed and regrown each year, requiring massive calcium and phosphorus intake that placed enormous metabolic strain on males. Standing about 2.1 meters at the shoulder, the Irish elk lived across Europe and northern Asia from about 400,000 years ago until about 7,700 years ago. It is one of the best-studied extinct megafauna due to excellent preservation in Irish bogs.",
    search_terms: "irish elk|megaloceros giganteus|giant deer|great elk|antlers|pleistocene deer",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Antler span", value: 3.65, si_unit: "m" },
      { dimension: "mass", label: "Antler mass (pair)", value: 40, si_unit: "kg" },
      { dimension: "length", label: "Height at shoulder", value: 2.1, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 700, si_unit: "kg" },
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m" },
      { dimension: "time", label: "Extinction date", value: 2.43e11, si_unit: "s", note: "About 7,700 years ago" },
    ],
  },

  {
    slug: "dunkleosteus",
    name: "Dunkleosteus",
    subtitle: "An armored fish with self-sharpening jaw plates that could bite through anything",
    category_id: "dinosaurs",
    description:
      "Dunkleosteus terrelli was a massive armored fish (placoderm) that lived during the Late Devonian period, roughly 358 to 382 million years ago. At up to 6 meters long and weighing over a tonne, it was one of the largest and most fearsome predators of its time. Instead of teeth, Dunkleosteus had two pairs of sharp, bony plates that formed a self-sharpening beak capable of generating a bite force estimated at 6,000 newtons, one of the most powerful bites of any fish. It could open and close its jaws in just 1/50th of a second, creating a powerful suction to draw prey into its mouth. Its head and thorax were covered in thick, bony armor plates.",
    search_terms: "dunkleosteus|placoderm|armored fish|devonian|prehistoric fish|jaw plates",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 6, si_unit: "m" },
      { dimension: "mass", label: "Estimated body mass", value: 1000, si_unit: "kg" },
      { dimension: "length", label: "Head shield length", value: 0.65, si_unit: "m" },
      { dimension: "force", label: "Estimated bite force", value: 6000, si_unit: "N" },
      { dimension: "length", label: "Jaw plate length", value: 0.25, si_unit: "m" },
      { dimension: "time", label: "Period", value: 1.17e16, si_unit: "s", note: "About 370 million years ago" },
    ],
  },

  {
    slug: "great-auk",
    name: "Great Auk",
    subtitle: "A flightless seabird of the North Atlantic, hunted to extinction by 1844",
    category_id: "dinosaurs",
    description:
      "The great auk (Pinguinus impennis) was a large, flightless seabird of the North Atlantic, standing about 75 cm tall and weighing around 5 kg. It was the original 'penguin,' and when European explorers later encountered similar-looking birds in the Southern Hemisphere, they borrowed the name. Great auks were superb swimmers, using their small wings as flippers to chase fish underwater. They bred in dense colonies on rocky North Atlantic islands. European hunters slaughtered them for their feathers, meat, fat, and oil, and also used them as fishing bait. The last known pair was killed on Eldey Island, Iceland, on June 3, 1844, when collectors strangled the adults and crushed their single egg.",
    search_terms: "great auk|pinguinus impennis|flightless bird|extinct seabird|original penguin|north atlantic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 0.75, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 5, si_unit: "kg" },
      { dimension: "length", label: "Wing length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Bill length", value: 0.09, si_unit: "m" },
      { dimension: "length", label: "Egg length", value: 0.124, si_unit: "m" },
      { dimension: "time", label: "Extinction date", value: 5.74e9, si_unit: "s", note: "1844, about 182 years ago" },
    ],
  },

  {
    slug: "quagga",
    name: "Quagga",
    subtitle: "A zebra with stripes only on its front half, extinct since 1883",
    category_id: "dinosaurs",
    description:
      "The quagga (Equus quagga quagga) was a subspecies of the plains zebra distinguished by its unique coloring: bold zebra stripes on the head and neck that gradually faded to a plain brown rump with no stripes. Once abundant in South Africa's Cape Province and the southern Free State, quaggas were hunted extensively by Dutch settlers for their hides and to free grazing land for livestock. The last wild quagga was shot in the 1870s, and the last captive individual, a mare, died at the Artis Magistra zoo in Amsterdam on August 12, 1883. The quagga was one of the first extinct animals to have its DNA analyzed, in 1984, confirming it was a subspecies of the plains zebra rather than a separate species.",
    search_terms: "quagga|equus quagga quagga|half-striped zebra|extinct zebra|south africa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.6, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 1.35, si_unit: "m" },
      { dimension: "mass", label: "Estimated body mass", value: 300, si_unit: "kg" },
      { dimension: "length", label: "Tail length", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Stripe zone length (front)", value: 1.0, si_unit: "m" },
      { dimension: "time", label: "Extinction date", value: 4.51e9, si_unit: "s", note: "1883, about 143 years ago" },
    ],
  },

  {
    slug: "passenger-pigeon",
    name: "Passenger Pigeon",
    subtitle: "Once the most abundant bird on Earth, 5 billion strong, extinct by 1914",
    category_id: "dinosaurs",
    description:
      "The passenger pigeon (Ectopistes migratorius) was once the most abundant bird in North America and possibly the world, with an estimated population of 3 to 5 billion. Migrating flocks were so vast they darkened the sky for hours or even days as they passed overhead, with single flocks estimated to contain over a billion birds stretching 500 km long and 1.5 km wide. Despite these staggering numbers, relentless commercial hunting and habitat destruction drove the species from billions to zero in less than a century. The last passenger pigeon, a female named Martha, died at the Cincinnati Zoo on September 1, 1914. Her death became a catalyst for the modern conservation movement.",
    search_terms: "passenger pigeon|ectopistes migratorius|extinct bird|martha|billion birds|migration",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.4, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.65, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.34, si_unit: "kg" },
      { dimension: "speed", label: "Flight speed", value: 28, si_unit: "m/s", note: "About 100 km/h" },
      { dimension: "length", label: "Flock length (largest recorded)", value: 500000, si_unit: "m" },
      { dimension: "time", label: "Extinction date", value: 3.53e9, si_unit: "s", note: "1914, about 112 years ago" },
    ],
  },

  {
    slug: "tasmanian-tiger",
    name: "Tasmanian Tiger",
    subtitle: "A marsupial predator with a jaw that opened to an impossible 80 degrees",
    category_id: "dinosaurs",
    description:
      "The thylacine (Thylacinus cynocephalus), commonly known as the Tasmanian tiger, was the largest carnivorous marsupial of modern times. Native to Australia, Tasmania, and New Guinea, it was a shy, nocturnal hunter superficially resembling a dog with tiger-like stripes across its back and rump. Its most remarkable feature was its jaw gape, which could open to an astonishing 80 degrees, wider than any other known mammal. Both males and females had pouches, though the male's was just a skin fold protecting the testes. Thylacines went extinct on the Australian mainland about 2,000 years ago, possibly due to competition with dingoes. The last confirmed individual, known as Benjamin, died at the Hobart Zoo in Tasmania on September 7, 1936.",
    search_terms: "tasmanian tiger|thylacine|thylacinus cynocephalus|marsupial wolf|tasmanian wolf|benjamin",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.3, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.65, si_unit: "m" },
      { dimension: "length", label: "Height at shoulder", value: 0.58, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 30, si_unit: "kg" },
      { dimension: "angle", label: "Maximum jaw gape", value: 1.396, si_unit: "rad", note: "About 80 degrees" },
      { dimension: "time", label: "Extinction date", value: 2.84e9, si_unit: "s", note: "1936, about 90 years ago" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HUMAN FEATS (8)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "fastest-100m-swim",
    name: "Fastest 100m Swim",
    subtitle: "46.86 seconds of explosive speed through water by Pan Zhanle",
    category_id: "human-feats",
    description:
      "The world record for the 100-meter freestyle swim is 46.40 seconds, set by Pan Zhanle of China at the 2024 Paris Olympics. This translates to an average swimming speed of about 2.16 m/s (7.8 km/h). While this may seem slow compared to running, water is roughly 800 times denser than air, creating enormous drag. Elite freestyle swimmers generate about 60 newtons of propulsive force per stroke and take approximately 46 to 50 strokes to complete the distance. The dive start and underwater dolphin kicks off each wall are the fastest phases, with speeds briefly exceeding 3 m/s. Swimming records have fallen steadily with improvements in pool design, lane rope technology, and the now-banned full-body polyurethane suits.",
    search_terms: "100m swim|freestyle swimming|world record|pan zhanle|olympic swimming|fastest swim",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Race distance", value: 100, si_unit: "m" },
      { dimension: "time", label: "World record time", value: 46.4, si_unit: "s" },
      { dimension: "speed", label: "Average speed", value: 2.16, si_unit: "m/s" },
      { dimension: "speed", label: "Peak speed (dive/turn)", value: 3.0, si_unit: "m/s" },
      { dimension: "force", label: "Propulsive force per stroke", value: 60, si_unit: "N" },
    ],
  },

  {
    slug: "longest-free-dive",
    name: "Longest Free Dive",
    subtitle: "A single breath to 332 meters below the surface, deeper than the Eiffel Tower is tall",
    category_id: "human-feats",
    description:
      "The world record for the deepest free dive (no-limits apnea, with a weighted sled descent and an air-filled lift bag ascent) is 332 meters, set by Herbert Nitsch in 2012. At that depth, the water pressure is about 34 atmospheres, compressing the lungs to roughly the size of oranges. Nitsch suffered severe decompression sickness during the ascent and required years of rehabilitation. In the constant weight discipline, where divers use only their own power, the record is 130 meters (Alexey Molchanov, 2023). The mammalian dive reflex, which slows the heart rate and shifts blood to vital organs, allows trained free divers to hold their breath for over 4 minutes during a descent.",
    search_terms: "free dive|freediving|apnea|herbert nitsch|deepest dive|no-limits|breath hold diving",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Depth (no-limits record)", value: 332, si_unit: "m" },
      { dimension: "length", label: "Depth (constant weight record)", value: 130, si_unit: "m" },
      { dimension: "pressure", label: "Pressure at 332 m", value: 3.4e6, si_unit: "Pa", note: "About 34 atmospheres" },
      { dimension: "time", label: "Dive duration (typical deep)", value: 240, si_unit: "s", note: "About 4 minutes" },
      { dimension: "frequency", label: "Heart rate at depth", value: 0.33, si_unit: "Hz", note: "About 20 bpm" },
    ],
  },

  {
    slug: "highest-tightrope-walk",
    name: "Highest Tightrope Walk",
    subtitle: "A crossing at 634 meters above ground, higher than most skyscrapers",
    category_id: "human-feats",
    description:
      "The record for the highest tightrope walk is held by Freddy Nock, who walked a cable car wire at 3,303 meters altitude on the Zugspitze in the Alps in 2011, but the most vertigo-inducing record for height above ground was set by multiple performers in recent years at extreme heights. In 2022, a team of slackliners walked a highline at 634 meters above the ground in Saudi Arabia. The wire or webbing is typically 2.5 cm wide, and performers use a balance pole weighing up to 15 kg. Wind is the greatest hazard, with gusts creating swaying that increases with height. The combination of altitude, exposure, and the requirement for absolute focus makes high-wire walking one of the most demanding human feats.",
    search_terms: "tightrope|highline|high wire|slackline|highest walk|balance|freddy nock",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height above ground (record)", value: 634, si_unit: "m" },
      { dimension: "length", label: "Wire/webbing width", value: 0.025, si_unit: "m" },
      { dimension: "mass", label: "Balance pole mass", value: 15, si_unit: "kg" },
      { dimension: "length", label: "Balance pole length", value: 8, si_unit: "m" },
      { dimension: "speed", label: "Typical walking speed", value: 0.3, si_unit: "m/s" },
    ],
  },

  {
    slug: "most-basketball-free-throws-consecutive",
    name: "Most Consecutive Basketball Free Throws",
    subtitle: "5,221 free throws in a row without a single miss",
    category_id: "human-feats",
    description:
      "The record for the most consecutive basketball free throws is 5,221, set by Ted St. Martin in April 1996. St. Martin, a former Guinness World Record adjudicator, spent over 7 hours shooting without missing a single free throw from the standard distance of 4.57 meters (15 feet). The free throw is often called the 'simplest shot in basketball,' yet even NBA professionals average only about 77% accuracy. The biomechanics of an optimal free throw involve a release angle of about 52 degrees, 2 to 3 revolutions per second of backspin, and a launch speed of about 4.5 m/s. Mental focus and muscle memory are critical, as the physical demands of each shot are minimal.",
    search_terms: "free throw|basketball|consecutive|ted st martin|free throws in a row|shooting record",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Free throw distance", value: 4.57, si_unit: "m" },
      { dimension: "length", label: "Hoop height", value: 3.05, si_unit: "m" },
      { dimension: "length", label: "Consecutive makes (record)", value: 5221, si_unit: "dimensionless" },
      { dimension: "time", label: "Duration of attempt", value: 25200, si_unit: "s", note: "About 7 hours" },
      { dimension: "speed", label: "Optimal launch speed", value: 4.5, si_unit: "m/s" },
      { dimension: "angle", label: "Optimal release angle", value: 0.907, si_unit: "rad", note: "About 52 degrees" },
    ],
  },

  {
    slug: "fastest-marathon-on-stilts",
    name: "Fastest Marathon on Stilts",
    subtitle: "42.195 km balanced on poles, completed in under 5 hours",
    category_id: "human-feats",
    description:
      "The world record for the fastest marathon on stilts is 4 hours, 56 minutes, and 24 seconds (17,784 seconds), set by Michelle Frost at the Flora London Marathon in April 2008. Running on stilts transforms the marathon from a test of endurance into a test of balance, coordination, and ankle strength. The stilts raise the runner's center of gravity significantly, making each step a balancing act. Falls are common during training, and the impact forces on the legs and joints are amplified by the rigid stilts. The stride pattern is fundamentally different from normal running, requiring a wide, deliberate gait that is far less energy-efficient.",
    search_terms: "marathon stilts|stilt running|world record|michelle frost|london marathon|stilts",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Race distance", value: 42195, si_unit: "m" },
      { dimension: "time", label: "Record time", value: 17784, si_unit: "s", note: "4h 56m 24s" },
      { dimension: "speed", label: "Average speed", value: 2.37, si_unit: "m/s", note: "About 8.5 km/h" },
      { dimension: "length", label: "Stilt height (typical)", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Stride length (estimated)", value: 1.2, si_unit: "m" },
    ],
  },

  {
    slug: "longest-plank-hold",
    name: "Longest Plank Hold",
    subtitle: "Over 9.5 hours of motionless core strength that pushed the body to its limits",
    category_id: "human-feats",
    description:
      "The world record for the longest abdominal plank hold is 9 hours, 30 minutes, and 1 second (34,201 seconds), set by Daniel Scali of Australia on August 6, 2023. Scali, who suffers from complex regional pain syndrome (CRPS) that causes chronic arm pain, used the pain management techniques he developed through his condition to maintain the position. The plank is a simple isometric exercise: the body is held in a straight line, supported on forearms and toes, engaging the core, shoulders, and legs. During extreme holds, the body experiences muscle fatigue, buildup of metabolic waste products, and difficulty regulating temperature. Heart rate remains elevated at roughly 100 to 120 bpm throughout.",
    search_terms: "plank hold|longest plank|daniel scali|isometric exercise|core strength|world record",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Record duration", value: 34201, si_unit: "s", note: "9h 30m 1s" },
      { dimension: "frequency", label: "Sustained heart rate", value: 1.83, si_unit: "Hz", note: "About 110 bpm" },
      { dimension: "length", label: "Forearm support width", value: 0.35, si_unit: "m" },
      { dimension: "force", label: "Core muscle force (estimated)", value: 300, si_unit: "N" },
      { dimension: "energy", label: "Estimated calories burned", value: 1.42e7, si_unit: "J", note: "About 3,400 kcal" },
    ],
  },

  {
    slug: "most-dominoes-toppled",
    name: "Most Dominoes Toppled",
    subtitle: "Over 5 million dominoes falling in a carefully choreographed chain reaction",
    category_id: "human-feats",
    description:
      "The world record for the most dominoes toppled in a chain reaction is 5,000,011, set during Domino Day 2009 by a team of 89 builders in Leeuwarden, Netherlands. Setting up the dominoes took the team several weeks, working around the clock with extreme care since a single misplaced tile could trigger a premature chain reaction. Safety dividers are placed at intervals to protect completed sections. The falling dominoes traveled through elaborate themed sections including themed displays and trick shots. Each standard domino is about 4.8 cm tall, 2.4 cm wide, and 0.7 cm thick. The wave of falling dominoes travels at roughly 1.5 m/s, with each domino taking about 0.03 seconds to fall and strike the next one.",
    search_terms: "dominoes|domino day|chain reaction|world record|domino toppling|falling dominoes",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Dominoes toppled (record)", value: 5000011, si_unit: "dimensionless" },
      { dimension: "length", label: "Single domino height", value: 0.048, si_unit: "m" },
      { dimension: "length", label: "Single domino width", value: 0.024, si_unit: "m" },
      { dimension: "speed", label: "Wave propagation speed", value: 1.5, si_unit: "m/s" },
      { dimension: "time", label: "Individual fall time", value: 0.03, si_unit: "s" },
    ],
  },

  {
    slug: "tallest-sandcastle",
    name: "Tallest Sandcastle",
    subtitle: "A 19.55-meter tower of sand, taller than a six-story building",
    category_id: "human-feats",
    description:
      "The world record for the tallest sandcastle is 19.55 meters (64 feet 1.7 inches), built by Skulptura Projects GmbH in Blokhus, Denmark, in July 2021. The structure used about 4,860 tonnes of sand and took a team of 30 sculptors approximately three weeks to complete. Professional sandcastle builders use a carefully controlled ratio of sand to water (roughly 8:1 by volume) to achieve the maximum structural integrity. The sand is first packed using forms and heavy tamping, then carved from the top down. A coating of diluted wood glue mixed with water is applied to the surface to protect against wind erosion. The structural limit of a sandcastle depends on the grain size, moisture content, and the angle of repose of the sand.",
    search_terms: "sandcastle|tallest sandcastle|sand sculpture|world record|blokhus|denmark|sand art",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (record)", value: 19.55, si_unit: "m" },
      { dimension: "mass", label: "Sand used", value: 4860000, si_unit: "kg" },
      { dimension: "length", label: "Base diameter (estimated)", value: 20, si_unit: "m" },
      { dimension: "time", label: "Build time", value: 1.81e6, si_unit: "s", note: "About 3 weeks" },
      { dimension: "angle", label: "Angle of repose (wet sand)", value: 0.785, si_unit: "rad", note: "About 45 degrees" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CONCEPTUAL (9)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "annual-co2-emissions",
    name: "Annual Global CO2 Emissions",
    subtitle: "Humanity releases about 37 billion tonnes of CO2 into the atmosphere each year",
    category_id: "conceptual",
    description:
      "Global annual carbon dioxide emissions from fossil fuel combustion and industrial processes reached approximately 37.4 billion tonnes (37.4 Gt) in 2023. To visualize this, if you compressed all that CO2 into solid dry ice at -78.5 C, it would form a cube about 27 km on each side. China is the largest emitter (about 31%), followed by the United States (13%) and India (7%). Atmospheric CO2 concentration has risen from about 280 parts per million before the Industrial Revolution to over 420 ppm today. Each additional tonne of CO2 emitted contributes to warming of about 0.0000000000005 C. The cumulative emissions since 1751 total about 1.7 trillion tonnes.",
    search_terms: "co2 emissions|carbon dioxide|greenhouse gas|climate change|fossil fuels|global warming",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Annual emissions (2023)", value: 3.74e13, si_unit: "kg" },
      { dimension: "mass", label: "Cumulative emissions since 1751", value: 1.7e15, si_unit: "kg" },
      { dimension: "mass", label: "Per capita (global average)", value: 4600, si_unit: "kg", note: "About 4.6 tonnes per person" },
      { dimension: "mass", label: "Per capita (US)", value: 14000, si_unit: "kg", note: "About 14 tonnes per person" },
      { dimension: "length", label: "Atmospheric concentration", value: 420, si_unit: "dimensionless", note: "420 parts per million" },
    ],
  },

  {
    slug: "world-electricity-generation",
    name: "World Electricity Generation",
    subtitle: "The planet generates about 29,000 terawatt-hours of electricity per year",
    category_id: "conceptual",
    description:
      "Global electricity generation reached approximately 29,165 terawatt-hours (TWh) in 2023, equivalent to an average continuous power output of about 3.33 terawatts. This is roughly 17% of total primary energy consumed worldwide, as much energy goes to heat and transportation. China alone generates about 30% of the world's electricity. Renewable sources (hydro, wind, solar, and bioenergy) provided about 30% of global electricity in 2023, with solar growing fastest. To generate all this power, humanity operates roughly 70,000 power plants of various types. Global demand grows by about 2 to 3% per year, driven primarily by developing economies, air conditioning, and the electrification of transport.",
    search_terms: "electricity|power generation|terawatt|energy|global power|renewable energy|grid",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Annual generation (2023)", value: 1.05e20, si_unit: "J", note: "About 29,165 TWh" },
      { dimension: "power", label: "Average continuous power", value: 3.33e12, si_unit: "W", note: "About 3.33 TW" },
      { dimension: "power", label: "Per capita (global average)", value: 418, si_unit: "W" },
      { dimension: "power", label: "Per capita (US)", value: 1500, si_unit: "W" },
      { dimension: "energy", label: "Daily generation", value: 2.88e17, si_unit: "J", note: "About 80 TWh per day" },
    ],
  },

  {
    slug: "total-road-length-worldwide",
    name: "Total Road Length Worldwide",
    subtitle: "Over 64 million km of roads, enough to stretch to Mars and back 80 times",
    category_id: "conceptual",
    description:
      "The total length of roads on Earth is estimated at approximately 64.3 million kilometers, enough to wrap around the equator over 1,600 times or to stretch from Earth to Mars and back about 80 times at closest approach. The United States has the longest road network at about 6.7 million km, followed by India with 6.4 million km and China with 5.3 million km. Only about 60% of the world's roads are paved. The global road network has roughly doubled since 1970, with most of the growth in developing countries. Roads cover an estimated 0.4% of the Earth's total land surface, or about 600,000 square kilometers, an area slightly larger than France.",
    search_terms: "roads|road network|highway|total road length|infrastructure|paved roads|global roads",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total road length", value: 6.43e10, si_unit: "m" },
      { dimension: "length", label: "US road network", value: 6.7e9, si_unit: "m" },
      { dimension: "area", label: "Total road surface area", value: 6e11, si_unit: "m^2", note: "About 600,000 km^2" },
      { dimension: "length", label: "Times around Earth's equator", value: 1600, si_unit: "dimensionless" },
      { dimension: "length", label: "Average road width", value: 6, si_unit: "m" },
    ],
  },

  {
    slug: "tallest-wave-ever-recorded",
    name: "Tallest Wave Ever Recorded",
    subtitle: "A 524-meter mega-tsunami that stripped trees off mountain slopes in 1958",
    category_id: "conceptual",
    description:
      "The tallest wave ever recorded occurred on July 9, 1958, in Lituya Bay, Alaska, when a massive rockslide triggered by a magnitude 7.8 earthquake dropped approximately 30 million cubic meters of rock into the narrow inlet. The impact generated a mega-tsunami that surged up the opposite slope to a height of 524 meters (1,720 feet), stripping all trees and vegetation up to that elevation. This is taller than the Empire State Building (443 m to roof) and nearly as tall as the world's tallest building, the Burj Khalifa (828 m). Three fishing boats were in the bay at the time; two survived by riding over the wave crest, while one boat and its crew of two were lost.",
    search_terms: "tallest wave|mega tsunami|lituya bay|alaska|biggest wave|1958|rockslide tsunami",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wave run-up height", value: 524, si_unit: "m" },
      { dimension: "volume", label: "Rockslide volume", value: 3e7, si_unit: "m^3" },
      { dimension: "speed", label: "Wave speed (estimated)", value: 45, si_unit: "m/s", note: "About 160 km/h" },
      { dimension: "length", label: "Bay length", value: 11000, si_unit: "m" },
      { dimension: "length", label: "Earthquake magnitude", value: 7.8, si_unit: "dimensionless" },
      { dimension: "time", label: "Date", value: 2.14e9, si_unit: "s", note: "July 9, 1958, about 68 years ago" },
    ],
  },

  {
    slug: "deepest-mine",
    name: "Deepest Mine",
    subtitle: "Mponeng Gold Mine reaches 4 km below the surface, where rock temperature hits 66 C",
    category_id: "conceptual",
    description:
      "The Mponeng Gold Mine near Johannesburg, South Africa, is the deepest mine in the world, reaching a depth of approximately 4,000 meters below the surface. At that depth, the natural rock temperature reaches 66 C (151 F) due to the geothermal gradient, requiring massive refrigeration systems that pump ice slurry underground to cool the working areas to a tolerable 28 C. The pressure at the deepest levels is about 100 times atmospheric pressure. Miners descend in a series of elevators over a journey of about an hour. The mine produces roughly 5,400 kg of gold per year from ore that yields just 8 grams of gold per tonne of rock. About 5,000 miners work at Mponeng, making it a small underground city.",
    search_terms: "deepest mine|mponeng|gold mine|south africa|deep mining|underground|geothermal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Depth below surface", value: 4000, si_unit: "m" },
      { dimension: "temperature", label: "Rock temperature at depth", value: 339, si_unit: "K", note: "About 66 C" },
      { dimension: "temperature", label: "Cooled working temperature", value: 301, si_unit: "K", note: "About 28 C" },
      { dimension: "pressure", label: "Rock pressure at depth", value: 1e7, si_unit: "Pa", note: "About 100 atm" },
      { dimension: "mass", label: "Gold produced per year", value: 5400, si_unit: "kg" },
      { dimension: "time", label: "Descent time", value: 3600, si_unit: "s", note: "About 1 hour" },
    ],
  },

  {
    slug: "longest-cave-system",
    name: "Longest Cave System",
    subtitle: "Mammoth Cave stretches over 685 km underground, and new passages are still being found",
    category_id: "conceptual",
    description:
      "Mammoth Cave in Kentucky, USA, is the longest known cave system in the world, with over 685 km (426 miles) of surveyed passages as of 2024. This is more than twice the length of the second-longest cave (Jewel Cave in South Dakota at about 346 km). Despite centuries of exploration, new passages continue to be discovered, and some speleologists estimate the total length could exceed 1,600 km. The cave was carved over millions of years by slightly acidic groundwater dissolving limestone. It contains five distinct levels of passages at different depths, recording millions of years of geological history. The cave supports a unique ecosystem including eyeless cave fish, cave crickets, and rare cave shrimp.",
    search_terms: "mammoth cave|longest cave|cave system|kentucky|speleology|underground|karst",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Surveyed length", value: 685000, si_unit: "m" },
      { dimension: "length", label: "Estimated total length", value: 1600000, si_unit: "m" },
      { dimension: "length", label: "Maximum depth", value: 115, si_unit: "m" },
      { dimension: "area", label: "Park surface area", value: 2.14e8, si_unit: "m^2", note: "About 214 km^2" },
      { dimension: "time", label: "Formation age", value: 3.15e14, si_unit: "s", note: "About 10 million years" },
    ],
  },

  {
    slug: "farthest-human-made-object",
    name: "Farthest Human-Made Object",
    subtitle: "Voyager 1 is over 24 billion km from Earth, still sending signals home",
    category_id: "conceptual",
    description:
      "Voyager 1, launched by NASA on September 5, 1977, is the most distant human-made object, currently over 24 billion km from Earth and still communicating with us. At that distance, radio signals traveling at the speed of light take over 22 hours to reach Earth. The spacecraft is traveling at about 17 km/s (61,000 km/h) relative to the Sun and entered interstellar space in August 2012, becoming the first human-made object to leave the heliosphere. Its nuclear power source (a radioisotope thermoelectric generator) is slowly decaying and is expected to provide enough power for limited scientific instruments until about 2025. After that, Voyager 1 will continue its silent journey, reaching the vicinity of the star Gliese 445 in about 40,000 years.",
    search_terms: "voyager 1|farthest object|interstellar|nasa|space probe|most distant|heliosphere",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Distance from Earth", value: 2.4e13, si_unit: "m", note: "About 24 billion km" },
      { dimension: "speed", label: "Travel speed", value: 17000, si_unit: "m/s", note: "About 61,000 km/h" },
      { dimension: "time", label: "Signal travel time (one way)", value: 80000, si_unit: "s", note: "Over 22 hours" },
      { dimension: "time", label: "Mission duration", value: 1.54e9, si_unit: "s", note: "Since September 1977" },
      { dimension: "power", label: "Current power output", value: 240, si_unit: "W" },
    ],
  },

  {
    slug: "age-of-the-universe",
    name: "Age of the Universe",
    subtitle: "13.8 billion years since the Big Bang, measured to within 1% accuracy",
    category_id: "conceptual",
    description:
      "The age of the universe is estimated at 13.787 billion years (with an uncertainty of about 20 million years), based on measurements of the cosmic microwave background radiation by the Planck satellite, combined with observations of the expansion rate of the universe. This age is determined by working backward from the current expansion rate (the Hubble constant, about 67.4 km/s per megaparsec) and accounting for the changing rate of expansion over time. In the first fraction of a second after the Big Bang, the observable universe expanded from a point smaller than an atom to larger than a grapefruit. Today, the observable universe has a diameter of about 93 billion light-years because the expansion of space has carried the most distant objects far beyond where their light was originally emitted.",
    search_terms: "age of universe|big bang|cosmology|cosmic microwave background|13.8 billion|hubble constant",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Age of the universe", value: 4.35e17, si_unit: "s", note: "About 13.8 billion years" },
      { dimension: "length", label: "Observable universe diameter", value: 8.8e26, si_unit: "m", note: "About 93 billion light-years" },
      { dimension: "temperature", label: "Current CMB temperature", value: 2.725, si_unit: "K" },
      { dimension: "speed", label: "Hubble constant", value: 2.18e-18, si_unit: "s^-1", note: "67.4 km/s/Mpc" },
      { dimension: "time", label: "Age uncertainty", value: 6.31e14, si_unit: "s", note: "About 20 million years" },
    ],
  },

  {
    slug: "total-world-data-storage",
    name: "Total World Data Storage",
    subtitle: "Humanity stores about 120 zettabytes of data, doubling every two years",
    category_id: "conceptual",
    description:
      "The total amount of data created, captured, and stored globally was estimated at approximately 120 zettabytes (120 x 10^21 bytes) in 2023, and is projected to reach 181 zettabytes by 2025. To put this in perspective, if each byte were a grain of sand, 120 zettabytes would fill approximately 960 billion Olympic swimming pools. However, only about 2% of this data is actually retained and stored; the rest is created, briefly used, and discarded. The world's data is doubling roughly every two years, driven by streaming video, social media, IoT devices, and scientific instruments. All the data that existed in the year 2010 is now generated in approximately two days.",
    search_terms: "world data|zettabyte|data storage|big data|information|digital data|data growth",
    featured: 0,
    measurements: [
      { dimension: "data", label: "Total data (2023)", value: 1.2e23, si_unit: "B", note: "About 120 zettabytes" },
      { dimension: "data", label: "Data retained/stored", value: 2.4e21, si_unit: "B", note: "About 2% of total" },
      { dimension: "data", label: "Daily data creation", value: 3.29e20, si_unit: "B", note: "About 329 exabytes/day" },
      { dimension: "time", label: "Doubling time", value: 6.31e7, si_unit: "s", note: "About 2 years" },
      { dimension: "data", label: "Projected 2025 total", value: 1.81e23, si_unit: "B", note: "About 181 zettabytes" },
    ],
  },
];
