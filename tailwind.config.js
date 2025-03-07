/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#000000',
        'luxury-dark': {
          900: '#000000',
          800: '#000000',
          700: '#000000',
        },
        'luxury-gold': {
          100: '#FFF6E5',
          200: '#FFE4B5',
          300: '#DDB750', // Base warm gold
          400: '#D4AF37', // Royal gold
          500: '#C5A028', // Rich warm gold
          600: '#996515', // Deep gold
        },
        'luxury-gray': {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0A0A0A',
        },
      },
      boxShadow: {
        'luxury': '0 0 30px -10px rgba(253, 215, 0, 0.3)',
        'luxury-hover': '0 0 40px -5px rgba(253, 215, 0, 0.4)',
        'luxury-glow': '0 0 20px rgba(253, 215, 0, 0.2), 0 0 40px rgba(253, 215, 0, 0.1)',
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #D4AF37 0%, #C5A028 50%, #DDB750 100%)',
        'metallic-gradient-diagonal': 'linear-gradient(135deg, #FFF1C1, #FDD700, #DEA000)',
        'metallic-shine': 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.2) 50%, transparent 100%)',
        'vanta-gradient': 'radial-gradient(circle at center, #010101, #000000)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
