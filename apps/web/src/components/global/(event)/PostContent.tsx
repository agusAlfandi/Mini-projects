'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { IEvent } from '@/utils/interface';
import FormatRupiah from '../FormatRupiah';

const PostContent = ({
  event_id,
  name,
  price,
  date,
  isFree,
  image,
}: IEvent): React.ReactElement => {
  const dateFormat = format(date, 'EEE, d MMM, HH:mm');

  return (
    <Link href={`/event/${event_id}`}>
      <div className="bg-white p-4 shadow-md rounded-md duration-300 hover:scale-105 h-full">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_API_URL_IMAGE}/${image}`}
          alt={image as string}
          width={300}
          height={200}
          priority={true}
          className="rounded-md h-48 w-full object-cover mb-5"
        />
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{dateFormat}</p>

        <p>{isFree ? 'Free' : <FormatRupiah price={price} />}</p>
      </div>
    </Link>
  );
};

export default PostContent;
