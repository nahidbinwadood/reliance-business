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

  // Function to run animations
  const runAnimation = () => {
    // Kill any existing animations
    if (timeline.current) {
      timeline.current.kill();
    }

    // Create new timeline
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: homepageTabContainerRef.current,
        start: 'top 70%', // Start animation when the element is at 70% of viewport
        toggleActions: 'play none none reset', // Play animation when in view
      },
    });

    // Reset elements to their initial state
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

    // Animate the title container and sliders together
    timeline.current
      .from(
        ['.tab-container'], // Combine the two selectors
        {
          x: 100,
          duration: 0.65,
          opacity: 0,
          stagger: 0.2, // Slight stagger between items
          ease: 'power2.out',
        }
      )
      .from('.slider-container', {
        y: 20,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2, // Slight stagger between items
        ease: 'power2.out',
      })
      // Animate the descriptions one by one
      .from(
        '.homepageTabDescription p',
        {
          x: -50,
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          ease: 'power2.out',
        },
        '-=0.8' // Overlap with the previous animation
      )
      // Animate the button
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

  // Initial animation using ScrollTrigger
  useEffect(() => {
    runAnimation();
  }, [runAnimation, tab]); // Trigger animations when the `tab` prop changes

  return (
    <div className="mt-16 grid grid-cols-2 gap-20">
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
        <div className="text-secondaryText homepageTabDescription mt-6 text-start space-y-6 text-lg">
          {tab?.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 homepage-tab-link">
          <PrimaryButton title={tab?.navigationTitle} variant="dark" />
        </div>
      </div>

      {/* Right Content (Sliders) */}
      <div className="grid grid-cols-2 gap-4">
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
