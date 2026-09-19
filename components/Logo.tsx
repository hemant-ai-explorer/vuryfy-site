export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 ${className}`}
    >
      {/* Sept 19, 2026: swapped the plain checkmark for the shield+checkmark
          mark chosen for the actual app (frontend's app/icon.svg) — same
          badge size/radius/background as before, just a different glyph,
          so the marketing site and the app read as the same brand. */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="30" height="30" rx="8" fill="#0F172A" />
        <g transform="translate(6,6) scale(0.75)">
          <path
            d="M12 2L4 5v6.5C4 16.5 7.4 20.7 12 22c4.6-1.3 8-5.5 8-10.5V5l-8-3z"
            fill="white"
          />
          <path
            d="M8.5 12.2l2.4 2.4 4.6-5.2"
            stroke="#0F172A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
      Vuryfy
    </span>
  );
}
