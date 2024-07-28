'use server';

import { getEventById, updateEvent } from '@/api/event';
import DetailEvent from '@/components/global/(event)/DetailEvent';

type ParamsProps = {
  params: {
    id: number;
  };
};

const page = async ({ params }: ParamsProps): Promise<React.ReactElement> => {
  const event = await getEventById(params.id);

  return (
    <DetailEvent
      id={event.event.id}
      event_id={event.event.id}
      name={event.event.name}
      price={event.event.price}
      date={event.event.date}
      location={event.event.location}
      description={event.event.description}
      availableSeats={event.event.availableSeats}
      isFree={event.event.isFree}
      image={event.event.image}
    />
  );
};

export default page;
