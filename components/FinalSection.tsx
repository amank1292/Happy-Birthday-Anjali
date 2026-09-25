'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalSection() {
  const [pulseCount, setPulseCount] = useState(0);

  const handleFinalHeartClick = () => {
    setPulseCount((p) => p + 1);
    try {
      confetti({
        particleCount: 40,
        spread: 80,
        origin: { y: 0.85 },
        colors: ['#ff758f', '#ffccd5', '#ffd166', '#c9184a'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section className="relative pt-24 pb-36 sm:pb-40 overflow-hidden text-center">
      
      {/* Ambient background bloom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Main Wish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-rose-100 font-light leading-snug">
            Stay happy. <br />
            <span className="font-serif italic text-rose-200/90">Always.</span>
          </h2>

          <div className="pt-2">
            <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.55)]">
              Happy Birthday, Anjali <span className="font-sans text-3xl sm:text-4xl">♡</span>
            </h3>
          </div>

          <div className="pt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs sm:text-sm text-rose-200/80 font-light tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>28 · 09 · 2026</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>
        </motion.div>

        {/* Subtle glowing interactive heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4 flex flex-col items-center justify-center space-y-3"
        >
          <motion.button
            onClick={handleFinalHeartClick}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                'drop-shadow(0 0 10px rgba(244,63,94,0.4))',
                'drop-shadow(0 0 25px rgba(244,63,94,0.7))',
                'drop-shadow(0 0 10px rgba(244,63,94,0.4))',
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-rose-600/30 to-pink-500/20 border border-rose-400/40 backdrop-blur-xl flex items-center justify-center cursor-pointer shadow-lg group"
            aria-label="Tap to send final birthday sparkle"
          >
            <Heart className="w-8 h-8 fill-rose-500 text-rose-400 group-hover:scale-110 transition-transform" />
          </motion.button>
          
          <span className="text-[11px] text-rose-300/50 uppercase tracking-widest font-light">
            {pulseCount > 0 ? `Sent ${pulseCount} sparkle${pulseCount > 1 ? 's' : ''} ♡` : 'Tap with warmth ♡'}
          </span>
        </motion.div>

        {/* Subtle Footer Note */}
        <div className="pt-12 text-xs text-rose-200/40 font-light tracking-wide space-y-1">
          <p>A private celebration created specially for Anjali</p>
          <p className="text-[10px] text-rose-200/30">September 28, 2026 · All quiet thoughts reserved ♡</p>
        </div>
      </div>
    </section>
  );
}
