export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Pressure (Pa) ─── 6 units ──────────────────────────────────────────────

  // Atmospheric pressure on Mars surface ~610 Pa
  { name: "Mars atmospheres", name_singular: "Mars atmosphere", dimension: "pressure", si_value: 610 },
  // Suction of a household vacuum cleaner ~20,000 Pa
  { name: "Vacuum cleaners", name_singular: "Vacuum cleaner", dimension: "pressure", si_value: 20000 },
  // Pressure inside a party balloon ~110,000 Pa (slightly above atmospheric)
  { name: "Party balloons", name_singular: "Party balloon", dimension: "pressure", si_value: 110000 },
  // Scuba tank ~20 MPa (200 bar)
  { name: "Full scuba tanks", name_singular: "Full scuba tank", dimension: "pressure", si_value: 20000000 },
  // Popcorn kernel pop pressure ~930,000 Pa
  { name: "Popcorn kernels", name_singular: "Popcorn kernel", dimension: "pressure", si_value: 930000 },
  // Water pressure from a garden hose nozzle ~300,000 Pa
  { name: "Garden hoses", name_singular: "Garden hose", dimension: "pressure", si_value: 300000 },

  // ── Frequency (Hz) ─── 5 units ─────────────────────────────────────────────

  // Average person chews food at ~1.5 Hz
  { name: "Chewing cycles", name_singular: "Chewing cycle", dimension: "frequency", si_value: 1.5 },
  // Woodpecker pecking rate ~20 Hz
  { name: "Woodpecker pecks", name_singular: "Woodpecker peck", dimension: "frequency", si_value: 20 },
  // Average disco strobe light ~10 Hz
  { name: "Strobe lights", name_singular: "Strobe light", dimension: "frequency", si_value: 10 },
  // Snoring cycle ~0.25 Hz (one snore every 4 seconds)
  { name: "Snores", name_singular: "Snore", dimension: "frequency", si_value: 0.25 },
  // Washing machine spin cycle ~16 Hz (960 RPM)
  { name: "Washing machines", name_singular: "Washing machine", dimension: "frequency", si_value: 16 },

  // ── Data (bytes) ─── 5 units ───────────────────────────────────────────────

  // Human genome ~750 MB = 750,000,000 bytes
  { name: "Human genomes", name_singular: "Human genome", dimension: "data", si_value: 750000000 },
  // A single emoji in UTF-8 ~4 bytes
  { name: "Emojis", name_singular: "Emoji", dimension: "data", si_value: 4 },
  // One hour of 4K video ~20 GB = 2e10 bytes
  { name: "Hours of 4K video", name_singular: "Hour of 4K video", dimension: "data", si_value: 2e10 },
  // Average PowerPoint presentation ~5 MB
  { name: "PowerPoint files", name_singular: "PowerPoint file", dimension: "data", si_value: 5000000 },
  // Original Apollo Guidance Computer memory = 72 KB = 73,728 bytes
  { name: "Apollo computers", name_singular: "Apollo computer", dimension: "data", si_value: 73728 },

  // ── Power (W) ─── 5 units ──────────────────────────────────────────────────

  // Human brain ~20 W
  { name: "Resting brains", name_singular: "Resting brain", dimension: "power", si_value: 20 },
  // Incandescent light bulb 60 W
  { name: "Incandescent bulbs", name_singular: "Incandescent bulb", dimension: "power", si_value: 60 },
  // Clothes dryer ~5000 W
  { name: "Clothes dryers", name_singular: "Clothes dryer", dimension: "power", si_value: 5000 },
  // Hoover Dam output ~2.08 GW
  { name: "Hoover Dams", name_singular: "Hoover Dam", dimension: "power", si_value: 2.08e9 },
  // Electric kettle ~1500 W
  { name: "Electric kettles", name_singular: "Electric kettle", dimension: "power", si_value: 1500 },

  // ── Force (N) ─── 4 units ──────────────────────────────────────────────────

  // Pulling a fridge magnet off ~3 N
  { name: "Fridge magnet pulls", name_singular: "Fridge magnet pull", dimension: "force", si_value: 3 },
  // Bald eagle talon grip ~440 N
  { name: "Bald eagle talons", name_singular: "Bald eagle talon", dimension: "force", si_value: 440 },
  // Hydraulic car jack ~20,000 N
  { name: "Car jacks", name_singular: "Car jack", dimension: "force", si_value: 20000 },
  // Average doorbell push ~5 N
  { name: "Doorbell pushes", name_singular: "Doorbell push", dimension: "force", si_value: 5 },

  // ── Temperature (K) ─── 3 units ────────────────────────────────────────────

  // Absolute hot (Planck temperature) ~1.416e32 K
  { name: "Planck temperatures", name_singular: "Planck temperature", dimension: "temperature", si_value: 1.416e32 },
  // Warm fresh bread from the oven ~80C = 353.15K
  { name: "Fresh bread loaves", name_singular: "Fresh bread loaf", dimension: "temperature", si_value: 353.15 },
  // Penguin egg incubation ~36C = 309.15K
  { name: "Penguin egg pouches", name_singular: "Penguin egg pouch", dimension: "temperature", si_value: 309.15 },

  // ── Energy (J) ─── 3 units ─────────────────────────────────────────────────

  // Popping a single kernel of popcorn ~1.5 J
  { name: "Popping kernels", name_singular: "Popping kernel", dimension: "energy", si_value: 1.5 },
  // Annual US fireworks spending in energy ~2e12 J (rough estimate of total chemical energy)
  { name: "Fireworks shows", name_singular: "Fireworks show", dimension: "energy", si_value: 2e12 },
  // Falcon 9 first stage landing burn ~1.5e9 J
  { name: "Falcon 9 landings", name_singular: "Falcon 9 landing", dimension: "energy", si_value: 1.5e9 },

  // ── Area (m2) ─── 2 units ──────────────────────────────────────────────────

  // Standard corn hole board ~0.37 m2 (2ft x 4ft)
  { name: "Cornhole boards", name_singular: "Cornhole board", dimension: "area", si_value: 0.37 },
  // Adult moose antler spread area ~1.5 m2
  { name: "Moose antlers", name_singular: "Moose antler", dimension: "area", si_value: 1.5 },

  // ── Speed (m/s) ─── 2 units ────────────────────────────────────────────────

  // Average person typing: finger movement ~0.02 m/s
  { name: "Typing fingers", name_singular: "Typing finger", dimension: "speed", si_value: 0.02 },
  // Lava flow speed ~0.003 m/s (about 10 m/hr for typical basaltic lava)
  { name: "Hawaiian lava flows", name_singular: "Hawaiian lava flow", dimension: "speed", si_value: 0.003 },

  // ── Volume (m3) ─── 2 units ────────────────────────────────────────────────

  // Average sneeze cloud ~0.006 m3
  { name: "Sneeze clouds", name_singular: "Sneeze cloud", dimension: "volume", si_value: 0.006 },
  // A standard gumball ~5.2e-6 m3 (diameter ~2.15 cm)
  { name: "Gumballs", name_singular: "Gumball", dimension: "volume", si_value: 5.2e-6 },

  // ── Length (m) ─── 1 unit ──────────────────────────────────────────────────

  // Wingspan of a California condor ~2.9 m
  { name: "Condor wingspans", name_singular: "Condor wingspan", dimension: "length", si_value: 2.9 },

  // ── Mass (kg) ─── 1 unit ───────────────────────────────────────────────────

  // A standard curling stone ~19.96 kg
  { name: "Curling stones", name_singular: "Curling stone", dimension: "mass", si_value: 19.96 },

  // ── Time (s) ─── 1 unit ────────────────────────────────────────────────────

  // Time for light to travel from the Sun to Earth ~499 s
  { name: "Light-minutes to Earth", name_singular: "Light-minute to Earth", dimension: "time", si_value: 499 },
];
