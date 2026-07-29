"use client";

import Image from "next/image";
import {
    Heart,
    MapPin,
    Star,
    ArrowUpRight,
    Mountain,
    Clock3,
    Route,
} from "lucide-react";

// Data dengan tambahan rute SVG unik untuk masing-masing destinasi
const destinations = [
    {
        title: "Puncak Mas",
        image: "/gallery/Puncak_mas_1.jpg",
        location: "Bandar Lampung",
        distance: "7.2 km",
        elevation: "250 m",
        duration: "25 min",
        difficulty: 30,
        rating: "4.9",
        badge: "Popular",
        // Grafik nyata: Dari Timur (Pusat Kota) ke Barat, lalu berkelok menanjak perbukitan
        routePath: "M 90 60 L 70 60 Q 50 60, 40 40 Q 30 20, 15 20",
        startPt: { x: 90, y: 60 },
        endPt: { x: 15, y: 20 },
    },
    {
        title: "Pantai Mutun",
        image: "/gallery/Pantai_mutun_1.jpg",
        location: "Pesawaran",
        distance: "16.5 km",
        elevation: "5 m",
        duration: "45 min",
        difficulty: 20,
        rating: "4.8",
        badge: "Best View",
        // Grafik nyata: Dari Utara (Pusat Kota) ke Selatan menyusuri kelokan pesisir pantai
        routePath: "M 80 15 Q 60 20, 55 45 T 40 65 Q 30 80, 15 85",
        startPt: { x: 80, y: 15 },
        endPt: { x: 15, y: 85 },
    },
    {
        title: "Tegal Mas",
        image: "/gallery/Tegal_mas_island_1.jpg",
        location: "Pesawaran",
        distance: "23.4 km",
        elevation: "10 m",
        duration: "1h 15m",
        difficulty: 40,
        rating: "5.0",
        badge: "Trending",
        // Grafik nyata: Rute pesisir yang lebih jauh ke Selatan, diakhiri garis patah lurus (penyeberangan kapal)
        routePath: "M 90 10 Q 75 25, 70 50 T 45 75 Q 35 85, 30 80 L 10 90",
        startPt: { x: 90, y: 10 },
        endPt: { x: 10, y: 90 },
    },
];

export default function DestinationCards() {
    return (
        <section className="py-20 max-w-[1450px] mx-auto px-6">
            
            <div className="text-center mb-14">
                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-slate-400">
                    Recommended Places
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold mt-3">
                    Featured{" "}
                    <span className="italic text-emerald-600 font-serif">
                        Destinations
                    </span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10">
                {destinations.map((item) => (
                    <div
                        key={item.title}
                        className="group rounded-[34px] bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,.08)] hover:-translate-y-3 duration-500 flex flex-col"
                    >
                        {/* 1. IMAGE SECTION */}
                        <div className="relative h-[320px] rounded-[28px] overflow-hidden shrink-0">
                            <Image
                                src={item.image}
                                fill
                                alt={item.title}
                                className="object-cover group-hover:scale-110 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            
                            <div className="absolute top-4 left-4">
                                <span className="bg-white rounded-full px-4 py-2 text-xs font-semibold shadow">
                                    {item.badge}
                                </span>
                            </div>
                            
                            <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-50 transition-colors">
                                <Heart className="w-5 h-5 text-slate-700 hover:text-red-500" />
                            </button>
                            
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-3xl font-semibold">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm mt-2">
                                    <MapPin className="w-4 h-4" />
                                    {item.location}
                                </div>
                            </div>
                            
                            <button className="absolute bottom-5 right-5 bg-white text-slate-900 rounded-full px-5 py-3 flex items-center gap-2 font-medium hover:bg-emerald-600 hover:text-white duration-300">
                                Start Route
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* 2. INFO & GRAPH SECTION (Split 60% - 40%) */}
                        <div className="flex gap-4 mt-6 h-full min-h-[140px]">
                            
                            {/* BAGIAN KIRI (60%): Data Stats & Difficulty Bar */}
                            <div className="w-[60%] flex flex-col justify-between">
                                {/* Grid 2x2 untuk Data */}
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                                    <div>
                                        <Route className="w-4 h-4 text-emerald-600 mb-1" />
                                        <h4 className="text-sm font-semibold text-slate-900">{item.distance}</h4>
                                        <p className="text-[11px] text-slate-500">Distance</p>
                                    </div>
                                    <div>
                                        <Clock3 className="w-4 h-4 text-emerald-600 mb-1" />
                                        <h4 className="text-sm font-semibold text-slate-900">{item.duration}</h4>
                                        <p className="text-[11px] text-slate-500">Duration</p>
                                    </div>
                                    <div>
                                        <Mountain className="w-4 h-4 text-emerald-600 mb-1" />
                                        <h4 className="text-sm font-semibold text-slate-900">{item.elevation}</h4>
                                        <p className="text-[11px] text-slate-500">Elevation</p>
                                    </div>
                                    <div>
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mb-1" />
                                        <h4 className="text-sm font-semibold text-slate-900">{item.rating}</h4>
                                        <p className="text-[11px] text-slate-500">Rating</p>
                                    </div>
                                </div>

                                {/* Difficulty Bar di bagian paling bawah kiri */}
                                <div className="mt-4 pt-1">
                                    <div className="flex justify-between mb-1.5 text-[11px]">
                                        <span className="font-medium text-slate-600">Difficulty</span>
                                        <span className="font-semibold text-slate-900">{item.difficulty}%</span>
                                    </div>
                                    <div className="h-1.5 w-full rounded-full bg-slate-100">
                                        <div
                                            style={{ width: `${item.difficulty}%` }}
                                            className="h-1.5 rounded-full bg-emerald-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* BAGIAN KANAN (40%): Route Map Graphic */}
                            <div className="w-[40%] bg-slate-50 rounded-2xl border border-slate-100 p-3 flex flex-col relative overflow-hidden group-hover:bg-slate-100 transition-colors duration-300">
                                
                                {/* SVG Graph merespons lebar dan tinggi parent-nya */}
                                <div className="flex-1 w-full flex items-center justify-center">
                                    <svg 
                                        className="w-full h-full max-h-[80px] drop-shadow-sm" 
                                        viewBox="0 0 100 100" 
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        {/* Jalur Rute */}
                                        <path 
                                            d={item.routePath} 
                                            fill="none" 
                                            stroke="#10B981" 
                                            strokeWidth="5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            className="opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        
                                        {/* Titik Awal (Hitam) */}
                                        <circle cx={item.startPt.x} cy={item.startPt.y} r="5" fill="#0f172a" />
                                        <circle cx={item.startPt.x} cy={item.startPt.y} r="2" fill="#ffffff" />
                                        
                                        {/* Titik Akhir (Hijau) */}
                                        <circle cx={item.endPt.x} cy={item.endPt.y} r="6" fill="#10B981" />
                                        <circle cx={item.endPt.x} cy={item.endPt.y} r="2.5" fill="#ffffff" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}