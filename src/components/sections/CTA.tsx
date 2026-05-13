import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-teal p-10 md:p-16 text-primary-foreground shadow-glow">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Need a caregiver today? We're here, 24/7.</h2>
            <p className="mt-3 text-white/85">Talk to a care advisor and get a verified caregiver dispatched to your home in Dhaka.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-white/95">
                Book Care Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy/30 hover:bg-navy/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white border border-white/20">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
