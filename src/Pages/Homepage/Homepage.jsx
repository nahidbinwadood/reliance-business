import AboutUs from './Sections/AboutUs';
import HomepageTabs from './Sections/HomepageTabs';
import OurServices from './Sections/OurServices';
import Together from './Sections/Together';

const Homepage = () => {
  return (
    <>
      <AboutUs />
      <HomepageTabs />
      <OurServices />
      <Together />
      {/* <MapLocation /> */}
    </>
  );
};

export default Homepage;
