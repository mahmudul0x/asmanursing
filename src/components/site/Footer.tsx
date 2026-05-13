import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Compassionate, professional home nursing and caregiver services trusted by families across Dhaka.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="h-4 w-4 text-teal" /> Verified caregivers · 24/7 support
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.to}><Link to={n.to} className="text-white/70 hover:text-teal transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Support</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(6).map((n) => (
              <li key={n.to}><Link to={n.to} className="text-white/70 hover:text-teal transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {SITE.phones.map((p) => (
              <li key={p} className="flex items-center gap-2"><Phone className="h-4 w-4 text-teal" /><a href={`tel:${p}`}>{p}</a></li>
            ))}
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-teal" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-teal mt-0.5" /><span>{SITE.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} The ASHMA Home Care. All rights reserved.</p>
          <p>Serving {SITE.serviceAreas.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
