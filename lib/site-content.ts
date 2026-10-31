export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  year: string
  image: string
  accent: string
  link?: string
  challenge?: string
  approach?: string
  outcome?: string
  metrics?: { label: string; value: string }[]
}

export type Testimonial = { quote: string; name: string; role: string; company: string; avatar?: string }

export const site = {
  brand: 'SanganakHQ',
  tagline: 'Digital products with a point of view.',
  email: 'contact@sanganakhq.com',
  phone: '+91 00000 00000',
  location: 'Bengaluru, India · Working worldwide',
  bookingUrl: 'https://cal.com/sanganakhq',
  founders: [
    {
      name: 'Aryabhatta',
      role: 'Co-founder',
      focus: 'Engineering, AI systems & product delivery',
      bio: 'The one clients keep quoting in reviews. Aryabhatta has shipped 50+ products — iOS apps in a week, Shopify builds with custom configurators, PHP-to-React rebuilds in 24 hours — and designed the AI automation pipelines that sit underneath them. He runs delivery like the reviews say: fast, precise, and present in every thread.',
    },
    {
      name: 'Shabi Kaushal',
      role: 'Co-founder',
      focus: 'Brand, growth & client strategy',
      bio: 'Shabi leads the brand and growth side of the studio — positioning, campaigns, and the Growth Engine retainers that clients renew for years. // TODO: one more line on Shabi’s background before launch.',
    },
  ],
  social: {
    Instagram: 'https://instagram.com/sanganakhq',
    LinkedIn: 'https://www.linkedin.com/company/sanganakhq',
    Behance: 'https://www.behance.net/sanganakhq',
  },
  nav: ['Home', 'Services', 'Work', 'Reviews', 'About', 'Contact'],
  trustMetrics: [
    { label: 'Top 1%', value: 'Of talent on Contra' },
    { label: '50+', value: 'Products designed, built & shipped' },
  ],
  clients: [
    'The Centre Stone',
    'Soul AI',
    'EY',
    'MotorAxle',
    'DiziDice',
    'Clavent',
    'Urban Mandai',
    'Heathland Links',
  ],
}

