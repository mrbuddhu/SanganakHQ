'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated line container */}
        <div className="w-64 h-[2px] relative">
          {/* Base line with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold-300/50 to-transparent" />
          
          {/* Moving shimmer effect */}
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-luxury-gold-400 to-transparent"
               style={{ backgroundSize: '200% 100%' }} />
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-luxury-gold-300/20 blur-md" />
          
          {/* Particles */}
          <div className="absolute -top-1 left-1/2 w-1 h-1 bg-luxury-gold-300 rounded-full animate-float-1" />
          <div className="absolute -bottom-1 left-1/3 w-1 h-1 bg-luxury-gold-300 rounded-full animate-float-2" />
          <div className="absolute -top-2 right-1/3 w-1 h-1 bg-luxury-gold-300 rounded-full animate-float-3" />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap flex flex-col items-center gap-2">
          <span className="text-sm text-luxury-gold-300 font-light tracking-[0.3em] animate-pulse">
            LOADING
          </span>
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-luxury-gold-300/80 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-1 h-1 bg-luxury-gold-300/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-1 h-1 bg-luxury-gold-300/80 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
