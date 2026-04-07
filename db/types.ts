// ── Shared types for seed data ─────────────────────────────────────────────

export interface ThingInput {
  slug: string;
  name: string;
  subtitle: string;
  category_id: string;
  description: string;
  search_terms: string;
  featured: number;
  measurements: {
    dimension: string;
    label: string;
    value: number;
    si_unit: string;
    note?: string;
  }[];
}

export interface CategoryInput {
  id: string;
  name: string;
  description: string;
  sort_order?: number;
}

export interface SillyUnitInput {
  name: string;
  name_singular: string;
  dimension: string;
  si_value: number;
}
