import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTA } from "@/components/sections/CTA";

const FAQS = [
  { q: "How quickly can a caregiver be at our home?", a: "For standard requests, within 4–24 hours. Emergency caregivers can be dispatched in 60–90 minutes across Dhaka." },
  { q: "Are your caregivers and nurses verified?", a: "Yes. Every caregiver is background-checked, trained and supervised by our clinical team." },
  { q: "Which areas do you cover?", a: "We currently serve Khilgaon, Shahjahanpur, Nadda, Kalachandpur, Bashundhara and surrounding Dhaka neighborhoods." },
  { q: "How is pricing decided?", a: "Pricing depends on the type of care, duration and patient condition. We always share a transparent quote before you confirm." },
  { q: "Can we change the caregiver if needed?", a: "Absolutely. Family comfort matters. We will reassign a new caregiver promptly if needed." },
  { q: "Do you provide emergency or night care?", a: "Yes — both night-only shifts and 24/7 live-in care are available, including emergency dispatch." },
  { q: "How do we pay?", a: "Cash, bKash, Nagad and bank transfer are all accepted. Monthly billing is also available for ongoing care." },
  { q: "Do you coordinate with our doctor?", a: "Yes, our nurses follow your physician's care plan and provide regular updates as required." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The ASHMA Home Care" },
      { name: "description", content: "Answers about booking, caregivers, pricing, emergency support and service availability." },
      { property: "og:title", content: "FAQ — ASHMA Home Care" },
      { property: "og:description", content: "Frequently asked questions about home nursing in Dhaka." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Answers for the questions families ask most." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`i${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-card data-[state=open]:shadow-glow">
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CTA />
    </>
  );
}
