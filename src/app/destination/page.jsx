"use client";

import Masonry from "@/components/Masonry";
import dynamic from "next/dynamic";
import React from "react";

const items = [
    // --- LANSKAP & PANORAMA ---
    {
        id: "1",
        img: "/gallery/Lembah_hijau_1.jpg",
        name: "Lembah Hijau",
        url: "#",
        width: 800,
        height: 400,
    },
    {
        id: "2",
        img: "/gallery/Lembah_hijau_2.jpg",
        name: "Lembah Hijau",
        url: "#",
        width: 600,
        height: 450,
    },
    {
        id: "3",
        img: "/gallery/Lengkung_langit_1.jpg",
        name: "Lengkung Langit",
        url: "#",
        width: 360,
        height: 640,
    },
    {
        id: "4",
        img: "/gallery/Lengkung_Langit_2.jpg",
        name: "Lengkung Langit",
        url: "#",
        width: 640,
        height: 360,
    },
    {
        id: "5",
        img: "/gallery/Museum_lampung_1.jpg",
        name: "Museum Lampung",
        url: "#",
        width: 800,
        height: 400,
    },
    {
        id: "6",
        img: "/gallery/Museum_lampung_2.jpg",
        name: "Museum Lampung",
        url: "#",
        width: 450,
        height: 600,
    },
    {
        id: "7",
        img: "/gallery/Pantai_mutun_1.jpg",
        name: "Pantai Mutun",
        url: "#",
        width: 640,
        height: 360,
    },
    {
        id: "8",
        img: "/gallery/Pantai_mutun_2.jpg",
        name: "Pantai Mutun",
        url: "#",
        width: 600,
        height: 450,
    },
    {
        id: "9",
        img: "/gallery/Puncak_mas_1.jpg",
        name: "Puncak Mas",
        url: "#",
        width: 600,
        height: 400,
    },
    {
        id: "10",
        img: "/gallery/Puncak_mas_2.jpg",
        name: "Puncak Mas",
        url: "#",
        width: 600,
        height: 450,
    },

    // --- 10 GAMBAR TERBARU ---
    {
        id: "11",
        img: "/gallery/Sari_Ringgung_1.jpg",
        name: "Sari Ringgung",
        url: "#",
        width: 600,
        height: 400,
    },
    {
        id: "12",
        img: "/gallery/Sari_Ringgung_2.jpg",
        name: "Sari Ringgung",
        url: "#",
        width: 600,
        height: 400,
    },
    {
        id: "13",
        img: "/gallery/Taman_kupu-kupu_1.jpg",
        name: "Taman Kupu-kupu",
        url: "#",
        width: 600,
        height: 400,
    },
    {
        id: "14",
        img: "/gallery/Taman_kupu-kupu_2.jpg",
        name: "Taman Kupu-kupu",
        url: "#",
        width: 640,
        height: 360,
    },
    {
        id: "15",
        img: "/gallery/Tegal_mas_island_1.jpg",
        name: "Tegal Mas Island",
        url: "#",
        width: 800,
        height: 400,
    },
    {
        id: "16",
        img: "/gallery/Tegal_mas_island_2.jpg",
        name: "Tegal Mas Island",
        url: "#",
        width: 640,
        height: 360,
    },
    {
        id: "17",
        img: "/gallery/Teropong_kota_1.jpg",
        name: "Teropong Kota",
        url: "#",
        width: 640,
        height: 360,
    },
    {
        id: "18",
        img: "/gallery/Teropong_kota_2.jpg",
        name: "Teropong Kota",
        url: "#",
        width: 640,
        height: 360,
    },
    {
        id: "19",
        img: "/gallery/Wira_garden_1.jpg",
        name: "Wira Garden",
        url: "#",
        width: 360,
        height: 640,
    },
    {
        id: "20",
        img: "/gallery/Wira_garden_2.jpg",
        name: "Wira Garden",
        url: "#",
        width: 640,
        height: 360,
    },
];

// Must use ssr: false so MapLibre only runs on the client-side
const MapView = dynamic(() => import("@/components/ui/map-view"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] rounded-[24px] bg-[#F6FAF5] animate-pulse flex items-center justify-center text-emerald-600/50 font-medium border border-gray-100">
            Preparing Map...
        </div>
    ),
});

export default function DestinationPage() {
    return (
        <main 
            className="flex-1 w-full bg-[#FAFAFA] overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            
            {/* --- DESTINATION SECTION --- */}
            <section className="relative w-full pt-28 pb-20 px-6 md:px-8 max-w-[1200px] mx-auto flex flex-col items-center">
                
                {/* Header Text - Center Aligned */}
                <div className="text-center z-20 mb-12">
                    <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                        Explore Places
                    </h3>
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                        Discover our <span className="relative inline-block font-serif italic font-normal text-emerald-600">
                            Destinations
                            {/* SVG Hand-drawn Underline Effect (Warna disesuaikan) */}
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
                        Explore our interactive map to discover exciting places and find your next dream destination seamlessly.
                    </p>
                </div>

                {/* Map Container dengan UI yang lebih modern */}
                <div className="w-full relative z-20 rounded-[24px] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-2">
                    <div className="rounded-[18px] overflow-hidden">
                        <MapView />
                    </div>
                </div>
            </section>

         
            {/* --- GALLERY SECTION --- */}
            <section className="relative w-full py-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center">
                
                {/* Header Text - Center Aligned */}
                <div className="text-center z-20 mb-14">
                     <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
                        Visual Collections
                    </h3>
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                        Stunning <span className="relative inline-block font-serif italic font-normal text-emerald-600">
                            Gallery
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
                        A curated visual collection capturing the best moments and stunning views from around the world.
                    </p>
                </div>

                {/* Masonry Wrapper */}
                <div className="w-full relative z-10">
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover
                        hoverScale={0.95}
                        blurToFocus
                        colorShiftOnHover={false}
                    />
                </div>

                {/* Gradient Fade di bawah Gallery */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-20" />
            </section>

        </main>
    );
}