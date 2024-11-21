/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { ButtonUpArrowSvg } from '../SvgContainer';
 

const PrimaryButton = ({ title, variant }) => {
  return (
    <Link
      to="/"
      href="#_"
      className="relative inline-block px-6 py-3 font-medium group rounded-md font-poppins"
    >
      <span
        className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md bg-textColor`}
      ></span>
      <span
        className={`absolute duration-300 inset-0 w-full h-full
       group-hover:bg-textColor rounded-md ${
         variant === 'primary' ? 'bg-white' : 'bg-primary'
       }`}
      ></span>
      <span
        className={`relative group-hover:text-white duration-300 flex items-center gap-2 ${variant === "primary" ? "text-bgPrimary" :"text-white"}`}
      >
        {title}
        <span>
          <ButtonUpArrowSvg variant={variant} />
        </span>
      </span>
    </Link>
  );
};



export default PrimaryButton;
