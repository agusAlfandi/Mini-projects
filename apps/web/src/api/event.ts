'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';
import { Redirect } from 'next';
import { cookies } from 'next/headers';
import { verifyToken } from '../utils/verifyToken';

export const getAllEvent = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/event/get-events`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllEventPagination = async (page: number) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL +
        `/event/get-event?skip=${page}&take=6`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getByLokasi = async (location: FormData) => {
  try {
    const locationValue = location.get('search');

    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL +
        `/event/get-by-lokasi/${locationValue}`,
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getByCategory = async (category: FormData) => {
  try {
    const categoryValue = category.get('search');

    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL +
        `/event/get-by-category/${categoryValue}`,
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const createEvent = async (formData: FormData) => {
  try {
    const token = cookies().get('jsonwebtoken')?.value as string;
    const userId = await verifyToken(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
    );
    const organizerId = String(userId?.payload.id);

    formData.append('organizerId', organizerId);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + '/event/create-event',
      formData,
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getEventById = async (id: number) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/event/get-event/${id}`,
    );

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updateEvent = async (
  formData: FormData,
  id: number,
): Promise<Redirect> => {
  try {
    const organizerId = 15;
    formData.append('organizerId', organizerId.toString());

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/event/update-event/${id}`,
      formData,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  redirect('/');
};
