// Single source of truth for Vuryfy's pricing plan(s) (see
// architecture-decisions.md / architecture-decisions-addendum-2026-09-17.md
// — the ₹299 plan was repriced to ₹199 on Sept 17, 2026, same allowance).
// Keep this in sync if pricing ever changes again rather than hand-editing
// copy in multiple places.
//
// Nov 24, 2026 — user's explicit decision: "i just want one plan thats all
// for now." Power (₹199) removed from this array to match the app, where
// it's hidden via is_active = false on public.plans rather than deleted
// (supabase/migrations/0028_single_plan_launch.sql in the frontend repo).
// Its data below is kept commented out, not deleted, so re-adding it later
// is a one-line uncomment, not a rebuild from scratch.
//
// Nov 25, 2026 — repriced again: ₹99 → ₹49/month. User's explicit call:
// "i want the plan to be 49/month. just this one plan." Matches
// supabase/migrations/0031_starter_plan_49.sql in the frontend repo (the
// plan's internal code stays plan_99 there too — only the price changed).
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
    price: "₹49",
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
  // Power (plan_299, ₹199) deliberately left out — see the header comment
  // above. Re-add this entry if the plan is ever reactivated:
  // {
  //   name: "Power",
  //   price: "₹199",
  //   period: "/month",
  //   tagline: "For power users and small teams.",
  //   firstMonth: "5 free Quick Checks in your first month",
  //   ongoing: "75 Quick Checks + 5 Deep Investigations per month, active from day one",
  //   features: [
  //     "Everything in Starter",
  //     "More than double the monthly checks",
  //     "More Deep Investigations for high-stakes claims",
  //     "Priority for new features as they ship",
  //   ],
  //   highlighted: true,
  // },
];

export const PLAN_NOTE =
  "Allowances renew each month and don't roll over. Sign up with just your phone number — no payment method needed until you use your 6th Quick Check, run a Deep Investigation, or your first month ends, whichever comes first.";
