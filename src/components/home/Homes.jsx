import React from "react";
import {
  FaCode,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLightbulb,
  FaLinkedin,
  FaNodeJs,
  FaPalette,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { BsHexagonFill } from "react-icons/bs";
import { SiCss3, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const icons = [
  { icon: <FaReact size={24} />, color: "text-cyan-400" },
  { icon: <SiTailwindcss size={22} />, color: "text-cyan-400" },
  { icon: <FaJs size={24} />, color: "text-yellow-400" },
  { icon: <BsHexagonFill size={22} />, color: "text-green-400" },
  { icon: <FaNodeJs size={24} />, color: "text-green-400" },
  { icon: <SiMongodb size={22} />, color: "text-green-400" },
  { icon: <FaHtml5 size={24} />, color: "text-orange-500" },
  { icon: <SiCss3 size={22} />, color: "text-blue-500" },
];

export default function Homes() {
  const rx = 220; // horizontal radius
  const ry = 238; 
  const [text] = useTypewriter({
    words: [
      "Web Designer",
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
    ],
    loop: true,
    typeSpeed: 180,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });


 

  return (
    <div className="relative min-h-screen bg-[#192F01] text-[#F8EFEA] overflow-hidden w-full">
      <section
        id="home"
        className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-36 gap-16 lg:gap-0 px-4 sm:px-6 lg:px-10 "
      >
        {/* LEFT */}
        <div className="lg:max-w-xl xl:max-w-3xl text-center lg:text-left flex flex-col">
          <p className="bg-linear-to-r from-[#DED369] to-[#E0475B] bg-clip-text text-transparent font-semibold" data-aos="fade-up" data-aos-delay="200">
            Hi, Welcome to my portfolio!
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2" data-aos="fade-up" data-aos-delay="300">
            I'm Anagwonye <span className="text-yellow-600">Amarachi V.</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-2 font-bold" data-aos="fade-up" data-aos-delay="300">
            I'm a{" "}
            <span className="text-yellow-600">
              {text}
              <Cursor />
            </span>
          </h2>

          <p className="mt-4 text-[#F8EFEA]/80 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            A full-stack developer builds and maintains both the front-end and
            back-end of web applications, ensuring seamless functionality,
            performance, and user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-row justify-center lg:justify-start items-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://drive.google.com/file/d/1aP-qi52KfAON3hB88xCi6YIh4PrlLaDE/view?usp=sharing"
              className="px-6 py-2 rounded-full bg-yellow-600 text-[#F8EFEA] font-semibold
                         hover:bg-[#DED369] hover:text-[#192F01] transition"
            >
              Download CV
            </a>

            <a
              href="https://drive.google.com/file/d/1aP-qi52KfAON3hB88xCi6YIh4PrlLaDE/view?usp=sharing"
              className="relative overflow-hidden flex items-center justify-center px-6 py-2 font-semibold text-[#F8EFEA] rounded-full transition-all duration-300 bg-yellow-600"
            >
              {/*-- Rotating border --*/}
              <span
                className="absolute inset-0 rounded-full
               bg-[conic-gradient(from_0deg,#d97706_10%,#DED369_40%,transparent_60%)]
               animate-spin
               duration-[8s]  /* slow rotation */
               scale-[1.05]"
              ></span>

              {/*-- Inner background --*/}
              <span className="absolute inset-0.5 rounded-full bg-[#192F01] "></span>

              {/*-- Button text --*/}
              <a
                href="#contact"
                className="relative z-10 transition-colors duration-300 hover:text-[#DED369]"
              >
                Hire Me
              </a>
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8" data-aos="fade-up" data-aos-delay="600">
            <a
              href="https://github.com/vickyvera-dev"
              className="p-3 border border-[#DED369] rounded-full text-[#DED369]
                         hover:bg-[#DED369] hover:text-[#192F01] transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/amarachi-victoria-3772b621a"
              className="p-3 border border-[#DED369] rounded-full text-[#DED369]
                         hover:bg-[#DED369] hover:text-[#192F01] transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              className="p-3 border border-[#DED369] rounded-full text-[#DED369]
                         hover:bg-[#DED369] hover:text-[#192F01] transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://www.instagram.com/victoriaanagwonye/"
              className="p-3 border border-[#DED369] rounded-full text-[#DED369]
                         hover:bg-[#DED369] hover:text-[#192F01] transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
         <div className="relative w-80 h-64 flex items-center justify-center mt-18 mb-18" data-aos="zoom-in" data-aos-delay="300">
     
       {/* Oval Profile Image */}
      <img
        src="/images/home4.png"
        alt="profile"
        className="lg:w-[95%] md:w-[70%] w-[60%] h-auto rounded-full z-10 relative transition-all ease-in-out delay-300 hover:scale-105"
      />


{/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none z-40 hidden lg:flex">
          {/* Design */}
          <div className="max-w-sm mx-auto">
            <div className="top-6 -left-10 flex flex-row items-center shadow-lg shadow-[#deeecf] bg-[#2A4A0A] gap-2 rounded w-28 h-10 absolute animate-pulse z-40" data-aos="fade-left" data-aos-delay="700">
            <FaPalette className="ml-3"/>
            <span className="font-bold">Design</span>
          </div>
          </div>

          {/* Code */}
          <div className="absolute w-28 h-10 top-16 -right-12 flex flex-row items-center shadow-lg shadow-[#deeecf] bg-[#2A4A0A] gap-2  rounded animate-pulse">
            <FaCode className="ml-3"/>
            <span className="font-bold">Code</span>
          </div>

          {/* Ideas */}
          <div className="-bottom-8 left-1/2 translate-x-1/2 absolute flex flex-row items-center shadow-lg shadow-[#deeecf] bg-[#2A4A0A] gap-2 w-28 h-10 rounded animate-pulse" data-aos="fade-up"
  data-aos-delay="900">
            <FaLightbulb className="ml-3"/>
            <span className="font-bold">Ideas</span>
          </div>
        </div>
     
      {/* Orbit container */}
      {/* <motion.div
        className="absolute inset-0 hidden lg:flex"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {icons.map((item, index) => {
          const angle = (360 / icons.length) * index;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateX(0)
                  translateY(-${ry}px)
                  scaleX(${rx / ry})
                `,
              }}
            >
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className={item.color}
              >
                {item.icon}
              </motion.div>
            </div>
          );
        })}
      </motion.div> */}
    </div>
      </section>
    </div>
  );
}
