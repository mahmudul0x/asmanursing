import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo.jpeg";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
      <img
        src={logoSrc}
        alt="The Ashma Home Care"
        width={44}
        height={44}
        className={`h-11 w-11 object-contain rounded-xl transition-transform group-hover:scale-105 bg-white ${
          light ? "brightness-0 invert" : ""
        }`}
      />
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
