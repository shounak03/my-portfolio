'use client'
import Link from 'next/link'
import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from './ui/button'

export default function Appbar() {
    const { theme, setTheme } = useTheme()
    console.log(theme);
    
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4">
                <nav className="relative flex justify-center">
                    {/* Main navigation links (centered) */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex gap-4">
                            <Link href="/" className="hover:text-purple-500 font-bold text-blue-700 px-4">Home</Link>
                            <Link href="/about" className="hover:text-purple-500 font-bold text-blue-700 px-4">About</Link>
                            <Link href="/projects" className="hover:text-purple-500 font-bold text-blue-700 px-4">Projects</Link>
                        </div>

                        <div className="flex gap-4">
                            <Link href="/contact" className="hover:text-purple-500 font-bold text-blue-700 px-4">Contact</Link>
                            <a 
                                href="https://drive.google.com/file/d/11xLSgv-JMvhuu65wAbvDjzcLmbq8ciVX/view?usp=sharing"
                                className="hover:text-purple-500 font-bold text-blue-700 px-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Theme toggle button (absolute positioned to the right) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                    </Button>
                </nav>
            </div>
        </header>
    )
}


