import { APP_URL } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-72 w-[36rem] rounded-full bg-gradient-to-tr from-slate-300 via-slate-200 to-emerald-200 opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Digital trust, made simple
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Verify anything before you believe it.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Vuryfy checks text claims, links, QR codes, images, audio, and
          video — and gives you an evidence-backed verdict, not a guess.
          Send it in from the app, or just forward it on WhatsApp.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/25 transition hover:bg-slate-800 sm:w-auto"
          >
            Sign Up
          </a>
          <a
            href="/pricing"
            className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 sm:w-auto"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
