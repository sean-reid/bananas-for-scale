// ── Extra things seed data (batch 12) ─────────────────────────────────────
// Space Missions, Historical Weapons, World Cuisines, Human Body,
// Everyday Objects, Technology, Sports, Vehicles, Art

import type { ThingInput, CategoryInput } from "../types";

export const categoriesData: CategoryInput[] = [
  {
    id: "space-missions",
    name: "Space Missions",
    description:
      "Robotic explorers, orbital habitats, and launch vehicles that have pushed the boundaries of human presence beyond Earth.",
    sort_order: 65,
  },
  {
    id: "weapons-armor",
    name: "Historical Weapons",
    description:
      "The tools of warfare from antiquity through the early modern period, from bronze blades to flintlock muskets.",
    sort_order: 66,
  },
  {
    id: "world-food",
    name: "World Cuisines",
    description:
      "Iconic dishes and baked goods from culinary traditions around the globe, measured bite by bite.",
    sort_order: 67,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SPACE MISSIONS (12) -- skipping Perseverance (exists as mars-rover-perseverance)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "curiosity-rover",
    name: "Curiosity Rover",
    subtitle: "NASA's car-sized nuclear-powered Mars laboratory",
    category_id: "space-missions",
    description:
      "Curiosity is a car-sized rover that landed in Gale Crater on Mars in August 2012. It carries a suite of scientific instruments powered by a radioisotope thermoelectric generator. The rover has traveled over 30 km across the Martian surface studying geology and climate.",
    search_terms: "curiosity|mars rover|MSL|gale crater|nasa mars",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Width", value: 2.7, si_unit: "m" },
      { dimension: "length", label: "Height", value: 2.2, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 899, si_unit: "kg" },
      { dimension: "length", label: "Wheel diameter", value: 0.508, si_unit: "m" },
      { dimension: "length", label: "Robotic arm reach", value: 2.1, si_unit: "m" },
    ],
  },

  {
    slug: "new-horizons-probe",
    name: "New Horizons Probe",
    subtitle: "The fastest spacecraft ever launched from Earth",
    category_id: "space-missions",
    description:
      "New Horizons was launched in 2006 and performed the first flyby of Pluto in July 2015. It traveled at roughly 16.26 km/s, making it one of the fastest human-made objects. The probe carries seven scientific instruments and a small portion of Clyde Tombaugh's ashes.",
    search_terms: "new horizons|pluto probe|kuiper belt|nasa pluto",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 0.7, si_unit: "m" },
      { dimension: "length", label: "Width (antenna dish)", value: 2.1, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.8, si_unit: "m" },
      { dimension: "mass", label: "Launch mass", value: 478, si_unit: "kg" },
      { dimension: "speed", label: "Cruise speed", value: 16260, si_unit: "m/s" },
      { dimension: "length", label: "Antenna diameter", value: 2.1, si_unit: "m" },
    ],
  },

  {
    slug: "cassini-spacecraft",
    name: "Cassini Spacecraft",
    subtitle: "Saturn orbiter that revealed the ringed planet's secrets",
    category_id: "space-missions",
    description:
      "Cassini orbited Saturn from 2004 to 2017, completing 293 orbits and discovering six new moons. The spacecraft carried the Huygens probe, which landed on Titan. Cassini was deliberately plunged into Saturn's atmosphere at the end of its mission to protect potentially habitable moons.",
    search_terms: "cassini|saturn orbiter|huygens|titan probe|saturn mission",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 6.7, si_unit: "m" },
      { dimension: "length", label: "Width", value: 4.0, si_unit: "m" },
      { dimension: "mass", label: "Launch mass (with fuel)", value: 5712, si_unit: "kg" },
      { dimension: "mass", label: "Huygens probe mass", value: 349, si_unit: "kg" },
      { dimension: "length", label: "High-gain antenna diameter", value: 4.0, si_unit: "m" },
      { dimension: "time", label: "Mission duration", value: 4.1e8, si_unit: "s", note: "About 13 years" },
    ],
  },

  {
    slug: "sputnik-1",
    name: "Sputnik 1",
    subtitle: "The first artificial satellite to orbit Earth",
    category_id: "space-missions",
    description:
      "Launched by the Soviet Union on October 4, 1957, Sputnik 1 was a polished metal sphere that orbited Earth for three months. Its radio signal was detectable by amateur radio operators worldwide. The satellite burned up on re-entry in January 1958 after completing about 1,440 orbits.",
    search_terms: "sputnik|first satellite|soviet space|1957 satellite",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.585, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 83.6, si_unit: "kg" },
      { dimension: "length", label: "Antenna length (each)", value: 2.9, si_unit: "m" },
      { dimension: "length", label: "Orbital altitude (perigee)", value: 215000, si_unit: "m" },
      { dimension: "time", label: "Orbital period", value: 5760, si_unit: "s", note: "96 minutes" },
      { dimension: "time", label: "Mission duration", value: 7.78e6, si_unit: "s", note: "About 3 months" },
    ],
  },

  {
    slug: "lunar-rover-apollo",
    name: "Lunar Roving Vehicle",
    subtitle: "The electric buggy astronauts drove on the Moon",
    category_id: "space-missions",
    description:
      "The Lunar Roving Vehicle was used on Apollo 15, 16, and 17 missions between 1971 and 1972. It could carry two astronauts plus equipment at speeds up to 13 km/h. Three rovers remain parked on the lunar surface to this day.",
    search_terms: "lunar rover|moon buggy|apollo rover|LRV|moon car",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 3.1, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1.83, si_unit: "m" },
      { dimension: "length", label: "Height", value: 1.14, si_unit: "m" },
      { dimension: "mass", label: "Mass (unloaded)", value: 210, si_unit: "kg" },
      { dimension: "mass", label: "Max payload", value: 490, si_unit: "kg" },
      { dimension: "speed", label: "Top speed", value: 3.6, si_unit: "m/s", note: "About 13 km/h" },
      { dimension: "length", label: "Wheel diameter", value: 0.81, si_unit: "m" },
    ],
  },

  {
    slug: "skylab-station",
    name: "Skylab",
    subtitle: "America's first space station",
    category_id: "space-missions",
    description:
      "Skylab was the United States' first space station, launched in 1973. It hosted three crewed missions and proved humans could live and work in space for extended periods. The station re-entered Earth's atmosphere in 1979, scattering debris across Western Australia.",
    search_terms: "skylab|first us space station|1973 space station|nasa station",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 25.1, si_unit: "m" },
      { dimension: "length", label: "Maximum diameter", value: 6.6, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 77088, si_unit: "kg" },
      { dimension: "area", label: "Habitable volume", value: 283, si_unit: "m^3", note: "Pressurized volume" },
      { dimension: "length", label: "Solar panel wingspan", value: 31.0, si_unit: "m" },
      { dimension: "time", label: "Operational life", value: 1.9e8, si_unit: "s", note: "About 6 years" },
    ],
  },

  {
    slug: "mir-space-station",
    name: "Mir Space Station",
    subtitle: "The Soviet orbital outpost that pioneered long-duration spaceflight",
    category_id: "space-missions",
    description:
      "Mir operated in low Earth orbit from 1986 to 2001 and was the first modular space station. It held the record for longest continuous human presence in space at 3,644 days. The station was deliberately deorbited over the Pacific Ocean in March 2001.",
    search_terms: "mir|soviet space station|russian station|modular station",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (core)", value: 13.1, si_unit: "m" },
      { dimension: "length", label: "Width (with modules)", value: 31.0, si_unit: "m" },
      { dimension: "mass", label: "Total mass (final config)", value: 129700, si_unit: "kg" },
      { dimension: "area", label: "Pressurized volume", value: 350, si_unit: "m^3" },
      { dimension: "length", label: "Core module diameter", value: 4.15, si_unit: "m" },
      { dimension: "time", label: "Operational life", value: 4.73e8, si_unit: "s", note: "About 15 years" },
    ],
  },

  {
    slug: "tiangong-station",
    name: "Tiangong Space Station",
    subtitle: "China's permanently crewed orbital laboratory",
    category_id: "space-missions",
    description:
      "The Chinese Space Station, also known as Tiangong, reached its basic T-shaped configuration in 2022. It consists of three modules and orbits at roughly 390 km altitude. The station supports a crew of three with planned expansion capability for six.",
    search_terms: "tiangong|chinese space station|CSS|china station",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (T-shape)", value: 17.9, si_unit: "m" },
      { dimension: "length", label: "Width (with modules)", value: 37.0, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 66000, si_unit: "kg" },
      { dimension: "area", label: "Pressurized volume", value: 110, si_unit: "m^3" },
      { dimension: "length", label: "Core module diameter", value: 4.2, si_unit: "m" },
      { dimension: "length", label: "Orbital altitude", value: 390000, si_unit: "m" },
    ],
  },

  {
    slug: "spacex-starship",
    name: "SpaceX Starship",
    subtitle: "The largest and most powerful rocket ever flown",
    category_id: "space-missions",
    description:
      "Starship is a fully reusable two-stage launch vehicle developed by SpaceX. The complete stack stands about 121 m tall and can generate roughly 74.4 MN of thrust at liftoff from its 33 Raptor engines. It is designed to carry both crew and cargo to the Moon, Mars, and beyond.",
    search_terms: "starship|spacex|super heavy|raptor engine|mars rocket",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total height (stacked)", value: 121, si_unit: "m" },
      { dimension: "length", label: "Ship diameter", value: 9.0, si_unit: "m" },
      { dimension: "mass", label: "Fully fueled mass", value: 5000000, si_unit: "kg" },
      { dimension: "force", label: "Liftoff thrust", value: 74400000, si_unit: "N" },
      { dimension: "mass", label: "Payload to LEO", value: 150000, si_unit: "kg" },
      { dimension: "length", label: "Booster height", value: 71, si_unit: "m" },
    ],
  },

  {
    slug: "rosetta-probe",
    name: "Rosetta Probe",
    subtitle: "The first spacecraft to orbit and land on a comet",
    category_id: "space-missions",
    description:
      "Rosetta was an ESA mission launched in 2004 that reached Comet 67P/Churyumov-Gerasimenko in 2014. It deployed the Philae lander, which made the first soft landing on a comet nucleus. The mission ended in 2016 when Rosetta itself was deliberately crashed into the comet.",
    search_terms: "rosetta|philae|comet lander|67P|ESA comet mission",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body length", value: 2.8, si_unit: "m" },
      { dimension: "length", label: "Solar panel wingspan", value: 32.0, si_unit: "m" },
      { dimension: "mass", label: "Launch mass", value: 3000, si_unit: "kg" },
      { dimension: "mass", label: "Philae lander mass", value: 100, si_unit: "kg" },
      { dimension: "length", label: "Body width", value: 2.1, si_unit: "m" },
      { dimension: "length", label: "Body height", value: 2.0, si_unit: "m" },
    ],
  },

  {
    slug: "pioneer-10-probe",
    name: "Pioneer 10",
    subtitle: "The first spacecraft to cross the asteroid belt and fly by Jupiter",
    category_id: "space-missions",
    description:
      "Launched in 1972, Pioneer 10 was the first probe to traverse the asteroid belt and make a close flyby of Jupiter. It carried a gold-anodized aluminum plaque depicting a man and woman and Earth's location. NASA received Pioneer 10's last weak signal in January 2003.",
    search_terms: "pioneer 10|jupiter probe|pioneer plaque|first asteroid belt",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body diameter", value: 2.74, si_unit: "m" },
      { dimension: "length", label: "Height", value: 1.2, si_unit: "m" },
      { dimension: "mass", label: "Launch mass", value: 258, si_unit: "kg" },
      { dimension: "length", label: "High-gain antenna diameter", value: 2.74, si_unit: "m" },
      { dimension: "length", label: "Plaque dimensions (width)", value: 0.229, si_unit: "m" },
      { dimension: "length", label: "Plaque dimensions (height)", value: 0.152, si_unit: "m" },
    ],
  },

  {
    slug: "vostok-1-capsule",
    name: "Vostok 1 Capsule",
    subtitle: "The spacecraft that carried the first human into space",
    category_id: "space-missions",
    description:
      "Vostok 1 carried Yuri Gagarin on the first human spaceflight on April 12, 1961. The mission lasted 108 minutes and completed one orbit of Earth. The spherical descent module separated from the instrument module before re-entry, and Gagarin ejected and parachuted to the ground.",
    search_terms: "vostok 1|gagarin|first human spaceflight|soviet capsule",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Descent module diameter", value: 2.3, si_unit: "m" },
      { dimension: "length", label: "Total length (with instrument module)", value: 4.4, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 4725, si_unit: "kg" },
      { dimension: "mass", label: "Descent module mass", value: 2460, si_unit: "kg" },
      { dimension: "time", label: "Mission duration", value: 6480, si_unit: "s", note: "108 minutes" },
      { dimension: "speed", label: "Orbital speed", value: 7900, si_unit: "m/s" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HISTORICAL WEAPONS (10) -- skipping Trebuchet (exists as trebuchet-medieval)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "medieval-longbow",
    name: "Medieval English Longbow",
    subtitle: "The weapon that won Agincourt",
    category_id: "weapons-armor",
    description:
      "The English longbow was typically made from a single stave of yew and could send arrows over 300 m. Skilled archers could loose 10 to 12 arrows per minute. The longbow played a decisive role at the battles of Crecy, Poitiers, and Agincourt.",
    search_terms: "longbow|english longbow|medieval bow|yew bow|agincourt",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Bow length", value: 1.83, si_unit: "m" },
      { dimension: "mass", label: "Bow mass", value: 0.7, si_unit: "kg" },
      { dimension: "force", label: "Draw weight", value: 667, si_unit: "N", note: "About 150 lbf" },
      { dimension: "length", label: "Draw length", value: 0.76, si_unit: "m" },
      { dimension: "length", label: "Arrow length", value: 0.76, si_unit: "m" },
      { dimension: "length", label: "Effective range", value: 230, si_unit: "m" },
    ],
  },

  {
    slug: "medieval-crossbow",
    name: "Medieval Crossbow",
    subtitle: "The mechanized bow that changed siege warfare",
    category_id: "weapons-armor",
    description:
      "Medieval crossbows used a mechanical locking and trigger mechanism that allowed any soldier to deliver powerful shots with minimal training. Steel-prod crossbows of the 14th and 15th centuries could penetrate plate armor at close range. They were slower to reload than longbows but more accurate.",
    search_terms: "crossbow|medieval crossbow|arbalest|bolt|quarrel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 0.9, si_unit: "m" },
      { dimension: "length", label: "Prod (bow) width", value: 0.75, si_unit: "m" },
      { dimension: "mass", label: "Mass (steel prod)", value: 3.5, si_unit: "kg" },
      { dimension: "force", label: "Draw force", value: 1500, si_unit: "N", note: "About 340 lbf" },
      { dimension: "length", label: "Bolt length", value: 0.38, si_unit: "m" },
      { dimension: "length", label: "Effective range", value: 100, si_unit: "m" },
    ],
  },

  {
    slug: "jousting-lance",
    name: "Jousting Lance",
    subtitle: "The long wooden spear of tournament combat",
    category_id: "weapons-armor",
    description:
      "Jousting lances were hollow wooden shafts designed to shatter on impact during tournaments. A typical tournament lance was made of softwood to reduce the risk of lethal injury. War lances were shorter, solid, and built to withstand repeated impacts.",
    search_terms: "jousting lance|tournament lance|medieval lance|tilt lance",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 3.7, si_unit: "m" },
      { dimension: "length", label: "Shaft diameter", value: 0.09, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 4.0, si_unit: "kg" },
      { dimension: "length", label: "Vamplate (hand guard) diameter", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Coronel (tip) width", value: 0.06, si_unit: "m" },
    ],
  },

  {
    slug: "flintlock-musket",
    name: "Flintlock Musket",
    subtitle: "The smoothbore firearm that dominated 18th-century battlefields",
    category_id: "weapons-armor",
    description:
      "Flintlock muskets were the standard infantry weapon from roughly 1660 to 1840. A trained soldier could fire three rounds per minute. The Brown Bess, used by the British Army, saw service in conflicts from the War of Spanish Succession to the Napoleonic Wars.",
    search_terms: "flintlock|musket|brown bess|smoothbore|napoleonic musket",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 1.49, si_unit: "m" },
      { dimension: "length", label: "Barrel length", value: 1.07, si_unit: "m" },
      { dimension: "mass", label: "Mass (unloaded)", value: 4.7, si_unit: "kg" },
      { dimension: "length", label: "Bore diameter (caliber)", value: 0.019, si_unit: "m", note: ".75 caliber" },
      { dimension: "length", label: "Bayonet length", value: 0.43, si_unit: "m" },
      { dimension: "length", label: "Effective range", value: 100, si_unit: "m" },
    ],
  },

  {
    slug: "viking-round-shield",
    name: "Viking Round Shield",
    subtitle: "The linden-wood shield of Norse warriors",
    category_id: "weapons-armor",
    description:
      "Viking shields were typically round, made of planks of linden or fir, with an iron boss protecting the hand grip. They were lightweight enough to be used offensively as well as defensively. Archaeological finds show diameters ranging from 45 cm to over 90 cm.",
    search_terms: "viking shield|round shield|norse shield|iron boss shield",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.9, si_unit: "m" },
      { dimension: "length", label: "Thickness (planks)", value: 0.008, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 5.0, si_unit: "kg" },
      { dimension: "length", label: "Boss diameter", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Boss height", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Rim-to-rim (typical)", value: 0.8, si_unit: "m" },
    ],
  },

  {
    slug: "greek-phalanx-pike",
    name: "Greek Sarissa Pike",
    subtitle: "The long spear of Alexander the Great's phalanx",
    category_id: "weapons-armor",
    description:
      "The sarissa was a long pike used by Macedonian infantry in Philip II and Alexander the Great's armies. Soldiers wielded it with two hands while sheltering behind a smaller shield strapped to the forearm. The extreme length gave the phalanx a wall of spear points several ranks deep.",
    search_terms: "sarissa|macedonian pike|phalanx spear|greek pike|alexander pike",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 5.5, si_unit: "m" },
      { dimension: "length", label: "Shaft diameter", value: 0.035, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 5.5, si_unit: "kg" },
      { dimension: "length", label: "Iron head length", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Butt spike length", value: 0.44, si_unit: "m" },
    ],
  },

  {
    slug: "spartan-aspis-shield",
    name: "Spartan Aspis Shield",
    subtitle: "The bronze-faced hoplon carried by Spartan warriors",
    category_id: "weapons-armor",
    description:
      "The aspis (also called hoplon) was a large, round, concave shield made of wood and faced with a thin sheet of bronze. Spartans famously marked theirs with the Greek letter lambda. The shield was heavy enough to be used as a weapon in close combat.",
    search_terms: "spartan shield|aspis|hoplon|lambda shield|greek shield",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.9, si_unit: "m" },
      { dimension: "length", label: "Depth (concavity)", value: 0.1, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 7.3, si_unit: "kg" },
      { dimension: "length", label: "Bronze facing thickness", value: 0.0005, si_unit: "m" },
      { dimension: "length", label: "Wood core thickness", value: 0.02, si_unit: "m" },
    ],
  },

  {
    slug: "bronze-age-sword",
    name: "Bronze Age Sword",
    subtitle: "One of humanity's earliest purpose-built weapons",
    category_id: "weapons-armor",
    description:
      "Bronze swords emerged around 1700 BCE and were cast from an alloy of copper and tin. They ranged from short stabbing swords to longer slashing types. Bronze is softer than iron, so blades were typically leaf-shaped to distribute stress evenly and resist bending.",
    search_terms: "bronze sword|bronze age weapon|leaf blade|ancient sword",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Blade length", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Total length (with hilt)", value: 0.72, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.8, si_unit: "kg" },
      { dimension: "length", label: "Blade width (max)", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Blade thickness", value: 0.006, si_unit: "m" },
      { dimension: "length", label: "Hilt length", value: 0.12, si_unit: "m" },
    ],
  },

  {
    slug: "roman-ballista",
    name: "Roman Ballista",
    subtitle: "The torsion-powered siege engine of the Roman legions",
    category_id: "weapons-armor",
    description:
      "The Roman ballista was a large crossbow-like siege engine powered by torsion springs made of sinew. It could hurl stone balls or heavy bolts with great accuracy over several hundred meters. Smaller versions called scorpiones were mounted on carts for field use.",
    search_terms: "ballista|roman siege|torsion catapult|scorpio|roman artillery",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Width (arms extended)", value: 2.5, si_unit: "m" },
      { dimension: "length", label: "Height", value: 1.8, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 450, si_unit: "kg" },
      { dimension: "mass", label: "Projectile mass", value: 26, si_unit: "kg" },
      { dimension: "length", label: "Effective range", value: 300, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WORLD CUISINES (12) -- skipping Croissant and Sushi roll (already exist)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "soft-pretzel",
    name: "Soft Pretzel",
    subtitle: "A twisted knot of salted dough from central Europe",
    category_id: "world-food",
    description:
      "The pretzel's distinctive knot shape dates back to at least the 7th century in Europe. Traditional Bavarian pretzels are dipped in lye solution before baking, which gives them their dark brown crust. The three holes in the knot are said to represent the Holy Trinity.",
    search_terms: "pretzel|bavarian pretzel|brezel|lye bread|german bread",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.18, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Dough thickness", value: 0.025, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.12, si_unit: "kg" },
      { dimension: "length", label: "Depth", value: 0.04, si_unit: "m" },
    ],
  },

  {
    slug: "ramen-bowl",
    name: "Bowl of Ramen",
    subtitle: "Japan's beloved noodle soup served in a deep ceramic bowl",
    category_id: "world-food",
    description:
      "Ramen originated as a Chinese import to Japan in the early 20th century and has since become one of Japan's most iconic dishes. A standard bowl contains wheat noodles in a broth that may be based on pork bone (tonkotsu), soy sauce (shoyu), miso, or salt (shio). Toppings typically include chashu pork, a soft-boiled egg, nori, and green onions.",
    search_terms: "ramen|tonkotsu|shoyu ramen|japanese noodle soup|miso ramen",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Bowl diameter", value: 0.21, si_unit: "m" },
      { dimension: "length", label: "Bowl depth", value: 0.09, si_unit: "m" },
      { dimension: "mass", label: "Total mass (with broth)", value: 0.7, si_unit: "kg" },
      { dimension: "mass", label: "Noodle mass", value: 0.15, si_unit: "kg" },
      { dimension: "length", label: "Noodle length (uncooked)", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Broth volume mass", value: 0.4, si_unit: "kg" },
    ],
  },

  {
    slug: "empanada",
    name: "Empanada",
    subtitle: "A filled pastry turnover from Latin America and Spain",
    category_id: "world-food",
    description:
      "Empanadas are crescent-shaped pastries filled with meat, cheese, vegetables, or fruit, then baked or fried. They are found across Latin America, Spain, and the Philippines, with each region having distinct fillings and dough styles. The name comes from the Spanish verb 'empanar,' meaning to coat in bread.",
    search_terms: "empanada|turnover|latin american pastry|spanish pastry",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (curved edge)", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.1, si_unit: "kg" },
      { dimension: "length", label: "Dough thickness", value: 0.003, si_unit: "m" },
    ],
  },

  {
    slug: "naan-bread",
    name: "Naan Bread",
    subtitle: "The leavened flatbread baked in a tandoor oven",
    category_id: "world-food",
    description:
      "Naan is a soft, pillowy flatbread staple across South and Central Asia. It is traditionally slapped onto the inside wall of a clay tandoor oven heated to around 480 degrees Celsius. The dough is leavened with yeast or yogurt, giving it its characteristic bubbled surface.",
    search_terms: "naan|nan bread|tandoor bread|indian flatbread",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.26, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.01, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.09, si_unit: "kg" },
      { dimension: "length", label: "Bubble height", value: 0.02, si_unit: "m" },
    ],
  },

  {
    slug: "dim-sum-steamer-basket",
    name: "Dim Sum Steamer Basket",
    subtitle: "A bamboo tower of Cantonese delicacies",
    category_id: "world-food",
    description:
      "Dim sum steamer baskets are round bamboo containers stacked on top of each other over boiling water. Each basket typically holds three to four dumplings or buns. The bamboo absorbs excess moisture and prevents condensation from dripping onto the food.",
    search_terms: "dim sum|steamer basket|bamboo steamer|yum cha|cantonese dumplings",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Basket diameter", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Single basket height", value: 0.065, si_unit: "m" },
      { dimension: "length", label: "Stacked height (3 tiers)", value: 0.22, si_unit: "m" },
      { dimension: "mass", label: "Empty basket mass", value: 0.15, si_unit: "kg" },
      { dimension: "mass", label: "Loaded basket mass", value: 0.45, si_unit: "kg" },
      { dimension: "length", label: "Bamboo wall thickness", value: 0.003, si_unit: "m" },
    ],
  },

  {
    slug: "falafel-ball",
    name: "Falafel Ball",
    subtitle: "A deep-fried sphere of ground chickpeas from the Middle East",
    category_id: "world-food",
    description:
      "Falafel is made from ground chickpeas or fava beans mixed with herbs and spices, then formed into balls or patties and deep-fried. It is a staple street food across the Middle East and North Africa. The crispy exterior gives way to a bright green, herb-flecked interior.",
    search_terms: "falafel|chickpea ball|middle eastern food|street food",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Mass (single ball)", value: 0.025, si_unit: "kg" },
      { dimension: "length", label: "Crust thickness", value: 0.003, si_unit: "m" },
      { dimension: "length", label: "Height (slightly flattened)", value: 0.035, si_unit: "m" },
      { dimension: "mass", label: "Serving (6 balls)", value: 0.15, si_unit: "kg" },
    ],
  },

  {
    slug: "churro",
    name: "Churro",
    subtitle: "A ridged stick of fried dough coated in cinnamon sugar",
    category_id: "world-food",
    description:
      "Churros are strips of choux-like dough piped through a star-shaped nozzle and deep-fried until golden. They originated in Spain and Portugal and are now popular across Latin America. They are typically served with thick hot chocolate for dipping or filled with dulce de leche.",
    search_terms: "churro|spanish donut|fried dough|cinnamon stick|chocolate churro",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.025, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.05, si_unit: "kg" },
      { dimension: "length", label: "Ridge depth", value: 0.003, si_unit: "m" },
      { dimension: "length", label: "Hollow core diameter", value: 0.008, si_unit: "m" },
    ],
  },

  {
    slug: "spring-roll",
    name: "Spring Roll",
    subtitle: "A crispy or fresh-wrapped cylinder of vegetables and protein",
    category_id: "world-food",
    description:
      "Spring rolls come in two main varieties: fried rolls with a wheat-flour wrapper common in Chinese cuisine, and fresh rolls wrapped in rice paper popular in Vietnamese cuisine. The filling typically includes shredded vegetables, glass noodles, and minced pork or shrimp.",
    search_terms: "spring roll|egg roll|vietnamese roll|chinese roll|rice paper roll",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.035, si_unit: "m" },
      { dimension: "mass", label: "Mass (fried)", value: 0.06, si_unit: "kg" },
      { dimension: "length", label: "Wrapper thickness", value: 0.001, si_unit: "m" },
      { dimension: "mass", label: "Mass (fresh/rice paper)", value: 0.1, si_unit: "kg" },
    ],
  },

  {
    slug: "tamale",
    name: "Tamale",
    subtitle: "Corn masa dough steamed inside a husk wrapper",
    category_id: "world-food",
    description:
      "Tamales are one of the oldest prepared foods in the Americas, dating back to at least 8000 BCE in Mesoamerica. They consist of masa (corn dough) filled with meats, cheeses, chilies, or sweet ingredients, then wrapped in corn husks or banana leaves and steamed. They remain a centerpiece of celebrations across Mexico and Central America.",
    search_terms: "tamale|tamal|corn husk|masa|mexican food|mesoamerican food",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.2, si_unit: "m" },
      { dimension: "length", label: "Diameter (wrapped)", value: 0.06, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.15, si_unit: "kg" },
      { dimension: "length", label: "Masa thickness", value: 0.01, si_unit: "m" },
      { dimension: "length", label: "Husk overlap", value: 0.05, si_unit: "m" },
    ],
  },

  {
    slug: "baklava-piece",
    name: "Baklava Piece",
    subtitle: "A diamond of layered phyllo pastry soaked in honey syrup",
    category_id: "world-food",
    description:
      "Baklava is a rich pastry made of layers of phyllo dough filled with chopped nuts and sweetened with honey or syrup. It is a signature dessert across Turkey, Greece, and the broader Middle East. A single piece can contain 30 to 40 individual layers of paper-thin phyllo.",
    search_terms: "baklava|phyllo pastry|turkish dessert|greek pastry|honey pastry",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diamond width", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Diamond length", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Height (thickness)", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Mass (single piece)", value: 0.05, si_unit: "kg" },
      { dimension: "length", label: "Phyllo layer thickness", value: 0.0002, si_unit: "m" },
      { dimension: "length", label: "Nut layer thickness", value: 0.005, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE HUMAN BODY (12)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "human-lung-organ",
    name: "Human Lung",
    subtitle: "The spongy organ that processes about 11,000 litres of air per day",
    category_id: "human-body",
    description:
      "Each human lung contains roughly 300 million alveoli, providing a total surface area about the size of a tennis court. The right lung is slightly larger than the left to accommodate the heart. Together, the lungs process about 11,000 litres of air daily at rest.",
    search_terms: "lung|human lung|respiratory|alveoli|breathing organ",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (right lung)", value: 0.27, si_unit: "m" },
      { dimension: "length", label: "Width (at base)", value: 0.16, si_unit: "m" },
      { dimension: "length", label: "Depth (front to back)", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Mass (right lung)", value: 0.625, si_unit: "kg" },
      { dimension: "mass", label: "Mass (left lung)", value: 0.567, si_unit: "kg" },
      { dimension: "area", label: "Total alveolar surface area", value: 70, si_unit: "m^2" },
    ],
  },

  {
    slug: "human-kidney-organ",
    name: "Human Kidney",
    subtitle: "A bean-shaped filter that cleans your entire blood supply 40 times daily",
    category_id: "human-body",
    description:
      "Each kidney contains about one million tiny filtering units called nephrons. Together, the kidneys filter roughly 180 litres of blood per day, producing about 1.5 litres of urine. They also regulate blood pressure, electrolyte balance, and red blood cell production.",
    search_terms: "kidney|human kidney|nephron|renal|urinary organ",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Mass (single)", value: 0.15, si_unit: "kg" },
      { dimension: "area", label: "Filtration surface area", value: 1.5, si_unit: "m^2", note: "Per kidney" },
      { dimension: "length", label: "Ureter length", value: 0.25, si_unit: "m" },
    ],
  },

  {
    slug: "spleen-organ",
    name: "Human Spleen",
    subtitle: "The fist-sized organ that recycles old blood cells",
    category_id: "human-body",
    description:
      "The spleen sits in the upper left abdomen and filters blood, removing old or damaged red blood cells. It also stores a reserve of blood and produces white blood cells as part of the immune system. Despite its functions, humans can survive without a spleen.",
    search_terms: "spleen|human spleen|blood filter|lymphoid organ",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.12, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.07, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.17, si_unit: "kg" },
      { dimension: "mass", label: "Blood reserve held", value: 0.04, si_unit: "kg" },
    ],
  },

  {
    slug: "pancreas-organ",
    name: "Human Pancreas",
    subtitle: "The dual-purpose gland behind your stomach",
    category_id: "human-body",
    description:
      "The pancreas serves both digestive and hormonal functions. Its exocrine cells produce enzymes that break down fats, proteins, and carbohydrates, while its islets of Langerhans produce insulin and glucagon to regulate blood sugar. It sits behind the stomach, spanning the upper abdomen.",
    search_terms: "pancreas|human pancreas|islets of langerhans|insulin gland",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Width (head)", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.025, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.08, si_unit: "kg" },
      { dimension: "length", label: "Pancreatic duct length", value: 0.2, si_unit: "m" },
    ],
  },

  {
    slug: "thyroid-gland-organ",
    name: "Human Thyroid Gland",
    subtitle: "The butterfly-shaped gland that sets your metabolic pace",
    category_id: "human-body",
    description:
      "The thyroid gland wraps around the front of the trachea just below the larynx. It produces hormones T3 and T4 that regulate metabolism, heart rate, and body temperature. Despite weighing only about 25 grams, it influences nearly every cell in the body.",
    search_terms: "thyroid|thyroid gland|T3 T4|metabolic gland|endocrine",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width (across both lobes)", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Height (each lobe)", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Thickness (each lobe)", value: 0.02, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.025, si_unit: "kg" },
      { dimension: "length", label: "Isthmus width", value: 0.02, si_unit: "m" },
    ],
  },

  {
    slug: "adrenal-gland-organ",
    name: "Human Adrenal Gland",
    subtitle: "A tiny pyramid atop each kidney that floods your body with adrenaline",
    category_id: "human-body",
    description:
      "Each adrenal gland sits on top of a kidney and produces hormones including cortisol, aldosterone, and adrenaline. The outer cortex handles long-term stress and metabolism, while the inner medulla triggers the fight-or-flight response. Despite their small size, they are essential for survival.",
    search_terms: "adrenal gland|suprarenal|adrenaline|cortisol|fight or flight",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.01, si_unit: "m" },
      { dimension: "mass", label: "Mass (each)", value: 0.005, si_unit: "kg" },
      { dimension: "length", label: "Cortex thickness", value: 0.008, si_unit: "m" },
    ],
  },

  {
    slug: "human-molar-tooth",
    name: "Human Molar Tooth",
    subtitle: "The broad grinding tooth at the back of the jaw",
    category_id: "human-body",
    description:
      "Molar teeth have broad, flat crowns designed for grinding food. Adults have 12 molars including four wisdom teeth. The enamel covering a molar is the hardest substance in the human body, roughly as hard as steel on the Mohs scale.",
    search_terms: "molar|human molar|tooth|grinding tooth|dental",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Crown height", value: 0.0075, si_unit: "m" },
      { dimension: "length", label: "Crown width (buccolingual)", value: 0.011, si_unit: "m" },
      { dimension: "length", label: "Crown length (mesiodistal)", value: 0.01, si_unit: "m" },
      { dimension: "length", label: "Root length", value: 0.013, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.002, si_unit: "kg" },
      { dimension: "length", label: "Enamel thickness", value: 0.0025, si_unit: "m" },
    ],
  },

  {
    slug: "lumbar-vertebra-bone",
    name: "Human Lumbar Vertebra",
    subtitle: "The largest movable vertebra in your spine",
    category_id: "human-body",
    description:
      "The five lumbar vertebrae (L1 through L5) are the largest and strongest vertebrae in the spinal column. They bear the majority of the body's weight above the pelvis. Each vertebra has a thick body, short spinous process, and broad transverse processes.",
    search_terms: "lumbar vertebra|lower spine|L5|spinal bone|vertebra",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Body width", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Body depth (anterior-posterior)", value: 0.035, si_unit: "m" },
      { dimension: "length", label: "Body height", value: 0.028, si_unit: "m" },
      { dimension: "length", label: "Total width (with transverse processes)", value: 0.09, si_unit: "m" },
      { dimension: "mass", label: "Mass (approximate)", value: 0.035, si_unit: "kg" },
    ],
  },

  {
    slug: "human-hand-span",
    name: "Human Hand Span",
    subtitle: "The reach from thumb tip to little finger tip",
    category_id: "human-body",
    description:
      "The hand span is measured from the tip of the thumb to the tip of the little finger with the hand fully spread. It has historically been used as an informal unit of measurement. The average adult hand span varies significantly between individuals.",
    search_terms: "hand span|hand width|spread hand|finger span",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Average male hand span", value: 0.229, si_unit: "m" },
      { dimension: "length", label: "Average female hand span", value: 0.203, si_unit: "m" },
      { dimension: "length", label: "Hand length (wrist to middle finger)", value: 0.189, si_unit: "m" },
      { dimension: "length", label: "Hand breadth (across knuckles)", value: 0.085, si_unit: "m" },
      { dimension: "length", label: "Middle finger length", value: 0.08, si_unit: "m" },
    ],
  },

  {
    slug: "trachea-organ",
    name: "Human Trachea",
    subtitle: "The reinforced airway tube connecting your throat to your lungs",
    category_id: "human-body",
    description:
      "The trachea (windpipe) is a tube about 10 to 12 cm long reinforced by 16 to 20 C-shaped cartilage rings. It branches into two main bronchi at its lower end. The open side of each cartilage ring faces the esophagus, allowing it to expand when food passes.",
    search_terms: "trachea|windpipe|airway|cartilage rings|bronchi",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.11, si_unit: "m" },
      { dimension: "length", label: "External diameter", value: 0.025, si_unit: "m" },
      { dimension: "length", label: "Internal diameter", value: 0.018, si_unit: "m" },
      { dimension: "length", label: "Cartilage ring height", value: 0.004, si_unit: "m" },
      { dimension: "length", label: "Wall thickness", value: 0.003, si_unit: "m" },
    ],
  },

  {
    slug: "esophagus-organ",
    name: "Human Esophagus",
    subtitle: "The muscular tube that carries food from throat to stomach",
    category_id: "human-body",
    description:
      "The esophagus is a roughly 25 cm muscular tube that connects the pharynx to the stomach. It uses rhythmic contractions called peristalsis to push food downward, which is why you can swallow even while upside down. Two sphincter muscles at each end prevent backflow.",
    search_terms: "esophagus|gullet|food pipe|swallowing tube|peristalsis",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Diameter (relaxed)", value: 0.02, si_unit: "m" },
      { dimension: "length", label: "Diameter (during swallowing)", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Wall thickness", value: 0.004, si_unit: "m" },
      { dimension: "speed", label: "Peristalsis speed", value: 0.04, si_unit: "m/s" },
    ],
  },

  {
    slug: "appendix-organ",
    name: "Human Appendix",
    subtitle: "A small pouch off the large intestine with a debated purpose",
    category_id: "human-body",
    description:
      "The vermiform appendix is a narrow, finger-shaped pouch attached to the cecum at the start of the large intestine. Long thought to be vestigial, recent research suggests it may serve as a reservoir for beneficial gut bacteria. Appendicitis, its inflammation, is one of the most common surgical emergencies.",
    search_terms: "appendix|vermiform appendix|cecum pouch|appendicitis",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.09, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.008, si_unit: "m" },
      { dimension: "length", label: "Wall thickness", value: 0.002, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.008, si_unit: "kg" },
      { dimension: "length", label: "Lumen diameter", value: 0.003, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE EVERYDAY OBJECTS (10) -- skipping Fire hydrant (already exists)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "fire-extinguisher-abc",
    name: "Fire Extinguisher",
    subtitle: "The red cylinder found in every hallway and kitchen",
    category_id: "everyday-objects",
    description:
      "A standard ABC dry-chemical fire extinguisher is rated for ordinary combustibles, flammable liquids, and electrical fires. The pressurized steel cylinder contains monoammonium phosphate powder. Most units must be inspected annually and replaced or recharged every 6 to 12 years.",
    search_terms: "fire extinguisher|ABC extinguisher|dry chemical|fire safety",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Cylinder diameter", value: 0.15, si_unit: "m" },
      { dimension: "mass", label: "Mass (full, 5 lb model)", value: 3.4, si_unit: "kg" },
      { dimension: "mass", label: "Agent mass", value: 2.3, si_unit: "kg" },
      { dimension: "length", label: "Hose length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Discharge range", value: 4.5, si_unit: "m" },
    ],
  },

  {
    slug: "stop-sign",
    name: "Stop Sign",
    subtitle: "The red octagonal sign recognized worldwide",
    category_id: "everyday-objects",
    description:
      "The standard stop sign is an octagon with white text on a red background, a design adopted internationally under the Vienna Convention on Road Signs and Signals. In the United States, its dimensions are specified by the Manual on Uniform Traffic Control Devices. The octagonal shape was chosen so drivers can recognize it from the back.",
    search_terms: "stop sign|octagonal sign|traffic sign|road sign",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width (flat to flat)", value: 0.762, si_unit: "m", note: "30 inches" },
      { dimension: "length", label: "Height (point to point)", value: 0.762, si_unit: "m" },
      { dimension: "length", label: "Mounting height (bottom of sign)", value: 2.13, si_unit: "m" },
      { dimension: "length", label: "Border width", value: 0.02, si_unit: "m" },
      { dimension: "length", label: "Letter height", value: 0.19, si_unit: "m" },
      { dimension: "mass", label: "Sign mass (aluminum)", value: 1.8, si_unit: "kg" },
    ],
  },

  {
    slug: "manhole-cover",
    name: "Manhole Cover",
    subtitle: "The heavy cast-iron disc that keeps you from falling underground",
    category_id: "everyday-objects",
    description:
      "Manhole covers are circular so they cannot fall through their own opening regardless of orientation. Standard covers in the US are about 60 cm in diameter and weigh around 50 to 60 kg. They are typically made of cast iron or ductile iron and can support vehicle traffic loads.",
    search_terms: "manhole cover|sewer cover|utility cover|cast iron cover",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.61, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 55, si_unit: "kg" },
      { dimension: "length", label: "Frame inner diameter", value: 0.56, si_unit: "m" },
      { dimension: "length", label: "Pick hole diameter", value: 0.03, si_unit: "m" },
    ],
  },

  {
    slug: "park-bench-standard",
    name: "Park Bench",
    subtitle: "The wooden-slat seat found in public spaces everywhere",
    category_id: "everyday-objects",
    description:
      "A standard park bench typically seats two to three adults and is made of wood slats on a cast-iron or steel frame. Many designs descend from 19th-century Victorian-era public furniture. Park benches are bolted to concrete pads to prevent theft.",
    search_terms: "park bench|garden bench|public bench|outdoor seating",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 1.52, si_unit: "m" },
      { dimension: "length", label: "Seat depth", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Seat height", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Back height", value: 0.85, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 45, si_unit: "kg" },
      { dimension: "length", label: "Armrest height", value: 0.65, si_unit: "m" },
    ],
  },

  {
    slug: "street-lamp-post",
    name: "Street Lamp",
    subtitle: "The tall pole that lights up city sidewalks after dark",
    category_id: "everyday-objects",
    description:
      "Modern street lamps use LED or high-pressure sodium fixtures mounted on steel or aluminum poles. A typical residential street light stands about 6 to 9 m tall, while highway lights can reach 15 m. LED street lights use about 40 to 60% less energy than older sodium lamps.",
    search_terms: "street lamp|street light|lamp post|road light|LED street light",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Pole height (residential)", value: 7.5, si_unit: "m" },
      { dimension: "length", label: "Pole diameter (base)", value: 0.2, si_unit: "m" },
      { dimension: "length", label: "Arm extension", value: 1.8, si_unit: "m" },
      { dimension: "mass", label: "Pole mass", value: 180, si_unit: "kg" },
      { dimension: "length", label: "Fixture length", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Foundation depth", value: 1.8, si_unit: "m" },
    ],
  },

  {
    slug: "escalator-step",
    name: "Escalator Step",
    subtitle: "A single grooved tread in the endless moving staircase",
    category_id: "everyday-objects",
    description:
      "Each escalator step is a die-cast aluminum tread riding on a chain loop driven by an electric motor. The grooved (cleated) surface interlocks with the comb plate at each landing to prevent objects from getting caught. A typical escalator has 80 to 120 visible steps at any given time.",
    search_terms: "escalator step|moving staircase|escalator tread|mall escalator",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tread width", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Tread depth", value: 0.4, si_unit: "m" },
      { dimension: "length", label: "Step rise height", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Step mass", value: 10, si_unit: "kg" },
      { dimension: "length", label: "Cleat groove depth", value: 0.005, si_unit: "m" },
      { dimension: "speed", label: "Travel speed", value: 0.5, si_unit: "m/s" },
    ],
  },

  {
    slug: "elevator-cab",
    name: "Elevator Cab",
    subtitle: "The small room that moves vertically through buildings",
    category_id: "everyday-objects",
    description:
      "A standard passenger elevator cab in an office building holds about 10 to 15 people. The cab rides on guide rails inside a shaft, counterbalanced by a weight that equals the cab plus about 40% of its rated load. Modern elevators travel at speeds of 1 to 10 m/s depending on building height.",
    search_terms: "elevator cab|lift car|passenger elevator|elevator interior",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 2.1, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Height", value: 2.4, si_unit: "m" },
      { dimension: "mass", label: "Cab mass (empty)", value: 1100, si_unit: "kg" },
      { dimension: "mass", label: "Rated load", value: 1150, si_unit: "kg", note: "About 15 passengers" },
      { dimension: "length", label: "Door opening width", value: 1.1, si_unit: "m" },
    ],
  },

  {
    slug: "traffic-light-signal",
    name: "Traffic Light",
    subtitle: "The three-eyed signal that governs intersections",
    category_id: "everyday-objects",
    description:
      "A standard vertical traffic signal has three 300 mm (12-inch) lenses arranged red on top, yellow in the middle, and green at the bottom. Modern signals use LED arrays that last 8 to 10 years compared to 1 to 2 years for incandescent bulbs. The first electric traffic signal was installed in Cleveland, Ohio in 1914.",
    search_terms: "traffic light|traffic signal|stoplight|red light|intersection signal",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Housing height", value: 1.07, si_unit: "m" },
      { dimension: "length", label: "Housing width", value: 0.38, si_unit: "m" },
      { dimension: "length", label: "Lens diameter", value: 0.3, si_unit: "m" },
      { dimension: "mass", label: "Signal head mass", value: 18, si_unit: "kg" },
      { dimension: "length", label: "Housing depth", value: 0.38, si_unit: "m" },
      { dimension: "length", label: "Mounting height", value: 5.5, si_unit: "m" },
    ],
  },

  {
    slug: "us-mailbox-collection",
    name: "USPS Collection Mailbox",
    subtitle: "The iconic blue mailbox on American street corners",
    category_id: "everyday-objects",
    description:
      "The USPS collection mailbox has been a familiar sight since the mid-20th century. Its distinctive blue color was adopted in 1971 when the US Postal Service replaced the Post Office Department. The pull-down door and anti-theft chute design have been refined several times to prevent mail fishing.",
    search_terms: "mailbox|USPS mailbox|blue mailbox|collection box|letter box",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.12, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.51, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.41, si_unit: "m" },
      { dimension: "mass", label: "Mass (empty)", value: 63, si_unit: "kg" },
      { dimension: "length", label: "Mail slot width", value: 0.38, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE TECHNOLOGY (12)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "usb-flash-drive",
    name: "USB Flash Drive",
    subtitle: "The tiny stick that replaced boxes of floppy disks",
    category_id: "technology",
    description:
      "USB flash drives use NAND flash memory and have no moving parts, making them far more durable than earlier portable storage. The first commercial USB drive was sold in 2000 with a capacity of 8 MB. Modern drives can hold up to 4 TB in the same compact form factor.",
    search_terms: "USB drive|flash drive|thumb drive|memory stick|pen drive",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.021, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.009, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.01, si_unit: "kg" },
      { dimension: "length", label: "USB-A connector width", value: 0.012, si_unit: "m" },
    ],
  },

  {
    slug: "hard-drive-platter",
    name: "Hard Drive Platter",
    subtitle: "The spinning magnetic disk inside a traditional hard drive",
    category_id: "technology",
    description:
      "Hard drive platters are polished aluminum or glass discs coated with a thin magnetic layer. Data is read and written by a head floating just nanometers above the spinning surface. A typical 3.5-inch desktop drive contains 1 to 5 platters stacked on a central spindle spinning at 7,200 RPM.",
    search_terms: "hard drive platter|HDD platter|magnetic disk|spinning disk",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (3.5-inch form)", value: 0.095, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.002, si_unit: "m" },
      { dimension: "mass", label: "Mass (single platter)", value: 0.04, si_unit: "kg" },
      { dimension: "length", label: "Head flying height", value: 5e-9, si_unit: "m", note: "5 nanometers" },
      { dimension: "length", label: "Magnetic coating thickness", value: 2e-8, si_unit: "m" },
      { dimension: "length", label: "Center hole diameter", value: 0.025, si_unit: "m" },
    ],
  },

  {
    slug: "modern-cpu-die",
    name: "Modern CPU Die",
    subtitle: "The tiny silicon chip at the heart of every computer",
    category_id: "technology",
    description:
      "A modern CPU die is a piece of silicon containing billions of transistors fabricated at nodes as small as 3 nm. Despite being roughly the size of a postage stamp, it can execute trillions of operations per second. The die is mounted in a larger package with a heat spreader for cooling.",
    search_terms: "CPU die|processor chip|silicon die|microprocessor|chip",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Die width (typical high-end)", value: 0.015, si_unit: "m" },
      { dimension: "length", label: "Die length", value: 0.02, si_unit: "m" },
      { dimension: "length", label: "Die thickness", value: 0.0008, si_unit: "m" },
      { dimension: "area", label: "Die area", value: 0.0003, si_unit: "m^2", note: "About 300 mm squared" },
      { dimension: "length", label: "Transistor gate length (3 nm node)", value: 3e-9, si_unit: "m" },
      { dimension: "length", label: "Package size (with IHS)", value: 0.045, si_unit: "m" },
    ],
  },

  {
    slug: "ram-stick-dimm",
    name: "Desktop RAM Stick (DIMM)",
    subtitle: "The long circuit board that gives your computer short-term memory",
    category_id: "technology",
    description:
      "A DIMM (Dual In-line Memory Module) is a printed circuit board holding multiple DRAM chips. Standard DDR5 DIMMs for desktop computers have 288 pins along the bottom edge. RAM provides the fast, volatile storage that the CPU uses for active tasks.",
    search_terms: "RAM stick|DIMM|DDR5|memory module|computer memory",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.1335, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.032, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.003, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.03, si_unit: "kg" },
      { dimension: "length", label: "Pin pitch", value: 0.00085, si_unit: "m" },
      { dimension: "length", label: "DRAM chip thickness", value: 0.001, si_unit: "m" },
    ],
  },

  {
    slug: "solar-cell-monocrystalline",
    name: "Monocrystalline Solar Cell",
    subtitle: "A single dark-blue wafer that converts sunlight into electricity",
    category_id: "technology",
    description:
      "A monocrystalline solar cell is cut from a single silicon crystal ingot and typically converts 20 to 24% of incoming sunlight into electricity. Modern cells are about 182 mm square and 0.15 to 0.18 mm thick. A standard residential panel contains 60 or 72 such cells wired in series.",
    search_terms: "solar cell|photovoltaic cell|PV cell|silicon wafer|solar panel cell",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Width", value: 0.182, si_unit: "m" },
      { dimension: "length", label: "Length", value: 0.182, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.00017, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.013, si_unit: "kg" },
      { dimension: "area", label: "Active area", value: 0.0331, si_unit: "m^2" },
      { dimension: "length", label: "Bus bar width", value: 0.001, si_unit: "m" },
    ],
  },

  {
    slug: "wind-turbine-blade",
    name: "Wind Turbine Blade",
    subtitle: "A fiberglass airfoil longer than a football field",
    category_id: "technology",
    description:
      "Modern offshore wind turbine blades can exceed 100 m in length and are made of fiberglass-reinforced epoxy or polyester. Each blade is shaped as an airfoil that twists along its length to optimize aerodynamic efficiency. Three blades are mounted on a hub that can sit over 150 m above the ground or sea.",
    search_terms: "wind turbine blade|wind energy|turbine rotor|wind farm blade",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (large offshore)", value: 107, si_unit: "m" },
      { dimension: "length", label: "Root chord width", value: 5.5, si_unit: "m" },
      { dimension: "length", label: "Tip chord width", value: 1.0, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 55000, si_unit: "kg" },
      { dimension: "length", label: "Maximum thickness", value: 1.5, si_unit: "m" },
      { dimension: "length", label: "Rotor diameter (3-blade)", value: 220, si_unit: "m" },
    ],
  },

  {
    slug: "nuclear-fuel-rod",
    name: "Nuclear Fuel Rod",
    subtitle: "A slender tube of ceramic uranium pellets",
    category_id: "technology",
    description:
      "A nuclear fuel rod is a thin zirconium alloy tube packed with cylindrical pellets of enriched uranium dioxide. Each pellet is about the size of a pencil eraser but contains as much energy as a tonne of coal. A typical pressurized water reactor core contains about 50,000 fuel rods grouped into assemblies.",
    search_terms: "fuel rod|nuclear fuel|uranium pellet|reactor fuel|zircaloy tube",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Rod length", value: 3.9, si_unit: "m" },
      { dimension: "length", label: "Outer diameter", value: 0.0095, si_unit: "m" },
      { dimension: "length", label: "Cladding thickness", value: 0.0006, si_unit: "m" },
      { dimension: "length", label: "Pellet diameter", value: 0.0082, si_unit: "m" },
      { dimension: "length", label: "Pellet height", value: 0.01, si_unit: "m" },
      { dimension: "mass", label: "Fuel mass per rod", value: 2.0, si_unit: "kg" },
    ],
  },

  {
    slug: "fiber-optic-cable-spool",
    name: "Fiber Optic Cable Spool",
    subtitle: "Kilometres of glass strands wound on a single drum",
    category_id: "technology",
    description:
      "A standard fiber optic cable spool holds 2 to 4 km of cable containing multiple glass fibers, each thinner than a human hair. Light signals inside these fibers can carry terabits of data per second over hundreds of kilometres with minimal loss. The glass core is typically 9 micrometres in diameter for single-mode fiber.",
    search_terms: "fiber optic|optical fiber|fiber spool|glass fiber|telecom cable",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Spool diameter", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Spool width", value: 0.35, si_unit: "m" },
      { dimension: "length", label: "Cable length on spool", value: 4000, si_unit: "m" },
      { dimension: "length", label: "Cable outer diameter", value: 0.006, si_unit: "m" },
      { dimension: "length", label: "Glass core diameter", value: 9e-6, si_unit: "m" },
      { dimension: "mass", label: "Spool mass (loaded)", value: 35, si_unit: "kg" },
    ],
  },

  {
    slug: "quantum-computer-dilution-fridge",
    name: "Quantum Computer Dilution Refrigerator",
    subtitle: "The chandelier-shaped cooling system for quantum processors",
    category_id: "technology",
    description:
      "Superconducting quantum computers require dilution refrigerators that cool qubits to about 15 millikelvins, colder than outer space. The distinctive gold-plated, tiered structure hangs inside a vacuum chamber and uses a mixture of helium-3 and helium-4. Each cooling stage is progressively colder from top to bottom.",
    search_terms: "dilution fridge|quantum cooling|cryostat|millikelvin|qubit cooler",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total height", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Top plate diameter", value: 1.0, si_unit: "m" },
      { dimension: "length", label: "Bottom stage diameter", value: 0.3, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 700, si_unit: "kg" },
      { dimension: "length", label: "Vacuum chamber height", value: 2.5, si_unit: "m" },
      { dimension: "length", label: "Wiring harness diameter", value: 0.05, si_unit: "m" },
    ],
  },

  {
    slug: "server-rack-42u-unit",
    name: "42U Server Rack",
    subtitle: "The standard cabinet that houses internet infrastructure",
    category_id: "technology",
    description:
      "A 42U server rack is the standard enclosure for data center equipment, where U (rack unit) equals 44.45 mm. A fully loaded rack can hold dozens of servers, switches, and storage devices. Modern racks can consume 10 to 30 kW of power and require dedicated cooling.",
    search_terms: "server rack|42U rack|data center rack|network cabinet|equipment rack",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 2.0, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 1.07, si_unit: "m" },
      { dimension: "mass", label: "Empty rack mass", value: 80, si_unit: "kg" },
      { dimension: "mass", label: "Fully loaded mass", value: 1000, si_unit: "kg" },
      { dimension: "length", label: "Rack unit height", value: 0.04445, si_unit: "m" },
    ],
  },

  {
    slug: "submarine-cable-cross-section",
    name: "Submarine Internet Cable",
    subtitle: "The armored tube that carries 99% of intercontinental data",
    category_id: "technology",
    description:
      "Submarine communications cables are laid on the ocean floor and carry over 99% of intercontinental data traffic. A typical deep-sea cable is only about the diameter of a garden hose, with optical fibers at the center surrounded by layers of steel wire, copper, and polyethylene. Repeaters every 60 to 100 km amplify the signal.",
    search_terms: "submarine cable|undersea cable|internet cable|ocean cable|fiber cable",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Cable outer diameter (deep sea)", value: 0.021, si_unit: "m" },
      { dimension: "length", label: "Cable outer diameter (shore end)", value: 0.05, si_unit: "m" },
      { dimension: "length", label: "Fiber core diameter", value: 9e-6, si_unit: "m" },
      { dimension: "mass", label: "Mass per metre (deep sea)", value: 0.7, si_unit: "kg" },
      { dimension: "length", label: "Repeater spacing", value: 80000, si_unit: "m" },
      { dimension: "length", label: "Typical cable length (transatlantic)", value: 6600000, si_unit: "m" },
    ],
  },

  {
    slug: "5g-cell-tower",
    name: "5G Cell Tower",
    subtitle: "The antenna array that delivers next-generation wireless broadband",
    category_id: "technology",
    description:
      "5G cell towers use massive MIMO (Multiple Input, Multiple Output) antenna panels containing 64 or more antenna elements. Mid-band 5G towers typically cover a radius of 1 to 3 km. Small cells for millimeter-wave 5G are much smaller and may be mounted on utility poles or building facades.",
    search_terms: "5G tower|cell tower|MIMO antenna|wireless tower|base station",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Tower height (typical)", value: 30, si_unit: "m" },
      { dimension: "length", label: "Antenna panel height", value: 0.7, si_unit: "m" },
      { dimension: "length", label: "Antenna panel width", value: 0.4, si_unit: "m" },
      { dimension: "mass", label: "Antenna panel mass", value: 20, si_unit: "kg" },
      { dimension: "length", label: "Coverage radius (mid-band)", value: 2000, si_unit: "m" },
      { dimension: "length", label: "Small cell height", value: 0.3, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE SPORTS (10) -- skipping Sumo ring, Javelin (already exist)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "highland-games-caber",
    name: "Highland Games Caber",
    subtitle: "The full-length tree trunk tossed end-over-end in Scotland",
    category_id: "sports",
    description:
      "The caber toss is a traditional Scottish Highland Games event where competitors flip a tapered pine trunk end over end. A regulation caber is typically 5.9 m long and weighs about 80 kg. The goal is not distance but accuracy, with a perfect toss landing at the 12 o'clock position.",
    search_terms: "caber|caber toss|highland games|scottish games|log toss",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 5.9, si_unit: "m" },
      { dimension: "length", label: "Thick end diameter", value: 0.23, si_unit: "m" },
      { dimension: "length", label: "Thin end diameter", value: 0.12, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 80, si_unit: "kg" },
      { dimension: "length", label: "Taper length", value: 5.9, si_unit: "m" },
    ],
  },

  {
    slug: "curling-stone",
    name: "Curling Stone",
    subtitle: "The polished granite disc slid across Olympic ice",
    category_id: "sports",
    description:
      "Curling stones are made from two specific types of granite: Ailsa Craig Common Green for the body and Blue Hone for the striking band. Each stone must meet strict weight and dimensional specifications set by the World Curling Federation. The concave running surface reduces friction on the ice.",
    search_terms: "curling stone|curling rock|granite stone|ice curling|bonspiel",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum circumference", value: 0.914, si_unit: "m" },
      { dimension: "length", label: "Height (including handle)", value: 0.19, si_unit: "m" },
      { dimension: "mass", label: "Mass (including handle)", value: 19.96, si_unit: "kg" },
      { dimension: "length", label: "Running band width", value: 0.006, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.291, si_unit: "m" },
      { dimension: "length", label: "Cup depth (concavity)", value: 0.003, si_unit: "m" },
    ],
  },

  {
    slug: "archery-target-face",
    name: "Archery Target (Olympic)",
    subtitle: "The concentric-ringed face used in Olympic competition",
    category_id: "sports",
    description:
      "The Olympic archery target face consists of 10 scoring rings in five colors: gold, red, blue, black, and white from center outward. Competitors shoot from 70 m at this 122 cm diameter face. The innermost gold ring (10 points) is just 12.2 cm across.",
    search_terms: "archery target|target face|olympic archery|bullseye|scoring rings",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Face diameter", value: 1.22, si_unit: "m" },
      { dimension: "length", label: "Inner gold (X-ring) diameter", value: 0.061, si_unit: "m" },
      { dimension: "length", label: "Ring width", value: 0.061, si_unit: "m" },
      { dimension: "length", label: "Shooting distance (Olympic)", value: 70, si_unit: "m" },
      { dimension: "length", label: "Target center height", value: 1.3, si_unit: "m" },
    ],
  },

  {
    slug: "fencing-epee",
    name: "Fencing Epee",
    subtitle: "The heavier thrusting sword used in Olympic fencing",
    category_id: "sports",
    description:
      "The epee is the heaviest of the three Olympic fencing weapons and allows touches anywhere on the opponent's body. Its blade has a triangular cross-section and is tipped with a spring-loaded button that registers valid hits electronically. The weapon evolved from the 19th-century dueling sword.",
    search_terms: "epee|fencing sword|olympic fencing|thrusting sword|electric epee",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Maximum total length", value: 1.1, si_unit: "m" },
      { dimension: "length", label: "Blade length", value: 0.9, si_unit: "m" },
      { dimension: "mass", label: "Maximum mass", value: 0.77, si_unit: "kg" },
      { dimension: "length", label: "Bell guard diameter", value: 0.135, si_unit: "m" },
      { dimension: "length", label: "Blade width (at forte)", value: 0.024, si_unit: "m" },
      { dimension: "length", label: "Tip button diameter", value: 0.008, si_unit: "m" },
    ],
  },

  {
    slug: "lacrosse-stick",
    name: "Lacrosse Stick",
    subtitle: "The netted stick used in North America's oldest team sport",
    category_id: "sports",
    description:
      "The lacrosse stick (or crosse) consists of a shaft with a head containing a mesh pocket for catching, carrying, and shooting the ball. The sport originated with Indigenous peoples of eastern North America. Men's and women's sticks differ in pocket depth and head width regulations.",
    search_terms: "lacrosse stick|crosse|lacrosse head|LAX stick",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length (attack)", value: 1.07, si_unit: "m" },
      { dimension: "length", label: "Head width", value: 0.18, si_unit: "m" },
      { dimension: "length", label: "Head length", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.35, si_unit: "kg" },
      { dimension: "length", label: "Shaft diameter", value: 0.03, si_unit: "m" },
      { dimension: "length", label: "Pocket depth", value: 0.06, si_unit: "m" },
    ],
  },

  {
    slug: "polo-mallet",
    name: "Polo Mallet",
    subtitle: "The long-handled stick swung from horseback",
    category_id: "sports",
    description:
      "A polo mallet consists of a bamboo or composite cane shaft with a hardwood cigar-shaped head. Players hold it in one hand while controlling the horse with the other. The mallet length is selected based on the height of the player's horse, typically ranging from 127 to 137 cm.",
    search_terms: "polo mallet|polo stick|equestrian mallet|chukker",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 1.32, si_unit: "m" },
      { dimension: "length", label: "Head length", value: 0.23, si_unit: "m" },
      { dimension: "length", label: "Head diameter", value: 0.045, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.48, si_unit: "kg" },
      { dimension: "length", label: "Grip length", value: 0.25, si_unit: "m" },
    ],
  },

  {
    slug: "rugby-ball",
    name: "Rugby Ball",
    subtitle: "The oval ball that gave American football its shape",
    category_id: "sports",
    description:
      "A regulation rugby union ball is an elongated ellipsoid made of synthetic material with four panels. Its shape evolved from the pig-bladder balls hand-stitched by William Gilbert in Rugby, England in the 1820s. The oval form allows for both carrying and kicking during play.",
    search_terms: "rugby ball|rugby union ball|oval ball|gilbert ball",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "End-to-end circumference", value: 0.77, si_unit: "m" },
      { dimension: "length", label: "Mid circumference", value: 0.6, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.44, si_unit: "kg" },
      { dimension: "length", label: "Maximum width", value: 0.19, si_unit: "m" },
    ],
  },

  {
    slug: "badminton-shuttlecock",
    name: "Badminton Shuttlecock",
    subtitle: "The feathered projectile that is the fastest racket sport object",
    category_id: "sports",
    description:
      "A competition shuttlecock has 16 goose feathers embedded in a cork base covered with kid leather. It can leave a racket at over 400 km/h but decelerates rapidly due to its high drag. The unique aerodynamic profile causes it to always fly cork-first after being struck.",
    search_terms: "shuttlecock|birdie|badminton shuttle|feather shuttle",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 0.085, si_unit: "m" },
      { dimension: "length", label: "Feather spread diameter", value: 0.067, si_unit: "m" },
      { dimension: "length", label: "Cork base diameter", value: 0.028, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.005, si_unit: "kg" },
      { dimension: "speed", label: "Maximum recorded speed", value: 137, si_unit: "m/s", note: "493 km/h" },
      { dimension: "length", label: "Feather length", value: 0.065, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE VEHICLES (10) -- skipping Cable car SF, Rickshaw (already exist)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "airbus-beluga-xl",
    name: "Airbus Beluga XL",
    subtitle: "The whale-shaped cargo plane that carries aircraft parts",
    category_id: "aircraft",
    description:
      "The Airbus BelugaXL is a super-transporter aircraft used to ferry large aircraft components between Airbus factories. Based on the A330 airframe, its distinctive bulging upper fuselage gives it the appearance of a beluga whale, complete with painted eyes and smile. It can carry a pair of A350 wings in a single flight.",
    search_terms: "beluga|beluga XL|airbus cargo|super transporter|whale plane",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fuselage length", value: 63.1, si_unit: "m" },
      { dimension: "length", label: "Wingspan", value: 60.3, si_unit: "m" },
      { dimension: "length", label: "Height", value: 18.9, si_unit: "m" },
      { dimension: "length", label: "Cargo hold diameter", value: 8.8, si_unit: "m" },
      { dimension: "mass", label: "Maximum payload", value: 51000, si_unit: "kg" },
      { dimension: "mass", label: "Maximum takeoff mass", value: 227000, si_unit: "kg" },
    ],
  },

  {
    slug: "v-22-osprey",
    name: "V-22 Osprey",
    subtitle: "The tiltrotor aircraft that takes off like a helicopter and flies like a plane",
    category_id: "aircraft",
    description:
      "The Bell Boeing V-22 Osprey is a multi-mission tiltrotor that can rotate its engine nacelles 90 degrees to transition between helicopter and airplane flight modes. It combines the vertical takeoff capability of a helicopter with the speed and range of a turboprop. The Osprey has served with the US Marines and Air Force since 2007.",
    search_terms: "osprey|V-22|tiltrotor|VTOL|bell boeing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fuselage length", value: 17.5, si_unit: "m" },
      { dimension: "length", label: "Wingspan (with rotors)", value: 25.8, si_unit: "m" },
      { dimension: "length", label: "Height", value: 6.73, si_unit: "m" },
      { dimension: "length", label: "Rotor diameter (each)", value: 11.6, si_unit: "m" },
      { dimension: "mass", label: "Empty mass", value: 15032, si_unit: "kg" },
      { dimension: "mass", label: "Maximum takeoff mass", value: 27443, si_unit: "kg" },
      { dimension: "speed", label: "Maximum speed", value: 142, si_unit: "m/s", note: "About 509 km/h" },
    ],
  },

  {
    slug: "chinook-helicopter",
    name: "CH-47 Chinook",
    subtitle: "The twin-rotor heavy-lift helicopter",
    category_id: "aircraft",
    description:
      "The Boeing CH-47 Chinook is a tandem-rotor heavy-lift helicopter that has served militaries worldwide since 1962. Its two counter-rotating rotors eliminate the need for a tail rotor. The Chinook can carry 33 to 55 troops or sling-load vehicles and artillery beneath its fuselage.",
    search_terms: "chinook|CH-47|tandem rotor|heavy lift helicopter|boeing helicopter",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Fuselage length", value: 15.54, si_unit: "m" },
      { dimension: "length", label: "Overall length (rotors turning)", value: 30.1, si_unit: "m" },
      { dimension: "length", label: "Height", value: 5.77, si_unit: "m" },
      { dimension: "length", label: "Rotor diameter (each)", value: 18.3, si_unit: "m" },
      { dimension: "mass", label: "Empty mass", value: 10185, si_unit: "kg" },
      { dimension: "mass", label: "Maximum sling load", value: 12700, si_unit: "kg" },
    ],
  },

  {
    slug: "caterpillar-d11-bulldozer",
    name: "Caterpillar D11 Bulldozer",
    subtitle: "One of the largest production bulldozers in the world",
    category_id: "cars",
    description:
      "The Caterpillar D11 is a large track-type tractor used primarily in mining operations. Its massive blade can move over 40 cubic metres of earth in a single pass. The D11T model produces about 634 kW of engine power and is typically used in large-scale earthmoving and mining.",
    search_terms: "D11|caterpillar bulldozer|dozer|track tractor|mining dozer",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (with blade)", value: 10.6, si_unit: "m" },
      { dimension: "length", label: "Width (blade)", value: 5.6, si_unit: "m" },
      { dimension: "length", label: "Height", value: 4.6, si_unit: "m" },
      { dimension: "mass", label: "Operating mass", value: 104000, si_unit: "kg" },
      { dimension: "length", label: "Blade height", value: 2.2, si_unit: "m" },
      { dimension: "length", label: "Track width", value: 0.56, si_unit: "m" },
    ],
  },

  {
    slug: "hydraulic-excavator",
    name: "Hydraulic Excavator",
    subtitle: "The digging machine found on every construction site",
    category_id: "cars",
    description:
      "A standard hydraulic excavator uses a boom, arm, and bucket powered by hydraulic cylinders to dig, lift, and move earth. The cab rotates 360 degrees on a tracked undercarriage. Excavators range from mini models under 2 tonnes to mining units over 800 tonnes.",
    search_terms: "excavator|digger|backhoe|hydraulic digger|track hoe",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (typical 20-tonne)", value: 9.5, si_unit: "m" },
      { dimension: "length", label: "Width", value: 2.8, si_unit: "m" },
      { dimension: "length", label: "Height (cab)", value: 3.0, si_unit: "m" },
      { dimension: "length", label: "Maximum dig depth", value: 6.7, si_unit: "m" },
      { dimension: "mass", label: "Operating mass", value: 20000, si_unit: "kg" },
      { dimension: "length", label: "Bucket width", value: 0.9, si_unit: "m" },
    ],
  },

  {
    slug: "combine-harvester",
    name: "Combine Harvester",
    subtitle: "The machine that reaps, threshes, and winnows grain in one pass",
    category_id: "cars",
    description:
      "A combine harvester performs three harvest operations in a single machine: reaping (cutting), threshing (separating grain from stalks), and winnowing (removing chaff). Modern combines have GPS-guided auto-steer and yield mapping sensors. A large model can harvest about 100 tonnes of wheat per hour.",
    search_terms: "combine|harvester|combine harvester|grain harvester|reaper thresher",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length (without header)", value: 9.0, si_unit: "m" },
      { dimension: "length", label: "Header width (large)", value: 12.2, si_unit: "m" },
      { dimension: "length", label: "Height", value: 4.0, si_unit: "m" },
      { dimension: "mass", label: "Operating mass", value: 18000, si_unit: "kg" },
      { dimension: "length", label: "Grain tank volume (approx height)", value: 2.5, si_unit: "m" },
      { dimension: "length", label: "Tire diameter (rear)", value: 2.05, si_unit: "m" },
    ],
  },

  {
    slug: "snowplow-truck",
    name: "Snowplow Truck",
    subtitle: "The heavy-duty truck that clears roads after a blizzard",
    category_id: "cars",
    description:
      "A snowplow truck is typically a heavy-duty chassis fitted with a front-mounted blade, salt or sand spreader, and sometimes a wing plow on the side. The front blade can be angled to push snow to one side of the road. Large state highway plows can clear a lane 3 to 4 m wide at speeds up to 55 km/h.",
    search_terms: "snowplow|snow plow|winter truck|salt truck|gritter",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 9.0, si_unit: "m" },
      { dimension: "length", label: "Front blade width", value: 3.7, si_unit: "m" },
      { dimension: "length", label: "Blade height", value: 1.1, si_unit: "m" },
      { dimension: "length", label: "Height (to top of cab)", value: 3.5, si_unit: "m" },
      { dimension: "mass", label: "Gross vehicle mass", value: 18000, si_unit: "kg" },
      { dimension: "mass", label: "Salt/sand hopper capacity", value: 7000, si_unit: "kg" },
    ],
  },

  {
    slug: "zamboni-ice-resurfacer",
    name: "Zamboni Ice Resurfacer",
    subtitle: "The machine that makes rink ice smooth between periods",
    category_id: "cars",
    description:
      "The Zamboni ice resurfacer shaves the top layer of ice, collects the shavings, washes the surface, and lays down a thin layer of hot water that freezes into a smooth sheet. A single resurfacing pass takes about 7 to 10 minutes and uses roughly 700 litres of water. Frank Zamboni invented the machine in 1949.",
    search_terms: "zamboni|ice resurfacer|ice machine|rink machine|ice smoother",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 3.35, si_unit: "m" },
      { dimension: "length", label: "Width", value: 2.44, si_unit: "m" },
      { dimension: "length", label: "Height", value: 2.54, si_unit: "m" },
      { dimension: "mass", label: "Mass (empty)", value: 3400, si_unit: "kg" },
      { dimension: "mass", label: "Water tank capacity (mass)", value: 700, si_unit: "kg" },
      { dimension: "speed", label: "Resurfacing speed", value: 2.5, si_unit: "m/s", note: "About 9 km/h" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE ART (12) -- skipping Hokusai's wave (exists as great-wave-off-kanagawa)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "bayeux-tapestry",
    name: "Bayeux Tapestry",
    subtitle: "A 70-metre embroidered chronicle of the Norman Conquest",
    category_id: "art",
    description:
      "The Bayeux Tapestry is not actually a tapestry but an embroidered cloth depicting the events leading to the Norman Conquest of England in 1066. It contains 58 scenes with over 600 people, 200 horses, and 500 other animals. The final scenes showing the Battle of Hastings are damaged, and the original ending is lost.",
    search_terms: "bayeux tapestry|norman conquest|1066|hastings|william the conqueror",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length", value: 68.38, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Linen thickness", value: 0.001, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 3.5, si_unit: "kg" },
      { dimension: "length", label: "Border height (each)", value: 0.07, si_unit: "m" },
    ],
  },

  {
    slug: "book-of-kells",
    name: "Book of Kells",
    subtitle: "An illuminated Gospel manuscript from medieval Ireland",
    category_id: "art",
    description:
      "The Book of Kells is an illuminated manuscript of the four Gospels created around 800 CE, likely at a monastery founded by St. Columba. It contains 340 folios of vellum (calfskin) with elaborately decorated pages featuring interlocking Celtic knots and animal forms. It has been housed at Trinity College Dublin since 1661.",
    search_terms: "book of kells|illuminated manuscript|celtic manuscript|trinity college|gospel book",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Page height", value: 0.33, si_unit: "m" },
      { dimension: "length", label: "Page width", value: 0.25, si_unit: "m" },
      { dimension: "length", label: "Binding thickness", value: 0.08, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 5.5, si_unit: "kg" },
      { dimension: "length", label: "Vellum leaf thickness", value: 0.0002, si_unit: "m" },
    ],
  },

  {
    slug: "winged-victory-samothrace",
    name: "Winged Victory of Samothrace",
    subtitle: "The headless Nike that commands the Louvre staircase",
    category_id: "art",
    description:
      "The Winged Victory of Samothrace is a Hellenistic marble sculpture of the Greek goddess Nike (Victory) dating to about 190 BCE. It was discovered in pieces on the island of Samothrace in 1863. The figure stands on a marble ship prow with windswept drapery that is considered a masterpiece of ancient sculpture.",
    search_terms: "winged victory|nike samothrace|louvre sculpture|greek marble|hellenistic sculpture",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (figure only)", value: 2.44, si_unit: "m" },
      { dimension: "length", label: "Height (with ship prow base)", value: 3.28, si_unit: "m" },
      { dimension: "length", label: "Wingspan (estimated)", value: 2.0, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 5000, si_unit: "kg" },
      { dimension: "length", label: "Ship prow length", value: 2.7, si_unit: "m" },
    ],
  },

  {
    slug: "venus-de-milo",
    name: "Venus de Milo",
    subtitle: "The armless Greek goddess in the Louvre",
    category_id: "art",
    description:
      "The Venus de Milo is an ancient Greek marble sculpture believed to depict Aphrodite, the goddess of love and beauty. It was carved between 130 and 100 BCE and was found on the island of Milos in 1820. Both arms were already missing when it was discovered, and their original position remains debated.",
    search_terms: "venus de milo|aphrodite|greek statue|louvre marble|armless statue",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 2.04, si_unit: "m" },
      { dimension: "length", label: "Width (at shoulders)", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.4, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 900, si_unit: "kg" },
      { dimension: "length", label: "Plinth height", value: 0.16, si_unit: "m" },
    ],
  },

  {
    slug: "bust-of-nefertiti",
    name: "Bust of Nefertiti",
    subtitle: "The 3,300-year-old painted limestone portrait of an Egyptian queen",
    category_id: "art",
    description:
      "The bust of Nefertiti was created around 1345 BCE by the sculptor Thutmose and was discovered in his workshop in Amarna, Egypt in 1912. It is made of a limestone core with painted stucco layers. One eye contains an inlay of rock crystal, while the other eye socket is empty, possibly never completed.",
    search_terms: "nefertiti|egyptian bust|amarna|thutmose sculptor|limestone bust",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.48, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.185, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 0.24, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 20, si_unit: "kg" },
      { dimension: "length", label: "Crown height", value: 0.2, si_unit: "m" },
    ],
  },

  {
    slug: "benin-bronzes",
    name: "Benin Bronze Plaque",
    subtitle: "Cast brass reliefs from the Kingdom of Benin",
    category_id: "art",
    description:
      "The Benin Bronzes are a group of over 3,000 brass plaques and sculptures from the royal palace of the Kingdom of Benin (modern Nigeria), created between the 13th and 19th centuries. Despite the name, most are cast in brass, not bronze. They were looted by British forces in 1897 and dispersed among Western museums.",
    search_terms: "benin bronzes|benin brass|nigerian art|edo art|kingdom of benin",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Typical plaque height", value: 0.45, si_unit: "m" },
      { dimension: "length", label: "Typical plaque width", value: 0.35, si_unit: "m" },
      { dimension: "length", label: "Plaque thickness", value: 0.03, si_unit: "m" },
      { dimension: "mass", label: "Plaque mass (typical)", value: 5, si_unit: "kg" },
      { dimension: "length", label: "Relief depth", value: 0.02, si_unit: "m" },
    ],
  },

  {
    slug: "elgin-marbles-metope",
    name: "Elgin Marbles Metope",
    subtitle: "A carved marble panel from the Parthenon frieze",
    category_id: "art",
    description:
      "The Elgin Marbles are a collection of classical Greek marble sculptures from the Parthenon in Athens, removed by Lord Elgin between 1801 and 1812. The metopes are nearly square relief panels that originally decorated the exterior of the temple. Each depicts a scene from Greek mythology, most commonly the battle between Lapiths and Centaurs.",
    search_terms: "elgin marbles|parthenon marbles|metope|greek relief|british museum marble",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Metope height", value: 1.2, si_unit: "m" },
      { dimension: "length", label: "Metope width", value: 1.25, si_unit: "m" },
      { dimension: "length", label: "Relief depth", value: 0.25, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass (single metope)", value: 1000, si_unit: "kg" },
      { dimension: "length", label: "Marble thickness (backing)", value: 0.2, si_unit: "m" },
    ],
  },

  {
    slug: "rodins-the-kiss",
    name: "Rodin's The Kiss",
    subtitle: "A marble sculpture of two lovers in an embrace",
    category_id: "art",
    description:
      "The Kiss is a marble sculpture by Auguste Rodin, originally titled 'Francesca da Rimini' after a character in Dante's Inferno. First carved in 1882, the original is housed in the Musee Rodin in Paris. Several full-size marble versions exist, including one at the Tate Gallery in London.",
    search_terms: "the kiss|rodin kiss|marble lovers|musee rodin|rodin sculpture",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.82, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1.12, si_unit: "m" },
      { dimension: "length", label: "Depth", value: 1.17, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 3000, si_unit: "kg" },
      { dimension: "length", label: "Base height", value: 0.3, si_unit: "m" },
    ],
  },

  {
    slug: "klimts-the-kiss-painting",
    name: "Klimt's The Kiss",
    subtitle: "A gold-leafed Art Nouveau painting of an embracing couple",
    category_id: "art",
    description:
      "Gustav Klimt painted The Kiss between 1907 and 1908 during his 'Golden Phase.' The painting uses oil paint combined with gold leaf on canvas. It depicts a couple kneeling on a flower-covered cliff edge, wrapped in elaborately patterned robes. The work is housed at the Belvedere Gallery in Vienna.",
    search_terms: "klimt|the kiss painting|gold leaf|art nouveau|belvedere vienna",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Width", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Canvas depth", value: 0.03, si_unit: "m" },
      { dimension: "area", label: "Surface area", value: 3.24, si_unit: "m^2" },
      { dimension: "length", label: "Gold leaf thickness", value: 1.2e-7, si_unit: "m", note: "About 0.12 micrometres" },
    ],
  },

  {
    slug: "van-gogh-sunflowers",
    name: "Van Gogh's Sunflowers",
    subtitle: "One of the most recognized still-life paintings in art history",
    category_id: "art",
    description:
      "Vincent van Gogh painted several versions of Sunflowers in 1888 and 1889 in Arles, France, originally to decorate the room of his friend Paul Gauguin. The version at the National Gallery in London shows 15 sunflowers in a vase against a yellow background. Van Gogh used thick impasto brushstrokes that create a textured, almost three-dimensional surface.",
    search_terms: "sunflowers|van gogh|still life|arles painting|national gallery",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.925, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.73, si_unit: "m" },
      { dimension: "length", label: "Impasto thickness (max)", value: 0.005, si_unit: "m" },
      { dimension: "area", label: "Canvas area", value: 0.675, si_unit: "m^2" },
      { dimension: "length", label: "Frame width", value: 0.08, si_unit: "m" },
    ],
  },

  {
    slug: "monet-water-lilies-orangerie",
    name: "Monet's Water Lilies (Orangerie)",
    subtitle: "The vast curved murals that wrap around two oval rooms",
    category_id: "art",
    description:
      "Claude Monet donated eight large Water Lilies murals to the French state, installed in two oval rooms at the Musee de l'Orangerie in Paris in 1927. The paintings together stretch over 90 m in total length and were the culmination of 30 years of painting his water garden at Giverny. Monet painted many of them while suffering from cataracts.",
    search_terms: "water lilies|monet|nympheas|orangerie|giverny|impressionism",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Total length (all 8 panels)", value: 91, si_unit: "m" },
      { dimension: "length", label: "Panel height", value: 2.0, si_unit: "m" },
      { dimension: "length", label: "Longest single panel", value: 17.0, si_unit: "m" },
      { dimension: "area", label: "Total painted area (approx)", value: 182, si_unit: "m^2" },
      { dimension: "length", label: "Room 1 diameter", value: 12.0, si_unit: "m" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // REPLACEMENT ITEMS (2 extra to reach 100 total)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "apollo-11-command-module",
    name: "Apollo 11 Command Module",
    subtitle: "The cone-shaped capsule that returned astronauts from the Moon",
    category_id: "space-missions",
    description:
      "The Apollo 11 Command Module 'Columbia' carried Neil Armstrong, Buzz Aldrin, and Michael Collins to the Moon and back in July 1969. It was the only part of the massive Saturn V rocket that returned to Earth. The charred heat shield protected the crew during re-entry at speeds over 11 km/s.",
    search_terms: "apollo 11|command module|columbia capsule|moon landing|nasa apollo",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 3.22, si_unit: "m" },
      { dimension: "length", label: "Base diameter", value: 3.91, si_unit: "m" },
      { dimension: "mass", label: "Mass (at splashdown)", value: 5560, si_unit: "kg" },
      { dimension: "length", label: "Heat shield thickness", value: 0.07, si_unit: "m" },
      { dimension: "area", label: "Habitable volume", value: 6.17, si_unit: "m^3" },
      { dimension: "length", label: "Hatch diameter", value: 0.74, si_unit: "m" },
    ],
  },

  {
    slug: "war-hammer-medieval",
    name: "Medieval War Hammer",
    subtitle: "The blunt weapon designed to defeat plate armor",
    category_id: "weapons-armor",
    description:
      "The war hammer became prominent in the 14th and 15th centuries as plate armor grew thicker. One side featured a flat or slightly domed striking face, while the other had a pointed beak for penetrating armor. Unlike swords, war hammers could deliver concussive force through plate armor without needing to cut it.",
    search_terms: "war hammer|warhammer|bec de corbin|medieval hammer|armor piercing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 0.6, si_unit: "m" },
      { dimension: "length", label: "Head length", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 1.5, si_unit: "kg" },
      { dimension: "length", label: "Striking face diameter", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Beak length", value: 0.1, si_unit: "m" },
      { dimension: "length", label: "Grip length", value: 0.25, si_unit: "m" },
    ],
  },

  {
    slug: "pide-turkish-flatbread",
    name: "Turkish Pide",
    subtitle: "A boat-shaped flatbread stuffed with cheese and meat",
    category_id: "world-food",
    description:
      "Pide is a Turkish flatbread shaped like a canoe, filled with combinations of cheese, ground meat, egg, or vegetables. The dough is rolled into an oval, the edges folded up, and the whole thing baked in a stone oven. It is sometimes called 'Turkish pizza,' though the texture and technique differ entirely.",
    search_terms: "pide|turkish flatbread|turkish pizza|lahmacun|stone oven bread",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.4, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.15, si_unit: "m" },
      { dimension: "length", label: "Height (rim)", value: 0.04, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.35, si_unit: "kg" },
      { dimension: "length", label: "Dough thickness (base)", value: 0.005, si_unit: "m" },
    ],
  },

  {
    slug: "samosa",
    name: "Samosa",
    subtitle: "A triangular fried pastry filled with spiced potatoes",
    category_id: "world-food",
    description:
      "The samosa is a fried or baked pastry with a savory filling that originated in the Middle East and became a staple snack across South Asia. The classic Indian version is filled with spiced potatoes and peas. The triangular shape is formed by folding a semicircle of dough into a cone, filling it, and sealing.",
    search_terms: "samosa|indian snack|fried pastry|potato pastry|samboosa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.1, si_unit: "m" },
      { dimension: "length", label: "Base width", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Side length", value: 0.1, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.08, si_unit: "kg" },
      { dimension: "length", label: "Shell thickness", value: 0.003, si_unit: "m" },
    ],
  },

  {
    slug: "gyoza-dumpling",
    name: "Gyoza Dumpling",
    subtitle: "A crescent-shaped pan-fried Japanese dumpling",
    category_id: "world-food",
    description:
      "Gyoza are Japanese dumplings derived from Chinese jiaozi, typically filled with ground pork, cabbage, garlic, and ginger. They are cooked by pan-frying on one side, then steaming with water and a lid. The crispy bottom and soft top create a distinctive texture contrast.",
    search_terms: "gyoza|japanese dumpling|potsticker|jiaozi|pan fried dumpling",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.08, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Height", value: 0.025, si_unit: "m" },
      { dimension: "mass", label: "Mass (single)", value: 0.025, si_unit: "kg" },
      { dimension: "length", label: "Wrapper thickness", value: 0.001, si_unit: "m" },
    ],
  },

  {
    slug: "dosa-crepe",
    name: "Dosa",
    subtitle: "A paper-thin fermented rice-and-lentil crepe from South India",
    category_id: "world-food",
    description:
      "Dosa is a thin, crispy crepe made from a fermented batter of rice and black lentils. It is a breakfast staple across southern India and Sri Lanka. A masala dosa is rolled around a filling of spiced potatoes. The batter must ferment for 8 to 12 hours to develop its characteristic tang.",
    search_terms: "dosa|masala dosa|south indian crepe|fermented crepe|idli dosa",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter (spread)", value: 0.3, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.002, si_unit: "m" },
      { dimension: "length", label: "Rolled diameter", value: 0.06, si_unit: "m" },
      { dimension: "length", label: "Rolled length", value: 0.3, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.1, si_unit: "kg" },
    ],
  },

  {
    slug: "medieval-halberd",
    name: "Medieval Halberd",
    subtitle: "The axe-spear hybrid carried by Swiss and German infantry",
    category_id: "weapons-armor",
    description:
      "The halberd combined an axe blade, a spike on top, and a hook on the back into a single polearm. It was the signature weapon of Swiss mercenaries in the 14th and 15th centuries. The hook could pull a mounted knight from his horse, while the spike and axe dealt with both armored and unarmored foes.",
    search_terms: "halberd|polearm|swiss halberd|axe spear|hellebarde",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Overall length", value: 1.8, si_unit: "m" },
      { dimension: "length", label: "Head length (spike to hook)", value: 0.5, si_unit: "m" },
      { dimension: "length", label: "Axe blade width", value: 0.2, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 2.5, si_unit: "kg" },
      { dimension: "length", label: "Shaft diameter", value: 0.04, si_unit: "m" },
      { dimension: "length", label: "Top spike length", value: 0.3, si_unit: "m" },
    ],
  },

  {
    slug: "hand-grenade-modern",
    name: "Modern Fragmentation Grenade",
    subtitle: "The small explosive device that fits in a soldier's hand",
    category_id: "weapons-armor",
    description:
      "The M67 fragmentation grenade is the standard hand grenade of the US military. It has a spherical steel body filled with about 180 g of Composition B explosive. After the safety pin is pulled and the spoon released, a 4 to 5 second fuse ignites the main charge, producing fragments effective to about 15 m.",
    search_terms: "grenade|M67|frag grenade|hand grenade|fragmentation",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.064, si_unit: "m" },
      { dimension: "length", label: "Height (with fuse)", value: 0.089, si_unit: "m" },
      { dimension: "mass", label: "Mass", value: 0.4, si_unit: "kg" },
      { dimension: "mass", label: "Explosive filler mass", value: 0.18, si_unit: "kg" },
      { dimension: "length", label: "Effective casualty radius", value: 15, si_unit: "m" },
      { dimension: "time", label: "Fuse delay", value: 4.5, si_unit: "s" },
    ],
  },

  {
    slug: "degas-little-dancer",
    name: "Degas's Little Dancer of Fourteen Years",
    subtitle: "A wax sculpture dressed in real fabric that scandalized Paris",
    category_id: "art",
    description:
      "Edgar Degas exhibited the original wax figure at the 1881 Impressionist exhibition in Paris, where it shocked critics who found its realism unsettling. The figure wears a real cotton bodice, tutu, and satin hair ribbon. After Degas's death, about 28 bronze casts were made from the wax original, which is now at the National Gallery of Art in Washington.",
    search_terms: "little dancer|degas sculpture|ballerina sculpture|wax figure|14 year old dancer",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height (with base)", value: 0.99, si_unit: "m" },
      { dimension: "length", label: "Figure height", value: 0.95, si_unit: "m" },
      { dimension: "length", label: "Base width", value: 0.36, si_unit: "m" },
      { dimension: "length", label: "Base depth", value: 0.36, si_unit: "m" },
      { dimension: "mass", label: "Mass (bronze cast)", value: 22, si_unit: "kg" },
    ],
  },
];
