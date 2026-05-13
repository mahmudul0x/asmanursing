import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { SERVICES } from "@/lib/services";
import { whatsappLink, SITE } from "@/lib/site";
import { CheckCircle2, Clock, CreditCard, MessageCircle, PhoneCall, Siren } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Caregiver Online — The ASHMA Home Care" },
      { name: "description", content: "Request a verified home nurse or caregiver in Dhaka. WhatsApp confirmation within minutes." },
      { property: "og:title", content: "Book a Home Caregiver — ASHMA" },
      { property: "og:description", content: "Online booking for home nursing and caregiver services in Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

// Time slots tailored to each service category
const SLOTS_BY_SERVICE: Record<string, string[]> = {
  nursing: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "06:00 PM", "09:00 PM", "12:00 AM (Night)"],
  physiotherapy: ["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM", "06:00 PM"],
  "elderly-care": ["07:00 AM", "10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM", "10:00 PM"],
  "baby-care": ["08:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"],
  dementia: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"],
  pneumonia: ["08:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM", "11:00 PM"],
  caregiver: ["08:00 AM", "12:00 PM", "04:00 PM", "08:00 PM"],
};
const DEFAULT_SLOTS = ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"];

function BookingPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", time: "", duration: "Hourly",
    address: "", condition: "", message: "", emergency: false,
  });

  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const selectedSlug = SERVICES.find((s) => s.title === form.service)?.slug;
  const slots = (selectedSlug && SLOTS_BY_SERVICE[selectedSlug]) || DEFAULT_SLOTS;

  // Preselect service from ?service=slug (e.g. coming from Services page)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("service");
    if (!slug) return;
    const match = SERVICES.find((s) => s.slug === slug);
    if (match) setForm((f) => ({ ...f, service: match.title }));
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in your name, phone and service.");
      return;
    }
    if (!form.time) {
      toast.error("Please pick a preferred time slot.");
      return;
    }
    setSubmitted(true);
    toast.success("Request received — continue to secure payment.");
    // Persist booking summary for the payment page (demo flow)
    try {
      sessionStorage.setItem("ashma_booking", JSON.stringify(form));
    } catch {}
    navigate({ to: "/payment" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Online Booking"
        title="Request a verified caregiver in minutes."
        sub="Tell us about the patient — our care advisors will respond on WhatsApp right away."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2 flex items-center justify-between gap-3 rounded-2xl border border-emergency/30 bg-emergency/5 p-4">
                <div className="flex items-center gap-3">
                  <Siren className="h-5 w-5 text-emergency" />
                  <div>
                    <div className="text-sm font-semibold">Need urgent care?</div>
                    <div className="text-xs text-muted-foreground">Mark as emergency for fast dispatch.</div>
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input type="checkbox" checked={form.emergency} onChange={(e) => set("emergency", e.target.checked)} className="h-4 w-4 accent-[oklch(0.62_0.23_25)]" />
                  Emergency
                </label>
              </div>

              <div>
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" className="mt-1.5" maxLength={80} />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="01XXXXXXXXX" className="mt-1.5" maxLength={20} />
              </div>

              <div>
                <Label>Service type *</Label>
                <Select value={form.service} onValueChange={(v) => { set("service", v); set("time", ""); }}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}
                    <SelectItem value="General consultation">General consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Duration</Label>
                <Select value={form.duration} onValueChange={(v) => set("duration", v)}>
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["Hourly", "12-hour shift", "24-hour live-in", "Night care", "Monthly"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Preferred start date</Label>
                <Input id="date" type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="condition">Patient condition</Label>
                <Input id="condition" value={form.condition} onChange={(e) => set("condition", e.target.value)} placeholder="e.g., post-stroke, dementia" className="mt-1.5" maxLength={120} />
              </div>

              <div className="sm:col-span-2">
                <Label className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Preferred time slot *</Label>
                <p className="text-xs text-muted-foreground mt-1">
                  {form.service ? `Slots tailored for ${form.service}` : "Choose a service first to see tailored slots"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {slots.map((t) => {
                    const active = form.time === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => set("time", t)}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                          active
                            ? "border-primary bg-primary text-primary-foreground shadow-soft"
                            : "border-border bg-background hover:border-primary/40 hover:bg-primary-soft/40"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="address">Address in Dhaka</Label>
                <Input id="address" value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="Area, road, building" className="mt-1.5" maxLength={200} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Notes for the care team</Label>
                <Textarea id="message" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Anything we should know about the patient or care needs" className="mt-1.5" rows={4} maxLength={1000} />
              </div>

              <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-12 rounded-full">
                  <CreditCard className="h-4 w-4 mr-1" /> Confirm & Pay
                </Button>
                <Button type="button" variant="outline" className="rounded-full h-12" asChild>
                  <a href={whatsappLink(`Hello, I'd like to book ${form.service || "a home care service"}.`)} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp instead
                  </a>
                </Button>
                <Button type="button" variant="outline" className="rounded-full h-12" asChild>
                  <a href={`tel:${SITE.phones[0]}`}><PhoneCall className="h-4 w-4 mr-1" /> Call</a>
                </Button>
              </div>

              {submitted && (
                <div className="sm:col-span-2 mt-2 rounded-2xl border border-teal/30 bg-teal/5 p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold">Request received</div>
                    <div className="text-muted-foreground">A care advisor will contact you on WhatsApp shortly.</div>
                  </div>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-3xl bg-navy text-navy-foreground p-6 md:p-7 shadow-card">
              <h3 className="font-display text-xl font-semibold">Talk to a care advisor</h3>
              <p className="mt-2 text-sm text-white/75">We're available 24/7 across Dhaka — Khilgaon, Shahjahanpur, Nadda, Kalachandpur and Bashundhara.</p>
              <div className="mt-5 grid gap-3">
                {SITE.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 p-3 text-sm font-medium border border-white/10">
                    <PhoneCall className="h-4 w-4 text-teal" /> {p}
                  </a>
                ))}
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-whatsapp/95 hover:bg-whatsapp p-3 text-sm font-semibold">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Chat
                </a>
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary to-teal p-5">
                <div className="text-sm font-semibold">Average response</div>
                <div className="mt-1 font-display text-3xl font-bold">~ 8 minutes</div>
                <div className="text-xs text-white/85 mt-1">From request to caregiver match.</div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
