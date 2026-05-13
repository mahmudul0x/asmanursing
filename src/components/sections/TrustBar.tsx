import { Award, Clock, HeartHandshake, Shield, UserCheck, Users } from "lucide-react";
const ITEMS = [
  { i: Users, t: "1,200+", d: "Families served" },
  { i: UserCheck, t: "150+", d: "Verified caregivers" },
  { i: Clock, t: "24/7", d: "Emergency response" },
  { i: Award, t: "8+ yrs", d: "Trusted experience" },
  { i: Shield, t: "100%", d: "Background-checked" },
  { i: HeartHandshake, t: "4.9/5", d: "Family satisfaction" },
];
export function TrustBar() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {ITEMS.map(({ i: Icon, t, d }) => (
          <div key={d} className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal/15 text-teal"><Icon className="h-5 w-5" /></div>
            <div>
              <div className="font-display text-lg font-bold leading-none">{t}</div>
              <div className="text-xs text-white/70 mt-1">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
