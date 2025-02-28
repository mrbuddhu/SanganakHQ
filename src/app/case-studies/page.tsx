'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { caseStudies } from './data';

const MainLayout = dynamic(() => import('@/components/layout/MainLayout'), {
  ssr: false
});

export default function CaseStudies() {
  return (
    <MainLayout>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <LuxuryHeading
                title="Case Studies"
                subtitle="Discover how we transform businesses through innovative digital solutions"
              />
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {caseStudies.map((study, index) => (
                <Link href={`/case-studies/${study.id}`} key={study.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    <LuxuryCard className="h-full overflow-hidden hover:border-luxury-gold-300/50 transition-colors duration-300">
                      {/* Image Section */}
                      <div className="relative h-40 sm:h-48">
                        <Image
                          src={study.heroImage}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text">
                          {study.title}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3 text-luxury-gold-300/80 text-xs sm:text-sm">
                          <span>{study.client}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">{study.challenge}</p>
                        <div className="flex items-center gap-2 text-luxury-gold-300 group-hover:gap-3 transition-all duration-300">
                          <span className="text-xs sm:text-sm font-medium">View Case Study</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}