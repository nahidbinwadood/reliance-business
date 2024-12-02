import { useEffect, useState } from 'react';
import bannerBg from '../assets/videos/banner-bg.mp4';
import bannerSmall from '../assets/videos/banner-bg-mobile.mp4';
const HeroBg = () => {
  const [screenSize, setScreenSize] = useState('large');
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
  return (
    <>
      <video
        className="absolute h top-0 left-0 w-full h-full object-cover object-center appearance-none focus:outline-none"
        src={screenSize === 'small' ? bannerSmall : bannerBg}
        autoPlay
        muted
        loop
      ></video>

      {/* shade */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 18, 111, 0.63) 0%, rgba(0, 18, 111, 0.54) 43%, rgba(64, 150, 250, 0.00) 100%)',
        }}
      />
    </>
  );
};

export default HeroBg;
