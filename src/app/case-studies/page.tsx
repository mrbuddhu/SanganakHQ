import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import { caseStudies } from './data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | SanganakHQ Success Stories | Premium IT Boutique Results',
  description: 'Explore SanganakHQ case studies showcasing successful luxury branding, elite design, AI solutions, and blockchain projects. See measurable results and client success stories.',
  keywords: 'SanganakHQ case studies, premium IT success stories, luxury branding results, elite design projects, AI solutions case studies, blockchain success stories, client testimonials',
  openGraph: {
    title: 'Case Studies | SanganakHQ Success Stories | Premium IT Boutique Results',
    description: 'Explore SanganakHQ case studies showcasing successful luxury branding, elite design, AI solutions, and blockchain projects.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SanganakHQ Case Studies - Success Stories',
        type: 'image/png'
      }
    ],
    type: 'website',
    url: 'https://sanganak.org/case-studies'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | SanganakHQ Success Stories | Premium IT Boutique Results',
    description: 'Explore SanganakHQ case studies showcasing successful luxury branding, elite design, AI solutions, and blockchain projects.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://sanganak.org/case-studies'
  }
};

const MainLayout = dynamic(() => import('@/components/layout/MainLayout'));

export default function CaseStudies() {
  return (
    <MainLayout>
      <main className="min-h-screen bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <LuxuryHeading title="Our Case Studies" />
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/case-studies/${study.id}`}>
                  <LuxuryCard className="group h-full overflow-hidden hover:scale-[1.02] transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={study.heroImage}
                        alt={study.title}
                        fill
                        className="object-contain md:object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        priority={study.id === caseStudies[0].id}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-luxury-gold-200 group-hover:text-luxury-gold-100 transition-colors">
                        {study.title}
                      </h3>
                      <div className="mt-2 flex items-center text-sm text-luxury-gold-300/60">
                        <span>{study.client}</span>
                        <span className="mx-2">•</span>
                        <span>{study.industry}</span>
                      </div>
                      <p className="mt-4 text-luxury-gold-300/80 line-clamp-3">
                        {study.challenge}
                      </p>
                      
                      {/* Key Metrics */}
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {study.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-luxury-gold-200">{metric.value}</div>
                            <div className="text-sm text-luxury-gold-300/60 capitalize">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* View Case Study Button */}
                      <div className="mt-6 flex items-center justify-end text-luxury-gold-200 group-hover:text-luxury-gold-100">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </LuxuryCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}