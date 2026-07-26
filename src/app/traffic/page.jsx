"use client";

import dynamic from "next/dynamic";
import React from "react";

// Must use ssr: false so MapLibre only runs on the client-side
const MapView = dynamic(() => import("@/components/ui/traffic-view"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] rounded-[24px] bg-[#F6FAF5] animate-pulse flex items-center justify-center text-emerald-600/50 font-medium border border-gray-100">
            Preparing Traffic Map...
        </div>
    ),
});

export default function TrafficMapsPage() {
    return (
        <main
            className="flex-1 w-full bg-[#FAFAFA] overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >

            {/* --- TRAFFIC MAP SECTION --- */}
            <section className="relative w-full pt-28 pb-10 px-6 md:px-8 max-w-[1200px] mx-auto flex flex-col items-center">

                {/* Header Text - Center Aligned */}
                <div className="text-center z-20 mb-12">
                    <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                        Live Traffic
                    </h3>
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                        Urban <span className="relative inline-block font-serif italic font-normal text-emerald-600">
                            Mobility
                            {/* SVG Hand-drawn Underline Effect */}
                            <svg
                                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-emerald-600/50"
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
                    <p className="mt-4 text-sm md:text-base text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
                        Monitor congestion points in real-time, discover alternative routes, and support a more efficient smart city ecosystem.
                    </p>
                </div>

                {/* Map Container */}
                <div className="w-full relative z-20 rounded-[24px] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-2">
                    <div className="rounded-[18px] overflow-hidden">
                        <MapView />
                    </div>
                </div>
            </section>


            {/* --- SMART CITY DASHBOARD SECTION --- */}
            <section className="relative w-full py-16 px-4 md:px-8 max-w-[1200px] mx-auto flex flex-col items-center">

                {/* Header Text */}
                <div className="text-center z-20 mb-14">
                    <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                        Data Insights
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
                        Urban <span className="relative inline-block font-serif italic font-normal text-emerald-600">
                            Intelligence
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-2 md:h-3 text-emerald-600/50"
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
                    <p className="mt-4 text-sm md:text-base text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
                        Analyze traffic data, view AI-based congestion predictions, and discover eco-friendly mobility options for your commute.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Widget 1: Live Analytics */}
                    <div className="bg-white rounded-[24px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-1">Live Analytics</h4>
                            <p className="text-xs text-slate-500 mb-6">Current city traffic conditions</p>

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
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-50">
                            <p className="text-xs text-slate-500">Main Bottleneck:</p>
                            <p className="text-sm font-medium text-slate-900 mt-1">Jl. Sudirman (+45 min delay)</p>
                        </div>
                    </div>

                    {/* Widget 2: AI Traffic Prediction */}
                    <div className="bg-white rounded-[24px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-1">AI Prediction</h4>
                            <p className="text-xs text-slate-500 mb-6">Traffic volume for the next 6 hours</p>

                            {/* Fixed CSS Bar Chart */}
                            <div className="flex items-end justify-between h-24 gap-2 mb-2 w-full">
                                {[30, 45, 85, 100, 60, 40].map((height, i) => (
                                    <div key={i} className="flex-1 h-full flex flex-col justify-end">
                                        <div
                                            className={`w-full rounded-t-md transition-all duration-500 hover:opacity-80 ${height > 70 ? 'bg-red-400' : height > 50 ? 'bg-orange-400' : 'bg-emerald-400'}`}
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-[10px] font-medium text-slate-400 px-1">
                                <span>15:00</span>
                                <span>17:00</span>
                                <span>20:00</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-50">
                            <p className="text-[11px] font-medium text-red-600 bg-red-50 inline-block px-2.5 py-1.5 rounded-lg border border-red-100">
                                Peak congestion predicted at 18:00
                            </p>
                        </div>
                    </div>

                    {/* Widget 3: Eco & Mobility */}
                    <div className="bg-white rounded-[24px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-1">Smart Mobility</h4>
                            <p className="text-xs text-slate-500 mb-6">Eco-friendly recommendations</p>

                            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-emerald-900">Take the MRT (North Line)</p>
                                        <p className="text-[10px] text-emerald-600/80">Save 35 minutes of travel time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-50">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500">CO2 emissions avoided:</span>
                                <span className="text-sm font-semibold text-emerald-600">2.4 kg</span>
                            </div>
                        </div>
                    </div>

                    {/* Widget 4: Live Citizen Reports (Spans 3 columns on large screens) */}
                    <div className="lg:col-span-3 bg-white rounded-[24px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-1">Citizen Reports</h4>
                            <p className="text-xs text-slate-500">Latest updates from the commuter community</p>
                        </div>

                        <div className="flex-1 w-full flex flex-col md:flex-row gap-4">
                            {/* Report Item 1 */}
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-xs font-semibold text-slate-700">Minor Accident</span>
                                </div>
                                <p className="text-xs text-slate-500">Jl. Gatot Subroto KM 4. Left lane is blocked. (2 mins ago)</p>
                            </div>
                            {/* Report Item 2 */}
                            <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span className="text-xs font-semibold text-slate-700">Water Puddle</span>
                                </div>
                                <p className="text-xs text-slate-500">Senen Underpass flooded by 15cm due to heavy rain. (12 mins ago)</p>
                            </div>
                        </div>

                        <button className="whitespace-nowrap px-6 py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors text-white text-xs font-semibold rounded-full">
                            + Report Condition
                        </button>
                    </div>

                </div>

                {/* Gradient Fade - Optional to keep the floating feel */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-0" />
            </section>

        </main>
    );
}