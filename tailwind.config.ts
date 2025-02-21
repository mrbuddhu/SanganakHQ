import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors
        'luxury-black': '#0A0A0A',
        'luxury-gold': {
          50: '#FFF9E5',
          100: '#FFF0B3',
          200: '#FFE680',
          300: '#FFD700', // Pure gold
          400: '#E6C200',
          500: '#CCAC00',
          600: '#B39700',
          700: '#998200',
          800: '#806C00',
          900: '#665700',
        },
        // Accent colors
        'luxury-gray': {
          50: '#F7F7F7',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(to right, var(--luxury-gold-300), var(--luxury-gold-400))',
      },
      boxShadow: {
        'luxury': '0 0 15px rgba(255, 215, 0, 0.3)',
        'luxury-hover': '0 0 20px rgba(255, 215, 0, 0.5)',
        'glow-gold': '0 0 15px rgba(218,165,32,0.5)',
      },
      animation: {
        'luxury-shine': 'luxury-shine 2s linear infinite',
        'luxury-float': 'luxury-float 3s ease-in-out infinite',
      },
      keyframes: {
        'luxury-shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'luxury-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
