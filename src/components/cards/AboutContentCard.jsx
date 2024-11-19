import PropTypes from "prop-types";

const AboutContentCard = ({ info }) => {
  const { svg, count, title } = info;
  return (
    <div>
      <div className="pb-5 border-b-2 border-white/65">{svg}</div>
      <div className="mt-5 text-white">
        <h3 className="font-semi text-6xl">{count}</h3>
        <p className="mt-4 text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
};

AboutContentCard.propTypes = {
  info: PropTypes.shape({
    svg: PropTypes.element.isRequired,
    count: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default AboutContentCard;
