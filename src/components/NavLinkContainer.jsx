import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const NavLinkContainer = ({ navLinks }) => {
  return (
    <div className="flex justify-between text-white absolute top-16 left-0 bg-transparent px-12 w-full">
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
  );
};
NavLinkContainer.propTypes = {
    navLinks: PropTypes.object.isRequired,
};
export default NavLinkContainer;
