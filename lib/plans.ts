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
    ongoing: "30 Quick Checks + 2 Deep Investigations every month after",
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
    ongoing: "75 Quick Checks + 5 Deep Investigations every month after",
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
  "Allowances renew each month and don't roll over. A payment method is required to create your account — you're charged as soon as you go past your 5 free Quick Checks or run a Deep Investigation, or automatically when your first month ends if you haven't.";
