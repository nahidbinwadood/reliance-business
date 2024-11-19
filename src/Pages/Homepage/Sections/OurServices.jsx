import TitleContainer from '../../../components/TitleContainer';

const OurServices = () => {
  return (
    <div className="bg-bgPrimary py-16 px-24">
      {/* title */}
      <div>
        <TitleContainer
          highlightedText="OUR"
          title="SERVICES"
          borderColor="light"
        />
        <p className='mt-8 text-white w-4/5 leading-[32px]'>
          From planning and executing new construction to managing turn-key
          design-build projects or delivering complex renovations, we have
          unique, specialized and honed expertise to transform your ideas and
          plans into reality, with value.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
