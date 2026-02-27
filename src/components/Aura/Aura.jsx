import React from 'react';
import { Clock, Globe, Shield, TrendingUp } from 'lucide-react';

const Aura = () => {
  return (
    <>
      <section id='aura' className='container mt-20 flex flex-col md:flex-row gap-6'>
        <div className="p-6 bg-white border rounded-xl shadow-md">
            <h1 className='text-3xl font-bold font-serif'>AURA Intelligence Suite</h1>
            <p className='text-gray-500 mt-4 font-semibold tracking-wide'>AURA is Luxe's internal planning + production intelligence layer — designed to standardize delivery, increase margin, and make outcomes measurable. This is how Luxe scales like a corporation: systems + data + repeatability.</p>
            <div className="grid gap-4 mt-5">
                <div className="flex gap-3 border border-primary/12 rounded-xl p-4 bg-primary/[0.02] transition-colors duration-200">
                    <div className="mt-0.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(162,120,58,0.12)]"></div>
                    </div>
                    <div>
                        <div className="font-semibold text-foreground text-base">Automated Run-of-Show</div>
                        <div className="text-gray-700 text-base mt-0.5">Timelines, roles, checklists, and day-of command center.</div>
                    </div>
                </div>

                <div className="flex gap-3 border border-primary/12 rounded-xl p-4 bg-primary/[0.02] transition-colors duration-200">
                    <div className="mt-0.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(162,120,58,0.12)]"></div>
                    </div>
                    <div>
                        <div className="font-semibold text-foreground text-base">Vendor & Venue Network</div>
                        <div className="text-gray-700 text-base mt-0.5">Performance scoring, availability, and contract templates.</div>
                    </div>
                </div>

                <div className="flex gap-3 border border-primary/12 rounded-xl p-4 bg-primary/[0.02] transition-colors duration-200">
                    <div className="mt-0.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(162,120,58,0.12)]"></div>
                    </div>
                    <div>
                        <div className="font-semibold text-foreground text-base">Guest Experience Tech</div>
                        <div className="text-gray-700 text-base mt-0.5">Digital invites, RSVP tracking, seating logic, VIP flows.</div>
                    </div>
                </div>

                <div className="flex gap-3 border border-primary/12 rounded-xl p-4 bg-primary/[0.02] transition-colors duration-200">
                    <div className="mt-0.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(162,120,58,0.12)]"></div>
                    </div>
                    <div>
                        <div className="font-semibold text-foreground text-base">Real-time Budget Intelligence</div>
                        <div className="text-gray-700 text-base mt-0.5">Forecast vs actual, approvals, and variance alerts.</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-6'>
            <div className="p-6 bg-white border rounded-xl shadow-md">
                <h1 className='text-xl font-bold font-serif'>Why this is "Investor-Ready"</h1>
                <p className='text-gray-500 mt-2 font-semibold'>Investors don't fund "hours." They fund scalable systems. AURA positions Luxe as a platform: standardized packages, predictable ops, measurable KPIs, and expansion into multi-market delivery.</p>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow-md">
                <h1 className='text-xl font-bold font-serif'>Scalable Revenue Paths</h1>
                <p className='text-gray-500 mt-2 font-semibold'>Corporate retainers, high-volume partnerships, destination operations, premium add-ons (content capture, brand activations, VIP concierge).</p>

                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground border border-primary/15 rounded-lg px-3 py-2 bg-primary/[0.02]">
                        <Globe className='text-primary'/>
                        Global Reach
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground border border-primary/15 rounded-lg px-3 py-2 bg-primary/[0.02]">
                        <TrendingUp className='text-primary'/>
                        Scalable Ops
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground border border-primary/15 rounded-lg px-3 py-2 bg-primary/[0.02]">
                        <Shield className='text-primary'/>
                        Risk Managed
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground border border-primary/15 rounded-lg px-3 py-2 bg-primary/[0.02]">
                        <Clock className='text-primary'/>
                        Time Optimized
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Aura
