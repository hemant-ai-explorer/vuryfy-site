// Central place for the handful of values this marketing site needs to
// point at the real product. The app itself lives in a separate Vercel
// project/repo (see architecture-decisions.md's "never blur the Vuryfy
// project line" rule) — this site only ever links out to it, never embeds
// or proxies it.
//
// A payment method is required at signup — including to use the free
// Quick Checks in month one (explicit product decision, confirmed Sept 19,
// 2026 — this superseded the earlier "billing not wired up yet" plan
// noted in architecture-decisions.md's Sprint 1 entry). Every "Get
// started" / "Choose this plan" button on this site still links to
// account creation in the app rather than a separate checkout page, since
// payment details are collected as part of that same signup flow.
//
// Updated Sept 20, 2026: the app now lives at app.vuryfy.com (a Vercel
// domain added to the `vuryfy` project, DNS configured on GoDaddy) rather
// than the vuryfy.vercel.app Vercel-assigned domain.
export const APP_URL = "https://app.vuryfy.com";

export const SITE_NAME = "Vuryfy";
export const SITE_TAGLINE = "Verify anything before you believe it.";

// Placeholder — point this at a real, monitored inbox before launch.
export const CONTACT_EMAIL = "hello@vuryfy.com";

export const SUPPORTED_LANGUAGES = [
  "English",
  "Hindi",
  "Bengali",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Tamil",
  "Telugu",
];
