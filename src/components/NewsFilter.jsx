"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -15,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 w-full">
      {/* ================= Category ================= */}
      <div className="flex items-start gap-3 w-full lg:w-auto">
        {/* Tombol Filter */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
            isFilterOpen
              ? "bg-white inset-shadow-xl text-[#111827] border-transparent shadow-[0_0_7px_3px_rgba(0,0,0,0.1)]"
              : "backdrop-blur-md text-slate-700 rounded-2xl  placeholder:text-slate-500 focus:outline-none transition-all duration-300 ring-1 ring-white/60  inset-shadow-4xl border-transparent shadow-[0_0_7px_3px_rgba(0,0,0,0.1)]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${
              isFilterOpen ? "rotate-180" : ""
            }`}
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>

          Kategori
        </button>

        {/* ================= Daftar Kategori ================= */}
        <AnimatePresence mode="wait">
          {isFilterOpen && (
            <motion.div
              layout
              initial={{
                opacity: 0,
                width: 0,
              }}
              animate={{
                opacity: 1,
                width: "100%",
              }}
              exit={{
                opacity: 0,
                width: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="overflow-hidden flex-1 min-w-0"
            >
              <motion.div
                layout
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="
                  flex
                  flex-wrap
                  md:flex-nowrap
                  items-start
                  gap-2
                  py-1
                  pl-2
                  pr-1
                "
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    layout
                    variants={itemVariants}
                    whileHover={{
                      
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => setSelectedCategory(category)}
                    className={`shrink-0 px-5 py-2.5 mr-1 mb-1 rounded-full text-sm font-medium transition-all duration-300 border ${
                      selectedCategory === category
                        ? "bg-white inset-shadow-xl text-[#111827] border-transparent shadow-[0_0_7px_3px_rgba(0,0,0,0.1)]"
                        : "backdrop-blur-md text-slate-700 rounded-2xl  placeholder:text-slate-500 focus:outline-none transition-all duration-300 ring-1 ring-white/60  inset-shadow-4xl border-transparent shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))} 
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0"
      >
        <div className="relative w-full sm:w-80 group">
          <div className="absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-slate-500 group-focus-within:text-[#111827] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search Articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full backdrop-blur-md text-slate-700 pl-12 pr-4 py-3.5 rounded-2xl  placeholder:text-slate-500 focus:outline-none transition-all duration-300 ring-1 ring-white/60  inset-shadow-4xl border-transparent shadow-[0_0_6px_2px_rgba(0,0,0,0.1)] "
          />
        </div>
      </motion.div>
    </div>
  );
}