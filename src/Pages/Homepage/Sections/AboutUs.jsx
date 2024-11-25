import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutBanner from '../../../assets/images/about-bg.jpg';
import AboutCard from '../../../components/cards/AboutCard';
import AboutContentCard from '../../../components/cards/AboutContentCard';
import {
  CheckSvg,
  ClockSvg,
  LocationSvg,
  PersonSvg,
} from '../../../components/SvgContainer';
import TitleContainer from '../../../components/TitleContainer';
const aboutUsInfo = [
  {
    highlightedText: 'Our legacy',
    description:
      'is founded on 75 years of experience developing over 700 unique building projects.',
  },
  {
    highlightedText: 'We proudly',
    description:
      'partner with our clients to deliver a personalized and optimized construction experience.',
  },
  {
    highlightedText: 'We strive',
    description:
      'to understand and exceed the unique needs of each project, fostering collaboration and innovation throughout the construction process',
  },
];

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contentsCardInfo = [
  {
    svg: <LocationSvg />,
    count: 3,
    title: 'Offices',
  },
  {
    svg: <PersonSvg />,
    count: 200,
    plus: true,
    title: 'Employees',
  },
  {
    svg: <ClockSvg />,
    count: 70,
    plus: true,
    title: 'Years',
  },
  {
    svg: <CheckSvg />,
    count: 132,
    title: 'Active Projects',
  },
];

const AboutUs = () => {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  const aboutUsSectionRef = useRef(null);
  const titleContainerTitleRef = useRef(null);
  const titleContainerBtnRef = useRef(null);
  const countersRefs = useRef([]);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section-container',
        start: 'top 90%',
      },
    });

    tl.from(titleContainerTitleRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.5,
    }).from(titleContainerBtnRef.current, {
      x: 30,
      opacity: 0,
      duration: 0.6,
    });

    const tlCard = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-us-cards-container',
        start: 'top 70%', // Trigger animation when cards are in view
        end: '+=300', // Smoothens the duration of the scroll-triggered animation
        toggleActions: 'play none none reverse', // Control animation play and reset
      },
    });
    tlCard.from('.about-card', {
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      opacity: 0,
    });
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.circle_overlay_container',
        start: 'top 100%',
      },
    });

    // Step 1: Scale the white container (first animation)
    tl.from('.circle_overlay_container', {
      scale: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Step 2: Start the clip-path animation for the image container (second animation)
    tl.from(
      '.circle_overlay_effect',
      {
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        duration: 1.2,
        ease: 'power2.out',
      },
      0.2 // Start 0.5 seconds after the first animation begins
    );

    // Step 3: Background transparency animation (third animation)
    tl.to(
      '.circle_overlay_container',
      {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        duration: 0.5,
        ease: 'power2.out',
      },
      0.5 // Start immediately after the first animation ends
    );

    countersRefs.current.forEach((ref) => {
      gsap.from(ref, {
        scrollTrigger: {
          trigger: ref,
          start: 'top 75%',
        },
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        onStart: () => {
          ref.dataset.inView = true; // Mark as in view
        },
      });
    });
  });

  return (
    <section
      ref={aboutUsSectionRef}
      className="bg-bgPrimary pt-16 lg:pt-24 px-5 md:px-8 2xl:px-24 pb-14 w-full about-section-container"
    >
      <div>
        <TitleContainer
          titleContainerBtnRef={titleContainerBtnRef}
          titleContainerTitleRef={titleContainerTitleRef}
          highlightedText="WE ARE "
          title="RELIANCE"
          buttonText="Learn more about Reliance"
          variant="primary"
          borderColor="light"
        />
      </div>

      {/* cards */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3 about-us-cards-container">
        {aboutUsInfo?.map((info, index) => (
          <AboutCard key={info?.highlightedText} info={info} index={index} />
        ))}
      </div>

      {/* Counts */}

      <div className="relative mt-20 h-full circle_overlay_container bg-blue-100/40">
        <div className="p-2 h-full circle_overlay_effect">
          {/* Box Shape */}
          <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-textColor -translate-x-2 -translate-y-2 md:-translate-x-3 md:-translate-y-3 z-10"></div>

          {/* Logo */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20 font-poppins border-2 border-white px-3 py-2 md:px-5 md:py-3 z-30 text-white text-base md:text-xl font-semibold">
            <p>reliance</p>
          </div>

          {/* Background Image Container */}
          <div
            className=" xl:min-h-[600px] 2xl:min-h-[750px] rounded-b-[20px] md:rounded-b-[30px] bg-no-repeat bg-center bg-cover overflow-hidden relative z-50"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutBanner})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute w-full h-full bg-blue-400 z-50 hidden"></div>

            {/* Content */}
            <div className="h-fit xl:h-[600px] 2xl:h-[750px] flex items-end justify-center py-10 px-5 md:py-20 md:px-20 relative z-20">
              {/* Content Cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {contentsCardInfo?.map((info, index) => (
                  <AboutContentCard
                    aboutCounterRef={(el) => (countersRefs.current[index] = el)}
                    info={info}
                    key={info?.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
