'use client';

import Image from 'next/image';
import HeroImage from '@/public/images-app/hero-image-03.jpg';
import { motion } from 'framer-motion';
import { heroSection } from '@/lib/content/hero';
import { slideUp, fadeIn, scaleIn } from '@/lib/styles/animations';
import TypingAnimation from '@/components/ui/typing-animation';
import { Player } from '@lottiefiles/react-lottie-player';

export default function HeroHome() {
  const { subtitle, title, tagline, description, specialText, cta } =
    heroSection;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    0.3 + increment * i;

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
              src="/lotties/house.json"
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
                className="mb-4 md:mb-6 text-sm font-medium uppercase tracking-wider text-indigo-300"
              >
                {subtitle}
              </motion.p>
            )}

            <div className="mb-6 md:mb-8 text-center">
              <motion.h1
                variants={slideUp({ delay: getAnimationDelay(0) })}
                initial="hidden"
                animate="show"
                className="text-5xl md:text-8xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] md:leading-tight mb-4 md:mb-0"
              >
                {title}
              </motion.h1>
              <motion.h1
                variants={slideUp({ delay: getAnimationDelay(1) })}
                initial="hidden"
                animate="show"
                className="text-2xl md:text-6xl lg:text-6xl font-bold tracking-tight text-indigo-200/80 leading-[1.2] md:leading-tight"
              >
                {tagline}
              </motion.h1>
            </div>

            <motion.p
              variants={slideUp({ delay: getAnimationDelay(2) })}
              initial="hidden"
              animate="show"
              className="max-w-7xl mx-auto text-lg md:text-xl text-indigo-200/90 leading-relaxed mb-6 md:mb-8 px-4 sm:px-0"
            >
              {description}
            </motion.p>

            {specialText && (
              <div className="min-h-[32px] md:min-h-[40px] mb-8 md:mb-12">
                <TypingAnimation
                  text={specialText}
                  delay={getAnimationDelay(3)}
                  typingSpeed={60}
                  className="text-xl md:text-2xl font-medium text-indigo-200/90"
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
                className="px-8 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors flex items-center gap-2"
                href={cta.primary.url}
              >
                {cta.primary.title}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              {cta.secondary && (
                <a
                  className="px-8 py-3 bg-slate-800 text-slate-300 font-medium rounded-lg hover:bg-slate-700 transition-colors"
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
                src={HeroImage}
                alt="Co-op Dashboard Preview"
                width={1104}
                height={576}
                className="mx-auto rounded-xl border border-slate-800"
                style={{ boxShadow: 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-xl"></div>
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
