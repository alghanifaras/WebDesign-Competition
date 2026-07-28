"use client"

import React from "react"

const Footer = () => {
  return (
    <footer 
      className="relative w-full bg-[#F6FAF5] pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden" 
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative Background Watermark Text dengan Efek FADE */}
      <div 
        className="absolute bottom-[-5%] left-0 w-full text-center pointer-events-none select-none z-0"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}
      >
        <h1 className="text-[16vw] font-black text-gray-900/5 tracking-tighter leading-none m-0">
          SmartCity
        </h1>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1200px]">
        {/* Footer Card Container */}
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] border border-gray-100">
          
          {/* Top Section: Brand & Links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Left Column (Brand, Desc, Socials) */}
            <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-8 text-center sm:text-left items-center sm:items-start">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 mb-4 md:mb-6 text-gray-900">
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M21.93 5.73l-2.42-2.42c-.39-.39-1.02-.39-1.41 0l-5.75 5.75c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5.75-5.75c.39-.39.39-1.02 0-1.41z" />
                  <path d="M12.45 9.17L9.62 6.34c-.39-.39-1.02-.39-1.41 0L2.45 12.1c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.75-5.75c.4-.39.4-1.03.01-1.42z" />
                  <path d="M18.8 17.52l-5.75-5.75c-.39-.39-1.02-.39-1.41 0l-2.83 2.83c-.39.39-.39 1.02 0 1.41l5.75 5.75c.39.39 1.02.39 1.41 0l2.83-2.83c-.39-.39-.39-1.02 0-1.41z" />
                </svg>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">SmartCity</span>
              </a>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                Empowering communities by integrating intelligent urban services into a seamless, user-friendly ecosystem for a better tomorrow.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5 text-gray-900 justify-center sm:justify-start">
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" aria-label="X (Twitter)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Columns (Links) - Di-fix agar 1 kolom (stack) di hp kecil dan rapi grid di tablet/desktop */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100">
              
              {/* Menu Column */}
              <div className="flex flex-col">
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mb-4 sm:mb-5">Menu</h3>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Home</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Traffic Maps</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Articles</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Contact</a></li>
                </ul>
              </div>

              {/* Solutions Column */}
              <div className="flex flex-col">
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mb-4 sm:mb-5">Solutions</h3>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Smart Living</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Eco Management</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">City Security</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Energy Grid</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mb-4 sm:mb-5">Company</h3>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">About Us</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Careers</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Partners</a></li>
                  <li><a href="#" className="text-[13px] sm:text-[14px] text-gray-500 hover:text-emerald-600 hover:translate-x-1 inline-block transition-all duration-300">Support</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom Section: Copyright & Legal */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-[12px] sm:text-[13px] text-gray-500">
              © 2026 SmartCity. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[12px] sm:text-[13px] text-gray-500 hover:text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors">Privacy Policy</a>
              <a href="#" className="text-[12px] sm:text-[13px] text-gray-500 hover:text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;