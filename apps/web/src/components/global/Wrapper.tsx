import { ReactElement } from 'react';

type ParamsProps = {
  title?: string;
  children?: React.ReactElement;
};

const Wrapper = ({ title, children }: ParamsProps): ReactElement => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl flex justify-center py-10">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
