import { notFound } from "next/navigation";

import ArticleContent from "@/components/ArticleContent"; 
import RecommendedNews from "@/components/RecommendedNews"; 
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Link from "next/link"; 

import { getBeritaBySlug, getRekomendasiBerita } from "@/lib/dummyData";

export default async function HalamanBacaArtikel({ params }) {
  const { slug } = await params;
  
  const article = await getBeritaBySlug(slug);
  
  if (!article) {
    notFound();
  }
  
  const rekomendasi = await getRekomendasiBerita(slug);

  return (
    <div
      className="flex flex-col min-h-screen text-[#121A22] selection:bg-[#2A4D3B] selection:text-white relative overflow-x-hidden font-sans"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      
      <div className="absolute top-0 left-0 z-0 w-full h-[400px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)] pointer-events-none opacity-40">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#2A4D3B"
          maxOpacity={0.15}
          flickerChance={0.05}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        <main className="flex-1 w-full pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto">
          
          {/* Header Section */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <Link 
                href="/berita" 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/85 hover:bg-white text-slate-700 hover:text-emerald-800 transition-all shadow-sm border border-slate-200/60 backdrop-blur-md group"
                aria-label="Kembali"
              >
                <svg 
                  className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>

              <span className="px-3 py-1 bg-white/60 backdrop-blur-md text-slate-600 rounded-full text-xs font-medium border border-slate-200/60 shadow-sm">
                {article.kategori}
              </span>

              <span className="text-slate-300">•</span>

              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                {article.tanggal}
              </span>
            </div>

            <h1 className="font-bold text-3xl sm:text-4xl md:text-[2.75rem] tracking-tight text-slate-900 leading-[1.15] mb-3">
              {article.judul}
            </h1>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              Ditulis oleh <span className="font-semibold text-slate-700">{article.penulis}</span>. Temukan informasi lengkap dan pembaruan seputar perkembangan layanan publik serta ekosistem kota.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-gray-200 bg-slate-50/50">
            
            {/* KOLOM KIRI (Span 8): Hanya berisi Artikel Content */}
            <div className="lg:col-span-8 lg:border-r border-gray-200 pr-0 lg:pr-10 pt-4 pb-8 bg-white/40">
              <ArticleContent article={article} />
            </div>

            <aside className="lg:col-span-4 pl-0 lg:pl-8 pt-4 flex flex-col gap-6 sticky top-28 self-start bg-slate-50/80 backdrop-blur-md pb-8">
              
              <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-gray-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                    {article?.penulis ? article.penulis.charAt(0) : "SC"}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{article?.penulis || "SmartCity Editorial"}</h4>
                    <p className="text-xs text-slate-500">Public Service Contributor</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Delivering accurate updates, municipal developments, and comprehensive public insights for citizens.
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-gray-200/80">
                <h4 className="font-bold text-sm text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Quick Navigation
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Explore related topics or return to the main hub to browse more municipal news.
                </p>
                <Link 
                  href="/berita" 
                  className="block w-full text-center py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  Browse All Articles
                </Link>
              </div>

            </aside>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <RecommendedNews rekomendasi={rekomendasi} />
          </div>

        </main>
      </div>
    </div>
  );
}