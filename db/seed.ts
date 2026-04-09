import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "path";
import { randomUUID } from "crypto";
import type { ThingInput } from "./types";

// ── Seed-data imports ─────────────────────────────────────────────────────

import { thingsData as animalsLarge } from "./seed-data/animals-large";
import { thingsData as animalsSmall } from "./seed-data/animals-small-extinct";
import { thingsData as landmarksThings } from "./seed-data/landmarks";
import { thingsData as vehiclesThings } from "./seed-data/vehicles";
import { thingsData as spaceThings } from "./seed-data/space";
import { thingsData as earthThings } from "./seed-data/earth";
import { thingsData as foodBodyThings } from "./seed-data/food-body";
import { thingsData as objectsEventsThings } from "./seed-data/objects-events";
import { sillyUnitsData as extraUnits1 } from "./seed-data/silly-units-extra-1";
import { sillyUnitsData as extraUnits2 } from "./seed-data/silly-units-extra-2";
import { sillyUnitsData as extraUnits3 } from "./seed-data/silly-units-extra-3";
import { sillyUnitsData as extraUnits4 } from "./seed-data/silly-units-extra-4";
import { thingsData as thingsExtra1 } from "./seed-data/things-extra-1";
import { thingsData as thingsExtra2 } from "./seed-data/things-extra-2";
import { thingsData as thingsExtra3 } from "./seed-data/things-extra-3";
import { thingsData as thingsExtra4 } from "./seed-data/things-extra-4";
import { thingsData as thingsExtra5, categoriesData as catsExtra5 } from "./seed-data/things-extra-5";
import { thingsData as thingsExtra6, categoriesData as catsExtra6 } from "./seed-data/things-extra-6";
import { thingsData as thingsExtra7, categoriesData as catsExtra7 } from "./seed-data/things-extra-7";
import { thingsData as thingsExtra8 } from "./seed-data/things-extra-8";
import { thingsData as thingsExtra9 } from "./seed-data/things-extra-9";
import { thingsData as thingsExtra10, categoriesData as catsExtra10 } from "./seed-data/things-extra-10";
import { thingsData as thingsExtra11, categoriesData as catsExtra11 } from "./seed-data/things-extra-11";
import { thingsData as thingsExtra12, categoriesData as catsExtra12 } from "./seed-data/things-extra-12";
import { thingsData as thingsExtra13 } from "./seed-data/things-extra-13";
import { sillyUnitsData as extraUnits5 } from "./seed-data/silly-units-extra-5";
import { sillyUnitsData as extraUnits6 } from "./seed-data/silly-units-extra-6";
import { sillyUnitsData as extraUnits7 } from "./seed-data/silly-units-extra-7";
import { sillyUnitsData as extraUnits8 } from "./seed-data/silly-units-extra-8";
import { sillyUnitsData as extraUnits9 } from "./seed-data/silly-units-extra-9";
import { sillyUnitsData as extraUnits10 } from "./seed-data/silly-units-extra-10";
import { sillyUnitsData as extraUnits11 } from "./seed-data/silly-units-extra-11";
import { sillyUnitsData as extraUnits12 } from "./seed-data/silly-units-extra-12";
import { sillyUnitsData as extraUnits13 } from "./seed-data/silly-units-extra-13";
import { sillyUnitsData as extraUnits14 } from "./seed-data/silly-units-extra-14";
import { sillyUnitsData as extraUnits15 } from "./seed-data/silly-units-extra-15";
import { sillyUnitsData as extraUnits16 } from "./seed-data/silly-units-extra-16";

// ── Database setup ────────────────────────────────────────────────────────

const dbPath = path.join(process.cwd(), "data", "bananas.db");
const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

const db = drizzle(sqlite, { schema });

// ── Create tables ─────────────────────────────────────────────────────────

