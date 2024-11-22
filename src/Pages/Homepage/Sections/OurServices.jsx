import { useMemo, useState } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

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

  return (
    <div className="bg-bgPrimary py-16 px-24">
      {/* title */}
      
      <div>

        <TitleContainer
          highlightedText="OUR"
          title="SERVICES"
          borderColor="light"
        />
        <p className="mt-8 text-white w-4/5 leading-[32px]">
          From planning and executing new construction to managing turn-key
          design-build projects or delivering complex renovations, we have
          unique, specialized and honed expertise to transform your ideas and
          plans into reality, with value.
        </p>

        {/* sliders */}
        <div className="flex w-full mt-12">
          <div className="w-1/2 flex flex-col gap-3">
            {services?.map((service) => (
              <div
                key={service?.id}
                className="flex items-center gap-2 text-white text-lg font-medium"
              >
                <div className="size-[6px] bg-white rounded-full" />
                <div
                  onClick={() => handleTabChange(service)}
                  className={`cursor-pointer ${
                    activeTab.title === service?.title
                      ? 'text-[#4096FA]'
                      : 'text-white'
                  }`}
                >
                  {service?.title}
                </div>
              </div>
            ))}

            <div className="mt-12">
              <PrimaryButton title={'View our projects'} variant={'primary'} />
            </div>
          </div>

          <div className="w-1/2 h-full our-services">
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
              spaceBetween={30}
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
                  <div className=" h-[450px]  relative p-3">
                    <div className="size-32 bg-[#479BEB] absolute top-0 right-0 -z-10 rounded-lg"></div>
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={service?.image}
                      alt=""
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
