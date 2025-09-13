import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/area1.jpg";
import area2 from "../assets/area2.jpg";
import area3 from "../assets/area3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
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
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl 
       flex flex-col justify-center items-center lg:px-20 px-6 py-20 gap-20`}
      >
        {/* Top (pictures + heading) */}
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8"
        >
          {/* Text heading */}
          <div>
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] leading-10 font-semibold m-4 dark:text-white"
            >
              Explore most <br /> popular areas
            </h1>
          </div>

          {/* Images */}
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-start gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ background: `url(${area1})` }}
              className="h-[350px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ background: `url(${area2})` }}
              className="h-[350px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ background: `url(${area3})` }}
              className="h-[350px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>

        {/* Bottom (text stats) */}
        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6"
        >
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex flex-col items-center gap-4 w-full"
          >
            <h1 className="text-black dark:text-white text-7xl font-bold">
              5K
            </h1>
            <h1 className="text-black dark:text-white">ACTIVE LISTING</h1>
          </div>

          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex flex-col items-center gap-4 w-full"
          >
            <h1 className="text-black dark:text-white text-7xl font-bold">
              5K
            </h1>
            <h1 className="text-black dark:text-white">ACTIVE LISTING</h1>
          </div>

          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex flex-col items-center gap-4 w-full"
          >
            <h1 className="text-black dark:text-white text-7xl font-bold">
              5K
            </h1>
            <h1 className="text-black dark:text-white">ACTIVE LISTING</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
