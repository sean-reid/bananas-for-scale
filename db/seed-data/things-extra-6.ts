// ── Extra things seed data (batch 6) ──────────────────────────────────────
// Science, Technology, Art, Literature, Music, Computing, Medicine, Engineering
// Plus additions to existing categories: food, animals, space, landmarks, events

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [
  {
    id: "instruments",
    name: "Musical Instruments",
    description:
      "From centuries-old string instruments to electrified modern rigs, these are the tools that turn vibration into art.",
    sort_order: 40,
  },
  {
    id: "technology",
    name: "Technology",
    description:
      "The gadgets, devices, and machines that define modern life, from pocket-sized supercomputers to autonomous vacuum cleaners.",
    sort_order: 41,
  },
  {
    id: "art",
    name: "Art & Sculpture",
    description:
      "Masterworks of human creativity measured in cold, hard numbers. The Mona Lisa may be priceless, but she is exactly 0.77 meters tall.",
    sort_order: 42,
  },
  {
    id: "science",
    name: "Scientific Objects",
    description:
      "The fundamental building blocks of reality: subatomic particles, molecules, cells, and the instruments used to study them.",
    sort_order: 43,
  },
  {
    id: "literature",
    name: "Literature & Writing",
    description:
      "Books, libraries, and the written word, from single manuscripts to the sum total of human publishing output.",
    sort_order: 44,
  },
  {
    id: "computing",
    name: "Computing",
    description:
      "The digital world measured in physical terms: hard drives that weighed a ton, cables spanning oceans, and the staggering energy cost of a search query.",
    sort_order: 45,
  },
  {
    id: "medicine",
    name: "Medicine & Biology",
    description:
      "Cells, pathogens, pills, and the tools of healing. Biology at every scale, from a single virus to the human body's daily miracles.",
    sort_order: 46,
  },
  {
    id: "engineering",
    name: "Engineering Marvels",
    description:
      "Structures and systems that push the limits of what humans can build, from particle accelerators to continent-linking tunnels.",
    sort_order: 47,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "iphone-16",
    name: "iPhone 16",
    subtitle: "Apple's 2024 flagship smartphone",
    category_id: "technology",
    description:
      "The iPhone 16 packs a 6.1-inch Super Retina display, an A18 chip, and a 48MP camera system into a device that weighs less than a deck of cards. It is the descendant of a product that single-handedly killed the MP3 player, the pocket camera, and the alarm clock.",
    search_terms: "iphone|apple|smartphone|phone|mobile|cell phone",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 0.1476, si_unit: "m", note: "147.6 mm" },
      { dimension: "length", label: "Width", value: 0.0715, si_unit: "m", note: "71.5 mm" },
      { dimension: "length", label: "Thickness", value: 0.0078, si_unit: "m", note: "7.8 mm" },
      { dimension: "mass", label: "Weight", value: 0.170, si_unit: "kg", note: "170 g" },
      { dimension: "length", label: "Screen diagonal", value: 0.155, si_unit: "m", note: "6.1 inches" },
      { dimension: "data", label: "Base storage", value: 1.28e11, si_unit: "B", note: "128 GB" },
      { dimension: "energy", label: "Battery capacity", value: 13413, si_unit: "J", note: "3561 mAh at 3.83V" },
    ],
  },
  {
    slug: "macbook-air-m3",
    name: "MacBook Air (M3)",
    subtitle: "Apple's fanless ultraportable laptop",
    category_id: "technology",
    description:
      "The M3 MacBook Air manages to deliver workstation-class performance in a wedge-shaped package that is thinner than a pencil at its narrowest point. It has no fan, because apparently cooling is optional when your chip is efficient enough.",
    search_terms: "macbook|apple|laptop|notebook|computer|macbook air",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.3041, si_unit: "m", note: "30.41 cm" },
      { dimension: "length", label: "Depth", value: 0.2153, si_unit: "m", note: "21.53 cm" },
      { dimension: "length", label: "Thickness", value: 0.0113, si_unit: "m", note: "11.3 mm" },
      { dimension: "mass", label: "Weight", value: 1.24, si_unit: "kg" },
      { dimension: "length", label: "Screen diagonal", value: 0.3518, si_unit: "m", note: "13.6 inches" },
      { dimension: "data", label: "Base storage", value: 2.56e11, si_unit: "B", note: "256 GB SSD" },
      { dimension: "power", label: "Charger wattage", value: 35, si_unit: "W" },
    ],
  },
  {
    slug: "tesla-model-3",
    name: "Tesla Model 3",
    subtitle: "The electric sedan that mainstreamed EVs",
    category_id: "cars",
    description:
      "The Tesla Model 3 helped prove that electric cars could be desirable, not just virtuous. Its battery pack alone weighs about 480 kg, which is more than the entire curb weight of the original 1908 Ford Model T. Progress is heavy.",
    search_terms: "tesla|model 3|electric car|ev|sedan|electric vehicle",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 4.720, si_unit: "m" },
      { dimension: "length", label: "Width (mirrors folded)", value: 1.849, si_unit: "m" },
      { dimension: "length", label: "Height", value: 1.442, si_unit: "m" },
      { dimension: "mass", label: "Curb weight", value: 1761, si_unit: "kg" },
      { dimension: "speed", label: "Top speed", value: 74.6, si_unit: "m/s", note: "About 268 km/h (Long Range)" },
      { dimension: "energy", label: "Battery capacity", value: 2.844e8, si_unit: "J", note: "79 kWh usable" },
      { dimension: "power", label: "Peak motor power", value: 366000, si_unit: "W", note: "366 kW dual motor" },
    ],
  },
  {
    slug: "ford-model-t",
    name: "Ford Model T",
    subtitle: "The car that put the world on wheels",
    category_id: "cars",
    description:
      "Henry Ford's Model T was produced from 1908 to 1927 and sold over 15 million units. It was available in any color you liked, as long as you liked black. Its 20-horsepower engine made it slower than a modern riding lawnmower, but it changed civilization forever.",
    search_terms: "ford|model t|tin lizzie|antique car|henry ford|classic car",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 3.4, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1.68, si_unit: "m" },
      { dimension: "length", label: "Height", value: 2.13, si_unit: "m" },
      { dimension: "mass", label: "Curb weight", value: 540, si_unit: "kg" },
      { dimension: "speed", label: "Top speed", value: 20.1, si_unit: "m/s", note: "About 72 km/h (45 mph)" },
      { dimension: "power", label: "Engine power", value: 14914, si_unit: "W", note: "20 horsepower" },
      { dimension: "volume", label: "Engine displacement", value: 0.002893, si_unit: "m^3", note: "2.9 liters" },
    ],
  },
  {
    slug: "eniac",
    name: "ENIAC",
    subtitle: "The first general-purpose electronic computer",
    category_id: "technology",
    description:
      "Completed in 1945, ENIAC (Electronic Numerical Integrator and Computer) filled an entire room, weighed 27 tonnes, and used 17,468 vacuum tubes. It could perform about 5,000 additions per second, which is roughly what a modern calculator does while feeling bored.",
    search_terms: "eniac|first computer|vacuum tubes|electronic computer|1945|early computing",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length of room", value: 30.48, si_unit: "m", note: "100 feet" },
      { dimension: "length", label: "Width", value: 0.61, si_unit: "m", note: "Panels about 2 feet deep" },
      { dimension: "length", label: "Height", value: 2.44, si_unit: "m", note: "8 feet tall" },
      { dimension: "mass", label: "Total weight", value: 27216, si_unit: "kg", note: "About 30 US tons" },
      { dimension: "power", label: "Power consumption", value: 150000, si_unit: "W", note: "150 kW" },
      { dimension: "area", label: "Floor space", value: 167, si_unit: "m^2", note: "1800 sq ft" },
      { dimension: "frequency", label: "Clock speed", value: 100000, si_unit: "Hz", note: "100 kHz" },
    ],
  },
  {
    slug: "apollo-guidance-computer",
    name: "Apollo Guidance Computer",
    subtitle: "The computer that navigated humans to the Moon",
    category_id: "technology",
    description:
      "The AGC had about 74 KB of memory and a clock speed of 1.024 MHz. It guided Apollo astronauts to the Moon and back, running on less computing power than a modern musical greeting card. Margaret Hamilton's software for it basically invented the field of software engineering.",
    search_terms: "agc|apollo|guidance computer|nasa|moon landing|space computer|margaret hamilton",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Width", value: 0.610, si_unit: "m", note: "24 inches" },
      { dimension: "length", label: "Height", value: 0.324, si_unit: "m", note: "12.75 inches" },
      { dimension: "length", label: "Depth", value: 0.168, si_unit: "m", note: "6.625 inches" },
      { dimension: "mass", label: "Weight", value: 32, si_unit: "kg", note: "About 70 pounds" },
      { dimension: "power", label: "Power consumption", value: 55, si_unit: "W" },
      { dimension: "frequency", label: "Clock speed", value: 1024000, si_unit: "Hz", note: "1.024 MHz" },
      { dimension: "data", label: "Memory (RAM + ROM)", value: 75776, si_unit: "B", note: "74 KB total" },
    ],
  },
  {
    slug: "raspberry-pi-5",
    name: "Raspberry Pi 5",
    subtitle: "A full computer smaller than a credit card",
    category_id: "technology",
    description:
      "The Raspberry Pi 5 is a single-board computer that costs around $60 and fits in your palm. It has a 2.4 GHz quad-core processor, up to 8 GB of RAM, and has been used for everything from home servers to Mars rover prototypes. It has sold over 60 million units across all versions.",
    search_terms: "raspberry pi|single board computer|arm|maker|hobbyist|pi 5",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.085, si_unit: "m", note: "85 mm" },
      { dimension: "length", label: "Depth", value: 0.056, si_unit: "m", note: "56 mm" },
      { dimension: "length", label: "Height (with connectors)", value: 0.017, si_unit: "m", note: "17 mm" },
      { dimension: "mass", label: "Weight", value: 0.046, si_unit: "kg", note: "46 g" },
      { dimension: "frequency", label: "CPU clock speed", value: 2.4e9, si_unit: "Hz", note: "2.4 GHz" },
      { dimension: "power", label: "Typical power draw", value: 5, si_unit: "W" },
      { dimension: "data", label: "Max RAM", value: 8.59e9, si_unit: "B", note: "8 GB" },
    ],
  },
  {
    slug: "roomba-j7",
    name: "Roomba j7+",
    subtitle: "The autonomous vacuum that judges your floor",
    category_id: "technology",
    description:
      "The iRobot Roomba j7+ navigates your home using a front-facing camera and AI object recognition. It can identify and avoid pet waste, cables, and shoes. It maps your house better than you probably can, and it never complains about doing the vacuuming.",
    search_terms: "roomba|robot vacuum|irobot|vacuum cleaner|autonomous|cleaning robot",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.339, si_unit: "m", note: "33.9 cm" },
      { dimension: "length", label: "Height", value: 0.087, si_unit: "m", note: "8.7 cm" },
      { dimension: "mass", label: "Weight", value: 3.4, si_unit: "kg" },
      { dimension: "time", label: "Battery life", value: 4500, si_unit: "s", note: "Up to 75 minutes" },
      { dimension: "power", label: "Charging power", value: 25, si_unit: "W" },
      { dimension: "area", label: "Cleaning coverage per charge", value: 100, si_unit: "m^2", note: "Approx. coverage" },
    ],
  },
  {
    slug: "3d-printer-ender-3",
    name: "3D Printer (Creality Ender 3)",
    subtitle: "The desktop factory that launched a million prototypes",
    category_id: "technology",
    description:
      "The Creality Ender 3 is one of the most popular consumer 3D printers ever made. It melts plastic filament at around 200 degrees Celsius and deposits it layer by layer, turning digital models into physical objects. Its build volume is modest but its ambitions are not.",
    search_terms: "3d printer|creality|ender 3|fdm|additive manufacturing|filament printer",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Frame width", value: 0.440, si_unit: "m" },
      { dimension: "length", label: "Frame depth", value: 0.410, si_unit: "m" },
      { dimension: "length", label: "Frame height", value: 0.465, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 7.8, si_unit: "kg" },
      { dimension: "volume", label: "Build volume", value: 0.01098, si_unit: "m^3", note: "220 x 220 x 250 mm" },
      { dimension: "temperature", label: "Max nozzle temp", value: 533, si_unit: "K", note: "260 degrees Celsius" },
      { dimension: "power", label: "Power consumption", value: 270, si_unit: "W" },
    ],
  },
  {
    slug: "dji-mavic-3",
    name: "DJI Mavic 3",
    subtitle: "A flying camera that fits in a backpack",
    category_id: "technology",
    description:
      "The DJI Mavic 3 is a consumer drone with a Hasselblad camera, 46 minutes of flight time, and omnidirectional obstacle sensing. It can fly at up to 75 km/h while streaming 5.1K video. A few decades ago, this kind of aerial footage required a helicopter and a film crew.",
    search_terms: "dji|mavic|drone|quadcopter|aerial|flying camera|uav",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diagonal (props included)", value: 0.380, si_unit: "m", note: "Unfolded" },
      { dimension: "length", label: "Folded length", value: 0.2213, si_unit: "m" },
      { dimension: "mass", label: "Takeoff weight", value: 0.895, si_unit: "kg" },
      { dimension: "speed", label: "Max speed (sport mode)", value: 21, si_unit: "m/s", note: "75.6 km/h" },
      { dimension: "time", label: "Max flight time", value: 2760, si_unit: "s", note: "46 minutes" },
      { dimension: "length", label: "Max altitude", value: 6000, si_unit: "m", note: "Above sea level" },
      { dimension: "power", label: "Max hover power", value: 120, si_unit: "W", note: "Estimated" },
    ],
  },
  {
    slug: "airpods-pro-2",
    name: "AirPods Pro (2nd gen)",
    subtitle: "Wireless earbuds with noise cancellation",
    category_id: "technology",
    description:
      "Each AirPod Pro weighs just 5.3 grams and contains a custom Apple H2 chip, a driver, microphones, sensors, and a battery. The charging case holds an additional 24 hours of listening time. They are, gram for gram, among the most complex consumer electronics ever manufactured.",
    search_terms: "airpods|earbuds|wireless|apple|headphones|noise cancelling|bluetooth",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Earbud height", value: 0.0306, si_unit: "m", note: "30.6 mm" },
      { dimension: "length", label: "Earbud width", value: 0.0218, si_unit: "m", note: "21.8 mm" },
      { dimension: "mass", label: "Single earbud weight", value: 0.0053, si_unit: "kg", note: "5.3 g" },
      { dimension: "mass", label: "Case weight", value: 0.0509, si_unit: "kg", note: "50.9 g with earbuds" },
      { dimension: "time", label: "Earbud battery life (ANC on)", value: 21600, si_unit: "s", note: "6 hours" },
      { dimension: "time", label: "Total battery with case", value: 108000, si_unit: "s", note: "30 hours" },
    ],
  },
  {
    slug: "tv-65-inch-oled",
    name: '65-inch OLED TV',
    subtitle: "A cinema-grade display that hangs on your wall",
    category_id: "technology",
    description:
      "A modern 65-inch OLED television has over 8 million self-emitting pixels, each one capable of turning completely off for true black. The panel itself is thinner than a smartphone, though the electronics module at the bottom adds some depth. It weighs about as much as a medium dog.",
    search_terms: "tv|television|oled|65 inch|flat screen|display|4k|home theater",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Screen diagonal", value: 1.651, si_unit: "m", note: "65 inches" },
      { dimension: "length", label: "Width", value: 1.449, si_unit: "m" },
      { dimension: "length", label: "Height (with stand)", value: 0.906, si_unit: "m" },
      { dimension: "length", label: "Panel thickness", value: 0.047, si_unit: "m" },
      { dimension: "mass", label: "Weight (with stand)", value: 23.2, si_unit: "kg" },
      { dimension: "area", label: "Screen area", value: 1.16, si_unit: "m^2", note: "Viewable area" },
      { dimension: "power", label: "Typical power consumption", value: 130, si_unit: "W" },
    ],
  },
  {
    slug: "microwave-oven",
    name: "Microwave Oven",
    subtitle: "The appliance that accidentally revolutionized cooking",
    category_id: "everyday-objects",
    description:
      "The microwave oven was accidentally invented in 1945 when Percy Spencer noticed a chocolate bar melting in his pocket near a magnetron. A standard countertop model heats food by bombarding it with 2.45 GHz electromagnetic waves. It can boil water in two minutes but still cannot make a steak taste right.",
    search_terms: "microwave|oven|kitchen|appliance|magnetron|cooking|heating",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.510, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.390, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.305, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 13, si_unit: "kg" },
      { dimension: "power", label: "Cooking power", value: 1100, si_unit: "W" },
      { dimension: "frequency", label: "Microwave frequency", value: 2.45e9, si_unit: "Hz", note: "2.45 GHz" },
      { dimension: "volume", label: "Interior capacity", value: 0.031, si_unit: "m^3", note: "31 liters" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "higgs-boson",
    name: "Higgs Boson",
    subtitle: "The particle that gives others their mass",
    category_id: "science",
    description:
      "The Higgs boson was theorized in 1964 and finally detected at CERN in 2012. It has a mass of about 125 GeV/c-squared, making it heavier than an atom of tin but existing for only 1.6 x 10^-22 seconds. It is the quantum excitation of the Higgs field, which permeates all of space and gives fundamental particles their mass.",
    search_terms: "higgs|boson|god particle|cern|particle physics|standard model|higgs field",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Rest mass", value: 2.23e-25, si_unit: "kg", note: "125.1 GeV/c^2" },
      { dimension: "time", label: "Mean lifetime", value: 1.56e-22, si_unit: "s", note: "Extremely short-lived" },
      { dimension: "energy", label: "Rest mass energy", value: 2.004e-8, si_unit: "J", note: "125.1 GeV" },
      { dimension: "length", label: "Compton wavelength", value: 1.576e-17, si_unit: "m" },
      { dimension: "temperature", label: "Discovery energy scale", value: 1.45e15, si_unit: "K", note: "Equivalent temperature" },
    ],
  },
  {
    slug: "photon-visible-green",
    name: "Photon (Green Light)",
    subtitle: "A single quantum of visible light",
    category_id: "science",
    description:
      "A photon of green light has a wavelength of about 550 nanometers and carries roughly 3.6 x 10^-19 joules of energy. It has zero rest mass, always travels at the speed of light, and is its own antiparticle. Every time you see the color green, trillions of these are entering your eyes.",
    search_terms: "photon|light|quantum|electromagnetic|green light|particle|wave",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Energy per photon", value: 3.61e-19, si_unit: "J", note: "Green, 550 nm" },
      { dimension: "length", label: "Wavelength", value: 5.5e-7, si_unit: "m", note: "550 nm" },
      { dimension: "frequency", label: "Frequency", value: 5.45e14, si_unit: "Hz", note: "545 THz" },
      { dimension: "speed", label: "Speed in vacuum", value: 299792458, si_unit: "m/s" },
      { dimension: "mass", label: "Rest mass", value: 0, si_unit: "kg", note: "Exactly zero" },
    ],
  },
  {
    slug: "electron",
    name: "Electron",
    subtitle: "The tiny particle that powers civilization",
    category_id: "science",
    description:
      "The electron is a fundamental particle with a negative charge and a mass about 1/1836th that of a proton. Every electric current is a river of electrons, every chemical bond involves them, and every screen you read glows because of them. It has no known internal structure, making it truly elementary.",
    search_terms: "electron|particle|charge|electric|fundamental|lepton|subatomic",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Rest mass", value: 9.109e-31, si_unit: "kg" },
      { dimension: "energy", label: "Rest mass energy", value: 8.187e-14, si_unit: "J", note: "0.511 MeV" },
      { dimension: "length", label: "Classical radius", value: 2.818e-15, si_unit: "m" },
      { dimension: "length", label: "Compton wavelength", value: 2.426e-12, si_unit: "m" },
      { dimension: "frequency", label: "Compton frequency", value: 1.236e20, si_unit: "Hz" },
    ],
  },
  {
    slug: "proton",
    name: "Proton",
    subtitle: "The positively charged heart of every atom",
    category_id: "science",
    description:
      "A proton is made of two up quarks and one down quark bound together by the strong nuclear force. It has a positive electric charge exactly equal and opposite to the electron's, and it is stable (as far as we know) with a half-life of at least 10^34 years. Every element on the periodic table is defined by how many protons its nucleus contains.",
    search_terms: "proton|nucleus|quark|hydrogen|baryon|subatomic|particle physics",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Rest mass", value: 1.673e-27, si_unit: "kg" },
      { dimension: "energy", label: "Rest mass energy", value: 1.503e-10, si_unit: "J", note: "938.3 MeV" },
      { dimension: "length", label: "Charge radius", value: 8.414e-16, si_unit: "m", note: "0.8414 fm" },
      { dimension: "length", label: "Compton wavelength", value: 1.321e-15, si_unit: "m" },
      { dimension: "frequency", label: "Compton frequency", value: 2.269e23, si_unit: "Hz" },
    ],
  },
  {
    slug: "dna-double-helix",
    name: "DNA Double Helix",
    subtitle: "The molecule that encodes all known life",
    category_id: "science",
    description:
      "A human cell contains about 2 meters of DNA packed into a nucleus just 6 micrometers across. The double helix is 2 nanometers in diameter with a full turn every 3.4 nanometers. If you uncoiled all the DNA in your body and laid it end to end, it would stretch to the Sun and back about 600 times.",
    search_terms: "dna|double helix|genetics|genome|nucleotide|chromosome|genetic code",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Diameter of helix", value: 2.0e-9, si_unit: "m", note: "2 nm" },
      { dimension: "length", label: "Rise per base pair", value: 3.4e-10, si_unit: "m", note: "0.34 nm" },
      { dimension: "length", label: "Full helical turn pitch", value: 3.4e-9, si_unit: "m", note: "3.4 nm, 10 base pairs" },
      { dimension: "length", label: "Total per human cell", value: 2.0, si_unit: "m", note: "About 6.4 billion base pairs" },
      { dimension: "data", label: "Information content per cell", value: 7.5e8, si_unit: "B", note: "About 750 MB (2 bits per base pair)" },
      { dimension: "mass", label: "Mass per base pair", value: 1.08e-21, si_unit: "kg", note: "Average ~650 daltons" },
    ],
  },
  {
    slug: "human-cell-typical",
    name: "Human Cell (Typical)",
    subtitle: "One of 37 trillion building blocks in your body",
    category_id: "science",
    description:
      "A typical human cell is about 10 micrometers in diameter, though they range from 8 micrometers (red blood cells) to over 100 micrometers (egg cells). Each cell contains about 42 million protein molecules, several thousand mitochondria, and a complete copy of your genome. You are made of approximately 37 trillion of them.",
    search_terms: "cell|human cell|biology|cellular|organelle|cytoplasm|eukaryote",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical diameter", value: 1.0e-5, si_unit: "m", note: "10 micrometers" },
      { dimension: "volume", label: "Typical volume", value: 4.0e-15, si_unit: "m^3", note: "4000 cubic micrometers" },
      { dimension: "mass", label: "Typical mass", value: 1.0e-12, si_unit: "kg", note: "About 1 nanogram" },
      { dimension: "length", label: "Cell membrane thickness", value: 7.5e-9, si_unit: "m", note: "7.5 nm" },
      { dimension: "length", label: "Nucleus diameter", value: 6.0e-6, si_unit: "m", note: "6 micrometers" },
    ],
  },
  {
    slug: "gold-atom",
    name: "Atom of Gold",
    subtitle: "The quantum sparkle behind a noble metal",
    category_id: "science",
    description:
      "A gold atom has 79 protons, 118 neutrons, and 79 electrons. Its atomic radius is about 144 picometers, and it has a mass of roughly 3.27 x 10^-25 kg. Gold's distinctive yellow color comes from relativistic effects on its electrons. Without Einstein's relativity, gold would look silver.",
    search_terms: "gold|atom|element|au|atomic|noble metal|periodic table",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Atomic mass", value: 3.271e-25, si_unit: "kg", note: "196.97 u" },
      { dimension: "length", label: "Atomic radius (metallic)", value: 1.44e-10, si_unit: "m", note: "144 pm" },
      { dimension: "length", label: "Van der Waals radius", value: 1.66e-10, si_unit: "m", note: "166 pm" },
      { dimension: "length", label: "Nuclear radius", value: 6.23e-15, si_unit: "m", note: "6.23 fm" },
      { dimension: "energy", label: "First ionization energy", value: 1.48e-18, si_unit: "J", note: "9.22 eV" },
    ],
  },
  {
    slug: "grain-of-pollen",
    name: "Grain of Pollen",
    subtitle: "The microscopic plant sperm that ruins your spring",
    category_id: "science",
    description:
      "A typical pollen grain ranges from 10 to 100 micrometers in diameter. Ragweed pollen, the major hay fever culprit, is about 20 micrometers across. Each grain carries the male genetic material of a plant and is engineered by evolution with spines, air sacs, or sticky coatings to reach its target.",
    search_terms: "pollen|allergy|plant|flower|hay fever|ragweed|microscopic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical diameter", value: 2.5e-5, si_unit: "m", note: "25 micrometers (ragweed)" },
      { dimension: "mass", label: "Mass of single grain", value: 1.0e-11, si_unit: "kg", note: "About 10 nanograms" },
      { dimension: "length", label: "Range (small pollen)", value: 1.0e-5, si_unit: "m", note: "10 micrometers" },
      { dimension: "length", label: "Range (large pollen)", value: 1.0e-4, si_unit: "m", note: "100 micrometers" },
      { dimension: "speed", label: "Settling speed in still air", value: 0.03, si_unit: "m/s", note: "About 3 cm/s" },
    ],
  },
  {
    slug: "water-molecule",
    name: "Water Molecule",
    subtitle: "The bent little molecule that makes life possible",
    category_id: "science",
    description:
      "A single water molecule (H2O) is about 2.75 angstroms across and has a distinctive 104.5-degree bond angle that gives it a permanent electric dipole. This simple geometry is responsible for ice floating, water being an excellent solvent, and essentially all of biology. A single glass of water contains about 8.36 x 10^24 of these molecules.",
    search_terms: "water|molecule|h2o|hydrogen|oxygen|chemistry|solvent",
    featured: 0,
    measurements: [
      { dimension: "length", label: "O-H bond length", value: 9.584e-11, si_unit: "m", note: "0.9584 angstroms" },
      { dimension: "length", label: "Molecular diameter", value: 2.75e-10, si_unit: "m", note: "2.75 angstroms" },
      { dimension: "mass", label: "Molecular mass", value: 2.992e-26, si_unit: "kg", note: "18.015 u" },
      { dimension: "energy", label: "O-H bond energy", value: 7.67e-19, si_unit: "J", note: "4.79 eV" },
      { dimension: "temperature", label: "Boiling point", value: 373.15, si_unit: "K", note: "100 degrees Celsius at 1 atm" },
    ],
  },
  {
    slug: "hiv-virus",
    name: "HIV Virus",
    subtitle: "The retrovirus that reshaped modern medicine",
    category_id: "science",
    description:
      "The human immunodeficiency virus is a roughly spherical retrovirus about 120 nanometers in diameter. It contains just 9 genes and about 9,700 base pairs of RNA. Despite its minuscule size, HIV infects CD4+ T cells, hijacks their machinery, and has driven decades of breakthrough research in virology, immunology, and drug design.",
    search_terms: "hiv|virus|retrovirus|aids|immunodeficiency|virology|pathogen",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 1.2e-7, si_unit: "m", note: "120 nm" },
      { dimension: "mass", label: "Virion mass", value: 1.0e-18, si_unit: "kg", note: "About 10^9 daltons" },
      { dimension: "data", label: "Genome size", value: 9700, si_unit: "B", note: "9,700 base pairs (2 bits each)" },
      { dimension: "length", label: "RNA genome length (stretched)", value: 3.3e-6, si_unit: "m", note: "3.3 micrometers" },
      { dimension: "time", label: "Replication cycle", value: 86400, si_unit: "s", note: "About 24 hours" },
    ],
  },
  {
    slug: "carbon-nanotube",
    name: "Carbon Nanotube",
    subtitle: "A rolled-up sheet of graphene with superhero properties",
    category_id: "science",
    description:
      "A single-walled carbon nanotube is essentially a sheet of graphene rolled into a cylinder about 1 nanometer in diameter. These tubes are roughly 100 times stronger than steel at one-sixth the weight, can conduct electricity better than copper, and conduct heat better than diamond. They are the strongest material ever measured.",
    search_terms: "carbon nanotube|cnt|nanotechnology|graphene|nanomaterial|buckytube",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical diameter (SWCNT)", value: 1.0e-9, si_unit: "m", note: "1 nm" },
      { dimension: "length", label: "Typical length", value: 1.0e-4, si_unit: "m", note: "Up to 100 micrometers" },
      { dimension: "force", label: "Tensile strength", value: 6.3e10, si_unit: "Pa", note: "63 GPa" },
      { dimension: "mass", label: "Linear density", value: 1.3e-15, si_unit: "kg", note: "Per micrometer" },
      { dimension: "temperature", label: "Stability in vacuum", value: 4273, si_unit: "K", note: "Up to about 4000 degrees C" },
    ],
  },
  {
    slug: "hubble-deep-field",
    name: "Hubble Deep Field",
    subtitle: "The most important photograph ever taken",
    category_id: "science",
    description:
      "In 1995, the Hubble Space Telescope stared at a seemingly empty speck of sky for 10 consecutive days. The resulting image, covering an area of sky smaller than a grain of sand held at arm's length, revealed about 3,000 galaxies spanning 12 billion years of cosmic history. It fundamentally changed our understanding of the universe's scale.",
    search_terms: "hubble deep field|hdf|deep field|hubble|galaxies|astronomy|cosmology",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Angular area of sky", value: 1.86e-8, si_unit: "m^2", note: "5.3 sq arcmin, about 1/13 millionth of sky" },
      { dimension: "time", label: "Total exposure time", value: 864000, si_unit: "s", note: "10 days" },
      { dimension: "length", label: "Lookback distance", value: 1.135e26, si_unit: "m", note: "About 12 billion light-years" },
      { dimension: "time", label: "Year of observation", value: 0, si_unit: "s", note: "December 1995" },
      { dimension: "data", label: "Image data collected", value: 2.62e7, si_unit: "B", note: "About 25 MB of raw data" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPUTING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "ibm-350-first-hard-drive",
    name: "IBM 350 (First Hard Drive)",
    subtitle: "One ton of machinery for 5 megabytes",
    category_id: "computing",
    description:
      "The IBM 350 Disk Storage Unit, introduced in 1956, was the first commercial hard drive. It stored 5 million characters (about 3.75 MB) on fifty 24-inch spinning platters and weighed over a ton. It was delivered by cargo airplane and rented for $3,200 per month, which in today's money makes cloud storage look like a bargain.",
    search_terms: "ibm 350|first hard drive|ramac|disk storage|1956|ibm|hard disk",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 1.727, si_unit: "m", note: "68 inches" },
      { dimension: "length", label: "Width", value: 1.524, si_unit: "m", note: "60 inches" },
      { dimension: "length", label: "Depth", value: 0.737, si_unit: "m", note: "29 inches" },
      { dimension: "mass", label: "Weight", value: 971, si_unit: "kg", note: "About 2,140 pounds" },
      { dimension: "data", label: "Storage capacity", value: 3750000, si_unit: "B", note: "3.75 MB" },
      { dimension: "frequency", label: "Rotation speed", value: 20, si_unit: "Hz", note: "1,200 RPM" },
      { dimension: "power", label: "Power consumption", value: 10000, si_unit: "W", note: "Estimated" },
    ],
  },
  {
    slug: "modern-nvme-ssd",
    name: "Modern NVMe SSD (2 TB)",
    subtitle: "Five hundred million times denser than the first hard drive",
    category_id: "computing",
    description:
      "A modern M.2 NVMe solid-state drive stores 2 terabytes in a stick smaller than a pack of gum. It has no moving parts, reads data at over 7 GB/s, and weighs about 9 grams. The IBM 350 stored 3.75 MB in a ton of machinery. This little stick stores 500,000 times more in a space you could lose between couch cushions.",
    search_terms: "ssd|nvme|solid state|storage|m.2|flash storage|hard drive",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.080, si_unit: "m", note: "80 mm (M.2 2280)" },
      { dimension: "length", label: "Width", value: 0.022, si_unit: "m", note: "22 mm" },
      { dimension: "length", label: "Thickness", value: 0.0023, si_unit: "m", note: "2.3 mm" },
      { dimension: "mass", label: "Weight", value: 0.009, si_unit: "kg", note: "About 9 grams" },
      { dimension: "data", label: "Storage capacity", value: 2.0e12, si_unit: "B", note: "2 TB" },
      { dimension: "speed", label: "Sequential read speed (data rate)", value: 7.0e9, si_unit: "m/s", note: "7 GB/s (expressed as data throughput)" },
      { dimension: "power", label: "Active power", value: 7, si_unit: "W" },
    ],
  },
  {
    slug: "server-rack-42u",
    name: "Server Rack (42U Standard)",
    subtitle: "The steel skeleton of the internet",
    category_id: "computing",
    description:
      "A standard 42U server rack stands about 2 meters tall and can hold up to 42 rack-mounted servers. A fully loaded rack can weigh over a ton, consume 20 kilowatts of power, and generate enough heat to warm a small apartment. Data centers contain thousands of these, stacked in rows like the library stacks of the digital age.",
    search_terms: "server rack|data center|42u|rack mount|server|hosting|cloud",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 2.0, si_unit: "m", note: "42U rack units" },
      { dimension: "length", label: "Width", value: 0.600, si_unit: "m", note: "Standard 600 mm" },
      { dimension: "length", label: "Depth", value: 1.070, si_unit: "m", note: "Standard 1070 mm" },
      { dimension: "mass", label: "Fully loaded weight", value: 1200, si_unit: "kg", note: "Varies widely" },
      { dimension: "power", label: "Typical power consumption", value: 20000, si_unit: "W", note: "20 kW fully loaded" },
      { dimension: "data", label: "Typical storage capacity", value: 5.04e15, si_unit: "B", note: "Petabytes with dense config" },
    ],
  },
  {
    slug: "submarine-internet-cable",
    name: "Submarine Internet Cable (Transatlantic)",
    subtitle: "The physical backbone of global communication",
    category_id: "computing",
    description:
      "About 99% of intercontinental internet traffic travels through submarine fiber optic cables on the ocean floor. A modern transatlantic cable like MAREA is about 6,600 km long and the diameter of a garden hose. It carries 200+ terabits per second. Sharks occasionally bite these cables, which is why they have armored sheathing.",
    search_terms: "submarine cable|undersea cable|fiber optic|internet cable|transatlantic|marea",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cable length (MAREA)", value: 6600000, si_unit: "m", note: "6,600 km" },
      { dimension: "length", label: "Cable diameter", value: 0.017, si_unit: "m", note: "17 mm at deepest sections" },
      { dimension: "mass", label: "Total cable mass", value: 4650000, si_unit: "kg", note: "Estimated" },
      { dimension: "data", label: "Capacity", value: 2.5e13, si_unit: "B", note: "200 Tbps throughput" },
      { dimension: "length", label: "Max ocean depth laid", value: 5181, si_unit: "m" },
      { dimension: "speed", label: "Signal speed in fiber", value: 2.0e8, si_unit: "m/s", note: "About 2/3 speed of light" },
    ],
  },
  {
    slug: "wifi-signal-range",
    name: "WiFi Signal (Typical Indoor)",
    subtitle: "The invisible bubble of connectivity around your router",
    category_id: "computing",
    description:
      "A standard WiFi 6 router broadcasts at about 100 milliwatts on the 5 GHz band with a usable indoor range of roughly 35 meters. The signal weakens with every wall it passes through. Your WiFi router is technically a tiny radio station, broadcasting at about 1/10,000th the power of a commercial FM transmitter.",
    search_terms: "wifi|wireless|router|802.11|signal|internet|wireless network",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical indoor range (5 GHz)", value: 35, si_unit: "m" },
      { dimension: "length", label: "Typical indoor range (2.4 GHz)", value: 70, si_unit: "m" },
      { dimension: "frequency", label: "Frequency (5 GHz band)", value: 5.0e9, si_unit: "Hz", note: "5 GHz" },
      { dimension: "frequency", label: "Frequency (2.4 GHz band)", value: 2.4e9, si_unit: "Hz", note: "2.4 GHz" },
      { dimension: "power", label: "Typical transmit power", value: 0.1, si_unit: "W", note: "100 mW" },
      { dimension: "data", label: "Max throughput (WiFi 6)", value: 1.2e9, si_unit: "B", note: "9.6 Gbps theoretical" },
    ],
  },
  {
    slug: "bitcoin-network-energy",
    name: "Bitcoin Network (Annual Energy)",
    subtitle: "The electricity bill for decentralized trust",
    category_id: "computing",
    description:
      "The Bitcoin network consumes an estimated 150 terawatt-hours of electricity per year, roughly equivalent to the entire energy consumption of Poland. This powers the proof-of-work mining process that secures the blockchain. Each individual Bitcoin transaction uses enough electricity to power an average US household for about six weeks.",
    search_terms: "bitcoin|cryptocurrency|mining|blockchain|energy consumption|proof of work",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Annual energy consumption", value: 5.4e17, si_unit: "J", note: "About 150 TWh/year" },
      { dimension: "power", label: "Average power draw", value: 1.71e10, si_unit: "W", note: "About 17.1 GW" },
      { dimension: "energy", label: "Energy per transaction", value: 2.52e9, si_unit: "J", note: "About 700 kWh" },
      { dimension: "data", label: "Blockchain size", value: 5.5e11, si_unit: "B", note: "About 550 GB" },
      { dimension: "frequency", label: "Transactions per second", value: 7, si_unit: "Hz", note: "About 7 TPS on-chain" },
    ],
  },
  {
    slug: "google-search-energy",
    name: "Google Search (Single Query)",
    subtitle: "The environmental cost of curiosity",
    category_id: "computing",
    description:
      "A single Google search uses about 0.3 watt-hours of electricity, enough to light a 60-watt bulb for 18 seconds. Google processes over 8.5 billion searches per day, which adds up to about 2.55 terawatt-hours per year just for search. The servers also need about the same amount of energy again for cooling.",
    search_terms: "google|search|query|energy|data center|internet search",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Energy per query", value: 1080, si_unit: "J", note: "About 0.3 Wh" },
      { dimension: "time", label: "Average response time", value: 0.2, si_unit: "s", note: "About 200 milliseconds" },
      { dimension: "data", label: "Data processed per query", value: 1000000, si_unit: "B", note: "Estimated 1 MB" },
      { dimension: "energy", label: "Total daily energy (all searches)", value: 9.18e12, si_unit: "J", note: "8.5 billion searches/day" },
      { dimension: "power", label: "Google total data center power", value: 2.2e10, si_unit: "W", note: "About 22 GW (all services)" },
    ],
  },
  {
    slug: "chatgpt-query-energy",
    name: "ChatGPT Query (Single Response)",
    subtitle: "Large language models have large power bills",
    category_id: "computing",
    description:
      "A single ChatGPT query uses roughly 10 times the energy of a Google search, at about 3 watt-hours per response. Running GPT-4 class models at scale requires enormous GPU clusters drawing megawatts of power. As AI usage grows, the energy footprint of language models has become a significant topic in sustainable computing.",
    search_terms: "chatgpt|ai|llm|openai|language model|artificial intelligence|gpt",
    featured: 0,
    measurements: [
      { dimension: "energy", label: "Energy per query", value: 10800, si_unit: "J", note: "About 3 Wh (estimated)" },
      { dimension: "time", label: "Typical response time", value: 5, si_unit: "s", note: "Varies with length" },
      { dimension: "data", label: "Typical response size", value: 2000, si_unit: "B", note: "About 2 KB of text" },
      { dimension: "power", label: "Single GPU power (H100)", value: 700, si_unit: "W" },
      { dimension: "energy", label: "GPT-4 training energy", value: 1.8e14, si_unit: "J", note: "Estimated 50 GWh" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ART & SCULPTURE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "mona-lisa",
    name: "Mona Lisa",
    subtitle: "The world's most famous enigmatic smile",
    category_id: "art",
    description:
      "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519 on a poplar wood panel using oil paints. It is surprisingly small in person, measuring just 77 cm by 53 cm. The painting is displayed behind bulletproof glass at the Louvre, where it attracts about 10 million visitors per year. Her smile is still being debated five centuries later.",
    search_terms: "mona lisa|leonardo|da vinci|louvre|painting|la gioconda|renaissance",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 0.77, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.53, si_unit: "m" },
      { dimension: "area", label: "Painted area", value: 0.4081, si_unit: "m^2" },
      { dimension: "mass", label: "Weight (with frame)", value: 8, si_unit: "kg", note: "Poplar wood panel" },
      { dimension: "time", label: "Age (as of 2026)", value: 1.648e10, si_unit: "s", note: "About 523 years since started in 1503" },
      { dimension: "length", label: "Panel thickness", value: 0.013, si_unit: "m", note: "13 mm poplar wood" },
    ],
  },
  {
    slug: "david-by-michelangelo",
    name: "David by Michelangelo",
    subtitle: "5.17 meters of marble confidence",
    category_id: "art",
    description:
      "Michelangelo carved David from a single block of Carrara marble between 1501 and 1504. Standing 5.17 meters tall (including the base), it depicts the biblical hero before his battle with Goliath. The statue's right hand is disproportionately large, possibly because Michelangelo knew it would be viewed from below. It weighs about 5,660 kg.",
    search_terms: "david|michelangelo|marble|florence|sculpture|renaissance|statue",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (with base)", value: 5.17, si_unit: "m" },
      { dimension: "length", label: "Height (figure only)", value: 4.34, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 5660, si_unit: "kg", note: "Carrara marble" },
      { dimension: "length", label: "Base width", value: 1.99, si_unit: "m" },
      { dimension: "time", label: "Age (as of 2026)", value: 1.648e10, si_unit: "s", note: "Completed 1504, about 522 years" },
      { dimension: "length", label: "Head height", value: 0.55, si_unit: "m", note: "Intentionally oversized" },
    ],
  },
  {
    slug: "starry-night",
    name: "The Starry Night",
    subtitle: "Van Gogh's swirling vision of the night sky",
    category_id: "art",
    description:
      "Vincent van Gogh painted The Starry Night in June 1889 from his room at the Saint-Paul-de-Mausole asylum in Saint-Remy-de-Provence. The painting measures 73.7 cm by 92.1 cm and depicts a turbulent night sky over a sleeping village. Researchers have found that the painting's swirling patterns closely match the mathematical structure of turbulent fluid flow.",
    search_terms: "starry night|van gogh|painting|night sky|post-impressionism|moma",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.737, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.921, si_unit: "m" },
      { dimension: "area", label: "Canvas area", value: 0.6788, si_unit: "m^2" },
      { dimension: "time", label: "Age (as of 2026)", value: 4.323e9, si_unit: "s", note: "Painted June 1889, about 137 years" },
      { dimension: "mass", label: "Estimated weight", value: 5.5, si_unit: "kg", note: "Oil on canvas with frame" },
    ],
  },
  {
    slug: "great-wave-off-kanagawa",
    name: "The Great Wave off Kanagawa",
    subtitle: "Hokusai's iconic woodblock print of nature's fury",
    category_id: "art",
    description:
      "Katsushika Hokusai created The Great Wave off Kanagawa around 1831 as part of his series 'Thirty-six Views of Mount Fuji.' The woodblock print measures about 25.7 cm by 37.8 cm and depicts a towering wave threatening boats near Kanagawa, with Mount Fuji in the background. It may be the most reproduced image in all of art history.",
    search_terms: "great wave|hokusai|kanagawa|woodblock|ukiyo-e|japanese art|wave|mount fuji",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.257, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.378, si_unit: "m" },
      { dimension: "area", label: "Print area", value: 0.09715, si_unit: "m^2" },
      { dimension: "time", label: "Age (as of 2026)", value: 6.15e9, si_unit: "s", note: "About 195 years since c. 1831" },
      { dimension: "mass", label: "Weight of single print", value: 0.05, si_unit: "kg", note: "On mulberry paper" },
    ],
  },
  {
    slug: "sistine-chapel-ceiling",
    name: "Sistine Chapel Ceiling",
    subtitle: "Michelangelo's back-breaking masterpiece",
    category_id: "art",
    description:
      "Michelangelo painted the Sistine Chapel ceiling between 1508 and 1512, working on scaffolding about 20 meters above the floor. The ceiling covers about 1,100 square meters and contains over 300 figures. Contrary to popular belief, he did not paint lying on his back but standing with his head tilted upward, which caused him years of neck pain.",
    search_terms: "sistine chapel|michelangelo|ceiling|vatican|fresco|creation of adam|rome",
    featured: 1,
    measurements: [
      { dimension: "area", label: "Ceiling area", value: 1100, si_unit: "m^2" },
      { dimension: "length", label: "Chapel length", value: 40.93, si_unit: "m" },
      { dimension: "length", label: "Chapel width", value: 13.41, si_unit: "m" },
      { dimension: "length", label: "Ceiling height", value: 20.7, si_unit: "m" },
      { dimension: "time", label: "Time to complete", value: 1.26e8, si_unit: "s", note: "About 4 years (1508-1512)" },
      { dimension: "time", label: "Age (as of 2026)", value: 1.622e10, si_unit: "s", note: "Completed 1512, about 514 years" },
    ],
  },
  {
    slug: "guernica-by-picasso",
    name: "Guernica by Picasso",
    subtitle: "The most powerful anti-war painting ever made",
    category_id: "art",
    description:
      "Pablo Picasso painted Guernica in 1937 in response to the bombing of the Basque town of Guernica during the Spanish Civil War. At 3.49 meters tall and 7.76 meters wide, it is enormous. Picasso completed the painting in about five weeks. When a Nazi officer saw a photo of Guernica and asked Picasso 'Did you do this?', he reportedly replied 'No, you did.'",
    search_terms: "guernica|picasso|anti-war|spanish civil war|bombing|cubism|reina sofia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 3.49, si_unit: "m" },
      { dimension: "length", label: "Width", value: 7.76, si_unit: "m" },
      { dimension: "area", label: "Canvas area", value: 27.08, si_unit: "m^2" },
      { dimension: "time", label: "Time to paint", value: 3.024e6, si_unit: "s", note: "About 5 weeks" },
      { dimension: "time", label: "Age (as of 2026)", value: 2.808e9, si_unit: "s", note: "Painted 1937, about 89 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LITERATURE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "gutenberg-bible",
    name: "Gutenberg Bible",
    subtitle: "The book that started the printing revolution",
    category_id: "literature",
    description:
      "The Gutenberg Bible, printed by Johannes Gutenberg around 1455, was the first major book produced with movable type in Europe. About 180 copies were printed, of which 49 survive. Each copy is two volumes totaling about 1,282 pages. A complete copy sold at auction in 1978 for $2.2 million, and today would be worth tens of millions.",
    search_terms: "gutenberg|bible|printing press|movable type|incunabulum|1455|book",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Page height", value: 0.42, si_unit: "m", note: "About 42 cm (folio format)" },
      { dimension: "length", label: "Page width", value: 0.30, si_unit: "m", note: "About 30 cm" },
      { dimension: "mass", label: "Weight (both volumes)", value: 14, si_unit: "kg", note: "Estimated for paper copy" },
      { dimension: "length", label: "Spine thickness (both)", value: 0.15, si_unit: "m", note: "Combined thickness" },
      { dimension: "data", label: "Text content", value: 4.5e6, si_unit: "B", note: "About 4.5 MB of text" },
      { dimension: "time", label: "Age (as of 2026)", value: 1.802e10, si_unit: "s", note: "About 571 years since 1455" },
    ],
  },
  {
    slug: "oxford-english-dictionary",
    name: "Oxford English Dictionary",
    subtitle: "Every word in English, plus the ones English stole",
    category_id: "literature",
    description:
      "The Oxford English Dictionary (OED) is the definitive historical dictionary of the English language. The full second edition contains 21,728 pages in 20 volumes, defines 291,500 entries, and includes 2.4 million quotations. It took over 70 years to complete the first edition. The word with the longest entry is 'set,' with over 430 senses.",
    search_terms: "oxford english dictionary|oed|dictionary|english|words|definitions|reference",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight (20-volume set)", value: 62.6, si_unit: "kg", note: "About 138 pounds" },
      { dimension: "length", label: "Shelf length (all volumes)", value: 1.37, si_unit: "m", note: "About 4.5 feet" },
      { dimension: "length", label: "Volume height", value: 0.311, si_unit: "m" },
      { dimension: "data", label: "Total text content", value: 5.4e8, si_unit: "B", note: "About 540 MB digitized" },
      { dimension: "volume", label: "Physical volume (all books)", value: 0.053, si_unit: "m^3", note: "20 volumes stacked" },
      { dimension: "time", label: "Time to compile first edition", value: 2.21e9, si_unit: "s", note: "70 years (1858-1928)" },
    ],
  },
  {
    slug: "war-and-peace",
    name: "War and Peace",
    subtitle: "Tolstoy's 580,000-word epic of Russian life",
    category_id: "literature",
    description:
      "Leo Tolstoy's War and Peace, published from 1865 to 1869, is one of the longest novels in the Western canon at about 580,000 words. It follows multiple Russian families during the Napoleonic Wars and contains over 500 named characters. Reading it aloud would take about 32 hours. Tolstoy's wife reportedly copied the manuscript by hand seven times.",
    search_terms: "war and peace|tolstoy|russian literature|novel|napoleon|classic literature",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight (paperback)", value: 0.635, si_unit: "kg" },
      { dimension: "length", label: "Spine thickness", value: 0.055, si_unit: "m", note: "About 5.5 cm" },
      { dimension: "data", label: "Text content", value: 3.2e6, si_unit: "B", note: "About 3.2 MB plain text" },
      { dimension: "time", label: "Audiobook length", value: 115200, si_unit: "s", note: "About 32 hours" },
      { dimension: "length", label: "Book height", value: 0.198, si_unit: "m" },
      { dimension: "length", label: "Book width", value: 0.129, si_unit: "m" },
    ],
  },
  {
    slug: "complete-works-of-shakespeare",
    name: "Complete Works of Shakespeare",
    subtitle: "37 plays, 154 sonnets, and about 880,000 words",
    category_id: "literature",
    description:
      "William Shakespeare's complete works comprise 37 plays, 154 sonnets, and several longer poems totaling about 880,000 words. He invented roughly 1,700 words that are still in common use, including 'eyeball,' 'bedroom,' and 'assassination.' The complete text fits comfortably on a floppy disk.",
    search_terms: "shakespeare|plays|sonnets|bard|hamlet|romeo|literature|complete works",
    featured: 0,
    measurements: [
      { dimension: "data", label: "Text content", value: 5.0e6, si_unit: "B", note: "About 5 MB plain text" },
      { dimension: "mass", label: "Weight (single-volume edition)", value: 1.36, si_unit: "kg" },
      { dimension: "length", label: "Book height", value: 0.235, si_unit: "m" },
      { dimension: "length", label: "Spine thickness", value: 0.060, si_unit: "m" },
      { dimension: "time", label: "Age of works (as of 2026)", value: 1.325e10, si_unit: "s", note: "About 420 years since first plays" },
      { dimension: "time", label: "Total performance time (all plays)", value: 356400, si_unit: "s", note: "About 99 hours" },
    ],
  },
  {
    slug: "library-of-congress",
    name: "Library of Congress",
    subtitle: "The largest library in the world by shelf space",
    category_id: "literature",
    description:
      "The Library of Congress holds over 170 million items including 40 million cataloged books, 73 million manuscripts, and 15 million photographs. Its shelving stretches about 1,350 kilometers. It adds about 15,000 items per working day. If you read 5 books a week, it would take about 154,000 years to read just the books.",
    search_terms: "library of congress|library|congress|washington|largest library|books|collection",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total shelving length", value: 1350000, si_unit: "m", note: "1,350 km" },
      { dimension: "mass", label: "Estimated mass of books", value: 2.7e7, si_unit: "kg", note: "About 27,000 tonnes" },
      { dimension: "data", label: "Digital collection size", value: 3.0e16, si_unit: "B", note: "About 30 petabytes" },
      { dimension: "area", label: "Building floor space", value: 260000, si_unit: "m^2", note: "Three buildings combined" },
      { dimension: "volume", label: "Total building volume", value: 1.56e6, si_unit: "m^3", note: "Estimated" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGINEERING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "three-gorges-dam",
    name: "Three Gorges Dam",
    subtitle: "The largest power station on Earth",
    category_id: "engineering",
    description:
      "The Three Gorges Dam on the Yangtze River in China is the world's largest hydroelectric power station by installed capacity. Completed in 2006, it stretches 2,335 meters across the river, stands 181 meters tall, and used 27.2 million cubic meters of concrete. Its reservoir is so massive that it slightly slowed Earth's rotation.",
    search_terms: "three gorges|dam|hydroelectric|yangtze|china|power station|reservoir",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Crest length", value: 2335, si_unit: "m" },
      { dimension: "length", label: "Height", value: 181, si_unit: "m" },
      { dimension: "mass", label: "Concrete mass", value: 6.528e10, si_unit: "kg", note: "27.2 million m^3 of concrete" },
      { dimension: "power", label: "Installed capacity", value: 2.25e10, si_unit: "W", note: "22.5 GW" },
      { dimension: "volume", label: "Reservoir volume", value: 3.93e10, si_unit: "m^3", note: "39.3 km^3" },
      { dimension: "area", label: "Reservoir surface area", value: 1.084e9, si_unit: "m^2", note: "1,084 km^2" },
      { dimension: "energy", label: "Annual energy output", value: 3.6e17, si_unit: "J", note: "About 100 TWh/year" },
    ],
  },
  {
    slug: "cern-complex",
    name: "CERN Complex",
    subtitle: "The world's largest particle physics laboratory",
    category_id: "engineering",
    description:
      "CERN sits on the Franco-Swiss border near Geneva and hosts the Large Hadron Collider along with numerous other experiments. The complex includes about 600 buildings on the surface and a vast network of underground tunnels and caverns. Over 17,000 people from 110 nationalities work there, making it one of the most internationally collaborative places on Earth.",
    search_terms: "cern|particle physics|lhc|geneva|laboratory|accelerator|physics",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Underground facility area", value: 370000, si_unit: "m^2", note: "Including LHC caverns" },
      { dimension: "area", label: "Surface area of site", value: 6000000, si_unit: "m^2", note: "About 600 hectares" },
      { dimension: "length", label: "LHC circumference", value: 26659, si_unit: "m", note: "26.659 km" },
      { dimension: "power", label: "Total power consumption", value: 2.0e8, si_unit: "W", note: "200 MW peak" },
      { dimension: "energy", label: "Annual energy consumption", value: 4.32e15, si_unit: "J", note: "About 1.2 TWh/year" },
      { dimension: "temperature", label: "LHC operating temperature", value: 1.9, si_unit: "K", note: "Colder than outer space" },
    ],
  },
  {
    slug: "panama-canal-locks",
    name: "Panama Canal (New Locks)",
    subtitle: "The shortcut that changed world trade forever",
    category_id: "engineering",
    description:
      "The Panama Canal cuts through 82 km of the Isthmus of Panama, saving ships a 12,000 km journey around South America. The expanded locks, completed in 2016, can handle ships up to 366 meters long. About 14,000 ships transit the canal each year, carrying roughly 5% of world trade. The original construction cost over 25,000 lives.",
    search_terms: "panama canal|canal|locks|shipping|trade|isthmus|neopanamax",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Canal length", value: 82000, si_unit: "m", note: "82 km" },
      { dimension: "length", label: "Lock chamber length (new)", value: 427, si_unit: "m" },
      { dimension: "length", label: "Lock chamber width (new)", value: 55, si_unit: "m" },
      { dimension: "length", label: "Maximum ship length", value: 366, si_unit: "m", note: "Neopanamax" },
      { dimension: "volume", label: "Water per lockage", value: 200000, si_unit: "m^3", note: "New locks, 60% recycled" },
      { dimension: "time", label: "Transit time", value: 36000, si_unit: "s", note: "About 10 hours" },
    ],
  },
  {
    slug: "golden-gate-bridge",
    name: "Golden Gate Bridge",
    subtitle: "The most photographed bridge in the world",
    category_id: "engineering",
    description:
      "The Golden Gate Bridge, completed in 1937, spans the Golden Gate strait connecting San Francisco to Marin County. Its main span of 1,280 meters was the longest in the world for 27 years. The bridge's distinctive International Orange color was originally meant to be temporary primer, but the consulting architect liked it so much it became permanent.",
    search_terms: "golden gate|bridge|san francisco|suspension bridge|california|landmark",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 2737, si_unit: "m", note: "Including approaches" },
      { dimension: "length", label: "Main span", value: 1280, si_unit: "m" },
      { dimension: "length", label: "Tower height above water", value: 227, si_unit: "m" },
      { dimension: "mass", label: "Total weight", value: 3.83e8, si_unit: "kg", note: "383,000 tonnes" },
      { dimension: "length", label: "Main cable diameter", value: 0.927, si_unit: "m", note: "36.5 inches" },
      { dimension: "length", label: "Total wire in cables", value: 1.29e8, si_unit: "m", note: "129,000 km of wire" },
      { dimension: "time", label: "Age (as of 2026)", value: 2.808e9, si_unit: "s", note: "Completed 1937, about 89 years" },
    ],
  },
  {
    slug: "james-webb-mirror",
    name: "James Webb Space Telescope Primary Mirror",
    subtitle: "A golden honeycomb peering into the origins of the universe",
    category_id: "engineering",
    description:
      "The JWST's primary mirror is 6.5 meters across, made of 18 hexagonal beryllium segments coated with a microscopic layer of gold. Each segment can be individually adjusted to within 10 nanometers. The total mass of gold used is only about 48 grams, roughly enough to make two wedding rings. The mirror had to fold origami-style to fit inside its rocket.",
    search_terms: "jwst|james webb|mirror|telescope|beryllium|gold|space telescope|nasa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Mirror diameter", value: 6.5, si_unit: "m" },
      { dimension: "area", label: "Collecting area", value: 25.4, si_unit: "m^2" },
      { dimension: "mass", label: "Mirror mass", value: 705, si_unit: "kg" },
      { dimension: "mass", label: "Gold coating total mass", value: 0.048, si_unit: "kg", note: "About 48 grams" },
      { dimension: "length", label: "Gold coating thickness", value: 1.0e-7, si_unit: "m", note: "100 nanometers" },
      { dimension: "length", label: "Segment alignment precision", value: 1.0e-8, si_unit: "m", note: "10 nanometers" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MEDICINE & BIOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "white-blood-cell",
    name: "White Blood Cell",
    subtitle: "Your immune system's front-line soldier",
    category_id: "medicine",
    description:
      "White blood cells (leukocytes) are the mobile defense force of the immune system. A typical neutrophil is about 12-15 micrometers in diameter and lives only 5-90 hours before being replaced. Your body produces about 100 billion new white blood cells every day. They can squeeze through gaps between cells to reach sites of infection, like tiny biological commandos.",
    search_terms: "white blood cell|leukocyte|immune system|neutrophil|wbc|blood|immune",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (neutrophil)", value: 1.3e-5, si_unit: "m", note: "13 micrometers" },
      { dimension: "mass", label: "Mass of single cell", value: 1.0e-12, si_unit: "kg", note: "About 1 nanogram" },
      { dimension: "volume", label: "Cell volume", value: 3.0e-16, si_unit: "m^3", note: "About 300 femtoliters" },
      { dimension: "speed", label: "Migration speed", value: 3.3e-7, si_unit: "m/s", note: "About 20 micrometers per minute" },
      { dimension: "time", label: "Lifespan (neutrophil)", value: 259200, si_unit: "s", note: "About 3 days average" },
    ],
  },
  {
    slug: "covid-19-virus",
    name: "SARS-CoV-2 (COVID-19 Virus)",
    subtitle: "The 100-nanometer particle that shut down the world",
    category_id: "medicine",
    description:
      "SARS-CoV-2 is a spherical virus about 100 nanometers in diameter, studded with distinctive spike proteins that give coronaviruses their crown-like appearance. It contains about 30,000 base pairs of RNA, making it one of the largest RNA viruses known. A single infected person can harbor billions of viral particles at peak infection.",
    search_terms: "covid|coronavirus|sars-cov-2|virus|pandemic|spike protein|rna virus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 1.0e-7, si_unit: "m", note: "100 nanometers" },
      { dimension: "length", label: "Spike protein length", value: 2.0e-8, si_unit: "m", note: "About 20 nm" },
      { dimension: "mass", label: "Virion mass", value: 1.0e-18, si_unit: "kg", note: "About 1 femtogram" },
      { dimension: "data", label: "Genome size", value: 30000, si_unit: "B", note: "29,903 nucleotides" },
      { dimension: "time", label: "Incubation period (median)", value: 432000, si_unit: "s", note: "About 5 days" },
      { dimension: "temperature", label: "Inactivation temperature", value: 329, si_unit: "K", note: "56 degrees C for 30 minutes" },
    ],
  },
  {
    slug: "human-hair-strand",
    name: "Human Hair (Single Strand)",
    subtitle: "A cylinder of dead keratin you obsess over daily",
    category_id: "medicine",
    description:
      "A single strand of human hair is about 70 micrometers in diameter, which is roughly the width of the thinnest sewing needle. Hair grows at about 1.25 cm per month, or roughly 15 cm per year. A single strand can support about 100 grams of weight. Your head has about 100,000 hairs, giving your scalp a combined tensile strength capable of supporting two elephants.",
    search_terms: "hair|human hair|strand|keratin|follicle|scalp|growth",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 7.0e-5, si_unit: "m", note: "70 micrometers" },
      { dimension: "speed", label: "Growth rate", value: 4.8e-9, si_unit: "m/s", note: "About 15 cm per year" },
      { dimension: "force", label: "Tensile strength per strand", value: 0.98, si_unit: "N", note: "Supports about 100 g" },
      { dimension: "mass", label: "Mass per cm", value: 6.2e-7, si_unit: "kg", note: "About 62 micrograms" },
      { dimension: "length", label: "Average head hair length (untrimmed)", value: 0.90, si_unit: "m", note: "Terminal length before falling out" },
    ],
  },
  {
    slug: "fingernail-growth",
    name: "Fingernail Growth (Per Day)",
    subtitle: "The slowest show on your body",
    category_id: "medicine",
    description:
      "Human fingernails grow at an average rate of about 3.47 mm per month, or roughly 0.1 mm per day. That is about 1 nanometer per second. Your middle finger nail grows fastest, and your thumbnail grows slowest. Fingernails grow about twice as fast as toenails. It takes about 6 months to grow an entirely new fingernail.",
    search_terms: "fingernail|nail growth|keratin|growth rate|nails|human body",
    featured: 0,
    measurements: [
      { dimension: "speed", label: "Growth rate", value: 1.16e-9, si_unit: "m/s", note: "About 0.1 mm per day" },
      { dimension: "length", label: "Daily growth", value: 1.0e-4, si_unit: "m", note: "0.1 mm per day" },
      { dimension: "length", label: "Nail thickness", value: 5.0e-4, si_unit: "m", note: "About 0.5 mm" },
      { dimension: "time", label: "Full regrowth time", value: 1.555e7, si_unit: "s", note: "About 6 months" },
      { dimension: "length", label: "Nail width (middle finger)", value: 0.014, si_unit: "m", note: "About 14 mm" },
    ],
  },
  {
    slug: "aspirin-tablet",
    name: "Aspirin Tablet (Standard 325mg)",
    subtitle: "The wonder drug that is older than its own company",
    category_id: "medicine",
    description:
      "A standard aspirin tablet contains 325 mg of acetylsalicylic acid pressed into a disc about 12 mm in diameter. Aspirin was first synthesized by Bayer in 1897 and remains one of the most widely used medications in the world, with an estimated 40,000 tonnes consumed annually. It thins blood, reduces fever, eases pain, and may help prevent heart attacks.",
    search_terms: "aspirin|acetylsalicylic acid|tablet|pill|pain relief|bayer|medicine",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tablet diameter", value: 0.012, si_unit: "m", note: "12 mm" },
      { dimension: "length", label: "Tablet thickness", value: 0.004, si_unit: "m", note: "4 mm" },
      { dimension: "mass", label: "Tablet total mass", value: 5.0e-4, si_unit: "kg", note: "About 500 mg with binders" },
      { dimension: "mass", label: "Active ingredient mass", value: 3.25e-4, si_unit: "kg", note: "325 mg" },
      { dimension: "time", label: "Onset of action", value: 1800, si_unit: "s", note: "About 30 minutes" },
    ],
  },
  {
    slug: "syringe-needle-standard",
    name: "Syringe Needle (Standard 22-gauge)",
    subtitle: "A hollow tube thinner than a strand of spaghetti",
    category_id: "medicine",
    description:
      "A standard 22-gauge hypodermic needle has an outer diameter of 0.718 mm and an inner diameter of 0.413 mm. The needle's tip is ground at a precise angle to minimize tissue damage during insertion. Modern needles are coated with a thin layer of silicone to reduce friction. Despite being feared by many, the needle's design is an elegant piece of precision engineering.",
    search_terms: "needle|syringe|hypodermic|injection|22 gauge|medical|vaccination",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Outer diameter", value: 7.18e-4, si_unit: "m", note: "22-gauge: 0.718 mm" },
      { dimension: "length", label: "Inner diameter", value: 4.13e-4, si_unit: "m", note: "0.413 mm bore" },
      { dimension: "length", label: "Standard length", value: 0.025, si_unit: "m", note: "25 mm (1 inch)" },
      { dimension: "length", label: "Wall thickness", value: 1.525e-4, si_unit: "m", note: "0.1525 mm" },
      { dimension: "mass", label: "Needle mass", value: 0.001, si_unit: "kg", note: "About 1 gram" },
    ],
  },
  {
    slug: "bacteria-staphylococcus",
    name: "Staphylococcus aureus",
    subtitle: "The golden grape-shaped germ on your skin right now",
    category_id: "medicine",
    description:
      "Staphylococcus aureus is a spherical bacterium about 1 micrometer in diameter that lives on the skin and in the noses of about 30% of people without causing any problems. When it gets into wounds, however, it can cause serious infections. Its name means 'golden grape berry,' referring to its round shape and yellowish colonies. MRSA strains of this bacterium are resistant to most antibiotics.",
    search_terms: "staphylococcus|staph|bacteria|mrsa|infection|skin|pathogen|aureus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell diameter", value: 1.0e-6, si_unit: "m", note: "1 micrometer" },
      { dimension: "mass", label: "Cell mass", value: 1.0e-15, si_unit: "kg", note: "About 1 picogram" },
      { dimension: "volume", label: "Cell volume", value: 5.24e-19, si_unit: "m^3", note: "About 0.524 femtoliters" },
      { dimension: "time", label: "Division time", value: 1800, si_unit: "s", note: "About 30 minutes in ideal conditions" },
      { dimension: "data", label: "Genome size", value: 2810000, si_unit: "B", note: "2.81 million base pairs" },
    ],
  },
  {
    slug: "platelet-blood",
    name: "Blood Platelet",
    subtitle: "The body's tiny emergency repair crew",
    category_id: "medicine",
    description:
      "Platelets are the smallest cells in your blood at just 2-3 micrometers in diameter. They are disc-shaped fragments released by megakaryocytes in bone marrow, and your blood contains about 150,000 to 400,000 per microliter. When you get a cut, platelets rush to the site and stick together to form a plug, initiating the clotting cascade that stops bleeding.",
    search_terms: "platelet|thrombocyte|blood|clotting|coagulation|hemostasis",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 2.5e-6, si_unit: "m", note: "2-3 micrometers" },
      { dimension: "length", label: "Thickness", value: 5.0e-7, si_unit: "m", note: "0.5 micrometers (disc-shaped)" },
      { dimension: "volume", label: "Cell volume", value: 8.0e-18, si_unit: "m^3", note: "About 8 femtoliters" },
      { dimension: "mass", label: "Cell mass", value: 8.0e-15, si_unit: "kg", note: "About 8 picograms" },
      { dimension: "time", label: "Lifespan", value: 777600, si_unit: "s", note: "About 8-10 days" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MUSICAL INSTRUMENTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "stradivarius-violin",
    name: "Stradivarius Violin",
    subtitle: "The most valuable musical instruments ever made",
    category_id: "instruments",
    description:
      "Antonio Stradivari made about 1,100 instruments in Cremona, Italy, between 1666 and 1737, of which about 650 survive. A Stradivarius violin weighs about 460 grams and has a body length of 35.5 cm. Scientists have spent centuries trying to explain their legendary sound quality, blaming everything from the wood's density to a mini ice age that affected tree growth.",
    search_terms: "stradivarius|stradivari|violin|cremona|classical|string instrument|valuable",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.355, si_unit: "m", note: "35.5 cm" },
      { dimension: "length", label: "Total length (with scroll)", value: 0.595, si_unit: "m" },
      { dimension: "length", label: "Upper bout width", value: 0.168, si_unit: "m" },
      { dimension: "length", label: "Lower bout width", value: 0.208, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.460, si_unit: "kg" },
      { dimension: "frequency", label: "Open G string", value: 196, si_unit: "Hz" },
      { dimension: "frequency", label: "Open A string (concert pitch)", value: 440, si_unit: "Hz" },
    ],
  },
  {
    slug: "concert-grand-harp",
    name: "Concert Grand Harp",
    subtitle: "47 strings, 7 pedals, and pure ethereal sound",
    category_id: "instruments",
    description:
      "A concert grand pedal harp stands about 1.85 meters tall, has 47 strings spanning 6.5 octaves, and weighs around 36 kg. Its 7 pedals each have three positions that mechanically alter string length, allowing the harpist to play in any key. The total string tension is about 730 kg, which is why the column and frame must be incredibly strong.",
    search_terms: "harp|concert harp|pedal harp|orchestra|strings|classical|instrument",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.85, si_unit: "m" },
      { dimension: "length", label: "Depth (soundboard to pillar)", value: 1.0, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 36, si_unit: "kg" },
      { dimension: "force", label: "Total string tension", value: 7160, si_unit: "N", note: "About 730 kg equivalent" },
      { dimension: "frequency", label: "Lowest note (C1)", value: 32.7, si_unit: "Hz" },
      { dimension: "frequency", label: "Highest note (G7)", value: 3136, si_unit: "Hz" },
    ],
  },
  {
    slug: "drum-kit-standard",
    name: "Drum Kit (Standard 5-Piece)",
    subtitle: "The heartbeat of rock and roll",
    category_id: "instruments",
    description:
      "A standard 5-piece drum kit consists of a bass drum, snare drum, two mounted toms, a floor tom, a hi-hat, and a ride cymbal. The bass drum is the largest piece at about 56 cm in diameter. A full kit with hardware and cymbals weighs roughly 30-45 kg. Drummers are technically playing four independent rhythms simultaneously with all four limbs.",
    search_terms: "drums|drum kit|percussion|snare|bass drum|cymbals|drummer",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Bass drum diameter", value: 0.559, si_unit: "m", note: "22 inches" },
      { dimension: "length", label: "Snare drum diameter", value: 0.356, si_unit: "m", note: "14 inches" },
      { dimension: "length", label: "Floor tom diameter", value: 0.406, si_unit: "m", note: "16 inches" },
      { dimension: "mass", label: "Total kit weight (with hardware)", value: 38, si_unit: "kg" },
      { dimension: "area", label: "Floor space needed", value: 4.5, si_unit: "m^2", note: "Minimum setup area" },
      { dimension: "frequency", label: "Bass drum fundamental", value: 60, si_unit: "Hz", note: "Approximate" },
      { dimension: "frequency", label: "Snare drum fundamental", value: 200, si_unit: "Hz", note: "Approximate" },
    ],
  },
  {
    slug: "trumpet-bb",
    name: "Trumpet (Bb)",
    subtitle: "1.4 meters of tubing coiled into portable brilliance",
    category_id: "instruments",
    description:
      "A standard Bb trumpet consists of about 1.4 meters of brass tubing coiled into a compact instrument about 49 cm long. It has three piston valves that open additional tubing lengths to lower the pitch. Despite having only three valves, a skilled player can produce the full chromatic scale. The bell flare at the end acts as an acoustic impedance matcher.",
    search_terms: "trumpet|brass|bb trumpet|horn|orchestra|jazz|valves|brass instrument",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 0.49, si_unit: "m" },
      { dimension: "length", label: "Total tubing length (uncoiled)", value: 1.4, si_unit: "m" },
      { dimension: "length", label: "Bell diameter", value: 0.123, si_unit: "m", note: "About 4.84 inches" },
      { dimension: "mass", label: "Weight", value: 1.1, si_unit: "kg" },
      { dimension: "frequency", label: "Lowest note (written F#3)", value: 185, si_unit: "Hz", note: "Concert E3" },
      { dimension: "frequency", label: "Concert Bb4 (open)", value: 466.2, si_unit: "Hz" },
      { dimension: "length", label: "Bore diameter", value: 0.01166, si_unit: "m", note: "0.459 inches" },
    ],
  },
  {
    slug: "steinway-concert-grand-d",
    name: "Steinway Model D Concert Grand",
    subtitle: "The instrument against which all pianos are measured",
    category_id: "instruments",
    description:
      "The Steinway Model D concert grand piano is 2.74 meters long and contains 243 strings under a combined tension of about 20 tonnes. It has 88 keys and over 12,000 individual parts. About 98% of concert pianists choose a Steinway for their performances. Each one takes about a year to build and requires the hides of 12 to 18 animals for the felt hammers alone.",
    search_terms: "steinway|concert grand|piano|model d|keyboard|classical music",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2.74, si_unit: "m", note: "8 feet 11.75 inches" },
      { dimension: "length", label: "Width", value: 1.57, si_unit: "m" },
      { dimension: "length", label: "Height (lid open)", value: 1.02, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 480, si_unit: "kg", note: "About 1,060 pounds" },
      { dimension: "force", label: "Total string tension", value: 196000, si_unit: "N", note: "About 20 tonnes" },
      { dimension: "frequency", label: "Lowest note (A0)", value: 27.5, si_unit: "Hz" },
      { dimension: "frequency", label: "Highest note (C8)", value: 4186, si_unit: "Hz" },
    ],
  },
  {
    slug: "concert-tuba",
    name: "Concert Tuba (CC)",
    subtitle: "The largest brass instrument in the orchestra",
    category_id: "instruments",
    description:
      "A CC concert tuba has about 5.5 meters of coiled brass tubing and a bell that can be over 45 cm in diameter. It is the lowest-pitched standard orchestral brass instrument, able to produce notes below the range of human speech. Despite weighing up to 14 kg, tuba players in marching bands carry them while walking for hours.",
    search_terms: "tuba|brass|orchestra|low brass|cc tuba|sousaphone|bass",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total tubing length (uncoiled)", value: 5.5, si_unit: "m" },
      { dimension: "length", label: "Bell diameter", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Overall height", value: 1.05, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 12, si_unit: "kg", note: "Varies 9-14 kg" },
      { dimension: "frequency", label: "Lowest note (pedal CC)", value: 32.7, si_unit: "Hz" },
      { dimension: "frequency", label: "Comfortable low range (C2)", value: 65.4, si_unit: "Hz" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE FOOD (existing category)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "whole-pizza-large",
    name: "Pizza (Whole, Large 16-inch)",
    subtitle: "The circular food that launched a thousand arguments",
    category_id: "food",
    description:
      "A standard large pizza is 16 inches (40.6 cm) in diameter and is typically cut into 8 slices. A cheese pizza weighs about 900 grams, while a loaded supreme can top 1.5 kg. Americans eat about 3 billion pizzas per year, which works out to roughly 23 pounds of pizza per person annually. The debate over pineapple as a topping remains unresolved.",
    search_terms: "pizza|whole pizza|large pizza|pepperoni|cheese pizza|pie|italian",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.406, si_unit: "m", note: "16 inches" },
      { dimension: "area", label: "Surface area", value: 0.1295, si_unit: "m^2" },
      { dimension: "length", label: "Crust thickness", value: 0.015, si_unit: "m", note: "Hand-tossed" },
      { dimension: "mass", label: "Weight (cheese)", value: 0.9, si_unit: "kg" },
      { dimension: "energy", label: "Total calories", value: 8.786e6, si_unit: "J", note: "About 2,100 kcal" },
      { dimension: "temperature", label: "Ideal oven temperature", value: 533, si_unit: "K", note: "260 degrees C" },
    ],
  },
  {
    slug: "french-baguette",
    name: "Baguette",
    subtitle: "The quintessential French bread",
    category_id: "food",
    description:
      "A traditional French baguette is about 65 cm long and weighs 250 grams by law (in France). The 'Bread Decree' of 1993 specifies that a traditional baguette can only contain flour, water, yeast, and salt. French bakers produce about 10 billion baguettes per year. The crust should crackle when you squeeze it.",
    search_terms: "baguette|french bread|bread|bakery|france|crusty bread|loaf",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.65, si_unit: "m", note: "Standard baguette" },
      { dimension: "length", label: "Diameter", value: 0.06, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.250, si_unit: "kg", note: "250 g by French law" },
      { dimension: "energy", label: "Calories", value: 3.054e6, si_unit: "J", note: "About 730 kcal" },
      { dimension: "temperature", label: "Baking temperature", value: 503, si_unit: "K", note: "230 degrees C" },
    ],
  },
  {
    slug: "sushi-roll-maki",
    name: "Sushi Roll (Maki, 8-piece)",
    subtitle: "Rice, fish, and seaweed in perfect harmony",
    category_id: "food",
    description:
      "A standard maki sushi roll consists of vinegared rice, nori (seaweed), and a filling, typically rolled into a cylinder about 3 cm in diameter and cut into 6-8 pieces. Each piece weighs about 25-40 grams. Sushi originated as a way to preserve fish in fermented rice in Southeast Asia, and the version we know today developed in Edo-period Tokyo.",
    search_terms: "sushi|maki|roll|japanese food|nori|rice|fish|sushi roll",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Roll length (before cutting)", value: 0.20, si_unit: "m" },
      { dimension: "length", label: "Roll diameter", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Total roll weight", value: 0.230, si_unit: "kg", note: "8 pieces total" },
      { dimension: "mass", label: "Single piece weight", value: 0.029, si_unit: "kg" },
      { dimension: "energy", label: "Calories (8 pieces)", value: 1.172e6, si_unit: "J", note: "About 280 kcal (salmon maki)" },
    ],
  },
  {
    slug: "taco-standard",
    name: "Taco (Standard Hard Shell)",
    subtitle: "A handheld flavor delivery system",
    category_id: "food",
    description:
      "A standard hard-shell taco uses a corn tortilla about 13 cm in diameter, folded and filled with seasoned meat, lettuce, cheese, and salsa. A loaded taco weighs about 150-200 grams. Americans eat approximately 4.5 billion tacos per year. The hard-shell taco is actually a Tex-Mex invention; traditional Mexican tacos use soft tortillas.",
    search_terms: "taco|mexican food|tortilla|hard shell|beef taco|tex-mex",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Shell length", value: 0.13, si_unit: "m" },
      { dimension: "length", label: "Shell height", value: 0.07, si_unit: "m" },
      { dimension: "mass", label: "Weight (loaded)", value: 0.170, si_unit: "kg" },
      { dimension: "energy", label: "Calories", value: 7.53e5, si_unit: "J", note: "About 180 kcal" },
      { dimension: "mass", label: "Shell weight (empty)", value: 0.014, si_unit: "kg" },
    ],
  },
  {
    slug: "ice-cream-cone-single",
    name: "Ice Cream Cone (Single Scoop)",
    subtitle: "A waffle structure supporting frozen happiness",
    category_id: "food",
    description:
      "A single scoop of ice cream on a sugar cone weighs about 130-150 grams total. The standard scoop is about 6 cm in diameter and contains roughly 140 calories. Ice cream must contain at least 10% milkfat by US law. The cone was popularized at the 1904 St. Louis World's Fair when an ice cream vendor ran out of dishes and a neighboring waffle maker rolled his waffles into cones.",
    search_terms: "ice cream|cone|scoop|dessert|frozen|waffle cone|gelato",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total height (cone + scoop)", value: 0.18, si_unit: "m" },
      { dimension: "length", label: "Scoop diameter", value: 0.06, si_unit: "m" },
      { dimension: "mass", label: "Total weight", value: 0.140, si_unit: "kg" },
      { dimension: "volume", label: "Scoop volume", value: 1.2e-4, si_unit: "m^3", note: "About 120 mL" },
      { dimension: "energy", label: "Calories", value: 5.86e5, si_unit: "J", note: "About 140 kcal (vanilla)" },
      { dimension: "temperature", label: "Serving temperature", value: 261, si_unit: "K", note: "About -12 degrees C" },
    ],
  },
  {
    slug: "apple-medium",
    name: "Apple (Medium)",
    subtitle: "The fruit that inspired Newton and bankrupted Snow White",
    category_id: "food",
    description:
      "A medium apple is about 7.5 cm in diameter and weighs roughly 182 grams. It contains about 95 calories and provides 14% of your daily vitamin C. There are over 7,500 apple varieties grown worldwide. The apple is actually a member of the rose family. If you planted an apple seed, the resulting tree would produce fruit nothing like the original apple.",
    search_terms: "apple|fruit|red apple|gala|fuji|granny smith|orchard",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.075, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.068, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.182, si_unit: "kg" },
      { dimension: "energy", label: "Calories", value: 3.975e5, si_unit: "J", note: "About 95 kcal" },
      { dimension: "volume", label: "Volume", value: 2.4e-4, si_unit: "m^3", note: "About 240 mL" },
    ],
  },
  {
    slug: "avocado",
    name: "Avocado (Hass)",
    subtitle: "The millennial superfood that guac-ed the world",
    category_id: "food",
    description:
      "A Hass avocado weighs about 170 grams and contains roughly 234 calories, most of which come from healthy monounsaturated fats. All Hass avocados are descendants of a single tree grown by postal worker Rudolph Hass in La Habra Heights, California in the 1920s. That original mother tree died in 2002, but not before its offspring conquered the global produce aisle.",
    search_terms: "avocado|hass|guacamole|fruit|superfood|healthy fat|toast",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.10, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.065, si_unit: "m" },
      { dimension: "mass", label: "Weight (whole)", value: 0.170, si_unit: "kg" },
      { dimension: "mass", label: "Pit weight", value: 0.035, si_unit: "kg" },
      { dimension: "energy", label: "Calories", value: 9.79e5, si_unit: "J", note: "About 234 kcal" },
    ],
  },
  {
    slug: "chicken-nugget",
    name: "Chicken Nugget",
    subtitle: "A breaded cube of processed poultry nostalgia",
    category_id: "food",
    description:
      "A single chicken nugget weighs about 17 grams and contains roughly 45 calories. The chicken nugget was invented by Robert C. Baker at Cornell University in 1963. McDonald's introduced their Chicken McNuggets in 1983, and they come in exactly four shapes: the bell, the boot, the ball, and the bone. Americans eat about 2.3 billion pounds of chicken nuggets per year.",
    search_terms: "chicken nugget|mcnuggets|nugget|fried chicken|fast food|processed",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.045, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.015, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.017, si_unit: "kg" },
      { dimension: "energy", label: "Calories (single)", value: 1.884e5, si_unit: "J", note: "About 45 kcal" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE ANIMALS (existing categories)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "veiled-chameleon",
    name: "Veiled Chameleon",
    subtitle: "A tree-dwelling color-shifting sharpshooter",
    category_id: "small-animals",
    description:
      "The veiled chameleon can change color in seconds, rotate each eye independently through 180 degrees, and launch its tongue at prey at accelerations exceeding 40 g. The tongue is roughly twice its body length. Males grow to about 60 cm from nose to tail. Despite the popular myth, chameleons change color primarily for communication and temperature regulation, not camouflage.",
    search_terms: "chameleon|veiled chameleon|reptile|color change|lizard|yemen chameleon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (male)", value: 0.60, si_unit: "m" },
      { dimension: "length", label: "Body length (no tail)", value: 0.30, si_unit: "m" },
      { dimension: "mass", label: "Weight (male)", value: 0.170, si_unit: "kg" },
      { dimension: "speed", label: "Tongue strike speed", value: 5.0, si_unit: "m/s", note: "Peak, about 40g acceleration" },
      { dimension: "length", label: "Tongue length", value: 0.60, si_unit: "m", note: "About 2x body length" },
      { dimension: "time", label: "Color change time", value: 20, si_unit: "s", note: "Full color shift" },
    ],
  },
  {
    slug: "pangolin",
    name: "Pangolin (Sunda)",
    subtitle: "The world's most trafficked mammal",
    category_id: "small-animals",
    description:
      "The Sunda pangolin is covered in about 1,000 overlapping keratin scales that make up about 20% of its body weight. When threatened, it curls into a tight ball that can withstand a lion's bite. It has no teeth and uses a tongue up to 40 cm long to eat ants and termites. Pangolins are the only truly scaly mammals, and they are critically endangered due to illegal wildlife trade.",
    search_terms: "pangolin|scaly anteater|scales|endangered|trafficked|mammal|sunda",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.50, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.35, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 4.5, si_unit: "kg" },
      { dimension: "length", label: "Tongue length", value: 0.40, si_unit: "m" },
      { dimension: "length", label: "Scale length", value: 0.05, si_unit: "m", note: "Largest scales" },
      { dimension: "speed", label: "Walking speed", value: 0.83, si_unit: "m/s", note: "About 3 km/h" },
    ],
  },
  {
    slug: "komodo-dragon",
    name: "Komodo Dragon",
    subtitle: "The world's largest living lizard",
    category_id: "large-land-animals",
    description:
      "The Komodo dragon can grow up to 3 meters long and weigh over 70 kg. It is the apex predator on the few Indonesian islands where it lives. Its bite delivers venom that prevents blood clotting, and it can detect carrion from up to 9.5 km away. Despite its bulk, a Komodo dragon can sprint at 20 km/h in short bursts. About 3,000 remain in the wild.",
    search_terms: "komodo dragon|komodo|lizard|monitor lizard|indonesia|reptile|varanus",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (large male)", value: 3.0, si_unit: "m" },
      { dimension: "mass", label: "Weight (large male)", value: 70, si_unit: "kg" },
      { dimension: "speed", label: "Sprint speed", value: 5.6, si_unit: "m/s", note: "About 20 km/h" },
      { dimension: "length", label: "Tongue length", value: 0.30, si_unit: "m" },
      { dimension: "force", label: "Bite force", value: 600, si_unit: "N", note: "About 60 kgf" },
      { dimension: "time", label: "Lifespan", value: 9.46e8, si_unit: "s", note: "About 30 years" },
    ],
  },
  {
    slug: "snow-leopard",
    name: "Snow Leopard",
    subtitle: "The ghost cat of the high mountains",
    category_id: "large-land-animals",
    description:
      "The snow leopard lives at elevations between 3,000 and 5,500 meters across the mountain ranges of Central Asia. Its tail is nearly as long as its body and is used for balance and as a blanket in extreme cold. Snow leopards can leap up to 15 meters horizontally and have nasal passages that warm frigid air before it reaches their lungs. About 4,000-6,500 remain in the wild.",
    search_terms: "snow leopard|leopard|big cat|mountain|central asia|endangered|ghost cat",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.15, si_unit: "m", note: "Head to base of tail" },
      { dimension: "length", label: "Tail length", value: 1.0, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 45, si_unit: "kg", note: "35-55 kg range" },
      { dimension: "length", label: "Maximum leap distance", value: 15, si_unit: "m", note: "Horizontal" },
      { dimension: "speed", label: "Running speed", value: 15.3, si_unit: "m/s", note: "About 55 km/h" },
      { dimension: "length", label: "Habitat altitude range", value: 5500, si_unit: "m", note: "Up to 5,500 m elevation" },
    ],
  },
  {
    slug: "common-chimpanzee",
    name: "Chimpanzee (Common)",
    subtitle: "Our closest living relative, sharing 98.7% of our DNA",
    category_id: "large-land-animals",
    description:
      "The common chimpanzee shares about 98.7% of its DNA with humans and can use tools, recognize itself in mirrors, learn sign language, and grieve for dead companions. Adult males stand about 1.2 meters tall and weigh 40-60 kg but are roughly 1.5 times stronger than a fit human of similar size. They live in complex social groups of up to 150 individuals.",
    search_terms: "chimpanzee|chimp|ape|primate|great ape|pan troglodytes|africa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 1.2, si_unit: "m" },
      { dimension: "length", label: "Arm span", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Weight (male)", value: 50, si_unit: "kg" },
      { dimension: "mass", label: "Brain mass", value: 0.384, si_unit: "kg" },
      { dimension: "speed", label: "Running speed", value: 11.1, si_unit: "m/s", note: "About 40 km/h" },
      { dimension: "time", label: "Lifespan", value: 1.26e9, si_unit: "s", note: "About 40 years in the wild" },
    ],
  },
  {
    slug: "bottlenose-dolphin",
    name: "Bottlenose Dolphin",
    subtitle: "The ocean's most charismatic intellect",
    category_id: "marine-life",
    description:
      "Bottlenose dolphins grow to about 2.5-3.8 meters long and can weigh up to 300 kg. They use echolocation to navigate and hunt, producing clicks at frequencies up to 130 kHz. Dolphins sleep with one half of their brain at a time, keeping one eye open. They can swim at speeds up to 35 km/h and have been observed using sponges as tools to protect their noses while foraging.",
    search_terms: "dolphin|bottlenose|cetacean|marine mammal|echolocation|flipper",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 250, si_unit: "kg" },
      { dimension: "speed", label: "Swimming speed", value: 9.7, si_unit: "m/s", note: "About 35 km/h burst" },
      { dimension: "frequency", label: "Echolocation frequency", value: 130000, si_unit: "Hz", note: "Up to 130 kHz" },
      { dimension: "mass", label: "Brain mass", value: 1.6, si_unit: "kg", note: "Larger than human brain" },
      { dimension: "time", label: "Breath-hold duration", value: 480, si_unit: "s", note: "Up to 8 minutes" },
      { dimension: "length", label: "Diving depth", value: 300, si_unit: "m" },
    ],
  },
  {
    slug: "common-octopus",
    name: "Common Octopus",
    subtitle: "Eight arms, three hearts, and a talent for escape",
    category_id: "marine-life",
    description:
      "The common octopus (Octopus vulgaris) has three hearts, blue blood, nine brains (one central and one in each arm), and can change color and texture in milliseconds. It can squeeze through any opening larger than its beak, which is the only hard part of its body. They are remarkably intelligent, capable of unscrewing jars, solving mazes, and recognizing individual humans.",
    search_terms: "octopus|cephalopod|tentacles|ink|marine|mollusk|eight arms",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Arm span", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Mantle length", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 5, si_unit: "kg", note: "Up to 10 kg" },
      { dimension: "speed", label: "Jet propulsion speed", value: 11, si_unit: "m/s", note: "About 40 km/h burst" },
      { dimension: "time", label: "Lifespan", value: 4.73e7, si_unit: "s", note: "About 1-2 years" },
      { dimension: "mass", label: "Brain mass", value: 0.0005, si_unit: "kg", note: "Central brain; total neural tissue much more" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE SPACE (existing category)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "iss-orbit",
    name: "ISS Orbit (Single Revolution)",
    subtitle: "A 90-minute trip around the entire planet",
    category_id: "space-other",
    description:
      "The International Space Station orbits Earth at an altitude of about 408 km, completing one full orbit every 92 minutes at a speed of 7.66 km/s. The crew sees 16 sunrises and 16 sunsets every day. Each orbit covers a ground track of about 40,000 km. Because of its speed, astronauts age very slightly slower than people on the ground due to time dilation.",
    search_terms: "iss orbit|space station orbit|orbital period|low earth orbit|leo",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Orbital altitude", value: 408000, si_unit: "m", note: "408 km above Earth" },
      { dimension: "speed", label: "Orbital velocity", value: 7660, si_unit: "m/s", note: "27,576 km/h" },
      { dimension: "time", label: "Orbital period", value: 5520, si_unit: "s", note: "92 minutes" },
      { dimension: "length", label: "Distance per orbit", value: 4.23e7, si_unit: "m", note: "About 42,300 km" },
      { dimension: "length", label: "Daily distance", value: 6.75e8, si_unit: "m", note: "About 675,000 km per day" },
    ],
  },
  {
    slug: "gps-satellite",
    name: "GPS Satellite (Block III)",
    subtitle: "The space robot that keeps you from getting lost",
    category_id: "spacecraft",
    description:
      "A GPS Block III satellite orbits at 20,200 km altitude and weighs about 2,160 kg. The GPS constellation consists of 31 active satellites, each broadcasting extremely precise atomic clock signals. Your phone calculates its position by measuring the time delay from at least four satellites. The system is accurate to about 30 cm in ideal conditions and is technically operated by the US Space Force.",
    search_terms: "gps|satellite|navigation|global positioning|block iii|orbit|space force",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Orbital altitude", value: 2.02e7, si_unit: "m", note: "20,200 km (medium Earth orbit)" },
      { dimension: "mass", label: "Launch mass", value: 2161, si_unit: "kg" },
      { dimension: "time", label: "Orbital period", value: 43080, si_unit: "s", note: "About 11 hours 58 minutes" },
      { dimension: "power", label: "Solar panel power", value: 4480, si_unit: "W" },
      { dimension: "time", label: "Design life", value: 4.73e8, si_unit: "s", note: "15 years" },
      { dimension: "speed", label: "Orbital velocity", value: 3870, si_unit: "m/s", note: "About 13,932 km/h" },
    ],
  },
  {
    slug: "neutron-star-teaspoon",
    name: "Neutron Star Material (1 Teaspoon)",
    subtitle: "A spoonful of star that weighs as much as a mountain",
    category_id: "space-other",
    description:
      "Neutron stars are so dense that a single teaspoon of their material would weigh about 6 billion tonnes on Earth. This is because neutron stars are essentially giant atomic nuclei, with the mass of about 1.4 Suns compressed into a sphere just 20 km across. The density is roughly 4 x 10^17 kg per cubic meter, or about 400 trillion times denser than water.",
    search_terms: "neutron star|density|teaspoon|star material|degenerate matter|pulsar",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Volume (1 teaspoon)", value: 5.0e-6, si_unit: "m^3", note: "5 mL" },
      { dimension: "mass", label: "Mass of 1 teaspoon", value: 2.0e12, si_unit: "kg", note: "About 2 billion tonnes" },
      { dimension: "length", label: "Typical neutron star radius", value: 10000, si_unit: "m", note: "About 10 km" },
      { dimension: "mass", label: "Typical neutron star mass", value: 2.78e30, si_unit: "kg", note: "About 1.4 solar masses" },
      { dimension: "force", label: "Surface gravity", value: 2.0e12, si_unit: "N", note: "Per kg, about 200 billion g" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE LANDMARKS (existing categories)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "leaning-tower-of-pisa",
    name: "Leaning Tower of Pisa",
    subtitle: "The world's most famous construction mistake",
    category_id: "ancient-structures",
    description:
      "The Tower of Pisa began leaning during construction in 1173 when the soft ground on one side compressed more than the other. It took 199 years to complete (partly because of wars and partly because nobody knew how to fix the lean). The tower is 56 meters tall on the low side and leans at about 3.97 degrees. Engineering work in the 2000s stabilized it for at least another 200 years.",
    search_terms: "leaning tower|pisa|tower|italy|tilted|medieval|bell tower|campanile",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (low side)", value: 55.86, si_unit: "m" },
      { dimension: "length", label: "Height (high side)", value: 56.67, si_unit: "m" },
      { dimension: "length", label: "Base diameter", value: 15.5, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 14500000, si_unit: "kg", note: "14,500 tonnes" },
      { dimension: "length", label: "Lean offset at top", value: 3.9, si_unit: "m", note: "From vertical" },
      { dimension: "time", label: "Age (as of 2026)", value: 2.69e10, si_unit: "s", note: "Started 1173, about 853 years" },
    ],
  },
  {
    slug: "tower-of-london",
    name: "Tower of London",
    subtitle: "Palace, prison, zoo, and home to the Crown Jewels",
    category_id: "ancient-structures",
    description:
      "The Tower of London was founded in 1066 by William the Conqueror and has served as a royal palace, fortress, prison, execution site, mint, and zoo. The White Tower at its center stands 27.4 meters tall. The complex covers about 4.9 hectares and is guarded by the Yeoman Warders, who share the grounds with at least six ravens. Legend says if the ravens ever leave, the kingdom will fall.",
    search_terms: "tower of london|white tower|crown jewels|fortress|london|medieval|beefeater",
    featured: 0,
    measurements: [
      { dimension: "length", label: "White Tower height", value: 27.4, si_unit: "m" },
      { dimension: "area", label: "Complex area", value: 49000, si_unit: "m^2", note: "About 4.9 hectares" },
      { dimension: "length", label: "Outer wall perimeter", value: 1000, si_unit: "m", note: "Approximate" },
      { dimension: "length", label: "White Tower length", value: 32.6, si_unit: "m" },
      { dimension: "length", label: "White Tower width", value: 36, si_unit: "m" },
      { dimension: "time", label: "Age (as of 2026)", value: 3.03e10, si_unit: "s", note: "Founded 1066, about 960 years" },
    ],
  },
  {
    slug: "hagia-sophia",
    name: "Hagia Sophia",
    subtitle: "A cathedral, a mosque, a museum, and a mosque again",
    category_id: "ancient-structures",
    description:
      "Hagia Sophia in Istanbul was the largest cathedral in the world for nearly a thousand years after its completion in 537 AD. Its central dome rises 55.6 meters above the floor and spans 31 meters. The building has survived earthquakes, sieges, and multiple religious conversions. Its architects, Isidore of Miletus and Anthemius of Tralles, were mathematicians, not architects.",
    search_terms: "hagia sophia|istanbul|cathedral|mosque|byzantine|dome|turkey|justinian",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Interior length", value: 82, si_unit: "m" },
      { dimension: "length", label: "Interior width", value: 73, si_unit: "m" },
      { dimension: "length", label: "Dome height above floor", value: 55.6, si_unit: "m" },
      { dimension: "length", label: "Dome diameter", value: 31, si_unit: "m" },
      { dimension: "area", label: "Interior floor area", value: 7570, si_unit: "m^2" },
      { dimension: "time", label: "Age (as of 2026)", value: 4.70e10, si_unit: "s", note: "Completed 537 AD, about 1,489 years" },
    ],
  },
  {
    slug: "notre-dame-de-paris",
    name: "Notre-Dame de Paris",
    subtitle: "The medieval cathedral that rose from the ashes",
    category_id: "ancient-structures",
    description:
      "Notre-Dame de Paris took 182 years to build (1163-1345) and is one of the finest examples of French Gothic architecture. The nave rises 33.5 meters, and the twin towers reach 69 meters. The 2019 fire destroyed the 96-meter spire and most of the lead roof, but the cathedral was reconstructed and reopened in December 2024. About 12 million people visited it annually before the fire.",
    search_terms: "notre dame|paris|cathedral|gothic|france|fire|reconstruction|gargoyle",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 128, si_unit: "m" },
      { dimension: "length", label: "Nave height", value: 33.5, si_unit: "m" },
      { dimension: "length", label: "Tower height", value: 69, si_unit: "m" },
      { dimension: "length", label: "Restored spire height", value: 96, si_unit: "m" },
      { dimension: "area", label: "Floor area", value: 5500, si_unit: "m^2" },
      { dimension: "time", label: "Age (as of 2026)", value: 2.72e10, si_unit: "s", note: "Started 1163, about 863 years" },
    ],
  },
  {
    slug: "big-ben-elizabeth-tower",
    name: "Big Ben (Elizabeth Tower)",
    subtitle: "London's iconic clock tower (Big Ben is actually the bell)",
    category_id: "towers",
    description:
      "The Elizabeth Tower at the Palace of Westminster stands 96 meters tall and houses the famous Great Bell, nicknamed Big Ben. The clock faces are 7 meters in diameter, and the minute hands are 4.3 meters long. The tower leans about 0.26 degrees to the northwest. Big Ben the bell weighs 13.76 tonnes and has been ringing on the hour since 1859, except during maintenance periods.",
    search_terms: "big ben|elizabeth tower|clock tower|london|westminster|parliament|bell",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tower height", value: 96, si_unit: "m" },
      { dimension: "length", label: "Clock face diameter", value: 7, si_unit: "m" },
      { dimension: "length", label: "Minute hand length", value: 4.3, si_unit: "m" },
      { dimension: "mass", label: "Great Bell (Big Ben) mass", value: 13760, si_unit: "kg" },
      { dimension: "frequency", label: "Bell strike note (E)", value: 329.6, si_unit: "Hz", note: "E4" },
      { dimension: "time", label: "Age (as of 2026)", value: 5.27e9, si_unit: "s", note: "Completed 1859, about 167 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE EVENTS (existing category)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "world-cup-final-2022",
    name: "2022 World Cup Final (Argentina vs France)",
    subtitle: "Possibly the greatest football match ever played",
    category_id: "events",
    description:
      "The 2022 FIFA World Cup Final between Argentina and France at Lusail Stadium in Qatar was watched by an estimated 1.5 billion viewers worldwide. The match featured a hat trick from Kylian Mbappe, two goals from Lionel Messi, and went to a penalty shootout. The stadium held 88,966 spectators. Argentina won 4-2 on penalties after a 3-3 draw.",
    search_terms: "world cup|final|2022|argentina|france|messi|mbappe|qatar|football|soccer",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Pitch area", value: 7140, si_unit: "m^2", note: "105 x 68 meters" },
      { dimension: "time", label: "Match duration (including extra time)", value: 7200, si_unit: "s", note: "120 minutes plus penalties" },
      { dimension: "energy", label: "Estimated player energy expenditure", value: 6.0e6, si_unit: "J", note: "About 1,400 kcal per player" },
      { dimension: "length", label: "Average player distance run", value: 11000, si_unit: "m", note: "About 11 km" },
      { dimension: "speed", label: "Mbappe top speed", value: 10.0, si_unit: "m/s", note: "About 36 km/h" },
    ],
  },
  {
    slug: "apollo-11-moon-landing",
    name: "Apollo 11 Moon Landing",
    subtitle: "July 20, 1969: humanity's greatest achievement",
    category_id: "events",
    description:
      "On July 20, 1969, Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon while Michael Collins orbited above. The entire mission lasted 8 days, 3 hours, and 18 minutes. Armstrong's first step was watched by an estimated 600 million people. The astronauts spent 21 hours 36 minutes on the lunar surface and collected 21.5 kg of moon rocks.",
    search_terms: "apollo 11|moon landing|neil armstrong|buzz aldrin|1969|nasa|lunar|first step",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Earth-Moon distance traveled", value: 3.844e8, si_unit: "m", note: "384,400 km" },
      { dimension: "time", label: "Total mission duration", value: 725580, si_unit: "s", note: "8 days 3 hours 18 minutes" },
      { dimension: "time", label: "Time on lunar surface", value: 77760, si_unit: "s", note: "21 hours 36 minutes" },
      { dimension: "mass", label: "Moon rocks collected", value: 21.5, si_unit: "kg" },
      { dimension: "speed", label: "Trans-lunar injection speed", value: 10840, si_unit: "m/s", note: "About 39,000 km/h" },
      { dimension: "length", label: "Distance walked on Moon", value: 250, si_unit: "m", note: "Approximate total EVA distance" },
    ],
  },
  {
    slug: "first-email-ever",
    name: "First Email (1971)",
    subtitle: "The message that started the inbox era",
    category_id: "events",
    description:
      "In late 1971, Ray Tomlinson sent the first email between two computers on ARPANET, using the @ symbol to separate the user name from the computer name. He later said the content was something like 'QWERTYUIOP' and was 'completely forgettable.' The two computers were side by side in the same room. Today, about 347 billion emails are sent per day worldwide.",
    search_terms: "first email|email|arpanet|ray tomlinson|1971|at sign|message|electronic mail",
    featured: 0,
    measurements: [
      { dimension: "data", label: "Approximate message size", value: 15, si_unit: "B", note: "About 15 characters" },
      { dimension: "length", label: "Distance between computers", value: 3, si_unit: "m", note: "Side by side in same room" },
      { dimension: "speed", label: "ARPANET transmission speed", value: 6250, si_unit: "m/s", note: "50 kbps over phone lines" },
      { dimension: "time", label: "Years since first email (2026)", value: 1.735e9, si_unit: "s", note: "About 55 years" },
      { dimension: "data", label: "Daily emails sent worldwide (2024)", value: 3.47e14, si_unit: "B", note: "347 billion emails, about 1 KB average" },
    ],
  },
  {
    slug: "woodstock-festival-1969",
    name: "Woodstock Festival (1969)",
    subtitle: "Three days of peace, music, and mud",
    category_id: "events",
    description:
      "The Woodstock Music and Art Fair took place from August 15-18, 1969, on Max Yasgur's dairy farm in Bethel, New York. About 400,000 people attended, far exceeding the expected 50,000. The festival covered about 240 hectares. It rained heavily, turning the grounds into a mud pit. Jimi Hendrix's closing performance of 'The Star-Spangled Banner' became one of the defining moments of the 1960s.",
    search_terms: "woodstock|festival|1969|music festival|hippie|jimi hendrix|bethel|concert",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Festival grounds area", value: 2400000, si_unit: "m^2", note: "About 240 hectares" },
      { dimension: "time", label: "Duration", value: 259200, si_unit: "s", note: "3 days" },
      { dimension: "length", label: "Stage width", value: 21, si_unit: "m", note: "About 70 feet" },
      { dimension: "mass", label: "Trash generated", value: 170000, si_unit: "kg", note: "Estimated 170 tonnes" },
      { dimension: "length", label: "Traffic jam on Route 17B", value: 32000, si_unit: "m", note: "About 20 miles" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL TECHNOLOGY ITEMS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "starlink-satellite",
    name: "Starlink Satellite (v2 Mini)",
    subtitle: "One of thousands forming a global internet constellation",
    category_id: "technology",
    description:
      "Each Starlink v2 Mini satellite weighs about 306 kg and orbits at 550 km altitude. SpaceX has launched over 6,000 of them, forming the largest satellite constellation in history. Each satellite uses krypton-ion thrusters for orbital maneuvering and provides broadband internet to ground stations. They are visible as a 'train' of lights shortly after launch.",
    search_terms: "starlink|satellite|spacex|internet|constellation|broadband|elon musk",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 306, si_unit: "kg" },
      { dimension: "length", label: "Orbital altitude", value: 550000, si_unit: "m", note: "550 km" },
      { dimension: "speed", label: "Orbital velocity", value: 7590, si_unit: "m/s", note: "About 27,324 km/h" },
      { dimension: "area", label: "Solar array area", value: 29, si_unit: "m^2", note: "Estimated" },
      { dimension: "power", label: "Power generation", value: 8000, si_unit: "W", note: "Estimated" },
      { dimension: "data", label: "Throughput per satellite", value: 2.5e9, si_unit: "B", note: "About 20 Gbps" },
    ],
  },
  {
    slug: "vr-headset-meta-quest-3",
    name: "Meta Quest 3",
    subtitle: "A portal to virtual worlds that fits on your face",
    category_id: "technology",
    description:
      "The Meta Quest 3 is a standalone VR headset weighing 515 grams that can render full virtual environments and overlay digital objects onto the real world through passthrough cameras. It has a Snapdragon XR2 Gen 2 processor, two LCD displays at 2064x2208 per eye, and inside-out tracking that maps your room in real time. It is essentially a powerful computer strapped to your face.",
    search_terms: "meta quest|vr|virtual reality|headset|oculus|mixed reality|quest 3",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.184, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.098, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.084, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.515, si_unit: "kg" },
      { dimension: "data", label: "Storage", value: 1.28e11, si_unit: "B", note: "128 GB" },
      { dimension: "time", label: "Battery life", value: 7200, si_unit: "s", note: "About 2 hours" },
      { dimension: "frequency", label: "Display refresh rate", value: 120, si_unit: "Hz" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL SCIENCE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "lightning-bolt",
    name: "Lightning Bolt (Typical)",
    subtitle: "300 million volts of atmospheric impatience",
    category_id: "science",
    description:
      "A typical lightning bolt is about 5 km long but only about 2-3 cm in diameter. It carries a peak current of about 30,000 amperes and heats the surrounding air to about 30,000 K, roughly five times the surface temperature of the Sun. A single bolt contains about 1 billion joules of energy, but because it lasts only milliseconds, you could not practically harvest it. Earth is struck by lightning about 8 million times per day.",
    search_terms: "lightning|bolt|thunder|storm|electricity|discharge|atmospheric",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical length", value: 5000, si_unit: "m" },
      { dimension: "length", label: "Channel diameter", value: 0.025, si_unit: "m", note: "2-3 cm" },
      { dimension: "temperature", label: "Channel temperature", value: 30000, si_unit: "K", note: "5x Sun's surface" },
      { dimension: "energy", label: "Energy per bolt", value: 1.0e9, si_unit: "J", note: "About 1 GJ" },
      { dimension: "time", label: "Duration", value: 0.0002, si_unit: "s", note: "About 0.2 milliseconds per return stroke" },
      { dimension: "power", label: "Peak power", value: 1.0e12, si_unit: "W", note: "About 1 terawatt briefly" },
    ],
  },
  {
    slug: "grain-of-sand",
    name: "Grain of Sand (Medium)",
    subtitle: "One of roughly 7.5 quintillion on Earth",
    category_id: "science",
    description:
      "A medium grain of sand is about 0.5 mm in diameter and weighs approximately 0.044 milligrams. It is mostly silicon dioxide (quartz) and was likely once part of a larger rock that was broken down by millions of years of weathering. There are estimated to be 7.5 x 10^18 grains of sand on Earth. Remarkably, there are more stars in the observable universe than grains of sand on all of Earth's beaches.",
    search_terms: "sand|grain|quartz|beach|silicon|dioxide|sediment",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (medium)", value: 5.0e-4, si_unit: "m", note: "0.5 mm" },
      { dimension: "mass", label: "Mass", value: 4.4e-8, si_unit: "kg", note: "0.044 mg" },
      { dimension: "volume", label: "Volume", value: 6.5e-11, si_unit: "m^3", note: "Assuming sphere" },
      { dimension: "area", label: "Surface area", value: 7.85e-7, si_unit: "m^2" },
      { dimension: "temperature", label: "Melting point (quartz)", value: 1986, si_unit: "K", note: "1713 degrees C" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL ENGINEERING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "voyager-golden-record",
    name: "Voyager Golden Record",
    subtitle: "Humanity's mixtape for the cosmos",
    category_id: "engineering",
    description:
      "The Voyager Golden Records are phonograph records that were included aboard both Voyager spacecraft in 1977. Each 12-inch gold-plated copper disc contains sounds and images selected to portray the diversity of life on Earth, including greetings in 55 languages, music from Bach to Chuck Berry, and the brainwaves of a woman in love. They will remain playable for at least a billion years.",
    search_terms: "voyager|golden record|disc|sounds of earth|nasa|interstellar|carl sagan",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.305, si_unit: "m", note: "12 inches" },
      { dimension: "mass", label: "Weight", value: 0.29, si_unit: "kg" },
      { dimension: "time", label: "Total audio content", value: 6840, si_unit: "s", note: "About 114 minutes per side" },
      { dimension: "data", label: "Encoded images", value: 1.44e7, si_unit: "B", note: "116 images, about 14 MB analog-equivalent" },
      { dimension: "length", label: "Current distance from Earth (2026)", value: 2.45e13, si_unit: "m", note: "Voyager 1, about 163 AU" },
      { dimension: "speed", label: "Voyager 1 speed", value: 17000, si_unit: "m/s", note: "About 61,200 km/h" },
    ],
  },
  {
    slug: "international-thermonuclear-experimental-reactor",
    name: "ITER Tokamak",
    subtitle: "The machine designed to bottle a star",
    category_id: "engineering",
    description:
      "ITER is an experimental fusion reactor being built in southern France by a consortium of 35 nations. The tokamak chamber will contain plasma heated to 150 million degrees Celsius, ten times hotter than the core of the Sun. It is designed to produce 500 MW of fusion power from 50 MW of input heating. When completed, it will be the largest magnetic confinement fusion device ever built.",
    search_terms: "iter|fusion|tokamak|reactor|plasma|nuclear fusion|france|energy",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tokamak height", value: 30, si_unit: "m" },
      { dimension: "length", label: "Tokamak diameter", value: 30, si_unit: "m" },
      { dimension: "mass", label: "Tokamak mass", value: 23000000, si_unit: "kg", note: "23,000 tonnes" },
      { dimension: "temperature", label: "Plasma temperature", value: 1.5e8, si_unit: "K", note: "150 million degrees C" },
      { dimension: "power", label: "Target fusion power output", value: 5.0e8, si_unit: "W", note: "500 MW" },
      { dimension: "power", label: "Input heating power", value: 5.0e7, si_unit: "W", note: "50 MW" },
    ],
  },
  {
    slug: "boring-company-tunnel",
    name: "Boring Company Tunnel (Las Vegas Loop)",
    subtitle: "Elon Musk's answer to traffic: just go underground",
    category_id: "engineering",
    description:
      "The Las Vegas Convention Center Loop is a 2.7 km underground transportation system consisting of twin tunnels with an interior diameter of 3.7 meters. Tesla vehicles carry passengers through the tunnels at up to 56 km/h. The tunnels were bored at a cost significantly lower than typical subway construction, though they also carry far fewer passengers per hour.",
    search_terms: "boring company|tunnel|las vegas|loop|underground|musk|transportation",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total tunnel length", value: 2700, si_unit: "m", note: "2.7 km" },
      { dimension: "length", label: "Tunnel interior diameter", value: 3.7, si_unit: "m" },
      { dimension: "speed", label: "Vehicle speed", value: 15.6, si_unit: "m/s", note: "About 56 km/h" },
      { dimension: "area", label: "Tunnel cross-section", value: 10.75, si_unit: "m^2" },
      { dimension: "length", label: "Depth below surface", value: 12, si_unit: "m", note: "Approximate" },
      { dimension: "time", label: "Transit time", value: 120, si_unit: "s", note: "About 2 minutes" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL COMPUTING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "floppy-disk-3-5-inch",
    name: 'Floppy Disk (3.5-inch)',
    subtitle: "The save icon's physical ancestor",
    category_id: "computing",
    description:
      "The 3.5-inch floppy disk, introduced by Sony in 1981, stored 1.44 MB on a flexible magnetic disc inside a rigid plastic shell. At its peak in the 1990s, billions were manufactured annually. Today it is best known as the 'save' icon in software, a reference that confuses anyone born after 2000. A single modern smartphone photo would require about 4 floppy disks.",
    search_terms: "floppy disk|floppy|diskette|3.5 inch|storage|save icon|retro",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.090, si_unit: "m", note: "90 mm (3.5 inches)" },
      { dimension: "length", label: "Depth", value: 0.094, si_unit: "m", note: "94 mm" },
      { dimension: "length", label: "Thickness", value: 0.0033, si_unit: "m", note: "3.3 mm" },
      { dimension: "mass", label: "Weight", value: 0.020, si_unit: "kg", note: "20 grams" },
      { dimension: "data", label: "Storage capacity", value: 1440000, si_unit: "B", note: "1.44 MB (HD format)" },
      { dimension: "frequency", label: "Disk rotation speed", value: 5, si_unit: "Hz", note: "300 RPM" },
    ],
  },
  {
    slug: "ethernet-cable-cat6",
    name: "Ethernet Cable (Cat 6, 1 meter)",
    subtitle: "The physical connection the WiFi generation forgot",
    category_id: "computing",
    description:
      "A standard Cat 6 Ethernet cable contains 8 copper conductors arranged in 4 twisted pairs inside a plastic jacket about 6 mm in diameter. It can carry data at up to 10 Gbps over short distances and 1 Gbps up to 100 meters. Each twist in the pairs reduces electromagnetic interference. Despite WiFi's dominance, wired connections still offer lower latency and more reliable speeds.",
    search_terms: "ethernet|cable|cat6|network|rj45|wired|lan|networking",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standard segment length", value: 1, si_unit: "m" },
      { dimension: "length", label: "Cable diameter", value: 0.006, si_unit: "m", note: "6 mm" },
      { dimension: "mass", label: "Weight per meter", value: 0.040, si_unit: "kg" },
      { dimension: "data", label: "Max throughput (10GBASE-T)", value: 1.25e9, si_unit: "B", note: "10 Gbps" },
      { dimension: "length", label: "Max recommended run", value: 100, si_unit: "m" },
      { dimension: "frequency", label: "Bandwidth", value: 2.5e8, si_unit: "Hz", note: "250 MHz" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL MEDICINE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "human-heart",
    name: "Human Heart",
    subtitle: "The tireless pump that never takes a day off",
    category_id: "medicine",
    description:
      "The human heart beats about 100,000 times per day, pumping roughly 7,500 liters of blood through about 96,000 km of blood vessels. It weighs about 300 grams and generates enough pressure to squirt blood nearly 10 meters. Over an average lifetime, it will beat about 2.5 billion times without maintenance, making it arguably the most reliable pump ever known.",
    search_terms: "heart|cardiac|pump|blood|cardiovascular|organ|heartbeat",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.085, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.310, si_unit: "kg" },
      { dimension: "frequency", label: "Resting heart rate", value: 1.17, si_unit: "Hz", note: "About 70 BPM" },
      { dimension: "volume", label: "Stroke volume", value: 7.0e-5, si_unit: "m^3", note: "About 70 mL per beat" },
      { dimension: "power", label: "Power output", value: 1.3, si_unit: "W" },
      { dimension: "pressure", label: "Systolic pressure", value: 16000, si_unit: "Pa", note: "About 120 mmHg" },
    ],
  },
  {
    slug: "mitochondrion",
    name: "Mitochondrion",
    subtitle: "The powerhouse of the cell (yes, really)",
    category_id: "medicine",
    description:
      "A mitochondrion is a tiny organelle about 1-10 micrometers long that generates most of the cell's ATP, the molecular fuel of life. Each human cell contains hundreds to thousands of mitochondria, and they have their own DNA, which is inherited exclusively from your mother. They are thought to have once been free-living bacteria that were engulfed by an ancestor of modern cells about 2 billion years ago.",
    search_terms: "mitochondria|mitochondrion|powerhouse|atp|organelle|cell|energy|biology",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 3.0e-6, si_unit: "m", note: "1-10 micrometers, typically 3" },
      { dimension: "length", label: "Diameter", value: 5.0e-7, si_unit: "m", note: "About 0.5 micrometers" },
      { dimension: "data", label: "Mitochondrial DNA", value: 16569, si_unit: "B", note: "16,569 base pairs" },
      { dimension: "mass", label: "Mass of single mitochondrion", value: 5.0e-16, si_unit: "kg", note: "About 0.5 picograms" },
      { dimension: "energy", label: "ATP molecules produced per second", value: 1.5e-17, si_unit: "J", note: "About 100 ATP/s, each worth 5e-20 J" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL INSTRUMENTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "grand-organ-notre-dame",
    name: "Grand Organ of Notre-Dame",
    subtitle: "8,000 pipes filling a cathedral with sound",
    category_id: "instruments",
    description:
      "The grand organ of Notre-Dame de Paris contains approximately 8,000 pipes, 5 manuals (keyboards), and 109 stops. The largest pipes are over 10 meters tall and produce frequencies below 16 Hz, which are felt more than heard. The organ survived the 2019 fire but required extensive cleaning to remove lead dust contamination. It was restored and played again at the cathedral's reopening in December 2024.",
    search_terms: "organ|pipe organ|notre dame|cathedral organ|church organ|pipes|keyboard",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Largest pipe height", value: 10, si_unit: "m", note: "32-foot pipes" },
      { dimension: "mass", label: "Total weight", value: 40000, si_unit: "kg", note: "Estimated 40 tonnes" },
      { dimension: "frequency", label: "Lowest note", value: 16, si_unit: "Hz", note: "Below audible range" },
      { dimension: "frequency", label: "Highest note", value: 12544, si_unit: "Hz" },
      { dimension: "length", label: "Smallest pipe length", value: 0.015, si_unit: "m", note: "About 15 mm" },
      { dimension: "power", label: "Blower motor power", value: 7500, si_unit: "W", note: "Multiple blowers" },
    ],
  },
  {
    slug: "classical-acoustic-guitar",
    name: "Classical Acoustic Guitar",
    subtitle: "Six strings stretched between craft and art",
    category_id: "instruments",
    description:
      "A classical guitar uses nylon strings (originally gut) over a body of spruce and rosewood. The standard scale length is 650 mm, and the body is about 48 cm at its widest. Torres-style classical guitars have been the standard since the 1860s. The instrument's sound hole is not actually where most of the sound comes from; it is the vibrating top plate that does the heavy lifting.",
    search_terms: "guitar|classical guitar|acoustic|nylon string|spanish guitar|flamenco",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1.00, si_unit: "m" },
      { dimension: "length", label: "Scale length", value: 0.650, si_unit: "m" },
      { dimension: "length", label: "Body width (lower bout)", value: 0.370, si_unit: "m" },
      { dimension: "length", label: "Body depth", value: 0.100, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 1.7, si_unit: "kg" },
      { dimension: "frequency", label: "Lowest note (E2)", value: 82.4, si_unit: "Hz" },
      { dimension: "frequency", label: "Highest practical note", value: 1047, si_unit: "Hz", note: "About C6" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL LITERATURE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "kindle-e-reader",
    name: "Kindle Paperwhite (2024)",
    subtitle: "A library of thousands that weighs less than a paperback",
    category_id: "literature",
    description:
      "The Kindle Paperwhite has a 7-inch e-ink display, weighs 205 grams, and can store thousands of books in 16 GB of memory. Its battery lasts up to 12 weeks on a single charge. The e-ink display reflects ambient light like real paper rather than emitting backlight like a phone screen. Amazon has sold over 100 million Kindle devices since the original launched in 2007.",
    search_terms: "kindle|e-reader|ebook|amazon|paperwhite|electronic book|e-ink",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.1761, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.1274, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.0081, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.205, si_unit: "kg" },
      { dimension: "data", label: "Storage", value: 1.6e10, si_unit: "B", note: "16 GB" },
      { dimension: "time", label: "Battery life", value: 7.26e6, si_unit: "s", note: "About 12 weeks" },
    ],
  },
  {
    slug: "dead-sea-scrolls",
    name: "Dead Sea Scrolls",
    subtitle: "The oldest known manuscripts of the Hebrew Bible",
    category_id: "literature",
    description:
      "The Dead Sea Scrolls are approximately 981 manuscripts discovered between 1947 and 1956 in caves near the Dead Sea. They date from the 3rd century BCE to the 1st century CE and include the oldest known copies of books of the Hebrew Bible. The Great Isaiah Scroll is 7.34 meters long. The scrolls were preserved by the extreme dryness of the Judean desert caves.",
    search_terms: "dead sea scrolls|qumran|hebrew bible|ancient|manuscript|parchment|israel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Great Isaiah Scroll length", value: 7.34, si_unit: "m" },
      { dimension: "length", label: "Scroll height", value: 0.26, si_unit: "m", note: "Great Isaiah Scroll" },
      { dimension: "time", label: "Age (oldest scrolls)", value: 7.25e10, si_unit: "s", note: "About 2,300 years" },
      { dimension: "mass", label: "Great Isaiah Scroll mass", value: 1.5, si_unit: "kg", note: "Estimated, parchment" },
      { dimension: "data", label: "Total text content (all scrolls)", value: 2.0e7, si_unit: "B", note: "Estimated 20 MB" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL ART
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "terracotta-army-full",
    name: "Terracotta Army (Complete Collection)",
    subtitle: "8,000 clay soldiers guarding a 2,200-year-old emperor",
    category_id: "art",
    description:
      "The Terracotta Army consists of approximately 8,000 soldiers, 670 horses, and 130 chariots buried with China's first emperor, Qin Shi Huang, around 210 BCE. Each soldier is unique, with individual facial features, hairstyles, and expressions. The warriors were originally painted in vivid colors that faded within minutes of excavation when exposed to air. Only about 2,000 have been fully excavated so far.",
    search_terms: "terracotta army|terracotta warriors|qin shi huang|china|xian|clay soldiers",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Warrior height (average)", value: 1.80, si_unit: "m" },
      { dimension: "mass", label: "Single warrior mass", value: 160, si_unit: "kg" },
      { dimension: "area", label: "Pit 1 area", value: 14260, si_unit: "m^2", note: "230 x 62 meters" },
      { dimension: "mass", label: "Estimated total mass (all figures)", value: 1.6e6, si_unit: "kg", note: "About 1,600 tonnes" },
      { dimension: "time", label: "Age (as of 2026)", value: 7.06e10, si_unit: "s", note: "About 2,236 years" },
    ],
  },
  {
    slug: "the-thinker-rodin-original",
    name: "The Thinker by Rodin (Original)",
    subtitle: "The world's most famous thoughtful pose",
    category_id: "art",
    description:
      "Auguste Rodin's The Thinker was originally conceived in 1880 as part of his Gates of Hell composition, depicting Dante contemplating his Inferno. The original plaster model was 71.5 cm tall. The larger, iconic bronze version stands 1.86 meters tall and weighs about 680 kg. Over 25 full-size bronze casts exist in museums worldwide, each one technically an 'original.'",
    search_terms: "the thinker|rodin|sculpture|bronze|thinking man|dante|gates of hell",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (large bronze)", value: 1.86, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.98, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 1.40, si_unit: "m" },
      { dimension: "mass", label: "Weight (bronze)", value: 680, si_unit: "kg" },
      { dimension: "time", label: "Age (as of 2026)", value: 4.60e9, si_unit: "s", note: "Conceived 1880, about 146 years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL FOOD
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "croissant",
    name: "Croissant",
    subtitle: "729 layers of buttery French engineering",
    category_id: "food",
    description:
      "A classic French croissant is made by folding butter into dough through a process called lamination, creating exactly 729 layers (3^6) of alternating butter and dough. It weighs about 60 grams and contains roughly 230 calories. Despite being synonymous with France, the croissant actually originated in Austria as the kipferl. The butter content is about 40% by weight.",
    search_terms: "croissant|pastry|french|bakery|butter|laminated|breakfast|viennoiserie",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.16, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.07, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.060, si_unit: "kg" },
      { dimension: "energy", label: "Calories", value: 9.62e5, si_unit: "J", note: "About 230 kcal" },
      { dimension: "temperature", label: "Baking temperature", value: 473, si_unit: "K", note: "200 degrees C" },
    ],
  },
  {
    slug: "watermelon-whole",
    name: "Watermelon (Whole)",
    subtitle: "92% water wrapped in a festive rind",
    category_id: "food",
    description:
      "A standard watermelon weighs about 9 kg and is 92% water by weight, making it essentially a spheroid water balloon with seeds. A typical watermelon is about 40 cm long. It originated in Africa and was cultivated in ancient Egypt. Every part of the watermelon is edible, including the seeds and rind. China produces about 60% of the world's watermelons.",
    search_terms: "watermelon|melon|fruit|summer|water|picnic|seeds",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.40, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 9, si_unit: "kg" },
      { dimension: "volume", label: "Volume", value: 0.011, si_unit: "m^3", note: "About 11 liters" },
      { dimension: "energy", label: "Total calories", value: 5.56e6, si_unit: "J", note: "About 1,330 kcal" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "african-grey-parrot",
    name: "African Grey Parrot",
    subtitle: "The Einstein of the bird world",
    category_id: "small-animals",
    description:
      "The African grey parrot is considered the most intelligent bird species, capable of learning over 1,000 words and understanding concepts like shape, color, and number. Alex, the most famous African grey, could identify 50 objects, 7 colors, and 5 shapes, and understood 'zero' as a concept. They live 40-60 years in captivity and form deep bonds with their owners.",
    search_terms: "african grey|parrot|bird|intelligent|talking bird|psittacus|pet bird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.33, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.52, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.410, si_unit: "kg" },
      { dimension: "speed", label: "Flight speed", value: 10, si_unit: "m/s", note: "About 36 km/h" },
      { dimension: "time", label: "Lifespan", value: 1.58e9, si_unit: "s", note: "About 50 years" },
      { dimension: "frequency", label: "Vocal range (low)", value: 200, si_unit: "Hz" },
    ],
  },
  {
    slug: "giant-anteater",
    name: "Giant Anteater",
    subtitle: "A 60 cm tongue and no teeth at all",
    category_id: "large-land-animals",
    description:
      "The giant anteater has a 60 cm tongue that can flick in and out up to 150 times per minute, covered in sticky saliva to trap ants and termites. It eats about 35,000 insects per day but never destroys a nest completely, always leaving enough for the colony to rebuild. Its claws are so powerful that even jaguars avoid confrontations. Despite having no teeth, it has a 2-foot-long skull.",
    search_terms: "anteater|giant anteater|tongue|claws|insectivore|south america|edentate",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length (head to tail)", value: 2.1, si_unit: "m" },
      { dimension: "length", label: "Tongue length", value: 0.60, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 40, si_unit: "kg" },
      { dimension: "length", label: "Claw length", value: 0.10, si_unit: "m", note: "Front claws" },
      { dimension: "frequency", label: "Tongue flick rate", value: 2.5, si_unit: "Hz", note: "150 per minute" },
      { dimension: "speed", label: "Running speed", value: 8.9, si_unit: "m/s", note: "About 32 km/h" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL MISCELLANEOUS TO REACH 150+
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "solar-panel-residential",
    name: "Residential Solar Panel (400W)",
    subtitle: "A slice of captured starlight on your roof",
    category_id: "technology",
    description:
      "A standard residential solar panel produces about 400 watts of peak power from a surface area of about 1.92 square meters. Modern panels convert roughly 21% of incoming sunlight to electricity. A typical home installation of 20 panels generates enough electricity for an average US household. The panels are mostly silicon, the second most abundant element in Earth's crust.",
    search_terms: "solar panel|photovoltaic|pv|solar energy|renewable|rooftop solar|electricity",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1.755, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1.096, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.035, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 21.3, si_unit: "kg" },
      { dimension: "area", label: "Surface area", value: 1.924, si_unit: "m^2" },
      { dimension: "power", label: "Peak output", value: 400, si_unit: "W" },
      { dimension: "energy", label: "Annual energy output (avg US)", value: 2.16e9, si_unit: "J", note: "About 600 kWh/year" },
    ],
  },
  {
    slug: "space-shuttle-main-engine",
    name: "Space Shuttle Main Engine (RS-25)",
    subtitle: "The most efficient liquid-fuel rocket engine ever flown",
    category_id: "engineering",
    description:
      "The RS-25, which powered the Space Shuttle for 30 years, is one of the most sophisticated rocket engines ever built. Each engine produces 1.86 meganewtons of thrust at sea level and operates at a combustion chamber pressure of 20.6 MPa. The turbopumps spin at 37,000 RPM, and the engine achieves 99.95% combustion efficiency. Three RS-25s powered each Shuttle mission, and they are now being used on the SLS rocket.",
    search_terms: "rs-25|space shuttle engine|ssme|rocket engine|nasa|sls|thrust",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Engine length", value: 4.24, si_unit: "m" },
      { dimension: "length", label: "Nozzle exit diameter", value: 2.39, si_unit: "m" },
      { dimension: "mass", label: "Engine dry mass", value: 3177, si_unit: "kg" },
      { dimension: "force", label: "Thrust (sea level)", value: 1860000, si_unit: "N", note: "1.86 MN" },
      { dimension: "pressure", label: "Chamber pressure", value: 2.06e7, si_unit: "Pa", note: "20.6 MPa" },
      { dimension: "temperature", label: "Combustion temperature", value: 3573, si_unit: "K", note: "About 3300 degrees C" },
      { dimension: "frequency", label: "Turbopump speed", value: 617, si_unit: "Hz", note: "37,000 RPM" },
    ],
  },
  {
    slug: "pencil-graphite-line",
    name: "Pencil Line (Continuous)",
    subtitle: "The humble graphite trail of human thought",
    category_id: "everyday-objects",
    description:
      "A standard No. 2 pencil can draw a continuous line approximately 56 km long before the graphite is depleted. The line is about 0.5 mm wide and consists of layers of graphite just a few atoms thick being deposited onto paper. A pencil contains about 50 mg of graphite, which is pure carbon arranged in hexagonal sheets that slide apart easily, leaving a mark. Pencils work in zero gravity and underwater.",
    search_terms: "pencil|graphite|line|writing|drawing|no 2|hb|carbon",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum line length", value: 56000, si_unit: "m", note: "About 56 km" },
      { dimension: "length", label: "Line width", value: 5.0e-4, si_unit: "m", note: "0.5 mm typical" },
      { dimension: "mass", label: "Graphite consumed", value: 5.0e-5, si_unit: "kg", note: "About 50 mg" },
      { dimension: "length", label: "Graphite layer thickness on paper", value: 1.0e-9, si_unit: "m", note: "A few nanometers" },
      { dimension: "area", label: "Total area covered", value: 28, si_unit: "m^2", note: "56 km x 0.5 mm" },
    ],
  },
  {
    slug: "blu-ray-disc",
    name: "Blu-ray Disc",
    subtitle: "100 billion bits etched by blue laser light",
    category_id: "computing",
    description:
      "A standard Blu-ray disc stores 25 GB on a single layer using pits just 150 nanometers wide read by a 405 nm blue-violet laser. The data spiral on the disc, if unwound, would stretch about 27 km. The disc spins at up to 10,000 RPM during playback. Dual-layer discs hold 50 GB, and Ultra HD Blu-ray can store up to 100 GB on three layers.",
    search_terms: "blu-ray|disc|optical|storage|movie|laser|bd|4k uhd",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.120, si_unit: "m", note: "120 mm" },
      { dimension: "length", label: "Thickness", value: 0.0012, si_unit: "m", note: "1.2 mm" },
      { dimension: "mass", label: "Weight", value: 0.016, si_unit: "kg", note: "16 grams" },
      { dimension: "data", label: "Capacity (single layer)", value: 2.5e10, si_unit: "B", note: "25 GB" },
      { dimension: "length", label: "Data spiral length", value: 27000, si_unit: "m", note: "About 27 km" },
      { dimension: "length", label: "Pit width", value: 1.5e-7, si_unit: "m", note: "150 nm" },
    ],
  },
  {
    slug: "transistor-modern",
    name: "Transistor (Modern 3nm)",
    subtitle: "The invisible switch that runs the world",
    category_id: "computing",
    description:
      "A modern 3nm transistor has a gate length of about 3 nanometers, roughly the width of 12 silicon atoms. Apple's M3 chip contains about 25 billion of them. Each transistor switches on and off billions of times per second, consuming only a few attowatts per switch. If you scaled one up to the size of a grain of sand, the chip it came from would cover a city. The entire digital age rests on making these smaller.",
    search_terms: "transistor|semiconductor|chip|3nm|silicon|switch|integrated circuit|mosfet",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Gate length", value: 3.0e-9, si_unit: "m", note: "3 nm process node" },
      { dimension: "length", label: "Fin height", value: 5.0e-8, si_unit: "m", note: "About 50 nm" },
      { dimension: "energy", label: "Energy per switch", value: 1.0e-17, si_unit: "J", note: "About 10 attojoules" },
      { dimension: "frequency", label: "Switching speed", value: 5.0e9, si_unit: "Hz", note: "Up to 5 GHz" },
      { dimension: "length", label: "Transistor pitch", value: 4.8e-8, si_unit: "m", note: "48 nm gate pitch" },
    ],
  },
  {
    slug: "soccer-ball-match",
    name: "Soccer Ball (Match Ball, FIFA Quality Pro)",
    subtitle: "A 22-panel sphere kicked by billions",
    category_id: "sports",
    description:
      "A FIFA-approved match ball must weigh between 410-450 grams, have a circumference of 68-70 cm, and bounce 120-160 cm when dropped from 2 meters. Modern match balls are thermally bonded rather than stitched, giving them a more consistent surface. A professional player can kick a ball at over 130 km/h. The ball used in the 2022 World Cup contained a sensor that transmitted position data 500 times per second.",
    search_terms: "soccer ball|football|match ball|fifa|kick|sports|world cup ball",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Circumference", value: 0.69, si_unit: "m", note: "68-70 cm" },
      { dimension: "length", label: "Diameter", value: 0.22, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.430, si_unit: "kg", note: "410-450 g" },
      { dimension: "pressure", label: "Internal pressure", value: 69000, si_unit: "Pa", note: "0.6-1.1 atm above ambient" },
      { dimension: "speed", label: "Professional kick speed", value: 36, si_unit: "m/s", note: "About 130 km/h" },
    ],
  },
  {
    slug: "vinyl-record-12-inch",
    name: 'Vinyl Record (12-inch LP)',
    subtitle: "Analog audio stored in microscopic grooves",
    category_id: "instruments",
    description:
      "A 12-inch vinyl LP record stores about 22 minutes of audio per side in a continuous spiral groove that, if unwound, would stretch about 460 meters. The groove is about 40-80 micrometers wide, and the needle (stylus) vibrates in response to variations as small as 1 micrometer. LPs have outsold CDs every year since 2020, and revenue from vinyl now exceeds $1 billion annually in the US.",
    search_terms: "vinyl|record|lp|turntable|analog|groove|phonograph|album",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.305, si_unit: "m", note: "12 inches" },
      { dimension: "length", label: "Thickness", value: 0.0018, si_unit: "m", note: "About 1.8 mm (180g pressing)" },
      { dimension: "mass", label: "Weight", value: 0.180, si_unit: "kg", note: "180 g (heavyweight pressing)" },
      { dimension: "length", label: "Groove total length", value: 460, si_unit: "m", note: "Per side" },
      { dimension: "length", label: "Groove width", value: 5.5e-5, si_unit: "m", note: "40-80 micrometers" },
      { dimension: "time", label: "Playback time per side", value: 1320, si_unit: "s", note: "About 22 minutes" },
    ],
  },
  {
    slug: "rubiks-cube-world-record",
    name: "Rubik's Cube (World Record Solve)",
    subtitle: "43 quintillion states, solved in 3.13 seconds",
    category_id: "events",
    description:
      "The Rubik's Cube has 43,252,003,274,489,856,000 possible states, but any scrambled position can be solved in 20 moves or fewer (known as 'God's Number'). The world record single solve as of 2024 is 3.13 seconds by Max Park. The cube was invented in 1974 by Hungarian architect Erno Rubik, who took a month to solve his own creation the first time.",
    search_terms: "rubiks cube|speed solve|puzzle|world record|max park|cube|speedcubing",
    featured: 0,
    measurements: [
      { dimension: "time", label: "World record solve time", value: 3.13, si_unit: "s", note: "Max Park, 2023" },
      { dimension: "time", label: "Rubik's first solve", value: 2592000, si_unit: "s", note: "About 1 month in 1974" },
      { dimension: "data", label: "Possible permutations (log)", value: 19.6, si_unit: "B", note: "43 quintillion states, ~19.6 bytes to encode" },
      { dimension: "length", label: "Standard cube edge length", value: 0.057, si_unit: "m", note: "57 mm" },
      { dimension: "mass", label: "Standard cube mass", value: 0.085, si_unit: "kg" },
    ],
  },
  {
    slug: "niagara-falls-water-flow",
    name: "Niagara Falls (Water Flow Per Second)",
    subtitle: "3,000 tonnes of water plummeting every second",
    category_id: "events",
    description:
      "Niagara Falls moves roughly 2,800 cubic meters of water per second over the brink during peak daytime flow, which is about 3,000 tonnes per second. At night, up to 75% of the water is diverted through hydroelectric tunnels. The falls erode the cliff face at a rate of about 30 cm per year. In 1969, the US Army Corps of Engineers actually turned off the American Falls for five months to study the rock face.",
    search_terms: "niagara falls|waterfall|flow rate|water|hydroelectric|erosion",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Flow rate (daytime peak)", value: 2800, si_unit: "m^3", note: "Per second" },
      { dimension: "mass", label: "Water mass per second", value: 2800000, si_unit: "kg", note: "About 2,800 tonnes/s" },
      { dimension: "length", label: "Horseshoe Falls height", value: 51, si_unit: "m" },
      { dimension: "length", label: "Horseshoe Falls width", value: 790, si_unit: "m" },
      { dimension: "power", label: "Hydroelectric power capacity", value: 4.4e9, si_unit: "W", note: "4.4 GW (US + Canada)" },
      { dimension: "speed", label: "Erosion rate", value: 9.5e-9, si_unit: "m/s", note: "About 30 cm per year" },
    ],
  },
  {
    slug: "blue-whale-tongue",
    name: "Blue Whale Tongue",
    subtitle: "An organ that weighs as much as an elephant",
    category_id: "marine-life",
    description:
      "A blue whale's tongue can weigh up to 2,700 kg, roughly the same as an adult African elephant. It fills the bottom of the mouth and helps push water through the baleen plates during feeding. The tongue alone is heavier than most cars. During a single feeding lunge, a blue whale can engulf up to 110 tonnes of water and krill, then uses its tongue to expel the water while trapping the food.",
    search_terms: "blue whale tongue|whale|tongue|largest organ|marine|cetacean",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Weight", value: 2700, si_unit: "kg", note: "Up to 2.7 tonnes" },
      { dimension: "length", label: "Length", value: 3.5, si_unit: "m", note: "Estimated" },
      { dimension: "length", label: "Width", value: 2.0, si_unit: "m", note: "Estimated" },
      { dimension: "volume", label: "Mouth capacity per lunge", value: 110, si_unit: "m^3", note: "Water + krill" },
      { dimension: "mass", label: "Krill consumed daily", value: 3600, si_unit: "kg", note: "About 3.6 tonnes" },
    ],
  },
  {
    slug: "electric-car-battery-cell",
    name: "Tesla 4680 Battery Cell",
    subtitle: "The cylindrical power source driving the EV revolution",
    category_id: "technology",
    description:
      "The Tesla 4680 battery cell is 46 mm in diameter and 80 mm tall, storing about 98 Wh of energy. It uses a tabless electrode design that reduces internal resistance and improves thermal performance. A single Tesla Model Y pack contains about 830 of these cells. The '4680' name simply describes the dimensions: 46 mm diameter, 80 mm height. Each cell can deliver over 200 amps.",
    search_terms: "4680|battery cell|tesla|lithium ion|ev battery|cylindrical cell",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.046, si_unit: "m", note: "46 mm" },
      { dimension: "length", label: "Height", value: 0.080, si_unit: "m", note: "80 mm" },
      { dimension: "mass", label: "Weight", value: 0.355, si_unit: "kg" },
      { dimension: "energy", label: "Energy capacity", value: 352800, si_unit: "J", note: "About 98 Wh" },
      { dimension: "volume", label: "Cell volume", value: 1.33e-4, si_unit: "m^3" },
      { dimension: "power", label: "Peak discharge power", value: 740, si_unit: "W", note: "Estimated" },
    ],
  },
  {
    slug: "copenhagen-little-mermaid",
    name: "The Little Mermaid Statue (Copenhagen)",
    subtitle: "A small bronze figure with an outsized reputation",
    category_id: "statues",
    description:
      "The Little Mermaid statue in Copenhagen harbor is surprisingly small at just 1.25 meters tall, perched on a boulder by the waterside since 1913. Sculpted by Edvard Eriksen, it depicts Hans Christian Andersen's famous fairy tale character. The statue has been vandalized repeatedly over the decades, losing her head twice and her arm once. Despite her modest size, she draws over a million visitors per year.",
    search_terms: "little mermaid|copenhagen|denmark|statue|bronze|hans christian andersen",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Figure height", value: 1.25, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 175, si_unit: "kg" },
      { dimension: "length", label: "Boulder height", value: 0.80, si_unit: "m" },
      { dimension: "time", label: "Age (as of 2026)", value: 3.567e9, si_unit: "s", note: "Unveiled 1913, about 113 years" },
      { dimension: "length", label: "Total height (with boulder)", value: 2.05, si_unit: "m" },
    ],
  },
  {
    slug: "espresso-shot",
    name: "Espresso Shot",
    subtitle: "30 mL of concentrated coffee intensity",
    category_id: "food",
    description:
      "A standard espresso shot is about 30 mL of coffee brewed by forcing 92-96 degree water through finely ground coffee at 9 bars of pressure in 25-30 seconds. Despite its small volume, it contains about 63 mg of caffeine. The crema (the golden foam on top) is created by CO2 dissolving under high pressure and then releasing as tiny bubbles. Espresso was invented in Italy in the early 1900s.",
    search_terms: "espresso|coffee|shot|caffeine|crema|italian|barista|brew",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Volume", value: 3.0e-5, si_unit: "m^3", note: "30 mL" },
      { dimension: "mass", label: "Weight", value: 0.030, si_unit: "kg" },
      { dimension: "temperature", label: "Brewing temperature", value: 367, si_unit: "K", note: "92-96 degrees C" },
      { dimension: "pressure", label: "Brewing pressure", value: 900000, si_unit: "Pa", note: "9 bars" },
      { dimension: "time", label: "Extraction time", value: 27, si_unit: "s", note: "25-30 seconds" },
      { dimension: "energy", label: "Calories", value: 8370, si_unit: "J", note: "About 2 kcal (black)" },
    ],
  },
  {
    slug: "great-pyramid-stone-block",
    name: "Great Pyramid Stone Block (Average)",
    subtitle: "One of 2.3 million blocks in the Great Pyramid",
    category_id: "ancient-structures",
    description:
      "The Great Pyramid of Giza contains approximately 2.3 million stone blocks, each averaging about 2.5 tonnes. The blocks were quarried, transported, and precisely placed without wheels, pulleys, or iron tools. The average block is roughly 1.3 meters on each side. The outermost casing stones were polished white limestone that made the pyramid gleam in the sun; most of these were stripped off centuries ago for building material.",
    search_terms: "pyramid|stone block|giza|egypt|limestone|ancient|construction",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Average side length", value: 1.3, si_unit: "m" },
      { dimension: "length", label: "Average height", value: 0.75, si_unit: "m" },
      { dimension: "mass", label: "Average weight", value: 2500, si_unit: "kg", note: "2.5 tonnes" },
      { dimension: "volume", label: "Average volume", value: 1.27, si_unit: "m^3" },
      { dimension: "mass", label: "Total pyramid mass", value: 5.9e9, si_unit: "kg", note: "About 5.9 million tonnes" },
      { dimension: "time", label: "Pyramid age (as of 2026)", value: 1.449e11, si_unit: "s", note: "About 4,590 years" },
    ],
  },
  {
    slug: "hubble-ultra-deep-field",
    name: "Hubble Ultra Deep Field",
    subtitle: "Peering 13 billion years into the past",
    category_id: "science",
    description:
      "The Hubble Ultra Deep Field, captured in 2004, is the deepest visible-light image of the universe ever taken. It shows approximately 10,000 galaxies in a patch of sky just 3.4 arcminutes across (about 1/13th the diameter of the full Moon). The most distant objects in the image are seen as they were just 800 million years after the Big Bang. The total exposure time was over 11 days.",
    search_terms: "hubble ultra deep field|hudf|deep field|galaxies|cosmology|distant universe",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Total exposure time", value: 950400, si_unit: "s", note: "About 11 days" },
      { dimension: "length", label: "Lookback distance", value: 1.23e26, si_unit: "m", note: "About 13 billion light-years" },
      { dimension: "data", label: "Image file size", value: 1.0e8, si_unit: "B", note: "About 100 MB" },
      { dimension: "area", label: "Sky coverage", value: 9.0e-9, si_unit: "m^2", note: "3.4 x 3.4 arcmin (solid angle measure)" },
      { dimension: "time", label: "Oldest light in image", value: 4.1e17, si_unit: "s", note: "About 13 billion years ago" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL ITEMS TO ENSURE 150+ TOTAL
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: "peregrine-falcon-dive",
    name: "Peregrine Falcon (In Stoop)",
    subtitle: "The fastest animal alive at 389 km/h",
    category_id: "small-animals",
    description:
      "The peregrine falcon achieves the highest speed of any animal during its hunting stoop (high-speed dive), reaching over 389 km/h. It folds its wings against its body and becomes a living missile, striking prey in midair with a clenched foot. Special baffles in its nostrils allow it to breathe during the dive. Its eyesight is 8 times sharper than a human's.",
    search_terms: "peregrine falcon|falcon|fastest bird|stoop|dive|raptor|bird of prey",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.46, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 1.1, si_unit: "m" },
      { dimension: "mass", label: "Weight (female)", value: 1.0, si_unit: "kg" },
      { dimension: "speed", label: "Stoop speed", value: 108, si_unit: "m/s", note: "389 km/h" },
      { dimension: "speed", label: "Level flight speed", value: 25, si_unit: "m/s", note: "About 90 km/h" },
      { dimension: "force", label: "Strike force", value: 300, si_unit: "N", note: "Estimated impact" },
    ],
  },
  {
    slug: "saharan-silver-ant",
    name: "Saharan Silver Ant",
    subtitle: "The fastest ant on Earth, running at 108 body lengths per second",
    category_id: "insects",
    description:
      "The Saharan silver ant (Cataglyphis bombycina) is the fastest ant in the world, reaching speeds of 855 mm per second, or about 108 body lengths per second. It forages on the Saharan desert surface at temperatures up to 70 degrees Celsius, where almost nothing else can survive. Its silver hairs reflect sunlight and radiate heat. Each foraging trip lasts about 10 minutes before the ant would overheat.",
    search_terms: "saharan silver ant|fastest ant|desert ant|cataglyphis|silver ant|heat",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.008, si_unit: "m", note: "About 8 mm" },
      { dimension: "speed", label: "Running speed", value: 0.855, si_unit: "m/s", note: "108 body lengths/s" },
      { dimension: "mass", label: "Weight", value: 5.0e-6, si_unit: "kg", note: "About 5 mg" },
      { dimension: "temperature", label: "Surface foraging temperature", value: 343, si_unit: "K", note: "Up to 70 degrees C" },
      { dimension: "time", label: "Max foraging duration", value: 600, si_unit: "s", note: "About 10 minutes" },
    ],
  },
  {
    slug: "olympic-swimming-pool-water",
    name: "Olympic Swimming Pool (Water Volume)",
    subtitle: "2.5 million liters of precisely heated, filtered water",
    category_id: "sports",
    description:
      "An Olympic swimming pool holds 2,500 cubic meters of water (2.5 million liters) maintained at 25-28 degrees Celsius. The pool is exactly 50 meters long, 25 meters wide, and at least 2 meters deep. The water must be clear enough that the black lane markings on the bottom are visible from the surface. Filling one from a garden hose would take about 18 days of continuous flow.",
    search_terms: "olympic pool|swimming pool|water volume|pool|swimming|olympics|aquatics",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Water volume", value: 2500, si_unit: "m^3", note: "2.5 million liters" },
      { dimension: "mass", label: "Water mass", value: 2500000, si_unit: "kg", note: "2,500 tonnes" },
      { dimension: "length", label: "Length", value: 50, si_unit: "m" },
      { dimension: "length", label: "Width", value: 25, si_unit: "m" },
      { dimension: "length", label: "Minimum depth", value: 2, si_unit: "m" },
      { dimension: "temperature", label: "Water temperature", value: 299, si_unit: "K", note: "25-28 degrees C" },
    ],
  },
  {
    slug: "cello",
    name: "Cello",
    subtitle: "The instrument closest to the human voice",
    category_id: "instruments",
    description:
      "The cello's range closely matches the human vocal range, which is one reason its sound feels so emotionally direct. It stands about 1.2 meters tall, has four strings tuned in fifths (C2-G2-D3-A3), and is played seated with the instrument between the player's knees. A quality cello is carved from spruce (top) and maple (back and sides) and takes months of skilled labor to construct.",
    search_terms: "cello|violoncello|string instrument|orchestra|classical|bow|strings",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.755, si_unit: "m" },
      { dimension: "length", label: "Total length (with scroll)", value: 1.20, si_unit: "m" },
      { dimension: "length", label: "Body width (lower bout)", value: 0.435, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 3.5, si_unit: "kg" },
      { dimension: "frequency", label: "Lowest string (C2)", value: 65.4, si_unit: "Hz" },
      { dimension: "frequency", label: "Highest practical note", value: 988, si_unit: "Hz", note: "About B5" },
    ],
  },
  {
    slug: "mars-rover-perseverance",
    name: "Mars Rover Perseverance",
    subtitle: "A nuclear-powered geology lab on wheels",
    category_id: "spacecraft",
    description:
      "NASA's Perseverance rover landed on Mars on February 18, 2021, in Jezero Crater. It weighs 1,025 kg and is powered by a plutonium-238 radioisotope thermoelectric generator that will keep it running for at least 14 years. It carries 23 cameras, two microphones (recording sound on Mars for the first time), and the Ingenuity helicopter. It is also collecting rock samples for a future return mission to Earth.",
    search_terms: "perseverance|mars rover|nasa|mars|rover|jezero|ingenuity|mars 2020",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Width", value: 2.7, si_unit: "m" },
      { dimension: "length", label: "Height", value: 2.2, si_unit: "m" },
      { dimension: "mass", label: "Weight on Mars", value: 388, si_unit: "kg", note: "1,025 kg on Earth, Mars gravity is 0.378g" },
      { dimension: "power", label: "RTG power output", value: 110, si_unit: "W" },
      { dimension: "speed", label: "Top speed", value: 0.042, si_unit: "m/s", note: "152 m/h, about 0.15 km/h" },
    ],
  },
  {
    slug: "amazon-river-discharge",
    name: "Amazon River Discharge (Per Second)",
    subtitle: "The largest river by volume empties an ocean of its own",
    category_id: "water",
    description:
      "The Amazon River discharges about 209,000 cubic meters of water per second into the Atlantic Ocean, roughly 20% of all river water reaching the oceans worldwide. Its discharge is greater than the next seven largest rivers combined. The freshwater plume extends up to 400 km into the Atlantic. During flood season, the river can be over 40 km wide in places.",
    search_terms: "amazon river|discharge|flow|largest river|south america|brazil|water",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Discharge rate", value: 209000, si_unit: "m^3", note: "Per second" },
      { dimension: "mass", label: "Water mass per second", value: 2.09e8, si_unit: "kg" },
      { dimension: "length", label: "River length", value: 6400000, si_unit: "m", note: "6,400 km" },
      { dimension: "length", label: "Maximum width (flood)", value: 40000, si_unit: "m", note: "40 km" },
      { dimension: "area", label: "Drainage basin area", value: 6.915e12, si_unit: "m^2", note: "6.915 million km^2" },
    ],
  },
  {
    slug: "human-genome-printed",
    name: "Human Genome (Printed)",
    subtitle: "3 billion letters of you, filling 262,000 pages",
    category_id: "science",
    description:
      "If you printed the entire human genome as text (A, T, G, C), it would fill about 262,000 pages of standard A4 paper. The complete sequence contains about 3.2 billion base pairs and would take approximately 31 years to read aloud at one base per second, 24 hours a day. Only about 1.5% of the genome encodes proteins; the rest was once called 'junk DNA' but is increasingly recognized as functionally important.",
    search_terms: "human genome|genome|dna|genetic code|base pairs|genetics|hgp",
    featured: 0,
    measurements: [
      { dimension: "data", label: "Total base pairs", value: 3.2e9, si_unit: "B", note: "3.2 billion base pairs" },
      { dimension: "mass", label: "Printed weight (262,000 pages)", value: 1310, si_unit: "kg", note: "About 5 g per page" },
      { dimension: "length", label: "Stack height (printed)", value: 26.2, si_unit: "m", note: "0.1 mm per page" },
      { dimension: "time", label: "Time to read aloud", value: 1.01e9, si_unit: "s", note: "About 32 years at 1 base/s" },
      { dimension: "data", label: "Digital file size", value: 7.5e8, si_unit: "B", note: "About 750 MB uncompressed" },
    ],
  },
  {
    slug: "colossus-of-rhodes",
    name: "Colossus of Rhodes (Estimated)",
    subtitle: "An ancient wonder lost to an earthquake after just 54 years",
    category_id: "ancient-structures",
    description:
      "The Colossus of Rhodes was a bronze and iron statue of the sun god Helios that stood about 33 meters tall at the entrance to the harbor of Rhodes, Greece. Completed around 280 BCE, it stood for only 54 years before an earthquake snapped it at the knees. The ruins lay on the ground for over 800 years before being sold for scrap. It was one of the Seven Wonders of the Ancient World.",
    search_terms: "colossus|rhodes|ancient wonder|helios|statue|bronze|greece|seven wonders",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (estimated)", value: 33, si_unit: "m" },
      { dimension: "mass", label: "Estimated bronze mass", value: 50000, si_unit: "kg", note: "About 50 tonnes" },
      { dimension: "mass", label: "Estimated iron framework mass", value: 35000, si_unit: "kg" },
      { dimension: "time", label: "Standing duration", value: 1.703e9, si_unit: "s", note: "About 54 years" },
      { dimension: "time", label: "Age if still standing (as of 2026)", value: 7.27e10, si_unit: "s", note: "About 2,306 years" },
    ],
  },
  {
    slug: "electric-eel-discharge",
    name: "Electric Eel (Single Discharge)",
    subtitle: "860 volts of biological engineering",
    category_id: "marine-life",
    description:
      "The electric eel (Electrophorus electricus) can generate up to 860 volts and 1 ampere of current in bursts lasting about 2 milliseconds. Its electric organs comprise about 80% of its body length and contain about 6,000 electrocyte cells stacked like batteries in series. The eel uses low-voltage pulses for navigation and communication, and high-voltage shocks to stun prey. It must surface to breathe air every 10 minutes.",
    search_terms: "electric eel|eel|voltage|shock|electrophorus|south america|electric fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.5, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 20, si_unit: "kg" },
      { dimension: "energy", label: "Energy per discharge", value: 1.72, si_unit: "J", note: "860V x 1A x 0.002s" },
      { dimension: "power", label: "Peak discharge power", value: 860, si_unit: "W", note: "860V x 1A" },
      { dimension: "time", label: "Discharge duration", value: 0.002, si_unit: "s", note: "About 2 ms" },
      { dimension: "frequency", label: "Navigation pulse rate", value: 25, si_unit: "Hz", note: "Low-voltage pulses" },
    ],
  },
  {
    slug: "x-ray-medical",
    name: "Medical X-ray (Single Chest Exposure)",
    subtitle: "Seeing through you in a fraction of a second",
    category_id: "medicine",
    description:
      "A standard chest X-ray exposes the patient to about 0.02 millisieverts of radiation, equivalent to roughly 2.4 days of natural background radiation. The X-ray tube generates photons at energies of 20-150 keV, and the entire exposure lasts only about 20 milliseconds. Wilhelm Rontgen discovered X-rays in 1895 and took the first medical X-ray of his wife's hand. She reportedly said, 'I have seen my death.'",
    search_terms: "x-ray|xray|radiograph|medical imaging|rontgen|chest xray|diagnostic",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Exposure duration", value: 0.020, si_unit: "s", note: "About 20 milliseconds" },
      { dimension: "energy", label: "Photon energy (typical)", value: 9.6e-15, si_unit: "J", note: "About 60 keV" },
      { dimension: "frequency", label: "X-ray frequency", value: 1.45e19, si_unit: "Hz", note: "At 60 keV" },
      { dimension: "length", label: "X-ray wavelength", value: 2.07e-11, si_unit: "m", note: "About 0.02 nm at 60 keV" },
      { dimension: "power", label: "Tube power (during exposure)", value: 50000, si_unit: "W", note: "Typical 100 kV at 500 mA" },
    ],
  },
  {
    slug: "international-standard-paper-a4",
    name: "A4 Paper (Single Sheet)",
    subtitle: "The 210 x 297 mm rectangle that runs the world",
    category_id: "everyday-objects",
    description:
      "A single sheet of A4 paper measures exactly 210 mm by 297 mm, a ratio of 1 to the square root of 2. This elegant ratio means that when you fold or cut an A4 sheet in half, you get two A5 sheets with the same proportions. The standard was first adopted in Germany in 1922 and is now used by every country except the US and Canada. A sheet of 80 gsm A4 weighs exactly 4.989 grams.",
    search_terms: "a4 paper|paper|sheet|office|iso 216|stationery|printing|copy paper",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.297, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.210, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 1.0e-4, si_unit: "m", note: "0.1 mm for 80 gsm" },
      { dimension: "mass", label: "Weight", value: 0.004989, si_unit: "kg", note: "4.989 g at 80 gsm" },
      { dimension: "area", label: "Surface area", value: 0.06237, si_unit: "m^2" },
    ],
  },
  {
    slug: "saharan-dust-plume",
    name: "Saharan Dust Plume (Transatlantic)",
    subtitle: "Africa fertilizes the Amazon from 5,000 km away",
    category_id: "weather",
    description:
      "Every year, about 182 million tonnes of Saharan dust is carried across the Atlantic Ocean by trade winds, with roughly 27 million tonnes reaching the Amazon rainforest. This dust contains phosphorus that the rainforest needs but cannot get from its own depleted soil. The plume can stretch 3,000 km wide and cross the Atlantic in about 5-7 days. It also helps build Caribbean beaches and suppresses Atlantic hurricanes.",
    search_terms: "saharan dust|dust plume|africa|amazon|transatlantic|aerosol|trade winds",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Annual dust transported", value: 1.82e11, si_unit: "kg", note: "182 million tonnes" },
      { dimension: "length", label: "Transport distance", value: 5000000, si_unit: "m", note: "5,000 km across Atlantic" },
      { dimension: "length", label: "Plume width", value: 3000000, si_unit: "m", note: "Up to 3,000 km" },
      { dimension: "time", label: "Transit time", value: 518400, si_unit: "s", note: "About 5-7 days" },
      { dimension: "length", label: "Altitude", value: 5000, si_unit: "m", note: "1.5-5 km above surface" },
    ],
  },
  {
    slug: "compact-disc-cd",
    name: "Compact Disc (CD)",
    subtitle: "The shiny circle that killed the cassette tape",
    category_id: "computing",
    description:
      "A standard CD stores 700 MB of data (or about 80 minutes of audio) on a polycarbonate disc 120 mm in diameter and 1.2 mm thick. Data is encoded as microscopic pits 0.5 micrometers wide along a spiral track 5.38 km long, read by a 780 nm infrared laser. CDs were introduced in 1982 and peak production reached 30 billion discs per year in the early 2000s. The format was originally designed to fit Beethoven's Ninth Symphony.",
    search_terms: "compact disc|cd|audio cd|optical disc|music|disc|700mb|sony philips",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.120, si_unit: "m", note: "120 mm" },
      { dimension: "length", label: "Thickness", value: 0.0012, si_unit: "m", note: "1.2 mm" },
      { dimension: "mass", label: "Weight", value: 0.016, si_unit: "kg", note: "About 16 grams" },
      { dimension: "data", label: "Storage capacity", value: 7.0e8, si_unit: "B", note: "700 MB" },
      { dimension: "length", label: "Data spiral length", value: 5380, si_unit: "m", note: "5.38 km" },
      { dimension: "length", label: "Pit width", value: 5.0e-7, si_unit: "m", note: "0.5 micrometers" },
    ],
  },
  {
    slug: "international-thermonuclear-fusion-sun-core",
    name: "Sun's Core (Per Cubic Meter)",
    subtitle: "The fusion furnace powering the solar system",
    category_id: "science",
    description:
      "At the Sun's core, the temperature reaches about 15.7 million Kelvin and the density is about 150,000 kg per cubic meter (150 times denser than water). Despite these extreme conditions, the energy output per cubic meter is only about 276 watts, less than a human body. The Sun produces its enormous power simply because the core is so large. About 620 million tonnes of hydrogen fuse into helium every second.",
    search_terms: "sun core|solar core|fusion|nuclear|hydrogen|helium|star|solar energy",
    featured: 0,
    measurements: [
      { dimension: "temperature", label: "Core temperature", value: 1.57e7, si_unit: "K", note: "15.7 million K" },
      { dimension: "pressure", label: "Core pressure", value: 2.65e16, si_unit: "Pa", note: "265 billion atmospheres" },
      { dimension: "power", label: "Power output per cubic meter", value: 276, si_unit: "W", note: "Less than a human body" },
      { dimension: "mass", label: "Density per cubic meter", value: 150000, si_unit: "kg" },
      { dimension: "mass", label: "Hydrogen consumed per second (whole Sun)", value: 6.2e11, si_unit: "kg", note: "620 million tonnes/s" },
    ],
  },
  {
    slug: "contact-lens",
    name: "Contact Lens",
    subtitle: "A transparent disc that corrects vision from 1 cm away",
    category_id: "medicine",
    description:
      "A modern soft contact lens is about 14 mm in diameter and just 0.06-0.1 mm thick at the center. It sits on the tear film of the eye, not directly on the cornea. Leonardo da Vinci sketched the concept of contact lenses in 1508, but practical lenses were not developed until the 1950s. About 150 million people worldwide wear contact lenses. Each one must allow oxygen to pass through to keep the cornea healthy.",
    search_terms: "contact lens|lens|vision|eye|optical|corrective|soft lens|eyewear",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.014, si_unit: "m", note: "14 mm" },
      { dimension: "length", label: "Center thickness", value: 7.0e-5, si_unit: "m", note: "0.07 mm typical" },
      { dimension: "mass", label: "Weight", value: 3.0e-5, si_unit: "kg", note: "About 30 mg" },
      { dimension: "length", label: "Base curve radius", value: 0.0086, si_unit: "m", note: "8.6 mm typical" },
      { dimension: "volume", label: "Lens volume", value: 1.0e-8, si_unit: "m^3", note: "About 10 microliters" },
    ],
  },
  {
    slug: "mount-everest-summit-area",
    name: "Mount Everest Summit",
    subtitle: "The highest point on Earth is the size of a dining table",
    category_id: "mountains",
    description:
      "The summit of Mount Everest is a snow-covered area roughly the size of two ping pong tables, about 5 square meters, at an elevation of 8,849 meters. Air pressure at the summit is about one-third of sea-level pressure, providing only a third of the normal oxygen. The summit rock is marine limestone, meaning the top of Earth's tallest mountain was once at the bottom of an ancient sea.",
    search_terms: "everest summit|highest point|peak|himalaya|nepal|tibet|mountaineering",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Summit area", value: 5, si_unit: "m^2", note: "About 2 x 2.5 meters" },
      { dimension: "length", label: "Elevation", value: 8849, si_unit: "m" },
      { dimension: "pressure", label: "Air pressure at summit", value: 33700, si_unit: "Pa", note: "About 1/3 sea level" },
      { dimension: "temperature", label: "Average summit temperature (January)", value: 237, si_unit: "K", note: "About -36 degrees C" },
      { dimension: "speed", label: "Wind speeds at summit", value: 45, si_unit: "m/s", note: "Often exceeds 160 km/h" },
    ],
  },
  {
    slug: "typewriter-ibm-selectric",
    name: "IBM Selectric Typewriter",
    subtitle: "The golf ball that revolutionized office typing",
    category_id: "technology",
    description:
      "The IBM Selectric, introduced in 1961, replaced the traditional typebar mechanism with a rotating and tilting 'golf ball' type element that could type at up to 14.8 characters per second without jamming. It weighed about 15 kg and became the standard office typewriter for two decades. Over 13 million Selectrics were sold. Its proportional spacing and interchangeable type elements made it the word processor before word processors existed.",
    search_terms: "ibm selectric|typewriter|golf ball|typing|office|ibm|vintage",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.445, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.343, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.165, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 15.4, si_unit: "kg" },
      { dimension: "frequency", label: "Typing speed (max)", value: 14.8, si_unit: "Hz", note: "14.8 characters per second" },
      { dimension: "length", label: "Type element diameter", value: 0.042, si_unit: "m", note: "Golf ball, about 42 mm" },
    ],
  },
  {
    slug: "great-barrier-reef-coral-polyp",
    name: "Coral Polyp (Great Barrier Reef)",
    subtitle: "The tiny animal that built a structure visible from space",
    category_id: "marine-life",
    description:
      "A single coral polyp is typically 1-3 mm in diameter, yet colonies of these tiny animals built the Great Barrier Reef, which stretches 2,300 km and is the largest living structure on Earth. Each polyp secretes a limestone skeleton at a rate of about 1 cm per year. Polyps feed at night by extending tentacles to catch plankton. They also host symbiotic algae (zooxanthellae) that provide up to 90% of their energy through photosynthesis.",
    search_terms: "coral polyp|coral|reef|great barrier reef|polyp|cnidaria|zooxanthellae",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Polyp diameter", value: 0.002, si_unit: "m", note: "1-3 mm" },
      { dimension: "length", label: "Great Barrier Reef length", value: 2300000, si_unit: "m", note: "2,300 km" },
      { dimension: "area", label: "Great Barrier Reef area", value: 3.448e11, si_unit: "m^2", note: "344,400 km^2" },
      { dimension: "speed", label: "Growth rate", value: 3.17e-10, si_unit: "m/s", note: "About 1 cm per year" },
      { dimension: "time", label: "Reef age", value: 6.31e11, si_unit: "s", note: "About 20,000 years (current form)" },
    ],
  },
  {
    slug: "morse-code-sos",
    name: "SOS Signal (Morse Code)",
    subtitle: "Three dots, three dashes, three dots: the universal distress call",
    category_id: "events",
    description:
      "The SOS distress signal (... --- ...) was adopted as the international maritime distress signal in 1906. In standard Morse code, a dit lasts about 60 milliseconds at 20 words per minute, a dah is three times as long, and the entire SOS signal takes about 2.52 seconds. SOS does not actually stand for 'Save Our Souls' or 'Save Our Ship'; it was chosen because it was easy to transmit and recognize. The Titanic was among the first ships to use it.",
    search_terms: "sos|morse code|distress|signal|emergency|maritime|radio|telegraph",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Total SOS signal duration", value: 2.52, si_unit: "s", note: "At 20 WPM" },
      { dimension: "time", label: "Dit duration", value: 0.060, si_unit: "s", note: "At 20 WPM" },
      { dimension: "time", label: "Dah duration", value: 0.180, si_unit: "s", note: "3 x dit" },
      { dimension: "frequency", label: "Standard CW frequency", value: 500000, si_unit: "Hz", note: "500 kHz maritime frequency" },
      { dimension: "data", label: "Information content", value: 3, si_unit: "B", note: "3 characters: S, O, S" },
    ],
  },
  {
    slug: "arecibo-message",
    name: "Arecibo Message (1974)",
    subtitle: "A 3-minute radio shout into the cosmic void",
    category_id: "events",
    description:
      "On November 16, 1974, the Arecibo Observatory transmitted a 1,679-bit message toward the globular star cluster M13, about 25,000 light-years away. The message, designed by Frank Drake and Carl Sagan, encoded information about DNA, humans, the solar system, and the Arecibo telescope itself. Even traveling at the speed of light, the message will not arrive for another 25,000 years, and any reply would take another 25,000 years to get back.",
    search_terms: "arecibo message|seti|radio message|m13|drake|sagan|interstellar|alien",
    featured: 0,
    measurements: [
      { dimension: "data", label: "Message size", value: 210, si_unit: "B", note: "1,679 bits (23 x 73 grid)" },
      { dimension: "time", label: "Transmission duration", value: 169, si_unit: "s", note: "About 2.8 minutes" },
      { dimension: "length", label: "Distance to M13", value: 2.365e20, si_unit: "m", note: "25,000 light-years" },
      { dimension: "frequency", label: "Transmission frequency", value: 2.38e9, si_unit: "Hz", note: "2,380 MHz" },
      { dimension: "power", label: "Transmitter power", value: 450000, si_unit: "W", note: "450 kW" },
      { dimension: "time", label: "Travel time to M13", value: 7.88e11, si_unit: "s", note: "About 25,000 years" },
    ],
  },
  {
    slug: "violin-bow",
    name: "Violin Bow",
    subtitle: "150 horsehairs creating music through friction",
    category_id: "instruments",
    description:
      "A standard violin bow is about 74.5 cm long and contains approximately 150-200 horsehairs stretched between the tip and frog. The hair is coated with rosin (tree resin) which creates friction against the strings. A bow weighs about 60 grams, and the balance point is critical to its performance. The best bows are made from pernambuco wood from Brazil, which is now an endangered species, pushing bow makers toward carbon fiber alternatives.",
    search_terms: "violin bow|bow|horsehair|rosin|pernambuco|archery|strings",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 0.745, si_unit: "m" },
      { dimension: "length", label: "Hair length", value: 0.650, si_unit: "m" },
      { dimension: "mass", label: "Weight", value: 0.060, si_unit: "kg" },
      { dimension: "force", label: "Playing force on string", value: 1.0, si_unit: "N", note: "0.5-1.5 N typical" },
      { dimension: "length", label: "Hair diameter (single)", value: 7.0e-5, si_unit: "m", note: "About 70 micrometers" },
    ],
  },
  {
    slug: "voyager-2-interstellar",
    name: "Voyager 2 (Current Position)",
    subtitle: "The farthest human-made object still sending data home",
    category_id: "spacecraft",
    description:
      "Voyager 2, launched in 1977, is the only spacecraft to have visited all four outer planets (Jupiter, Saturn, Uranus, Neptune). As of 2026, it is about 136 AU from Earth and still transmitting data using a 23-watt radio, about the power of a refrigerator light bulb. The signal takes over 18 hours to reach Earth. Its plutonium power source will keep it running until about 2025-2030, after which it will drift silently through interstellar space forever.",
    search_terms: "voyager 2|interstellar|nasa|outer planets|neptune|uranus|deep space|probe",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Distance from Earth (2026)", value: 2.04e13, si_unit: "m", note: "About 136 AU" },
      { dimension: "speed", label: "Current speed", value: 15400, si_unit: "m/s", note: "About 55,440 km/h" },
      { dimension: "mass", label: "Mass", value: 825.5, si_unit: "kg" },
      { dimension: "power", label: "Current transmitter power", value: 23, si_unit: "W" },
      { dimension: "time", label: "Mission duration (as of 2026)", value: 1.545e9, si_unit: "s", note: "About 49 years since 1977" },
      { dimension: "time", label: "Light travel time to Earth", value: 68000, si_unit: "s", note: "About 18.9 hours" },
    ],
  },
  {
    slug: "graphene-sheet",
    name: "Graphene (Single Layer)",
    subtitle: "A one-atom-thick material stronger than steel",
    category_id: "science",
    description:
      "Graphene is a single layer of carbon atoms arranged in a hexagonal lattice, just 0.335 nanometers thick. It is the thinnest material possible, the strongest material ever measured (about 200 times stronger than steel), an excellent conductor of electricity and heat, and nearly transparent. It was first isolated in 2004 by peeling layers off graphite with sticky tape, an achievement that won the Nobel Prize in Physics in 2010.",
    search_terms: "graphene|carbon|two dimensional|2d material|nobel prize|nanotechnology",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Thickness", value: 3.35e-10, si_unit: "m", note: "0.335 nm, one atom thick" },
      { dimension: "mass", label: "Mass per square meter", value: 7.7e-4, si_unit: "kg", note: "0.77 mg per m^2" },
      { dimension: "force", label: "Tensile strength", value: 1.3e11, si_unit: "Pa", note: "130 GPa" },
      { dimension: "temperature", label: "Thermal stability (in vacuum)", value: 3273, si_unit: "K", note: "About 3000 degrees C" },
      { dimension: "speed", label: "Electron mobility (effective speed)", value: 1.0e6, si_unit: "m/s", note: "Charge carrier velocity" },
    ],
  },
  {
    slug: "saturn-rings-edge",
    name: "Saturn's Rings (Edge View)",
    subtitle: "282,000 km wide but thinner than a razor blade in proportion",
    category_id: "space-other",
    description:
      "Saturn's rings span about 282,000 km in diameter but are only about 10-30 meters thick in most places. If you scaled the rings down to the diameter of a football field, they would be about 10,000 times thinner than a razor blade. They are composed of billions of particles ranging from dust grains to house-sized boulders, all made mostly of water ice. The rings may be only 100-400 million years old, making them younger than the dinosaurs.",
    search_terms: "saturn rings|rings|saturn|ice|particles|planet|solar system",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Outer diameter (main rings)", value: 2.82e8, si_unit: "m", note: "282,000 km" },
      { dimension: "length", label: "Typical thickness", value: 20, si_unit: "m", note: "10-30 meters" },
      { dimension: "mass", label: "Total ring mass", value: 1.54e19, si_unit: "kg", note: "About 40% of Mimas" },
      { dimension: "area", label: "Total ring area", value: 6.2e16, si_unit: "m^2", note: "About 62 billion km^2" },
      { dimension: "speed", label: "Inner ring orbital speed", value: 23600, si_unit: "m/s", note: "About 85,000 km/h" },
      { dimension: "time", label: "Estimated age", value: 6.3e15, si_unit: "s", note: "About 200 million years" },
    ],
  },
];
