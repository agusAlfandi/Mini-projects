import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { format } from 'date-fns';

type ParamsProps = {
  event_id: number;
  name: string;
  price: number;
  date: Date;
  isFree: boolean;
  image?: string;
};

const PostContent = ({
  event_id,
  name,
  price,
  date,
  isFree,
  image,
}: ParamsProps): React.ReactElement => {
  const dateFormat = format(date, 'EEE, d MMM, HH:mm');

  return (
    <Link href={`/dashboard/event/${event_id}`}>
      <div className="bg-white p-4 shadow-md rounded-md duration-300 hover:scale-105 h-full">
        {/* <Image
          src={process.env.NEXT_PUBLIC_BASE_API_URL_IMAGE + image}
          alt={image as string}
          width={300}
          height={200}
          priority={true}
          className="rounded-md h-48 w-full object-cover mb-5"
        /> */}
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{dateFormat}</p>

        <p>{isFree ? 'Free' : `Rp ${price}`}</p>
      </div>
    </Link>
  );
};

export default PostContent;
