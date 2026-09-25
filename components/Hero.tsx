'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Cake, Heart, Flame, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getAssetPath } from '@/lib/utils';

export default function Hero() {
  const [wishesCount, setWishesCount] = useState(1);
  const [hasLiked, setHasLiked] = useState(false);

  const handleSendWish = () => {
    setWishesCount((prev) => prev + 1);
    setHasLiked(true);
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ff758f', '#ffb3c1', '#ffd166', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }
  };

  const handleScrollToBirthday = () => {
    const el = document.querySelector('#birthday');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Supporting text, Birthday quick cards */}
          <div className="lg:col-span-6 z-20 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-400/30 bg-rose-950/30 backdrop-blur-md shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                <span className="text-rose-400 text-xs">♡</span>
                <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase font-medium text-rose-200">
                  SPECIAL DAY
                </span>
                <span className="text-rose-400 text-xs">♡</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-1 sm:space-y-2"
            >
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)] leading-[1.1]">
                Happy Birthday
              </h1>
              <div className="relative inline-block">
                <span className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-rose-400 font-normal tracking-wide block drop-shadow-[0_0_35px_rgba(244,63,94,0.65)] hover:scale-[1.02] transition-transform">
                  Anjali <span className="font-sans text-4xl sm:text-5xl lg:text-6xl text-rose-400 inline-block animate-pulse">♡</span>
                </span>
              </div>
            </motion.div>

            {/* Supporting Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="max-w-xl mx-auto lg:mx-0 space-y-2"
            >
              <p className="text-base sm:text-lg md:text-xl text-rose-100/85 font-light leading-relaxed font-serif italic">
                “Some people make the world brighter just by being in it... Today is a celebration of one such beautiful soul.”
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-300/80 text-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-xs tracking-wider uppercase text-amber-200/70 font-sans">28 September 2026</span>
              </div>
            </motion.div>

            {/* Quick Birthday Info Cards (As in reference) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-lg mx-auto lg:mx-0 pt-2"
            >
              {/* Card 1: Date */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-rose-400/30 transition-all hover:-translate-y-0.5">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center mb-1.5 text-rose-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide">28</span>
                <span className="text-[10px] sm:text-[11px] text-rose-200/70 uppercase tracking-wider font-light">September 2026</span>
              </div>

              {/* Card 2: A Special Day */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-amber-400/30 transition-all hover:-translate-y-0.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mb-1.5 text-amber-300">
                  <Cake className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">A Special</span>
                <span className="text-[10px] sm:text-[11px] text-amber-200/70 uppercase tracking-wider font-light">Day</span>
              </div>

              {/* Card 3: More Smiles */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3 sm:p-3.5 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-pink-400/30 transition-all hover:-translate-y-0.5">
                <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center mb-1.5 text-pink-400">
                  <Heart className="w-4 h-4 fill-pink-400/30" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">More Smiles</span>
                <span className="text-[10px] sm:text-[11px] text-pink-200/70 uppercase tracking-wider font-light">Always</span>
              </div>
            </motion.div>

            {/* CTAs: Explore + Wish Heart Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <button
                onClick={handleScrollToBirthday}
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-500 text-white font-medium text-sm tracking-wide shadow-[0_0_25px_rgba(244,63,94,0.45)] border border-rose-300/30 transition-all duration-300 flex items-center gap-2 transform active:scale-95"
              >
                <span>Explore Her Special Day</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleSendWish}
                aria-label="Send a heart wish"
                className={`relative px-4 py-3.5 rounded-full border transition-all duration-300 flex items-center gap-2 backdrop-blur-md ${
                  hasLiked
                    ? 'border-rose-400 bg-rose-500/20 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'border-white/15 bg-white/5 text-rose-100/90 hover:bg-white/10 hover:border-rose-400/40'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-400 text-rose-400 scale-110' : 'text-rose-300'} transition-transform`} />
                <span className="text-xs font-light tracking-wider">
                  {wishesCount > 1 ? `${wishesCount} Wishes ♡` : 'Send a Wish ♡'}
                </span>
              </button>
            </motion.div>

            {/* Ambient Candlelight Lantern Decor at bottom-left */}
            <div className="hidden sm:flex items-center gap-3 pt-4 text-xs text-amber-200/60 font-serif italic">
              <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute w-3.5 h-3.5 rounded-full bg-amber-400/30 blur-sm animate-ping" />
                <Flame className="w-5 h-5 text-amber-400 candle-flame" />
              </div>
              <span>Lit with warm wishes on your birthday</span>
            </div>
          </div>

          {/* Right Column: Layered Editorial Polaroid with Anjali's photo and romantic notes */}
          <div className="lg:col-span-6 z-20 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] cursor-pointer"
            >
              {/* Back layered paper shadow effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-[#2d1222]/90 border border-white/10 transform rotate-6 translate-x-3 translate-y-3 -z-10 shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))',
                }}
              />

              {/* Main Polaroid Frame */}
              <div className="polaroid-paper rounded-2xl p-4 sm:p-5 pb-8 sm:pb-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(244,63,94,0.25)] border border-white/90 relative">
                
                {/* Vintage Tape / Pin at top center */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm border border-white/40 rounded-sm shadow-sm transform -rotate-1 z-30" />

                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-900 shadow-inner">
                  <Image
                    src={getAssetPath('/images/anjali.jpg')}
                    alt="Anjali celebrating her birthday"
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle soft lens vignette overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>

                {/* Polaroid Bottom Caption Note */}
                <div className="mt-4 flex items-center justify-between text-stone-800">
                  <div className="font-script text-2xl sm:text-3xl text-stone-900 drop-shadow-sm">
                    Anjali ♡
                  </div>
                  <div className="text-[11px] font-sans font-light tracking-widest text-stone-600 uppercase">
                    28 · 09 · 2026
                  </div>
                </div>
              </div>

              {/* Pinned Note 1: Editorial Postcard Note on right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 w-44 sm:w-52 p-3 sm:p-4 rounded-xl bg-[#fffcf9] border border-amber-900/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transform rotate-6 z-30 pointer-events-none text-stone-800"
              >
                {/* Pushpin indicator */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-rose-500 shadow-sm border border-white" />
                <p className="font-script text-base sm:text-lg text-rose-950 font-normal leading-tight">
                  To Anjali
                </p>
                <p className="font-serif italic text-[11px] sm:text-xs text-stone-700 mt-1 leading-snug">
                  “May your days be as beautiful as your smile...”
                </p>
                <div className="text-right text-rose-500 text-xs mt-1">♡</div>
              </motion.div>

              {/* Handwritten Note 2: "Stay Happy Always... ♡" floating on left/bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -left-6 sm:-left-10 bottom-6 sm:bottom-10 z-30 pointer-events-none"
              >
                <div className="font-script text-2xl sm:text-3xl text-rose-200 drop-shadow-[0_0_12px_rgba(244,63,94,0.6)] transform -rotate-12">
                  Stay Happy Always... ♡
                </div>
              </motion.div>

              {/* Floating Glowing Heart Badge */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-3 w-10 h-10 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-300/40 flex items-center justify-center text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.4)] z-30"
              >
                <Heart className="w-5 h-5 fill-rose-400 text-rose-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
