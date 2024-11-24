/* eslint-disable react/prop-types */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Hero = ({heroTitleRef}) => {
  const textHolder = `overflow-hidden `;
  // const textRef = useRef(null);

  useGSAP(() => {
    gsap.from('.hero_text', {
      y: 250,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2,
    });
  });

  return (
    <div ref={heroTitleRef} className="h-full w-full flex items-center font-poppins text-white uppercase">
      <div className="text-4xl sm:gap-1 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl flex flex-col font-extrabold z-10 ml-10 sm:ml-28 md:ml-36 2xl:ml-40">
        <div className={textHolder}>
          {' '}
          <h1 className="hero_text">Boldly</h1>
        </div>
        <div className={textHolder}>
          <h1 className="ml-7 sm:ml-10 md:ml-12  2xl:ml-16 text-textColor hero_text">breaking</h1>
        </div>{' '}
        <div className={textHolder}>
          <h1 className="ml-14 sm:ml-20 md:ml-28 2xl:ml-40 text-textColor hero_text">ground</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
