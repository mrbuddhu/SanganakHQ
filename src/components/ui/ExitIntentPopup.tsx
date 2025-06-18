'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Clock, CheckCircle } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

interface ExitIntentPopupProps {
  isEnabled?: boolean;
}

export default function ExitIntentPopup({ isEnabled = true }: ExitIntentPopupProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!isEnabled || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Add a small delay before enabling to avoid immediate triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isEnabled, hasShown]);

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
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-[#c6a255]/30 rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl shadow-[#c6a255]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#c6a255] transition-colors duration-200 z-10"
            >
              <X size={24} />
            </button>

            {/* Urgency indicator */}
            <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-4">
              <Clock size={16} className="animate-pulse" />
              <span>Wait! Don't Miss This Opportunity</span>
            </div>

            {/* Main content */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-[#c6a255]/10 p-3 rounded-full">
                  <Zap className="w-8 h-8 text-[#c6a255]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-transparent bg-clip-text mb-3">
                Exclusive 30% Off Launch Offer
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Since you're serious about transforming your business, we're offering an exclusive <span className="text-[#c6a255] font-semibold">30% discount</span> on any premium package - but only for the next 24 hours.
              </p>

              {/* Benefits */}
              <div className="text-left mb-6">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#c6a255] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Save up to ₹3,000 on premium packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#c6a255] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Priority delivery (jump the queue)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#c6a255] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Free 1-hour strategy consultation (₹5,000 value)</span>
                  </div>
                </div>
              </div>

              {/* Countdown timer effect */}
              <div className="bg-gradient-to-r from-[#c6a255]/10 to-transparent p-4 rounded-lg border border-[#c6a255]/20 mb-6">
                <div className="flex items-center justify-center gap-2 text-[#c6a255]">
                  <Clock size={16} className="animate-pulse" />
                  <span className="text-sm font-medium">This offer expires in 24 hours</span>
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
                className="w-full text-center font-bold"
                onClick={closePopup}
              >
                Claim 30% Discount Now
              </LuxuryButton>
              
              <button
                onClick={closePopup}
                className="w-full text-sm text-gray-400 hover:text-[#c6a255] transition-colors duration-200"
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