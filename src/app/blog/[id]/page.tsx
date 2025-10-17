'use client';

import { useRouter } from 'next/navigation';
import LuxuryCard from '@/components/ui/LuxuryCard';

const posts = [
  {
    id: 1,
    title: 'Maximizing Your Business Potential with Custom Software Solutions',
    excerpt: 'Discover how tailored software solutions can drive efficiency and growth in your business.',
    content: 'In this blog post, we discuss the importance of custom software development and how it can be tailored to meet specific business needs. Our services include application development, system integration, and ongoing support. With real-world examples, learn how businesses have successfully implemented custom solutions to enhance their operations. By investing in custom software, companies can streamline processes, improve productivity, and ultimately achieve better results in their respective industries.',
    date: '2025-02-15',
    author: 'mrbuddhu'
  },
  {
    id: 2,
    title: 'The Power of Branding: Creating a Lasting Impression',
    excerpt: 'Learn how effective branding can elevate your business and connect with your audience.',
    content: 'Explore the significance of branding in today\'s market. Our services related to branding and design include logo creation, brand strategy, and visual identity development. This post provides tips on building a strong brand presence both online and offline. A well-defined brand not only attracts customers but also fosters loyalty and trust. By investing in branding, businesses can differentiate themselves from competitors and create a memorable impression that resonates with their target audience.',
    date: '2025-02-14',
    author: 'msbuddhu'
  },
  {
    id: 3,
    title: 'Why Your Business Needs a Comprehensive Digital Marketing Strategy',
    excerpt: 'Uncover the essential components of a successful digital marketing strategy.',
    content: 'This blog post explains the importance of digital marketing for businesses today. We highlight services such as SEO, content marketing, social media management, and PPC advertising, providing actionable insights for improving online visibility and engagement. In a world where consumers spend a significant amount of time online, having a robust digital marketing strategy is crucial. It allows businesses to reach their audience effectively, build brand awareness, and drive conversions, ensuring long-term success in the digital landscape.',
    date: '2025-02-13',
    author: 'mrbuddhu'
  },
  {
    id: 4,
    title: 'Transforming Ideas into Reality: The Software Development Journey',
    excerpt: 'Follow the journey of turning innovative ideas into powerful software solutions.',
    content: 'This comprehensive guide walks through the software development lifecycle, from initial concept to final deployment. We cover the importance of proper planning, agile methodologies, quality assurance, and continuous improvement. Learn about our approach to creating scalable, maintainable, and user-friendly applications that drive business success. Whether you\'re starting a new project or improving an existing system, understanding this journey is crucial for achieving optimal results.',
    date: '2025-02-12',
    author: 'mrbuddhu'
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const postId = parseInt(params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <button 
            onClick={() => router.back()}
            className="text-luxury-gold-300 hover:text-luxury-gold-400"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => router.back()}
          className="text-luxury-gold-300 hover:text-luxury-gold-400 mb-8"
        >
          ← Back to blog
        </button>
        <LuxuryCard>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(218,165,32,0.3)] tracking-tight">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-300 mb-8">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <time>{post.date}</time>
            </div>
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
        </LuxuryCard>
      </div>
    </div>
  );
}
