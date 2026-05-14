import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <img
        src={logoSrc}
        alt="The Ashma Home Care"
        width={56}
        height={56}
        className={`h-14 w-14 object-contain transition-transform group-hover:scale-105 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
      <span className="leading-tight">
        <span className={`block font-display text-[16px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          The ASHMA
        </span>
        <span className={`block text-[11px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Home Care
        </span>
      </span>
    </Link>
  );
}
