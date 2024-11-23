 
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutContentCard = ({ info }) => {
  const { svg, count, title, plus } = info;

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.3, // Trigger when 50% of the component is in the viewport
  });

  // useGSAP(() => {
  //   gsap.from(".about-counter", {
  //     y: 30,
  //     duration: 1,
  //     opacity:0,
  //     stagger: 0.3,
  //     ease: 'power2.out',
  //   });
  // });
  return (
    <div ref={ref} className='about-counter'>
      <div>
        <div className="pb-5 border-b-2 border-white/65">{svg}</div>
        <div className="mt-5 text-white">
          {inView && (
            <span className="font-semi text-6xl">
              <CountUp start={0} duration={10} delay={0.5} end={count} />
              {plus && '+'}
            </span>
          )}
          <p className="mt-4 text-xl font-semibold">{title}</p>
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
