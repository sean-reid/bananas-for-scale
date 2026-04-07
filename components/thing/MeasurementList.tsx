"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { MeasurementWithConversions, SillyUnitData } from "@/lib/conversion-client";
import { remixConversions } from "@/lib/conversion-client";
import { MeasurementCard } from "./MeasurementCard";

function ShuffleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="16 3 21 3 21 8" />
      <line x1={4} y1={20} x2={21} y2={3} />
      <polyline points="21 16 21 21 16 21" />
      <line x1={15} y1={15} x2={21} y2={21} />
      <line x1={4} y1={4} x2={9} y2={9} />
    </svg>
  );
}

export function MeasurementList({
  measurements: initialMeasurements,
  slug,
  sillyUnits,
}: {
  measurements: MeasurementWithConversions[];
  slug: string;
  sillyUnits: SillyUnitData[];
}) {
  const [measurements, setMeasurements] = useState(initialMeasurements);
  const [remixKey, setRemixKey] = useState(0);

  const handleRemix = useCallback(() => {
    const newSeed = Date.now() + Math.floor(Math.random() * 100000);
    const remixed = remixConversions(measurements, sillyUnits, newSeed);
    setMeasurements(remixed);
    setRemixKey((k) => k + 1);
  }, [measurements, sillyUnits]);

  return (
    <section className="space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={remixKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {measurements.map((m) => (
            <MeasurementCard key={m.id} measurement={m} />
          ))}
        </motion.div>
      </AnimatePresence>
      {sillyUnits.length > 0 && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={handleRemix}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-amber-400 dark:hover:border-amber-500 transition-colors cursor-pointer"
          >
            <ShuffleIcon className="w-4 h-4" />
            Remix
          </button>
        </div>
      )}
    </section>
  );
}
