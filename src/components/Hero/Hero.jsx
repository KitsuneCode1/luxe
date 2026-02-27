import React from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="mx-[1rem] sm:mx-[6.1rem] mt-10 border border-primary/15 rounded-2xl shadow-sm opacity-100 transform-none
  shadow-[0_16px_40px_rgba(0,0,0,0.06)]
  [background:radial-gradient(800px_400px_at_20%_0%,rgba(162,120,58,0.1)_0%,transparent_60%),radial-gradient(800px_400px_at_80%_20%,rgba(162,120,58,0.06)_0%,transparent_60%),linear-gradient(rgba(162,120,58,0.04),rgba(255,255,255,0))] overflow-hidden"
      >
        <div className="p-8 md:p-10 w-full">
          <div className="border border-primary/50 rounded-full py-3 px-4 flex gap-3 w-full md:w-fit">
            <Sparkles size={20} className="text-primary" strokeWidth={1.5} />
            <span className="text-sm text-gray-800">Built for scale</span>
            <span className="text-sm text-gray-800 text-uppercase font-bold text-primary">
              AURA
            </span>
            <span className="text-sm text-gray-800">Intelligence Suite</span>
            <span className="hidden md:block text-sm text-gray-800">
              Luxury + Innovation
            </span>
          </div>

          <h1 className="text-[clamp(28px,4.2vw,52px)] leading-[1.05] mt-4 mb-3 font-bold text-foreground">
            Luxury events, engineered like a corporation.
          </h1>
          <p className="text-muted-foreground text-gray-500 leading-relaxed max-w-[80ch]">
            Luxe Event Designs by Sarah is evolving beyond traditional event
            planning into a scalable experience company. We combine premium
            design with a modern operating system for vendor execution, budgets,
            timelines, and guest experience — built to be measurable,
            repeatable, and investor-worthy.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8">
            <a
              href="#enterprise"
              className="px-4 py-2 flex items-center bg-primary/95
                    hover:bg-primary/100 rounded-md tracking-wide border border-gray-700 text-neutral-50 font-semibold"
            >
              Request an Enterprise Proposal
              <FaAngleRight className="ml-2 text-sm" />
            </a>

            <div className="flex items-center gap-4">
              <a
                href="#packages"
                className="px-4 py-2 flex items-center bg-secondary/70 hover:bg-secondary/100 border border-secondaryBorder rounded-md tracking-wide text-gray-900 font-semibold transition-all text-sm md:text-base"
              >
                View Packages
              </a>

              <a
                href="#contact"
                className="px-4 py-2 flex items-center bg-secondary/70 hover:bg-secondary/100 border border-secondaryBorder rounded-md tracking-wide text-gray-900 font-semibold transition-all text-sm md:text-base"
              >
                Talk to a Producer
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full">
            <div className="w-full md:w-[(100/3)%] p-5 border border-primary/15 bg-primary/[0.03] rounded-xl">
              <h4 className="text-2xl font-bold">72</h4>
              <p className="text-gray-800 mt-2 text-sm">
                Hours saved per large event (target)
              </p>
            </div>

            <div className="w-full md:w-[(100/3)%] p-5 border border-primary/15 bg-primary/[0.03] rounded-xl">
              <h4 className="text-2xl font-bold">28%</h4>
              <p className="text-gray-800 mt-2 text-sm">
                % cost leakage reduced (target)
              </p>
            </div>

            <div className="w-full md:w-[(100/3)%] p-5 border border-primary/15 bg-primary/[0.03] rounded-xl">
              <h4 className="text-2xl font-bold ">9</h4>
              <p className="text-gray-800 mt-2 text-sm">
                Countries supported for destination ops
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
