import { jsx, jsxs } from "react/jsx-runtime";
import { Quote, Star } from "lucide-react";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
const REVIEWS = [
  { name: "Tahmina R.", role: "Daughter, Bashundhara", text: "ASHMA's nurses cared for my father after surgery with such warmth. They felt like family.", stars: 5 },
  { name: "Imran H.", role: "Son, Khilgaon", text: "The dementia caregiver understood my mother's routine within days. We finally rest easy at night.", stars: 5 },
  { name: "Sadia K.", role: "New mother, Nadda", text: "The baby nurse was patient, professional and so gentle. Highly recommend for new parents.", stars: 5 },
  { name: "Dr. Anwar", role: "Cardiologist", text: "I refer ASHMA to my patients for post-discharge nursing. Reliable and clinically sound.", stars: 5 },
  { name: "Rumana A.", role: "Daughter, Shahjahanpur", text: "Physiotherapy at home helped my mother walk again. Truly life-changing service.", stars: 5 }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Family Stories" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold", children: "Loved and trusted by Dhaka families" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: REVIEWS.slice(0, 6).map((r, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("figure", { className: "h-full rounded-3xl bg-card border border-border p-6 shadow-card relative", children: [
      /* @__PURE__ */ jsx(Quote, { className: "absolute -top-3 -left-3 h-8 w-8 text-primary/20" }),
      /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(r.stars)].map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-amber-400 text-amber-400" }, k)) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-sm leading-relaxed text-foreground/90", children: [
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
    ] }) }, r.name)) })
  ] }) });
}
export {
  REVIEWS as R,
  Testimonials as T
};
