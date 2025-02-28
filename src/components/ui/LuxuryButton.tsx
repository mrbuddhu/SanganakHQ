'use client';

import { ButtonHTMLAttributes, forwardRef, ReactNode, ElementType } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LuxuryButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  as?: ElementType;
  href?: string;
  isExternal?: boolean;
}

const LuxuryButton = forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, as: Component = 'button', href, isExternal, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-[0_0_25px_rgba(198,162,85,0.5)] active:scale-95';
    
    const sizeStyles = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg'
    };

    const variantStyles = {
      primary: 'bg-[#c6a255] text-black hover:bg-[#d4b06a]',
      secondary: 'bg-transparent border-2 border-[#c6a255] text-[#c6a255] hover:bg-[#c6a255]/10',
      outline: 'bg-transparent border border-[#c6a255] text-[#c6a255] hover:bg-[#c6a255]/10'
    };

    const MotionComponent = motion[Component === 'button' ? 'button' : 'div'];

    const buttonProps = {
      ...props,
      ...(href && {
        as: 'a',
        href,
        target: isExternal ? '_blank' : undefined,
        rel: isExternal ? 'noopener noreferrer' : undefined
      })
    };

    return (
      <MotionComponent
        ref={ref}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...buttonProps}
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 w-full h-full rounded-full">
          <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000">
            <span className="absolute inset-0 bg-metallic-shine animate-shimmer rounded-full" />
          </span>
        </span>

        {/* Button content with glow effect */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {variant === 'primary' && (
            <span className="absolute inset-0 bg-luxury-gold-100/20 blur-md animate-glow rounded-full" />
          )}
          {children}
        </span>

        {/* Border glow for secondary variant */}
        {(variant === 'secondary' || variant === 'outline') && (
          <span className="absolute inset-0 border border-luxury-gold-300/50 blur-[1px] rounded-full" />
        )}
      </MotionComponent>
    );
  }
);

LuxuryButton.displayName = 'LuxuryButton';

export default LuxuryButton;