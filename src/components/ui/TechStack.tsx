'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LuxuryHeading from './LuxuryHeading';

const techStack = [
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'Loom', icon: 'https://cdn.simpleicons.org/loom/000000' },
  { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva/000000' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/000000' },
  { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/000000' },
  { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/000000' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/000000' },
  { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/000000' },
  { name: 'Expo', icon: 'https://cdn.simpleicons.org/expo/000000' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/000000' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/000000' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/000000' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/000000' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/000000' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/000000' },
  { name: 'Ethereum', icon: 'https://cdn.simpleicons.org/ethereum/000000' },
  { name: 'Solidity', icon: 'https://cdn.simpleicons.org/solidity/000000' },
  { name: 'Solana', icon: 'https://cdn.simpleicons.org/solana/000000' },
  { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/000000' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/000000' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/000000' },
  { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/000000' },
  { name: 'PayPal', icon: 'https://cdn.simpleicons.org/paypal/000000' }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <LuxuryHeading
          title="Our Tech Stack"
          subtitle="Cutting-edge technologies we use"
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="group relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center bg-white/5 rounded-xl backdrop-blur-sm border border-luxury-gold-300/20 transition-all duration-300 group-hover:border-luxury-gold-300/50 group-hover:shadow-lg group-hover:shadow-luxury-gold-300/20 cursor-pointer">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 group-hover:scale-110 opacity-100 filter invert brightness-100 group-hover:brightness-110"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-luxury-gold-300 font-medium whitespace-nowrap bg-black/80 px-2 py-1 rounded-md border border-luxury-gold-300/20">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}