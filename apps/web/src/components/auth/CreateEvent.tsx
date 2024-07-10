'use client';

import { createEvent } from '../../api/event';
import React, { ReactElement } from 'react';

const CreateEvent = (): ReactElement => {
  const FromRef = React.useRef<HTMLFormElement>(null);

  const handleCreateEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FromRef.current) {
      FromRef.current.reset();
    }
  };

  return (
    <div className="flex justify-center w-full">
      <form
        ref={FromRef}
        action={createEvent}
        onSubmit={handleCreateEvent}
        className="flex flex-col gap-4 w-1/2"
      >
        <label>Name Event</label>
        <input
          type="text"
          name="name"
          placeholder="Name Event"
          className="input input-bordered w-full max-w-3xl"
          required
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full max-w-3xl"
          required
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="input input-bordered w-full max-w-3xl"
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full max-w-3xl"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          className="input input-bordered w-full max-w-3xl"
          required
        />

        <label>Available Seats</label>
        <input
          type="number"
          name="availableSeats"
          placeholder="Available Seats"
          className="input input-bordered w-full max-w-xs"
          required
        />

        <label className="label cursor-pointer">
          <span>Free?</span>
          <input
            type="checkbox"
            name="isFree"
            className="checkbox"
            value="true"
          />
        </label>

        <label>Image</label>
        <input
          type="file"
          name="image"
          required
          className="input input-bordered w-full max-w-3xl"
          style={{
            display: 'flex',
            paddingTop: '8px',
          }}
        />
        <button className="btn btn-accent mt-4" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
