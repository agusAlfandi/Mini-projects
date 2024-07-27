'use client';

import { deleteCookies } from '@/utils/cookies';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type ButtonLogoutProps = {
  nameCookies: string;
};

const ButtonLogout = ({
  nameCookies,
}: ButtonLogoutProps): React.ReactElement => {
  const Router = useRouter();
  const handleLogout = () => {
    deleteCookies(nameCookies);

    toast.success('Logout success');
    Router.push('/');
  };
  return (
    <button
      className="btn btn-ghost text-base font-bold"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default ButtonLogout;
