import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
  Quote,
  Building2,
  GraduationCap,
  Microscope,
} from "lucide-react";
import about from "@/assets/about-team.jpg";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The ASHMA Home Care" },
      { name: "description", content: "Our mission is compassionate, clinically excellent home healthcare for every family in Dhaka." },
      { property: "og:title", content: "About The ASHMA Home Care" },
      { property: "og:description", content: "Our mission, values and care philosophy." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { i: HeartHandshake, t: "Compassion First", d: "Every patient is treated with empathy, dignity and unhurried patience." },
  { i: ShieldCheck, t: "Safety & Trust", d: "Background-checked caregivers, supervised care plans, full transparency." },
  { i: Stethoscope, t: "Clinical Excellence", d: "Care delivered to hospital-grade standards, right inside your home." },
  { i: Sparkles, t: "Family-Centered", d: "We work with families, not around them — keeping you informed always." },
];

const TIMELINE = [
  { y: "2017", t: "Founded in Dhaka", d: "ASHMA begins with a small team of nurses serving Bashundhara families." },
  { y: "2019", t: "24/7 care coordination", d: "Round-the-clock dispatch desk launched to handle emergencies." },
  { y: "2021", t: "Specialized programs", d: "Dementia, pneumonia and post-surgery recovery programs introduced." },
  { y: "2024", t: "1,200+ families served", d: "Network expands across Khilgaon, Shahjahanpur, Nadda and Kalachandpur." },
];

const CERTS = [
  { i: GraduationCap, t: "Certified Nurses", d: "Registered with national nursing council" },
  { i: Microscope, t: "Clinical Protocols", d: "Hospital-grade SOPs for every visit" },
  { i: Building2, t: "Licensed Provider", d: "Operating in compliance with Dhaka regulations" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ASHMA"
        title="Compassionate home healthcare you can truly trust."
        sub="We exist to make professional medical and caregiving support accessible, dignified and human — right inside your home."
      />

      {/* Story */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <img src={about} alt="The ASHMA team" className="rounded-3xl shadow-card object-cover w-full h-[480px]" loading="lazy" decoding="async" />
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card border border-border p-5 shadow-glow max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">100% Verified</div>
                    <div className="text-xs text-muted-foreground">Every caregiver background-checked</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our story</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Care built by families, for families.</h2>
            <p className="mt-4 text-muted-foreground">
              The ASHMA Home Care was founded in Dhaka with one belief: the people you love deserve
              the same standard of care at home as they would receive in the best hospitals — but with
              the warmth and dignity only home can provide.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today our verified nurses, physiotherapists and caregivers serve families across Khilgaon,
              Shahjahanpur, Nadda, Kalachandpur and Bashundhara — supported by a 24/7 care coordination team.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { i: Users, t: "1,200+", d: "Families" },
                { i: Award, t: "8+ yrs", d: "Experience" },
                { i: Stethoscope, t: "60+", d: "Caregivers" },
                { i: ShieldCheck, t: "100%", d: "Verified" },
              ].map((s) => (
                <div key={s.d} className="rounded-2xl border border-border bg-card p-4 text-center">
                  <s.i className="h-5 w-5 text-primary mx-auto" />
                  <div className="mt-2 font-display font-bold text-navy">{s.t}</div>
                  <div className="text-xs text-muted-foreground">{s.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-soft/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          {[
            { i: Target, label: "Our Mission", t: "Bring hospital-grade care into every Bangladeshi home.", d: "We make professional nursing, therapy and caregiving accessible to every family — with transparency, dignity and clinical rigor." },
            { i: Eye, label: "Our Vision", t: "Redefine what home healthcare means in South Asia.", d: "A future where families never have to choose between quality medical care and the comfort of being together at home." },
          ].map((b) => (
            <Reveal key={b.label}>
              <div className="h-full rounded-3xl bg-card border border-border p-8 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <b.i className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{b.label}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">{b.t}</h3>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our values</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">What guides every visit.</h2>
            <p className="mt-3 text-muted-foreground">Our caregivers don't just follow a checklist — they live by these principles on every call.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                    <v.i className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our journey</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Eight years of caring for Dhaka.</h2>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/15 md:-translate-x-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((m, i) => (
                <Reveal key={m.y}>
                  <div className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className="md:text-right pl-12 md:pl-0 md:pr-10">
                      <div className="font-display text-3xl md:text-4xl font-bold text-teal">{m.y}</div>
                      <div className="mt-2 text-lg font-semibold">{m.t}</div>
                      <p className="mt-1 text-sm text-white/70 max-w-md md:ml-auto">{m.d}</p>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-teal ring-4 ring-navy" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Trust & compliance</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Backed by clinical standards.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CERTS.map((c) => (
              <Reveal key={c.t}>
                <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                    <c.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{c.t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{c.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-primary-soft/40 to-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Quote className="h-10 w-10 text-primary/40 mx-auto" />
          <p className="mt-6 font-display text-2xl md:text-3xl font-medium text-navy leading-relaxed">
            "We treat every patient the way we'd want our own parents to be cared for —
            with skill, presence, and unwavering kindness."
          </p>
          <div className="mt-6 text-sm font-semibold text-primary">— The ASHMA Care Team</div>

          <div className="mt-10 inline-flex flex-wrap justify-center gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-glow transition-all">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/booking" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary/40">
              Book a caregiver
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Verified caregivers", "24/7 dispatch", "Transparent pricing", "Family-centered"].map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}