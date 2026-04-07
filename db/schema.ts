import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  sort_order: integer("sort_order"),
});

export const things = sqliteTable("things", {
  id: text("id").primaryKey(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  subtitle: text("subtitle"),
  category_id: text("category_id").references(() => categories.id),
  description: text("description").notNull(),
  image_id: text("image_id"),
  image_credit: text("image_credit"),
  search_terms: text("search_terms"),
  featured: integer("featured").default(0),
});

export const measurements = sqliteTable("measurements", {
  id: text("id").primaryKey(),
  thing_id: text("thing_id").references(() => things.id),
  dimension: text("dimension").notNull(),
  label: text("label").notNull(),
  value: real("value").notNull(),
  si_unit: text("si_unit").notNull(),
  display_order: integer("display_order"),
  note: text("note"),
});

export const sillyUnits = sqliteTable("silly_units", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  name_singular: text("name_singular").notNull(),
  dimension: text("dimension").notNull(),
  si_value: real("si_value").notNull(),
});
