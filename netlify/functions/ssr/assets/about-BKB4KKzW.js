import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { ShieldCheck, Users, Award, Stethoscope, Target, Eye, HeartHandshake, Sparkles, GraduationCap, Microscope, Building2, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { a as about } from "./about-team-KpQV9b-D.js";
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
const VALUES = [{
  i: HeartHandshake,
  t: "Compassion First",
  d: "Every patient is treated with empathy, dignity and unhurried patience."
}, {
  i: ShieldCheck,
  t: "Safety & Trust",
  d: "Background-checked caregivers, supervised care plans, full transparency."
}, {
  i: Stethoscope,
  t: "Clinical Excellence",
  d: "Care delivered to hospital-grade standards, right inside your home."
}, {
  i: Sparkles,
  t: "Family-Centered",
  d: "We work with families, not around them — keeping you informed always."
}];
const TIMELINE = [{
  y: "2017",
  t: "Founded in Dhaka",
  d: "ASHMA begins with a small team of nurses serving Bashundhara families."
}, {
  y: "2019",
  t: "24/7 care coordination",
  d: "Round-the-clock dispatch desk launched to handle emergencies."
}, {
  y: "2021",
  t: "Specialized programs",
  d: "Dementia, pneumonia and post-surgery recovery programs introduced."
}, {
  y: "2024",
  t: "1,200+ families served",
  d: "Network expands across Khilgaon, Shahjahanpur, Nadda and Kalachandpur."
}];
const CERTS = [{
  i: GraduationCap,
  t: "Certified Nurses",
  d: "Registered with national nursing council"
}, {
  i: Microscope,
  t: "Clinical Protocols",
  d: "Hospital-grade SOPs for every visit"
}, {
  i: Building2,
  t: "Licensed Provider",
  d: "Operating in compliance with Dhaka regulations"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "About ASHMA", title: "Compassionate home healthcare you can truly trust.", sub: "We exist to make professional medical and caregiving support accessible, dignified and human — right inside your home." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: about, alt: "The ASHMA team", className: "rounded-3xl shadow-card object-cover w-full h-[480px]", loading: "lazy", decoding: "async" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card border border-border p-5 shadow-glow max-w-xs", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-navy", children: "100% Verified" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Every caregiver background-checked" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Our story" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold text-navy", children: "Care built by families, for families." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "The ASHMA Home Care was founded in Dhaka with one belief: the people you love deserve the same standard of care at home as they would receive in the best hospitals — but with the warmth and dignity only home can provide." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Today our verified nurses, physiotherapists and caregivers serve families across Khilgaon, Shahjahanpur, Nadda, Kalachandpur and Bashundhara — supported by a 24/7 care coordination team." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3", children: [{
          i: Users,
          t: "1,200+",
          d: "Families"
        }, {
          i: Award,
          t: "8+ yrs",
          d: "Experience"
        }, {
          i: Stethoscope,
          t: "60+",
          d: "Caregivers"
        }, {
          i: ShieldCheck,
          t: "100%",
          d: "Verified"
        }].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 text-center", children: [
          /* @__PURE__ */ jsx(s.i, { className: "h-5 w-5 text-primary mx-auto" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 font-display font-bold text-navy", children: s.t }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: s.d })
        ] }, s.d)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-gradient-to-b from-primary-soft/30 to-background", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-6", children: [{
      i: Target,
      label: "Our Mission",
      t: "Bring hospital-grade care into every Bangladeshi home.",
      d: "We make professional nursing, therapy and caregiving accessible to every family — with transparency, dignity and clinical rigor."
    }, {
      i: Eye,
      label: "Our Vision",
      t: "Redefine what home healthcare means in South Asia.",
      d: "A future where families never have to choose between quality medical care and the comfort of being together at home."
    }].map((b) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl bg-card border border-border p-8 shadow-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(b.i, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: b.label })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl font-bold text-navy", children: b.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: b.d })
    ] }) }, b.label)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Our values" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold text-navy", children: "What guides every visit." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Our caregivers don't just follow a checklist — they live by these principles on every call." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: VALUES.map((v, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(v.i, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-semibold text-navy", children: v.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.d })
      ] }) }, v.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24 bg-navy text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Our journey" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold", children: "Eight years of caring for Dhaka." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15 md:-translate-x-1/2" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-10", children: TIMELINE.map((m, i) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: `relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "md:text-right pl-12 md:pl-0 md:pr-10", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-3xl md:text-4xl font-bold text-teal", children: m.y }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-lg font-semibold", children: m.t }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/70 max-w-md md:ml-auto", children: m.d })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block" }),
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 md:left-1/2 top-2 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-teal ring-4 ring-navy" })
        ] }) }, m.y)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Trust & compliance" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold text-navy", children: "Backed by clinical standards." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: CERTS.map((c) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(c.i, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-navy", children: c.t }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-0.5", children: c.d })
        ] })
      ] }) }, c.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24 bg-gradient-to-b from-primary-soft/40 to-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-primary/40 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 font-display text-2xl md:text-3xl font-medium text-navy leading-relaxed", children: `"We treat every patient the way we'd want our own parents to be cared for — with skill, presence, and unwavering kindness."` }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-sm font-semibold text-primary", children: "— The ASHMA Care Team" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 inline-flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-glow transition-all", children: [
          "Explore our services ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/booking", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary/40", children: "Book a caregiver" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground", children: ["Verified caregivers", "24/7 dispatch", "Transparent pricing", "Family-centered"].map((b) => /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-teal" }),
        " ",
        b
      ] }, b)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
export {
  AboutPage as component
};
