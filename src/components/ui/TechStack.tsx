'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LuxuryHeading from './LuxuryHeading';

const techStack = [
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/c6a255' },
  { name: 'Loom', icon: 'https://cdn.simpleicons.org/loom/c6a255' },
  { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva/c6a255' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/c6a255' },
  { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/c6a255' },
  { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/c6a255' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/c6a255' },
  { name: 'React Native', icon: 'https://cdn.simpleicons.org/react/c6a255' },
  { name: 'Expo', icon: 'https://cdn.simpleicons.org/expo/c6a255' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/c6a255' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/c6a255' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/c6a255' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/c6a255' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/c6a255' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/c6a255' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/c6a255' },
  { name: 'Ethereum', icon: 'https://cdn.simpleicons.org/ethereum/c6a255' },
  { name: 'Solidity', icon: 'https://cdn.simpleicons.org/solidity/c6a255' },
  { name: 'Solana', icon: 'https://cdn.simpleicons.org/solana/c6a255' },
  { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/c6a255' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/c6a255' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/c6a255' },
  { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/c6a255' },
  { name: 'PayPal', icon: 'https://cdn.simpleicons.org/paypal/c6a255' },
  { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/c6a255' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/c6a255' },
  { name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify/c6a255' },
  { name: 'Jest', icon: 'https://cdn.simpleicons.org/jest/c6a255' },
  { name: 'Cypress', icon: 'https://cdn.simpleicons.org/cypress/c6a255' },
  { name: 'Flutterflow', icon: 'https://cdn.simpleicons.org/flutter/c6a255' }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">
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
                <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center bg-white/5 rounded-xl backdrop-blur-sm border border-luxury-gold-300/20 transition-all duration-500 group-hover:border-luxury-gold-300/50 group-hover:shadow-[0_10px_30px_-5px_rgba(198,162,85,0.2)] group-hover:scale-110 group-hover:rotate-2 cursor-pointer mb-8">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-500 group-hover:scale-125 opacity-100 group-hover:brightness-125 group-hover:drop-shadow-[0_0_10px_rgba(198,162,85,0.3)]"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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