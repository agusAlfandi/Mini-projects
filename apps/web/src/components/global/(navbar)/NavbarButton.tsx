import Image from 'next/image';
import Link from 'next/link';

const NavbarButton = (): React.ReactElement => {
  const isLogin = true;

  return (
    <>
      {/* menu horizontal */}
      {isLogin ? (
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-white gap-4">
            <li>
              <Link href="/dashboard/my-event" className="btn btn-ghost">
                Create Event
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/my-event/event-list"
                className="btn btn-ghost"
              >
                Event List
              </Link>
            </li>
            <li>
              <Link href="/dashboard/reviews" className="btn btn-ghost">
                My Review
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
          </div>
        </div>
      ) : (
        <ul className="menu menu-horizontal px-1 text-lg text-white gap-4">
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
      )}

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
              href="/dashboard/my-event"
              className="text-base btn btn-ghost"
            >
              Create Event
            </Link>
          </li>
          <li className="w-24">
            <Link
              href="/dashboard/promotion"
              className="text-base btn btn-ghost"
            >
              My Event
            </Link>
          </li>
          <li className="w-24">
            <Link href="/dashboard/reviews" className="text-base btn btn-ghost">
              My Review
            </Link>
          </li>
        </ul>
      </div>
      {/* menu dropdown */}
    </>
  );
};

export default NavbarButton;
