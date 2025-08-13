import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    {
      question: "What sets Sanganak apart from other digital agencies?",
      answer: "We combine cutting-edge technology with luxury design principles to create digital experiences that truly stand out. Our attention to detail, commitment to excellence, and focus on measurable results make us the preferred choice for discerning clients."
    },
    {
      question: "How do you ensure the success of digital projects?",
      answer: "Our proven process involves thorough research, strategic planning, iterative development, and rigorous testing. We maintain transparent communication throughout and use data-driven insights to optimize outcomes."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve a wide range of industries, including luxury brands, financial services, technology, healthcare, e-commerce, real estate, education, hospitality, startups, and enterprises. Our adaptable approach ensures success for ambitious clients in any sector."
    },
    {
      question: "How do you handle project timelines and budgets?",
      answer: "We believe in transparent communication and realistic planning. Each project receives a detailed timeline and budget breakdown upfront, with regular updates and milestone tracking throughout the development process."
    },
    {
      question: "What ongoing support do you provide after launch?",
      answer: "We offer comprehensive post-launch support including monitoring, maintenance, updates, and optimization. Our team remains available for continuous improvements and rapid response to any concerns."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#000000] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Sanganak Premium"
        />
        
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <LuxuryCard className="p-0 overflow-visible">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-luxury-gold-300/20 rounded-lg pr-16"
                >
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-luxury-gold-300 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </LuxuryCard>
              {/* Absolute +/− icon outside card on right */}
              <span
                onClick={() => toggleFaq(index)}
                className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-2xl font-bold text-luxury-gold-300 bg-black/80 rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 z-10"
                aria-hidden="true"
              >
                {openFaq === index ? '−' : '+'}
              </span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Still have questions? <a href="/contact" className="text-luxury-gold-300 hover:text-luxury-gold-200 underline">Contact us</a> for personalized assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 