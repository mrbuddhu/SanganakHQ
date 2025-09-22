'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LuxuryHeading from '../ui/LuxuryHeading';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 'globaleats',
      title: 'GlobalEats',
      subtitle: 'Food Delivery Platform',
      challenge: 'Needed a scalable food delivery platform to compete with major players in the market.',
      solution: 'Built a full-stack Next.js application with real-time order tracking, payment integration, and multi-vendor support.',
      results: {
        revenue: '$150K',
        users: '2.5K+',
        growth: '180%',
        timeline: '4 months'
      },
      testimonial: 'SanganakHQ transformed our vision into a market-leading platform. The results speak for themselves.',
      client: 'Sarah Chen, CEO',
      image: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/globaleats_oqjzn8.jpg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'AWS'],
      featured: false
    },
    {
      id: 'medicobuddy',
      title: 'MedicoBuddy',
      subtitle: 'Healthcare Management System',
      challenge: 'Required a comprehensive healthcare platform for patient management and telemedicine.',
      solution: 'Developed a secure, HIPAA-compliant platform with video consultations, appointment scheduling, and patient records.',
      results: {
        revenue: '$120K',
        users: '1.8K+',
        growth: '150%',
        timeline: '5 months'
      },
      testimonial: 'The platform exceeded our expectations. Patient satisfaction increased by 40%.',
      client: 'Dr. Rajesh Kumar, Founder',
      image: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/medicobuddy_fudnrl.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Docker'],
      featured: true
    },
    {
      id: 'interio',
      title: 'Interio',
      subtitle: 'Interior Design Platform',
      challenge: 'Wanted to digitize interior design services with AR/VR capabilities.',
      solution: 'Created an immersive platform with 3D room visualization, AR furniture placement, and design collaboration tools.',
      results: {
        revenue: '$85K',
        users: '1.2K+',
        growth: '120%',
        timeline: '6 months'
      },
      testimonial: 'Revolutionary technology that changed how we approach interior design.',
      client: 'Maria Rodriguez, Creative Director',
      image: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/interio_kq1fky.jpg',
      technologies: ['Three.js', 'WebGL', 'React', 'Firebase', 'AR.js'],
      featured: true
    }
  ];

  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const otherCaseStudies = caseStudies.filter(study => !study.featured);

  return (
    <section id="case-studies" className="py-24 bg-[#000000] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <LuxuryHeading
          title="Success Stories"
          subtitle="Real results from our premium client engagements"
        />

        {/* Featured Case Studies - withsupafast.com style */}
        <div className="space-y-16 mb-16">
          {featuredCaseStudies.slice(0, 2).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Image - Left Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.title} case study`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-luxury-gold-300/10 backdrop-blur-sm text-luxury-gold-300 px-3 py-1 rounded-full text-caption font-inter font-medium border border-luxury-gold-300/20">
                      Featured
                    </div>
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-h1 font-inter font-semibold text-white mb-3 group-hover:text-luxury-gold-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-body-lg font-inter text-gray-400 mb-6">{study.subtitle}</p>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-luxury-gold-300/5 rounded-lg p-4 text-center">
                      <DollarSign className="w-6 h-6 text-luxury-gold-300 mx-auto mb-2" />
                      <p className="text-h3 font-inter font-semibold text-white">{study.results.revenue}</p>
                      <p className="text-body-sm font-inter text-gray-400">Revenue</p>
                    </div>
                    <div className="bg-luxury-gold-300/5 rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-luxury-gold-300 mx-auto mb-2" />
                      <p className="text-h3 font-inter font-semibold text-white">{study.results.users}</p>
                      <p className="text-body-sm font-inter text-gray-400">Users</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-luxury-gold-300 hover:text-luxury-gold-200 font-inter font-semibold text-body transition-colors group-hover:gap-3 duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <h3 className="text-h2 font-inter font-semibold text-white mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-body font-inter text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive client portfolio and experience the premium service that delivers exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 bg-luxury-gold-300 text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-luxury-gold-200 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-luxury-gold-300 text-luxury-gold-300 px-8 py-3 rounded-lg font-inter font-semibold hover:bg-luxury-gold-300 hover:text-black transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
