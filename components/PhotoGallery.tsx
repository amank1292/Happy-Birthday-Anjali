'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Heart, Sparkles, Camera } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';
import confetti from 'canvas-confetti';

export default function PhotoGallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1);

  const photoSrc = getAssetPath('/images/anjali.jpg');

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLiked) {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
      try {
        confetti({
          particleCount: 20,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#ff758f', '#fcd489', '#ffffff'],
          disableForReducedMotion: true,
        });
      } catch {
        // safe fallback
      }
    } else {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      
      {/* Background ambient rose & warm gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-rose-950/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/20 bg-rose-950/25 text-xs text-rose-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Featured Moment</span>
            <span className="text-rose-400">♡</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal">
            Moments in <span className="font-script text-5xl sm:text-6xl md:text-7xl text-rose-300">Light</span>
          </h2>
          <p className="text-sm sm:text-base text-rose-200/70 font-light max-w-md mx-auto leading-relaxed">
            A quiet, singular celebration of someone truly radiant.
          </p>
        </motion.div>

        {/* Single Premium Featured Polaroid Card */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="group relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] cursor-pointer"
            style={{ transform: 'rotate(-1.5deg)' }}
            onClick={() => setIsLightboxOpen(true)}
          >
            {/* Layered Paper Shadow Backdrop */}
            <div
              className="absolute inset-0 rounded-2xl bg-[#2a101f]/80 border border-white/10 transform rotate-3 translate-x-2 translate-y-3 -z-10 shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.85))',
              }}
            />

            {/* Main Polaroid Frame */}
            <div className="polaroid-paper rounded-2xl p-4 sm:p-6 pb-8 sm:pb-10 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85),0_0_40px_rgba(244,63,94,0.22)] border border-white/90 relative transition-all duration-500 group-hover:shadow-[0_30px_70px_rgba(244,63,94,0.3)]">
              
              {/* Vintage Tape Accent at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/45 backdrop-blur-sm border border-white/40 rounded-sm shadow-sm transform -rotate-1 z-20 pointer-events-none" />

              {/* Photo Area */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-900 shadow-inner">
                <Image
                  src={photoSrc}
                  alt="Birthday Radiance - Anjali"
                  fill
                  priority
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 440px, 480px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gentle Film Grain Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Lightbox Zoom Indicator */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Interactive Heart Button on Photo */}
                <button
                  onClick={handleLike}
                  className={`absolute top-3.5 right-3.5 px-3 py-1.5 rounded-full backdrop-blur-md border flex items-center gap-1.5 transition-all duration-300 z-10 ${
                    isLiked
                      ? 'bg-rose-500/90 border-rose-300 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                      : 'bg-black/45 border-white/20 text-white/90 hover:bg-black/60 hover:text-white'
                  }`}
                  aria-label="Like photo"
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
                  <span className="text-xs font-medium font-sans">{likeCount}</span>
                </button>
              </div>

              {/* Polaroid Editorial Caption */}
              <div className="mt-5 px-1 flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-script text-3xl sm:text-4xl text-stone-900 drop-shadow-sm font-normal">
                    Birthday Radiance
                  </h3>
                  <span className="text-rose-500 text-base font-light">♡</span>
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-stone-600 tracking-wide">
                  “A beautiful day, a beautiful smile ♡”
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-sans text-stone-400 font-light uppercase tracking-widest border-t border-stone-200/80 mt-2">
                  <span>28 September 2026</span>
                  <span className="text-stone-500 lowercase italic">captured in light</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 border border-white/20 cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Polaroid Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full polaroid-paper rounded-2xl p-4 sm:p-6 pb-6 sm:pb-8 shadow-2xl"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-black shadow-inner">
                <Image
                  src={photoSrc}
                  alt="Birthday Radiance - Anjali"
                  fill
                  sizes="600px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center space-y-1">
                <h3 className="font-script text-3xl sm:text-4xl text-stone-900">
                  Birthday Radiance
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-stone-600">
                  “A beautiful day, a beautiful smile ♡”
                </p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest pt-1">
                  28 · 09 · 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
