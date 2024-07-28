'use client';

import React, { useEffect, useState } from 'react';
import { getAllEvent } from '@/api/event';
import PostContent from './PostContent';
import Loading from '../Loading';

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handlegetAllEvent();
  }, []);

  const handlegetAllEvent = async () => {
    setLoading(true);
    const response = await getAllEvent();
    setEvents(response.events);
    setLoading(false);
  };

  if (loading) return <Loading />;

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
