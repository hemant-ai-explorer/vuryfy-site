import { APP_URL } from "@/lib/site-config";

export function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="rounded-3xl bg-slate-900 px-8 py-14 text-center sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Stop guessing. Start verifying.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
          Create your free account and check your first claim, link, photo,
          voice note, or video in minutes.
        </p>
        <a
          href={APP_URL}
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}
