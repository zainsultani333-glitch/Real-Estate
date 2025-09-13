import React, { useState } from "react";
import { Link, link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { DarkModeProvider } from "../components/DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30 `}
    >
      {/* Logo */}
      <div id="logo">
        <img
          src={logo}
          alt="company logo"
          className="lg:w-[150px] w-[120px] dark:invert"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
        )}
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 mx-auto">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="size-5 text-red-600" />
          <h1 className="lg:text-xl text-sm text-black dark:text-white font-semibold">
            +92 124 5235
          </h1>
        </div>
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaUserCircle className="size-6 text-red-600" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
