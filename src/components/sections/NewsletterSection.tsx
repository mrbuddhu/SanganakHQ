'use client';

import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

export default function NewsletterSection() {
  return (
    <section className="w-full py-20 sm:py-24 relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryCard className="p-8 sm:p-10 border border-white/[0.06] bg-black/30">
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">Get in touch</p>
            <h4 className="text-xl font-semibold text-white mb-2">Ready for results?</h4>
            <p className="text-white/60 mb-8 max-w-xl text-[15px]">
              See what we build, or book a call and tell us what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <LuxuryButton
                as="a"
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-auto text-center font-semibold py-3 px-6 sm:px-8"
              >
                Book a Strategy Call
              </LuxuryButton>
              <LuxuryButton
                as="a"
                href="/portfolio"
                variant="outline"
                className="w-full sm:w-auto text-center font-medium py-3 px-6 sm:px-8"
              >
                View Projects
              </LuxuryButton>
            </div>
          </div>
        </LuxuryCard>
      </div>
    </section>
  );
} 