'use client';

import React from 'react';
import { Event } from '@/utils/interface';
import Image from 'next/image';
import FormatRupiah from '../global/FormatRupiah';

const RegisterEvent = ({
  name,
  price,
  isFree,
  image,
}: Event): React.ReactElement => {
  const [referalCode, setReferalCode] = React.useState('');
  const totalPrice = price ? price + price * 0.1 : 'Free';
  const [totalPriceDiskon, setTotalPriceDiskon] = React.useState(totalPrice);

  const handleDiskon = (e: React.FormEvent) => {
    e.preventDefault();

    const diskon = new FormData();
    diskon.append('referalCode', referalCode);

    if (diskon.get('referalCode') === 'DISKON20') {
      setTotalPriceDiskon(Number(totalPrice) - Number(totalPrice) * 0.2);
    }
  };

  return (
    <div className="p-10 ">
      <div className="flex flex-col m-auto justify-center items-center gap-5 bg-green-200 p-10 shadow-md rounded-md max-w-4xl">
        <h1>Checkout</h1>
        <div className="w-full">
          <div className="flex justify-between gap-5 items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_API_URL_IMAGE}${image}`}
              alt="Event Image"
              width={500}
              height={200}
              priority={true}
              className="rounded-md h-48 w-52 object-cover mb-5"
            />
            <div className="flex flex-col items-end gap-4">
              <h1 className="text-xl font-bold">{name}</h1>
              <p>{isFree ? 'Free' : <FormatRupiah price={price} />}</p>
            </div>
          </div>
          <hr className="border-slate-500 mb-5" />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Tax 10%</p>
              <p>
                <FormatRupiah price={totalPrice} />
              </p>
            </div>
            <div
              onClick={handleDiskon}
              className="flex justify-between items-center"
            >
              <button type="submit" className="btn btn-ghost">
                Refferal Code
              </button>
              <input
                type="text"
                name="referalCode"
                placeholder="Write Refferal Code"
                className="input w-full max-w-xs"
                value={referalCode}
                onChange={(e) => setReferalCode(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              {referalCode ? (
                <FormatRupiah price={totalPriceDiskon} />
              ) : (
                <FormatRupiah price={totalPrice} />
              )}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;
