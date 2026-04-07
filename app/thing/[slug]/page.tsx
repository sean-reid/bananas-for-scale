import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThingHero } from "@/components/thing/ThingHero";
import { MeasurementList } from "@/components/thing/MeasurementList";
import { getThingBySlug, getAllThings } from "@/lib/data";
import { computeConversions } from "@/lib/conversion";
import { getDb, schema } from "@/db";
import { imageData } from "@/db/seed-data/images";

export function generateStaticParams() {
  const things = getAllThings();
  return things.map((thing) => ({ slug: thing.slug }));
}

export default async function ThingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thing = getThingBySlug(slug);

  if (!thing) {
    notFound();
  }

  const conversions = computeConversions(thing);

  // Query all silly units for the client-side remix feature
  const db = getDb();
  const allSillyUnits = db.select().from(schema.sillyUnits).all();
  const sillyUnitsData = allSillyUnits.map((u) => ({
    id: u.id,
    name: u.name,
    name_singular: u.name_singular,
    dimension: u.dimension,
    si_value: u.si_value,
  }));

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <ThingHero
          name={thing.name}
          subtitle={thing.subtitle}
          categoryName={thing.category?.name ?? null}
          description={thing.description}
          imageUrl={imageData[thing.slug]?.image_url ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${imageData[thing.slug]!.image_url}` : null}
          imageCredit={imageData[thing.slug]?.image_credit ?? null}
        />

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Measurements
          </h2>
          <MeasurementList
            measurements={conversions}
            slug={thing.slug}
            sillyUnits={sillyUnitsData}
          />
        </div>

        {thing.category && (
          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <Link
              href={`/category/${thing.category.id}`}
              className="text-sm font-medium text-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              Browse more in {thing.category.name} &rarr;
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
