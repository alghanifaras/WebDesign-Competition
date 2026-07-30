"use client"

import React, { forwardRef, useRef } from "react"
import { FileTextIcon, BellIcon, Share2Icon, BarChartIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "./ui/bento-grid"
import { AnimatedList } from "./ui/animated-list"
import { AnimatedBeam } from "./ui/animated-beam"

const GreenIcons = {
  leaf: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  waterDrop: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  solarSun: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  windTurbine: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v10M12 12l-7 4M12 12l7 4M12 12l4-7" />
    </svg>
  ),
  recycleBin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  ),
  cityCore: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01" />
    </svg>
  ),
  userHub: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  cctv: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M7 12l2-5h6l2 5M12 12v7M9 19h6" />
    </svg>
  ),
  shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  activity: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  zap: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

const trafficData = [
  { name: "Ahmad_Yani_Junction.ai", body: "Traffic density normal. Signal timing optimized automatically." },
  { name: "Central_Parking_04.json", body: "Available slots: 42. Real-time guidance active." },
  { name: "Bus_Route_09_GPS.log", body: "On-time arrival rate at 98.4% across all transit nodes." },
  { name: "EV_Charging_Hub_A.dat", body: "Grid load balanced. Solar input operating at 45 capacity." },
];

const notifications = [
  {
    name: "CCTV AI Alert",
    description: "Unusual crowd density detected at Sector 4.",
    time: "15m ago",
    icon: <GreenIcons.cctv />,
  },
  {
    name: "Disaster Warning",
    description: "Weather sensor reports safe air parameters.",
    time: "10m ago",
    icon: <GreenIcons.shield />,
  },
  {
    name: "Crime Analytics",
    description: "Automated perimeter patrol completed successfully.",
    time: "5m ago",
    icon: <GreenIcons.activity />,
  },
  {
    name: "Emergency Response",
    description: "Ambulance dispatched via optimized green-wave corridor.",
    time: "2m ago",
    icon: <GreenIcons.zap />,
  },
];

const NotificationItem = ({ name, description, icon, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-3 md:p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/85 backdrop-blur-md border border-gray-100 shadow-sm"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-9 md:size-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          {icon}
        </div>
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <div className="flex flex-row items-center justify-between gap-2 w-full">
            <span className="text-xs md:text-sm font-semibold text-slate-900 truncate">{name}</span>
            <span className="text-[10px] md:text-xs font-normal text-slate-500 shrink-0 w-[55px] text-right">{time}</span>
          </div>
          <p className="text-[11px] md:text-xs text-slate-600 font-normal leading-relaxed truncate">{description}</p>
        </div>
      </div>
    </figure>
  );
};

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 md:size-12 items-center justify-center rounded-full border-2 bg-white p-2 md:p-2.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})
Circle.displayName = "Circle"

export function EcoManagementBeam() {
  const containerRef = useRef(null)
  const div1Ref = useRef(null)
  const div2Ref = useRef(null)
  const div3Ref = useRef(null)
  const div4Ref = useRef(null)
  const div5Ref = useRef(null)
  const div6Ref = useRef(null)
  const div7Ref = useRef(null)

  return (
    <div
      className={cn(
        "absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-6 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105",
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-4 md:gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="border-emerald-500 bg-emerald-50">
            <GreenIcons.userHub />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-14 md:size-16 border-emerald-600 bg-emerald-900 text-white">
            <GreenIcons.cityCore />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-1.5 md:gap-2">
          <Circle ref={div1Ref} className="border-emerald-200">
            <GreenIcons.leaf />
          </Circle>
          <Circle ref={div2Ref} className="border-blue-200">
            <GreenIcons.waterDrop />
          </Circle>
          <Circle ref={div3Ref} className="border-amber-200">
            <GreenIcons.solarSun />
          </Circle>
          <Circle ref={div4Ref} className="border-teal-200">
            <GreenIcons.windTurbine />
          </Circle>
          <Circle ref={div5Ref} className="border-indigo-200">
            <GreenIcons.recycleBin />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} gradientStartColor="#10b981" gradientStopColor="#059669" />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} gradientStartColor="#3b82f6" gradientStopColor="#1d4ed8" />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} gradientStartColor="#f59e0b" gradientStopColor="#d97706" />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} gradientStartColor="#14b8a6" gradientStopColor="#0f766e" />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} gradientStartColor="#6366f1" gradientStopColor="#4f46e5" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} gradientStartColor="#10b981" gradientStopColor="#059669" />
    </div>
  )
}

const features = [
  {
    Icon: FileTextIcon,
    name: "Smart Mobility",
    description: "AI Traffic Control, Smart Parking, and seamless Public Transport integration.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 min-h-[340px] md:min-h-[380px]",
    background: (
      <div className="absolute top-12 w-full px-4 [mask-image:linear-gradient(to_top,transparent_15%,#000_85%)]">
        {trafficData.map((f, idx) => (
          <div
            key={idx}
            className={cn(
              "relative w-full mb-3 cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-slate-200 bg-white/90 backdrop-blur-md shadow-sm hover:bg-white",
              "transition-all duration-300 ease-out"
            )}
          >
            <span className="text-xs font-semibold text-slate-900">{f.name}</span>
            <p className="mt-1 text-[11px] text-slate-700 font-medium leading-tight">{f.body}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Public Safety",
    description: "CCTV AI surveillance, Disaster Alerts, and predictive Crime Analytics.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 min-h-[340px] md:min-h-[380px]",
    background: (
      <div className="absolute top-6 right-2 h-[300px] md:h-[340px] w-full scale-90 md:scale-95 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100">
        <AnimatedList delay={1500}>
          {notifications.map((item, idx) => (
            <NotificationItem key={idx} {...item} />
          ))}
        </AnimatedList>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Eco Management",
    description: "Real-time Air Quality tracking, Smart Waste systems, and Green Monitoring.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 min-h-[340px] md:min-h-[380px]",
    background: <EcoManagementBeam />,
  },
  {
    Icon: BarChartIcon,
    name: "Digital Governance",
    description: "Transparent E-Government services and integrated Citizen Portal.",
    className: "col-span-3 lg:col-span-1 min-h-[340px] md:min-h-[380px]",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute top-14 md:top-16 right-4 left-4 p-4 md:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <span className="text-xs font-semibold text-slate-800">Citizen Portal Activity</span>
          <span className="text-[10px] md:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+24% Today</span>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mb-1">
              <span>E-Services Request</span>
              <span className="font-semibold text-slate-900">88%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-[88%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mb-1">
              <span>Public Feedback</span>
              <span className="font-semibold text-slate-900">64%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full w-[64%]"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Feature() {
  return (
    <section 
      className="relative flex w-full flex-col items-center justify-start py-20 md:py-28 bg-[#F6FAF5] border-b border-gray-200/80  z-20 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />

      <div className="text-center z-20 px-6 mb-10 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold text-slate-950 tracking-tight leading-tight mb-4">
          Intelligent <span className="relative inline-block font-serif italic font-normal text-emerald-600">
            Infrastructure
            <svg 
              className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-emerald-600/60" 
              viewBox="0 0 100 20" 
              preserveAspectRatio="none" 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2,12 Q45,2 98,10" strokeWidth="2.5" />
            </svg>
          </span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Explore the core pillars that make our ecosystem smarter, greener, and safer for every citizen.
        </p>
      </div>

      <div className="w-full max-w-[1200px] px-4 md:px-8 z-20 mb-8">
        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#F6FAF5] via-[#F6FAF5]/80 to-transparent pointer-events-none z-30" />
    </section>
  );
}

export default Feature;