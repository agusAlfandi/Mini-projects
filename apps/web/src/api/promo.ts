import axios from 'axios';

export const getPromoByEvent = async (event_id: number) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/promo/get-promos/${event_id}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPromo = async (data: FormData, event_id: number) => {
  try {
    const code = data.get('code');
    const discount = data.get('discount');
    const date = data.get('date');

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + `/promo/create-promo/${event_id}`,
      { code, discount, date },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
