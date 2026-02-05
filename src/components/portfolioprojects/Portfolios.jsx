import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Portfolios() {
  return (
    <div>
      <section id="portfolio" className="py-16 bg-[#E0F2E9] px-4 lg:px-20">
        <h2 className="text-3xl font-bold text-[#192F01] text-center mb-4 relative flex justify-center flex-row">
          My <span className="text-[#DED369] ml-2">Portfolio</span>
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#F3D849] rounded-full -translate-x-1/2"></span>
        </h2>

        <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  loop={true}
  coverflowEffect={{
    rotate: 45,        // stronger tilt (matches your image)
    stretch: -20,      // overlap cards slightly
    depth: 300,        // pushes side cards backward
    modifier: 1,
    slideShadows: false,
  }}
   breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="mt-12">
           {/*portfolio card*/}
          <SwiperSlide>
  <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
    <div className="overflow-hidden flex justify-center">
      <img
        src="/images/portfolio-website.png"
        alt="profile"
        className="w-full h-full object-cover transition-all duration-300 hover:scale-125"
      />
    </div>

    <div className='ml-4'>
      <h2 className='text-[#192F01] font-bold text-lg mt-3'>
        Portfolio Website
      </h2>

      <p className='text-gray-600 mt-2'>
        A slick portfolio website to showcase my work. 
      </p>

      <div className='flex flex-wrap gap-3 mt-6'>
        <button className='bg-yellow-600 text-white rounded-full py-1 px-4 shadow'>#HTML</button>
        <button className='bg-yellow-600 text-white rounded-full py-1 px-4 shadow'>#CSS</button>
        <button className='bg-yellow-600 text-white rounded-full py-1 px-4 shadow'>#JAVASCRIPT</button>
      </div>

      <div className='flex gap-8 mt-4'>
        <a href='#' className='font-bold text-[#192F01] hover:underline'>Live Demo</a>
        <a href='#' className='font-bold text-[#192F01] hover:underline'>View Code</a>
      </div>
    </div>
  </div>
       </SwiperSlide>

       {/*medicare card*/}
    <SwiperSlide>
  <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
     <a href='https://medicare-red-iota.vercel.app/' className="overflow-hidden flex justify-center">
                <img
              src="/images/medicare.png"
              alt="profile"
              className="w-full h-full object-cover z-10 overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
            </a>

    <div className='ml-4'>
      <h2 className='text-[#192F01] font-bold text-lg mt-3'>
        Medicare Website
      </h2>

      <p className='text-gray-600 mt-2'>
       A modern healthcare platform to connect patients with medical services.
      </p>

      <div className='flex flex-wrap gap-3 mt-6'>
       <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#React</button>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#Tailwind CSS</button>
            
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#UI/UX Design</button>
      </div>

      <div className='flex gap-8 mt-4'>
        <a href='https://medicare-red-iota.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>Live Demo</a>
              <a href='https://medicare-red-iota.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>View Code</a>
      </div>
    </div>
  </div>
</SwiperSlide>


{/*estore card*/}
  <SwiperSlide>
  <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
     <a href='https://my-onlinestore-rj4h.vercel.app/' className="overflow-hidden flex justify-center">
                <img
              src="/images/estoreapp.png"
              alt="profile"
              className="w-full h-full object-cover z-10 overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
            </a>

    <div className='ml-4'>
      <h2 className='text-[#192F01] font-bold text-lg mt-3'>
        eStore Website
      </h2>

      <p className='text-gray-600 mt-2'>
        A responsive online store offering a smooth shopping experience.
      </p>

      <div className='flex flex-wrap gap-3 mt-6'>
       <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#React</button>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#Tailwind CSS</button>
            
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#UI/UX Design</button>
      </div>

      <div className='flex gap-8 mt-4'>
         <a href='https://my-onlinestore-rj4h.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>Live Demo</a>
              <a href='https://my-onlinestore-rj4h.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>View Code</a>
      </div>
    </div>
  </div>
</SwiperSlide>       

          
          {/*Real-estate card*/}
          <SwiperSlide>
            <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
            <a href='https://real-estate-project-kohl-six.vercel.app/' className="overflow-hidden flex justify-center">
                <img
              src="/images/real-estate.webp"
              alt="profile"
              className="w-full h-full object-cover z-10 overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
            </a>
            <div className='ml-4'>
               <h2 className='text-[#192F01]  font-bold text-lg  mt-3'>Real-estate Website</h2>
             <p className='text-gray-600 mt-2'>A modern real estate portal to explore and list homes.</p>
             <div className='flex flex-row gap-4 mt-8 flex-wrap'>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#React</button>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#Tailwind CSS</button>
            
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#UI/UX Design</button>
             </div>

             <div className='flex flex-row items-center gap-30 mt-6'>
              <a href='https://real-estate-project-kohl-six.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline hover:text-cyan-400'>Live Demo</a>
              <a href='https://real-estate-project-kohl-six.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>View Code</a>
             </div>
            </div>

          </div>
          </SwiperSlide>
          

           {/*Game card*/}
           <SwiperSlide>
            <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
            <a href='https://game-design-beige.vercel.app/' className="overflow-hidden flex justify-center">
                <img
              src="/images/real-estate.webp"
              alt="profile"
              className="w-full h-full object-cover z-10 overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
            </a>
            <div className='ml-4'>
               <h2 className='text-[#192F01]  font-bold text-lg  mt-3'>Game Website</h2>
             <p className='text-gray-600 mt-2'>MediCare is a modern, responsive healthcare website designed to deliver a seamless experience across desktop, tablet, and mobile devices.</p>
             <div className='flex flex-row gap-4 mt-8 flex-wrap'>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#HTML</button>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#CSS</button>
            
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#JAVASCRIPT</button>
             </div>

             <div className='flex flex-row items-center gap-30 mt-6'>
              <a href='https://game-design-beige.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>Live Demo</a>
              <a href='https://game-design-beige.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>View Code</a>
             </div>
            </div>

          </div>
           </SwiperSlide>
          

           {/*Dashboard card*/}
           <SwiperSlide>
            <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
            <a href='https://game-design-beige.vercel.app/' className="overflow-hidden flex justify-center">
                <img
              src="/images/medicare.png"
              alt="profile"
              className="w-full h-full object-cover z-10 overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
            </a>
            <div className='ml-4'>
               <h2 className='text-[#192F01]  font-bold text-lg  mt-3'>Dashboard Website</h2>
             <p className='text-gray-600 mt-2'>MediCare is a modern, responsive healthcare website designed to deliver a seamless experience across desktop, tablet, and mobile devices.</p>
             <div className='flex flex-row gap-4 mt-8 flex-wrap'>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#HTML</button>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#CSS</button>
            
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#JAVASCRIPT</button>
             </div>

             <div className='flex flex-row items-center gap-30 mt-6'>
              <a href='https://game-design-beige.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>Live Demo</a>
              <a href='https://game-design-beige.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>View Code</a>
             </div>
            </div>

          </div>
           </SwiperSlide>
          

           {/*Book-Store card*/}
           <SwiperSlide>
            <div className='bg-[#E0F2E9] shadow-lg rounded pb-8'>
            <a href='https://game-design-beige.vercel.app/' className="overflow-hidden flex justify-center">
                <img
              src="/images/medicare.png"
              alt="profile"
              className="w-full h-full object-cover z-10 overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
            </a>
            <div className='ml-4'>
               <h2 className='text-[#192F01]  font-bold text-lg  mt-3'>Book-Store Website</h2>
             <p className='text-gray-600 mt-2'>MediCare is a modern, responsive healthcare website designed to deliver a seamless experience across desktop, tablet, and mobile devices.</p>
             <div className='flex flex-row gap-4 mt-8 flex-wrap'>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#HTML</button>
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#CSS</button>
            
              <button className='bg-yellow-600 text-white rounded-full py-2 px-5 shadow'>#JAVASCRIPT</button>
             </div>

             <div className='flex flex-row items-center gap-30 mt-6'>
              <a href='https://game-design-beige.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>Live Demo</a>
              <a href='https://game-design-beige.vercel.app/' className='font-bold text-lg text-[#192F01] hover:underline'>View Code</a>
             </div>
            </div>

          </div>
           </SwiperSlide>
          
        </Swiper>
      </section>
    </div>
  )
}
