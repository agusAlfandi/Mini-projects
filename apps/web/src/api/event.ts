'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';
import { Redirect } from 'next';

export const getAllEvent = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_BASE_API_URL + '/get-events',
  );
  return response.data;
};

export const getByLokasi = async (location: FormData) => {
  const locationValue = location.get('search');

  const response = await axios.get(
    process.env.NEXT_PUBLIC_BASE_API_URL + `/get-by-lokasi/${locationValue}`,
  );
  return response.data;
};

export const getByCategory = async (category: FormData) => {
  const categoryValue = category.get('search');
  console.log('🚀 ~ getByCategory ~ categoryValue:', categoryValue);

  const response = await axios.get(
    process.env.NEXT_PUBLIC_BASE_API_URL + `/get-by-category/${categoryValue}`,
  );
  return response.data;
};

export const createEvent = async (formData: FormData): Promise<Redirect> => {
  // console.log('🚀 ~ createEvent ~ formData:', formData);
  try {
    const organizerId = 1;

    formData.append('organizerId', organizerId.toString());
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + '/create-event',
      formData,
    );
  } catch (error) {
    console.error(error);
  }
  redirect('/dashboard/event');
};

export const getEventById = async (id: number) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_BASE_API_URL + `/get-event/${id}`,
  );
  return response.data;
};

export const updateEvent = async (
  formData: FormData,
  id: number,
): Promise<Redirect> => {
  try {
    const organizerId = 1;
    formData.append('organizerId', organizerId.toString());

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/update-event/${id}`,
      formData,
    );
    console.log('🚀 ~ updateEvent ~ response:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  redirect('/');
};
