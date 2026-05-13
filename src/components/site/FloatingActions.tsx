import { MessageCircle, PhoneCall } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a
        href={`tel:${SITE.phones[0]}`}
        aria-label="Emergency call"
        className="grid h-14 w-14 place-items-center rounded-full bg-emergency text-white shadow-lg animate-pulse-soft"
      >
        <PhoneCall className="h-6 w-6" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
