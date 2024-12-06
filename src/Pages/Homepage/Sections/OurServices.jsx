import { useMemo, useRef, useState } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

// Import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCreative,
} from 'swiper/modules';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OurServices = () => {
  const services = useMemo(
    () => [
      {
        title: 'Construction Management',
        id: 0,
        image: 'https://i.postimg.cc/RVxRQ5w6/image-1.jpg',
        description:
          'Comprehensive oversight and coordination of construction projects.',
      },
      {
        title: 'Design-Build',
        id: 1,
        image: 'https://i.postimg.cc/j5dmjXmq/2.jpg',
        description:
          'Integrated design and construction services under a single contract.',
      },
      {
        title: 'Lump Sum',
        id: 2,
        image: 'https://i.postimg.cc/XJHhB56f/4.jpg',
        description: 'Fixed-price contract with a predetermined total cost.',
      },
      {
        title: 'Pre-Construction Services',
        id: 3,
        image: 'https://i.postimg.cc/QNzwXcbs/5.jpg',
        description:
          'Comprehensive planning and feasibility analysis before project initiation.',
      },
      {
        title: 'Value Engineering / Constructability and Advisory Services',
        id: 4,
        image: 'https://i.postimg.cc/T1KsVPTZ/3.jpg',
        description:
          'Optimizing project value through cost-effective design and construction strategies.',
      },
      {
        title: 'PPP (Public Private Partnerships)',
        id: 5,
        image: 'https://i.postimg.cc/T1B4CXwh/1.jpg',
        description:
          'Collaborative projects between government and private sector entities.',
      },
      {
        title: 'Construction Financing',
        id: 6,
        image: 'https://i.postimg.cc/L40Kncmc/6.jpg',
        description:
          'Comprehensive financial solutions for construction projects.',
      },
    ],
    []
  );

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const [activeTab, setActiveTab] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const borderRef = useRef(null);

  const handleTabChange = (index) => {
    setActiveTab(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index, 600, false);
    }
  };

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.our-service-container',
        start: 'top 90%',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.our-service-content', {
      y: 50,
      duration: 0.7,
      opacity: 0,
      filter: 'blur(15px)',
      ease: 'power3.out',
    })
      .fromTo(
        borderRef.current,
        {
          width: '0px',
        },
        {
          width: '100px',
          duration: 0.5,
          ease: 'power3.out',
        }
      )
      .from('.our-service-content-p', {
        y: 30,
        filter: 'blur(15px)',
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.our-services-point', {
        y: 30,
        filter: 'blur(15px)',
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power3.out',
      })
      .from('.our-services-btn', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
  });

  // Slide Animations
  useGSAP(() => {
    gsap.from('.our-services-slides', {
      x: 150,
      delay: 0.5,
      duration: 1.2,
      ease: 'power3.out',
      opacity: 0,
      scrollTrigger: {
        trigger: '.our-service-container',
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return (
    <div className="bg-[#F4F8FB] md:bg-bgPrimary !overflow-x-hidden py-5 sm:py-8 md:py-10 lg:py-16 px-5 md:px-8 2xl:px-24 our-service-container md:block hidden">
      {/* Title Section */}
      <div>
        <div className="our-service-content">
          <TitleContainer
            borderRef={borderRef}
            highlightedText="OUR"
            title="SERVICES"
            borderColor="light"
          />
        </div>
        <p className="mt-5 md:mt-7 lg:mt-8 text-white md:w-4/5 leading-[32px] our-service-content-p">
          From planning and executing new construction to managing turn-key
          design-build projects or delivering complex renovations, we have
          unique, specialized and honed expertise to transform your ideas and
          plans into reality, with value.
        </p>

        {/* Services Content */}
        <div className="flex flex-col md:flex-row gap-12 w-full mt-6 md:mt-10 lg:mt-12">
          {/* Services List */}
          <div className="md:w-1/2 flex flex-col gap-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="flex items-center gap-4 text-white md:text-lg font-medium our-services-point"
              >
                <div className="size-[6px] bg-white rounded-full" />
                <div
                  onClick={() => handleTabChange(index)}
                  className={`cursor-pointer transition-all duration-300 ease-in-out ${
                    activeTab === index
                      ? 'text-[#4096FA] scale-105'
                      : 'text-white hover:text-[#4096FA] hover:scale-105'
                  }`}
                >
                  {service.title}
                </div>
              </div>
            ))}

            {/* Action Button */}
            <div className="mt-3 md:mt-8 lg:mt-12 our-services-btn">
              <PrimaryButton title={'View our projects'} variant={'primary'} />
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full md:w-1/2 h-full our-services our-services-slides overflow-hidden">
            <Swiper
              onSwiper={setSwiperInstance}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: ['-100%', 0, -1],
                  overflow: 'hidden',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
                },
                next: {
                  translate: ['100%', 0, 0],
                  overflow: 'hidden',
                },
              }}
              speed={600}
              navigation={false}
              slidesPerView={1}
              onSlideChange={(e) => {
                setActiveTab(e.realIndex);
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={40}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination, Navigation, Autoplay, EffectCreative]}
              className="mySwiper rounded-lg"
            >
              {services.map((service, index) => (
                <SwiperSlide key={service.id}>
                  <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative p-2.5 group">
                    <div
                      className={`size-20 md:size-28 bg-[#479BEB] absolute top-0 right-0 -z-10 rounded-md md:rounded-lg transition-transform duration-300 ${
                        swiperInstance?.realIndex === index
                          ? 'scale-100'
                          : 'scale-0'
                      }`}
                    ></div>
                    <img
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                      src={service.image}
                      alt={service.title || 'Service'}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
