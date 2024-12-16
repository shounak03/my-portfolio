import Link from 'next/link'
import React from 'react'

export default function Appbar() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-center">
                    <div className="flex flex-col sm:flex-row items-center gap-4">

                        <div className="flex gap-4">
                            <Link href="/" className="hover:text-purple-500 font-bold text-blue-700 px-4">Home</Link>
                            <Link href="/about" className="hover:text-purple-500 font-bold text-blue-700 px-4">About</Link>
                            <Link href="/projects" className="hover:text-purple-500 font-bold text-blue-700 px-4">Projects</Link>
                        </div>
                        

                        <div className="flex gap-4">
                            <Link href="/contact" className="hover:text-purple-500 font-bold text-blue-700 px-4">Contact</Link>
                            
                            <a    href="https://drive.google.com/file/d/1OoTZSBI2DM2dPpJb3PlqGcEYLKyzfUXK/view?usp=sharing"
                                className="hover:text-purple-500 font-bold text-blue-700 px-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}