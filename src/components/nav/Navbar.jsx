import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaMagic } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled ? "bg-[#192F01]/95 backdrop-blur shadow-xl" : "bg-transparent"}
        `}
      >
        <nav className="mx-auto max-w-7xl h-20 px-4 sm:px-6 lg:px-10 flex justify-between items-center text-[#F8EFEA]">
          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-2">
            Amarachifolio
            
            <FaLaptopCode size={24} className="text-[#DED369]"/>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-medium">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-[#DED369] transition-colors cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-[#DED369] transition-colors cursor-pointer"
            >
              About
            </li>

            <li
              onClick={() => scrollToSection("skills")}
              className="hover:text-[#DED369] transition-colors cursor-pointer"
            >
              Skills
            </li>

            <li
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-[#DED369] transition-colors cursor-pointer"
            >
              Portfolio
            </li>

            <li
              onClick={() => scrollToSection("services")}
              className="hover:text-[#DED369] transition-colors cursor-pointer"
            >
              Services
            </li>

            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#DED369] transition-colors cursor-pointer"
            >
              Contact
            </li>

            {/* CTA */}
            <li>
              <button
                onClick={() => scrollToSection("contact")} id="ContactMe"
                className="ml-4 px-6 py-2 rounded-full bg-yellow-600 text-[#F8EFEA] text-sm font-semibold
                           hover:bg-[#DED369] hover:text-[#192F01] transition"
              >
                Get Started
              </button>
            </li>
          </ul>

          {/* Hamburger (Mobile & Tablet) */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      
      {open && (
        <div className="fixed top-20 inset-x-0 bg-[#0a0a0a] text-[#F8EFEA] lg:hidden z-40">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium">
            {[
              "Home",
              "About",
              "Skills",
              "Portfolio",
              "Services",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-[#DED369] transition"
                >
                  {item}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 px-6 py-2 rounded-full bg-yellow-600 text-[#F8EFEA]
                           hover:bg-[#DED369] hover:text-[#192F01] transition font-semibold"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
