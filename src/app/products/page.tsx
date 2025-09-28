'use client';

import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | SanganakHQ Premium Digital Solutions | Coming Soon',
  description: 'Explore SanganakHQ premium products - SaaS tools, browser extensions, design systems, and design kits. Premium digital solutions crafted to elevate your digital experience.',
  keywords: 'SanganakHQ products, premium digital solutions, SaaS tools, browser extensions, design systems, design kits, digital products, premium tools',
  openGraph: {
    title: 'Products | SanganakHQ Premium Digital Solutions | Coming Soon',
    description: 'Explore SanganakHQ premium products - SaaS tools, browser extensions, design systems, and design kits.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SanganakHQ Products - Premium Digital Solutions',
        type: 'image/png'
      }
    ],
    type: 'website',
    url: 'https://sanganak.org/products'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | SanganakHQ Premium Digital Solutions | Coming Soon',
    description: 'Explore SanganakHQ premium products - SaaS tools, browser extensions, design systems, and design kits.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://sanganak.org/products'
  }
};

export default function Products() {
  const products = [
    {
      title: 'SaaS Tools',
      description: 'Enterprise-grade software solutions for modern businesses.',
      items: [
        { name: 'Analytics Dashboard', description: 'Real-time business intelligence platform' },
        { name: 'CRM Suite', description: 'Customer relationship management system' },
        { name: 'Project Manager', description: 'Agile project management tool' }
      ]
    },
    {
      title: 'Browser Extensions',
      description: 'Powerful browser add-ons to enhance productivity.',
      items: [
        { name: 'Code Assistant', description: 'AI-powered coding companion' },
        { name: 'Tab Manager', description: 'Smart browser tab organization' },
        { name: 'Web Clipper', description: 'Save and organize web content' }
      ]
    },
    {
      title: 'Design Systems',
      description: 'Comprehensive design frameworks for modern applications.',
      items: [
        { name: 'UI Component Library', description: 'Ready-to-use React components' },
        { name: 'Design Tokens', description: 'Customizable design variables' },
        { name: 'Icon Sets', description: 'Scalable vector icons' }
      ]
    },
    {
      title: 'Design Kits',
      description: 'Professional design resources for creators.',
      items: [
        { name: 'Wireframe Kit', description: 'Low-fidelity prototyping tools' },
        { name: 'UI Kit', description: 'High-fidelity design components' },
        { name: 'Brand Kit', description: 'Brand identity templates' }
      ]
    }
  ];

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#c6a255]/10 border border-[#c6a255] rounded-lg p-4 mb-8 text-center">
            <p className="text-[#c6a255] font-semibold">✨ Products Coming Soon! Stay tuned for our premium digital solutions.</p>
          </div>
          <LuxuryHeading
            title="Our Products"
            subtitle="Discover our suite of premium tools, extensions, and design resources crafted to elevate your digital experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {products.map((category, index) => (
              <LuxuryCard key={category.title}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item.name} className="border-b border-luxury-gold-300/10 pb-4 last:border-0">
                        <h4 className="text-luxury-gold-300 font-semibold mb-1">{item.name}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact">
                      <LuxuryButton>
                        Learn More
                      </LuxuryButton>
                    </Link>
                  </div>
                </div>
              </LuxuryCard>
            ))}
          </div>

          <div className="mt-20 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-6">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can build bespoke solutions tailored to your specific requirements.
            </p>
            <Link href="/contact">
              <LuxuryButton size="lg" variant="primary">
                Get in Touch
              </LuxuryButton>
            </Link>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
