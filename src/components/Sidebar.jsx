/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, setOpen, navLinks, sidebarRef, subMenu }) => {
  // State to track visibility of submenus
  const [activeMenu, setActiveMenu] = useState(null);
  const submenuRef = useRef(null);
  const submenuContentRef = useRef(null);

  useGSAP(() => {
    gsap.from('.sidebar-navLinks', {
      x: -150,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out',
      blur: 10,
      opacity: 0,
    });
  });

  const handleMenuClick = (menuTitle) => {
    // Toggle the submenu when "Who we are" is clicked
    setActiveMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  useEffect(() => {
    if (submenuRef.current && submenuContentRef.current) {
      const contentHeight = submenuContentRef.current.offsetHeight;

      if (activeMenu === 'Who we are') {
        // Expand the submenu
        gsap.fromTo(
          submenuRef.current,
          {
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            opacity: 0,
          },
          {
            height: contentHeight,
            paddingTop: 16,
            paddingBottom: 16,
            opacity: 1,
            duration: 0.2,
            ease: 'power2.inOut',
          }
        );
      } else {
        // Collapse the submenu
        gsap.to(submenuRef.current, {
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
        });
      }
    }
  }, [activeMenu]);

  return (
    <div
      ref={sidebarRef}
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
          <li key={link?.path} className="relative">
            <NavLink
              to={'/'}
              className="w-full flex items-center gap-4 sidebar-navLinks"
              onClick={() =>
                link?.title === 'Who we are' && handleMenuClick(link?.title)
              }
            >
              {link?.title}

              {/* Down arrow icon for Who we are */}
              {link?.title === 'Who we are' && (
                <span className="ml-auto transition-transform duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-500 ${
                      activeMenu === 'Who we are' ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              )}
            </NavLink>

            {/* Submenu (Only visible when the menu is active) */}
            {link?.title === 'Who we are' && (
              <div
                ref={submenuRef}
                className="overflow-hidden transition-all duration-500 ml-2"
                style={{
                  height: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  opacity: 0,
                }}
              >
                <div
                  ref={submenuContentRef}
                  className="flex flex-col gap-4 text-start"
                >
                  {subMenu?.map((menu) => (
                    <NavLink
                      to={'/'}
                      key={menu?.path}
                      className="text-white rounded-md transition-all duration-500 w-full"
                    >
                      {menu.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* French */}
      <div className="absolute top-3 right-0 px-5 text-sm md:text-base text-white navbar-contents">
        <p className="font-poppins tracking-[0.8px]">Français</p>
      </div>
    </div>
  );
};

export default Sidebar;