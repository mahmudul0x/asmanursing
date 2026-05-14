import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/site/Reveal";
import {
  Droplets,
  Utensils,
  Activity,
  Pipette,
  Pill,
  Users,
  HeartPulse,
  Bandage,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training Center — ASHMA Home Care Caregiver Courses in Dhaka" },
      {
        name: "description",
        content:
          "আশমা হোম কেয়ার ট্রেনিং সেন্টার — professional caregiver training covering personal hygiene, nutrition, vital signs, wound care, infection control and more.",
      },
      { property: "og:title", content: "ASHMA Training Center — Caregiver Courses" },
      {
        property: "og:description",
        content: "Professional caregiver training programs by The ASHMA Home Care, Dhaka.",
      },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const MODULES = [
  {
    number: "01",
    icon: Droplets,
    titleBn: "ব্যক্তিগত পরিচ্ছন্নতা",
    title: "Personal Hygiene Care",
    color: "#2196F3",
    bg: "rgba(33,150,243,0.08)",
    points: [
      "গোসল ও শরীর পরিষ্কার করা",
      "মুখ পরিচর্যা ও দাঁতের যত্ন",
      "চুল ও নখের পরিচর্যা",
      "প্রস্রাব ও পায়খানার যত্ন",
    ],
    pointsEn: [
      "Bathing & body hygiene",
      "Oral & dental care",
      "Hair & nail care",
      "Urinary & bowel hygiene management",
    ],
  },
  {
    number: "02",
    icon: Utensils,
    titleBn: "পুষ্টি ও খাদ্য ব্যবস্থাপনা",
    title: "Nutrition & Diet Management",
    color: "#43A047",
    bg: "rgba(67,160,71,0.08)",
    points: [
      "রোগীর খাদ্য পরিকল্পনা",
      "টিউব ফিডিং ও মুখে খাওয়ানো",
      "ডায়াবেটিস ও হৃদরোগীর ডায়েট",
      "পর্যাপ্ত পানি গ্রহণ নিশ্চিতকরণ",
    ],
    pointsEn: [
      "Patient meal planning",
      "Tube feeding & oral nutrition",
      "Diet for diabetes & cardiac patients",
      "Ensuring adequate hydration",
    ],
  },
  {
    number: "03",
    icon: Activity,
    titleBn: "ভাইটাল সাইন মনিটরিং",
    title: "Vital Signs Monitoring",
    color: "#E53935",
    bg: "rgba(229,57,53,0.08)",
    points: [
      "রক্তচাপ পরিমাপ ও রেকর্ড",
      "তাপমাত্রা, পালস ও অক্সিজেন মাত্রা",
      "শ্বাসক্রিয়া পর্যবেক্ষণ",
      "অস্বাভাবিকতা চিহ্নিতকরণ ও রিপোর্ট",
    ],
    pointsEn: [
      "Blood pressure measurement & recording",
      "Temperature, pulse & SpO₂ monitoring",
      "Respiratory rate observation",
      "Identifying abnormalities & reporting",
    ],
  },
  {
    number: "04",
    icon: Pipette,
    titleBn: "ক্যাথেটার ও ড্রেন কেয়ার",
    title: "Catheter & Drain Care",
    color: "#0097A7",
    bg: "rgba(0,151,167,0.08)",
    points: [
      "ইউরিনারি ক্যাথেটার পরিচর্যা",
      "ফোলি ব্যাগ পরিষ্কার ও পরিবর্তন",
      "সংক্রমণ প্রতিরোধ পদ্ধতি",
      "ড্রেনের আউটপুট পরিমাপ ও রেকর্ড",
    ],
    pointsEn: [
      "Urinary catheter care",
      "Foley bag cleaning & change",
      "Infection prevention protocols",
      "Drain output measurement & recording",
    ],
  },
  {
    number: "05",
    icon: Pill,
    titleBn: "ওষুধ ব্যবস্থাপনা",
    title: "Medication Management",
    color: "#7B1FA2",
    bg: "rgba(123,31,162,0.08)",
    points: [
      "নির্ধারিত সময়ে ওষুধ প্রয়োগ",
      "ডোজ ট্র্যাকিং ও রেকর্ড সংরক্ষণ",
      "ওষুধের পার্শ্বপ্রতিক্রিয়া পর্যবেক্ষণ",
      "ইনজেকশন ও ইনহেলার ব্যবহার পদ্ধতি",
    ],
    pointsEn: [
      "Administering medication on schedule",
      "Dose tracking & record keeping",
      "Monitoring side effects",
      "Injection & inhaler administration",
    ],
  },
  {
    number: "06",
    icon: Users,
    titleBn: "বৃদ্ধ ও শিশু সেবা",
    title: "Geriatric & Pediatric Care",
    color: "#FF6F00",
    bg: "rgba(255,111,0,0.08)",
    points: [
      "বয়স্কদের পতন প্রতিরোধ",
      "শিশুর বিকাশ পর্যবেক্ষণ",
      "ডায়পার পরিবর্তন ও স্কিন কেয়ার",
      "মানসিক সহায়তা ও সঙ্গ প্রদান",
    ],
    pointsEn: [
      "Fall prevention for elderly patients",
      "Infant development monitoring",
      "Diaper change & skin care",
      "Emotional support & companionship",
    ],
  },
  {
    number: "07",
    icon: HeartPulse,
    titleBn: "প্রাথমিক চিকিৎসা ও জরুরি সেবা",
    title: "First Aid & Emergency Response",
    color: "#D32F2F",
    bg: "rgba(211,47,47,0.08)",
    points: [
      "CPR ও বেসিক লাইফ সাপোর্ট",
      "শ্বাসরোধ ও অজ্ঞান অবস্থায় প্রাথমিক ব্যবস্থা",
      "রক্তপাত নিয়ন্ত্রণ",
      "জরুরি পরিষেবায় যোগাযোগ",
    ],
    pointsEn: [
      "CPR & basic life support",
      "Choking & unconsciousness response",
      "Hemorrhage control",
      "Emergency service communication",
    ],
  },
  {
    number: "08",
    icon: Bandage,
    titleBn: "ক্ষত পরিচর্যা",
    title: "Wound Care",
    color: "#558B2F",
    bg: "rgba(85,139,47,0.08)",
    points: [
      "ড্রেসিং পরিবর্তন পদ্ধতি",
      "সংক্রমণের লক্ষণ চেনা",
      "বেডসোর প্রতিরোধ ও চিকিৎসা",
      "সার্জিক্যাল ও ডায়াবেটিক ক্ষত যত্ন",
    ],
    pointsEn: [
      "Dressing change techniques",
      "Recognizing signs of infection",
      "Bedsore prevention & treatment",
      "Surgical & diabetic wound care",
    ],
  },
  {
    number: "09",
    icon: Stethoscope,
    titleBn: "পেশাদারিত্ব ও নৈতিকতা",
    title: "Professionalism & Ethics",
    color: "#1565C0",
    bg: "rgba(21,101,192,0.08)",
    points: [
      "রোগীর গোপনীয়তা রক্ষা",
      "পেশাদার আচরণ ও যোগাযোগ",
      "পরিবারের সাথে সম্পর্ক রক্ষা",
      "দায়িত্বশীল ডকুমেন্টেশন",
    ],
    pointsEn: [
      "Maintaining patient confidentiality",
      "Professional conduct & communication",
      "Family relationship management",
      "Responsible documentation",
    ],
  },
  {
    number: "10",
    icon: ShieldCheck,
    titleBn: "ইনফেকশন কন্ট্রোল",
    title: "Infection Control",
    color: "#00838F",
    bg: "rgba(0,131,143,0.08)",
    points: [
      "হাত ধোয়ার সঠিক পদ্ধতি",
      "PPE ব্যবহার ও জৈব নিরাপত্তা",
      "মেডিকেল বর্জ্য ব্যবস্থাপনা",
      "সংক্রামক রোগ নিয়ন্ত্রণ প্রোটোকল",
    ],
    pointsEn: [
      "Proper handwashing technique",
      "PPE usage & biosafety",
      "Medical waste management",
      "Infectious disease control protocols",
    ],
  },
];

function TrainingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Training Center"
        title="আশমা হোম কেয়ার ট্রেনিং সেন্টার"
        sub="Comprehensive caregiver training programs — building skilled, compassionate professionals for modern home healthcare."
      />

      {/* Stats ribbon */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10", label: "Course Modules" },
            { value: "100+", label: "Hours of Training" },
            { value: "Certified", label: "Graduates" },
            { value: "24/7", label: "Support Access" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              <GraduationCap className="h-3.5 w-3.5" /> কোর্স মডিউল
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              Professional Caregiver Training<br />
              <span className="text-primary">কোর্স মডিউল সমূহ</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our structured curriculum covers every essential skill a professional caregiver needs — from basic hygiene
              to emergency response. Each module combines theory with hands-on practice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Module grid */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <Reveal key={mod.number} delay={i * 0.04}>
                  <div
                    className="relative flex flex-col h-full rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
                  >
                    {/* Top accent */}
                    <div style={{ height: 4, background: mod.color }} />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                          style={{ background: mod.bg }}
                        >
                          <Icon className="h-5 w-5" style={{ color: mod.color }} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                            Module {mod.number}
                          </div>
                          <h3 className="font-display text-base font-bold text-navy leading-snug">
                            {mod.titleBn}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{mod.title}</p>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="space-y-2.5 flex-1">
                        {mod.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm">
                            <CheckCircle2
                              className="h-4 w-4 shrink-0 mt-0.5"
                              style={{ color: mod.color }}
                            />
                            <span className="text-foreground/80 leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* English labels */}
                      <div className="mt-5 pt-4 border-t border-border">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                          Topics covered
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {mod.pointsEn.map((en) => (
                            <span
                              key={en}
                              className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                              style={{ background: mod.bg, color: mod.color }}
                            >
                              {en.split("&")[0].trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why train with us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy via-navy/95 to-primary/70 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                Why Choose ASHMA Training
              </span>
              <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold">
                কেন আমাদের ট্রেনিং বেছে নেবেন?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Expert-Led Curriculum",
                body: "Designed by registered nurses and healthcare professionals with years of field experience.",
              },
              {
                icon: ShieldCheck,
                title: "Certified Completion",
                body: "Receive an official certificate upon completion, recognized by families and hospitals across Dhaka.",
              },
              {
                icon: Users,
                title: "Small Batch Training",
                body: "Personal attention in small groups ensures every participant masters each skill effectively.",
              },
              {
                icon: HeartPulse,
                title: "Hands-On Practice",
                body: "Real equipment and simulation scenarios ensure practical readiness from day one.",
              },
              {
                icon: Activity,
                title: "Job Placement Support",
                body: "Top graduates are prioritized for placement with ASHMA Home Care's client families.",
              },
              {
                icon: CheckCircle2,
                title: "Bilingual Instruction",
                body: "All modules taught in Bengali with English terminology — accessible and professionally relevant.",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 mb-4">
                      <Icon className="h-5 w-5 text-teal-300" style={{ color: "#14B8A6" }} />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="py-16 md:py-20 bg-primary-soft/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              ট্রেনিং শুরু করতে আগ্রহী?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Contact us today to learn about upcoming batch dates, fees, and enrollment requirements.
              Limited seats available per batch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold hover:shadow-glow transition-all"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold hover:border-primary/40 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
