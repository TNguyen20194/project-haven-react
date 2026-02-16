import {
  Flower2,
  Sun,
  TreeDeciduous,
  type LucideIcon,
} from "lucide-react";


interface Card {
  icon: LucideIcon;
  title: string;
  body: string;
  iconClass?: string;
}

const educationCards: Card[] = [
  {
    icon: Flower2,
    title: "Free Self-Assessment",
    body: "Take a quick, anonymous questionnaire to reflect on your emotional well-being and get personalized educational insights",
    iconClass: "icon-flower",
  },
  {
    icon: TreeDeciduous,
    title: "Understand Therapy Types",
    body: "Learn about different therapy approaches—CBT, mindfulness, talk therapy—and find what might resonate with you.",
    iconClass: "icon-tree",
  },
  {
    icon: Sun,
    title: "Connect With a Therapist",
    body: "If you decide to explore therapy further, we make it easy to book a consultation with a licensed professional.",
    iconClass: "icon-sun",
  },
];

const EducationCard = () => {
    return (
          educationCards.map(({ icon: Icon, title, body, iconClass }) => {
            return (
              <div key={title} className="feature-card">
                <div className="flex items-center mt-[1rem] justify-center w-15 h-15 rounded-2xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))]">
                  <Icon className={`h-7 w-7 ${iconClass ?? ""}`} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })
    )
};

export default EducationCard;