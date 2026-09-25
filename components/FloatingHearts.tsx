'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

interface ClickHeart {
  id: number;
  x: number;
  y: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [clickHearts, setClickHearts] = useState<ClickHeart[]>([]);

  useEffect(() => {
    // Generate gentle background floating hearts
    const colors = [
      'rgba(251, 113, 133, 0.45)', // rose-400
      'rgba(244, 63, 94, 0.4)',   // rose-500
      'rgba(254, 205, 211, 0.35)', // rose-200
      'rgba(253, 227, 177, 0.3)',  // champagne
      'rgba(219, 39, 119, 0.35)',  // pink-600
    ];

    const initialHearts: FloatingHeart[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 96 + 2, // 2% to 98%
      size: Math.random() * 14 + 10, // 10px to 24px
      duration: Math.random() * 12 + 14, // 14s to 26s
      delay: Math.random() * 10,
      opacity: Math.random() * 0.45 + 0.25,
      color: colors[i % colors.length],
    }));

    setHearts(initialHearts);

    // Global click listener to create subtle floating hearts on user tap
    const handleClick = (e: MouseEvent) => {
      // Don't spawn if clicking input or sliders
      const target = e.target as HTMLElement;
      if (target?.tagName === 'INPUT' || target?.tagName === 'BUTTON') return;

      const newHeart: ClickHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setClickHearts((prev) => [...prev.slice(-15), newHeart]);

      setTimeout(() => {
        setClickHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Background ambient drifting hearts */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none pointer-events-none"
          style={{
            left: `${h.x}%`,
            bottom: '-40px',
            color: h.color,
            fontSize: `${h.size}px`,
            filter: 'drop-shadow(0 0 6px rgba(244, 63, 94, 0.3))',
          }}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{
            y: '-110vh',
            x: [0, (h.id % 2 === 0 ? 30 : -30), 0],
            opacity: [0, h.opacity, h.opacity, 0],
            scale: [0.8, 1.1, 0.9, 0.7],
            rotate: [0, (h.id % 2 === 0 ? 15 : -15), 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {h.id % 3 === 0 ? '♥' : '♡'}
        </motion.div>
      ))}

      {/* Interactive tap/click hearts */}
      <AnimatePresence>
        {clickHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.4, x: heart.x - 12, y: heart.y - 12 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              y: heart.y - 80,
              x: heart.x - 12 + (Math.random() * 40 - 20),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="fixed text-rose-400 text-xl font-light pointer-events-none select-none z-50 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
          >
            ♡
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
