import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
          404
        </h1>
        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
          We don&apos;t have that yet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 text-neutral-900 text-sm font-medium hover:bg-amber-500 transition-colors"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
