import React from "react";
import { Icon } from '@iconify/react';
import { SiTailwindcss } from "react-icons/si";
import { useEffect, useState, useRef } from "react";



function Skill() {
  
   function SkillBar({ value, color = "#DED369" }) {
    const barRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setProgress(value);
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );

      if (barRef.current) observer.observe(barRef.current);
      return () => observer.disconnect();
    }, [value]);

    return (
      <div
        ref={barRef}
        className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden"
      >
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%`, backgroundColor: color }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    );
  }


  
  return (
    <div>
      <section id="skills" className="py-16 bg-[#E0F2E9] lg:px-0">
        <h2 className="text-3xl font-bold text-[#192F01] text-center mb-4 relative flex justify-center flex-row">
          My <span className="text-[#DED369] ml-2">Skills</span>
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#F3D849] rounded-full -translate-x-1/2"></span>
        </h2>

        <div className="w-full bg-[#3F6B12] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 py-10 px-4">
            
            {/* CARD 1 */}
            <div className="bg-[#1f3b06] border border-[#2A4A0A] rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[#E0F2E9]">
            <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              <Icon icon="logos:html-5" className="w-6 h-6 text-[#DED369]" /> HTML
            </h2>

              <p className="text-sm leading-relaxed text-[#F8EFEA]/80 mb-4">
                HTML (HyperText Markup Language) is the standard markup language
                used to structure web content.
              </p>
              <div className="w-full">
                <div className="flex justify-end mb-1 text-sm font-bold">
                  <span className="text-yellow-600">90%</span>
                </div>
                <div className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden">
                  <SkillBar value={90} />
                  <div className="h-full bg-[#DED369] rounded-full transition-all duration-700 ease-out" style={{ width: "90%"}} 
                 />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#1f3b06] border border-[#2A4A0A] rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[#E0F2E9]">
               <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              <Icon icon="logos:css-3" className="w-6 h-6 text-[#DED369]" /> CSS
            </h2>
              <p className="text-sm leading-relaxed text-[#F8EFEA]/80 mb-4">
                CSS (Cascading Style Sheets) is used to style and visually enhance web pages.
              </p>
              <div className="w-full">
                <div className="flex justify-end mb-1 text-sm font-bold">
                  <span className="text-yellow-600">90%</span>
                </div>
                <div className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden">
                  <SkillBar value={90} />
                  <div className="h-full bg-[#DED369] rounded-full transition-all duration-1000 ease-out" style={{ width: "90%" }} />
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#1f3b06] border border-[#2A4A0A] rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[#E0F2E9]">
               <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              <Icon icon="logos:javascript" className="w-6 h-6 text-[#DED369]" /> JavaScript
            </h2>
              <p className="text-sm leading-relaxed text-[#F8EFEA]/80 mb-4">
                JavaScript adds interactivity and dynamic behavior to web pages.
              </p>
              <div className="w-full">
                <div className="flex justify-end mb-1 text-sm font-bold">
                  <span className="text-yellow-600">75%</span>
                </div>
                <div className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden">
                  <SkillBar value={75} />
                  <div className="h-full bg-[#DED369] rounded-full transition-all duration-1000 ease-out" style={{ width: "75%" }} />
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#1f3b06] border border-[#2A4A0A] rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[#E0F2E9]">
               <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              <Icon icon="logos:react" className="w-6 h-6 text-[#DED369]" /> Reactjs
            </h2>
              <p className="text-sm leading-relaxed text-[#F8EFEA]/80 mb-4">
                React is a JavaScript library for building fast, interactive, component-based UIs.
              </p>
              <div className="w-full">
                <div className="flex justify-end mb-1 text-sm font-bold">
                  <span className="text-yellow-600">90%</span>
                </div>
                <div className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden">
                  <SkillBar value={90} />
                  <div className="h-full bg-[#DED369] rounded-full transition-all duration-1000 ease-out" style={{ width: "90%" }} />
                </div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#1f3b06] border border-[#2A4A0A] rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[#E0F2E9]">
              <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
               <SiTailwindcss size={22} className="text-cyan-400"/>Tailwind CSS
            </h2>
              <p className="text-sm leading-relaxed text-[#F8EFEA]/80 mb-4">
                Tailwind CSS is a utility-first CSS framework for building responsive UIs.
              </p>
              <div className="w-full">
                <div className="flex justify-end mb-1 text-sm font-bold">
                  <span className="text-yellow-600">90%</span>
                </div>
                <div className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden">
                  <SkillBar value={90} />
                  <div className="h-full bg-[#DED369] rounded-full transition-all duration-1000 ease-out" style={{ width: "90%" }} />
                </div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#1f3b06] border border-[#2A4A0A] rounded-xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[#E0F2E9]">
               <h2 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              <Icon icon="logos:nodejs-icon" className="w-6 h-6 text-[#DED369]" /> Node.js
            </h2>
              <p className="text-sm leading-relaxed text-[#F8EFEA]/80 mb-4">
                Node.js allows developers to run JavaScript on the server for backend services.
              </p>
              <div className="w-full">
                <div className="flex justify-end mb-1 text-sm font-bold">
                  <span className="text-yellow-600">55%</span>
                </div>
                <div className="w-full bg-[#2A4A0A] rounded-full h-3 overflow-hidden">
                  <SkillBar value={55} />
                  <div className="h-full bg-[#DED369] rounded-full transition-all duration-1000 ease-out" style={{ width: "55%" }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
