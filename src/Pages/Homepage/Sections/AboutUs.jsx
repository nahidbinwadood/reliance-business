import AboutCard from '../../../components/cards/AboutCard';
import TitleContainer from '../../../components/TitleContainer';
const aboutUsInfo = [
  {
    highlightedText: 'Our legacy',
    description:
      'is founded on 75 years of experience developing over 700 unique building projects.',
  },
  {
    highlightedText: 'We proudly',
    description:
      'partner with our clients to deliver a personalized and optimized construction experience.',
  },
  {
    highlightedText: 'We strive',
    description:
      'to understand and exceed the unique needs of each project, fostering collaboration and innovation throughout the construction process',
  },
];
const AboutUs = () => {
  return (
    <section className="bg-bgPrimary pt-24 px-24 pb-14 w-full">
      <TitleContainer
        highlightedText="WE ARE "
        title="RELIANCE"
        buttonText="Learn more about Reliance"
        variant="primary"
        borderColor="light"
      />

      {/* cards */}
      <div className="mt-10 grid grid-cols-3">
        {aboutUsInfo?.map((info, index) => (
          <AboutCard key={info?.highlightedText} info={info} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
