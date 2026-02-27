import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <a
              className="flex gap-4 items-center justify-center cursor-pointer"
              href="#home"
            >
              <div className="w-9 h-9 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/30 to-white/5 shadow-lg shadow-black/20 "></div>
              <div className="flex flex-col items-center">
                <p className="tracking-wide font-bold text-sm mb-0">LUXE</p>
                <p className="text-gray-500 font-semibold text-xs mt-0">
                  Event Designs by Sarah
                </p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1 text-base ">
              <a
                href="#home"
                className="flex items-center font-semibold text-gray-800 px-3.5 py-2 hover:bg-primary/5 border border-transparent hover:border-gray-200 rounded-full hover:text-black transition-all ease-in-out duration-300"
              >
                Home
              </a>

              <a
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                href="#aura"
                className="flex items-center font-semibold text-gray-800 px-3.5 py-2 hover:bg-primary/5 border border-transparent hover:border-gray-200 rounded-full hover:text-black transition-all ease-in-out duration-300"
              >
                AURA
              </a>

              <a
                href="#packages"
                className="flex items-center font-semibold text-gray-800 px-3.5 py-2 hover:bg-primary/5 border border-transparent hover:border-gray-200 rounded-full hover:text-black transition-all ease-in-out duration-300"
              >
                Packages
              </a>

              <a
                href="#enterprise"
                className="flex items-center font-semibold text-gray-800 px-3.5 py-2 hover:bg-primary/5 border border-transparent hover:border-gray-200 rounded-full hover:text-black transition-all ease-in-out duration-300"
              >
                Enterprise
              </a>

              <a
                href="#contact"
                className="flex items-center font-semibold text-gray-800 px-3.5 py-2 hover:bg-primary/5 border border-transparent hover:border-gray-200 rounded-full hover:text-black transition-all ease-in-out duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
