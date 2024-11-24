import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import Sidebar from './Sidebar';

gsap.registerPlugin(useGSAP);

const NavLinkContainer = ({ navLinks }) => {
  const [isOpen, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);
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
  useGSAP(() => {
    gsap.from(hamburgerRef.current, {
      y: 15,
      duration: 2,
      ease: 'power2.out',
      // stagger: 0.1,
      opacity: 0,
    });
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <div className="flex justify-between text-white absolute top-6 sm:top-8 md:top-12 lg:top-16 left-0 bg-transparent px-5 md:px-8 lg:px-12 w-full">
        {/* logo */}
        <div className="border-4 border-primary h-fit navbar-contents">
          <Link
            to="/"
            className="bg-primary text-sm sm:text-base lg:text-lg font-poppins font-medium border-2 border-white flex items-center justify-center text-white px-5 py-2 md:px-6 md:py-2.5 xl:py-3"
          >
            reliance
          </Link>
        </div>

        {/* hamburger */}
        <div ref={hamburgerRef} className="lg:hidden">
          <Hamburger
            color="#ffffff"
            size={20}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        {/* navLinks */}
        <ul className="hidden lg:flex items-center justify-between gap-8 2xl:gap-10 font-poppins font-semibold navbar-contents">
          {navLinks?.map((link) => (
            <li key={link?.path} className="nav_links">
              <NavLink to={'/'}>{link?.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-5 right-0 px-12 text-white navbar-contents hidden lg:flex">
        <p className="font-poppins tracking-[0.8px]">Français</p>
      </div>

      {/* sidebar */}

      <Sidebar
        sidebarRef={sidebarRef}
        isOpen={isOpen}
        setOpen={setOpen}
        navLinks={navLinks}
      />
    </>
  );
};

NavLinkContainer.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default NavLinkContainer;
