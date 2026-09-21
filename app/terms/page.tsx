import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Terms — ${SITE_NAME}`,
  description: "The basics of using Vuryfy.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Terms
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        This page is a plain-language placeholder written while the product
        is still in development. It is not a final, legally-reviewed terms
        of service — that will be published, and linked from here, before
        public launch.
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            What Vuryfy does
          </h2>
          <p className="mt-2">
            Vuryfy checks text claims, links, QR codes, images, audio, and
            video, and returns a verdict based on the evidence it can find.
            Results are provided to help you make your own judgment — they
            are not a guarantee, and not professional, legal, medical, or
            financial advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Verdicts are evidence-based, not certainties
          </h2>
          <p className="mt-2">
            Vuryfy is designed to only reach a confident verdict when the
            evidence specifically supports it, and to say a result is
            unverified when it doesn&apos;t. Even so, no automated check is
            infallible — use your own judgment alongside any result,
            especially for anything with real financial, legal, or safety
            consequences.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Your account and content
          </h2>
          <p className="mt-2">
            You&apos;re responsible for keeping your account secure and for the
            content you choose to submit. Don&apos;t use Vuryfy to submit content
            you don&apos;t have the right to share, or to attempt to harm,
            deceive, or harass others.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Plans and billing
          </h2>
          <p className="mt-2">
            Paid plans and their monthly allowances are described on our{" "}
            <a href="/pricing" className="font-medium text-slate-900 hover:text-slate-700">
              pricing page
            </a>
            . Real payment processing is not yet active while the product is
            in development; final billing terms will be published here once
            it is. The refund rules below reflect how billing is designed to
            work and already govern how credits are handled today.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Refunds</h2>
          <p className="mt-2">
            Subscription payments are non-refundable. If you cancel, you keep
            access through the end of the period you&apos;ve already paid for —
            you just won&apos;t be charged again after that. Your plan&apos;s
            monthly Quick Check and Deep Investigation allowance doesn&apos;t
            roll over and expires at the end of each billing cycle, used or
            not. Top-up credits, if you buy them separately from a plan, are
            also non-refundable and expire at the end of the month you bought
            them in.
          </p>
          <p className="mt-2">
            A verification that completes and returns a result — including an
            &quot;Unverified&quot; or inconclusive one — uses a credit; an
            inconclusive result is still a real answer, not a failure. If a
            check doesn&apos;t complete because of a problem on our end (a
            timeout, a provider outage, a technical error) rather than
            because the evidence was inconclusive, the credit is returned to
            your balance automatically — you don&apos;t need to ask.
          </p>
          <p className="mt-2">
            Switching your phone number means switching accounts — plans and
            balances don&apos;t transfer between accounts automatically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Questions</h2>
          <p className="mt-2">
            Reach us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-slate-900 hover:text-slate-700"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with any questions about these terms.
          </p>
        </section>
      </div>
    </article>
  );
}
