"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import HighlightScroll from "@/components/HighLightScroll";
import { motion, AnimatePresence } from "framer-motion";

export default function SmartCityHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Teknologi", "Ekonomi", "Otomotif", "Kesehatan"];

  const beritaTerbaru = [
    {
      id: 1,
      slug: "inovasi-ai-terbaru-di-bidang-kesehatan",
      judul: "Inovasi AI Terbaru Mampu Deteksi Penyakit Lebih Dini dan Akurat",
      ringkasan:
        "Para ilmuwan baru saja merilis model kecerdasan buatan yang diklaim mampu menganalisis rekam medis pasien dengan tingkat akurasi mencapai 98 persen.",
      kategori: "Teknologi",
      tanggal: "24 Jul 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      slug: "inovasi-ai-terbaru-di-bidang-kesehatan-2",
      judul: "Transformasi Digital Smart City Tingkatkan Pelayanan Publik",
      ringkasan:
        "Pemerintah kota mulai menerapkan sistem terintegrasi berbasis cloud untuk mempercepat pelaporan warga dan perizinan.",
      kategori: "Teknologi",
      tanggal: "24 Jul 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      slug: "pasar-saham-menguat-awal-pekan",
      judul: "Pasar Saham Global Menguat di Awal Pekan Menyusul Kebijakan Baru",
      ringkasan:
        "Indeks saham utama ditutup hijau setelah adanya pengumuman terkait pelonggaran suku bunga yang disambut positif oleh para investor di berbagai sektor.",
      kategori: "Ekonomi",
      tanggal: "23 Jul 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      slug: "pengembangan-kendaraan-listrik",
      judul:
        "Infrastruktur Kendaraan Listrik Terus Diperluas di Kawasan Perkotaan",
      ringkasan:
        "Puluhan titik Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) baru resmi beroperasi untuk mendukung mobilitas ramah lingkungan.",
      kategori: "Otomotif",
      tanggal: "22 Jul 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const filteredBerita = beritaTerbaru.filter(
    (item) =>
      (selectedCategory === "Semua" || item.kategori === selectedCategory) &&
      (item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.kategori.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const highlightedBerita = beritaTerbaru.slice(0, 3);
  
  return (
    <div 
      className="flex flex-col min-h-screen selection:bg-[#2A4D3B] selection:text-white relative"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* --- Kumpulan Layer Background (Fixed) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* LAYER 0: Sky Background Base */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #E8F4ED 0%, #F6FAF5 50%, #F0F8F3 100%)",
          }}
        />

        {/* LAYER 1 */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('/hero/hero2.png')`,
            opacity: 0.6,
            backgroundPosition: "center 85%",
            backgroundSize: "cover",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />

        {/* LAYER 2: Mist/Haze overlay */}
        <div
          aria-hidden
          className="absolute -inset-10 scale-110"
          style={{
            background:
              "radial-gradient(600px 300px at 50% 40%, rgba(255,255,255,0.4) 0%, rgba(255,240,220,0.15) 40%, transparent 70%)" +
              ",radial-gradient(700px 250px at 30% 50%, rgba(200,240,220,0.12) 0%, transparent 60%)",
            filter: "blur(32px)",
            backdropFilter: "blur(4px)",
          }}
        />

        {/* LAYER 4: Mid-ground landscape detail */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('/hero/hero2.png')`,
            opacity: 0.8,
            backgroundPosition: "center 80%",
            backgroundSize: "cover",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
          }}
        />

        {/* LAYER 5: Grass Foreground */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/hero/hero.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            opacity: 0.95,
            WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
            maskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
          }}
        />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        

        <main className="flex-1 w-full pt-32 pb-16">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* --- Premium Glassmorphism Container --- */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Background Blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl bg-[#1E573D] opacity-10 pointer-events-none" />

              <div className="relative z-10">
                <HighlightScroll articles={highlightedBerita} />
                
                {/* Header with Enhanced Design */}
                <div className="mt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full mb-10">
                    
                    {/* Category Filter (Kiri) */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex flex-wrap gap-2 w-full lg:w-auto"
                    >
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                            selectedCategory === category
                              ? "bg-white text-[#111827] border-transparent shadow-[0_4px_15px_rgba(0,0,0,0.1)] scale-105"
                              : "bg-white/30 backdrop-blur-md text-slate-700 hover:bg-white/50 border-white/40 hover:shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </motion.div>

                    {/* Search Section (Kanan) */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0"
                    >
                      <div className="relative w-full sm:w-80 group">
                        <div className="absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-slate-500 group-focus-within:text-[#111827] transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Search Articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/40 backdrop-blur-md text-[#111827] placeholder:text-slate-500 focus:outline-none transition-all duration-300 ring-1 ring-white/60 shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] focus:bg-white/70 focus:ring-white/80"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* News Grid */}
                <AnimatePresence mode="wait">
                  {filteredBerita.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
                    >
                      {filteredBerita.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <NewsCard article={item} />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-24 px-4 text-center rounded-3xl bg-white/30 backdrop-blur-md border border-white/40 shadow-sm"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full blur-2xl bg-white/30" />
                        <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/90 to-white/50 shadow-lg border border-white/60 mb-6">
                          <svg
                            className="w-12 h-12 text-slate-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#111827] mb-2">
                        Tidak Ada Hasil Ditemukan
                      </h3>
                      <p className="text-slate-600 max-w-sm">
                        Maaf, tidak ditemukan berita untuk "
                        <span className="font-medium text-[#111827]">
                          {searchQuery || selectedCategory}
                        </span>
                        "
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("Semua");
                        }}
                        className="mt-8 px-5 text-sm py-3.5 rounded-2xl bg-white/60 backdrop-blur-md text-[#111827] hover:bg-white/80 focus:outline-none transition-all duration-300 ring-1 ring-white/50 shadow-sm hover:shadow-md flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        Reset Pencarian
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}