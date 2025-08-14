import Image from 'next/image';
import BlurredShape from '@/public/images/blurred-shape.svg';

export default function PricingHome() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-20 -translate-x-1/3"
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-slate-200),var(--color-indigo-200),var(--color-slate-50),var(--color-indigo-300),var(--color-slate-200))] bg-[length:200%_auto] bg-clip-text pb-4  text-3xl font-semibold text-transparent md:text-4xl">
              Let's Talk About Your Co-op
            </h2>
            <p className="text-lg text-indigo-200/90 mb-8">
              I'm still working out the best way to share this platform with
              other co-ops. If you're interested, let's have a chat about your
              needs and how we might work together.
            </p>
          </div>

          {/* Temporary pricing info */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">
                Currently in Beta
              </h3>
              <p className="text-slate-300 mb-6">
                The platform is fully functional and actively used by my own
                co-op. I'm looking for a few other housing co-ops to try it out
                and provide feedback.
              </p>
              <ul className="text-left text-slate-400 space-y-3 mb-8 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Full platform access for your co-op</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Direct support from me (the developer)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Help with initial setup and data migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Your feedback shapes future features</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500">
                Pricing will be kept affordable and transparent - housing co-ops
                shouldn't break the bank for good tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
