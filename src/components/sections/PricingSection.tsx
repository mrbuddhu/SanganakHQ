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
    description: "Perfect for startups with $10k+ monthly revenue looking to scale",
    slots: "2 weeks delivery",
    features: [
      "Professional Logo Design",
      "Brand Colors & Typography",
      "High-Converting Landing Page",
      "Mobile-First Design",
      "Basic SEO Setup"
    ],
    testimonial: {
      author: "Shyam Sharma @Interio",
      quote: "Our monthly revenue grew from $15k to $105k in just 3 months after the brand transformation."
    },
    cta: "Unlock Essentials",
    popular: false,
    availability: "Only 3 spots left this month"
  },
  {
    name: "Accelerator",
    price: "Investment: $4,999+",
    description: "For businesses making $50k+ monthly, ready to dominate their market",
    slots: "4 weeks delivery",
    features: [
      "Complete Brand Identity",
      "Webflow/Shopify Website",
      "Professional UI Design",
      "Content Writing",
      "Social Media Templates"
    ],
    testimonial: {
      author: "Shubham Kumar @GlobalEats",
      quote: "Our daily orders increased from 500 to 2,500 in 2 months with their full-service solution."
    },
    cta: "Boost My Brand",
    popular: false,
    availability: "Only 2 spots left this month"
  },
  {
    name: "Domination",
    price: "Investment: $9,999+",
    description: "For established brands with $100k+ monthly revenue targeting market leadership",
    slots: "8 weeks delivery",
    features: [
      "Custom Next.js Website",
      "React Native Mobile App",
      "Backend Development",
      "Admin Dashboard",
      "API Integration",
      "3 Months Support"
    ],
    testimonial: {
      author: "Ankit Kumar @Burgerrr",
      quote: "Our monthly revenue skyrocketed from $120k to $720k in just 45 days with their end-to-end solution."
    },
    cta: "Claim Market Leadership",
    popular: true,
    availability: "Only 1 spot left this month"
  },
  {
    name: "Elite",
    price: "Investment: Get Quote",
    description: "For enterprises with $500k+ monthly revenue seeking complete digital transformation",
    slots: "Custom Timeline",
    features: [
      "Enterprise Software Development",
      "Custom Features & Integration",
      "Dedicated Development Team",
      "24/7 Priority Support",
      "Regular Updates & Maintenance",
      "Long-term Partnership"
    ],
    testimonial: {
      author: "Rahul Kumar @NFTCollect",
      quote: "Our platform's monthly volume grew from $2M to $16M with their comprehensive digital solution."
    },
    cta: "Unlock Elite Partnership",
    popular: false,
    availability: "By application only"
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden lg:block mt-16 mb-24 overflow-x-auto"
        >
          <LuxuryCard className="p-0 overflow-hidden">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-[#c6a255]/20">
                  <th className="py-4 px-6 text-left text-[#c6a255] font-medium border-r border-[#c6a255]/20 hover:bg-[#c6a255]/5 transition-colors duration-300">Features</th>
                  {plans.map((plan, index) => (
                    <th key={plan.name} className={`text-center py-4 px-6 text-[#c6a255] font-medium ${index !== plans.length - 1 ? 'border-r border-[#c6a255]/20' : ''} hover:bg-[#c6a255]/5 transition-colors duration-300`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#c6a255]/20">
                  <td className="py-4 px-6 text-gray-300 border-r border-[#c6a255]/20 hover:bg-[#c6a255]/5 transition-colors duration-300">Investment</td>
                  {plans.map((plan, index) => (
                    <td key={plan.name} className={`text-center py-4 px-6 text-gray-300 ${index !== plans.length - 1 ? 'border-r border-[#c6a255]/20' : ''} hover:bg-[#c6a255]/5 transition-colors duration-300`}>
                      {plan.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#c6a255]/20">
                  <td className="py-4 px-6 text-gray-300 border-r border-[#c6a255]/20 hover:bg-[#c6a255]/5 transition-colors duration-300">Delivery Time</td>
                  {plans.map((plan, index) => (
                    <td key={plan.name} className={`text-center py-4 px-6 text-gray-300 ${index !== plans.length - 1 ? 'border-r border-[#c6a255]/20' : ''} hover:bg-[#c6a255]/5 transition-colors duration-300`}>
                      {plan.slots}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#c6a255]/20">
                  <td className="py-4 px-6 text-gray-300 border-r border-[#c6a255]/20 hover:bg-[#c6a255]/5 transition-colors duration-300">Development</td>
                  {plans.map((plan, index) => (
                    <td key={plan.name} className={`text-center py-4 px-6 text-gray-300 ${index !== plans.length - 1 ? 'border-r border-[#c6a255]/20' : ''} hover:bg-[#c6a255]/5 transition-colors duration-300`}>
                      {plan.name === "Essentials" && "Landing Page"}
                      {plan.name === "Accelerator" && "Webflow/Shopify Website"}
                      {plan.name === "Domination" && "Next.js + React Native"}
                      {plan.name === "Elite" && "Custom Enterprise Software"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300 border-r border-[#c6a255]/20 hover:bg-[#c6a255]/5 transition-colors duration-300">Support</td>
                  {plans.map((plan, index) => (
                    <td key={plan.name} className={`text-center py-4 px-6 text-gray-300 ${index !== plans.length - 1 ? 'border-r border-[#c6a255]/20' : ''} hover:bg-[#c6a255]/5 transition-colors duration-300`}>
                      {plan.name === "Essentials" && "Email Support"}
                      {plan.name === "Accelerator" && "Email + Chat"}
                      {plan.name === "Domination" && "Priority Support"}
                      {plan.name === "Elite" && "24/7 Dedicated Support"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </LuxuryCard>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="block relative w-full h-full"
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full h-full flex flex-col gap-4"
              >
                <div className="relative flex-grow">
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-luxury-gold-300 text-black px-6 py-1.5 rounded-full text-xs font-medium z-50 whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <LuxuryCard 
                    className="h-full w-full transition-all duration-300 hover:shadow-xl bg-black border-luxury-gold-300/20 p-4 pt-8 md:p-6 md:pt-10 flex flex-col justify-between relative overflow-visible"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <motion.div
                          variants={contentVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          className="flex items-center gap-3 mb-6"
                        >
                          <div className="bg-luxury-gold-300/5 p-2 rounded-lg">
                            {plan.name === "Essentials" && <Sparkles className="w-8 h-8 text-luxury-gold-300" />}
                            {plan.name === "Accelerator" && <Zap className="w-8 h-8 text-luxury-gold-300" />}
                            {plan.name === "Domination" && <Crown className="w-8 h-8 text-luxury-gold-300" />}
                            {plan.name === "Elite" && <Star className="w-8 h-8 text-luxury-gold-300" />}
                          </div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text">
                            {plan.name}
                          </h3>
                        </motion.div>

                        <motion.div
                          variants={contentVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          className="mb-6"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm uppercase tracking-wider text-luxury-gold-300/70">Investment:</span>
                            <span className="text-2xl font-semibold text-luxury-gold-300">
                              {plan.price.replace('Investment: ', '')}
                            </span>
                          </div>
                        </motion.div>

                        <motion.div
                          variants={contentVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                          className="text-sm text-luxury-gold-300/70 mb-8"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold-300 animate-pulse"></span>
                            <span>{plan.availability}</span>
                          </div>
                          <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold-300/20 to-transparent"></div>
                        </motion.div>

                        <motion.div
                          variants={contentVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                          className="mb-8"
                        >
                          <div className="text-sm uppercase tracking-wider text-luxury-gold-300/70 mb-4">What's Included</div>
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 + (i * 0.1) }}
                                className="flex items-start gap-3 text-sm"
                              >
                                <span className="text-luxury-gold-300 mt-1 flex-shrink-0 text-xs">●</span>
                                <span className="text-gray-300 leading-relaxed">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1],
                          delay: index * 0.1 + 1.1 
                        }}
                        className="pt-6 mt-6 border-t border-luxury-gold-300/10"
                      >
                        <motion.blockquote 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{ 
                            duration: 0.8,
                            ease: [0.4, 0, 0.2, 1],
                            delay: index * 0.1 + 1.2
                          }}
                          className="text-sm italic text-gray-400 leading-relaxed"
                        >
                          "{plan.testimonial.quote}"
                          <motion.footer 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ 
                              duration: 0.8,
                              ease: [0.4, 0, 0.2, 1],
                              delay: index * 0.1 + 1.3
                            }}
                            className="mt-3 not-italic text-luxury-gold-300"
                          >
                            — {plan.testimonial.author}
                          </motion.footer>
                        </motion.blockquote>
                      </motion.div>
                    </div>
                  </LuxuryCard>
                </div>

                {/* CTA Button outside the card */}
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.4 }}
                  className="relative z-10"
                >
                  <LuxuryButton
                    as="a"
                    href={
                      plan.name === "Essentials"
                        ? "https://cal.com/sanganak/essentialquote"
                        : plan.name === "Accelerator"
                        ? "https://cal.com/sanganak/acceleratorquote"
                        : plan.name === "Domination"
                        ? "https://cal.com/sanganak/dominationquote"
                        : plan.name === "Elite"
                        ? "https://cal.com/sanganak/elitequote"
                        : "https://cal.com/sanganak/strategycall"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-base font-bold py-3 px-6"
                  >
                    {plan.cta}
                  </LuxuryButton>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}