import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryGrid } from "@/components/category/CategoryGrid";
import { getCategoryBySlug, getAllCategories } from "@/lib/data";

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: cat.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const gridThings = category.things.map((thing) => ({
    slug: thing.slug,
    name: thing.name,
    subtitle: thing.subtitle,
    categoryName: category.name,
  }));

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-3 text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-prose">
              {category.description}
            </p>
          )}
        </div>
        <CategoryGrid things={gridThings} />
      </main>
      <Footer />
    </>
  );
}
