import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Project Timeline",
      competitors: "3-6 months",
      sanganak: "2-8 weeks",
      sanganakHighlight: true
    },

    {
      feature: "Support & Maintenance",
      competitors: "Limited support",
      sanganak: "Dedicated support",
      sanganakHighlight: true
    },
    {
      feature: "Technology Stack",
      competitors: "Outdated tech",
      sanganak: "Cutting-edge",
      sanganakHighlight: true
    },
    {
      feature: "Design Quality",
      competitors: "Template-based",
      sanganak: "Bespoke luxury",
      sanganakHighlight: true
    },
    {
      feature: "Project Management",
      competitors: "Poor communication",
      sanganak: "Transparent process",
      sanganakHighlight: true
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-[#000000] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-luxury-gold-300">Sanganak</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we outperform traditional agencies and freelancers
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="bg-black/70 backdrop-blur-sm border border-luxury-gold-300/30 rounded-2xl overflow-hidden shadow-[0_4px_32px_0_rgba(198,162,85,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Feature Column */}
              <div className="bg-black/40 p-8 border-b lg:border-b-0 lg:border-r border-luxury-gold-300/10">
                <h3 className="text-xl font-bold text-luxury-gold-300 mb-8 text-center lg:text-left">Features</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center min-h-[60px]"
                    >
                      <span className="text-gray-200 font-semibold text-center lg:text-left tracking-wide">{item.feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Competitors Column */}
              <div className="bg-black/30 p-8 border-b lg:border-b-0 lg:border-r border-luxury-gold-300/10">
                <h3 className="text-xl font-bold text-gray-400 mb-8 text-center">Other Agencies</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center min-h-[60px]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-700/30 flex items-center justify-center">
                          <X className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="text-gray-400 text-center font-medium">{item.competitors}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Sanganak Column */}
              <div className="bg-luxury-gold-300/10 p-8 shadow-[0_0_32px_0_rgba(198,162,85,0.12)]">
                <h3 className="text-xl font-extrabold text-luxury-gold-300 mb-8 text-center drop-shadow-lg">Sanganak Premium</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center min-h-[60px]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-luxury-gold-300/30 flex items-center justify-center shadow-[0_0_8px_0_rgba(198,162,85,0.18)]">
                          <Check className="w-4 h-4 text-luxury-gold-300 drop-shadow" />
                        </div>
                        <span className={`font-bold text-center tracking-wide ${item.sanganakHighlight ? 'text-luxury-gold-300 drop-shadow' : 'text-gray-200'}`}>
                          {item.sanganak}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We don't just build/design Products—we create digital experiences that drive results. 
            Our premium approach ensures your project stands out in today's competitive landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 