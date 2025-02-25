'use client';

import { motion } from 'framer-motion';
import classNames from 'classnames';

interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function LuxuryCard({ children, className = '', delay = 0 }: LuxuryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={classNames(
        'luxury-card luxury-shine',
        'relative bg-black/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
