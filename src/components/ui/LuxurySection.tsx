'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LuxurySectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export default function LuxurySection({ 
  children, 
  className = '',
  fullWidth = false,
  noPadding = false
}: LuxurySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={cn(
        'relative',
        !noPadding && 'py-16 md:py-24',
        !fullWidth && 'container mx-auto px-4 md:px-6',
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold-900/5 to-transparent -z-10" />
      
      {/* Content */}
      {children}
    </motion.section>
  );
}
