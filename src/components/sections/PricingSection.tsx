'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Crown, Star } from 'lucide-react';
import Link from 'next/link';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

const plans = [
  {
    name: "Essentials",
    price: "Investment: $2,999",
    description: "Best for startup/brands ready to level up",
    slots: "2 weeks delivery",
    features: [
      "Branding essentials",
      "UI/UX Design",
      "Framer Landing Pages",
      "Lightning-fast execution"
    ],
    testimonial: {
      author: "CEO, XYZ Startup",
      quote: "We 5X'd our revenue after Sanganak's redesign!"
    },
    cta: "Upgrade My Brand Now",
    popular: false
  },
  {
    name: "Accelerator",
    price: "Investment: $4,999",
    description: "For businesses scaling aggressively",
    slots: "4 weeks delivery",
    features: [
        "Luxury Branding ",
        "Converting UI/UX Revamp",
        "Custom Webflow Dev",
        "Conversion-optimized RoI"
    ],
    testimonial: {
      author: "CMO, SaaS Company",
      quote: "Sanganak helped us break into a $1M ARR market."
    },
    cta: "Let's 10X My Business",
    popular: true
  },
  {
    name: "Domination",
    price: "Investment: $9,999",
    description: "For brands ready to dominate their industry",
    slots: "8 weeks delivery",
    features: [
      "Luxury Branding",
      "AI-driven UI/UX ",
      "Custom Webflow/NextJS Dev",
      "End-to-end digital makeover"
    ],
    testimonial: {
      author: "Founder, Global Brand",
      quote: "We outperformed our competitors within 60 days!"
    },
    cta: "Build My Million $ Brand",
    popular: false
  },
  {
    name: "Elite",
    price: "Investment: Get Quote",
    description: "For visionaries building next-gen digital empires",
    slots: "Custom Timeline",
    features: [
      "End-to-End Digital Makeover",
      "AI & Blockchain Integration",
      "Custom Enterprise Solutions",
      "Strategic Growth Partnership"
    ],
    testimonial: {
      author: "CEO, Fortune 500 Tech",
      quote: "Sanganak transformed our entire digital ecosystem!"
    },
    cta: "Build My Digital Empire",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <LuxuryHeading
            title="Premium Solutions"
            subtitle="Transform Your Digital Presence"
            className="bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Link
              key={plan.name}
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                <LuxuryCard 
                  className="h-full w-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-black border-luxury-gold-300/20 p-6 sm:p-8 flex flex-col"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-[#c6a255] mb-4 text-3xl">
                        {plan.name === "Essentials" && <Sparkles className="w-10 h-10" />}
                        {plan.name === "Accelerator" && <Zap className="w-10 h-10" />}
                        {plan.name === "Domination" && <Crown className="w-10 h-10" />}
                        {plan.name === "Elite" && <Star className="w-10 h-10" />}
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-xl font-semibold text-[#c6a255] mb-4">{plan.price}</div>
                      <div className="text-sm text-luxury-gold-300/70 mb-4">{plan.slots}</div>

                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-luxury-gold-300 mt-0.5 flex-shrink-0">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <LuxuryButton
                          href={CTA_URL}
                          isExternal
                          variant="primary"
                          size="sm"
                          className="w-full min-h-[48px] text-center"
                        >
                          <span className="truncate">{plan.cta}</span>
                          <ArrowRight className="w-4 h-4 ml-1 flex-shrink-0" />
                        </LuxuryButton>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="pt-4 border-t border-gray-800">
                        <blockquote className="text-sm italic text-gray-400">
                          "{plan.testimonial.quote}"
                          <footer className="mt-1.5 not-italic text-luxury-gold-300">— {plan.testimonial.author}</footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}