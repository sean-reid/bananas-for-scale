import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/search/SearchBar";
import { RandomButton } from "@/components/home/RandomButton";
import { FeaturedThings } from "@/components/home/FeaturedThings";
import { CategoryList } from "@/components/category/CategoryList";
import { getFeaturedThings, getAllCategories } from "@/lib/data";

export default function HomePage() {
  const featuredThings = getFeaturedThings();
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="flex flex-col items-center text-center py-20 md:py-28 gap-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Bananas for Scale
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-md">
            The world&apos;s least useful encyclopedia
          </p>
          <div className="w-full max-w-lg">
            <SearchBar />
          </div>
          <RandomButton />
        </section>

        {/* Featured Things */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Featured
          </h2>
          <FeaturedThings things={featuredThings} />
        </section>

        {/* Browse by Category */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Browse by Category
          </h2>
          <CategoryList categories={categories} />
        </section>
      </main>
      <Footer />
    </>
  );
}
