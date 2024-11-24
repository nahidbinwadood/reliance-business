import PropTypes from 'prop-types';

const AboutCard = ({ info, index }) => {
  return (
    <div
      key={info?.highlightedText}
      className={`about-card  ${
        index == 1 ? 'md:px-8 lg:px-16 md:border-x border-white/25' : ''
      } ${index == 0 ? ' lg:pl-0 md:pr-8 lg:pr-16' : ''} ${
        index == 2 ? 'lg:pr-0 md:pl-8 lg:pl-16' : ''
      }`}
    >
      <p className={`text-base lg:text-lg font-semibold text-textColor`}>
        {info?.highlightedText}
        <span className="text-white ml-2">{info?.description}</span>
      </p>
    </div>
  );
};
AboutCard.propTypes = {
  info: PropTypes.shape({
    highlightedText: PropTypes.string,
    description: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default AboutCard;
