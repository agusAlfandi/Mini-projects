import CreateEvent from '@/components/auth/CreateEvent';
import Wrapper from '@/components/global/Wrapper';

const page = (): React.ReactElement => {
  return (
    <Wrapper title="Create Event">
      <CreateEvent />
    </Wrapper>
  );
};

export default page;
