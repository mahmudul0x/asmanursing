export const SITE = {
  name: "The ASHMA Home Care",
  tagline: "Professional Home Nursing & Caregiver Services",
  phones: ["01836402287", "01756-427804"],
  email: "theashmah@gmail.com",
  whatsapp: "8801836402287",
  address: "50/1 Abdul Aziz Road, Norda, Bashundhara, Dhaka, Bangladesh",
  serviceAreas: ["Khilgaon", "Shahjahanpur", "Nadda", "Kalachandpur", "Bashundhara"],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/booking", label: "Book" },
  { to: "/blog", label: "Health Tips" },
  { to: "/contact", label: "Contact" },
] as const;

export const whatsappLink = (msg = "Hello, I'd like to book a home care service.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
