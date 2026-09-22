import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[70svh] flex-col items-center justify-center px-6 py-28 text-center"
    >
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl text-stone sm:text-5xl">
        This path is not on the map.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you requested does not exist. Head back to the work.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cyan px-6 py-3 text-sm font-medium text-ink"
      >
        Return home
      </Link>
    </main>
  );
}
