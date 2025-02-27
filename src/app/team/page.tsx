'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: "Aryabhatta (mrbuddhu)",
      role: "Founder & CEO",
      image: "/mrbuddhu.jpeg",
      bio: "Visionary technologist and entrepreneur leading Sanganak's mission to revolutionize the digital landscape. Expertise in blockchain, AI, and premium software solutions."
    },
    {
      name: "Shabi Kaushal (msbuddhu)",
      role: "Co-Founder & Creative Director",
      image: "/msbuddhu.jpeg",
      bio: "Creative visionary shaping Sanganak's premium brand identity and design philosophy. Expert in luxury branding and user experience design."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuxuryHeading
              title="Our Leadership"
              subtitle="Visionaries shaping the future of premium technology"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={cardVariants}>
                <LuxuryCard className="h-[600px] transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-col items-center text-center p-8 h-full justify-between">
                    <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-luxury-gold-300/30 group-hover:border-luxury-gold-300/50 transition-colors">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover filter brightness-95 group-hover:brightness-100 transition-all"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                        {member.name}
                      </h3>
                      <p className="text-luxury-gold-300/70 mb-4 font-medium">{member.role}</p>
                      <p className="text-gray-300 leading-relaxed max-w-lg">{member.bio}</p>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-24"
          >
            <LuxuryCard className="transform hover:scale-[1.01] transition-transform duration-300">
              <div className="p-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-center text-lg leading-relaxed">
                  At Sanganak, we believe in pushing the boundaries of what's possible in technology. 
                  Our leadership team combines deep technical expertise with creative vision to deliver 
                  premium solutions that transform businesses and elevate digital experiences.
                </p>
              </div>
            </LuxuryCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center"
          >
            <h3 className="text-2xl font-medium text-luxury-gold-300/70 mb-6">Join Our Team</h3>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for excellence.
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
