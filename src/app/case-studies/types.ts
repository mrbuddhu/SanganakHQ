export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface ProcessPhase {
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  heroImage: string;
  challenge: string;
  solution: string;
  impact: {
    metrics: Metric[];
    keyOutcomes: string[];
  };
  process: ProcessPhase[];
  technologies: Technology[];
  testimonial: Testimonial;
}

export interface CaseStudyCategory {
  id: string;
  title: string;
  description: string;
  projects: string[];
} 