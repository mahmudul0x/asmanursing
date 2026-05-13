import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { useState, useEffect } from "react";
import { B as Button, w as whatsappLink, S as SITE } from "./router-B1DAbr0o.js";
import { I as Input } from "./input-Cgc6DEMC.js";
import { L as Label } from "./label-BGJ4oB1z.js";
import { T as Textarea } from "./textarea-C5-uM75G.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-AIHVL4yj.js";
import { toast } from "sonner";
import { S as SERVICES } from "./services-B0CwK93V.js";
import { Siren, Clock, CreditCard, MessageCircle, PhoneCall, CheckCircle2 } from "lucide-react";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "./service-pneumonia-BJkrsDA0.js";
import "motion/react";
const SLOTS_BY_SERVICE = {
  nursing: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "06:00 PM", "09:00 PM", "12:00 AM (Night)"],
  physiotherapy: ["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM", "06:00 PM"],
  "elderly-care": ["07:00 AM", "10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM", "10:00 PM"],
  "baby-care": ["08:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"],
  dementia: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"],
  pneumonia: ["08:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM", "11:00 PM"],
  caregiver: ["08:00 AM", "12:00 PM", "04:00 PM", "08:00 PM"]
};
const DEFAULT_SLOTS = ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"];
function BookingPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    duration: "Hourly",
    address: "",
    condition: "",
    message: "",
    emergency: false
  });
  const set = (k, v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  const selectedSlug = SERVICES.find((s) => s.title === form.service)?.slug;
  const slots = selectedSlug && SLOTS_BY_SERVICE[selectedSlug] || DEFAULT_SLOTS;
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("service");
    if (!slug) return;
    const match = SERVICES.find((s) => s.slug === slug);
    if (match) setForm((f) => ({
      ...f,
      service: match.title
    }));
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in your name, phone and service.");
      return;
    }
    if (!form.time) {
      toast.error("Please pick a preferred time slot.");
      return;
    }
    setSubmitted(true);
    toast.success("Request received — continue to secure payment.");
    try {
      sessionStorage.setItem("ashma_booking", JSON.stringify(form));
    } catch {
    }
    navigate({
      to: "/payment"
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Online Booking", title: "Request a verified caregiver in minutes.", sub: "Tell us about the patient — our care advisors will respond on WhatsApp right away." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 flex items-center justify-between gap-3 rounded-2xl border border-emergency/30 bg-emergency/5 p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Siren, { className: "h-5 w-5 text-emergency" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Need urgent care?" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Mark as emergency for fast dispatch." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center gap-2 text-xs font-semibold cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: form.emergency, onChange: (e) => set("emergency", e.target.checked), className: "h-4 w-4 accent-[oklch(0.62_0.23_25)]" }),
            "Emergency"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Full name *" }),
          /* @__PURE__ */ jsx(Input, { id: "name", value: form.name, onChange: (e) => set("name", e.target.value), placeholder: "Your name", className: "mt-1.5", maxLength: 80 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone *" }),
          /* @__PURE__ */ jsx(Input, { id: "phone", value: form.phone, onChange: (e) => set("phone", e.target.value), placeholder: "01XXXXXXXXX", className: "mt-1.5", maxLength: 20 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Service type *" }),
          /* @__PURE__ */ jsxs(Select, { value: form.service, onValueChange: (v) => {
            set("service", v);
            set("time", "");
          }, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Choose a service" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              SERVICES.map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s.title, children: s.title }, s.slug)),
              /* @__PURE__ */ jsx(SelectItem, { value: "General consultation", children: "General consultation" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Duration" }),
          /* @__PURE__ */ jsxs(Select, { value: form.duration, onValueChange: (v) => set("duration", v), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsx(SelectContent, { children: ["Hourly", "12-hour shift", "24-hour live-in", "Night care", "Monthly"].map((d) => /* @__PURE__ */ jsx(SelectItem, { value: d, children: d }, d)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "date", children: "Preferred start date" }),
          /* @__PURE__ */ jsx(Input, { id: "date", type: "date", value: form.date, onChange: (e) => set("date", e.target.value), className: "mt-1.5" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "condition", children: "Patient condition" }),
          /* @__PURE__ */ jsx(Input, { id: "condition", value: form.condition, onChange: (e) => set("condition", e.target.value), placeholder: "e.g., post-stroke, dementia", className: "mt-1.5", maxLength: 120 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxs(Label, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-primary" }),
            " Preferred time slot *"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: form.service ? `Slots tailored for ${form.service}` : "Choose a service first to see tailored slots" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: slots.map((t) => {
            const active = form.time === t;
            return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => set("time", t), className: `rounded-full border px-4 py-2 text-xs font-semibold transition-all ${active ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-background hover:border-primary/40 hover:bg-primary-soft/40"}`, children: t }, t);
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "address", children: "Address in Dhaka" }),
          /* @__PURE__ */ jsx(Input, { id: "address", value: form.address, onChange: (e) => set("address", e.target.value), placeholder: "Area, road, building", className: "mt-1.5", maxLength: 200 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Notes for the care team" }),
          /* @__PURE__ */ jsx(Textarea, { id: "message", value: form.message, onChange: (e) => set("message", e.target.value), placeholder: "Anything we should know about the patient or care needs", className: "mt-1.5", rows: 4, maxLength: 1e3 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 flex flex-wrap gap-3 pt-2", children: [
          /* @__PURE__ */ jsxs(Button, { type: "submit", className: "bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-12 rounded-full", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 mr-1" }),
            " Confirm & Pay"
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "rounded-full h-12", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: whatsappLink(`Hello, I'd like to book ${form.service || "a home care service"}.`), target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4 mr-1" }),
            " WhatsApp instead"
          ] }) }),
          /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", className: "rounded-full h-12", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: `tel:${SITE.phones[0]}`, children: [
            /* @__PURE__ */ jsx(PhoneCall, { className: "h-4 w-4 mr-1" }),
            " Call"
          ] }) })
        ] }),
        submitted && /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 mt-2 rounded-2xl border border-teal/30 bg-teal/5 p-4 flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-teal mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Request received" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "A care advisor will contact you on WhatsApp shortly." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("aside", { className: "rounded-3xl bg-navy text-navy-foreground p-6 md:p-7 shadow-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: "Talk to a care advisor" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/75", children: "We're available 24/7 across Dhaka — Khilgaon, Shahjahanpur, Nadda, Kalachandpur and Bashundhara." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-3", children: [
          SITE.phones.map((p) => /* @__PURE__ */ jsxs("a", { href: `tel:${p}`, className: "flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 p-3 text-sm font-medium border border-white/10", children: [
            /* @__PURE__ */ jsx(PhoneCall, { className: "h-4 w-4 text-teal" }),
            " ",
            p
          ] }, p)),
          /* @__PURE__ */ jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 rounded-xl bg-whatsapp/95 hover:bg-whatsapp p-3 text-sm font-semibold", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
            " WhatsApp Chat"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl bg-gradient-to-br from-primary to-teal p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Average response" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-3xl font-bold", children: "~ 8 minutes" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-white/85 mt-1", children: "From request to caregiver match." })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  BookingPage as component
};
