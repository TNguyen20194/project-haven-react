import { Flower2, Heart, Waves, Sun, TreeDeciduous, Wind, HeartHandshake, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Category = {
  id: string,
  icon: LucideIcon;
  label: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "emotional-regulation",
    icon: Heart,
    label: "Emotional Regulation",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
  {
    id: "sleep-health",
    icon: Waves,
    label: "Sleep Health",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
  {
    id: "anxiety",
    icon: Wind,
    label: "Anxiety",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
  {
    id: "motivation-interest",
    icon: Sun,
    label: "Motivation & Interest",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
  {
    id: "stress-coping",
    icon: TreeDeciduous,
    label: "Stress Coping",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
  {
    id: "relationships",
    icon: HeartHandshake,
    label: "Relationships",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?",
  },
  {
    id: "trauma-impact",
    icon: ShieldAlert,
    label: "Trauma Impact",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
  {
    id: "self-image",
    icon: Flower2,
    label: "Self Image",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem dolores quia officiis saepe minus error aliquid recusandae sed, illum ea dolor quisquam adipisci ut nesciunt dolorem modi! Aspernatur, rerum?"
  },
];