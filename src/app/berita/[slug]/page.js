// app/berita/[slug]/page.jsx
import Link from "next/link";

import ArticleContent from "@/components/ArticleContent"; // Sesuaikan path import Anda
import RecommendedNews from "@/components/RecommendedNews"; // Sesuaikan path import Anda

// Simulasi database berita
const beritaDatabase = [
  // ... (isi data base berita seperti di kode sebelumnya) ...
  {
    slug: "inovasi-ai-terbaru-di-bidang-kesehatan",
    judul: "Inovasi AI Terbaru Mampu Deteksi Penyakit Lebih Dini dan Akurat",
    kategori: "Teknologi",
    tanggal: "24 Jul 2026",
    penulis: "Admin City.Boi",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    konten: "Pertandingan berlangsung sangat sengit sejak menit awal...\n\nPemerintah kota melalui layanan City.Boi juga...",
  },
  {
    slug: "inovasi-ai-terbaru-di-bidang-kesehatan-2",
    judul: "Transformasi Digital Smart City Tingkatkan Pelayanan Publik",
    kategori: "Teknologi",
    tanggal: "24 Jul 2026",
    penulis: "Admin City.Boi",
    thumbnail: "https://plus.unsplash.com/premium_photo-1661962360667-e9a68bc051c7?q=80&w=800&auto=format&fit=crop",
    konten: "Pertandingan berlangsung sangat sengit sejak menit awal...\n\nPemerintah kota melalui layanan City.Boi juga...",
  },
  // ... tambahkan data lainnya ...
];

async function getBeritaBySlug(slug) {
  return beritaDatabase.find((b) => b.slug === slug);
}

async function getRekomendasiBerita(currentSlug) {
  return beritaDatabase
    .filter((b) => b.slug !== currentSlug)
    .slice(0, 3);
}

export default async function HalamanBacaArtikel({ params }) {
  const { slug } = await params;
  const article = await getBeritaBySlug(slug);

  if (!article) {
    notFound();
  }

  const rekomendasi = await getRekomendasiBerita(slug);

  return (
    <div
      className="flex flex-col min-h-screen text-[#121A22] selection:bg-[#2A4D3B] selection:text-white relative overflow-hidden font-sans"
      style={{
        background: "linear-gradient(180deg, #E8F4ED 0%, #DCE5E0 50%, #CBDCD2 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Efek Kabut Gelap (Vignette & Haze) */}
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
            
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            opacity: 0.95,
            WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
            maskImage: "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          
          {/* Tombol Kembali */}
          <Link
            href="/berita"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/40 backdrop-blur-md text-slate-700 font-medium rounded-full border border-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-slate-500 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali
          </Link>

          {/* =========================================
              MANGGIL KOMPONEN KONTEN ARTIKEL 
              ========================================= */}
          <ArticleContent article={article} />

          {/* =========================================
              MANGGIL KOMPONEN REKOMENDASI BERITA 
              ========================================= */}
          <RecommendedNews rekomendasi={rekomendasi} />

        </main>
      </div>
    </div>
  );
}