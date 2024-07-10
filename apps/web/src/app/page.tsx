import LandingPageEvent from '@/components/global/event/LandingPageEvent';
import Wrapper from '@/components/global/Wrapper';
import React from 'react';

// export const revalidate = 0;

const page = (): React.ReactElement => {
  return (
    <Wrapper
      title="MANAGE adalah sebuah platform yang menawarkan acara atau event
          berbayar dan free"
    >
      <LandingPageEvent />
    </Wrapper>
  );
};

export default page;
