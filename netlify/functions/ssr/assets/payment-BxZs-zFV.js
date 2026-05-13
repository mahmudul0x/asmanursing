import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { P as PageHeader } from "./PageHeader-STPzDVcA.js";
import { w as whatsappLink, B as Button, S as SITE } from "./router-B1DAbr0o.js";
import { I as Input } from "./input-Cgc6DEMC.js";
import { L as Label } from "./label-BGJ4oB1z.js";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import { CheckCircle2, MessageCircle, Download, ArrowRight, Loader2, Lock, CreditCard, Smartphone, Wallet, ShieldCheck } from "lucide-react";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
const METHODS = [{
  id: "card",
  label: "Card",
  icon: CreditCard,
  tint: "bg-primary/10 text-primary"
}, {
  id: "bkash",
  label: "bKash",
  icon: Smartphone,
  tint: "bg-pink-100 text-pink-600"
}, {
  id: "nagad",
  label: "Nagad",
  icon: Wallet,
  tint: "bg-orange-100 text-orange-600"
}, {
  id: "rocket",
  label: "Rocket",
  icon: Smartphone,
  tint: "bg-violet-100 text-violet-600"
}];
function PaymentPage() {
  const [booking, setBooking] = useState(null);
  const [method, setMethod] = useState("card");
  const [status, setStatus] = useState("idle");
  const [card, setCard] = useState({
    number: "",
    name: "",
    exp: "",
    cvv: ""
  });
  const [mobile, setMobile] = useState({
    phone: "",
    pin: ""
  });
  const [txn] = useState(() => "TXN" + Math.random().toString(36).slice(2, 10).toUpperCase());
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = sessionStorage.getItem("ashma_booking");
      if (raw) setBooking(JSON.parse(raw));
    } catch {
    }
  }, []);
  const amount = useMemo(() => {
    const d = booking?.duration ?? "Hourly";
    const map = {
      Hourly: 1400,
      "12-hour shift": 2500,
      "24-hour live-in": 4500,
      "Night care": 1800,
      Monthly: 35e3
    };
    return map[d] ?? 1500;
  }, [booking]);
  const fmtCard = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };
  const onPay = (e) => {
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
      } catch {
      }
    }, 2400);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Secure Checkout", title: "Confirm your home care booking", sub: "Demo payment flow — no real charge. Choose card or mobile wallet to complete." }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: status === "success" ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.96
      }, animate: {
        opacity: 1,
        scale: 1
      }, className: "rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal/15 text-teal", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl font-bold text-navy", children: "Payment Successful" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Your booking is confirmed. A care advisor will call you within 8 minutes." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 mx-auto max-w-sm rounded-2xl bg-primary-soft/50 border border-border p-5 text-left text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Transaction ID" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: txn })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Amount paid" }),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "৳ ",
              amount.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Service" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: booking?.service ?? "Home Care" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Schedule" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: (booking?.date || "ASAP") + (booking?.time ? ` · ${booking.time}` : "") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-teal", children: "Confirmed" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxs("a", { href: whatsappLink(`Hello! My ASHMA Home Care booking is confirmed.

• Order ID: ${txn}
• Service: ${booking?.service ?? "Home Care"}
• Schedule: ${booking?.date || "ASAP"}${booking?.time ? ` at ${booking.time}` : ""}
• Amount Paid: BDT ${amount.toLocaleString()}
• Patient: ${booking?.name ?? "—"}

