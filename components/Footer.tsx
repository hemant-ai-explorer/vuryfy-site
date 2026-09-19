import Link from "next/link";
import { Logo } from "./Logo";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              Evidence-backed fact-checking for text, links, QR codes, images,
              audio, and video.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/#how-it-works" className="hover:text-slate-900">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#verify" className="hover:text-slate-900">
                  What you can check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-slate-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vuryfy. All rights reserved.</p>
          <p>Made in Lucknow, India.</p>
        </div>
      </div>
    </footer>
  );
}
