import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-300 flex min-h-screen flex-col items-center p-20">
        <p className="text-4xl font-bold text-gray-900 p-10">
            Welcome to DummyBlog!
        </p>
        <div className=" flex items-center space-x-4">
            <Link
                href="/blog"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-600 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                Read Blog
            </Link>
            <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
            >
                About Us
            </Link>
        </div>

    </main>
  );
}
