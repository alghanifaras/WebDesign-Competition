// src/components/ui/HighlightScroll.jsx
"use client";

// TAMBAHAN: Import useEffect dan useState
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HighlightScroll({ articles }) {
  const scrollContainerRef = useRef(null);

  // TAMBAHAN: State untuk mengecek apakah kursor sedang berada di atas carousel
  const [isHovered, setIsHovered] = useState(false);

  // Fungsi untuk menggeser scrollbar secara manual
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        scrollContainerRef.current.firstChild?.clientWidth || 800;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // TAMBAHAN: Fitur Auto-Scroll menggunakan useEffect
  useEffect(() => {
    // Jika kursor sedang hover di atas artikel, hentikan auto-scroll
    if (isHovered) return;

    const autoScrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        const scrollAmount =
          scrollContainerRef.current.firstChild?.clientWidth || 800;

        // Cek apakah scroll sudah mencapai ujung paling kanan
        // (-10 digunakan sebagai toleransi pembulatan piksel)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Jika sudah di ujung, kembali ke awal (kiri)
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          // Jika belum, lanjut geser ke kanan
          scrollContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3500); // 3500ms = 3.5 detik (Silakan ubah angka ini untuk mengatur kecepatan)

    // Bersihkan interval saat komponen dilepas (unmount) atau status hover berubah
    return () => clearInterval(autoScrollInterval);
  }, [isHovered]); // Efek ini bergantung pada state isHovered

  if (!articles || articles.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        

        {/* --- TOMBOL NAVIGASI KIRI & KANAN --- */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 transition-all duration-300 ring-2 ring-white shadow-[0_0_15px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] focus:outline-none focus:bg-white focus:shadow-[0_0_20px_rgba(0,0,0,0.3)] group"
            aria-label="Scroll Left"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 transition-all duration-300 ring-2 ring-white shadow-[0_0_15px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] focus:outline-none focus:bg-white focus:shadow-[0_0_20px_rgba(0,0,0,0.3)] group"
            aria-label="Scroll Right"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* --- HORIZONTAL SCROLL HIGHLIGHTS --- */}
      {/* TAMBAHAN: onMouseEnter dan onMouseLeave untuk mengontrol isHovered */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {articles.map((item) => (
            <Link
              href={`/berita/${item.slug}`}
              key={`highlight-${item.id}`}
              className="block relative min-w-[90vw] md:min-w-[75vw] lg:min-w-[850px] h-[400px] md:h-[500px] rounded-[32px] overflow-hidden flex-shrink-0 snap-center group shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.thumbnail}
                alt={item.judul}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                {/* Background Glassmorphism */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs border-t border-white/10 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white/90 mb-3 max-w-3xl leading-tight line-clamp-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.judul}
                  </h2>

                  {item.ringkasan && (
                    <p
                      className="text-sm text-white/90 line-clamp-1 mb-4 leading-relaxed "
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.ringkasan}
                    </p>
                  )}

                  {/* Meta Data & Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
                          <img
                            src="https://img.magnific.com/vektor-premium/ilustrasi-datar-vektor-dalam-skala-abu-abu-avatar-ikon-orang-profil-pengguna-gambar-profil-cocok-untuk-media-sosial-profil-ikon-screensaver-dan-sebagai-templatx9xa_719432-1256.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Author"
                          />
                        </div>
                        <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                          Admin
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {item.tanggal}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        className="px-4 py-1.5 rounded-full border border-white/40 text-white text-xs font-medium backdrop-blur-md hover:bg-white/10 transition-colors"
                      >
                        {item.kategori}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
