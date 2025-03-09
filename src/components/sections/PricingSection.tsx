'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Crown, Star } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

const plans = [
  {
    name: "Essentials",
    price: "Starting at $2,999",
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
    price: "Starting at $4,999",
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
    price: "Starting at $9,999",
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
    price: "Custom Quote",
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <LuxuryHeading
            title="Premium Solutions"
            subtitle="Transform Your Digital Presence"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col gap-4">
                <LuxuryCard 
                  className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-black border-luxury-gold-300/20"
                >
                  <div className="p-0.5 h-full flex flex-col">
                    <div className="text-[#c6a255] mb-3 text-2xl">
                      {plan.name === "Essentials" && <Sparkles className="w-8 h-8" />}
                      {plan.name === "Accelerator" && <Zap className="w-8 h-8" />}
                      {plan.name === "Domination" && <Crown className="w-8 h-8" />}
                      {plan.name === "Elite" && <Star className="w-8 h-8" />}
                    </div>
                    <div className="space-y-2">
                      <h3 className={`text-2xl font-bold ${plan.popular ? 'text-luxury-gold-300' : 'text-luxury-gold-300'}`}>
                        {plan.name.split('-').map((part, i) => (
                          <span key={i}>
                            {i === 0 ? <strong>{part}</strong> : part}
                            {i < plan.name.split('-').length - 1 && ' - '}
                          </span>
                        ))}
                      </h3>
                      <p className="text-sm text-gray-300 leading-snug">{plan.description}</p>
                      <div className="pt-4 border-t border-gray-800">
                        <div className="text-xl font-bold text-white leading-tight">{plan.price}</div>
                        <div className="text-sm text-luxury-gold-300/70">{plan.slots}</div>
                      </div>
                    </div>

                    <ul className="space-y-1 mt-4 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-luxury-gold-300 mt-0.5 flex-shrink-0">•</span>
                          <span className="text-gray-300 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-gray-800 mt-auto">
                      <blockquote className="text-sm italic text-gray-400 leading-snug mb-6">
                        "{plan.testimonial.quote}"
                        <footer className="mt-1.5 not-italic text-luxury-gold-300">— {plan.testimonial.author}</footer>
                      </blockquote>
                    </div>
                  </div>
                </LuxuryCard>
                <LuxuryButton
                  href={CTA_URL}
                  isExternal
                  variant="primary"
                  size="sm"
                  as="a"
                  className="w-[90%] mx-auto px-6 py-3 flex items-center justify-center text-sm min-h-[48px] hover:scale-105 transition-transform duration-300 whitespace-normal text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-luxury-gold-300/50 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="truncate">{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-1 flex-shrink-0" />
                </LuxuryButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
