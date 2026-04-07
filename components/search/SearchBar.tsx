"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import type MiniSearch from "minisearch";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type { SearchIndexEntry } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";
import {
  createSearchEngine,
  search,
  type SearchResult,
  type GroupedResults,
} from "@/lib/search";

const RECENT_SEARCHES_KEY = "bananas-recent-searches";
const MAX_RECENT = 5;

function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function addRecentSearch(query: string): void {
  if (typeof window === "undefined") return;
  try {
    const recent = getRecentSearches().filter((s) => s !== query);
    recent.unshift(query);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

function MagnifyingGlassIcon({ className }: { className?: string }) {
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
      <circle cx={11} cy={11} r={8} />
      <line x1={21} y1={21} x2={16.65} y2={16.65} />
    </svg>
  );
}

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [grouped, setGrouped] = useState<GroupedResults>({ groups: [], total: 0 });
  const [engine, setEngine] = useState<MiniSearch | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDialogOpen, setMobileDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Load search index on mount
  useEffect(() => {
    fetch(withBasePath("/search-index.json"))
      .then((res) => res.json())
      .then((data: SearchIndexEntry[]) => {
        const ms = createSearchEngine(data);
        setEngine(ms);
      })
      .catch(() => {
        // Silently fail - search will be unavailable
      });
  }, []);

  // Load recent searches
  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, []);

  // Flatten grouped results for keyboard navigation
  const flatResults = useMemo(() => {
    const flat: SearchResult[] = [];
    for (const group of grouped.groups) {
      flat.push(...group.results);
    }
    return flat;
  }, [grouped]);

  const performSearch = useCallback(
    (q: string) => {
      if (!engine) {
        setGrouped({ groups: [], total: 0 });
        return;
      }
      const result = search(engine, q);
      setGrouped(result);
      setActiveIndex(-1);
    },
    [engine],
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setQuery(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        performSearch(value);
      }, 150);
    },
    [performSearch],
  );

  const navigateToResult = useCallback(
    (result: SearchResult) => {
      addRecentSearch(result.name);
      setRecentSearches(getRecentSearches());
      setQuery("");
      setGrouped({ groups: [], total: 0 });
      setIsOpen(false);
      setMobileDialogOpen(false);
      router.push(`/thing/${result.slug}`);
    },
    [router],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < flatResults.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : flatResults.length - 1,
        );
      } else if (e.key === "Enter" && activeIndex >= 0 && flatResults[activeIndex]) {
        e.preventDefault();
        navigateToResult(flatResults[activeIndex]);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setMobileDialogOpen(false);
        inputRef.current?.blur();
      }
    },
    [activeIndex, flatResults, navigateToResult],
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFocus = () => {
    if (isMobile) {
      setMobileDialogOpen(true);
    } else {
      setIsOpen(true);
    }
  };

  const showNoResults = query.trim().length > 0 && grouped.total === 0 && engine !== null;

  const inputClasses = compact
    ? "w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
    : "w-full pl-10 pr-4 py-3 text-base rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50";

  const iconClasses = compact
    ? "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
    : "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400";

  const renderHighlightedName = (result: SearchResult) => (
    <span>
      {result.highlights.map((seg, i) =>
        seg.highlighted ? (
          <mark key={i} className="bg-amber-200 dark:bg-amber-800/50 text-inherit rounded-sm px-0.5">
            {seg.text}
          </mark>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </span>
  );

  const renderDropdown = (mobile = false) => {
    const hasContent = grouped.total > 0 || showNoResults;
    if (!hasContent) return null;

    return (
      <div
        ref={mobile ? undefined : dropdownRef}
        className={
          mobile
            ? "mt-2 max-h-[60vh] overflow-y-auto"
            : "absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg max-h-96 overflow-y-auto"
        }
        role="listbox"
      >
        {showNoResults ? (
          <p className="px-4 py-6 text-center text-neutral-500 dark:text-neutral-400">
            We don&apos;t have that yet
          </p>
        ) : (
          grouped.groups.map((group) => (
            <div key={group.category}>
              <p className="px-4 pt-3 pb-1 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {group.category}
              </p>
              {group.results.map((item) => {
                const flatIdx = flatResults.indexOf(item);
                return (
                  <button
                    key={item.id}
                    role="option"
                    aria-selected={flatIdx === activeIndex}
                    className={`w-full text-left px-4 py-2 text-sm cursor-pointer transition-colors ${
                      flatIdx === activeIndex
                        ? "bg-amber-50 dark:bg-amber-950/30 text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    }`}
                    onMouseEnter={() => setActiveIndex(flatIdx)}
                    onClick={() => navigateToResult(item)}
                  >
                    {renderHighlightedName(item)}
                  </button>
                );
              })}
            </div>
          ))
        )}
      </div>
    );
  };

  // Mobile: full-screen dialog
  if (isMobile) {
    return (
      <>
        <div className="relative">
          <MagnifyingGlassIcon className={iconClasses} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search things..."
            className={inputClasses}
            onFocus={handleFocus}
            readOnly
            value={query}
            aria-label="Search"
          />
        </div>
        <Dialog.Root open={mobileDialogOpen} onOpenChange={setMobileDialogOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-white dark:bg-neutral-950" />
            <Dialog.Content className="fixed inset-0 z-50 flex flex-col p-4 bg-white dark:bg-neutral-950">
              <VisuallyHidden.Root>
                <Dialog.Title>Search</Dialog.Title>
                <Dialog.Description>Search for things to measure in silly units</Dialog.Description>
              </VisuallyHidden.Root>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search things..."
                    className="w-full pl-10 pr-4 py-3 text-base rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                    value={query}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    aria-label="Search"
                  />
                </div>
                <Dialog.Close asChild>
                  <button
                    className="px-3 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    type="button"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
              {renderDropdown(true)}
              {!query.trim() && recentSearches.length > 0 && (
                <div className="mt-4">
                  <p className="px-1 pb-2 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Recent searches
                  </p>
                  {recentSearches.map((term) => (
                    <button
                      key={term}
                      className="block w-full text-left px-1 py-2 text-sm text-neutral-900 dark:text-neutral-100 hover:text-amber-500"
                      onClick={() => handleInputChange(term)}
                      type="button"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    );
  }

  // Desktop: dropdown below input
  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className={iconClasses} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search things..."
        className={inputClasses}
        value={query}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Search"
      />
      {isOpen && renderDropdown(false)}
      {isOpen && !query.trim() && recentSearches.length > 0 && grouped.total === 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg"
        >
          <p className="px-4 pt-3 pb-1 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Recent searches
          </p>
          {recentSearches.map((term) => (
            <button
              key={term}
              className="block w-full text-left px-4 py-2 text-sm text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 cursor-pointer"
              onClick={() => handleInputChange(term)}
              type="button"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
