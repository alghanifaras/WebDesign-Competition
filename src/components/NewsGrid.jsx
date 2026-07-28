"use client";

import { motion, AnimatePresence } from "framer-motion";
import NewsCard from "./NewsCard";

export default function NewsGrid({ filteredBerita, searchQuery, selectedCategory, onReset }) {
  return (
    <AnimatePresence mode="wait">
      {filteredBerita.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {filteredBerita.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsCard article={item} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="flex flex-col items-center justify-center py-24 px-4 text-center rounded-3xl bg-white/30 backdrop-blur-md border border-white/40 shadow-sm"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-white/30" />
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white/90 to-white/50 shadow-lg border border-white/60 mb-6">
              <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#111827] mb-2">Tidak Ada Hasil Ditemukan</h3>
          <p className="text-slate-600 max-w-sm">
            Maaf, tidak ditemukan berita untuk "<span className="font-medium text-[#111827]">{searchQuery || selectedCategory}</span>"
          </p>
          <button
            onClick={onReset}
            className="mt-8 px-5 text-sm py-3.5 rounded-2xl bg-white/60 backdrop-blur-md text-[#111827] hover:bg-white/80 focus:outline-none transition-all duration-300 ring-1 ring-white/50 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Reset Pencarian
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}