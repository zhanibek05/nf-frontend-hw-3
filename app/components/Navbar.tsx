/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qXgKeSQavfz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

import { JSX, SVGProps } from "react"

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-gray-900 shadow-sm">
            <div className="flex items-center">
                <Link href="./" className="flex items-center" prefetch={false}>
                    <FeatherIcon className="h-6 w-6 text-gray-400"/>
                    <span className="ml-2 text-lg font-medium text-gray-200">DummyBlog</span>
                </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
                <Link href="/blog" className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                      prefetch={false}>
                    Blog
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                      prefetch={false}>
                    About
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                      prefetch={false}>
                    Contact
                </Link>
            </nav>
            <div className="md:hidden">
            </div>
        </header>

    )
}

function FeatherIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
            <path d="M16 8 2 22" />
            <path d="M17.5 15H9" />
        </svg>
    )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}