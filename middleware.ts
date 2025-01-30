import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define protected and public paths
const PUBLIC_PATHS = ['/login', '/register', '/forgot-password', '/reset-password']
const PROTECTED_PATHS = ['/dashboard']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublicPage = PUBLIC_PATHS.some(path => pathname.startsWith(path))
  const isProtectedPage = PROTECTED_PATHS.some(path => pathname.startsWith(path))
  const token = request.cookies.get('authToken')?.value

  // Only handle routes we care about
  if (!isPublicPage && !isProtectedPage) {
    return NextResponse.next()
  }

  // Allow access to login, register, and password reset pages even when logged in
  if (isPublicPage && pathname !== '/login' && pathname !== '/register' && pathname !== '/forgot-password' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Redirect to login if trying to access protected pages while logged out
  if (isProtectedPage && !token) {
    const url = new URL('/login', request.url)
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api/ (API routes)
     * 2. /_next/ (Next.js internals)
     * 3. /static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api|_next|_vercel|static|favicon.ico|sitemap.xml).*)',
  ],
}
