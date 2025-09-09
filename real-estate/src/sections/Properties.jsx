import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[90%] w-full m-auto lg:px-20 px-6 py-20 flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom in" className="text-red-500 dark:text-white ">
            PROPERTIESE
          </h1>
          <h1
            data-aos="zoom in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest
          </h1>
        </div>

        {/* propertiese grid starts from here */}
        <div
          id="grid-box"
          className="w-full lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 grid"
        >
          <div
            id="grid-box"
            className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center"
          >
            {property.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl w-full shadow-lg"
              >
                <div
                  id="image-box"
                  className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  {/* You can add overlay text/icons here if needed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
