import Link from 'next/link';
import SearchEvent from './SearchEvent';
import NavbarButton from './NavbarButton';

export const Navbar = (): React.ReactElement => {
  return (
    <div>
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
        <NavbarButton />
      </div>
    </div>
  );
};
