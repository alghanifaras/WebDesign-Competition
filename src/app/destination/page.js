"use client";

import Masonry from "@/components/Masonry";
import dynamic from "next/dynamic";
import React from "react";
import DestinationCards from "@/components/ui/DestinationCards";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const items = [
    // --- LANSKAP & PANORAMA ---
    { id: "1", img: "/gallery/Lembah_hijau_1.jpg", name: "Lembah Hijau", width: 800, height: 400 },
    { id: "2", img: "/gallery/Lembah_hijau_2.jpg", name: "Lembah Hijau", width: 600, height: 450 },
    { id: "3", img: "/gallery/Lengkung_langit_1.jpg", name: "Lengkung Langit", width: 360, height: 640 },
    { id: "4", img: "/gallery/Lengkung_Langit_2.jpg", name: "Lengkung Langit", width: 640, height: 360 },
    { id: "5", img: "/gallery/Museum_lampung_1.jpg", name: "Museum Lampung", width: 800, height: 400 },
    { id: "6", img: "/gallery/Museum_lampung_2.jpg", name: "Museum Lampung", width: 450, height: 600 },
    { id: "7", img: "/gallery/Pantai_mutun_1.jpg", name: "Pantai Mutun", width: 640, height: 360 },
    { id: "8", img: "/gallery/Pantai_mutun_2.jpg", name: "Pantai Mutun", width: 600, height: 450 },
    { id: "9", img: "/gallery/Puncak_mas_1.jpg", name: "Puncak Mas", width: 600, height: 400 },
    { id: "10", img: "/gallery/Puncak_mas_2.jpg", name: "Puncak Mas", width: 600, height: 450 },

    // --- 10 GAMBAR TERBARU ---
    { id: "11", img: "/gallery/Sari_Ringgung_1.jpg", name: "Sari Ringgung", width: 600, height: 400 },
    { id: "12", img: "/gallery/Sari_Ringgung_2.jpg", name: "Sari Ringgung", width: 600, height: 400 },
    { id: "13", img: "/gallery/Taman_kupu-kupu_1.jpg", name: "Taman Kupu-kupu", width: 600, height: 400 },
    { id: "14", img: "/gallery/Taman_kupu-kupu_2.jpg", name: "Taman Kupu-kupu", width: 640, height: 360 },
    { id: "15", img: "/gallery/Tegal_mas_island_1.jpg", name: "Tegal Mas Island", width: 800, height: 400 },
    { id: "16", img: "/gallery/Tegal_mas_island_2.jpg", name: "Tegal Mas Island", width: 640, height: 360 },
    { id: "17", img: "/gallery/Teropong_kota_1.jpg", name: "Teropong Kota", width: 640, height: 360 },
    { id: "18", img: "/gallery/Teropong_kota_2.jpg", name: "Teropong Kota", width: 640, height: 360 },
    { id: "19", img: "/gallery/Wira_garden_1.jpg", name: "Wira Garden", width: 360, height: 640 },
    { id: "20", img: "/gallery/Wira_garden_2.jpg", name: "Wira Garden", width: 640, height: 360 },
];

// Must use ssr: false so MapLibre only runs on the client-side
const MapView = dynamic(() => import("@/components/ui/map-view"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] rounded-[18px] bg-[#F6FAF5] animate-pulse flex items-center justify-center text-emerald-600/50 font-medium border border-gray-100">
            Preparing Map...
        </div>
    ),
});

export default function DestinationPage() {
    return (
        <main
            className="flex-1 w-full bg-[#FAFAFA] relative overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >

            {/* Efek FlickeringGrid diletakkan secara absolut di background header */}
            <div className="absolute top-0 left-0 z-0 w-full h-[400px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)] pointer-events-none opacity-50">
                <FlickeringGrid
                    className="absolute top-0 left-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.15}
                    flickerChance={0.05}
                />
            </div>

            {/* --- HERO SECTION (Headline + Map digabung agar spasi natural) --- */}
            <section className="relative w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto z-10 flex flex-col">

                {/* Headline Text */}
                <div className="flex flex-col items-start text-left w-full mb-10">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-slate-900 leading-[1.1]">
                        Discover our Destinations
                    </h1>
                    <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                        Explore our interactive map to discover exciting places and find your next dream destination seamlessly.
                    </p>
                </div>

                {/* Map Container */}
                <div className="w-full relative rounded-[24px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-2">
                    <div className="rounded-[18px] overflow-hidden">
                        <MapView />
                    </div>
                </div>
            </section>

            {/* <div className="py-8 md:py-12">
                <DestinationCards />
            </div> */}

            {/* --- GALLERY SECTION --- */}
            <section className="relative w-full pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto flex flex-col">

                {/* Header Text - Gallery (Diperbaiki spacing tipografinya) */}
                <div className="z-20 mb-12 text-left flex flex-col items-start w-full">
                    <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
                        Visual Collections
                    </h3>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-slate-900 leading-[1.1] mb-2">
                        Stunning <span className="relative inline-block font-serif italic font-normal text-emerald-600">
                            Gallery
                            <svg
                                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-emerald-600/40"
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
                    <p className="text-sm md:text-base text-slate-500 font-normal max-w-2xl leading-relaxed">
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