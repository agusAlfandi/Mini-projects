'use client';

import { updateEvent } from '@/api/event';
import { format } from 'date-fns';
import { useState } from 'react';

type PramsProps = {
  id: number;
  name: string;
  price: number;
  date: string;
  location: string;
  description: string;
  availableSeats: number;
  isFree: boolean;
};

const EditEvent = ({
  id,
  name,
  price,
  date,
  location,
  description,
  availableSeats,
  isFree,
}: PramsProps): React.ReactElement => {
  const formatDate = () => {
    const newDate = new Date(date);
    return format(newDate, 'yyyy-MM-dd');
  };

  const [eventName, setEventName] = useState(name);
  const [eventPrice, setEventPrice] = useState(price);
  const [eventDate, setEventDate] = useState(formatDate());
  const [eventLocation, setEventLocation] = useState(location);
  const [eventDescription, setEventDescription] = useState(description);
  const [eventAvailableSeats, setEventAvailableSeats] =
    useState(availableSeats);
  const [eventIsFree, setEventIsFree] = useState(isFree);
  const [eventImage, setEventImage] = useState<File>();

  const handleEditEvent = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', eventName);
    formData.append('price', eventPrice.toString());
    formData.append('date', eventDate);
    formData.append('location', eventLocation);
    formData.append('description', eventDescription);
    formData.append('availableSeats', eventAvailableSeats.toString());
    formData.append('isFree', eventIsFree.toString());
    if (eventImage) {
      formData.append('image', eventImage);
    }

    await updateEvent(formData, id);
  };

  return (
    <div className="flex justify-center w-full">
      <form className="flex flex-col gap-4 w-1/2">
        <label>Name Event</label>
        <input
          type="text"
          name="name"
          placeholder="Name Event"
          className="input input-bordered w-full max-w-3xl"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full max-w-3xl"
          onChange={(e) => setEventPrice(Number(e.target.value))}
          value={eventPrice}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="input input-bordered w-full max-w-3xl"
          onChange={(e) => setEventDate(e.target.value)}
          value={eventDate}
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full max-w-3xl"
          onChange={(e) => setEventLocation(e.target.value)}
          value={eventLocation}
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          className="input input-bordered w-full max-w-3xl"
          onChange={(e) => setEventDescription(e.target.value)}
          value={eventDescription}
        />

        <label>Available Seats</label>
        <input
          type="number"
          name="availableSeats"
          placeholder="Available Seats"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setEventAvailableSeats(Number(e.target.value))}
          value={eventAvailableSeats}
        />

        <label className="label cursor-pointer">
          <span>Free?</span>
          <input
            type="checkbox"
            name="isFree"
            // defaultChecked
            className="checkbox"
            value={isFree.toString()}
            onChange={(e) => {
              setEventIsFree(e.target.checked);
            }}
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
              setEventImage(file);
            }
          }}
          // value={eventImage?.name}
        />
        <button
          className="btn btn-accent mt-4"
          type="submit"
          onClick={handleEditEvent}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
