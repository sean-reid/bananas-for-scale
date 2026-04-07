"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import type { SearchIndexEntry } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";

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
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

export function Header() {
  const router = useRouter();
  const entriesRef = useRef<SearchIndexEntry[] | null>(null);

  useEffect(() => {
    fetch(withBasePath("/search-index.json"))
      .then((res) => res.json())
      .then((data: SearchIndexEntry[]) => {
        entriesRef.current = data;
      })
      .catch(() => {});
  }, []);

  const handleRandom = useCallback(() => {
    const entries = entriesRef.current;
    if (entries && entries.length > 0) {
      const pick = entries[Math.floor(Math.random() * entries.length)];
      router.push(`/thing/${pick.slug}/`);
    } else {
      router.push("/thing/blue-whale/");
    }
  }, [router]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl flex items-center gap-4 px-4 py-3">
        <div className="shrink-0">
          <Link
            href="/"
            className="text-lg font-bold text-neutral-900 dark:text-neutral-100 hover:text-amber-500 transition-colors"
          >
            Bananas for Scale
          </Link>
          <p className="hidden md:block text-xs text-neutral-500 dark:text-neutral-400">
            The world&apos;s least useful encyclopedia
          </p>
        </div>
        <div className="flex-1 max-w-sm ml-auto flex items-center gap-2">
          <SearchBar compact />
          <button
            type="button"
            onClick={handleRandom}
            title="Random thing"
            className="shrink-0 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-amber-500 hover:border-amber-400 dark:hover:border-amber-500 transition-colors cursor-pointer"
          >
            <ShuffleIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
