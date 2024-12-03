import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import Sidebar from './Sidebar';

gsap.registerPlugin(useGSAP);

const subMenu = [
  {
    title: 'Company',
    path: '/company',
  },
  {
    title: 'Our Story',
    path: '/our-story',
  },
  {
    title: 'Team',
    path: '/team',
  },
  {
    title: 'Accessibility',
    path: '/accessibility',
  },
];

const NavLinkContainer = ({ navLinks }) => {
  const [isOpen, setOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const submenuRef = useRef(null);

  useGSAP(() => {
    // Initial navbar animations remain the same
    gsap.from('.navbar-contents', {
      y: 15,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out',
      blur: 10,
      opacity: 0,
    });

    gsap.from('.nav_links', {
      y: 15,
      duration: 2,
      ease: 'power2.out',
      opacity: 0,
    });

    gsap.from(hamburgerRef.current, {
      y: 15,
      duration: 2,
      ease: 'power2.out',
      opacity: 0,
    });
  }, []);

  // GSAP animation for submenu
  useGSAP(() => {
    if (submenuRef.current) {
      if (showSubmenu) {
        gsap.to(submenuRef.current, {
          y: 5,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          display: 'flex',
        });
      } else {
        gsap.to(submenuRef.current, {
          y: 30,
          x: -100,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          display: 'none',
        });
      }
    }
  }, [showSubmenu]);

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
        <div ref={hamburgerRef} className="lg:hidden bg-[#00126F] rounded-md">
          <Hamburger
            color="#ffffff"
            size={20}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        {/* navLinks */}
        <ul
          className="hidden lg:flex items-center justify-between gap-8 2xl:gap-10 font-poppins font-semibold navbar-contents"
          onMouseLeave={() => setShowSubmenu(false)}
        >
          {navLinks?.map((link) => (
            <li
              key={link?.path}
              className={`nav_links cursor-pointer ${
                link?.title === 'Who we are' ? 'relative' : ''
              }`}
              onMouseEnter={() => {
                setShowSubmenu(link?.title === 'Who we are');
              }}
            >
              <NavLink
                className=""
                to={link?.title === 'Who we are' ? '#' : link?.path}
              >
                {link?.title}
              </NavLink>

              {/* submenu */}
              {link?.title === 'Who we are' && (
                <div
                  ref={submenuRef}
                  className={`absolute bg-white rounded-lg
                    font-poppins font-semibold
                    text-black/50 p-3
                    flex-col items-center gap-2 justify-center
                    left-1/2 transform -translate-x-1/2
                    top-full mt-4
                    min-w-[200px]
                    opacity-0
                    shadow-lg
                    ${showSubmenu ? 'block' : 'hidden'}
                  `}
                  onMouseEnter={() => setShowSubmenu(true)}
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  {subMenu?.map((menu) => (
                    <NavLink
                      key={menu.path}
                      onClick={() => setShowSubmenu(false)}

                      className="text-black/70 hover:text-black py-2 transition w-full text-start px-5 hover:bg-gray-50"
                    >
                      {menu.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar for mobile view */}
      {isOpen && (
        <Sidebar
          ref={sidebarRef}
          isOpen={isOpen}
          setOpen={setOpen}
          navLinks={navLinks}
        />
      )}
    </>
  );
};

NavLinkContainer.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default NavLinkContainer;
