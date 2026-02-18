import {
  Brain,
  MessageCircle,
  Heart,
  Users,
  Sparkles,
  Shield,
  type LucideIcon,
} from "lucide-react";
import IconBadge from "../UI/feature-icon/IconBadge";

interface TherapyCatergory {
  icon: LucideIcon;
  title: string;
  body: string;
  iconClass?: string
}

const therapyCards: TherapyCatergory[] = [
  {
    icon: Brain,
    title: "Cognitive Behavioral Therapy (CBT)",
    body: "Focuses on identifying and changing negative thought patterns. CBT helps you recognize how your thoughts influence your feelings and behaviors, and teaches practical strategies to reframe unhelpful thinking.",
    iconClass: "text-[hsl(var(--teal))]"
  },
  {
    icon: MessageCircle,
    title: "Talk Therapy (Psychotherapy)",
    body: "A conversational approach where you explore your thoughts, feelings, and experiences with a trained professional. It's the most common form of therapy and can address a wide range of concerns.",
    iconClass: "text-[hsl(var(--coral))]"
  },
  {
    icon: Heart,
    title: "Dialectical Behavior Therapy (DBT)",
    body: "Combines cognitive techniques with mindfulness practices. DBT is especially helpful for managing intense emotions, improving relationships, and building distress tolerance skills.",
    iconClass: "text-[hsl(var(--pink))]"
  },
  {
    icon: Users,
    title: "Group Therapy",
    body: "Involves one or more therapists working with several people at the same time. It provides a supportive environment where you can share experiences, learn from others, and practice social skills.",
     iconClass: "text-[hsl(var(--primary))]"
  },
  {
    icon: Sparkles,
    title: "Mindfulness-Based Therapy",
    body: "Incorporates meditation and awareness exercises to help you stay present. It's effective for stress reduction, anxiety, depression, and developing a healthier relationship with your thoughts.",
    iconClass: "text-[hsl(var(--accent))]"
  },
  {
    icon: Shield,
    title: "Trauma-Informed Therapy",
    body: "Specifically designed to address the impact of traumatic experiences. Approaches like EMDR and somatic experiencing help process trauma safely and build resilience.",
    iconClass: "text-[hsl(var(--blue))]"
  },
];

const TherapyCategoriesSection = () => {
  return therapyCards.map(({ icon, title, body, iconClass }) => {
    return (
      <div key={title} className="feature-card">
        <div className="flex items-center justify-items-start gap-3">
          <IconBadge
            icon={icon}
            iconClassName={`"w-6 h-6 ${iconClass}`}
            wrapperClassName="w-12 h-12 rounded-xl"
          />
          <h4 className="font-semibold text-[1.12rem] text-[hsl(var(--green-1))] text-left">{title}</h4>
        </div>

        <p>{body}</p>
      </div>
    );
  });
};

export default TherapyCategoriesSection;
