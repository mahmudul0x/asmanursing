import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { Sparkles, Check } from "lucide-react";
import { C as CTA } from "./CTA-CveTs08s.js";
import "motion/react";
import "./router-B1DAbr0o.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const PACKS = [{
  name: "Hourly Care",
  price: "৳ 350",
  per: "/hour",
  desc: "On-demand caregiver support whenever you need an extra hand.",
  features: ["Min. 4 hours", "Verified caregiver", "Daily living help", "Real-time updates"]
}, {
  name: "12-Hour Daily",
  price: "৳ 2,500",
  per: "/day",
  desc: "Day or night shift care for ongoing recovery and support.",
  features: ["Day or night shift", "Vitals monitoring", "Medication reminders", "Companionship"],
  featured: true
}, {
  name: "24-Hour Live-In",
  price: "৳ 4,500",
  per: "/day",
  desc: "Continuous live-in care for high-need patients and elders.",
  features: ["Round-the-clock care", "Trained nurse option", "Mobility & hygiene help", "Family briefings"]
}, {
  name: "Monthly Care",
  price: "৳ 35,000",
  per: "/month",
  desc: "Best value continuous care with a dedicated caregiver.",
  features: ["Dedicated caregiver", "Monthly review", "Backup coverage", "Care coordinator"]
}, {
  name: "Night Care",
  price: "৳ 1,800",
  per: "/night",
  desc: "Overnight peace of mind for families and patients.",
  features: ["8–10 hour shift", "Sleep monitoring", "Medication at night", "Emergency response"]
}, {
  name: "Emergency Caregiver",
  price: "From ৳ 500",
  per: "/hour",
  desc: "Fast dispatch caregiver within 60–90 minutes in Dhaka.",
  features: ["Rapid dispatch", "Crisis-trained", "Hospital coordination", "Family hotline"]
}];
function PackagesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Care Packages", title: "Flexible care plans, transparent pricing.", sub: "Pick the package that fits your family — and switch anytime as needs change." }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 md:py-24", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: PACKS.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: `relative h-full rounded-3xl border p-7 shadow-card transition-all ${p.featured ? "bg-gradient-to-br from-primary to-teal text-primary-foreground border-transparent shadow-glow" : "bg-card border-border"}`, children: [
        p.featured && /* @__PURE__ */ jsxs("span", { className: "absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
          " Most chosen"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: `mt-2 text-sm ${p.featured ? "text-white/85" : "text-muted-foreground"}`, children: p.desc }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-bold", children: p.price }),
          /* @__PURE__ */ jsx("span", { className: `text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`, children: p.per })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-2.5", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(Check, { className: `h-4 w-4 mt-0.5 ${p.featured ? "text-white" : "text-teal"}` }),
          " ",
          /* @__PURE__ */ jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsx(Link, { to: "/booking", className: `mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${p.featured ? "bg-white text-primary hover:bg-white/95" : "bg-primary text-primary-foreground hover:bg-primary/90"}`, children: "Book & Pay" })
      ] }) }, p.name)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-center text-xs text-muted-foreground", children: "Indicative pricing. Final quote depends on patient condition, location and care duration." })
    ] }),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
export {
  PackagesPage as component
};
