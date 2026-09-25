'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Lock, KeyRound, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SecretMessage() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#ff758f', '#fcd489', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="secret" className="relative py-24 sm:py-32 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-rose-900/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/20 bg-rose-950/30 text-xs text-rose-300 uppercase tracking-widest"
        >
          <Lock className="w-3 h-3 text-rose-400" />
          <span>A Quiet Note</span>
          <span className="text-rose-400">♡</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal mb-4"
        >
          One last <span className="font-script text-4xl sm:text-5xl md:text-6xl text-rose-300">thing…</span>
        </motion.h2>

        {/* Subtle Pre-text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-rose-200/75 font-serif italic mb-8 max-w-md mx-auto"
        >
          “Some feelings are better left between the lines.”
        </motion.p>

        {/* Interactive Button / Secret Reveal Box */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.button
                key="secret-btn"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(244,63,94,0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={handleReveal}
                className="group relative px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border border-rose-400/40 bg-gradient-to-r from-rose-950/60 to-wine-900/60 backdrop-blur-xl text-rose-100 font-light text-sm sm:text-base tracking-wide shadow-lg hover:border-rose-400 cursor-pointer transition-all flex items-center gap-3"
              >
                <KeyRound className="w-4 h-4 text-rose-400 group-hover:rotate-45 transition-transform" />
                <span>there&apos;s a little secret ♡</span>
                <Sparkles className="w-4 h-4 text-amber-300/80 animate-pulse" />
              </motion.button>
            ) : (
              <motion.div
                key="secret-content"
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-lg w-full rounded-3xl border border-rose-400/35 bg-[#1a0715]/85 backdrop-blur-2xl p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(244,63,94,0.2)] text-center space-y-6"
              >
                {/* Envelope / Letter top icon */}
                <div className="flex justify-center">
                  <div className="w-11 h-11 rounded-full bg-rose-500/10 border border-rose-400/25 flex items-center justify-center text-rose-300 shadow-sm">
                    <MailOpen className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-rose-100/90 leading-relaxed font-light italic">
                    “Maybe this page took a little more thought than a normal birthday wish should.
                  </p>
                  
                  <div className="w-12 h-[1px] bg-rose-400/30 mx-auto my-2" />

                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-rose-100/90 leading-relaxed font-light italic">
                    Maybe that&apos;s because you are a little more special than a normal person.”
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-rose-400/70 text-xs tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-rose-400/40 text-rose-400" />
                  <span className="font-sans font-light">Kept between the lines</span>
                  <Heart className="w-3.5 h-3.5 fill-rose-400/40 text-rose-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
