"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Languages } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Injeksi Script Google Translate
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      };
    };
    addGoogleTranslateScript();
  }, []);

  // Fungsi toggle bahasa (English <-> Indonesian) menggunakan Cookie Google Translate
  const handleTranslateToggle = () => {
    const isIndonesian = document.cookie.includes("googtrans=/en/id");
    
    // Set cookie untuk Google Translate
    if (isIndonesian) {
      document.cookie = "googtrans=/en/en; path=/";
      document.cookie = `googtrans=/en/en; domain=${window.location.hostname}; path=/`;
    } else {
      document.cookie = "googtrans=/en/id; path=/";
      document.cookie = `googtrans=/en/id; domain=${window.location.hostname}; path=/`;
    }
    // Reload halaman agar script Google Translate menerapkan bahasa baru
    window.location.reload();
  };

  // Deteksi scroll velocity dan state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const velocity = latest - lastScrollY;
    setScrollVelocity(velocity);
    setLastScrollY(latest);

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsScrolling(false);
    }

    setIsScrolling(true);

    if (scrollTimeout) clearTimeout(scrollTimeout);

    const newTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 800);

    setScrollTimeout(newTimeout);
  });

  useEffect(() => {
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  const menuItems = [
    { label: "Home", hasDropdown: false, href: "/" },
    { label: "Traffic Maps", hasDropdown: false, href: "/traffic" },
    { label: "Destinations", hasDropdown: false, href: "/destination" },
    { label: "News", hasDropdown: false, href: "/berita" },
    { label: "Contact", hasDropdown: false, href: "#" },
  ];

  return (
    <div 
      className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* Hidden div yang dibutuhkan oleh Google Translate Script */}
      <div id="google_translate_element" className="hidden"></div>

      <motion.nav
        layout
        initial={false}
        animate={isScrolled && !isScrolling ? "scrolledCompact" : "top"}
        variants={{
          top: {
            width: "100%",
            maxWidth: "1100px",
            borderRadius: "24px",
            padding: "16px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
          },
          scrolledCompact: {
            // Menggunakan fungsi dinamis / ukuran penuh (100%) khusus di mobile, dan 'auto' di desktop (md+)
            width: typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : "auto",
            maxWidth: typeof window !== "undefined" && window.innerWidth < 768 ? "1100px" : "auto",
            borderRadius: typeof window !== "undefined" && window.innerWidth < 768 ? "24px" : "20px",
            padding: typeof window !== "undefined" && window.innerWidth < 768 ? "16px 24px" : "12px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.75)",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
        className="flex items-center justify-between pointer-events-auto relative dark:bg-zinc-900/70 dark:border-zinc-800"
      >
        {/* Logo */}
        <motion.div
          layout
          className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white flex-shrink-0"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="transition-all duration-300"
          >
            <path d="M21.93 5.73l-2.42-2.42c-.39-.39-1.02-.39-1.41 0l-5.75 5.75c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5.75-5.75c.39-.39.39-1.02 0-1.41z" />
            <path d="M12.45 9.17L9.62 6.34c-.39-.39-1.02-.39-1.41 0L2.45 12.1c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.75-5.75c.4-.39.4-1.03.01-1.42z" />
            <path d="M18.8 17.52l-5.75-5.75c-.39-.39-1.02-.39-1.41 0l-2.83 2.83c-.39.39-.39 1.02 0 1.41l5.75 5.75c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41z" />
          </svg>
          {/* Teks Logo */}
          <motion.span
            layout
            className={`font-bold tracking-tight transition-all duration-300 ${
              isScrolled ? "hidden md:block text-xl" : "block text-xl"
            }`}
          >
            SmartCity
          </motion.span>
        </motion.div>

        {/* Menu Links (Posisi Normal - Desktop) */}
        <AnimatePresence mode="popLayout">
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300 text-[15px]"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 relative group"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="text-gray-500 mt-0.5" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Links (Posisi Scrolled - Desktop) */}
        <AnimatePresence mode="wait">
          {isScrolled && !isScrolling && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-2 ml-4 mr-2"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-between whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={12} className="ml-1" />}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons (Language, Dark Mode, & Hamburger Mobile) */}
        <motion.div layout className="flex items-center gap-3 flex-shrink-0 ml-auto md:ml-4">
          
          {/* Aksi Desktop */}
          <AnimatePresence mode="wait">
            {(!isScrolling || !isScrolled) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                className="hidden md:flex items-center gap-3"
              >
                {/* Language Translator Button */}
                <button 
                  onClick={handleTranslateToggle}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
                  title="Translate Page"
                >
                  <Languages size={16} />
                  {!isScrolled && <span>Translate</span>}
                </button>

              </motion.div>
            )}
          </AnimatePresence>

          {/* HAMBURGER MENU BUTTON (MOBILE) - Tetap muncul di layar kecil */}
          <motion.button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 z-10 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-2xl border border-white/70 dark:border-zinc-800 shadow-lg pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors font-medium text-[15px]"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
                </motion.a>
              ))}
              
              {/* Mobile Actions: Language & Theme */}
              <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-gray-100 dark:border-zinc-800">
                <button 
                  onClick={handleTranslateToggle}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Languages size={18} /> Translate
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}