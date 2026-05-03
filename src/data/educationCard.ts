import { Flower2, Sun, TreeDeciduous, type LucideIcon } from "lucide-react";

interface Card {
    id: string,
    icon: LucideIcon;
    title: string;
    body: string;
    iconClass?: string;
}

export const educationCard: Card[] = [
  {
    id: "education-1",
    icon: Flower2,
    title: "Take the Assessment",
    body: "Take a quick, anonymous questionnaire to reflect on your emotional well-being and get personalized educational insights",
    iconClass: "text-[hsl(var(--pink))]",
  },
  {
    id: "education-2",
    icon: TreeDeciduous,
    title: "Get Personalized Insights",
    body: "Learn about different therapy approaches, such as CBT, mindfulness, and talk therapy, and discover what may resonate with you.",
    iconClass: "text-[hsl(var(--primary))]",
  },
  {
    id: "education-3",
    icon: Sun,
    title: "Connect When You're Ready",
    body: "If you decide to explore therapy further, we make it easy to book a consultation with a licensed professional.",
    iconClass: "text-[hsl(var(--accent))]",
  },
];