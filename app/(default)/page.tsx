export const metadata = {
  title: 'Housing Co-op Management Platform - Complete Digital Solution',
  description:
    'Transform your housing cooperative with our comprehensive management platform. Treasury, maintenance, meetings, events, and community tools all in one secure application.',
};

import PageIllustration from '@/components/page-illustration';
import Hero from '@/components/hero-home';
import Workflows from '@/components/workflows';
import Features from '@/components/features';
import Pricing from '@/components/pricing-home';
import SplitCarousel from '@/components/split-carousel';
import Cta from '@/components/cta';
import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />

      <Pricing />
      <Cta />
    </>
  );
}
