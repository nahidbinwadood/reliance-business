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
  useGSAP(() => {
    gsap.from('.circle_overlay_effect', {
      clipPath: 'circle(0% at 50% 50%)',
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.circle_overlay_container',
        start: 'top 50%',
      },
    });
  });

  return (
    <section className="bg-bgPrimary pt-24 px-24 pb-14 w-full">
      <TitleContainer
        highlightedText="WE ARE "
        title="RELIANCE"
        buttonText="Learn more about Reliance"
        variant="primary"
        borderColor="light"
      />

      {/* cards */}
      <div className="mt-10 grid grid-cols-3">
        {aboutUsInfo?.map((info, index) => (
          <AboutCard key={info?.highlightedText} info={info} index={index} />
        ))}
      </div>

      {/* Counts */}
      <div className="relative p-2 mt-20 h-full circle_overlay_container circle_overlay_effect">
        {/* Box Shape */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-textColor -translate-x-3 -translate-y-3 z-10"></div>

        {/* logo */}

        <div className="absolute top-20 right-20 font-poppins border-2 border-white px-5 py-3 z-30 text-white text-xl font-semibold">
          <p>reliance</p>
        </div>

        {/* Background Image Container */}
        <div
          className="min-h-[750px] rounded-b-[30px] bg-no-repeat bg-center bg-cover overflow-hidden relative z-50 "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutBanner})`,
          }}
        >
          {/* overlay */}
          <div className="absolute w-full h-full bg-blue-400 z-50 hidden"></div>
          {/* Content */}
          <div className="h-[750px] flex items-end justify-center py-20 px-20 relative z-20">
            {/* content cards */}
            <div className="w-full grid grid-cols-4 gap-10">
              {contentsCardInfo?.map((info) => (
                <AboutContentCard info={info} key={info?.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
