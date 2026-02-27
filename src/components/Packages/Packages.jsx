import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Packages = () => {
  return (
    <>
      <section id="packages" className="container mt-20">
        <div className="p-8 bg-white border rounded-xl shadow-md">
          <h1 className="text-2xl font-bold">Corporate Packages</h1>
          <p className="text-[1.1rem] text-gray-500 mt-1">
            Designed to sell like a corporation: standardized deliverables,
            measurable outcomes, clear tiers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
            <div className="border border-primary/12 rounded-xl p-4 bg-primary/[0.02] w-full md:w-[(100//3)%]">
              <h4 className="text-primary font-bold tracking-wider text-sm">
                EXECUTIVE SUITE
              </h4>
              <h1 className="text-xl font-bold mt-3">
                Leadership Events
              </h1>
              <div className="grid gap-2 mt-2">
                <p className="flex items-center gap-2 text-base text-gray-500">
                  <FaAngleRight
                    className="text-primary
                  font-thin"
                  />
                  Stakeholder strategy + guest journey
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Run-of-show + production command center
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Vendor sourcing + contract workflow
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Post-event analytics summary (KPIs)
                </p>
              </div>
            </div>

            <div className="border border-primary/40 rounded-xl p-4 bg-primary/[0.02] w-full md:w-[(100//3)%]">
              <h4 className="text-primary font-bold tracking-wider text-sm">
                SIGNATURE CORPORATE
              </h4>
              <h1 className="text-xl font-bold mt-3">
                Brand Experiences
              </h1>
              <div className="grid gap-4 mt-2">
                <p className="flex items-center gap-2 text-base text-gray-500">
                  <FaAngleRight className="text-primary font-thin" />
                  Theme + design system for brand consistency
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500">
                  <FaAngleRight className="text-primary font-thin" />
                  Sponsorship/partner integration support
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500">
                  <FaAngleRight className="text-primary font-thin" />
                  Guest comms + RSVP + seating workflow
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Photo/video shot list + content capture plan
                </p>
              </div>
            </div>

            <div className="border border-primary/12 rounded-xl p-4 bg-primary/[0.02] w-full md:w-[(100//3)%]">
              <h4 className="text-primary font-bold tracking-wider text-sm">
                GLOBAL DESTINATION
              </h4>
              <h1 className="text-xl font-bold mt-4">
                Travel & VIP Ops
              </h1>
              <div className="grid gap-4 mt-2">
                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Travel-ready vendor + venue playbooks
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  VIP concierge flows + itineraries
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Multi-day timeline orchestration
                </p>

                <p className="flex items-center gap-2 text-base text-gray-500 text-[1.2rem]">
                  <FaAngleRight className="text-primary font-thin" />
                  Risk planning + contingency checklist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
