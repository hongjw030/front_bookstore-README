import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/signin', request.url));
}

export const config = {
  matcher: ['/mypage/:path*', '/bookmarked/:path*', '/cart/:path*', 'community/writeme' ],
};
