import Link from "next/link";

type GridThing = {
  slug: string;
  name: string;
  subtitle: string | null;
  categoryName: string | null;
};

export function CategoryGrid({ things }: { things: GridThing[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {things.map((thing) => (
        <Link
          key={thing.slug}
          href={`/thing/${thing.slug}`}
          className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
        >
          <article>
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
              {thing.name}
            </h3>
            {thing.subtitle && (
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {thing.subtitle}
              </p>
            )}
          </article>
        </Link>
      ))}
    </div>
  );
}
