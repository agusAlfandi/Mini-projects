import * as jose from 'jose';

export const verifyToken = async (token: string, secret: string) => {
  try {
    const verification = await jose.jwtVerify(
      token,
      new TextEncoder().encode(secret),
    );
    return verification;
  } catch (error) {
    console.error('🚀 Unauthorized');
  }
};
