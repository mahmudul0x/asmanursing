import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import about from "@/assets/about-team.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import slide1 from "@/assets/hero-nurse-elderly.jpg";
import slide2 from "@/assets/hero-elderly-care.jpg";
import slide3 from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Professional Home Nursing & Caregiver Service in Dhaka | The ASHMA Home Care" },
      { name: "description", content: "Compassionate home nursing, physiotherapy, elderly, baby and dementia care across Dhaka. Verified caregivers, 24/7 support." },
      { property: "og:title", content: "The ASHMA Home Care — Trusted Home Nursing in Dhaka" },
      { property: "og:description", content: "Verified caregivers, 24/7 home healthcare across Dhaka." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      // Preload the LCP hero image + warm cache for the rest
      { rel: "preload", as: "image", href: slide1, fetchpriority: "high" },
      { rel: "prefetch", as: "image", href: slide2 },
      { rel: "prefetch", as: "image", href: slide3 },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />

      {/* About teaser */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <img src={about} alt="ASHMA caregiver team" className="rounded-3xl shadow-card object-cover h-[460px] w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 hidden md:block glass-card rounded-2xl p-5 max-w-xs shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground"><HeartHandshake className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-semibold">Family-first care</div>
                    <div className="text-xs text-muted-foreground">Built around your loved ones.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About ASHMA</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              A new standard of <span className="gradient-text">home healthcare</span> in Dhaka.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We blend clinical excellence with deep compassion. Every caregiver is verified, trained
              and supported — so families across Dhaka can trust ASHMA with the people they love.
            </p>
            <ul className="mt-6 grid gap-3">
              {[
                { i: ShieldCheck, t: "Verified, background-checked caregivers" },
                { i: BadgeCheck, t: "Clinically supervised care plans" },
                { i: HeartHandshake, t: "Compassionate, family-centered approach" },
              ].map((it) => (
                <li key={it.t} className="flex items-center gap-3 text-sm">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary"><it.i className="h-4 w-4" /></span>
                  <span className="font-medium">{it.t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Learn our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
