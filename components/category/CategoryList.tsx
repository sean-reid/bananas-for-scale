"use client";

import Link from "next/link";
import { useState } from "react";

type CategoryWithCount = {
  id: string;
  name: string;
  description: string | null;
  sort_order: number | null;
  thingCount: number;
};

const categoryGroups: Record<string, string[]> = {
  "Living Things": [
    "marine-life",
    "large-land-animals",
    "small-animals",
    "insects",
    "dinosaurs",
    "plants",
    "microscopic",
    "ocean-life",
  ],
  Structures: [
    "towers",
    "ancient-structures",
    "bridges",
    "stadiums",
    "statues",
    "everyday-places",
    "buildings-modern",
  ],
  Vehicles: ["cars", "aircraft", "ships", "trains", "spacecraft"],
  Space: ["planets", "stars", "moons", "space-other"],
  Earth: ["mountains", "volcanoes", "water", "landforms", "weather"],
  "Life & Culture": [
    "food",
    "human-body",
    "everyday-objects",
    "sports",
    "toys-games",
    "human-feats",
  ],
  "Events & Ideas": ["events", "conceptual", "mythical"],
};

const groupOrder = [
  "Living Things",
  "Structures",
  "Vehicles",
  "Space",
  "Earth",
  "Life & Culture",
  "Events & Ideas",
];

function CategoryItem({ category }: { category: CategoryWithCount }) {
  return (
    <li>
      <Link
        href={`/category/${category.id}`}
        className="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group"
      >
        <span className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
          {category.name}
        </span>
        <span className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
          {category.thingCount}
        </span>
      </Link>
    </li>
  );
}

function CategoryGroup({
  name,
  categories,
}: {
  name: string;
  categories: CategoryWithCount[];
}) {
  const [isOpen, setIsOpen] = useState(true);

  if (categories.length === 0) return null;

  return (
    <div className="break-inside-avoid mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left mb-2 md:cursor-default"
        aria-expanded={isOpen}
      >
        <h3 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {name}
        </h3>
        <span className="text-neutral-300 dark:text-neutral-600 text-xs md:hidden">
          {isOpen ? "\u25B2" : "\u25BC"}
        </span>
      </button>
      <ul
        className={`space-y-0.5 overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100"
        }`}
      >
        {categories.map((cat) => (
          <CategoryItem key={cat.id} category={cat} />
        ))}
      </ul>
    </div>
  );
}

export function CategoryList({
  categories,
}: {
  categories: CategoryWithCount[];
}) {
  // Build a set of all category IDs present in the groups
  const groupedIds = new Set(
    Object.values(categoryGroups).flat()
  );

  // Organize categories into groups
  const grouped: { name: string; categories: CategoryWithCount[] }[] = [];

  for (const groupName of groupOrder) {
    const ids = categoryGroups[groupName];
    const cats = ids
      .map((id) => categories.find((c) => c.id === id))
      .filter((c): c is CategoryWithCount => c !== undefined);
    grouped.push({ name: groupName, categories: cats });
  }

  // Collect any categories not in any group into "Other"
  const ungrouped = categories.filter((c) => !groupedIds.has(c.id));
  if (ungrouped.length > 0) {
    grouped.push({ name: "Other", categories: ungrouped });
  }

  return (
    <nav aria-label="Categories" className="columns-1 md:columns-2 lg:columns-3 gap-x-8">
      {grouped.map((group) => (
        <CategoryGroup
          key={group.name}
          name={group.name}
          categories={group.categories}
        />
      ))}
    </nav>
  );
}
