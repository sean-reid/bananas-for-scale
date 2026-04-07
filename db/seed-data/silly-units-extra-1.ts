export const sillyUnitsData: {
  name: string;          // plural form used when count > 1
  name_singular: string; // singular form
  dimension: string;     // must match: length|mass|time|volume|area|speed|temperature|energy|force|pressure|power|frequency
  si_value: number;      // the real SI value
}[] = [
  // =========================================================================
  // LENGTH (m) - 15 units
  // =========================================================================

  // ~0.00001 m (10 microns) - diameter of a red blood cell
  { name: "Red blood cells", name_singular: "Red blood cell", dimension: "length", si_value: 0.000008 },

  // ~0.0002 m - grain of table salt edge length
  { name: "Grains of salt", name_singular: "Grain of salt", dimension: "length", si_value: 0.0003 },

  // ~0.019 m - Lego brick width (1 stud)
  { name: "Lego studs", name_singular: "Lego stud", dimension: "length", si_value: 0.008 },

  // ~0.045 m - a golf ball diameter
  { name: "Golf ball diameters", name_singular: "Golf ball diameter", dimension: "length", si_value: 0.0427 },

  // ~0.1 m - a hamster body length
  { name: "No. 2 pencils", name_singular: "No. 2 pencil", dimension: "length", si_value: 0.19 },

  // ~0.38 m - length of an adult human forearm (elbow to fingertip, a cubit)
  { name: "Human forearms", name_singular: "Human forearm", dimension: "length", si_value: 0.52 },

  // ~0.97 m - a baseball bat
  { name: "Baseball bats", name_singular: "Baseball bat", dimension: "length", si_value: 1.067 },

  // ~1.7 m - Dolly Parton's height
  { name: "Dolly Partons", name_singular: "Dolly Parton", dimension: "length", si_value: 1.52 },

  // ~3.4 m - an adult male African elephant shoulder height
  { name: "African elephant heights", name_singular: "African elephant height", dimension: "length", si_value: 3.3 },

  // ~16.5 m - bowling lane length
  { name: "Bowling lanes", name_singular: "Bowling lane", dimension: "length", si_value: 18.29 },

  // ~52 m - Leaning Tower of Pisa height
  { name: "Leaning Towers of Pisa", name_singular: "Leaning Tower of Pisa", dimension: "length", si_value: 56.67 },

  // ~443 m - Empire State Building roof height
  { name: "Empire State Buildings", name_singular: "Empire State Building", dimension: "length", si_value: 443.2 },

  // ~8849 m - Mount Everest
  { name: "Mount Everests", name_singular: "Mount Everest", dimension: "length", si_value: 8849.0 },

  // ~42195 m - a marathon
  { name: "Marathon distances", name_singular: "Marathon distance", dimension: "length", si_value: 42195.0 },

  // ~384400 km - Earth to Moon
  { name: "Earth-to-Moon distances", name_singular: "Earth-to-Moon distance", dimension: "length", si_value: 384400000.0 },

  // =========================================================================
  // MASS (kg) - 15 units
  // =========================================================================

  // ~6e-8 kg - mass of a single eyelash (~62 micrograms)
  { name: "Eyelashes", name_singular: "Eyelash", dimension: "mass", si_value: 0.000000062 },

  // ~0.00091 kg - a single M&M candy (~0.91 grams)
  { name: "M&Ms", name_singular: "M&M", dimension: "mass", si_value: 0.00091 },

  // ~0.005 kg - a US nickel coin
  { name: "US nickels", name_singular: "US nickel", dimension: "mass", si_value: 0.005 },

  // ~0.046 kg - a golf ball
  { name: "Golf balls", name_singular: "Golf ball", dimension: "mass", si_value: 0.0459 },

  // ~0.14 kg - a well-fed Syrian hamster
  { name: "Syrian hamsters", name_singular: "Syrian hamster", dimension: "mass", si_value: 0.14 },

  // ~1 kg - a Chipotle bowl
  { name: "Chipotle bowls", name_singular: "Chipotle bowl", dimension: "mass", si_value: 0.85 },

  // ~9 kg - a standard house brick
  { name: "House bricks", name_singular: "House brick", dimension: "mass", si_value: 3.1 },

  // ~70 kg - Keanu Reeves
  { name: "Keanu Reeveses", name_singular: "Keanu Reeves", dimension: "mass", si_value: 75.0 },

  // ~180 kg - a baby grand piano
  { name: "Male gorillas", name_singular: "Male gorilla", dimension: "mass", si_value: 180.0 },

  // ~1500 kg - a dairy cow
  { name: "Dairy cows", name_singular: "Dairy cow", dimension: "mass", si_value: 680.0 },

  // ~4000 kg - an adult hippo
  { name: "Hippopotamuses", name_singular: "Hippopotamus", dimension: "mass", si_value: 1800.0 },

  // ~5000 kg - an adult African elephant
  { name: "African elephants", name_singular: "African elephant", dimension: "mass", si_value: 6000.0 },

  // ~14000 kg - a school bus (loaded)
  { name: "School buses", name_singular: "School bus", dimension: "mass", si_value: 14500.0 },

  // ~52163 kg - a Boeing 737 (empty)
  { name: "Boeing 737s", name_singular: "Boeing 737", dimension: "mass", si_value: 41413.0 },

  // ~6e9 kg - Great Pyramid of Giza
  { name: "Great Pyramids of Giza", name_singular: "Great Pyramid of Giza", dimension: "mass", si_value: 6000000000.0 },

  // =========================================================================
  // TIME (s) - 15 units
  // =========================================================================

  // ~1e-9 s - one CPU clock cycle at 1 GHz
  { name: "CPU clock cycles", name_singular: "CPU clock cycle", dimension: "time", si_value: 1e-9 },

  // ~0.001 s - a camera flash
  { name: "Camera flash durations", name_singular: "Camera flash duration", dimension: "time", si_value: 0.001 },

  // ~0.01 s - a single frame of film at 24fps
  { name: "Film frames", name_singular: "Film frame", dimension: "time", si_value: 0.04167 },

  // ~0.2 s - a housefly wingbeat period
  { name: "Housefly wingbeats", name_singular: "Housefly wingbeat", dimension: "time", si_value: 0.005 },

  // ~2 s - time to say "Mississippi"
  { name: "Mississippis", name_singular: "Mississippi", dimension: "time", si_value: 1.0 },

  // ~6 s - average time between breaths
  { name: "Breaths", name_singular: "Breath", dimension: "time", si_value: 6.0 },

  // ~22 s - average time to pee (mammals)
  { name: "Mammal pees", name_singular: "Mammal pee", dimension: "time", si_value: 21.0 },

  // ~210 s - Bohemian Rhapsody runtime
  { name: "Bohemian Rhapsodies", name_singular: "Bohemian Rhapsody", dimension: "time", si_value: 355.0 },

  // ~480 s - average shower
  { name: "Showers", name_singular: "Shower", dimension: "time", si_value: 480.0 },

  // ~12432 s - one Lord of the Rings extended film (~3 hrs 27 min, Return of the King)
  { name: "LOTR extended editions", name_singular: "LOTR extended edition", dimension: "time", si_value: 12432.0 },

  // ~28800 s - a standard work day
  { name: "Workdays", name_singular: "Workday", dimension: "time", si_value: 28800.0 },

  // ~2592000 s - 30 days (the old Netflix free trial)
  { name: "Calendar months", name_singular: "Calendar month", dimension: "time", si_value: 2592000.0 },

  // ~31557600 s - one Julian year
  { name: "Earth years", name_singular: "Earth year", dimension: "time", si_value: 31557600.0 },

  // ~2.2e9 s - Queen Elizabeth II's reign (~70.6 years, 1952-2022)
  { name: "Queen Elizabeth II reigns", name_singular: "Queen Elizabeth II reign", dimension: "time", si_value: 2.228e9 },

  // ~2.08e15 s - time since the dinosaurs went extinct (~66 million years)
  { name: "Dinosaur extinctions ago", name_singular: "Dinosaur extinction ago", dimension: "time", si_value: 2.08e15 },

  // =========================================================================
  // VOLUME (m3) - 15 units
  // =========================================================================

  // ~5e-8 m3 - a single raindrop (~0.05 mL)
  { name: "Raindrops", name_singular: "Raindrop", dimension: "volume", si_value: 5e-8 },

  // ~6.5e-6 m3 - an eyeball (~6.5 mL)
  { name: "Human eyeballs", name_singular: "Human eyeball", dimension: "volume", si_value: 0.0000065 },

  // ~3.55e-4 m3 - a standard soda can (355 mL)
  { name: "Cans of Coke", name_singular: "Can of Coke", dimension: "volume", si_value: 0.000355 },

  // ~7.5e-4 m3 - a standard wine bottle
  { name: "Bottles of wine", name_singular: "Bottle of wine", dimension: "volume", si_value: 0.00075 },

  // ~0.028 m3 - a standard microwave interior (~28 liters)
  { name: "Microwave ovens", name_singular: "Microwave oven", dimension: "volume", si_value: 0.028 },

  // ~0.01 m3 - a large watermelon
  { name: "Large watermelons", name_singular: "Large watermelon", dimension: "volume", si_value: 0.03 },

  // ~0.028 m3 - a standard carry-on suitcase
  { name: "Carry-on suitcases", name_singular: "Carry-on suitcase", dimension: "volume", si_value: 0.04 },

  // ~0.1 m3 - a standard kitchen trash can
  { name: "Kitchen trash cans", name_singular: "Kitchen trash can", dimension: "volume", si_value: 0.05 },

  // ~0.07 m3 - volume of an adult human body (~70 liters)
  { name: "Human body volumes", name_singular: "Human body volume", dimension: "volume", si_value: 0.07 },

  // ~2.8 m3 - interior of a porta-potty
  { name: "Porta-potties", name_singular: "Porta-potty", dimension: "volume", si_value: 1.13 },

  // ~11.33 m3 - a standard 20-foot shipping container
  { name: "20-foot shipping containers", name_singular: "20-foot shipping container", dimension: "volume", si_value: 33.2 },

  // ~130 m3 - an average American living room
  { name: "Living rooms", name_singular: "Living room", dimension: "volume", si_value: 42.0 },

  // ~2500 m3 - a Goodyear blimp
  { name: "Goodyear blimps", name_singular: "Goodyear blimp", dimension: "volume", si_value: 5740.0 },

  // ~10000 m3 - the Hindenburg
  { name: "Hindenburgs", name_singular: "Hindenburg", dimension: "volume", si_value: 200000.0 },

  // ~2.5e9 m3 - Sydney Harbour
  { name: "Sydney Harbours", name_singular: "Sydney Harbour", dimension: "volume", si_value: 562000000.0 },

  // =========================================================================
  // AREA (m2) - 15 units
  // =========================================================================

  // ~0.00003 m2 - a human fingernail
  { name: "Human thumbnails", name_singular: "Human thumbnail", dimension: "area", si_value: 0.00015 },

  // ~0.001 m2 - a credit card
  { name: "Credit cards", name_singular: "Credit card", dimension: "area", si_value: 0.0046 },

  // ~0.006 m2 - a dollar bill
  { name: "US dollar bills", name_singular: "US dollar bill", dimension: "area", si_value: 0.01035 },

  // ~0.04 m2 - a standard iPad screen
  { name: "iPad screens", name_singular: "iPad screen", dimension: "area", si_value: 0.047 },

  // ~0.42 m2 - a standard toilet seat
  { name: "Toilet seats", name_singular: "Toilet seat", dimension: "area", si_value: 0.065 },

  // ~1.7 m2 - average adult human skin surface area
  { name: "Human skin surfaces", name_singular: "Human skin surface", dimension: "area", si_value: 1.7 },

  // ~9.3 m2 - a 10x10 foot room (tiny NYC studio)
  { name: "Studio apartments", name_singular: "Studio apartment", dimension: "area", si_value: 27.87 },

  // ~46 m2 - a standard basketball half-court
  { name: "Trampolines", name_singular: "Trampoline", dimension: "area", si_value: 10.5 },

  // ~200 m2 - average American house floor area
  { name: "American houses", name_singular: "American house", dimension: "area", si_value: 195.0 },

  // ~7140 m2 - a FIFA regulation soccer pitch
  { name: "FIFA soccer pitches", name_singular: "FIFA soccer pitch", dimension: "area", si_value: 7140.0 },

  // ~17000 m2 - the White House floor area
  { name: "White Houses", name_singular: "White House", dimension: "area", si_value: 5110.0 },

  // ~53000 m2 - the Roman Colosseum arena floor
  { name: "Costco stores", name_singular: "Costco store", dimension: "area", si_value: 13935.0 },

  // ~180000 m2 - Vatican City
  { name: "Vatican Cities", name_singular: "Vatican City", dimension: "area", si_value: 440000.0 },

  // ~2.59e6 m2 - one square mile (Central Park)
  { name: "Central Parks", name_singular: "Central Park", dimension: "area", si_value: 3410000.0 },

  // ~2.724e13 m2 - entire surface area of Pluto
  { name: "Pluto surfaces", name_singular: "Pluto surface", dimension: "area", si_value: 1.779e13 },

  // =========================================================================
  // SPEED (m/s) - 15 units
  // =========================================================================

  // ~3e-10 m/s - fingernail growth rate
  { name: "Fingernail growths", name_singular: "Fingernail growth", dimension: "speed", si_value: 1.2e-9 },

  // ~1.4e-5 m/s - bamboo growing
  { name: "Bamboo growths", name_singular: "Bamboo growth", dimension: "speed", si_value: 0.0000115 },

  // ~0.013 m/s - a tortoise walking
  { name: "Galapagos tortoises", name_singular: "Galapagos tortoise", dimension: "speed", si_value: 0.076 },

  // ~0.22 m/s - a human crawling
  { name: "Crawling babies", name_singular: "Crawling baby", dimension: "speed", si_value: 0.33 },

  // ~1.3 m/s - average human walking speed
  { name: "Walking humans", name_singular: "Walking human", dimension: "speed", si_value: 0.89 },

  // ~2.4 m/s - a chicken running
  { name: "Running chickens", name_singular: "Running chicken", dimension: "speed", si_value: 4.0 },

  // ~12.5 m/s - a charging grizzly bear
  { name: "Charging grizzly bears", name_singular: "Charging grizzly bear", dimension: "speed", si_value: 15.6 },

  // ~47 m/s - the fastest pitch in baseball (~105 mph)
  { name: "MLB fastballs", name_singular: "MLB fastball", dimension: "speed", si_value: 46.7 },

  // ~31 m/s - a cheetah at full speed (~112 km/h)
  { name: "Cheetahs", name_singular: "Cheetah", dimension: "speed", si_value: 31.1 },

  // ~70 m/s - a peregrine falcon in a stoop
  { name: "Peregrine falcons", name_singular: "Peregrine falcon", dimension: "speed", si_value: 108.0 },

  // ~250 m/s - a bullet from a 9mm handgun
  { name: "9mm bullets", name_singular: "9mm bullet", dimension: "speed", si_value: 370.0 },

  // ~343 m/s - speed of sound
  { name: "Speeds of sound", name_singular: "Speed of sound", dimension: "speed", si_value: 343.0 },

  // ~11186 m/s - Earth escape velocity
  { name: "Earth escape velocities", name_singular: "Earth escape velocity", dimension: "speed", si_value: 11186.0 },

  // ~200000 m/s - solar wind speed
  { name: "Solar winds", name_singular: "Solar wind", dimension: "speed", si_value: 400000.0 },

  // ~2998000 m/s - 1% of the speed of light
  { name: "Percent light speeds", name_singular: "Percent light speed", dimension: "speed", si_value: 2998000.0 },
];
