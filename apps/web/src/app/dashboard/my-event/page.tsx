import CreateEvent from '@/components/auth/CreateEvent';
import EventList from '@/components/global/(event)/EventList';
import Wrapper from '@/components/global/Wrapper';

const page = (): React.ReactElement => {
  return (
    <Wrapper title="Create Event">
      <CreateEvent />
      {/* <EventList /> */}
    </Wrapper>
  );
};

export default page;
