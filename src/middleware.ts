import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {

  const current_req = request.nextUrl.pathname;
  const accessToken = request.cookies.get('token')?.value;

  if (current_req == "/admin/login") {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
};
