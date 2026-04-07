// Gap-filling units for extreme small scales where repetition occurs

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Length: fill 1e-11 to 1e-9 gap ────────────────────────────────────
  // Water molecule diameter ~2.75e-10m
  { name: "Water molecules", name_singular: "Water molecule", dimension: "length", si_value: 2.75e-10 },
  // Carbon atom diameter ~1.54e-10m
  { name: "Carbon atoms", name_singular: "Carbon atom", dimension: "length", si_value: 1.54e-10 },
  // Gold atom diameter ~2.88e-10m
  { name: "Gold atoms", name_singular: "Gold atom", dimension: "length", si_value: 2.88e-10 },
  // Helium atom diameter ~6.2e-11m
  { name: "Helium atoms", name_singular: "Helium atom", dimension: "length", si_value: 6.2e-11 },
  // Silicon atom diameter ~2.2e-10m
  { name: "Silicon atoms", name_singular: "Silicon atom", dimension: "length", si_value: 2.2e-10 },
  // Uranium atom ~3.5e-10m
  { name: "Uranium atoms", name_singular: "Uranium atom", dimension: "length", si_value: 3.5e-10 },
  // Visible light wavelength violet ~3.8e-7m
  { name: "Violet light wavelengths", name_singular: "Violet light wavelength", dimension: "length", si_value: 3.8e-7 },
  // Virus diameter ~1e-7m
  { name: "Viruses", name_singular: "Virus", dimension: "length", si_value: 1e-7 },
  // Nanometer 1e-9m
  { name: "Nanometers", name_singular: "Nanometer", dimension: "length", si_value: 1e-9 },
  // Transistor gate (modern chip) ~3e-9m
  { name: "Chip transistors", name_singular: "Chip transistor", dimension: "length", si_value: 3e-9 },

  // ── Mass: fill sub-microgram gap ──────────────────────────────────────
  // Proton mass ~1.67e-27kg
  { name: "Protons", name_singular: "Proton", dimension: "mass", si_value: 1.67e-27 },
  // Water molecule mass ~3e-26kg
  { name: "Water molecules (mass)", name_singular: "Water molecule (mass)", dimension: "mass", si_value: 3e-26 },
  // Bacterium mass ~1e-15kg
  { name: "Bacteria", name_singular: "Bacterium", dimension: "mass", si_value: 1e-15 },
  // Grain of pollen ~1e-8kg
  { name: "Pollen grains", name_singular: "Pollen grain", dimension: "mass", si_value: 1e-8 },
  // Mosquito ~2.5e-6kg
  { name: "Mosquitoes (mass)", name_singular: "Mosquito (mass)", dimension: "mass", si_value: 2.5e-6 },

  // ── Energy: fill sub-eV gap ───────────────────────────────────────────
  // Thermal energy at room temp kT ~4.1e-21J
  { name: "Room temperature thermals", name_singular: "Room temperature thermal", dimension: "energy", si_value: 4.1e-21 },
  // UV photon ~6e-19J
  { name: "UV photons", name_singular: "UV photon", dimension: "energy", si_value: 6e-19 },
  // X-ray photon ~2e-15J
  { name: "X-ray photons", name_singular: "X-ray photon", dimension: "energy", si_value: 2e-15 },
  // Gamma ray photon ~1e-13J
  { name: "Gamma ray photons", name_singular: "Gamma ray photon", dimension: "energy", si_value: 1e-13 },

  // ── Volume: fill sub-microliter gap ───────────────────────────────────
  // Red blood cell volume ~9e-17m³
  { name: "Red blood cells (volume)", name_singular: "Red blood cell (volume)", dimension: "volume", si_value: 9e-17 },
  // Human cell volume ~4e-15m³
  { name: "Human cells (volume)", name_singular: "Human cell (volume)", dimension: "volume", si_value: 4e-15 },
  // Grain of sand volume ~1e-11m³
  { name: "Grains of sand (volume)", name_singular: "Grain of sand (volume)", dimension: "volume", si_value: 1e-11 },

  // ── Area: fill sub-mm² gap ────────────────────────────────────────────
  // Human cell cross-section ~1e-9m²
  { name: "Human cell surfaces", name_singular: "Human cell surface", dimension: "area", si_value: 1e-9 },
  // Pinhead ~1e-6m²
  { name: "Pinheads", name_singular: "Pinhead", dimension: "area", si_value: 1e-6 },
  // Pixel on a phone screen ~5e-9m²
  { name: "Phone pixels", name_singular: "Phone pixel", dimension: "area", si_value: 5e-9 },

  // ── Force: fill sub-millinewton gap ───────────────────────────────────
  // Weight of a grain of sand ~1e-5N
  { name: "Sand grain weights", name_singular: "Sand grain weight", dimension: "force", si_value: 1e-5 },
  // Weight of a raindrop ~5e-4N
  { name: "Raindrop weights", name_singular: "Raindrop weight", dimension: "force", si_value: 5e-4 },

  // ── Pressure: fill low end ────────────────────────────────────────────
  // Sound of normal conversation ~0.02 Pa
  { name: "Conversations (sound)", name_singular: "Conversation (sound)", dimension: "pressure", si_value: 0.02 },
  // Blood pressure diastolic ~10600 Pa
  { name: "Diastolic blood pressures", name_singular: "Diastolic blood pressure", dimension: "pressure", si_value: 10600 },

  // ── Energy: fill gamma-ray-to-cricket gap ─────────────────────────────
  // Firefly flash ~1e-10 J (single bioluminescent pulse)
  { name: "Firefly flashes", name_singular: "Firefly flash", dimension: "energy", si_value: 1e-10 },
  // Falling snowflake kinetic energy ~1e-7 J
  { name: "Falling snowflakes", name_singular: "Falling snowflake", dimension: "energy", si_value: 1e-7 },
  // Key press on a keyboard ~1e-4 J
  { name: "Key presses", name_singular: "Key press", dimension: "energy", si_value: 1e-4 },

  // ── Energy: fill Hiroshima-to-Tsar-Bomba gap ─────────────────────────
  // Magnitude 6 earthquake ~1e15 J
  { name: "Magnitude 6 earthquakes", name_singular: "Magnitude 6 earthquake", dimension: "energy", si_value: 1e15 },

  // ── Mass: fill water-molecule-to-bacterium gap ────────────────────────
  // Insulin molecule ~1e-23 kg (~5800 Da)
  { name: "Insulin molecules", name_singular: "Insulin molecule", dimension: "mass", si_value: 1e-23 },
  // Typical virus particle ~1e-18 kg
  { name: "Viruses (mass)", name_singular: "Virus (mass)", dimension: "mass", si_value: 1e-18 },

  // ── Mass: fill bacterium-to-pollen gap ────────────────────────────────
  // Human skin cell ~1e-12 kg
  { name: "Skin cells", name_singular: "Skin cell", dimension: "mass", si_value: 1e-12 },

  // ── Force: fill dust-mote-to-mosquito gap ─────────────────────────────
  // Ant footstep force ~1e-7 N
  { name: "Ant footsteps", name_singular: "Ant footstep", dimension: "force", si_value: 1e-7 },

  // ── Power: fill human-cell-to-firefly gap ─────────────────────────────
  // Quartz wristwatch ~1e-6 W
  { name: "Quartz watches", name_singular: "Quartz watch", dimension: "power", si_value: 1e-6 },
  // Cardiac pacemaker ~1e-5 W
  { name: "Pacemakers", name_singular: "Pacemaker", dimension: "power", si_value: 1e-5 },

  // ── Length: fill astronomical gaps ────────────────────────────────────
  // Orion Nebula diameter ~3.6e17 m (~24 light-years)
  { name: "Orion Nebula diameters", name_singular: "Orion Nebula diameter", dimension: "length", si_value: 3.6e17 },

  // ── Time: fill CPU-cycle-to-camera-flash gap ──────────────────────────
  // Lightning discharge duration ~3e-5 s
  { name: "Lightning discharges", name_singular: "Lightning discharge", dimension: "time", si_value: 3e-5 },

  // ── Pressure: fill conversation-to-blown-candle gap ───────────────────
  // Gentle breeze pressure ~1 Pa
  { name: "Gentle breezes", name_singular: "Gentle breeze", dimension: "pressure", si_value: 1 },
  // Ear-popping pressure differential ~200 Pa
  { name: "Popped ears", name_singular: "Popped ear", dimension: "pressure", si_value: 200 },

  // ── Volume: fill human-cell-to-sand-grain gap ─────────────────────────
  // Pollen grain volume ~3e-13 m³
  { name: "Pollen grains (volume)", name_singular: "Pollen grain (volume)", dimension: "volume", si_value: 3e-13 },

  // ── Volume: fill Yankee-Stadium-to-Sydney-Harbour gap ─────────────────
  // Great Pyramid of Giza volume ~2.6e6 m³
  { name: "Pyramids of Giza (volume)", name_singular: "Pyramid of Giza (volume)", dimension: "volume", si_value: 2.6e6 },
];
