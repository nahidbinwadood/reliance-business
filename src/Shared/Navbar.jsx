import { Link, NavLink } from 'react-router-dom';
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
    <nav className="px-12">
      <div className="flex justify-between absolute top-16 left-0 bg-transparent px-12 w-full">
        {/* logo */}
        <div className="border-4 border-primary h-fit">
          <Link
            to={'/'}
            className="bg-primary text-lg font-poppins font-medium border-2 border-white flex items-center justify-center text-white px-6 py-3"
          >
            reliance
          </Link>
        </div>

        {/* navLinks */}

        <ul className="flex items-center justify-between gap-10 font-poppins font-semibold">
          {navLinks?.map((link) => (
            <li key={link?.path}>
              <NavLink to="/">{link?.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='absolute top-5 right-0 px-12'>
        <p className='font-poppins tracking-[0.8px]'>Français</p>
      </div>
    </nav>
  );
};

export default Navbar;
