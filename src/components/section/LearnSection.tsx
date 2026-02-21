import { Flower2, Sun, TreeDeciduous, type LucideIcon } from "lucide-react";

import IconBadge from "../UI/feature-icon/IconBadge";

interface Card {
  icon: LucideIcon;
  title: string;
  body: string;
  iconClass?: string;
}

const educationCards: Card[] = [
  {
    icon: Flower2,
    title: "Take the Assessment",
    body: "Take a quick, anonymous questionnaire to reflect on your emotional well-being and get personalized educational insights",
    iconClass: "text-[hsl(var(--pink))]",
  },
  {
    icon: TreeDeciduous,
    title: "Get Personalized Insights",
    body: "Learn about different therapy approaches—CBT, mindfulness, talk therapy—and find what might resonate with you.",
    iconClass: "text-[hsl(var(--primary))]",
  },
  {
    icon: Sun,
    title: "Connect When You're Ready",
    body: "If you decide to explore therapy further, we make it easy to book a consultation with a licensed professional.",
    iconClass: "text-[hsl(var(--accent))]",
  },
];

const EducationCard = () => {
  return educationCards.map(({ icon, title, body, iconClass }) => {
    return (
      <div key={title} className="feature-card">
        <IconBadge 
        icon={icon} 
        iconClassName={`${iconClass} w-7 h-7`}
        wrapperClassName="w-15 h-15 rounded-2xl mt-[1rem]"
        />
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  });
};

export default EducationCard;
