'use client'

import { useEffect } from 'react'

const new_site_link = process.env.NEXT_PUBLIC_NEW_DOMAIN || 'https://www.shounakmishra.in'

export default function Home() {
  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = new_site_link
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Redirecting to New Website
        </h1>
        <p className="text-gray-600 mb-6">
          You're being redirected to our new website. If you're not redirected automatically, 
          <a 
            href={new_site_link} 
            className="text-indigo-600 hover:text-indigo-800 underline ml-1"
          >
            click here
          </a>
          .
        </p>
        <div className="text-sm text-gray-500">
          Redirecting in 3 seconds...
        </div>
      </div>
    </div>
  )
}
