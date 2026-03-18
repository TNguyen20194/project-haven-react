import {
  Brain,
  MessageCircle,
  Heart,
  Users,
  Leaf,
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
    body: "Focuses on identifying and changing unhelpful thought patterns. CBT helps you understand how thoughts, emotions, and behaviors are connected, and teaches practical skills to develop more balanced thinking.",
    iconClass: "text-[hsl(var(--accent))]"
  },
  {
    icon: MessageCircle,
    title: "Psychotherapy (Talk Therapy)",
    body: "A collaborative process where you explore thoughts, emotions, and experiences with a trained professional. It is widely used to support a range of mental health concerns.",
    iconClass: "text-[hsl(var(--coral))]"
  },
  {
    icon: Heart,
    title: "Dialectical Behavior Therapy (DBT)",
    body: "Combines cognitive techniques with mindfulness practices. DBT is often used to help manage intense emotions, improve relationships, and build coping skills such as distress tolerance.",
    iconClass: "text-[hsl(var(--pink))]"
  },
  {
    icon: Users,
    title: "Group Therapy",
    body: "Involves working with one or more therapists alongside others. It provides a supportive space to share experiences, learn from peers, and practice interpersonal skills.",
     iconClass: "text-[hsl(var(--primary))]"
  },
  {
    icon: Leaf,
    title: "Mindfulness-Based Approaches",
    body: "Use meditation and awareness practices to help you stay present. These approaches can support stress reduction, emotional regulation, and a healthier relationship with thoughts.",
    iconClass: "text-[hsl(var(--teal))]"
  },
  {
    icon: Shield,
    title: "Trauma-Informed Therapy",
    body: "An approach that recognizes the impact of trauma on mental health. It focuses on safety, trust, and empowerment while supporting individuals in processing difficult experiences.",
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

        <p className="!font-normal">{body}</p>
      </div>
    );
  });
};

export default TherapyCategoriesSection;
