import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-24 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${SITE.phones[0]}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-primary"
          >
            <Phone className="h-4 w-4" /> {SITE.phones[0]}
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">Book Care</a>
          </Button>
        </div>
        <button
          aria-label="Menu"
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-border bg-card"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-4 py-4 grid gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
                activeProps={{ className: "bg-primary-soft text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline">
                <a href={`tel:${SITE.phones[0]}`}><Phone className="h-4 w-4 mr-1" />Call</a>
              </Button>
              <Button asChild className="bg-primary text-primary-foreground">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
