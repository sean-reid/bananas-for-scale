// Units at extreme small scales that create MISMATCHES
// The goal: when measuring an atom, compare it to something from a totally different domain

export const sillyUnitsData: {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}[] = [
  // ── Length: sub-atomic scale (1e-15 to 1e-12) ─────────────────────────
  // These are SMALLER than atoms, so atoms produce big numbers against them

  // Proton diameter ~1.7e-15m
  { name: "Proton diameters", name_singular: "Proton diameter", dimension: "length", si_value: 1.7e-15 },
  // Atomic nucleus (iron) ~4.6e-15m
  { name: "Iron nuclei", name_singular: "Iron nucleus", dimension: "length", si_value: 4.6e-15 },
  // Electron classical radius ~2.8e-15m
  { name: "Electron radii", name_singular: "Electron radius", dimension: "length", si_value: 2.8e-15 },
  // Wavelength of gamma ray ~1e-12m
  { name: "Gamma ray wavelengths", name_singular: "Gamma ray wavelength", dimension: "length", si_value: 1e-12 },
  // Compton wavelength of electron ~2.4e-12m
  { name: "Electron wavelengths", name_singular: "Electron wavelength", dimension: "length", si_value: 2.4e-12 },
  // Bohr radius (hydrogen orbital) ~5.3e-11m
  { name: "Bohr radii", name_singular: "Bohr radius", dimension: "length", si_value: 5.3e-11 },

  // ── Length: picometer to nanometer scale (1e-12 to 1e-7) ──────────────
  // These create mismatches: measuring atoms in terms of everyday-adjacent things

  // Bond length C-C in diamond ~1.54e-10m
  { name: "Diamond bond lengths", name_singular: "Diamond bond length", dimension: "length", si_value: 1.54e-10 },
  // Caffeine molecule width ~1e-9m
  { name: "Caffeine molecules", name_singular: "Caffeine molecule", dimension: "length", si_value: 1e-9 },
  // WiFi wavelength ~12cm but X-ray wavelength ~1e-10m
  { name: "X-ray wavelengths", name_singular: "X-ray wavelength", dimension: "length", si_value: 1e-10 },
  // Aspirin molecule ~6e-10m
  { name: "Aspirin molecules", name_singular: "Aspirin molecule", dimension: "length", si_value: 6e-10 },
  // Table salt crystal unit cell ~5.6e-10m
  { name: "Salt crystals", name_singular: "Salt crystal", dimension: "length", si_value: 5.6e-10 },
  // Glucose molecule ~8.5e-10m
  { name: "Glucose molecules", name_singular: "Glucose molecule", dimension: "length", si_value: 8.5e-10 },
  // Hemoglobin molecule ~5.5e-9m
  { name: "Hemoglobin molecules", name_singular: "Hemoglobin molecule", dimension: "length", si_value: 5.5e-9 },
  // Ribosome ~2.5e-8m
  { name: "Ribosomes", name_singular: "Ribosome", dimension: "length", si_value: 2.5e-8 },
  // Coronavirus diameter ~1.2e-7m
  { name: "Coronaviruses", name_singular: "Coronavirus", dimension: "length", si_value: 1.2e-7 },
  // Transistor on M1 chip ~5e-9m
  { name: "iPhone transistors", name_singular: "iPhone transistor", dimension: "length", si_value: 5e-9 },

  // ── Mass: sub-picogram scale (1e-27 to 1e-15) ────────────────────────
  // Measuring subatomic particles in terms of molecules people know

  // Caffeine molecule mass ~3.2e-25kg
  { name: "Caffeine molecule weights", name_singular: "Caffeine molecule weight", dimension: "mass", si_value: 3.2e-25 },
  // Glucose molecule mass ~3e-25kg
  { name: "Glucose molecule weights", name_singular: "Glucose molecule weight", dimension: "mass", si_value: 3e-25 },
  // Hemoglobin molecule mass ~1.1e-22kg
  { name: "Hemoglobin molecule weights", name_singular: "Hemoglobin molecule weight", dimension: "mass", si_value: 1.1e-22 },
  // Single DNA base pair ~1.1e-24kg (average ~650 Da)
  { name: "DNA base pairs", name_singular: "DNA base pair", dimension: "mass", si_value: 1.1e-24 },
  // Ribosome mass ~4.2e-21kg
  { name: "Ribosome weights", name_singular: "Ribosome weight", dimension: "mass", si_value: 4.2e-21 },

  // ── Energy: sub-nanojoule (1e-20 to 1e-13) ───────────────────────────
  // Chemical bond energies, molecular vibrations

  // Hydrogen bond energy ~3.5e-20J
  { name: "Hydrogen bonds", name_singular: "Hydrogen bond", dimension: "energy", si_value: 3.5e-20 },
  // Energy to break a covalent bond ~7e-19J
  { name: "Covalent bonds", name_singular: "Covalent bond", dimension: "energy", si_value: 7e-19 },
  // WiFi photon energy ~1e-24J (2.4GHz)
  { name: "WiFi photons", name_singular: "WiFi photon", dimension: "energy", si_value: 1e-24 },
  // Microwave photon ~2e-23J
  { name: "Microwave photons", name_singular: "Microwave photon", dimension: "energy", si_value: 2e-23 },
  // Infrared photon ~2e-20J
  { name: "Infrared photons", name_singular: "Infrared photon", dimension: "energy", si_value: 2e-20 },

  // ── Volume: sub-picoliter (1e-20 to 1e-15) ───────────────────────────
  { name: "Virus interiors", name_singular: "Virus interior", dimension: "volume", si_value: 5e-25 },
  { name: "Ribosome interiors", name_singular: "Ribosome interior", dimension: "volume", si_value: 4e-24 },
  { name: "Mitochondria", name_singular: "Mitochondrion", dimension: "volume", si_value: 1e-18 },
];
