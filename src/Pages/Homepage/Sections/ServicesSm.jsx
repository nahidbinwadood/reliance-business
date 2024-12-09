import { useMemo, useRef, useEffect } from 'react';
import TitleContainer from '../../../components/TitleContainer';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);
import slider1 from '../../../assets/images/slides/1.jpg';
import slider2 from '../../../assets/images/slides/2.jpg';
import slider3 from '../../../assets/images/slides/3.jpg';
import slider4 from '../../../assets/images/slides/4.jpg';
import slider5 from '../../../assets/images/slides/5.jpg';
import slider6 from '../../../assets/images/slides/6.jpg';

const ServicesSm = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const borderRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const swiperContainerRef = useRef(null);

  const services = useMemo(
    () => [
      {
        title: 'Construction Management',
        id: 0,
        image: slider1,
      },
      {
        title: 'Design-Build',
        id: 1,
        image: slider2,
      },
      {
        title: 'Lump Sum',
        id: 2,
        image: slider3,
      },
      {
        title: 'Pre-Construction Services',
        id: 3,
        image: slider5,
      },
      {
        title: 'Value Engineering / Constructability and Advisory Services',
        id: 4,
        image: slider4,
      },
      {
        title: 'PPP (Public Private Partnerships)',
        id: 5,
        image: slider1,
      },
      {
        title: 'Construction Financing',
        id: 6,
        image: slider6,
      },
    ],
    []
  );

  useEffect(() => {
    const container = containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse'
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(descriptionRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(swiperContainerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="services-sm-container md:hidden px-5 py-6 md:px-8 2xl:px-24 pb-14 w-full projects-container-sm">
      <div ref={titleRef} className="service-content-title">
        <TitleContainer
          borderRef={borderRef}
          highlightedText="OUR"
          title="SERVICES"
          borderColor="dark"
          titleColor="dark"
        />
      </div>
      <div ref={descriptionRef} className="service-content-description mt-5 text-[#313131]">
        <p>
          From envisioning and executing new construction to managing turn-key
          design-build projects, we have unparalleled expertise to transform
          your vision into reality.
        </p>
      </div>

      <div ref={swiperContainerRef} className="mt-5">
        <Swiper
          onSwiper={setSwiperRef}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {services?.map((service) => (
            <SwiperSlide key={service?.id}>
              <div className="h-[220px] w-full">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={service?.image}
                  alt=""
                />
              </div>

              <div className="mt-2 text-textColor text-lg font-medium">
                <h1>{service?.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-1 w-full flex items-center justify-end">
          <div className="flex items-center gap-5">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="relative inline-block p-3 text-sm lg:text-base lg:py-3 font-medium group rounded-md font-poppins"
            >
              <span
                className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md bg-textColor`}
              ></span>
              <span
                className={`absolute duration-300 inset-0 w-full h-full
       group-hover:bg-textColor rounded-md bg-primary`}
              ></span>
              <span
                className={`relative group-hover:text-white duration-300 flex items-center   text-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6.85735 10.8363L6.28958 11.404C6.04918 11.6445 5.66044 11.6445 5.42259 11.404L0.450828 6.43484C0.210423 6.19443 0.210423 5.80569 0.450828 5.56785L5.42259 0.596081C5.663 0.355677 6.05174 0.355677 6.28958 0.596081L6.85735 1.16385C7.10031 1.40681 7.09519 1.80322 6.84712 2.04107L3.76534 4.97707L11.1156 4.97707C11.4557 4.97707 11.7294 5.25072 11.7294 5.59087L11.7294 6.40926C11.7294 6.74941 11.4557 7.02306 11.1156 7.02306L3.76534 7.02306L6.84712 9.95906C7.09775 10.1969 7.10287 10.5933 6.85735 10.8363Z"
                    fill="white"
                  />
                </svg>
                <span></span>
              </span>
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="relative inline-block p-3 text-sm lg:text-base lg:py-3 font-medium group rounded-md font-poppins"
            >
              <span
                className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md bg-textColor`}
              ></span>
              <span
                className={`absolute duration-300 inset-0 w-full h-full
       group-hover:bg-textColor rounded-md bg-primary`}
              ></span>
              <span
                className={`relative group-hover:text-white duration-300 flex items-center   text-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M5.14259 1.16384L5.71036 0.596075C5.95076 0.35567 6.3395 0.35567 6.57735 0.596075L11.5491 5.56528C11.7895 5.80569 11.7895 6.19443 11.5491 6.43227L6.57735 11.404C6.33694 11.6444 5.9482 11.6444 5.71036 11.404L5.14259 10.8363C4.89963 10.5933 4.90475 10.1969 5.15282 9.95906L8.2346 7.02305H0.884367C0.544221 7.02305 0.270569 6.7494 0.270569 6.40926L0.270569 5.59086C0.270569 5.25071 0.544221 4.97706 0.884367 4.97706H8.2346L5.15282 2.04106C4.90219 1.80321 4.89707 1.4068 5.14259 1.16384Z"
                    fill="white"
                  />
                </svg>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSm;