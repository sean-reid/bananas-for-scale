// ── Food & Drinks + The Human Body seed data ─────────────────────────────

import type { ThingInput } from "../types";

export const categoriesData = [
  {
    id: "food",
    name: "Food & Drinks",
    description:
      "From single grains of rice to kegs of beer, the edible (and drinkable) world, measured and weighed.",
    sort_order: 10,
  },
  {
    id: "human-body",
    name: "The Human Body",
    description:
      "The astonishing machine you walk around in every day, broken down into its measurable parts.",
    sort_order: 11,
  },
];

export const thingsData: ThingInput[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // FOOD & DRINKS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "costco-pizza-slice",
    name: "Costco Pizza Slice",
    subtitle: "The food court legend that feeds a family of four",
    category_id: "food",
    description:
      "A single slice of Costco food court pizza is roughly one-sixth of an 18-inch pie and weighs in at about 300 grams of cheesy, saucy goodness. At around 700 calories per slice, it delivers a staggering amount of energy for its price. The slice is so large it barely fits on a standard paper plate, which is honestly part of the charm.",
    search_terms: "costco|pizza|slice|food court|cheese pizza|pepperoni",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Slice mass", value: 0.3, si_unit: "kg", note: "One-sixth of a whole 18-inch pizza" },
      { dimension: "energy", label: "Caloric energy", value: 1297000, si_unit: "J", note: "Approximately 310 kcal for a cheese slice" },
      { dimension: "length", label: "Slice length (crust to tip)", value: 0.3, si_unit: "m", note: "Roughly 12 inches from an 18-inch pie" },
      { dimension: "area", label: "Top surface area", value: 0.045, si_unit: "m²", note: "One-sixth of the full pie area" },
      { dimension: "length", label: "Crust thickness", value: 0.012, si_unit: "m", note: "Hand-tossed style, about half an inch" },
      { dimension: "length", label: "Whole pie diameter", value: 0.457, si_unit: "m", note: "The full 18-inch pizza before slicing" },
    ],
  },

  {
    slug: "grain-of-rice",
    name: "A Grain of Rice",
    subtitle: "Tiny but responsible for feeding half the planet",
    category_id: "food",
    description:
      "A single grain of long-grain white rice weighs roughly 29 milligrams and is about 7 mm long. It's the staple food for more than 3.5 billion people worldwide. The saying 'take it with a grain of rice' doesn't exist, but given how small one is, it probably should.",
    search_terms: "rice|grain|white rice|staple food|cereal|carbs",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass (single grain)", value: 0.000029, si_unit: "kg", note: "Long-grain white rice, uncooked" },
      { dimension: "length", label: "Length", value: 0.007, si_unit: "m", note: "About 7 mm for long-grain varieties" },
      { dimension: "volume", label: "Volume (single grain)", value: 2.5e-8, si_unit: "m³", note: "Approximately 0.025 mL" },
      { dimension: "length", label: "Width", value: 0.002, si_unit: "m", note: "About 2 mm across" },
      { dimension: "energy", label: "Caloric energy", value: 0.48, si_unit: "J", note: "Roughly 0.11 calories per uncooked grain" },
      { dimension: "length", label: "Thickness", value: 0.0016, si_unit: "m", note: "About 1.6 mm thick" },
    ],
  },

  {
    slug: "watermelon",
    name: "Watermelon",
    subtitle: "92% water, 100% summer",
    category_id: "food",
    description:
      "A full-sized watermelon is a surprisingly hefty fruit, tipping the scales at around 9 kg. It's about 92% water by weight, which makes it both a snack and a hydration strategy. Despite being mostly water, it still packs about 1,300 kilojoules of energy, proof that sugar and volume can do a lot of heavy lifting together.",
    search_terms: "watermelon|melon|fruit|summer fruit|citrullus lanatus",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 9, si_unit: "kg", note: "Average full-sized watermelon" },
      { dimension: "length", label: "Length", value: 0.4, si_unit: "m", note: "End to end, average oblong variety" },
      { dimension: "volume", label: "Volume", value: 0.01, si_unit: "m³", note: "Approximately 10 liters" },
      { dimension: "energy", label: "Caloric energy (whole fruit)", value: 1300000, si_unit: "J", note: "About 1,360 kcal for the edible flesh" },
      { dimension: "length", label: "Rind thickness", value: 0.015, si_unit: "m", note: "The white-to-green outer layer" },
      { dimension: "mass", label: "Water content", value: 8.28, si_unit: "kg", note: "About 92% of total mass" },
      { dimension: "length", label: "Diameter", value: 0.25, si_unit: "m", note: "Cross-section of an average specimen" },
    ],
  },

  {
    slug: "pringles-can",
    name: "A Pringles Can",
    subtitle: "The hyperbolic paraboloid delivery system",
    category_id: "food",
    description:
      "The iconic Pringles can is a cardboard cylinder that stands about 30 cm tall with a 7.5 cm diameter. Each chip inside is a hyperbolic paraboloid, a saddle shape chosen so the chips stack perfectly and resist breakage. Once you pop, the fun geometrically does not stop.",
    search_terms: "pringles|chips|crisps|can|tube|snack|potato chips",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Can height", value: 0.3, si_unit: "m", note: "Standard full-size can" },
      { dimension: "mass", label: "Mass (full can)", value: 0.2, si_unit: "kg", note: "Includes chips and packaging" },
      { dimension: "volume", label: "Internal volume", value: 0.001, si_unit: "m³", note: "Approximately 1 liter" },
      { dimension: "length", label: "Can diameter", value: 0.075, si_unit: "m", note: "Notoriously too narrow for most adult hands" },
      { dimension: "length", label: "Single chip length", value: 0.07, si_unit: "m", note: "Each chip is roughly 7 cm long" },
      { dimension: "mass", label: "Single chip mass", value: 0.0015, si_unit: "kg", note: "About 1.5 grams per chip" },
      { dimension: "area", label: "Can cross-section area", value: 0.0044, si_unit: "m²", note: "Circular cross-section" },
    ],
  },

  {
    slug: "can-of-coca-cola",
    name: "Can of Coca-Cola",
    subtitle: "355 mL of fizzy capitalism",
    category_id: "food",
    description:
      "A standard 12 oz can of Coca-Cola holds 355 mL of carbonated sugar water pressurized to about 2.7 atmospheres at room temperature. The full can weighs 384 grams and stands 12.2 cm tall. The internal pressure is what gives the can its surprising structural rigidity; dent it slightly and it collapses like a house of cards.",
    search_terms: "coca-cola|coke|soda|pop|soft drink|cola|can|carbonated",
    featured: 1,
    measurements: [
      { dimension: "volume", label: "Liquid volume", value: 0.000355, si_unit: "m³", note: "Standard 12 fl oz (355 mL)" },
      { dimension: "mass", label: "Total mass (full)", value: 0.384, si_unit: "kg", note: "Liquid plus aluminum can" },
      { dimension: "energy", label: "Caloric energy", value: 586000, si_unit: "J", note: "About 140 kcal from 39 g of sugar" },
      { dimension: "length", label: "Can height", value: 0.122, si_unit: "m", note: "Standard 12 oz can dimensions" },
      { dimension: "pressure", label: "Internal CO₂ pressure", value: 275790, si_unit: "Pa", note: "About 2.7 atm at room temperature; higher when warm" },
      { dimension: "length", label: "Can diameter", value: 0.066, si_unit: "m", note: "Standard 66 mm diameter" },
      { dimension: "mass", label: "Empty can mass", value: 0.015, si_unit: "kg", note: "Aluminum can alone weighs about 15 g" },
      { dimension: "area", label: "Can surface area", value: 0.035, si_unit: "m²", note: "Total exterior surface including top and bottom" },
    ],
  },

  {
    slug: "keg-of-beer",
    name: "Keg of Beer",
    subtitle: "The life of every party, at roughly 72 kg",
    category_id: "food",
    description:
      "A standard US half-barrel keg holds 58.9 liters of beer, that's about 165 twelve-ounce servings. Fully loaded, it weighs around 72 kg, which is roughly the same as an adult human. This is why you always see two people carrying one and zero people carrying two.",
    search_terms: "keg|beer|half barrel|draft|draught|brewery|party",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Beer volume", value: 0.0589, si_unit: "m³", note: "US half-barrel: 15.5 gallons / 58.9 liters" },
      { dimension: "mass", label: "Total mass (full)", value: 72, si_unit: "kg", note: "Beer plus stainless steel shell" },
      { dimension: "length", label: "Height", value: 0.6, si_unit: "m", note: "Standard US half-barrel" },
      { dimension: "length", label: "Diameter", value: 0.41, si_unit: "m", note: "About 16 inches across" },
      { dimension: "mass", label: "Empty keg mass", value: 13.5, si_unit: "kg", note: "Stainless steel shell" },
      { dimension: "pressure", label: "Serving pressure", value: 82737, si_unit: "Pa", note: "Typically 10-12 PSI for most ales" },
      { dimension: "energy", label: "Total caloric energy", value: 28050000, si_unit: "J", note: "About 165 servings at ~150 kcal each" },
    ],
  },

  {
    slug: "venti-starbucks",
    name: "Venti Starbucks Coffee",
    subtitle: "Twenty ounces of liquid determination",
    category_id: "food",
    description:
      "A Starbucks Venti hot drink holds 591 mL (20 oz) of coffee. 'Venti' literally means 'twenty' in Italian, which is the one fact every coffee snob loves to share. Served at roughly 75°C, it's hot enough to take seriously and large enough to replace a personality trait.",
    search_terms: "starbucks|venti|coffee|latte|espresso|grande|tall",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Drink volume", value: 0.000591, si_unit: "m³", note: "Venti hot: 20 fl oz (591 mL)" },
      { dimension: "mass", label: "Total mass (full)", value: 0.6, si_unit: "kg", note: "Liquid plus paper cup and lid" },
      { dimension: "temperature", label: "Serving temperature", value: 348, si_unit: "K", note: "About 75°C / 167°F, per Starbucks standards" },
      { dimension: "length", label: "Cup height", value: 0.17, si_unit: "m", note: "Approximately 6.7 inches" },
      { dimension: "length", label: "Cup diameter (top)", value: 0.095, si_unit: "m", note: "Rim diameter of the Venti cup" },
      { dimension: "energy", label: "Caloric energy (black coffee)", value: 20920, si_unit: "J", note: "About 5 kcal for plain black; lattes are far higher" },
    ],
  },

  {
    slug: "carolina-reaper",
    name: "Carolina Reaper Pepper",
    subtitle: "2.2 million Scoville units of pure regret",
    category_id: "food",
    description:
      "The Carolina Reaper held the Guinness World Record for hottest pepper at an average of 1.64 million Scoville Heat Units, with individual specimens reaching 2.2 million SHU. It was bred by Ed Currie of PuckerButt Pepper Company in South Carolina. Eating one raw has been described as 'licking the surface of the sun,' which is unfair to the sun, since the sun is only 5,778 K.",
    search_terms: "carolina reaper|hot pepper|capsaicin|scoville|spicy|chili|chilli|puckerbutt",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Average pepper mass", value: 0.007, si_unit: "kg", note: "About 7 grams per pepper" },
      { dimension: "length", label: "Length", value: 0.05, si_unit: "m", note: "Roughly 5 cm with the signature scorpion tail" },
      { dimension: "length", label: "Width", value: 0.035, si_unit: "m", note: "About 3.5 cm at the widest point" },
      { dimension: "energy", label: "Caloric energy", value: 1172, si_unit: "J", note: "About 0.28 kcal per pepper; the pain is free" },
      { dimension: "temperature", label: "Capsaicin equivalent temperature sensation", value: 5778, si_unit: "K", note: "Metaphorical - 2.2M SHU; actual surface of the sun is 5,778 K" },
      { dimension: "mass", label: "Capsaicin content", value: 0.00015, si_unit: "kg", note: "Roughly 150 mg of capsaicin per pepper" },
    ],
  },

  {
    slug: "single-saffron-thread",
    name: "Single Saffron Thread",
    subtitle: "Worth more per gram than gold",
    category_id: "food",
    description:
      "A single thread of saffron, the dried stigma of the Crocus sativus flower, weighs about 2 milligrams and is roughly 3 cm long. It takes about 150,000 flowers to produce one kilogram of saffron, which is why it retails for $5,000-$10,000 per kg. Each crocus produces only three stigmas, and they must all be harvested by hand.",
    search_terms: "saffron|spice|crocus|stigma|expensive spice|thread",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Thread mass", value: 0.000002, si_unit: "kg", note: "About 2 mg per dried stigma" },
      { dimension: "length", label: "Thread length", value: 0.03, si_unit: "m", note: "Roughly 25-30 mm" },
      { dimension: "length", label: "Thread width", value: 0.001, si_unit: "m", note: "About 1 mm across" },
      { dimension: "energy", label: "Caloric energy per thread", value: 0.065, si_unit: "J", note: "Essentially zero nutritional value per strand" },
    ],
  },

  {
    slug: "worlds-largest-pumpkin",
    name: "World's Largest Pumpkin",
    subtitle: "Over a metric ton of gourd",
    category_id: "food",
    description:
      "The world's largest pumpkins regularly exceed 1,000 kg, with record-holders surpassing 1,226 kg. These are Atlantic Giant pumpkins (Cucurbita maxima) that can gain up to 22 kg per day at peak growth. The circumference of a champion pumpkin is about 4.7 meters, and you could not hug it even if you wanted to, and frankly you should want to.",
    search_terms: "pumpkin|giant pumpkin|world record|atlantic giant|cucurbita|gourd",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Record mass", value: 1226, si_unit: "kg", note: "Approximate weight-class of recent world records" },
      { dimension: "length", label: "Circumference", value: 4.7, si_unit: "m", note: "Measured around the widest point" },
      { dimension: "length", label: "Estimated diameter", value: 1.5, si_unit: "m", note: "Derived from circumference" },
      { dimension: "volume", label: "Estimated volume", value: 1.1, si_unit: "m³", note: "Roughly 1,100 liters; mostly flesh and cavity" },
      { dimension: "speed", label: "Peak growth rate", value: 0.00025, si_unit: "m/s", note: "About 22 kg/day at peak; stem grows ~22 mm/day in length" },
      { dimension: "area", label: "Surface area estimate", value: 7.0, si_unit: "m²", note: "Approximate exterior surface" },
      { dimension: "mass", label: "Seed mass", value: 0.003, si_unit: "kg", note: "About 3 g per seed; champion genetics" },
    ],
  },

  {
    slug: "thanksgiving-turkey",
    name: "Thanksgiving Turkey",
    subtitle: "The centerpiece that takes all day and disappears in minutes",
    category_id: "food",
    description:
      "The average Thanksgiving turkey weighs about 7 kg (roughly 15 lbs) and takes around 4 hours to roast at 177°C. Americans consume roughly 46 million turkeys each Thanksgiving. The bird needs to reach an internal temperature of at least 74°C to be safe to eat, which is a fact most people learn the hard way exactly once.",
    search_terms: "turkey|thanksgiving|roast turkey|holiday|poultry|feast",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Average mass", value: 7, si_unit: "kg", note: "Typical store-bought whole turkey, ~15 lbs" },
      { dimension: "temperature", label: "Oven temperature", value: 450, si_unit: "K", note: "About 177°C / 350°F, standard roasting temp" },
      { dimension: "time", label: "Cooking time", value: 14400, si_unit: "s", note: "About 4 hours for a 7 kg bird" },
      { dimension: "temperature", label: "Safe internal temperature", value: 347, si_unit: "K", note: "74°C / 165°F minimum per USDA" },
      { dimension: "energy", label: "Total caloric energy", value: 14644000, si_unit: "J", note: "About 3,500 kcal for the entire bird" },
      { dimension: "length", label: "Length (beak to tail)", value: 0.5, si_unit: "m", note: "Approximate roasting pan length needed" },
      { dimension: "mass", label: "Cooked meat yield", value: 4.2, si_unit: "kg", note: "Roughly 60% of raw weight after cooking" },
    ],
  },

  {
    slug: "stick-of-butter",
    name: "Stick of Butter",
    subtitle: "Half a cup of pure, unapologetic fat",
    category_id: "food",
    description:
      "A standard US stick of butter is 113 grams (4 oz / half cup) and measures about 121 mm long. It's roughly 80% milk fat, 15% water, and 5% milk solids. Butter has been a dietary staple for at least 4,000 years, and it remains the single most important ingredient in making anything taste better.",
    search_terms: "butter|stick|dairy|fat|baking|cooking|margarine",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 0.113, si_unit: "kg", note: "One US stick = 4 oz = 113 g" },
      { dimension: "length", label: "Length", value: 0.121, si_unit: "m", note: "Standard US stick, about 4.75 inches" },
      { dimension: "volume", label: "Volume", value: 0.000125, si_unit: "m³", note: "Half a cup, or 125 mL" },
      { dimension: "length", label: "Cross-section width", value: 0.032, si_unit: "m", note: "About 1.25 inches" },
      { dimension: "length", label: "Cross-section height", value: 0.032, si_unit: "m", note: "Roughly square cross-section" },
      { dimension: "energy", label: "Caloric energy", value: 3389000, si_unit: "J", note: "About 810 kcal per stick; no regrets" },
      { dimension: "temperature", label: "Melting point", value: 305, si_unit: "K", note: "About 32°C / 90°F" },
    ],
  },

  {
    slug: "costco-rotisserie-chicken",
    name: "Costco Rotisserie Chicken",
    subtitle: "The $4.99 loss leader that keeps America fed",
    category_id: "food",
    description:
      "Costco's famous rotisserie chicken weighs about 1.36 kg (3 lbs) and costs $4.99, a price Costco has held steady since 2009 despite losing money on every bird. They sell roughly 100 million per year, making it arguably the most strategically important chicken in retail history. It's served hot at about 71°C and packs over 5 million joules of caloric energy.",
    search_terms: "costco|rotisserie chicken|roast chicken|loss leader|wholesale",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 1.36, si_unit: "kg", note: "Minimum 3 lbs per Costco spec" },
      { dimension: "energy", label: "Total caloric energy", value: 5400000, si_unit: "J", note: "About 1,290 kcal for the whole bird" },
      { dimension: "temperature", label: "Serving temperature", value: 344, si_unit: "K", note: "About 71°C / 160°F when placed in the warmer" },
      { dimension: "length", label: "Length", value: 0.3, si_unit: "m", note: "From drumstick to drumstick, approximately" },
      { dimension: "length", label: "Height in container", value: 0.18, si_unit: "m", note: "In the signature clear plastic clamshell" },
      { dimension: "mass", label: "Edible meat yield", value: 0.88, si_unit: "kg", note: "About 65% of total weight is usable meat" },
      { dimension: "energy", label: "Energy per 100g of meat", value: 879000, si_unit: "J", note: "About 210 kcal per 100 g serving" },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE HUMAN BODY
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "average-adult-human",
    name: "Average Adult Human",
    subtitle: "7 octillion atoms of questionable decision-making",
    category_id: "human-body",
    description:
      "The average adult human stands about 1.7 meters tall, weighs roughly 70 kg, and contains enough water to fill a medium bathtub. The body generates about 80 watts at rest, roughly enough to power a laptop, and maintains a core temperature of 37°C with obsessive precision. We are, essentially, temperature-regulated water balloons with opinions.",
    search_terms: "human|adult|person|body|average human|height|weight",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 1.7, si_unit: "m", note: "Global adult average; varies widely by region" },
      { dimension: "mass", label: "Body mass", value: 70, si_unit: "kg", note: "Global adult average" },
      { dimension: "area", label: "Skin surface area", value: 1.7, si_unit: "m²", note: "DuBois formula estimate for an average adult" },
      { dimension: "volume", label: "Blood volume", value: 0.005, si_unit: "m³", note: "About 5 liters of blood" },
      { dimension: "temperature", label: "Core body temperature", value: 310, si_unit: "K", note: "37°C / 98.6°F" },
      { dimension: "power", label: "Basal metabolic power", value: 80, si_unit: "W", note: "Resting metabolic rate; like a dim incandescent bulb" },
      { dimension: "volume", label: "Total body water", value: 0.042, si_unit: "m³", note: "About 60% of body mass, ~42 liters" },
      { dimension: "length", label: "Arm span", value: 1.7, si_unit: "m", note: "Roughly equal to height in most people" },
      { dimension: "force", label: "Average grip strength", value: 400, si_unit: "N", note: "Combined both hands; varies greatly by individual" },
    ],
  },

  {
    slug: "newborn-baby",
    name: "Newborn Baby",
    subtitle: "3.5 kg of potential with a 2 Hz heart rate",
    category_id: "human-body",
    description:
      "A full-term newborn averages about 50 cm in length and 3.5 kg in mass. Their heart beats at roughly 120-140 bpm, about twice the adult rate, and their body temperature sits just a hair above the adult norm at 37.2°C. They arrive with about 270 bones, which is 64 more than an adult has, because many fuse together during growth.",
    search_terms: "newborn|baby|infant|neonate|birth|child",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Crown-to-heel length", value: 0.5, si_unit: "m", note: "Average full-term newborn" },
      { dimension: "mass", label: "Body mass", value: 3.5, si_unit: "kg", note: "Average full-term newborn" },
      { dimension: "frequency", label: "Heart rate", value: 2.2, si_unit: "Hz", note: "About 120-140 bpm; nearly double an adult's" },
      { dimension: "temperature", label: "Body temperature", value: 310.2, si_unit: "K", note: "37.2°C; slightly above adult normal" },
      { dimension: "length", label: "Head circumference", value: 0.35, si_unit: "m", note: "About 35 cm at birth" },
      { dimension: "volume", label: "Blood volume", value: 0.00027, si_unit: "m³", note: "About 270 mL, roughly 80 mL per kg" },
      { dimension: "length", label: "Foot length", value: 0.075, si_unit: "m", note: "About 7.5 cm at birth" },
      { dimension: "frequency", label: "Breathing rate", value: 0.67, si_unit: "Hz", note: "30-60 breaths per minute, averaging ~40" },
    ],
  },

  {
    slug: "robert-wadlow",
    name: "Robert Wadlow, World's Tallest Person",
    subtitle: "2.72 meters of gentle giant",
    category_id: "human-body",
    description:
      "Robert Pershing Wadlow (1918-1940) of Alton, Illinois, remains the tallest person in recorded history at 2.72 meters (8 ft 11.1 in). His extraordinary height was caused by hyperplasia of the pituitary gland, resulting in abnormally high levels of growth hormone. At his peak, he weighed 199 kg and wore US size 37AA shoes, each over 47 cm long. He was reportedly gentle and soft-spoken, earning him the nickname 'the Gentle Giant.'",
    search_terms: "robert wadlow|tallest person|tallest man|giant|guinness record|height record|alton",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 2.72, si_unit: "m", note: "Measured on June 27, 1940 - 8 ft 11.1 in" },
      { dimension: "mass", label: "Body mass (peak)", value: 199, si_unit: "kg", note: "222.71 kg at greatest, ~199 kg at time of death" },
      { dimension: "length", label: "Shoe length", value: 0.47, si_unit: "m", note: "US size 37AA; the largest shoes known to have been made" },
      { dimension: "length", label: "Hand span", value: 0.325, si_unit: "m", note: "Measured from wrist to tip of middle finger: ~32.5 cm" },
      { dimension: "length", label: "Arm span", value: 2.88, si_unit: "m", note: "Estimated proportional arm span" },
      { dimension: "length", label: "Leg inseam", value: 1.45, si_unit: "m", note: "Estimated from photographs and proportions" },
    ],
  },

  {
    slug: "human-brain",
    name: "Human Brain",
    subtitle: "1.4 kg of the universe trying to understand itself",
    category_id: "human-body",
    description:
      "The adult human brain weighs about 1.4 kg and occupies roughly 1,400 mL. Despite being only 2% of body mass, it consumes about 20% of the body's energy, around 20 watts at rest. It contains approximately 86 billion neurons, each connected to thousands of others, forming a network of roughly 100 trillion synapses. It runs at 37.3°C and never gets a day off.",
    search_terms: "brain|cerebrum|cerebral|neurons|neuroscience|cognition|nervous system",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 1.4, si_unit: "kg", note: "Average adult brain" },
      { dimension: "volume", label: "Volume", value: 0.0014, si_unit: "m³", note: "About 1,400 mL" },
      { dimension: "power", label: "Power consumption", value: 20, si_unit: "W", note: "About 20% of the body's resting energy budget" },
      { dimension: "temperature", label: "Brain temperature", value: 310.3, si_unit: "K", note: "37.3°C; slightly above core body temp" },
      { dimension: "length", label: "Length (front to back)", value: 0.167, si_unit: "m", note: "Average anterior-posterior length" },
      { dimension: "length", label: "Width", value: 0.14, si_unit: "m", note: "Average lateral width" },
      { dimension: "area", label: "Cortical surface area (unfolded)", value: 0.25, si_unit: "m²", note: "About the size of 2.5 pages of newspaper" },
      { dimension: "energy", label: "Daily energy consumption", value: 1728000, si_unit: "J", note: "About 400-500 kcal per day; ~86 billion neurons with ~100 trillion synapses" },
    ],
  },

  {
    slug: "human-liver",
    name: "Human Liver",
    subtitle: "Your body's chemical plant, running 24/7",
    category_id: "human-body",
    description:
      "The human liver is the largest internal organ, weighing about 1.5 kg and processing roughly 1.5 liters of blood per minute. It performs over 500 distinct functions, including detoxification, protein synthesis, and bile production. It's also the only internal organ that can regenerate: remove 75% of it and it will grow back to full size within weeks.",
    search_terms: "liver|hepatic|organ|detox|bile|regeneration",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 1.5, si_unit: "kg", note: "Largest internal organ" },
      { dimension: "volume", label: "Volume", value: 0.0015, si_unit: "m³", note: "About 1,500 mL" },
      { dimension: "volume", label: "Blood processed per hour", value: 0.09, si_unit: "m³", note: "About 90 liters per hour (1.5 L/min) passes through the liver" },
      { dimension: "length", label: "Width (lateral)", value: 0.21, si_unit: "m", note: "Widest dimension, about 21 cm" },
      { dimension: "length", label: "Height", value: 0.155, si_unit: "m", note: "Craniocaudal height ~15.5 cm" },
      { dimension: "length", label: "Depth (anterior-posterior)", value: 0.12, si_unit: "m", note: "About 12 cm" },
    ],
  },

  {
    slug: "human-eyeball",
    name: "Human Eyeball",
    subtitle: "A 7.5-gram biological camera with 576 megapixels",
    category_id: "human-body",
    description:
      "The human eyeball is roughly 24 mm in diameter and weighs about 7.5 grams. It can distinguish roughly 10 million colors and has an effective resolution of about 576 megapixels. The retina processes images in about 13 milliseconds, making your eyes faster than any camera you've ever owned. They're also the only part of the central nervous system visible from outside the body.",
    search_terms: "eye|eyeball|vision|retina|iris|pupil|optic|sight",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.024, si_unit: "m", note: "Average adult, anterior-posterior axis" },
      { dimension: "mass", label: "Mass", value: 0.0075, si_unit: "kg", note: "About 7.5 grams per eye" },
      { dimension: "volume", label: "Volume", value: 6.5e-6, si_unit: "m³", note: "About 6.5 mL" },
      { dimension: "length", label: "Corneal diameter", value: 0.0117, si_unit: "m", note: "About 11.7 mm horizontally" },
      { dimension: "length", label: "Pupil diameter (bright light)", value: 0.002, si_unit: "m", note: "Constricts to about 2 mm" },
      { dimension: "length", label: "Pupil diameter (darkness)", value: 0.008, si_unit: "m", note: "Dilates to about 8 mm" },
      { dimension: "time", label: "Image processing time", value: 0.013, si_unit: "s", note: "Retina processes an image in ~13 milliseconds" },
      { dimension: "length", label: "Optic nerve diameter", value: 0.003, si_unit: "m", note: "About 3 mm; contains ~1.2 million nerve fibers" },
    ],
  },

  {
    slug: "human-skin",
    name: "Human Skin",
    subtitle: "Your largest organ, and the only one on permanent display",
    category_id: "human-body",
    description:
      "Human skin covers about 1.7 m² of surface area in the average adult, weighs roughly 3.6 kg (about 16% of body weight), and averages about 2 mm thick. It's the body's largest organ by both mass and area. Every square centimeter hosts about 300 sweat glands, and you shed roughly 1.5 grams of dead skin cells every day, enough to feed a small army of dust mites.",
    search_terms: "skin|dermis|epidermis|integumentary|dermatology|organ",
    featured: 0,
    measurements: [
      { dimension: "area", label: "Total surface area", value: 1.7, si_unit: "m²", note: "Average adult; roughly the area of a twin mattress" },
      { dimension: "mass", label: "Total mass", value: 3.6, si_unit: "kg", note: "Including epidermis, dermis, and hypodermis" },
      { dimension: "length", label: "Average thickness", value: 0.002, si_unit: "m", note: "About 2 mm; varies from 0.5 mm on eyelids to 4 mm on soles" },
      { dimension: "length", label: "Thinnest skin (eyelids)", value: 0.0005, si_unit: "m", note: "About 0.5 mm on the eyelids" },
      { dimension: "length", label: "Thickest skin (soles)", value: 0.004, si_unit: "m", note: "Up to 4 mm on the soles of the feet" },
      { dimension: "mass", label: "Daily skin cell loss", value: 0.0015, si_unit: "kg", note: "About 1.5 grams of dead cells shed daily" },
    ],
  },

  {
    slug: "femur",
    name: "Femur (Thigh Bone)",
    subtitle: "The longest, strongest bone in the human body",
    category_id: "human-body",
    description:
      "The femur is the longest and strongest bone in the human body, averaging about 48 cm in length and 350 grams in mass. It can withstand compressive forces of up to 4,000 newtons before fracturing, roughly 30 times your body weight. It's also the most commonly fractured long bone, usually because it takes a lot of force to break one, and the events that supply that force tend to be dramatic.",
    search_terms: "femur|thigh bone|bone|skeleton|longest bone|fracture",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Length", value: 0.48, si_unit: "m", note: "Average adult femur, about 26% of body height" },
      { dimension: "mass", label: "Mass", value: 0.35, si_unit: "kg", note: "Average adult dry femur" },
      { dimension: "force", label: "Force to fracture", value: 4000, si_unit: "N", note: "Compressive load; varies with age and bone density" },
      { dimension: "length", label: "Head diameter", value: 0.048, si_unit: "m", note: "The ball that fits into the hip socket" },
      { dimension: "length", label: "Shaft diameter (mid)", value: 0.028, si_unit: "m", note: "Mid-diaphysis, about 28 mm" },
      { dimension: "length", label: "Cortical bone thickness", value: 0.006, si_unit: "m", note: "Compact bone layer, about 6 mm at mid-shaft" },
    ],
  },

  {
    slug: "stapes-bone",
    name: "Stapes - Smallest Bone in the Human Body",
    subtitle: "3 milligrams of bone that lets you hear everything",
    category_id: "human-body",
    description:
      "The stapes (stirrup bone) in the middle ear is the smallest bone in the human body at just 3 mm long and roughly 3 milligrams in mass. Along with the malleus and incus, it transmits sound vibrations from the eardrum to the inner ear. It amplifies sound pressure by about 20x between the eardrum and the oval window of the cochlea. Without it, the world would be a very quiet place.",
    search_terms: "stapes|stirrup bone|smallest bone|middle ear|ossicle|hearing",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Height", value: 0.003, si_unit: "m", note: "About 3 mm - the smallest bone in the body" },
      { dimension: "mass", label: "Mass", value: 0.000003, si_unit: "kg", note: "Roughly 2.5-3 mg" },
      { dimension: "length", label: "Footplate width", value: 0.0013, si_unit: "m", note: "The flat base that contacts the oval window, ~1.3 mm" },
      { dimension: "length", label: "Footplate length", value: 0.003, si_unit: "m", note: "About 3 mm along the long axis" },
      { dimension: "area", label: "Footplate area", value: 3.2e-6, si_unit: "m²", note: "About 3.2 mm²" },
      { dimension: "frequency", label: "Optimal transmission frequency", value: 1000, si_unit: "Hz", note: "Most efficient around 1 kHz; human hearing spans 20 Hz to 20 kHz" },
    ],
  },

  {
    slug: "full-human-skeleton",
    name: "Full Human Skeleton",
    subtitle: "206 bones holding up your life choices",
    category_id: "human-body",
    description:
      "The adult human skeleton comprises 206 bones (down from about 270 at birth, as many fuse during development). It weighs roughly 12 kg in a typical adult, which is about 15% of total body weight. The skeleton serves as structural framework, mineral storage, and blood cell factory, and your bone marrow produces about 200 billion red blood cells every day.",
    search_terms: "skeleton|bones|skeletal system|bone count|anatomy|206 bones",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Total skeletal mass", value: 12, si_unit: "kg", note: "Average adult dry skeleton; 206 bones total" },
      { dimension: "length", label: "Longest bone (femur)", value: 0.48, si_unit: "m", note: "About 48 cm" },
      { dimension: "length", label: "Smallest bone (stapes)", value: 0.003, si_unit: "m", note: "About 3 mm, in the middle ear" },
      { dimension: "length", label: "Spine length", value: 0.71, si_unit: "m", note: "33 vertebrae stacked; average about 71 cm" },
      { dimension: "mass", label: "Skull mass", value: 1.0, si_unit: "kg", note: "Cranium plus mandible, about 1 kg" },
      { dimension: "area", label: "Total bone surface area", value: 1.5, si_unit: "m²", note: "Estimated total surface area of all 206 bones" },
    ],
  },

  {
    slug: "human-blood-volume",
    name: "Human Blood Volume",
    subtitle: "5 liters keeping the whole operation running",
    category_id: "human-body",
    description:
      "The average adult has about 5 liters (0.005 m³) of blood circulating through roughly 100,000 km of blood vessels. Blood makes up about 7-8% of total body weight, coming in at around 5.3 kg. A single red blood cell completes one full circuit of the body in about 20 seconds, and your bone marrow produces about 2 million new red blood cells every second to keep things flowing.",
    search_terms: "blood|blood volume|circulatory|hematology|red blood cells|plasma",
    featured: 0,
    measurements: [
      { dimension: "volume", label: "Total blood volume", value: 0.005, si_unit: "m³", note: "About 5 liters in an average adult" },
      { dimension: "mass", label: "Blood mass", value: 5.3, si_unit: "kg", note: "Blood density ~1.06 kg/L" },
      { dimension: "temperature", label: "Blood temperature", value: 310, si_unit: "K", note: "37°C, matching core body temperature" },
      { dimension: "length", label: "Total vessel length", value: 100000000, si_unit: "m", note: "About 100,000 km if laid end to end, 2.5 times around Earth" },
      { dimension: "time", label: "Full circulation time", value: 20, si_unit: "s", note: "One red blood cell completes a full circuit in ~20 seconds" },
      { dimension: "frequency", label: "Red blood cell production rate", value: 2000000, si_unit: "Hz", note: "About 2 million new RBCs per second from bone marrow" },
      { dimension: "length", label: "Red blood cell diameter", value: 7e-6, si_unit: "m", note: "About 7 micrometers" },
    ],
  },

  {
    slug: "human-egg-cell",
    name: "Human Egg Cell",
    subtitle: "The largest cell in the human body, visible to the naked eye",
    category_id: "human-body",
    description:
      "The human ovum (egg cell) is the largest cell in the body, with a diameter of about 120 micrometers, just barely visible to the unaided eye as a tiny dot. It weighs roughly 3.5 micrograms, which makes it about a million times heavier than a sperm cell. A person with ovaries is born with all the eggs they'll ever have, roughly 1-2 million at birth, declining to about 300,000 by puberty.",
    search_terms: "egg cell|ovum|oocyte|gamete|reproduction|largest cell",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Diameter", value: 0.00012, si_unit: "m", note: "About 120 micrometers; visible to the naked eye" },
      { dimension: "mass", label: "Mass", value: 3.5e-9, si_unit: "kg", note: "About 3.5 micrograms" },
      { dimension: "volume", label: "Volume", value: 9.05e-13, si_unit: "m³", note: "Roughly 0.9 nanoliters, assuming a sphere" },
      { dimension: "length", label: "Zona pellucida thickness", value: 0.000013, si_unit: "m", note: "The protective glycoprotein shell, about 13 μm" },
      { dimension: "area", label: "Surface area", value: 4.52e-8, si_unit: "m²", note: "About 45,200 μm²" },
      { dimension: "time", label: "Ovulation cycle", value: 2419200, si_unit: "s", note: "About 28 days per cycle" },
    ],
  },

  {
    slug: "human-dna-strand",
    name: "Human DNA Strand (Uncoiled)",
    subtitle: "2 meters of code packed into 6 micrometers",
    category_id: "human-body",
    description:
      "If you uncoiled all the DNA from a single human cell, it would stretch about 2 meters long, yet it's packed into a nucleus just 6 micrometers across. Each strand is only about 2.5 nanometers wide, making it one of the most extreme packaging feats in nature. The entire human genome contains about 3.2 billion base pairs encoding roughly 20,000 genes. If you uncoiled the DNA from every cell in your body, it would stretch to the sun and back roughly 600 times.",
    search_terms: "DNA|deoxyribonucleic acid|genome|genetics|double helix|chromosome|gene",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Length per cell (uncoiled)", value: 2, si_unit: "m", note: "Total length of all 46 chromosomes uncoiled" },
      { dimension: "mass", label: "Mass per cell", value: 6.4e-12, si_unit: "kg", note: "About 6.4 picograms of DNA per diploid cell" },
      { dimension: "length", label: "Double helix diameter", value: 2.5e-9, si_unit: "m", note: "2.5 nanometers, the width of the DNA molecule" },
      { dimension: "length", label: "Base pair spacing", value: 3.4e-10, si_unit: "m", note: "0.34 nm between each base pair along the helix" },
      { dimension: "length", label: "Helical pitch (one full turn)", value: 3.4e-9, si_unit: "m", note: "10 base pairs per turn, 3.4 nm per turn" },
      { dimension: "length", label: "Cell nucleus diameter", value: 6e-6, si_unit: "m", note: "About 6 μm - the entire 2 m strand fits in here" },
      { dimension: "data", label: "Genome data (if digital)", value: 800000000, si_unit: "bytes", note: "3.2 billion base pairs × 2 bits each ≈ 800 MB" },
    ],
  },
];
