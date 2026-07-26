// components/ArticleContent.jsx
export default function ArticleContent({ article }) {
  // Pecah paragraf berdasarkan enter (\n) untuk merender HTML
  const paragraphs = article.konten.split("\n").filter((p) => p.trim() !== "");

  return (
    <article className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 md:p-12 mb-12">
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
  );
}