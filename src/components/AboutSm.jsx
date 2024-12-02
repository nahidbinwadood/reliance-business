import { useGSAP } from '@gsap/react';
import PrimaryButton from './buttons/PrimaryButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const AboutSm = () => {
  useGSAP(() => {
    gsap.from('.mobile-about-section-p', {
      y: 50,
      delay:.5,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.mobile-about-section',
        start: 'top 100%',
        toggleActions: 'play reverse play reverse',
      },
    });
    gsap.from('.mobile-about-section-title-container-btn', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.mobile-about-section',
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
  return (
    <div className='bg-white md:bg-bgPrimary pt-16 lg:pt-24 px-5 md:px-8 2xl:px-24 pb-14 w-full about-section-container md:hidden'>
      <div className="md:hidden space-y-10 mobile-about-section">
        <p className="text-[#313131] mobile-about-section-p">
          As one of the largest privately-owned construction companies in North
          America with over <span className="font-bold">75 years</span> of
          experience, we have the team, resources and capabilities to bring your
          vision to the skyline.
        </p>
        <div className="mobile-about-section-title-container-btn">
          <PrimaryButton
            title={'Learn more about Reliance'}
            variant={'secondary'}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSm;
