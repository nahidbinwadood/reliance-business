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
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Rotate tabs every 3 seconds (only on desktop)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [locations.length, isMobile]);

  // Calculate marker position for desktop
  useEffect(() => {
    if (!isMobile) {
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
  }, [activeIndex, locations.length, isMobile]);

  // GSAP Animations
  useGSAP(() => {
    gsap.fromTo(
      '.map-location',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.map-location',
          start: 'top 80%',
        },
      }
    );

    if (!isMobile) {
      gsap.from('.map-marker', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [isMobile]);

  return (
    <div
      className="mt-16 relative transition-all duration-1000 ease-in-out bg-[#f4f8fb] map-location"
      style={{
        backgroundImage: `url(${locations[activeIndex].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: isMobile ? '500px' : '400px',
      }}
    >
      <div
        ref={containerRef}
        className={`w-full left-1/2 transform -translate-x-1/2 bg-white border-textColor max-w-[1280px] shadow-lg border rounded-2xl relative ${
          isMobile
            ? 'px-4 py-6 mx-auto mt-8 h-auto'
            : '-bottom-[200px] h-full max-h-[400px] px-12 py-20'
        }`}
      >
        {/* Marker SVG - Only show on desktop */}
        {!isMobile && (
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

        {/* Location details */}
        <div className={`w-full location-details ${
          isMobile
            ? 'flex flex-col space-y-8'
            : 'flex items-center justify-between'
        }`}>
          {locations.map((location, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isMobile
                  ? 'text-left px-4 py-4 border-b last:border-b-0'
                  : 'text-center px-16'
              } ${
                activeIndex === index
                  ? 'scale-105'
                  : 'scale-100 opacity-70'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h3
                className={`font-poppins font-bold ${
                  isMobile ? 'text-lg' : 'text-xl'
                } transition-all duration-500 ${
                  activeIndex === index
                    ? 'text-textColor'
                    : 'text-[#666565] hover:text-textColor'
                }`}
              >
                {location.locationTitle}
              </h3>

              <div
                className={`${
                  isMobile ? 'mt-1' : 'mt-2'
                } space-y-1 transition-all duration-500 ${
                  activeIndex === index
                    ? 'text-black'
                    : 'text-[#999DA2] hover:text-black'
                }`}
              >
                <p>{location.officeName}</p>
                <p>{location.officeLocation}</p>
                <p>{location.city}</p>
                <p>{location.houseNumber}</p>
                <Link to={`tel:${location.telephoneNumber}`} className="block">
                  T: {location.telephoneNumber}
                </Link>
                {location.phoneNumber && (
                  <Link to={`tel:${location.phoneNumber}`} className="block">
                    T: {location.phoneNumber}
                  </Link>
                )}
                <Link to={`mailto:${location.email}`} className="block">
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