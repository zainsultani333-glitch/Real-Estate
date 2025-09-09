import React, { useEffect } from "react";
import aboutimg from "../assets/about.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      id="about"
      className="{`${darkMode? 'dark bg-black' : light bg-transparent'}`} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center"
    >
      <div>
        <img
          data-aos="zoom in"
          src={aboutimg}
          alt="about image"
          className="rounded-2xl lg:w-[500] lg:h-[600]"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-6">
        <h1 data-aos="zoom in" className="text-red-500 dark:text-white">
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom in"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold dark:text-"
        >
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p
          data-aos="zoom in"
          data-aos-delay="400"
          className="text-xl text-gray-600 dark:text-white text-justify"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          ratione. Dicta nostrum consequatur ipsa hic nemo deserunt quas
          corporis eligendi totam, tempora porro nam repellendus.
        </p>
        <button
          data-aos="zoom in"
          data-aos-delay="500"
          className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
        >
          Read More
        </button>
      </div>
    </section>
  );
};
export default About;
