'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { articles } from '@/app/articles';

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
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <LuxuryCard className="h-full transition-transform duration-300 hover:scale-[1.02]">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-sm sm:text-base text-gray-500 mb-3">By {article.author}</p>
                    <p className="text-sm sm:text-base mb-4">{article.excerpt}</p>
                    <a href={`/blog/${article.id}`} className="text-[#c6a255] text-sm sm:text-base hover:text-[#d4b06a] transition-colors">
                      Read more
                    </a>
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

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = articles.find((post) => post.id === Number(id));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <LuxuryCard>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">By {post.author}</p>
      <p className="mt-4">{post.content}</p>
    </LuxuryCard>
  );
};

export default BlogPage;
