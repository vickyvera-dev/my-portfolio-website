
import React from "react";
import { BsChevronBarExpand, BsGraphUp, BsKey, BsSearch, BsShieldCheck } from "react-icons/bs";
import { FaBezierCurve, FaLaptopCode } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function MyServices() {
  return (
    
    <div className="w-full bg-[#fefefe] py-10 lg:px-0">
      <section id="Services"
       className="py-16 bg-[#E0F2E9]  lg:px-22 lg:pl-26 px-6">
        
        <div  data-aos="fade-up">
           <h2 className="text-3xl font-bold text-[#192F01] text-center mb-4 relative flex justify-center flex-row">
          My <span className="text-[#DED369] ml-2">Services</span>
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#F3D849] rounded-full -translate-x-1/2"  data-aos="fade-up"
            data-aos-delay="100"></span>
        </h2>
          
          <p className="text-[18px] text-center mb-20 text-gray-500 max-w-lg mx-auto">
            Providing tailored digital services focused on quality, performance, and usability, Offering professional web solutions designed to meet real business needs.
          </p>
        </div>
       

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 w-full items-stretch"  data-aos="fade-up" data-aos-delay="100">
          {/*first card*/}
          <div className="border border-gray-300 bg-white py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-[#3F6B12] w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-gray-300 inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  <FaLaptopCode size={28} className="text-[#3F6B12]"/>
                </span>

                <span
                  className="font-bold text-3xl text-gray-500 font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  01
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-green-950 font-bold mt-8 mb-5 transition-colors ease-in-out duration-300 hover:text-[#3F6B12]">
                Web Developer
              </h3>
              <p className="text-center mb-5 text-gray-500">
                I’m a web designer specializing in building and maintaining high-quality web applications, collaborating closely with developers and designers to deliver consistent, reliable user experiences.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
            {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <a
                  className="flex flex-row gap-2 border border-[#3F6B12] text-[#3F6B12] font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-[#3F6B12] hover:text-white hover:scale-x-105"
                >
                  <span>Explore More</span>                  
                </a>
              </div>
            </div>
          </div>

          {/*second card*/}
          <div className="bg-[#3F6B12] py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all ease-in-out duration-300 relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-white w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-white inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                 
                <BsChevronBarExpand size={28} className="text-[#3F6B12]"/>
                </span>

                <span
                  className="font-bold text-3xl text-white font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  02
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-white font-bold mt-8 mb-5 transition-colors ease-in-out duration-300">
                Frontend Developer
              </h3>
              <p className="text-center mb-5 text-white">
                A front-end developer experienced in building and implementing engaging visual and interactive web interfaces, collaborating closely with designers and backend developers to create robust, maintainable applications.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
              
              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <a
                  className="flex flex-row gap-2 bg-[#3F6B12] text-white font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-white hover:text-[#3F6B12] hover:scale-x-105 hover:border hover:border-[#3F6B12] border-white border"
                >
                  <span>Get In Touch</span>                  
                </a>
              </div>
            </div>
          </div>

          {/*third card*/}
          <div className="border border-gray-300 bg-white py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="400">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-[#3F6B12] w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-gray-300 inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                 <FaBezierCurve size={28} className="text-[#3F6B12]" />
                </span>

                <span
                  className="font-bold text-3xl text-gray-500 font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  03
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-green-950 font-bold mt-8 mb-5 transition-colors ease-in-out duration-300 hover:text-[#3F6B12]">
                Graphics Designer 
                </h3>
              <p className="text-center mb-5 text-gray-500">
               A talented graphic designer with experience creating visually compelling designs across digital media, including websites and social platforms, proficient in CorelDRAW and Figma, with strong communication and time-management skills.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
             
              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <a
                  
                  className="flex flex-row gap-2 border border-[#3F6B12] text-[#3F6B12] hover:bg-[#3F6B12] hover:text-white font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-[#3F6B12]hover:text-white hover:scale-x-105"
                >
                  <span>Learn More</span>
                  </a>
              </div>
            </div>
          </div>

          {/*fourth card*/}
          <div className="border border-gray-300 bg-white py-8 px-8 rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="500">
            {/* Animated Top Bar */}
            <span className="absolute top-0 left-1/2 h-0.5 bg-[#3F6B12] w-0 group-hover:w-20 group-hover:left-[calc(50%-40px)] transition-all duration-500"></span>

            {/* ICON */}
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <span
                  className="rounded-full py-6 px-6 bg-gray-300 inline-block transition-all group-hover:rotate-y-360
               ease-in-out duration-700"
                  style={{ transformStyle: "preserve-3d" }}
                >
                 <BsChevronBarExpand size={28} className="text-[#3F6B12]"/>
                </span>

                <span
                  className="font-bold text-3xl text-gray-500 font-raleway"
                  style={{ fontFamily: "Raleway" }}
                >
                  04
                </span>
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <h3 className="text-center text-xl text-green-950 font-bold mt-8 mb-5">
                Backend Development
              </h3>
              <p className="text-center mb-5 text-gray-500">
               An experienced back-end developer with a solid background in server-side development, database management, and API integration, working closely with front-end teams to ensure seamless functionality and optimal application performance.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-2 mt-5">
           
              {/* BUTTON */}
              <div className="w-full flex justify-center mt-6">
                <a
                  className="flex flex-row gap-2 border border-[#3F6B12] text-[#3F6B12]font-bold rounded-full py-3 px-6 justify-center items-center transition-all ease-in-out duration-300 hover:bg-[#3F6B12] hover:text-white hover:scale-x-105"
                >
                  <span>Learn More</span>
                 
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <a
          className="relative inline-block px-6 py-3 font-bold text-[#3F6B12] rounded-full overflow-hidden group border border-[#3F6B12] justify-center "
        >
          {/* Background */}
          <span className="absolute inset-0 w-0 bg-[#3F6B12] transition-all duration-500 group-hover:w-full"></span>

          {/* Button Text */}
          <span className="relative z-10 group-hover:text-white flex flex-row gap-2 items-center">
            <span>Discover All Our Services </span>
            <span>
              <HiOutlineArrowNarrowRight
                size={24}
                className="rotate-330 group-hover:rotate-360"
              />
            </span>
          </span>
        </a>
        </div>
      </section>
    </div>
  );
}
export default MyServices;
