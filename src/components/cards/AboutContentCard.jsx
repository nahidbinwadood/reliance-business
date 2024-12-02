import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const AboutContentCard = ({ info }) => {
  const { svg, count, title, plus } = info;

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.3, // Trigger when 30% of the component is in the viewport
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      // Use GSAP to animate the counter values when the card is in view
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          stagger: 0.2, // Stagger each counter by 0.2s
        }
      );
    }
  }, [isVisible, ref]);

  return (
    <div ref={ref} className="about-counter">
      <div>
        <div className="pb-2 md:pb-3 lg:pb-5 border-b-2 border-white/65">
          {svg}
        </div>
        <div className="mt-2 md:mt-3 lg:mt-5 text-white">
          {isVisible && (
            <span className="font-semi text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl">
              <CountUp start={0} duration={5} end={count} delay={0.5} />
              {plus && '+'}
            </span>
          )}
          <p className="mt-2 lg:mt-4 text-lg md:text-xl font-semibold">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

AboutContentCard.propTypes = {
  info: PropTypes.shape({
    svg: PropTypes.element.isRequired,
    count: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    plus: PropTypes.bool,
  }),
};

export default AboutContentCard;
