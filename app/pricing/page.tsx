import type { Metadata } from "next";
import { PricingCards } from "@/components/PricingCards";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Pricing — ${SITE_NAME}`,
  description:
    "Simple monthly pricing for Vuryfy's fact-checking and authenticity checks: text, links, QR codes, images, audio, and video.",
};

const faqs = [
  {
    q: "What's the difference between a Quick Check and a Deep Investigation?",
    a: "Quick Check gives you a fast, evidence-backed read in seconds. Deep Investigation runs a more thorough, multi-source review — better suited to a claim you're about to act on or share widely.",
  },
  {
    q: "Can I submit things through WhatsApp instead of the app?",
    a: "Yes. Link your WhatsApp to your account once from the app, then forward text, links, photos, voice notes, or video straight to Vuryfy. You still choose Quick Check or Deep Investigation — and are only charged — from inside the app.",
  },
  {
    q: "What happens if I use up my checks for the month?",
    a: "Your allowance renews each month and doesn't carry over unused checks. If you regularly need more, the Power plan gives you a larger monthly allowance.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Everything you submit is private by default and is never shared unless you explicitly choose to share a result. Photos, audio, and video are kept only as long as needed to process your request.",
  },
  {
    q: "Which languages does Vuryfy support?",
    a: "English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Tamil, and Telugu — for both submitting a check and reading the result.",
  },
  {
    q: "Do I need to add a payment method to sign up?",
    a: "Yes — a payment method is required when you create your account, including to use your 5 free Quick Checks in your first month.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-4 pt-16 text-center sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Simple, monthly pricing
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
          Every plan includes all six verification types, WhatsApp
          submission, evidence-backed verdicts, and all 9 supported
          languages.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <PricingCards />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-slate-50">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
                {f.q}
                <span className="ml-4 shrink-0 text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