sqlite.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    sort_order INTEGER
  );

  CREATE TABLE IF NOT EXISTS things (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    subtitle TEXT,
    category_id TEXT REFERENCES categories(id),
    description TEXT NOT NULL,
    image_id TEXT,
    image_credit TEXT,
    search_terms TEXT,
    featured INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS measurements (
    id TEXT PRIMARY KEY,
    thing_id TEXT REFERENCES things(id),
    dimension TEXT NOT NULL,
    label TEXT NOT NULL,
    value REAL NOT NULL,
    si_unit TEXT NOT NULL,
    display_order INTEGER,
    note TEXT
  );

  CREATE TABLE IF NOT EXISTS silly_units (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    name_singular TEXT NOT NULL,
    dimension TEXT NOT NULL,
    si_value REAL NOT NULL
  );
`);

// ── Clear existing data (order matters for foreign keys) ─────────────────

sqlite.exec(`
  DELETE FROM measurements;
  DELETE FROM things;
  DELETE FROM categories;
  DELETE FROM silly_units;
`);

// ── Silly units (original + extras, deduplicated by name) ────────────────

const originalSillyUnits: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // Length (m)
  { name: "Bananas", name_singular: "Banana", dimension: "length", si_value: 0.18 },
  { name: "Danny DeVitos", name_singular: "Danny DeVito", dimension: "length", si_value: 1.47 },
  { name: "Shaquille O'Neals", name_singular: "Shaquille O'Neal", dimension: "length", si_value: 2.16 },
  { name: "Subway Footlongs", name_singular: "Subway Footlong", dimension: "length", si_value: 0.305 },
  { name: "Uncooked spaghetti noodles", name_singular: "Uncooked spaghetti noodle", dimension: "length", si_value: 0.25 },
  { name: "T-Rex body lengths", name_singular: "T-Rex body length", dimension: "length", si_value: 12.0 },
  { name: "London double-decker buses", name_singular: "London double-decker bus", dimension: "length", si_value: 11.0 },
  { name: "American football fields", name_singular: "American football field", dimension: "length", si_value: 91.44 },
  { name: "Eiffel Towers", name_singular: "Eiffel Tower", dimension: "length", si_value: 330.0 },
  { name: "Stacked pennies", name_singular: "Stacked penny", dimension: "length", si_value: 0.00152 },
  { name: "Human hair widths", name_singular: "Human hair width", dimension: "length", si_value: 0.000075 },
  { name: "Toyota Corollas", name_singular: "Toyota Corolla", dimension: "length", si_value: 4.63 },
  { name: "Giraffes", name_singular: "Giraffe", dimension: "length", si_value: 5.5 },
  { name: "Dachshunds", name_singular: "Dachshund", dimension: "length", si_value: 0.6 },
  { name: "Samsung refrigerators", name_singular: "Samsung refrigerator", dimension: "length", si_value: 1.78 },
  { name: "Minecraft blocks", name_singular: "Minecraft block", dimension: "length", si_value: 1.0 },
  { name: "Baguettes", name_singular: "Baguette", dimension: "length", si_value: 0.65 },
  { name: "Hot dogs", name_singular: "Hot dog", dimension: "length", si_value: 0.15 },
  { name: "iPhone Pro Maxes", name_singular: "iPhone Pro Max", dimension: "length", si_value: 0.163 },
  { name: "Ant body lengths", name_singular: "Ant body length", dimension: "length", si_value: 0.002 },
  { name: "Tardigrade body lengths", name_singular: "Tardigrade body length", dimension: "length", si_value: 0.0005 },
  { name: "Earth diameters", name_singular: "Earth diameter", dimension: "length", si_value: 12742000.0 },
  { name: "Light-nanoseconds", name_singular: "Light-nanosecond", dimension: "length", si_value: 0.2998 },
  { name: "Standard pool noodles", name_singular: "Standard pool noodle", dimension: "length", si_value: 1.5 },
  { name: "Unrolled toilet paper rolls", name_singular: "Unrolled toilet paper roll", dimension: "length", si_value: 45.0 },
  { name: "Stacked hamsters", name_singular: "Stacked hamster", dimension: "length", si_value: 0.06 },
  { name: "Oscar statuettes", name_singular: "Oscar statuette", dimension: "length", si_value: 0.343 },

  // Mass (kg)
  { name: "Burritos", name_singular: "Burrito", dimension: "mass", si_value: 0.5 },
  { name: "Golden retrievers", name_singular: "Golden retriever", dimension: "mass", si_value: 30.0 },
  { name: "Rubber ducks", name_singular: "Rubber duck", dimension: "mass", si_value: 0.05 },
  { name: "Chihuahuas", name_singular: "Chihuahua", dimension: "mass", si_value: 2.0 },
  { name: "Bowling balls", name_singular: "Bowling ball", dimension: "mass", si_value: 6.35 },
  { name: "Grand pianos", name_singular: "Grand piano", dimension: "mass", si_value: 500.0 },
  { name: "Newborn pandas", name_singular: "Newborn panda", dimension: "mass", si_value: 0.1 },
  { name: "Adult house cats", name_singular: "Adult house cat", dimension: "mass", si_value: 4.5 },
  { name: "Sticks of butter", name_singular: "Stick of butter", dimension: "mass", si_value: 0.113 },
  { name: "Bald eagles", name_singular: "Bald eagle", dimension: "mass", si_value: 5.0 },
  { name: "Blue whale tongues", name_singular: "Blue whale tongue", dimension: "mass", si_value: 2700.0 },
  { name: "Slices of New York pizza", name_singular: "Slice of New York pizza", dimension: "mass", si_value: 0.1 },
  { name: "Nicolas Cages", name_singular: "Nicolas Cage", dimension: "mass", si_value: 84.0 },
  { name: "Costco rotisserie chickens", name_singular: "Costco rotisserie chicken", dimension: "mass", si_value: 1.36 },
  { name: "Raccoons", name_singular: "Raccoon", dimension: "mass", si_value: 8.0 },
  { name: "Grains of sand", name_singular: "Grain of sand", dimension: "mass", si_value: 0.000001 },
  { name: "Statues of Liberty", name_singular: "Statue of Liberty", dimension: "mass", si_value: 204000.0 },
  { name: "Bags of marshmallows", name_singular: "Bag of marshmallows", dimension: "mass", si_value: 0.28 },
  { name: "Human heads", name_singular: "Human head", dimension: "mass", si_value: 5.0 },
  { name: "Teaspoons of neutron star", name_singular: "Teaspoon of neutron star", dimension: "mass", si_value: 5.5e12 },
  { name: "Labrador puppies", name_singular: "Labrador puppy", dimension: "mass", si_value: 3.0 },
  { name: "Corgis", name_singular: "Corgi", dimension: "mass", si_value: 12.0 },
  { name: "Unabridged dictionaries", name_singular: "Unabridged dictionary", dimension: "mass", si_value: 5.4 },

  // Time (s)
  { name: "Blinks of an eye", name_singular: "Blink of an eye", dimension: "time", si_value: 0.3 },
  { name: "TikToks", name_singular: "TikTok", dimension: "time", si_value: 30.0 },
  { name: "Microwave minutes", name_singular: "Microwave minute", dimension: "time", si_value: 60.0 },
  { name: "Microcenturies", name_singular: "Microcentury", dimension: "time", si_value: 3156.0 },
  { name: "Dog years", name_singular: "Dog year", dimension: "time", si_value: 220752000.0 },
  { name: "Sneeze durations", name_singular: "Sneeze duration", dimension: "time", si_value: 0.5 },
  { name: "Commercial breaks", name_singular: "Commercial break", dimension: "time", si_value: 180.0 },
  { name: "Mayfly lifespans", name_singular: "Mayfly lifespan", dimension: "time", si_value: 86400.0 },
  { name: '"Be right back"s', name_singular: '"Be right back"', dimension: "time", si_value: 1800.0 },
  { name: "Naps", name_singular: "Nap", dimension: "time", si_value: 7200.0 },
  { name: "Silences", name_singular: "Silence", dimension: "time", si_value: 4.0 },
  { name: "Renditions of Happy Birthday", name_singular: "Rendition of Happy Birthday", dimension: "time", si_value: 15.0 },
  { name: "Elevator rides", name_singular: "Elevator ride", dimension: "time", si_value: 45.0 },
  { name: "Hot Pocket cool-down periods", name_singular: "Hot Pocket cool-down period", dimension: "time", si_value: 120.0 },
  { name: "Toddler attention spans", name_singular: "Toddler attention span", dimension: "time", si_value: 8.0 },
  { name: "NYC-to-LA flights", name_singular: "NYC-to-LA flight", dimension: "time", si_value: 19800.0 },
  { name: "Pomodoro timers", name_singular: "Pomodoro timer", dimension: "time", si_value: 1500.0 },
  { name: "Time light crosses a proton", name_singular: "Time light crosses a proton", dimension: "time", si_value: 3.3e-24 },
  { name: "Work meetings", name_singular: "Work meeting", dimension: "time", si_value: 3600.0 },
  { name: "Printer warm-up cycles", name_singular: "Printer warm-up cycle", dimension: "time", si_value: 30.0 },

  // Volume (m3)
  { name: "Bathtubs", name_singular: "Bathtub", dimension: "volume", si_value: 0.3 },
  { name: "Olympic swimming pools", name_singular: "Olympic swimming pool", dimension: "volume", si_value: 2500.0 },
  { name: "Red Solo cups", name_singular: "Red Solo cup", dimension: "volume", si_value: 0.000473 },
  { name: "Shaquille O'Neal's shoes", name_singular: "Shaquille O'Neal's shoe", dimension: "volume", si_value: 0.005 },
  { name: "Thimbles", name_singular: "Thimble", dimension: "volume", si_value: 0.000001 },
  { name: "Standard coffins", name_singular: "Standard coffin", dimension: "volume", si_value: 0.65 },
  { name: "Clown cars", name_singular: "Clown car", dimension: "volume", si_value: 4.0 },
  { name: "Beer kegs", name_singular: "Beer keg", dimension: "volume", si_value: 0.0589 },
  { name: "Hot tubs", name_singular: "Hot tub", dimension: "volume", si_value: 1.5 },
  { name: "Teardrops", name_singular: "Teardrop", dimension: "volume", si_value: 0.000000006 },
  { name: "Yankee Stadiums", name_singular: "Yankee Stadium", dimension: "volume", si_value: 1300000.0 },
  { name: "Teaspoons", name_singular: "Teaspoon", dimension: "volume", si_value: 0.000005 },
  { name: "Human bladders", name_singular: "Human bladder", dimension: "volume", si_value: 0.0005 },
  { name: "Kiddie pools", name_singular: "Kiddie pool", dimension: "volume", si_value: 0.5 },
  { name: "Dumpsters", name_singular: "Dumpster", dimension: "volume", si_value: 3.4 },
  { name: "Venti Starbucks cups", name_singular: "Venti Starbucks cup", dimension: "volume", si_value: 0.000591 },
  { name: "Ball pits", name_singular: "Ball pit", dimension: "volume", si_value: 8.0 },

  // Area (m2)
  { name: "Football fields", name_singular: "Football field", dimension: "area", si_value: 5351.0 },
  { name: "Parking spaces", name_singular: "Parking space", dimension: "area", si_value: 13.0 },
  { name: "King-size beds", name_singular: "King-size bed", dimension: "area", si_value: 3.72 },
  { name: "Yoga mats", name_singular: "Yoga mat", dimension: "area", si_value: 1.7 },
  { name: "Post-it notes", name_singular: "Post-it note", dimension: "area", si_value: 0.0058 },
  { name: "Monopoly boards", name_singular: "Monopoly board", dimension: "area", si_value: 0.25 },
  { name: "Pizza boxes", name_singular: "Pizza box", dimension: "area", si_value: 0.16 },
  { name: "Rhode Islands", name_singular: "Rhode Island", dimension: "area", si_value: 4.001e9 },
  { name: "Tennis courts", name_singular: "Tennis court", dimension: "area", si_value: 260.87 },
  { name: "IMAX screens", name_singular: "IMAX screen", dimension: "area", si_value: 460.0 },
  { name: "Tortillas", name_singular: "Tortilla", dimension: "area", si_value: 0.05 },
  { name: "Standard doors", name_singular: "Standard door", dimension: "area", si_value: 1.86 },
  { name: "Subway tiles", name_singular: "Subway tile", dimension: "area", si_value: 0.02 },

  // Speed (m/s)
  { name: "Sloths", name_singular: "Sloth", dimension: "speed", si_value: 0.06 },
  { name: "Usain Bolts", name_singular: "Usain Bolt", dimension: "speed", si_value: 10.44 },
  { name: "Garden snails", name_singular: "Garden snail", dimension: "speed", si_value: 0.013 },
  { name: "School zone speeds", name_singular: "School zone speed", dimension: "speed", si_value: 6.7 },
  { name: "Shopping carts", name_singular: "Shopping cart", dimension: "speed", si_value: 0.5 },
  { name: "Roombas", name_singular: "Roomba", dimension: "speed", si_value: 0.3 },
  { name: "Tectonic plates", name_singular: "Tectonic plate", dimension: "speed", si_value: 1.6e-9 },
  { name: "Ketchup leaving the bottle", name_singular: "Ketchup leaving the bottle", dimension: "speed", si_value: 0.028 },
  { name: "Running toddlers", name_singular: "Running toddler", dimension: "speed", si_value: 3.0 },
  { name: "Glacial retreat", name_singular: "Glacial retreat", dimension: "speed", si_value: 3.2e-7 },

  // Temperature (K)
  { name: "Fresh pizza ovens", name_singular: "Fresh pizza oven", dimension: "temperature", si_value: 477 },
  { name: "Antarctic penguins", name_singular: "Antarctic penguin", dimension: "temperature", si_value: 253 },
  { name: "Hardwood floors", name_singular: "Hardwood floor", dimension: "temperature", si_value: 288 },
  { name: "Room temperatures", name_singular: "Room temperature", dimension: "temperature", si_value: 295 },
  { name: "Car dashboards in summer", name_singular: "Car dashboard in summer", dimension: "temperature", si_value: 344 },
  { name: "Refrigerators", name_singular: "Refrigerator", dimension: "temperature", si_value: 277 },
  { name: "Hot Pocket centers", name_singular: "Hot Pocket center", dimension: "temperature", si_value: 366 },
  { name: "Lukewarm coffees", name_singular: "Lukewarm coffee", dimension: "temperature", si_value: 310 },
  { name: "Laptop surfaces", name_singular: "Laptop surface", dimension: "temperature", si_value: 340 },

  // Energy (J)
  { name: "Glazed donuts", name_singular: "Glazed donut", dimension: "energy", si_value: 1046000 },
  { name: "Lightning bolts", name_singular: "Lightning bolt", dimension: "energy", si_value: 1e9 },
  { name: "Open-hand slaps", name_singular: "Open-hand slap", dimension: "energy", si_value: 3240 },
  { name: "AA batteries", name_singular: "AA battery", dimension: "energy", si_value: 9360 },
  { name: "Farts", name_singular: "Fart", dimension: "energy", si_value: 0.5 },
  { name: "Sneezes", name_singular: "Sneeze", dimension: "energy", si_value: 1.0 },
  { name: "Dropped phones", name_singular: "Dropped phone", dimension: "energy", si_value: 0.5 },
  { name: "Hand claps", name_singular: "Hand clap", dimension: "energy", si_value: 4.3 },
  { name: "Microwave seconds", name_singular: "Microwave second", dimension: "energy", si_value: 1000 },
  { name: "Toddler kicks", name_singular: "Toddler kick", dimension: "energy", si_value: 50 },

  // Force (N)
  { name: "T-Rex bites", name_singular: "T-Rex bite", dimension: "force", si_value: 35000 },
  { name: "Wet noodle flicks", name_singular: "Wet noodle flick", dimension: "force", si_value: 0.01 },
  { name: "Cat paw swipes", name_singular: "Cat paw swipe", dimension: "force", si_value: 2.0 },
  { name: "Stubbed toes", name_singular: "Stubbed toe", dimension: "force", si_value: 200 },
  { name: "High-fives", name_singular: "High-five", dimension: "force", si_value: 500 },
  { name: "Chicken nugget weights", name_singular: "Chicken nugget weight", dimension: "force", si_value: 0.2 },
  { name: "Firm handshakes", name_singular: "Firm handshake", dimension: "force", si_value: 100 },
  { name: "Mosquito landings", name_singular: "Mosquito landing", dimension: "force", si_value: 0.00001 },
  { name: "Golden retriever leans", name_singular: "Golden retriever lean", dimension: "force", si_value: 150 },

  // Pressure (Pa)
  { name: "Stiletto heels", name_singular: "Stiletto heel", dimension: "pressure", si_value: 15000000 },
  { name: "Lap dog pressures", name_singular: "Lap dog pressure", dimension: "pressure", si_value: 2000 },
  { name: "Mariana Trench depths", name_singular: "Mariana Trench depth", dimension: "pressure", si_value: 108600000 },
  { name: "Cat kneads", name_singular: "Cat knead", dimension: "pressure", si_value: 3000 },
  { name: "Standard atmospheres", name_singular: "Standard atmosphere", dimension: "pressure", si_value: 101325 },

  // Power (W)
  { name: "Hamster wheels", name_singular: "Hamster wheel", dimension: "power", si_value: 0.5 },
  { name: "Christmas tree light bulbs", name_singular: "Christmas tree light bulb", dimension: "power", si_value: 0.5 },
  { name: "Hair dryers", name_singular: "Hair dryer", dimension: "power", si_value: 1875 },
  { name: "Resting human bodies", name_singular: "Resting human body", dimension: "power", si_value: 80 },
  { name: "Gaming PCs", name_singular: "Gaming PC", dimension: "power", si_value: 500 },
  { name: "Actual horses", name_singular: "Actual horse", dimension: "power", si_value: 746 },
  { name: "The Sun", name_singular: "The Sun", dimension: "power", si_value: 3.846e26 },

  // Frequency (Hz)
  { name: "Resting heartbeats", name_singular: "Resting heartbeat", dimension: "frequency", si_value: 1.2 },
  { name: "Toddler questions", name_singular: "Toddler question", dimension: "frequency", si_value: 0.1 },
  { name: "Mosquito wingbeats", name_singular: "Mosquito wingbeat", dimension: "frequency", si_value: 600 },
  { name: "Hummingbird wingbeats", name_singular: "Hummingbird wingbeat", dimension: "frequency", si_value: 53 },
  { name: "Cat purrs", name_singular: "Cat purr", dimension: "frequency", si_value: 25 },
  { name: "Phone checks", name_singular: "Phone check", dimension: "frequency", si_value: 0.0011 },

  // Data (bytes)
  { name: "Floppy disks", name_singular: "Floppy disk", dimension: "data", si_value: 1440000 },
  { name: "Tweets", name_singular: "Tweet", dimension: "data", si_value: 280 },
  { name: "Pages of War and Peace", name_singular: "Page of War and Peace", dimension: "data", si_value: 3500 },
  { name: "Copies of the Bee Movie script", name_singular: "Copy of the Bee Movie script", dimension: "data", si_value: 73000 },
  { name: "Seconds of 4K Netflix", name_singular: "Second of 4K Netflix", dimension: "data", si_value: 1875000 },
  { name: "Entire Shrek DVDs", name_singular: "Entire Shrek DVD", dimension: "data", si_value: 4700000000 },
  { name: "Smartphone photos", name_singular: "Smartphone photo", dimension: "data", si_value: 4000000 },
  { name: "Human brain capacities", name_singular: "Human brain capacity", dimension: "data", si_value: 2.5e15 },
];

// ── Merge and deduplicate silly units by name ─────────────────────────────

const allSillyUnitsRaw = [...originalSillyUnits, ...extraUnits1, ...extraUnits2, ...extraUnits3, ...extraUnits4, ...extraUnits5, ...extraUnits6, ...extraUnits7, ...extraUnits8, ...extraUnits9, ...extraUnits10, ...extraUnits11, ...extraUnits12, ...extraUnits13, ...extraUnits14, ...extraUnits15, ...extraUnits16];
const sillyUnitsMap = new Map<string, (typeof originalSillyUnits)[0]>();
for (const unit of allSillyUnitsRaw) {
  if (!sillyUnitsMap.has(unit.name)) {
    sillyUnitsMap.set(unit.name, unit);
  }
}
const sillyUnitsData = Array.from(sillyUnitsMap.values());

// ── Categories (comprehensive, 32 total) ─────────────────────────────────

const categoriesData = [
  { id: "marine-life", name: "Marine Life", description: "Creatures of the deep blue sea, from the tiniest plankton to the mightiest whales.", sort_order: 1 },
  { id: "large-land-animals", name: "Large Land Animals", description: "The heavyweights of the animal kingdom that roam the earth's surface.", sort_order: 2 },
  { id: "small-animals", name: "Small Animals", description: "The petite members of the animal kingdom, from pocket-sized pets to backyard birds.", sort_order: 3 },
  { id: "insects", name: "Insects & Arachnids", description: "The six- and eight-legged creatures that outnumber us in every conceivable way.", sort_order: 4 },
  { id: "dinosaurs", name: "Dinosaurs & Extinct Animals", description: "Prehistoric beasts that once ruled the planet, measured for modern comparison.", sort_order: 5 },
  { id: "plants", name: "Plants", description: "The silent giants and crafty carnivores of the botanical world, measured root to tip.", sort_order: 6 },
  { id: "microscopic", name: "Microscopic Life", description: "Life at the edge of visibility, where a millimeter feels like a marathon.", sort_order: 7 },
  { id: "towers", name: "Towers & Skyscrapers", description: "Humanity's tallest architectural achievements, stretching ever closer to the clouds.", sort_order: 8 },
  { id: "ancient-structures", name: "Ancient Structures", description: "Monumental constructions from antiquity that still inspire awe thousands of years later.", sort_order: 9 },
  { id: "bridges", name: "Bridges & Tunnels", description: "Engineering marvels that span gaps and connect communities across impossible distances.", sort_order: 10 },
  { id: "stadiums", name: "Stadiums", description: "The colossal arenas where humanity gathers to scream at people chasing balls.", sort_order: 11 },
  { id: "statues", name: "Statues & Monuments", description: "Giant sculptures and carved monuments that prove humans love building really big versions of themselves.", sort_order: 12 },
  { id: "everyday-places", name: "Everyday Places", description: "The buildings and spaces you walk through daily without ever wondering how many bananas they are.", sort_order: 13 },
  { id: "cars", name: "Cars & Road Vehicles", description: "From daily commuters to monster machines, the vehicles that rule the road.", sort_order: 14 },
  { id: "aircraft", name: "Aircraft", description: "Flying machines from propeller planes to jumbo jets and beyond.", sort_order: 15 },
  { id: "ships", name: "Ships & Boats", description: "Vessels that traverse oceans, rivers, and lakes, from tiny kayaks to colossal carriers.", sort_order: 16 },
  { id: "trains", name: "Trains & Rail", description: "Rail-bound machines that haul passengers and freight at remarkable speeds across continents.", sort_order: 17 },
  { id: "spacecraft", name: "Spacecraft", description: "Vehicles designed to escape Earth's gravity and explore the cosmos.", sort_order: 18 },
  { id: "planets", name: "Planets", description: "The worlds that orbit our Sun, from scorching Mercury to frigid Pluto and everything in between.", sort_order: 19 },
  { id: "stars", name: "Stars", description: "Celestial furnaces that light up the universe with unimaginable power.", sort_order: 20 },
  { id: "moons", name: "Moons", description: "Natural satellites that orbit the planets of our solar system, each with its own unique character.", sort_order: 21 },
  { id: "space-other", name: "Deep Space", description: "Black holes, galaxies, comets, asteroids, and other cosmic oddities that defy everyday comprehension.", sort_order: 22 },
  { id: "mountains", name: "Mountains", description: "The great peaks of the world, measured and compared.", sort_order: 23 },
  { id: "volcanoes", name: "Volcanoes", description: "Fire-breathing geological features, from dormant giants to explosive legends.", sort_order: 24 },
  { id: "water", name: "Water", description: "Oceans, lakes, rivers, and waterfalls that shape the planet.", sort_order: 25 },
  { id: "landforms", name: "Landforms", description: "Deserts, canyons, caves, reefs, and other large-scale terrain features.", sort_order: 26 },
  { id: "food", name: "Food & Drinks", description: "From single grains of rice to kegs of beer -- the edible (and drinkable) world, measured and weighed.", sort_order: 27 },
  { id: "human-body", name: "The Human Body", description: "The astonishing machine you walk around in every day, broken down into its measurable parts.", sort_order: 28 },
  { id: "everyday-objects", name: "Everyday Objects", description: "The familiar things we use, sit on, throw, and occasionally step on in the dark.", sort_order: 29 },
  { id: "sports", name: "Sports", description: "Athletic feats, records, and the equipment that makes them possible.", sort_order: 30 },
  { id: "events", name: "Events & Phenomena", description: "The awe-inspiring, terrifying, and explosive events that shape our planet and universe.", sort_order: 31 },
  { id: "conceptual", name: "Collective & Conceptual", description: "Mind-bending totals and aggregates that put humanity, nature, and civilization into perspective.", sort_order: 32 },
  ...catsExtra5,
  ...catsExtra6,
  ...catsExtra7,
  ...catsExtra10,
  ...catsExtra11,
  ...catsExtra12,
];

// ── Original things (from seed.ts) ────────────────────────────────────────

const originalThingsData: ThingInput[] = [
  {
    slug: "blue-whale",
    name: "Blue Whale",
    subtitle: "The largest animal ever to have lived on Earth",
    category_id: "marine-life",
    description: "The blue whale (Balaenoptera musculus) is the largest animal known to have ever existed, reaching lengths of nearly 30 meters and masses of 150 metric tons. Their hearts are the size of a small car, and their tongues alone weigh as much as an elephant.",
    search_terms: "whale|balaenoptera|largest animal|ocean giant",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 29.9, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 150000, si_unit: "kg" },
      { dimension: "frequency", label: "Heart rate", value: 0.1, si_unit: "Hz", note: "At the surface; drops to ~2 bpm during dives" },
      { dimension: "mass", label: "Tongue mass", value: 2700, si_unit: "kg" },
      { dimension: "length", label: "Maximum dive depth", value: 500, si_unit: "m" },
      { dimension: "mass", label: "Daily food intake", value: 3600, si_unit: "kg", note: "Mostly krill" },
    ],
  },
  {
    slug: "burj-khalifa",
    name: "Burj Khalifa",
    subtitle: "The tallest building in the world since 2010",
    category_id: "towers",
    description: "Standing at 828 meters in Dubai, UAE, the Burj Khalifa is the tallest structure and building ever constructed. It has 163 floors, 57 elevators, and took approximately 22 million person-hours to build.",
    search_terms: "dubai|tallest building|skyscraper|uae",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 828, si_unit: "m" },
      { dimension: "mass", label: "Total mass", value: 500000000, si_unit: "kg" },
      { dimension: "speed", label: "Elevator speed", value: 10, si_unit: "m/s" },
    ],
  },
  {
    slug: "boeing-747",
    name: "Boeing 747",
    subtitle: "The iconic Queen of the Skies",
    category_id: "aircraft",
    description: "The Boeing 747 revolutionized air travel when it first flew in 1969. Known as the 'Queen of the Skies,' this wide-body commercial airliner was the first airplane dubbed a 'jumbo jet' and held the passenger capacity record for 37 years.",
    search_terms: "747|jumbo jet|queen of the skies|airplane|plane",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Wingspan", value: 64.4, si_unit: "m" },
      { dimension: "length", label: "Fuselage length", value: 70.7, si_unit: "m" },
      { dimension: "mass", label: "Empty mass", value: 183500, si_unit: "kg" },
      { dimension: "speed", label: "Maximum speed", value: 270, si_unit: "m/s", note: "Mach 0.92" },
      { dimension: "length", label: "Range", value: 13450000, si_unit: "m" },
      { dimension: "volume", label: "Fuel capacity", value: 216.84, si_unit: "m\u00b3", note: "216,840 liters converted to cubic meters" },
    ],
  },
  {
    slug: "tyrannosaurus-rex",
    name: "Tyrannosaurus Rex",
    subtitle: "The king of the tyrant lizards",
    category_id: "dinosaurs",
    description: "Tyrannosaurus rex lived approximately 68 to 66 million years ago during the late Cretaceous period. One of the largest land predators ever, T-Rex had a bite force strong enough to crush bone and teeth the size of bananas.",
    search_terms: "t-rex|trex|dinosaur|tyrant lizard|cretaceous",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Body length", value: 12, si_unit: "m" },
      { dimension: "mass", label: "Body mass", value: 8000, si_unit: "kg" },
      { dimension: "force", label: "Bite force", value: 35000, si_unit: "N" },
      { dimension: "length", label: "Hip height", value: 3.7, si_unit: "m" },
      { dimension: "speed", label: "Top speed", value: 8.3, si_unit: "m/s", note: "Estimated; debated among paleontologists" },
    ],
  },
  {
    slug: "the-sun",
    name: "The Sun",
    subtitle: "Our local star, a G-type main-sequence ball of plasma",
    category_id: "stars",
    description: "The Sun is the star at the center of our Solar System. It accounts for about 99.86% of the total mass of the Solar System. Approximately 1.3 million Earths could fit inside it.",
    search_terms: "sun|solar|star|sol",
    featured: 1,
    measurements: [
      { dimension: "mass", label: "Mass", value: 1.989e30, si_unit: "kg" },
      { dimension: "length", label: "Diameter", value: 1.3927e9, si_unit: "m" },
      { dimension: "temperature", label: "Surface temperature", value: 5778, si_unit: "K" },
      { dimension: "power", label: "Luminosity", value: 3.846e26, si_unit: "W" },
    ],
  },
  {
    slug: "great-pyramid-of-giza",
    name: "Great Pyramid of Giza",
    subtitle: "The oldest of the Seven Wonders of the Ancient World",
    category_id: "ancient-structures",
    description: "Built around 2560 BCE as a tomb for Pharaoh Khufu, the Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years. It consists of an estimated 2.3 million stone blocks, each weighing an average of 2.5 tonnes.",
    search_terms: "pyramid|giza|khufu|cheops|egypt|seven wonders",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Original height", value: 146.6, si_unit: "m" },
      { dimension: "length", label: "Base length", value: 230.4, si_unit: "m" },
      { dimension: "mass", label: "Estimated mass", value: 6000000000, si_unit: "kg" },
      { dimension: "area", label: "Base area", value: 53000, si_unit: "m\u00b2" },
    ],
  },
  {
    slug: "saturn-v",
    name: "Saturn V",
    subtitle: "The rocket that took humanity to the Moon",
    category_id: "spacecraft",
    description: "The Saturn V was a super heavy-lift launch vehicle developed by NASA for the Apollo program. It remains the tallest, heaviest, and most powerful rocket ever brought to operational status, and holds records for the heaviest payload launched.",
    search_terms: "saturn 5|rocket|apollo|nasa|moon rocket",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height", value: 110.6, si_unit: "m" },
      { dimension: "mass", label: "Fully fueled mass", value: 2970000, si_unit: "kg" },
      { dimension: "force", label: "First stage thrust", value: 35100000, si_unit: "N" },
      { dimension: "mass", label: "Payload to LEO", value: 130000, si_unit: "kg" },
    ],
  },
  {
    slug: "usain-bolt-100m",
    name: "Usain Bolt 100m",
    subtitle: "The fastest 100 meters ever recorded by a human",
    category_id: "sports",
    description: "On August 16, 2009, at the World Championships in Berlin, Usain Bolt set the world record for the 100-meter dash at 9.58 seconds. His top speed during the race was approximately 12.27 m/s (44.17 km/h).",
    search_terms: "usain bolt|100m|sprint|world record|fastest man",
    featured: 0,
    measurements: [
      { dimension: "length", label: "Race distance", value: 100, si_unit: "m" },
      { dimension: "time", label: "Finishing time", value: 9.58, si_unit: "s" },
      { dimension: "speed", label: "Top speed", value: 12.27, si_unit: "m/s" },
      { dimension: "speed", label: "Average speed", value: 10.44, si_unit: "m/s" },
    ],
  },
  {
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    subtitle: "Apple's 2023 flagship smartphone",
    category_id: "everyday-objects",
    description: "The iPhone 15 Pro features a titanium design, A17 Pro chip, and a 6.1-inch Super Retina XDR display. It's one of the most ubiquitous objects in the modern world, making it an excellent reference for everyday measurements.",
    search_terms: "iphone|apple|phone|smartphone|mobile",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 0.187, si_unit: "kg" },
      { dimension: "length", label: "Height", value: 0.1463, si_unit: "m" },
      { dimension: "length", label: "Width", value: 0.0706, si_unit: "m" },
      { dimension: "length", label: "Thickness", value: 0.0083, si_unit: "m" },
      { dimension: "area", label: "Screen area", value: 0.01, si_unit: "m\u00b2" },
    ],
  },
  {
    slug: "big-mac",
    name: "Big Mac",
    subtitle: "McDonald's iconic double-decker burger",
    category_id: "food",
    description: "The Big Mac is one of the world's most recognizable fast-food items, sold in over 100 countries. Created in 1967 by Jim Delligatti, a McDonald's franchisee, it features two beef patties, special sauce, lettuce, cheese, pickles, and onions on a sesame seed bun.",
    search_terms: "big mac|mcdonalds|burger|hamburger|fast food",
    featured: 0,
    measurements: [
      { dimension: "mass", label: "Mass", value: 0.215, si_unit: "kg" },
      { dimension: "energy", label: "Energy content", value: 2390000, si_unit: "J", note: "About 563 kilocalories" },
      { dimension: "length", label: "Height", value: 0.07, si_unit: "m" },
      { dimension: "length", label: "Diameter", value: 0.1, si_unit: "m" },
    ],
  },
  {
    slug: "eiffel-tower",
    name: "Eiffel Tower",
    subtitle: "The iron lady of Paris",
    category_id: "towers",
    description: "The Eiffel Tower, built for the 1889 World's Fair, was originally intended to stand for just 20 years. It was the world's tallest man-made structure for 41 years until the Chrysler Building was completed in New York. It is held together by 2.5 million rivets.",
    search_terms: "eiffel|paris|france|iron tower|tour eiffel",
    featured: 1,
    measurements: [
      { dimension: "length", label: "Height (with antenna)", value: 330, si_unit: "m" },
      { dimension: "mass", label: "Iron mass", value: 7300000, si_unit: "kg" },
      { dimension: "area", label: "Base area", value: 10000, si_unit: "m\u00b2" },
    ],
  },
];

// ── Merge all things, deduplicated by slug (originals take priority) ──────

const allThingsRaw: ThingInput[] = [
  ...originalThingsData,
  ...animalsLarge,
  ...animalsSmall,
  ...landmarksThings,
  ...vehiclesThings,
  ...spaceThings,
  ...earthThings,
  ...foodBodyThings,
  ...objectsEventsThings,
  ...thingsExtra1,
  ...thingsExtra2,
  ...thingsExtra3,
  ...thingsExtra4,
  ...thingsExtra5,
  ...thingsExtra6,
  ...thingsExtra7,
  ...thingsExtra8,
  ...thingsExtra9,
  ...thingsExtra10,
  ...thingsExtra11,
  ...thingsExtra12,
  ...thingsExtra13,
];

const thingsMap = new Map<string, ThingInput>();
for (const thing of allThingsRaw) {
  if (!thingsMap.has(thing.slug)) {
    thingsMap.set(thing.slug, thing);
  }
}
const thingsData: ThingInput[] = Array.from(thingsMap.values());

// ── Set featured flags for diverse homepage selection (~15 items) ─────────
// Clear all featured flags first, then set specific ones for variety

const featuredSlugs = new Set([
  // Marine life
  "blue-whale",
  "great-white-shark",
  // Large land animals
  "african-elephant",
  "giraffe",
  // Small / insects / dinosaurs
  "tyrannosaurus-rex",
  "goliath-birdeater-spider",
  // Landmarks
  "burj-khalifa",
  "eiffel-tower",
  "golden-gate-bridge",
  // Vehicles
  "toyota-corolla",
  "boeing-747",
  // Space
  "saturn-v",
  "the-sun",
  // Earth
  "mount-everest",
  // Food / body
  "costco-pizza-slice",
]);

for (const thing of thingsData) {
  thing.featured = featuredSlugs.has(thing.slug) ? 1 : 0;
}

// ── Insert everything ─────────────────────────────────────────────────────

console.log("Seeding database...");

// Insert silly units
const insertUnit = sqlite.prepare(
  "INSERT INTO silly_units (id, name, name_singular, dimension, si_value) VALUES (?, ?, ?, ?, ?)"
);
const insertUnitsTransaction = sqlite.transaction(() => {
  for (const unit of sillyUnitsData) {
    insertUnit.run(randomUUID(), unit.name, unit.name_singular, unit.dimension, unit.si_value);
  }
});
insertUnitsTransaction();
console.log(`  Inserted ${sillyUnitsData.length} silly units`);

// Insert categories
const insertCategory = sqlite.prepare(
  "INSERT INTO categories (id, name, description, sort_order) VALUES (?, ?, ?, ?)"
);
const insertCategoriesTransaction = sqlite.transaction(() => {
  for (const cat of categoriesData) {
    insertCategory.run(cat.id, cat.name, cat.description, cat.sort_order);
  }
});
insertCategoriesTransaction();
console.log(`  Inserted ${categoriesData.length} categories`);

// Insert things and measurements
const insertThing = sqlite.prepare(
  "INSERT INTO things (id, slug, name, subtitle, category_id, description, image_id, image_credit, search_terms, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
);
const insertMeasurement = sqlite.prepare(
  "INSERT INTO measurements (id, thing_id, dimension, label, value, si_unit, display_order, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);

let totalMeasurements = 0;
const insertThingsTransaction = sqlite.transaction(() => {
  for (const thing of thingsData) {
    const thingId = randomUUID();
    insertThing.run(
      thingId,
      thing.slug,
      thing.name,
      thing.subtitle,
      thing.category_id,
      thing.description,
      null,
      null,
      thing.search_terms,
      thing.featured
    );

    thing.measurements.forEach((m, index) => {
      insertMeasurement.run(
        randomUUID(),
        thingId,
        m.dimension,
        m.label,
        m.value,
        m.si_unit,
        index + 1,
        m.note ?? null
      );
      totalMeasurements++;
    });
  }
});
insertThingsTransaction();
console.log(`  Inserted ${thingsData.length} things with ${totalMeasurements} measurements`);

console.log("Seed complete!");
sqlite.close();
