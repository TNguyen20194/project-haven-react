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
      moderate: "Journaling and deep breathing exercises can help with occasional emotional overwhelm.",
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
        moderate: "Try establishing a consistent bedtime routine and limiting screens before bed.",
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
        moderate: "Grounding techniques and controlled breathing can help with situational anxiety.",
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
        moderate: "Setting small, achievable goals can help rebuild motivation during low periods.",
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
        moderate: "Exploring new coping strategies like exercise or creative outlets may help.",
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
        moderate: "Communication skills practice can strengthen your connections during conflicts.",
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
        moderate: "Gentle self-care practices and grounding techniques can support trauma processing.",
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
        moderate: "Positive affirmations and self-compassion exercises can help with self-doubt.",
        elevated: "Cognitive Behavioral Therapy techniques can help challenge and reframe persistent negative self-talk.",
        high: "A therapist can help build a healthier, more compassionate self-relationship.",
    },
    iconClass: "text-[hsl(var(--pink))]"
  },
];