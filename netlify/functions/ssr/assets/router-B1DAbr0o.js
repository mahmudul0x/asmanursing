import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, useLocation, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { HeartPulse, Phone, X, Menu, ShieldCheck, Mail, MapPin, PhoneCall, MessageCircle } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-CdVEWHKl.css";
function Logo({ light = false }) {
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
    /* @__PURE__ */ jsxs("span", { className: "relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-teal text-white shadow-glow", children: [
      /* @__PURE__ */ jsx(HeartPulse, { className: "h-5 w-5", strokeWidth: 2.4 }),
      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-xl ring-1 ring-white/30" })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "leading-tight", children: [
      /* @__PURE__ */ jsx("span", { className: `block font-display text-[15px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`, children: "The ASHMA" }),
      /* @__PURE__ */ jsx("span", { className: `block text-[11px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`, children: "Home Care" })
    ] })
  ] });
}
const SITE = {
  phones: ["01836402287", "01756-427804"],
  email: "theashmah@gmail.com",
  whatsapp: "8801836402287",
  address: "50/1 Abdul Aziz Road, Norda, Bashundhara, Dhaka, Bangladesh",
  serviceAreas: ["Khilgaon", "Shahjahanpur", "Nadda", "Kalachandpur", "Bashundhara"]
};
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/booking", label: "Book" },
  { to: "/blog", label: "Health Tips" },
  { to: "/contact", label: "Contact" }
];
const whatsappLink = (msg = "Hello, I'd like to book a home care service.") => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 h-16 md:h-18 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              className: "px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md",
              activeProps: { className: "text-primary" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:${SITE.phones[0]}`,
                className: "hidden md:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-primary",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
                  " ",
                  SITE.phones[0]
                ]
              }
            ),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary/90 text-primary-foreground", children: /* @__PURE__ */ jsx("a", { href: whatsappLink(), target: "_blank", rel: "noreferrer", children: "Book Care" }) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-border bg-card",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 grid gap-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              className: "px-3 py-3 rounded-lg text-sm font-medium hover:bg-secondary",
              activeProps: { className: "bg-primary-soft text-primary" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxs("a", { href: `tel:${SITE.phones[0]}`, children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mr-1" }),
              "Call"
            ] }) }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx("a", { href: whatsappLink(), target: "_blank", rel: "noreferrer", children: "WhatsApp" }) })
          ] })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-navy text-navy-foreground mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsx(Logo, { light: true }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-white/70 leading-relaxed", children: "Compassionate, professional home nursing and caregiver services trusted by families across Dhaka." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-xs text-white/70", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-teal" }),
          " Verified caregivers · 24/7 support"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-white/90", children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm", children: NAV.slice(0, 6).map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "text-white/70 hover:text-teal transition-colors", children: n.label }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-white/90", children: "Support" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm", children: NAV.slice(6).map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "text-white/70 hover:text-teal transition-colors", children: n.label }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-white/90", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-white/80", children: [
          SITE.phones.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-teal" }),
            /* @__PURE__ */ jsx("a", { href: `tel:${p}`, children: p })
          ] }, p)),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-teal" }),
            /* @__PURE__ */ jsx("a", { href: `mailto:${SITE.email}`, children: SITE.email })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-teal mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: SITE.address })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " The ASHMA Home Care. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Serving ",
        SITE.serviceAreas.join(" · ")
      ] })
    ] }) })
  ] });
}
function FloatingActions() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-5 right-4 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `tel:${SITE.phones[0]}`,
        "aria-label": "Emergency call",
        className: "grid h-14 w-14 place-items-center rounded-full bg-emergency text-white shadow-lg animate-pulse-soft",
        children: /* @__PURE__ */ jsx(PhoneCall, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: whatsappLink(),
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "WhatsApp",
        className: "grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg hover:scale-105 transition-transform",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
      }
    )
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold gradient-text", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try refreshing." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent", children: "Go home" })
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Professional Home Nursing & Caregiver Service in Dhaka | The ASHMA Home Care" },
      { name: "description", content: "Trusted home nursing, physiotherapy, elderly, baby and dementia care across Dhaka. Compassionate caregivers available 24/7." },
      { name: "author", content: "The ASHMA Home Care" },
      { name: "theme-color", content: "#0EA5E9" },
      { property: "og:title", content: "The ASHMA Home Care — Home Nursing & Caregivers in Dhaka" },
      { property: "og:description", content: "Compassionate, professional home healthcare across Dhaka." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The ASHMA Home Care" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon-192.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "The ASHMA Home Care",
          telephone: "+8801836402287",
          email: "theashmah@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "50/1 Abdul Aziz Road, Norda, Bashundhara",
            addressLocality: "Dhaka",
            addressCountry: "BD"
          },
          areaServed: "Dhaka, Bangladesh",
          medicalSpecialty: ["Nursing", "Physiotherapy", "GeriatricCare"]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-16 md:pt-18", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {}),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$a = () => import("./testimonials-BsT39Od3.js");
const Route$b = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Family Reviews & Testimonials — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Real stories from Dhaka families who trust ASHMA for home nursing and caregiver services."
    }, {
      property: "og:title",
      content: "Testimonials — ASHMA Home Care"
    }, {
      property: "og:description",
      content: "Family reviews of our home healthcare service."
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const BASE_URL = "";
const PATHS = ["/", "/about", "/services", "/packages", "/booking", "/testimonials", "/blog", "/faq", "/careers", "/contact"];
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./services-Cg01RwwD.js");
const Route$9 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Home Healthcare Services in Dhaka — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Search and filter nursing, physiotherapy, elderly, baby, dementia and pneumonia patient care delivered at home in Dhaka."
    }, {
      property: "og:title",
      content: "Home Healthcare Services — ASHMA"
    }, {
      property: "og:description",
      content: "Comprehensive home nursing and caregiver services in Dhaka."
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./payment-BxZs-zFV.js");
const Route$8 = createFileRoute("/payment")({
  head: () => ({
    meta: [{
      title: "Secure Payment — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Confirm your home care booking with secure online payment."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./packages-CsshekE7.js");
const Route$7 = createFileRoute("/packages")({
  head: () => ({
    meta: [{
      title: "Patient Care Packages — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Hourly, daily, monthly, night and emergency caregiver packages tailored to your family's needs in Dhaka."
    }, {
      property: "og:title",
      content: "Patient Care Packages — ASHMA"
    }, {
      property: "og:description",
      content: "Flexible home care packages across Dhaka."
    }],
    links: [{
      rel: "canonical",
      href: "/packages"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const FAQS = [{
  q: "How quickly can a caregiver be at our home?",
  a: "For standard requests, within 4–24 hours. Emergency caregivers can be dispatched in 60–90 minutes across Dhaka."
}, {
  q: "Are your caregivers and nurses verified?",
  a: "Yes. Every caregiver is background-checked, trained and supervised by our clinical team."
}, {
  q: "Which areas do you cover?",
  a: "We currently serve Khilgaon, Shahjahanpur, Nadda, Kalachandpur, Bashundhara and surrounding Dhaka neighborhoods."
}, {
  q: "How is pricing decided?",
  a: "Pricing depends on the type of care, duration and patient condition. We always share a transparent quote before you confirm."
}, {
  q: "Can we change the caregiver if needed?",
  a: "Absolutely. Family comfort matters. We will reassign a new caregiver promptly if needed."
}, {
  q: "Do you provide emergency or night care?",
  a: "Yes — both night-only shifts and 24/7 live-in care are available, including emergency dispatch."
}, {
  q: "How do we pay?",
  a: "Cash, bKash, Nagad and bank transfer are all accepted. Monthly billing is also available for ongoing care."
}, {
  q: "Do you coordinate with our doctor?",
  a: "Yes, our nurses follow your physician's care plan and provide regular updates as required."
}];
const $$splitComponentImporter$6 = () => import("./faq-DnPavl3v.js");
const Route$6 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Answers about booking, caregivers, pricing, emergency support and service availability."
    }, {
      property: "og:title",
      content: "FAQ — ASHMA Home Care"
    }, {
      property: "og:description",
      content: "Frequently asked questions about home nursing in Dhaka."
    }],
    links: [{
      rel: "canonical",
      href: "/faq"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-Ci2zLwoU.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — The ASHMA Home Care, Dhaka"
    }, {
      name: "description",
      content: "Reach The ASHMA Home Care for home nursing and caregiver services in Dhaka. Call, WhatsApp, email or visit our office."
    }, {
      property: "og:title",
      content: "Contact — ASHMA Home Care"
    }, {
      property: "og:description",
      content: "Get in touch with our care team in Dhaka."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./careers-CywpSp3R.js");
const Route$4 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Join The ASHMA Home Care Team"
    }, {
      name: "description",
      content: "Apply as a home nurse, caregiver or physiotherapist with The ASHMA Home Care in Dhaka."
    }, {
      property: "og:title",
      content: "Careers — ASHMA Home Care"
    }, {
      property: "og:description",
      content: "Build a meaningful career in home healthcare in Dhaka."
    }],
    links: [{
      rel: "canonical",
      href: "/careers"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./booking-CBHZf69N.js");
const Route$3 = createFileRoute("/booking")({
  head: () => ({
    meta: [{
      title: "Book a Caregiver Online — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Request a verified home nurse or caregiver in Dhaka. WhatsApp confirmation within minutes."
    }, {
      property: "og:title",
      content: "Book a Home Caregiver — ASHMA"
    }, {
      property: "og:description",
      content: "Online booking for home nursing and caregiver services in Dhaka."
    }],
    links: [{
      rel: "canonical",
      href: "/booking"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-CRRK-yt-.js");
const Route$2 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Health Tips & Home Care Blog — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Expert advice on elderly care, dementia, baby care, physiotherapy and home nursing best practices."
    }, {
      property: "og:title",
      content: "Health Tips — ASHMA Home Care"
    }, {
      property: "og:description",
      content: "Trusted home care education from the ASHMA team."
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BKB4KKzW.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — The ASHMA Home Care"
    }, {
      name: "description",
      content: "Our mission is compassionate, clinically excellent home healthcare for every family in Dhaka."
    }, {
      property: "og:title",
      content: "About The ASHMA Home Care"
    }, {
      property: "og:description",
      content: "Our mission, values and care philosophy."
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const slide1 = "/assets/hero-nurse-elderly-lwuA7ZWd.jpg";
const slide2 = "/assets/hero-elderly-care-Bvb0dZnO.jpg";
const slide3 = "/assets/hero-family-D0FZLfGe.jpg";
const $$splitComponentImporter = () => import("./index-Bn9kU2lV.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Professional Home Nursing & Caregiver Service in Dhaka | The ASHMA Home Care"
    }, {
      name: "description",
      content: "Compassionate home nursing, physiotherapy, elderly, baby and dementia care across Dhaka. Verified caregivers, 24/7 support."
    }, {
      property: "og:title",
      content: "The ASHMA Home Care — Trusted Home Nursing in Dhaka"
    }, {
      property: "og:description",
      content: "Verified caregivers, 24/7 home healthcare across Dhaka."
    }],
    links: [
      {
        rel: "canonical",
        href: "/"
      },
      // Preload the LCP hero image + warm cache for the rest
      {
        rel: "preload",
        as: "image",
        href: slide1,
        fetchpriority: "high"
      },
      {
        rel: "prefetch",
        as: "image",
        href: slide2
      },
      {
        rel: "prefetch",
        as: "image",
        href: slide3
      }
    ]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$b.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const ServicesRoute = Route$9.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$c
});
const PaymentRoute = Route$8.update({
  id: "/payment",
  path: "/payment",
  getParentRoute: () => Route$c
});
const PackagesRoute = Route$7.update({
  id: "/packages",
  path: "/packages",
  getParentRoute: () => Route$c
});
const FaqRoute = Route$6.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const CareersRoute = Route$4.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$c
});
const BookingRoute = Route$3.update({
  id: "/booking",
  path: "/booking",
  getParentRoute: () => Route$c
});
const BlogRoute = Route$2.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  BookingRoute,
  CareersRoute,
  ContactRoute,
  FaqRoute,
  PackagesRoute,
  PaymentRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  TestimonialsRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  FAQS as F,
  SITE as S,
  slide2 as a,
  slide3 as b,
  cn as c,
  router as r,
  slide1 as s,
  whatsappLink as w
};
