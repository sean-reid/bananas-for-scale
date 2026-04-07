// ── Animals (Large) seed data ─────────────────────────────────────────────
// Marine Life + Large Land Animals

import type { ThingInput } from "../types";

export const categoriesData = [
  {
    id: "marine-life",
    name: "Marine Life",
    description:
      "Creatures of the deep blue sea, from the tiniest plankton to the mightiest whales.",
    sort_order: 1,
  },
  {
    id: "large-land-animals",
    name: "Large Land Animals",
    description:
      "The heavyweights of the animal kingdom that roam the earth's surface.",
    sort_order: 2,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MARINE LIFE
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "great-white-shark",
    name: "Great White Shark",
    subtitle: "The ocean's most famous apex predator",
    category_id: "marine-life",
    description:
      "The great white shark (Carcharodon carcharias) is basically a torpedo with teeth and an attitude problem. Adults average around 4-6 meters long and can detect a single drop of blood in 100 liters of water. They've been patrolling the oceans for roughly 16 million years, which means they pre-date trees going extinct and coming back.",
    search_terms: "shark|great white|carcharodon|jaws|apex predator|ocean",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 6.0, si_unit: "m", note: "Large adult female; males average ~3.5-4 m" },
      { dimension: "mass", label: "Body mass", value: 2000, si_unit: "kg", note: "Large adult female" },
      { dimension: "force", label: "Bite force", value: 18216, si_unit: "N", note: "Estimated maximum; among the strongest of any living animal" },
      { dimension: "speed", label: "Swim speed (burst)", value: 11.1, si_unit: "m/s", note: "~40 km/h in short bursts during attack" },
      { dimension: "length", label: "Tooth length", value: 0.076, si_unit: "m", note: "Upper teeth; roughly 7.6 cm each" },
      { dimension: "length", label: "Maximum dive depth", value: 1200, si_unit: "m", note: "Recorded via satellite tags" },
      { dimension: "length", label: "Pup length at birth", value: 1.2, si_unit: "m" },
      { dimension: "speed", label: "Cruising speed", value: 3.2, si_unit: "m/s", note: "~11.5 km/h typical cruising speed" },
    ],
  },

  {
    slug: "giant-squid",
    name: "Giant Squid",
    subtitle: "The deep-sea legend that inspired the Kraken",
    category_id: "marine-life",
    description:
      "The giant squid (Architeuthis dux) lives in the deep ocean and was basically cryptozoology's greatest hit until one was finally filmed alive in 2004. It has the largest eyes in the animal kingdom, each the size of a dinner plate, evolved to spot sperm whales in near-total darkness. Most of what we know about them comes from dead specimens washed ashore or pulled from whale stomachs.",
    search_terms: "squid|giant squid|architeuthis|kraken|deep sea|tentacles|cephalopod",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (with tentacles)", value: 13.0, si_unit: "m", note: "Largest reliably measured specimens" },
      { dimension: "length", label: "Mantle length", value: 2.25, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 275, si_unit: "kg" },
      { dimension: "length", label: "Eye diameter", value: 0.27, si_unit: "m", note: "Largest eyes in the animal kingdom" },
      { dimension: "length", label: "Feeding tentacle length", value: 10.0, si_unit: "m", note: "The two long tentacles used for prey capture" },
      { dimension: "length", label: "Arm length", value: 3.0, si_unit: "m", note: "The eight shorter arms" },
      { dimension: "length", label: "Sucker diameter", value: 0.053, si_unit: "m", note: "Suckers are lined with sharp, tooth-like rings" },
    ],
  },

  {
    slug: "manatee",
    name: "Manatee",
    subtitle: "The gentle sea cow that inspired mermaid legends",
    category_id: "marine-life",
    description:
      "Manatees (Trichechus manatus) are the living proof that you don't need to be fast or fierce to survive for 50 million years. These gentle herbivores spend 6-8 hours a day eating and the rest napping and slowly drifting around. Sailors once mistook them for mermaids, which honestly raises some questions about long voyages at sea.",
    search_terms: "manatee|sea cow|trichechus|herbivore|gentle giant|florida",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 500, si_unit: "kg", note: "Average adult; can reach up to 590 kg" },
      { dimension: "speed", label: "Typical swim speed", value: 1.3, si_unit: "m/s", note: "~5 km/h; can burst to ~7 m/s in short dashes" },
      { dimension: "mass", label: "Daily food intake", value: 50, si_unit: "kg", note: "About 10-15% of body mass daily in aquatic plants" },
      { dimension: "length", label: "Flipper length", value: 0.5, si_unit: "m" },
      { dimension: "volume", label: "Lung capacity", value: 0.015, si_unit: "m³", note: "~15 liters; can exchange 90% of air in a single breath" },
    ],
  },

  {
    slug: "walrus",
    name: "Walrus",
    subtitle: "The mustachioed heavyweight of the Arctic",
    category_id: "marine-life",
    description:
      "The walrus (Odobenus rosmarus) is a massive pinniped that uses its iconic tusks to haul itself onto ice floes, establish dominance, and poke breathing holes. Both males and females have tusks, which are actually elongated canine teeth that never stop growing. They can slow their heartbeat to survive frigid Arctic water temperatures.",
    search_terms: "walrus|odobenus|pinniped|arctic|tusks|marine mammal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.3, si_unit: "m", note: "Adult male; females are smaller at ~2.7 m" },
      { dimension: "mass", label: "Body mass", value: 1200, si_unit: "kg", note: "Adult male; females ~800 kg" },
      { dimension: "length", label: "Tusk length", value: 1.0, si_unit: "m", note: "Can reach up to 1 m in males" },
      { dimension: "length", label: "Vibrissae (whisker) length", value: 0.3, si_unit: "m", note: "Highly sensitive; used to detect shellfish on the ocean floor" },
      { dimension: "length", label: "Blubber thickness", value: 0.15, si_unit: "m", note: "~15 cm of insulating blubber" },
      { dimension: "mass", label: "Daily food intake", value: 35, si_unit: "kg", note: "Mostly clams and mussels" },
      { dimension: "length", label: "Dive depth", value: 80, si_unit: "m", note: "Typical foraging depth; can reach 100+ m" },
    ],
  },

  {
    slug: "lions-mane-jellyfish",
    name: "Lion's Mane Jellyfish",
    subtitle: "The world's longest known animal",
    category_id: "marine-life",
    description:
      "The lion's mane jellyfish (Cyanea capillata) holds the record for the longest known animal on Earth, and its trailing tentacles can stretch farther than a blue whale. Found in the cold waters of the North Atlantic and Arctic, it's a reminder that the ocean keeps producing things that feel like they shouldn't be real. Despite its massive size, it's mostly water, about 95%.",
    search_terms: "jellyfish|lion's mane|cyanea|longest animal|tentacles|cnidarian",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Tentacle length", value: 36.5, si_unit: "m", note: "Longest recorded specimen; longer than a blue whale" },
      { dimension: "length", label: "Bell diameter", value: 2.1, si_unit: "m", note: "Largest recorded bell" },
      { dimension: "mass", label: "Body mass", value: 150, si_unit: "kg", note: "Large specimen; body is ~95% water" },
      { dimension: "length", label: "Oral arm length", value: 6.0, si_unit: "m", note: "The frilly arms surrounding the mouth" },
      { dimension: "speed", label: "Pulsing speed", value: 0.5, si_unit: "m/s", note: "Mostly drifts with currents" },
    ],
  },

  {
    slug: "humpback-whale",
    name: "Humpback Whale",
    subtitle: "The singing traveler of the open ocean",
    category_id: "marine-life",
    description:
      "Humpback whales (Megaptera novaeangliae) are famous for their complex songs, which can last over 20 minutes and be heard hundreds of kilometers away. They undertake one of the longest migrations of any mammal, traveling up to 8,000 km each way between feeding and breeding grounds. Their pectoral fins are the longest of any whale species, and they use bubble-net feeding, a cooperatively genius hunting technique.",
    search_terms: "humpback|whale|megaptera|whale song|migration|baleen",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 15.0, si_unit: "m", note: "Average adult; females slightly larger than males" },
      { dimension: "mass", label: "Body mass", value: 30000, si_unit: "kg", note: "~30 metric tons" },
      { dimension: "time", label: "Song duration", value: 1200, si_unit: "s", note: "Songs last 10-20 minutes and are repeated for hours" },
      { dimension: "length", label: "Migration distance (one way)", value: 8000000, si_unit: "m", note: "~8,000 km each way; among the longest of any mammal" },
      { dimension: "length", label: "Pectoral fin length", value: 5.0, si_unit: "m", note: "Longest fins relative to body size of any cetacean" },
      { dimension: "length", label: "Fluke span", value: 5.5, si_unit: "m" },
      { dimension: "speed", label: "Cruising speed", value: 4.0, si_unit: "m/s", note: "~14 km/h during migration" },
      { dimension: "length", label: "Dive depth", value: 200, si_unit: "m", note: "Typical feeding dives" },
    ],
  },

  {
    slug: "orca",
    name: "Orca",
    subtitle: "The ocean's apex predator with a family-first attitude",
    category_id: "marine-life",
    description:
      "Orcas (Orcinus orca) are technically the largest members of the dolphin family, which is the kind of fact that makes you rethink dolphins. They hunt in coordinated pods, speak in pod-specific dialects, and have been documented taking down great white sharks for their livers specifically. Different populations specialize in completely different prey, from salmon to seals to other whales.",
    search_terms: "orca|killer whale|orcinus|dolphin|apex predator|pod",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 8.0, si_unit: "m", note: "Large adult male; females ~6-7 m" },
      { dimension: "mass", label: "Body mass", value: 5400, si_unit: "kg", note: "Adult male; females ~3600 kg" },
      { dimension: "speed", label: "Top speed", value: 13.4, si_unit: "m/s", note: "~48 km/h in short bursts" },
      { dimension: "length", label: "Dive depth", value: 300, si_unit: "m", note: "Routinely dive to 100-300 m" },
      { dimension: "length", label: "Dorsal fin height (male)", value: 1.8, si_unit: "m", note: "Tallest dorsal fin of any cetacean" },
      { dimension: "force", label: "Bite force", value: 8400, si_unit: "N", note: "Estimated; uses teeth primarily for gripping, not chewing" },
      { dimension: "mass", label: "Brain mass", value: 6.0, si_unit: "kg", note: "One of the largest brains of any animal" },
      { dimension: "speed", label: "Cruising speed", value: 5.6, si_unit: "m/s", note: "~20 km/h" },
    ],
  },

  {
    slug: "narwhal",
    name: "Narwhal",
    subtitle: "The unicorn of the sea",
    category_id: "marine-life",
    description:
      "The narwhal (Monodon monoceros) sports a spiraling tusk that can reach nearly 3 meters long - it's actually an elongated left canine tooth that grows straight through its upper lip. Medieval Europeans believed narwhal tusks were unicorn horns and valued them at several times their weight in gold. The tusk is packed with up to 10 million nerve endings, making it an incredibly sensitive sensory organ.",
    search_terms: "narwhal|unicorn whale|monodon|tusk|arctic|cetacean",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 4.5, si_unit: "m", note: "Excluding tusk; adult male" },
      { dimension: "mass", label: "Body mass", value: 1600, si_unit: "kg", note: "Adult male" },
      { dimension: "length", label: "Tusk length", value: 2.7, si_unit: "m", note: "Longest recorded; average ~1.5-2.5 m" },
      { dimension: "length", label: "Dive depth", value: 1500, si_unit: "m", note: "Among the deepest diving marine mammals" },
      { dimension: "speed", label: "Swim speed", value: 1.7, si_unit: "m/s", note: "~6 km/h typical" },
      { dimension: "length", label: "Blubber thickness", value: 0.1, si_unit: "m", note: "~10 cm of insulating blubber" },
      { dimension: "time", label: "Dive duration", value: 1500, si_unit: "s", note: "Can hold breath for ~25 minutes" },
    ],
  },

  {
    slug: "manta-ray",
    name: "Manta Ray",
    subtitle: "The gentle flying carpet of the ocean",
    category_id: "marine-life",
    description:
      "The giant oceanic manta ray (Mobula birostris) has the largest brain-to-body ratio of any cold-blooded fish and is one of only a few animals that can recognize itself in a mirror. Their enormous wing-like pectoral fins allow them to glide through the water with surreal elegance. Despite their size, they feed almost exclusively on tiny plankton, filtered through specialized gill plates.",
    search_terms: "manta ray|mobula|ray|wingspan|plankton feeder|ocean",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan (disc width)", value: 7.0, si_unit: "m", note: "Tip to tip; largest recorded up to 9 m" },
      { dimension: "mass", label: "Body mass", value: 1350, si_unit: "kg", note: "Large adult; can reach up to 2000 kg" },
      { dimension: "length", label: "Body length", value: 4.5, si_unit: "m", note: "Snout to tail" },
      { dimension: "speed", label: "Cruising speed", value: 2.5, si_unit: "m/s", note: "~9 km/h" },
      { dimension: "speed", label: "Burst speed", value: 6.7, si_unit: "m/s", note: "~24 km/h when evading predators" },
      { dimension: "length", label: "Dive depth", value: 1000, si_unit: "m", note: "Deep dives recorded by satellite tags" },
      { dimension: "mass", label: "Brain mass", value: 0.17, si_unit: "kg", note: "Largest brain-to-body ratio of any cold-blooded fish" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LARGE LAND ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "african-elephant",
    name: "African Elephant",
    subtitle: "The largest living land animal",
    category_id: "large-land-animals",
    description:
      "The African bush elephant (Loxodonta africana) is the largest land animal alive today, and it knows it. Their trunks contain over 40,000 muscles and can pick up a single blade of grass or rip a tree out of the ground. They mourn their dead, recognize themselves in mirrors, and can hear each other's infrasound rumbles from kilometers away.",
    search_terms: "elephant|african elephant|loxodonta|trunk|tusks|savanna",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Shoulder height", value: 3.3, si_unit: "m", note: "Adult male" },
      { dimension: "mass", label: "Body mass", value: 6000, si_unit: "kg", note: "Adult male; females ~3000 kg" },
      { dimension: "length", label: "Trunk length", value: 1.8, si_unit: "m", note: "Contains over 40,000 muscles" },
      { dimension: "area", label: "Ear area (single)", value: 1.5, si_unit: "m²", note: "Used for thermoregulation, acts as a radiator" },
      { dimension: "volume", label: "Daily water intake", value: 0.19, si_unit: "m³", note: "~190 liters per day" },
      { dimension: "length", label: "Tusk length", value: 1.8, si_unit: "m", note: "Record tusks over 3 m; average adult male" },
      { dimension: "mass", label: "Daily food intake", value: 150, si_unit: "kg", note: "Herbivore; eats grasses, bark, roots, and fruit" },
      { dimension: "speed", label: "Top speed", value: 11.1, si_unit: "m/s", note: "~40 km/h; technically a fast walk since they never have all feet off the ground" },
    ],
  },

  {
    slug: "grizzly-bear",
    name: "Grizzly Bear",
    subtitle: "North America's most iconic omnivore",
    category_id: "large-land-animals",
    description:
      "The grizzly bear (Ursus arctos horribilis) earned its subspecies name, horribilis, for good reason. They can run faster than a horse over short distances, flip 300 kg boulders to find food, and put on up to 180 kg of fat before hibernation. Despite their fearsome reputation, about 80% of their diet is plants, berries, and nuts.",
    search_terms: "grizzly|bear|ursus arctos|brown bear|omnivore|north america",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 2.4, si_unit: "m", note: "When standing on hind legs" },
      { dimension: "mass", label: "Body mass", value: 360, si_unit: "kg", note: "Adult male average; can reach 680 kg before hibernation" },
      { dimension: "speed", label: "Top speed", value: 13.4, si_unit: "m/s", note: "~48 km/h over short distances" },
      { dimension: "force", label: "Bite force", value: 8100, si_unit: "N", note: "Strong enough to crush a bowling ball" },
      { dimension: "length", label: "Claw length", value: 0.1, si_unit: "m", note: "~10 cm; used for digging more than fighting" },
      { dimension: "length", label: "Shoulder height", value: 1.2, si_unit: "m", note: "On all fours" },
      { dimension: "length", label: "Head-to-tail length", value: 2.2, si_unit: "m" },
    ],
  },

  {
    slug: "hippopotamus",
    name: "Hippopotamus",
    subtitle: "Africa's most dangerous large animal",
    category_id: "large-land-animals",
    description:
      "The hippopotamus (Hippopotamus amphibius) is responsible for more human deaths in Africa than any other large animal, which is an incredible resume for something that looks like an angry couch. They can open their mouths to a terrifying 150-degree gape, run at highway speeds on land, and secrete a natural red-tinted sunscreen. They cannot actually swim; they run along the bottom.",
    search_terms: "hippo|hippopotamus|river horse|africa|dangerous|amphibius",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 4.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1500, si_unit: "kg", note: "Adult male; can exceed 2000 kg" },
      { dimension: "speed", label: "Top speed (land)", value: 11.0, si_unit: "m/s", note: "~40 km/h; surprisingly fast for their size" },
      { dimension: "force", label: "Bite force", value: 12600, si_unit: "N", note: "Among the strongest bite forces of any living mammal" },
      { dimension: "length", label: "Mouth gape", value: 1.2, si_unit: "m", note: "Can open mouth approximately 150 degrees" },
      { dimension: "length", label: "Canine tooth length", value: 0.5, si_unit: "m", note: "Lower canines; grow continuously" },
      { dimension: "length", label: "Shoulder height", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Daily food intake", value: 40, si_unit: "kg", note: "Herbivore; eats ~40 kg of grass nightly" },
    ],
  },

  {
    slug: "moose",
    name: "Moose",
    subtitle: "The tallest member of the deer family",
    category_id: "large-land-animals",
    description:
      "The moose (Alces alces) is the largest living species in the deer family, and they look like something designed by a committee that couldn't agree on proportions. A bull moose's antlers can span nearly 2 meters and are shed and regrown every single year, making them the fastest-growing tissue of any mammal. They're strong swimmers and have been spotted crossing lakes and even diving for aquatic plants.",
    search_terms: "moose|alces|deer|antlers|north america|scandinavia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Shoulder height", value: 2.1, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 700, si_unit: "kg", note: "Adult bull; cows ~400 kg" },
      { dimension: "length", label: "Antler span", value: 1.8, si_unit: "m", note: "Record spans over 2 m; shed and regrown annually" },
      { dimension: "speed", label: "Top speed", value: 15.6, si_unit: "m/s", note: "~56 km/h" },
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m", note: "Nose to tail" },
      { dimension: "length", label: "Leg length", value: 1.2, si_unit: "m", note: "Long legs help with deep snow and swamp wading" },
      { dimension: "mass", label: "Antler mass", value: 20, si_unit: "kg", note: "Per pair; regrown annually at up to 2.5 cm/day" },
    ],
  },

  {
    slug: "western-gorilla",
    name: "Western Gorilla",
    subtitle: "Our closest relative with ten times the strength",
    category_id: "large-land-animals",
    description:
      "The western gorilla (Gorilla gorilla) shares about 98% of its DNA with humans but packs roughly ten times the upper body strength. Silverback males lead family groups with surprising gentleness, settling most disputes with posturing rather than violence. They build fresh sleeping nests every night, which is more than most humans manage with their own beds.",
    search_terms: "gorilla|western gorilla|silverback|primate|ape|africa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 1.7, si_unit: "m", note: "Adult male; typically walk on knuckles" },
      { dimension: "mass", label: "Body mass", value: 160, si_unit: "kg", note: "Adult male; females ~80 kg" },
      { dimension: "length", label: "Arm span", value: 2.6, si_unit: "m", note: "Arms significantly longer than legs" },
      { dimension: "force", label: "Bite force", value: 5600, si_unit: "N", note: "Powerful jaws for fibrous plant material" },
      { dimension: "length", label: "Chest breadth", value: 0.6, si_unit: "m", note: "Broad, barrel-shaped chest" },
      { dimension: "mass", label: "Daily food intake", value: 18, si_unit: "kg", note: "Mostly herbivorous; fruits, leaves, stems" },
      { dimension: "mass", label: "Brain mass", value: 0.5, si_unit: "kg", note: "~500 g; about a third of the human brain" },
    ],
  },

  {
    slug: "white-rhinoceros",
    name: "White Rhinoceros",
    subtitle: "The second-largest land animal on Earth",
    category_id: "large-land-animals",
    description:
      "The white rhinoceros (Ceratotherium simum) is the second-largest land animal and has been around in some form for 50 million years. Their name has nothing to do with color; it's a mistranslation of the Dutch 'wijd' (wide), referring to their broad mouth. Their horn is made entirely of keratin, the same protein as your fingernails, which makes the poaching crisis even more absurd.",
    search_terms: "rhino|rhinoceros|white rhino|ceratotherium|horn|africa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 4.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 2300, si_unit: "kg", note: "Adult male; females ~1700 kg" },
      { dimension: "length", label: "Front horn length", value: 0.6, si_unit: "m", note: "Average; record horn was 1.58 m" },
      { dimension: "speed", label: "Top speed", value: 12.5, si_unit: "m/s", note: "~45 km/h in charge" },
      { dimension: "length", label: "Shoulder height", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Head length", value: 1.2, si_unit: "m", note: "Carries head close to the ground for grazing" },
      { dimension: "mass", label: "Daily food intake", value: 54, si_unit: "kg", note: "Grazer; eats mostly short grasses" },
      { dimension: "length", label: "Skin thickness", value: 0.025, si_unit: "m", note: "~2.5 cm thick hide" },
    ],
  },

  {
    slug: "giraffe",
    name: "Giraffe",
    subtitle: "The tallest living animal on Earth",
    category_id: "large-land-animals",
    description:
      "The giraffe (Giraffa camelopardalis) is the tallest living terrestrial animal and manages to make a 2.4-meter neck look perfectly normal. Their heart weighs about 11 kg and generates double the blood pressure of other large mammals just to push blood up to their brain. Each giraffe's spot pattern is unique, like a fingerprint made by a very tall artist.",
    search_terms: "giraffe|giraffa|tallest animal|long neck|africa|savanna",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Total height", value: 5.5, si_unit: "m", note: "Adult male; females ~4.5 m" },
      { dimension: "mass", label: "Body mass", value: 1200, si_unit: "kg", note: "Adult male; females ~800 kg" },
      { dimension: "length", label: "Neck length", value: 2.4, si_unit: "m", note: "Contains only 7 vertebrae, same as humans" },
      { dimension: "length", label: "Tongue length", value: 0.5, si_unit: "m", note: "Prehensile and darkly pigmented for sun protection" },
      { dimension: "mass", label: "Heart mass", value: 11, si_unit: "kg", note: "Generates ~2x normal mammalian blood pressure" },
      { dimension: "length", label: "Leg length", value: 1.8, si_unit: "m" },
      { dimension: "speed", label: "Top speed", value: 15.3, si_unit: "m/s", note: "~55 km/h in short bursts" },
      { dimension: "length", label: "Newborn height", value: 1.8, si_unit: "m", note: "Already taller than most adult humans at birth" },
    ],
  },

  {
    slug: "polar-bear",
    name: "Polar Bear",
    subtitle: "The largest living land carnivore",
    category_id: "large-land-animals",
    description:
      "The polar bear (Ursus maritimus) is classified as a marine mammal because it depends on sea ice for survival, but it's very much a bear that will ruin your day on land too. Their fur isn't actually white; each strand is hollow and transparent, scattering light to appear white. Under that fur, their skin is black to absorb heat, and they can swim continuously for days in frigid Arctic waters.",
    search_terms: "polar bear|ursus maritimus|arctic|white bear|carnivore|ice",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 3.0, si_unit: "m", note: "On hind legs; largest recorded individuals" },
      { dimension: "mass", label: "Body mass", value: 450, si_unit: "kg", note: "Adult male average; can reach 680 kg" },
      { dimension: "speed", label: "Top speed (land)", value: 11.0, si_unit: "m/s", note: "~40 km/h in short bursts" },
      { dimension: "length", label: "Continuous swim distance", value: 687000, si_unit: "m", note: "687 km; recorded via GPS collar in 2011" },
      { dimension: "speed", label: "Swim speed", value: 2.8, si_unit: "m/s", note: "~10 km/h" },
      { dimension: "length", label: "Shoulder height", value: 1.5, si_unit: "m", note: "On all fours" },
      { dimension: "length", label: "Paw diameter", value: 0.3, si_unit: "m", note: "Act as snowshoes to distribute weight on ice" },
      { dimension: "length", label: "Head-to-tail length", value: 2.5, si_unit: "m" },
    ],
  },

  {
    slug: "kodiak-bear",
    name: "Kodiak Bear",
    subtitle: "The largest subspecies of brown bear",
    category_id: "large-land-animals",
    description:
      "The Kodiak bear (Ursus arctos middendorffi) has been isolated on Alaska's Kodiak Archipelago for about 12,000 years, evolving into the largest subspecies of brown bear on Earth. They rival polar bears for the title of largest land carnivore, though calling them 'carnivore' is generous since they're enthusiastic omnivores who get most of their calories from salmon and berries. About 3,500 of them live on the islands, outnumbered by humans roughly four to one.",
    search_terms: "kodiak|bear|ursus arctos|alaska|brown bear|largest bear",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (standing)", value: 3.0, si_unit: "m", note: "On hind legs; largest individuals" },
      { dimension: "mass", label: "Body mass", value: 680, si_unit: "kg", note: "Adult male average; can exceed 750 kg before hibernation" },
      { dimension: "length", label: "Head-to-tail length", value: 2.4, si_unit: "m" },
      { dimension: "length", label: "Shoulder height", value: 1.3, si_unit: "m", note: "On all fours" },
      { dimension: "length", label: "Claw length", value: 0.1, si_unit: "m", note: "Slightly shorter than grizzly claws" },
      { dimension: "speed", label: "Top speed", value: 12.5, si_unit: "m/s", note: "~45 km/h despite their massive size" },
    ],
  },

  {
    slug: "american-bison",
    name: "American Bison",
    subtitle: "North America's largest land animal",
    category_id: "large-land-animals",
    description:
      "The American bison (Bison bison) once numbered in the tens of millions across North America before being driven to near-extinction by the late 1800s. They're the largest land animal on the continent and can pivot with the agility of something a quarter their size. Conservation efforts brought them back from fewer than 1,000 individuals, and today their population has recovered to roughly 500,000.",
    search_terms: "bison|buffalo|american bison|plains|north america|conservation",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.4, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 900, si_unit: "kg", note: "Adult bull; cows ~450 kg" },
      { dimension: "speed", label: "Top speed", value: 15.6, si_unit: "m/s", note: "~56 km/h; can outrun most horses" },
      { dimension: "length", label: "Shoulder height", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Horn length", value: 0.6, si_unit: "m", note: "Curved horns; never shed" },
      { dimension: "length", label: "Head size (length)", value: 0.6, si_unit: "m", note: "Massive skull acts as a snowplow in winter" },
      { dimension: "mass", label: "Calf mass at birth", value: 30, si_unit: "kg", note: "Can stand and walk within hours of birth" },
    ],
  },
];
