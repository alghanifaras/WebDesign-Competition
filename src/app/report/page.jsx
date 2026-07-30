"use client";
import React from "react";

export default function ReportPage() {
    return (
        <section className="min-h-screen bg-white font-sans text-slate-900">
            
            {/* --- BAGIAN HEADLINE (White Background) --- */}
            <div className="relative px-6 py-20 md:px-16 lg:px-32 md:pt-36 md:pb-24 max-w-[1400px] mx-auto">
                
                {/* Dekorasi Bintang / Sparkle di kanan atas */}
                <div className="absolute right-10 top-16 md:right-32 md:top-24 hidden md:block">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C12 2 13 8 18 12C13 12 12 18 12 18C12 18 11 12 6 12C11 12 12 2 12 2Z" fill="#E5E7EB"/>
                    </svg>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1]">
                        Help us improve our{" "}
                        
                        {/* Inline Badge / Mockup Gambar dalam teks */}
                        <span className="inline-flex items-center justify-center bg-[#E8E6FC] rounded-full px-2 py-2 align-middle mx-1 sm:mx-2 -mt-2">
                            <div className="flex -space-x-3">
                                {/* Lingkaran 1 */}
                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-indigo-900 rounded-full border-2 border-white flex items-center justify-center overflow-hidden z-10">
                                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-800"></div>
                                </div>
                                {/* Lingkaran 2 */}
                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center overflow-hidden z-0">
                                    <div className="w-full h-full bg-gradient-to-tr from-fuchsia-400 to-pink-300"></div>
                                </div>
                            </div>
                        </span>
                        
                        {/* Teks dengan warna abu-abu pudar */}
                        <span className="text-gray-300 ml-1">
                            city
                        </span>
                    </h1>
                </div>
            </div>

            {/* --- BAGIAN FORM (Light Gray Background, Flat) --- */}
            <div className="bg-[#F8F8F8] w-full border-t border-gray-100">
                <div className="px-6 py-16 md:px-16 lg:px-32 md:py-24 max-w-[1400px] mx-auto">
                    
                    <form className="space-y-12">
                        {/* Row 1 */}
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                            <div>
                                <label className="block text-xl md:text-2xl font-bold mb-4">
                                    Full name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-indigo-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xl md:text-2xl font-bold mb-4">
                                    Phone number*
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-indigo-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                            <div>
                                <label className="block text-xl md:text-2xl font-bold mb-4">
                                    Email address*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-indigo-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xl md:text-2xl font-bold mb-4">
                                    Home address*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your home address"
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-indigo-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Problem / Message */}
                        <div>
                            <label className="block text-xl md:text-2xl font-bold mb-4">
                                Problem*
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Write your problem here..."
                                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none resize-none focus:border-indigo-600 transition-colors placeholder:text-gray-400"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                type="submit"
                                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium px-8 py-3.5 rounded-full transition-colors text-lg"
                            >
                                Submit Report
                            </button>

                            <button
                                type="button"
                                className="w-14 h-14 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white flex items-center justify-center transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            
        </section>
    );
}