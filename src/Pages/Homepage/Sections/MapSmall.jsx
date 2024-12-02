import { Link } from 'react-router-dom';
import {
  FacebookSvg,
  InstagramSvg,
  LinkedinSvg,
} from '../../../components/SvgContainer';
import { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';

const MapSmall = () => {
  const locations = useMemo(
    () => [
      {
        locationTitle: 'Montreal',
        officeName: 'Reliance Construction',
        officeLocation: '3285 J.B. Deschamps',
        city: 'Montreal, Quebec',
        houseNumber: 'H8T 3E4',
        telephoneNumber: '514-631-7999',
        phoneNumber: '514-631-3888',
        email: 'relianceconstruction.com',
        image: 'https://i.postimg.cc/tTLbVBcb/map-1.png',
      },
      {
        locationTitle: 'Toronto',
        officeName: 'Reliance Construction Toronto',
        officeLocation: '200 University Avenue, Suite 400',
        city: 'Toronto, Ontario',
        houseNumber: 'M5H 3C6',
        telephoneNumber: '416-214-2233',
        phoneNumber: '416-214-2237',
        email: 'reception@reliancetoronto.com.com',
        image: 'https://i.postimg.cc/XvVTZR7d/map-2.webp',
      },
      {
        locationTitle: 'Ottawa',
        officeName: 'Reliance Construction Ottawa',
        officeLocation: '55 Metcalfe Street, suite 450',
        city: 'Ottawa, Ontario',
        houseNumber: 'K1P 6L5',
        telephoneNumber: '343-309-5743',
        email: 'reception@relianceconstruction.com',
        image: 'https://i.postimg.cc/525h241f/map-3.png',
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(locations[0]);
  const [tabIndex, setTabIndex] = useState(0); // Track current tab index
  const tabRef = useRef(null); // To animate tab changes

  // Automatic Tab Switching
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (tabIndex + 1) % locations.length;
      setTabIndex(nextIndex);
    }, 3000); // Switch tab every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [locations.length, tabIndex]);

  useEffect(() => {
    // Trigger animation for tab change
    gsap.fromTo(
      tabRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
    setActiveTab(locations[tabIndex]);
  }, [locations, tabIndex]);

  return (
    <div className="map-sm-container px-5 py-6 md:px-8 2xl:px-24 pb-0 w-full md:hidden">
      <div>
        <h3 className="text-4xl font-poppins font-semibold text-primary">
          reliance
        </h3>

        <div className="mt-5 flex items-center gap-4">
          <Link
            to="/"
            className="rounded-full bg-[#174F7A0D] size-10 flex items-center justify-center"
          >
            <FacebookSvg />
          </Link>
          <Link
            to="/"
            className="rounded-full bg-[#174F7A0D] size-10 flex items-center justify-center"
          >
            <InstagramSvg />
          </Link>
          <Link
            to="/"
            className="rounded-full bg-[#174F7A0D] size-10 flex items-center justify-center"
          >
            <LinkedinSvg />
          </Link>
        </div>
      </div>

      {/* locations */}
      <div className="w-full flex mt-5 items-center justify-between gap-3 text-sm bg-primary p-3 font-poppins">
        {locations.map((location, index) => (
          <div
            onClick={() => setTabIndex(index)} // Update tab index on click
            key={location.locationTitle}
            className={`${
              tabIndex === index ? 'bg-white text-black' : 'text-white'
            } px-3 py-3 w-1/3 text-center cursor-pointer`}
          >
            <h3>{location.locationTitle}</h3>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="mt-4">
        <div ref={tabRef}>
          <h3 className="font-poppins font-bold pb-3 text-lg md:text-xl lg:text-2xl text-textColor">
            {activeTab.locationTitle}
          </h3>
          <div className="space-y-1 transition-all duration-500 text-[#616161]">
            <p className>{activeTab.officeName}</p>
            <p className>{activeTab.officeLocation}</p>
            <p className>{activeTab.city}</p>
            <p className>{activeTab.houseNumber}</p>
            <Link to={`tel:${activeTab.telephoneNumber}`} className="block  ">
              T: {activeTab.telephoneNumber}
            </Link>
            {activeTab?.phoneNumber && (
              <Link
                to={`tel:${activeTab.telephoneNumber}`}
                className="block text-sm md:text-base"
              >
                F: {activeTab.phoneNumber}
              </Link>
            )}

            <p>Email: {activeTab.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSmall;
