import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { IoMdArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ContactMe() {
    const [showButton, setShowButton] =
    useState(false);
  
    useEffect(() => {
     AOS.init({duration: 1000, once:true});
  
     const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      }else {
        setShowButton(false);
      }
     };
     window.addEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth"});
    };
  
  return (
    <div>
      <section id="contact" className="">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#192F01] text-center mb-4 relative flex justify-center flex-row">
            Contact <span className="text-[#DED369] ml-2">Me</span>
            <span
              className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#F3D849] rounded-full -translate-x-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            ></span>
          </h2>
          {/* <p className="text-[18px] text-center mb-20 text-gray-500 max-w-lg mx-auto">
            Delivering tailored digital solutions with a strong focus on
            quality, performance, and usability—crafted to solve real business
            challenges.
          </p> */}
        </div>

        <div
          className="py-16 bg-[#0a0a0a]  lg:px-22 lg:pl-26 px-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/*left*/}
            <div className="lg:col-span-5 shadow-2xl rounded p-8 bg-[#000000]">
              <div
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-bold text-white">Contact Info</h3>

                <p className="text-gray-400 mb-6">
                  Get in touch with us via the contact details provided below
                  for inquiries, support, or collaborations.
                </p>

                {/* Location */}
                <div
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#192F01] text-white">
                    <BsGeoAlt className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Our Location</h4>
                    <p className="text-gray-400">Ikotun,</p>
                    <p className="text-gray-400">Lagos State, Nigeria.</p>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#192F01] text-white">
                    <BsTelephone className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Phone Number</h4>
                    <p className="text-gray-400">+234 8107 736 521</p>
                    <p className="text-gray-400">+234 9124 578 299</p>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#192F01] text-white">
                    <BsEnvelope className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Email Address</h4>
                    <p className="text-gray-400">info@example.com</p>
                    <p className="text-gray-400">contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/*right*/}
            <div className="lg:col-span-7">
              <div className="bg-[#111] p-8 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300">

               <h3 className="text-2xl font-bold text-white mb-2">
              Get In Touch
            </h3>
<p className="text-gray-400 mb-6">
              Delivering tailored digital solutions with a strong focus on
            quality, performance, and usability—crafted to solve real business
            challenges.
            </p>

              <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#192F01]"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#192F01]"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                className="md:col-span-2 w-full rounded-md bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#192F01]"
                required
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="md:col-span-2 w-full rounded-md bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#192F01]"
                required
              />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-block bg-[#192F01] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </div>
            </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#000000] flex justify-center items-center py-10 px-4 text-center w-full">
      <div data-aos="fade-up" className="max-w-6xl w-full">
      

        {/* Copyright */}
        <p className="flex flex-wrap justify-center gap-1 items-center text-gray-600 mb-2 text-sm">
          <span>©</span>
          <span>Copyright</span>

          
          <strong className="text-gray-800 hover:text-[#192F01] mr-2">Amarachifolio</strong>
          <span>All Rights Reserved.</span>
        </p>

        {/* Credit */}
        <p className="text-gray-500 text-sm">
          Designed by{" "}
          <a
            href="https://github.com/vickyvera-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#192F01] hover:underline"
          >
            Vickyvera-dev
          </a>
        </p>
      </div>

      {showButton && (
              <button onClick={scrollToTop}
              data-aos="zoom-in" className='fixed bottom-4 right-6 bg-[#192F01] text-white p-3 rounded-full shadow-lg hover:bg-[#192F01] transtion z-50'> <IoMdArrowUp size={20} className='h-4 w-4'/></button>
            )}  
    </div>
    </div>
  );
}
