import Link from "next/link";

export default function NewsCard({ article }) {
  // article.tags diharapkan berupa array string, mis: ["Web App", "Analytics", "ETL Processes"]
  const tags = article.tags || [];

  return (
    <Link href={`/berita/${article.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-out">
        {/* Gambar */}
        <div className="relative w-full h-52 overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.judul}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Konten */}
        <div className="p-5 flex flex-col grow">
          {/* Kategori */}
          <span className="text-xs font-medium text-gray-500 mb-2">
            {article.kategori}
          </span>

          {/* Judul */}
          <h2 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2 mb-3 group-hover:text-gray-700 transition-colors">
            {article.judul}
          </h2>

          {/* Ringkasan (opsional, tampil jika ada & tidak butuh gaya identik dgn referensi) */}
          {article.ringkasan && (
            <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
              {article.ringkasan}
            </p>
          )}

          {/* Tags berbentuk pill, mendorong ke bawah card */}
          {tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {tags.map((tag, i) => (
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
  );
}