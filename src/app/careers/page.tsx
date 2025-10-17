import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import JobCard from '@/components/careers/JobCard';
import { Code2, Smartphone, Palette, Database, Brain, Gem } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at SanganakHQ | Join Our Elite Team of Tech Innovators',
  description: 'Join SanganakHQ - the premium IT boutique. We\'re hiring elite developers, designers, and tech innovators for luxury branding, AI solutions, blockchain development, and bespoke applications. Remote positions available.',
  keywords: 'SanganakHQ careers, tech jobs, developer jobs, designer jobs, AI engineer jobs, blockchain jobs, remote jobs, premium tech careers, luxury tech jobs, elite development team',
  openGraph: {
    title: 'Careers at SanganakHQ | Join Our Elite Team of Tech Innovators',
    description: 'Join SanganakHQ - the premium IT boutique. We\'re hiring elite developers, designers, and tech innovators for luxury branding, AI solutions, blockchain development, and bespoke applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SanganakHQ Careers - Join Our Elite Team',
        type: 'image/png'
      }
    ],
    type: 'website',
    url: 'https://sanganak.org/careers'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at SanganakHQ | Join Our Elite Team of Tech Innovators',
    description: 'Join SanganakHQ - the premium IT boutique. We\'re hiring elite developers, designers, and tech innovators for luxury branding, AI solutions, blockchain development, and bespoke applications.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://sanganak.org/careers'
  }
};

// JSON-LD Schema for Careers Page
const careersSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Elite Tech Positions at SanganakHQ',
  description: 'Join our premium IT boutique team of elite developers, designers, and tech innovators working on luxury branding, AI solutions, blockchain development, and bespoke applications.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'SanganakHQ',
    url: 'https://sanganak.org',
    logo: 'https://sanganak.org/Logo.ico',
    description: 'Premium IT boutique delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions.'
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Bihar',
      addressLocality: 'Remote'
    }
  },
  employmentType: 'FULL_TIME',
  workHours: 'Full-time',
  datePosted: new Date().toISOString(),
  validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 500000,
      maxValue: 2000000,
      unitText: 'YEAR'
    }
  },
  jobBenefits: [
    'Remote work flexibility',
    'Premium tech stack exposure',
    'Luxury brand projects',
    'Cutting-edge AI and blockchain work',
    'Competitive compensation',
    'Professional development opportunities'
  ],
  skills: [
    'JavaScript',
    'React',
    'Node.js',
    'AI/ML',
    'Blockchain',
    'UI/UX Design',
    'Brand Management',
    'Mobile Development'
  ]
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Brand Manager",
      icon: <Gem className="w-12 h-12 text-[#c6a255]" />,
      description: "Lead our luxury brand strategy and elevate Sanganak's premium market position through sophisticated brand management and strategic communications.",
      requirements: [
        "Demonstrated success in building and managing luxury brands",
        "Portfolio showcasing premium brand identity projects",
        "Deep understanding of digital luxury market trends",
        "Proven ability to craft compelling brand narratives"
      ],
      location: "Remote / Bihar, India",
      type: "Full-time"
    },
    {
      title: "Full Stack JS Developer",
      icon: <Code2 className="w-12 h-12 text-[#c6a255]" />,
      description: "Join our elite team of full-stack developers working with cutting-edge JavaScript technologies including Next.js, React, and Node.js.",
      requirements: [
        "Strong portfolio of full-stack JavaScript projects",
        "Demonstrated expertise with modern JS frameworks",
        "History of successful cloud deployments",
        "Commitment to code quality and best practices"
      ],
      location: "Remote / Bihar, India",
      type: "Full-time"
    },
    {
      title: "Mobile Developer",
      icon: <Smartphone className="w-12 h-12 text-[#c6a255]" />,
      description: "Create exceptional mobile experiences using React Native and native technologies for our premium clientele.",
      requirements: [
        "Portfolio of published mobile applications",
        "Proven track record with React Native development",
        "Demonstrated UI/UX sensibility in mobile apps",
        "History of successful app store deployments"
      ],
      location: "Remote / Bihar, India",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      icon: <Palette className="w-12 h-12 text-[#c6a255]" />,
      description: "Design luxurious and intuitive interfaces that elevate our premium digital products to new heights.",
      requirements: [
        "Outstanding portfolio of luxury digital designs",
        "Demonstrated mastery of modern design tools",
        "Proven experience with design systems",
        "History of successful premium product designs"
      ],
      location: "Remote / Bihar, India",
      type: "Full-time"
    },
    {
      title: "Blockchain Engineer",
      icon: <Database className="w-12 h-12 text-[#c6a255]" />,
      description: "Lead the development of innovative blockchain solutions and smart contracts for our cutting-edge projects.",
      requirements: [
        "Portfolio of deployed blockchain projects",
        "Proven smart contract development expertise",
        "Demonstrated cryptography implementation",
        "Track record in DeFi protocol development"
      ],
      location: "Remote / Bihar, India",
      type: "Full-time"
    },
    {
      title: "AI Engineer",
      icon: <Brain className="w-12 h-12 text-[#c6a255]" />,
      description: "Push the boundaries of artificial intelligence by developing sophisticated AI solutions for our premium services.",
      requirements: [
        "Portfolio of implemented AI/ML solutions",
        "Demonstrated expertise in deep learning and NLP",
        "Proven track record with AI frameworks",
        "Published research or significant projects"
      ],
      location: "Remote / Bihar, India",
      type: "Full-time"
    }
  ];

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <LuxuryHeading
            title="Join Our Elite Team"
            subtitle="Shape the future of premium technology solutions"
          />

          <div className="mt-16 space-y-8 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                {...job}
              />
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
