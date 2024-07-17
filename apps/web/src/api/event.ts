'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';
import { Redirect } from 'next';

export const getAllEvent = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + '/event/get-events',
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
    console.log('🚀 ~ getByCategory ~ categoryValue:', categoryValue);

    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL +
        `/event/get-by-category/${categoryValue}`,
    );
    console.log('🚀 ~ getByCategory ~ response:', response);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const createEvent = async (formData: FormData): Promise<Redirect> => {
  try {
    const organizerId = 1;

    formData.append('organizerId', organizerId.toString());
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + '/event/create-event',
      formData,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
  redirect('/dashboard/event');
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
    const organizerId = 14;
    formData.append('organizerId', organizerId.toString());

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/event/update-event/${id}`,
      formData,
    );
    console.log('🚀 ~ updateEvent ~ response:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  redirect('/');
};
