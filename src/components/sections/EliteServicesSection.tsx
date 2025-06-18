import { motion } from 'framer-motion';
import { Sparkles, Gem, Code2, Globe, Lightbulb, Shield } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function EliteServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Branding",
      description: "Become a Category King with a brand that exudes authority, prestige, and undeniable influence.",
      features: [
        "Strategic Brand Positioning – Stand out. Stay unforgettable.",
        "Signature Visual Identity – Designed for premium perception.",
        "Comprehensive Brand Guidelines – Cohesive, timeless branding.",
        "Conversion-Optimized Copywriting – Persuasion meets power."
      ]
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Elite Design",
      description: "Experience perfection. Every pixel, every interaction, meticulously crafted to convert.",
      features: [
        "Bespoke Website & App Design – Luxury aesthetics, seamless UX.",
        "Conversion-Optimized User Journeys – Designed to maximize revenue.",
        "Interactive Prototypes – Experience your product before it's built.",
        "Premium Design System – Consistent luxury across platforms."
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Bespoke Applications",
      description: "Tailor-made digital powerhouses. Scalable, high-performance software for trailblazers.",
      features: [
        "Custom Web & Mobile Development – Precision-engineered for impact.",
        "E-Commerce Mastery – Elevate sales with elite UX.",
        "Conversion-Driven Landing Pages – Designed to captivate and convert.",
        "SaaS Product Development – Future-proofing your business."
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Blockchain Innovation",
      description: "Build the future. We architect blockchain solutions for enterprises ready to lead.",
      features: [
        "Smart Contract Development – Automate with absolute security.",
        "Next-Gen DApps – Redefining decentralized experiences.",
        "Enterprise Blockchain Integration – Elevate your business with Web3.",
        "Tokenomics & Strategy – Designing sustainable blockchain ecosystems."
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Unleash the power of data. AI isn't the future—it's your competitive advantage today.",
      features: [
        "Custom AI Models & Machine Learning – Predict. Optimize. Automate.",
        "AI-Driven Business Insights – Data-powered growth strategies.",
        "Process Automation – Scale smarter, work faster.",
        "Computer Vision & NLP – Cutting-edge AI-driven experiences."
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Elite Package",
      description: "The ultimate digital transformation. For businesses serious about dominating their industry.",
      features: [
        "End-to-End Brand Identity & UI/UX – Comprehensive brand and design excellence.",
        "Custom Software, AI & Blockchain Solutions – Cutting-edge technology integration.",
        "Ongoing Innovation & VIP Strategic Growth – Dedicated support and evolution.",
        "Priority Access & Exclusive Benefits – VIP treatment at every step."
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black relative py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#c6a255]/5 to-black/0" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LuxuryHeading
            title="Elite Services"
            subtitle="Transforming visions into digital excellence"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[95%] sm:max-w-7xl mx-auto mt-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <LuxuryCard className="h-full group hover:border-luxury-gold-300/5 transition-all duration-300">
                <div className="text-[#c6a255] mb-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4 group-hover:text-[#e9d5a1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {service.features.map((feature, featureIndex) => {
                    const [firstPart, ...rest] = feature.split('–').map(part => part.trim());
                    return (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/item"
                      >
                        <span className="text-[#c6a255] mt-1 group-hover/item:text-[#e9d5a1] transition-colors">•</span>
                        <span className="flex-1">
                          <span className="text-[#c6a255] group-hover/item:text-[#e9d5a1] transition-colors">{firstPart}</span>
                          {rest.length > 0 && (
                            <span className="text-gray-300 block mt-1 group-hover/item:text-gray-200 transition-colors">{rest.join(' ')}</span>
                          )}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 