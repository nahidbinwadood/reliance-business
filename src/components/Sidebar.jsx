/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, setOpen, navLinks, sidebarRef }) => {
  return (
    <div ref={sidebarRef}
      className={`fixed left-0 z-[60] font-poppins text-white top-0 h-full w-60 transform shadow-lg bg-primary transition-transform duration-500 md:w-64 px-10 py-8 lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="border-4 border-primary h-fit navbar-contents w-fit">
        <Link
          to="/"
          className="bg-primary text-sm sm:text-base md:text-lg font-poppins font-medium border-2 border-white flex items-center justify-center text-white px-5 py-2 sm:py-2.5 md:px-6 md:py-3"
        >
          reliance
        </Link>
      </div>

      {/* links */}
      <ul className="flex flex-col w-full gap-4 mt-8 text-sm md:text-base">
        {navLinks?.map((link) => (
          <li key={link?.path}>
            <NavLink onClick={() => setOpen(false)} to={'/'} className="">
              {link?.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
