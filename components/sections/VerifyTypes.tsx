import type { ReactNode } from "react";

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
      {children}
    </div>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const types = [
  {
    title: "Text & claims",
    body: "Type or paste anything you've read or been told, and see what the evidence actually says.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Links & URLs",
    body: "Check a suspicious link before you click it — including whether it's tied to a known scam.",
    icon: (
      <svg {...iconProps}>
        <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5" />
      </svg>
    ),
  },
  {
    title: "QR codes",
    body: "Scan a payment or promotion QR to see where it actually leads before you pay or click through.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM19 14v7M14 19h3M17 21h2" />
      </svg>
    ),
  },
  {
    title: "Images",
    body: "Extract and fact-check any text in a photo, and check the image itself for signs of manipulation.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5.5-5.5L9 17" />
      </svg>
    ),
  },
  {
    title: "Audio",
    body: "Fact-check what's said in a voice note, and check the recording itself for signs of AI generation.",
    icon: (
      <svg {...iconProps}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v3M9 21h6" />
      </svg>
    ),
  },
  {
    title: "Video",
    body: "Fact-check the transcript of a video clip, and check the footage itself for signs of tampering.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="14" height="14" rx="2" />
        <path d="M17 9.5l4-2.5v10l-4-2.5" />
      </svg>
    ),
  },
];

export function VerifyTypes() {
  return (
    <section id="verify" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            One app, six ways to check
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Misinformation doesn&apos;t only arrive as text — Vuryfy meets it in
            whatever form it actually shows up.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <IconWrap>{t.icon}</IconWrap>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
