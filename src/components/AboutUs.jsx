"use client"

import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Globe } from "./ui/globe";

// Data ekosistem
const ecosystemData = [
  { id: "living", icon: "smartHome" },
  { id: "transport", icon: "traffic" },
  { id: "health", icon: "hospital" },
  { id: "energy", icon: "energy" },
  { id: "building", icon: "building" },
  { id: "security", icon: "security" },
  { id: "connectivity", icon: "signal" },
  { id: "environment", icon: "eco" },
];

const SmartEcosystem = () => {
  const innerOrbitItems = ecosystemData.slice(0, 2);
  const middleOrbitItems = ecosystemData.slice(2, 5);
  const outerOrbitItems = ecosystemData.slice(5, 8);

  return (
    <section
      // PERBAIKAN: overflow-hidden dihapus dari sini agar shadow bisa "keluar" menimpa section di bawahnya
      // z-30 ditambahkan agar posisinya dipastikan berada di atas section fitur (z-20)
      className="relative flex w-full flex-col items-center justify-start pt-24 bg-[#F6FAF5] border-b border-gray-200/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] z-30"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Top Fade Transition (Menyatu dengan section atasnya) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>

      {/* 
        Wrapper khusus untuk Background Icons agar tidak keluar batas section,
        karena overflow-hidden di parent sudah kita hapus.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          {/* Icon 1: Eco Leaf */}
          <div className="absolute top-16 left-6 md:left-20 text-slate-300/40 transform -rotate-12 w-20 h-20 md:w-32 md:h-32">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 2h-4c-4.418 0-8 3.582-8 8v4l-3 3 2 2 3-3h4c4.418 0 8-3.582 8-8V2z" />
            </svg>
          </div>
          {/* Icon 2: Clean Water */}
          <div className="absolute top-64 -left-4 md:left-12 text-slate-300/40 transform rotate-12 w-16 h-16 md:w-24 md:h-24">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21a7 7 0 0 0 7-7c0-3.5-5-10-7-11-2 1-7 7.5-7 11a7 7 0 0 0 7 7z" />
            </svg>
          </div>
          {/* Icon 3: Solar Energy */}
          <div className="absolute top-20 right-4 md:right-24 text-slate-300/40 transform rotate-12 w-16 h-16 md:w-28 md:h-28">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </div>
          {/* Icon 4: Electric Energy */}
          <div className="absolute top-72 right-2 md:right-16 text-slate-300/40 transform -rotate-15 w-14 h-14 md:w-24 md:h-24">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* HEADER SECTION */}
      <div className="text-center z-20 px-6 mb-8 relative">
        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-slate-950 tracking-tight leading-tight mb-6">
          One <span className="relative inline-block">
            Intelligent
            <svg 
              className="absolute -bottom-3 md:-bottom-4 left-0 w-full h-4 md:h-5 text-slate-900" 
              viewBox="0 0 100 20" 
              preserveAspectRatio="none" 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2,12 Q45,2 98,10" strokeWidth="2.5" />
              <path d="M8,18 Q50,9 92,15" strokeWidth="1.5" />
            </svg>
          </span> <br className="hidden md:block" /> Digital Ecosystem
        </h2>
        
        <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mt-8">
          Fast, user-friendly and engaging - turn urban services into a seamless experience and streamline your daily operations with your own integrated platform.
        </p>
      </div>

      {/* MAIN VISUAL SECTION (GLOBE & ORBITS) */}
      <div className="relative flex h-[600px] md:h-[750px] w-full justify-center overflow-hidden mt-10">
        
        {/* WATERMARK BACKGROUND TEXT */}
        <div 
          className="absolute top-[10%] left-0 w-full text-center pointer-events-none select-none z-0"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)'
          }}
        >
          <h1 className="text-[18vw] font-black text-emerald-900/5 tracking-tighter leading-none m-0">
            ECOSYSTEM
          </h1>
        </div>

        {/* ANCHOR CONTAINER */}
        <div className="absolute bottom-[-750px] flex h-[1500px] w-[1500px] items-center justify-center z-10">
          
          <div className="absolute inset-0 m-auto flex h-[800px] w-[800px] items-center justify-center z-0">
            <Globe />
          </div>

          <div className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none">
            <OrbitingCircles iconSize={56} radius={450} speed={1}>
              {innerOrbitItems.map((item) => (
                <div key={item.id} className="pointer-events-auto">
                  <IconWrapper accentColor="hover:border-blue-300 shadow-blue-500/10">
                    {Icons[item.icon]({ className: "h-6 w-6 text-blue-600" })}
                  </IconWrapper>
                </div>
              ))}
            </OrbitingCircles>
          </div>

          <div className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none">
            <OrbitingCircles iconSize={56} radius={560} reverse speed={1.2}>
              {middleOrbitItems.map((item) => (
                <div key={item.id} className="pointer-events-auto">
                  <IconWrapper accentColor="hover:border-emerald-300 shadow-emerald-500/10">
                    {Icons[item.icon]({ className: "h-6 w-6 text-emerald-600" })}
                  </IconWrapper>
                </div>
              ))}
            </OrbitingCircles>
          </div>

          <div className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none">
            <OrbitingCircles iconSize={56} radius={670} speed={1.5}>
              {outerOrbitItems.map((item) => (
                <div key={item.id} className="pointer-events-auto">
                  <IconWrapper accentColor="hover:border-rose-300 shadow-rose-500/10">
                    {Icons[item.icon]({ className: "h-6 w-6 text-rose-500" })}
                  </IconWrapper>
                </div>
              ))}
            </OrbitingCircles>
          </div>

        </div>
      </div>

      {/* 
        BOTTOM FADE TRANSITION 
        Memberikan efek pudar di ujung bawah globe sebelum terkena border dan shadow 
      */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F6FAF5] to-transparent pointer-events-none z-20"></div>
      
    </section>
  );
};

// Komponen Pembungkus Ikon
const IconWrapper = ({ children, accentColor }) => (
  <div 
    className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:scale-110 cursor-pointer ${accentColor}`}
  >
    {children}
  </div>
);

// Kumpulan SVG Ikon Kustom
const Icons = {
  smartHome: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  traffic: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="7" y="2" width="10" height="20" rx="3" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="17" r="2" />
    </svg>
  ),
  hospital: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  ),
  energy: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  building: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  ),
  security: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  signal: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  ),
  eco: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
};

export default SmartEcosystem;