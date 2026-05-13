import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import slide1 from "@/assets/hero-nurse-elderly.jpg";
import slide2 from "@/assets/hero-elderly-care.jpg";
import slide3 from "@/assets/hero-family.jpg";
import { SITE, whatsappLink } from "@/lib/site";

const SLIDES = [
  {
    image: slide1,
    eyebrow: "Trusted Home Care",
    title: "Professional Home Nursing & Caregiver Services",
    sub: "Hospital-grade nursing, physiotherapy and elderly care — delivered with compassion at your home.",
    serviceSlug: "nursing",
  },
  {
    image: slide2,
    eyebrow: "Elderly & Patient Care",
    title: "Quality Care, Comfort & Safety at Home",
    sub: "Experienced nurses and caregivers available 24/7 across Dhaka.",
    serviceSlug: "elderly-care",
  },
  {
    image: slide3,
    eyebrow: "Family Healthcare Support",
    title: "Trusted by 1,200+ Families Across Dhaka",
    sub: "Verified caregivers, transparent pricing, and a care advisor on call — anytime.",
    serviceSlug: "physiotherapy",
  },
];

// Eagerly warm the browser cache for upcoming slides as soon as the module loads
if (typeof window !== "undefined") {
  SLIDES.forEach((s) => {
    const img = new Image();
    img.decoding = "async";
    img.src = s.image;
  });
}

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [i]);
  const s = SLIDES[i];
  const next = () => setI((v) => (v + 1) % SLIDES.length);
  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-navy">
      {/* Hidden preloaders ensure all slides are decoded ahead of time */}
      <div aria-hidden className="hidden">
        {SLIDES.map((sl) => (
          <img key={sl.image} src={sl.image} alt="" decoding="async" />
        ))}
      </div>

      {/* Full-bleed background slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="h-full w-full object-cover"
            fetchPriority={i === 0 ? "high" : "auto"}
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 md:pt-40 pb-28 min-h-[92vh] flex items-center justify-center text-center">
        <div className="max-w-3xl text-white mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur mx-auto">
                <ShieldCheck className="h-3.5 w-3.5 text-teal" /> {s.eyebrow}
              </span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                {s.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
                {s.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/booking"
              search={{ service: s.serviceSlug } as never}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Book Care Service <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp/95 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${SITE.phones[0]}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <PhoneCall className="h-4 w-4" /> {SITE.phones[0]}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <span>4.9 / 5 from 1,200+ families</span>
            </div>
            <div className="h-4 w-px bg-white/25" />
            <span>24/7 emergency response</span>
            <div className="h-4 w-px bg-white/25" />
            <span>Verified caregivers</span>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 border border-white/25 text-white backdrop-blur hover:bg-white/25 transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 border border-white/25 text-white backdrop-blur hover:bg-white/25 transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2">
        {SLIDES.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Slide ${k + 1}`}
            className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-teal" : "w-4 bg-white/40 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}