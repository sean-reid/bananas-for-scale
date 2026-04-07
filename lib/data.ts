import { getDb, schema } from "@/db";
import type { Category, Thing, Measurement, SillyUnit } from "@/db";
import { eq, sql } from "drizzle-orm";

// ── Types ──────────────────────────────────────────────────────────────────

export type ThingWithCategory = Thing & {
  category: Category | null;
};

export type ThingWithDetails = Thing & {
  category: Category | null;
  measurements: Measurement[];
};

export type CategoryWithCount = Category & {
  thingCount: number;
};

export type CategoryWithThings = Category & {
  things: Thing[];
};

export type SearchIndexEntry = {
  id: string;
  slug: string;
  name: string;
  category: string;
  aliases: string[];
};

// ── Data Fetching Functions ────────────────────────────────────────────────

export function getAllThings(): ThingWithCategory[] {
  const db = getDb();

  const rows = db
    .select()
    .from(schema.things)
    .leftJoin(schema.categories, eq(schema.things.category_id, schema.categories.id))
    .all();

  return rows.map((row) => ({
    ...row.things,
    category: row.categories,
  }));
}

export function getThingBySlug(slug: string): ThingWithDetails | null {
  const db = getDb();

  const thingRows = db
    .select()
    .from(schema.things)
    .leftJoin(schema.categories, eq(schema.things.category_id, schema.categories.id))
    .where(eq(schema.things.slug, slug))
    .all();

  if (thingRows.length === 0) return null;

  const row = thingRows[0];

  const measurements = db
    .select()
    .from(schema.measurements)
    .where(eq(schema.measurements.thing_id, row.things.id))
    .orderBy(schema.measurements.display_order)
    .all();

  return {
    ...row.things,
    category: row.categories,
    measurements,
  };
}

export function getAllCategories(): CategoryWithCount[] {
  const db = getDb();

  const rows = db
    .select({
      id: schema.categories.id,
      name: schema.categories.name,
      description: schema.categories.description,
      sort_order: schema.categories.sort_order,
      thingCount: sql<number>`count(${schema.things.id})`.as("thing_count"),
    })
    .from(schema.categories)
    .leftJoin(schema.things, eq(schema.categories.id, schema.things.category_id))
    .groupBy(schema.categories.id)
    .orderBy(schema.categories.sort_order)
    .all();

  return rows;
}

export function getCategoryBySlug(slug: string): CategoryWithThings | null {
  const db = getDb();

  const categoryRows = db
    .select()
    .from(schema.categories)
    .where(eq(schema.categories.id, slug))
    .all();

  if (categoryRows.length === 0) return null;

  const category = categoryRows[0];

  const things = db
    .select()
    .from(schema.things)
    .where(eq(schema.things.category_id, category.id))
    .all();

  return {
    ...category,
    things,
  };
}

export function getFeaturedThings(): ThingWithCategory[] {
  const db = getDb();

  const rows = db
    .select()
    .from(schema.things)
    .leftJoin(schema.categories, eq(schema.things.category_id, schema.categories.id))
    .where(eq(schema.things.featured, 1))
    .all();

  return rows.map((row) => ({
    ...row.things,
    category: row.categories,
  }));
}

export function getSearchIndex(): SearchIndexEntry[] {
  const db = getDb();

  const rows = db
    .select({
      id: schema.things.id,
      slug: schema.things.slug,
      name: schema.things.name,
      category: schema.categories.name,
      search_terms: schema.things.search_terms,
    })
    .from(schema.things)
    .leftJoin(schema.categories, eq(schema.things.category_id, schema.categories.id))
    .all();

  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category ?? "",
    aliases: row.search_terms ? row.search_terms.split("|") : [],
  }));
}
