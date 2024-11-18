import PropTypes from 'prop-types';

const AboutCard = ({ info, index }) => {
  return (
    <div
      key={info?.highlightedText}
      className={` ${
        index == 1 ? 'px-16 py-8 border-x border-white/25' : 'px-16 py-8'
      }`}
    >
      <p className={`text-lg font-semibold text-textColor`}>
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
