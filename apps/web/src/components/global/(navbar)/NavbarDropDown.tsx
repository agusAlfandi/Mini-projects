import Image from 'next/image';
import Link from 'next/link';
import ButtonLogout from '../ButtonLogout';
import { cookies } from 'next/headers';
import { verifyToken } from '@/utils/verifyToken';

type NavbarDropDownProps = {
  nameCookies: string;
};

const NavbarDropDown = async ({
  nameCookies,
}: NavbarDropDownProps): Promise<React.ReactElement> => {
  const token = cookies().get('jsonwebtoken')?.value as string;
  const isLogin = await verifyToken(
    token,
    process.env.NEXT_PUBLIC_JWT_SECRET as string,
  );

  return (
    <div className="dropdown lg:hidden">
      <div tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      {isLogin ? (
        <ul
          tabIndex={0}
          className="left-href menu dropdown-content menu-xs right-0 z-[1] mt-3 w-28 rounded-box bg-base-content p-3 text-white shadow"
        >
          <div className="dropdown dropdown-end flex justify-center">
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
          </div>
          <li className="w-24">
            <Link
              href="/dashboard/create-event"
              className="text-base btn btn-ghost"
            >
              Create Event
            </Link>
          </li>
          <li className="w-24">
            <Link
              href="/dashboard/event-list"
              className="text-base btn btn-ghost"
            >
              Event List
            </Link>
          </li>

          <li className="w-24">
            <ButtonLogout nameCookies={nameCookies} />
          </li>
        </ul>
      ) : (
        <ul
          tabIndex={0}
          className="left-href menu dropdown-content menu-xs right-0 z-[1] mt-3 w-28 rounded-box bg-base-content p-3 text-white shadow"
        >
          <li className="w-24">
            <Link href="/sign-in" className="text-base btn btn-ghost">
              Sign-In
            </Link>
          </li>
          <li className="w-24">
            <Link href="/sign-up" className="text-base btn btn-ghost">
              Sign-Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarDropDown;
