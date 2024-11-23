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

  // const navbarRef = useRef(null);
  // const heroTitleRef = useRef(null);
  // const heroBtnRef = useRef(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline();

  //   tl.from('navbarRef.current', {

  //   }).to('',{

  //   }).to();
  // });

  return (
    <div className="px-12 relative w-full h-[90vh] border-b border-r border-primary">
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
