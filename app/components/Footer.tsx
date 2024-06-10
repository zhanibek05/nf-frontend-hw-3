import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="bg-gray-900 py-6 text-gray-400">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <p>&copy; 2024 nfactorial incubator.</p>
                <nav className="flex items-center space-x-4">
                    <Link
                        href="/blog"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        prefetch={false}
                    >
                        Blog
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        prefetch={false}
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                        prefetch={false}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    )

}