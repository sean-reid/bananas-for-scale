import MiniSearch from "minisearch";
import type { SearchIndexEntry } from "@/lib/data";

// ── Types ──────────────────────────────────────────────────────────────────

export type SearchResult = {
  id: string;
  slug: string;
  name: string;
  category: string;
  /** Segments of the name with match highlighting. */
  highlights: HighlightSegment[];
};

export type HighlightSegment = {
  text: string;
  highlighted: boolean;
};

export type GroupedResults = {
  /** Results grouped by category name. */
  groups: { category: string; results: SearchResult[] }[];
  /** Total number of results (across all groups). */
  total: number;
};

const MAX_RESULTS = 8;

// ── MiniSearch Setup ───────────────────────────────────────────────────────

/**
 * Initialize a MiniSearch instance with the pre-built search index.
 * Configured for prefix search and fuzzy matching.
 */
export function createSearchEngine(entries: SearchIndexEntry[]): MiniSearch {
  const engine = new MiniSearch<SearchIndexEntry>({
    fields: ["name", "category", "aliasText"],
    storeFields: ["slug", "name", "category"],
    idField: "id",
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { name: 3, aliasText: 2, category: 1 },
    },
  });

  // MiniSearch requires the aliasText field to exist on each document
  const documents = entries.map((entry) => ({
    ...entry,
    aliasText: entry.aliases.join(" "),
  }));

  engine.addAll(documents);
  return engine;
}

// ── Search ─────────────────────────────────────────────────────────────────

/**
 * Search the index and return results grouped by category.
 * Returns at most 8 total results.
 */
export function search(engine: MiniSearch, query: string): GroupedResults {
  const trimmed = query.trim();
  if (!trimmed) {
    return { groups: [], total: 0 };
  }

  const raw = engine.search(trimmed).slice(0, MAX_RESULTS);

  const results: SearchResult[] = raw.map((hit) => ({
    id: hit.id as string,
    slug: hit.slug as string,
    name: hit.name as string,
    category: (hit.category as string) || "Other",
    highlights: highlightMatch(hit.name as string, trimmed),
  }));

  // Group by category, preserving relevance order within groups
  const groupMap = new Map<string, SearchResult[]>();
  for (const result of results) {
    const list = groupMap.get(result.category) ?? [];
    list.push(result);
    groupMap.set(result.category, list);
  }

  const groups = Array.from(groupMap.entries()).map(([category, items]) => ({
    category,
    results: items,
  }));

  return { groups, total: results.length };
}

// ── Highlighting ───────────────────────────────────────────────────────────

/**
 * Highlight matched substrings in a name by splitting on query terms.
 * Case-insensitive, handles partial prefix matches.
 */
function highlightMatch(name: string, query: string): HighlightSegment[] {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);

  if (terms.length === 0) {
    return [{ text: name, highlighted: false }];
  }

  // Build a regex that matches any of the query terms (prefix-style)
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");

  const segments: HighlightSegment[] = [];
  let lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(name)) !== null) {
    // Text before the match
    if (match.index > lastIndex) {
      segments.push({ text: name.slice(lastIndex, match.index), highlighted: false });
    }
    // The matched text
    segments.push({ text: match[0], highlighted: true });
    lastIndex = pattern.lastIndex;
  }

  // Remaining text after last match
  if (lastIndex < name.length) {
    segments.push({ text: name.slice(lastIndex), highlighted: false });
  }

  // If nothing matched, return the whole name unhighlighted
  if (segments.length === 0) {
    return [{ text: name, highlighted: false }];
  }

  return segments;
}
