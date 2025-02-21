'use client';

import { useState } from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { ExternalLink, Code2, Palette, Database, Smartphone, Brain } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'blockchain', label: 'Blockchain' },
  ];

  const projects = [
    {
      title: "TradePro Analytics Platform",
      category: "web",
      description: "Enterprise-grade trading platform with real-time market analysis, AI-driven insights, and institutional-grade security.",
      image: "/images/portfolio/tradepro-dashboard.webp",
      technologies: ["Next.js", "TypeScript", "WebSocket", "TensorFlow", "PostgreSQL"],
      icon: <Code2 className="w-8 h-8 text-luxury-gold-300" />,
      link: "#"
    },
    {
      title: "LuxeCart Mobile",
      category: "mobile",
      description: "Premium shopping experience featuring AR product previews, VIP concierge service, and seamless checkout.",
      image: "/images/portfolio/luxecart-mobile.webp",
      technologies: ["React Native", "Node.js", "AR Kit", "Stripe"],
      icon: <Smartphone className="w-8 h-8 text-luxury-gold-300" />,
      link: "#"
    },
    {
      title: "IntelliSense Analytics",
      category: "ai",
      description: "Advanced business intelligence platform using ML for predictive analytics and automated reporting.",
      image: "/images/portfolio/intellisense-analytics.webp",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      icon: <Brain className="w-8 h-8 text-luxury-gold-300" />,
      link: "#"
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <LuxuryHeading
            title="Our Portfolio"
            subtitle="Explore our collection of premium digital solutions that demonstrate our commitment to excellence and innovation."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-16 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-luxury-gold-300 border-luxury-gold-300 text-black font-semibold'
                    : 'border-luxury-gold-300/20 text-gray-400 hover:border-luxury-gold-300 hover:text-luxury-gold-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <LuxuryCard key={index}>
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-luxury-gold-300/10 text-luxury-gold-300 border border-luxury-gold-300/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
