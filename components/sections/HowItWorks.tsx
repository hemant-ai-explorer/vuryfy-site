const steps = [
  {
    number: "1",
    title: "Send it in",
    body: "Type a claim, paste a link, or upload a photo, voice note, or video in the app — or just forward it to Vuryfy on WhatsApp.",
  },
  {
    number: "2",
    title: "Choose how deep to go",
    body: "Quick Check gives you a fast read. Deep Investigation runs a more thorough, multi-source review when it matters more.",
  },
  {
    number: "3",
    title: "Get an evidence-backed verdict",
    body: "See the verdict alongside the actual sources and evidence checked — so you can judge it yourself, not just take our word for it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          How Vuryfy works
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Three steps, whether it&apos;s a forwarded message, a screenshot, or a
          voice note that made you pause.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.number} className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-base font-semibold text-white">
              {s.number}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
