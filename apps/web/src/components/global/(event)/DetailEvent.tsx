import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { IEvent } from '@/utils/interface';
import FormatRupiah from '../FormatRupiah';
import RiviewsList from '../(review)/RiviewsList';
import CreateCommentForm from '@/components/auth/CreateCommentForm';
import { cookies } from 'next/headers';
import { verifyToken } from '@/utils/verifyToken';

const DetailEvent = async ({
  id,
  event_id,
  name,
  price,
  location,
  date,
  description,
  availableSeats,
  isFree,
  image,
}: IEvent): Promise<React.ReactElement> => {
  const token = cookies().get('jsonwebtoken')?.value as string;

  const isLogin = (await verifyToken(
    token,
    process.env.NEXT_PUBLIC_JWT_SECRET as string,
  ))
    ? true
    : false;

  const dateEvent = new Date(date).getTime();
  const dateFormat = format(date, 'EEE, d MMM, HH:mm');

  return (
    <div className="flex flex-col p-4 h-auto justify-center items-center">
      <div>
        <h1 className="flex justify-center text-2xl font-bold mb-10 mt-14">
          Detail Event
        </h1>
      </div>

      <div className="flex h-full mb-10">
        <div className="flex md:flex-col lg:flex-row justify-center items-center gap-7 card card-body card-bordered shadow-lg bg-green-200 md:h-auto lg:h-2/3 m-auto max-w-6xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_API_URL_IMAGE}${image}`}
            alt="Event Image"
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
                Seats: <br />
                {availableSeats}
              </p>
              <p>
                Price: <br />
                {isFree ? 'Free' : <FormatRupiah price={price} />}
              </p>
              <p>
                Location: <br />
                {location}
              </p>
              {dateEvent < new Date().getTime() ? null : (
                <Link href={`/dashboard/register-event/${id}`}>
                  <button className="btn btn-primary">Daftar</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {dateEvent > new Date().getTime() ? null : (
        <>
          <RiviewsList event_id={event_id} />
          <hr className="border-slate-400 px-96 my-5" />
          {isLogin ? (
            <CreateCommentForm event_id={event_id} />
          ) : (
            <Link href="/sign-in">
              <button className="btn btn-ghost">Login to Comment</button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default DetailEvent;
