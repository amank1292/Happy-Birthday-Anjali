'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flame, Sparkles } from 'lucide-react';

export default function BirthdayMessage() {
  return (
    <section id="wishes" className="relative py-28 sm:py-36 overflow-hidden">
      
      {/* Warm candlelight bloom in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-rose-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#1d0918]/80 to-[#12050e]/90 backdrop-blur-2xl p-8 sm:p-14 md:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(244,63,94,0.15)] overflow-hidden"
        >
          {/* Subtle top light bar */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />

          {/* Candlelight icon at top */}
          <div className="flex justify-center mb-8">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/20 shadow-[0_0_20px_rgba(255,183,3,0.3)]">
              <Flame className="w-6 h-6 text-amber-400 candle-flame" />
              <div className="absolute -inset-1 rounded-full bg-amber-400/20 blur-sm pointer-events-none" />
            </div>
          </div>

          {/* Emotional Message Quote */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex justify-center text-rose-400/60">
              <span className="font-serif text-5xl sm:text-6xl text-rose-300/40 leading-none">“</span>
            </div>

            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-rose-50 font-light leading-relaxed sm:leading-relaxed max-w-2xl mx-auto tracking-wide">
              I hope life is gentle with you, <br className="hidden sm:inline" />
              kind to your dreams, <br className="hidden sm:inline" />
              and full of little moments <br className="hidden sm:inline" />
              that make you genuinely smile.
            </p>

            <div className="pt-6 sm:pt-8 flex flex-col items-center space-y-3">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
              
              <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-rose-300 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                Happy Birthday, Anjali <span className="font-sans text-2xl sm:text-3xl text-rose-400">♡</span>
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-rose-300/60 uppercase tracking-[0.25em] font-light pt-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>28 September 2026</span>
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400/40" />
              </div>
            </div>
          </div>

          {/* Decorative Corner Flourishes */}
          <div className="absolute bottom-4 left-6 text-rose-500/20 text-xs font-serif italic select-none">
            with quiet warmth
          </div>
          <div className="absolute bottom-4 right-6 text-rose-500/20 text-xs font-serif italic select-none">
            always ♡
          </div>
        </motion.div>
      </div>
    </section>
  );
}
