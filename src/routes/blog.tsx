import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import elderly from "@/assets/service-elderly.jpg";
import physio from "@/assets/service-physio.jpg";
import baby from "@/assets/service-baby.jpg";
import dementia from "@/assets/service-dementia.jpg";
import nursing from "@/assets/service-nursing.jpg";
import pneumonia from "@/assets/service-pneumonia.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Tips & Home Care Blog — The ASHMA Home Care" },
      { name: "description", content: "Expert advice on elderly care, dementia, baby care, physiotherapy and home nursing best practices." },
      { property: "og:title", content: "Health Tips — ASHMA Home Care" },
      { property: "og:description", content: "Trusted home care education from the ASHMA team." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  { title: "Caring for elderly parents at home: 7 essentials", tag: "Elderly Care", img: elderly, read: "5 min" },
  { title: "Home physiotherapy after a stroke: a starter guide", tag: "Physiotherapy", img: physio, read: "6 min" },
  { title: "Newborn care basics for first-time parents", tag: "Baby Care", img: baby, read: "4 min" },
  { title: "Understanding dementia: small changes, big comfort", tag: "Dementia", img: dementia, read: "7 min" },
  { title: "Post-surgery home nursing: what to expect", tag: "Nursing", img: nursing, read: "5 min" },
  { title: "Recognizing pneumonia warning signs at home", tag: "Patient Safety", img: pneumonia, read: "4 min" },
];

function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Health Tips" title="Practical guidance for families caring at home." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group h-full overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.read} read</span>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
