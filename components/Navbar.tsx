'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Birthday', href: '#birthday' },
  { name: 'Special Moments', href: '#moments' },
  { name: 'Wishes', href: '#wishes' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'A Little Message', href: '#secret' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#10040d]/75 backdrop-blur-md border-b border-rose-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Anjali Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="font-script text-3xl sm:text-4xl text-rose-200 group-hover:text-rose-100 transition-colors drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]">
                Anjali
              </span>
              <span className="text-rose-400 group-hover:text-rose-300 transition-colors text-xl font-light">
                ♡
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs lg:text-sm font-light tracking-wider text-rose-100/75 hover:text-white transition-all relative py-1 hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-rose-500 to-pink-300 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: Date Badge */}
            <div className="hidden sm:flex items-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-light text-rose-200/90 tracking-wide shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-rose-400" />
                <span>28 Sep 2026</span>
                <span className="text-rose-400 text-xs">♡</span>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-white/10 bg-white/5 text-rose-200 hover:text-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-30 p-4 md:hidden"
          >
            <div className="rounded-2xl border border-rose-500/20 bg-[#140612]/95 backdrop-blur-2xl p-6 shadow-2xl space-y-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between py-2 text-sm font-light text-rose-100/80 hover:text-white border-b border-white/5"
                  >
                    <span>{item.name}</span>
                    <span className="text-rose-400/60 text-xs">♡</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-2 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-950/40 text-xs text-rose-200">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  <span>28 Sep 2026 ♡</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
