import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { ArrowRight } from "lucide-react";
import { e as elderly, p as physio, b as baby, d as dementia, n as nursing, a as pneumonia } from "./service-pneumonia-BJkrsDA0.js";
import "motion/react";
const POSTS = [{
  title: "Caring for elderly parents at home: 7 essentials",
  tag: "Elderly Care",
  img: elderly,
  read: "5 min"
}, {
  title: "Home physiotherapy after a stroke: a starter guide",
  tag: "Physiotherapy",
  img: physio,
  read: "6 min"
}, {
  title: "Newborn care basics for first-time parents",
  tag: "Baby Care",
  img: baby,
  read: "4 min"
}, {
  title: "Understanding dementia: small changes, big comfort",
  tag: "Dementia",
  img: dementia,
  read: "7 min"
}, {
  title: "Post-surgery home nursing: what to expect",
  tag: "Nursing",
  img: nursing,
  read: "5 min"
}, {
  title: "Recognizing pneumonia warning signs at home",
  tag: "Patient Safety",
  img: pneumonia,
  read: "4 min"
}];
function BlogPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Health Tips", title: "Practical guidance for families caring at home." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: POSTS.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("article", { className: "group h-full overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-all hover:-translate-y-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary", children: p.tag })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold leading-snug", children: p.title }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            p.read,
            " read"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-primary font-semibold", children: [
            "Read ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] })
    ] }) }, p.title)) }) })
  ] });
}
export {
  BlogPage as component
};
