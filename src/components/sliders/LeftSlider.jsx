import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LeftSlider = ({ leftSliderImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Duplicate the array to create seamless scrolling
    setImages([...leftSliderImages, ...leftSliderImages]);
  }, [leftSliderImages]);

  return (
    <div className="relative overflow-hidden h-[700px] rounded-md">
      <div className="flex flex-col gap-4 animate-slideVertical">
        {images.map((image, index) => {
          const position = index % 3; // Dynamically assign heights
          const height =
            position === 0 ? "h-[150px]" : position === 1 ? "h-[300px]" : "h-[200px]";

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

LeftSlider.propTypes = {
  leftSliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LeftSlider;