Please share next steps.`), target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3 text-sm font-semibold hover:opacity-95", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
            " Share on WhatsApp"
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => downloadReceipt({
            txn,
            amount,
            booking
          }), className: "inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:opacity-95", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
            " Download Receipt (PDF)"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold", children: [
            "Back to Home ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold", children: "Explore more services" })
        ] })
      ] }, "success") : status === "processing" ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, className: "rounded-3xl bg-card border border-border p-10 shadow-card text-center min-h-[420px] flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx(Loader2, { className: "h-12 w-12 text-primary animate-spin" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-xl font-semibold text-navy", children: "Processing your payment…" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please don't close this window." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 w-full max-w-xs h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsx(motion.div, { initial: {
          width: 0
        }, animate: {
          width: "100%"
        }, transition: {
          duration: 2.2,
          ease: "easeInOut"
        }, className: "h-full bg-primary" }) })
      ] }, "processing") : /* @__PURE__ */ jsxs(motion.form, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, onSubmit: onPay, className: "rounded-3xl bg-card border border-border p-6 md:p-8 shadow-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-navy", children: "Choose payment method" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Demo only — no real money is charged." })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-teal", children: [
            /* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5" }),
            " Secure"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5", children: METHODS.map((m) => {
          const active = method === m.id;
          return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setMethod(m.id), className: `relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-sm transition-all ${active ? "border-primary bg-primary-soft/50 shadow-soft" : "border-border bg-background hover:border-primary/40"}`, children: [
            /* @__PURE__ */ jsx("span", { className: `grid h-10 w-10 place-items-center rounded-xl ${m.tint}`, children: /* @__PURE__ */ jsx(m.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy", children: m.label }),
            active && /* @__PURE__ */ jsx("span", { className: "absolute top-2 right-2 grid h-4 w-4 place-items-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3" }) })
          ] }, m.id);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4", children: method === "card" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "cn", children: "Card number" }),
            /* @__PURE__ */ jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsx(Input, { id: "cn", inputMode: "numeric", value: card.number, onChange: (e) => setCard({
                ...card,
                number: fmtCard(e.target.value)
              }), placeholder: "4242 4242 4242 4242", maxLength: 19, className: "pr-12" }),
              /* @__PURE__ */ jsx(CreditCard, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "cname", children: "Cardholder name" }),
            /* @__PURE__ */ jsx(Input, { id: "cname", value: card.name, onChange: (e) => setCard({
              ...card,
              name: e.target.value
            }), placeholder: "Name on card", className: "mt-1.5", maxLength: 60 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "exp", children: "Expiry" }),
              /* @__PURE__ */ jsx(Input, { id: "exp", value: card.exp, onChange: (e) => setCard({
                ...card,
                exp: fmtExp(e.target.value)
              }), placeholder: "MM/YY", className: "mt-1.5", maxLength: 5 })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "cvv", children: "CVV" }),
              /* @__PURE__ */ jsx(Input, { id: "cvv", value: card.cvv, onChange: (e) => setCard({
                ...card,
                cvv: e.target.value.replace(/\D/g, "").slice(0, 4)
              }), placeholder: "123", className: "mt-1.5", maxLength: 4 })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "mphone", children: [
              METHODS.find((m) => m.id === method)?.label,
              " account number"
            ] }),
            /* @__PURE__ */ jsx(Input, { id: "mphone", inputMode: "numeric", value: mobile.phone, onChange: (e) => setMobile({
              ...mobile,
              phone: e.target.value.replace(/\D/g, "").slice(0, 11)
            }), placeholder: "01XXXXXXXXX", className: "mt-1.5" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "mpin", children: "PIN" }),
            /* @__PURE__ */ jsx(Input, { id: "mpin", type: "password", value: mobile.pin, onChange: (e) => setMobile({
              ...mobile,
              pin: e.target.value.replace(/\D/g, "").slice(0, 6)
            }), placeholder: "••••", className: "mt-1.5", maxLength: 6 })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "A confirmation OTP would normally be sent to your ",
            METHODS.find((m) => m.id === method)?.label,
            " number."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", className: "mt-7 w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mr-2" }),
          " Pay ৳ ",
          amount.toLocaleString(),
          " securely"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-center gap-4 text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-teal" }),
            " 256-bit encryption"
          ] }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "PCI-DSS compliant" })
        ] })
      ] }, "form") }) }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-24 rounded-3xl bg-navy text-white p-6 md:p-7 shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-white/60", children: "Order summary" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-xl font-semibold", children: booking?.service ?? "Home Care Service" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-white/75", children: [
          booking?.duration ?? "Hourly",
          " · Dhaka"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-3 text-sm", children: [
          /* @__PURE__ */ jsx(Row, { k: "Patient", v: booking?.name ?? "—" }),
          /* @__PURE__ */ jsx(Row, { k: "Phone", v: booking?.phone ?? "—" }),
          /* @__PURE__ */ jsx(Row, { k: "Start date", v: booking?.date || "Earliest available" }),
          /* @__PURE__ */ jsx(Row, { k: "Time slot", v: booking?.time || "Flexible" }),
          /* @__PURE__ */ jsx(Row, { k: "Address", v: booking?.address || "Confirmed by phone" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-white/15 pt-5 grid gap-2 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-white/80", children: [
            /* @__PURE__ */ jsx("span", { children: "Service estimate" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "৳ ",
              amount.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-white/80", children: [
            /* @__PURE__ */ jsx("span", { children: "Service charge" }),
            /* @__PURE__ */ jsx("span", { children: "৳ 0" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between text-base font-semibold", children: [
            /* @__PURE__ */ jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "৳ ",
              amount.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-white/70", children: "Final invoice may vary based on patient condition and on-site assessment by the care advisor." })
      ] }) })
    ] }) })
  ] });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "text-white/60", children: k }),
    /* @__PURE__ */ jsx("span", { className: "font-medium text-right max-w-[60%] truncate", children: v })
  ] });
}
function downloadReceipt({
  txn,
  amount,
  booking
}) {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4"
  });
  const W = doc.internal.pageSize.getWidth();
  let y = 56;
  doc.setFillColor(15, 32, 64);
  doc.rect(0, 0, W, 90, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("The ASHMA Home Care", 40, 45);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Payment Receipt", 40, 68);
  doc.text(SITE.phones[0], W - 40, 68, {
    align: "right"
  });
  y = 130;
  doc.setTextColor(20, 20, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Booking Confirmed", 40, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(110, 110, 110);
  doc.text(`Issued: ${(/* @__PURE__ */ new Date()).toLocaleString()}`, 40, y + 16);
  y += 50;
  const rows = [["Order ID", txn], ["Service", booking?.service ?? "Home Care"], ["Time Slot", booking?.time || "Flexible"], ["Start Date", booking?.date || "Earliest available"], ["Duration", booking?.duration ?? "Hourly"], ["Patient", booking?.name ?? "—"], ["Phone", booking?.phone ?? "—"], ["Address", booking?.address || "Confirmed by phone"], ["Amount Paid", `BDT ${amount.toLocaleString()}`], ["Status", "Confirmed"]];
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
    doc.text(wrapped, W - 40, ry, {
      align: "right"
    });
    doc.line(40, ry + 8, W - 40, ry + 8);
  });
  y = y + rows.length * 26 + 30;
  doc.setFillColor(245, 250, 248);
  doc.rect(40, y, W - 80, 60, "F");
  doc.setTextColor(20, 20, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Total Paid", 56, y + 24);
  doc.text(`BDT ${amount.toLocaleString()}`, W - 56, y + 24, {
    align: "right"
  });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(110, 110, 110);
  doc.text("A care advisor will contact you within ~8 minutes.", 56, y + 46);
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text("Thank you for choosing The ASHMA Home Care · Dhaka, Bangladesh", W / 2, doc.internal.pageSize.getHeight() - 30, {
    align: "center"
  });
  doc.save(`ASHMA-Receipt-${txn}.pdf`);
}
export {
  PaymentPage as component
};
