import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Hero = () => {
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
    <div className="h-full w-full flex items-center font-poppins text-white uppercase">
      <div className="text-6xl 2xl:text-8xl flex flex-col font-extrabold z-10 ml-40">
        <div className={textHolder}>
          {' '}
          <h1 className="hero_text">Boldly</h1>
        </div>
        <div className={textHolder}>
          <h1 className="ml-16 text-textColor hero_text">breaking</h1>
        </div>{' '}
        <div className={textHolder}>
          <h1 className="ml-40 text-textColor hero_text">ground</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
