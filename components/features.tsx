'use client';

import Image from 'next/image';
import BlurredShapeslate from '@/public/images/blurred-shape-slate.svg';
import BlurredShape from '@/public/images/blurred-shape.svg';
import GalleryImage from '@/public/images-app/gallery-light.png';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/styles/animations';

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
        <div className="border-t pt-16 pb-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:pt-24 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-slate-200),var(--color-indigo-200),var(--color-slate-50),var(--color-indigo-300),var(--color-slate-200))] bg-[length:200%_auto] bg-clip-text pb-4  text-3xl font-semibold text-transparent md:text-4xl">
              Everything Your Co-op Needs to Thrive
            </h2>
            <p className="text-lg text-indigo-200/90">
              A complete suite of integrated modules designed for housing
              co-operatives. Manage finances, co-ordinate maintenance, organise
              meetings, and build community – all in one place.
            </p>
          </div>

          {/* Gallery */}
          <motion.div
            variants={scaleIn({ delay: 0.2, duration: 0.8 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center pb-12 md:pb-24"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
            <Image
              src={GalleryImage}
              alt="Co-op Gallery"
              width={1104}
              height={384}
              className="mx-auto rounded-xl border border-slate-800"
              style={{ boxShadow: 'none' }}
            />
          </motion.div>

          {/* Features grid */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 mb-12">
            <Feature
              title="Maintenance Tracking"
              description="Track maintenance requests from report to resolution. Schedule contractor visits, record issues with photos, prioritise urgent jobs, and keep a complete history for each property."
            />

            <Feature
              title="Garden Projects"
              description="Plan and organise communal gardening with projects, tasks, and volunteer sign-ups. Track plant inventories, document progress with photos, and co-ordinate seasonal work."
            />

            <Feature
              title="Event Calendar"
              description="A central calendar showing all co-op activities – meetings, maintenance visits, social events, and garden tasks – with day, week, and month views plus personal calendar feed subscriptions."
            />

            <Feature
              title="Development Initiatives"
              description="Manage co-op development projects and initiatives. Organise training, policy work, outreach events, and partnerships with progress tracking and participation records."
            />

            <Feature
              title="Contact Management"
              description="Keep an organised directory of members, contractors, and partners. Store contact details, log communications, and attach relevant files for easy reference."
            />

            <Feature
              title="Doodle Polls"
              description="Schedule meetings and events by offering multiple date and time options, gathering members’ availability, and confirming the best choice. Create events directly from poll results and add them straight to the co-op calendar."
            />

            <Feature
              title="Social Events"
              description="Plan and promote community-building activities such as shared meals, film nights, and celebrations, with attendance tracking and event photo sharing."
            />

            <Feature
              title="Photo Gallery"
              description="Store and share photos from co-op activities. Browse by event or project, view in a full-screen lightbox, and download high-resolution images."
            />

            <Feature
              title="Shop Module"
              description="Run an internal co-op shop with purchase logging, account balances, and stock tracking. Generate simple reports to see usage and spending."
            />

            <Feature
              title="Rent Tracking"
              description="Record rent payments, monitor outstanding balances, and produce clear summaries for members and meetings."
            />

            <Feature
              title="Allocations"
              description="Manage the process for allocating rooms or units, keeping track of applications, decisions, and related communications."
            />

            <Feature
              title="Push Notifications"
              description="Stay up to date with instant alerts for important updates, event reminders, and status changes across the co-op."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article>
      <div className="flex items-center mb-3">
        <div className="rounded-lg bg-indigo-500 p-2 mr-3">
          {/* Placeholder icon - swap with each feature's SVG if needed */}
          <svg
            className="w-6 h-6 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <h3 className=" text-[1.1rem] font-semibold text-slate-200">{title}</h3>
      </div>
      <p className="text-indigo-200/90">{description}</p>
    </article>
  );
}
