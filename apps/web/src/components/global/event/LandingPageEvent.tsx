'use client';

import React, { useEffect, useState } from 'react';
import { getAllEvent } from '@/api/event';
import PostContent from './PostContent';

const LandingPage = (): React.ReactElement => {
  const [events, setEvents] = useState<
    {
      id: number;
      name: string;
      price: number;
      location: string;
      date: Date;
      description: string;
      availableSeats: number;
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
    <div className="grid md:grid-cols-3 gap-4">
      {events?.map((event) => {
        return (
          <PostContent
            key={event.id}
            event_id={event.id}
            name={event.name}
            location={event.location}
            price={event.price}
            date={event.date}
            description={event.description}
            isFree={event.isFree}
            // image={event.image}
          />
        );
      })}
    </div>
  );
};

export default LandingPage;
