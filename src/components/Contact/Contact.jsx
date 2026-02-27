import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="container mt-20 gap-6 flex flex-col md:flex-row w-full">
        <div className="p-6 bg-white border rounded-xl shadow-md w-full md:w-[60%]">
          <h1 className="text-2xl font-bold">Contact</h1>
          <p className="text-[1.1rem] text-gray-500 mt-1">
            For bookings, partnerships, and corporate requests, reach out and
            we'll respond with next steps.
          </p>
          <div className="border-t mt-6 pt-4 grid gap-2 text-[.85rem] md:text-base">
            <div className="flex gap-3 items-center">
              <Mail
                className="text-primary font-thin"
                strokeWidth={1}
                size={20}
              />
              <span className="font-bold">Email:</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transiton-all duration-200"
              >
                founder@luxeventsdesignbysarah.org
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <Phone
                className="text-primary font-thin"
                strokeWidth={1}
                size={20}
              />
              <span className="font-bold">Phone:</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transiton-all duration-200"
              >
                (763) 248-4760
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <MapPin
                className="text-primary font-thin"
                strokeWidth={1}
                size={20}
              />
              <span className="font-bold">Location:</span>
              <span className="text-gray-500">
                Mounds View, MN (destination available)
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="px-3.5 py-2 flex items-center bg-secondary/70 hover:bg-secondary/100 border border-secondaryBorder rounded-md tracking-wide text-gray-700 font-semibold transition-all gap-2"
            >
              <Mail strokeWidth={1} size={20} />
              Email Us
            </a>

            <a
              href="#"
              className="px-3.5 py-2 flex items-center bg-secondary/70 hover:bg-secondary/100 border border-secondaryBorder rounded-md tracking-wide text-gray-700 font-semibold transition-all gap-2"
            >
              <Phone strokeWidth={1} size={20} />
              Call Now
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 col-span-1 w-full md:w-[40%]">
          <div className="p-6 bg-white border rounded-xl shadow-md">
            <h1 className="text-xl font-bold">
              Investor-Ready Proof
            </h1>
            <p className="text-gray-500 mt-2 text-md">
              As we grow, this space will showcase real metrics: margin by package, repeat clients, vendor utilization, on-time delivery %, and NPS. This becomes the "credibility engine" for expansion and investors.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-md">
            <h1 className="text-xl font-bold">
              Next: Build a Corporate Deck
            </h1>
            <p className="text-gray-500 mt-2 text-md">
              A "Press / Media Kit" page and downloadable one-pager for partners is coming soon. Keep the brand luxe — make the business scalable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
