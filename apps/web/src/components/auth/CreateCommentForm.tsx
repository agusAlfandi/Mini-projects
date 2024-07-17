'use client';

import { createReview } from '@/api/riviews';
import React from 'react';

type ParamsProps = {
  event_id: number;
};

const CreateCommentForm = ({ event_id }: ParamsProps): React.ReactElement => {
  const FromRef = React.useRef<HTMLFormElement>(null);
  const [name, setName] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [comment, setComment] = React.useState('');

  const handleCreateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FromRef.current) {
      FromRef.current.reset();
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('rating', rating);
    formData.append('comment', comment);

    const res = await createReview(formData, event_id);

    if (res) {
      alert('Review Created');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="flex justify-center text-2xl mb-10 mt-14">
        Create Review
      </h1>
      <form
        ref={FromRef}
        onSubmit={handleCreateEvent}
        className="flex flex-col gap-4 w-1/2"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Rate</label>
        <input
          type="number"
          name="availableSeats"
          placeholder="Rate"
          className="input input-bordered w-full max-w-xs"
          required
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        />

        <label>Review</label>
        <textarea
          name="description"
          placeholder="Write Your Review"
          className="input input-bordered w-full max-w-3xl"
          required
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button className="btn btn-accent mt-4" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateCommentForm;
