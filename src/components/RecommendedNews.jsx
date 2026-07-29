import Link from "next/link";

export default function RecommendedNews({ rekomendasi }) {
  if (!rekomendasi || rekomendasi.length === 0) return null;

  return (
    <section className="relative w-full">
      <h2
        className="text-2xl font-bold text-slate-900 mb-6 tracking-tight"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Read more
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rekomendasi.map((item) => (
          <Link key={item.slug} href={`/berita/${item.slug}`} className="group block h-full">
            <article className="h-full flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={item.thumbnail}
                  alt={item.judul}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col grow">
                <span className="text-xs font-medium text-emerald-600 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.kategori}
                </span>

                <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 mb-2 group-hover:text-emerald-700 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.judul}
                </h3>

                {item.ringkasan && (
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.ringkasan}
                  </p>
                )}

                <div className="mt-auto pt-3 border-t border-gray-100 text-[11px] text-slate-400 font-medium">
                  {item.tanggal}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}