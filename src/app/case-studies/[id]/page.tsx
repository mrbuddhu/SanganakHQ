'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight, Phone, MessageSquare, Share2 } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';
import { useState } from 'react';

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
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  if (!study || !details) return <div>Case study not found</div>;

  const handleShare = async () => {
    const url = `https://sanganak.org/case-studies/${id}`;
    
    // Try native sharing first
    if (navigator.share) {
      try {
        await navigator.share({
          title: study.title,
          text: `Check out this case study: ${study.title}`,
          url: url
        });
      } catch (err) {
        // Fallback to clipboard if native sharing fails
        await copyToClipboard();
      }
    } else {
      // Fallback to clipboard if native sharing is not available
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`https://sanganak.org/case-studies/${id}`);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-luxury-gold-300 hover:text-luxury-gold-100 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {study.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-luxury-gold-300 mb-8">
              <span>{study.client}</span>
              <span>•</span>
              <span>{study.industry}</span>
              <span>•</span>
              <span>{study.duration}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-luxury-gold-900/30 backdrop-blur-sm rounded-full text-sm text-luxury-gold-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={study.heroImage}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Rest of the content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Overview Section */}
            <LuxuryCard className="mb-12">
              <div className="grid md:grid-cols-2 gap-12 p-6 md:p-12">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-luxury-gold-100 mb-4">The Challenge</h2>
                  <p className="text-sm md:text-base text-luxury-gold-300/80 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-luxury-gold-100 mb-4">Our Solution</h2>
                  <p className="text-sm md:text-base text-luxury-gold-300/80 leading-relaxed">{study.solution}</p>
                </div>
              </div>
            </LuxuryCard>

            {/* Results Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-luxury-gold-100 mb-6 md:mb-8">Key Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {study.metrics.map((metric, index) => (
                  <LuxuryCard key={index} className="p-4 md:p-6 text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-luxury-gold-100 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm text-luxury-gold-300/80">
                      {metric.label}
                    </div>
                    {metric.period && (
                      <div className="text-[10px] md:text-xs text-luxury-gold-300/60 mt-1">
                        {metric.period}
                      </div>
                    )}
                  </LuxuryCard>
                ))}
              </div>
            </div>

            {/* Before & After Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-luxury-gold-100 mb-6 md:mb-8">Before & After</h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <LuxuryCard className="overflow-hidden">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={`/portfolio/${id}/before.jpg`}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-white">Before</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <ul className="space-y-2 md:space-y-3">
                      {study.beforeMetrics?.map((metric, index) => (
                        <li key={index} className="flex items-center text-sm md:text-base text-luxury-gold-300/80">
                          <span className="w-2 h-2 bg-luxury-gold-300/60 rounded-full mr-3" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </LuxuryCard>

                <LuxuryCard className="overflow-hidden">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={`/portfolio/${id}/after.jpg`}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-luxury-gold-100">After</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 bg-luxury-gold-900/10">
                    <ul className="space-y-2 md:space-y-3">
                      {study.afterMetrics?.map((metric, index) => (
                        <li key={index} className="flex items-center text-sm md:text-base text-luxury-gold-100">
                          <span className="w-2 h-2 bg-luxury-gold-100 rounded-full mr-3" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </LuxuryCard>
              </div>
            </div>

            {/* Testimonial Section */}
            <LuxuryCard className="mb-12 overflow-hidden">
              <div className="relative p-6 md:p-12">
                <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-luxury-gold-900/20">
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-luxury-gold-300/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div className="relative">
                  <p className="text-lg md:text-xl lg:text-2xl text-luxury-gold-300/90 italic mb-6">
                    "{study.testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={study.testimonial.avatar}
                      alt={study.testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full md:w-12 md:h-12"
                    />
                    <div className="ml-3 md:ml-4">
                      <div className="text-sm md:text-base font-semibold text-luxury-gold-100">
                        {study.testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-luxury-gold-300/60">
                        {study.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LuxuryCard>

            {/* CTA Section */}
            <div className="text-center py-12 md:py-16 lg:py-24">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-luxury-gold-100 mb-4 md:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base md:text-lg text-luxury-gold-300/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results. Schedule a consultation to get started.
              </p>
              <Link href={CTA_URL}>
                <LuxuryButton size="lg" className="bg-gradient-to-r from-luxury-gold-100 to-luxury-gold-300 hover:from-luxury-gold-200 hover:to-luxury-gold-400 text-black text-sm md:text-base">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </LuxuryButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
