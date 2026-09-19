import { APP_URL } from "@/lib/site-config";
import { PLANS, PLAN_NOTE } from "@/lib/plans";

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl border p-8 ${
              plan.highlighted
                ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                : "border-slate-200 bg-white text-slate-900 shadow-sm"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                Most popular
              </span>
            )}

            <h3
              className={`text-sm font-semibold uppercase tracking-wide ${
                plan.highlighted ? "text-slate-300" : "text-slate-900"
              }`}
            >
              {plan.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span
                className={
                  plan.highlighted ? "text-slate-300" : "text-slate-500"
                }
              >
                {plan.period}
              </span>
            </div>

            <p
              className={`mt-2 text-sm ${
                plan.highlighted ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {plan.tagline}
            </p>

            <div
              className={`mt-6 space-y-1 rounded-xl p-4 text-sm ${
                plan.highlighted ? "bg-white/10" : "bg-slate-50"
              }`}
            >
              <p className="font-medium">{plan.firstMonth}</p>
              <p
                className={
                  plan.highlighted ? "text-slate-300" : "text-slate-600"
                }
              >
                Then {plan.ongoing}
              </p>
            </div>

            {!compact && (
              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-slate-300" : "text-emerald-600"
                      }`}
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={APP_URL}
              className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Sign Up
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
        {PLAN_NOTE}
      </p>
    </div>
  );
}
