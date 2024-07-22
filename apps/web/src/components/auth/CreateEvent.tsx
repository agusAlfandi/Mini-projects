'use client';

import { createEvent } from '../../api/event';
import React from 'react';

const CreateEvent = (): React.ReactElement => {
  const FromRef = React.useRef<HTMLFormElement>(null);
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [date, setDate] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [availableSeats, setAvailableSeats] = React.useState('');
  const [isFree, setIsFree] = React.useState(false);
  const [image, setImage] = React.useState<File>();

  const handleCreateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('availableSeats', availableSeats);
    formData.append('isFree', isFree.toString());
    if (image) formData.append('image', image);

    const res = await createEvent(formData);

    if (res) {
      alert('Event Created');
    }

    if (FromRef.current) {
      FromRef.current.reset();
    }
  };

  return (
    <div className="flex justify-center w-full">
      <form
        ref={FromRef}
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
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <label>Date</label>
        <input
          type="datetime-local"
          name="date"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Available Seats</label>
        <input
          type="number"
          name="availableSeats"
          placeholder="Available Seats"
          className="input input-bordered w-full max-w-xs"
          required
          onChange={(e) => setAvailableSeats(e.target.value)}
          value={availableSeats}
        />

        <label className="label cursor-pointer">
          <span>Free?</span>
          <input
            type="checkbox"
            name="isFree"
            className="checkbox"
            value={isFree.toString()}
            onChange={(e) => setIsFree(e.target.checked)}
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
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImage(file);
            }
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
