import { CalendarCheck, ClipboardList, PhoneCall, UserCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  { i: PhoneCall, t: "Reach out", d: "Call or WhatsApp us with your care needs." },
  { i: ClipboardList, t: "Care plan", d: "We design a plan matched to the patient." },
  { i: UserCheck, t: "Caregiver match", d: "A vetted nurse or caregiver is assigned." },
  { i: CalendarCheck, t: "Care begins", d: "Continuous support, check-ins and updates." },
];
export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">How it works</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">A simple, reassuring care journey</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, k) => (
            <Reveal key={s.t} delay={k * 0.08}>
              <div className="relative h-full rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground text-sm font-bold">{k + 1}</div>
                <s.i className="h-6 w-6 text-teal mt-3" />
                <h3 className="mt-3 font-semibold text-lg">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
