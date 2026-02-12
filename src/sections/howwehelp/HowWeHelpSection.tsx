import "./howwehelp.style.css";
import { Flower2, Sparkles, Sun, TreeDeciduous, type LucideIcon } from "lucide-react";
import Badge from "../../components/badge/Badge";

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
    iconClass: "icon-flower"
  },
  {
    icon: TreeDeciduous,
    title: "Understand Therapy Types",
    body: "Learn about different therapy approaches—CBT, mindfulness, talk therapy—and find what might resonate with you.",
    iconClass: "icon-tree"
  },
    {
    icon: Sun,
    title: "Connect With a Therapist",
    body: "If you decide to explore therapy further, we make it easy to book a consultation with a licensed professional.",
    iconClass: "icon-sun"
  },
];

const HowWeCanHelpSection = () => {
  return (
    <section className="service-container">
      <div className="service-container__inner">
        <Badge icon={Sparkles} className="mb-[2rem]">Discover What Therapy Can Offer</Badge>
        <h2 className="section-heading mb-5">What You'll Learn</h2>
        <p className="mb-15">Whether you're simply curious or considering therapy, these resources can help you understand what to expect.</p>
        <div className="service-grid">
          {
            educationCards.map(({icon:Icon, title, body, iconClass }) => {
              return (
              <div key={title} className="feature-card">
                <div className="flex items-center mt-[1rem] justify-center w-15 h-15 rounded-2xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))]">
                <Icon className={`h-7 w-7 ${iconClass ?? ""}`}/>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelpSection;
