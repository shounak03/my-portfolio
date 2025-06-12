import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const new_site_link = process.env.NEXT_PUBLIC_NEW_DOMAIN || 'https://www.shounakmishra.in'

export function middleware(request: NextRequest) {
  // Allow the main page to show the redirecting page, redirect all other routes
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }
  
  // Redirect all other routes to the new site
  return NextResponse.redirect(new_site_link)
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}