'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Star, Calendar, Clock, Users, Trophy } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

// Import case studies data
import { caseStudies } from '../data';

const MainLayout = dynamic(() => import('@/components/layout/MainLayout'), {
  ssr: false
});

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
      quote: "The Creators Home platform revolutionized our content creation workflow. The AI tools and analytics have significantly improved our productivity and revenue streams.",
      author: "Sarah Anderson",
      role: "Digital Content Creator"
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
      quote: "NFTCollect's cross-platform capabilities and real-time tracking features have made managing our NFT portfolio seamless and efficient.",
      author: "James Miller",
      role: "NFT Investor & Collector"
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
      quote: "As the founder of GlobalEats, this platform has been instrumental in helping us share authentic Indian cuisine with food enthusiasts worldwide. The cultural sensitivity and user experience features have helped us create a truly global presence for our restaurant.",
      author: "Shubham Kumar",
      role: "Founder & CEO, GlobalEats"
    }
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
    ],
    testimonial: {
      quote: "As a medical professional in Bengaluru, I'm impressed by SANGANAK's innovative healthcare IT solutions. Their custom software has streamlined our patient management system and significantly improved our operational efficiency. Their attention to detail and understanding of healthcare needs is exceptional.",
      author: "Dr. Ankit Kumar",
      role: "Medical Professional, Bengaluru"
    }
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
    ],
    testimonial: {
      quote: "As the founder of Interio, I've seen how this platform has transformed our interior design business. The 3D visualization tools and project management features have helped us deliver exceptional results to our high-end clients.",
      author: "Shyam Sunder Sharma",
      role: "Founder & CEO, Interio Design Studio"
    }
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
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text">
                    {study.title}
                  </h1>
                  <div className="flex items-center gap-4 text-luxury-gold-300/80">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-luxury-gold-300 mb-4">The Challenge</h2>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-luxury-gold-300 mb-4">Our Solution</h2>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                {/* Process Steps */}
                <div>
                  <h2 className="text-2xl font-semibold text-luxury-gold-300 mb-6">Development Process</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {details.processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="p-6 rounded-lg bg-luxury-gold-300/5 border border-luxury-gold-300/10"
                      >
                        <h3 className="text-luxury-gold-300 font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <h2 className="text-2xl font-semibold text-luxury-gold-300 mb-6">Key Metrics</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {details.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="text-center p-6 rounded-lg bg-luxury-gold-300/5 border border-luxury-gold-300/10"
                      >
                        <div className="text-3xl font-bold text-luxury-gold-300 mb-2">{metric.value}</div>
                        <div className="text-gray-300 font-medium mb-1">{metric.label}</div>
                        <div className="text-sm text-gray-400">{metric.period}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-2xl font-semibold text-luxury-gold-300 mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {study.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full bg-luxury-gold-300/10 text-luxury-gold-300 border border-luxury-gold-300/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Credits */}
                <div>
                  <h2 className="text-2xl font-semibold text-luxury-gold-300 mb-6">Project Credits</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(study.credits).map(([role, person], index) => (
                      <motion.div
                        key={role}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-luxury-gold-300/5 border border-luxury-gold-300/10"
                      >
                        <div className="text-gray-400 text-sm mb-1 capitalize">{role}</div>
                        <div className="text-luxury-gold-300">{person.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="p-6 rounded-lg bg-luxury-gold-300/5 border-l-4 border-luxury-gold-300">
                  <p className="text-gray-300 italic mb-4">"{details.testimonial.quote}"</p>
                  <footer>
                    <div className="text-luxury-gold-300 font-medium">{details.testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{details.testimonial.role}</div>
                  </footer>
                </blockquote>
              </div>
            </LuxuryCard>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