export const projects: Project[] = [
  {
    slug: 'the-centre-stone',
    title: 'The Centre Stone',
    category: 'Branding / Shopify / Configurator',
    summary: 'A 30-year diamond house, rebuilt as a luxury digital experience with a bespoke diamond configurator.',
    year: '2026',
    image: '',
    accent: 'from-amber-200/80 via-orange-300/50 to-stone-800',
    challenge:
      'A globally established diamond business with decades of offline trust — and a digital presence that reflected none of it. They never imagined their brand could feel as premium online as it does in person.',
    approach:
      'We took the idea end to end: brainstormed the concept, refined the branding, designed a bespoke UI/UX, built a custom Shopify store, and engineered a fully custom diamond configurator — every detail crafted, nothing template-based.',
    outcome:
      'A flagship luxury storefront the family describes as the first digital reflection of their real brand — and the start of a long-term partnership.',
    metrics: [
      { label: '6', value: 'Services delivered' },
      { label: 'Custom', value: 'Diamond configurator, built from scratch' },
    ],
  },
  {
    slug: 'reading-is-my-superpower',
    title: 'Reading Is My Superpower',
    category: 'iOS App / Design to App Store',
    summary: 'A premium children’s reading app, taken from a single idea to the App Store in one week.',
    year: '2026',
    image: '',
    accent: 'from-lime-200/70 via-emerald-400/30 to-zinc-900',
    challenge:
      'A founder arrived with an idea and a deadline. No designs, no builds, no App Store presence — just a clear belief that kids learn to read faster when the experience feels premium.',
    approach:
      'We designed and built the premium iOS flashcard app end to end, suggested improvements along the way, adapted across time zones, and handled the entire App Store review and release process.',
    outcome:
      'Live on the App Store within a week, as promised. The founder now refers to it as the launch that proved “weeks, not months” is a real shipping model.',
    metrics: [
      { label: '1 week', value: 'Idea to App Store' },
      { label: '100%', value: 'Handled: design, build, release' },
    ],
  },
  {
    slug: 'heathland-links',
    title: 'Heathland Links',
    category: 'Golf App / Design to Deploy',
    summary: 'A golf discovery app carried from first sketch to deployed product by the same team.',
    year: '2026',
    image: '',
    accent: 'from-sky-200/70 via-indigo-400/40 to-slate-900',
    challenge:
      'Golf discovery is a crowded, template-heavy category. Heathland Links needed an experience that felt premium on the fairway and fast off it.',
    approach:
      'Full product ownership — UX, UI, and build — designed and deployed as a coherent whole rather than a handoff chain.',
    outcome:
      'A live discovery platform and a design system built to scale with the catalog.',
    metrics: [{ label: 'Design→Deploy', value: 'One team, end to end' }],
  },
  {
    slug: 'urban-mandai',
    title: 'Urban Mandai Global',
    category: 'Web / Rebuild in 24h',
    summary: 'A legacy PHP site transformed into a modern, SEO-ready React website — inside 24 hours.',
    year: '2025',
    image: '',
    accent: 'from-orange-200/70 via-rose-400/40 to-stone-900',
    challenge:
      'An aging PHP site holding back a global trading brand, with a hard deadline that made a traditional rebuild impossible.',
    approach:
      'Figma redesign, full copy rewrite, and frontend rebuild in React — all executed in a single day with precision and no shortcuts.',
    outcome:
      'A global-standard, SEO-ready site the client calls “truly worth the premium investment.”',
    metrics: [
      { label: '24h', value: 'PHP to modern React' },
      { label: 'SEO-ready', value: 'From day one' },
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'We’ve been in the diamond industry globally for over 30 years, but never imagined our digital presence could reflect the same level of luxury. Every detail felt thoughtfully crafted rather than template-based. If you’re building a premium brand, I highly recommend SanganakHQ.',
    name: 'T Patel',
    role: 'Client',
    company: 'The Centre Stone',
  },
  {
    quote:
      'After 50+ years in offline business I never thought digital could be this effective. Technically, professionally and business-acumen-wise — highly recommended.',
    name: 'Marko Žagar',
    role: 'Client (retainer, ~1 year and counting)',
    company: 'Marko Žagar',
  },
  {
    quote:
      'I just came with an idea and the team turned it into a real, live iOS app — delivered everything within a week as promised, and handled the entire App Store process smoothly. If you want to launch in weeks, not months, I highly recommend SanganakHQ.',
    name: 'Vaunda Jo Montoya',
    role: 'Founder',
    company: 'Reading Is My Superpower',
  },
  {
    quote:
      'Aryabhatta built and ran our entire email campaign, newsletter system, and AI automation pipeline with precision and speed. Everything was seamless, data-driven, and way more efficient than we expected.',
    name: 'Suhani C',
    role: 'Client',
    company: 'EY',
  },
  {
    quote:
      'Aryabhatta completely changed how I think about growth — from scattered tactics to a clear, structured system focused on long-term results. That clarity and performance is why we keep renewing the Growth Package.',
    name: 'Marko Žagar',
    role: 'Growth retainer client',
    company: 'Renewed 4×',
  },
  {
    quote:
      'We needed our old PHP website transformed into a modern React.js version within 24 hours — and they delivered flawlessly. The result is a global standard, SEO-ready website that feels premium and performs beautifully.',
    name: 'Urban Mandai Global',
    role: 'Client',
    company: 'Urban Mandai Global',
  },
]

export const faqs = [
  [
    'What kind of work do you take on?',
    'Brand, digital product, AI automation, and growth work for teams at an inflection point. In practice: identities and websites, iOS and web apps, AI agents and funnels, and Growth Engine retainers covering SEO, ads, CRO, and email.',
  ],
  [
    'How fast can you ship?',
    'Fast, with receipts — a legacy site rebuilt in 24 hours, an iOS app live on the App Store in a week, a construction company site in 48. Speed comes from senior focus, not shortcuts.',
  ],
  [
    'Do you work with early-stage teams?',
    'Yes. Several clients arrived with nothing but an idea and left with a shipped product. We shape scope around what creates the most useful momentum first.',
  ],
  [
    'What is the Growth Engine?',
    'Our ongoing retainer: SEO, paid ads, email automation, CRO, and analytics run as one system. Clients renew it because the compounding is measurable — ask the ones who’ve been on it for a year.',
  ],
  [
    'Where are you based?',
    'Bengaluru, India — working with clients across time zones, from London to the US. Distributed by default, present in every thread.',
  ],
  [
    'Who will actually work on my project?',
    'The founders. Aryabhatta leads engineering and AI delivery; Shabi Kaushal leads brand and growth. Every review on Contra and Clutch names them — no handoffs to juniors.',
  ],
]

export const mediaSlots = { heroVideo: '', projectOne: '', projectTwo: '', projectThree: '' }
