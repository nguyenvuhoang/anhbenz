import profileImage from '@/assets/images/about/ben.png'
import coreBankingImage from '@/assets/images/service/cbs.png'
import mobileBankingImage from '@/assets/images/service/mobile.png'
import productExperienceImage from '@/assets/images/service/UiUx.png'

export const profile = {
  name: 'Nguyen Vu Hoang',
  displayName: 'Nguyen Vu Hoang (BEN)',
  role: 'Senior Fintech Engineer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'nguyenvuhoangz@gmail.com',
  image: profileImage,
  intro:
    'I build reliable financial platforms, digital products, and integration layers for teams that need software to feel precise, resilient, and beautifully simple.',
  bio:
    'A senior engineer with hands-on experience across banking systems, microfinance delivery, OpenAPI programs, and modern product interfaces. I enjoy turning complex operational requirements into calm, scalable systems that people can trust.',
  availability: 'Available for select product and integration work',
}

export const heroMetrics = [
  { value: '9+', label: 'Years shipping software' },
  { value: '20+', label: 'Financial product releases' },
  { value: '4', label: 'Markets supported' },
]

export const strengths = [
  'Financial system architecture',
  'API-first product delivery',
  'Cross-functional technical leadership',
  'Secure, scalable frontend experiences',
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Design Systems'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Node.js', 'REST APIs', 'OpenAPI', 'Microservices'],
  },
  {
    title: 'Database',
    skills: ['Oracle', 'PostgreSQL', 'SQL Design', 'Data Modeling'],
  },
  {
    title: 'DevOps',
    skills: ['CI/CD', 'Cloud Deployments', 'Monitoring', 'Release Strategy'],
  },
  {
    title: 'Mobile',
    skills: ['Responsive UI', 'Mobile Apps', 'Integration Flows'],
  },
]

export const projects = [
  {
    title: 'Core Banking Integration Ecosystem',
    description:
      'A banking platform view that connects core systems, back-office services, CRM, payments, and OpenAPI channels into one operational ecosystem.',
    image: coreBankingImage,
    stack: ['Core Banking', 'Oracle', 'OpenAPI', 'Integration'],
    links: {
      preview: '#contact',
      source: '#contact',
    },
  },
  {
    title: 'Secure Digital Payment Flows',
    description:
      'Mobile-first banking and payment journeys covering bill history, payment protection, account access, and secure customer workflows.',
    image: mobileBankingImage,
    stack: ['Mobile Banking', 'Security', 'Payments', 'UX Flow'],
    links: {
      preview: '#contact',
      source: '#contact',
    },
  },
  {
    title: 'Product Experience Layer',
    description:
      'A polished UI layer for financial products, turning complex workflows into clear screens, reusable patterns, and responsive product interfaces.',
    image: productExperienceImage,
    stack: ['React', 'Design Systems', 'Responsive UI', 'Product UX'],
    links: {
      preview: '#contact',
      source: '#contact',
    },
  },
]

export const experiences = [
  {
    company: 'JUST-IN-TIME SOLUTIONS',
    role: 'Senior Software Developer',
    period: '2016 - Present',
    achievements: [
      'Lead development and delivery work for banking and microfinance product initiatives.',
      'Partner with client teams to translate operational needs into integration-ready systems.',
      'Support deployment strategy, release planning, and production readiness for financial platforms.',
    ],
  },
  {
    company: 'FPT Software',
    role: 'Software Developer',
    period: '2014 - 2016',
    achievements: [
      'Designed and developed embedded software components for enterprise automotive systems.',
      'Built a foundation in structured engineering, quality review, and large-scale delivery discipline.',
    ],
  },
]

export const services = [
  {
    title: 'Web App Development',
    description:
      'Premium dashboards, portals, product interfaces, and internal tools built with fast, accessible frontend foundations.',
  },
  {
    title: 'API & Backend Development',
    description:
      'Reliable service layers, OpenAPI contracts, integrations, and data workflows for product and operations teams.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Responsive mobile-first product experiences and app flows designed for clarity, speed, and repeat use.',
  },
  {
    title: 'System Integration',
    description:
      'Practical integration planning between banking systems, third-party services, operational tools, and reporting layers.',
  },
]

export const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nguyenvuhoang',
    value: 'github.com/nguyenvuhoang',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anhben/',
    value: 'linkedin.com/in/anhben',
  },
]
