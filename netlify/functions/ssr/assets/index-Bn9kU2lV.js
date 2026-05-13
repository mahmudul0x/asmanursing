import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShieldCheck, ArrowRight, MessageCircle, PhoneCall, Star, ChevronLeft, ChevronRight, Users, UserCheck, Clock, Award, Shield, HeartHandshake, Wind, Brain, Baby, HeartPulse, PersonStanding, Stethoscope, ArrowUpRight, ClipboardList, CalendarCheck, BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { s as slide1, a as slide2, b as slide3, w as whatsappLink, S as SITE } from "./router-B1DAbr0o.js";
import { S as SERVICES } from "./services-B0CwK93V.js";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { T as Testimonials } from "./Testimonials-BEkzd85o.js";
import { C as CTA } from "./CTA-CveTs08s.js";
import { a as about } from "./about-team-KpQV9b-D.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
import "./service-pneumonia-BJkrsDA0.js";
const SLIDES = [
  {
    image: slide1,
    eyebrow: "Trusted Home Care",
    title: "Professional Home Nursing & Caregiver Services",
    sub: "Hospital-grade nursing, physiotherapy and elderly care — delivered with compassion at your home.",
    serviceSlug: "nursing"
  },
  {
    image: slide2,
    eyebrow: "Elderly & Patient Care",
    title: "Quality Care, Comfort & Safety at Home",
    sub: "Experienced nurses and caregivers available 24/7 across Dhaka.",
    serviceSlug: "elderly-care"
  },
  {
    image: slide3,
    eyebrow: "Family Healthcare Support",
    title: "Trusted by 1,200+ Families Across Dhaka",
    sub: "Verified caregivers, transparent pricing, and a care advisor on call — anytime.",
    serviceSlug: "physiotherapy"
  }
];
if (typeof window !== "undefined") {
  SLIDES.forEach((s) => {
    const img = new Image();
    img.decoding = "async";
    img.src = s.image;
  });
}
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [i]);
  const s = SLIDES[i];
  const next = () => setI((v) => (v + 1) % SLIDES.length);
  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[92vh] overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "hidden", children: SLIDES.map((sl) => /* @__PURE__ */ jsx("img", { src: sl.image, alt: "", decoding: "async" }, sl.image)) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute inset-0",
        initial: { opacity: 0, scale: 1.06 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.4, ease: "easeOut" },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: s.image,
            alt: s.title,
            className: "h-full w-full object-cover",
            fetchPriority: i === 0 ? "high" : "auto",
            loading: "eager",
            decoding: "async"
          }
        )
      },
      i
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/25" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 md:pt-40 pb-28 min-h-[92vh] flex items-center justify-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-white mx-auto", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -16 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur mx-auto", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-teal" }),
              " ",
              s.eyebrow
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto", children: s.sub })
          ]
        },
        i
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/booking",
            search: { service: s.serviceSlug },
            className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all",
            children: [
              "Book Care Service ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: whatsappLink(),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 rounded-full bg-whatsapp/95 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
              " WhatsApp Us"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${SITE.phones[0]}`,
            className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15",
            children: [
              /* @__PURE__ */ jsx(PhoneCall, { className: "h-4 w-4" }),
              " ",
              SITE.phones[0]
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/85", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-amber-300 text-amber-300" }, k)) }),
          /* @__PURE__ */ jsx("span", { children: "4.9 / 5 from 1,200+ families" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-4 w-px bg-white/25" }),
        /* @__PURE__ */ jsx("span", { children: "24/7 emergency response" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 w-px bg-white/25" }),
        /* @__PURE__ */ jsx("span", { children: "Verified caregivers" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prev,
        "aria-label": "Previous slide",
        className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 border border-white/25 text-white backdrop-blur hover:bg-white/25 transition-colors",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: next,
        "aria-label": "Next slide",
        className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 border border-white/25 text-white backdrop-blur hover:bg-white/25 transition-colors",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 inset-x-0 flex justify-center gap-2", children: SLIDES.map((_, k) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setI(k),
        "aria-label": `Slide ${k + 1}`,
        className: `h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-teal" : "w-4 bg-white/40 hover:bg-white/60"}`
      },
      k
    )) })
  ] });
}
const ITEMS = [
  { i: Users, t: "1,200+", d: "Families served" },
  { i: UserCheck, t: "150+", d: "Verified caregivers" },
  { i: Clock, t: "24/7", d: "Emergency response" },
  { i: Award, t: "8+ yrs", d: "Trusted experience" },
  { i: Shield, t: "100%", d: "Background-checked" },
  { i: HeartHandshake, t: "4.9/5", d: "Family satisfaction" }
];
function TrustBar() {
  return /* @__PURE__ */ jsx("section", { className: "bg-navy text-navy-foreground", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6", children: ITEMS.map(({ i: Icon, t, d }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-teal/15 text-teal", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-bold leading-none", children: t }),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-white/70 mt-1", children: d })
    ] })
  ] }, d)) }) });
}
const ICONS = {
  nursing: Stethoscope,
  physio: PersonStanding,
  elderly: HeartPulse,
  baby: Baby,
  dementia: Brain,
  pneumonia: Wind
};
function ServicesGrid() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-soft pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Our Services" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-3xl md:text-5xl font-bold leading-tight", children: [
          "Complete ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "home healthcare" }),
          ", delivered with compassion."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Specialized nursing, physiotherapy and caregiver services built around your family's needs — across Dhaka." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((s, i) => {
        const Icon = ICONS[s.icon];
        return /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/booking",
            search: { service: s.slug },
            className: "group block overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-all hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-soft", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: s.title }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.short }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-baseline justify-between border-t border-border pt-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Starting from" }),
                    /* @__PURE__ */ jsxs("div", { className: "font-display text-xl font-bold text-primary", children: [
                      "৳ ",
                      s.price.from.toLocaleString(),
                      /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs font-medium text-muted-foreground", children: s.price.unit })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary group-hover:underline", children: "Book →" })
                ] })
              ] })
            ]
          }
        ) }, s.slug);
      }) })
    ] })
  ] });
}
const STEPS = [
  { i: PhoneCall, t: "Reach out", d: "Call or WhatsApp us with your care needs." },
  { i: ClipboardList, t: "Care plan", d: "We design a plan matched to the patient." },
  { i: UserCheck, t: "Caregiver match", d: "A vetted nurse or caregiver is assigned." },
  { i: CalendarCheck, t: "Care begins", d: "Continuous support, check-ins and updates." }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "How it works" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold", children: "A simple, reassuring care journey" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-4", children: STEPS.map((s, k) => /* @__PURE__ */ jsx(Reveal, { delay: k * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full rounded-2xl bg-card border border-border p-6 shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground text-sm font-bold", children: k + 1 }),
      /* @__PURE__ */ jsx(s.i, { className: "h-6 w-6 text-teal mt-3" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-semibold text-lg", children: s.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.d })
    ] }) }, s.t)) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TrustBar, {}),
    /* @__PURE__ */ jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: about, alt: "ASHMA caregiver team", className: "rounded-3xl shadow-card object-cover h-[460px] w-full", loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 hidden md:block glass-card rounded-2xl p-5 max-w-xs shadow-glow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(HeartHandshake, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Family-first care" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Built around your loved ones." })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "About ASHMA" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-3xl md:text-4xl font-bold leading-tight", children: [
          "A new standard of ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "home healthcare" }),
          " in Dhaka."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "We blend clinical excellence with deep compassion. Every caregiver is verified, trained and supported — so families across Dhaka can trust ASHMA with the people they love." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-3", children: [{
          i: ShieldCheck,
          t: "Verified, background-checked caregivers"
        }, {
          i: BadgeCheck,
          t: "Clinically supervised care plans"
        }, {
          i: HeartHandshake,
          t: "Compassionate, family-centered approach"
        }].map((it) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(it.i, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: it.t })
        ] }, it.t)) }),
        /* @__PURE__ */ jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary", children: [
          "Learn our story ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
export {
  Home as component
};
