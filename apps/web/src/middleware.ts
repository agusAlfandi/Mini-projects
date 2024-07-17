'use server';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  // console.log('HELLO MIDDLEWARE LUAR');
  const access = true;
  if (access) {
    // console.log('REALLY ?');
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/sign-up', req.nextUrl));
}
// Routes Middleware should not run on
export const config = {
  matcher: ['/dashboard/:path*'],
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
