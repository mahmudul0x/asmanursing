import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "@/components/sections/PageHeader";
import { SERVICES, type Service } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";
import {
  Check,
  ArrowRight,
  Search,
  SlidersHorizontal,
  X,
  Stethoscope,
  PersonStanding,
  HeartPulse,
  Baby,
  Brain,
  Wind,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Healthcare Services in Dhaka — The ASHMA Home Care" },
      { name: "description", content: "Search and filter nursing, physiotherapy, elderly, baby, dementia and pneumonia patient care delivered at home in Dhaka." },
      { property: "og:title", content: "Home Healthcare Services — ASHMA" },
      { property: "og:description", content: "Comprehensive home nursing and caregiver services in Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const ICONS = {
  nursing: Stethoscope,
  physio: PersonStanding,
  elderly: HeartPulse,
  baby: Baby,
  dementia: Brain,
  pneumonia: Wind,
} as const;

const CATEGORIES = ["All", "Nursing", "Therapy", "Elderly", "Baby & Mother", "Specialized"] as const;
type Category = (typeof CATEGORIES)[number];

function ServicesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter((s) => {
      if (cat !== "All" && s.category !== cat) return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.short.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q)) ||
        s.benefits.some((b) => b.toLowerCase().includes(q))
      );
    });
  }, [query, cat]);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Specialized home healthcare for every stage of life."
        sub="From newborn care to dementia support — clinically supervised, delivered with compassion."
      />

      {/* Search + Filter toolbar */}
      <section className="sticky top-16 md:top-18 z-20 border-y border-border bg-background/85 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 grid gap-3 lg:grid-cols-[1fr_auto] items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, conditions, or care type — e.g. nursing, stroke, baby"
              className="pl-11 pr-10 h-12 rounded-full border-border bg-card"
              maxLength={80}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full bg-secondary hover:bg-secondary/70"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground pr-1">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
            </span>
            {CATEGORIES.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-soft"
                      : "bg-card text-foreground/70 border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results grid */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-soft/20 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-navy">{filtered.length}</span> of {SERVICES.length} services
              {cat !== "All" && <> in <span className="font-semibold text-primary">{cat}</span></>}
              {query && <> for "<span className="font-semibold text-primary">{query}</span>"</>}
            </p>
            {(query || cat !== "All") && (
              <button
                onClick={() => { setQuery(""); setCat("All"); }}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary text-muted-foreground">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-navy">No services match your search</h3>
              <p className="mt-1 text-sm text-muted-foreground">Try a different keyword or reset the filters.</p>
            </div>
          ) : (
            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((s, i) => (
                  <ServiceCard key={s.slug} s={s} i={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust ribbon */}
      <section className="py-10 border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Verified Caregivers", d: "Background-checked & trained" },
            { icon: Clock, t: "24/7 Availability", d: "Care when your family needs it" },
            { icon: Award, t: "Clinically Supervised", d: "Backed by registered nurses" },
          ].map((b) => (
            <div key={b.t} className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-navy">{b.t}</div>
                <div className="text-sm text-muted-foreground">{b.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed alternating sections */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-24">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <article id={s.slug} key={s.slug} className="scroll-mt-32 grid lg:grid-cols-2 gap-10 items-center">
                <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-3xl shadow-card">
                    <img src={s.image} alt={s.title} className="w-full h-[420px] object-cover" loading="lazy" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
                      <Icon className="h-4 w-4" /> {s.category}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Service · {String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground">{s.description}</p>
                  <div className="mt-5 inline-flex items-baseline gap-2 rounded-2xl bg-primary-soft/50 border border-border px-4 py-2.5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Starting from</span>
                    <span className="font-display text-2xl font-bold text-primary">৳ {s.price.from.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">{s.price.unit}</span>
                  </div>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-teal mt-0.5" /><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/booking"
                      search={{ service: s.slug } as never}
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-glow transition-all"
                    >
                      Book {s.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary/40">
                      See packages
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}

function ServiceCard({ s, i }: { s: Service; i: number }) {
  const Icon = ICONS[s.icon];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
    >
      <Link
        to="/booking"
        search={{ service: s.slug } as never}
        className="group relative block h-full overflow-hidden rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-soft">
            <Icon className="h-5 w-5" />
          </div>
          <div className="absolute top-4 right-4 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-soft">
            {s.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
              <div className="font-display text-lg font-bold text-primary leading-tight">
                ৳ {s.price.from.toLocaleString()}
                <span className="ml-1 text-[11px] font-medium text-muted-foreground">{s.price.unit}</span>
              </div>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}