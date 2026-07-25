"use client";

import Masonry from "@/components/Masonry";
import dynamic from "next/dynamic";

const items = [
    // --- LANSKAP & PANORAMA ---
    {
        id: "1",
        img: "/gallery/Lembah_hijau_1.jpg",
        name: "Lembah Hijau",
        url: "#",
        width: 800,
        height: 400, // Panorama (2:1) - Lebar dan dramatis
    },
    {
        id: "2",
        img: "/gallery/Lembah_hijau_2.jpg",
        name: "Lembah Hijau",
        url: "#",
        width: 600,
        height: 450, // Landscape standar (4:3)
    },
    {
        id: "3",
        img: "/gallery/Lengkung_langit_1.jpg",
        name: "Lengkung Langit",
        url: "#",
        width: 360,
        height: 640, // Portrait tinggi (9:16) - Cocok untuk memecah pola
    },
    {
        id: "4",
        img: "/gallery/Lengkung_Langit_2.jpg",
        name: "Lengkung Langit",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
    {
        id: "5",
        img: "/gallery/Museum_lampung_1.jpg",
        name: "Museum Lampung",
        url: "#",
        width: 800,
        height: 400, // Panorama (2:1)
    },
    {
        id: "6",
        img: "/gallery/Museum_lampung_2.jpg",
        name: "Museum Lampung",
        url: "#",
        width: 450,
        height: 600, // Portrait standar (3:4)
    },
    {
        id: "7",
        img: "/gallery/Pantai_mutun_1.jpg",
        name: "Pantai Mutun",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
    {
        id: "8",
        img: "/gallery/Pantai_mutun_2.jpg",
        name: "Pantai Mutun",
        url: "#",
        width: 600,
        height: 450, // Landscape standar (4:3)
    },
    {
        id: "9",
        img: "/gallery/Puncak_mas_1.jpg",
        name: "Puncak Mas",
        url: "#",
        width: 600,
        height: 400, // Landscape klasik (3:2)
    },
    {
        id: "10",
        img: "/gallery/Puncak_mas_2.jpg",
        name: "Puncak Mas",
        url: "#",
        width: 600,
        height: 450, // Landscape standar (4:3)
    },
    
    // --- 10 GAMBAR TERBARU ---
    {
        id: "11",
        img: "/gallery/Sari_Ringgung_1.jpg",
        name: "Sari Ringgung",
        url: "#",
        width: 600,
        height: 400, // Landscape klasik (3:2)
    },
    {
        id: "12",
        img: "/gallery/Sari_Ringgung_2.jpg",
        name: "Sari Ringgung",
        url: "#",
        width: 600,
        height: 400, // Landscape klasik (3:2)
    },
    {
        id: "13",
        img: "/gallery/Taman_kupu-kupu_1.jpg",
        name: "Taman Kupu-kupu",
        url: "#",
        width: 600,
        height: 400, // Landscape klasik (3:2)
    },
    {
        id: "14",
        img: "/gallery/Taman_kupu-kupu_2.jpg",
        name: "Taman Kupu-kupu",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
    {
        id: "15",
        img: "/gallery/Tegal_mas_island_1.jpg",
        name: "Tegal Mas Island",
        url: "#",
        width: 800,
        height: 400, // Panorama (2:1)
    },
    {
        id: "16",
        img: "/gallery/Tegal_mas_island_2.jpg",
        name: "Tegal Mas Island",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
    {
        id: "17",
        img: "/gallery/Teropong_kota_1.jpg",
        name: "Teropong Kota",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
    {
        id: "18",
        img: "/gallery/Teropong_kota_2.jpg",
        name: "Teropong Kota",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
    {
        id: "19",
        img: "/gallery/Wira_garden_1.jpg",
        name: "Wira Garden",
        url: "#",
        width: 360,
        height: 640, // Portrait tinggi (9:16) - Sebagai penyeimbang visual
    },
    {
        id: "20",
        img: "/gallery/Wira_garden_2.jpg",
        name: "Wira Garden",
        url: "#",
        width: 640,
        height: 360, // Landscape sinematik (16:9)
    },
];

// Must use ssr: false so MapLibre only runs on the client-side
const MapView = dynamic(() => import("@/components/ui/map-view"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] rounded-xl bg-zinc-100 animate-pulse flex items-center justify-center text-zinc-400 font-medium border border-zinc-200">
            Preparing Map...
        </div>
    ),
});

export default function DestinationPage() {
    return (
        <main className="p-6 mt-20 md:p-8 w-full max-w-[1400px] mx-auto space-y-12">
            
            {/* --- DESTINATION SECTION --- */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-slate-950 tracking-tight leading-tight">
                        <span className="relative inline-block">
                            Destination
                            {/* SVG Hand-drawn Underline Effect */}
                            <svg
                                className="absolute -bottom-3 md:-bottom-4 left-0 w-full h-4 md:h-5 text-slate-900"
                                viewBox="0 0 100 20"
                                preserveAspectRatio="none"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M2,12 Q45,2 98,10" strokeWidth="2.5" />
                                <path d="M8,18 Q50,9 92,15" strokeWidth="1.5" />
                            </svg>
                        </span>
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
                        Explore our interactive map to discover exciting places and find your next dream destination.
                    </p>
                </div>

                <MapView />
            </section>

            {/* --- GALLERY SECTION --- */}
            <section className="space-y-4 pt-6">
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-slate-950 tracking-tight leading-tight">
                        <span className="relative inline-block">
                            Gallery
                        </span>
                    </h2>

                    <p className="mt-2 text-base md:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
                        A curated visual collection capturing the best moments and stunning views from around the world.
                    </p>
                </div>

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
            </section>

        </main>
    );
}