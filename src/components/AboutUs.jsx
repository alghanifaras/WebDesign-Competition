"use client"

import React, { useState } from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Globe } from "./ui/globe";
import ToneCards from "./ToneCards";

// Data ekosistem dengan Tema Warna bernuansa Smart City/Eco (Turunan Hijau, Teal, Biru, dan Netral)
const ecosystemData = [
  {
    id: "living",
    icon: "smartHome",
    title: "Smart Living",
    desc: "Sistem otomatisasi rumah tangga yang mengoptimalkan kenyamanan, efisiensi energi, dan keamanan cerdas.",
    theme: { bg: "bg-emerald-50", blob1: "text-emerald-200", blob2: "text-emerald-300", blob3: "text-emerald-400", icon: "text-emerald-700" }
  },
  {
    id: "transport",
    icon: "traffic",
    title: "Intelligent Transport",
    desc: "Manajemen lalu lintas berbasis AI dan integrasi transportasi publik tanpa hambatan.",
    theme: { bg: "bg-teal-50", blob1: "text-teal-200", blob2: "text-teal-300", blob3: "text-teal-400", icon: "text-teal-700" }
  },
  {
    id: "health",
    icon: "hospital",
    title: "Digital Healthcare",
    desc: "Layanan medis terintegrasi, telemedicine, dan respons darurat proaktif untuk kesehatan.",
    theme: { bg: "bg-cyan-50", blob1: "text-cyan-200", blob2: "text-cyan-300", blob3: "text-cyan-400", icon: "text-cyan-700" }
  },
  {
    id: "energy",
    icon: "energy",
    title: "Renewable Energy",
    desc: "Jaringan pintar (smart grid) yang menyeimbangkan distribusi tenaga surya dan sumber energi terbarukan.",
    theme: { bg: "bg-lime-50", blob1: "text-lime-200", blob2: "text-lime-300", blob3: "text-lime-400", icon: "text-lime-700" }
  },
  {
    id: "building",
    icon: "building",
    title: "Smart Buildings",
    desc: "Infrastruktur komersial dengan sensor lingkungan untuk menekan emisi karbon operasional.",
    theme: { bg: "bg-slate-50", blob1: "text-slate-200", blob2: "text-slate-300", blob3: "text-slate-400", icon: "text-slate-700" }
  },
  {
    id: "security",
    icon: "security",
    title: "Advanced Security",
    desc: "Pengawasan CCTV analitik 24/7 dan sistem pencegahan kejahatan prediktif untuk kota.",
    theme: { bg: "bg-indigo-50", blob1: "text-indigo-200", blob2: "text-indigo-300", blob3: "text-indigo-400", icon: "text-indigo-700" }
  },
  {
    id: "connectivity",
    icon: "signal",
    title: "Connectivity",
    desc: "Jaringan 5G/6G terpadu di seluruh kota yang memastikan komunikasi tanpa latensi.",
    theme: { bg: "bg-sky-50", blob1: "text-sky-200", blob2: "text-sky-300", blob3: "text-sky-400", icon: "text-sky-700" }
  },
  {
    id: "environment",
    icon: "eco",
    title: "Eco Management",
    desc: "Pemantauan kualitas udara real-time, manajemen limbah cerdas, dan ruang terbuka hijau.",
    theme: { bg: "bg-green-50", blob1: "text-green-200", blob2: "text-green-300", blob3: "text-green-400", icon: "text-green-700" }
  },
];

