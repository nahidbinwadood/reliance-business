/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import LeftSlider from './sliders/LeftSlider';
import RightSlider from './sliders/RightSlider';
import TitleContainer from './TitleContainer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TabContents = ({ tab, homepageTabContainerRef }) => {
  const tabContentsRef = useRef(null);
  const timeline = useRef(null);

  const runAnimation = () => {
    if (timeline.current) {
      timeline.current.kill();
    }

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: homepageTabContainerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reset',
      },
    });

    gsap.set(
      [
        '.tab-container',
        '.homepageTabDescription p',
        '.homepage-tab-link',
        '.slider-container',
      ],
      {
        clearProps: 'all',
      }
    );

    timeline.current
      .from('.tab-container', {
        x: 100,
        duration: 0.65,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
      })
      .from('.slider-container', {
        y: 20,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
      })
      .from(
        '.homepageTabDescription p',
        {
          x: -50,
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          ease: 'power2.out',
        },
        '-=0.8'
      )
      .from(
        '.homepage-tab-link',
        {
          x: 50,
          duration: 1,
          opacity: 0,
          ease: 'power2.out',
        },
        '-=0.8'
      );
  };

  useEffect(() => {
    runAnimation();
  }, [runAnimation, tab]);

  return (
    <div className="mt-8 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-20">
      {/* Left Content */}
      <div className="flex justify-center flex-col">
        {/* Title Container */}
        <div className="tab-container" ref={tabContentsRef}>
          <TitleContainer
            highlightedText={tab?.highlightedText}
            title={tab?.contentTitle}
            titleColor="dark"
            borderColor="dark"
          />
        </div>

        {/* Description */}
        <div className="text-secondaryText homepageTabDescription mt-6 text-start space-y-4 md:space-y-6 text-base md:text-lg">
          {tab?.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-10 homepage-tab-link">
          <PrimaryButton title={tab?.navigationTitle} variant="dark" />
        </div>
      </div>

      {/* Right Content (Sliders) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="slider-container">
          <LeftSlider leftSliderImages={tab?.images?.leftSliderImages} />
        </div>
        <div className="slider-container">
          <RightSlider rightSliderImages={tab?.images?.rightSliderImages} />
        </div>
      </div>
    </div>
  );
};

export default TabContents;
