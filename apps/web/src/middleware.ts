'use server';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const access = true;
  if (access) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/sign-up', req.nextUrl));
}
export const config = {
  matcher: ['/dashboard/:path*'],
};
