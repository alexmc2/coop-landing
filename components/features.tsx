'use client';

import Image from 'next/image';
import BlurredShapeslate from '@/public/images/blurred-shape-slate.svg';
import BlurredShape from '@/public/images/blurred-shape.svg';
import SecretaryImage from '@/public/images-app/secretary-light.png';
import { motion } from 'framer-motion';
import { slideUp, fadeIn, scaleIn } from '@/lib/styles/animations';

export default function Features() {
  const getAnimationDelay = (i: number, increment = 0.15) =>
    0.3 + increment * i;

  return (
    <section className="relative" id="features">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeslate}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-slate-200),var(--color-indigo-200),var(--color-slate-50),var(--color-indigo-300),var(--color-slate-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Everything Your Co-op Needs to Thrive
            </h2>
            <p className="text-lg text-indigo-200/65">
              A comprehensive suite of integrated modules designed specifically
              for housing cooperatives. Manage finances, coordinate maintenance,
              organise meetings, and build community — all from one unified
              platform.
            </p>
          </div>

          <motion.div
            variants={scaleIn({ delay: 0.2, duration: 0.8 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center pb-4 md:pb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
            <Image
              src={SecretaryImage}
              alt="Co-op Dashboard Preview"
              width={1104}
              height={384}
              className="mx-auto rounded-xl border border-slate-800"
              style={{ boxShadow: 'none' }}
            />
          </motion.div>
          {/* Core Features Grid */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 mb-12">
            <article>
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-indigo-500 p-2 mr-3">
                  <svg
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1.1rem] font-semibold text-slate-200">
                  Treasury Management
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Complete financial oversight with bookkeeping, budget planning,
                expense claims processing, bank reconciliation, and
                comprehensive financial reporting. Generate FCA returns and
                annual statements with ease.
              </p>
            </article>

            <article>
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-indigo-500 p-2 mr-3">
                  <svg
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1.1rem] font-semibold text-slate-200">
                  Secretary Tools
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Streamline governance with meeting management, agenda creation,
                minutes taking, attendance tracking, and comprehensive
                communication logs. Maintain membership records and generate
                compliance reports effortlessly.
              </p>
            </article>

            <article>
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-indigo-500 p-2 mr-3">
                  <svg
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.13-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1.1rem] font-semibold text-slate-200">
                  Maintenance System
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Track maintenance requests from submission to completion.
                Schedule contractor visits, document issues with photos,
                prioritize urgent repairs, and maintain a complete maintenance
                history for every property.
              </p>
            </article>

            <article>
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-indigo-500 p-2 mr-3">
                  <svg
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.19 0 .34-.16.34-.34 0-.09-.04-.18-.09-.25l-.07-.08c-.09-.08-.14-.19-.14-.31 0-.24.2-.44.44-.44h1.65c3.05 0 5.53-2.48 5.53-5.53 0-4.78-3.88-8.66-8.66-8.66zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1.1rem] font-semibold text-slate-200">
                  Garden Projects
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Coordinate communal garden spaces with project planning, task
                management, and volunteer scheduling. Track plant inventory,
                document progress with photos, and organize community gardening
                events.
              </p>
            </article>

            <article>
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-indigo-500 p-2 mr-3">
                  <svg
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1.1rem] font-semibold text-slate-200">
                  Event Calendar
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Centralised calendar integrating all co-op activities. View
                meetings, maintenance visits, social events, and garden tasks in
                one place. Subscribe to personal calendar feeds and never miss
                important dates.
              </p>
            </article>

            <article>
              <div className="flex items-center mb-3">
                <div className="rounded-lg bg-indigo-500 p-2 mr-3">
                  <svg
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="font-nacelle text-[1.1rem] font-semibold text-slate-200">
                  Development Initiatives
                </h3>
              </div>
              <p className="text-indigo-200/65">
                Plan and track co-op development projects and policy
                initiatives. Manage partnerships, organize training events,
                conduct research, and coordinate outreach activities with full
                member participation tracking.
              </p>
            </article>
          </div>

          {/* Additional Features */}
          <div className="border-t pt-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
            <h3 className="text-center text-2xl font-nacelle font-semibold text-slate-200 mb-8">
              Plus Many More Features
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Contact Management
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Manage contacts and co-op correspondence
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Doodle Polls
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Schedule events efficiently
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Social Events
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Community building activities
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Photo Gallery
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Document co-op memories
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Shop Module
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Manage internal shop accounts
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Rent Tracking
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Automated rent management
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Allocations
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Manage new allocations
                </p>
              </div>
              <div>
                <div className="rounded-lg bg-slate-800 p-4 mb-2">
                  <span className="text-indigo-400 font-semibold">
                    Push Notifications
                  </span>
                </div>
                <p className="text-sm text-indigo-200/65">
                  Stay informed in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
