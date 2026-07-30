"use client";

import React, { useEffect, useRef } from "react";

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

const ToneCardPopup = ({ ecosystem, onClose = () => { } }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ecosystem) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    setTimeout(() => ref.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [ecosystem, onClose]);

  if (!ecosystem) return null;

  const theme = ecosystem.theme || {};
  const Icon = Icons[ecosystem.icon] || (() => null);

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`${ecosystem.title} details`}
        tabIndex={-1}
        className="relative w-full max-w-md pointer-events-auto transform transition-all duration-300 ease-out outline-none translate-y-0 animate-in fade-in zoom-in-95"
      >
        <div className={`hidden md:block absolute -inset-x-2 -bottom-6 h-24 rounded-[40px] ${theme.blob2 ? theme.blob2.replace(/^text-/, "bg-") : "bg-emerald-200"} opacity-30 filter blur-3xl`} aria-hidden="true" />

        <div className={`relative ${theme.bg || "bg-emerald-50"} rounded-t-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60`} style={{ minWidth: 320 }}>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 pr-6 pl-6">{ecosystem.title}</h3>

          {/* Blob Stack Illustration */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-6 flex items-center justify-center">
            <svg className={`absolute inset-0 w-full h-full ${theme.blob1 || "text-emerald-200"} opacity-60 transform rotate-12`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" transform="translate(100 100) scale(1.15)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.8C86.9,14.6,81.1,29.3,71.7,40.9C62.3,52.5,49.2,61,35,68.5C20.8,76,5.4,82.5,-9.3,81.9C-24,81.3,-38,73.6,-50.2,63.7C-62.4,53.8,-72.8,41.7,-79.3,27.3C-85.8,12.9,-88.4,-3.8,-84.3,-18.9C-80.2,-34,-69.4,-47.5,-56.3,-56C-43.2,-64.5,-27.7,-68,-12.8,-70.6C2.1,-73.2,16.9,-74.9,30.5,-75.4C44.1,-75.9,56.6,-75.1,44.7,-76.4Z" />
            </svg>
            <svg className={`absolute inset-0 w-full h-full ${theme.blob2 || "text-emerald-300"} opacity-70 transform -rotate-[35deg]`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" transform="translate(100 100) scale(0.95)" d="M51.9,-70.5C65.5,-61.7,73.7,-45.2,78.5,-28.4C83.3,-11.6,84.7,5.5,79.2,20.4C73.7,35.3,61.3,47.9,47.6,57.1C33.9,66.3,18.9,72.1,3.2,67.8C-12.5,63.5,-27.4,49.1,-41.8,38.2C-56.2,27.3,-70.1,19.9,-75.4,8.1C-80.7,-3.7,-77.4,-19.9,-69.2,-33.4C-61,-46.9,-47.9,-57.7,-34.2,-66.2C-20.5,-74.7,-6.2,-80.9,9.4,-82.9C25,-84.9,40.6,-82.7,51.9,-70.5Z" />
            </svg>
            <svg className={`absolute inset-0 w-full h-full ${theme.blob3 || "text-emerald-400"} opacity-85 transform rotate-[75deg]`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" transform="translate(100 100) scale(0.75)" d="M39.6,-66C52.1,-58.5,63.7,-49.5,72.3,-37.7C80.9,-25.9,86.5,-11.3,86.1,3.1C85.7,17.5,79.3,31.7,70.2,43.4C61.1,55.1,49.3,64.3,36,70.3C22.7,76.3,7.9,79.1,-6.6,80.1C-21.1,81.1,-35.2,80.2,-47.4,73.3C-59.6,66.4,-69.9,53.5,-75.6,39.2C-81.3,24.9,-82.4,9.2,-78.9,-5.1C-75.4,-19.4,-67.3,-32.3,-56.9,-43.1C-46.5,-53.9,-33.8,-62.6,-20.5,-68C-7.2,-73.4,6.7,-75.5,20.4,-74.4C34.1,-73.3,47.6,-69,39.6,-66Z" />
            </svg>

            <div className={`absolute inset-0 m-auto z-10 ${theme.icon || "text-emerald-700"} w-12 h-12 flex items-center justify-center`}>
              <Icon className="w-8 h-8 stroke-[1.5px]" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-600 max-w-[320px] mx-auto leading-relaxed mb-8">{ecosystem.desc}</p>

          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="w-full sm:w-auto min-w-[140px] text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 px-6 py-3 rounded-full transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              Got it
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ToneCardPopup;