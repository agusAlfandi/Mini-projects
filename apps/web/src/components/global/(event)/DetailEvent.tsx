'use client';

import { getAllEvent } from '@/api/event';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

type PramsProps = {
  id: number;
  name: string;
  price: number;
  location: string;
  date: Date;
  description: string;
  availableSeats: number;
  isFree: boolean;
  image: string;
};

const DetailEvent = ({
  id,
  name,
  price,
  location,
  date,
  description,
  availableSeats,
  isFree,
  image,
}: PramsProps): React.ReactElement => {
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

  const dateFormat = format(date, 'EEE, d MMM, HH:mm');

  return (
    <div className="flex flex-col p-4 h-auto justify-center items-center">
      <div>
        <h1 className="flex justify-center text-2xl mb-10 mt-14">
          Detail Event
        </h1>
      </div>

      <div className="flex h-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-7 card card-body card-bordered shadow-lg bg-green-200 h-96 m-auto max-w-6xl">
          <Image
            src={process.env.NEXT_PUBLIC_BASE_API_URL_IMAGE + image}
            alt={image}
            width={300}
            height={980}
            className="rounded-xl h-80 w-96 object-cover"
            priority={true}
          />
          <div className="h-auto flex-1 overflow-hidden">
            <h1 className="flex justify-center text-xl mb-5">{name}</h1>

            <p className="mb-5">Date: {dateFormat}</p>

            <p className="overflow-x-auto h-32 mb-5 text-justify">
              {description}
            </p>
            <hr className="border-slate-500 mb-5" />
            <div className="flex flex-wrap items-center md:w-3/4 lg:w-full gap-4">
              <p>
                {' '}
                Seats: <br />
                {availableSeats}
              </p>
              <p>
                {' '}
                Price: <br />
                {isFree ? 'Free' : `Rp ${price}`}
              </p>
              <p>
                {' '}
                Location: <br />
                {location}
              </p>
              <button className="btn btn-primary">Daftar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
