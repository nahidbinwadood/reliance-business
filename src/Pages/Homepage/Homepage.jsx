import AboutUs from './Sections/AboutUs';
import GoUp from './Sections/GoUp';
import HomepageTabs from './Sections/HomepageTabs';
import MapLocation from './Sections/MapLocation';
import OurServices from './Sections/OurServices';
import Together from './Sections/Together';

const Homepage = () => {
  return (
    <>
      <AboutUs />
      <HomepageTabs />
      <OurServices />
      <Together />
      <MapLocation />
      <GoUp />
    </>
  );
};

export default Homepage;
