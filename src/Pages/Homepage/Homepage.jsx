import AboutUs from './Sections/AboutUs';
import GoUp from './Sections/GoUp';
import HomepageTabs from './Sections/HomepageTabs';
import MapLocation from './Sections/MapLocation';
import OurServices from './Sections/OurServices';
import Projects from './Sections/Projects';
import Together from './Sections/Together';
import AboutSm from './../../components/AboutSm';
import StatsSm from './Sections/StatsSm';

const Homepage = () => {
  return (
    <>
      <AboutUs />

      {/* mobile */}
      <div>
        <AboutSm />
        <Projects />
        <StatsSm />
      </div>

      <HomepageTabs />
      <OurServices />
      <Together />
      <MapLocation />
      <GoUp />
    </>
  );
};

export default Homepage;
