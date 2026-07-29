import Link from "next/link";

export default function RecommendedNews({ rekomendasi }) {
  // Jika tidak ada rekomendasi, jangan tampilkan apa-apa
  if (!rekomendasi || rekomendasi.length === 0) return null;

  return (
    <section className="relative mt-12 mb-8">
      <h2
        className="text-2xl font-bold text-slate-800 mb-6 px-2"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Rekomendasi Berita Lainnya
      </h2>

      {/* Grid Cards Berita */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rekomendasi.map((item) => (
          // 1. TAMBAHKAN PROPS "key" DI SINI
          <Link key={item.slug} href={`/berita/${item.slug}`} className="group block h-full">
            <article className="h-full flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-out">
              {/* Gambar */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.judul}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Konten */}
              <div className="p-5 flex flex-col grow">
                {/* Kategori */}
                <span className="text-xs font-medium text-gray-500 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.kategori}
                </span>

                {/* Judul */}
                <h2 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 mb-3 group-hover:text-gray-700 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.judul}
                </h2>

                {/* Ringkasan */}
                {item.ringkasan && (
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.ringkasan}
                  </p>
                )}

                {/* Tags berbentuk pill */}
                {/* 2. UBAH "tags" MENJADI "item.tags" */}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}