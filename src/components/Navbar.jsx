"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Deteksi scroll velocity dan state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const velocity = latest - lastScrollY;
    setScrollVelocity(velocity);
    setLastScrollY(latest);

    // Set scrolled state
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsScrolling(false);
    }

    // Deteksi apakah sedang scrolling
    setIsScrolling(true);

    // Clear timeout sebelumnya
    if (scrollTimeout) clearTimeout(scrollTimeout);

    // Set timeout untuk mendeteksi scroll berhenti
    const newTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 800);

    setScrollTimeout(newTimeout);
  });

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  // Disesuaikan dengan referensi desain
  const menuItems = [
    { label: "Home", hasDropdown: false, href: "#" },
    { label: "Traffic Maps", hasDropdown: false, href: "#" },
    { label: "Articles", hasDropdown: false, href: "#" },
    { label: "Contact", hasDropdown: false, href: "#" },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-50 font-sans px-4 pointer-events-none">
      <motion.nav
        layout
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: {
            width: "100%",
            maxWidth: "1100px",
            borderRadius: "24px",
            padding: "16px 24px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)",
          },
          scrolled: {
            width: isScrolling ? "320px" : "280px",
            borderRadius: "999px",
            padding: "10px 16px",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(12px)",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5,
        }}
        className="flex items-center justify-between border border-gray-100 backdrop-blur-md pointer-events-auto relative"
      >
        {/* Logo / Brand (Style Monotree) */}
        <motion.div
          layout
          className="flex items-center gap-2 cursor-pointer text-gray-900 flex-shrink-0"
        >
          {/* Custom SVG Logo menyerupai referensi */}
          <svg 
            width={isScrolled ? "20" : "24"} 
            height={isScrolled ? "20" : "24"} 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="transition-all duration-300"
          >
            <path d="M21.93 5.73l-2.42-2.42c-.39-.39-1.02-.39-1.41 0l-5.75 5.75c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5.75-5.75c.39-.39.39-1.02 0-1.41z" />
            <path d="M12.45 9.17L9.62 6.34c-.39-.39-1.02-.39-1.41 0L2.45 12.1c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.75-5.75c.4-.39.4-1.03.01-1.42z" />
            <path d="M18.8 17.52l-5.75-5.75c-.39-.39-1.02-.39-1.41 0l-2.83 2.83c-.39.39-.39 1.02 0 1.41l5.75 5.75c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41z" />
          </svg>
          <motion.span
            layout
            className={`font-bold text-gray-900 tracking-tight ${
              isScrolled ? "text-sm" : "text-xl"
            } ${isScrolled && isScrolling ? "hidden" : ""}`}
          >
            SmartCity
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
              className="hidden md:flex items-center gap-7 font-medium text-gray-700 text-[15px]"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-black transition-colors flex items-center gap-1.5"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="text-gray-500 mt-0.5" />}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Island Menu - Submenu (Scrolled State) */}
        <AnimatePresence mode="wait">
          {isScrolled && !isScrolling && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="hidden md:flex flex-col gap-1 py-1 max-w-xs"
            >
              {menuItems.slice(0, 2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-semibold text-gray-600 hover:text-black hover:bg-gray-100 transition-colors px-3 py-1.5 rounded-lg flex items-center justify-between"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={12} />}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button / Menu Icon */}
        <motion.div layout className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop CTA Button */}
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div
                key="cta-group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                className="hidden md:flex items-center gap-4"
              >
            
                {/* Language Selector meniru referensi */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 cursor-pointer hover:text-black border-l border-gray-200 pl-4">
                  English <ChevronDown size={14} />
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="menu-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="hidden md:flex p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <Menu size={18} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-700 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
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
            className="absolute top-20 left-4 right-4 md:hidden bg-white rounded-2xl border border-gray-100 shadow-xl backdrop-blur-md pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium text-[15px]"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}