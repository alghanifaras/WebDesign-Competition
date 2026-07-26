"use client"

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* LAYER 0: Sky Background Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: "linear-gradient(180deg, #E8F4ED 0%, #F6FAF5 50%, #F0F8F3 100%)",
        }}
      />

      {/* LAYER 1 */}
      <div
        className="absolute inset-0 bg-cover pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `url('/hero/hero2.png')`,
          opacity: 0.6,
          backgroundPosition: "center 85%",
          backgroundSize: "cover",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />

      {/* LAYER 2: Mist/Haze overlay (Atmospheric effect) */}
      <div
        aria-hidden
        className="absolute -inset-10 pointer-events-none scale-110"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(600px 300px at 50% 40%, rgba(255,255,255,0.4) 0%, rgba(255,240,220,0.15) 40%, transparent 70%)" +
            ",radial-gradient(700px 250px at 30% 50%, rgba(200,240,220,0.12) 0%, transparent 60%)",
          filter: "blur(32px)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* LAYER 4: Mid-ground landscape detail */}
      <div
        className="absolute inset-0 bg-cover pointer-events-none"
        style={{
          zIndex: 12,
          backgroundImage: `url('/hero/hero2.png')`,
          opacity: 0.8,
          backgroundPosition: "center 80%",
          backgroundSize: "cover",
          // Feathering (penghalusan) tepi gambar
          WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
        }}
      />

      {/* LAYER 5: Grass Foreground */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 15,
          backgroundImage: `url('/hero/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.95,
          WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
          maskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
        }}
      />

      {/* Floating accent elements */}
      <div
        className="absolute bottom-32 left-10 w-32 h-32 rounded-full pointer-events-none opacity-10"
        style={{
          zIndex: 16,
          background: "radial-gradient(circle, #2F855A 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute top-1/4 right-20 w-40 h-40 rounded-full pointer-events-none opacity-5"
        style={{
          zIndex: 16,
          background: "radial-gradient(circle, #2F855A 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />

      {/* LAYER 3: Headline & Content */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 20 }}
      >
        {/* Eyebrow Text */}
        <p 
          className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-4"
          style={{ 
            color: "#1E573D",
            textShadow: "0 2px 10px rgba(255,255,255,0.8)",
            animation: "fadeInDown 0.8s ease-out" 
          }}
        >
          For the citizens who refuse to compromise.
        </p>

        {/* Headline */}
        <h1
          className="text-6xl md:text-7xl lg:text-[6.5rem] font-medium leading-[1.1] mb-6 tracking-tight max-w-5xl"
          style={{
            color: "#111827",
            textShadow: "0 0 60px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.7), 0 2px 4px rgba(0,0,0,0.1)",
            animation: "fadeInDown 0.8s ease-out",
          }}
        >
          Smarter Cities.<br />
          <span className="font-serif italic font-light tracking-normal" style={{ color: "#1F332A" }}>
            Better living.
          </span>
        </h1>

        <p
          className="text-lg md:text-xl font-medium mb-14 max-w-2xl leading-relaxed"
          style={{
            color: "#111827",
            textShadow: "0 0 30px rgba(255,255,255,1), 0 1px 2px rgba(255,255,255,0.8)",
            animation: "fadeInUp 0.8s ease-out 0.2s both",
          }}
        >
          Connect citizens, transportation, environment, and public services through one intelligent digital ecosystem.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex items-center gap-5"
          style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
        >
          <button
            className="group flex items-center justify-between gap-4 px-2 py-2 pr-6 rounded-full font-semibold text-[15px] transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{
              backgroundColor: "#ffffff",
              color: "#111827",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span>Explore Smart Ecosystem</span>
          </button>

          <button
            className="px-7 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255,255,255,0.8)",
              color: "#111827",
              textShadow: "0 1px 2px rgba(255,255,255,0.6)"
            }}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* LAYER 6: TRANSISI PEMBATAS KE SECTION BERIKUTNYA */}
      {/* Menggunakan gradient putih dari bawah ke atas agar memudar lembut menuju background section di bawahnya */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" 
        style={{ 
          zIndex: 30,
          background: "linear-gradient(to top, #ffffff 0%, transparent 100%)"
        }} 
      />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;