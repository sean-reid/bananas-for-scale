"use client";

import { motion } from "motion/react";
import type { MeasurementWithConversions } from "@/lib/conversion-client";

export function MeasurementCard({
  measurement,
}: {
  measurement: MeasurementWithConversions;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 truncate">
          {measurement.label}
        </span>
        <span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 sm:shrink-0">
          {measurement.formattedValue}
        </span>
      </div>
      <div className="space-y-3">
        {measurement.conversions.map((conversion, i) => (
          <motion.div
            key={conversion.unitId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1 + i * 0.08,
            }}
          >
            <span className="block text-2xl font-bold tabular-nums text-neutral-900 dark:text-neutral-100">
              {conversion.formattedValue}
            </span>
            <span className="block text-sm text-neutral-500 dark:text-neutral-400">
              {conversion.unitName}
            </span>
          </motion.div>
        ))}
      </div>
      {measurement.note && (
        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 italic">
          {measurement.note}
        </p>
      )}
    </motion.article>
  );
}
