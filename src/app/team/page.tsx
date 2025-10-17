'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import Image from 'next/image';
// Note: Metadata cannot be exported from client components
// This will be handled by the layout or a separate metadata file

export default function TeamPage() {
  const team = [
    {
      name: "Aryabhatta (mrbuddhu)",
      role: "Founder & CXO",
      image: "/mrbuddhu.jpeg",
      bio: "Visionary technologist and entrepreneur leading Sanganak's mission to revolutionize the digital landscape. Expertise in blockchain, AI, and premium software solutions.",
      socials: [
        { href: "https://linkedin.com/in/mrbuddhu", label: "LinkedIn", icon: (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        ) },
        { href: "https://x.com/_mrbuddhu_", label: "X", icon: (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0l-4.47 4.47-4.47-4.47a.75.75 0 1 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.06-1.06l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg>
        ) },
        { href: "https://github.com/mrbuddhu", label: "GitHub", icon: (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
        ) },
      ]
    },
    {
      name: "Shabi Kaushal (msbuddhu)",
      role: "Co-Founder & Product Designer",
      image: "/msbuddhu.jpeg",
      bio: "Creative visionary shaping Sanganak's premium brand identity and design philosophy. Expert in luxury branding and user experience design.",
      socials: [
        { href: "https://linkedin.com/in/msbuddhu", label: "LinkedIn", icon: (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        ) },
        { href: "https://x.com/msbuddhu", label: "X", icon: (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0l-4.47 4.47-4.47-4.47a.75.75 0 1 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.06-1.06l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg>
        ) },
        { href: "https://behance.net/msbuddhu", label: "Behance", icon: (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.007 10.433c.01-.732-.527-.833-.927-.833H5.5v1.668h1.58c.4 0 .927-.067.927-.835zm-.36 2.13c-.16-.1-.38-.15-.67-.15H5.5v1.85h1.477c.29 0 .51-.05.67-.15.16-.1.24-.29.24-.56 0-.27-.08-.45-.24-.55zm13.353-.563c-.44-.22-.97-.33-1.59-.33-.62 0-1.13.11-1.53.33-.4.22-.7.54-.89.96-.13.28-.21.6-.23.97h4.13c-.01-.37-.09-.69-.23-.97-.19-.42-.49-.74-.89-.96zm-1.59 2.47c.36 0 .66-.08.89-.23.23-.15.38-.38.45-.7h-2.68c.07.32.22.55.45.7.23.15.53.23.89.23zm-5.41-2.47c-.36-.22-.8-.33-1.33-.33-.53 0-.97.11-1.33.33-.36.22-.62.54-.77.96-.09.28-.14.6-.14.97h4.01c0-.37-.05-.69-.14-.97-.15-.42-.41-.74-.77-.96zm-1.33 2.47c.36 0 .66-.08.89-.23.23-.15.38-.38.45-.7h-2.68c.07.32.22.55.45.7.23.15.53.23.89.23zm-6.67-7.47c-2.21 0-3.99 1.79-3.99 4 0 2.21 1.78 4 3.99 4 2.21 0 3.99-1.79 3.99-4 0-2.21-1.78-4-3.99-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5zm13.34-6.5c-2.21 0-3.99 1.79-3.99 4 0 2.21 1.78 4 3.99 4 2.21 0 3.99-1.79 3.99-4 0-2.21-1.78-4-3.99-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5zm-7.34-6.5h-5.66v1.5h5.66v-1.5z"/></svg>
        ) },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuxuryHeading
              title="Our Leadership"
              subtitle="Visionaries shaping the future of premium technology"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={cardVariants}>
                                <div className="flex flex-col items-center">
                  {/* Profile Photo - Above the card */}
                  <div className="relative mb-6 rounded-full overflow-hidden border-4 border-luxury-gold-300/30 group-hover:border-luxury-gold-300/50 transition-colors" style={{ width: '120px', height: '120px' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="120px"
                      className="object-cover filter brightness-95 group-hover:brightness-100 transition-all"
                      priority
                    />
                  </div>
                  
                  {/* Card - Below the photo */}
                  <LuxuryCard className="w-full transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center text-center p-8">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                        {member.name}
                      </h3>
                      <p className="text-luxury-gold-300/70 mb-4 font-medium">{member.role}</p>
                      <p className="text-gray-300 leading-relaxed max-w-lg">{member.bio}</p>
                    </div>
                  </LuxuryCard>
                  
                  {/* Social Icons - Below the card */}
                  <div className="flex justify-center gap-4 mt-6">
                    {member.socials?.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-3 rounded-full bg-gray-800/50 hover:bg-[#c6a255]/20 text-gray-400 hover:text-[#c6a255] transition-all duration-200 hover:scale-110 cursor-pointer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-24"
          >
            <LuxuryCard className="transform hover:scale-[1.01] transition-transform duration-300">
              <div className="p-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-center text-lg leading-relaxed">
                  At Sanganak, we believe in pushing the boundaries of what's possible in technology. 
                  Our leadership team combines deep technical expertise with creative vision to deliver 
                  premium solutions that transform businesses and elevate digital experiences.
                </p>
              </div>
            </LuxuryCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center"
          >
            <h3 className="text-2xl font-medium text-luxury-gold-300/70 mb-6">Join Our Team</h3>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for excellence.
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
