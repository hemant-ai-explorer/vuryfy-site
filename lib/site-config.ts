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

// A real, monitored inbox (Zoho Mail, free plan) — updated Sept 20, 2026.
export const CONTACT_EMAIL = "info@vuryfy.com";

// Added Oct 9, 2026 — a production-credentials partner (Decentro) flagged
// that the site had no phone number or business address listed, which
// their risk review needed to verify Vuryfy Technologies as a real,
// reachable business. CONTACT_PHONE_DISPLAY is the formatted version shown
// on the page; CONTACT_PHONE_TEL is the digits-only version used in the
// tel: link. Address is the Udyam-registered location (the Gomti Nagar
// commercial space — see business-ops-2026-09-20.md).
export const CONTACT_PHONE_DISPLAY = "+91 84232 36461";
export const CONTACT_PHONE_TEL = "+918423236461";
export const CONTACT_ADDRESS = "C 3/177, Vijayant Khand, Gomti Nagar, Lucknow, UP - 226010";

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
