export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <p>Bananas for Scale &copy; {new Date().getFullYear()}</p>
        <a
          href="https://github.com/sean-reid/bananas-for-scale"
          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
