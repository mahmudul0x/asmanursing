import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { S as SITE, w as whatsappLink, B as Button } from "./router-B1DAbr0o.js";
import { I as Input } from "./input-Cgc6DEMC.js";
import { L as Label } from "./label-BGJ4oB1z.js";
import { T as Textarea } from "./textarea-C5-uM75G.js";
import { useState } from "react";
import { toast } from "sonner";
import { PhoneCall, MessageCircle, Mail, MapPin, Siren } from "lucide-react";
import { R as Reveal } from "./Reveal-DXQFk0YT.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "motion/react";
function ContactPage() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const set = (k, v) => setF((x) => ({
    ...x,
    [k]: v
  }));
  const submit = (e) => {
    e.preventDefault();
    if (!f.name || !f.phone) return toast.error("Please add your name and phone.");
    const msg = `Contact request%0AName: ${f.name}%0APhone: ${f.phone}%0AEmail: ${f.email}%0AMessage: ${f.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank");
    toast.success("Message sent — opening WhatsApp.");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Contact", title: "We're here, 24/7. Reach out anytime.", sub: "Talk to a care advisor by phone, WhatsApp or email — or visit our Bashundhara office." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
        SITE.phones.map((p) => /* @__PURE__ */ jsxs("a", { href: `tel:${p}`, className: "flex items-center gap-3 rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-glow transition-shadow", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(PhoneCall, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Call us" }),
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: p })
          ] })
        ] }, p)),
        /* @__PURE__ */ jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noreferrer", className: "flex items-center gap-3 rounded-2xl bg-whatsapp text-white p-5 shadow-card hover:opacity-95", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/20", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-white/80", children: "WhatsApp" }),
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Chat with care team" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: `mailto:${SITE.email}`, className: "flex items-center gap-3 rounded-2xl bg-card border border-border p-5 shadow-card", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-teal/15 text-teal", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: SITE.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card border border-border p-5 shadow-card", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Main office" }),
              /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Bashundhara, Dhaka" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: SITE.address }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
            "Service areas: ",
            SITE.serviceAreas.join(", ")
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-emergency/30 bg-emergency/5 p-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Siren, { className: "h-5 w-5 text-emergency" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "24/7 emergency line" }),
            /* @__PURE__ */ jsx("a", { href: `tel:${SITE.phones[0]}`, className: "text-emergency font-bold", children: SITE.phones[0] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.05, className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "sm:col-span-2 font-display text-xl font-semibold", children: "Send us a message" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "n", children: "Name *" }),
            /* @__PURE__ */ jsx(Input, { id: "n", value: f.name, onChange: (e) => set("name", e.target.value), className: "mt-1.5", maxLength: 80 })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "p", children: "Phone *" }),
            /* @__PURE__ */ jsx(Input, { id: "p", value: f.phone, onChange: (e) => set("phone", e.target.value), className: "mt-1.5", maxLength: 20 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "e", children: "Email" }),
            /* @__PURE__ */ jsx(Input, { id: "e", type: "email", value: f.email, onChange: (e) => set("email", e.target.value), className: "mt-1.5", maxLength: 120 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "m", children: "Message" }),
            /* @__PURE__ */ jsx(Textarea, { id: "m", value: f.message, onChange: (e) => set("message", e.target.value), rows: 5, className: "mt-1.5", maxLength: 1e3 })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "sm:col-span-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full", children: "Send Message" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-3xl overflow-hidden border border-border shadow-card", children: /* @__PURE__ */ jsx("iframe", { title: "ASHMA Home Care location", src: "https://www.google.com/maps?q=Bashundhara%20R%2FA%20Dhaka&output=embed", className: "w-full h-[360px]", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
