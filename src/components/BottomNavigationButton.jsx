import { useGSAP } from '@gsap/react';
import { DownArrowSvg } from './SvgContainer';
import gsap from 'gsap';

const BottomNavigationButton = () => {
  useGSAP(() => {
    gsap.from('.hero-btn', {
      y: 10,
      duration: 1,
      delay: 1.59,
      opacity: 0,
    });
  });

  return (
    <div className="absolute -bottom-7 md:-bottom-8 lg:-bottom-10 size-12 md:size-16 lg:size-20 left-12 sm:left-20 md:left-36 lg:left-44 xl:left-52 2xl:left-52 flex items-center justify-center bg-[#00126F] p-1 border-[3px] lg:border-[6px] border-white cursor-pointer hero-btn">
      <div className="bg-primary border border-white bg-gradient-to-br from-[#00126F] via-[#00126F] to-[#00126F] shadow-[0px_22.667px_36px_rgba(0,18,111,0.2)] z-20 p-2 md:p-3">
        <DownArrowSvg />
      </div>
    </div>
  );
};

export default BottomNavigationButton;
