"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HighlightScroll from "@/components/HighLightScroll";
import BackgroundLayers from "@/components/BackgroundLayers";
import NewsFilter from "@/components/NewsFilter";
import NewsGrid from "@/components/NewsGrid";
import { categories, beritaDatabase } from "@/lib/dummyData";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function SmartCityHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // State untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredBerita = beritaDatabase.filter(
    (item) =>
      (selectedCategory === "Semua" || item.kategori === selectedCategory) &&
      (item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.kategori.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Logika Pemotongan Data untuk Pagination
  const totalPages = Math.ceil(filteredBerita.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBerita = filteredBerita.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const highlightedBerita = beritaDatabase.slice(0, 3);

  const handleResetSearch = () => {
    setSearchQuery("");
    setSelectedCategory("Semua");
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen selection:bg-[#2A4D3B] selection:text-white relative overflow-x-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="absolute top-0 left-0 z-0 w-full h-[300px] [mask-image:linear-gradient(to_top,transparent_20%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>

      <div className="pt-32 pb-12 border-b border-gray-100 flex flex-col min-h-[250px] justify-center relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start text-left">
          <div className="flex flex-col gap-3 items-start">
            <h1 className="font-bold text-5xl md:text-5xl lg:text-[3.5rem] tracking-tight text-slate-900 leading-[1.1]">
              SmartCity News
            </h1>
            <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl mt-1">
              Latest news, public announcements, and city updates.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 w-full pt-12 pb-24">
          <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >

              <div className="relative z-10">
                <HighlightScroll articles={highlightedBerita} />

                <div className="mt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                  <NewsFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                </div>

                <NewsGrid
                  filteredBerita={paginatedBerita}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  onReset={handleResetSearch}
                />

                {totalPages > 1 && (
                  <div className="mt-14 flex items-center justify-center gap-2 sm:gap-3">
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 shadow-sm"
                    >
                      Prev
                    </button>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        const isActive = currentPage === pageNumber;

                        return (
                          <button
                            key={pageNumber}
                            onClick={() => goToPage(pageNumber)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                              isActive
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 border border-emerald-600 scale-105"
                                : "bg-white border border-gray-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 shadow-sm"
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 shadow-sm"
                    >
                      Next
                    </button>
                  </div>
                )}

              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}