import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
    <>
      <div
        className={`
        ${darkMode ? "dark bg-black" : "light bg-white"}
      `}
      >
        <section
          id="hero"
          style={{ backgroundImage: `url(${heroimg})` }}
          className="
            flex flex-col z-20
            w-[95%] h-[600px]
            m-auto px-10
            bg-cover bg-center
            rounded-xl
            justify-center items-start lg-px-28 gap-7
          "
        >
          <h1
            data-aos="zoom-in"
            className="
              pr-0
              text-6xl text-white font-semibold leading-[60px]
              lg-leading-[70px]
              lg:pr-[500px]
            "
          >
            Find Your Next Home in Las Vagas
          </h1>
          <p
            data-aos="zoom-in"
            className="
              pr-0
              text-white text-xl
              lg-pr-[500px]
            "
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            amet ducimus aliquam quos natus in fuga aperiam voluptatem at omnis
            quidem ut deleniti cumque, error debitis harum vitae doloribus
            doloremque!
          </p>
        </section>
      </div>
      {/* Form starts here */}

      <div
        className={`
          z-10
          ${darkMode ? "dark bg-black" : "light bg-transparent"}
        `}
      >
        <div
          data-aos="zoom-in"
          id="from"
          className={`
            grid grid-cols-1
            w-full
            m-auto p-8
            rounded-xl
            justify-center items-center gap-6 -mt-14
            lg:grid-cols-4 lg:w-[70%]
            ${darkMode ? "dark bg-black" : "light bg-white"}
          `}
        >
          <div cloassName="w-full">
            <h1
              className="
                text-black font-semibold
                dark:text-white
              "
            >
              Location
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="
                w-full
                p-2 mt-2
                bg-white
                border-b-[1px] border-[#c9c7c1]
              "
            />
          </div>
          <div
            className="
              w-full
            "
          >
            <h1
              className="
                  text-black font-semibold
                  dark:text-white
                "
            >
              Type
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="
                  w-full
                  p-4 mt-2
                  text-gray-500 text-md
                  bg-white
                  border-b-[1px] border-[#c9c7c1]
                "
            >
              <option value="" disabled selected>
                Select Propertity
              </option>
              <option value="option1">Rentals</option>
              <option value="option1">Sales</option>
              <option value="option1">Commercial</option>
            </select>
          </div>
          <div
            className="
              w-full
            "
          >
            <h1
              className="
                  text-black font-semibold
                  dark:text-white
                "
            >
              Category
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="
                  w-full
                  p-4 mt-2
                  text-gray-500 text-md
                  bg-white
                  border-b-[1px] border-[#c9c7c1]
                "
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="option1">Apartments</option>
              <option value="option1">Duples</option>
              <option value="option1">Codos</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300">
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
