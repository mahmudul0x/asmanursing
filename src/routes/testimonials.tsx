import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { REVIEWS } from "@/components/sections/Testimonials";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Family Reviews & Testimonials — The ASHMA Home Care" },
      { name: "description", content: "Real stories from Dhaka families who trust ASHMA for home nursing and caregiver services." },
      { property: "og:title", content: "Testimonials — ASHMA Home Care" },
      { property: "og:description", content: "Family reviews of our home healthcare service." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Family Stories" title="Trusted by families across Dhaka." sub="Real reviews from real homes — the moments that matter most to us." />
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.04}>
              <figure className="h-full rounded-3xl bg-card border border-border p-6 shadow-card relative">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-primary/20" />
                <div className="flex">{[...Array(r.stars)].map((_, k) => <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                <blockquote className="mt-4 text-sm leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-teal text-white font-semibold">{r.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  ),
});
