
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if the request is for the admin area
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // allow access to login page and public assets
        if (request.nextUrl.pathname === '/admin/login') {
            return NextResponse.next()
        }

        const authCookie = request.cookies.get('admin_session')

        // If no auth cookie, redirect to login
        if (!authCookie || authCookie.value !== 'true') {
            const loginUrl = new URL('/admin/login', request.url)
            loginUrl.searchParams.set('from', request.nextUrl.pathname)
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
