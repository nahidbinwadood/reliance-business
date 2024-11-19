import PropTypes from 'prop-types';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const AboutContentCard = ({ info }) => {
  const { svg, count, title, plus } = info;
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <div className="pb-5 border-b-2 border-white/65">{svg}</div>
        <div className="mt-5 text-white">
          {counterOn && (
            <span className='className="font-semi text-6xl'>
              <CountUp start={0} duration={10} delay={0} end={count} />
              {plus && '+'}
            </span>
          )}
          <p className="mt-4 text-xl font-semibold">{title}</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

AboutContentCard.propTypes = {
  info: PropTypes.shape({
    svg: PropTypes.element.isRequired,
    count: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    plus: PropTypes.bool,
  }),
};

export default AboutContentCard;
