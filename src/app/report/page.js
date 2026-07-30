"use client";
import React, { useState } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function ReportPage() {
    const [selectedService, setSelectedService] = useState("Infrastructure");
    const services = ["Infrastructure", "Public Facility", "Waste", "Traffic"];

    return (
        <section
            className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 relative overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="absolute top-0 left-0 z-0 w-full h-[500px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)] pointer-events-none opacity-40">
                <FlickeringGrid
                    className="absolute top-0 left-0 size-full"
                    color="#2A4D3B"
                    flickerChance={0.05}
                    gridGap={6}
                    maxOpacity={0.15}
                    squareSize={4}
                />
            </div>

            {/* HERO SECTION - Perbaikan padding & lebar layout */}
            <div className="pt-24 sm:pt-28 pb-10 sm:pb-12 flex flex-col justify-center relative z-10">
                <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col gap-4 sm:gap-3 items-start max-w-3xl relative w-full">

                        <div className="absolute -right-50 -top-[-50px] text-emerald-500 animate-pulse pointer-events-none hidden sm:block">
                            <div className="hidden md:block">
                                <svg
                                    width="80"
                                    height="120"
                                    viewBox="0 0 80 120"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M40 0
                                C40 35 30 50 0 60
                                C30 70 40 85 40 120
                                C40 85 50 70 80 60
                                C50 50 40 35 40 0Z"
                                        fill="#D1D5DB"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Headline Mobile Diperbesar (dari 2rem ke 2.75rem) */}
                        <h1 className="font-bold text-[2.75rem] leading-[1.2] sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight text-slate-900 sm:leading-[1.42]">
                            Help build{" "}
                            <br className="hidden sm:block" />
                            a better{" "}

                            <span
                                className="
                                    relative inline-flex items-center justify-center align-middle mx-1 sm:mx-2
                                    w-[125px] sm:w-[170px] h-[50px] sm:h-[70px]
                                    rounded-full bg-[#D1F1E1] border border-emerald-200 shadow-sm overflow-visible
                                "
                            >
                                <div className="absolute inset-0 rounded-full bg-[#D1F1E1] border border-emerald-200 shadow-sm overflow-hidden">
                                    <img
                                        src="/assets/landmark.png"
                                        alt="Landmark"
                                        className="absolute left-1/2 bottom-[-22px] sm:bottom-[-32px] -translate-x-1/2 w-[94%] object-contain"
                                    />
                                </div>
                                <img
                                    src="/assets/landmark.png"
                                    alt="Landmark"
                                    className="absolute left-1/2 bottom-[-20px] sm:bottom-[-30px] -translate-x-1/2 w-[94%] pointer-events-none drop-shadow-md z-10"
                                    style={{ clipPath: "inset(0 0 58% 0)" }}
                                />
                            </span>

                            smart <span className="font-serif italic font-normal text-emerald-600">city</span>
                        </h1>

                        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mt-1 leading-relaxed">
                            Report issues and help us build a better infrastructure for everyone.
                        </p>

                    </div>
                </div>
            </div>

            {/* --- MAIN FORM & CONTENT AREA - Padding & Margin Disesuaikan agar tidak sempit --- */}
            <div className="bg-[#F8F8F8] w-full border-t border-gray-200/60 relative z-10 pb-16">
                <div className="px-5 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-[1100px] mx-auto">

                    <form className="space-y-10 sm:space-y-12">

                        <div className="space-y-8 sm:space-y-10 bg-transparent">

                            {/* Row 1: Full Name & Email Address */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                                <div>
                                    <label className="block text-xl md:text-2xl font-bold mb-3 text-slate-900">
                                        Full name*
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xl md:text-2xl font-bold mb-3 text-slate-900">
                                        Email address*
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Category of Issue & Upload Photo */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                                <div>
                                    <label className="block text-xl md:text-2xl font-bold mb-4 text-slate-900">
                                        Category of Issue
                                    </label>
                                    <div className="flex flex-wrap gap-2.5">
                                        {services.map((service) => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => setSelectedService(service)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedService === service
                                                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                                        : "bg-transparent text-slate-700 border-gray-300 hover:border-slate-400"
                                                    }`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xl md:text-2xl font-bold mb-3 text-slate-900">
                                        Upload Photo of Issue <span className="text-sm font-normal text-gray-400">(Optional)</span>
                                    </label>
                                    <div className="w-full bg-transparent border-b border-gray-300 py-3 text-base flex items-center justify-between text-slate-600 cursor-pointer hover:border-emerald-600 transition-colors">
                                        <span className="truncate">Choose file or drag & drop...</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 shrink-0 ml-2">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                            <polyline points="21 15 16 10 5 21"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div>
                                <label className="block text-xl md:text-2xl font-bold mb-3 text-slate-900">
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Write your message or additional notes here..."
                                    className="w-full bg-transparent border-b border-gray-300 py-3 text-lg outline-none resize-none focus:border-emerald-600 transition-colors placeholder:text-gray-400"
                                ></textarea>
                            </div>

                        </div>

                        {/* Footer Section / Submit */}
                        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/40 p-6 sm:p-8 rounded-3xl border border-gray-200/60">
                            <div>
                                <h4 className="font-bold text-slate-800 text-base">Your report will be reviewed shortly</h4>
                                <p className="text-sm text-slate-500 mt-0.5">Our team and AI system will process your report within a maximum of 3 hours.</p>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-between bg-white border border-gray-200 text-slate-900 font-bold text-lg rounded-full transition-all shadow-sm hover:shadow-md pl-7 pr-2 py-2 gap-6 group w-full sm:w-auto shrink-0"
                            >
                                <span>Submit Report</span>
                                <div className="w-12 h-12 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center transition-colors">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </section>
    );
}