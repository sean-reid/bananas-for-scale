import type { ReactNode } from "react";

export function ThingHero({
  name,
  subtitle,
  categoryName,
  description,
  imageUrl,
  imageCredit,
}: {
  name: string;
  subtitle: string | null;
  categoryName: string | null;
  description: string;
  imageUrl: string | null;
  imageCredit: string | null;
}) {
  return (
    <section className="w-full">
      {imageUrl ? (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {imageCredit && (
            <p className="absolute bottom-2 right-3 text-xs text-white/70 bg-black/40 px-2 py-0.5 rounded">
              {imageCredit}
            </p>
          )}
        </div>
      ) : (
        <div className="relative w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-amber-50 via-neutral-100 to-neutral-200 dark:from-amber-950/30 dark:via-neutral-900 dark:to-neutral-950 flex items-center justify-center overflow-hidden">
          <p className="text-4xl md:text-6xl font-bold text-neutral-300 dark:text-neutral-700 select-none">
            {name}
          </p>
        </div>
      )}
      <div className="mt-6 space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {name}
        </h1>
        {(subtitle || categoryName) && (
          <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            {subtitle}
            {subtitle && categoryName && <span className="mx-2">/</span>}
            {categoryName}
          </p>
        )}
        <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-prose">
          {description}
        </p>
      </div>
    </section>
  );
}
