import { getEventById } from '@/api/event';
import { getPromoByEvent } from '@/api/promo';
import RegisterEvent from '@/components/auth/RegisterEvent';

type ParamsProps = {
  params: {
    id: number;
  };
};

const page = async ({ params }: ParamsProps): Promise<React.ReactElement> => {
  const register = await getEventById(params.id);
  const promo = await getPromoByEvent(params.id);

  return (
    <RegisterEvent
      id={register.event.id}
      name={register.event.name}
      price={register.event.price}
      location={register.event.location}
      date={register.event.date}
      description={register.event.description}
      availableSeats={register.event.availableSeats}
      isFree={register.event.isFree}
      image={register.event.image}
      code={promo?.promos?.code}
      discount={promo?.promos?.discount}
    />
  );
};

export default page;
