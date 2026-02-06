import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { Icon } from "@iconify/react";

export default function Abouts() {
  return (
    <div>
      <section id="about" className="py-16 bg-[#E0F2E9] px-4 lg:px-20" data-aos="fade-up" data-aos-delay="200">
        {/* <h2 className="text-3xl font-bold text-center text-[#0A62D0] mb-4 relative inline-block">
About Me

<span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#F3D849] rounded-full -translate-x-1/2"></span>
</h2> */}
        <h2 className="text-3xl font-bold text-[#192F01] text-center mb-4 relative flex justify-center flex-row" data-aos="fade-up" data-aos-delay="300">
          About <span className="text-[#DED369] ml-2">Me</span>
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-[#F3D849] rounded-full -translate-x-1/2"></span>
        </h2>
        <div className="flex lg:flex-row  flex-col-reverse items-center justify-between pt-36 gap-12 px-[5%]">
          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 flex justify-center overflow-hidden">
            <img
              src="/images/profile3.png"
              alt="profile"
              className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-xl overflow-hidden transition-all ease-in-out duration-300 hover:scale-125"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm uppercase tracking-wide text-[#DED369]">
              Hello!
            </p>

            <h2 className="text-3xl font-semibold mt-2 leading-tight">
              Hi, I’m Amarachi — a junior creative web developer focused on
              building clean, responsive user interfaces.
            </h2>

            <p className="text-lg leading-relaxed mt-4 text-[#192F01]">
              I build and maintain web applications using React, Tailwind CSS,
              HTML, and JavaScript, with growing experience in Node.js, Express,
              MongoDb and postman. I enjoy learning new technologies and
              improving my problem-solving skills while working on real-world
              projects.
            </p>

            <p className="mt-3 text-base text-gray-500">
              I am currently based in Lagos, Nigeria, with one year of hands-on
              experience at IJAN Africa, where I collaborated on building and
              deploying web applications using GitHub and Vercel.
            </p>
            <div className="flex flex-col lg:flex-row w-full items-center gap-6 mt-10">
              <a
                href="https://drive.google.com/file/d/1aP-qi52KfAON3hB88xCi6YIh4PrlLaDE/view?usp=sharing"
                className="px-6 py-2 rounded-full bg-[#192F01] text-[#DED369] font-semibold
        hover:bg-[#192F01] transition ease-in-out duration-300 hover:border-[#192F01] hover:border flex flex-row gap-1 items-center"
              >
                Download Resume{" "}
                <span className="text-[#DED369]">
                  {" "}
                  <Icon
                    icon="line-md:download-loop"
                    className="w-6 h-7 text-[#DED369]"
                  />
                </span>
              </a>

              {/* <a
href="https://my-onlinestore-rj4h.vercel.app/"
className="px-6 py-2 rounded-full border border-[#192F01] text-[#192F01] font-semibold
        hover:bg-[#DED369] hover:text-[#192F01] hover:border-[#192F01] transition"
>
View My Work
</a> */}

              <a
                href="#portfolio"
                className="relative overflow-hidden flex items-center justify-center px-6 py-2 font-semibold text-[#192F01] rounded-full transition-all duration-300 bg-[#192F01] "
              >
                {/*-- Rotating border --*/}
                <span
                  className="absolute inset-0 rounded-full
                  bg-[conic-gradient(from_0deg,#d97706_10%,#DED369_40%,transparent_60%)]
                  animate-spin
                  duration-[8s]  
                  scale-[1.05]"
                ></span>

                {/*-- Inner background --*/}
                <span className="absolute inset-0.5 rounded-full bg-white "></span>

                {/*-- Button text --*/}
                <a href="#portfolio"
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
                  className="relative z-10 transition-colors duration-300 hover:text-[#DED369]"
                >
                  View My Work
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
