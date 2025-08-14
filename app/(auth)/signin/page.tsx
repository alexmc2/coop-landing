export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
};

import Link from 'next/link';

export default function SignIn() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-slate-200),var(--color-indigo-200),var(--color-slate-50),var(--color-indigo-300),var(--color-slate-200))] bg-[length:200%_auto] bg-clip-text  text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/90"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label
                    className="block text-sm font-medium text-indigo-200/90"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-sm text-slate-600 hover:underline"
                    href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Sign in
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-slate-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-slate-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-slate-400/25">
                or
              </div>
              <button className="btn relative w-full bg-linear-to-b from-slate-800 to-slate-800/60 bg-[length:100%_100%] bg-[bottom] text-slate-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-slate-800),var(--color-slate-700),var(--color-slate-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                Sign In with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/90">
            Don't you have an account?{' '}
            <Link className="font-medium text-indigo-500" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
