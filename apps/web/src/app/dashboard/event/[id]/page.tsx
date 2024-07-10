'use server';

import { getEventById, updateEvent } from '@/api/event';
import EditEvent from '@/components/auth/EditEvent';

type ParamsProps = {
  params: {
    id: number;
  };
};

const page = async ({ params }: ParamsProps): Promise<React.ReactElement> => {
  const event = await getEventById(params.id);
  // console.log('🚀 ~ page ~ event:', event);

  // ...

  //   const formatDate = () => {
  //     const newDate = new Date(event.event.date);
  //     return newDate.toDateString();
  //   };
  //   console.log(event.event.name);
  return (
    <EditEvent
      id={event.event.id}
      name={event.event.name}
      price={event.event.price}
      date={event.event.date}
      location={event.event.location}
      description={event.event.description}
      availableSeats={event.event.availableSeats}
      isFree={event.event.isFree}
    />
  );
};

export default page;
