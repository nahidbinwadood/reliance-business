import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MapLocation = () => {
  const locations = [
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
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [markerPosition, setMarkerPosition] = useState(0);
  const [screenSize, setScreenSize] = useState('large');

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('small');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-rotate tabs (only on large screens)
  useEffect(() => {
    if (screenSize === 'large') {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [locations.length, screenSize]);

  // Marker position calculation (only on large screens)
  useEffect(() => {
    if (screenSize === 'large') {
      const calculateMarkerPosition = () => {
        const container = containerRef.current;
        if (container) {
          const tabWidth = container.offsetWidth / locations.length;
          const newPosition = tabWidth * activeIndex + tabWidth / 2 - 25;
          setMarkerPosition(newPosition);
        }
      };

      calculateMarkerPosition();
      window.addEventListener('resize', calculateMarkerPosition);
      return () => window.removeEventListener('resize', calculateMarkerPosition);
    }
  }, [activeIndex, locations.length, screenSize]);

  // GSAP Animations
  useGSAP(() => {
    gsap.fromTo(
      '.map-location',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.map-location',
          start: 'top 80%',
        },
      }
    );

    // Animate location cards
    gsap.fromTo(
      '.location-card',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.location-details',
          start: 'top 80%',
        },
      }
    );

    if (screenSize === 'large') {
      gsap.from('.map-marker', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [screenSize]);

  return (
    <div className="map-location">
      {/* Background Map */}
      <div
        className="w-full transition-all duration-1000 ease-in-out bg-[#f4f8fb]"
        style={{
          backgroundImage: `url(${locations[activeIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: screenSize === 'small' ? '500px' : '400px',
        }}
      />

      {/* Locations Container */}
      <div
        ref={containerRef}
        className={`max-w-[1280px] mx-5 md:mx-8 2xl:mx-auto bg-white shadow-lg rounded-2xl relative border border-textColor
          ${screenSize === 'small' ? 'mt-8' : '-mt-[200px]'}
          ${screenSize === 'medium' ? 'px-6 py-8' : screenSize === 'large' ? 'px-12 py-20' : 'px-4 py-6'}
        `}
      >
        {/* Marker - Only for large screens */}
        {screenSize === 'large' && (
          <div
            className="absolute -top-[28px] map-marker transition-all duration-500 z-10"
            style={{ left: `${markerPosition}px` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="29"
              viewBox="0 0 50 29"
              fill="white"
            >
              <path d="M12 26H38.5L49.5 29H2.5L12 26Z" fill="white" />
              <path
                d="M0 27.5C8 27.5 17.1688 27.8044 21 18.5C24.5 10 25.5 4 26 2C27.5 7.5 30.5 18 31.7056 20C32.9963 22.1411 37.2056 28.5 49.2056 27.5"
                stroke="#4096FA"
              />
            </svg>
          </div>
        )}

        {/* Location Cards */}
        <div
          className={`location-details w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-5 location-card transition-all duration-500 text-center ${index==2? "md:col-span-2 lg:col-span-1" : ""} ${
                screenSize === 'small' ? 'border-b-none' : 'px-4 py-4'
              } ${screenSize === 'large' && activeIndex === index ? 'scale-105' : 'scale-100'} ${
                activeIndex !== index ? 'opacity-70' : 'opacity-100'
              } cursor-pointer rounded-lg`}
              onClick={() => setActiveIndex(index)}
            >
              <h3
                className={`font-poppins font-bold pb-3 ${
                  screenSize === 'small' ? 'text-lg' : screenSize === 'medium' ? 'text-xl' : 'text-2xl'
                } ${activeIndex === index ? 'text-textColor' : 'text-[#666565]'}`}
              >
                {location.locationTitle}
              </h3>
              <div
                className={`space-y-1 transition-all duration-500 ${
                  activeIndex === index ? 'text-black' : 'text-[#999DA2]'
                }`}
              >
                <p className="text-sm lg:text-base">{location.officeName}</p>
                <p className="text-sm lg:text-base">{location.officeLocation}</p>
                <p className="text-sm lg:text-base">{location.city}</p>
                <p className="text-sm lg:text-base">{location.houseNumber}</p>
                <Link to={`tel:${location.telephoneNumber}`} className="block text-sm md:text-base">
                  T: {location.telephoneNumber}
                </Link>
                {location.phoneNumber && (
                  <Link to={`tel:${location.phoneNumber}`} className="block text-sm md:text-base">
                    T: {location.phoneNumber}
                  </Link>
                )}
                <Link to={`mailto:${location.email}`} className="block text-sm md:text-base">
                  {location.email}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
