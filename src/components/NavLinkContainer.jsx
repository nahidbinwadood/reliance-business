import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const NavLinkContainer = ({ navLinks }) => {
  useGSAP(() => {
    gsap.from('.navbar-contents', {
      y: 15,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out',
      blur: 10,
      opacity: 0,
    });
  }, []);
  useGSAP(() => {
    gsap.from('.nav_links', {
      y: 15,
      duration: 2,
      ease: 'power2.out',
      // stagger: 0.1,
      opacity: 0,
    });
  });

  return (
    <>
      <div className="flex justify-between text-white absolute top-16 left-0 bg-transparent px-12 w-full">
        {/* logo */}
        <div className="border-4 border-primary h-fit navbar-contents">
          <Link
            to="/"
            className="bg-primary text-lg font-poppins font-medium border-2 border-white flex items-center justify-center text-white px-6 py-3"
          >
            reliance
          </Link>
        </div>

        {/* navLinks */}
        <ul className="flex items-center justify-between gap-10 font-poppins font-semibold navbar-contents">
          {navLinks?.map((link) => (
            <li key={link?.path} className="nav_links">
              <NavLink to={link?.path}>{link?.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-5 right-0 px-12 text-white navbar-contents">
        <p className="font-poppins tracking-[0.8px]">Français</p>
      </div>
    </>
  );
};

NavLinkContainer.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default NavLinkContainer;
