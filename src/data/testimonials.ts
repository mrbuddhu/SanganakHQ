export type TestimonialType = 'video' | 'text';
export type VideoOrientation = 'landscape' | 'portrait';

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
  type: TestimonialType;
  avatar?: string;
  videoUrl?: string;
  orientation?: VideoOrientation;
}

export const testimonials: Testimonial[] = [
  {
    name: "Peedu Kass",
    role: "@PeeduKass",
    rating: 5,
    content: "SanganakHQ transformed our business with their innovative solutions. The results speak for themselves - exceptional growth and unmatched quality.",
    videoUrl: "/testimonials/PeeduKass.mp4",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
    type: "video",
    orientation: "landscape"
  },
  {
    name: "Lavent Marketing",
    role: "@LaventMarketing",
    rating: 5,
    content: "Working with SanganakHQ was a game-changing experience. Their marketing expertise and technical solutions delivered outstanding results for our campaigns.",
    videoUrl: "/testimonials/LaventMarketing.mp4",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    type: "video",
    orientation: "portrait"
  },
  {
    name: "Ankit Kumar",
    role: "@Burgerrr",
    rating: 5,
    content: "Working with SanganakHQ was a game-changing experience. Our monthly revenue grew from $120k to $720k in just 45 days with their end-to-end solution.",
    videoUrl: "/testimonials/ankit-kumar.mp4",
    avatar: "/testimonials/headshots/ankit-kumar.jpg",
    type: "video",
    orientation: "portrait"
  },
  {
    name: "Shubham Kumar",
    role: "@GlobalEats",
    rating: 5,
    content: "SanganakHQ's expertise in food tech platforms helped us increase daily orders from 500 to 2,500 in just 2 months with their full-service solution.",
    videoUrl: "/testimonials/shubham-kumar.mp4",
    avatar: "/testimonials/headshots/shubham-kumar.jpg",
    type: "video",
    orientation: "portrait"
  },
  {
    name: "Rahul Kumar Rajak",
    role: "@DizIDice",
    rating: 5,
    content: "Aryabhatta and SanganakHQ have consistently delivered outstanding results for my multiple clients across all verticals including Branding, Dev, SEO and Digital Marketing. Their Growth Package is truly exceptional driving real impact and measurable success. He himself has great business acumen and his audits my god. Just have one with him for your business and you'll love it. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Vishal Chauhan",
    role: "@MotorAxle",
    rating: 5,
    content: "Aryabhatta @SanganakHQ team did a brilliant job redesigning our blogging site. Fast, clean, and exactly what we needed. We've since kept them on retainer for SEO and email campaigns, and the results speak for themselves. Reliable, sharp, and growth-focused. We are also considering them for paid ads and social media. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Lavent Marketing",
    role: "@LaventMarketing",
    rating: 5,
    content: "Excellent experience working with team Sanganak. Very experienced in design and development, and delivered exactly what we wanted. Completed the whole project in less than 3 days, clearly shows how fast and efficient they are. Communication was super good and well, always available, open to feedback, and even suggested great ideas. Fully confident I'll go to them again for any web work and would 100% recommend them to others.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Rahul Kumar Rajak",
    role: "@DizIDice",
    rating: 5,
    content: "I've worked with Aryabhatta on multiple projects and he consistently delivers with clear communication, timely results, and minimal revisions. Highly skilled in WordPress, JavaScript, full-stack web and mobile apps (Android and iOS) and eCommerce including WooCommerce, Magento, and Shopify. Creative, solution-oriented, and reliable, he is a trusted partner for complex projects and long-term collaborations. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Vinit Kumar",
    role: "@DBS Bank",
    rating: 5,
    content: "I had the opportunity to collab with Aryabhata on AI-powered SaaS development. He combines strong AI development skills with deep full-stack SaaS architecture knowledge, delivering scalable, reliable, and business-ready solutions. His ability to translate complex ideas into working products with clean execution and speed truly stands out. He is not just a developer, but a strategist who understands both tech and business impact. Highly recommended AI Developer/ SaaS Developer.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Shyam Sharma",
    role: "@Interio",
    rating: 5,
    content: "Aryabhatta designed a premium and clean website for us in only a week. Very professional and good at his craft. Highly recommended for web design services.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Suhani Chamkar",
    role: "@EY",
    rating: 5,
    content: "Working with Aryabhatta has been an incredible experience. He built and ran our entire email campaign, newsletter system, and AI automation pipeline with precision and speed. Everything was seamless, data-driven, and way more efficient than we expected. His strategic approach and tech expertise truly stand out. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Subesh Kumar",
    role: "@Almarai",
    rating: 5,
    content: "Aryabhatta worked on multiple projects for me in 2024 as a freelancer. He handled Framer landing pages, converted Webflow websites, and built FlutterFlow apps. He has an excellent design sense and strong business acumen. He even improved our cheap copy for free. I wish him the best with his new venture, Sanganak. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Bipin Solanki",
    role: "@AIIMS Delhi @BBC",
    rating: 5,
    content: "Aryabhatta created my website with appointment booking in just 24 hours incredibly fast delivery without compromising quality. His top-notch communication and genuine, heart-driven service made the whole process seamless. The site is now live at drbipinsolanki.com, and I couldn't be happier with the result. Highly recommend him for anyone needing quick, reliable, and professional web design or development.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
    type: "text"
  },
  {
    name: "Karan Gakhar",
    role: "@NutMama",
    rating: 5,
    content: "Aryabhatta worked on our Nutmama Shopify store and delivered beyond expectations. His Liquid code customizations made a free theme feel truly premium. Clear communication, quick execution, and smart problem-solving throughout. Highly recommend him for anyone needing a reliable Shopify designer/developer.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    type: "text"
  }
];
