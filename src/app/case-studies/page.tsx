'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { caseStudies } from './data';

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
                  className="space-y-8"
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
                          <blockquote className="border-l-2 border-luxury-gold-300 pl-4">
                            <div className="space-y-2">
                              <p className="text-sm">
                                <span className="text-gray-400">Branding:</span>
                                <span className="text-luxury-gold-300 ml-1">{study.credits.branding.name}</span>
                              </p>
                              <p className="text-sm">
                                <span className="text-gray-400">Design:</span>
                                <span className="text-luxury-gold-300 ml-1">{study.credits.designing.name}</span>
                              </p>
                              <p className="text-sm">
                                <span className="text-gray-400">Development:</span>
                                <span className="text-luxury-gold-300 ml-1">{study.credits.development.name}</span>
                              </p>
                              <p className="text-sm">
                                <span className="text-gray-400">Deployment:</span>
                                <span className="text-luxury-gold-300 ml-1">{study.credits.deployment.name}</span>
                              </p>
                            </div>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>

                  {/* View Details Button - Moved outside the card */}
                  <div className="flex justify-center pt-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-luxury-gold-900 via-luxury-gold-700 to-luxury-gold-800 rounded-md shadow-lg hover:from-luxury-gold-800 hover:via-luxury-gold-600 hover:to-luxury-gold-700 transition-all duration-300"
                      >
                        <span className="flex items-center">
                          View Full Case Study
                          <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
