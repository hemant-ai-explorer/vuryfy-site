import Link from "next/link";
import { PricingCards } from "@/components/PricingCards";

export function PricingPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Simple, monthly pricing
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Two plans, no hidden per-check fees.
        </p>
      </div>

      <div className="mt-14">
        <PricingCards compact />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/pricing"
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Compare full plan details →
        </Link>
      </div>
    </section>
  );
}
