'use client';

import MainLayout from '@/components/layout/MainLayout';
import PricingSection from '@/components/sections/PricingSection';

export default function PricingPage() {
  return (
    <MainLayout>
      <main>
        <PricingSection />
        {/* JSON-LD: Breadcrumbs (non-visual) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanganak.org/' },
                { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://sanganak.org/pricing' }
              ]
            })
          }}
        />
      </main>
    </MainLayout>
  );
}


