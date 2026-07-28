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
          <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
            <img
              src="https://img.magnific.com/vektor-premium/ilustrasi-datar-vektor-dalam-skala-abu-abu-avatar-ikon-orang-profil-pengguna-gambar-profil-cocok-untuk-media-sosial-profil-ikon-screensaver-dan-sebagai-templatx9xa_719432-1256.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Author"
            />
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
          <time>{article.tanggal}</time>
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
