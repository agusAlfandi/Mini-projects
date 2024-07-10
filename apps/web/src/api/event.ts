'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';
import { Redirect } from 'next'; // Import the Redirect type from the appropriate module
const API_URL = 'http://localhost:8000/event';

export const getAllEvent = async () => {
  const response = await axios.get(API_URL + '/get-events');
  return response.data;
};

export const createEvent = async (formData: FormData): Promise<Redirect> => {
  try {
    const organizerId = 1;

    formData.append('organizerId', organizerId.toString());
    const response = await axios.post(API_URL + '/create-event', formData);
  } catch (error) {
    console.error(error);
  }
  redirect('/dashboard/event');
};

export const getEventById = async (id: number) => {
  const response = await axios.get(API_URL + `/get-event/${id}`);
  return response.data;
};

export const updateEvent = async (
  formData: FormData,
  id: number,
): Promise<Redirect> => {
  console.log('🚀 ~ updateEvent ~ FormData:', FormData);
  // console.log('🚀 ~ updateEvent ~ id:', id);
  console.log('🚀 ~ updateEvent ~ formData:', formData);
  try {
    const organizerId = 1;
    formData.append('organizerId', organizerId.toString());

    const response = await axios.post(
      API_URL + `/update-event/${id}`,
      formData,
    );
    console.log('🚀 ~ updateEvent ~ response:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  redirect('/');
};

// export const handle
