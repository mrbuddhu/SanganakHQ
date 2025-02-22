'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, Calendar, Clock, Users, Trophy } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

// Import case studies data
import { caseStudies } from '../data';

// Define testimonial type
type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

// Additional case study details
const additionalDetails: Record<string, { 
  processSteps: { title: string; description: string; }[];
  gallery: string[];
  metrics: { label: string; value: string; period: string; }[];
  testimonial: Testimonial;
}> = {
  'creators-home': {
    processSteps: [
      { title: 'Research & Planning', description: 'Conducted extensive market research and user interviews to identify key pain points for content creators.' },
      { title: 'Design & Prototyping', description: 'Created high-fidelity wireframes and interactive prototypes for seamless user experience.' },
      { title: 'Development', description: 'Implemented AI-powered features and analytics dashboard using modern tech stack.' },
      { title: 'Testing & Launch', description: 'Conducted thorough testing with beta users and launched with selected creators.' }
    ],
    gallery: [
      '/portfolio/creators-home/dashboard.jpg',
      '/portfolio/creators-home/analytics.jpg',
      '/portfolio/creators-home/content.jpg'
    ],
    metrics: [
      { label: 'User Growth', value: '+200%', period: '3 months' },
      { label: 'Content Creation', value: '+150%', period: 'efficiency' },
      { label: 'Revenue Growth', value: '+180%', period: 'for creators' }
    ],
    testimonial: {
      quote: "The AI-powered tools have revolutionized how I create and monetize content. It's a game-changer!",
      author: "Sarah Chen",
      role: "Content Creator"
    }
  },
  'nftcollect': {
    processSteps: [
      { title: 'Market Analysis', description: 'Researched NFT market trends and user needs in the Web3 space.' },
      { title: 'UX Design', description: 'Designed intuitive interfaces for complex blockchain interactions.' },
      { title: 'Mobile Development', description: 'Built cross-platform app with React Native and Web3 integration.' },
      { title: 'Security Testing', description: 'Implemented robust security measures and conducted thorough testing.' }
    ],
    gallery: [
      '/portfolio/nftcollect/portfolio.jpg',
      '/portfolio/nftcollect/marketplace.jpg',
      '/portfolio/nftcollect/tracking.jpg'
    ],
    metrics: [
      { label: 'Transaction Speed', value: '-40%', period: 'improvement' },
      { label: 'User Base', value: '50K+', period: 'active users' },
      { label: 'Portfolio Growth', value: '+250%', period: '2 months' }
    ],
    testimonial: {
      quote: "NFTCollect made managing my NFT portfolio a breeze. The real-time tracking is invaluable.",
      author: "Alex Rivera",
      role: "NFT Collector"
    }
  },
  'burgerrr': {
    processSteps: [
      { title: 'User Research', description: 'Analyzed food delivery patterns and user preferences.' },
      { title: 'UI/UX Design', description: 'Created mouth-watering interfaces with intuitive ordering flow.' },
      { title: 'App Development', description: 'Built native app with real-time tracking and AI recommendations.' },
      { title: 'Launch & Marketing', description: 'Executed successful launch with local restaurant partnerships.' }
    ],
    gallery: [
      '/portfolio/burgerrr/menu.jpg',
      '/portfolio/burgerrr/tracking.jpg',
      '/portfolio/burgerrr/reviews.jpg'
    ],
    metrics: [
      { label: 'Order Volume', value: '+300%', period: '1 month' },
      { label: 'Delivery Time', value: '-25%', period: 'reduction' },
      { label: 'Customer Rating', value: '4.9', period: 'out of 5' }
    ],
    testimonial: {
      quote: "The personalized recommendations and real-time tracking have made our delivery service stand out.",
      author: "Maria Garcia",
      role: "Restaurant Owner"
    }
  },
  'interio': {
    processSteps: [
      { title: 'Market Research', description: 'Studied interior design industry needs and client expectations.' },
      { title: 'Platform Design', description: 'Created elegant interfaces for portfolio showcasing.' },
      { title: 'Development', description: 'Built marketplace with 3D visualization capabilities.' },
      { title: 'Beta Testing', description: 'Launched beta with selected interior designers.' }
    ],
    gallery: [
      '/portfolio/interio/showcase.jpg',
      '/portfolio/interio/projects.jpg',
      '/portfolio/interio/designer.jpg'
    ],
    metrics: [
      { label: 'Designer Sign-ups', value: '+400%', period: '2 months' },
      { label: 'Project Matches', value: '+200%', period: 'efficiency' },
      { label: 'Client Satisfaction', value: '98%', period: 'rating' }
    ],
    testimonial: {
      quote: "Interio's platform has transformed the way I connect with clients. The project management tools and designer-client matching features are exceptional!",
      author: "Alex Johnson",
      role: "Interior Designer",
      avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=400&auto=format&fit=crop&q=80"
    }
  },
  'medicobuddy': {
    processSteps: [
      { title: 'Research', description: 'Analyzed medical education needs and learning patterns.' },
      { title: 'Platform Design', description: 'Designed intuitive interfaces for complex medical content.' },
      { title: 'Development', description: 'Implemented AI-powered learning tools and case management.' },
      { title: 'Testing & Launch', description: 'Conducted beta testing with medical institutions.' }
    ],
    gallery: [
      '/portfolio/medicobuddy/learning.jpg',
      '/portfolio/medicobuddy/cases.jpg',
      '/portfolio/medicobuddy/network.jpg'
    ],
    metrics: [
      { label: 'Learning Efficiency', value: '+180%', period: 'improvement' },
      { label: 'User Engagement', value: '+250%', period: 'increase' },
      { label: 'Case Studies', value: '10K+', period: 'managed' }
    ],
    testimonial: {
      quote: "MedicoBuddy has revolutionized how we approach medical education and case management.",
      author: "Dr. James Wilson",
      role: "Medical Educator"
    }
  }
};

