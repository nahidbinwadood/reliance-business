import TitleContainer from '../../../components/TitleContainer';
import persons from '../../../assets/images/persons.png';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Together = () => {
  // GSAP Animations
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.title-together-container',
        start: 'top 80%',
        end: '+=300', // Animate over a longer scroll duration
       // scrub: true, // Smooth animation during scroll
      },
    });

    timeline
      .from('.together-title', {
        y: 20,
        duration: 1.5,
        opacity: 0,
       // filter: 'blur(10px)',
        ease: 'power2.out',
      })
      .from(
        '.together-description p',
        {
          y: 20,
          duration: 1,
          opacity: 0,
          stagger: 0.3,
          ease: 'power2.out',
        },
        '-=0.5' // Overlap animations slightly
      );
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.title-white-overlay',
        start: 'top 80%',
      },
    });

    // Step 1: Scale the white container (first animation)
    tl.from('.title-white-overlay', {
      scale: 0.2,
      duration: 1,
      ease: 'power2.out',
    });

    // Step 2: Start the clip-path animation for the image container (second animation)
    tl.from(
      '.title_circle_overlay_effect',
      {
        clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        duration: 2,
        ease: 'power2.out',
      },
      0.1
    );
  });

  useGSAP(() => {
    gsap.from('.together-action-btn', {
      x: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger:{
      trigger: '.together-action-btn',
        start: 'top 80%',
        end: '+=300',

      }
    });
  });
  return (
    <div className="mt-6 mb-10 title-together-container">
      {/* Title Section */}
      <div className="px-24 together-title">
        <TitleContainer
          highlightedText="BUILDING FUTURE SKYLINES"
          title="TOGETHER"
          borderColor="dark"
          titleColor="dark"
        />
        <div className="mt-7 space-y-7 text-[#313131] leading-[24px] together-description">
          <p>
            Reliance undertakes a diverse range of projects – from high-rise
            office towers and luxury hotels to expansive shopping centers and
            cutting-edge facilities for manufacturing.
          </p>
          <p>
            Our portfolio reflects a commitment to excellence in both renovation
            and new construction, showcasing our ability to deliver exceptional
            results across a wide spectrum of industries and project scopes.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mx-24 mt-8 relative bg-primary/50 title-white-overlay rounded-md overflow-hidden">
        <div className="w-full h-full max-h-[550px] title_circle_overlay_effect rounded-md overflow-hidden">
          <img
            className="together-image w-full max-h-[550px] object-cover rounded-md overflow-hidden"
            src={persons}
            alt="Persons"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="mx-24 mt-8 together-action-btn">
        <PrimaryButton title="See Career Opportunities" variant="dark" />
      </div>
    </div>
  );
};

export default Together;
