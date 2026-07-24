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
      ringkasan: "Para ilmuwan baru saja merilis model kecerdasan buatan yang diklaim mampu menganalisis rekam medis pasien dengan tingkat akurasi mencapai 98 persen.",
      kategori: "Teknologi",
      tanggal: "24 Jul 2026",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      slug: "inovasi-ai-terbaru-di-bidang-kesehatan-2",
      judul: "Transformasi Digital Smart City Tingkatkan Pelayanan Publik",
      ringkasan: "Pemerintah kota mulai menerapkan sistem terintegrasi berbasis cloud untuk mempercepat pelaporan warga dan perizinan.",
      kategori: "Pemerintahan",
      tanggal: "24 Jul 2026",
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      slug: "pasar-saham-menguat-awal-pekan",
      judul: "Pasar Saham Global Menguat di Awal Pekan Menyusul Kebijakan Baru",
      ringkasan: "Indeks saham utama ditutup hijau setelah adanya pengumuman terkait pelonggaran suku bunga yang disambut positif oleh para investor di berbagai sektor.",
      kategori: "Ekonomi",
      tanggal: "23 Jul 2026",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      slug: "pengembangan-kendaraan-listrik",
      judul: "Infrastruktur Kendaraan Listrik Terus Diperluas di Kawasan Perkotaan",
      ringkasan: "Puluhan titik Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) baru resmi beroperasi untuk mendukung mobilitas ramah lingkungan.",
      kategori: "Otomotif",
      tanggal: "22 Jul 2026",
      thumbnail: "https://images.unsplash.com/photo-1558449039-c12496732386?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const filteredBerita = beritaTerbaru.filter((item) =>
    item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-poppins dark:bg-slate-900">
      <Navbar />
      
      <main className="flex-1 w-full pt-32 pb-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 ease-out relative p-8">
            
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500 rounded-xl transform rotate-12 skew-x-6 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"></div>
              <div className="absolute top-1/2 -right-12 w-64 h-64 bg-amber-400 rounded-2xl transform -rotate-12 -skew-y-6 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-l-4 border-blue-600 pl-4">
                  Kabar Kota Terbaru
                </h2>

                <div className="flex items-center gap-2 w-full md:w-72">
                  <input
                    type="text"
                    placeholder="Cari berita atau kategori..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] transition-all"
                  />
                </div>
              </div>

              {filteredBerita.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBerita.map((item) => (
                    <NewsCard key={item.id} article={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Oops! Berita yang kamu cari tidak ditemukan.
                  </p>
                </div>
              )}
            </div>

          </div>

        </section>
      </main>
    </div>
  );
}