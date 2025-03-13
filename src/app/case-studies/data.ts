// Case Studies Data
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatar: string;
  };
  metrics: {
    label: string;
    value: string;
    period: string;
  }[];
  beforeMetrics: string[];
  afterMetrics: string[];
  credits: {
    branding: {
      name: string;
      work: string;
    };
    designing: {
      name: string;
      work: string;
    };
    development: {
      name: string;
      work: string;
    };
    deployment: {
      name: string;
      work: string;
    };
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'creators-home',
    title: 'How We Transformed Content Creation: 300% Revenue Growth in 90 Days',
    client: 'Creator Economy Platform',
    industry: 'SaaS / Content Creation',
    duration: '6 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/creatorshome_zzokl2.jpg',
    challenge: 'A visionary creator platform needed to scale rapidly, automate content workflows, and maximize creator earnings in a competitive market.',
    solution: 'We engineered a high-performance SaaS platform with AI-powered content tools, real-time analytics, and automated monetization features.',
    results: [
      '300% increase in creator earnings',
      '5X faster content production',
      '98% user satisfaction rate',
      '150K+ monthly active users'
    ],
    technologies: ['Next.js', 'Node.js', 'OpenAI', 'AWS'],
    testimonial: {
      quote: "The AI tools and analytics have completely transformed our content workflow. We're seeing unprecedented growth in both audience and revenue.",
      name: "Sarah Johnson",
      role: "Head of Creator Success",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Revenue', value: '+300%', period: '90 days' },
      { label: 'Efficiency', value: '+400%', period: '90 days' },
      { label: 'Satisfaction', value: '98%', period: '90 days' },
      { label: 'Timeframe', value: '90 days', period: '' }
    ],
    beforeMetrics: [
      'Manual content scheduling',
      'Limited analytics insights',
      '4+ hours daily on content management',
      'Basic monetization options'
    ],
    afterMetrics: [
      'AI-powered content scheduling',
      'Real-time performance analytics',
      '1 hour daily on content management',
      'Multiple revenue streams integrated'
    ],
    credits: {
      branding: {
        name: 'msbuddhu',
        work: 'Brand Strategy & Identity'
      },
      designing: {
        name: 'msbuddhu',
        work: 'UI/UX & Visual Design'
      },
      development: {
        name: 'mrbuddhu',
        work: 'Full-stack Development'
      },
      deployment: {
        name: 'mrbuddhu',
        work: 'DevOps & Cloud Infrastructure'
      }
    }
  },
  {
    id: 'interio',
    title: 'Interior Design Platform: 700% Designer Bookings in 30 Days',
    client: 'Luxury Design Marketplace',
    industry: 'Interior Design / AR',
    duration: '6 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/interio_kq1fky.jpg',
    challenge: 'Create an immersive interior design platform that revolutionizes how clients visualize and book luxury design services.',
    solution: 'Developed an AR-powered platform with real-time visualization, instant booking, and designer portfolio showcase.',
    results: [
      '700% increase in designer bookings',
      '400% platform revenue growth',
      '90% client satisfaction rate',
      '200+ premium designers onboarded'
    ],
    technologies: ['React', 'Three.js', 'WebGL', 'AR Kit'],
    testimonial: {
      quote: "The team at Sanganak Premium delivered an exceptional design system that perfectly captures our brand's luxury essence.",
      name: "Shyam Sharma",
      role: "@Interio",
      avatar: "/testimonials/headshots/shyam-sharma.jpg"
    },
    metrics: [
      { label: 'Bookings', value: '+700%', period: '30 days' },
      { label: 'Revenue', value: '+400%', period: '30 days' },
      { label: 'Satisfaction', value: '90%', period: '30 days' },
      { label: 'Timeframe', value: '30 days', period: '' }
    ],
    beforeMetrics: [
      'Traditional design process',
      'Limited visualization',
      'Lengthy revision cycles',
      'Basic project tracking'
    ],
    afterMetrics: [
      'AR-powered design preview',
      'Real-time 3D visualization',
      'Instant design updates',
      'Advanced project management'
    ],
    credits: {
      branding: {
        name: 'msbuddhu',
        work: 'Brand Strategy & Identity'
      },
      designing: {
        name: 'msbuddhu',
        work: 'UI/UX & Visual Design'
      },
      development: {
        name: 'mrbuddhu',
        work: 'Full-stack Development'
      },
      deployment: {
        name: 'mrbuddhu',
        work: 'DevOps & Cloud Infrastructure'
      }
    }
  },
  {
    id: 'globaleats',
    title: 'Global Food Platform: 500% Restaurant Partner Growth in 60 Days',
    client: 'International Culinary Marketplace',
    industry: 'Food Tech / Marketplace',
    duration: '7 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/globaleats_oqjzn8.jpg',
    challenge: 'Build a scalable platform connecting international cuisines with local food enthusiasts while ensuring authentic experiences.',
    solution: 'Created an AI-powered food discovery platform with cultural insights, real-time availability, and smart recommendations.',
    results: [
      '500% growth in restaurant partners',
      '300% increase in order volume',
      '95% customer satisfaction',
      '1M+ monthly active users'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    testimonial: {
      quote: "Their expertise in food tech platforms helped us create a seamless experience for our global customer base.",
      name: "Shubham Kumar",
      role: "@GlobalEats",
      avatar: "/testimonials/headshots/shubham-kumar.jpg"
    },
    metrics: [
      { label: 'Partners', value: '+500%', period: '60 days' },
      { label: 'Orders', value: '+300%', period: '60 days' },
      { label: 'Satisfaction', value: '95%', period: '60 days' },
      { label: 'Timeframe', value: '60 days', period: '' }
    ],
    beforeMetrics: [
      'Limited cuisine options',
      '45+ min delivery time',
      'Basic order tracking',
      'Phone-based support'
    ],
    afterMetrics: [
      'Global cuisine selection',
      '30 min average delivery',
      'Real-time GPS tracking',
      '24/7 in-app support'
    ],
    credits: {
      branding: {
        name: 'msbuddhu',
        work: 'Brand Strategy & Identity'
      },
      designing: {
        name: 'msbuddhu',
        work: 'UI/UX & Visual Design'
      },
      development: {
        name: 'mrbuddhu',
        work: 'Full-stack Development'
      },
      deployment: {
        name: 'mrbuddhu',
        work: 'DevOps & Cloud Infrastructure'
      }
    }
  },
  {
    id: 'medicobuddy',
    title: 'Healthcare Revolution: 10X Patient Engagement, 5X Revenue in 60 Days',
    client: 'Leading Medical Platform',
    industry: 'Healthcare / Telemedicine',
    duration: '8 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/medicobuddy_fudnrl.jpg',
    challenge: 'Transform traditional healthcare delivery with a secure, scalable telemedicine platform while ensuring HIPAA compliance and optimal user experience.',
    solution: 'Developed an AI-powered healthcare platform with secure video consultations, smart health records, and automated patient engagement systems.',
    results: [
      '1000% increase in patient engagement',
      '500% revenue growth',
      '15-minute average consultation time',
      'Zero security incidents'
    ],
    technologies: ['React', 'Node.js', 'WebRTC', 'AWS'],
    testimonial: {
      quote: "MedicoBuddy has revolutionized how we deliver healthcare. The platform's efficiency and security features have exceeded all expectations.",
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Engagement', value: '+1000%', period: '60 days' },
      { label: 'Revenue', value: '+500%', period: '60 days' },
      { label: 'Efficiency', value: '+400%', period: '60 days' },
      { label: 'Timeframe', value: '60 days', period: '' }
    ],
    beforeMetrics: [
      'Paper-based records',
      '2+ days appointment wait',
      'Limited patient access',
      'No remote consultations'
    ],
    afterMetrics: [
      'Digital health records',
      'Same-day appointments',
      '24/7 patient access',
      'Integrated telemedicine'
    ],
    credits: {
      branding: {
        name: 'msbuddhu',
        work: 'Brand Strategy & Identity'
      },
      designing: {
        name: 'msbuddhu',
        work: 'UI/UX & Visual Design'
      },
      development: {
        name: 'mrbuddhu',
        work: 'Full-stack Development'
      },
      deployment: {
        name: 'mrbuddhu',
        work: 'DevOps & Cloud Infrastructure'
      }
    }
  },
  {
    id: 'burgerrr',
    title: 'Food Delivery Innovation: 600% Order Growth in 45 Days',
    client: 'Premium Food Tech Platform',
    industry: 'Food Service / Tech',
    duration: '5 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/burgerrr_xhsb8c.jpg',
    challenge: 'Revolutionize the gourmet food delivery experience with AI-powered recommendations and real-time tracking.',
    solution: 'Built a cutting-edge food delivery platform with smart order prediction, real-time tracking, and personalized user experiences.',
    results: [
      '600% increase in daily orders',
      '300% revenue growth',
      '25% reduction in delivery time',
      '50K+ active users'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    testimonial: {
      quote: "Working with Sanganak Premium was a game-changing experience. Their attention to detail and innovative solutions exceeded our expectations.",
      name: "Ankit Kumar",
      role: "@Burgerrr",
      avatar: "/testimonials/headshots/ankit-kumar.jpg"
    },
    metrics: [
      { label: 'Orders', value: '+600%', period: '45 days' },
      { label: 'Revenue', value: '+300%', period: '45 days' },
      { label: 'Efficiency', value: '+25%', period: '45 days' },
      { label: 'Timeframe', value: '45 days', period: '' }
    ],
    beforeMetrics: [
      'Phone-based ordering',
      '45+ min delivery time',
      'Limited menu visibility',
      'Manual order tracking'
    ],
    afterMetrics: [
      'Instant mobile ordering',
      '25 min average delivery',
      'Dynamic menu with AI suggestions',
      'Real-time order tracking'
    ],
    credits: {
      branding: {
        name: 'msbuddhu',
        work: 'Brand Strategy & Identity'
      },
      designing: {
        name: 'msbuddhu',
        work: 'UI/UX & Visual Design'
      },
      development: {
        name: 'mrbuddhu',
        work: 'Full-stack Development'
      },
      deployment: {
        name: 'mrbuddhu',
        work: 'DevOps & Cloud Infrastructure'
      }
    }
  },
  {
    id: 'nftcollect',
    title: 'NFT Platform Success: 800% Trading Volume Growth in 30 Days',
    client: 'Web3 Innovation Leader',
    industry: 'NFT / Blockchain',
    duration: '4 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750710/nftcollect_g3ygja.jpg',
    challenge: 'Build a next-gen NFT platform that simplifies digital asset trading while providing advanced portfolio management and market insights.',
    solution: 'Created an intuitive NFT platform with AI-driven price predictions, real-time analytics, and secure wallet integration.',
    results: [
      '800% increase in trading volume',
      '400% user base growth',
      '95% faster transactions',
      '100K+ active traders'
    ],
    technologies: ['React', 'Solidity', 'Web3.js', 'TensorFlow'],
    testimonial: {
      quote: "NFTCollect has transformed the NFT trading experience. The AI insights and portfolio management tools are game-changing.",
      name: "Emma Thompson",
      role: "Lead Blockchain Strategist",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Volume', value: '+800%', period: '30 days' },
      { label: 'Users', value: '+400%', period: '30 days' },
      { label: 'Speed', value: '+95%', period: '30 days' },
      { label: 'Timeframe', value: '30 days', period: '' }
    ],
    beforeMetrics: [
      'Complex portfolio tracking',
      'Delayed market data',
      'Manual trading process',
      'Basic security features'
    ],
    afterMetrics: [
      'Automated portfolio management',
      'Real-time market insights',
      'One-click trading',
      'Advanced security protocols'
    ],
    credits: {
      branding: {
        name: 'msbuddhu',
        work: 'Brand Strategy & Identity'
      },
      designing: {
        name: 'msbuddhu',
        work: 'UI/UX & Visual Design'
      },
      development: {
        name: 'mrbuddhu',
        work: 'Full-stack Development'
      },
      deployment: {
        name: 'mrbuddhu',
        work: 'DevOps & Cloud Infrastructure'
      }
    }
  }
];

export const caseStudyCategories = [
  {
    id: 'ai-innovation',
    title: 'AI & Innovation',
    description: 'Transforming businesses with cutting-edge AI solutions',
    projects: ['creators-home', 'medicobuddy', 'globaleats'],
    metrics: {
      averageGrowth: '600%',
      timeframe: '60 days'
    }
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies',
    description: 'Revolutionary solutions using AR, Web3, and Blockchain',
    projects: ['interio', 'nftcollect'],
    metrics: {
      averageGrowth: '750%',
      timeframe: '30 days'
    }
  },
  {
    id: 'digital-platforms',
    title: 'Digital Platforms',
    description: 'Scalable solutions for modern businesses',
    projects: ['burgerrr', 'globaleats', 'creators-home'],
    metrics: {
      averageGrowth: '400%',
      timeframe: '45 days'
    }
  },
  {
    id: 'healthcare-tech',
    title: 'Healthcare Technology',
    description: 'Secure and compliant healthcare solutions',
    projects: ['medicobuddy'],
    metrics: {
      averageGrowth: '500%',
      timeframe: '60 days'
    }
  }
];
