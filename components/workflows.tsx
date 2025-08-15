'use client';

import { motion } from 'framer-motion';
import ImageCarousel from '@/components/image-carousel';
import { getTreasuryImages, getSecretaryImages } from '@/lib/screenshot-data';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Workflows() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const treasuryImages = mounted ? getTreasuryImages(theme === 'dark') : getTreasuryImages(true);
  const secretaryImages = mounted ? getSecretaryImages(theme === 'dark') : getSecretaryImages(true);
  
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-slate-700),var(--color-sky-500),var(--color-slate-900),var(--color-sky-600),var(--color-slate-700))] dark:bg-[linear-gradient(to_right,var(--color-slate-200),var(--color-indigo-200),var(--color-slate-50),var(--color-indigo-300),var(--color-slate-200))] bg-[length:200%_auto] bg-clip-text pb-4  text-3xl font-semibold text-transparent md:text-4xl">
              Designed for Housing Co-operatives
            </h2>
            <p className="text-lg text-slate-600 dark:text-indigo-200/90">
              Every aspect of the platform is built specifically for the unique
              needs of housing cooperatives.
            </p>
          </div>

          {/* Screenshot Gallery */}
          <div className="mx-auto grid gap-8 lg:grid-cols-2">
            {/* Treasury Screenshot with Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl relative shadow-[0_12px_40px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-none bg-slate-900 dark:bg-transparent">
                  <ImageCarousel images={treasuryImages} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-xl dark:block hidden"></div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Treasury & Financial Management
                </h3>
                <p className="text-md text-slate-600 dark:text-indigo-200/90 leading-relaxed">
                  Treasury management for your co-op. Record and categorise
                  income and expenses, plan and monitor annual budgets, process
                  expense claims through an approval workflow, reconcile
                  accounts against bank statements, and produce financial
                  summaries for members and meetings. Features include
                  transaction history search, budget-vs-actual comparisons,
                  member-submitted expense forms with receipts, downloadable
                  reports, and clear dashboards. Core financial management
                  actions — such as editing transactions, approving expenses,
                  and deleting records — are restricted to admin users to
                  maintain data integrity and prevent accidental changes.
                </p>
              </div>
            </motion.div>

            {/* Secretary Screenshot with Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl relative shadow-[0_12px_40px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-none bg-slate-900 dark:bg-transparent">
                  <ImageCarousel images={secretaryImages} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-xl dark:block hidden"></div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Secretary Management
                </h3>
                <p className="text-md text-slate-600 dark:text-indigo-200/90 leading-relaxed">
                  Secretary tools for organised co-op administration. Schedule
                  and manage meetings, create and share agendas, track
                  attendance, record minutes, and keep membership and contact
                  records up to date. Store and organise important documents in
                  a central repository, and log communications with members and
                  external contacts. Features include agenda templates,
                  searchable communication history, document storage, attendance
                  statistics, and clear meeting records. Administrative actions
                  such as editing meeting records, approving minutes, or
                  deleting documents are restricted to admin users to ensure
                  accuracy and preserve co-op history.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
