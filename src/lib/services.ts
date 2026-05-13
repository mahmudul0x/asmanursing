import nursing from "@/assets/service-nursing.jpg";
import physio from "@/assets/service-physio.jpg";
import elderly from "@/assets/service-elderly.jpg";
import baby from "@/assets/service-baby.jpg";
import dementia from "@/assets/service-dementia.jpg";
import pneumonia from "@/assets/service-pneumonia.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
  icon: "nursing" | "physio" | "elderly" | "baby" | "dementia" | "pneumonia";
  category: "Nursing" | "Therapy" | "Elderly" | "Baby & Mother" | "Specialized";
  tags: string[];
  price: { from: number; unit: string };
};

export const SERVICES: Service[] = [
  {
    slug: "nursing",
    title: "Professional Home Nursing",
    short: "Hospital-grade nursing care delivered at home.",
    description:
      "Registered nurses provide medication management, wound care, IV therapy, vitals monitoring and post-surgery recovery support — all in the comfort of your home.",
    benefits: ["Registered nurses", "Post-surgery recovery", "Wound & IV care", "Vitals monitoring"],
    image: nursing, icon: "nursing",
    category: "Nursing", tags: ["nurse", "iv", "wound", "post-surgery", "medication"],
    price: { from: 1500, unit: "/ visit" },
  },
  {
    slug: "physiotherapy",
    title: "Home Physiotherapy",
    short: "Recovery and mobility therapy at home.",
    description:
      "Certified physiotherapists guide stroke rehab, pain management and mobility therapy with personalized care plans that fit your space and pace.",
    benefits: ["Stroke rehabilitation", "Pain management", "Mobility therapy", "Personalized plan"],
    image: physio, icon: "physio",
    category: "Therapy", tags: ["physio", "stroke", "rehab", "mobility", "pain"],
    price: { from: 1200, unit: "/ session" },
  },
  {
    slug: "elderly-care",
    title: "Elderly Care",
    short: "Daily companionship, dignity and safety.",
    description:
      "Compassionate caregivers help with bathing, mobility, meals, medication reminders and meaningful companionship — keeping elders safe and engaged.",
    benefits: ["Daily living assistance", "Companionship", "Medication reminders", "Safety monitoring"],
    image: elderly, icon: "elderly",
    category: "Elderly", tags: ["elderly", "senior", "companionship", "daily living"],
    price: { from: 1400, unit: "/ 12-hr shift" },
  },
  {
    slug: "baby-care",
    title: "Baby & Mother Care",
    short: "Gentle care for newborns and new mothers.",
    description:
      "Trained baby nurses support newborn care, feeding routines, postpartum recovery and infant well-being so families rest with peace of mind.",
    benefits: ["Newborn care", "Postpartum support", "Feeding routines", "Infant safety"],
    image: baby, icon: "baby",
    category: "Baby & Mother", tags: ["baby", "newborn", "mother", "postpartum"],
    price: { from: 1800, unit: "/ 12-hr shift" },
  },
  {
    slug: "dementia-care",
    title: "Dementia Home Care",
    short: "Specialized memory care with empathy.",
    description:
      "Dementia-trained caregivers create calming routines, manage behavior compassionately and provide emotional support tailored to each patient.",
    benefits: ["Memory-trained caregivers", "Calm routines", "Behavior support", "Family guidance"],
    image: dementia, icon: "dementia",
    category: "Specialized", tags: ["dementia", "memory", "alzheimer"],
    price: { from: 2000, unit: "/ 12-hr shift" },
  },
  {
    slug: "pneumonia-care",
    title: "Pneumonia Patient Care",
    short: "Specialized respiratory monitoring at home.",
    description:
      "Skilled respiratory care including nebulization, oxygen therapy, vitals monitoring and timely medical alerts for pneumonia patients.",
    benefits: ["Oxygen & nebulizer support", "Vitals monitoring", "Medication adherence", "Doctor coordination"],
    image: pneumonia, icon: "pneumonia",
    category: "Specialized", tags: ["pneumonia", "oxygen", "respiratory", "nebulizer"],
    price: { from: 1700, unit: "/ visit" },
  },
];