const SmartEcosystem = () => {
  const [activeEcosystem, setActiveEcosystem] = useState(null);

  const innerOrbitItems = ecosystemData.slice(0, 2);
  const middleOrbitItems = ecosystemData.slice(2, 5);
  const outerOrbitItems = ecosystemData.slice(5, 8);

  return (
    <>
      <section
        className="relative flex w-full flex-col items-center justify-start pt-24 bg-[#F6FAF5] border-b border-gray-200/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] z-30"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Top Fade Transition */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>

        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="relative w-full h-full max-w-[1400px] mx-auto">
            <div className="absolute top-16 left-6 md:left-20 text-slate-300/40 transform -rotate-12 w-20 h-20 md:w-32 md:h-32">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 2h-4c-4.418 0-8 3.582-8 8v4l-3 3 2 2 3-3h4c4.418 0 8-3.582 8-8V2z" />
              </svg>
            </div>
            <div className="absolute top-64 -left-4 md:left-12 text-slate-300/40 transform rotate-12 w-16 h-16 md:w-24 md:h-24">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21a7 7 0 0 0 7-7c0-3.5-5-10-7-11-2 1-7 7.5-7 11a7 7 0 0 0 7 7z" />
              </svg>
            </div>
            <div className="absolute top-20 right-4 md:right-24 text-slate-300/40 transform rotate-12 w-16 h-16 md:w-28 md:h-28">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </div>
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

          <div className="absolute bottom-[-750px] flex h-[1500px] w-[1500px] items-center justify-center z-10">

            <div className="absolute inset-0 m-auto flex h-[800px] w-[800px] items-center justify-center z-0">
              <Globe />
            </div>

            <div className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none">
              <OrbitingCircles iconSize={56} radius={450} speed={0.3}>
                {innerOrbitItems.map((item) => (
                  <div key={item.id} className="pointer-events-auto">
                    <IconWrapper
                      accentColor="hover:border-emerald-300 shadow-emerald-500/10"
                      onClick={() => setActiveEcosystem(item)}
                      isActive={activeEcosystem?.id === item.id}
                    >
                      {Icons[item.icon]({ className: "h-6 w-6 text-emerald-600" })}
                    </IconWrapper>
                  </div>
                ))}
              </OrbitingCircles>
            </div>

            <div className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none">
              <OrbitingCircles iconSize={56} radius={560} reverse speed={0.4}>
                {middleOrbitItems.map((item) => (
                  <div key={item.id} className="pointer-events-auto">
                    <IconWrapper
                      accentColor="hover:border-emerald-300 shadow-emerald-500/10"
                      onClick={() => setActiveEcosystem(item)}
                      isActive={activeEcosystem?.id === item.id}
                    >
                      {Icons[item.icon]({ className: "h-6 w-6 text-emerald-600" })}
                    </IconWrapper>
                  </div>
                ))}
              </OrbitingCircles>
            </div>

            <div className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none">
              <OrbitingCircles iconSize={56} radius={670} speed={0.5}>
                {outerOrbitItems.map((item) => (
                  <div key={item.id} className="pointer-events-auto">
                    <IconWrapper
                      accentColor="hover:border-emerald-300 shadow-emerald-500/10"
                      onClick={() => setActiveEcosystem(item)}
                      isActive={activeEcosystem?.id === item.id}
                    >
                      {Icons[item.icon]({ className: "h-6 w-6 text-emerald-600" })}
                    </IconWrapper>
                  </div>
                ))}
              </OrbitingCircles>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F6FAF5] to-transparent pointer-events-none z-20"></div>

      </section>

      {activeEcosystem && (
        <ToneCards ecosystem={activeEcosystem} onClose={() => setActiveEcosystem(null)} />
      )}
    </>
  );
};

// Komponen Pembungkus Ikon (Slight hover interaction)
const IconWrapper = ({ children, accentColor, onClick, isActive }) => (
  <div
    onClick={onClick}
    className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg border transition-all duration-300 hover:scale-110 cursor-pointer 
      ${isActive ? 'border-emerald-400 scale-110 shadow-emerald-500/20' : 'border-gray-100'} 
      ${accentColor}`}
  >
    {children}
  </div>
);

// Kumpulan SVG Ikon Kustom
const Icons = {
  smartHome: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  traffic: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="7" y="2" width="10" height="20" rx="3" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="17" r="2" />
    </svg>
  ),
  hospital: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  ),
  energy: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  building: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  ),
  security: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  signal: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  ),
  eco: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
};

export default SmartEcosystem;