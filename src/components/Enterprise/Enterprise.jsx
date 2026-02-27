import React from "react";
import { ChevronDown, Send } from "lucide-react";

const Enterprise = () => {
  return (
    <>
      <section id="packages" className="container mt-20">
        <div className="p-6 bg-white border rounded-xl shadow-md">
          <h1 className="text-2xl font-bold font-serif">Enterprise Proposal Request</h1>
          <p className="text-[1.1rem] text-gray-500 mt-1">
            For corporate events, galas, conferences, and high-volume partnerships.
          </p>
          <form className="grid gap-3 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                    <input type="text" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                    <input type="text" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Company / Organization" />
                </div>
            </div>

            <div className="space-y">
                <input type="email"className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Work email" />
            </div>

            <div className="space-y">
                <button type="button" className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                    <span>Event type</span>

                    <ChevronDown 
                        size={4}
                        opacity={50}
                    />
                </button>
            </div>

            <div className="space-y">
                <input type="email"className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Estimated budget (e.g., $25,000+" />
            </div>

            <div className="space-y-2">
                <textarea rows="5" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[110px]" placeholder="Tell us the vision, date, city, guest count, and success metrics"/>
            </div>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-9 px-4 py-2">
                <span className="flex items-center gap-2">
                    <Send />
                    Send Request
                </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Enterprise;
