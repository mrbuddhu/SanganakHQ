'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

// Import case studies data
import { caseStudies } from '../data';

const MainLayout = dynamic(() => import('@/components/layout/MainLayout'));

// Additional case study details
const additionalDetails: Record<string, { 
  processSteps: { title: string; description: string; }[];
  gallery: string[];
  metrics: { label: string; value: string; period: string; }[];
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
    ]
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
    ]
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
    ]
  },
  'medicobuddy': {
    processSteps: [
      { title: 'Healthcare Analysis', description: 'Conducted extensive research on healthcare delivery and patient needs.' },
      { title: 'Platform Design', description: 'Designed intuitive interfaces for patients and healthcare providers.' },
      { title: 'Tech Implementation', description: 'Built secure platform with telemedicine and appointment scheduling.' },
      { title: 'Deployment & Training', description: 'Launched platform with comprehensive training for medical staff.' }
    ],
    gallery: [
      '/portfolio/medicobuddy/dashboard.jpg',
      '/portfolio/medicobuddy/appointments.jpg',
      '/portfolio/medicobuddy/telemedicine.jpg'
    ],
    metrics: [
      { label: 'Patient Satisfaction', value: '96%', period: 'approval rate' },
      { label: 'Appointment Booking', value: '-60%', period: 'time saved' },
      { label: 'Healthcare Access', value: '+280%', period: 'improvement' }
    ]
  },
  'interio': {
    processSteps: [
      { title: 'Market Research', description: 'Analyzed interior design industry trends and customer needs.' },
      { title: 'AR Development', description: 'Implemented augmented reality features for virtual room preview.' },
      { title: 'Platform Build', description: 'Created marketplace connecting designers and clients.' },
      { title: 'Beta Testing', description: 'Conducted extensive testing with interior designers and clients.' }
    ],
    gallery: [
      '/portfolio/interio/ar-preview.jpg',
      '/portfolio/interio/marketplace.jpg',
      '/portfolio/interio/designer-profile.jpg'
    ],
    metrics: [
      { label: 'Project Completion', value: '+45%', period: 'faster' },
      { label: 'Client Satisfaction', value: '98%', period: 'approval' },
      { label: 'Designer Revenue', value: '+75%', period: 'increase' }
    ]
  },
  'globaleats': {
    processSteps: [
      { title: 'Market Research', description: 'Analyzed global food delivery trends and cultural preferences.' },
      { title: 'Platform Design', description: 'Created intuitive interfaces for multi-vendor food ordering and delivery.' },
      { title: 'Development', description: 'Built scalable platform with real-time tracking and AI recommendations.' },
      { title: 'Launch & Expansion', description: 'Successfully launched with international cuisine partners.' }
    ],
    gallery: [
      '/portfolio/globaleats/dashboard.jpg',
      '/portfolio/globaleats/ordering.jpg',
      '/portfolio/globaleats/tracking.jpg'
    ],
    metrics: [
      { label: 'Order Processing', value: '+200%', period: 'efficiency' },
      { label: 'Delivery Time', value: '-30%', period: 'reduction' },
      { label: 'Restaurant Partners', value: '500+', period: 'active vendors' }
    ]
  }
};

export default function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);
  const details = additionalDetails[id as string];

  if (!study || !details) return <div>Case study not found</div>;

  return (
    <MainLayout>
      <main className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-luxury-gold-300 hover:text-luxury-gold-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuxuryCard className="overflow-hidden">
              <div className="p-8 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-luxury-gold-200 mb-8 text-center bg-gradient-to-r from-luxury-gold-100 to-luxury-gold-300 bg-clip-text text-transparent">
                    {study.title}
                  </h1>
                  
                  {/* Hero Image */}
                  <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
                    <Image
                      src={study.heroImage}
                      alt={study.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex items-center gap-4 text-luxury-gold-300/80">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-luxury-gold-100 mb-4">The Challenge</h2>
                    <p className="text-luxury-gold-300/80">{study.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-luxury-gold-100 mb-4">Our Solution</h2>
                    <p className="text-luxury-gold-300/80">{study.solution}</p>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-luxury-gold-100">Our Process</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {details.processSteps.map((step, index) => (
                      <div key={index} className="p-6 bg-luxury-gold-900/50 rounded-lg">
                        <h3 className="text-lg font-semibold text-luxury-gold-100 mb-2">{step.title}</h3>
                        <p className="text-sm text-luxury-gold-300/80">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-luxury-gold-100">Key Results</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {details.metrics.map((metric, index) => (
                      <div key={index} className="p-6 bg-luxury-gold-900/50 rounded-lg text-center">
                        <div className="text-3xl font-bold text-luxury-gold-100 mb-2">{metric.value}</div>
                        <div className="text-sm text-luxury-gold-300/80">{metric.label}</div>
                        <div className="text-xs text-luxury-gold-300/60">{metric.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-luxury-gold-100">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-luxury-gold-900/50 text-luxury-gold-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-luxury-gold-900/30 p-8 rounded-lg">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-luxury-gold-300/80 italic text-lg">"{study.testimonial.quote}"</div>
                    <div>
                      <div className="text-luxury-gold-100 font-semibold">{study.testimonial.name}</div>
                      <div className="text-luxury-gold-300/60 text-sm">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </LuxuryCard>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
