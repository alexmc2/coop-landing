import { HeroSectionType } from '@/lib/types/sections';

export const heroSection: HeroSectionType = {
  subtitle: '',
  title: 'Co-op Connect',
  tagline: 'A Housing Co-op Management Platform',
  description: 
    'Transform your housing cooperative with our comprehensive digital platform. ' +
    'From treasury management to maintenance tracking, from meeting minutes to member collaboration — ' +
    'everything your co-op needs in one secure, customisable application.',
  specialText: 'Built by co-ops, for co-ops',
  cta: {
    primary: {
      title: 'View Demo',
      url: '#demo',
      sameTab: true,
    },
    secondary: {
      title: 'View Features',
      url: '#features',
      sameTab: true,
    },
  },
};