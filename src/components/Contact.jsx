"use client"

import React from "react"

export function ContactSection() {
    return (
        <section
            className="relative w-full min-h-screen pt-24 pb-32 px-4 md:px-8 flex flex-col items-center bg-gradient-to-b from-[#F8FAF8] to-[#FFFFFF] overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* HEADER TEXT - Mengikuti referensi persis di tengah atas */}
            <div className="relative z-20 text-center max-w-2xl mx-auto mb-10 md:mb-14 pt-10">
                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                    Support & Inquiries
                </h3>
                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Get in <span className="font-serif italic font-normal text-emerald-500">touch</span> with us
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal max-w-xl mx-auto">
                    We're here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you.
                </p>
            </div>

            {/* BATU KIRI - Di-pin ke kiri bawah agar tidak melayang */}
            <div className="absolute bottom-[-100px] -translate-x-[35vw] left-0 md:-left-10 lg:-left-20 w-[45%] md:w-[40%] lg:w-[35%] xl:w-[72%] z-10 pointer-events-none flex items-end justify-start drop-shadow-2xl">
                <img
                    src="/assets/rock2.png"
                    alt="Rock Decoration Left"
                    className="w-full h-auto object-contain object-bottom mix-blend-multiply opacity-100 translate-y-20  translate-x-20"
                />
            </div>

            {/* BATU KANAN - Di-pin ke kanan bawah agar tidak melayang */}
            <div className="absolute bottom-[-100px] -translate-x-[-27vw] right-[-200px] md:-right-10 lg:-right-20 w-[45%] md:w-[40%] lg:w-[75%] xl:w-[70%] z-30 pointer-events-none flex items-end justify-end drop-shadow-2xl">
                <img
                    src="/assets/rock.png"
                    alt="Rock Decoration Right"
                    className="w-full h-auto object-contain object-bottom mix-blend-multiply opacity-100 transform scale-x-[-1] translate-y-8"
                />
            </div>

            {/* CONTAINER UTAMA (FORM & BATU) */}
            <div className="relative w-full max-w-[1400px] flex justify-center items-center flex-grow z-20 mb-20">

                {/* CARD FORM - Glassmorphism persis seperti referensi */}
                <div className="relative z-20 w-full max-w-[800px] bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 md:p-12 lg:p-14 mx-4 md:mx-auto">

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2.5">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full bg-[#f9fbf9]/80 border border-gray-100/50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2.5">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full bg-[#f9fbf9]/80 border border-gray-100/50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2.5">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-[#f9fbf9]/80 border border-gray-100/50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2.5">How can we help you?</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your inquiry..."
                                className="w-full bg-[#f9fbf9]/80 border border-gray-100/50 rounded-2xl px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none shadow-sm"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="bg-[#1a1c1a] text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 hover:bg-emerald-600 hover:shadow-emerald-600/25 hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            {/* SCROLL TO EXPLORE & BOTTOM FADE */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-widest uppercase">You're finished</span>
                <div className="w-px h-8 md:h-12 bg-slate-300"></div>
            </div>

            {/* White gradient fade di bawah agar menyatu mulus */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-30 pointer-events-none" />

        </section>
    )
}

export default ContactSection