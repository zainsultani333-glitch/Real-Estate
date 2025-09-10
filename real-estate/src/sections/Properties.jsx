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
  FaHeart,
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
                <div
                  id="top-grid"
                  className="w-full flex justify-between items-end"
                >
                  <div>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Featurd
                    </button>
                  </div>
                  <div className="gap-3 flex justify-between items-center">
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Sales
                    </button>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Active
                    </button>
                  </div>
                </div>
                <div
                  id="bottom-grid"
                  className="flex justify-between items-end w-full"
                >
                  <div className="justify-start items-center gap-2 flex">
                    <FaMapMarkerAlt className="text-white size-4 cursor-pointer" />
                    <h1 className="text-white cursor-pointer">
                      {item.address}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <FaVideo className="text-white size-4 mx-2 cursor-pointer" />
                    <FaCamera className="text-white size-4 mx-2 cursor-pointer" />
                  </div>
                </div>
                {/* Optional overlay content */}
              </div>
              <div className="px-6 py-3 flex-col justify-center items-start gap-2 w-full">
                <h1 className="text-xl tex-black font-semibold dark:text-white mb-3">
                  {item.name}
                </h1>
                <h1 className="text-2xl text-red-600 font-bold dark:text-white mb-3">
                  {item.price}
                </h1>
                <p className="dark:text-white mb-2 font-normal">{item.about}</p>
                {""}
                <div
                  id="icons"
                  className="flex justify-start items-start gap-4"
                >
                  <FaBath className="size-4 text-red-600" />{" "}
                  <span className="dark:text-white text-sm">
                    {item.bath} Bath
                  </span>
                  <FaBed className="size-4 text-red-600" />{" "}
                  <span className="dark:text-white text-sm">
                    {item.bed} Bed
                  </span>
                  <MdSpaceDashboard className="size-4 text-red-600" />{" "}
                  <span className="dark:text-white text-sm">{item.area}</span>
                </div>
              </div>
              <div className="w-full bg-gray-400 h-[1px] mt-4"></div>
              <div
                id="owner-info"
                className="flex justify-between items-center w-full mt-2 "
              >
                <div className="flex justify-start items-center gap-3 px-6 py-3">
                  <FaUserCircle className="size-4 text-red-600" />
                  <h1 className="dark:text-white ">{item.owner}</h1>
                </div>
                <div className="flex justify-center items-center gap-4 pr-6">
                  <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300 te">
                    <FaShareAlt className="size-4 text-red-600 dark:text-white " />
                  </div>
                  <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300 te">
                    <FaHeart className="size-4 text-red-600 dark:text-white " />
                  </div>
                  <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300 te">
                    <FaPlus className="size-4 text-red-600 dark:text-white " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            data-aos="zoom in"
            className="bg-red-600  p-3 pl-8 pr-8 rounded-xl text-white hover:bg-black hover:text-white transition-colors duration-300 dark:text-white"
          >
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Properties;
