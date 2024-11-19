import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const RightSlider = ({ rightSliderImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Add the last 3 images to the beginning for a seamless loop
    setImages([
      ...rightSliderImages.slice(-3), // Take the last 3 images
      ...rightSliderImages, // Add the original images
      ...rightSliderImages.slice(0, 3), // Add the first 3 images to the end
    ]);
  }, [rightSliderImages]);

  return (
    <div className="relative overflow-hidden h-[700px] rounded-md">
      <div
        className="flex flex-col gap-4 animate-slideVerticalTopToBottom"
        style={{
          animationDuration: "50s", // Adjust the speed of the animation
          animationTimingFunction: "linear",
        }}
      >
        {images.map((image, index) => {
          // Dynamically determine the height of each image
          const position = index % 3;
          const height =
            position === 0 ? "h-[200px]" : position === 1 ? "h-[300px]" : "h-[150px]";

          return (
            <div key={`${image}-${index}`} className={`${height} w-full`}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

RightSlider.propTypes = {
  rightSliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RightSlider;
