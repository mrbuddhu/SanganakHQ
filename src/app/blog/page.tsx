import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { articles } from '@/app/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | SanganakHQ Insights | Premium IT Boutique Articles',
  description: 'Read SanganakHQ blog for expert insights on luxury branding, elite design, AI solutions, blockchain innovation, and premium digital strategies. Stay updated with the latest in premium technology.',
  keywords: 'SanganakHQ blog, premium IT insights, luxury branding articles, elite design tips, AI solutions blog, blockchain innovation, digital strategy, technology insights',
  openGraph: {
    title: 'Blog | SanganakHQ Insights | Premium IT Boutique Articles',
    description: 'Read SanganakHQ blog for expert insights on luxury branding, elite design, AI solutions, blockchain innovation, and premium digital strategies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SanganakHQ Blog - Premium IT Insights',
        type: 'image/png'
      }
    ],
    type: 'website',
    url: 'https://sanganak.org/blog'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | SanganakHQ Insights | Premium IT Boutique Articles',
    description: 'Read SanganakHQ blog for expert insights on luxury branding, elite design, AI solutions, blockchain innovation, and premium digital strategies.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://sanganak.org/blog'
  }
};

const BlogPage = () => {
  return (
    <MainLayout>
      <main className="relative w-full overflow-visible">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-black/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
              <LuxuryHeading
                title="Insights & Perspectives"
                subtitle="Expert analysis and thought leadership from our team"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`} className="block">
                  <LuxuryCard className="h-full transition-transform duration-300 hover:scale-[1.02]">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-sm sm:text-base text-gray-500 mb-3">By {article.author}</p>
                    <p className="text-sm sm:text-base mb-4">{article.excerpt}</p>
                    <span className="text-[#c6a255] text-sm sm:text-base hover:text-[#d4b06a] transition-colors">
                      Read more
                    </span>
                  </LuxuryCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

// BlogPost component removed - individual blog posts are handled by [id]/page.tsx

export default BlogPage;
