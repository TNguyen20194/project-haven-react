import { Flower2, Heart, Waves } from "lucide-react";

interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    iconClassName?: string;
}

export const features: Feature[] = [
  {
    id: "feature-1",
    title: "It's Completely Confidential",
    description: "Everything you share stays between you and your therapist",
    icon: Heart,
    iconClassName: "text-[hsl(var(--pink))]",
  },
  {
    id: "feature-2",
    title: "No Judgment, Ever",
    description: "Therapists create a safe space for honest self-exploration",
    icon: Flower2,
    iconClassName: "text-[hsl(var(--accent))]",
  },
  {
    id: "feature-3",
    title: "You Set the Pace",
    description: "Therapy moves at your comfort level. There's no rush!",
    icon: Waves,
    iconClassName: "text-[hsl(var(--blue))]",
  },
];