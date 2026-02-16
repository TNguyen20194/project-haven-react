import { Flower2, Heart, Waves } from "lucide-react";
import IconBadge from "../UI/feature-icon/IconBadge";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  iconClassName?: string;
}

const features: Feature[] = [
  {
    title: "It's Completely Confidential",
    description: "Everything you share stays between you and your therapist",
    icon: Heart,
    iconClassName: "text-[hsl(var(--pink))]",
  },
  {
    title: "No Judgment, Ever",
    description: "Therapists create a safe space for honest self-exploration",
    icon: Flower2,
    iconClassName: "text-[hsl(var(--accent))]",
  },
  {
    title: "You Set the Pace",
    description: "Therapy moves at your comfort level—there's no rush",
    icon: Waves,
    iconClassName: "text-[hsl(var(--blue))]",
  },
];

const TrustedSection = () => {
  return (
    <section className="space-y-4">
      {features.map(({ title, description, icon, iconClassName }) => {
        return (
          <div
            key={title}
            className="grid grid-cols-[auto_1fr] gap-4 items-start"
          >
            <IconBadge
              icon={icon}
              iconClassName={iconClassName}
              wrapperClassName="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-[hsl(var(--green-1))]">{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TrustedSection;
