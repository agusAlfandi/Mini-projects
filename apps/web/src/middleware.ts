'use server';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import * as jose from 'jose';

export default async function middleware(req: NextRequest) {
  try {
    const token = cookies().get('jsonwebtoken')?.value as any;

    let session = null;
    if (token) {
      session = await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
      );
    }
    if (!session) {
      return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('middleware', error);
  }
}
export const config = {
  matcher: ['/dashboard/:path*'],
};
