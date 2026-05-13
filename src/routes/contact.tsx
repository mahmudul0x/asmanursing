import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { SITE, whatsappLink } from "@/lib/site";
import { Mail, MapPin, MessageCircle, PhoneCall, Siren } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The ASHMA Home Care, Dhaka" },
      { name: "description", content: "Reach The ASHMA Home Care for home nursing and caregiver services in Dhaka. Call, WhatsApp, email or visit our office." },
      { property: "og:title", content: "Contact — ASHMA Home Care" },
      { property: "og:description", content: "Get in touch with our care team in Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [f, setF] = useState({ name: "", phone: "", email: "", message: "" });
  const set = (k: string, v: string) => setF((x) => ({ ...x, [k]: v }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.phone) return toast.error("Please add your name and phone.");
    const msg = `Contact request%0AName: ${f.name}%0APhone: ${f.phone}%0AEmail: ${f.email}%0AMessage: ${f.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank");
    toast.success("Message sent — opening WhatsApp.");
  };
  return (
    <>
      <PageHeader eyebrow="Contact" title="We're here, 24/7. Reach out anytime." sub="Talk to a care advisor by phone, WhatsApp or email — or visit our Bashundhara office." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-1">
            <div className="grid gap-4">
              {SITE.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-3 rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-glow transition-shadow">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><PhoneCall className="h-5 w-5" /></span>
                  <div><div className="text-xs text-muted-foreground">Call us</div><div className="font-semibold">{p}</div></div>
                </a>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-whatsapp text-white p-5 shadow-card hover:opacity-95">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/20"><MessageCircle className="h-5 w-5" /></span>
                <div><div className="text-xs text-white/80">WhatsApp</div><div className="font-semibold">Chat with care team</div></div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-2xl bg-card border border-border p-5 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/15 text-teal"><Mail className="h-5 w-5" /></span>
                <div><div className="text-xs text-muted-foreground">Email</div><div className="font-semibold">{SITE.email}</div></div>
              </a>
              <div className="rounded-2xl bg-card border border-border p-5 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><MapPin className="h-5 w-5" /></span>
                  <div><div className="text-xs text-muted-foreground">Main office</div><div className="font-semibold">Bashundhara, Dhaka</div></div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{SITE.address}</p>
                <p className="mt-3 text-xs text-muted-foreground">Service areas: {SITE.serviceAreas.join(", ")}</p>
              </div>
              <div className="rounded-2xl border border-emergency/30 bg-emergency/5 p-5 flex items-center gap-3">
                <Siren className="h-5 w-5 text-emergency" />
                <div className="text-sm"><div className="font-semibold">24/7 emergency line</div><a href={`tel:${SITE.phones[0]}`} className="text-emergency font-bold">{SITE.phones[0]}</a></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-2">
            <form onSubmit={submit} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card grid gap-4 sm:grid-cols-2">
              <h3 className="sm:col-span-2 font-display text-xl font-semibold">Send us a message</h3>
              <div><Label htmlFor="n">Name *</Label><Input id="n" value={f.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5" maxLength={80} /></div>
              <div><Label htmlFor="p">Phone *</Label><Input id="p" value={f.phone} onChange={(e) => set("phone", e.target.value)} className="mt-1.5" maxLength={20} /></div>
              <div className="sm:col-span-2"><Label htmlFor="e">Email</Label><Input id="e" type="email" value={f.email} onChange={(e) => set("email", e.target.value)} className="mt-1.5" maxLength={120} /></div>
              <div className="sm:col-span-2"><Label htmlFor="m">Message</Label><Textarea id="m" value={f.message} onChange={(e) => set("message", e.target.value)} rows={5} className="mt-1.5" maxLength={1000} /></div>
              <Button type="submit" className="sm:col-span-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full">Send Message</Button>
            </form>
            <div className="mt-8 rounded-3xl overflow-hidden border border-border shadow-card">
              <iframe
                title="ASHMA Home Care location"
                src="https://www.google.com/maps?q=Bashundhara%20R%2FA%20Dhaka&output=embed"
                className="w-full h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
