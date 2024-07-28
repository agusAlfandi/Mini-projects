'use client';

import React, { useEffect, useState } from 'react';
import { getAllEventPagination } from '@/api/event';
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
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    handlegetAllEvent();
  }, []);

  const handlegetAllEvent = async () => {
    setLoading(true);
    const response = await getAllEventPagination(page);
    setEvents(response.events);
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex min-h-screen flex-col justify-between bg-green-200 p-10 shadow-md rounded-md">
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
      <form
        action={handlegetAllEvent}
        className="flex justify-center items-center join mt-5"
      >
        <button
          className="join-item btn btn-outline"
          type="submit"
          onClick={() => setPage(page === 0 ? 0 : page - 6)}
        >
          Previous page
        </button>
        <button
          className="join-item btn btn-outline"
          type="submit"
          onClick={() => setPage(events?.length <= 0 ? page : page + 6)}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default EventList;
