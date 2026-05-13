import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const REVIEWS = [
  { name: "Tahmina R.", role: "Daughter, Bashundhara", text: "ASHMA's nurses cared for my father after surgery with such warmth. They felt like family.", stars: 5 },
  { name: "Imran H.", role: "Son, Khilgaon", text: "The dementia caregiver understood my mother's routine within days. We finally rest easy at night.", stars: 5 },
  { name: "Sadia K.", role: "New mother, Nadda", text: "The baby nurse was patient, professional and so gentle. Highly recommend for new parents.", stars: 5 },
  { name: "Dr. Anwar", role: "Cardiologist", text: "I refer ASHMA to my patients for post-discharge nursing. Reliable and clinically sound.", stars: 5 },
  { name: "Rumana A.", role: "Daughter, Shahjahanpur", text: "Physiotherapy at home helped my mother walk again. Truly life-changing service.", stars: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Family Stories</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Loved and trusted by Dhaka families</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, 6).map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <figure className="h-full rounded-3xl bg-card border border-border p-6 shadow-card relative">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-primary/20" />
                <div className="flex">{[...Array(r.stars)].map((_, k) => <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
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
      </div>
    </section>
  );
}
