import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join The ASHMA Home Care Team" },
      { name: "description", content: "Apply as a home nurse, caregiver or physiotherapist with The ASHMA Home Care in Dhaka." },
      { property: "og:title", content: "Careers — ASHMA Home Care" },
      { property: "og:description", content: "Build a meaningful career in home healthcare in Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [f, setF] = useState({ name: "", phone: "", role: "", experience: "", message: "" });
  const set = (k: string, v: string) => setF((x) => ({ ...x, [k]: v }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.phone || !f.role) return toast.error("Please fill name, phone and role.");
    const msg = `Career application%0AName: ${f.name}%0APhone: ${f.phone}%0ARole: ${f.role}%0AExperience: ${f.experience}%0ANotes: ${f.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank");
    toast.success("Application sent — opening WhatsApp.");
  };
  return (
    <>
      <PageHeader eyebrow="Careers" title="Join a team that cares — for families and for you." sub="Build a meaningful career as a nurse, caregiver or physiotherapist with ASHMA." />
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="grid gap-4">
              {[
                { i: HeartHandshake, t: "Caregivers", d: "Daily-living, elderly and patient care." },
                { i: Briefcase, t: "Home Nurses", d: "Registered nurses for clinical home care." },
                { i: GraduationCap, t: "Physiotherapists", d: "Mobility, stroke and pain management therapy." },
              ].map((r) => (
                <div key={r.t} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><r.i className="h-5 w-5" /></span>
                  <div>
                    <h3 className="font-semibold">{r.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.d}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-navy text-navy-foreground p-6">
                <h4 className="font-semibold">What we offer</h4>
                <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc pl-5">
                  <li>Competitive pay & on-time monthly salary</li>
                  <li>Continuous clinical training & supervision</li>
                  <li>Supportive, respectful work culture</li>
                  <li>Flexible shifts across Dhaka</li>
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card grid gap-4">
              <h3 className="font-display text-xl font-semibold">Apply now</h3>
              <div><Label htmlFor="cname">Full name *</Label><Input id="cname" value={f.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5" maxLength={80} /></div>
              <div><Label htmlFor="cphone">Phone *</Label><Input id="cphone" value={f.phone} onChange={(e) => set("phone", e.target.value)} className="mt-1.5" maxLength={20} /></div>
              <div>
                <Label>Role *</Label>
                <Select value={f.role} onValueChange={(v) => set("role", v)}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select role" /></SelectTrigger>
                  <SelectContent>
                    {["Caregiver", "Home Nurse", "Physiotherapist", "Care Coordinator"].map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div><Label htmlFor="exp">Experience</Label><Input id="exp" value={f.experience} onChange={(e) => set("experience", e.target.value)} placeholder="Years and key skills" className="mt-1.5" maxLength={120} /></div>
              <div><Label htmlFor="cm">Message</Label><Textarea id="cm" value={f.message} onChange={(e) => set("message", e.target.value)} className="mt-1.5" rows={4} maxLength={1000} /></div>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full">Send Application</Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
