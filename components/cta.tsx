'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import BlurredShape from '@/public/images/blurred-shape.svg';
import BlurredShapeSlate from '@/public/images/blurred-shape-slate.svg';

export default function Cta() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use slate (blue-ish) shape in light mode, purple shape in dark mode
  const blurredShapeImage = mounted && theme === 'light' ? BlurredShapeSlate : BlurredShape;
  
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 dark:block hidden"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={blurredShapeImage}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-slate-100/50 dark:via-slate-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-slate-700),var(--color-sky-500),var(--color-slate-900),var(--color-sky-600),var(--color-slate-700))] dark:bg-[linear-gradient(to_right,var(--color-slate-200),var(--color-indigo-200),var(--color-slate-50),var(--color-indigo-300),var(--color-slate-200))] bg-[length:200%_auto] bg-clip-text pb-8  text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Ready to Transform Your Co-op?
            </h2>
            <p className="text-lg text-slate-600 dark:text-indigo-200/90 mb-8">
              Get in touch to discuss how this platform could work for your
              housing co-op. I'm happy to answer questions and show you around.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-sky-600 dark:from-indigo-600 to-sky-500 dark:to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="mailto:contact@example.com"
                >
                  <span className="relative inline-flex items-center">
                    Get In Touch
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-gradient-to-b from-slate-200 dark:from-slate-800 to-slate-300/60 dark:to-slate-800/60 bg-[length:100%_100%] bg-[bottom] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-transparent hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="#features"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
