// Central place for the handful of values this marketing site needs to
// point at the real product. The app itself lives in a separate Vercel
// project/repo (see architecture-decisions.md's "never blur the Vuryfy
// project line" rule) — this site only ever links out to it, never embeds
// or proxies it.
//
// Payments/subscriptions are NOT wired up in the app yet (explicit,
// deliberate deferral — "Payment and Subscription we will do when we have
// added all the features"). So every "Get started" / "Choose this plan"
// button on this site links to account creation in the app, never to a
// checkout — there is no checkout to link to yet. Update APP_URL to
// https://app.vuryfy.com (or similar) once the app itself moves off the
// vuryfy.vercel.app Vercel domain and onto a subdomain of the real domain.
export const APP_URL = "https://vuryfy.vercel.app";

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
