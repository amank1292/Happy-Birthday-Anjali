'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, Sparkles, Feather } from 'lucide-react';

const moments = [
  {
    icon: Sun,
    quote: 'A little happiness.',
    reflection: 'May your heart always find gentle reasons to feel light, peaceful, and free.',
    tag: 'Thought 01',
    candleLight: 'rgba(255, 183, 3, 0.15)',
  },
  {
    icon: Heart,
    quote: 'More reasons to smile.',
    reflection: 'Because a genuine smile has an effortless way of warming even the quietest spaces.',
    tag: 'Thought 02',
    candleLight: 'rgba(244, 63, 94, 0.15)',
  },
  {
    icon: Sparkles,
    quote: 'Beautiful moments ahead.',
    reflection: 'Wishing you kind adventures, peaceful mornings, and dreams that unfold naturally.',
    tag: 'Thought 03',
    candleLight: 'rgba(251, 113, 133, 0.15)',
  },
  {
    icon: Feather,
    quote: 'Some people make ordinary days feel different.',
    reflection: 'And without even trying, your presence brings that rare, unmistakable grace.',
    tag: 'Thought 04',
    candleLight: 'rgba(224, 170, 255, 0.15)',
  },
];

export default function SpecialMoments() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="moments" className="relative py-24 sm:py-32 overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/25 text-xs text-rose-300 uppercase tracking-widest">
            <span>Subtle Reflections</span>
            <span className="text-rose-400">♡</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal">
            Little <span className="font-script text-5xl sm:text-6xl md:text-7xl text-rose-300">Things</span>
          </h2>
          <p className="text-sm sm:text-base text-rose-200/70 font-light font-serif italic max-w-md mx-auto leading-relaxed">
            “It is often the quietest, unspoken moments that hold the most meaningful warmth.”
          </p>
        </motion.div>

        {/* Moments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {moments.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeCard === idx;

            return (
              <motion.div
                key={item.quote}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                onClick={() => setActiveCard(isSelected ? null : idx)}
                className={`group relative rounded-3xl border border-white/10 bg-[#160813]/60 backdrop-blur-xl p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer overflow-hidden ${
                  isSelected ? 'border-rose-400/50 shadow-[0_0_35px_rgba(244,63,94,0.25)]' : 'hover:border-rose-400/30'
                }`}
              >
                {/* Subtle Candlelight Backdrop in Card */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: item.candleLight }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rose-300/50 font-light">
                      {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-white/10 flex items-center justify-center text-rose-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-rose-100 transition-colors leading-snug">
                      “{item.quote}”
                    </h3>
                    <p className="text-sm sm:text-base text-rose-200/75 font-light leading-relaxed">
                      {item.reflection}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-xs text-rose-400/60 group-hover:text-rose-300 transition-colors font-light">
                    <span>A thought for your journey</span>
                    <span>♡</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
