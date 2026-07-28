"use client"; // Wajib untuk Next.js App Router karena kita memakai state & event

import Link from "next/link";
import { useRef, useState } from "react";

export default function NewsCard({ article }) {
  const tags = article.tags || [];

  // Referensi untuk mengukur dimensi kartu
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  // Kalkulasi arah kemiringan berdasarkan posisi kursor
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Posisi kursor di dalam kartu
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Hitung derajat rotasi (Maksimal 12 derajat).
    // Dikurangi 0.5 agar titik pusat (0,0) ada di tengah kartu.
    const rotateY = (mouseX / width - 0.5) * 12;
    const rotateX = (mouseY / height - 0.5) * -12;

    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  // Mengembalikan kartu ke posisi semula dengan transisi yang mulus
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <Link
      href={`/berita/${article.slug}`}
      className="group block h-full"
      style={{ perspective: "1000px" }}
    >
      {/* Penambahan style 'perspective' di parent sangat penting agar efek 3D terlihat nyata */}
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.active ? 1.02 : 1})`,
          // Saat kursor bergerak, transisi cepat (0.1s). Saat kursor keluar, transisi melambat (0.5s) agar mulus.
          transition: tilt.active
            ? "transform 0.1s ease-out"
            : "transform 0.5s ease-out",
        }}
        className="h-full flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl will-change-transform"
      >
        {/* Gambar */}
        <div className="relative w-full h-52 overflow-hidden bg-gray-100">
          <img
            src={article.thumbnail}
            alt={article.judul}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Konten */}
        <div className="p-5 flex flex-col grow bg-white z-10 relative">
          {/* Kategori & Tanggal */}
          <div
            className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {article.kategori && (
              <span
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="px-4 py-1.5 rounded-full border bg-gray-100 border-red/40 text-gray-500 text-xs shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] font-medium backdrop-blur-md  transition-colors"
              >
                {article.kategori}
              </span>
            )}

            {/* Tampilkan pemisah berupa titik jika kategori dan tanggal sama-sama ada */}
            {article.kategori && article.tanggal && (
              <span className="text-gray-300">&bull;</span>
            )}

            {article.tanggal && <span>{article.tanggal}</span>}
          </div>

          {/* Judul */}
          <h2
            className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 mb-3 transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {article.judul}
          </h2>

          {/* Ringkasan */}
          {article.ringkasan && (
            <p
              className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {article.ringkasan}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
