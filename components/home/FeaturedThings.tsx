import Link from "next/link";

type FeaturedThing = {
  slug: string;
  name: string;
  subtitle: string | null;
  description: string;
};

function firstSentence(text: string): string {
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  return match ? match[0].trim() : text;
}

export function FeaturedThings({ things }: { things: FeaturedThing[] }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {things.map((thing) => (
          <Link
            key={thing.slug}
            href={`/thing/${thing.slug}`}
            className="group block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <article>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
                {thing.name}
              </h3>
              {thing.subtitle && (
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {thing.subtitle}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {firstSentence(thing.description)}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
