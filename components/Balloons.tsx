'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BalloonItem {
  id: number;
  left: string;
  top?: string;
  bottom?: string;
  size: number;
  colorType: 'wine' | 'pink' | 'purple' | 'champagne' | 'heartWine' | 'heartGold';
  speed: number;
  delay: number;
  tilt: number;
  fixedHero?: boolean;
}

export default function Balloons() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      // Gentle subtle cursor displacement
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Defined balloons: some clustered around hero, some floating upward
  const heroBalloons: BalloonItem[] = [
    // Top right of hero (celebratory cluster matching reference)
    { id: 1, left: '82%', top: '6%', size: 105, colorType: 'wine', speed: 6, delay: 0, tilt: 8, fixedHero: true },
    { id: 2, left: '88%', top: '3%', size: 95, colorType: 'heartWine', speed: 7, delay: 0.8, tilt: -6, fixedHero: true },
    { id: 3, left: '92%', top: '14%', size: 85, colorType: 'champagne', speed: 5.5, delay: 1.2, tilt: 12, fixedHero: true },
    { id: 4, left: '78%', top: '18%', size: 75, colorType: 'pink', speed: 6.5, delay: 0.4, tilt: -10, fixedHero: true },
    { id: 5, left: '85%', top: '24%', size: 90, colorType: 'heartGold', speed: 8, delay: 1.5, tilt: 5, fixedHero: true },

    // Left side subtle ambient floating
    { id: 6, left: '4%', top: '15%', size: 80, colorType: 'purple', speed: 7, delay: 1, tilt: -8, fixedHero: true },
    { id: 7, left: '8%', top: '28%', size: 65, colorType: 'wine', speed: 8, delay: 2, tilt: 10, fixedHero: true },
  ];

  // Upward drifting balloons across page
  const floatingBalloons: BalloonItem[] = [
    { id: 8, left: '12%', size: 70, colorType: 'pink', speed: 28, delay: 2, tilt: 6 },
    { id: 9, left: '35%', size: 55, colorType: 'champagne', speed: 32, delay: 12, tilt: -5 },
    { id: 10, left: '70%', size: 65, colorType: 'wine', speed: 30, delay: 6, tilt: 8 },
    { id: 11, left: '90%', size: 60, colorType: 'purple', speed: 26, delay: 18, tilt: -7 },
  ];

  const getGradients = (type: BalloonItem['colorType']) => {
    switch (type) {
      case 'wine':
        return {
          body: 'radial-gradient(circle at 35% 30%, #ff4d6d 0%, #a4133c 45%, #590d22 80%, #20040b 100%)',
          highlight: 'rgba(255, 255, 255, 0.65)',
          glow: 'rgba(164, 19, 60, 0.4)',
        };
      case 'pink':
        return {
          body: 'radial-gradient(circle at 35% 30%, #ffccd5 0%, #ff758f 45%, #c9184a 80%, #590d22 100%)',
          highlight: 'rgba(255, 255, 255, 0.75)',
          glow: 'rgba(255, 117, 143, 0.4)',
        };
      case 'purple':
        return {
          body: 'radial-gradient(circle at 35% 30%, #e0aaff 0%, #9d4edd 50%, #5a189a 85%, #240046 100%)',
          highlight: 'rgba(255, 255, 255, 0.7)',
          glow: 'rgba(157, 78, 221, 0.35)',
        };
      case 'champagne':
      case 'heartGold':
        return {
          body: 'radial-gradient(circle at 35% 30%, #fff3b0 0%, #f4a261 45%, #e76f51 80%, #6f1d1b 100%)',
          highlight: 'rgba(255, 255, 255, 0.8)',
          glow: 'rgba(244, 162, 97, 0.4)',
        };
      case 'heartWine':
      default:
        return {
          body: 'radial-gradient(circle at 35% 30%, #ff758f 0%, #c9184a 50%, #800f2f 85%, #3d0814 100%)',
          highlight: 'rgba(255, 255, 255, 0.7)',
          glow: 'rgba(201, 24, 74, 0.4)',
        };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[6] overflow-hidden select-none">
      {/* Hero cluster balloons */}
      {heroBalloons.map((b) => {
        const grads = getGradients(b.colorType);
        return (
          <motion.div
            key={b.id}
            className="absolute hidden md:block"
            style={{
              left: b.left,
              top: b.top,
              width: `${b.size}px`,
              filter: `drop-shadow(0 15px 25px ${grads.glow})`,
            }}
            animate={
              isMobile
                ? {}
                : {
                    x: mouseOffset.x * (b.size / 70),
                    y: [0, -14, 0],
                    rotate: [b.tilt - 2, b.tilt + 2, b.tilt - 2],
                  }
            }
            transition={{
              y: { duration: b.speed, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
              rotate: { duration: b.speed + 1.5, repeat: Infinity, ease: 'easeInOut', delay: b.delay },
              x: { duration: 0.6, ease: 'easeOut' },
            }}
          >
            {/* Balloon Body */}
            <div
              className="relative w-full rounded-full"
              style={{
                height: `${b.size * 1.18}px`,
                background: grads.body,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.5), inset 3px 3px 10px rgba(255,255,255,0.4)',
              }}
            >
              {/* Specular 3D Reflection */}
              <div
                className="absolute top-[16%] left-[20%] w-[25%] h-[30%] rounded-full rotate-[-25deg]"
                style={{
                  background: `radial-gradient(ellipse at center, ${grads.highlight} 0%, rgba(255,255,255,0) 75%)`,
                  filter: 'blur(1.5px)',
                }}
              />
              {/* Knot */}
              <div
                className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-[7px] h-[5px] rounded-sm"
                style={{ background: '#7209b7' }}
              />
            </div>
            {/* Delicate String */}
            <svg
              className="w-full overflow-visible opacity-50"
              style={{ height: '65px' }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 0 Q 42 35 55 60 T 50 100"
                fill="none"
                stroke="rgba(255, 230, 240, 0.45)"
                strokeWidth="1.2"
              />
            </svg>
          </motion.div>
        );
      })}

      {/* Slowly ascending background balloons */}
      {floatingBalloons.map((b) => {
        const grads = getGradients(b.colorType);
        return (
          <motion.div
            key={b.id}
            className="absolute"
            style={{
              left: b.left,
              bottom: '-120px',
              width: `${b.size}px`,
              filter: `drop-shadow(0 10px 18px ${grads.glow})`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: '-120vh',
              x: [0, (b.id % 2 === 0 ? 25 : -25), 0],
              opacity: [0, 0.75, 0.75, 0],
              rotate: [b.tilt, -b.tilt, b.tilt],
            }}
            transition={{
              duration: b.speed,
              delay: b.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div
              className="relative w-full rounded-full"
              style={{
                height: `${b.size * 1.18}px`,
                background: grads.body,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                boxShadow: 'inset -4px -4px 12px rgba(0,0,0,0.4), inset 2px 2px 8px rgba(255,255,255,0.35)',
              }}
            >
              <div
                className="absolute top-[16%] left-[20%] w-[25%] h-[30%] rounded-full rotate-[-25deg]"
                style={{
                  background: `radial-gradient(ellipse at center, ${grads.highlight} 0%, rgba(255,255,255,0) 75%)`,
                  filter: 'blur(1px)',
                }}
              />
            </div>
            <svg
              className="w-full overflow-visible opacity-40"
              style={{ height: '45px' }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 0 Q 45 40 54 70 T 50 100"
                fill="none"
                stroke="rgba(255, 230, 240, 0.35)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
