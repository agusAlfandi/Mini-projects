'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + '/auth/login',
      { email, password },
    );

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + '/auth/register',
      { email, password },
    );

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
