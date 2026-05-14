import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group shrink-0">
      <img
        src={logoSrc}
        alt="The Ashma Home Care"
        style={{ width: 52, height: 52 }}
        className={`object-contain transition-transform group-hover:scale-105 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
      {/* Vertical divider line */}
      <span className={`w-px self-stretch mx-0.5 ${light ? "bg-white/30" : "bg-border"}`} />
      <span className="leading-none flex flex-col gap-0.5">
        <span
          className={`font-display font-extrabold tracking-tight leading-none ${
            light ? "text-white" : "text-navy"
          }`}
          style={{ fontSize: 17, letterSpacing: "-0.02em" }}
        >
          The <span className={light ? "text-teal" : "text-primary"}>ASHMA</span>
        </span>
        <span
          className={`font-sans font-semibold uppercase tracking-[0.22em] leading-none ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
          style={{ fontSize: 9.5 }}
        >
          Home Care
        </span>
      </span>
    </Link>
  );
}
