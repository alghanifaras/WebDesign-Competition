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

  // Menu items
  const menuItems = [
    { label: "Home", hasDropdown: false, href: "#" },
    { label: "Traffic Maps", hasDropdown: false, href: "#" },
    { label: "Articles", hasDropdown: false, href: "#" },
    { label: "Destination", hasDropdown: false, href: "/destination" },
    { label: "Contact", hasDropdown: false, href: "#" },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-50 font-sans px-4 pointer-events-none">
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
            width: "auto",
            borderRadius: "20px",
            padding: "12px 20px",
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
        className="flex items-center justify-between pointer-events-auto relative"
      >
        {/* Logo */}
        <motion.div
          layout
          className="flex items-center gap-2 cursor-pointer text-gray-900 flex-shrink-0"
        >
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
            className={`font-bold text-gray-900 tracking-tight transition-all duration-300 ${
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
              className="hidden md:flex items-center gap-8 font-medium text-gray-700 text-[15px]"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-black transition-colors flex items-center gap-1.5 relative group"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="text-gray-500 mt-0.5" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact Menu - Scrolled State (All menu items) */}
        <AnimatePresence mode="wait">
          {isScrolled && !isScrolling && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10 }}
              transition={{ duration: 0.2 }}
              className="hidden md:flex items-center gap-2"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-semibold text-gray-600 hover:text-black transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/40 flex items-center justify-between whitespace-nowrap"
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

        {/* CTA Button / Menu Icon */}
        <motion.div layout className="flex items-center gap-3 flex-shrink-0 ml-auto md:ml-4">
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
                {/* Language Selector */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 cursor-pointer hover:text-black hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
                  English <ChevronDown size={14} />
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="menu-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="hidden md:flex p-2 bg-white/20 hover:bg-white/40 rounded-full text-gray-700 transition-colors backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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
            className="absolute top-20 left-4 right-4 md:hidden bg-white/60 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-lg pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-white/40 rounded-xl transition-colors font-medium text-[15px]"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
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
