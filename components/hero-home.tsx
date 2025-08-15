'use client';

import Image from 'next/image';
import HeroImageLight from '@/public/images-app/hero-image-03.jpg';
import HeroImageDark from '@/public/images-app/hero-image-03-dark.png';
import { motion } from 'framer-motion';
import { heroSection } from '@/lib/content/hero';
import { slideUp, fadeIn, scaleIn } from '@/lib/styles/animations';
import TypingAnimation from '@/components/ui/typing-animation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () =>
    import('@lottiefiles/react-lottie-player').then((mod) => ({
      default: mod.Player,
    })),
  { ssr: false }
);

export default function HeroHome() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { subtitle, title, tagline, description, specialText, cta } =
    heroSection;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    0.3 + increment * i;
    
  // Use light images in dark theme, dark images in light theme
  const heroImage = mounted && theme === 'dark' ? HeroImageLight : HeroImageDark;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero content */}

        <div className="py-6 md:py-20">
          {/* Section header */}
          <div className="flex justify-center mb-4 md:mb-4">
            <Player
              autoplay
              loop
              src={mounted && theme === 'light' ? "/lotties/house-light.json" : "/lotties/house.json"}
              style={{ height: '120px', width: '120px' }}
            />
          </div>
          <div className="pb-8 text-center md:pb-20">
            {subtitle && (
              <motion.p
                variants={slideUp({
                  delay: getAnimationDelay(0),
                  duration: 0.6,
                })}
                initial="hidden"
                animate="show"
                className="mb-4 md:mb-6 text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-indigo-300"
              >
                {subtitle}
              </motion.p>
            )}

            <div className="mb-6 md:mb-8 text-center">
              <motion.h1
                variants={slideUp({ delay: getAnimationDelay(0) })}
                initial="hidden"
                animate="show"
                className="text-5xl md:text-8xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] md:leading-tight mb-4 md:mb-0"
              >
                {title}
              </motion.h1>
              <motion.h1
                variants={slideUp({ delay: getAnimationDelay(1) })}
                initial="hidden"
                animate="show"
                className="text-2xl md:text-6xl lg:text-6xl font-bold tracking-tight text-sky-500 dark:text-indigo-200/80 leading-[1.2] md:leading-tight"
              >
                {tagline}
              </motion.h1>
            </div>

            <motion.p
              variants={slideUp({ delay: getAnimationDelay(2) })}
              initial="hidden"
              animate="show"
              className="max-w-7xl mx-auto text-lg md:text-xl text-slate-600 dark:text-indigo-200/90 leading-relaxed mb-6 md:mb-8 px-4 sm:px-0"
            >
              {description}
            </motion.p>

            {specialText && (
              <div className="min-h-[32px] md:min-h-[40px] mb-8 md:mb-12">
                <TypingAnimation
                  text={specialText}
                  delay={getAnimationDelay(3)}
                  typingSpeed={60}
                  className="text-xl md:text-2xl font-medium text-sky-600 dark:text-indigo-400"
                />
              </div>
            )}

            <motion.div
              variants={slideUp({ delay: getAnimationDelay(4) })}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                className="btn group px-8 py-3 bg-gradient-to-t from-sky-600 dark:from-indigo-600 to-sky-500 dark:to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white font-medium rounded-lg shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] transition-all flex items-center gap-2"
                href={cta.primary.url}
              >
                <span className="relative inline-flex items-center">
                  {cta.primary.title}
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </a>
              {cta.secondary && (
                <a
                  className="px-8 py-3 bg-gradient-to-b from-slate-200 dark:from-slate-800 to-slate-300/60 dark:to-slate-800/60 text-slate-700 dark:text-slate-300 font-medium rounded-lg border border-slate-300 dark:border-transparent hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  href={cta.secondary.url}
                >
                  {cta.secondary.title}
                </a>
              )}
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn({ delay: getAnimationDelay(5), duration: 0.8 })}
            initial="hidden"
            animate="show"
            className="flex justify-center"
          >
            <div className="relative pb-12">
              <Image
                src={heroImage}
                alt="Co-op Dashboard Preview"
                width={1104}
                height={576}
                className="mx-auto rounded-xl border-0 dark:border dark:border-slate-800 shadow-[0_16px_50px_rgba(0,0,0,0.25),0_6px_15px_rgba(0,0,0,0.15)] dark:shadow-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-xl dark:block hidden"></div>
            </div>
            <motion.div
              variants={fadeIn({ delay: getAnimationDelay(6) })}
              initial="hidden"
              animate="show"
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-sm text-slate-500 "
            >
              {/* <div className="flex items-center gap-2 ">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live System</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>Member-Owned</span>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
