/* eslint-disable react/prop-types */
import PrimaryButton from './buttons/PrimaryButton';
import { PropTypes } from 'prop-types';

const TitleContainer = ({
  highlightedText,
  titleColor,
  title,
  buttonText,
  variant,
  borderColor,
  titleContainerBtnRef,
  titleContainerTitleRef,
}) => {
  return (
    <div className="w-full flex-col gap-8 md:flex-row flex md:items-center justify-between">
      <div ref={titleContainerTitleRef} className="font-poppins uppercase">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold flex flex-col text-textColor 2xl:leading-[56px]">
          {highlightedText}
          <span
            className={`${titleColor == 'dark' ? 'text-black' : 'text-white'}`}
          >
            {title}
          </span>
        </h2>
        {borderColor && (
          <div
            className={`mt-3 lg:mt-4 h-1 w-full max-w-[100px] ${
              borderColor === 'light' ? 'bg-white' : 'bg-primary'
            }`}
          />
        )}
      </div>

      {buttonText && (
        <div ref={titleContainerBtnRef} className="title-container-btn">
          <PrimaryButton title={buttonText} variant={variant} />
        </div>
      )}
    </div>
  );
};

TitleContainer.propTypes = {
  highlightedText: PropTypes.string,
  borderColor: PropTypes.string,
  titleColor: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,

  variant: PropTypes.string,
};
export default TitleContainer;
