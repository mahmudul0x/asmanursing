import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { w as whatsappLink } from "./router-B1DAbr0o.js";
function CTA() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-teal p-10 md:p-16 text-primary-foreground shadow-glow", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/15 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-teal/30 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold leading-tight", children: "Need a caregiver today? We're here, 24/7." }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-white/85", children: "Talk to a care advisor and get a verified caregiver dispatched to your home in Dhaka." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/booking", className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-white/95", children: [
          "Book Care Service ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-navy/30 hover:bg-navy/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white border border-white/20", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp Us"
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  CTA as C
};
