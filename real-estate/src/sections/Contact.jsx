import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
    <div
      className={`${darkMode ? "dark:bg-black" : "light:bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="font-medium font-sans text-2xl text-black dark:text-white">
            Send us a mesage today
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="border-[1px] border-gray-200 py-3 px-6 w-full rounded-xl "
          />
          <input
            type="email"
            placeholder="Enter your valid email"
            className="border-[1px] border-gray-200 py-3 px-6 w-full rounded-xl "
          />
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="border-[1px] border-gray-200 py-3 px-6 w-full rounded-xl "
          />
          <textarea
            name=""
            id=""
            rows="5"
            className="border-[1px] border-gray-200 py-3 px-6 w-full rounded-xl "
            placeholder="Enter your message here...."
          ></textarea>
          <button className="bg-red-700 w-full rounded-xl px-8 py-3 text-white font-semibold text-md hover:bg-black dark:hover:bg-red-400 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom in"
            data-aos-delay="200"
            className="text-red-400 dark:text-white"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom in"
            data-aos-delay="200"
            className="text-black text-[40px] leading-10 font-semibold dark:text-white"
          >
            Get in touch with us today and our team will assist you
          </h1>
          <p
            data-aos="zoom in"
            data-aos-delay="200"
            className="text-gray-600 text-[15px] font-regular dark:text-gray-300"
          >
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>
          <button
            data-aos="zoom in"
            data-aos-delay="200"
            className="bg-red-700  rounded-xl px-8 py-3 text-white font-semibold text-md hover:bg-black dark:hover:bg-red-400 cursor-pointer"
          >
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
