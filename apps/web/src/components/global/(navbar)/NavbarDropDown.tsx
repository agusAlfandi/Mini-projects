'use client';

import Image from 'next/image';
import Link from 'next/link';
import ButtonLogout from '../ButtonLogout';

type NavbarDropDownProps = {
  nameCookies: string;
};

const NavbarDropDown = ({
  nameCookies,
}: NavbarDropDownProps): React.ReactElement => {
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
            href="/dashboard/my-event/create-event"
            className="text-base btn btn-ghost"
          >
            Create Event
          </Link>
        </li>
        <li className="w-24">
          <Link href="/dashboard/promotion" className="text-base btn btn-ghost">
            My Event
          </Link>
        </li>
        <li className="w-24">
          <Link href="/dashboard/reviews" className="text-base btn btn-ghost">
            Promotion
          </Link>
        </li>
        <li className="w-24">
          <ButtonLogout nameCookies={nameCookies} />
        </li>
      </ul>
    </div>
  );
};

export default NavbarDropDown;
