import { useMemo, useState } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
      },
      {
        title: 'Design-Build',
        id: 1,
        image: 'https://i.postimg.cc/j5dmjXmq/2.jpg',
      },
      {
        title: 'Lump Sum',
        id: 2,
        image: 'https://i.postimg.cc/XJHhB56f/4.jpg',
      },
      {
        title: 'Pre-Construction Services',
        id: 3,
        image: 'https://i.postimg.cc/QNzwXcbs/5.jpg',
      },
      {
        title: 'Value Engineering / Constructability and Advisory Services',
        id: 4,
        image: 'https://i.postimg.cc/T1KsVPTZ/3.jpg',
      },
      {
        title: 'PPP (Public Private Partnerships)',
        id: 5,
        image: 'https://i.postimg.cc/T1B4CXwh/1.jpg',
      },
      {
        title: 'Construction Financing',
        id: 6,
        image: 'https://i.postimg.cc/L40Kncmc/6.jpg',
      },
    ],
    []
  );
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const [activeTab, setActiveTab] = useState(services[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleTabChange = (service) => {
    setActiveTab(service);
    const serviceIndex = services.indexOf(service);
    // Adjust for loop
    if (swiperInstance) {
      swiperInstance.slideToLoop(serviceIndex, 500);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.our-service-container',
        start: 'top 90%',
      },
    });

    tl.from('.our-service-content', {
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.2,
      opacity: 0,
    })
      .from('.our-services-point', {
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        opacity: 0,
      })
      .from('.our-services-btn', {
        y: 10,
        duration: 0.4,
        ease: 'power2.out',
        opacity: 0,
      });
  });

  useGSAP(() => {
    gsap.from('.our-services-slides', {
      x: 150,
      duration: 1,
      ease: 'power2.out',
      opacity: 0,
      scrollTrigger: {
        trigger: '.our-service-container',
        start: 'top 50%',
      },
    });
  });

  return (
    <div className="bg-bgPrimary !overflow-x-hidden py-5 sm:py-8 md:py-10 lg:py-16 px-5 md:px-8 2xl:px-24 our-service-container">
      {/* title */}

      <div>
        <div className="our-service-content">
          <TitleContainer
            highlightedText="OUR"
            title="SERVICES"
            borderColor="light"
          />
        </div>
        <p className="mt-5 md:mt-7 lg:mt-8 text-white md:w-4/5 leading-[32px] our-service-content">
          From planning and executing new construction to managing turn-key
          design-build projects or delivering complex renovations, we have
          unique, specialized and honed expertise to transform your ideas and
          plans into reality, with value.
        </p>

        {/* sliders */}
        <div className="flex flex-col md:flex-row gap-12 w-full mt-6 md:mt-10 lg:mt-12">
          <div className="md:w-1/2 flex flex-col gap-3">
            {services?.map((service) => (
              <div
                key={service?.id}
                className="flex items-center gap-2 text-white md:text-lg font-medium our-services-point"
              >
                <div className="size-[6px] bg-white rounded-full" />
                <div
                  onClick={() => handleTabChange(service)}
                  className={` cursor-pointer ${
                    activeTab.title === service?.title
                      ? 'text-[#4096FA]'
                      : 'text-white'
                  }`}
                >
                  {service?.title}
                </div>
              </div>
            ))}

            <div className="mt-3 md:mt-8 lg:mt-12 our-services-btn">
              <PrimaryButton title={'View our projects'} variant={'primary'} />
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full our-services our-services-slides">
            <Swiper
              onSwiper={setSwiperInstance}
              slidesPerView={1}
              onSlideChange={(e) => {
                setActiveTab(services[e.realIndex]);
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={20} // Adjust spacing for smaller screens
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper rounded-lg"
            >
              {services?.map((service) => (
                <SwiperSlide key={service?.id}>
                  <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative p-2 md:p-3">
                    <div className="size-20 md:size-28 lg:size-32 bg-[#479BEB] absolute top-0 right-0 -z-10 rounded-md md:rounded-lg"></div>
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={service?.image}
                      alt={service?.name || 'Service'}
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
