import axios from 'axios';

export const getReviews = async (id: number) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/review/get-review/${id}`,
    );

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const createReview = async (formData: FormData, id: number) => {
  try {
    const name = formData.get('name');
    const rating = formData.get('rating');
    const comment = formData.get('comment');

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/review/create-review/${id}`,
      { name, rating, comment },
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
