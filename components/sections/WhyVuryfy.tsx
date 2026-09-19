const items = [
  {
    title: "Evidence-backed, not guessed",
    body: "We only call something “False” or “Scam” when the evidence specifically supports it for that exact claim or link — never from a resemblance or a vibe.",
  },
  {
    title: "Honest about uncertainty",
    body: "When the evidence doesn't clearly settle something, Vuryfy says “Unverified” instead of forcing a confident answer it can't back up.",
  },
  {
    title: "Private by default",
    body: "Your submissions are private unless you choose to share a result. Photos, audio, and video are kept only as long as needed to process them.",
  },
  {
    title: "Built for India's languages",
    body: "Use Vuryfy in English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Tamil, or Telugu.",
  },
];

export function WhyVuryfy() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Why people trust Vuryfy
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
