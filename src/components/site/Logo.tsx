import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <img
        src={logoSrc}
        alt="The Ashma Home Care"
        style={{ width: 52, height: 52 }}
        className={`object-contain transition-transform group-hover:scale-105 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
      <span className="leading-tight">
        <span className={`block font-display text-[18px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          The ASHMA
        </span>
        <span className={`block text-[12px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Home Care
        </span>
      </span>
    </Link>
  );
}
