'use server';

import { cookies } from 'next/headers';

export const setCookies = async (name: string, value: string) => {
  cookies().set(name, value);
};

export const deleteCookies = async (name: string) => {
  cookies().delete(name);
};
