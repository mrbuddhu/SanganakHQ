import { motion } from 'framer-motion';
import Image from 'next/image';

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
    // === START HERO SECTION ===
        <section id="hero" className="relative min-h-screen py-2 sm:py-4 md:py-6 flex flex-col items-center justify-center overflow-x-hidden pb-[70px] sm:pb-0">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
          <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,rgba(var(--luxury-gold-300),0.04)_25%,transparent_25%,transparent_75%,rgba(var(--luxury-gold-300),0.04)_75%,rgba(var(--luxury-gold-300),0.04))]" style={{ backgroundSize: '80px 80px' }} />
        </div>
      </div>
      <div className="relative w-full z-10 pt-2">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Testimonial Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center pb-2 sm:pb-3 md:pb-4"
          >
            <div className="bg-black/50 backdrop-blur-md border border-luxury-gold-300/25 rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl shadow-luxury-gold-300/10">
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
                      className="w-3 h-3 text-yellow-400 drop-shadow-sm"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex flex-col ml-3 gap-1 justify-center">
                <span className="text-[#c6a255] text-xs font-medium">15+ Global Clients</span>
                <span className="text-white text-xs font-medium">50+ Deliveries</span>
              </div>
            </div>
          </motion.div>

          <div className="w-full flex justify-center mt-1 sm:mt-2 md:mt-3 mb-3 sm:mb-4 md:mb-5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image 
                src="/Globe.jpg" 
                alt="Sanganak Company Logo" 
                width={200} 
                height={200} 
                className="mx-auto w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] drop-shadow-2xl"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-luxury-gold-300/5 rounded-full" />
            </motion.div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4 md:space-y-5 mx-auto max-w-[90%] sm:max-w-full">
            <div className="space-y-2 sm:space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4 w-full"
                style={{
                  background: 'linear-gradient(135deg, #c6a255, #e9d5a1, #c6a255, #f4e6b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(198, 162, 85, 0.4)',
                  overflowWrap: 'break-word',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease-in-out infinite'
                }}
              >
                SANGANAK
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-2xl font-bold tracking-wide mb-2 sm:mb-3"
                style={{
                  background: 'linear-gradient(to right, #c6a255, #e9d5a1, #c6a255)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(198, 162, 85, 0.3)'
                }}
              >
                {displayText}
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-base sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3"
              >
                We architect premium digital experiences that transform ambitious visions into <br className="hidden sm:block" />
                <span className="font-extrabold text-[#c6a255] drop-shadow-sm">market-leading businesses</span>,{' '}
                <span className="font-extrabold text-[#c6a255] drop-shadow-sm">premium experiences</span>,{' '}
                <span className="font-extrabold text-[#c6a255] drop-shadow-sm">& unstoppable growth</span>.
              </motion.h3>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm md:text-base text-gray-400 max-w-4xl mx-auto px-4 leading-relaxed font-medium"
            >
              Branding | Design | Development | AI & Blockchain
            </motion.p>

            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-4 sm:mt-6 md:mt-8 mb-8 sm:mb-10">
              {[
                { emoji: "👑", text: "Elite Clientele" },
                { emoji: "⭐", text: "Bespoke Solutions" },
                { emoji: "✨", text: "ROI Driven" }
              ].map((item, index) => (
              <motion.div
                  key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center space-y-2 group cursor-pointer"
                >
                  <motion.span 
                    className="text-3xl sm:text-4xl drop-shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.emoji}
                  </motion.span>
                  <span className="text-[#c6a255] font-semibold text-sm sm:text-base group-hover:text-[#e9d5a1] transition-colors duration-300 drop-shadow-sm">
                    {item.text}
                  </span>
              </motion.div>
              ))}
            </div>

            {/* Trusted by line above client logos */}
            <div className="text-gray-400 text-base font-medium mb-1 mt-4 sm:mt-6 md:mt-8 text-center">Trusted by 15+ Global Brands</div>

            {/* Client Logos Marquee */}
            <div className="relative overflow-hidden mt-1 mb-0 sm:mb-0">
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-2 items-center py-3"
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
      </div>
      {/* Animated Counters */}
      <div className="flex justify-center gap-8 mt-8">
        <div className="text-center">
          <span className="text-3xl font-bold text-[#c6a255]">{projectCount}+</span>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-[#c6a255]">{clientCount}+</span>
          <p className="text-gray-300">Happy Clients</p>
        </div>
      </div>
    </section>
  );
} 