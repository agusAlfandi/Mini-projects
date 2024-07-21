'use client';

import React, { useEffect, useState } from 'react';
import { getAllEvent } from '@/api/event';
import PostContent from './PostContent';

const EventList = (): React.ReactElement => {
  const [events, setEvents] = useState<
    {
      id: number;
      name: string;
      price: number;
      date: Date;
      isFree: boolean;
      image: string;
    }[]
  >([]);

  useEffect(() => {
    handlegetAllEvent();
  }, []);

  const handlegetAllEvent = async () => {
    const response = await getAllEvent();
    setEvents(response.events);
  };
  return (
    <div className="bg-green-200 p-10 shadow-md rounded-md">
      <div className="grid md:grid-cols-3 gap-4">
        {events?.map((event) => {
          return (
            <PostContent
              key={event.id}
              event_id={event.id}
              image={event.image}
              name={event.name}
              price={event.price}
              date={event.date}
              isFree={event.isFree}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventList;