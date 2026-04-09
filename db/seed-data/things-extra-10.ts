// ── Extra things seed data (batch 10) ──────────────────────────────────────
// Inventions & Discoveries, Geology & Minerals, Biology & Ecosystems,
// More dinosaurs, More extinct animals, More marine life,
// More insects, More birds, More plants

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [
  {
    id: "inventions",
    name: "Inventions & Discoveries",
    description:
      "The devices, machines, and breakthroughs that changed the course of human civilization, measured and compared.",
    sort_order: 58,
  },
  {
    id: "geology",
    name: "Geology & Minerals",
    description:
      "Rocks, crystals, faults, and formations that reveal the restless forces shaping the planet beneath our feet.",
    sort_order: 59,
  },
  {
    id: "biology",
    name: "Biology & Ecosystems",
    description:
      "The building blocks of life, from individual cells and seeds to the largest organisms and deepest roots on Earth.",
    sort_order: 60,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // INVENTIONS & DISCOVERIES (15)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "printing-press-gutenberg",
    name: "Gutenberg Printing Press",
    subtitle: "The machine that made mass literacy possible",
    category_id: "inventions",
    description:
      "Johannes Gutenberg's movable-type printing press, developed around 1440, is widely regarded as the most important invention of the second millennium. A single press could produce about 3,600 pages per day, compared to roughly 40 by hand copying. The wooden screw press weighed approximately 270 kg and stood about 2.1 meters tall. Within 50 years of its invention, more than 20 million volumes had been printed in Europe.",
    search_terms:
      "gutenberg|printing press|movable type|1440|renaissance|books",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 2.1, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 270, si_unit: "kg" },
      { dimension: "length", label: "Platen width", value: 0.42, si_unit: "m" },
      { dimension: "time", label: "Age of invention", value: 1.85e10, si_unit: "s", note: "Circa 1440" },
      { dimension: "count", label: "Pages per day", value: 3600, si_unit: "pages" },
    ],
  },

  {
    slug: "watt-steam-engine",
    name: "Watt Steam Engine",
    subtitle: "The engine that powered the Industrial Revolution",
    category_id: "inventions",
    description:
      "James Watt's improved steam engine, patented in 1769, transformed manufacturing, mining, and transportation. By adding a separate condenser, Watt reduced fuel consumption by about 75% compared to Newcomen's earlier design. A typical Boulton and Watt engine produced around 10 horsepower and stood roughly 3 meters tall. The unit of power, the watt, is named in his honor.",
    search_terms:
      "watt|steam engine|industrial revolution|boulton|condenser|1769",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Cylinder bore", value: 0.46, si_unit: "m" },
      { dimension: "mass", label: "Engine mass", value: 4500, si_unit: "kg" },
      { dimension: "power", label: "Typical output", value: 7460, si_unit: "W", note: "About 10 horsepower" },
      { dimension: "time", label: "Age of patent", value: 8.11e9, si_unit: "s", note: "Patented 1769" },
      { dimension: "pressure", label: "Operating pressure", value: 103000, si_unit: "Pa" },
    ],
  },

  {
    slug: "edison-light-bulb",
    name: "Edison Light Bulb",
    subtitle: "The glow that ended the age of darkness",
    category_id: "inventions",
    description:
      "Thomas Edison demonstrated his practical incandescent light bulb on December 31, 1879. His carbonized bamboo filament version lasted over 1,200 hours, making electric lighting commercially viable for the first time. The original bulb was about 7 cm in diameter and produced roughly 16 candlepower of light, equivalent to about 13 lumens per watt. Edison did not invent the light bulb outright, but his version was the first practical and long-lasting design.",
    search_terms:
      "edison|light bulb|incandescent|filament|1879|electric light",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Bulb diameter", value: 0.07, si_unit: "m" },
      { dimension: "length", label: "Overall length", value: 0.12, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.03, si_unit: "kg" },
      { dimension: "power", label: "Power consumption", value: 100, si_unit: "W" },
      { dimension: "time", label: "Filament lifespan", value: 4.32e6, si_unit: "s", note: "About 1,200 hours" },
      { dimension: "temperature", label: "Filament temperature", value: 2700, si_unit: "K" },
    ],
  },

  {
    slug: "magnetic-compass",
    name: "Magnetic Compass",
    subtitle: "A magnetized needle that reshaped global navigation",
    category_id: "inventions",
    description:
      "The magnetic compass was first used for navigation in China during the Song Dynasty around the 11th century. A typical early mariner's compass consisted of a magnetized iron needle floating in a bowl of water, later mounted on a pivot inside a brass case about 10 cm in diameter. This simple device enabled the Age of Exploration and made ocean crossings possible without relying solely on visible stars.",
    search_terms:
      "compass|magnetic|navigation|song dynasty|mariner|needle",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Case diameter", value: 0.10, si_unit: "m" },
      { dimension: "length", label: "Needle length", value: 0.06, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.25, si_unit: "kg" },
      { dimension: "length", label: "Case depth", value: 0.04, si_unit: "m" },
      { dimension: "time", label: "Age of invention", value: 3.15e10, si_unit: "s", note: "Circa 1040 CE" },
    ],
  },

  {
    slug: "galileo-telescope",
    name: "Galileo's Telescope",
    subtitle: "The tube that revealed Jupiter's moons",
    category_id: "inventions",
    description:
      "In 1609, Galileo Galilei built an improved refracting telescope with about 20x magnification. The instrument was roughly 1.2 meters long with a lens diameter of about 3.7 cm. With it, he discovered the four largest moons of Jupiter, observed the phases of Venus, and saw craters on the Moon. His observations provided key evidence supporting the Copernican heliocentric model of the solar system.",
    search_terms:
      "galileo|telescope|refracting|jupiter moons|1609|heliocentric",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tube length", value: 1.2, si_unit: "m" },
      { dimension: "length", label: "Objective lens diameter", value: 0.037, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 1.5, si_unit: "kg" },
      { dimension: "length", label: "Tube diameter", value: 0.05, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.32e10, si_unit: "s", note: "Built in 1609" },
      { dimension: "count", label: "Magnification", value: 20, si_unit: "x" },
    ],
  },

  {
    slug: "penicillin-mold-culture",
    name: "Penicillin Mold Culture",
    subtitle: "A contaminated petri dish that saved millions of lives",
    category_id: "inventions",
    description:
      "In 1928, Alexander Fleming noticed that a mold colony of Penicillium notatum had contaminated one of his staphylococcus cultures, creating a bacteria-free zone around it. The original petri dish was about 9 cm in diameter, and the mold colony measured roughly 2 cm across. This accidental discovery led to the development of penicillin, the first widely used antibiotic, which has since saved an estimated 200 million lives.",
    search_terms:
      "penicillin|fleming|mold|antibiotic|1928|petri dish|bacteria",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Petri dish diameter", value: 0.09, si_unit: "m" },
      { dimension: "length", label: "Mold colony diameter", value: 0.02, si_unit: "m" },
      { dimension: "area", label: "Clear zone area", value: 0.0012, si_unit: "m^2", note: "Bacteria-free ring" },
      { dimension: "mass", label: "Petri dish mass", value: 0.05, si_unit: "kg" },
      { dimension: "time", label: "Age of discovery", value: 3.09e9, si_unit: "s", note: "Discovered 1928" },
    ],
  },

  {
    slug: "dynamite-stick",
    name: "Dynamite Stick",
    subtitle: "Alfred Nobel's explosive invention that moved mountains",
    category_id: "inventions",
    description:
      "Alfred Nobel patented dynamite in 1867 after discovering that nitroglycerin could be stabilized by mixing it with diatomaceous earth. A standard stick of dynamite is about 20 cm long and 3.2 cm in diameter, weighing roughly 190 grams. A single stick releases about 1 megajoule of energy when detonated. Nobel's guilt over dynamite's destructive use in warfare led him to establish the Nobel Prizes.",
    search_terms:
      "dynamite|nobel|explosive|nitroglycerin|1867|mining|demolition",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.20, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.032, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.19, si_unit: "kg" },
      { dimension: "energy", label: "Energy released", value: 1e6, si_unit: "J" },
      { dimension: "speed", label: "Detonation velocity", value: 6000, si_unit: "m/s" },
      { dimension: "time", label: "Age of patent", value: 5.02e9, si_unit: "s", note: "Patented 1867" },
    ],
  },

  {
    slug: "first-transistor",
    name: "First Transistor",
    subtitle: "A tiny device that launched the digital age",
    category_id: "inventions",
    description:
      "The first working transistor was demonstrated at Bell Labs on December 23, 1947, by John Bardeen and Walter Brattain. This point-contact transistor was about 1.3 cm tall and sat on a small germanium crystal slab. It could amplify electrical signals by a factor of about 100. Today, a single modern chip contains billions of transistors, but this original one took two physicists and a lab bench to operate.",
    search_terms:
      "transistor|bell labs|bardeen|brattain|1947|semiconductor|germanium",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.013, si_unit: "m" },
      { dimension: "length", label: "Crystal width", value: 0.02, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 0.01, si_unit: "kg" },
      { dimension: "power", label: "Power gain", value: 0.01, si_unit: "W" },
      { dimension: "time", label: "Age", value: 2.48e9, si_unit: "s", note: "Demonstrated December 1947" },
    ],
  },

  {
    slug: "ancient-wheel",
    name: "Ancient Wheel",
    subtitle: "The circular invention that everything else rolled from",
    category_id: "inventions",
    description:
      "The oldest known wheel was found in the Ljubljana Marshes of Slovenia, dating to around 3150 BCE. It is a solid wooden disc about 72 cm in diameter and 5 cm thick, made from ash and oak. The wheel was part of a two-wheeled cart. Surprisingly, the potter's wheel may have been invented before the transport wheel. This simple rotary device became the foundation for countless later technologies.",
    search_terms:
      "wheel|ancient|ljubljana|slovenia|3150 bce|invention|cart",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.72, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.05, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 9.5, si_unit: "kg" },
      { dimension: "length", label: "Axle hole diameter", value: 0.05, si_unit: "m" },
      { dimension: "time", label: "Age", value: 1.63e11, si_unit: "s", note: "Circa 3150 BCE" },
      { dimension: "area", label: "Face area", value: 0.407, si_unit: "m^2" },
    ],
  },

  {
    slug: "edison-phonograph",
    name: "Edison Phonograph",
    subtitle: "The first machine to record and play back sound",
    category_id: "inventions",
    description:
      "Thomas Edison invented the phonograph in 1877, making it the first device capable of both recording and reproducing sound. The original tin-foil phonograph used a hand-cranked cylinder wrapped in tin foil, with a stylus that traced grooves as sound vibrated a diaphragm. The machine was about 46 cm long and weighed around 6 kg. Edison reportedly shouted 'Mary Had a Little Lamb' into the device for the first recording.",
    search_terms:
      "phonograph|edison|1877|sound recording|tin foil|cylinder|gramophone",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.46, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 6, si_unit: "kg" },
      { dimension: "length", label: "Cylinder diameter", value: 0.10, si_unit: "m" },
      { dimension: "time", label: "Age of invention", value: 4.7e9, si_unit: "s", note: "Invented 1877" },
      { dimension: "frequency", label: "Cylinder rotation speed", value: 2.67, si_unit: "Hz", note: "About 160 rpm" },
    ],
  },

  {
    slug: "optical-microscope",
    name: "Optical Microscope",
    subtitle: "The lens system that revealed a hidden world",
    category_id: "inventions",
    description:
      "The compound optical microscope was developed in the late 16th century, with Antonie van Leeuwenhoek producing some of the finest early models in the 1670s. A typical modern optical microscope stands about 40 cm tall, weighs around 5 kg, and can magnify objects up to 2,000 times their actual size. The theoretical resolution limit is about 200 nanometers, constrained by the wavelength of visible light.",
    search_terms:
      "microscope|optical|leeuwenhoek|magnification|lens|compound",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.40, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 5, si_unit: "kg" },
      { dimension: "length", label: "Resolution limit", value: 2e-7, si_unit: "m", note: "About 200 nanometers" },
      { dimension: "length", label: "Base footprint width", value: 0.20, si_unit: "m" },
      { dimension: "count", label: "Maximum magnification", value: 2000, si_unit: "x" },
      { dimension: "length", label: "Objective lens diameter", value: 0.004, si_unit: "m" },
    ],
  },

  {
    slug: "telegraph-key",
    name: "Telegraph Key",
    subtitle: "The tapping device that shrank the world",
    category_id: "inventions",
    description:
      "The telegraph key, central to Samuel Morse's electric telegraph system patented in 1840, allowed operators to send messages as electrical pulses over long distances. A standard Morse key is about 15 cm long and 6 cm tall, weighing roughly 0.5 kg. The first telegraph message, 'What hath God wrought,' was sent from Washington to Baltimore in 1844 across 61 km of wire. At peak use, skilled operators could send about 30 words per minute.",
    search_terms:
      "telegraph|morse code|key|samuel morse|1844|electrical communication",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.06, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.5, si_unit: "kg" },
      { dimension: "length", label: "First message distance", value: 61000, si_unit: "m", note: "Washington to Baltimore" },
      { dimension: "time", label: "Age of first message", value: 5.74e9, si_unit: "s", note: "Sent May 24, 1844" },
    ],
  },

  {
    slug: "vaccination-syringe",
    name: "Vaccination Syringe",
    subtitle: "The needle that made deadly diseases a memory",
    category_id: "inventions",
    description:
      "Edward Jenner performed the first vaccination in 1796, using material from a cowpox lesion to immunize against smallpox. The modern hypodermic syringe was developed by Alexander Wood and Charles Pravaz in the 1850s. A standard vaccination syringe holds about 0.5 to 1 mL, is approximately 8 cm long, and uses a needle with a bore of about 0.5 mm. Vaccination has since prevented an estimated 154 million deaths over the past 50 years.",
    search_terms:
      "syringe|vaccination|jenner|needle|immunization|smallpox|hypodermic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Syringe length", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Needle length", value: 0.025, si_unit: "m" },
      { dimension: "length", label: "Needle bore", value: 5e-4, si_unit: "m" },
      { dimension: "volume", label: "Dose volume", value: 5e-7, si_unit: "m^3", note: "0.5 mL" },
      { dimension: "mass", label: "Mass (filled)", value: 0.005, si_unit: "kg" },
      { dimension: "time", label: "Age of first vaccination", value: 7.25e9, si_unit: "s", note: "Jenner, 1796" },
    ],
  },

  {
    slug: "spinning-jenny",
    name: "Spinning Jenny",
    subtitle: "The multi-spindle frame that turbocharged textile production",
    category_id: "inventions",
    description:
      "James Hargreaves invented the spinning jenny around 1764, enabling a single worker to operate eight spindles simultaneously instead of just one. The original machine was about 1.2 meters wide and 0.9 meters tall, built from wood and iron. By the 1780s, improved versions could handle 120 spindles at once. The spinning jenny was a key driver of the Industrial Revolution, slashing the cost of yarn and transforming the British textile industry.",
    search_terms:
      "spinning jenny|hargreaves|textile|spindle|industrial revolution|1764|yarn",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 1.2, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.9, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 30, si_unit: "kg" },
      { dimension: "count", label: "Spindles (original)", value: 8, si_unit: "spindles" },
      { dimension: "time", label: "Age of invention", value: 8.27e9, si_unit: "s", note: "Circa 1764" },
    ],
  },

  {
    slug: "daguerreotype-camera",
    name: "Daguerreotype Camera",
    subtitle: "The first camera to capture a permanent photograph",
    category_id: "inventions",
    description:
      "Louis Daguerre announced the daguerreotype process in 1839, creating the first practical photographic method. The camera itself resembled a large wooden box about 30 cm long, 25 cm wide, and 25 cm tall, weighing roughly 5 kg. Exposure times initially required 15 to 30 minutes of perfectly still sitting, though improvements reduced this to under a minute. The silvered copper plates produced eerily detailed, mirror-like images that still astound viewers today.",
    search_terms:
      "daguerreotype|daguerre|camera|first photograph|1839|photography|silver plate",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.30, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 5, si_unit: "kg" },
      { dimension: "time", label: "Typical exposure time", value: 900, si_unit: "s", note: "Early models, about 15 minutes" },
      { dimension: "time", label: "Age of invention", value: 5.9e9, si_unit: "s", note: "Announced 1839" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GEOLOGY & MINERALS (15)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "rough-diamond",
    name: "Rough Diamond",
    subtitle: "The hardest natural material, fresh from deep underground",
    category_id: "geology",
    description:
      "A typical gem-quality rough diamond is a translucent octahedral crystal about 1 cm across, formed at depths of 150 to 200 km under pressures of about 5 gigapascals and temperatures above 1,300 K. Diamonds are brought to the surface by volcanic eruptions through kimberlite pipes. Despite being the hardest known natural substance (10 on the Mohs scale), diamond can be shattered by a hammer strike along its cleavage plane.",
    search_terms:
      "diamond|rough diamond|gemstone|carbon|kimberlite|hardest mineral",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical diameter", value: 0.01, si_unit: "m" },
      { dimension: "mass", label: "Typical mass (1 carat)", value: 0.0002, si_unit: "kg" },
      { dimension: "pressure", label: "Formation pressure", value: 5e9, si_unit: "Pa" },
      { dimension: "temperature", label: "Formation temperature", value: 1400, si_unit: "K" },
      { dimension: "length", label: "Formation depth", value: 175000, si_unit: "m" },
    ],
  },

  {
    slug: "quartz-crystal",
    name: "Quartz Crystal",
    subtitle: "The most common mineral in the Earth's continental crust",
    category_id: "geology",
    description:
      "Quartz is the second most abundant mineral in the Earth's continental crust, made of silicon dioxide arranged in a continuous framework of SiO4 tetrahedra. A typical collectible quartz crystal point is about 10 cm long and 3 cm wide. Quartz has a hardness of 7 on the Mohs scale and exhibits piezoelectric properties, meaning it generates voltage when compressed. This property makes it essential for watches, radios, and electronic oscillators.",
    search_terms:
      "quartz|crystal|silicon dioxide|mineral|piezoelectric|rock crystal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical length", value: 0.10, si_unit: "m" },
      { dimension: "length", label: "Typical width", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Typical specimen mass", value: 0.15, si_unit: "kg" },
      { dimension: "temperature", label: "Melting point", value: 1986, si_unit: "K" },
      { dimension: "frequency", label: "Watch crystal frequency", value: 32768, si_unit: "Hz", note: "Standard quartz watch oscillation" },
    ],
  },

  {
    slug: "obsidian-blade",
    name: "Obsidian Blade",
    subtitle: "Volcanic glass sharper than a steel scalpel",
    category_id: "geology",
    description:
      "Obsidian is a naturally occurring volcanic glass formed when felsic lava cools rapidly. Obsidian blades knapped by skilled artisans can have edges just a few nanometers thick, making them sharper than the finest surgical steel. Mesoamerican civilizations, particularly the Aztecs, used obsidian for weapons, tools, and mirrors. Some modern surgeons use obsidian scalpels for delicate procedures because they cause less tissue damage than steel.",
    search_terms:
      "obsidian|volcanic glass|blade|knapping|aztec|sharp|scalpel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical blade length", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Edge thickness", value: 3e-9, si_unit: "m", note: "A few nanometers at the edge" },
      { dimension: "mass", label: "Blade mass", value: 0.05, si_unit: "kg" },
      { dimension: "length", label: "Blade width", value: 0.03, si_unit: "m" },
      { dimension: "temperature", label: "Formation temperature", value: 1073, si_unit: "K", note: "Lava cooling point" },
    ],
  },

  {
    slug: "granite-block",
    name: "Granite Block",
    subtitle: "The workhorse rock beneath continents and inside monuments",
    category_id: "geology",
    description:
      "Granite is an intrusive igneous rock formed from slowly cooling magma deep within the Earth. A standard quarry block measures about 3 m by 1.5 m by 1.5 m and weighs roughly 18 tonnes. Granite has a compressive strength of about 200 megapascals, making it one of the strongest commonly available building stones. The pyramids of Giza, Mount Rushmore, and countless government buildings rely on granite for durability.",
    search_terms:
      "granite|igneous rock|quarry|building stone|countertop|plutonic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Block length", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Block width", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Block height", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Block mass", value: 18000, si_unit: "kg" },
      { dimension: "volume", label: "Block volume", value: 6.75, si_unit: "m^3" },
      { dimension: "pressure", label: "Compressive strength", value: 2e8, si_unit: "Pa" },
    ],
  },

  {
    slug: "amethyst-geode",
    name: "Amethyst Geode",
    subtitle: "A hollow rock hiding a purple crystal cathedral inside",
    category_id: "geology",
    description:
      "An amethyst geode is a hollow rock lined with purple quartz crystals formed inside volcanic gas bubbles over millions of years. A large display geode might be 60 cm tall and weigh 30 kg. The purple color comes from iron impurities and natural irradiation within the crystal lattice. The largest known amethyst geode, the Empress of Uruguay, stands 3.27 meters tall and weighs 2,500 kg. Most commercial geodes come from southern Brazil and Uruguay.",
    search_terms:
      "amethyst|geode|purple quartz|crystal|brazil|uruguay|volcanic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical display height", value: 0.60, si_unit: "m" },
      { dimension: "length", label: "Typical width", value: 0.35, si_unit: "m" },
      { dimension: "mass", label: "Typical mass", value: 30, si_unit: "kg" },
      { dimension: "length", label: "Crystal point length", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Largest known geode height", value: 3.27, si_unit: "m", note: "Empress of Uruguay" },
      { dimension: "mass", label: "Largest known geode mass", value: 2500, si_unit: "kg" },
    ],
  },

  {
    slug: "hoba-meteorite",
    name: "Hoba Meteorite",
    subtitle: "The largest known meteorite still lying where it fell",
    category_id: "geology",
    description:
      "The Hoba meteorite in Namibia is the largest known intact meteorite on Earth, estimated to have fallen about 80,000 years ago. It measures about 2.7 m by 2.7 m by 0.9 m and weighs approximately 60 tonnes. Composed of 84% iron and 16% nickel, it has never been moved from its landing site. The meteorite left no visible impact crater, likely because its flat shape and the atmosphere slowed it enough to land at a relatively low terminal velocity.",
    search_terms:
      "hoba|meteorite|namibia|largest meteorite|iron|nickel|space rock",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 2.7, si_unit: "m" },
      { dimension: "length", label: "Width", value: 2.7, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.9, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 60000, si_unit: "kg" },
      { dimension: "volume", label: "Estimated volume", value: 4.5, si_unit: "m^3" },
      { dimension: "time", label: "Time since impact", value: 2.52e12, si_unit: "s", note: "About 80,000 years ago" },
    ],
  },

  {
    slug: "naica-giant-crystal",
    name: "Giant Crystal of Naica",
    subtitle: "A selenite beam longer than a school bus",
    category_id: "geology",
    description:
      "The Cave of the Crystals in Naica, Mexico, contains the largest natural crystals ever found. The biggest selenite (gypsum) crystal measures about 12 meters long and 4 meters in diameter, weighing an estimated 55 tonnes. The crystals grew over roughly 500,000 years in water saturated with calcium sulfate at a constant temperature of about 331 K. The cave is so hot and humid that humans can only survive inside for about 10 minutes without cooling suits.",
    search_terms:
      "naica|giant crystal|selenite|gypsum|cave of crystals|mexico|chihuahua",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Largest crystal length", value: 12, si_unit: "m" },
      { dimension: "length", label: "Largest crystal diameter", value: 4, si_unit: "m" },
      { dimension: "mass", label: "Largest crystal mass", value: 55000, si_unit: "kg" },
      { dimension: "temperature", label: "Cave temperature", value: 331, si_unit: "K", note: "About 58 degrees C" },
      { dimension: "time", label: "Growth period", value: 1.58e13, si_unit: "s", note: "About 500,000 years" },
    ],
  },

  {
    slug: "san-andreas-fault",
    name: "San Andreas Fault",
    subtitle: "The 1,200 km crack running through California",
    category_id: "geology",
    description:
      "The San Andreas Fault is a transform plate boundary stretching about 1,200 km through California, marking where the Pacific and North American tectonic plates grind past each other. The fault zone can be up to 1.6 km wide in places. The plates move at an average rate of about 46 mm per year. Major earthquakes along the fault include the devastating 1906 San Francisco earthquake (magnitude 7.9) and the 1857 Fort Tejon earthquake (magnitude 7.9).",
    search_terms:
      "san andreas|fault|california|tectonic|earthquake|pacific plate|transform boundary",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1200000, si_unit: "m" },
      { dimension: "length", label: "Fault zone width", value: 1600, si_unit: "m", note: "At widest points" },
      { dimension: "speed", label: "Plate movement rate", value: 1.46e-9, si_unit: "m/s", note: "About 46 mm per year" },
      { dimension: "length", label: "Maximum depth", value: 16000, si_unit: "m" },
      { dimension: "time", label: "Age of fault", value: 8.83e14, si_unit: "s", note: "About 28 million years" },
    ],
  },

  {
    slug: "mid-atlantic-ridge",
    name: "Mid-Atlantic Ridge",
    subtitle: "The longest mountain range on Earth, hidden underwater",
    category_id: "geology",
    description:
      "The Mid-Atlantic Ridge is a divergent tectonic plate boundary running roughly 16,000 km down the center of the Atlantic Ocean, from the Arctic to near Antarctica. It is the longest mountain range on Earth, mostly submerged beneath 2,500 m of water. Iceland is one of the few places where it rises above sea level. The ridge spreads at about 2.5 cm per year, continuously creating new oceanic crust as magma wells up from the mantle.",
    search_terms:
      "mid-atlantic ridge|ocean ridge|divergent boundary|tectonic|iceland|seafloor spreading",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 1.6e7, si_unit: "m" },
      { dimension: "length", label: "Average depth below surface", value: 2500, si_unit: "m" },
      { dimension: "speed", label: "Spreading rate", value: 7.9e-10, si_unit: "m/s", note: "About 2.5 cm per year" },
      { dimension: "length", label: "Ridge height above ocean floor", value: 3000, si_unit: "m" },
      { dimension: "length", label: "Rift valley width", value: 15000, si_unit: "m" },
    ],
  },

  {
    slug: "earths-inner-core",
    name: "Earth's Inner Core",
    subtitle: "A solid iron ball as hot as the surface of the Sun",
    category_id: "geology",
    description:
      "The Earth's inner core is a solid sphere of iron and nickel with a radius of about 1,220 km, sitting at the center of the planet beneath 5,150 km of liquid outer core, mantle, and crust. Despite temperatures reaching 5,400 K (comparable to the Sun's surface), the immense pressure of about 360 gigapascals keeps it solid. The inner core rotates slightly faster than the rest of the Earth and generates the planet's magnetic field through dynamo action in the surrounding liquid outer core.",
    search_terms:
      "inner core|earth core|iron|nickel|solid core|magnetic field|geophysics",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Radius", value: 1.22e6, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.0e23, si_unit: "kg" },
      { dimension: "temperature", label: "Temperature", value: 5400, si_unit: "K" },
      { dimension: "pressure", label: "Pressure at center", value: 3.6e11, si_unit: "Pa" },
      { dimension: "length", label: "Depth below surface", value: 5.15e6, si_unit: "m" },
    ],
  },

  {
    slug: "giants-causeway-column",
    name: "Giant's Causeway Column",
    subtitle: "A hexagonal basalt pillar carved by cooling lava",
    category_id: "geology",
    description:
      "The Giant's Causeway in Northern Ireland consists of roughly 40,000 interlocking basalt columns formed by an ancient volcanic eruption about 60 million years ago. Most columns are hexagonal, though some have four, five, seven, or eight sides. A typical column is about 30 to 40 cm across and up to 12 meters tall. The remarkably regular geometry results from the slow, even cooling and contraction of thick lava flows. Legend attributes the causeway to the giant Finn McCool.",
    search_terms:
      "giants causeway|basalt|columns|hexagonal|northern ireland|volcanic|finn mccool",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical column height", value: 6, si_unit: "m", note: "Tallest reach 12 m" },
      { dimension: "length", label: "Column diameter", value: 0.38, si_unit: "m" },
      { dimension: "mass", label: "Single column mass", value: 1800, si_unit: "kg", note: "Estimated for 6 m column" },
      { dimension: "count", label: "Total columns", value: 40000, si_unit: "columns" },
      { dimension: "time", label: "Age", value: 1.89e15, si_unit: "s", note: "About 60 million years" },
      { dimension: "area", label: "Column cross-section", value: 0.114, si_unit: "m^2" },
    ],
  },

  {
    slug: "pumice-stone",
    name: "Pumice Stone",
    subtitle: "The only rock that floats on water",
    category_id: "geology",
    description:
      "Pumice is a lightweight volcanic rock formed when gas-rich lava is ejected during an explosive eruption and cools so rapidly that the gas bubbles are trapped inside. With a density often below 1,000 kg per cubic meter, pumice is the only rock that routinely floats on water. A typical bathroom pumice stone is about 10 cm long and weighs just 50 grams. In 2012, a pumice raft covering 26,000 square kilometers was spotted floating in the Pacific after an underwater eruption near Tonga.",
    search_terms:
      "pumice|volcanic|floating rock|lightweight|eruption|vesicular",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical length", value: 0.10, si_unit: "m" },
      { dimension: "mass", label: "Typical mass", value: 0.05, si_unit: "kg" },
      { dimension: "volume", label: "Typical volume", value: 1e-4, si_unit: "m^3" },
      { dimension: "temperature", label: "Formation temperature", value: 1173, si_unit: "K" },
      { dimension: "area", label: "2012 pumice raft area", value: 2.6e10, si_unit: "m^2", note: "Near Tonga" },
    ],
  },

  {
    slug: "fools-gold-nugget",
    name: "Fool's Gold Nugget",
    subtitle: "Iron pyrite, the mineral that fooled countless prospectors",
    category_id: "geology",
    description:
      "Iron pyrite (FeS2) earned the nickname 'fool's gold' because its brassy yellow color and metallic luster have deceived hopeful prospectors for centuries. A typical collectible pyrite cube is about 3 cm on each side and weighs around 130 grams. Pyrite is actually quite common and has a density of about 5,010 kg per cubic meter, significantly heavier than real gold's color but far less dense than gold itself (19,300 kg/m3). Pyrite strikes sparks when hit with steel and was historically used in flintlock firearms.",
    search_terms:
      "pyrite|fools gold|iron sulfide|prospector|mineral|metallic|FeS2",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical cube edge", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Typical cube mass", value: 0.135, si_unit: "kg" },
      { dimension: "volume", label: "Cube volume", value: 2.7e-5, si_unit: "m^3" },
      { dimension: "length", label: "Crystal face diagonal", value: 0.042, si_unit: "m" },
      { dimension: "temperature", label: "Decomposition temperature", value: 813, si_unit: "K" },
    ],
  },

  {
    slug: "petrified-wood-log",
    name: "Petrified Wood Log",
    subtitle: "An ancient tree turned to stone, cell by cell",
    category_id: "geology",
    description:
      "Petrified wood forms when fallen trees are buried under sediment and mineral-rich water gradually replaces the organic material with silica, calcite, or pyrite, preserving the original wood structure at a cellular level. A typical museum specimen is about 1 meter long and 30 cm in diameter, weighing roughly 180 kg. The Petrified Forest National Park in Arizona contains logs over 60 meters long dating back 225 million years to the Late Triassic period.",
    search_terms:
      "petrified wood|fossilized tree|silicified|triassic|arizona|mineral replacement",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical specimen length", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Typical diameter", value: 0.30, si_unit: "m" },
      { dimension: "mass", label: "Typical mass", value: 180, si_unit: "kg" },
      { dimension: "length", label: "Longest known log", value: 60, si_unit: "m", note: "Petrified Forest, Arizona" },
      { dimension: "time", label: "Age", value: 7.1e15, si_unit: "s", note: "About 225 million years" },
    ],
  },

  {
    slug: "delicate-arch",
    name: "Delicate Arch",
    subtitle: "A freestanding sandstone arch shaped by wind and water",
    category_id: "geology",
    description:
      "Delicate Arch in Arches National Park, Utah, is perhaps the most famous natural arch in the world and appears on Utah's license plates. It stands about 16 meters tall with an opening roughly 10 meters wide and 4 meters deep. The arch is made of Entrada Sandstone, deposited about 150 million years ago. Erosion from wind, water, and frost created its distinctive freestanding shape over millions of years. Geologists estimate it could collapse within the next few thousand years.",
    search_terms:
      "delicate arch|arches national park|utah|sandstone|natural arch|erosion",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 16, si_unit: "m" },
      { dimension: "length", label: "Opening width", value: 10, si_unit: "m" },
      { dimension: "length", label: "Opening height", value: 14, si_unit: "m" },
      { dimension: "length", label: "Arch thickness", value: 2, si_unit: "m" },
      { dimension: "time", label: "Sandstone age", value: 4.73e15, si_unit: "s", note: "About 150 million years" },
      { dimension: "mass", label: "Estimated mass", value: 2.5e6, si_unit: "kg" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BIOLOGY & ECOSYSTEMS (15)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "honey-fungus",
    name: "Honey Fungus (Armillaria)",
    subtitle: "The largest living organism on Earth by area",
    category_id: "biology",
    description:
      "A single specimen of Armillaria ostoyae in Oregon's Malheur National Forest covers about 9.6 square kilometers, making it the largest known living organism on Earth by area. Estimated to be between 2,400 and 8,650 years old, this massive fungal network spreads underground through dark root-like structures called rhizomorphs. Above ground, it produces clusters of honey-colored mushrooms each autumn. Despite its size, most of its biomass is hidden beneath the soil, slowly killing trees by infecting their roots.",
    search_terms:
      "honey fungus|armillaria|largest organism|humongous fungus|oregon|mushroom|rhizomorph",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total area", value: 9.6e6, si_unit: "m^2", note: "About 9.6 square kilometers" },
      { dimension: "mass", label: "Estimated mass", value: 6e6, si_unit: "kg", note: "About 6,000 tonnes" },
      { dimension: "time", label: "Estimated age", value: 1.72e11, si_unit: "s", note: "About 2,400 to 8,650 years" },
      { dimension: "length", label: "Rhizomorph diameter", value: 0.003, si_unit: "m" },
      { dimension: "length", label: "Mushroom cap diameter", value: 0.08, si_unit: "m" },
    ],
  },

  {
    slug: "methuselah-tree",
    name: "Methuselah (Bristlecone Pine)",
    subtitle: "The oldest known living non-clonal tree on Earth",
    category_id: "biology",
    description:
      "Methuselah is a Great Basin bristlecone pine (Pinus longaeva) growing in the White Mountains of eastern California. At approximately 4,856 years old, it germinated around 2832 BCE, making it the oldest known living non-clonal organism. The tree stands about 15 meters tall in a harsh, windswept environment at 3,000 meters elevation. Its exact location is kept secret by the U.S. Forest Service to protect it from vandalism. The wood is so dense and resinous that it resists rot and insect damage.",
    search_terms:
      "methuselah|bristlecone pine|oldest tree|white mountains|california|ancient tree",
    featured: 0,
    measurements: [
      { dimension: "time", label: "Age", value: 1.53e11, si_unit: "s", note: "About 4,856 years" },
      { dimension: "length", label: "Height", value: 15, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Elevation", value: 3000, si_unit: "m" },
      { dimension: "length", label: "Root spread radius", value: 5, si_unit: "m" },
    ],
  },

  {
    slug: "bumblebee-bat",
    name: "Bumblebee Bat",
    subtitle: "The smallest mammal on Earth by length",
    category_id: "biology",
    description:
      "Kitti's hog-nosed bat (Craseonycteris thonglongyai), commonly called the bumblebee bat, is the smallest mammal in the world by body length, measuring just 29 to 33 mm from head to tail. Found only in limestone caves in Thailand and Myanmar, it weighs about 2 grams, roughly the same as a dime. Its wingspan of 15 cm is modest even for a bat, and its roost colonies rarely exceed 100 individuals. The species was only discovered in 1973.",
    search_terms:
      "bumblebee bat|kittis hog-nosed bat|smallest mammal|thailand|craseonycteris|tiny bat",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.030, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.002, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Forearm length", value: 0.025, si_unit: "m" },
      { dimension: "frequency", label: "Echolocation frequency", value: 73000, si_unit: "Hz" },
    ],
  },

  {
    slug: "coco-de-mer-seed",
    name: "Coco de Mer Seed",
    subtitle: "The largest seed in the plant kingdom",
    category_id: "biology",
    description:
      "The coco de mer (Lodoicea maldivica) produces the largest seed of any plant, weighing up to 25 kg and measuring about 50 cm long. Found only in the Seychelles, the seed takes 6 to 7 years to mature and another 2 years to germinate. The palm tree itself can grow 34 meters tall and live over 300 years. Before the Seychelles were discovered, the enormous seeds occasionally washed up on distant shores, leading to legends about a mythical underwater palm tree.",
    search_terms:
      "coco de mer|largest seed|seychelles|lodoicea|double coconut|palm seed",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Seed length", value: 0.50, si_unit: "m" },
      { dimension: "mass", label: "Seed mass", value: 25, si_unit: "kg" },
      { dimension: "length", label: "Seed width", value: 0.30, si_unit: "m" },
      { dimension: "time", label: "Maturation time", value: 2.2e8, si_unit: "s", note: "About 7 years" },
      { dimension: "length", label: "Tree height", value: 34, si_unit: "m" },
    ],
  },

  {
    slug: "bioluminescent-dinoflagellate",
    name: "Bioluminescent Dinoflagellate",
    subtitle: "Single-celled plankton that make the ocean glow blue",
    category_id: "biology",
    description:
      "Bioluminescent dinoflagellates, particularly species like Noctiluca scintillans, are single-celled marine organisms that produce blue-green light when disturbed. Each cell is about 0.2 to 2 mm in diameter and produces a flash lasting roughly 100 milliseconds. When billions concentrate in warm coastal waters, they create the spectacular glowing waves seen in places like the Maldives, Puerto Rico, and California. The light is produced by the enzyme luciferase acting on the substrate luciferin.",
    search_terms:
      "bioluminescent|dinoflagellate|noctiluca|glowing plankton|sea sparkle|luciferase",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell diameter", value: 5e-4, si_unit: "m", note: "0.2 to 2 mm range" },
      { dimension: "time", label: "Flash duration", value: 0.1, si_unit: "s" },
      { dimension: "mass", label: "Cell mass", value: 1e-9, si_unit: "kg", note: "About 1 microgram" },
      { dimension: "length", label: "Flagellum length", value: 5e-5, si_unit: "m" },
      { dimension: "energy", label: "Light energy per flash", value: 1e-13, si_unit: "J" },
    ],
  },

  {
    slug: "neuron-cell",
    name: "Neuron",
    subtitle: "The electrically excitable cell that makes thought possible",
    category_id: "biology",
    description:
      "A neuron is a specialized cell that transmits information through electrical and chemical signals. The human brain contains roughly 86 billion neurons. A typical motor neuron has a cell body about 20 micrometers in diameter, but its axon can stretch over a meter from the spinal cord to muscles in the foot. Signals travel along myelinated axons at speeds up to 120 meters per second. At rest, a neuron maintains a membrane potential of about negative 70 millivolts.",
    search_terms:
      "neuron|nerve cell|brain cell|axon|synapse|nervous system|electrical signal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cell body diameter", value: 2e-5, si_unit: "m", note: "About 20 micrometers" },
      { dimension: "length", label: "Longest axon", value: 1.0, si_unit: "m", note: "Spinal cord to foot" },
      { dimension: "speed", label: "Signal conduction speed", value: 120, si_unit: "m/s", note: "In myelinated axons" },
      { dimension: "mass", label: "Single neuron mass", value: 1e-9, si_unit: "kg" },
      { dimension: "count", label: "Neurons in human brain", value: 8.6e10, si_unit: "neurons" },
      { dimension: "frequency", label: "Maximum firing rate", value: 500, si_unit: "Hz" },
    ],
  },

  {
    slug: "chloroplast",
    name: "Chloroplast",
    subtitle: "The solar-powered organelle that feeds the planet",
    category_id: "biology",
    description:
      "Chloroplasts are the organelles in plant cells responsible for photosynthesis, converting light energy, water, and carbon dioxide into glucose and oxygen. A typical chloroplast is disc-shaped, about 5 micrometers in diameter and 2 micrometers thick. Each leaf cell contains 10 to 100 chloroplasts, and they contain their own DNA, a remnant of their origin as independent cyanobacteria engulfed by early eukaryotic cells roughly 1.5 billion years ago.",
    search_terms:
      "chloroplast|photosynthesis|organelle|plant cell|chlorophyll|thylakoid|green",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 5e-6, si_unit: "m", note: "About 5 micrometers" },
      { dimension: "length", label: "Thickness", value: 2e-6, si_unit: "m" },
      { dimension: "mass", label: "Single chloroplast mass", value: 5e-14, si_unit: "kg" },
      { dimension: "count", label: "Per leaf cell", value: 50, si_unit: "chloroplasts", note: "Typical range 10 to 100" },
      { dimension: "time", label: "Evolutionary age", value: 4.73e16, si_unit: "s", note: "About 1.5 billion years" },
    ],
  },

  {
    slug: "synapse-gap",
    name: "Synapse Gap",
    subtitle: "The 20-nanometer void between two nerve cells",
    category_id: "biology",
    description:
      "A synaptic cleft is the tiny gap between two neurons across which chemical neurotransmitters diffuse to transmit signals. The gap is only about 20 nanometers wide. Neurotransmitter molecules cross this gap in about 0.5 milliseconds. The human brain contains roughly 100 trillion synapses, and the strength of these connections changes with learning and experience through a process called synaptic plasticity. Each synapse is so small that about 50,000 could fit across the width of a human hair.",
    search_terms:
      "synapse|synaptic cleft|neurotransmitter|gap|nerve junction|brain|plasticity",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Gap width", value: 2e-8, si_unit: "m", note: "About 20 nanometers" },
      { dimension: "time", label: "Transmission time", value: 5e-4, si_unit: "s", note: "About 0.5 milliseconds" },
      { dimension: "length", label: "Vesicle diameter", value: 4e-8, si_unit: "m" },
      { dimension: "count", label: "Synapses in human brain", value: 1e14, si_unit: "synapses" },
      { dimension: "speed", label: "Neurotransmitter diffusion speed", value: 4e-5, si_unit: "m/s" },
    ],
  },

  {
    slug: "shepherds-tree-root",
    name: "Shepherd's Tree Root System",
    subtitle: "The deepest known root system of any plant",
    category_id: "biology",
    description:
      "The shepherd's tree (Boscia albitrunca) of the Kalahari Desert holds the record for the deepest documented root system, reaching 68 meters below the surface. The tree itself is modest, growing only 5 to 7 meters tall, but its extraordinary roots tap into deep water tables far below the desert floor. The tree is an important food source for desert wildlife, producing edible berries and leaves. Kalahari San people have used parts of the tree for food and medicine for thousands of years.",
    search_terms:
      "shepherds tree|boscia albitrunca|deepest root|kalahari|desert tree|root system",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Root depth", value: 68, si_unit: "m" },
      { dimension: "length", label: "Tree height", value: 6, si_unit: "m" },
      { dimension: "length", label: "Canopy diameter", value: 8, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 0.4, si_unit: "m" },
      { dimension: "mass", label: "Estimated tree mass", value: 2000, si_unit: "kg" },
    ],
  },

  {
    slug: "raphia-palm-leaf",
    name: "Raphia Palm Leaf",
    subtitle: "The longest leaf of any plant on Earth",
    category_id: "biology",
    description:
      "The raphia palm (Raphia regalis) produces the longest leaves of any plant species, with individual leaves reaching up to 25 meters in length and 3 meters in width. Native to tropical Africa, the palm itself can grow to 16 meters tall. The enormous pinnate leaves have been used for centuries to make raffia fiber for weaving, roofing, and rope. Each leaf can weigh over 100 kg and consists of hundreds of leaflets arranged along a central midrib.",
    search_terms:
      "raphia palm|longest leaf|raffia|tropical|africa|pinnate|palm leaf",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Leaf length", value: 25, si_unit: "m" },
      { dimension: "length", label: "Leaf width", value: 3, si_unit: "m" },
      { dimension: "mass", label: "Single leaf mass", value: 100, si_unit: "kg" },
      { dimension: "length", label: "Tree height", value: 16, si_unit: "m" },
      { dimension: "area", label: "Leaf area", value: 50, si_unit: "m^2", note: "Approximate total surface area" },
    ],
  },

  {
    slug: "tardigrade",
    name: "Tardigrade",
    subtitle: "A microscopic animal that survives the vacuum of space",
    category_id: "biology",
    description:
      "Tardigrades, also called water bears, are microscopic eight-legged animals found in every environment on Earth, from deep ocean trenches to mountaintops. A typical tardigrade is about 0.5 mm long and weighs approximately 1.5 micrograms. They can survive extreme conditions including temperatures from near absolute zero to 420 K, pressures six times greater than the deepest ocean, ionizing radiation hundreds of times the lethal human dose, and the vacuum of outer space. They achieve this through cryptobiosis, a state of suspended metabolism.",
    search_terms:
      "tardigrade|water bear|extremophile|microscopic|cryptobiosis|indestructible",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 5e-4, si_unit: "m", note: "About 0.5 mm" },
      { dimension: "mass", label: "Body mass", value: 1.5e-9, si_unit: "kg" },
      { dimension: "temperature", label: "Maximum survival temperature", value: 420, si_unit: "K" },
      { dimension: "temperature", label: "Minimum survival temperature", value: 1, si_unit: "K", note: "Near absolute zero" },
      { dimension: "pressure", label: "Maximum survival pressure", value: 6e8, si_unit: "Pa", note: "6,000 atmospheres" },
      { dimension: "count", label: "Known species", value: 1300, si_unit: "species" },
    ],
  },

  {
    slug: "tardigrade-egg",
    name: "Tardigrade Egg",
    subtitle: "A microscopic capsule with extraordinary survival skills",
    category_id: "biology",
    description:
      "Tardigrade eggs are even smaller than the adults, measuring about 50 to 80 micrometers in diameter. Some species produce smooth eggs laid directly onto surfaces, while others produce ornamented eggs with spines, knobs, or filaments that aid in attachment. The eggs can withstand many of the same extreme conditions as adults, including desiccation and radiation. Incubation takes roughly 5 to 40 days depending on the species and environmental conditions.",
    search_terms:
      "tardigrade egg|water bear egg|microscopic egg|extremophile egg|ornamented egg",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 6.5e-5, si_unit: "m", note: "About 65 micrometers" },
      { dimension: "mass", label: "Estimated mass", value: 1e-11, si_unit: "kg" },
      { dimension: "time", label: "Incubation time", value: 1.3e6, si_unit: "s", note: "About 5 to 40 days" },
      { dimension: "length", label: "Ornament spine length", value: 5e-6, si_unit: "m" },
      { dimension: "count", label: "Eggs per clutch", value: 6, si_unit: "eggs", note: "Typical range 1 to 30" },
    ],
  },

  {
    slug: "blue-whale-calf",
    name: "Blue Whale Calf",
    subtitle: "Born at 7 meters long and gaining 90 kg per day",
    category_id: "biology",
    description:
      "A newborn blue whale calf is already one of the largest animals on Earth at birth, measuring about 7 meters long and weighing approximately 2,700 kg. The calf drinks about 380 liters of its mother's fat-rich milk per day and gains roughly 90 kg each day during its first year. By the time it is weaned at 6 to 7 months old, the calf has nearly doubled in length to about 13 meters. Blue whale milk is about 35% fat, giving it the consistency of cottage cheese.",
    search_terms:
      "blue whale calf|baby whale|newborn whale|whale nursing|largest baby animal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Birth length", value: 7, si_unit: "m" },
      { dimension: "mass", label: "Birth mass", value: 2700, si_unit: "kg" },
      { dimension: "mass", label: "Daily weight gain", value: 90, si_unit: "kg" },
      { dimension: "volume", label: "Daily milk intake", value: 0.38, si_unit: "m^3", note: "About 380 liters" },
      { dimension: "length", label: "Length at weaning", value: 13, si_unit: "m" },
      { dimension: "time", label: "Weaning age", value: 1.73e7, si_unit: "s", note: "About 6 to 7 months" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE DINOSAURS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "giganotosaurus",
    name: "Giganotosaurus",
    subtitle: "The giant southern lizard that rivaled T. rex in size",
    category_id: "dinosaurs",
    description:
      "Giganotosaurus carolinii lived about 99 to 97 million years ago during the Late Cretaceous in what is now Argentina. At roughly 12 to 13 meters long and up to 8 tonnes, it was one of the largest known terrestrial carnivores. Its skull alone measured about 1.6 meters, slightly longer than that of Tyrannosaurus rex, though its brain was considerably smaller. Giganotosaurus likely hunted large sauropods like Argentinosaurus.",
    search_terms:
      "giganotosaurus|giant southern lizard|cretaceous|argentina|carnivore|theropod",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 12.5, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 8000, si_unit: "kg" },
      { dimension: "length", label: "Skull length", value: 1.6, si_unit: "m" },
      { dimension: "length", label: "Hip height", value: 3.5, si_unit: "m" },
      { dimension: "speed", label: "Estimated top speed", value: 12, si_unit: "m/s" },
      { dimension: "time", label: "Age of fossils", value: 3.1e15, si_unit: "s", note: "About 98 million years" },
    ],
  },

  {
    slug: "microraptor",
    name: "Microraptor",
    subtitle: "A four-winged feathered dinosaur the size of a crow",
    category_id: "dinosaurs",
    description:
      "Microraptor was a small, four-winged dromaeosaurid dinosaur that lived about 120 million years ago in what is now China. At just 77 cm long and weighing about 1 kg, it is one of the smallest known dinosaurs. Its long feathers on both arms and legs formed four wing-like surfaces, and studies suggest it could glide from tree to tree. Fossils even preserve the iridescent black sheen of its feathers, making it the first dinosaur whose color was scientifically determined.",
    search_terms:
      "microraptor|four-winged dinosaur|feathered dinosaur|gliding|china|dromaeosaurid",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.77, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.63, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.30, si_unit: "m" },
      { dimension: "time", label: "Age of fossils", value: 3.78e15, si_unit: "s", note: "About 120 million years" },
    ],
  },

  {
    slug: "argentinosaurus",
    name: "Argentinosaurus",
    subtitle: "Possibly the heaviest land animal that ever lived",
    category_id: "dinosaurs",
    description:
      "Argentinosaurus huinculensis lived about 96 to 94 million years ago in Late Cretaceous Argentina. Estimates place it at 30 to 40 meters long and 65 to 80 tonnes, making it a contender for the heaviest land animal in history. A single vertebra measured 1.59 meters across, and its femur was about 2.5 meters long. Despite its massive size, Argentinosaurus likely hatched from eggs no larger than a rugby ball, meaning hatchlings grew to over a thousand times their birth weight.",
    search_terms:
      "argentinosaurus|sauropod|largest dinosaur|argentina|cretaceous|titanosaur|heaviest",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 35, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 73000, si_unit: "kg" },
      { dimension: "length", label: "Femur length", value: 2.5, si_unit: "m" },
      { dimension: "length", label: "Vertebra width", value: 1.59, si_unit: "m" },
      { dimension: "length", label: "Hip height", value: 4.5, si_unit: "m" },
      { dimension: "time", label: "Age of fossils", value: 3.0e15, si_unit: "s", note: "About 95 million years" },
    ],
  },

  {
    slug: "quetzalcoatlus",
    name: "Quetzalcoatlus",
    subtitle: "The largest flying animal ever, tall as a giraffe",
    category_id: "dinosaurs",
    description:
      "Quetzalcoatlus northropi was a pterosaur that lived about 68 million years ago during the Late Cretaceous. With a wingspan of 10 to 11 meters, it was the largest known flying animal ever. Standing on the ground, it was as tall as a giraffe at about 5 meters. Despite its enormous size, it weighed only about 200 to 250 kg due to hollow bones and thin wing membranes. It likely launched itself into the air by vaulting on its powerful front limbs.",
    search_terms:
      "quetzalcoatlus|pterosaur|largest flying animal|cretaceous|wingspan|azhdarchid",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 10.5, si_unit: "m" },
      { dimension: "length", label: "Standing height", value: 5, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 225, si_unit: "kg" },
      { dimension: "length", label: "Skull length", value: 2.5, si_unit: "m", note: "Including elongated beak" },
      { dimension: "speed", label: "Estimated flight speed", value: 22, si_unit: "m/s" },
      { dimension: "time", label: "Age of fossils", value: 2.15e15, si_unit: "s", note: "About 68 million years" },
    ],
  },

  {
    slug: "compsognathus",
    name: "Compsognathus",
    subtitle: "A chicken-sized predator from the Late Jurassic",
    category_id: "dinosaurs",
    description:
      "Compsognathus longipes was one of the smallest known non-avian dinosaurs, measuring about 1 meter in length and weighing roughly 3 kg. It lived about 150 million years ago in what is now Europe. This agile bipedal predator fed on small lizards and insects, as confirmed by fossilized stomach contents. For over a century after its discovery in 1859, it was considered the smallest known dinosaur, a title it has since lost to several feathered species from China.",
    search_terms:
      "compsognathus|compie|small dinosaur|jurassic|chicken-sized|europe|theropod",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.0, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 3, si_unit: "kg" },
      { dimension: "length", label: "Hip height", value: 0.26, si_unit: "m" },
      { dimension: "length", label: "Skull length", value: 0.08, si_unit: "m" },
      { dimension: "speed", label: "Estimated top speed", value: 17, si_unit: "m/s" },
      { dimension: "time", label: "Age of fossils", value: 4.73e15, si_unit: "s", note: "About 150 million years" },
    ],
  },

  {
    slug: "parasaurolophus",
    name: "Parasaurolophus",
    subtitle: "The trombone-crested duck-billed dinosaur",
    category_id: "dinosaurs",
    description:
      "Parasaurolophus walkeri was a hadrosaurid that lived about 76 to 73 million years ago during the Late Cretaceous in North America. Its most distinctive feature was a long, backward-curving cranial crest up to 1.8 meters long, which contained hollow tubes connected to the nasal passages. Scientists believe the crest functioned as a resonating chamber, producing low-frequency sounds for communication. The animal was about 10 meters long and weighed roughly 2,500 kg.",
    search_terms:
      "parasaurolophus|hadrosaur|duck-billed|crest|cretaceous|north america|trombone",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 10, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 2500, si_unit: "kg" },
      { dimension: "length", label: "Crest length", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Hip height", value: 2.8, si_unit: "m" },
      { dimension: "frequency", label: "Estimated call frequency", value: 48, si_unit: "Hz", note: "Low-frequency resonance" },
      { dimension: "time", label: "Age of fossils", value: 2.37e15, si_unit: "s", note: "About 75 million years" },
    ],
  },

  {
    slug: "pachycephalosaurus",
    name: "Pachycephalosaurus",
    subtitle: "The thick-skulled headbutter of the Cretaceous",
    category_id: "dinosaurs",
    description:
      "Pachycephalosaurus wyomingensis lived about 70 to 66 million years ago during the Late Cretaceous in North America. Its domed skull was up to 25 cm thick, surrounded by bony knobs and short spikes. Whether it actually used its skull for head-butting combat is debated; some scientists suggest the dome was used for flank-butting or display instead. The animal was about 4.5 meters long and weighed roughly 450 kg. It was one of the last non-avian dinosaurs before the mass extinction.",
    search_terms:
      "pachycephalosaurus|thick skull|dome head|headbutt|cretaceous|marginocephalia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 4.5, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 450, si_unit: "kg" },
      { dimension: "length", label: "Skull dome thickness", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Skull length", value: 0.60, si_unit: "m" },
      { dimension: "length", label: "Hip height", value: 1.5, si_unit: "m" },
      { dimension: "time", label: "Age of fossils", value: 2.15e15, si_unit: "s", note: "About 68 million years" },
    ],
  },

  {
    slug: "therizinosaurus",
    name: "Therizinosaurus",
    subtitle: "The scythe lizard with meter-long finger claws",
    category_id: "dinosaurs",
    description:
      "Therizinosaurus cheloniformis lived about 70 million years ago in Late Cretaceous Mongolia. Its most striking feature was its enormous hand claws, the longest of any known animal at up to 1 meter in length. Despite its fearsome appearance, Therizinosaurus was likely an herbivore that used its claws to pull down branches. The animal stood about 5 meters tall and weighed roughly 5,000 kg. When first discovered, its claws were so unusual that scientists initially thought they belonged to a giant turtle.",
    search_terms:
      "therizinosaurus|scythe lizard|giant claws|mongolia|cretaceous|herbivore|theropod",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 10, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 5000, si_unit: "kg" },
      { dimension: "length", label: "Claw length", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Standing height", value: 5, si_unit: "m" },
      { dimension: "length", label: "Arm length", value: 2.5, si_unit: "m" },
      { dimension: "time", label: "Age of fossils", value: 2.21e15, si_unit: "s", note: "About 70 million years" },
    ],
  },

  {
    slug: "carnotaurus",
    name: "Carnotaurus",
    subtitle: "A horned predator with comically tiny arms",
    category_id: "dinosaurs",
    description:
      "Carnotaurus sastrei lived about 72 to 69 million years ago in Late Cretaceous Argentina. It was a large abelisaurid theropod about 8 meters long and 1,500 kg, distinguished by two thick horns above its eyes and arms even more vestigial than those of T. rex. Its forearms were so small they could not flex at the elbow. Carnotaurus had an unusually flexible skull that may have allowed it to strike prey with rapid biting motions, and skin impressions show it was covered in non-overlapping scales.",
    search_terms:
      "carnotaurus|meat-eating bull|horned dinosaur|argentina|abelisaurid|tiny arms",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 8, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1500, si_unit: "kg" },
      { dimension: "length", label: "Horn length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Forearm length", value: 0.14, si_unit: "m", note: "Extraordinarily small" },
      { dimension: "speed", label: "Estimated top speed", value: 14, si_unit: "m/s" },
      { dimension: "time", label: "Age of fossils", value: 2.24e15, si_unit: "s", note: "About 71 million years" },
    ],
  },

  {
    slug: "iguanodon",
    name: "Iguanodon",
    subtitle: "One of the first dinosaurs ever identified by science",
    category_id: "dinosaurs",
    description:
      "Iguanodon bernissartensis was one of the first three genera of dinosaurs formally named, described by Gideon Mantell in 1825. It lived about 126 to 122 million years ago during the Early Cretaceous across Europe. At roughly 10 meters long and 3,000 kg, this herbivore had a distinctive conical thumb spike about 15 cm long that may have been used for defense or foraging. Early reconstructions infamously placed this spike on the animal's nose like a horn.",
    search_terms:
      "iguanodon|iguana tooth|first dinosaur|mantell|cretaceous|thumb spike|herbivore",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 10, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 3000, si_unit: "kg" },
      { dimension: "length", label: "Thumb spike length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Hip height", value: 2.7, si_unit: "m" },
      { dimension: "length", label: "Skull length", value: 0.55, si_unit: "m" },
      { dimension: "time", label: "Age of fossils", value: 3.91e15, si_unit: "s", note: "About 124 million years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE EXTINCT ANIMALS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "saber-toothed-cat",
    name: "Saber-Toothed Cat (Smilodon)",
    subtitle: "The iconic ice-age predator with 28 cm canine teeth",
    category_id: "dinosaurs",
    description:
      "Smilodon fatalis was a large predatory cat that lived from about 2.5 million to 10,000 years ago in the Americas. Its upper canine teeth grew up to 28 cm long, though only about 17 cm protruded from the gums. Despite the name, it was not closely related to modern tigers or lions. Smilodon weighed roughly 280 kg and had a stocky, powerful build with shorter legs than modern big cats. Over 160,000 bones from La Brea Tar Pits in Los Angeles represent thousands of individual Smilodon.",
    search_terms:
      "saber-toothed cat|smilodon|ice age|canine teeth|la brea|predator|pleistocene",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.75, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 280, si_unit: "kg" },
      { dimension: "length", label: "Canine tooth length", value: 0.28, si_unit: "m" },
      { dimension: "length", label: "Shoulder height", value: 1.0, si_unit: "m" },
      { dimension: "force", label: "Estimated bite force", value: 4200, si_unit: "N" },
      { dimension: "time", label: "Extinction", value: 3.15e11, si_unit: "s", note: "About 10,000 years ago" },
    ],
  },

  {
    slug: "giant-ground-sloth",
    name: "Giant Ground Sloth (Megatherium)",
    subtitle: "A 6-meter herbivore that could stand on two legs",
    category_id: "dinosaurs",
    description:
      "Megatherium americanum was one of the largest land mammals ever, living from about 5 million to 10,000 years ago in South America. Standing upright on its hind legs and tail, it reached about 6 meters tall and weighed roughly 4,000 kg. Unlike modern tree sloths, it lived on the ground and used its massive curved claws (up to 50 cm long) to dig and pull down tree branches. Charles Darwin collected Megatherium fossils during the voyage of the Beagle.",
    search_terms:
      "giant ground sloth|megatherium|pleistocene|south america|darwin|extinct mammal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 6, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 4000, si_unit: "kg" },
      { dimension: "length", label: "Claw length", value: 0.50, si_unit: "m" },
      { dimension: "length", label: "Body length", value: 4, si_unit: "m" },
      { dimension: "length", label: "Skull length", value: 0.55, si_unit: "m" },
      { dimension: "time", label: "Extinction", value: 3.15e11, si_unit: "s", note: "About 10,000 years ago" },
    ],
  },

  {
    slug: "irish-elk",
    name: "Irish Elk (Megaloceros)",
    subtitle: "An extinct deer with antlers spanning 3.65 meters",
    category_id: "dinosaurs",
    description:
      "Megaloceros giganteus, commonly called the Irish elk, was one of the largest deer species ever. It lived from about 400,000 to 8,000 years ago across Eurasia. Its antlers were the largest of any known cervid, spanning up to 3.65 meters tip to tip and weighing about 40 kg. The antlers were shed and regrown annually, requiring enormous mineral intake. Despite its common name, it was not exclusively Irish nor a true elk. The most complete skeletons come from Irish bogs.",
    search_terms:
      "irish elk|megaloceros|giant deer|antlers|pleistocene|eurasia|bog",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Antler span", value: 3.65, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 600, si_unit: "kg" },
      { dimension: "mass", label: "Antler mass", value: 40, si_unit: "kg" },
      { dimension: "length", label: "Shoulder height", value: 2.1, si_unit: "m" },
      { dimension: "length", label: "Body length", value: 2.5, si_unit: "m" },
      { dimension: "time", label: "Extinction", value: 2.52e11, si_unit: "s", note: "About 8,000 years ago" },
    ],
  },

  {
    slug: "passenger-pigeon",
    name: "Passenger Pigeon",
    subtitle: "From billions to zero in less than a century",
    category_id: "dinosaurs",
    description:
      "The passenger pigeon (Ectopistes migratorius) was once the most abundant bird in North America, with an estimated population of 3 to 5 billion. A single flock could darken the sky for hours as it passed overhead, sometimes stretching over 500 km long and 1.6 km wide. The bird measured about 40 cm long and weighed roughly 340 grams. Relentless hunting and habitat destruction drove it from billions to extinction in just decades. The last known individual, Martha, died at the Cincinnati Zoo on September 1, 1914.",
    search_terms:
      "passenger pigeon|ectopistes|martha|extinct bird|flocking|cincinnati zoo|1914",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.40, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.34, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.62, si_unit: "m" },
      { dimension: "speed", label: "Flight speed", value: 28, si_unit: "m/s", note: "About 100 km/h" },
      { dimension: "count", label: "Estimated peak population", value: 5e9, si_unit: "birds" },
      { dimension: "time", label: "Years since extinction", value: 3.53e9, si_unit: "s", note: "Extinct 1914" },
    ],
  },

  {
    slug: "tasmanian-tiger",
    name: "Tasmanian Tiger (Thylacine)",
    subtitle: "A marsupial carnivore that looked like a striped wolf",
    category_id: "dinosaurs",
    description:
      "The thylacine (Thylacinus cynocephalus) was the largest known carnivorous marsupial of modern times. It had a body length of about 1 meter with a stiff tail adding another 50 cm, and weighed roughly 30 kg. Despite its dog-like appearance, it was more closely related to kangaroos than to wolves. The species once ranged across mainland Australia but was confined to Tasmania by the time of European settlement. The last known individual, Benjamin, died at Hobart Zoo on September 7, 1936.",
    search_terms:
      "thylacine|tasmanian tiger|tasmanian wolf|marsupial|benjamin|hobart|extinct|australia",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.50, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 30, si_unit: "kg" },
      { dimension: "length", label: "Shoulder height", value: 0.58, si_unit: "m" },
      { dimension: "length", label: "Jaw gape width", value: 0.12, si_unit: "m", note: "Could open jaws 80 degrees" },
      { dimension: "time", label: "Years since extinction", value: 2.84e9, si_unit: "s", note: "Extinct 1936" },
    ],
  },

  {
    slug: "dunkleosteus",
    name: "Dunkleosteus",
    subtitle: "A 6-meter armored fish with the strongest bite of the Devonian",
    category_id: "dinosaurs",
    description:
      "Dunkleosteus terrelli was a placoderm (armored fish) that lived about 382 to 358 million years ago during the Late Devonian period. It grew to about 6 meters long and weighed an estimated 1,000 kg. Instead of teeth, it had sharp bony plates that could generate a bite force of about 6,000 newtons, among the most powerful of any fish. Its head and thorax were covered in thick bony armor. Dunkleosteus was an apex predator of the Devonian seas, often called the 'Age of Fishes.'",
    search_terms:
      "dunkleosteus|placoderm|armored fish|devonian|age of fishes|bite force|prehistoric",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 6, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1000, si_unit: "kg" },
      { dimension: "force", label: "Bite force", value: 6000, si_unit: "N" },
      { dimension: "length", label: "Skull length", value: 0.65, si_unit: "m" },
      { dimension: "length", label: "Armor plate thickness", value: 0.05, si_unit: "m" },
      { dimension: "time", label: "Age of fossils", value: 1.17e16, si_unit: "s", note: "About 370 million years" },
    ],
  },

  {
    slug: "great-auk",
    name: "Great Auk",
    subtitle: "The original penguin of the Northern Hemisphere",
    category_id: "dinosaurs",
    description:
      "The great auk (Pinguinus impennis) was a large, flightless seabird that once inhabited the coasts of the North Atlantic. Standing about 75 cm tall and weighing roughly 5 kg, it was the largest member of the auk family. Despite its penguin-like appearance, it was unrelated to Southern Hemisphere penguins. The word 'penguin' was originally used for the great auk before being applied to the birds we know today. Hunted for its feathers, meat, and oil, the last confirmed pair was killed on Eldey island, Iceland, on June 3, 1844.",
    search_terms:
      "great auk|pinguinus|flightless|north atlantic|extinct bird|original penguin",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 0.75, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 5, si_unit: "kg" },
      { dimension: "length", label: "Beak length", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Flipper length", value: 0.15, si_unit: "m" },
      { dimension: "speed", label: "Swimming speed", value: 3.6, si_unit: "m/s" },
      { dimension: "time", label: "Years since extinction", value: 5.74e9, si_unit: "s", note: "Extinct 1844" },
    ],
  },

  {
    slug: "quagga",
    name: "Quagga",
    subtitle: "A half-striped zebra that vanished in the 1880s",
    category_id: "dinosaurs",
    description:
      "The quagga (Equus quagga quagga) was a subspecies of the plains zebra distinguished by having stripes only on the front half of its body, fading to a plain brown rear. It stood about 1.3 meters at the shoulder and weighed roughly 300 kg. Native to South Africa, it was hunted to extinction by settlers who wanted its grazing land for livestock. The last known individual died at the Artis Magistra zoo in Amsterdam on August 12, 1883. It was the first extinct animal to have its DNA analyzed.",
    search_terms:
      "quagga|half-striped zebra|extinct|south africa|equus|amsterdam|plains zebra",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.2, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 300, si_unit: "kg" },
      { dimension: "length", label: "Shoulder height", value: 1.3, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.45, si_unit: "m" },
      { dimension: "time", label: "Years since extinction", value: 4.51e9, si_unit: "s", note: "Extinct 1883" },
    ],
  },

  {
    slug: "terror-bird",
    name: "Terror Bird (Phorusrhacidae)",
    subtitle: "A 3-meter flightless predator that ruled South America",
    category_id: "dinosaurs",
    description:
      "Terror birds (family Phorusrhacidae) were large flightless carnivorous birds that dominated South America as apex predators for roughly 60 million years, from the Paleocene to the Pleistocene. The largest species, Kelenken guillermoi, stood about 3 meters tall and had a skull 71 cm long with a massive hooked beak. They weighed up to 350 kg and could likely run at speeds of 14 meters per second. When the land bridge formed between North and South America, competition with placental carnivores contributed to their extinction.",
    search_terms:
      "terror bird|phorusrhacidae|kelenken|flightless|south america|apex predator|cenozoic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 3, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 350, si_unit: "kg" },
      { dimension: "length", label: "Skull length", value: 0.71, si_unit: "m" },
      { dimension: "speed", label: "Estimated top speed", value: 14, si_unit: "m/s" },
      { dimension: "length", label: "Beak length", value: 0.45, si_unit: "m" },
      { dimension: "time", label: "Time since extinction", value: 5.68e13, si_unit: "s", note: "About 1.8 million years ago" },
    ],
  },

  {
    slug: "meganeura-giant-dragonfly",
    name: "Meganeura (Giant Dragonfly)",
    subtitle: "A dragonfly with a wingspan wider than a red-tailed hawk",
    category_id: "dinosaurs",
    description:
      "Meganeura monyi was a giant insect from the Carboniferous period, about 300 million years ago, with a wingspan of roughly 70 cm. It is one of the largest known insects ever. Its size was possible because atmospheric oxygen levels during the Carboniferous reached about 35%, compared to today's 21%, allowing the insect tracheal breathing system to support a much larger body. Meganeura was a predator that hunted other insects and small amphibians through dense Carboniferous forests.",
    search_terms:
      "meganeura|giant dragonfly|carboniferous|largest insect|prehistoric|oxygen|wingspan",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 0.70, si_unit: "m" },
      { dimension: "length", label: "Body length", value: 0.30, si_unit: "m" },
      { dimension: "mass", label: "Estimated body mass", value: 0.15, si_unit: "kg" },
      { dimension: "speed", label: "Estimated flight speed", value: 15, si_unit: "m/s" },
      { dimension: "time", label: "Age of fossils", value: 9.46e15, si_unit: "s", note: "About 300 million years" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE MARINE LIFE (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "mantis-shrimp",
    name: "Mantis Shrimp",
    subtitle: "A crustacean that punches with the force of a bullet",
    category_id: "marine-life",
    description:
      "The peacock mantis shrimp (Odontodactylus scyllarus) is one of the most remarkable predators in the ocean. At about 18 cm long, its spring-loaded club appendages strike with an acceleration of over 10,000 g, reaching speeds of about 23 m/s underwater. The impact generates cavitation bubbles that create a secondary shockwave, effectively hitting prey twice with a single punch. They also have the most complex eyes in the animal kingdom, with 16 types of photoreceptors compared to our three.",
    search_terms:
      "mantis shrimp|stomatopod|punch|cavitation|peacock|eyes|crustacean",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.18, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.1, si_unit: "kg" },
      { dimension: "speed", label: "Strike speed", value: 23, si_unit: "m/s" },
      { dimension: "force", label: "Strike force", value: 1500, si_unit: "N" },
      { dimension: "length", label: "Club appendage length", value: 0.03, si_unit: "m" },
      { dimension: "count", label: "Photoreceptor types", value: 16, si_unit: "types" },
    ],
  },

  {
    slug: "box-jellyfish",
    name: "Box Jellyfish",
    subtitle: "The most venomous marine animal on Earth",
    category_id: "marine-life",
    description:
      "The Australian box jellyfish (Chironex fleckeri) is widely considered the most venomous marine animal. Its bell-shaped body is about 30 cm in diameter, but its 60 tentacles can extend up to 3 meters long. Each tentacle contains about 5,000 stinging cells called cnidocytes. The venom attacks the heart, nervous system, and skin simultaneously, and a severe sting can cause cardiac arrest within minutes. Despite its lethality, the box jellyfish has 24 eyes arranged in clusters of six on each side of its bell.",
    search_terms:
      "box jellyfish|chironex|venomous|tentacles|australia|cnidocytes|sting",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Bell diameter", value: 0.30, si_unit: "m" },
      { dimension: "length", label: "Tentacle length", value: 3, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 2, si_unit: "kg" },
      { dimension: "speed", label: "Swimming speed", value: 2, si_unit: "m/s" },
      { dimension: "count", label: "Tentacles", value: 60, si_unit: "tentacles" },
      { dimension: "count", label: "Eyes", value: 24, si_unit: "eyes" },
    ],
  },

  {
    slug: "common-cuttlefish",
    name: "Common Cuttlefish",
    subtitle: "A master of disguise with green blood and three hearts",
    category_id: "marine-life",
    description:
      "The common cuttlefish (Sepia officinalis) is a cephalopod famous for its extraordinary camouflage abilities. Up to 45 cm in mantle length and weighing about 4 kg, it can change the color, pattern, and even texture of its skin in milliseconds using millions of chromatophore cells. It has three hearts, blue-green blood, a W-shaped pupil, and the highest brain-to-body ratio of any invertebrate. Its internal shell (the cuttlebone) is commonly given to pet birds as a calcium supplement.",
    search_terms:
      "cuttlefish|sepia|camouflage|chromatophore|cephalopod|cuttlebone|ink",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Mantle length", value: 0.45, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 4, si_unit: "kg" },
      { dimension: "length", label: "Total length with tentacles", value: 0.60, si_unit: "m" },
      { dimension: "count", label: "Arms", value: 8, si_unit: "arms" },
      { dimension: "count", label: "Hearts", value: 3, si_unit: "hearts" },
      { dimension: "speed", label: "Jet propulsion speed", value: 2.5, si_unit: "m/s" },
    ],
  },

  {
    slug: "leafy-sea-dragon",
    name: "Leafy Sea Dragon",
    subtitle: "A fish disguised as a piece of floating seaweed",
    category_id: "marine-life",
    description:
      "The leafy sea dragon (Phycodurus eques) is a marine fish found only along the southern coast of Australia. At about 35 cm long, its body is covered in leaf-shaped appendages that provide almost perfect camouflage among kelp and seaweed. Unlike seahorses, it cannot grasp objects with its tail. Males carry the fertilized eggs on a brood patch under their tails for about 8 weeks. The leafy sea dragon is the marine emblem of South Australia.",
    search_terms:
      "leafy sea dragon|phycodurus|australia|camouflage|seahorse relative|marine fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.35, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.1, si_unit: "kg" },
      { dimension: "length", label: "Leaf appendage length", value: 0.04, si_unit: "m" },
      { dimension: "time", label: "Egg incubation period", value: 4.84e6, si_unit: "s", note: "About 8 weeks" },
      { dimension: "count", label: "Eggs per brood", value: 250, si_unit: "eggs" },
    ],
  },

  {
    slug: "goblin-shark",
    name: "Goblin Shark",
    subtitle: "A deep-sea shark with a spring-loaded jaw",
    category_id: "marine-life",
    description:
      "The goblin shark (Mitsukurina owstoni) is a rare deep-sea shark often called a 'living fossil' because its lineage dates back about 125 million years. Adults reach about 3 to 4 meters in length and weigh roughly 200 kg. Its most distinctive feature is a long, flat, blade-like snout packed with electroreceptors, and jaws that can project forward dramatically to snatch prey. Found at depths of 200 to 1,300 meters worldwide, it is one of the least-studied shark species.",
    search_terms:
      "goblin shark|mitsukurina|deep sea|living fossil|protrusible jaw|snout|rare shark",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.5, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 200, si_unit: "kg" },
      { dimension: "length", label: "Snout length", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Typical depth", value: 300, si_unit: "m" },
      { dimension: "time", label: "Lineage age", value: 3.94e15, si_unit: "s", note: "About 125 million years" },
    ],
  },

  {
    slug: "blanket-octopus",
    name: "Blanket Octopus",
    subtitle: "A female 40,000 times heavier than her mate",
    category_id: "marine-life",
    description:
      "The blanket octopus (Tremoctopus violaceus) displays one of the most extreme examples of sexual dimorphism in the animal kingdom. Females can reach 2 meters in total length and weigh up to 40 kg, while males are only about 2.4 cm long and weigh less than a gram. Females unfurl large, rainbow-colored membranes between their arms to appear larger to predators. Males have been observed tearing off tentacles from Portuguese man-of-war and wielding them as weapons. Females are immune to the man-of-war's venom.",
    search_terms:
      "blanket octopus|tremoctopus|sexual dimorphism|membrane|ocean|cephalopod",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Female total length", value: 2.0, si_unit: "m" },
      { dimension: "mass", label: "Female mass", value: 40, si_unit: "kg" },
      { dimension: "length", label: "Male body length", value: 0.024, si_unit: "m" },
      { dimension: "mass", label: "Male mass", value: 0.001, si_unit: "kg" },
      { dimension: "area", label: "Membrane area (unfurled)", value: 1.5, si_unit: "m^2" },
    ],
  },

  {
    slug: "barrel-sponge",
    name: "Giant Barrel Sponge",
    subtitle: "A living filter big enough to sit inside",
    category_id: "marine-life",
    description:
      "The giant barrel sponge (Xestospongia muta) is one of the largest sponges in the Caribbean, growing up to 1.8 meters in diameter and 1.5 meters tall. Individual sponges can live for over 2,000 years, making them some of the oldest living animals on coral reefs. A large barrel sponge can filter thousands of liters of seawater per day, extracting bacteria and organic particles. Their nickname is 'the redwood of the reef' due to their size and longevity.",
    search_terms:
      "barrel sponge|xestospongia|caribbean|reef|filter feeder|oldest animal|sponge",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Height", value: 1.5, si_unit: "m" },
      { dimension: "mass", label: "Wet mass", value: 90, si_unit: "kg" },
      { dimension: "time", label: "Maximum lifespan", value: 6.31e10, si_unit: "s", note: "Over 2,000 years" },
      { dimension: "volume", label: "Water filtered per day", value: 50, si_unit: "m^3", note: "About 50,000 liters" },
    ],
  },

  {
    slug: "crown-of-thorns-starfish",
    name: "Crown-of-Thorns Starfish",
    subtitle: "A venomous coral-eating starfish with up to 21 arms",
    category_id: "marine-life",
    description:
      "The crown-of-thorns starfish (Acanthaster planci) is a large, venomous starfish that feeds on coral polyps and is one of the greatest threats to coral reefs worldwide. Adults reach 25 to 35 cm in diameter, with 12 to 21 arms covered in sharp, venomous spines up to 5 cm long. A single starfish can consume up to 10 square meters of coral per year. Population outbreaks, possibly linked to nutrient runoff from agriculture, have devastated large sections of the Great Barrier Reef.",
    search_terms:
      "crown of thorns|acanthaster|starfish|coral reef|venomous|great barrier reef|outbreak",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.35, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1.5, si_unit: "kg" },
      { dimension: "length", label: "Spine length", value: 0.05, si_unit: "m" },
      { dimension: "count", label: "Arms", value: 21, si_unit: "arms", note: "Maximum; typically 12 to 19" },
      { dimension: "area", label: "Coral consumed per year", value: 10, si_unit: "m^2" },
    ],
  },

  {
    slug: "japanese-spider-crab",
    name: "Japanese Spider Crab",
    subtitle: "The largest arthropod alive, with a 3.7 meter leg span",
    category_id: "marine-life",
    description:
      "The Japanese spider crab (Macrocheira kaempferi) has the largest leg span of any living arthropod, reaching up to 3.7 meters from claw to claw. Its body (carapace) is about 40 cm wide, and it weighs up to 19 kg. Found in waters around Japan at depths of 50 to 600 meters, it can live for up to 100 years. Despite its intimidating size, it is a gentle scavenger. Juvenile crabs decorate their shells with sponges and other organisms for camouflage.",
    search_terms:
      "japanese spider crab|macrocheira|largest arthropod|leg span|japan|deep sea|crab",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Leg span", value: 3.7, si_unit: "m" },
      { dimension: "length", label: "Carapace width", value: 0.40, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 19, si_unit: "kg" },
      { dimension: "length", label: "Typical depth", value: 300, si_unit: "m" },
      { dimension: "time", label: "Maximum lifespan", value: 3.15e9, si_unit: "s", note: "About 100 years" },
    ],
  },

  {
    slug: "ocean-sunfish-mola-mola",
    name: "Ocean Sunfish (Mola mola)",
    subtitle: "The heaviest bony fish, shaped like a swimming head",
    category_id: "marine-life",
    description:
      "The ocean sunfish (Mola mola) is the heaviest known bony fish in the world, with adults reaching up to 2.7 meters in length, 3 meters from fin tip to fin tip, and weighing up to 2,300 kg. Its unusual truncated body makes it look like a giant swimming head. Despite its size, it feeds mainly on jellyfish and must consume huge quantities to survive. A female can produce up to 300 million eggs at once, more than any other known vertebrate. Mola mola regularly bask at the ocean surface, where seabirds pick parasites off their skin.",
    search_terms:
      "ocean sunfish|mola mola|heaviest bony fish|jellyfish eater|basking|weird fish",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.7, si_unit: "m" },
      { dimension: "length", label: "Fin-to-fin height", value: 3.0, si_unit: "m" },
      { dimension: "mass", label: "Maximum mass", value: 2300, si_unit: "kg" },
      { dimension: "length", label: "Skin thickness", value: 0.08, si_unit: "m" },
      { dimension: "count", label: "Maximum eggs per spawn", value: 3e8, si_unit: "eggs" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE INSECTS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "chans-megastick",
    name: "Chan's Megastick",
    subtitle: "The longest insect in the world at over half a meter",
    category_id: "insects",
    description:
      "Phobaeticus chani, commonly called Chan's megastick, is the longest known insect, with a total body length of 35.7 cm and a length of 56.7 cm including outstretched legs. Discovered in the rainforests of Borneo, it was described in 2008 and named after the Malaysian naturalist Datuk Chan Chew Lun. Like other stick insects, it relies on near-perfect camouflage to resemble a twig. Only six specimens have ever been collected, making it one of the rarest insects known.",
    search_terms:
      "chans megastick|phobaeticus|longest insect|stick insect|borneo|camouflage",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.357, si_unit: "m" },
      { dimension: "length", label: "Total length with legs", value: 0.567, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.06, si_unit: "kg" },
      { dimension: "length", label: "Leg length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Antenna length", value: 0.04, si_unit: "m" },
    ],
  },

  {
    slug: "luna-moth",
    name: "Luna Moth",
    subtitle: "A ghostly green moth that lives only a week as an adult",
    category_id: "insects",
    description:
      "The luna moth (Actias luna) is one of the largest moths in North America, with a wingspan of about 11.4 cm and distinctive trailing hindwing tails. The adult moth's lime-green coloring fades to white after death. Adults have no mouth and cannot eat; they live only about one week, surviving solely to mate. The spinning hindwing tails are thought to confuse echolocating bats by creating false echo targets. Each female lays about 200 eggs before dying.",
    search_terms:
      "luna moth|actias luna|green moth|giant moth|north america|no mouth|tails",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 0.114, si_unit: "m" },
      { dimension: "length", label: "Body length", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.003, si_unit: "kg" },
      { dimension: "time", label: "Adult lifespan", value: 6.05e5, si_unit: "s", note: "About one week" },
      { dimension: "length", label: "Tail length", value: 0.075, si_unit: "m" },
      { dimension: "count", label: "Eggs per female", value: 200, si_unit: "eggs" },
    ],
  },

  {
    slug: "bombardier-beetle",
    name: "Bombardier Beetle",
    subtitle: "An insect that shoots boiling chemical spray from its rear",
    category_id: "insects",
    description:
      "Bombardier beetles (genus Brachinus) defend themselves by firing a boiling, noxious chemical spray from the tip of their abdomen at predators. The spray is produced by mixing hydroquinone and hydrogen peroxide in a reaction chamber, generating an exothermic reaction that heats the liquid to about 373 K. The beetle can aim its spray with precision and fire it in rapid pulses of about 500 per second. A typical bombardier beetle is about 1.5 cm long.",
    search_terms:
      "bombardier beetle|brachinus|chemical spray|boiling|defense mechanism|explosive",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.015, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.0005, si_unit: "kg" },
      { dimension: "temperature", label: "Spray temperature", value: 373, si_unit: "K" },
      { dimension: "speed", label: "Spray exit speed", value: 10, si_unit: "m/s" },
      { dimension: "frequency", label: "Pulse rate", value: 500, si_unit: "Hz" },
      { dimension: "length", label: "Spray range", value: 0.20, si_unit: "m" },
    ],
  },

  {
    slug: "periodical-cicada",
    name: "Periodical Cicada",
    subtitle: "An insect that waits 17 years underground for a few weeks of song",
    category_id: "insects",
    description:
      "Periodical cicadas (Magicicada spp.) spend either 13 or 17 years underground as nymphs, feeding on tree root sap, before emerging simultaneously in enormous broods. An adult is about 3 cm long with a wingspan of 7.5 cm. Their synchronized mass emergence is a predator-satiation strategy: so many appear at once that predators cannot eat them all. The males' chorus can reach 100 decibels, loud enough to cause hearing damage at close range. A single brood can number in the billions.",
    search_terms:
      "cicada|periodical|17 year|magicicada|brood|emergence|underground|singing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.075, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.003, si_unit: "kg" },
      { dimension: "time", label: "Underground lifespan", value: 5.36e8, si_unit: "s", note: "17 years" },
      { dimension: "frequency", label: "Song frequency", value: 4000, si_unit: "Hz" },
      { dimension: "count", label: "Brood size", value: 1e9, si_unit: "individuals", note: "Billions per emergence" },
    ],
  },

  {
    slug: "giant-weta",
    name: "Giant Weta",
    subtitle: "One of the heaviest insects in the world",
    category_id: "insects",
    description:
      "The giant weta (Deinacrida heteracantha) of New Zealand is one of the heaviest insects in the world, with females reaching up to 70 grams when carrying eggs. At about 10 cm in body length with legs spanning 20 cm, it is roughly the size of a human hand. The name 'weta' comes from the Maori word 'wetapunga,' meaning 'god of ugly things.' Giant weta have survived relatively unchanged for about 190 million years, predating the dinosaurs. They are now endangered due to introduced predators like rats.",
    search_terms:
      "giant weta|deinacrida|new zealand|heaviest insect|wetapunga|endangered|maori",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.10, si_unit: "m" },
      { dimension: "mass", label: "Maximum body mass", value: 0.07, si_unit: "kg", note: "Female with eggs" },
      { dimension: "length", label: "Leg span", value: 0.20, si_unit: "m" },
      { dimension: "length", label: "Antenna length", value: 0.08, si_unit: "m" },
      { dimension: "time", label: "Lineage age", value: 5.99e15, si_unit: "s", note: "About 190 million years" },
    ],
  },

  {
    slug: "asian-giant-hornet",
    name: "Asian Giant Hornet",
    subtitle: "The world's largest hornet at 5 cm long",
    category_id: "insects",
    description:
      "The Asian giant hornet (Vespa mandarinia) is the world's largest hornet species, with queens reaching 5.5 cm in length and a wingspan of 7.5 cm. Workers are about 4 cm long. Its 6.25 mm stinger delivers a potent venom that can dissolve human tissue and cause kidney failure in severe cases. A group of 30 hornets can destroy an entire honeybee colony of 30,000 in just a few hours. Japanese honeybees have developed a defense: swarming an invading hornet and vibrating to raise the temperature to about 320 K, killing it with heat.",
    search_terms:
      "asian giant hornet|vespa mandarinia|murder hornet|largest hornet|japan|sting|venom",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Queen body length", value: 0.055, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.075, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.008, si_unit: "kg" },
      { dimension: "length", label: "Stinger length", value: 0.00625, si_unit: "m" },
      { dimension: "speed", label: "Flight speed", value: 11, si_unit: "m/s", note: "About 40 km/h" },
    ],
  },

  {
    slug: "jewel-beetle",
    name: "Jewel Beetle",
    subtitle: "An iridescent insect that inspired bulletproof color technology",
    category_id: "insects",
    description:
      "Jewel beetles (family Buprestidae) are named for their glossy, iridescent exoskeletons, which display vivid metallic greens, blues, and golds. A typical jewel beetle is about 2 to 4 cm long. The color comes not from pigments but from nanostructures in the exoskeleton that diffract light, a principle that has inspired developments in anticounterfeit technology. In some Asian cultures, jewel beetle wing cases have been used in textiles and jewelry for centuries. The family contains over 15,000 known species worldwide.",
    search_terms:
      "jewel beetle|buprestidae|iridescent|metallic|nanostructure|structural color",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Body width", value: 0.01, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.002, si_unit: "kg" },
      { dimension: "length", label: "Wing case length", value: 0.025, si_unit: "m" },
      { dimension: "count", label: "Known species", value: 15000, si_unit: "species" },
    ],
  },

  {
    slug: "army-ant-single",
    name: "Army Ant (Single Worker)",
    subtitle: "One soldier in a colony of millions that devours everything in its path",
    category_id: "insects",
    description:
      "A single army ant (Eciton burchellii) worker is about 12 mm long and weighs roughly 10 mg. Individually unremarkable, army ants become devastating in colonies of up to 700,000 individuals that form coordinated raiding swarms up to 20 meters wide. They have no permanent nest; instead, the workers link their bodies together to form living structures called bivouacs. A colony can consume 100,000 prey items per day. The queen, at about 5 cm, is one of the largest ants in the world.",
    search_terms:
      "army ant|eciton|swarm|raiding|bivouac|colony|worker|neotropical",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Worker body length", value: 0.012, si_unit: "m" },
      { dimension: "mass", label: "Worker mass", value: 1e-5, si_unit: "kg" },
      { dimension: "length", label: "Queen body length", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Swarm width", value: 20, si_unit: "m" },
      { dimension: "count", label: "Colony size", value: 700000, si_unit: "ants" },
      { dimension: "speed", label: "Swarm advance rate", value: 0.006, si_unit: "m/s", note: "About 20 m per hour" },
    ],
  },

  {
    slug: "leaf-insect",
    name: "Leaf Insect",
    subtitle: "An insect so convincing that real leaves have bite marks from confused herbivores",
    category_id: "insects",
    description:
      "Leaf insects (family Phylliidae) are some of the most remarkable examples of mimicry in nature, with flattened green bodies, leg lobes, and vein-like markings that make them virtually indistinguishable from real leaves. A typical species is about 6 to 10 cm long. Even their eggs resemble plant seeds. They sway gently when walking to mimic leaves blowing in the wind. The oldest known leaf insect fossil dates to about 47 million years ago, from the Messel Pit in Germany.",
    search_terms:
      "leaf insect|phylliidae|mimicry|camouflage|walking leaf|green|phasmatodea",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Body width", value: 0.05, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.005, si_unit: "kg" },
      { dimension: "length", label: "Leg lobe width", value: 0.015, si_unit: "m" },
      { dimension: "time", label: "Oldest fossil age", value: 1.48e15, si_unit: "s", note: "About 47 million years" },
    ],
  },

  {
    slug: "orchid-mantis",
    name: "Orchid Mantis",
    subtitle: "A predator disguised as a flower petal",
    category_id: "insects",
    description:
      "The orchid mantis (Hymenopus coronatus) of Southeast Asia is a remarkable predator that mimics a flower so well that pollinators actually prefer it over real flowers. Females reach about 6 to 7 cm long with pink and white coloration and petal-shaped leg lobes. Rather than hiding among flowers, the mantis attracts prey by being a better visual signal than the flowers themselves. Males are much smaller at about 2.5 cm. The female can snatch prey from the air with a strike taking only 50 to 70 milliseconds.",
    search_terms:
      "orchid mantis|hymenopus|flower mantis|mimicry|southeast asia|predator|pink",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Female body length", value: 0.065, si_unit: "m" },
      { dimension: "length", label: "Male body length", value: 0.025, si_unit: "m" },
      { dimension: "mass", label: "Female mass", value: 0.006, si_unit: "kg" },
      { dimension: "time", label: "Strike time", value: 0.06, si_unit: "s", note: "50 to 70 milliseconds" },
      { dimension: "length", label: "Foreleg reach", value: 0.03, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE BIRDS (10)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "bee-hummingbird",
    name: "Bee Hummingbird",
    subtitle: "The smallest bird in the world, lighter than a penny",
    category_id: "small-animals",
    description:
      "The bee hummingbird (Mellisuga helenae) of Cuba is the smallest living bird, measuring just 5 to 6 cm in total length and weighing about 1.8 grams. Its eggs are the size of coffee beans. Despite its tiny size, it can beat its wings up to 80 times per second and its heart rate can reach 1,260 beats per minute during flight. It visits up to 1,500 flowers per day and plays a vital role as a pollinator in Cuban ecosystems.",
    search_terms:
      "bee hummingbird|mellisuga|smallest bird|cuba|tiny bird|hummingbird|pollinator",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.055, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.0018, si_unit: "kg" },
      { dimension: "frequency", label: "Wing beat frequency", value: 80, si_unit: "Hz" },
      { dimension: "frequency", label: "Heart rate in flight", value: 21, si_unit: "Hz", note: "1,260 beats per minute" },
      { dimension: "length", label: "Egg length", value: 0.006, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.033, si_unit: "m" },
    ],
  },

  {
    slug: "shoebill",
    name: "Shoebill",
    subtitle: "A prehistoric-looking stork with a shoe-shaped beak",
    category_id: "small-animals",
    description:
      "The shoebill (Balaeniceps rex) is a large, solitary bird found in tropical swamps of central and eastern Africa. Standing up to 1.5 meters tall with a wingspan of 2.6 meters, its most distinctive feature is its massive, shoe-shaped bill measuring about 23 cm long and 10 cm wide. The bill is powerful enough to decapitate lungfish, its primary prey. Shoebills are known for standing motionless for hours and then striking with explosive speed. They are classified as Vulnerable, with fewer than 8,000 remaining in the wild.",
    search_terms:
      "shoebill|balaeniceps|whalehead|shoe-billed stork|africa|swamp|large bird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Standing height", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 2.6, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 5.5, si_unit: "kg" },
      { dimension: "length", label: "Bill length", value: 0.23, si_unit: "m" },
      { dimension: "length", label: "Bill width", value: 0.10, si_unit: "m" },
      { dimension: "count", label: "Wild population", value: 8000, si_unit: "birds" },
    ],
  },

  {
    slug: "kea-parrot",
    name: "Kea",
    subtitle: "The world's only alpine parrot, and a notorious car vandal",
    category_id: "small-animals",
    description:
      "The kea (Nestor notabilis) is the world's only truly alpine parrot, living in the mountains of New Zealand's South Island at elevations up to 2,000 meters. About 48 cm long and weighing roughly 900 grams, the kea is olive-green with brilliant orange underwings visible in flight. It is exceptionally intelligent and curious, with a well-documented habit of destroying car windshield wipers, rubber seals, and other vehicle parts. Kea have been observed solving complex multi-step puzzles in scientific studies.",
    search_terms:
      "kea|nestor|alpine parrot|new zealand|intelligent bird|car damage|mountain",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.48, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.9, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.96, si_unit: "m" },
      { dimension: "length", label: "Beak length", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Altitude range", value: 2000, si_unit: "m" },
    ],
  },

  {
    slug: "resplendent-quetzal",
    name: "Resplendent Quetzal",
    subtitle: "The sacred bird of Mesoamerican civilizations",
    category_id: "small-animals",
    description:
      "The resplendent quetzal (Pharomachrus mocinno) is a brilliantly colored bird found in the cloud forests of Central America. Males are famous for their iridescent green plumage and spectacular tail streamers that can reach 65 cm long, nearly twice the bird's body length of 36 cm. The Aztec and Maya revered the quetzal as a god of the air, and its feathers were used as currency. The Guatemalan currency, the quetzal, is named after this bird. Plucking its tail feathers was punishable by death in Aztec society.",
    search_terms:
      "quetzal|pharomachrus|resplendent|guatemala|mesoamerican|cloud forest|sacred bird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.36, si_unit: "m" },
      { dimension: "length", label: "Tail streamer length", value: 0.65, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.21, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.55, si_unit: "m" },
      { dimension: "length", label: "Altitude range", value: 2500, si_unit: "m", note: "1,500 to 3,000 m elevation" },
    ],
  },

  {
    slug: "superb-lyrebird",
    name: "Superb Lyrebird",
    subtitle: "A bird that can mimic chainsaws, camera shutters, and car alarms",
    category_id: "small-animals",
    description:
      "The superb lyrebird (Menura novaehollandiae) of southeastern Australia is one of the world's greatest vocal mimics, capable of imitating the calls of at least 20 other bird species as well as mechanical sounds like chainsaws, camera shutters, and rifle shots. Males reach about 1 meter in total length, including a spectacular lyre-shaped tail of 16 modified feathers used in courtship displays. During mating season, males create cleared display mounds on the forest floor and perform elaborate dances while singing.",
    search_terms:
      "lyrebird|menura|mimic|australia|tail display|vocal mimicry|chainsaw|songbird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (male)", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Tail length", value: 0.55, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1.1, si_unit: "kg" },
      { dimension: "length", label: "Display mound diameter", value: 1.0, si_unit: "m" },
      { dimension: "count", label: "Modified tail feathers", value: 16, si_unit: "feathers" },
    ],
  },

  {
    slug: "atlantic-puffin",
    name: "Atlantic Puffin",
    subtitle: "The clown of the sea with a beak full of fish",
    category_id: "small-animals",
    description:
      "The Atlantic puffin (Fratercula arctica) is a seabird found across the North Atlantic, instantly recognizable by its colorful orange, blue, and yellow beak during breeding season. At about 25 cm tall and 500 grams, puffins can carry 10 or more fish crosswise in their beaks at once, thanks to backward-facing spines on the roof of the mouth. They can dive to depths of 60 meters and fly at speeds up to 25 m/s, beating their short wings 400 times per minute. Puffins mate for life and can live over 30 years.",
    search_terms:
      "puffin|fratercula|seabird|colorful beak|north atlantic|clown of the sea|burrow",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.5, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.53, si_unit: "m" },
      { dimension: "speed", label: "Flight speed", value: 25, si_unit: "m/s" },
      { dimension: "length", label: "Maximum dive depth", value: 60, si_unit: "m" },
      { dimension: "frequency", label: "Wing beat frequency", value: 6.67, si_unit: "Hz", note: "About 400 per minute" },
    ],
  },

  {
    slug: "hoatzin",
    name: "Hoatzin",
    subtitle: "A punk-crested bird whose chicks have claws on their wings",
    category_id: "small-animals",
    description:
      "The hoatzin (Opisthocomus hoazin) of South America's Amazon and Orinoco river basins is one of the most unusual birds alive. About 65 cm long, it has a spiky rust-colored crest, blue face, and red eyes. Uniquely among birds, it digests leaves by bacterial fermentation in an enlarged crop, similar to how cows digest grass, earning it the nickname 'stinkbird.' Most remarkably, hoatzin chicks have functional claws on two of their wing digits, which they use to climb back to the nest if they fall into water.",
    search_terms:
      "hoatzin|stinkbird|reptile bird|wing claws|amazon|south america|crest",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.65, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.82, si_unit: "kg" },
      { dimension: "length", label: "Wingspan", value: 0.65, si_unit: "m" },
      { dimension: "length", label: "Crest length", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Chick wing claw length", value: 0.005, si_unit: "m" },
    ],
  },

  {
    slug: "greater-roadrunner",
    name: "Greater Roadrunner",
    subtitle: "A ground-dwelling cuckoo that outruns rattlesnakes",
    category_id: "small-animals",
    description:
      "The greater roadrunner (Geococcyx californianus) is a ground-dwelling cuckoo native to the deserts and scrublands of the southwestern United States and Mexico. About 56 cm long from beak to tail tip, it prefers running to flying and can sprint at speeds up to 12 m/s. It hunts rattlesnakes, lizards, scorpions, and small birds on foot. The roadrunner has a unique adaptation for desert cold: it can lower its body temperature at night and then sunbathe in the morning, exposing dark skin patches on its back to absorb heat.",
    search_terms:
      "roadrunner|geococcyx|desert bird|running bird|cuckoo|southwestern|meep meep",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.56, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.34, si_unit: "kg" },
      { dimension: "speed", label: "Top running speed", value: 12, si_unit: "m/s" },
      { dimension: "length", label: "Tail length", value: 0.26, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 0.56, si_unit: "m" },
    ],
  },

  {
    slug: "riflebird",
    name: "Magnificent Riflebird",
    subtitle: "A bird of paradise with a velvet-black courtship display",
    category_id: "small-animals",
    description:
      "The magnificent riflebird (Ptiloris magnificus) is a species of bird of paradise found in the tropical rainforests of New Guinea and far northeastern Australia. Males are about 34 cm long with glossy black plumage and an iridescent blue-green breast shield. During courtship, the male perches on an exposed branch, spreads his wings into a broad cape, and sways rhythmically while repeatedly opening his beak to flash the bright yellow interior. The display is so precise and mechanical that it looks almost robotic.",
    search_terms:
      "riflebird|ptiloris|bird of paradise|courtship display|new guinea|iridescent|dance",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.34, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 0.18, si_unit: "kg" },
      { dimension: "length", label: "Wingspan (display spread)", value: 0.50, si_unit: "m" },
      { dimension: "length", label: "Beak length", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Breast shield width", value: 0.06, si_unit: "m" },
    ],
  },

  {
    slug: "great-frigatebird",
    name: "Great Frigatebird",
    subtitle: "A pirate of the skies with the largest wingspan-to-weight ratio of any bird",
    category_id: "small-animals",
    description:
      "The great frigatebird (Fregata minor) has the largest wingspan-to-body-weight ratio of any bird, with a 2.3 meter wingspan but a body mass of only about 1.5 kg. This allows it to soar for weeks without landing, sleeping on the wing in 10-second bursts. Males inflate a bright red throat pouch to the size of a basketball during courtship. Frigatebirds are kleptoparasites, harassing other seabirds in flight until they regurgitate their catch. They cannot swim or walk well, making them almost entirely aerial.",
    search_terms:
      "frigatebird|fregata|pirate bird|red pouch|soaring|kleptoparasite|seabird",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 2.3, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 1.5, si_unit: "kg" },
      { dimension: "length", label: "Body length", value: 1.05, si_unit: "m" },
      { dimension: "speed", label: "Flight speed", value: 11, si_unit: "m/s" },
      { dimension: "length", label: "Inflated throat pouch diameter", value: 0.25, si_unit: "m" },
      { dimension: "time", label: "Time aloft without landing", value: 1.73e6, si_unit: "s", note: "Up to 20 days" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE PLANTS (5)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "venus-flytrap",
    name: "Venus Flytrap",
    subtitle: "A plant that catches and digests insects in snap traps",
    category_id: "plants",
    description:
      "The Venus flytrap (Dionaea muscipula) is a carnivorous plant native to a small region of North and South Carolina in the United States. Its bi-lobed traps are about 2.5 cm long and snap shut in approximately 100 milliseconds when trigger hairs on the inner surface are touched twice within 20 seconds. Digestive enzymes then dissolve the prey over 5 to 12 days. Despite its fame, the plant is surprisingly small, rarely exceeding 12 cm in diameter. It is classified as Vulnerable in the wild due to habitat loss and poaching.",
    search_terms:
      "venus flytrap|dionaea|carnivorous plant|snap trap|carolina|insectivorous",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Plant diameter", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Trap length", value: 0.025, si_unit: "m" },
      { dimension: "time", label: "Trap closure time", value: 0.1, si_unit: "s" },
      { dimension: "time", label: "Digestion time", value: 7.78e5, si_unit: "s", note: "About 5 to 12 days" },
      { dimension: "count", label: "Trigger hairs per lobe", value: 3, si_unit: "hairs" },
      { dimension: "length", label: "Flower stalk height", value: 0.30, si_unit: "m" },
    ],
  },

  {
    slug: "baobab-tree",
    name: "Baobab Tree",
    subtitle: "The upside-down tree that stores 120,000 liters of water",
    category_id: "plants",
    description:
      "The African baobab (Adansonia digitata) is one of the most iconic trees on the continent, with a massive barrel-shaped trunk that can reach 11 meters in diameter. Some specimens are over 2,000 years old. The trunk is spongy and can store up to 120,000 liters of water, allowing the tree to survive prolonged droughts. During the dry season, when leafless, the stubby branches resemble roots, giving rise to the legend that the gods planted it upside down. Baobab fruit is a nutritional superfood rich in vitamin C.",
    search_terms:
      "baobab|adansonia|upside down tree|africa|water storage|ancient tree|bottle tree",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 20, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 11, si_unit: "m" },
      { dimension: "volume", label: "Water storage capacity", value: 120, si_unit: "m^3", note: "Up to 120,000 liters" },
      { dimension: "time", label: "Maximum age", value: 6.31e10, si_unit: "s", note: "Over 2,000 years" },
      { dimension: "mass", label: "Estimated mass", value: 75000, si_unit: "kg" },
      { dimension: "length", label: "Trunk circumference", value: 34, si_unit: "m" },
    ],
  },

  {
    slug: "dragon-blood-tree",
    name: "Dragon Blood Tree",
    subtitle: "An alien-looking tree that bleeds red sap",
    category_id: "plants",
    description:
      "The dragon blood tree (Dracaena cinnabari) is endemic to the Socotra archipelago off the coast of Yemen. Its dense, umbrella-shaped canopy can span 12 meters across, designed to collect moisture from fog and funnel it down to the roots. When the bark is cut, it exudes a dark red resin known as dragon's blood, used since ancient Roman times as a dye, medicine, and varnish. The tree can live for several hundred years and grows extremely slowly, reaching about 10 meters tall.",
    search_terms:
      "dragon blood tree|dracaena|socotra|red resin|umbrella tree|yemen|endemic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 10, si_unit: "m" },
      { dimension: "length", label: "Canopy diameter", value: 12, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 0.6, si_unit: "m" },
      { dimension: "area", label: "Canopy area", value: 113, si_unit: "m^2" },
      { dimension: "time", label: "Maximum age", value: 1.89e10, si_unit: "s", note: "Several hundred years" },
    ],
  },

  {
    slug: "giant-water-lily",
    name: "Giant Water Lily",
    subtitle: "Lily pads strong enough to hold a small child",
    category_id: "plants",
    description:
      "The giant water lily (Victoria amazonica) of the Amazon basin produces the largest lily pads of any plant, reaching up to 3 meters in diameter. The pads have upturned rims up to 20 cm tall and an underside reinforced with radial ribs that inspired the design of the Crystal Palace in 1851. A single pad can support up to 45 kg of evenly distributed weight. The flowers bloom white on the first night, then turn pink on the second, and each flower can be 40 cm across.",
    search_terms:
      "giant water lily|victoria amazonica|lily pad|amazon|largest leaf|crystal palace|aquatic",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Pad diameter", value: 3, si_unit: "m" },
      { dimension: "area", label: "Pad area", value: 7.07, si_unit: "m^2" },
      { dimension: "length", label: "Rim height", value: 0.20, si_unit: "m" },
      { dimension: "mass", label: "Load capacity", value: 45, si_unit: "kg" },
      { dimension: "length", label: "Flower diameter", value: 0.40, si_unit: "m" },
      { dimension: "length", label: "Petiole length", value: 8, si_unit: "m", note: "Stem underwater" },
    ],
  },

  {
    slug: "strangler-fig",
    name: "Strangler Fig",
    subtitle: "A tree that grows from the top down, consuming its host",
    category_id: "plants",
    description:
      "Strangler figs (Ficus spp.) begin life as epiphytes when their seeds germinate in the canopy of a host tree, deposited there by birds or bats. They send aerial roots down to the forest floor that eventually envelop and compress the host tree, which dies and rots away, leaving the fig standing as a hollow, freestanding structure. A mature strangler fig can reach 40 meters tall with a root system spanning 30 meters. The hollow interior provides habitat for bats, birds, insects, and frogs.",
    search_terms:
      "strangler fig|ficus|epiphyte|host tree|aerial roots|tropical|hollow tree",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 40, si_unit: "m" },
      { dimension: "length", label: "Root spread diameter", value: 30, si_unit: "m" },
      { dimension: "length", label: "Trunk diameter", value: 2, si_unit: "m" },
      { dimension: "length", label: "Aerial root length", value: 25, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 20000, si_unit: "kg" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BONUS (2 more to reach 100)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "welwitschia-plant",
    name: "Welwitschia",
    subtitle: "A desert plant with only two leaves that never stop growing",
    category_id: "plants",
    description:
      "Welwitschia mirabilis is a gymnosperm found only in the Namib Desert of Namibia and Angola. Despite living for over 1,000 years, it produces only two leaves in its entire lifetime. These strap-like leaves grow continuously from the base at about 13 cm per year but are worn away at the tips by wind and sand, resulting in a tangled, shredded mass up to 4 meters long. The plant's taproot can reach 3 meters deep. Charles Darwin reportedly called it 'the platypus of the plant kingdom.'",
    search_terms:
      "welwitschia|namib desert|two leaves|living fossil|gymnosperm|namibia|ancient plant",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Leaf length", value: 4, si_unit: "m", note: "Before wind damage" },
      { dimension: "length", label: "Stem diameter", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Taproot depth", value: 3, si_unit: "m" },
      { dimension: "time", label: "Maximum age", value: 6.31e10, si_unit: "s", note: "Over 2,000 years" },
      { dimension: "speed", label: "Leaf growth rate", value: 4.1e-9, si_unit: "m/s", note: "About 13 cm per year" },
      { dimension: "count", label: "Total leaves", value: 2, si_unit: "leaves" },
    ],
  },

  {
    slug: "andean-condor",
    name: "Andean Condor",
    subtitle: "The largest flying bird by combined weight and wingspan",
    category_id: "small-animals",
    description:
      "The Andean condor (Vultur gryphus) is the largest flying bird in the world by combined measurement of weight and wingspan. With a wingspan reaching 3.3 meters and a mass of up to 15 kg, it soars over the Andes at altitudes above 5,500 meters. Studies have shown it can fly for over 170 km without a single wing flap, riding thermal updrafts almost exclusively. It can live over 70 years in captivity. The Andean condor is the national symbol of several South American countries.",
    search_terms:
      "andean condor|vultur gryphus|largest flying bird|andes|soaring|vulture|south america",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 3.3, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 15, si_unit: "kg" },
      { dimension: "length", label: "Body length", value: 1.3, si_unit: "m" },
      { dimension: "length", label: "Soaring altitude", value: 5500, si_unit: "m" },
      { dimension: "length", label: "Distance without flapping", value: 170000, si_unit: "m" },
      { dimension: "time", label: "Maximum lifespan", value: 2.21e9, si_unit: "s", note: "Over 70 years" },
    ],
  },
];
