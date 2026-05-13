import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Baby, Brain, HeartPulse, PersonStanding, Stethoscope, Wind } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";

const ICONS = {
  nursing: Stethoscope,
  physio: PersonStanding,
  elderly: HeartPulse,
  baby: Baby,
  dementia: Brain,
  pneumonia: Wind,
} as const;

export function ServicesGrid() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 gradient-soft pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Complete <span className="gradient-text">home healthcare</span>, delivered with compassion.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Specialized nursing, physiotherapy and caregiver services built around your family's needs — across Dhaka.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  to="/booking"
                  search={{ service: s.slug } as never}
                  className="group block overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                    <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting from</div>
                        <div className="font-display text-xl font-bold text-primary">
                          ৳ {s.price.from.toLocaleString()}
                          <span className="ml-1 text-xs font-medium text-muted-foreground">{s.price.unit}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary group-hover:underline">Book →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
