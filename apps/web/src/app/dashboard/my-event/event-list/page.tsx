'use server';

import EventList from '@/components/global/(event)/EventList';
import Wrapper from '@/components/global/Wrapper';

const page = (): React.ReactElement => {
  return (
    <Wrapper title="Event List">
      <EventList />
    </Wrapper>
  );
};

export default page;
