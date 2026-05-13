import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c as cn, F as FAQS } from "./router-B1DAbr0o.js";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { C as CTA } from "./CTA-CveTs08s.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function FAQPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "FAQ", title: "Answers for the questions families ask most." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: FAQS.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `i${i}`, className: "rounded-2xl border border-border bg-card px-5 shadow-card data-[state=open]:shadow-glow", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold", children: f.q }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
    ] }, f.q)) }) }) }),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
export {
  FAQPage as component
};
