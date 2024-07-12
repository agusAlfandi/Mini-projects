'use client';

import { getAllEvent } from '@/api/event';
import { useEffect, useState } from 'react';
import PostContent from './PostContent';

const LandingPageEvent = (): React.ReactElement => {
  const [events, setEvents] = useState<
    {
      id: number;
      name: string;
      isFree: boolean;
      price: number;
      date: Date;
      image: string;
    }[]
  >([]);

  useEffect(() => {
    handleEventComingSoon();
  }, []);

  const handleEventComingSoon = async () => {
    const response = await getAllEvent();
    const randomEvents = response.events
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setEvents(randomEvents);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-10">
        Ini adalah beberapa event yang mungkin membuat anda tertarik untuk
        ikuti:{' '}
      </h1>
      <div className="bg-green-200 p-10 shadow-md rounded-md">
        <div className="grid md:grid-cols-3 gap-4">
          {events?.map((event) => {
            return (
              <PostContent
                key={event.id}
                event_id={event.id}
                name={event.name}
                price={event.price}
                date={event.date}
                isFree={event.isFree}
                image={event.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPageEvent;
