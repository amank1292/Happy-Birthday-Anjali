'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EntranceScreenProps {
  isOpen: boolean;
  onEnter: () => void;
}

export default function EntranceScreen({ isOpen, onEnter }: EntranceScreenProps) {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate subtle twinkling stars
    const starList = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 95}%`,
      left: `${Math.random() * 95}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(starList);
  }, []);

  const handleEnterClick = () => {
    // Launch delicate rose gold & champagne confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#ff758f', '#ffb3c1', '#ffd166', '#ffffff', '#e0aaff'],
        disableForReducedMotion: true,
      });
    } catch {
      // fallback safe
    }
    onEnter();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="entrance-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070205] text-white px-4 select-none overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 45%, rgba(68, 20, 44, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(30, 8, 20, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(45, 12, 30, 0.5) 0%, transparent 50%)
            `,
          }}
        >
          {/* Subtle Twinkling Stars */}
          {stars.map((s) => (
            <motion.div
              key={s.id}
              className="absolute rounded-full bg-rose-100"
              style={{
                top: s.top,
                left: s.left,
                width: `${s.size}px`,
                height: `${s.size}px`,
              }}
              animate={{
                opacity: [0.15, 0.85, 0.15],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: s.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Central Content Box */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
            
            {/* Top Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/25 bg-rose-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                <span className="text-xs tracking-[0.35em] uppercase text-rose-200/90 font-light pl-1">
                  28 · 09 · 2026
                </span>
                <Heart className="w-3 h-3 text-rose-400/80 fill-rose-400/40" />
              </div>
            </motion.div>

            {/* Glowing Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-10 space-y-3"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-rose-100 font-light">
                Something special is waiting…
              </h2>
              <p className="text-xs sm:text-sm text-rose-200/60 font-light tracking-wider italic">
                A quiet celebration crafted with love and light
              </p>
            </motion.div>

            {/* Cinematic Enter Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(244,63,94,0.6)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnterClick}
              className="relative group px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white font-medium text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(244,63,94,0.45)] border border-rose-300/40 cursor-pointer overflow-hidden transition-all duration-300"
            >
              {/* Shimmer overlay */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <span className="relative flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-rose-200 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Enter the surprise ♡</span>
              </span>
            </motion.button>

            {/* Gentle helper note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-6 text-[11px] text-rose-300/50 font-light tracking-widest uppercase"
            >
              ♫ Music starts on tap
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
