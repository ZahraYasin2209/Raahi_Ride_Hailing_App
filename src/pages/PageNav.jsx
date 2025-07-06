import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../ui/Logo";
import AboutUs from "./AboutUs";

const PageNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-cyan-900 px-4 py-0 font-playfair">
      <div className="flex items-center space-x-2">
        <Logo />
        <span className="font-dancing text-2xl font-bold text-teal-100 md:text-4xl">
          Raahi
        </span>
      </div>

      {/* Hamburger icon for mobile */}
      <button
        onClick={handleToggleMenu}
        className="text-white focus:outline-none md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      
      
      <ul
        className={`flex items-center space-x-4 p-3 font-[Calibri] text-lg font-semibold tracking-widest ${
          isOpen
            ? "absolute left-0 top-16 mt-5 w-full flex-col bg-cyan-900 md:w-auto md:flex-row"
            : "hidden md:flex"
        }`}
      >
        <li className="navitems transition duration-200 hover:border-b-2 hover:border-teal-200 hover:text-teal-100 xs:my-1">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="navitems transition duration-200 hover:border-b-2 hover:border-teal-200 hover:text-teal-100 xs:my-1">
          <NavLink to="/AboutUs">About Us</NavLink>
        </li>
        <li className="navitems transition duration-200 hover:border-b-2 hover:border-teal-200 hover:text-teal-100 xs:my-1">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
