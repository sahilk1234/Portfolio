// Data for portfolio
import { JavaScriptIcon, NestjsIcon, ReactIcon } from '../utils/icons'

// Service Data
export const serviceData = [
  {
    icon: ReactIcon,
    title: 'Frontend Engineering',
    shortDescription:
      'Build responsive web interfaces with React, Next.js, Redux, and Tailwind CSS.',
    stack: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
  },
  {
    icon: NestjsIcon,
    title: 'Backend & APIs',
    shortDescription:
      'Design scalable APIs and microservices with Node.js, NestJS, PostgreSQL, and GraphQL.',
    stack: ['Node.js', 'NestJS', 'PostgreSQL', 'GraphQL'],
  },
  {
    icon: JavaScriptIcon,
    title: 'Mobile & Cross-Platform',
    shortDescription:
      'Deliver mobile experiences with React Native, Expo, and Framework7.',
    stack: ['React Native', 'Expo', 'Framework7'],
  },
]

// Skill Groups
export const skillGroups = [
  {
    title: 'Frontend & Mobile',
    items: [
      'React',
      'React Native',
      'Next.js',
      'Redux',
      'Framework7',
      'Expo',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'NestJS', 'PostgreSQL', 'Django', 'GraphQL', 'REST API', 'Adyen'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Jenkins', 'Terraform'],
  },
  {
    title: 'Testing & ML',
    items: ['Jest', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C', 'C++', 'Java', 'Python 3'],
  },
  {
    title: 'Tools',
    items: ['Visual Studio', 'Jupyter Notebook', 'Bitbucket', 'GitHub', 'Jira'],
  },
]

export const experienceData = [
  {
    label: 'Experience',
    role: 'Software Engineer Intern',
    company: 'EITACIES Inc.',
    period: 'Jun 2025 - Aug 2025',
    highlights: ['Developed mobile and web UI components for the QikOffice app to improve cross-platform UX.',
      'Built Framework7 UI components for mobile and web experiences.'],
  },
  {
    label: 'Experience',
    role: 'Software Engineer',
    company: 'Object Edge India Services Pvt Ltd (Mahape, India)',
    period: 'Jan 2024 - Jul 2024',
    highlights: [
      'Led backend development of a 360 Performance Review system, reducing processing time by 40%.',
      'Built scalable APIs for the 360 Performance project, improving data retrieval by 30% with NestJS and PostgreSQL.',
      'Developed frontend pages using Next.js.',
      'Created CI/CD pipelines in Jenkins for NestJS and Next.js apps.',
      'Wrote Jest unit tests for frontend and E2E tests for backend, reducing post-deploy bug reports by 40%.',
    ],
  },
  {
    label: 'Experience',
    role: 'Junior Software Engineer',
    company: 'Object Edge India Services Pvt Ltd',
    period: 'Aug 2022 - Dec 2023',
    highlights: [
      'Developed microservices and storefront features for Beachbody and Launchpad initiatives.',
      'Built backend microservices for the Beachbody project, cutting response time by 15%.',
      'Developed Launchpad store pages (Home, PLP, PDP, Cart, Checkout, MyAccount) with React and Node.js.',
      'Implemented Adyen credit card payments for Launchpad.',
      'Integrated Fluent OMS with Launchpad.',
      'Built an email notification service using SendGrid.',
    ],
  },
  {
    label: 'Experience',
    role: 'Trainee Software Engineer',
    company: 'Object Edge India Services Pvt Ltd',
    period: 'Aug 2021 - Jul 2022',
    highlights: [
      'Migrated legacy CMS-based websites to modern Gatsby-based static sites for improved performance and SEO.',
      'Analyzed client requirements and implemented frontend solutions and backend microservices using GraphQL.',
      'Boosted SEO by 30% and improved page load time by 25% using Gatsby.',
      'Integrated Contentful CMS to improve page configurability and reduce content update time by 30%.',
    ],
  },
]

export const footerLinks = [
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Expertise', href: '#expertise' },
  { title: 'Experience', href: '#experience' },
  { title: 'Contact', href: '#contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]
