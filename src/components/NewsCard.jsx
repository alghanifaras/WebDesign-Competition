import Link from "next/link";

export default function NewsCard({ article }) {
  return (
    <Link href={`/berita/${article.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-900 dark:border-slate-700 overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]  hover:-translate-y-1.5 hover:-translate-x-1.5 transition-all duration-300 ease-out relative">
        <div className="relative w-full h-56 overflow-hidden border-b-2 border-slate-900 dark:border-slate-700">
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />

          <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-amber-300 text-slate-900 rounded-lg text-xs font-bold tracking-wider uppercase border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            {article.kategori}
          </span>

          <img
            src={article.thumbnail}
            alt={article.judul}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        <div className="p-6 flex flex-col grow bg-white dark:bg-slate-900">
          <time className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center">
            <svg
              className="w-3.5 h-3.5 mr-1.5 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {article.tanggal}
          </time>

          <h2 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {article.judul}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-3 leading-relaxed font-normal">
            {article.ringkasan}
          </p>

          <div className="mt-auto flex items-center text-sm font-bold text-slate-900 dark:text-white transition-colors">
            <span className="border-b-2 border-slate-900 dark:border-white pb-0.5 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
              Baca artikel
            </span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}