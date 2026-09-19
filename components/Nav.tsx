import Link from "next/link";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/site-config";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#verify", label: "What you can check" },
  { href: "/pricing", label: "Pricing" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block"
          >
            Log in
          </a>
          <a
            href={APP_URL}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/20 transition hover:bg-slate-800"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
