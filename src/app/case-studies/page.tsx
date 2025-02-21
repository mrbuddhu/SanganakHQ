'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 'creators-home',
    title: 'Creators Home',
    client: 'Creator Economy',
    industry: 'SaaS / Content Creation',
    duration: '4 months',
    heroImage: '/portfolio/creators-home.jpg',
    challenge: 'Build a comprehensive SaaS platform that empowers content creators with AI-driven tools and analytics for better content creation and monetization.',
    solution: 'Developed an all-in-one platform featuring AI-powered content suggestions, analytics dashboard, and monetization tools.',
    results: [
      'Streamlined content creation workflow',
      'Enhanced creator monetization options',
      'AI-driven content optimization',
      'Real-time analytics and insights'
    ],
    technologies: ['Next.js', 'AI/ML', 'Analytics', 'Cloud Infrastructure'],
    credits: {
      branding: 'msbuddhu',
      development: 'mrbuddhu',
      deployment: 'mrbuddhu'
    },
    link: 'https://creatorshome.xyz'
  },
  {
    id: 'nftcollect',
    title: 'NFTCollect',
    client: 'Web3 Community',
    industry: 'Blockchain / NFT',
    duration: '3 months',
    heroImage: '/portfolio/nftcollect.jpg',
    challenge: 'Create a mobile app that simplifies NFT collection management while providing real-time market insights.',
    solution: 'Built a cross-platform React Native app with real-time price tracking, portfolio analytics, and marketplace integration.',
    results: [
      'Seamless NFT portfolio management',
      'Real-time market data integration',
      'Cross-platform compatibility',
      'Enhanced user engagement'
    ],
    technologies: ['React Native', 'Web3.js', 'NFT APIs', 'Real-time Data'],
    credits: {
      branding: 'msbuddhu',
      development: 'mrbuddhu',
      deployment: 'mrbuddhu'
    }
  },
  {
    id: 'burgerrr',
    title: 'Burgerrr',
    client: 'Food Service Industry',
    industry: 'Food Delivery',
    duration: '2.5 months',
    heroImage: '/portfolio/burgerrr.jpg',
    challenge: 'Develop a specialized food delivery app focused on gourmet burgers with real-time tracking and personalization.',
    solution: 'Created a React Native app with location-based services, real-time order tracking, and AI-powered recommendations.',
    results: [
      'Intuitive order management',
      'Real-time delivery tracking',
      'Personalized recommendations',
      'Seamless payment integration'
    ],
    technologies: ['React Native', 'Location Services', 'Payment Gateway', 'Real-time Tracking'],
    credits: {
      branding: 'msbuddhu',
      development: 'mrbuddhu',
      deployment: 'mrbuddhu'
    }
  },
  {
    id: 'interio',
    title: 'Interio',
    client: 'Interior Design Industry',
    industry: 'Design / Marketplace',
    duration: '3 months',
    heroImage: '/portfolio/interio.jpg',
    challenge: 'Create a platform that connects interior designers with clients while showcasing luxury spaces.',
    solution: 'Developed a modern marketplace platform with portfolio showcasing, client matching, and project management tools.',
    results: [
      'Enhanced designer-client matching',
      'Streamlined project management',
      'Interactive space visualization',
      'Increased client engagement'
    ],
    technologies: ['Next.js', 'Three.js', 'Cloud Storage', 'Real-time Chat'],
    credits: {
      branding: 'msbuddhu',
      development: 'mrbuddhu',
      deployment: 'mrbuddhu'
    },
    link: 'https://interio-eta.vercel.app/'
  },
  {
    id: 'medicobuddy',
    title: 'MedicoBuddy',
    client: 'Healthcare Education',
    industry: 'Medical Education / SaaS',
    duration: '5 months',
    heroImage: '/portfolio/medicobuddy.jpg',
    challenge: 'Transform medical education with an AI-driven platform for learning, case management, and professional networking.',
    solution: 'Developed a comprehensive SaaS platform with AI-powered learning tools, case study management, and professional networking features.',
    results: [
      'Enhanced learning outcomes',
      'Streamlined case management',
      'Professional network growth',
      'AI-driven personalization'
    ],
    technologies: ['Next.js', 'AI/ML', 'Medical APIs', 'Real-time Collaboration'],
    credits: {
      branding: 'msbuddhu',
      development: 'mrbuddhu',
      deployment: 'mrbuddhu'
    }
  }
];

export default function CaseStudies() {
  return (
    <MainLayout>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4">
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
            <div className="grid gap-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <LuxuryCard className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image Section */}
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={study.heroImage}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                          {study.title}
                        </h3>
                        <div className="flex items-center gap-4 text-luxury-gold-300/80 mb-6">
                          <span>{study.client}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-luxury-gold-300 font-semibold mb-2">Challenge</h4>
                            <p className="text-gray-300">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-luxury-gold-300 font-semibold mb-2">Solution</h4>
                            <p className="text-gray-300">{study.solution}</p>
                          </div>
                          
                          {/* Results */}
                          <div>
                            <h4 className="text-luxury-gold-300 font-semibold mb-2">Key Results</h4>
                            <ul className="grid grid-cols-2 gap-4">
                              {study.results.map((result, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Star className="w-5 h-5 text-luxury-gold-300 flex-shrink-0 mt-1" />
                                  <span className="text-gray-300 text-sm">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-luxury-gold-300 font-semibold mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-sm rounded-full bg-luxury-gold-300/10 text-luxury-gold-300 border border-luxury-gold-300/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <blockquote className="border-l-2 border-luxury-gold-300 pl-4 italic">
                            <p className="text-gray-300">{study.credits.branding}</p>
                            <footer className="mt-2">
                              <cite className="text-luxury-gold-300 not-italic">
                                {study.credits.development}, {study.credits.deployment}
                              </cite>
                            </footer>
                          </blockquote>
                        </div>

                        {/* View Details Link */}
                        <div className="mt-8">
                          <a
                            href={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                          >
                            View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
