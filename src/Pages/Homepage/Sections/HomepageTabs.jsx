import { useState, useRef, useEffect, useMemo } from 'react';
import TabContents from '../../../components/TabContents';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import slider1 from '../../../assets/images/slides/1.jpg';
import slider2 from '../../../assets/images/slides/2.jpg';
import slider3 from '../../../assets/images/slides/3.jpg';
import slider4 from '../../../assets/images/slides/4.jpg';
import slider5 from '../../../assets/images/slides/5.jpg';

const HomepageTabs = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const tabs = useMemo(
    () => [
      {
        title: 'Industrial',
        highlightedText: 'Our',
        contentTitle: 'Industrial',
        images: {
          leftSliderImages: [slider1, slider2, slider3, slider4, slider5],
          rightSliderImages: [slider4, slider5, slider2, slider1, slider3],
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
          leftSliderImages: [slider1, slider2, slider3, slider4, slider5],
          rightSliderImages: [slider4, slider5, slider2, slider1, slider3],
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
          leftSliderImages: [slider1, slider2, slider3, slider4, slider5],
          rightSliderImages: [slider4, slider5, slider2, slider1, slider3],
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
          leftSliderImages: [slider1, slider2, slider3, slider4, slider5],
          rightSliderImages: [slider4, slider5, slider2, slider1, slider3],
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
          leftSliderImages: [slider1, slider2, slider3, slider4, slider5],
          rightSliderImages: [slider4, slider5, slider2, slider1, slider3],
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
          leftSliderImages: [slider1, slider2, slider3, slider4, slider5],
          rightSliderImages: [slider4, slider5, slider2, slider1, slider3],
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
      duration: 0.5,
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

  useGSAP(() => {
    gsap.from('.homepage-tab-mobile', {
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.homepage-tab-container',
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      ref={homepageTabContainerRef}
      className="mt-5 px-5 md:px-8 2xl:px-24 pb-14 w-full homepage-tab-container hidden md:block"
    >
      {/* Tabs for mobile */}
      <div className="relative w-full block md:hidden">
        <div className="flex flex-wrap items-center justify-start gap-4">
          {tabs.map((tab, index) => (
            <div
              key={tab.title}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer homepage-tab-mobile text-sm sm:text-base xl:text-lg px-3 py-2 rounded-md ${
                activeTab.title === tab.title
                  ? 'bg-blue-500 text-white font-semibold'
                  : 'bg-gray-200 text-gray-800 font-medium'
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs for medium to large screens */}
      <div className="relative w-full hidden md:block">
        <div className="flex items-center justify-center gap-4 sm:gap-8 2xl:gap-14">
          {tabs.map((tab, index) => (
            <div
              key={tab.title}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer homepage-tab text-sm sm:text-base xl:text-lg pb-3 whitespace-nowrap ${
                activeTab.title === tab.title
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
