'use client';

import { deleteCookies } from '@/utils/cookies';

type ButtonLogoutProps = {
  nameCookies: string;
};

const ButtonLogout = ({
  nameCookies,
}: ButtonLogoutProps): React.ReactElement => {
  const handleLogout = () => {
    deleteCookies(nameCookies);
  };
  return (
    <button className="btn btn-ghost" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default ButtonLogout;
