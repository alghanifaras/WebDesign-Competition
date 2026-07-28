"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Komponen
import HighlightScroll from "@/components/HighLightScroll";
import BackgroundLayers from "@/components/BackgroundLayers";
import NewsFilter from "@/components/NewsFilter";
import NewsGrid from "@/components/NewsGrid";

// Data
import { categories, beritaDatabase } from "@/lib/dummyData";

export default function SmartCityHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredBerita = beritaDatabase.filter(
  (item) =>
    (selectedCategory === "Semua" || item.kategori === selectedCategory) &&
    (item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kategori.toLowerCase().includes(searchQuery.toLowerCase())),
);

  const highlightedBerita = beritaDatabase.slice(0, 3);
  
  const handleResetSearch = () => {
    setSearchQuery("");
    setSelectedCategory("Semua");
  };

  return (
    <div 
      className="flex flex-col min-h-screen selection:bg-[#2A4D3B] selection:text-white relative"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <BackgroundLayers />

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 w-full pt-32 pb-16">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            > 
              {/* Decorative Background Blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl bg-[#1E573D] opacity-10 pointer-events-none" />

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
                  filteredBerita={filteredBerita}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  onReset={handleResetSearch}
                />
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}