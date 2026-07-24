"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, Home, Layers, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Mendeteksi posisi scroll, jika lebih dari 50px dari atas, ubah state
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 font-poppins px-4 pointer-events-none">
      <motion.nav
        layout
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: { 
            width: "100%", 
            maxWidth: "900px", 
            borderRadius: "24px", 
            padding: "16px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)"
          },
          scrolled: { 
            width: "280px", 
            borderRadius: "999px", 
            padding: "10px 16px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
          }
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25, 
          mass: 0.5 
        }}
        className="flex items-center justify-between border border-slate-200 backdrop-blur-md pointer-events-auto"
      >
        {/* Logo / Brand */}
        <motion.div layout className="flex items-center gap-2 cursor-pointer text-blue-600">
          <Sparkles size={isScrolled ? 20 : 24} className="fill-blue-500" />
          <motion.span 
            layout 
            className={`font-bold text-slate-800 ${isScrolled ? 'text-sm' : 'text-xl'}`}
          >
            City<span className="text-blue-500">.Boi</span>
          </motion.span>
        </motion.div>

        {/* Menu Links (Hanya muncul saat di paling atas) */}
        <AnimatePresence mode="popLayout">
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-8 font-medium text-slate-500 text-sm"
            >
              <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1.5"><Home size={16}/> Beranda</a>
              <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1.5"><Layers size={16}/> Fitur</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Harga</a>
              <a href="/berita" className="hover:text-blue-500 transition-colors">Berita</a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button / Menu Icon Action */}
        <motion.div layout className="flex items-center">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.button
                key="cta-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors"
              >
                Mulai <ArrowRight size={16} />
              </motion.button>
            ) : (
              <motion.button
                key="menu-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <Menu size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </div>
  );
}