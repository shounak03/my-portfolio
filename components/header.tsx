import Link from 'next/link'
import React from 'react'

export default function Appbar() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-around items-center">
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-purple-500 font-bold text-blue-700 m-6 ">Home</Link></li>
                        <li><Link href="/about" className="hover:text-purple-500 font-bold text-blue-700 m-6">About</Link></li>
                        <li><Link href="/projects" className="hover:text-purple-500 font-bold text-blue-700 m-6">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-purple-500 font-bold text-blue-700 m-6">Contact</Link></li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1FFGN2nsQJDs3TOtASbwB0uTnXCBkhDwb/view?usp=sharing"
                                className="hover:text-purple-500 font-bold text-blue-700 m-6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
