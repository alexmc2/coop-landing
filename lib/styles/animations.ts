import type { Variants } from 'framer-motion';

export const slideUp = ({
  delay = 0,
  duration = 0.5,
  offset = 20,
} = {}): Variants => ({
  hidden: {
    opacity: 0,
    y: offset,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});

export const fadeIn = ({
  delay = 0,
  duration = 0.5,
} = {}): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});

export const scaleIn = ({
  delay = 0,
  duration = 0.5,
} = {}): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});