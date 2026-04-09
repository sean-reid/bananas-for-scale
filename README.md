# Bananas for Scale

**The world's least useful encyclopedia.**

Look up real-world things and get their measurements in bananas, golden retrievers, and other units nobody asked for.

## Quick Start

```bash
npm install
npm run seed      # populate the SQLite database
npm run dev       # start dev server at localhost:3000
```

## How It Works

Everything is **static**. At build time, a SQLite database of things, measurements, and silly units is compiled into pre-rendered HTML pages. No server, no API, no database at runtime.

- **1,147 things** across 66 categories
- **1,358 silly units** across 14 dimensions (length, mass, time, volume, area, speed, temperature, energy, force, pressure, power, frequency, data, count)
- **100% image coverage** for all things
- **Deterministic conversions** with a seeded PRNG for stable builds
- **Client-side remix** to shuffle which silly units are shown

## Adding Content

All content lives in `db/seed.ts`. To add a new thing:

1. Add the thing to the `thingsData` array with its category, description, and measurements
2. Run `npm run seed` to update the database
3. Run `npm run build` (or push to `main` for CI/CD)

To add new silly units, add them to the `sillyUnitsData` array in the same file. Each unit needs a name, singular name, dimension, and SI value.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Seed DB + build search index + export static site |
| `npm run seed` | Populate SQLite database from seed data |
| `npm run build:search` | Generate `public/search-index.json` |
| `npm run test` | Run unit tests |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | TypeScript type checking |

## Tech Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Radix UI** (accessible primitives)
- **MiniSearch** (client-side fuzzy search)
- **SQLite + Drizzle ORM** (build-time only)
- **Motion** (animations)
- **Vitest** (testing)

## Project Structure

```
app/                  # Next.js pages and layout
  thing/[slug]/       # Dynamic thing detail pages
  category/[slug]/    # Dynamic category pages
components/           # React components
  search/             # SearchBar with autocomplete
  thing/              # MeasurementCard, MeasurementList, ThingHero
  category/           # CategoryGrid, CategoryList
  layout/             # Header, Footer
  home/               # FeaturedThings, RandomButton
db/                   # Database schema, connection, seed script
lib/                  # Conversion engine, search, formatting
scripts/              # Build-time scripts
tests/                # Unit tests
```

## Deployment

Push to `main` triggers GitHub Actions to build and deploy to GitHub Pages. Total hosting cost: $0.

## License

MIT
