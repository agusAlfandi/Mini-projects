import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ParamsProps = {
  key: number;
  event_id: number;
  name: string;
  price: number;
  location: string;
  date: Date;
  description: string;
  isFree: boolean;
  image?: string;
};

const PostContent = ({
  key,
  event_id,
  name,
  price,
  location,
  date,
  description,
  isFree,
  image,
}: ParamsProps): React.ReactElement => {
  return (
    <Link href={`/dashboard/event/${event_id}`}>
      <div key={key} className="bg-white p-4 shadow-md rounded-md">
        {/* <Image
        src={image as string}
        alt={name}
        width={300}
        height={200}
        priority={true}
        className="rounded-md h-48 w-full object-cover"
      /> */}
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{date.toString()}</p>
        <p>{location}</p>
        <p>{description}</p>
        <p>{isFree ? 'Free' : `Rp ${price}`}</p>
        <button className="btn btn-primary">Join</button>
      </div>
    </Link>
  );
};

export default PostContent;
