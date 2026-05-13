import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { R as REVIEWS } from "./Testimonials-BEkzd85o.js";
import { Quote, Star } from "lucide-react";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { C as CTA } from "./CTA-CveTs08s.js";
import "motion/react";
import "@tanstack/react-router";
import "./router-B1DAbr0o.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const SplitComponent = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Family Stories", title: "Trusted by families across Dhaka.", sub: "Real reviews from real homes — the moments that matter most to us." }),
  /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: REVIEWS.map((r, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxs("figure", { className: "h-full rounded-3xl bg-card border border-border p-6 shadow-card relative", children: [
    /* @__PURE__ */ jsx(Quote, { className: "absolute -top-3 -left-3 h-8 w-8 text-primary/20" }),
    /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(r.stars)].map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-amber-400 text-amber-400" }, k)) }),
    /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-sm leading-relaxed", children: [
      '"',
      r.text,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-teal text-white font-semibold", children: r.name[0] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: r.name }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: r.role })
      ] })
    ] })
  ] }) }, r.name)) }) }),
  /* @__PURE__ */ jsx(CTA, {})
] });
export {
  SplitComponent as component
};
