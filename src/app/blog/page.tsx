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
      <main className="relative w-full">
        {/* Hero Section */}
        <section className="relative py-32 bg-black/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <LuxuryHeading
                title="Insights & Perspectives"
                subtitle="Expert analysis and thought leadership from our team"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <LuxuryCard>
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <p className="text-gray-500">By {article.author}</p>
                    <p>{article.excerpt}</p>
                    <a href={`/blog/${article.id}`} className="text-[#c6a255]">Read more</a>
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
