import { useRef } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://i.postimg.cc/T1B4CXwh/1.jpg',
  'https://i.postimg.cc/j5dmjXmq/2.jpg',
  'https://i.postimg.cc/T1KsVPTZ/3.jpg',
  'https://i.postimg.cc/XJHhB56f/4.jpg',
  'https://i.postimg.cc/QNzwXcbs/5.jpg',
  'https://i.postimg.cc/L40Kncmc/6.jpg',
];

const Projects = () => {
  const borderRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const marqueeRef = useRef(null);
  const imagesRefs = useRef([]);

  useGSAP(() => {
    // Title Animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: '.projects-container-sm',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Border Animation
    gsap.fromTo(
      borderRef.current,
      {
        width: '0px',
      },
      {
        width: '100px',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-container-sm',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Description Animation
    gsap.from(descriptionRef.current, {
      scrollTrigger: {
        trigger: '.projects-container-sm',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Marquee Images Animation
    gsap.from(imagesRefs.current, {
      scrollTrigger: {
        trigger: '.projects-container-sm',
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });
    gsap.from('.projects-container-sm-btn', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.projects-container-sm-btn',
        start: 'top 88%',
        toggleActions: 'play reverse play reverse',
      },
    });
  }, []);

  return (
    <div className="bg-white md:hidden px-5 md:px-8 2xl:px-24 pb-14 w-full projects-container-sm">
      <div className="tab-container" ref={titleRef}>
        <TitleContainer
          borderRef={borderRef}
          highlightedText={'Our'}
          title={'Projects'}
          titleColor="dark"
          borderColor="dark"
        />
      </div>

      {/* description */}
      <div ref={descriptionRef} className="text-[#313131] mt-5 space-y-5">
        <p>
          Reliance undertakes a diverse range of projects – from high-rise
          office towers and luxury hotels to expansive shopping centers and
          cutting-edge facilities for manufacturing.
        </p>
        <p>
          Our portfolio reflects a commitment to excellence in both renovation
          and new construction, showcasing our ability to deliver exceptional
          results across a wide spectrum of industries and project scopes.
        </p>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="mt-8">
        <Marquee speed={50} autoFill={true} className="rounded-md">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imagesRefs.current[index] = el)}
              className="h-[320px] w-full !mr-6"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="h-full w-full object-cover rounded-md !mr-6"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="projects-container-sm-btn mt-5">
        <PrimaryButton title={'View our projects'} variant={'secondary'} />
      </div>
    </div>
  );
};

export default Projects;
