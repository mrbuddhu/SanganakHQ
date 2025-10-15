'use client';

import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import Link from 'next/link';

const industries = [
  { title: 'Ecommerce', slug: 'ecommerce', description: 'Scale DTC revenue with conversion-first design, headless commerce, and growth systems.' },
  { title: 'SaaS', slug: 'saas', description: 'Ship faster, reduce churn, and grow MRR with product-led design and scalable platforms.' },
  { title: 'Healthcare', slug: 'healthcare', description: 'Build secure, compliant platforms that improve patient outcomes and efficiency.' },
];

export default function IndustriesPage() {
  return (
    <MainLayout>
      <section className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <LuxuryHeading title="Industries" subtitle="Tailored solutions for your market" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                <LuxuryCard className="p-6 h-full">
                  <h3 className="text-xl font-bold text-[#c6a255] mb-2">{ind.title}</h3>
                  <p className="text-gray-300">{ind.description}</p>
                </LuxuryCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* JSON-LD: Breadcrumbs (non-visual) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanganak.org/' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://sanganak.org/industries' }
            ]
          })
        }}
      />
    </MainLayout>
  );
}


