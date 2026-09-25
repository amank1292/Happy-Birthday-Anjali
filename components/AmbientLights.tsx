'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientLights() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none">
      {/* Top Center Rose/Burgundy Glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(225, 29, 72, 0.45) 0%, rgba(136, 19, 55, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* Hero Left Candle Warmth Glow */}
      <div 
        className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[130px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(255, 183, 3, 0.4) 0%, rgba(251, 133, 0, 0.2) 50%, transparent 80%)',
        }}
      />

      {/* Hero Right Balloon Rose Glow */}
      <div 
        className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.4) 0%, rgba(157, 23, 77, 0.25) 50%, transparent 80%)',
        }}
      />

      {/* Floating Bokeh Orbs */}
      <motion.div
        className="absolute w-24 h-24 rounded-full blur-[35px] bg-rose-400/20 top-[35%] left-[22%]"
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full blur-[45px] bg-amber-400/15 top-[60%] right-[18%]"
        animate={{
          y: [20, -20, 20],
          x: [12, -12, 12],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute w-20 h-20 rounded-full blur-[30px] bg-pink-300/25 top-[75%] left-[10%]"
        animate={{
          y: [-10, 20, -10],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
