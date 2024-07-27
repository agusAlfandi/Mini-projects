import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { verifyToken } from '@/utils/verifyToken';
import NavbarDropDown from './NavbarDropDown';
import ButtonLogout from '../ButtonLogout';

const NavbarButton = async (): Promise<React.ReactElement> => {
  const token = cookies().get('jsonwebtoken')?.value as string;
  const nameCookies = cookies().get('jsonwebtoken')?.name as string;

  const isLogin = (await verifyToken(
    token,
    process.env.NEXT_PUBLIC_JWT_SECRET as string,
  ))
    ? true
    : false;

  return (
    <>
      {/* menu horizontal */}
      {isLogin ? (
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-white gap-4">
            <li>
              <Link href="/dashboard/create-event" className="btn btn-ghost">
                Create Event
              </Link>
            </li>
            <li>
              <Link href="/dashboard/event-list" className="btn btn-ghost">
                Event List
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Tailwind CSS Navbar component"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <ButtonLogout nameCookies={nameCookies} />
            </ul>
          </div>
        </div>
      ) : (
        <div className="md:flex hidden">
          <ul className="menu menu-horizontal px-1 text-lg text-white gap-4 lg:flex hidden">
            <li>
              <Link href="/sign-in" className="btn btn-ghost">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="btn btn-ghost">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* menu horizontal */}

      {/* menu dropdown */}
      <NavbarDropDown nameCookies={nameCookies} />
      {/* menu dropdown */}
    </>
  );
};

export default NavbarButton;
