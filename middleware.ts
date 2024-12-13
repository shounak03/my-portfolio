import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname.startsWith('/messages')) {

    const isAuthenticated = request.cookies.get('authenticated')
    
    if (!isAuthenticated) {

      return NextResponse.redirect(new URL('/password', request.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/messages/:path*'
}