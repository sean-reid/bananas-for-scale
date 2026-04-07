"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { SearchIndexEntry } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";

const FALLBACK_SLUG = "blue-whale";

function ArrowIcon({ className }: { className?: string }) {
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
      <line x1={5} y1={12} x2={19} y2={12} />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function RandomButton() {
  const router = useRouter();
  const entriesRef = useRef<SearchIndexEntry[] | null>(null);

  // Pre-fetch the search index on mount
  useEffect(() => {
    fetch(withBasePath("/search-index.json"))
      .then((res) => res.json())
      .then((data: SearchIndexEntry[]) => {
        entriesRef.current = data;
      })
      .catch(() => {
        // Silently fail — fallback slug will be used on click
      });
  }, []);

  const handleClick = useCallback(() => {
    const entries = entriesRef.current;
    if (entries && entries.length > 0) {
      const pick = entries[Math.floor(Math.random() * entries.length)];
      router.push(`/thing/${pick.slug}`);
    } else {
      // Index hasn't loaded yet (or failed) — navigate to fallback
      router.push(`/thing/${FALLBACK_SLUG}`);
    }
  }, [router]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-amber-400 dark:hover:border-amber-500 transition-colors cursor-pointer"
    >
      <ArrowIcon className="w-4 h-4" />
      Random
    </button>
  );
}
