import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <img
        src={logoSrc}
        alt="The Ashma Home Care"
        style={{ width: 90, height: 90 }}
        className={`object-contain transition-transform group-hover:scale-105 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
