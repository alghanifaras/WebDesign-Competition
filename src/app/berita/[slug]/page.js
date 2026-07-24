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
      thumbnail: "https://plus.unsplash.com/premium_photo-1661962360667-e9a68bc051c7?q=80&w=800&auto=format&fit=crop",
      konten: "Pertandingan berlangsung sangat sengit sejak menit awal, namun skuad Garuda berhasil mencetak tiga gol tanpa balas di babak kedua melalui skema serangan balik cepat. Kemenangan ini membawa harapan besar bagi warga kota yang memadati alun-alun untuk nonton bareng semalam.\n\nPemerintah kota melalui layanan City.Boi juga mengapresiasi ketertiban warga selama acara nonton bareng berlangsung. Fasilitas umum tetap terjaga dan tim kebersihan kota telah memastikan area kembali bersih pada pagi harinya."
    },
    {
      slug: "inovasi-ai-terbaru-di-bidang-kesehatan-2",
      judul: "Transformasi Digital Smart City Tingkatkan Pelayanan Publik",
      kategori: "Teknologi",
      tanggal: "24 Jul 2026",
      penulis: "Divisi IT Kesehatan",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      konten: "Pemerintah kota mulai menerapkan sistem terintegrasi berbasis cloud untuk mempercepat pelaporan warga dan perizinan."
    },
    {
      slug: "pasar-saham-menguat-awal-pekan",
      judul: "Pasar Saham Global Menguat di Awal Pekan Menyusul Kebijakan Baru",
      kategori: "Ekonomi",
      tanggal: "23 Jul 2026",
      penulis: "Biro Ekonomi Kota",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      konten: "Indeks saham utama ditutup hijau setelah adanya pengumuman terkait pelonggaran suku bunga yang disambut positif oleh para investor di berbagai sektor. Dampak dari penguatan ini diprediksi akan meningkatkan masuknya investasi ke sektor UMKM di kota kita.\n\nPemerintah kota menghimbau para pelaku usaha lokal untuk segera mendaftarkan bisnis mereka ke dalam direktori City.Boi guna mempermudah akses pemodalan dan ekspansi pasar di kuartal berikutnya."
    },
    {
      slug: "pengembangan-kendaraan-listrik",
      judul: "Infrastruktur Kendaraan Listrik Terus Diperluas di Kawasan Perkotaan",
      kategori: "Otomotif",
      tanggal: "22 Jul 2026",
      penulis: "Biro Ekonomi Kota",
      thumbnail: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      konten: "Puluhan titik Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) baru resmi beroperasi untuk mendukung mobilitas ramah lingkungan."
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
  const paragraphs = article.konten.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-poppins hover:-translate-y-1.5 hover:-translate-x-1.5 transition-all duration-300 ease-out">
      <Navbar />

      <main className="flex-1 w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Tombol Kembali bergaya Neo-Brutalism */}
        <Link 
          href="/berita" 
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white text-slate-900 font-bold rounded-lg border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali
        </Link>

        {/* Kotak Utama Artikel */}
        <article className="bg-white rounded-2xl border-2 border-slate-900 overflow-hidden shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-6 md:p-10">
          
          {/* Badge Kategori */}
          <span className="inline-block mb-6 px-4 py-1.5 bg-amber-300 text-slate-900 rounded-lg text-sm font-bold tracking-wider uppercase border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            {article.kategori}
          </span>

          {/* Judul Artikel */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {article.judul}
          </h1>
          
          {/* Meta Info (Penulis & Tanggal) */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 font-semibold text-sm mb-8 pb-8 border-b-2 border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-slate-900 flex items-center justify-center text-xl">
                👤
              </div>
              <span>{article.penulis}</span>
            </div>
            <span className="hidden md:inline-block text-slate-300">•</span>
            <div className="flex items-center gap-2">
              📅 <time>{article.tanggal}</time>
            </div>
          </div>

          {/* Gambar Thumbnail */}
          <div className="w-full h-64 md:h-[400px] mb-10 rounded-xl overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
            <img 
              src={article.thumbnail} 
              alt={article.judul}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Konten Teks */}
          <div className="prose prose-lg max-w-none text-slate-800 font-medium leading-relaxed">
            {paragraphs.map((p, index) => (
              <p key={index} className="mb-6">{p}</p>
            ))}
          </div>

        </article>

      </main>
    </div>
  );
}