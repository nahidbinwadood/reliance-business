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

  // Rotate tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [locations.length]);

  // Recalculate marker position whenever the active tab changes or container resizes
  useEffect(() => {
    const calculateMarkerPosition = () => {
      const container = containerRef.current;
      if (container) {
        const tabWidth = container.offsetWidth / locations.length;
        const newPosition = tabWidth * activeIndex + tabWidth / 2 - 25; // Center the marker
        setMarkerPosition(newPosition);
      }
    };

    calculateMarkerPosition();

    // Recalculate on window resize
    window.addEventListener('resize', calculateMarkerPosition);
    return () => window.removeEventListener('resize', calculateMarkerPosition);
  }, [activeIndex, locations.length]);

  // GSAP Animations
  useGSAP(() => {
    gsap.fromTo(
      '.map-location',
      {
        opacity: 0,
        scale: 0.9,
      },
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

    gsap.from('.map-marker', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.fromTo(
      '.location-details',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.map-location',
          start: 'top 80%',
        },
      }
    );
  });

  return (
    <div
      className="mt-16 relative transition-all duration-1000 ease-in-out bg-[#f4f8fb] map-location"
      style={{
        backgroundImage: `url(${locations[activeIndex].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '400px',
      }}
    >
      <div
        ref={containerRef}
        className="w-full -bottom-[200px] left-1/2 transform -translate-x-1/2 bg-white border-textColor max-w-[1280px] h-full max-h-[400px] shadow-lg border rounded-2xl flex px-12 py-20 relative"
      >
        {/* Active marker */}
        <div
          className="absolute -top-[28px] map-marker transition-all duration-500 z-10"
          style={{
            left: `${markerPosition}px`,
          }}
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

        {/* Location details */}
        <div className="w-full flex items-center justify-between location-details">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`text-center px-16 transition-all duration-500 ${
                activeIndex === index ? 'scale-105' : 'scale-100 opacity-70'
              }`}
            >
              <h3
                className={`font-poppins font-bold text-xl transition-all duration-500 ${
                  activeIndex === index
                    ? 'text-textColor'
                    : 'text-[#666565] hover:text-textColor'
                }`}
              >
                {location.locationTitle}
              </h3>

              <div
                className={`mt-2 space-y-1 transition-all duration-500 ${
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
