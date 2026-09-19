const points = [
  "Link your WhatsApp to your Vuryfy account once, from the app.",
  "Forward any text, link, photo, voice note, or video to Vuryfy.",
  "Open the app to pick Quick Check or Deep Investigation — nothing runs until you choose.",
];

export function WhatsAppSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Straight from WhatsApp
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            The forward you almost believed? Just forward it to us instead.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Most questionable claims in India don&apos;t arrive on a website —
            they arrive as a WhatsApp forward. So Vuryfy meets you there:
            send in whatever you received, then finish the check in the app
            on your own terms.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="rounded-2xl bg-white p-5 shadow-inner">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-slate-700">
                WhatsApp
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-100 px-4 py-2 text-sm text-slate-800">
                Forwarded a photo
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2 text-sm text-slate-700">
                Got it. Open Vuryfy to choose Quick Check or Deep
                Investigation for this photo.
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            A submission, not a reply channel — your result always shows up
            in the app.
          </p>
        </div>
      </div>
    </section>
  );
}
