import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

// Deliberately not using next/font/google here: it requires a live fetch
// to fonts.googleapis.com at build time, which isn't guaranteed on every
// build environment (it failed outright in the cloud sandbox this site
// was authored in). A solid system-font stack (defined in globals.css)
// renders instantly with zero external requests and looks clean on every
// platform — the right tradeoff for a marketing site's first paint.

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Vuryfy checks text claims, links, QR codes, images, audio, and video with evidence-backed verdicts — in the app or straight from WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
