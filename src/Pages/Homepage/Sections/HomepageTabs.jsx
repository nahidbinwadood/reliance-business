import { useState, useRef, useEffect, useMemo } from 'react';
import TabContents from '../../../components/TabContents';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomepageTabs = () => {
  const tabs = useMemo(
    () => [
      {
        title: 'Industrial',
        highlightedText: 'Our',
        contentTitle: 'Industrial',
        images: {
          leftSliderImages: [
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
          ],
          rightSliderImages: [
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
          ],
        },
        description: [
          'We undertake a diverse range of projects - from high-rise office towers and luxury hotels to vast shopping centers and cutting-edge facilities for manufacturing.',
          'Our portfolio reflects a commitment to excellence in both renovation and new construction, showcasing our ability to deliver exceptional results across a wide spectrum of industries and project scopes.',
        ],
        navigationTitle: 'View our projects',
      },
      {
        title: 'Hospitality',
        highlightedText: 'Our',
        contentTitle: 'Hospitality',
        images: {
          leftSliderImages: [
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
          ],
          rightSliderImages: [
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
          ],
        },
        description: [
          'We specialize in creating luxurious and inviting spaces for the hospitality industry, including hotels, resorts, and entertainment facilities.',
          'Our projects emphasize functionality, aesthetics, and sustainability, meeting the unique needs of our clients and their guests.',
        ],
        navigationTitle: 'Explore our hospitality projects',
      },
      {
        title: 'Residential',
        highlightedText: 'Our',
        contentTitle: 'Residential',
        images: {
          leftSliderImages: [
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
          ],
          rightSliderImages: [
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
          ],
        },
        description: [
          'Our residential projects range from modern apartments to luxury estates, tailored to meet the individual needs of homeowners.',
          'We focus on innovative designs, high-quality materials, and energy-efficient solutions to create homes that are both beautiful and functional.',
        ],
        navigationTitle: 'View residential designs',
      },
      {
        title: 'Advanced Technology',
        highlightedText: 'Advanced',
        contentTitle: 'Technology',
        images: {
          leftSliderImages: [
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
          ],
          rightSliderImages: [
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
          ],
        },
        description: [
          'We design and build cutting-edge facilities for advanced technology companies, focusing on precision and innovation.',
          'Our expertise includes data centers, research labs, and manufacturing plants tailored to meet stringent technological requirements.',
        ],
        navigationTitle: 'Learn about our tech projects',
      },
      {
        title: 'Retail',
        highlightedText: 'Our',
        contentTitle: 'Retail',
        images: {
          leftSliderImages: [
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
          ],
          rightSliderImages: [
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
          ],
        },
        description: [
          'Our retail projects include shopping malls, flagship stores, and boutique outlets, designed to create exceptional customer experiences.',
          'We focus on optimizing space, incorporating modern aesthetics, and meeting the branding needs of our clients.',
        ],
        navigationTitle: 'Browse retail projects',
      },
      {
        title: 'Car Dealerships',
        highlightedText: 'Car',
        contentTitle: 'Dealerships',
        images: {
          leftSliderImages: [
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
          ],
          rightSliderImages: [
            'https://i.postimg.cc/XJHhB56f/4.jpg',
            'https://i.postimg.cc/QNzwXcbs/5.jpg',
            'https://i.postimg.cc/L40Kncmc/6.jpg',
            'https://i.postimg.cc/T1B4CXwh/1.jpg',
            'https://i.postimg.cc/j5dmjXmq/2.jpg',
            'https://i.postimg.cc/T1KsVPTZ/3.jpg',
          ],
        },
        description: [
          'We design state-of-the-art car dealerships that showcase vehicles in an inviting and professional environment.',
          'Our projects prioritize functionality, aesthetics, and customer experience, ensuring spaces that drive sales and brand loyalty.',
        ],
        navigationTitle: 'Discover dealership projects',
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef([]);
  const homepageTabContainerRef = useRef(null);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.title === activeTab.title);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab, tabs]);

  // gsap::

  useGSAP(() => {
    gsap.from('.homepage-tab', {
      y: 20,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.homepage-tab-container',
        start: 'top 80%',
      },
    });
    gsap.from('.homepage-tab-indicator', {
      y: 2,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.homepage-tab-container',
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      ref={homepageTabContainerRef}
      className="mt-5 px-5 md:px-8 2xl:px-24 pb-14 w-full homepage-tab-container"
    >
      {/* Tabs */}
      <div className="relative w-full">
        <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-8 md:gap-14 overflow-x-auto">
          {tabs.map((tab, index) => (
            <div
              key={tab.title}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer homepage-tab text-sm sm:text-base md:text-lg pb-3 whitespace-nowrap ${
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
          className="absolute bottom-0 homepage-tab-indicator h-1 bg-textColor transition-all duration-300 rounded-md"
          style={{
            left: `${underlineStyle.left}px`,
            width: `${underlineStyle.width}px`,
          }}
        />
      </div>

      {/* Tab contents */}
      <TabContents
        homepageTabContainerRef={homepageTabContainerRef}
        tab={activeTab}
      />
    </section>
  );
};

export default HomepageTabs;
