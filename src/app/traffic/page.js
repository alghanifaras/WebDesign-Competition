"use client";

import dynamic from "next/dynamic";
import React from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ActivityLogIcon, BarChartIcon, GlobeIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

// Must use ssr: false so MapLibre only runs on the client-side
const MapView = dynamic(() => import("@/components/ui/traffic-view"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-[18px] bg-[#F6FAF5] animate-pulse flex items-center justify-center text-emerald-600/50 font-medium border border-gray-100">
      Preparing Traffic Map...
    </div>
  ),
});

// Konfigurasi fitur Bento Grid yang membungkus konten data trafik Anda secara utuh
const features = [
  {
    Icon: ActivityLogIcon,
    name: "Live Analytics",
    description: "Current city traffic conditions and bottleneck tracking.",
    href: "#",
    cta: "View details",
    className: "col-span-3 lg:col-span-1 min-h-[340px]",
    background: (
      <div className="absolute top-12 right-4 left-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">Average Speed</span>
              <span className="font-semibold text-orange-500">24 km/h</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">Congestion Level</span>
              <span className="font-semibold text-red-500">High (78%)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-3 border-t border-slate-100">
          <p className="text-[11px] text-slate-400">Main Bottleneck:</p>
          <p className="text-xs font-medium text-slate-900 mt-0.5">Jl. Sudirman (+45 min delay)</p>
        </div>
      </div>
    ),
  },
  {
    Icon: BarChartIcon,
    name: "AI Prediction",
    description: "Traffic volume estimation and peak hour forecasts for the next 6 hours.",
    href: "#",
    cta: "Explore AI",
    className: "col-span-3 lg:col-span-1 min-h-[340px]",
    background: (
      <div className="absolute top-12 right-4 left-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <div className="flex items-end justify-between h-20 gap-2 mb-2 w-full">
          {[30, 45, 85, 100, 60, 40].map((height, i) => (
            <div key={i} className="flex-1 h-full flex flex-col justify-end">
              <div
                className={`w-full rounded-t-md transition-all duration-500 ${height > 70 ? 'bg-red-400' : height > 50 ? 'bg-orange-400' : 'bg-emerald-400'}`}
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-medium text-slate-400 px-1 mb-4">
          <span>15:00</span>
          <span>17:00</span>
          <span>20:00</span>
        </div>
        <p className="text-[11px] font-medium text-red-600 bg-red-50 inline-block px-2.5 py-1 rounded-lg border border-red-100">
          Peak congestion predicted at 18:00
        </p>
      </div>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Smart Mobility",
    description: "Eco-friendly recommendations and commuter time optimization.",
    href: "#",
    cta: "Check routes",
    className: "col-span-3 lg:col-span-1 min-h-[340px]",
    background: (
      <div className="absolute top-12 right-4 left-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
        <div className="bg-emerald-50 rounded-xl p-3.5 border border-emerald-100/60 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-900">Take the MRT (North Line)</p>
              <p className="text-[10px] text-emerald-600">Save 35 minutes of travel time</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500">CO2 emissions avoided:</span>
          <span className="text-sm font-semibold text-emerald-600">2.4 kg</span>
        </div>
      </div>
    ),
  },
  {
    Icon: ChatBubbleIcon,
    name: "Citizen Reports",
    description: "Latest real-time updates from the active commuter community.",
    href: "#",
    cta: "View all",
    className: "col-span-3 min-h-[220px]",
    background: (
      <div className="absolute top-12 right-4 left-4 bottom-4 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)]">
        <div className="flex-1 w-full flex flex-col md:flex-row gap-3">
          <div className="flex-1 bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-700">Minor Accident</span>
            </div>
            <p className="text-[11px] text-slate-500">Jl. Gatot Subroto KM 4. Left lane is blocked. (2 mins ago)</p>
          </div>
          <div className="flex-1 bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold text-slate-700">Water Puddle</span>
            </div>
            <p className="text-[11px] text-slate-500">Senen Underpass flooded by 15cm due to heavy rain. (12 mins ago)</p>
          </div>
        </div>
        <button className="whitespace-nowrap px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white text-xs font-semibold rounded-full shadow-sm">
          + Report Condition
        </button>
      </div>
    ),
  },
];

export default function TrafficMapsPage() {
  return (
    <main
      className="flex-1 w-full bg-[#FAFAFA] relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="absolute top-0 left-0 z-0 w-full h-[400px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)] pointer-events-none opacity-50">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.15}
          flickerChance={0.05}
        />
      </div>

      <section className="relative w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto z-10 flex flex-col">

        <div className="flex flex-col items-start text-left w-full mb-10">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-slate-900 leading-[1.1]">
            Urban Mobility
          </h1>
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
            Monitor congestion points in real-time, discover alternative routes, and support a more efficient smart city ecosystem.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full relative rounded-[24px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-2">
          <div className="rounded-[18px] overflow-hidden">
            <MapView />
          </div>
        </div>
      </section>

      <section className="relative w-full pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto flex flex-col">

        <div className="z-20 mb-12 text-left flex flex-col items-start w-full">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
            Data Insights
          </h3>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-slate-900 leading-[1.1] mb-2">
            Urban <span className="relative inline-block font-serif italic font-normal text-emerald-600">
              Intelligence
              <svg
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-emerald-600/40"
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
          <p className="text-sm md:text-base text-slate-500 font-normal max-w-2xl leading-relaxed">
            Analyze traffic data, view AI-based congestion predictions, and discover eco-friendly mobility options for your commute.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="w-full relative z-10">
          <BentoGrid className="lg:grid-rows-2">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>

        {/* Gradient Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-0" />
      </section>

    </main>
  );
}