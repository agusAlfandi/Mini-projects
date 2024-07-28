'use client';

import { getAllEvent } from '@/api/event';
import { useEffect, useState } from 'react';
import PostContent from './PostContent';
import Image from 'next/image';
import { IEvent } from '@/utils/interface';
import Loading from '../Loading';

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
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    handleEventComingSoon();
  }, []);

  const handleEventComingSoon = async () => {
    const response = await getAllEvent();
    const currentDate = new Date().getTime();
    setLoading(true);
    const filteredEvents = response.events.filter(
      (event: IEvent) => new Date(event.date).getTime() > currentDate,
    );
    const randomEvents = filteredEvents
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setEvents(randomEvents);
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="p-10 pt-0">
      <div className="flex lg:flex-row flex-col w-full justify-center gap-5 mb-10">
        <Image
          src="/banner.webp"
          alt="Banner"
          width={500}
          height={100}
          priority={true}
          className="flex-1 rounded-xl h-96 w-auto object-cover"
        />
        <Image
          src="/banner2.webp"
          alt="Banner"
          width={500}
          height={100}
          priority={true}
          className="flex-1 rounded-xl h-96 w-auto object-cover"
        />
      </div>
      <h1 className="text-xl mb-10">
        Ini adalah beberapa event yang mungkin membuat anda tertarik untuk
        ikuti:
      </h1>
      <div className="bg-green-200 p-10 shadow-md rounded-md">
        <div data-testid="event-card" className="grid md:grid-cols-3 gap-4">
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
