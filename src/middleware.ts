import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rotas públicas
const publicRoutes = ['/auth/login', '/auth/register'];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    const token = req.cookies.get('token');
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|api).*)'],
};
