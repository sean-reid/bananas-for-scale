import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "path";

export type { InferSelectModel, InferInsertModel } from "drizzle-orm";
export { schema };
export type Category = typeof schema.categories.$inferSelect;
export type Thing = typeof schema.things.$inferSelect;
export type Measurement = typeof schema.measurements.$inferSelect;
export type SillyUnit = typeof schema.sillyUnits.$inferSelect;

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (_db) return _db;

  const dbPath = path.join(process.cwd(), "data", "bananas.db");
  const sqlite = new Database(dbPath);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");

  _db = drizzle(sqlite, { schema });
  return _db;
}
