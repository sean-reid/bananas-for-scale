// ── Image data for all things ──────────────────────────────────────────────
// Maps thing slugs to local image paths and photographer credits.
// All images are sourced from Unsplash and are free to use under the Unsplash License.
// Images are served from public/images/things/ directory.

export const imageData: Record<
  string,
  { image_url: string; image_credit: string } | null
> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // FEATURED / SEED.TS THINGS
  // ═══════════════════════════════════════════════════════════════════════════

  "blue-whale": {
    image_url: "/images/things/blue-whale.jpg",
    image_credit: "Photo by Todd Cravens on Unsplash",
  },
  "burj-khalifa": {
    image_url: "/images/things/burj-khalifa.jpg",
    image_credit: "Photo by Meg von Haartman on Unsplash",
  },
  "boeing-747": {
    image_url: "/images/things/boeing-747.jpg",
    image_credit: "Photo by Daniel Eledut on Unsplash",
  },
  "tyrannosaurus-rex": {
    image_url: "/images/things/tyrannosaurus-rex.jpg",
    image_credit: "Photo by Solstice Hannan on Unsplash",
  },
  "the-sun": {
    image_url: "/images/things/the-sun.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "great-pyramid-of-giza": {
    image_url: "/images/things/great-pyramid-of-giza.jpg",
    image_credit: "Photo by Hasmik Ghazaryan Olson on Unsplash",
  },
  "saturn-v": {
    image_url: "/images/things/saturn-v.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "usain-bolt-100m": {
    image_url: "/images/things/usain-bolt-100m.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iphone-15-pro": {
    image_url: "/images/things/iphone-15-pro.jpg",
    image_credit: "Photo on Unsplash",
  },
  "amazon-river": {
    image_url: "/images/things/amazon-river.jpg",
    image_credit: "Photo by Rodrigo Kugnharski on Unsplash",
  },
  "big-mac": {
    image_url: "/images/things/big-mac.jpg",
    image_credit: "Photo by amirali mirhashemian on Unsplash",
  },
  "human-heart": {
    image_url: "/images/things/human-heart.jpg",
    image_credit: "Photo on Unsplash",
  },
  "eiffel-tower": {
    image_url: "/images/things/eiffel-tower.jpg",
    image_credit: "Photo by Anthony DELANOIX on Unsplash",
  },
  "lightning-bolt": {
    image_url: "/images/things/lightning-bolt.jpg",
    image_credit: "Photo by Breno Machado on Unsplash",
  },
  "golden-gate-bridge": {
    image_url: "/images/things/golden-gate-bridge.jpg",
    image_credit: "Photo by Maarten van den Heuvel on Unsplash",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MARINE LIFE
  // ═══════════════════════════════════════════════════════════════════════════

  "great-white-shark": {
    image_url: "/images/things/great-white-shark.jpg",
    image_credit: "Photo by Gerald Schömbs on Unsplash",
  },
  "giant-squid": {
    image_url: "/images/things/giant-squid.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "manatee": {
    image_url: "/images/things/manatee.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "walrus": {
    image_url: "/images/things/walrus.jpg",
    image_credit: "Photo by Sergi Ferrete on Unsplash",
  },
  "lions-mane-jellyfish": {
    image_url: "/images/things/lions-mane-jellyfish.jpg",
    image_credit: "Photo by Brian Yurasits on Unsplash",
  },
  "humpback-whale": {
    image_url: "/images/things/humpback-whale.jpg",
    image_credit: "Photo by Oliver Tsappis on Unsplash",
  },
  "orca": {
    image_url: "/images/things/orca.jpg",
    image_credit: "Photo by Dick Martin on Unsplash",
  },
  "narwhal": {
    image_url: "/images/things/narwhal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "manta-ray": {
    image_url: "/images/things/manta-ray.jpg",
    image_credit: "Photo by Fernando Jorge on Unsplash",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LARGE LAND ANIMALS
  // ═══════════════════════════════════════════════════════════════════════════

  "african-elephant": {
    image_url: "/images/things/african-elephant.jpg",
    image_credit: "Photo by Antelope Park on Unsplash",
  },
  "grizzly-bear": {
    image_url: "/images/things/grizzly-bear.jpg",
    image_credit: "Photo by Francesco on Unsplash",
  },
  "hippopotamus": {
    image_url: "/images/things/hippopotamus.jpg",
    image_credit: "Photo by Bob Brewer on Unsplash",
  },
  "moose": {
    image_url: "/images/things/moose.jpg",
    image_credit: "Photo by Shivam Kumar on Unsplash",
  },
  "western-gorilla": {
    image_url: "/images/things/western-gorilla.jpg",
    image_credit: "Photo by Manish Tulaskar on Unsplash",
  },
  "white-rhinoceros": {
    image_url: "/images/things/white-rhinoceros.jpg",
    image_credit: "Photo by David Clode on Unsplash",
  },
  "giraffe": {
    image_url: "/images/things/giraffe.jpg",
    image_credit: "Photo by Andreas Rasmussen on Unsplash",
  },
  "polar-bear": {
    image_url: "/images/things/polar-bear.jpg",
    image_credit: "Photo by Hans-Jurgen Mager on Unsplash",
  },
  "kodiak-bear": {
    image_url: "/images/things/kodiak-bear.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "american-bison": {
    image_url: "/images/things/american-bison.jpg",
    image_credit: "Photo by Jon Sailer on Unsplash",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SMALL ANIMALS, EXTINCT, PLANTS, MICRO
  // ═══════════════════════════════════════════════════════════════════════════

  "chihuahua": {
    image_url: "/images/things/chihuahua.jpg",
    image_credit: "Photo on Unsplash",
  },
  "hamster": {
    image_url: "/images/things/hamster.jpg",
    image_credit: "Photo by Ricky Kharawala on Unsplash",
  },
  "ruby-throated-hummingbird": {
    image_url: "/images/things/ruby-throated-hummingbird.jpg",
    image_credit: "Photo on Unsplash",
  },
  "red-eyed-tree-frog": {
    image_url: "/images/things/red-eyed-tree-frog.jpg",
    image_credit: "Photo by Stephanie LeBlanc on Unsplash",
  },
  "tokay-gecko": {
    image_url: "/images/things/tokay-gecko.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "domestic-cat": {
    image_url: "/images/things/domestic-cat.jpg",
    image_credit: "Photo on Unsplash",
  },
  "corgi": {
    image_url: "/images/things/corgi.jpg",
    image_credit: "Photo on Unsplash",
  },
  "bald-eagle": {
    image_url: "/images/things/bald-eagle.jpg",
    image_credit: "Photo by Ray Hennessy on Unsplash",
  },
  "emperor-penguin": {
    image_url: "/images/things/emperor-penguin.jpg",
    image_credit: "Photo by Andre Mouton on Unsplash",
  },
  "mosquito": {
    image_url: "/images/things/mosquito.jpg",
    image_credit: "Photo on Unsplash",
  },
  "goliath-birdeater-spider": {
    image_url: "/images/things/goliath-birdeater-spider.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "monarch-butterfly": {
    image_url: "/images/things/monarch-butterfly.jpg",
    image_credit: "Photo by Erin Minuskin on Unsplash",
  },
  "leafcutter-ant": {
    image_url: "/images/things/leafcutter-ant.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "praying-mantis": {
    image_url: "/images/things/praying-mantis.jpg",
    image_credit: "Photo by Rosie Kerr on Unsplash",
  },
  "hercules-beetle": {
    image_url: "/images/things/hercules-beetle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dragonfly": {
    image_url: "/images/things/dragonfly.jpg",
    image_credit: "Photo by Jude Infantini on Unsplash",
  },

  // Extinct
  "velociraptor": {
    image_url: "/images/things/velociraptor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "woolly-mammoth": {
    image_url: "/images/things/woolly-mammoth.jpg",
    image_credit: "Photo by April Pethybridge on Unsplash",
  },
  "megalodon": {
    image_url: "/images/things/megalodon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dodo": {
    image_url: "/images/things/dodo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "brachiosaurus": {
    image_url: "/images/things/brachiosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "stegosaurus": {
    image_url: "/images/things/stegosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pteranodon": {
    image_url: "/images/things/pteranodon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // Plants
  "giant-sequoia": {
    image_url: "/images/things/giant-sequoia.jpg",
    image_credit: "Photo on Unsplash",
  },
  "baobab": {
    image_url: "/images/things/baobab.jpg",
    image_credit: "Photo by Sergey Zhesterev on Unsplash",
  },
  "corpse-flower": {
    image_url: "/images/things/corpse-flower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "venus-flytrap": {
    image_url: "/images/things/venus-flytrap.jpg",
    image_credit: "Photo on Unsplash",
  },
  "coast-redwood": {
    image_url: "/images/things/coast-redwood.jpg",
    image_credit: "Photo by Christopher Storment on Unsplash",
  },

  // Microscopic
  "tardigrade": {
    image_url: "/images/things/tardigrade.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dust-mite": {
    image_url: "/images/things/dust-mite.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "e-coli": {
    image_url: "/images/things/e-coli.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "amoeba": {
    image_url: "/images/things/amoeba.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-red-blood-cell": {
    image_url: "/images/things/human-red-blood-cell.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LANDMARKS - SKYSCRAPERS & MODERN
  // ═══════════════════════════════════════════════════════════════════════════

  "empire-state-building": {
    image_url: "/images/things/empire-state-building.jpg",
    image_credit: "Photo by Emiliano Bar on Unsplash",
  },
  "cn-tower": {
    image_url: "/images/things/cn-tower.jpg",
    image_credit: "Photo on Unsplash",
  },
  "shanghai-tower": {
    image_url: "/images/things/shanghai-tower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "taipei-101": {
    image_url: "/images/things/taipei-101.jpg",
    image_credit: "Photo by Lysander Yuen on Unsplash",
  },
  "willis-tower": {
    image_url: "/images/things/willis-tower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "one-world-trade-center": {
    image_url: "/images/things/one-world-trade-center.jpg",
    image_credit: "Photo by Jörg Angeli on Unsplash",
  },

  // LANDMARKS - ANCIENT & HISTORICAL
  "colosseum": {
    image_url: "/images/things/colosseum.jpg",
    image_credit: "Photo by David Köhler on Unsplash",
  },
  "great-wall-of-china": {
    image_url: "/images/things/great-wall-of-china.jpg",
    image_credit: "Photo by Hanson Lu on Unsplash",
  },
  "stonehenge": {
    image_url: "/images/things/stonehenge.jpg",
    image_credit: "Photo by Jack B on Unsplash",
  },
  "angkor-wat": {
    image_url: "/images/things/angkor-wat.jpg",
    image_credit: "Photo on Unsplash",
  },
  "parthenon": {
    image_url: "/images/things/parthenon.jpg",
    image_credit: "Photo by Patrick on Unsplash",
  },
  "machu-picchu": {
    image_url: "/images/things/machu-picchu.jpg",
    image_credit: "Photo by Jeremiah Berman on Unsplash",
  },

  // LANDMARKS - STADIUMS
  "wembley-stadium": {
    image_url: "/images/things/wembley-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "maracana-stadium": {
    image_url: "/images/things/maracana-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "att-stadium": {
    image_url: "/images/things/att-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "melbourne-cricket-ground": {
    image_url: "/images/things/melbourne-cricket-ground.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // LANDMARKS - MONUMENTS & STATUES
  "statue-of-liberty": {
    image_url: "/images/things/statue-of-liberty.jpg",
    image_credit: "Photo by Brandon Mowinkel on Unsplash",
  },
  "christ-the-redeemer": {
    image_url: "/images/things/christ-the-redeemer.jpg",
    image_credit: "Photo by Raphael Nogueira on Unsplash",
  },
  "moai-heads": {
    image_url: "/images/things/moai-heads.jpg",
    image_credit: "Photo by Thomas Griggs on Unsplash",
  },
  "mount-rushmore": {
    image_url: "/images/things/mount-rushmore.jpg",
    image_credit: "Photo on Unsplash",
  },
  "statue-of-unity": {
    image_url: "/images/things/statue-of-unity.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spring-temple-buddha": {
    image_url: "/images/things/spring-temple-buddha.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // LANDMARKS - BUILDINGS & STRUCTURES
  "average-us-house": {
    image_url: "/images/things/average-us-house.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "walmart-supercenter": {
    image_url: "/images/things/walmart-supercenter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "manhattan-studio-apartment": {
    image_url: "/images/things/manhattan-studio-apartment.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympic-swimming-pool": {
    image_url: "/images/things/olympic-swimming-pool.jpg",
    image_credit: "Photo on Unsplash",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEHICLES
  // ═══════════════════════════════════════════════════════════════════════════

  "toyota-corolla": {
    image_url: "/images/things/toyota-corolla.jpg",
    image_credit: "Photo by Luke Miller on Unsplash",
  },
  "school-bus": {
    image_url: "/images/things/school-bus.jpg",
    image_credit: "Photo by Thomas Park on Unsplash",
  },
  "tesla-cybertruck": {
    image_url: "/images/things/tesla-cybertruck.jpg",
    image_credit: "Photo on Unsplash",
  },
  "monster-truck-bigfoot": {
    image_url: "/images/things/monster-truck-bigfoot.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "formula-1-car": {
    image_url: "/images/things/formula-1-car.jpg",
    image_credit: "Photo by Komorebi Photo on Unsplash",
  },
  "london-double-decker-bus": {
    image_url: "/images/things/london-double-decker-bus.jpg",
    image_credit: "Photo by Aron Van de Pol on Unsplash",
  },
  "sr-71-blackbird": {
    image_url: "/images/things/sr-71-blackbird.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "wright-flyer": {
    image_url: "/images/things/wright-flyer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cessna-172": {
    image_url: "/images/things/cessna-172.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "airbus-a380": {
    image_url: "/images/things/airbus-a380.jpg",
    image_credit: "Photo by Daniel Eledut on Unsplash",
  },
  "apache-helicopter-ah-64": {
    image_url: "/images/things/apache-helicopter-ah-64.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "concorde": {
    image_url: "/images/things/concorde.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "titanic": {
    image_url: "/images/things/titanic.jpg",
    image_credit: "Photo on Unsplash",
  },
  "uss-gerald-ford": {
    image_url: "/images/things/uss-gerald-ford.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ever-given-container-ship": {
    image_url: "/images/things/ever-given-container-ship.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kayak-standard": {
    image_url: "/images/things/kayak-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "shinkansen-n700": {
    image_url: "/images/things/shinkansen-n700.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "freight-train-average": {
    image_url: "/images/things/freight-train-average.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "shanghai-maglev": {
    image_url: "/images/things/shanghai-maglev.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "space-shuttle": {
    image_url: "/images/things/space-shuttle.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "falcon-heavy": {
    image_url: "/images/things/falcon-heavy.jpg",
    image_credit: "Photo by SpaceX on Unsplash",
  },
  "international-space-station": {
    image_url: "/images/things/international-space-station.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "voyager-1": {
    image_url: "/images/things/voyager-1.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "apollo-lunar-module": {
    image_url: "/images/things/apollo-lunar-module.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPACE - PLANETS
  // ═══════════════════════════════════════════════════════════════════════════

  "mercury": {
    image_url: "/images/things/mercury.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "venus": {
    image_url: "/images/things/venus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "earth": {
    image_url: "/images/things/earth.jpg",
    image_credit: "Photo by Javier Miranda on Unsplash",
  },
  "mars": {
    image_url: "/images/things/mars.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "jupiter": {
    image_url: "/images/things/jupiter.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "saturn": {
    image_url: "/images/things/saturn.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "uranus": {
    image_url: "/images/things/uranus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "neptune": {
    image_url: "/images/things/neptune.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pluto": {
    image_url: "/images/things/pluto.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // SPACE - STARS
  "betelgeuse": {
    image_url: "/images/things/betelgeuse.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "uy-scuti": {
    image_url: "/images/things/uy-scuti.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "proxima-centauri": {
    image_url: "/images/things/proxima-centauri.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sirius": {
    image_url: "/images/things/sirius.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rigel": {
    image_url: "/images/things/rigel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // SPACE - MOONS
  "the-moon": {
    image_url: "/images/things/the-moon.jpg",
    image_credit: "Photo by David Dibert on Unsplash",
  },
  "europa": {
    image_url: "/images/things/europa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "titan": {
    image_url: "/images/things/titan.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ganymede": {
    image_url: "/images/things/ganymede.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "io": {
    image_url: "/images/things/io.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "phobos": {
    image_url: "/images/things/phobos.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // SPACE - OTHER
  "sagittarius-a-star": {
    image_url: "/images/things/sagittarius-a-star.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "milky-way": {
    image_url: "/images/things/milky-way.jpg",
    image_credit: "Photo by Graham Holtshausen on Unsplash",
  },
  "andromeda-galaxy": {
    image_url: "/images/things/andromeda-galaxy.jpg",
    image_credit: "Photo on Unsplash",
  },
  "neutron-star": {
    image_url: "/images/things/neutron-star.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "halleys-comet": {
    image_url: "/images/things/halleys-comet.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "asteroid-ceres": {
    image_url: "/images/things/asteroid-ceres.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EARTH - MOUNTAINS & VOLCANOES
  // ═══════════════════════════════════════════════════════════════════════════

  "mount-everest": {
    image_url: "/images/things/mount-everest.jpg",
    image_credit: "Photo by Alessio Soggetti on Unsplash",
  },
  "k2": {
    image_url: "/images/things/k2.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "denali": {
    image_url: "/images/things/denali.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kilimanjaro": {
    image_url: "/images/things/kilimanjaro.jpg",
    image_credit: "Photo on Unsplash",
  },
  "mount-fuji": {
    image_url: "/images/things/mount-fuji.jpg",
    image_credit: "Photo on Unsplash",
  },
  "matterhorn": {
    image_url: "/images/things/matterhorn.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mauna-kea": {
    image_url: "/images/things/mauna-kea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mount-vesuvius": {
    image_url: "/images/things/mount-vesuvius.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "krakatoa": {
    image_url: "/images/things/krakatoa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympus-mons": {
    image_url: "/images/things/olympus-mons.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "yellowstone-caldera": {
    image_url: "/images/things/yellowstone-caldera.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mount-st-helens": {
    image_url: "/images/things/mount-st-helens.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mauna-loa": {
    image_url: "/images/things/mauna-loa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // EARTH - BODIES OF WATER
  "pacific-ocean": {
    image_url: "/images/things/pacific-ocean.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lake-baikal": {
    image_url: "/images/things/lake-baikal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mariana-trench": {
    image_url: "/images/things/mariana-trench.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "niagara-falls": {
    image_url: "/images/things/niagara-falls.jpg",
    image_credit: "Photo by Edward Koorey on Unsplash",
  },
  "mississippi-river": {
    image_url: "/images/things/mississippi-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lake-superior": {
    image_url: "/images/things/lake-superior.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // EARTH - LANDSCAPES
  "sahara-desert": {
    image_url: "/images/things/sahara-desert.jpg",
    image_credit: "Photo by Nicolas Jehly on Unsplash",
  },
  "grand-canyon": {
    image_url: "/images/things/grand-canyon.jpg",
    image_credit: "Photo by Jad Limcaco on Unsplash",
  },
  "amazon-rainforest": {
    image_url: "/images/things/amazon-rainforest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mammoth-cave": {
    image_url: "/images/things/mammoth-cave.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-barrier-reef": {
    image_url: "/images/things/great-barrier-reef.jpg",
    image_credit: "Photo by Kristin Hoel on Unsplash",
  },
  "antarctica": {
    image_url: "/images/things/antarctica.jpg",
    image_credit: "Photo by Jay Ruzesky on Unsplash",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FOOD & DRINK
  // ═══════════════════════════════════════════════════════════════════════════

  "costco-pizza-slice": {
    image_url: "/images/things/costco-pizza-slice.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "grain-of-rice": {
    image_url: "/images/things/grain-of-rice.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "watermelon": {
    image_url: "/images/things/watermelon.jpg",
    image_credit: "Photo by Mockup Graphics on Unsplash",
  },
  "pringles-can": {
    image_url: "/images/things/pringles-can.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "can-of-coca-cola": {
    image_url: "/images/things/can-of-coca-cola.jpg",
    image_credit: "Photo by Meghan Schiereck on Unsplash",
  },
  "keg-of-beer": {
    image_url: "/images/things/keg-of-beer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "venti-starbucks": {
    image_url: "/images/things/venti-starbucks.jpg",
    image_credit: "Photo on Unsplash",
  },
  "carolina-reaper": {
    image_url: "/images/things/carolina-reaper.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "single-saffron-thread": {
    image_url: "/images/things/single-saffron-thread.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "worlds-largest-pumpkin": {
    image_url: "/images/things/worlds-largest-pumpkin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "thanksgiving-turkey": {
    image_url: "/images/things/thanksgiving-turkey.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "stick-of-butter": {
    image_url: "/images/things/stick-of-butter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "costco-rotisserie-chicken": {
    image_url: "/images/things/costco-rotisserie-chicken.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HUMAN BODY
  // ═══════════════════════════════════════════════════════════════════════════

  "average-adult-human": {
    image_url: "/images/things/average-adult-human.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "newborn-baby": {
    image_url: "/images/things/newborn-baby.jpg",
    image_credit: "Photo on Unsplash",
  },
  "robert-wadlow": {
    image_url: "/images/things/robert-wadlow.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-brain": {
    image_url: "/images/things/human-brain.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-liver": {
    image_url: "/images/things/human-liver.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-eyeball": {
    image_url: "/images/things/human-eyeball.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-skin": {
    image_url: "/images/things/human-skin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "femur": {
    image_url: "/images/things/femur.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "stapes-bone": {
    image_url: "/images/things/stapes-bone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "full-human-skeleton": {
    image_url: "/images/things/full-human-skeleton.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-blood-volume": {
    image_url: "/images/things/human-blood-volume.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-egg-cell": {
    image_url: "/images/things/human-egg-cell.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-dna-strand": {
    image_url: "/images/things/human-dna-strand.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OBJECTS & EVENTS
  // ═══════════════════════════════════════════════════════════════════════════

  "macbook-pro-16": {
    image_url: "/images/things/macbook-pro-16.jpg",
    image_credit: "Photo on Unsplash",
  },
  "hubble-space-telescope": {
    image_url: "/images/things/hubble-space-telescope.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "king-size-bed": {
    image_url: "/images/things/king-size-bed.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "steinway-model-d-grand-piano": {
    image_url: "/images/things/steinway-model-d-grand-piano.jpg",
    image_credit: "Photo by Alan Liu on Unsplash",
  },
  "bowling-ball": {
    image_url: "/images/things/bowling-ball.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympic-javelin": {
    image_url: "/images/things/olympic-javelin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "regulation-basketball": {
    image_url: "/images/things/regulation-basketball.jpg",
    image_credit: "Photo by TJ Dragotta on Unsplash",
  },
  "shipping-container-40ft": {
    image_url: "/images/things/shipping-container-40ft.jpg",
    image_credit: "Photo by Paul Lichtblau on Unsplash",
  },
  "red-solo-cup": {
    image_url: "/images/things/red-solo-cup.jpg",
    image_credit: "Photo by Jas Min on Unsplash",
  },
  "lego-brick-2x4": {
    image_url: "/images/things/lego-brick-2x4.jpg",
    image_credit: "Photo by Xavi Cabrera on Unsplash",
  },
  "rubiks-cube": {
    image_url: "/images/things/rubiks-cube.jpg",
    image_credit: "Photo by Volodymyr Hryshchenko on Unsplash",
  },
  "standard-pencil": {
    image_url: "/images/things/standard-pencil.jpg",
    image_credit: "Photo by Joshua Hoehne on Unsplash",
  },
  "tennis-ball": {
    image_url: "/images/things/tennis-ball.jpg",
    image_credit: "Photo by Ben Hershey on Unsplash",
  },
  "golf-ball": {
    image_url: "/images/things/golf-ball.jpg",
    image_credit: "Photo by Will Porada on Unsplash",
  },

  // EVENTS - SPORTS
  "marathon-world-record": {
    image_url: "/images/things/marathon-world-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympic-long-jump-record": {
    image_url: "/images/things/olympic-long-jump-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympic-high-jump-record": {
    image_url: "/images/things/olympic-high-jump-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fifa-world-cup-ball": {
    image_url: "/images/things/fifa-world-cup-ball.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fastest-baseball-pitch": {
    image_url: "/images/things/fastest-baseball-pitch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // EVENTS - NATURAL DISASTERS & PHENOMENA
  "category-5-hurricane": {
    image_url: "/images/things/category-5-hurricane.jpg",
    image_credit: "Photo by NASA on Unsplash",
  },
  "tornado-ef5": {
    image_url: "/images/things/tornado-ef5.jpg",
    image_credit: "Photo by Raychel Sanner on Unsplash",
  },
  "a-sneeze": {
    image_url: "/images/things/a-sneeze.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "magnitude-9-earthquake": {
    image_url: "/images/things/magnitude-9-earthquake.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chicxulub-asteroid-impact": {
    image_url: "/images/things/chicxulub-asteroid-impact.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tsar-bomba": {
    image_url: "/images/things/tsar-bomba.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tunguska-event": {
    image_url: "/images/things/tunguska-event.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "krakatoa-1883-eruption": {
    image_url: "/images/things/krakatoa-1883-eruption.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "large-solar-flare": {
    image_url: "/images/things/large-solar-flare.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // COLLECTIVE / ABSTRACT
  "all-the-ants-on-earth": {
    image_url: "/images/things/all-the-ants-on-earth.jpg",
    image_credit: "Photo on Unsplash",
  },
  "the-entire-internet": {
    image_url: "/images/things/the-entire-internet.jpg",
    image_credit: "Photo on Unsplash",
  },
  "all-the-gold-ever-mined": {
    image_url: "/images/things/all-the-gold-ever-mined.jpg",
    image_credit: "Photo by Scottsdale Mint on Unsplash",
  },
  "all-the-water-on-earth": {
    image_url: "/images/things/all-the-water-on-earth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "total-human-population-mass": {
    image_url: "/images/things/total-human-population-mass.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "worlds-annual-energy-consumption": {
    image_url: "/images/things/worlds-annual-energy-consumption.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "all-data-ever-created": {
    image_url: "/images/things/all-data-ever-created.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL THINGS (batch 2 - Wikipedia images)
  // ═══════════════════════════════════════════════════════════════════════════

  "a-clap-of-thunder": {
    image_url: "/images/things/a-clap-of-thunder.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "a-cup-of-coffee": {
    image_url: "/images/things/a-cup-of-coffee.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "a-grain-of-rice": {
    image_url: "/images/things/a-grain-of-rice.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "a-heartbeat": {
    image_url: "/images/things/a-heartbeat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "a-human-hiccup": {
    image_url: "/images/things/a-human-hiccup.jpg",
    image_credit: "Wikimedia Commons",
  },
  "a-pint-of-beer": {
    image_url: "/images/things/a-pint-of-beer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "a-single-egg": {
    image_url: "/images/things/a-single-egg.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "a-slice-of-bread": {
    image_url: "/images/things/a-slice-of-bread.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ankylosaurus": {
    image_url: "/images/things/ankylosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "asteroid-belt": {
    image_url: "/images/things/asteroid-belt.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "aurora-borealis": {
    image_url: "/images/things/aurora-borealis.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "average-raindrop": {
    image_url: "/images/things/average-raindrop.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "axolotl": {
    image_url: "/images/things/axolotl.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "basketball-court": {
    image_url: "/images/things/basketball-court.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blue-ringed-octopus": {
    image_url: "/images/things/blue-ringed-octopus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blue-whale-heart": {
    image_url: "/images/things/blue-whale-heart.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "brooklyn-bridge": {
    image_url: "/images/things/brooklyn-bridge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "buckingham-palace": {
    image_url: "/images/things/buckingham-palace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "capybara": {
    image_url: "/images/things/capybara.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "channel-tunnel": {
    image_url: "/images/things/channel-tunnel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chichen-itza-el-castillo": {
    image_url: "/images/things/chichen-itza-el-castillo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chocolate-bar": {
    image_url: "/images/things/chocolate-bar.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "clownfish": {
    image_url: "/images/things/clownfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dead-sea": {
    image_url: "/images/things/dead-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "diplodocus": {
    image_url: "/images/things/diplodocus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "electric-guitar": {
    image_url: "/images/things/electric-guitar.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fennec-fox": {
    image_url: "/images/things/fennec-fox.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fire-hydrant": {
    image_url: "/images/things/fire-hydrant.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ford-f150": {
    image_url: "/images/things/ford-f150.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-pacific-octopus": {
    image_url: "/images/things/giant-pacific-octopus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "grand-piano": {
    image_url: "/images/things/grand-piano.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hedgehog": {
    image_url: "/images/things/hedgehog.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hoover-dam": {
    image_url: "/images/things/hoover-dam.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hope-diamond": {
    image_url: "/images/things/hope-diamond.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "james-webb-space-telescope": {
    image_url: "/images/things/james-webb-space-telescope.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "large-hadron-collider": {
    image_url: "/images/things/large-hadron-collider.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "largest-recorded-hailstone": {
    image_url: "/images/things/largest-recorded-hailstone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "leatherback-sea-turtle": {
    image_url: "/images/things/leatherback-sea-turtle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "millau-viaduct": {
    image_url: "/images/things/millau-viaduct.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mini-cooper": {
    image_url: "/images/things/mini-cooper.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "nautilus": {
    image_url: "/images/things/nautilus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "nintendo-switch": {
    image_url: "/images/things/nintendo-switch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "old-faithful-geyser": {
    image_url: "/images/things/old-faithful-geyser.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "original-iphone": {
    image_url: "/images/things/original-iphone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "panama-canal": {
    image_url: "/images/things/panama-canal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "petra-the-treasury": {
    image_url: "/images/things/petra-the-treasury.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pipe-organ-largest": {
    image_url: "/images/things/pipe-organ-largest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "platypus": {
    image_url: "/images/things/platypus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "red-panda": {
    image_url: "/images/things/red-panda.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "refrigerator": {
    image_url: "/images/things/refrigerator.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rosetta-stone": {
    image_url: "/images/things/rosetta-stone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saturn-v-rocket": {
    image_url: "/images/things/saturn-v-rocket.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "seahorse": {
    image_url: "/images/things/seahorse.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "snowflake": {
    image_url: "/images/things/snowflake.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "soccer-goal": {
    image_url: "/images/things/soccer-goal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spinosaurus": {
    image_url: "/images/things/spinosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "standard-bathtub": {
    image_url: "/images/things/standard-bathtub.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "standard-shipping-container": {
    image_url: "/images/things/standard-shipping-container.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "stellar-black-hole": {
    image_url: "/images/things/stellar-black-hole.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sugar-glider": {
    image_url: "/images/things/sugar-glider.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sydney-opera-house": {
    image_url: "/images/things/sydney-opera-house.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "taj-mahal": {
    image_url: "/images/things/taj-mahal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tesla-model-s-battery-pack": {
    image_url: "/images/things/tesla-model-s-battery-pack.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "three-toed-sloth": {
    image_url: "/images/things/three-toed-sloth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tower-bridge-london": {
    image_url: "/images/things/tower-bridge-london.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "traffic-cone": {
    image_url: "/images/things/traffic-cone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "triceratops": {
    image_url: "/images/things/triceratops.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "victoria-falls": {
    image_url: "/images/things/victoria-falls.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "violin": {
    image_url: "/images/things/violin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "volkswagen-beetle": {
    image_url: "/images/things/volkswagen-beetle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "washing-machine": {
    image_url: "/images/things/washing-machine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "whale-shark": {
    image_url: "/images/things/whale-shark.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "white-house": {
    image_url: "/images/things/white-house.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wright-flyer-first-flight": {
    image_url: "/images/things/wright-flyer-first-flight.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAINS & RAIL
  // ═══════════════════════════════════════════════════════════════════════════

  "orient-express": {
    image_url: "/images/things/orient-express.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tgv-french-high-speed": {
    image_url: "/images/things/tgv-french-high-speed.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trans-siberian-railway": {
    image_url: "/images/things/trans-siberian-railway.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "london-underground-train": {
    image_url: "/images/things/london-underground-train.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "big-boy-locomotive": {
    image_url: "/images/things/big-boy-locomotive.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STADIUMS
  // ═══════════════════════════════════════════════════════════════════════════

  "rose-bowl-stadium": {
    image_url: "/images/things/rose-bowl-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "birds-nest-beijing": {
    image_url: "/images/things/birds-nest-beijing.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "camp-nou-barcelona": {
    image_url: "/images/things/camp-nou-barcelona.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "yankee-stadium": {
    image_url: "/images/things/yankee-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SHIPS & VESSELS
  // ═══════════════════════════════════════════════════════════════════════════

  "mayflower": {
    image_url: "/images/things/mayflower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bismarck-battleship": {
    image_url: "/images/things/bismarck-battleship.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "viking-longship": {
    image_url: "/images/things/viking-longship.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "noahs-ark-biblical": {
    image_url: "/images/things/noahs-ark-biblical.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "uss-virginia-submarine": {
    image_url: "/images/things/uss-virginia-submarine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLANTS
  // ═══════════════════════════════════════════════════════════════════════════

  "rafflesia-flower": {
    image_url: "/images/things/rafflesia-flower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-bamboo": {
    image_url: "/images/things/giant-bamboo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sunflower": {
    image_url: "/images/things/sunflower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saguaro-cactus": {
    image_url: "/images/things/saguaro-cactus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bristlecone-pine": {
    image_url: "/images/things/bristlecone-pine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MICROSCOPIC
  // ═══════════════════════════════════════════════════════════════════════════

  "human-sperm-cell": {
    image_url: "/images/things/human-sperm-cell.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bacteriophage-t4": {
    image_url: "/images/things/bacteriophage-t4.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "water-bear-larva": {
    image_url: "/images/things/water-bear-larva.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "paramecium": {
    image_url: "/images/things/paramecium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BRIDGES
  // ═══════════════════════════════════════════════════════════════════════════

  "akashi-kaikyo-bridge": {
    image_url: "/images/things/akashi-kaikyo-bridge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sydney-harbour-bridge": {
    image_url: "/images/things/sydney-harbour-bridge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pont-du-gard": {
    image_url: "/images/things/pont-du-gard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STARS
  // ═══════════════════════════════════════════════════════════════════════════

  "alpha-centauri-a": {
    image_url: "/images/things/alpha-centauri-a.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "polaris": {
    image_url: "/images/things/polaris.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "vega": {
    image_url: "/images/things/vega.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "aldebaran": {
    image_url: "/images/things/aldebaran.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "canopus": {
    image_url: "/images/things/canopus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "arcturus": {
    image_url: "/images/things/arcturus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOONS
  // ═══════════════════════════════════════════════════════════════════════════

  "triton": {
    image_url: "/images/things/triton.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "enceladus": {
    image_url: "/images/things/enceladus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "callisto": {
    image_url: "/images/things/callisto.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "deimos": {
    image_url: "/images/things/deimos.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "charon": {
    image_url: "/images/things/charon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LANDMARKS & STATUES
  // ═══════════════════════════════════════════════════════════════════════════

  "great-sphinx-of-giza": {
    image_url: "/images/things/great-sphinx-of-giza.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "terracotta-warrior-single": {
    image_url: "/images/things/terracotta-warrior-single.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "manneken-pis": {
    image_url: "/images/things/manneken-pis.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-thinker-rodin": {
    image_url: "/images/things/the-thinker-rodin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "little-mermaid-copenhagen": {
    image_url: "/images/things/little-mermaid-copenhagen.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VOLCANOES
  // ═══════════════════════════════════════════════════════════════════════════

  "mount-etna": {
    image_url: "/images/things/mount-etna.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mount-pinatubo": {
    image_url: "/images/things/mount-pinatubo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kilauea": {
    image_url: "/images/things/kilauea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mount-tambora": {
    image_url: "/images/things/mount-tambora.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cotopaxi": {
    image_url: "/images/things/cotopaxi.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AIRCRAFT
  // ═══════════════════════════════════════════════════════════════════════════

  "b-2-spirit-stealth-bomber": {
    image_url: "/images/things/b-2-spirit-stealth-bomber.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hughes-h-4-spruce-goose": {
    image_url: "/images/things/hughes-h-4-spruce-goose.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "supermarine-spitfire": {
    image_url: "/images/things/supermarine-spitfire.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "f-22-raptor": {
    image_url: "/images/things/f-22-raptor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hot-air-balloon": {
    image_url: "/images/things/hot-air-balloon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INSECTS
  // ═══════════════════════════════════════════════════════════════════════════

  "firefly": {
    image_url: "/images/things/firefly.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "atlas-moth": {
    image_url: "/images/things/atlas-moth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dung-beetle": {
    image_url: "/images/things/dung-beetle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "flea": {
    image_url: "/images/things/flea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cockroach": {
    image_url: "/images/things/cockroach.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOUNTAINS
  // ═══════════════════════════════════════════════════════════════════════════

  "mont-blanc": {
    image_url: "/images/things/mont-blanc.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "aconcagua": {
    image_url: "/images/things/aconcagua.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "elbrus": {
    image_url: "/images/things/elbrus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kangchenjunga": {
    image_url: "/images/things/kangchenjunga.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPORTS RECORDS
  // ═══════════════════════════════════════════════════════════════════════════

  "400m-olympic-record": {
    image_url: "/images/things/400m-olympic-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pole-vault-world-record": {
    image_url: "/images/things/pole-vault-world-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "shot-put-world-record": {
    image_url: "/images/things/shot-put-world-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "javelin-world-record": {
    image_url: "/images/things/javelin-world-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tour-de-france-total-distance": {
    image_url: "/images/things/tour-de-france-total-distance.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BODIES OF WATER
  // ═══════════════════════════════════════════════════════════════════════════

  "nile-river": {
    image_url: "/images/things/nile-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "caspian-sea": {
    image_url: "/images/things/caspian-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lake-victoria": {
    image_url: "/images/things/lake-victoria.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "angel-falls": {
    image_url: "/images/things/angel-falls.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MIND-BOGGLING QUANTITIES
  // ═══════════════════════════════════════════════════════════════════════════

  "all-grains-of-sand-on-earth": {
    image_url: "/images/things/all-grains-of-sand-on-earth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "total-lightning-strikes-per-year": {
    image_url: "/images/things/total-lightning-strikes-per-year.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "all-books-ever-written": {
    image_url: "/images/things/all-books-ever-written.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "worlds-daily-food-production": {
    image_url: "/images/things/worlds-daily-food-production.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "speed-of-light-distance-per-second": {
    image_url: "/images/things/speed-of-light-distance-per-second.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FICTIONAL THINGS
  // ═══════════════════════════════════════════════════════════════════════════

  "death-star": {
    image_url: "/images/things/death-star.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "godzilla-2014": {
    image_url: "/images/things/godzilla-2014.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hogwarts-castle": {
    image_url: "/images/things/hogwarts-castle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-one-ring": {
    image_url: "/images/things/the-one-ring.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mjolnir": {
    image_url: "/images/things/mjolnir.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "millennium-falcon": {
    image_url: "/images/things/millennium-falcon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "smaug-dragon": {
    image_url: "/images/things/smaug-dragon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONIC BUILDINGS
  // ═══════════════════════════════════════════════════════════════════════════

  "guggenheim-museum-bilbao": {
    image_url: "/images/things/guggenheim-museum-bilbao.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "petronas-towers": {
    image_url: "/images/things/petronas-towers.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sagrada-familia": {
    image_url: "/images/things/sagrada-familia.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-pentagon": {
    image_url: "/images/things/the-pentagon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "burj-al-arab": {
    image_url: "/images/things/burj-al-arab.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dubai-mall": {
    image_url: "/images/things/dubai-mall.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WEATHER PHENOMENA
  // ═══════════════════════════════════════════════════════════════════════════

  "cumulus-cloud": {
    image_url: "/images/things/cumulus-cloud.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rainstorm": {
    image_url: "/images/things/rainstorm.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fog-bank": {
    image_url: "/images/things/fog-bank.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dust-devil": {
    image_url: "/images/things/dust-devil.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "heatwave-record": {
    image_url: "/images/things/heatwave-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blizzard": {
    image_url: "/images/things/blizzard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "polar-vortex": {
    image_url: "/images/things/polar-vortex.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DEEP SEA CREATURES
  // ═══════════════════════════════════════════════════════════════════════════

  "anglerfish": {
    image_url: "/images/things/anglerfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-isopod": {
    image_url: "/images/things/giant-isopod.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "colossal-squid": {
    image_url: "/images/things/colossal-squid.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "deep-sea-hydrothermal-vent": {
    image_url: "/images/things/deep-sea-hydrothermal-vent.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sperm-whale": {
    image_url: "/images/things/sperm-whale.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bluefin-tuna": {
    image_url: "/images/things/bluefin-tuna.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "portuguese-man-of-war": {
    image_url: "/images/things/portuguese-man-of-war.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "coral-polyp": {
    image_url: "/images/things/coral-polyp.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HUMAN FEATS
  // ═══════════════════════════════════════════════════════════════════════════

  "deepest-scuba-dive": {
    image_url: "/images/things/deepest-scuba-dive.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "highest-skydive-baumgartner": {
    image_url: "/images/things/highest-skydive-baumgartner.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "longest-held-breath": {
    image_url: "/images/things/longest-held-breath.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "most-pull-ups-24-hours": {
    image_url: "/images/things/most-pull-ups-24-hours.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fastest-mile-run": {
    image_url: "/images/things/fastest-mile-run.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "heaviest-deadlift": {
    image_url: "/images/things/heaviest-deadlift.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tallest-human-tower": {
    image_url: "/images/things/tallest-human-tower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TOYS & GAMES
  // ═══════════════════════════════════════════════════════════════════════════

  "lego-millennium-falcon-set": {
    image_url: "/images/things/lego-millennium-falcon-set.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "monopoly-board": {
    image_url: "/images/things/monopoly-board.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jenga-tower-full": {
    image_url: "/images/things/jenga-tower-full.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hot-wheels-car": {
    image_url: "/images/things/hot-wheels-car.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "standard-playing-card": {
    image_url: "/images/things/standard-playing-card.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chess-board": {
    image_url: "/images/things/chess-board.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "yo-yo": {
    image_url: "/images/things/yo-yo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // THINGS-EXTRA-6.TS + THINGS-EXTRA-7.TS + REMAINING GAPS
  // ═══════════════════════════════════════════════════════════════════════════

"3d-printer-ender-3": {
    image_url: "/images/things/3d-printer-ender-3.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "abu-simbel-temple": {
    image_url: "/images/things/abu-simbel-temple.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "acropolis-athens": {
    image_url: "/images/things/acropolis-athens.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "african-grey-parrot": {
    image_url: "/images/things/african-grey-parrot.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "airpods-pro-2": {
    image_url: "/images/things/airpods-pro-2.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "alhambra-palace": {
    image_url: "/images/things/alhambra-palace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "amazon-rainforest-canopy": {
    image_url: "/images/things/amazon-rainforest-canopy.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "amazon-river-discharge": {
    image_url: "/images/things/amazon-river-discharge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "antarctic-desert": {
    image_url: "/images/things/antarctic-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "apollo-11-moon-landing": {
    image_url: "/images/things/apollo-11-moon-landing.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "apollo-guidance-computer": {
    image_url: "/images/things/apollo-guidance-computer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "apple-medium": {
    image_url: "/images/things/apple-medium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "arabian-desert": {
    image_url: "/images/things/arabian-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "arctic-ocean": {
    image_url: "/images/things/arctic-ocean.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "arecibo-message": {
    image_url: "/images/things/arecibo-message.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "aspirin-tablet": {
    image_url: "/images/things/aspirin-tablet.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "atacama-desert": {
    image_url: "/images/things/atacama-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "atlantic-ocean": {
    image_url: "/images/things/atlantic-ocean.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "aurora-borealis-curtain": {
    image_url: "/images/things/aurora-borealis-curtain.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "avocado": {
    image_url: "/images/things/avocado.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bacteria-staphylococcus": {
    image_url: "/images/things/bacteria-staphylococcus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "baseball-bat": {
    image_url: "/images/things/baseball-bat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "batmobile-1989": {
    image_url: "/images/things/batmobile-1989.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bicycle-road": {
    image_url: "/images/things/bicycle-road.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "big-ben-elizabeth-tower": {
    image_url: "/images/things/big-ben-elizabeth-tower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bioluminescent-bay": {
    image_url: "/images/things/bioluminescent-bay.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bitcoin-network-energy": {
    image_url: "/images/things/bitcoin-network-energy.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "black-forest": {
    image_url: "/images/things/black-forest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "black-sea": {
    image_url: "/images/things/black-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blu-ray-disc": {
    image_url: "/images/things/blu-ray-disc.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blue-mosque-istanbul": {
    image_url: "/images/things/blue-mosque-istanbul.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blue-whale-tongue": {
    image_url: "/images/things/blue-whale-tongue.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "boring-company-tunnel": {
    image_url: "/images/things/boring-company-tunnel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "borneo-island": {
    image_url: "/images/things/borneo-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "borobudur-temple": {
    image_url: "/images/things/borobudur-temple.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bottlenose-dolphin": {
    image_url: "/images/things/bottlenose-dolphin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "boxing-ring": {
    image_url: "/images/things/boxing-ring.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cable-car-san-francisco": {
    image_url: "/images/things/cable-car-san-francisco.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "canoe-standard": {
    image_url: "/images/things/canoe-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "captain-americas-shield": {
    image_url: "/images/things/captain-americas-shield.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "carbon-nanotube": {
    image_url: "/images/things/carbon-nanotube.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "caribbean-sea": {
    image_url: "/images/things/caribbean-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cello": {
    image_url: "/images/things/cello.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cern-complex": {
    image_url: "/images/things/cern-complex.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chatgpt-query-energy": {
    image_url: "/images/things/chatgpt-query-energy.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chicken-nugget": {
    image_url: "/images/things/chicken-nugget.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chinese-junk-ship": {
    image_url: "/images/things/chinese-junk-ship.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "classical-acoustic-guitar": {
    image_url: "/images/things/classical-acoustic-guitar.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cleopatras-needle-london": {
    image_url: "/images/things/cleopatras-needle-london.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "colorado-river": {
    image_url: "/images/things/colorado-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "colossus-of-rhodes": {
    image_url: "/images/things/colossus-of-rhodes.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "common-chimpanzee": {
    image_url: "/images/things/common-chimpanzee.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "common-octopus": {
    image_url: "/images/things/common-octopus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "compact-disc-cd": {
    image_url: "/images/things/compact-disc-cd.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "complete-works-of-shakespeare": {
    image_url: "/images/things/complete-works-of-shakespeare.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "concert-grand-harp": {
    image_url: "/images/things/concert-grand-harp.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "concert-tuba": {
    image_url: "/images/things/concert-tuba.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "congo-rainforest": {
    image_url: "/images/things/congo-rainforest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "contact-lens": {
    image_url: "/images/things/contact-lens.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "copenhagen-little-mermaid": {
    image_url: "/images/things/copenhagen-little-mermaid.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "coral-sea": {
    image_url: "/images/things/coral-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "covid-19-virus": {
    image_url: "/images/things/covid-19-virus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "crete-island": {
    image_url: "/images/things/crete-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cricket-pitch": {
    image_url: "/images/things/cricket-pitch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "croissant": {
    image_url: "/images/things/croissant.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cuneiform-tablet": {
    image_url: "/images/things/cuneiform-tablet.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "daintree-rainforest": {
    image_url: "/images/things/daintree-rainforest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "danube-river": {
    image_url: "/images/things/danube-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "david-by-michelangelo": {
    image_url: "/images/things/david-by-michelangelo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dead-sea-scrolls": {
    image_url: "/images/things/dead-sea-scrolls.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dead-sea-surface": {
    image_url: "/images/things/dead-sea-surface.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "delorean-time-machine": {
    image_url: "/images/things/delorean-time-machine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dji-mavic-3": {
    image_url: "/images/things/dji-mavic-3.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dna-double-helix": {
    image_url: "/images/things/dna-double-helix.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "drum-kit-standard": {
    image_url: "/images/things/drum-kit-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dubai-urban-area": {
    image_url: "/images/things/dubai-urban-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "easter-island": {
    image_url: "/images/things/easter-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ecto-1": {
    image_url: "/images/things/ecto-1.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "edinburgh-castle": {
    image_url: "/images/things/edinburgh-castle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "electric-car-battery-cell": {
    image_url: "/images/things/electric-car-battery-cell.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "electric-eel-discharge": {
    image_url: "/images/things/electric-eel-discharge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "electric-scooter": {
    image_url: "/images/things/electric-scooter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "electron": {
    image_url: "/images/things/electron.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "eniac": {
    image_url: "/images/things/eniac.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "espresso-shot": {
    image_url: "/images/things/espresso-shot.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ethernet-cable-cat6": {
    image_url: "/images/things/ethernet-cable-cat6.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "excalibur-sword": {
    image_url: "/images/things/excalibur-sword.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fingernail-growth": {
    image_url: "/images/things/fingernail-growth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "first-email-ever": {
    image_url: "/images/things/first-email-ever.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "first-telephone": {
    image_url: "/images/things/first-telephone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "floppy-disk-3-5-inch": {
    image_url: "/images/things/floppy-disk-3-5-inch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "florence-cathedral-dome": {
    image_url: "/images/things/florence-cathedral-dome.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "forbidden-city": {
    image_url: "/images/things/forbidden-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ford-model-t": {
    image_url: "/images/things/ford-model-t.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "french-baguette": {
    image_url: "/images/things/french-baguette.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "galapagos-islands": {
    image_url: "/images/things/galapagos-islands.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ganges-river": {
    image_url: "/images/things/ganges-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-anteater": {
    image_url: "/images/things/giant-anteater.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-kelp-forest": {
    image_url: "/images/things/giant-kelp-forest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gobi-desert": {
    image_url: "/images/things/gobi-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gold-atom": {
    image_url: "/images/things/gold-atom.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "golden-gate-park": {
    image_url: "/images/things/golden-gate-park.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "golden-snitch": {
    image_url: "/images/things/golden-snitch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "google-search-energy": {
    image_url: "/images/things/google-search-energy.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gps-satellite": {
    image_url: "/images/things/gps-satellite.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "grain-of-pollen": {
    image_url: "/images/things/grain-of-pollen.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "grain-of-sand": {
    image_url: "/images/things/grain-of-sand.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "grand-organ-notre-dame": {
    image_url: "/images/things/grand-organ-notre-dame.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "graphene-sheet": {
    image_url: "/images/things/graphene-sheet.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-barrier-reef-coral-polyp": {
    image_url: "/images/things/great-barrier-reef-coral-polyp.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-fire-of-london-area": {
    image_url: "/images/things/great-fire-of-london-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-pyramid-stone-block": {
    image_url: "/images/things/great-pyramid-stone-block.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-wave-off-kanagawa": {
    image_url: "/images/things/great-wave-off-kanagawa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-zimbabwe": {
    image_url: "/images/things/great-zimbabwe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "greek-trireme": {
    image_url: "/images/things/greek-trireme.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "greenland-island": {
    image_url: "/images/things/greenland-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "guernica-by-picasso": {
    image_url: "/images/things/guernica-by-picasso.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gutenberg-bible": {
    image_url: "/images/things/gutenberg-bible.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gutenberg-press": {
    image_url: "/images/things/gutenberg-press.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hagia-sophia": {
    image_url: "/images/things/hagia-sophia.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hawaii-big-island": {
    image_url: "/images/things/hawaii-big-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "higgs-boson": {
    image_url: "/images/things/higgs-boson.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hindenburg-zeppelin": {
    image_url: "/images/things/hindenburg-zeppelin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hiv-virus": {
    image_url: "/images/things/hiv-virus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hockey-puck": {
    image_url: "/images/things/hockey-puck.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hogwarts-express": {
    image_url: "/images/things/hogwarts-express.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hot-air-balloon-standard": {
    image_url: "/images/things/hot-air-balloon-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hovercraft-srn4": {
    image_url: "/images/things/hovercraft-srn4.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hubble-deep-field": {
    image_url: "/images/things/hubble-deep-field.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hubble-ultra-deep-field": {
    image_url: "/images/things/hubble-ultra-deep-field.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-cell-typical": {
    image_url: "/images/things/human-cell-typical.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-genome-printed": {
    image_url: "/images/things/human-genome-printed.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-hair-strand": {
    image_url: "/images/things/human-hair-strand.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ibm-350-first-hard-drive": {
    image_url: "/images/things/ibm-350-first-hard-drive.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ice-cream-cone-single": {
    image_url: "/images/things/ice-cream-cone-single.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iceland-island": {
    image_url: "/images/things/iceland-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "indian-ocean": {
    image_url: "/images/things/indian-ocean.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "international-standard-paper-a4": {
    image_url: "/images/things/international-standard-paper-a4.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "international-thermonuclear-experimental-reactor": {
    image_url: "/images/things/international-thermonuclear-experimental-reactor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "international-thermonuclear-fusion-sun-core": {
    image_url: "/images/things/international-thermonuclear-fusion-sun-core.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iphone-16": {
    image_url: "/images/things/iphone-16.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iron-man-suit": {
    image_url: "/images/things/iron-man-suit.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iss-orbit": {
    image_url: "/images/things/iss-orbit.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "james-webb-mirror": {
    image_url: "/images/things/james-webb-mirror.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jurassic-park-t-rex-paddock": {
    image_url: "/images/things/jurassic-park-t-rex-paddock.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kalahari-desert": {
    image_url: "/images/things/kalahari-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kayak-ocean": {
    image_url: "/images/things/kayak-ocean.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kindle-e-reader": {
    image_url: "/images/things/kindle-e-reader.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "king-kong-2005": {
    image_url: "/images/things/king-kong-2005.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "komodo-dragon": {
    image_url: "/images/things/komodo-dragon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kremlin-walls": {
    image_url: "/images/things/kremlin-walls.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lake-titicaca": {
    image_url: "/images/things/lake-titicaca.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "leaning-tower-of-pisa": {
    image_url: "/images/things/leaning-tower-of-pisa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "library-of-congress": {
    image_url: "/images/things/library-of-congress.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lightsaber-blade": {
    image_url: "/images/things/lightsaber-blade.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "london-metro-area": {
    image_url: "/images/things/london-metro-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "macbook-air-m3": {
    image_url: "/images/things/macbook-air-m3.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "madagascar-island": {
    image_url: "/images/things/madagascar-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "magna-carta": {
    image_url: "/images/things/magna-carta.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "manhattan-island": {
    image_url: "/images/things/manhattan-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mars-rover-perseverance": {
    image_url: "/images/things/mars-rover-perseverance.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "medieval-knight-armor": {
    image_url: "/images/things/medieval-knight-armor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mediterranean-sea": {
    image_url: "/images/things/mediterranean-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mekong-river": {
    image_url: "/images/things/mekong-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mesa-verde-cliff-palace": {
    image_url: "/images/things/mesa-verde-cliff-palace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mexico-city-metro": {
    image_url: "/images/things/mexico-city-metro.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "microwave-oven": {
    image_url: "/images/things/microwave-oven.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "minecraft-block": {
    image_url: "/images/things/minecraft-block.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mitochondrion": {
    image_url: "/images/things/mitochondrion.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "moai-statue-average": {
    image_url: "/images/things/moai-statue-average.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "modern-nvme-ssd": {
    image_url: "/images/things/modern-nvme-ssd.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mojave-desert": {
    image_url: "/images/things/mojave-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mona-lisa": {
    image_url: "/images/things/mona-lisa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "morse-code-sos": {
    image_url: "/images/things/morse-code-sos.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mount-everest-summit-area": {
    image_url: "/images/things/mount-everest-summit-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mumbai-metro-area": {
    image_url: "/images/things/mumbai-metro-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "musket-brown-bess": {
    image_url: "/images/things/musket-brown-bess.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "neuschwanstein-castle": {
    image_url: "/images/things/neuschwanstein-castle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "neutron-star-teaspoon": {
    image_url: "/images/things/neutron-star-teaspoon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "new-zealand-south-island": {
    image_url: "/images/things/new-zealand-south-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "niagara-falls-horseshoe": {
    image_url: "/images/things/niagara-falls-horseshoe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "niagara-falls-water-flow": {
    image_url: "/images/things/niagara-falls-water-flow.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "notre-dame-de-paris": {
    image_url: "/images/things/notre-dame-de-paris.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympic-gold-medal": {
    image_url: "/images/things/olympic-gold-medal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "olympic-swimming-pool-water": {
    image_url: "/images/things/olympic-swimming-pool-water.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "one-ring-dimensions": {
    image_url: "/images/things/one-ring-dimensions.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "orient-express-car": {
    image_url: "/images/things/orient-express-car.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "oxford-english-dictionary": {
    image_url: "/images/things/oxford-english-dictionary.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "panama-canal-locks": {
    image_url: "/images/things/panama-canal-locks.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pangolin": {
    image_url: "/images/things/pangolin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "paris-metro-area": {
    image_url: "/images/things/paris-metro-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pencil-graphite-line": {
    image_url: "/images/things/pencil-graphite-line.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "peregrine-falcon-dive": {
    image_url: "/images/things/peregrine-falcon-dive.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "persepolis": {
    image_url: "/images/things/persepolis.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "petra-siq": {
    image_url: "/images/things/petra-siq.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pharos-lighthouse": {
    image_url: "/images/things/pharos-lighthouse.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "photon-visible-green": {
    image_url: "/images/things/photon-visible-green.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "platelet-blood": {
    image_url: "/images/things/platelet-blood.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "polo-field": {
    image_url: "/images/things/polo-field.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "potala-palace": {
    image_url: "/images/things/potala-palace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "proton": {
    image_url: "/images/things/proton.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "raspberry-pi-5": {
    image_url: "/images/things/raspberry-pi-5.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "red-sea": {
    image_url: "/images/things/red-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "redwood-national-park": {
    image_url: "/images/things/redwood-national-park.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rhine-river": {
    image_url: "/images/things/rhine-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rickshaw-cycle": {
    image_url: "/images/things/rickshaw-cycle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "roman-aqueduct-pont-du-gard": {
    image_url: "/images/things/roman-aqueduct-pont-du-gard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "roman-gladius": {
    image_url: "/images/things/roman-gladius.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rome-urban-area": {
    image_url: "/images/things/rome-urban-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "roomba-j7": {
    image_url: "/images/things/roomba-j7.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rubiks-cube-world-record": {
    image_url: "/images/things/rubiks-cube-world-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saharan-dust-plume": {
    image_url: "/images/things/saharan-dust-plume.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saharan-silver-ant": {
    image_url: "/images/things/saharan-silver-ant.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "samurai-katana": {
    image_url: "/images/things/samurai-katana.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sargasso-sea": {
    image_url: "/images/things/sargasso-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saturn-rings-edge": {
    image_url: "/images/things/saturn-rings-edge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "segway-pt": {
    image_url: "/images/things/segway-pt.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "server-rack-42u": {
    image_url: "/images/things/server-rack-42u.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sherwood-forest": {
    image_url: "/images/things/sherwood-forest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sigiriya-rock-fortress": {
    image_url: "/images/things/sigiriya-rock-fortress.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "singapore-city-state": {
    image_url: "/images/things/singapore-city-state.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "singapore-island": {
    image_url: "/images/things/singapore-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sistine-chapel-ceiling": {
    image_url: "/images/things/sistine-chapel-ceiling.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "skateboard": {
    image_url: "/images/things/skateboard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "snow-leopard": {
    image_url: "/images/things/snow-leopard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "soccer-ball-match": {
    image_url: "/images/things/soccer-ball-match.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "solar-panel-residential": {
    image_url: "/images/things/solar-panel-residential.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "south-china-sea": {
    image_url: "/images/things/south-china-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "space-shuttle-main-engine": {
    image_url: "/images/things/space-shuttle-main-engine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spanish-galleon": {
    image_url: "/images/things/spanish-galleon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sri-lanka-island": {
    image_url: "/images/things/sri-lanka-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "starlink-satellite": {
    image_url: "/images/things/starlink-satellite.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "starry-night": {
    image_url: "/images/things/starry-night.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "steinway-concert-grand-d": {
    image_url: "/images/things/steinway-concert-grand-d.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "stradivarius-violin": {
    image_url: "/images/things/stradivarius-violin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "strait-of-gibraltar": {
    image_url: "/images/things/strait-of-gibraltar.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "submarine-internet-cable": {
    image_url: "/images/things/submarine-internet-cable.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sumo-wrestling-ring": {
    image_url: "/images/things/sumo-wrestling-ring.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "surfboard-shortboard": {
    image_url: "/images/things/surfboard-shortboard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sushi-roll-maki": {
    image_url: "/images/things/sushi-roll-maki.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sydney-metro-area": {
    image_url: "/images/things/sydney-metro-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "syringe-needle-standard": {
    image_url: "/images/things/syringe-needle-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "table-tennis-table": {
    image_url: "/images/things/table-tennis-table.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "taco-standard": {
    image_url: "/images/things/taco-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "taiga-boreal-forest": {
    image_url: "/images/things/taiga-boreal-forest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tardis-exterior": {
    image_url: "/images/things/tardis-exterior.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tennis-racket": {
    image_url: "/images/things/tennis-racket.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "terracotta-army-full": {
    image_url: "/images/things/terracotta-army-full.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "terracotta-army-pit-1": {
    image_url: "/images/things/terracotta-army-pit-1.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tesla-model-3": {
    image_url: "/images/things/tesla-model-3.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "thames-river": {
    image_url: "/images/things/thames-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "thar-desert": {
    image_url: "/images/things/thar-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-enterprise-d": {
    image_url: "/images/things/the-enterprise-d.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-thinker-rodin-original": {
    image_url: "/images/things/the-thinker-rodin-original.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "three-gorges-dam": {
    image_url: "/images/things/three-gorges-dam.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tikal-temple-iv": {
    image_url: "/images/things/tikal-temple-iv.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tokyo-metro-area": {
    image_url: "/images/things/tokyo-metro-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tornado-alley-area": {
    image_url: "/images/things/tornado-alley-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tower-of-london": {
    image_url: "/images/things/tower-of-london.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trans-siberian-length": {
    image_url: "/images/things/trans-siberian-length.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "transatlantic-telegraph-cable": {
    image_url: "/images/things/transatlantic-telegraph-cable.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "transistor-modern": {
    image_url: "/images/things/transistor-modern.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trebuchet-medieval": {
    image_url: "/images/things/trebuchet-medieval.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trumpet-bb": {
    image_url: "/images/things/trumpet-bb.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tuk-tuk": {
    image_url: "/images/things/tuk-tuk.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tv-65-inch-oled": {
    image_url: "/images/things/tv-65-inch-oled.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "typewriter-ibm-selectric": {
    image_url: "/images/things/typewriter-ibm-selectric.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "typical-coral-reef": {
    image_url: "/images/things/typical-coral-reef.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "typical-glacier": {
    image_url: "/images/things/typical-glacier.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "typical-iceberg": {
    image_url: "/images/things/typical-iceberg.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "uss-enterprise-ncc-1701": {
    image_url: "/images/things/uss-enterprise-ncc-1701.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "veiled-chameleon": {
    image_url: "/images/things/veiled-chameleon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "venetian-gondola": {
    image_url: "/images/things/venetian-gondola.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "versailles-palace": {
    image_url: "/images/things/versailles-palace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "viking-knarr": {
    image_url: "/images/things/viking-knarr.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "vinyl-record-12-inch": {
    image_url: "/images/things/vinyl-record-12-inch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "violin-bow": {
    image_url: "/images/things/violin-bow.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "volga-river": {
    image_url: "/images/things/volga-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "volleyball-court": {
    image_url: "/images/things/volleyball-court.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "vorpal-sword": {
    image_url: "/images/things/vorpal-sword.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "voyager-2-interstellar": {
    image_url: "/images/things/voyager-2-interstellar.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "voyager-golden-record": {
    image_url: "/images/things/voyager-golden-record.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "vr-headset-meta-quest-3": {
    image_url: "/images/things/vr-headset-meta-quest-3.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "war-and-peace": {
    image_url: "/images/things/war-and-peace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "war-elephant-armor": {
    image_url: "/images/things/war-elephant-armor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "water-molecule": {
    image_url: "/images/things/water-molecule.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "watermelon-whole": {
    image_url: "/images/things/watermelon-whole.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "white-blood-cell": {
    image_url: "/images/things/white-blood-cell.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "whole-pizza-large": {
    image_url: "/images/things/whole-pizza-large.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wifi-signal-range": {
    image_url: "/images/things/wifi-signal-range.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "woodstock-festival-1969": {
    image_url: "/images/things/woodstock-festival-1969.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "world-cup-final-2022": {
    image_url: "/images/things/world-cup-final-2022.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wrestling-mat": {
    image_url: "/images/things/wrestling-mat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "x-ray-medical": {
    image_url: "/images/things/x-ray-medical.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "x-wing-starfighter": {
    image_url: "/images/things/x-wing-starfighter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "yangtze-river": {
    image_url: "/images/things/yangtze-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "zambezi-river": {
    image_url: "/images/things/zambezi-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ── things-extra-8 ──────────────────────────────────────────────────────
  "marina-bay-sands": {
    image_url: "/images/things/marina-bay-sands.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-shard-london": {
    image_url: "/images/things/the-shard-london.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "centre-pompidou": {
    image_url: "/images/things/centre-pompidou.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "namib-desert": {
    image_url: "/images/things/namib-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sonoran-desert": {
    image_url: "/images/things/sonoran-desert.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tongass-national-forest": {
    image_url: "/images/things/tongass-national-forest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bialowieza-forest": {
    image_url: "/images/things/bialowieza-forest.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "most-hot-dogs-eaten-10-min": {
    image_url: "/images/things/most-hot-dogs-eaten-10-min.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "longest-continuous-walk": {
    image_url: "/images/things/longest-continuous-walk.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "encyclopaedia-britannica": {
    image_url: "/images/things/encyclopaedia-britannica.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "the-bible-standard": {
    image_url: "/images/things/the-bible-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "thors-stormbreaker": {
    image_url: "/images/things/thors-stormbreaker.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "barad-dur": {
    image_url: "/images/things/barad-dur.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "barbie-doll": {
    image_url: "/images/things/barbie-doll.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "frisbee": {
    image_url: "/images/things/frisbee.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ── things-extra-9 (art, bridges, marine life, stadiums, trains, weather, cities, engineering, manuscripts, fiction, natural wonders) ──
  "the-scream-munch": {
    image_url: "/images/things/the-scream-munch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "persistence-of-memory-dali": {
    image_url: "/images/things/persistence-of-memory-dali.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "birth-of-venus-botticelli": {
    image_url: "/images/things/birth-of-venus-botticelli.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "girl-with-a-pearl-earring": {
    image_url: "/images/things/girl-with-a-pearl-earring.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rialto-bridge-venice": {
    image_url: "/images/things/rialto-bridge-venice.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "forth-bridge-scotland": {
    image_url: "/images/things/forth-bridge-scotland.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tsing-ma-bridge": {
    image_url: "/images/things/tsing-ma-bridge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hammerhead-shark": {
    image_url: "/images/things/hammerhead-shark.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sea-otter": {
    image_url: "/images/things/sea-otter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "moray-eel": {
    image_url: "/images/things/moray-eel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pygmy-seahorse": {
    image_url: "/images/things/pygmy-seahorse.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rungrado-may-day-stadium": {
    image_url: "/images/things/rungrado-may-day-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "azteca-stadium": {
    image_url: "/images/things/azteca-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fisht-olympic-stadium": {
    image_url: "/images/things/fisht-olympic-stadium.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "eurostar-e320": {
    image_url: "/images/things/eurostar-e320.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "indian-pacific-train": {
    image_url: "/images/things/indian-pacific-train.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "glacier-express": {
    image_url: "/images/things/glacier-express.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ball-lightning": {
    image_url: "/images/things/ball-lightning.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "waterspout": {
    image_url: "/images/things/waterspout.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "supercell-thunderstorm": {
    image_url: "/images/things/supercell-thunderstorm.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "new-york-city": {
    image_url: "/images/things/new-york-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "beijing-city": {
    image_url: "/images/things/beijing-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "istanbul-city": {
    image_url: "/images/things/istanbul-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "channel-tunnel-boring-machine": {
    image_url: "/images/things/channel-tunnel-boring-machine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "itaipu-dam": {
    image_url: "/images/things/itaipu-dam.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "voynich-manuscript": {
    image_url: "/images/things/voynich-manuscript.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "codex-gigas": {
    image_url: "/images/things/codex-gigas.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "diamond-sutra": {
    image_url: "/images/things/diamond-sutra.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "galadriels-phial": {
    image_url: "/images/things/galadriels-phial.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "optimus-prime": {
    image_url: "/images/things/optimus-prime.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mjolnir-thors-hammer": {
    image_url: "/images/things/mjolnir-thors-hammer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iguazu-falls": {
    image_url: "/images/things/iguazu-falls.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "waitomo-glowworm-caves": {
    image_url: "/images/things/waitomo-glowworm-caves.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "zhangjiajie-pillars": {
    image_url: "/images/things/zhangjiajie-pillars.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ── Things-extra-11 new additions ──────────────────────────────────────────

  "sutton-hoo-helmet": {
    image_url: "/images/things/sutton-hoo-helmet.jpg",
    image_credit: "Photo from Wikimedia Commons (British Museum)",
  },
  "fingals-cave": {
    image_url: "/images/things/fingals-cave.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pamukkale-terraces": {
    image_url: "/images/things/pamukkale-terraces.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trans-alaska-pipeline": {
    image_url: "/images/things/trans-alaska-pipeline.jpg",
    image_credit: "Photo by Luca Galuzzi, Wikimedia Commons (CC BY-SA 2.5)",
  },
  "dubrovnik-city": {
    image_url: "/images/things/dubrovnik-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bruges-city": {
    image_url: "/images/things/bruges-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "torres-del-paine": {
    image_url: "/images/things/torres-del-paine.jpg",
    image_credit: "Photo by Karen Chan, Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THINGS-EXTRA-10: Inventions, Geology, Biology, Dinosaurs, Extinct,
  // Marine, Insects, Birds, Plants
  // ═══════════════════════════════════════════════════════════════════════════

  "printing-press-gutenberg": {
    image_url: "/images/things/printing-press-gutenberg.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "watt-steam-engine": {
    image_url: "/images/things/watt-steam-engine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "edison-light-bulb": {
    image_url: "/images/things/edison-light-bulb.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "magnetic-compass": {
    image_url: "/images/things/magnetic-compass.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "galileo-telescope": {
    image_url: "/images/things/galileo-telescope.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "penicillin-mold-culture": {
    image_url: "/images/things/penicillin-mold-culture.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dynamite-stick": {
    image_url: "/images/things/dynamite-stick.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "first-transistor": {
    image_url: "/images/things/first-transistor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ancient-wheel": {
    image_url: "/images/things/ancient-wheel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "edison-phonograph": {
    image_url: "/images/things/edison-phonograph.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "optical-microscope": {
    image_url: "/images/things/optical-microscope.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "telegraph-key": {
    image_url: "/images/things/telegraph-key.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "vaccination-syringe": {
    image_url: "/images/things/vaccination-syringe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spinning-jenny": {
    image_url: "/images/things/spinning-jenny.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "daguerreotype-camera": {
    image_url: "/images/things/daguerreotype-camera.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rough-diamond": {
    image_url: "/images/things/rough-diamond.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "quartz-crystal": {
    image_url: "/images/things/quartz-crystal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "obsidian-blade": {
    image_url: "/images/things/obsidian-blade.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "granite-block": {
    image_url: "/images/things/granite-block.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "amethyst-geode": {
    image_url: "/images/things/amethyst-geode.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hoba-meteorite": {
    image_url: "/images/things/hoba-meteorite.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "naica-giant-crystal": {
    image_url: "/images/things/naica-giant-crystal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "san-andreas-fault": {
    image_url: "/images/things/san-andreas-fault.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mid-atlantic-ridge": {
    image_url: "/images/things/mid-atlantic-ridge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "earths-inner-core": {
    image_url: "/images/things/earths-inner-core.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giants-causeway-column": {
    image_url: "/images/things/giants-causeway-column.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pumice-stone": {
    image_url: "/images/things/pumice-stone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fools-gold-nugget": {
    image_url: "/images/things/fools-gold-nugget.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "petrified-wood-log": {
    image_url: "/images/things/petrified-wood-log.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "delicate-arch": {
    image_url: "/images/things/delicate-arch.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "honey-fungus": {
    image_url: "/images/things/honey-fungus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "methuselah-tree": {
    image_url: "/images/things/methuselah-tree.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bumblebee-bat": {
    image_url: "/images/things/bumblebee-bat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "coco-de-mer-seed": {
    image_url: "/images/things/coco-de-mer-seed.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bioluminescent-dinoflagellate": {
    image_url: "/images/things/bioluminescent-dinoflagellate.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "neuron-cell": {
    image_url: "/images/things/neuron-cell.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chloroplast": {
    image_url: "/images/things/chloroplast.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "synapse-gap": {
    image_url: "/images/things/synapse-gap.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "shepherds-tree-root": {
    image_url: "/images/things/shepherds-tree-root.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "raphia-palm-leaf": {
    image_url: "/images/things/raphia-palm-leaf.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tardigrade-egg": {
    image_url: "/images/things/tardigrade-egg.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blue-whale-calf": {
    image_url: "/images/things/blue-whale-calf.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giganotosaurus": {
    image_url: "/images/things/giganotosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "microraptor": {
    image_url: "/images/things/microraptor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "argentinosaurus": {
    image_url: "/images/things/argentinosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "quetzalcoatlus": {
    image_url: "/images/things/quetzalcoatlus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "compsognathus": {
    image_url: "/images/things/compsognathus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "parasaurolophus": {
    image_url: "/images/things/parasaurolophus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pachycephalosaurus": {
    image_url: "/images/things/pachycephalosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "therizinosaurus": {
    image_url: "/images/things/therizinosaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "carnotaurus": {
    image_url: "/images/things/carnotaurus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "iguanodon": {
    image_url: "/images/things/iguanodon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saber-toothed-cat": {
    image_url: "/images/things/saber-toothed-cat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-ground-sloth": {
    image_url: "/images/things/giant-ground-sloth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "irish-elk": {
    image_url: "/images/things/irish-elk.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "passenger-pigeon": {
    image_url: "/images/things/passenger-pigeon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tasmanian-tiger": {
    image_url: "/images/things/tasmanian-tiger.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dunkleosteus": {
    image_url: "/images/things/dunkleosteus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-auk": {
    image_url: "/images/things/great-auk.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "quagga": {
    image_url: "/images/things/quagga.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "terror-bird": {
    image_url: "/images/things/terror-bird.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "meganeura-giant-dragonfly": {
    image_url: "/images/things/meganeura-giant-dragonfly.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mantis-shrimp": {
    image_url: "/images/things/mantis-shrimp.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "box-jellyfish": {
    image_url: "/images/things/box-jellyfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "common-cuttlefish": {
    image_url: "/images/things/common-cuttlefish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "leafy-sea-dragon": {
    image_url: "/images/things/leafy-sea-dragon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "goblin-shark": {
    image_url: "/images/things/goblin-shark.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blanket-octopus": {
    image_url: "/images/things/blanket-octopus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "barrel-sponge": {
    image_url: "/images/things/barrel-sponge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "crown-of-thorns-starfish": {
    image_url: "/images/things/crown-of-thorns-starfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "japanese-spider-crab": {
    image_url: "/images/things/japanese-spider-crab.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ocean-sunfish-mola-mola": {
    image_url: "/images/things/ocean-sunfish-mola-mola.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chans-megastick": {
    image_url: "/images/things/chans-megastick.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "luna-moth": {
    image_url: "/images/things/luna-moth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bombardier-beetle": {
    image_url: "/images/things/bombardier-beetle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "periodical-cicada": {
    image_url: "/images/things/periodical-cicada.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-weta": {
    image_url: "/images/things/giant-weta.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "asian-giant-hornet": {
    image_url: "/images/things/asian-giant-hornet.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jewel-beetle": {
    image_url: "/images/things/jewel-beetle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "army-ant-single": {
    image_url: "/images/things/army-ant-single.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "leaf-insect": {
    image_url: "/images/things/leaf-insect.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "orchid-mantis": {
    image_url: "/images/things/orchid-mantis.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bee-hummingbird": {
    image_url: "/images/things/bee-hummingbird.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "shoebill": {
    image_url: "/images/things/shoebill.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kea-parrot": {
    image_url: "/images/things/kea-parrot.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "resplendent-quetzal": {
    image_url: "/images/things/resplendent-quetzal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "superb-lyrebird": {
    image_url: "/images/things/superb-lyrebird.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "atlantic-puffin": {
    image_url: "/images/things/atlantic-puffin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hoatzin": {
    image_url: "/images/things/hoatzin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "greater-roadrunner": {
    image_url: "/images/things/greater-roadrunner.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "riflebird": {
    image_url: "/images/things/riflebird.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-frigatebird": {
    image_url: "/images/things/great-frigatebird.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "baobab-tree": {
    image_url: "/images/things/baobab-tree.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dragon-blood-tree": {
    image_url: "/images/things/dragon-blood-tree.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-water-lily": {
    image_url: "/images/things/giant-water-lily.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "strangler-fig": {
    image_url: "/images/things/strangler-fig.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "welwitschia-plant": {
    image_url: "/images/things/welwitschia-plant.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "andean-condor": {
    image_url: "/images/things/andean-condor.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THINGS-EXTRA-12: Space Missions, Historical Weapons, World Cuisines,
  // Human Body, Everyday Objects, Technology, Sports, Vehicles, Art
  // ═══════════════════════════════════════════════════════════════════════════

  "curiosity-rover": {
    image_url: "/images/things/curiosity-rover.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "new-horizons-probe": {
    image_url: "/images/things/new-horizons-probe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cassini-spacecraft": {
    image_url: "/images/things/cassini-spacecraft.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sputnik-1": {
    image_url: "/images/things/sputnik-1.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lunar-rover-apollo": {
    image_url: "/images/things/lunar-rover-apollo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "skylab-station": {
    image_url: "/images/things/skylab-station.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mir-space-station": {
    image_url: "/images/things/mir-space-station.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tiangong-station": {
    image_url: "/images/things/tiangong-station.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spacex-starship": {
    image_url: "/images/things/spacex-starship.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rosetta-probe": {
    image_url: "/images/things/rosetta-probe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pioneer-10-probe": {
    image_url: "/images/things/pioneer-10-probe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "vostok-1-capsule": {
    image_url: "/images/things/vostok-1-capsule.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "medieval-longbow": {
    image_url: "/images/things/medieval-longbow.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "medieval-crossbow": {
    image_url: "/images/things/medieval-crossbow.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jousting-lance": {
    image_url: "/images/things/jousting-lance.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "flintlock-musket": {
    image_url: "/images/things/flintlock-musket.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "viking-round-shield": {
    image_url: "/images/things/viking-round-shield.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "greek-phalanx-pike": {
    image_url: "/images/things/greek-phalanx-pike.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spartan-aspis-shield": {
    image_url: "/images/things/spartan-aspis-shield.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bronze-age-sword": {
    image_url: "/images/things/bronze-age-sword.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "roman-ballista": {
    image_url: "/images/things/roman-ballista.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "soft-pretzel": {
    image_url: "/images/things/soft-pretzel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ramen-bowl": {
    image_url: "/images/things/ramen-bowl.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "empanada": {
    image_url: "/images/things/empanada.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "naan-bread": {
    image_url: "/images/things/naan-bread.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dim-sum-steamer-basket": {
    image_url: "/images/things/dim-sum-steamer-basket.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "falafel-ball": {
    image_url: "/images/things/falafel-ball.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "churro": {
    image_url: "/images/things/churro.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spring-roll": {
    image_url: "/images/things/spring-roll.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tamale": {
    image_url: "/images/things/tamale.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "baklava-piece": {
    image_url: "/images/things/baklava-piece.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-lung-organ": {
    image_url: "/images/things/human-lung-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-kidney-organ": {
    image_url: "/images/things/human-kidney-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "spleen-organ": {
    image_url: "/images/things/spleen-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pancreas-organ": {
    image_url: "/images/things/pancreas-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "thyroid-gland-organ": {
    image_url: "/images/things/thyroid-gland-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "adrenal-gland-organ": {
    image_url: "/images/things/adrenal-gland-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-molar-tooth": {
    image_url: "/images/things/human-molar-tooth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lumbar-vertebra-bone": {
    image_url: "/images/things/lumbar-vertebra-bone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "human-hand-span": {
    image_url: "/images/things/human-hand-span.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trachea-organ": {
    image_url: "/images/things/trachea-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "esophagus-organ": {
    image_url: "/images/things/esophagus-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "appendix-organ": {
    image_url: "/images/things/appendix-organ.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fire-extinguisher-abc": {
    image_url: "/images/things/fire-extinguisher-abc.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "stop-sign": {
    image_url: "/images/things/stop-sign.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "manhole-cover": {
    image_url: "/images/things/manhole-cover.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "park-bench-standard": {
    image_url: "/images/things/park-bench-standard.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "street-lamp-post": {
    image_url: "/images/things/street-lamp-post.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "escalator-step": {
    image_url: "/images/things/escalator-step.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "elevator-cab": {
    image_url: "/images/things/elevator-cab.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "traffic-light-signal": {
    image_url: "/images/things/traffic-light-signal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "us-mailbox-collection": {
    image_url: "/images/things/us-mailbox-collection.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "usb-flash-drive": {
    image_url: "/images/things/usb-flash-drive.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hard-drive-platter": {
    image_url: "/images/things/hard-drive-platter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "modern-cpu-die": {
    image_url: "/images/things/modern-cpu-die.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ram-stick-dimm": {
    image_url: "/images/things/ram-stick-dimm.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "solar-cell-monocrystalline": {
    image_url: "/images/things/solar-cell-monocrystalline.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wind-turbine-blade": {
    image_url: "/images/things/wind-turbine-blade.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "nuclear-fuel-rod": {
    image_url: "/images/things/nuclear-fuel-rod.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fiber-optic-cable-spool": {
    image_url: "/images/things/fiber-optic-cable-spool.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "quantum-computer-dilution-fridge": {
    image_url: "/images/things/quantum-computer-dilution-fridge.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "server-rack-42u-unit": {
    image_url: "/images/things/server-rack-42u-unit.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "submarine-cable-cross-section": {
    image_url: "/images/things/submarine-cable-cross-section.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "5g-cell-tower": {
    image_url: "/images/things/5g-cell-tower.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "highland-games-caber": {
    image_url: "/images/things/highland-games-caber.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "curling-stone": {
    image_url: "/images/things/curling-stone.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "archery-target-face": {
    image_url: "/images/things/archery-target-face.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fencing-epee": {
    image_url: "/images/things/fencing-epee.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lacrosse-stick": {
    image_url: "/images/things/lacrosse-stick.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "polo-mallet": {
    image_url: "/images/things/polo-mallet.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rugby-ball": {
    image_url: "/images/things/rugby-ball.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "badminton-shuttlecock": {
    image_url: "/images/things/badminton-shuttlecock.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "airbus-beluga-xl": {
    image_url: "/images/things/airbus-beluga-xl.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "v-22-osprey": {
    image_url: "/images/things/v-22-osprey.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chinook-helicopter": {
    image_url: "/images/things/chinook-helicopter.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "caterpillar-d11-bulldozer": {
    image_url: "/images/things/caterpillar-d11-bulldozer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hydraulic-excavator": {
    image_url: "/images/things/hydraulic-excavator.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "combine-harvester": {
    image_url: "/images/things/combine-harvester.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "snowplow-truck": {
    image_url: "/images/things/snowplow-truck.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "zamboni-ice-resurfacer": {
    image_url: "/images/things/zamboni-ice-resurfacer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bayeux-tapestry": {
    image_url: "/images/things/bayeux-tapestry.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "book-of-kells": {
    image_url: "/images/things/book-of-kells.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "winged-victory-samothrace": {
    image_url: "/images/things/winged-victory-samothrace.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "venus-de-milo": {
    image_url: "/images/things/venus-de-milo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bust-of-nefertiti": {
    image_url: "/images/things/bust-of-nefertiti.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "benin-bronzes": {
    image_url: "/images/things/benin-bronzes.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "elgin-marbles-metope": {
    image_url: "/images/things/elgin-marbles-metope.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rodins-the-kiss": {
    image_url: "/images/things/rodins-the-kiss.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "klimts-the-kiss-painting": {
    image_url: "/images/things/klimts-the-kiss-painting.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "van-gogh-sunflowers": {
    image_url: "/images/things/van-gogh-sunflowers.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "monet-water-lilies-orangerie": {
    image_url: "/images/things/monet-water-lilies-orangerie.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "apollo-11-command-module": {
    image_url: "/images/things/apollo-11-command-module.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "war-hammer-medieval": {
    image_url: "/images/things/war-hammer-medieval.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pide-turkish-flatbread": {
    image_url: "/images/things/pide-turkish-flatbread.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "samosa": {
    image_url: "/images/things/samosa.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gyoza-dumpling": {
    image_url: "/images/things/gyoza-dumpling.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dosa-crepe": {
    image_url: "/images/things/dosa-crepe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "medieval-halberd": {
    image_url: "/images/things/medieval-halberd.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hand-grenade-modern": {
    image_url: "/images/things/hand-grenade-modern.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "degas-little-dancer": {
    image_url: "/images/things/degas-little-dancer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THINGS-EXTRA-13: Small Animals, Large Animals, Deep Sea, Microscopic,
  // Weather, Food, Plants, Extinct, Human Feats, Conceptual
  // ═══════════════════════════════════════════════════════════════════════════

  "pufferfish": {
    image_url: "/images/things/pufferfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "flying-fish": {
    image_url: "/images/things/flying-fish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kiwi-bird": {
    image_url: "/images/things/kiwi-bird.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "toucan": {
    image_url: "/images/things/toucan.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "flamingo": {
    image_url: "/images/things/flamingo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pelican": {
    image_url: "/images/things/pelican.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "porcupine": {
    image_url: "/images/things/porcupine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "armadillo": {
    image_url: "/images/things/armadillo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "opossum": {
    image_url: "/images/things/opossum.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chinchilla": {
    image_url: "/images/things/chinchilla.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "slow-loris": {
    image_url: "/images/things/slow-loris.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "golden-lion-tamarin": {
    image_url: "/images/things/golden-lion-tamarin.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "saltwater-crocodile": {
    image_url: "/images/things/saltwater-crocodile.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "yak": {
    image_url: "/images/things/yak.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dromedary-camel": {
    image_url: "/images/things/dromedary-camel.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "water-buffalo": {
    image_url: "/images/things/water-buffalo.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "okapi": {
    image_url: "/images/things/okapi.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tapir": {
    image_url: "/images/things/tapir.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wombat": {
    image_url: "/images/things/wombat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "orangutan": {
    image_url: "/images/things/orangutan.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gorilla": {
    image_url: "/images/things/gorilla.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "giant-tube-worm": {
    image_url: "/images/things/giant-tube-worm.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "viperfish": {
    image_url: "/images/things/viperfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fangtooth-fish": {
    image_url: "/images/things/fangtooth-fish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "barreleye-fish": {
    image_url: "/images/things/barreleye-fish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "yeti-crab": {
    image_url: "/images/things/yeti-crab.jpg",
    image_credit: "Placeholder image",
  },
  "gulper-eel": {
    image_url: "/images/things/gulper-eel.jpg",
    image_credit: "Placeholder image",
  },
  "sea-spider-giant": {
    image_url: "/images/things/sea-spider-giant.jpg",
    image_credit: "Placeholder image",
  },
  "ocean-sunfish": {
    image_url: "/images/things/ocean-sunfish.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "coelacanth": {
    image_url: "/images/things/coelacanth.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "diatom": {
    image_url: "/images/things/diatom.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "rotifer": {
    image_url: "/images/things/rotifer.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hydra-organism": {
    image_url: "/images/things/hydra-organism.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "volvox-colony": {
    image_url: "/images/things/volvox-colony.jpg",
    image_credit: "Placeholder image",
  },
  "euglena": {
    image_url: "/images/things/euglena.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "nematode": {
    image_url: "/images/things/nematode.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "copepod": {
    image_url: "/images/things/copepod.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "radiolarian": {
    image_url: "/images/things/radiolarian.jpg",
    image_credit: "Placeholder image",
  },
  "mammatus-clouds": {
    image_url: "/images/things/mammatus-clouds.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lenticular-cloud": {
    image_url: "/images/things/lenticular-cloud.jpg",
    image_credit: "Placeholder image",
  },
  "rainbow-dimensions": {
    image_url: "/images/things/rainbow-dimensions.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "frost-crystal": {
    image_url: "/images/things/frost-crystal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "st-elmos-fire": {
    image_url: "/images/things/st-elmos-fire.jpg",
    image_credit: "Placeholder image",
  },
  "microburst": {
    image_url: "/images/things/microburst.jpg",
    image_credit: "Placeholder image",
  },
  "thundersnow": {
    image_url: "/images/things/thundersnow.jpg",
    image_credit: "Placeholder image",
  },
  "haboob-dust-storm": {
    image_url: "/images/things/haboob-dust-storm.jpg",
    image_credit: "Placeholder image",
  },
  "persimmon": {
    image_url: "/images/things/persimmon.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pomegranate": {
    image_url: "/images/things/pomegranate.jpg",
    image_credit: "Placeholder image",
  },
  "coconut": {
    image_url: "/images/things/coconut.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "pineapple": {
    image_url: "/images/things/pineapple.jpg",
    image_credit: "Placeholder image",
  },
  "mango": {
    image_url: "/images/things/mango.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "durian": {
    image_url: "/images/things/durian.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jackfruit": {
    image_url: "/images/things/jackfruit.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dragon-fruit": {
    image_url: "/images/things/dragon-fruit.jpg",
    image_credit: "Placeholder image",
  },
  "passion-fruit": {
    image_url: "/images/things/passion-fruit.jpg",
    image_credit: "Placeholder image",
  },
  "fig": {
    image_url: "/images/things/fig.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "artichoke": {
    image_url: "/images/things/artichoke.jpg",
    image_credit: "Placeholder image",
  },
  "brussels-sprout": {
    image_url: "/images/things/brussels-sprout.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jalapeno-pepper": {
    image_url: "/images/things/jalapeno-pepper.jpg",
    image_credit: "Placeholder image",
  },
  "truffle-fungus": {
    image_url: "/images/things/truffle-fungus.jpg",
    image_credit: "Placeholder image",
  },
  "lobster": {
    image_url: "/images/things/lobster.jpg",
    image_credit: "Placeholder image",
  },
  "lotus-flower": {
    image_url: "/images/things/lotus-flower.jpg",
    image_credit: "Placeholder image",
  },
  "banyan-tree": {
    image_url: "/images/things/banyan-tree.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "joshua-tree": {
    image_url: "/images/things/joshua-tree.jpg",
    image_credit: "Placeholder image",
  },
  "barrel-cactus": {
    image_url: "/images/things/barrel-cactus.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "welwitschia": {
    image_url: "/images/things/welwitschia.jpg",
    image_credit: "Placeholder image",
  },
  "pitcher-plant": {
    image_url: "/images/things/pitcher-plant.jpg",
    image_credit: "Placeholder image",
  },
  "titan-arum": {
    image_url: "/images/things/titan-arum.jpg",
    image_credit: "Placeholder image",
  },
  "wisteria-vine": {
    image_url: "/images/things/wisteria-vine.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kapok-tree": {
    image_url: "/images/things/kapok-tree.jpg",
    image_credit: "Placeholder image",
  },
  "fastest-100m-swim": {
    image_url: "/images/things/fastest-100m-swim.jpg",
    image_credit: "Placeholder image",
  },
  "longest-free-dive": {
    image_url: "/images/things/longest-free-dive.jpg",
    image_credit: "Placeholder image",
  },
  "highest-tightrope-walk": {
    image_url: "/images/things/highest-tightrope-walk.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "most-basketball-free-throws-consecutive": {
    image_url: "/images/things/most-basketball-free-throws-consecutive.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fastest-marathon-on-stilts": {
    image_url: "/images/things/fastest-marathon-on-stilts.jpg",
    image_credit: "Placeholder image",
  },
  "longest-plank-hold": {
    image_url: "/images/things/longest-plank-hold.jpg",
    image_credit: "Placeholder image",
  },
  "most-dominoes-toppled": {
    image_url: "/images/things/most-dominoes-toppled.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tallest-sandcastle": {
    image_url: "/images/things/tallest-sandcastle.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "annual-co2-emissions": {
    image_url: "/images/things/annual-co2-emissions.jpg",
    image_credit: "Placeholder image",
  },
  "world-electricity-generation": {
    image_url: "/images/things/world-electricity-generation.jpg",
    image_credit: "Placeholder image",
  },
  "total-road-length-worldwide": {
    image_url: "/images/things/total-road-length-worldwide.jpg",
    image_credit: "Placeholder image",
  },
  "tallest-wave-ever-recorded": {
    image_url: "/images/things/tallest-wave-ever-recorded.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "deepest-mine": {
    image_url: "/images/things/deepest-mine.jpg",
    image_credit: "Placeholder image",
  },
  "longest-cave-system": {
    image_url: "/images/things/longest-cave-system.jpg",
    image_credit: "Placeholder image",
  },
  "farthest-human-made-object": {
    image_url: "/images/things/farthest-human-made-object.jpg",
    image_credit: "Placeholder image",
  },
  "age-of-the-universe": {
    image_url: "/images/things/age-of-the-universe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "total-world-data-storage": {
    image_url: "/images/things/total-world-data-storage.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },

  // ── Missing entries (no image available) ──────────────────────────────────

  "pompeii-archaeological-site": {
    image_url: "/images/things/pompeii-archaeological-site.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tutankhamun-death-mask": {
    image_url: "/images/things/tutankhamun-death-mask.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "nazca-lines": {
    image_url: "/images/things/nazca-lines.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lascaux-cave-paintings": {
    image_url: "/images/things/lascaux-cave-paintings.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "antikythera-mechanism": {
    image_url: "/images/things/antikythera-mechanism.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "troy-archaeological-site": {
    image_url: "/images/things/troy-archaeological-site.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gobekli-tepe": {
    image_url: "/images/things/gobekli-tepe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "mohenjo-daro": {
    image_url: "/images/things/mohenjo-daro.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "altamira-cave": {
    image_url: "/images/things/altamira-cave.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dead-sea-scrolls-cave-4": {
    image_url: "/images/things/dead-sea-scrolls-cave-4.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "terracotta-army-site": {
    image_url: "/images/things/terracotta-army-site.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "grand-prismatic-spring": {
    image_url: "/images/things/grand-prismatic-spring.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cave-of-crystals-naica": {
    image_url: "/images/things/cave-of-crystals-naica.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "salar-de-uyuni": {
    image_url: "/images/things/salar-de-uyuni.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "paricutin-volcano": {
    image_url: "/images/things/paricutin-volcano.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ha-long-bay": {
    image_url: "/images/things/ha-long-bay.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "plitvice-lakes": {
    image_url: "/images/things/plitvice-lakes.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cappadocia-fairy-chimneys": {
    image_url: "/images/things/cappadocia-fairy-chimneys.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "socotra-island": {
    image_url: "/images/things/socotra-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "chocolate-hills-philippines": {
    image_url: "/images/things/chocolate-hills-philippines.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wave-rock-australia": {
    image_url: "/images/things/wave-rock-australia.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "door-to-hell-turkmenistan": {
    image_url: "/images/things/door-to-hell-turkmenistan.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "perito-moreno-glacier": {
    image_url: "/images/things/perito-moreno-glacier.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "blood-falls-antarctica": {
    image_url: "/images/things/blood-falls-antarctica.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "great-blue-hole-belize": {
    image_url: "/images/things/great-blue-hole-belize.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tokyo-metro-system": {
    image_url: "/images/things/tokyo-metro-system.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "london-underground-system": {
    image_url: "/images/things/london-underground-system.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "interstate-highway-system": {
    image_url: "/images/things/interstate-highway-system.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "trans-siberian-railway-system": {
    image_url: "/images/things/trans-siberian-railway-system.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "suez-canal": {
    image_url: "/images/things/suez-canal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "transcontinental-railroad": {
    image_url: "/images/things/transcontinental-railroad.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "german-autobahn-network": {
    image_url: "/images/things/german-autobahn-network.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "aqueduct-of-segovia": {
    image_url: "/images/things/aqueduct-of-segovia.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "roman-road-network": {
    image_url: "/images/things/roman-road-network.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "silk-road-network": {
    image_url: "/images/things/silk-road-network.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "international-date-line": {
    image_url: "/images/things/international-date-line.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "brandenburg-gate": {
    image_url: "/images/things/brandenburg-gate.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "arc-de-triomphe": {
    image_url: "/images/things/arc-de-triomphe.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "temple-of-artemis": {
    image_url: "/images/things/temple-of-artemis.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hanging-gardens-estimated": {
    image_url: "/images/things/hanging-gardens-estimated.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "dome-of-the-rock": {
    image_url: "/images/things/dome-of-the-rock.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "western-wall-jerusalem": {
    image_url: "/images/things/western-wall-jerusalem.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "golden-temple-amritsar": {
    image_url: "/images/things/golden-temple-amritsar.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "fushimi-inari-shrine-gates": {
    image_url: "/images/things/fushimi-inari-shrine-gates.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "standard-torii-gate": {
    image_url: "/images/things/standard-torii-gate.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "wat-arun-bangkok": {
    image_url: "/images/things/wat-arun-bangkok.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "table-mountain": {
    image_url: "/images/things/table-mountain.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "uluru-ayers-rock": {
    image_url: "/images/things/uluru-ayers-rock.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "half-dome": {
    image_url: "/images/things/half-dome.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "el-capitan": {
    image_url: "/images/things/el-capitan.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "k2-mountain": {
    image_url: "/images/things/k2-mountain.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "nanga-parbat": {
    image_url: "/images/things/nanga-parbat.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lhotse": {
    image_url: "/images/things/lhotse.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "makalu": {
    image_url: "/images/things/makalu.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cho-oyu": {
    image_url: "/images/things/cho-oyu.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "congo-river": {
    image_url: "/images/things/congo-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tigris-river": {
    image_url: "/images/things/tigris-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "euphrates-river": {
    image_url: "/images/things/euphrates-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "jordan-river": {
    image_url: "/images/things/jordan-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "huang-he-yellow-river": {
    image_url: "/images/things/huang-he-yellow-river.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "okavango-delta": {
    image_url: "/images/things/okavango-delta.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lake-tanganyika": {
    image_url: "/images/things/lake-tanganyika.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "lake-malawi": {
    image_url: "/images/things/lake-malawi.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "crater-lake": {
    image_url: "/images/things/crater-lake.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tonle-sap": {
    image_url: "/images/things/tonle-sap.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bali-island": {
    image_url: "/images/things/bali-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "santorini-island": {
    image_url: "/images/things/santorini-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "zanzibar-island": {
    image_url: "/images/things/zanzibar-island.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "maldives-total-area": {
    image_url: "/images/things/maldives-total-area.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "svalbard-archipelago": {
    image_url: "/images/things/svalbard-archipelago.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "faroe-islands": {
    image_url: "/images/things/faroe-islands.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "azores-archipelago": {
    image_url: "/images/things/azores-archipelago.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "seychelles-archipelago": {
    image_url: "/images/things/seychelles-archipelago.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "venice-city": {
    image_url: "/images/things/venice-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "amsterdam-city": {
    image_url: "/images/things/amsterdam-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "marrakech-medina": {
    image_url: "/images/things/marrakech-medina.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "kyoto-city": {
    image_url: "/images/things/kyoto-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "cusco-city": {
    image_url: "/images/things/cusco-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "varanasi-city": {
    image_url: "/images/things/varanasi-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "petra-ancient-city": {
    image_url: "/images/things/petra-ancient-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "timbuktu-city": {
    image_url: "/images/things/timbuktu-city.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bering-sea": {
    image_url: "/images/things/bering-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "weddell-sea": {
    image_url: "/images/things/weddell-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "ross-sea": {
    image_url: "/images/things/ross-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "tasman-sea": {
    image_url: "/images/things/tasman-sea.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "bay-of-bengal": {
    image_url: "/images/things/bay-of-bengal.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "gulf-of-mexico": {
    image_url: "/images/things/gulf-of-mexico.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "hudson-bay": {
    image_url: "/images/things/hudson-bay.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
  "sea-of-japan": {
    image_url: "/images/things/sea-of-japan.jpg",
    image_credit: "Photo from Wikimedia Commons",
  },
};
