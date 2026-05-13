import { Link } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-teal text-white shadow-glow">
        <HeartPulse className="h-5 w-5" strokeWidth={2.4} />
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          The ASHMA
        </span>
        <span className={`block text-[11px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Home Care
        </span>
      </span>
    </Link>
  );
}
