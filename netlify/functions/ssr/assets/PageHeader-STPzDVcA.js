import { jsxs, jsx } from "react/jsx-runtime";
function PageHeader({ eyebrow, title, sub, image }) {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    image && /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-primary/60" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28 text-white", children: [
      eyebrow && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/85", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl leading-tight", children: title }),
      sub && /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/80 max-w-2xl", children: sub })
    ] })
  ] });
}
export {
  PageHeader as P
};