export default function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);
  const details = additionalDetails[id as keyof typeof additionalDetails];

  if (!study || !details) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-black py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl text-luxury-gold-300 mb-8">Case Study Not Found</h1>
            <Link href="/case-studies" className="text-luxury-gold-300 hover:text-luxury-gold-200 inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[600px]">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/case-studies" className="text-luxury-gold-300 hover:text-luxury-gold-200 inline-flex items-center mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                </Link>
                <LuxuryHeading
                  title={study.title}
                  subtitle={`${study.client} • ${study.industry}`}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <LuxuryCard>
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-luxury-gold-300" />
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="text-luxury-gold-300">{study.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-luxury-gold-300" />
                      <div>
                        <p className="text-sm text-gray-400">Team</p>
                        <div className="space-y-2">
                          <p className="text-luxury-gold-300">
                            <span className="text-gray-400">Branding:</span> {study.credits.branding.name}
                            <span className="block text-xs text-gray-500">{study.credits.branding.work}</span>
                          </p>
                          <p className="text-luxury-gold-300">
                            <span className="text-gray-400">Design:</span> {study.credits.designing.name}
                            <span className="block text-xs text-gray-500">{study.credits.designing.work}</span>
                          </p>
                          <p className="text-luxury-gold-300">
                            <span className="text-gray-400">Development:</span> {study.credits.development.name}
                            <span className="block text-xs text-gray-500">{study.credits.development.work}</span>
                          </p>
                          <p className="text-luxury-gold-300">
                            <span className="text-gray-400">Deployment:</span> {study.credits.deployment.name}
                            <span className="block text-xs text-gray-500">{study.credits.deployment.work}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-luxury-gold-300" />
                      <div>
                        <p className="text-sm text-gray-400">Recognition</p>
                        <p className="text-luxury-gold-300">Featured Project</p>
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>

              {/* Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2"
              >
                <LuxuryCard>
                  <div className="p-8 space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-luxury-gold-300 mb-4">The Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-luxury-gold-300 mb-4">Our Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-black/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <LuxuryHeading
                title="Our Process"
                subtitle="How we approached this project"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {details.processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <LuxuryCard>
                    <div className="p-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-luxury-gold-300/10 text-luxury-gold-300 mb-4">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-luxury-gold-300 mb-2">{step.title}</h4>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <LuxuryHeading
                title="Project Gallery"
                subtitle="Visual journey of our work"
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {details.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-video"
                >
                  <Image
                    src={image}
                    alt={`${study.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="py-24 bg-black/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <LuxuryHeading
                title="Results & Impact"
                subtitle="Measuring our success"
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {details.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <LuxuryCard>
                    <div className="p-6 text-center">
                      <h4 className="text-4xl font-bold text-luxury-gold-300 mb-2">{metric.value}</h4>
                      <p className="text-gray-300 mb-1">{metric.label}</p>
                      <p className="text-sm text-gray-400">{metric.period}</p>
                    </div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <LuxuryCard>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {details.testimonial.avatar && (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#c6a255] flex-shrink-0">
                      <Image
                        src={details.testimonial.avatar}
                        alt={details.testimonial.author}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <blockquote className="text-xl text-gray-300 italic mb-4">
                      "{details.testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="text-[#c6a255] font-bold">{details.testimonial.author}</p>
                      <p className="text-gray-400">{details.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </LuxuryCard>
            </motion.div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
