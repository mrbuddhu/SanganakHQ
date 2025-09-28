import { motion } from 'framer-motion';
import { Sparkles, Gem, Code2, Globe, Lightbulb, Shield } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import Link from 'next/link';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function EliteServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Branding",
      description: "Become a Category King with premium branding that drives 30% higher conversions and commands premium pricing.",
      features: [
        "Strategic Brand Positioning – Dominate your market segment with authority",
        "Signature Visual Identity – Premium perception that converts 30% better",
        "Comprehensive Brand Guidelines – Cohesive, timeless brand consistency",
        "Conversion-Optimized Copywriting – Persuasion that drives measurable results"
      ]
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Elite Design",
      description: "Convert 25% more visitors into customers with premium design that builds trust, drives engagement, and maximizes revenue.",
      features: [
        "Bespoke Website & App Design – Luxury aesthetics that convert visitors to customers",
        "Conversion-Optimized User Journeys – Designed to maximize revenue and reduce bounce rates",
        "Interactive Prototypes – Experience your product before it's built, reducing development costs",
        "Premium Design System – Consistent luxury across all touchpoints for brand authority"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Bespoke Applications",
      description: "Launch 3x faster with custom software that scales with your growth, handles enterprise traffic, and delivers measurable ROI.",
      features: [
        "No-Code Solutions – Webflow for web, Flutterflow for mobile, launch in 2 weeks",
        "Custom Code Development – Next.js for web, React Native for mobile, built to scale",
        "E-Commerce Mastery – Increase average order value by 40% with premium UX",
        "SaaS Product Development – Future-proof architecture that grows with your business"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Blockchain Innovation",
      description: "Lead the Web3 revolution with blockchain solutions that create new revenue streams, reduce costs by 60%, and future-proof your business.",
      features: [
        "Smart Contract Development – Automate processes with absolute security and transparency",
        "Next-Gen DApps – Redefine user experiences with decentralized applications",
        "Enterprise Blockchain Integration – Elevate your business with Web3 infrastructure",
        "Tokenomics & Strategy – Design sustainable blockchain ecosystems that drive adoption"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Increase efficiency by 80% and reduce operational costs by 50% with AI solutions that predict, optimize, and automate your business processes.",
      features: [
        "Custom AI Models & Machine Learning – Predict customer behavior, optimize operations, automate workflows",
        "AI-Driven Business Insights – Data-powered growth strategies that increase revenue by 35%",
        "Process Automation – Scale smarter, work faster, reduce manual tasks by 80%",
        "Computer Vision & NLP – Cutting-edge AI experiences that delight customers and drive engagement"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Marketing HQ",
      description: "Grow revenue by 200% and reduce customer acquisition costs by 40% with data-driven marketing strategies that scale your business.",
      features: [
        "SEO & Content Marketing – Rank higher, build compounding inbound traffic, increase organic revenue by 150%",
        "Social Media Strategy & Management – Grow engagement by 300%, build brand authority, drive qualified leads",
        "Paid Ads (Google, Meta, LinkedIn) – Acquire customers with profitable CAC, scale profitable campaigns",
        "Email Marketing & Automations – Nurture leads, increase LTV by 60%, automate customer journeys",
        "Performance Analytics & Reporting – Track ROI, optimize monthly, make data-driven decisions"
      ],
      ctaNote: "Available as standalone or ongoing retainer for continuous growth."
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-[#000000] relative py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LuxuryHeading
            title="Premium Service Verticals"
            subtitle="Six elite pathways to measurable growth and market leadership"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[95%] sm:max-w-7xl mx-auto mt-8"
        >
          {services.map((service, index) => {
            const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-').replace('ai-powered', 'ai-powered-intelligence');
            const serviceUrl = `/services/${serviceSlug}`;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={serviceUrl} className="block h-full">
                  <LuxuryCard className="h-full group hover:border-luxury-gold-300/40 transition-all duration-700 p-8 bg-black/60 backdrop-blur-md shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(198,162,85,0.15)] hover:scale-[1.02] cursor-pointer">
                    <div className="text-[#c6a255] mb-4 text-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3 group-hover:drop-shadow-[0_0_20px_rgba(198,162,85,0.3)]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#c6a255] mb-4 group-hover:text-[#e9d5a1] transition-all duration-500 group-hover:tracking-wide">
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
                            <span className="text-[#c6a255] mt-1 group-hover/item:text-[#e9d5a1] transition-all duration-300 group-hover/item:scale-125 group-hover/item:drop-shadow-[0_0_8px_rgba(198,162,85,0.4)]">•</span>
                            <span className="flex-1">
                              <span className="text-[#c6a255] group-hover/item:text-[#e9d5a1] transition-colors">{firstPart}</span>
                              {rest.length > 0 && (
                                <span className="text-white block mt-1 transition-colors">{rest.join(' ')}</span>
                              )}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-luxury-gold-300/20">
                      <span className="text-luxury-gold-300 text-sm font-medium group-hover:text-luxury-gold-200 transition-colors">
                        Learn More →
                      </span>
                    </div>
                    {service.ctaNote && (
                      <p className="mt-4 text-xs text-gray-400">{service.ctaNote}</p>
                    )}
                  </LuxuryCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 