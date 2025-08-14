export type HeroSectionType = {
  subtitle: string;
  title: string;
  tagline: string;
  description: string;
  specialText?: string;
  cta: {
    primary: {
      title: string;
      url: string;
      sameTab?: boolean;
    };
    secondary?: {
      title: string;
      url: string;
      sameTab?: boolean;
    };
  };
};

export type FeatureSectionType = {
  title: string;
  subtitle: string;
  description: string;
  features: {
    icon?: string;
    title: string;
    description: string;
  }[];
};