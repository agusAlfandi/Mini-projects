import Link from 'next/link';
import SearchEvent from './SearchEvent';
// import { getAllEvent } from '@/api/event';

export const Header = () => {
  // const handleSearch = async () => {
  //   const getEvent = await getAllEvent();
  //   console.log(getEvent);
  // };

  return (
    <div className="navbar flex justify-between bg-base-content">
      <div className="flex justify-between">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl text-green-500">
            MANAGE.
          </Link>
        </div>
        <div>
          <SearchEvent />
        </div>
      </div>

      {/* menu horizontal */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-white gap-4">
          <li>
            <Link href="/dashboard/event" className="btn btn-ghost">
              Event
            </Link>
          </li>
          <li>
            <Link href="/dashboard/promotion" className="btn btn-ghost">
              Promotion
            </Link>
          </li>
          <li>
            <Link href="/dashboard/reviews" className="btn btn-ghost">
              Review
            </Link>
          </li>
          <li>
            <Link href="/sign-in" className="btn btn-info">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/sign-up" className="btn btn-info">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      {/* menu horizontal */}

      {/* menu dropdown */}
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
          <li className="w-24">
            <Link href="/dashboard/event" className="text-base btn btn-ghost">
              Event
            </Link>
          </li>
          <li className="w-24">
            <Link
              href="/dashboard/promotion"
              className="text-base btn btn-ghost"
            >
              Promotion
            </Link>
          </li>
          <li className="w-24">
            <Link href="/dashboard/reviews" className="text-base btn btn-ghost">
              Review
            </Link>
          </li>
        </ul>
      </div>
      {/* menu dropdown */}
    </div>
  );
};
