'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Crown, Star } from 'lucide-react';
import Link from 'next/link';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

const plans = [
  {
    name: "Essentials",
    price: "Investment: $2,999+",
    description: "Best for startup/brands ready to level up",
    slots: "2 weeks delivery",
    features: [
      "Branding essentials",
      "UI/UX Design",
      "JS/Framer Landing Pages",
      "Lightning-fast execution"
    ],
    testimonial: {
      author: "Shyam Sharma @Interio",
      quote: "Bookings up 7x with our luxury design system."
    },
    cta: "Upgrade My Brand Now",
    popular: false
  },
  {
    name: "Accelerator",
    price: "Investment: $4,999+",
    description: "For businesses scaling aggressively",
    slots: "4 weeks delivery",
    features: [
        "Luxury Branding ",
        "Converting UI/UX Revamp",
        "JS/Shopify/Webflow Dev",
        "Conversion-optimized RoI"
    ],
    testimonial: {
      author: "Shubham Kumar @GlobalEats",
      quote: "5x order growth with our seamless global platform."
    },
    cta: "Let's 10X My Business",
    popular: false
  },
  {
    name: "Domination",
    price: "Investment: $9,999+",
    description: "For brands ready to dominate their industry",
    slots: "8 weeks delivery",
    features: [
      "Luxury Branding",
      "AI-driven UI/UX ",
      "Full Customized App",
      "End-to-end digital makeover"
    ],
    testimonial: {
      author: "Ankit Kumar @Burgerrr",
      quote: "6x order growth in just 45 days due to all round solutions."
    },
    cta: "Build My Million $ Brand",
    popular: true
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
      author: "Rahul Kumar @NFTCollect",
      quote: "8x trading volume growth with AI-powered tools."
    },
    cta: "Build My Digital Empire",
    popular: false
  }
];

export default function PricingSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <LuxuryHeading
            title="Premium Solutions"
            subtitle="Transform Your Digital Presence"
            className="bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Link
              key={plan.name}
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full"
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full h-full"
              >
                <LuxuryCard 
                  className="h-full w-full transition-all duration-300 hover:scale-105 hover:shadow-xl bg-black border-luxury-gold-300/20 p-4 md:p-6 flex flex-col justify-between relative"
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-luxury-gold-300 text-black px-6 py-1.5 rounded-full text-sm font-medium z-50 mt-6 mr-6">
                      Most Popular
                    </div>
                  )}
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="text-[#c6a255] mb-4 text-3xl"
                      >
                        {plan.name === "Essentials" && <Sparkles className="w-10 h-10" />}
                        {plan.name === "Accelerator" && <Zap className="w-10 h-10" />}
                        {plan.name === "Domination" && <Crown className="w-10 h-10" />}
                        {plan.name === "Elite" && <Star className="w-10 h-10" />}
                      </motion.div>
                      <motion.h3
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-3"
                      >
                        {plan.name}
                      </motion.h3>
                      <motion.p
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        className="text-gray-300 mb-4 min-h-[48px]"
                      >
                        {plan.description}
                      </motion.p>
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        className="text-xl font-semibold text-[#c6a255] mb-3"
                      >
                        {plan.price}
                      </motion.div>
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        className="text-sm text-luxury-gold-300/70 mb-6"
                      >
                        {plan.slots}
                      </motion.div>

                      <motion.ul
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                        className="space-y-3 mb-6"
                      >
                        {plan.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            variants={contentVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.8 + (i * 0.1) }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-luxury-gold-300 mt-0.5 flex-shrink-0">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
                        className="mt-6"
                      >
                        <LuxuryButton
                          href={CTA_URL}
                          isExternal
                          variant="primary"
                          size="sm"
                          className="w-full min-h-[48px] text-center"
                        >
                          <span className="truncate">{plan.cta}</span>
                        </LuxuryButton>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1.3 }}
                      className="mt-6"
                    >
                      <div className="pt-4 border-t border-gray-800">
                        <blockquote className="text-sm italic text-gray-400">
                          "{plan.testimonial.quote}"
                          <footer className="mt-1.5 not-italic text-luxury-gold-300">— {plan.testimonial.author}</footer>
                        </blockquote>
                      </div>
                    </motion.div>
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