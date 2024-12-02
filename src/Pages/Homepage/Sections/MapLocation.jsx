import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MapLocation = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

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
      return () =>
        window.removeEventListener('resize', calculateMarkerPosition);
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
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.map-location',
          start: 'top 90%',
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
        duration: 0.5,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.location-details',
          start: 'top 90%',
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

      // Add delay for the button after the image container
      gsap.fromTo(
        '.together-action-btn',  // Adjust to your actual button class
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.3,  // 0.3-second delay after the image container
          scrollTrigger: {
            trigger: '.map-location', // Adjust trigger based on your section
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',  // Reverse animation on scroll out
          },
        }
      );
    }
  }, [screenSize]);
  return (
    <div className="map-location hidden">
      {/* Background Map */}
      <div
        className="w-full transition-all duration-1000 ease-in-out"
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
        className={`max-w-[1280px] mx-5 md:mx-8 lg:mx-12 xl:mx-auto bg-white shadow-lg rounded-2xl relative border-textColor border-[3px]
          ${screenSize === 'small' ? 'mt-8' : '-mt-[200px]'}
          ${
            screenSize === 'medium'
              ? 'px-6 py-8'
              : screenSize === 'large'
              ? 'px-12 py-20'
              : 'px-4 py-6'
          }
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
              width="42"
              height="49"
              viewBox="0 0 42 49"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 23.8711 0.576173 26.6076 1.6192 29.1003C5.94533 40.912 21.1104 49 21.1104 49C21.1104 49 39.7389 39.0648 41.5928 25.1361C41.8599 23.7989 42 22.4158 42 21Z"
                fill="#4096FA"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.6509 24.7849L38.6318 24.8814L38.619 24.9789C37.8426 30.8763 33.4427 36.2795 28.6948 40.4277C26.3812 42.4489 24.1126 44.0616 22.42 45.1691C21.9283 45.4908 21.4872 45.7686 21.1104 46C20.8599 45.8462 20.5811 45.672 20.2779 45.4779C18.8615 44.5714 16.9286 43.2433 14.8719 41.5641C10.6804 38.142 6.31788 33.5375 4.4362 28.3436L4.41287 28.2792L4.38668 28.2159C3.4944 26.0601 3 23.691 3 21.1975C3 11.1473 11.0589 3 21 3C30.9411 3 39 11.1473 39 21.1975C39 22.4283 38.8796 23.6276 38.6509 24.7849Z"
                fill="#00126F"
              />
              <path
                d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z"
                fill="white"
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
              className={`p-5 location-card transition-all duration-500 text-center
                ${index==0 ?"pr-14":"pr-0"}
                ${index==2 ?"pl-14":"pr-0 pl-0"}
                 ${
                index == 2 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${screenSize === 'small' ? 'border-b-none' : 'px-4 py-4'} ${
                screenSize === 'large' && activeIndex === index
                  ? 'scale-105'
                  : 'scale-100'
              } ${
                activeIndex !== index ? 'opacity-70' : 'opacity-100'
              } cursor-pointer rounded-lg`}
              onClick={() => setActiveIndex(index)}
            >
              <h3
                className={`font-poppins font-bold pb-3 text-lg md:text-xl lg:text-2xl ${
                  activeIndex === index ? 'text-textColor' : 'text-[#666565]'
                }`}
              >
                {location.locationTitle}
              </h3>
              <div
                className={`space-y-1 transition-all duration-500 ${
                  activeIndex === index ? 'text-black' : 'text-[#999DA2]'
                }`}
              >
                <p className="text-sm lg:text-base">{location.officeName}</p>
                <p className="text-sm lg:text-base">
                  {location.officeLocation}
                </p>
                <p className="text-sm lg:text-base">{location.city}</p>
                <p className="text-sm lg:text-base">{location.houseNumber}</p>
                <Link
                  to={`tel:${location.telephoneNumber}`}
                  className="block text-sm md:text-base"
                >
                  T: {location.telephoneNumber}
                </Link>
                {location.phoneNumber && (
                  <Link
                    to={`tel:${location.phoneNumber}`}
                    className="block text-sm md:text-base"
                  >
                    T: {location.phoneNumber}
                  </Link>
                )}
                <Link
                  to={`mailto:${location.email}`}
                  className="block text-sm md:text-base"
                >
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
