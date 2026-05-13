import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { B as Button, w as whatsappLink } from "./router-B1DAbr0o.js";
import { I as Input } from "./input-Cgc6DEMC.js";
import { L as Label } from "./label-BGJ4oB1z.js";
import { T as Textarea } from "./textarea-C5-uM75G.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-AIHVL4yj.js";
import { useState } from "react";
import { toast } from "sonner";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import { HeartHandshake, Briefcase, GraduationCap } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "motion/react";
function CareersPage() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    role: "",
    experience: "",
    message: ""
  });
  const set = (k, v) => setF((x) => ({
    ...x,
    [k]: v
  }));
  const submit = (e) => {
    e.preventDefault();
    if (!f.name || !f.phone || !f.role) return toast.error("Please fill name, phone and role.");
    const msg = `Career application%0AName: ${f.name}%0APhone: ${f.phone}%0ARole: ${f.role}%0AExperience: ${f.experience}%0ANotes: ${f.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank");
    toast.success("Application sent — opening WhatsApp.");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Careers", title: "Join a team that cares — for families and for you.", sub: "Build a meaningful career as a nurse, caregiver or physiotherapist with ASHMA." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
        [{
          i: HeartHandshake,
          t: "Caregivers",
          d: "Daily-living, elderly and patient care."
        }, {
          i: Briefcase,
          t: "Home Nurses",
          d: "Registered nurses for clinical home care."
        }, {
          i: GraduationCap,
          t: "Physiotherapists",
          d: "Mobility, stroke and pain management therapy."
        }].map((r) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 flex items-start gap-4 shadow-card", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(r.i, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: r.t }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: r.d })
          ] })
        ] }, r.t)),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-navy text-navy-foreground p-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "What we offer" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 text-sm text-white/80 space-y-2 list-disc pl-5", children: [
            /* @__PURE__ */ jsx("li", { children: "Competitive pay & on-time monthly salary" }),
            /* @__PURE__ */ jsx("li", { children: "Continuous clinical training & supervision" }),
            /* @__PURE__ */ jsx("li", { children: "Supportive, respectful work culture" }),
            /* @__PURE__ */ jsx("li", { children: "Flexible shifts across Dhaka" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card grid gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: "Apply now" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "cname", children: "Full name *" }),
          /* @__PURE__ */ jsx(Input, { id: "cname", value: f.name, onChange: (e) => set("name", e.target.value), className: "mt-1.5", maxLength: 80 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "cphone", children: "Phone *" }),
          /* @__PURE__ */ jsx(Input, { id: "cphone", value: f.phone, onChange: (e) => set("phone", e.target.value), className: "mt-1.5", maxLength: 20 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { children: "Role *" }),
          /* @__PURE__ */ jsxs(Select, { value: f.role, onValueChange: (v) => set("role", v), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select role" }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: ["Caregiver", "Home Nurse", "Physiotherapist", "Care Coordinator"].map((r) => /* @__PURE__ */ jsx(SelectItem, { value: r, children: r }, r)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "exp", children: "Experience" }),
          /* @__PURE__ */ jsx(Input, { id: "exp", value: f.experience, onChange: (e) => set("experience", e.target.value), placeholder: "Years and key skills", className: "mt-1.5", maxLength: 120 })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "cm", children: "Message" }),
          /* @__PURE__ */ jsx(Textarea, { id: "cm", value: f.message, onChange: (e) => set("message", e.target.value), className: "mt-1.5", rows: 4, maxLength: 1e3 })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full", children: "Send Application" })
      ] }) })
    ] }) })
  ] });
}
export {
  CareersPage as component
};
