'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Smile, Star, Heart } from 'lucide-react';

const cards = [
  {
    icon: Calendar,
    title: '28 September 2026',
    subtitle: 'The Special Date',
    description: 'A day marked with golden light and heartfelt thoughts.',
    accent: 'from-rose-500/20 to-pink-500/10',
    iconColor: 'text-rose-400',
    borderColor: 'group-hover:border-rose-400/40',
  },
  {
    icon: Sparkles,
    title: 'A Special Day',
    subtitle: 'Celebration of You',
    description: 'Because some souls bring a quiet brightness to everyone around them.',
    accent: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-300',
    borderColor: 'group-hover:border-amber-400/40',
  },
  {
    icon: Smile,
    title: 'More Smiles',
    subtitle: 'Wishes For You',
    description: 'May every quiet moment bring genuine warmth, peace and laughter.',
    accent: 'from-pink-500/20 to-purple-500/10',
    iconColor: 'text-pink-400',
    borderColor: 'group-hover:border-pink-400/40',
  },
  {
    icon: Heart,
    title: 'Always',
    subtitle: 'A Constant Wish',
    description: 'May the year ahead be as graceful, inspiring and joyful as you are.',
    accent: 'from-rose-600/20 to-wine-600/10',
    iconColor: 'text-rose-300',
    borderColor: 'group-hover:border-rose-300/40',
  },
];

export default function BirthdayCards() {
  return (
    <section id="birthday" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/20 bg-rose-950/20 text-xs text-rose-300 uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 text-rose-400 fill-rose-400/30" />
            <span>Honoring The Day</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
            A Day Worth <span className="font-script text-4xl sm:text-5xl md:text-6xl text-rose-300">Remembering</span>
          </h2>
          <p className="text-sm sm:text-base text-rose-200/70 font-light max-w-lg mx-auto leading-relaxed">
            Every year has its milestones, but September 28 brings something uniquely radiant.
          </p>
        </motion.div>

        {/* 4 Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${card.borderColor}`}
              >
                {/* Subtle top inner gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-5">
                  <div className="space-y-4">
                    {/* Minimal line icon in glass circle */}
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-sans uppercase tracking-widest text-rose-300/60 block font-light">
                        {card.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium text-white group-hover:text-rose-100 transition-colors">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-rose-200/70 font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-xs text-rose-300/50 group-hover:text-rose-300 transition-colors font-light">
                    <span>Celebration Details</span>
                    <span className="ml-1 opacity-60">♡</span>
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
