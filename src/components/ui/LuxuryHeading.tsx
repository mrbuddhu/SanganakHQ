'use client';

import { motion } from 'framer-motion';

interface LuxuryHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function LuxuryHeading({ 
  title, 
  subtitle, 
  align = 'center' 
}: LuxuryHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`mb-16 ${alignClass[align]}`}
    >
      {/* Decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-luxury-gold-300 to-transparent" />
        <div className="w-3 h-3 rounded-full bg-luxury-gold-300 shadow-glow-gold" />
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-luxury-gold-300 to-transparent" />
      </div>

      {/* Title with enhanced gradient and glow */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4 sm:mb-6 drop-shadow-[0_0_10px_rgba(218,165,32,0.3)] tracking-tight"
        initial={{ backgroundPosition: '200% center' }}
        whileInView={{ backgroundPosition: '0% center' }}
        transition={{ duration: 2 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle with enhanced visibility */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Bottom accent */}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-luxury-gold-300/30 to-transparent" />
      </div>
    </motion.div>
  );
}
