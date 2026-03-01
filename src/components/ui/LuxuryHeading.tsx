'use client';

import { motion } from 'framer-motion';

interface LuxuryHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  /** If set, show a small overline above the title (e.g. "WHAT WE DO") */
  overline?: string;
}

export default function LuxuryHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
  overline,
}: LuxuryHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className={`mb-12 sm:mb-14 ${alignClass[align]} ${className}`}
    >
      {overline && (
        <p
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {overline}
        </p>
      )}

      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15] max-w-2xl"
        style={{
          fontFamily: 'var(--font-luxury), Georgia, serif',
          ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
          }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Single thin rule — restrained */}
      <div
        className={`mt-6 h-px w-12 bg-gradient-to-r ${align === 'center' ? 'mx-auto from-transparent via-white/20 to-transparent' : 'from-white/20 to-transparent'}`}
        aria-hidden
      />
    </motion.div>
  );
}
