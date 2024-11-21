import TitleContainer from '../../../components/TitleContainer';
import persons from '../../../assets/images/persons.png';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
const Together = () => {
  return (
    <div className="mt-6 mb-10">
      {/* title */}
      <div className="px-24">
        <TitleContainer
          highlightedText="BUILDING FUTURE SKYLINES"
          title="TOGETHER"
          borderColor="dark"
          titleColor="dark"
        />
        <div className="mt-7 space-y-7 text-[#313131] leading-[24px] ">
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

      {/* image */}
      <div className="w-full px-24 mt-8 relative">
        <img
          className="w-full max-h-[550px] object-cover aspect-square"
          src={persons}
          alt="Persons"
        />

        <div className="h-[1px] w-full bg-white absolute top-[10%] left-0"></div>
      </div>

      {/* line */}
      <div className="h-[1px] w-full mt-8 bg-bgPrimary" />
      <div className='mx-24 mt-3'>
      <PrimaryButton title={"See Career Opportunities"} variant={"dark"} />
      </div>
    </div>
  );
};

export default Together;
