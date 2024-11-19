/* eslint-disable react/prop-types */
import PrimaryButton from './buttons/PrimaryButton';
import LeftSlider from './sliders/LeftSlider';
import RightSlider from './sliders/RightSlider';
import TitleContainer from './TitleContainer';

const TabContents = ({ tab }) => {
  return (
    <div className="mt-16 grid grid-cols-2 gap-20">
      <div className="flex justify-center flex-col">
        <TitleContainer
          highlightedText={tab?.highlightedText}
          title={tab?.contentTitle}
          titleColor="dark"
          borderColor="dark"
        />

        {/* description */}
        <div className="text-secondaryText mt-6   text-start space-y-6 text-lg">
          {tab?.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        {/* button */}
        <div className="mt-10">
          <PrimaryButton title={tab?.navigationTitle} variant="dark" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <LeftSlider leftSliderImages={tab?.images?.leftSliderImages} />

        <RightSlider rightSliderImages={tab?.images?.rightSliderImages} />
      </div>
    </div>
  );
};

export default TabContents;
