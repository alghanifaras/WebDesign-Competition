"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";

export default function SmartCityHome() {
  const [searchQuery, setSearchQuery] = useState("");

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
      item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kategori.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins overflow-hidden">
      {/* Ambient Background Orbs untuk menonjolkan efek Glass */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]"></div>
        
      </div>

      <div className="relative z-10 flex flex-col min-h-screen ">
        <Navbar />

        <main className="flex-1 w-full pt-32 pb-10">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Glassmorphism Container */}
            
              {/* Efek kilauan halus di ujung kiri atas container */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/80 to-white/0 "></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  {/* Judul Section */}
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3">
                    <span className="w-2 h-8 bg-black to-purple-500 rounded-full inline-block"></span>
                    Kabar Kota Terbaru
                  </h2>

                  {/* Glassmorphism Search Bar */}
                  <div className="flex items-center w-full md:w-80">
                    <div className="relative w-full group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                        <svg
                          className="w-5 h-5 text-slate-400 group-focus-within:text-gray-500 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Cari berita atau kategori..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-white/80 bg-white/90 backdrop-blur-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-50/50 shadow-[0_0_20px_rgba(0,0,0,0.1)] focus:shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid Berita */}
                {filteredBerita.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBerita.map((item) => (
                      <NewsCard key={item.id} article={item} />
                    ))}
                  </div>
                ) : (
                  /* Glassmorphism Empty State */
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/50 mb-4">
                      <svg
                        className="w-8 h-8 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-slate-500 font-medium text-lg">
                      Berita yang kamu cari tidak ditemukan.
                    </p>
                  </div>
                )}
              </div>
            
          </section>
        </main>
      </div>
    </div>
  );
}
