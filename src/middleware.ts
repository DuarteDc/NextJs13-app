import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/auth')) {
        const cookie = request.cookies.get('next-auth.session-token');
        return cookie ? NextResponse.redirect(request.nextUrl.origin) : NextResponse.next();
    }

}
 