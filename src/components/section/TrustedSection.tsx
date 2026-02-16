import { Flower2, Heart, Waves } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string
}

const features: Feature[] = [
  {
    title: "It's Completely Confidential",
    description: "Everything you share stays between you and your therapist",
    icon: Heart,
    className: "text-[hsl(var(--pink))]"
  },
  {
    title: "No Judgment, Ever",
    description: "Therapists create a safe space for honest self-exploration",
    icon: Flower2,
    className: "text-[hsl(var(--accent))]"
  },
  {
    title: "You Set the Pace",
    description: "Therapy moves at your comfort level—there's no rush",
    icon: Waves,
    className: "text-[hsl(var(--blue))]"
  },
];

const TrustedSection = () => {
  const defaultIconColor = "text-[hsl(var(--primary))]";
  const iconWrapper =
    "flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))]";
  return (
    <section className="space-y-4">
      {features.map(
        ({
          title,
          description,
          icon: Icon,
          className
        }) => {
            const iconColor = className ?? defaultIconColor;
          return (
            <div
              key={title}
              className="grid grid-cols-[auto_1fr] gap-4 items-start"
            >
              <div className={iconWrapper}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div>
                <h4 className="font-medium">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
};

export default TrustedSection;
