import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import { SITE, whatsappLink } from "@/lib/site";
import {
  CreditCard,
  Smartphone,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Wallet,
  Download,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Secure Payment — The ASHMA Home Care" },
      { name: "description", content: "Confirm your home care booking with secure online payment." },
    ],
  }),
  component: PaymentPage,
});

type Method = "card" | "bkash" | "nagad" | "rocket";

const METHODS: { id: Method; label: string; icon: typeof CreditCard; tint: string }[] = [
  { id: "card", label: "Card", icon: CreditCard, tint: "bg-primary/10 text-primary" },
  { id: "bkash", label: "bKash", icon: Smartphone, tint: "bg-pink-100 text-pink-600" },
  { id: "nagad", label: "Nagad", icon: Wallet, tint: "bg-orange-100 text-orange-600" },
  { id: "rocket", label: "Rocket", icon: Smartphone, tint: "bg-violet-100 text-violet-600" },
];

function PaymentPage() {
  const [booking, setBooking] = useState<any>(null);
  const [method, setMethod] = useState<Method>("card");
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");
  const [card, setCard] = useState({ number: "", name: "", exp: "", cvv: "" });
  const [mobile, setMobile] = useState({ phone: "", pin: "" });
  const [txn] = useState(() => "TXN" + Math.random().toString(36).slice(2, 10).toUpperCase());

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = sessionStorage.getItem("ashma_booking");
      if (raw) setBooking(JSON.parse(raw));
    } catch {}
  }, []);

  const amount = useMemo(() => {
    const d = booking?.duration ?? "Hourly";
    const map: Record<string, number> = {
      Hourly: 1400,
      "12-hour shift": 2500,
      "24-hour live-in": 4500,
      "Night care": 1800,
      Monthly: 35000,
    };
    return map[d] ?? 1500;
  }, [booking]);

  const fmtCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const onPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === "card") {
      if (card.number.replace(/\s/g, "").length < 12 || !card.name || card.exp.length < 5 || card.cvv.length < 3) {
        toast.error("Please complete your card details.");
        return;
      }
    } else {
      if (mobile.phone.length < 11 || mobile.pin.length < 4) {
        toast.error("Enter your mobile number and PIN.");
        return;
      }
    }
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
      try {
        sessionStorage.removeItem("ashma_booking");
      } catch {}
    }, 2400);
  };

  return (
    <>
      <PageHeader
        eyebrow="Secure Checkout"
        title="Confirm your home care booking"
        sub="Demo payment flow — no real charge. Choose card or mobile wallet to complete."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
          {/* Left: payment form / states */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card text-center"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal/15 text-teal">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">Payment Successful</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your booking is confirmed. A care advisor will call you within 8 minutes.
                  </p>
                  <div className="mt-6 mx-auto max-w-sm rounded-2xl bg-primary-soft/50 border border-border p-5 text-left text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Transaction ID</span><span className="font-semibold">{txn}</span></div>
                    <div className="mt-2 flex justify-between"><span className="text-muted-foreground">Amount paid</span><span className="font-semibold">৳ {amount.toLocaleString()}</span></div>
                    <div className="mt-2 flex justify-between"><span className="text-muted-foreground">Service</span><span className="font-semibold">{booking?.service ?? "Home Care"}</span></div>
                    <div className="mt-2 flex justify-between"><span className="text-muted-foreground">Schedule</span><span className="font-semibold">{(booking?.date || "ASAP") + (booking?.time ? ` · ${booking.time}` : "")}</span></div>
                    <div className="mt-2 flex justify-between"><span className="text-muted-foreground">Status</span><span className="font-semibold text-teal">Confirmed</span></div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3 justify-center">
                    <a
                      href={whatsappLink(
                        `Hello! My ASHMA Home Care booking is confirmed.\n\n` +
                          `• Order ID: ${txn}\n` +
                          `• Service: ${booking?.service ?? "Home Care"}\n` +
                          `• Schedule: ${(booking?.date || "ASAP")}${booking?.time ? ` at ${booking.time}` : ""}\n` +
                          `• Amount Paid: BDT ${amount.toLocaleString()}\n` +
                          `• Patient: ${booking?.name ?? "—"}\n\n` +
                          `Please share next steps.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3 text-sm font-semibold hover:opacity-95"
                    >
                      <MessageCircle className="h-4 w-4" /> Share on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => downloadReceipt({ txn, amount, booking })}
                      className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:opacity-95"
                    >
                      <Download className="h-4 w-4" /> Download Receipt (PDF)
                    </button>
                    <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold">
                      Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold">
                      Explore more services
                    </Link>
                  </div>
                </motion.div>
              ) : status === "processing" ? (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-3xl bg-card border border-border p-10 shadow-card text-center min-h-[420px] flex flex-col items-center justify-center"
                >
                  <Loader2 className="h-12 w-12 text-primary animate-spin" />
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy">Processing your payment…</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Please don't close this window.</p>
                  <div className="mt-6 w-full max-w-xs h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "easeInOut" }} className="h-full bg-primary" />
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={onPay}
                  className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy">Choose payment method</h3>
                      <p className="text-xs text-muted-foreground mt-1">Demo only — no real money is charged.</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal">
                      <Lock className="h-3.5 w-3.5" /> Secure
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {METHODS.map((m) => {
                      const active = method === m.id;
                      return (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setMethod(m.id)}
                          className={`relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm transition-all ${
                            active
                              ? "border-primary bg-primary-soft/50 shadow-soft"
                              : "border-border bg-background hover:border-primary/40"
                          }`}
                        >
                          <span className={`grid h-10 w-10 place-items-center rounded-xl ${m.tint}`}>
                            <m.icon className="h-5 w-5" />
                          </span>
                          <span className="font-semibold text-navy">{m.label}</span>
                          {active && (
                            <span className="absolute top-2 right-2 grid h-4 w-4 place-items-center rounded-full bg-primary text-primary-foreground">
                              <CheckCircle2 className="h-3 w-3" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid gap-4">
                    {method === "card" ? (
                      <>
                        <div>
                          <Label htmlFor="cn">Card number</Label>
                          <div className="relative mt-1.5">
                            <Input
                              id="cn"
                              inputMode="numeric"
                              value={card.number}
                              onChange={(e) => setCard({ ...card, number: fmtCard(e.target.value) })}
                              placeholder="4242 4242 4242 4242"
                              maxLength={19}
                              className="pr-12"
                            />
                            <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="cname">Cardholder name</Label>
                          <Input id="cname" value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} placeholder="Name on card" className="mt-1.5" maxLength={60} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="exp">Expiry</Label>
                            <Input id="exp" value={card.exp} onChange={(e) => setCard({ ...card, exp: fmtExp(e.target.value) })} placeholder="MM/YY" className="mt-1.5" maxLength={5} />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })} placeholder="123" className="mt-1.5" maxLength={4} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Label htmlFor="mphone">{METHODS.find((m) => m.id === method)?.label} account number</Label>
                          <Input
                            id="mphone"
                            inputMode="numeric"
                            value={mobile.phone}
                            onChange={(e) => setMobile({ ...mobile, phone: e.target.value.replace(/\D/g, "").slice(0, 11) })}
                            placeholder="01XXXXXXXXX"
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mpin">PIN</Label>
                          <Input
                            id="mpin"
                            type="password"
                            value={mobile.pin}
                            onChange={(e) => setMobile({ ...mobile, pin: e.target.value.replace(/\D/g, "").slice(0, 6) })}
                            placeholder="••••"
                            className="mt-1.5"
                            maxLength={6}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">A confirmation OTP would normally be sent to your {METHODS.find((m) => m.id === method)?.label} number.</p>
                      </>
                    )}
                  </div>

                  <Button type="submit" className="mt-7 w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold">
                    <Lock className="h-4 w-4 mr-2" /> Pay ৳ {amount.toLocaleString()} securely
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-teal" /> 256-bit encryption</span>
                    <span>·</span>
                    <span>PCI-DSS compliant</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: order summary */}
          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-3xl bg-navy text-white p-6 md:p-7 shadow-card">
              <div className="text-xs uppercase tracking-wider text-white/60">Order summary</div>
              <div className="mt-3 font-display text-xl font-semibold">{booking?.service ?? "Home Care Service"}</div>
              <div className="mt-1 text-sm text-white/75">{booking?.duration ?? "Hourly"} · Dhaka</div>

              <div className="mt-6 grid gap-3 text-sm">
                <Row k="Patient" v={booking?.name ?? "—"} />
                <Row k="Phone" v={booking?.phone ?? "—"} />
                <Row k="Start date" v={booking?.date || "Earliest available"} />
                <Row k="Time slot" v={booking?.time || "Flexible"} />
                <Row k="Address" v={booking?.address || "Confirmed by phone"} />
              </div>

              <div className="mt-6 border-t border-white/15 pt-5 grid gap-2 text-sm">
                <div className="flex justify-between text-white/80"><span>Service estimate</span><span>৳ {amount.toLocaleString()}</span></div>
                <div className="flex justify-between text-white/80"><span>Service charge</span><span>৳ 0</span></div>
                <div className="mt-2 flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>৳ {amount.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-white/70">
                Final invoice may vary based on patient condition and on-site assessment by the care advisor.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-white/60">{k}</span>
      <span className="font-medium text-right max-w-[60%] truncate">{v}</span>
    </div>
  );
}

function downloadReceipt({ txn, amount, booking }: { txn: string; amount: number; booking: any }) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  let y = 56;

  // Header band
  doc.setFillColor(15, 32, 64);
  doc.rect(0, 0, W, 90, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("The ASHMA Home Care", 40, 45);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Payment Receipt", 40, 68);
  doc.text(SITE.phones[0], W - 40, 68, { align: "right" });

  y = 130;
  doc.setTextColor(20, 20, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Booking Confirmed", 40, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(110, 110, 110);
  doc.text(`Issued: ${new Date().toLocaleString()}`, 40, y + 16);

  y += 50;
  const rows: [string, string][] = [
    ["Order ID", txn],
    ["Service", booking?.service ?? "Home Care"],
    ["Time Slot", booking?.time || "Flexible"],
    ["Start Date", booking?.date || "Earliest available"],
    ["Duration", booking?.duration ?? "Hourly"],
    ["Patient", booking?.name ?? "—"],
    ["Phone", booking?.phone ?? "—"],
    ["Address", booking?.address || "Confirmed by phone"],
    ["Amount Paid", `BDT ${amount.toLocaleString()}`],
    ["Status", "Confirmed"],
  ];

  doc.setDrawColor(230, 230, 230);
  doc.setLineWidth(0.5);
  rows.forEach(([k, v], i) => {
    const ry = y + i * 26;
    doc.setTextColor(110, 110, 110);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(k, 40, ry);
    doc.setTextColor(20, 20, 20);
    doc.setFont("helvetica", "bold");
    const wrapped = doc.splitTextToSize(String(v), 320);
    doc.text(wrapped, W - 40, ry, { align: "right" });
    doc.line(40, ry + 8, W - 40, ry + 8);
  });

  y = y + rows.length * 26 + 30;
  doc.setFillColor(245, 250, 248);
  doc.rect(40, y, W - 80, 60, "F");
  doc.setTextColor(20, 20, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Total Paid", 56, y + 24);
  doc.text(`BDT ${amount.toLocaleString()}`, W - 56, y + 24, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(110, 110, 110);
  doc.text("A care advisor will contact you within ~8 minutes.", 56, y + 46);

  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text(
    "Thank you for choosing The ASHMA Home Care · Dhaka, Bangladesh",
    W / 2,
    doc.internal.pageSize.getHeight() - 30,
    { align: "center" }
  );

  doc.save(`ASHMA-Receipt-${txn}.pdf`);
}