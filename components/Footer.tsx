import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsTwitterX } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className=" border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center items-center">
          <ul className="flex space-x-8 sm:space-x-20">
            <li>
              <Link href="https://github.com/shounak03" target="_blank" rel="noopener noreferrer" className='p-2 sm:p-4'>
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/shounak-mishra-a56968245/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-4">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/codeAndRum" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-4">
                <BsTwitterX className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

