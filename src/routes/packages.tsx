import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Check, Sparkles } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Patient Care Packages — The ASHMA Home Care" },
      { name: "description", content: "Hourly, daily, monthly, night and emergency caregiver packages tailored to your family's needs in Dhaka." },
      { property: "og:title", content: "Patient Care Packages — ASHMA" },
      { property: "og:description", content: "Flexible home care packages across Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

const PACKS = [
  {
    name: "Hourly Care", price: "৳ 350", per: "/hour",
    desc: "On-demand caregiver support whenever you need an extra hand.",
    features: ["Min. 4 hours", "Verified caregiver", "Daily living help", "Real-time updates"],
  },
  {
    name: "12-Hour Daily", price: "৳ 2,500", per: "/day",
    desc: "Day or night shift care for ongoing recovery and support.",
    features: ["Day or night shift", "Vitals monitoring", "Medication reminders", "Companionship"],
    featured: true,
  },
  {
    name: "24-Hour Live-In", price: "৳ 4,500", per: "/day",
    desc: "Continuous live-in care for high-need patients and elders.",
    features: ["Round-the-clock care", "Trained nurse option", "Mobility & hygiene help", "Family briefings"],
  },
  {
    name: "Monthly Care", price: "৳ 35,000", per: "/month",
    desc: "Best value continuous care with a dedicated caregiver.",
    features: ["Dedicated caregiver", "Monthly review", "Backup coverage", "Care coordinator"],
  },
  {
    name: "Night Care", price: "৳ 1,800", per: "/night",
    desc: "Overnight peace of mind for families and patients.",
    features: ["8–10 hour shift", "Sleep monitoring", "Medication at night", "Emergency response"],
  },
  {
    name: "Emergency Caregiver", price: "From ৳ 500", per: "/hour",
    desc: "Fast dispatch caregiver within 60–90 minutes in Dhaka.",
    features: ["Rapid dispatch", "Crisis-trained", "Hospital coordination", "Family hotline"],
  },
];

function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Care Packages"
        title="Flexible care plans, transparent pricing."
        sub="Pick the package that fits your family — and switch anytime as needs change."
      />
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className={`relative h-full rounded-3xl border p-7 shadow-card transition-all ${p.featured ? "bg-gradient-to-br from-primary to-teal text-primary-foreground border-transparent shadow-glow" : "bg-card border-border"}`}>
                {p.featured && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" /> Most chosen
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-white/85" : "text-muted-foreground"}`}>{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{p.price}</span>
                  <span className={`text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>{p.per}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 ${p.featured ? "text-white" : "text-teal"}`} /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${p.featured ? "bg-white text-primary hover:bg-white/95" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                  Book &amp; Pay
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">Indicative pricing. Final quote depends on patient condition, location and care duration.</p>
      </section>
      <CTA />
    </>
  );
}
