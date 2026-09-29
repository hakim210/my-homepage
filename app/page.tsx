import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        My Homepage
      </h1>
      <Link
        href="/cv"
        className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        View the CV
      </Link>
    </main>
  );
}
