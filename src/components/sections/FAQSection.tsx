import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    {
      question: "What sets SanganakHQ apart from other digital agencies?",
      answer: "SanganakHQ delivers 3x faster launches and 30% conversion lifts through premium innovation. We combine cutting-edge technology with luxury design principles to create digital experiences that drive measurable results and market leadership."
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
    <section id="faq" className="w-full py-20 sm:py-24 bg-[#050505] relative">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryHeading
          overline="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with SanganakHQ Premium"
        />

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/[0.1] hover:bg-white/[0.03]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 py-4 px-4 sm:py-4 sm:px-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a255]/30 focus-visible:ring-inset rounded-xl"
              >
                <h3 className="text-[15px] sm:text-base font-medium text-white/95 tracking-tight pr-2">
                  {faq.question}
                </h3>
                <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] text-[#c6a255] transition-transform duration-300">
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={2.25} />
                  </motion.span>
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-white/[0.06]">
                  <p className="text-[14px] sm:text-[15px] text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-white/50 text-sm sm:text-base">
            Still have questions?{' '}
            <a href="/contact" className="text-[#c6a255] hover:text-[#e9d5a1] underline underline-offset-2 transition-colors">
              Contact us
            </a>
            {' '}for personalized assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 