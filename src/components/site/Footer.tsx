import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck, Heart } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24" style={{ background: "linear-gradient(135deg, #0d2137 0%, #0a3a5c 50%, #0d4f6e 100%)" }}>
      {/* Top accent bar matching logo blue */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #2196F3, #14B8A6, #43A047)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Brand column */}
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Compassionate, professional home nursing and caregiver services trusted by families across Dhaka.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            <ShieldCheck className="h-4 w-4 shrink-0" style={{ color: "#43A047" }} />
            Verified caregivers · 24/7 support
          </div>
          {/* WhatsApp CTA */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.845L.057 23.927l6.242-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.875 9.875 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#2196F3" }}>
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="transition-colors hover:text-white flex items-center gap-1.5"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  <span style={{ color: "#2196F3", fontSize: 10 }}>▶</span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#2196F3" }}>
            Our Services
          </h4>
          <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            {["Home Nursing", "Physiotherapy", "Elderly Care", "Baby Care", "Dementia Care", "Pneumonia Care"].map((s) => (
              <li key={s} className="flex items-center gap-1.5">
                <Heart className="h-3 w-3 shrink-0" style={{ color: "#E53935" }} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#2196F3" }}>
            Contact Us
          </h4>
          <ul className="space-y-3.5 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>
            {SITE.phones.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className="flex items-center justify-center h-7 w-7 rounded-full shrink-0" style={{ background: "rgba(33,150,243,0.2)" }}>
                  <Phone className="h-3.5 w-3.5" style={{ color: "#2196F3" }} />
                </span>
                <a href={`tel:${p}`} className="hover:text-white transition-colors">{p}</a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <span className="flex items-center justify-center h-7 w-7 rounded-full shrink-0" style={{ background: "rgba(33,150,243,0.2)" }}>
                <Mail className="h-3.5 w-3.5" style={{ color: "#2196F3" }} />
              </span>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex items-center justify-center h-7 w-7 rounded-full shrink-0 mt-0.5" style={{ background: "rgba(33,150,243,0.2)" }}>
                <MapPin className="h-3.5 w-3.5" style={{ color: "#2196F3" }} />
              </span>
              <span style={{ color: "rgba(255,255,255,0.60)" }}>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
          <p>© {new Date().getFullYear()} <span style={{ color: "#2196F3" }}>The ASHMA Home Care</span>. All rights reserved.</p>
          <p>Serving: {SITE.serviceAreas.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
