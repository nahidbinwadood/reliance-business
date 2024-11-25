import { useEffect, useState } from 'react';
import bannerBg from '../assets/videos/banner-bg.mp4';
import bannerSmall from "../assets/videos/banner-bg-mobile.mp4"
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,18,111,0.63)] via-[rgba(0,18,111,0.27)] to-[rgba(0,18,111,0.09)]" />
    </>
  );
};

export default HeroBg;
