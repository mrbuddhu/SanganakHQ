import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function ProcessSection() {
  const process = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap aligned with your goals.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Branding & Design",
      description: "Our creative team crafts stunning visuals and unique brand identity that sets you apart.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Development & Test",
      description: "We build and rigorously test your solution using cutting-edge technology and best practices.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Delivery & Support",
      description: "We ensure smooth deployment and provide ongoing maintenance to keep your solution running perfectly.",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryHeading
          title="Our Process"
          subtitle="A proven methodology that ensures exceptional results and seamless delivery"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <LuxuryCard className="h-full p-6 text-center group hover:border-luxury-gold-300/30 transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold-300/10 rounded-full text-luxury-gold-300 group-hover:bg-luxury-gold-300/20 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-luxury-gold-300 text-black rounded-full text-sm font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-gold-300 mb-3 group-hover:text-luxury-gold-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>
                </div>
              </LuxuryCard>
              
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-luxury-gold-300/50 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our streamlined process ensures transparency, quality, and timely delivery. 
            We maintain open communication throughout every phase of your project.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 