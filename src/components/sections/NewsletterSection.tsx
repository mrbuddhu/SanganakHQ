'use client';

import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

export default function NewsletterSection() {
  return (
    <section className="w-full py-20 sm:py-24 relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryCard className="p-8 sm:p-10 border border-white/[0.08] hover:border-[#c6a255]/20 transition-colors duration-300 shadow-[0_0_40px_-12px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-semibold text-[#c6a255] mb-3">Ready for results?</h4>
            <p className="text-gray-300 mb-8 max-w-xl">
              See what we build, or book a call and tell us what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LuxuryButton
                as="a"
                href="/portfolio"
                variant="secondary"
                className="w-full sm:w-auto text-center font-bold py-3 px-8"
              >
                View Projects
              </LuxuryButton>
              <LuxuryButton
                as="a"
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center font-bold py-3 px-8"
              >
                Book a Strategy Call
              </LuxuryButton>
            </div>
          </div>
        </LuxuryCard>
      </div>
    </section>
  );
} 