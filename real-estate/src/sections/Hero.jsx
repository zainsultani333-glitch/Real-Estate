import React, { useEffect } from 'react'
import {useDarkMode} from '../components/DarkModeContext'
import heroimg from '../assets/hero1.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
  useEffect(() => {
    AOS.init({ 
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
     });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
 

  return (
   <>
    <div className= {`${darkMode ? "dark bg-black" : "light bg-white"}`} >
        <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg-px-28 px-10 gap-7 z-20' style={{backgroundImage: `url(${heroimg})`}}>
          <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg-leading-[70px] leading-[60px]' >Find Your Next Home in Las Vagas</h1>
          <p data-aos="zoom-in" className='text-white text-xl lg-pr-[500px] pr-0' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi amet ducimus aliquam quos natus in fuga aperiam voluptatem at omnis quidem ut deleniti cumque, error debitis harum vitae doloribus doloremque!</p>
        </section>
    </div>
{/* Form starts here */}

      <div className= {`${darkMode ? "dark bg-black" : "light bg-white"} z-10`} >
        <div data-aos="zoom-in" id='from' >

        </div>
      </div>
   </>
  )

}
export default Hero



// import React, { useEffect } from 'react'
// import { useDarkMode } from '../components/DarkModeContext'
// import heroimg from '../assets/hero1.webp'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 800,
//       easing: 'ease-in-out',
//       delay: 100,
//     });
//   }, []);

//   const { darkMode, toggleDarkMode } = useDarkMode();

//   return (
//     <div>
//       Hero Section
//       <button onClick={toggleDarkMode}>
//         Toggle to {darkMode ? "Light" : "Dark"} Mode
//       </button>
//       <img src={heroimg} alt="Hero" data-aos="fade-up" />
//     </div>
//   )
// }

// export default Hero
