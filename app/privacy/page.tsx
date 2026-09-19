import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy — ${SITE_NAME}`,
  description: "How Vuryfy handles the content you submit for verification.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Privacy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        This page is a plain-language overview of how Vuryfy is designed to
        handle your content, written while the product is still in
        development. It is not a final, legally-reviewed privacy policy —
        that will be published, and linked from here, before public launch.
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            The short version
          </h2>
          <p className="mt-2">
            Whatever you submit to Vuryfy for verification — text, links, QR
            codes, images, audio, or video — belongs to you. We only process
            it to deliver the check you asked for, and we collect and keep
            only what&apos;s needed to do that.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Private by default
          </h2>
          <p className="mt-2">
            Everything you submit and every result you receive is private to
            your account by default. A result is only ever visible to
            someone else if you take an explicit action to share it — and
            sharing a result shares the verdict, summary, evidence, and
            sources, not the original content you submitted.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            How long we keep your content
          </h2>
          <p className="mt-2">
            Submitted media is kept only as long as it takes to process your
            request, plus a short window in case you need to revisit the
            result. QR codes are decoded on your own device and are never
            uploaded at all. Extracted evidence and the verdict itself are
            kept as your verification history so you can look back on it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            WhatsApp submissions
          </h2>
          <p className="mt-2">
            If you forward content to Vuryfy on WhatsApp, we use it only to
            match it to your linked account and hold it briefly until you
            open the app to choose how it should be checked. WhatsApp is a
            submission channel, not a reply channel — your result is never
            sent back over WhatsApp, only shown in the app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Questions</h2>
          <p className="mt-2">
            If you have questions about how your data is handled, reach us
            at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
