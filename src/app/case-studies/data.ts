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
    title: 'How We Transformed Content Creation: 180% Revenue Growth in 90 Days',
    client: 'Creator Economy Platform',
    industry: 'SaaS / Content Creation',
    duration: '6 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/creatorshome_zzokl2.jpg',
    challenge: 'A visionary creator platform needed to scale rapidly, automate content workflows, and maximize creator earnings in a competitive market.',
    solution: 'We engineered a high-performance SaaS platform with AI-powered content tools, real-time analytics, and automated monetization features.',
    results: [
      '180% increase in creator earnings',
      '3X faster content production',
      '94% user satisfaction rate',
      '25K+ monthly active users'
    ],
    technologies: ['Next.js', 'Node.js', 'OpenAI', 'AWS'],
    testimonial: {
      quote: "Sanganak Premium's AI tools transformed our content workflow. Our revenue grew 180% in just 90 days.",
      name: "Sarah Johnson",
      role: "Head of Creator Success",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Revenue', value: '+180%', period: '90 days' },
      { label: 'Efficiency', value: '+200%', period: '90 days' },
      { label: 'Satisfaction', value: '94%', period: '90 days' },
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
    title: 'Interior Design Platform: 240% Designer Bookings in 45 Days',
    client: 'Luxury Design Marketplace',
    industry: 'Interior Design / AR',
    duration: '6 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/interio_kq1fky.jpg',
    challenge: 'Create an immersive interior design platform that revolutionizes how clients visualize and book luxury design services.',
    solution: 'Developed an AR-powered platform with real-time visualization, instant booking, and designer portfolio showcase.',
    results: [
      '240% increase in designer bookings',
      '150% platform revenue growth',
      '92% client satisfaction rate',
      '85+ premium designers onboarded'
    ],
    technologies: ['React', 'Three.js', 'WebGL', 'AR Kit'],
    testimonial: {
      quote: "Sanganak Premium crafted a luxury design system that perfectly captures our brand's essence. Bookings up 240%.",
      name: "Shyam Sharma",
      role: "@Interio",
      avatar: "/testimonials/headshots/shyam-sharma.jpg"
    },
    metrics: [
      { label: 'Bookings', value: '+240%', period: '45 days' },
      { label: 'Revenue', value: '+150%', period: '45 days' },
      { label: 'Satisfaction', value: '92%', period: '45 days' },
      { label: 'Timeframe', value: '45 days', period: '' }
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
    title: 'Global Food Platform: 165% Restaurant Partner Growth in 60 Days',
    client: 'International Culinary Marketplace',
    industry: 'Food Tech / Marketplace',
    duration: '7 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/globaleats_oqjzn8.jpg',
    challenge: 'Build a scalable platform connecting international cuisines with local food enthusiasts while ensuring authentic experiences.',
    solution: 'Created an AI-powered food discovery platform with cultural insights, real-time availability, and smart recommendations.',
    results: [
      '165% growth in restaurant partners',
      '120% increase in order volume',
      '91% customer satisfaction',
      '15K+ monthly active users'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    testimonial: {
      quote: "Their food-tech expertise delivered a seamless global platform. Orders increased 120% in two months.",
      name: "Shubham Kumar",
      role: "@GlobalEats",
      avatar: "/testimonials/headshots/shubham-kumar.jpg"
    },
    metrics: [
      { label: 'Partners', value: '+165%', period: '60 days' },
      { label: 'Orders', value: '+120%', period: '60 days' },
      { label: 'Satisfaction', value: '91%', period: '60 days' },
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
    title: 'Healthcare Revolution: 280% Patient Engagement, 215% Revenue in 60 Days',
    client: 'Leading Medical Platform',
    industry: 'Healthcare / Telemedicine',
    duration: '8 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/medicobuddy_fudnrl.jpg',
    challenge: 'Transform traditional healthcare delivery with a secure, scalable telemedicine platform while ensuring HIPAA compliance and optimal user experience.',
    solution: 'Developed an AI-powered healthcare platform with secure video consultations, smart health records, and automated patient engagement systems.',
    results: [
      '280% increase in patient engagement',
      '215% revenue growth',
      '15-minute average consultation time',
      'Zero security incidents'
    ],
    technologies: ['React', 'Node.js', 'WebRTC', 'AWS'],
    testimonial: {
      quote: "The platform revolutionized our healthcare delivery. Patient engagement up 280% with zero security issues.",
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Engagement', value: '+280%', period: '60 days' },
      { label: 'Revenue', value: '+215%', period: '60 days' },
      { label: 'Efficiency', value: '+180%', period: '60 days' },
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
    title: 'Food Delivery Innovation: 175% Order Growth in 45 Days',
    client: 'Premium Food Tech Platform',
    industry: 'Food Service / Tech',
    duration: '5 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750711/burgerrr_xhsb8c.jpg',
    challenge: 'Revolutionize the gourmet food delivery experience with AI-powered recommendations and real-time tracking.',
    solution: 'Built a cutting-edge food delivery platform with smart order prediction, real-time tracking, and personalized user experiences.',
    results: [
      '175% increase in daily orders',
      '140% revenue growth',
      '25% reduction in delivery time',
      '50K+ active users'
    ],
    technologies: ['React Native', 'Firebase'],
    testimonial: {
      quote: "Sanganak Premium's attention to detail delivered exceptional results. Orders up 175% in 45 days.",
      name: "Ankit Kumar",
      role: "@Burgerrr",
      avatar: "/testimonials/headshots/ankit-kumar.jpg"
    },
    metrics: [
      { label: 'Orders', value: '+175%', period: '45 days' },
      { label: 'Revenue', value: '+140%', period: '45 days' },
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
    title: 'NFT Platform Success: 250% Trading Volume Growth in 30 Days',
    client: 'Web3 Innovation Leader',
    industry: 'NFT / Blockchain',
    duration: '4 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1740750710/nftcollect_g3ygja.jpg',
    challenge: 'Build a next-gen NFT platform that simplifies digital asset trading while providing advanced portfolio management and market insights.',
    solution: 'Created an intuitive NFT platform with AI-driven price predictions, real-time analytics, and secure wallet integration.',
    results: [
      '250% increase in trading volume',
      '185% user base growth',
      '95% faster transactions',
      '100K+ active traders'
    ],
    technologies: ['React', 'Solidity', 'Web3.js', 'TensorFlow'],
    testimonial: {
      quote: "Their AI insights and portfolio tools transformed NFT trading. Trading volume grew 250% in a month.",
      name: "Rahul Kumar",
      role: "@NFTCollect",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Volume', value: '+250%', period: '30 days' },
      { label: 'Users', value: '+185%', period: '30 days' },
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
  },
  {
    id: 'chainwallet',
    title: 'Crypto Wallet Revolution: 285% User Adoption in 45 Days',
    client: 'NextGen Web3 Platform',
    industry: 'Cryptocurrency / Fintech',
    duration: '6 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1744705146/Chainwallet_ki4bvh.png',
    challenge: 'Build a secure, user-friendly crypto wallet platform with seamless SSO integration and multi-chain support for mainstream adoption.',
    solution: 'Developed a modern crypto wallet with advanced security features, intuitive UX, and seamless social login integration.',
    results: [
      '285% increase in user adoption',
      '140% faster onboarding process',
      '99.2% security compliance rate',
      '12K+ active wallet users'
    ],
    technologies: ['Webflow', 'Web3.js', 'Metamask', 'Auth0'],
    testimonial: {
      quote: "Sanganak Premium delivered a wallet that made crypto accessible to everyone. User adoption grew 285% in 45 days.",
      name: "Alex Chen",
      role: "@ChainWallet",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Adoption', value: '+285%', period: '45 days' },
      { label: 'Onboarding', value: '+140%', period: '45 days' },
      { label: 'Security', value: '99.2%', period: '45 days' },
      { label: 'Timeframe', value: '45 days', period: '' }
    ],
    beforeMetrics: [
      'Complex wallet setup',
      'Poor user experience',
      'Limited security features',
      'No social login options'
    ],
    afterMetrics: [
      'One-click wallet creation',
      'Intuitive user interface',
      'Advanced security protocols',
      'Seamless SSO integration'
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
    id: 'realtor',
    title: 'Real Estate Platform: 195% Property Inquiries in 35 Days',
    client: 'Premium Property Solutions',
    industry: 'Real Estate / PropTech',
    duration: '5 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1744705146/Realtor_apikwi.png',
    challenge: 'Create a premium real estate platform with advanced property search, virtual tours, and automated booking system.',
    solution: 'Built a comprehensive real estate platform with AI-powered search, virtual property tours, and integrated booking management.',
    results: [
      '195% increase in property inquiries',
      '125% faster property discovery',
      '88% customer satisfaction rate',
      '8.5K+ monthly active users'
    ],
    technologies: ['Webflow', 'Advanced Search', 'Booking System', 'Virtual Tours'],
    testimonial: {
      quote: "Their real estate platform transformed our business. Property inquiries increased 195% with faster discovery.",
      name: "Sarah Rodriguez",
      role: "@Realtor Premium",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Inquiries', value: '+195%', period: '35 days' },
      { label: 'Discovery', value: '+125%', period: '35 days' },
      { label: 'Satisfaction', value: '88%', period: '35 days' },
      { label: 'Timeframe', value: '35 days', period: '' }
    ],
    beforeMetrics: [
      'Basic property listings',
      'Limited search functionality',
      'Manual booking process',
      'No virtual tour options'
    ],
    afterMetrics: [
      'Advanced property showcase',
      'AI-powered smart search',
      'Automated booking system',
      'Immersive virtual tours'
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
    id: 'myastro',
    title: 'Astrology Platform Success: 220% User Engagement in 40 Days',
    client: 'Mystical Insights Platform',
    industry: 'Lifestyle / Astrology Tech',
    duration: '4 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1746695836/YourAstro_mtphz9.png',
    challenge: 'Develop a personalized astrology platform offering daily insights and guidance powered by advanced algorithms.',
    solution: 'Created an AI-driven astrology platform with personalized readings, daily insights, and interactive birth chart analysis.',
    results: [
      '220% increase in user engagement',
      '160% growth in daily active users',
      '86% user retention rate',
      '18K+ personalized readings'
    ],
    technologies: ['React', 'AI/ML', 'Chart.js', 'Personalization Engine'],
    testimonial: {
      quote: "Sanganak Premium's astrology platform delivered incredible personalization. User engagement grew 220% in just 40 days.",
      name: "Luna Martinez",
      role: "@MyAstro Insights",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Engagement', value: '+220%', period: '40 days' },
      { label: 'Active Users', value: '+160%', period: '40 days' },
      { label: 'Retention', value: '86%', period: '40 days' },
      { label: 'Timeframe', value: '40 days', period: '' }
    ],
    beforeMetrics: [
      'Generic horoscope content',
      'Limited personalization',
      'Basic chart readings',
      'Poor user experience'
    ],
    afterMetrics: [
      'AI-powered personal insights',
      'Advanced personalization engine',
      'Interactive birth chart analysis',
      'Engaging user interface'
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
    id: 'beam-analytics',
    title: 'Analytics Platform: 265% Data Processing Efficiency in 30 Days',
    client: 'Enterprise Data Solutions',
    industry: 'SaaS / Data Analytics',
    duration: '5 weeks',
    heroImage: 'https://res.cloudinary.com/sanganak/image/upload/v1744705145/Torch_qikktc.png',
    challenge: 'Build a powerful data analytics SaaS platform with real-time insights, advanced dashboards, and enterprise-grade performance.',
    solution: 'Developed a comprehensive analytics platform with real-time data processing, interactive dashboards, and AI-powered insights.',
    results: [
      '265% improvement in data processing',
      '175% faster insight generation',
      '93% client satisfaction rate',
      '6.2K+ enterprise users'
    ],
    technologies: ['Webflow', 'Analytics Engine', 'Real-time Dashboard', 'Machine Learning'],
    testimonial: {
      quote: "Their analytics platform revolutionized our data operations. Processing efficiency improved 265% in just one month.",
      name: "David Kim",
      role: "@Beam Analytics",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=80"
    },
    metrics: [
      { label: 'Processing', value: '+265%', period: '30 days' },
      { label: 'Insights', value: '+175%', period: '30 days' },
      { label: 'Satisfaction', value: '93%', period: '30 days' },
      { label: 'Timeframe', value: '30 days', period: '' }
    ],
    beforeMetrics: [
      'Slow data processing',
      'Limited visualization options',
      'Manual report generation',
      'Basic analytics features'
    ],
    afterMetrics: [
      'Real-time data processing',
      'Advanced interactive dashboards',
      'Automated insight generation',
      'AI-powered analytics engine'
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
