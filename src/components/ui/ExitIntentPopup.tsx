'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Clock, CheckCircle } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

interface ExitIntentPopupProps {
  isEnabled?: boolean;
}

export default function ExitIntentPopup({ isEnabled = true }: ExitIntentPopupProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if user is on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const triggerPopup = useCallback(() => {
    if (!hasShown && isEnabled) {
      setShowPopup(true);
      setHasShown(true);
    }
  }, [hasShown, isEnabled]);

  useEffect(() => {
    if (!isEnabled || hasShown) return;

    // Desktop: Mouse leave detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        triggerPopup();
      }
    };

    // Mobile: Scroll-based exit intent
    let lastScrollY = 0;
    let scrollUpCount = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If user scrolls up significantly (possible exit intent)
      if (currentScrollY < lastScrollY - 50) {
        scrollUpCount++;
        // Trigger after multiple upward scrolls
        if (scrollUpCount >= 3 && currentScrollY < 200) {
          triggerPopup();
        }
      } else {
        scrollUpCount = 0;
      }
      
      lastScrollY = currentScrollY;
    };

    // Mobile: Page visibility change (switching tabs/apps)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Small delay to catch when user comes back
        setTimeout(() => {
          if (document.visibilityState === 'visible') {
            triggerPopup();
          }
        }, 1000);
      }
    };

    // Mobile: Time-based trigger (fallback)
    const timeBasedTrigger = setTimeout(() => {
      if (isMobile && !hasShown) {
        triggerPopup();
      }
    }, 30000); // 30 seconds

    // Desktop: Add mouse leave listener
    if (!isMobile) {
      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
      }, 3000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(timeBasedTrigger);
      };
    } else {
      // Mobile: Add scroll and visibility listeners
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        clearTimeout(timeBasedTrigger);
      };
    }
  }, [isEnabled, hasShown, isMobile, triggerPopup]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-[#c6a255]/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full mx-4 shadow-2xl shadow-[#c6a255]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#c6a255] transition-colors duration-200 z-10 p-1"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Urgency indicator */}
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-4">
              <Clock size={14} className="animate-pulse sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Special Offer for First-Time Clients</span>
            </div>

            {/* Slot availability warning */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-center gap-2 text-red-400 text-sm font-medium">
                <span className="animate-pulse">🔥</span>
                <span className="text-xs sm:text-sm">Only 1 slot left this week!</span>
              </div>
            </div>

            {/* Main content */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Zap size={32} className="text-[#c6a255] sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Get 25% Off Your First Project
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                New clients get an exclusive 25% discount on their first premium project with Sanganak.
              </p>
              <div className="flex items-center justify-center gap-2 text-[#c6a255] text-sm font-medium">
                <CheckCircle size={16} className="sm:w-4 sm:h-4" />
                <span>Premium Quality • Guaranteed Results</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <LuxuryButton
                as="a"
                href="https://cal.com/sanganak/exclusive-discount"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-bold text-sm sm:text-base py-2 sm:py-3"
                onClick={closePopup}
              >
                Claim 25% First-Time Discount
              </LuxuryButton>
              
              <button
                onClick={closePopup}
                className="w-full text-xs sm:text-sm text-gray-400 hover:text-[#c6a255] transition-colors duration-200 py-1"
              >
                No thanks, I'll pay full price
              </button>
            </div>

            {/* Trust signal */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">
                🔒 Exclusive offer for first-time clients only
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 