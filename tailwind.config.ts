import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core colors
        'luxury-black': '#0A0A0A',
        'luxury-gold': {
          50: '#FFF9E5',
          100: '#FFF0B3',
          200: '#FFE680',
          300: 'rgb(var(--luxury-gold-300))', 
          400: 'rgb(var(--luxury-gold-400))', 
          500: 'rgb(var(--luxury-gold-500))', 
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
