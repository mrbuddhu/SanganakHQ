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
              <span className="text-xs sm:text-sm">Wait! Don't Miss This Opportunity</span>
            </div>

            {/* Main content */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-[#c6a255]/10 p-2 sm:p-3 rounded-full">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#c6a255]" />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-transparent bg-clip-text mb-3">
                Exclusive 30% Off Anniversary Month
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Since you're serious about transforming your business, we're offering an exclusive <span className="text-[#c6a255] font-semibold">30% discount</span> on any premium package - but only for the next 24 hours.
              </p>

              {/* Benefits */}
              <div className="text-left mb-6">
                <div className="grid gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle size={14} className="text-[#c6a255] flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm text-gray-300">30% discount on all premium packages</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle size={14} className="text-[#c6a255] flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm text-gray-300">Priority delivery (jump the queue)</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle size={14} className="text-[#c6a255] flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm text-gray-300">Free 1-hour strategy consultation ($60 value)</span>
                  </div>
                </div>
              </div>

              {/* Countdown timer effect */}
              <div className="bg-gradient-to-r from-[#c6a255]/10 to-transparent p-3 sm:p-4 rounded-lg border border-[#c6a255]/20 mb-6">
                <div className="flex items-center justify-center gap-2 text-[#c6a255]">
                  <Clock size={14} className="animate-pulse sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">This offer expires in 24 hours</span>
                </div>
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
                Claim 30% Discount Now
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
                🔒 This offer is exclusive to first-time visitors
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 