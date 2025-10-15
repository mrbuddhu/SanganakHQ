'use client';

import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

export default function HealthcareIndustryPage() {
  return (
    <MainLayout>
      <section className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <LuxuryHeading title="Healthcare" subtitle="Secure, compliant platforms that improve outcomes" />
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
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://sanganak.org/industries' },
              { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://sanganak.org/industries/healthcare' }
            ]
          })
        }}
      />
    </MainLayout>
  );
}


