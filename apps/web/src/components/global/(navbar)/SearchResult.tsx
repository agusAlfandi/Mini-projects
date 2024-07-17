import React from 'react';
import PostContent from '../(event)/PostContent';

type ParamsProps = {
  result: Array<any>;
};

const SearchResult = ({ result }: ParamsProps): React.ReactElement => {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-3 gap-4">
        {result?.map((event) => {
          return (
            <PostContent
              key={event.id}
              event_id={event.id}
              name={event.name}
              price={event.price}
              date={event.date}
              isFree={event.isFree}
              image={event.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
