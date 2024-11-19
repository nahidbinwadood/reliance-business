import { useState, useRef, useEffect, useMemo } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import LeftSlider from '../../../components/sliders/LeftSlider';
import RightSlider from '../../../components/sliders/RightSlider';

const HomepageTabs = () => {
  const tabs = useMemo(
    () => [
      { title: 'Industrial' },
      { title: 'Hospitality' },
      { title: 'Residential' },
      { title: 'Advanced Technology' },
      { title: 'Retail' },
      { title: 'Car Dealerships' },
    ],
    []
  );

  const leftSliderImages = [
    'https://i.postimg.cc/T1B4CXwh/1.jpg',
    'https://i.postimg.cc/j5dmjXmq/2.jpg',
    'https://i.postimg.cc/T1KsVPTZ/3.jpg',
    'https://i.postimg.cc/XJHhB56f/4.jpg',
    'https://i.postimg.cc/QNzwXcbs/5.jpg',
    'https://i.postimg.cc/L40Kncmc/6.jpg',
  ];

  const rightSliderImages = [
    'https://i.postimg.cc/XJHhB56f/4.jpg',
    'https://i.postimg.cc/QNzwXcbs/5.jpg',
    'https://i.postimg.cc/L40Kncmc/6.jpg',
    'https://i.postimg.cc/T1B4CXwh/1.jpg',
    'https://i.postimg.cc/j5dmjXmq/2.jpg',
    'https://i.postimg.cc/T1KsVPTZ/3.jpg',
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.title === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab, tabs]);

  return (
    <section className="mt-5 px-24 pb-14 w-full">
      {/* Tabs */}
      <div className="relative w-full">
        <div className="flex items-center justify-center gap-14">
          {tabs.map((tab, index) => (
            <div
              key={tab.title}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab.title)}
              className={`cursor-pointer text-lg pb-3  ${
                activeTab === tab.title
                  ? 'font-semibold text-black'
                  : 'font-medium text-[#313131]'
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Dynamic Underline */}
        <div
          className="absolute bottom-0 h-1 bg-textColor transition-all duration-300 rounded-md"
          style={{
            left: `${underlineStyle.left}px`,
            width: `${underlineStyle.width}px`,
          }}
        />
      </div>

      {/* tab contents */}
      <div className="mt-16 grid grid-cols-2 gap-20">
        <div className="flex justify-center flex-col">
          <TitleContainer
            highlightedText="Our"
            title="Projects"
            titleColor="dark"
            borderColor="dark"
          />

          {/* description */}
          <div className="text-secondaryText mt-6   text-start space-y-6 text-lg">
            <p>
              We undertake a diverse range of projects – from high-rise office
              towers and luxury hotels to vast shopping centers and cutting-edge
              facilities for manufacturing.{' '}
            </p>
            <p>
              Our portfolio reflects a commitment to excellence in both
              renovation and new construction, showcasing our ability to deliver
              exceptional results across a wide spectrum of industries and
              project scopes.
            </p>
          </div>

          {/* button */}
          <div className="mt-10">
            <PrimaryButton title="View our projects" variant="dark" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <LeftSlider leftSliderImages={leftSliderImages} />

          <RightSlider rightSliderImages={rightSliderImages} />
        </div>
      </div>
    </section>
  );
};

export default HomepageTabs;
