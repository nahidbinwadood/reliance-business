/* eslint-disable react/prop-types */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Hero = ({ heroTitleRef }) => {
  const textHolder = `overflow-hidden`;

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out', duration: 1.5 },
    });

    // Animate the main title text (heroText) with stagger effect
    tl.from('.hero_text', {
      y: 150,
      stagger: 0.3,
    });

    // Once heroText animation completes, animate the border and small text
    tl.fromTo(
      '.smallTitleBorder',
      { width: '0%' },
      { width: '100%', duration: 1.5, ease: 'power3.out' },
      '-=0.2' // Start the border animation slightly before the previous animation ends for smooth overlap
    );

    tl.from(
      '.smallTitle',
      {
        y: 150,
        stagger: 0.2, // Stagger the small titles for a smooth effect
        opacity: 0,
        duration: 1,
      },
      '<'
    ); // This ensures the small titles start immediately after the border animation
  });

  return (
    <div
      ref={heroTitleRef}
      className="h-full w-full flex items-center font-poppins text-white uppercase"
    >
      <div className="text-4xl sm:gap-1 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl flex flex-col font-extrabold z-10 ml-10 sm:ml-28 md:ml-36 2xl:ml-40">
        <div className={textHolder}>
          <h1 className="hero_text">Boldly</h1>
        </div>
        <div className={textHolder}>
          <h1 className="ml-7 sm:ml-10 md:ml-12 2xl:ml-16 text-textColor hero_text">
            breaking
          </h1>
        </div>
        <div className={textHolder}>
          <h1 className="ml-14 sm:ml-20 md:ml-28 2xl:ml-40 text-textColor hero_text">
            ground
          </h1>
        </div>

        {/* Mobile screen */}
        <div className="mt-5 ml-14 md:hidden">
          {/* Border */}
          <div className="h-[2px] w-full bg-white smallTitleBorder"></div>
          <h2 className="text-sm tracking-[3px] font-semibold uppercase pt-4">
            <span className="smallTitle">We</span>{' '}
            <span className="ml-1 smallTitle">are</span>{' '}
            <span className="ml-1 smallTitle">reliance</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
