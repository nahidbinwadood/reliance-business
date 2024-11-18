import PrimaryButton from './buttons/PrimaryButton';
import { PropTypes } from 'prop-types';

const TitleContainer = ({
  highlightedText,
  title,
  buttonText,
  variant,
  borderColor,
}) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className="font-poppins">
        <h2 className="text-5xl font-extrabold flex flex-col text-textColor leading-[56px]">
          {highlightedText}
          <span className="text-white">{title}</span>
        </h2>
        {borderColor && (
          <div
            className={`mt-4 h-1 w-full max-w-[100px] ${
              borderColor === 'light' ? 'bg-white' : 'bg-primary'
            }`}
          />
        )}
      </div>

      {buttonText && (
        <div>
          <PrimaryButton title={buttonText} variant={variant} />
        </div>
      )}
    </div>
  );
};

TitleContainer.propTypes = {
  highlightedText: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
export default TitleContainer;
