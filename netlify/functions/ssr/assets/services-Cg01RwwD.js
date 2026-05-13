import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { S as SERVICES } from "./services-B0CwK93V.js";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { I as Input } from "./input-Cgc6DEMC.js";
import { Search, X, SlidersHorizontal, ShieldCheck, Clock, Award, Wind, Brain, Baby, HeartPulse, PersonStanding, Stethoscope, Check, ArrowRight } from "lucide-react";
import { C as CTA } from "./CTA-CveTs08s.js";
import "./service-pneumonia-BJkrsDA0.js";
import "./router-B1DAbr0o.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const ICONS = {
  nursing: Stethoscope,
  physio: PersonStanding,
  elderly: HeartPulse,
  baby: Baby,
  dementia: Brain,
  pneumonia: Wind
};
const CATEGORIES = ["All", "Nursing", "Therapy", "Elderly", "Baby & Mother", "Specialized"];
function ServicesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      if (cat !== "All" && s.category !== cat) return false;
      if (!q) return true;
      return s.title.toLowerCase().includes(q) || s.short.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.tags.some((t) => t.toLowerCase().includes(q)) || s.benefits.some((b) => b.toLowerCase().includes(q));
    });
  }, [query, cat]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Our Services", title: "Specialized home healthcare for every stage of life.", sub: "From newborn care to dementia support — clinically supervised, delivered with compassion." }),
    /* @__PURE__ */ jsx("section", { className: "sticky top-16 md:top-18 z-20 border-y border-border bg-background/85 backdrop-blur-lg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-4 grid gap-3 lg:grid-cols-[1fr_auto] items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Input, { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search services, conditions, or care type — e.g. nursing, stroke, baby", className: "pl-11 pr-10 h-12 rounded-full border-border bg-card", maxLength: 80 }),
        query && /* @__PURE__ */ jsx("button", { onClick: () => setQuery(""), "aria-label": "Clear search", className: "absolute right-3 top-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full bg-secondary hover:bg-secondary/70", children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1", children: [
        /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground pr-1", children: [
          /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-3.5 w-3.5" }),
          " Filter"
        ] }),
        CATEGORIES.map((c) => {
          const active = c === cat;
          return /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: `whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all ${active ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-card text-foreground/70 border-border hover:border-primary/40 hover:text-primary"}`, children: c }, c);
        })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-gradient-to-b from-primary-soft/20 to-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Showing ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy", children: filtered.length }),
          " of ",
          SERVICES.length,
          " services",
          cat !== "All" && /* @__PURE__ */ jsxs(Fragment, { children: [
            " in ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: cat })
          ] }),
          query && /* @__PURE__ */ jsxs(Fragment, { children: [
            ' for "',
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: query }),
            '"'
          ] })
        ] }),
        (query || cat !== "All") && /* @__PURE__ */ jsx("button", { onClick: () => {
          setQuery("");
          setCat("All");
        }, className: "text-xs font-semibold text-primary hover:underline", children: "Reset filters" })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-dashed border-border bg-card p-12 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary text-muted-foreground", children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold text-navy", children: "No services match your search" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Try a different keyword or reset the filters." })
      ] }) : /* @__PURE__ */ jsx(motion.div, { layout: true, className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, { s, i }, s.slug)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-10 border-y border-border bg-card", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:grid-cols-3", children: [{
      icon: ShieldCheck,
      t: "Verified Caregivers",
      d: "Background-checked & trained"
    }, {
      icon: Clock,
      t: "24/7 Availability",
      d: "Care when your family needs it"
    }, {
      icon: Award,
      t: "Clinically Supervised",
      d: "Backed by registered nurses"
    }].map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-navy", children: b.t }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: b.d })
      ] })
    ] }, b.t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 space-y-24", children: SERVICES.map((s, i) => {
      const Icon = ICONS[s.icon];
      return /* @__PURE__ */ jsxs("article", { id: s.slug, className: "scroll-mt-32 grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsx(Reveal, { className: i % 2 === 1 ? "lg:order-2" : "", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-card", children: [
          /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, className: "w-full h-[420px] object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-soft", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
            " ",
            s.category
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Reveal, { delay: 0.05, children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: [
            "Service · ",
            String(i + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold text-navy", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: s.description }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 inline-flex items-baseline gap-2 rounded-2xl bg-primary-soft/50 border border-border px-4 py-2.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Starting from" }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-2xl font-bold text-primary", children: [
              "৳ ",
              s.price.from.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: s.price.unit })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 grid sm:grid-cols-2 gap-3", children: s.benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-teal mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: b })
          ] }, b)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/booking", search: {
              service: s.slug
            }, className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-glow transition-all", children: [
              "Book ",
              s.title,
              " ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/packages", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary/40", children: "See packages" })
          ] })
        ] })
      ] }, s.slug);
    }) }) }),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
function ServiceCard({
  s,
  i
}) {
  const Icon = ICONS[s.icon];
  return /* @__PURE__ */ jsx(motion.div, { layout: true, initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -10
  }, transition: {
    duration: 0.35,
    delay: i * 0.04
  }, children: /* @__PURE__ */ jsxs(Link, { to: "/booking", search: {
    service: s.slug
  }, className: "group relative block h-full overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-44 overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, loading: "lazy", decoding: "async", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-soft", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-soft", children: s.category })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-navy", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: s.short }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "From" }),
          /* @__PURE__ */ jsxs("div", { className: "font-display text-lg font-bold text-primary leading-tight", children: [
            "৳ ",
            s.price.from.toLocaleString(),
            /* @__PURE__ */ jsx("span", { className: "ml-1 text-[11px] font-medium text-muted-foreground", children: s.price.unit })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground group-hover:translate-x-1 transition-transform", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }) })
      ] })
    ] })
  ] }) });
}
export {
  ServicesPage as component
};
