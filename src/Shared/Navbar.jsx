import BottomNavigationButton from '../components/BottomNavigationButton';
import Hero from '../components/Hero';
import NavLinkContainer from '../components/NavLinkContainer';
import HeroBg from './../components/HeroBg';
const Navbar = () => {
  const navLinks = [
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'Expertises',
      path: '/expertises',
    },
    {
      title: 'Sustainability',
      path: '/sustainability',
    },
    {
      title: 'Career',
      path: '/career',
    },
    {
      title: 'Who we are',
      path: '/who-we-are',
    },
    {
      title: 'Contact us',
      path: '/contact-us',
    },
  ];

  return (
    <div className="px-12 relative w-full h-[90vh]">
      {/* Background Video */}
      <HeroBg />

      {/* navbar */}
      <nav>
        <NavLinkContainer navLinks={navLinks} />

      </nav>

      {/* hero */}
      <Hero />

      {/* bottom navigation button */}
      <BottomNavigationButton />
    </div>
  );
};

export default Navbar;
