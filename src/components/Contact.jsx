"use client"

import Link from "next/link"
import React from "react"

export function ContactSection() {
    return (
        <section
            className="relative w-full min-h-screen pt-24 pb-32 px-4 md:px-8 flex flex-col items-center bg-gradient-to-b from-[#F8FAF8] to-[#FFFFFF] overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            
            <div className="relative z-20 text-center max-w-3xl mx-auto mb-10 md:mb-14 pt-10">
                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                    City Public Services & Complaints
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Report a <span className="font-serif italic font-normal text-emerald-500">problem</span> in your city
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-xl mx-auto px-2">
                    Found infrastructure damage, street light failures, or sanitation issues? Submit your report and track city response tickets seamlessly.
                </p>
            </div>

            {/* BATU KIRI */}
            <div className="absolute bottom-[-100px] -left-12 sm:-left-20 md:-left-10 lg:-left-20 md:-translate-x-[35vw] w-[55%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[72%] z-10 pointer-events-none flex items-end justify-start drop-shadow-2xl">
                <img
                    src="/assets/rock2.webp"
                    alt="Rock Decoration Left"
                    className="w-full h-auto object-contain object-bottom mix-blend-multiply opacity-100 md:translate-y-20 md:translate-x-20"
                />
            </div>

            {/* BATU KANAN */}
            <div className="absolute bottom-[-150px] -right-16 sm:-right-24 md:-right-10 lg:-right-20 md:-translate-x-[-27vw] w-[55%] sm:w-[45%] md:w-[40%] lg:w-[75%] xl:w-[70%] z-30 pointer-events-none flex items-end justify-end drop-shadow-2xl">
                <img
                    src="/assets/rock.webp"
                    alt="Rock Decoration Right"
                    className="w-full h-auto object-contain object-bottom mix-blend-multiply opacity-100 transform scale-x-[-1] md:translate-y-8 md:translate-x-15"
                />
            </div>

            <div className="relative w-full max-w-[1250px] flex justify-center items-center flex-grow z-20 mb-20">

                <div className="relative z-20 w-full bg-white/60 sm:bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.05)] p-5 sm:p-8 md:p-12 lg:p-16">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <div className="lg:col-span-5 flex flex-col justify-start">
                            
                            <div className="flex items-center gap-1.5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
                                Manage city issues across the lifecycle of public service
                            </h2>

                            <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed mb-8">
                                Build rich, unified citizen profiles with report history, location preferences, support interactions, and more so you can personalize city responses at every touchpoint.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div>
                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 shadow-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Historical Data</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">See citizens report patterns across municipal cycles.</p>
                                </div>

                                <div>
                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 shadow-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Leverage Trends</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Use real time analytics to suggest and filter district workloads.</p>
                                </div>
                            </div>

                            <div>
                                <Link href="/report" className="group inline-flex items-center gap-3 bg-white border border-gray-200/80 shadow-md pl-2 pr-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg">
                                    <span className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">

                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                                        Open a Support Ticket
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 relative overflow-hidden">
                            
                            {/* Header Status Live Pelaporan dengan SVG Custom */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner flex-shrink-0">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Municipal Command Center</h4>
                                        <p className="text-[10px] sm:text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 mt-0.5">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Live Public Report Monitoring
                                        </p>
                                    </div>
                                </div>
                                <span className="self-start sm:self-auto text-xs bg-emerald-50 text-emerald-700 font-semibold px-3 py-1 rounded-full border border-emerald-100/50">
                                    Active System
                                </span>
                            </div>

                            {/* Statistik Laporan Ditinjau & Ditanggapi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-gray-100">
                                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-gray-100">
                                    <span className="block text-[10px] sm:text-[11px] text-slate-400 mb-1 font-medium uppercase tracking-wider">Reports Under Review</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-base sm:text-lg font-bold text-slate-800">342</span>
                                        <span className="text-[9px] sm:text-[10px] text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded">In Verification</span>
                                    </div>
                                </div>
                                
                                <div className="bg-emerald-50/40 p-3.5 rounded-2xl border border-emerald-100/50">
                                    <span className="block text-[10px] sm:text-[11px] text-emerald-700 mb-1 font-medium uppercase tracking-wider">Reports Handled & Fixed</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-base sm:text-lg font-bold text-emerald-800">1,288</span>
                                        <span className="text-[9px] sm:text-[10px] text-emerald-700 font-semibold bg-emerald-100/70 px-1.5 py-0.5 rounded">Resolved</span>
                                    </div>
                                </div>
                            </div>

                            <div className="py-4">
                                <span className="block text-[11px] sm:text-xs text-slate-400 mb-1">Total District Performance</span>
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    <span className="text-lg sm:text-xl font-bold text-slate-900">1,630 Reports</span>
                                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                                        ↑ 98.2% Response Rate
                                    </span>
                                </div>
                            </div>

                            {/* Grafik Tren */}
                            <div className="h-28 w-full relative my-2 flex items-end">
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                                    <defs>
                                        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 0,70 Q 50,85 100,50 T 200,60 T 300,40 T 400,20 L 400,100 L 0,100 Z" fill="url(#greenGrad)" />
                                    <path d="M 0,70 Q 50,85 100,50 T 200,60 T 300,40 T 400,20" fill="none" stroke="#10b981" strokeWidth="2.5" />
                                </svg>
                            </div>

                            <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 pt-1 pb-4 border-b border-gray-100">
                                <span>January 1, 2025</span>
                                <span>Now</span>
                            </div>

                            <div className="mt-4 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-emerald-50/50 p-3 rounded-xl text-xs border border-emerald-100/60">
                                    <div>
                                        <span className="text-slate-400">Report Ticket: </span>
                                        <span className="font-bold text-emerald-700">#45678 (Pothole Repair)</span>
                                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                                            <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-medium">In Progress</span>
                                            <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-medium">Field Team Dispatched</span>
                                        </div>
                                    </div>
                                    <button className="self-end sm:self-auto text-emerald-600 font-semibold hover:underline flex items-center gap-1 text-[11px]">
                                        <span>↗</span> View Details
                                    </button>
                                </div>

                                <div className="flex items-center justify-between p-2 text-xs opacity-60">
                                    <div>
                                        <span className="text-slate-400">Report Ticket: </span>
                                        <span className="font-bold text-slate-600 text-xs">#4456 (Street Light Fixed)</span>
                                    </div>
                                    <span className="text-[11px] text-emerald-600 font-medium">Completed</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-widest uppercase">You're finished</span>
                <div className="w-px h-8 md:h-12 bg-slate-300"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-30 pointer-events-none" />

        </section>
    )
}

export default ContactSection