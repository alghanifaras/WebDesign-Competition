import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

// Simulasi database berita (Di dunia nyata ini pakai fetch API)
async function getBeritaBySlug(slug) {
  const beritaDatabase = [
    {
      slug: "inovasi-ai-terbaru-di-bidang-kesehatan",
      judul: "Inovasi AI Terbaru Mampu Deteksi Penyakit Lebih Dini dan Akurat",
      kategori: "Teknologi",
      tanggal: "24 Jul 2026",
      penulis: "Admin City.Boi",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1661962360667-e9a68bc051c7?q=80&w=800&auto=format&fit=crop",
      konten:
        "Pertandingan berlangsung sangat sengit sejak menit awal, namun skuad Garuda berhasil mencetak tiga gol tanpa balas di babak kedua melalui skema serangan balik cepat. Kemenangan ini membawa harapan besar bagi warga kota yang memadati alun-alun untuk nonton bareng semalam.\n\nPemerintah kota melalui layanan City.Boi juga mengapresiasi ketertiban warga selama acara nonton bareng berlangsung. Fasilitas umum tetap terjaga dan tim kebersihan kota telah memastikan area kembali bersih pada pagi harinya.",
    },
    {
      slug: "inovasi-ai-terbaru-di-bidang-kesehatan-2",
      judul: "Transformasi Digital Smart City Tingkatkan Pelayanan Publik",
      kategori: "Teknologi",
      tanggal: "24 Jul 2026",
      penulis: "Divisi IT Kesehatan",
      thumbnail:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      konten:
        "Pemerintah kota mulai menerapkan sistem terintegrasi berbasis cloud untuk mempercepat pelaporan warga dan perizinan.",
    },
    {
      slug: "pasar-saham-menguat-awal-pekan",
      judul: "Pasar Saham Global Menguat di Awal Pekan Menyusul Kebijakan Baru",
      kategori: "Ekonomi",
      tanggal: "23 Jul 2026",
      penulis: "Biro Ekonomi Kota",
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      konten:
        "Indeks saham utama ditutup hijau setelah adanya pengumuman terkait pelonggaran suku bunga yang disambut positif oleh para investor di berbagai sektor. Dampak dari penguatan ini diprediksi akan meningkatkan masuknya investasi ke sektor UMKM di kota kita.\n\nPemerintah kota menghimbau para pelaku usaha lokal untuk segera mendaftarkan bisnis mereka ke dalam direktori City.Boi guna mempermudah akses pemodalan dan ekspansi pasar di kuartal berikutnya.",
    },
    {
      slug: "pengembangan-kendaraan-listrik",
      judul:
        "Infrastruktur Kendaraan Listrik Terus Diperluas di Kawasan Perkotaan",
      kategori: "Otomotif",
      tanggal: "22 Jul 2026",
      penulis: "Biro Ekonomi Kota",
      thumbnail:
        "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      konten:
        "Puluhan titik Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) baru resmi beroperasi untuk mendukung mobilitas ramah lingkungan.",
    },
  ];

  return beritaDatabase.find((b) => b.slug === slug);
}

export default async function HalamanBacaArtikel({ params }) {
  const { slug } = await params;
  const article = await getBeritaBySlug(slug);

  // Jika URL ngawur (berita tidak ditemukan), tampilkan halaman 404
  if (!article) {
    notFound();
  }

  // Pecah paragraf berdasarkan enter (\n) untuk merender HTML
  const paragraphs = article.konten.split("\n").filter((p) => p.trim() !== "");

  return (
    <div
      className="flex flex-col min-h-screen text-[#121A22] selection:bg-[#2A4D3B] selection:text-white relative overflow-hidden font-sans"
      style={{
        // 1. Warna gradien dasar
        background:
          "linear-gradient(180deg, #E8F4ED 0%, #DCE5E0 50%, #CBDCD2 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* 2. Efek Kabut Gelap (Vignette & Haze) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* LAYER 0: Sky Background Base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #E8F4ED 0%, #F6FAF5 50%, #F0F8F3 100%)",
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
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
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
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 10%, black 40%, black 90%, transparent 100%)",
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
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 40%, black 75%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        

        <main className="flex-1 w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Tombol Kembali bergaya Glassmorphism */}
          <Link
            href="/berita"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/40 backdrop-blur-md text-slate-700 font-medium rounded-full border border-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-slate-500 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali
          </Link>

          {/* Kotak Utama Artikel (Premium Glass Container) */}
          <article className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 md:p-12 mb-16">
            {/* Subtle Glass Reflection Atas */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            {/* Badge Kategori */}
            <span
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="inline-block mb-6 px-5 py-2 bg-white/60 backdrop-blur-md text-slate-700 rounded-full text-sm font-semibold tracking-wide border border-white/50 shadow-sm"
            >
              {article.kategori}
            </span>

            {/* Judul Artikel */}
            <h1
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight"
            >
              {article.judul}
            </h1>

            {/* Meta Info (Penulis & Tanggal) */}
            <div className="flex flex-wrap items-center gap-4 text-slate-500 font-medium text-sm mb-8 pb-8 border-b border-white/50">
              <div className="flex items-center gap-2 bg-white/30 px-3 py-1.5 rounded-full border border-white/40">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-teal-200 to-blue-200 flex items-center justify-center text-xs shadow-sm">
                  👤
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {article.penulis}
                </span>
              </div>
              <span className="hidden md:inline-block text-slate-300">•</span>
              <div
                className="flex items-center gap-2 bg-white/30 px-4 py-1.5 rounded-full border border-white/40"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                📅 <time>{article.tanggal}</time>
              </div>
            </div>

            {/* Gambar Thumbnail dengan Efek Kaca */}
            <div className="w-full h-64 md:h-[450px] mb-12 rounded-2xl overflow-hidden border border-white/60 shadow-[0_8px_20px_rgba(0,0,0,0.1)] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
              <img
                src={article.thumbnail}
                alt={article.judul}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Konten Teks */}
            <div className="prose prose-lg max-w-none text-slate-700 font-normal leading-relaxed">
              {paragraphs.map((p, index) => (
                <p key={index} className="mb-6 text-2xl">
                  {p}
                </p>
              ))}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
