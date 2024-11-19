import { useState, useRef, useEffect, useMemo } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

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
              className={`cursor-pointer text-lg pb-3 text-[#313131] ${
                activeTab === tab.title
                  ? 'font-bold text-textColor'
                  : 'font-medium'
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
      <div className="mt-16 grid grid-cols-2 gap-20 h-[60vh]">
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
          <div className='mt-10'>
            <PrimaryButton title="View our projects" variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageTabs;
