/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080306",
        surface: "#12070e",
        surfaceGlass: "rgba(22, 10, 18, 0.65)",
        wine: {
          950: "#090306",
          900: "#14070e",
          850: "#1d0b15",
          800: "#2a1020",
          700: "#441834",
          600: "#63224b",
          500: "#862c65",
        },
        rose: {
          900: "#4c0519",
          800: "#881337",
          600: "#e11d48",
          500: "#f43f5e",
          400: "#fb7185",
          300: "#fda4af",
          200: "#fecdd3",
          100: "#ffe4e6",
          50: "#fff1f2",
        },
        champagne: {
          50: "#fffdf9",
          100: "#fff9ee",
          200: "#feefd2",
          300: "#fde3b1",
          400: "#fcd489",
          500: "#f6be59",
        },
        candle: {
          light: "#ffbe0b",
          glow: "#fb5607",
          warmth: "#ffeedd",
        }
      },
      fontFamily: {
        script: ["var(--font-script)", "'Alex Brush'", "'Great Vibes'", "cursive"],
        serif: ["var(--font-serif)", "'Playfair Display'", "'Cormorant Garamond'", "serif"],
        sans: ["var(--font-sans)", "'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'candle-flicker': 'candleFlicker 2.5s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.04)' },
        },
        candleFlicker: {
          '0%': { opacity: '0.75', transform: 'scale(0.98)' },
          '25%': { opacity: '0.9', transform: 'scale(1.02)' },
          '50%': { opacity: '0.8', transform: 'scale(0.99)' },
          '75%': { opacity: '1', transform: 'scale(1.04)' },
          '100%': { opacity: '0.85', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'polaroid': '0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 40px rgba(251, 113, 133, 0.15)',
        'candle-glow': '0 0 50px 10px rgba(255, 190, 11, 0.25)',
        'rose-glow': '0 0 35px 5px rgba(244, 63, 94, 0.25)',
      }
    },
  },
  plugins: [],
};
