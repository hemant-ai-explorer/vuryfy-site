// Single source of truth for the two locked pricing plans (see
// architecture-decisions.md / architecture-decisions-addendum-2026-09-17.md
// — the ₹299 plan was repriced to ₹199 on Sept 17, 2026, same allowance).
// Keep this in sync if pricing ever changes again rather than hand-editing
// copy in multiple places.
export type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  firstMonth: string;
  ongoing: string;
  features: string[];
  highlighted?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "₹99",
    period: "/month",
    tagline: "Great for everyday checking.",
    firstMonth: "5 free Quick Checks in your first month",
    ongoing: "30 Quick Checks + 2 Deep Investigations per month, active from day one",
    features: [
      "All six verification types",
      "Submit from the app",
      "Evidence-backed verdicts",
      "All 9 supported languages",
    ],
  },
  {
    name: "Power",
    price: "₹199",
    period: "/month",
    tagline: "For power users and small teams.",
    firstMonth: "5 free Quick Checks in your first month",
    ongoing: "75 Quick Checks + 5 Deep Investigations per month, active from day one",
    features: [
      "Everything in Starter",
      "More than double the monthly checks",
      "More Deep Investigations for high-stakes claims",
      "Priority for new features as they ship",
    ],
    highlighted: true,
  },
];

export const PLAN_NOTE =
  "Allowances renew each month and don't roll over. Sign up with just your phone number — no payment method needed until you use your 6th Quick Check, run a Deep Investigation, or your first month ends, whichever comes first.";
