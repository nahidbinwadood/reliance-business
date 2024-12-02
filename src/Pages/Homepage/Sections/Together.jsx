import { useRef } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import persons from '../../../assets/images/persons.png';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Together = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const actionBtnRef = useRef(null);
  const borderSmRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title and Description Animation
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse', // Play forward on enter, reverse on leave
      },
    });

    const titleElements = titleRef.current.querySelectorAll('.animate-title');
    const descriptionElements = descriptionRef.current.querySelectorAll('p');

    titleAnimation
      .fromTo(
        titleElements,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        }
      )
      .fromTo(
        descriptionElements,
        {
          y: 30,
          opacity: 0,
          filter: 'blur(10px)',
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3,
        },
        '-=0.5' // Overlap with previous animation
      );

    // Button Animation - Specific to viewport
    gsap.fromTo(
      actionBtnRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: actionBtnRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse', // Play forward on enter, reverse on leave
        },
      }
    );

    // Original Image Container Animations
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.title-white-overlay',
        start: 'top 90%',
        toggleActions: 'play reverse play reverse',
      },
    });

    // White container scale animation
    imageTimeline.from('.title-white-overlay', {
      scale: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Image clip-path animation
    imageTimeline.from(
      '.title_circle_overlay_effect',
      {
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        duration: 1,
        ease: 'power2.out',
      },
      0.1
    );

    gsap.from('.togetherTitle', {
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse', // Play forward on enter, reverse on leave
      },
      opacity: 0,
    });
    gsap.fromTo(
      borderSmRef.current,
      {
        width: '0px',
      },
      {
        width: '200px',
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current, // Change this to the section or titleRef, depending on when you want to trigger
          start: 'top 75%',  // Adjusted trigger to start earlier
          end: 'bottom 20%',
          toggleActions: 'play none none reverse', 

        },
      }
    );

  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-6 mb-10 title-together-container lg:mb-20"
    >
      {/* Title Section */}
      <div ref={titleRef} className="px-6 md:px-8 2xl:px-24">
        {/* mobile */}
        <div className="md:hidden">
          <div className="font-poppins uppercase">
            <h2 className="text-3xl md:text-4xl togetherTitle xl:text-5xl font-extrabold text-black 2xl:leading-[56px]">
              Building Future Skylines
              <span className="text-textColor"> Together</span>
            </h2>

            <div
              ref={borderSmRef}
              className={`mt-3 lg:mt-4 h-1 mx-auto !w-[200px] togetherTitleBorder bg-primary  `}
            />
          </div>
        </div>

        <div className="animate-title hidden md:block">
          <TitleContainer
            highlightedText="BUILDING FUTURE SKYLINES"
            title="TOGETHER"
            borderColor="dark"
            titleColor="dark"
          />
        </div>

        <div
          ref={descriptionRef}
          className="mt-5 md:mt-7 space-y-4 md:space-y-5 lg:space-y-7 text-[#313131] leading-[24px] together-description"
        >
          <p className="hidden md:block">
            Reliance undertakes a diverse range of projects – from high-rise
            office towers and luxury hotels to expansive shopping centers and
            cutting-edge facilities for manufacturing.
          </p>
          <p className="hidden md:block">
            Our portfolio reflects a commitment to excellence in both renovation
            and new construction, showcasing our ability to deliver exceptional
            results across a wide spectrum of industries and project scopes.
          </p>
          <p className="md:hidden">
            Our bold approach drives our momentum to challenge the status quo,
            push the envelope, and lead the future of innovation. Joining
            Reliance means becoming part of a committed and collaborative team
            who delivers superior results – and creates lasting heritage across
            Eastern Canada.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        ref={imageContainerRef}
        className="mx-5 md:mx-8 2xl:mx-24 mt-8 relative bg-primary/50 title-white-overlay rounded-md overflow-hidden"
      >
        <div className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[550px] title_circle_overlay_effect rounded-md overflow-hidden">
          <img
            className="together-image w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[550px] object-cover rounded-md"
            src={persons}
            alt="Persons"
          />
        </div>
      </div>

      {/* Button Section */}
      <div
        ref={actionBtnRef}
        className="px-6 md:px-8 2xl:px-24 mt-5 md:mt-8 together-action-btn"
      >
        <PrimaryButton title="See Career Opportunities" variant="dark" />
      </div>
    </div>
  );
};

export default Together;
