import { motion } from 'framer-motion';
import Image from 'next/image';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

export default function HeroSection({
  displayText,
  projectCount,
  clientCount
}: {
  displayText: string;
  projectCount: number;
  clientCount: number;
}) {
  return (
    <section id="hero" className="relative w-full py-10 sm:py-14 md:py-20 lg:py-24 flex flex-col items-center justify-start overflow-x-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,rgba(198,162,85,0.06)_25%,transparent_25%,transparent_75%,rgba(198,162,85,0.06)_75%)]" style={{ backgroundSize: '80px 80px' }} />
      </div>
      <div className="relative w-full z-10 pt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonial Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center pb-4 sm:pb-6 md:pb-8"
          >
            <div className="bg-black/60 backdrop-blur-md border border-[#c6a255]/25 rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_0_24px_-4px_rgba(198,162,85,0.12)]">
              <div className="flex -space-x-2 flex-col items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden ring-2 ring-black">
                    <Image
                      src="/testimonials/headshots/shyam-sharma.jpg"
                      alt="Shyam Sunder Sharma"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden ring-2 ring-black"
                    title="Ankit Kumar - Medical Professional, Bengaluru">
                    <Image
                      src="/testimonials/headshots/ankit-kumar.jpg"
                      alt="Ankit Kumar - Medical Professional, Bengaluru"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden ring-2 ring-black">
                    <Image
                      src="/testimonials/headshots/shubham-kumar.jpg"
                      alt="Shubham Kumar"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden bg-gray-800 flex items-center justify-center ring-2 ring-black">
                    <Image
                      src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&auto=format&fit=crop&q=80`}
                      alt="Client 4"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden bg-gray-800 flex items-center justify-center ring-2 ring-black">
                    <Image
                      src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=32&h=32&auto=format&fit=crop&q=80`}
                      alt="Client 5"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex flex-col ml-3 gap-1 justify-center">
                <span className="text-[#c6a255] text-[10px] sm:text-xs font-medium whitespace-nowrap">15+ Global Clients</span>
                <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">6 Continents</span>
                <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">50+ Deliveries</span>
              </div>
            </div>
          </motion.div>

          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mx-auto max-w-[90%] sm:max-w-3xl">
            <div className="space-y-4 sm:space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{
                  fontFamily: 'var(--font-luxury), Georgia, serif',
                }}
              >
                We fix broken growth systems.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl sm:text-2xl text-[#c6a255] font-medium"
                style={{ fontFamily: 'var(--font-luxury), Georgia, serif' }}
              >
                Design, technology, and acquisition — done right.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
              >
                Founder-led execution for startups, brands, and operators who want results — not coordination headaches.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
              >
                <LuxuryButton
                  as="a"
                  href="/portfolio"
                  variant="secondary"
                  className="w-full sm:w-auto text-center font-bold py-3 px-8"
                >
                  View Projects
                </LuxuryButton>
                <LuxuryButton
                  as="a"
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center font-bold py-3 px-8"
                >
                  Book a Strategy Call
                </LuxuryButton>
              </motion.div>
            </div>

            

            

            

            {/* Client Logos Marquee */}
            <div className="relative overflow-hidden mt-6 sm:mt-8 md:mt-10">
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                                 className="flex gap-1 items-center py-3"
              >
                {[
                  { name: 'NFTCollect', logo: '/client-logos/nftcollect.png' },
                  { name: 'GlobalEats', logo: '/client-logos/globaleats.png' },
                  { name: 'Interio', logo: '/client-logos/interio.png' },
                  { name: 'MedicoBuddy', logo: '/client-logos/medicobuddy.png' },
                  { name: 'Burgerrr', logo: '/client-logos/burgerrr.png' },
                  { name: 'CreatorsHome', logo: '/client-logos/creatorshome.png' },
                  { name: 'Realtor', logo: '/client-logos/Realtor.png' },
                  { name: 'Beam', logo: '/client-logos/Beam.png' },
                  { name: 'NFTCollect', logo: '/client-logos/nftcollect.png' },
                  { name: 'GlobalEats', logo: '/client-logos/globaleats.png' },
                  { name: 'Interio', logo: '/client-logos/interio.png' },
                  { name: 'MedicoBuddy', logo: '/client-logos/medicobuddy.png' },
                  { name: 'Burgerrr', logo: '/client-logos/burgerrr.png' },
                  { name: 'CreatorsHome', logo: '/client-logos/creatorshome.png' },
                  { name: 'Realtor', logo: '/client-logos/Realtor.png' },
                  { name: 'Beam', logo: '/client-logos/Beam.png' }
                ].map((client, index) => (
                  <motion.div
                    key={index}
                    className="flex-none w-[240px] h-[100px] relative group"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} - Premium Client`}
                      fill
                      sizes="(max-width: 768px) 180px, 240px"
                      className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-125 brightness-110"
                      priority={index < 8}
                      loading={index < 8 ? "eager" : "lazy"}
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
      </div>
    </section>
  );
} 