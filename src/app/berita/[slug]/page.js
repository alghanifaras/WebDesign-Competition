import { notFound } from "next/navigation";

import ArticleContent from "@/components/ArticleContent"; 
import RecommendedNews from "@/components/RecommendedNews"; 
import BackButton from "@/components/BackButton";
import BackgroundLayers from "@/components/BackgroundLayers"; 

// HANYA IMPORT DARI SATU SUMBER (dummyData)
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
      className="flex flex-col min-h-screen text-[#121A22] selection:bg-[#2A4D3B] selection:text-white relative overflow-hidden font-sans"
      style={{
        background: "linear-gradient(180deg, #E8F4ED 0%, #DCE5E0 50%, #CBDCD2 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Memanggil layer background yang sudah dipisah */}
      <BackgroundLayers />

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          
          <BackButton href="/berita" />

          <ArticleContent article={article} />

          <RecommendedNews rekomendasi={rekomendasi} />

        </main>
      </div>
    </div>
  );
}