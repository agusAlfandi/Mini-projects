import { getReviews } from '@/api/riviews';
import { Review } from '@/utils/interface';

type ParamsProps = {
  event_id: number;
};

const RiviewsList = async ({
  event_id,
}: ParamsProps): Promise<React.ReactElement> => {
  const res = await getReviews(event_id);

  if (res.event.length === 0) {
    return <p>Belum Ada Review</p>;
  }

  return (
    <div className="flex flex-col items-center m-auto gap-5 p-5 w-full">
      <h1 className="text-2xl font-bold">Reviews</h1>
      {res.event.map((review: Review) => {
        return (
          <div
            key={review.id}
            className="bg-gray-100 p-4 w-3/5 h-auto rounded-md shadow-md"
          >
            <div className="flex justify-between mb-5">
              <h1 className="text-lg font-bold">{review.name}</h1>
              <p> rate: {review.rating}</p>
            </div>
            <p>{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RiviewsList;
