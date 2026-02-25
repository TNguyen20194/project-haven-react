import { Flower2, Heart, Waves, Sun, TreeDeciduous, Wind, HeartHandshake, ShieldAlert } from "lucide-react";
import type { StatusLevel } from "@/components/UI/status-pill/StatusPill";
import type { LucideIcon } from "lucide-react";

export type Category = {
  id: string,
  icon: LucideIcon;
  label: string;
  description: Record<StatusLevel, string>;
  iconClass?: string
};


export const categories: Category[] = [
  {
    id: "emotional-regulation",
    icon: Heart,
    label: "Emotional Regulation",
    description: {
      low: "You seem to manage your emotions well. Mindfulness can further strengthen this.",
      moderate: "Therapy techniques like DBT can offer structured support for emotional regulation.",
        elevated: "Therapy techniques like DBT can offer structured support for emotional regulation.",
        high: "Speaking with a therapist about emotion regulation strategies could be very beneficial.",
    },
    iconClass: "text-[hsl(var(--pink))]"
  },
  {
    id: "sleep-health",
    icon: Waves,
    label: "Sleep Health",
    description: {
       low: "Great sleep habits! Maintain your routine for continued wellness.",
        moderate: "Sleep hygiene improvements and relaxation techniques may help significantly.",
        elevated: "Sleep hygiene improvements and relaxation techniques may help significantly.",
        high: "A therapist can help address underlying causes of sleep disturbances.",
    },
    iconClass: "text-[hsl(var(--blue))]"
  },
  {
    id: "anxiety",
    icon: Wind,
    label: "Anxiety",
    description: {
      low: "You appear to manage worry well. Mindfulness can help maintain this balance.",
        moderate: "Sleep hygiene improvements and relaxation techniques may help significantly.",
        elevated: "Cognitive Behavioral Therapy based approaches are effective for managing recurring anxiety patterns.",
        high: "Professional support can provide tools to manage persistent anxiety effectively.",
    },
    iconClass: "text-[hsl(var(--primary))]"
  },
  {
    id: "motivation-interest",
    icon: Sun,
    label: "Motivation & Interest",
    description: {
      low: "Your motivation levels are healthy. Keep engaging in activities you enjoy!",
        moderate: "Behavioral activation techniques can help re-engage with meaningful activities.",
        elevated: "Behavioral activation techniques can help re-engage with meaningful activities.",
        high: "A therapist can help explore what may be underlying your loss of interest.",
    },
     iconClass: "text-[hsl(var(--accent))]"
  },
  {
    id: "stress-coping",
    icon: TreeDeciduous,
    label: "Stress Coping",
    description: {
       low: "You have strong coping skills. Continue building on what works for you.",
        moderate: "Learning structured stress management techniques could be very beneficial.",
        elevated: "Learning structured stress management techniques could be very beneficial.",
        high: "A therapist can help you develop healthier coping mechanisms tailored to you.",
    },
     iconClass: "text-[hsl(var(--primary))]"
  },
  {
    id: "relationships",
    icon: HeartHandshake,
    label: "Relationships",
    description: {
          low: "Your relationships seem supportive. Nurturing them continues to benefit well-being.",
        moderate: "Exploring relationship patterns in therapy can improve connection and understanding.",
        elevated: "Exploring relationship patterns in therapy can improve connection and understanding.",
        high: "Professional support can help navigate relationship difficulties and build healthier bonds.",
    },
     iconClass: "text-[hsl(var(--coral))]"
  },
  {
    id: "trauma-impact",
    icon: ShieldAlert,
    label: "Trauma Impact",
    description: {
      low: "Past events aren't currently affecting you significantly. That's a positive sign.",
        moderate: "Trauma-informed therapy approaches like EMDR may be helpful for you.",
        elevated: "Trauma-informed therapy approaches like EMDR may be helpful for you.",
        high: "Specialized trauma therapy can provide safe, structured support for healing.",
    },
     iconClass: "text-[hsl(var(--blue))]"
  },
  {
    id: "self-image",
    icon: Flower2,
    label: "Self Image",
    description: {
      low: "You have a generally positive self-image. Self-compassion practices can nurture this.",
        moderate: "CBT techniques can help challenge and reframe persistent negative self-talk.",
        elevated: "CBT techniques can help challenge and reframe persistent negative self-talk.",
        high: "A therapist can help build a healthier, more compassionate self-relationship.",
    },
    iconClass: "text-[hsl(var(--pink))]"
  },
];