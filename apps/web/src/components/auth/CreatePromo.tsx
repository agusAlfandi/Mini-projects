'use client';

import { createPromo } from '@/api/promo';
import { Promotion } from '@/utils/interface';
import React, { useState } from 'react';

const CreatePromo = ({ event_id }: Promotion): React.ReactElement => {
  const FromRef = React.useRef<HTMLFormElement>(null);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [date, setDate] = useState('');

  const handlePromo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('code', code);
    formData.append('discount', discount);
    formData.append('date', date);

    const res = await createPromo(formData, event_id);

    if (res) {
      alert('Promo Created');
    }

    if (FromRef.current) {
      FromRef.current.reset();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mb-20">
      <h1 className="flex justify-center text-2xl mb-10 mt-14">Create Promo</h1>
      <form
        ref={FromRef}
        onSubmit={handlePromo}
        className="flex flex-col gap-4 w-1/2"
      >
        <label>Code Promo</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />

        <label>Diskon</label>
        <input
          type="number"
          name="discount"
          placeholder="Diskon"
          className="input input-bordered w-full max-w-xs"
          required
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
        />

        <label>Valid Until</label>
        <input
          type="datetime-local"
          name="date"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button className="btn btn-accent mt-4" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePromo;
