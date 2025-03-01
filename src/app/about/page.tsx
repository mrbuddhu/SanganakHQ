'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Globe, Users, Zap } from 'lucide-react';
import { CTA_URL } from '@/constants/links';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-luxury-gold-300" />,
      title: "Excellence",
      description: "We strive for perfection in every pixel, every line of code, and every interaction."
    },
    {
      icon: <Globe className="w-12 h-12 text-luxury-gold-300" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technologies and creative solutions."
    },
    {
      icon: <Users className="w-12 h-12 text-luxury-gold-300" />,
      title: "Collaboration",
      description: "Working closely with clients to transform their vision into reality."
    },
    {
      icon: <Zap className="w-12 h-12 text-luxury-gold-300" />,
      title: "Impact",
      description: "Creating digital solutions that make a real difference in the world."
    }
  ];

  return (
    <MainLayout>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <LuxuryHeading
                title="Crafting Digital Excellence"
              />
              <p className="text-xl text-gray-300 mb-8">
                We are Sanganak, a premium digital agency dedicated to transforming businesses through innovative technology solutions and stunning design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <LuxuryHeading
                  title="Our Story"
                />
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded in Patna, Bihar, Sanganak emerged from a vision to bridge the gap between premium technology solutions and businesses seeking digital excellence.
                  </p>
                  <p>
                    What started as a passion for creating exceptional digital experiences has evolved into a full-service agency, trusted by clients worldwide for our commitment to quality and innovation.
                  </p>
                  <p>
                    Today, we continue to push boundaries, embrace new technologies, and deliver solutions that not only meet but exceed our clients' expectations.
                  </p>
                </div>
                <a 
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 px-8 py-3 rounded-full bg-luxury-gold-300 text-black font-semibold hover:bg-luxury-gold-400 transition-colors"
                >
                  Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Sanganak.jpeg"
                  alt="Sanganak Premium"
                  fill
                  className="object-contain sm:object-cover"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-black/40">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <LuxuryHeading
                title="Our Values"
                subtitle="These core principles guide everything we do, from how we work with our clients to how we develop our solutions."
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <LuxuryCard className="p-6 h-full flex flex-col items-center text-center">
                    <div className="mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#c6a255] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <LuxuryHeading
                title="Ready to Transform Your Digital Presence?"
              />
              <p className="text-gray-300 mb-8">
                Let's create something extraordinary together. Our team is ready to bring your vision to life.
              </p>
              <Link href="/contact">
                <button className="bg-luxury-gold-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold-400 transition-colors">
                  Start a Conversation
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
