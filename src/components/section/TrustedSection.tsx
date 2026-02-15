import { Flower2, Heart, Waves } from "lucide-react";

interface Feature {
    title: string,
    description: string,
    icon: React.ElementType,
    iconClassName: string,
    iconBgClassName: string
};

const features: Feature[] = [
    {
        title: "It's Completely Confidential",
        description: "Everything you share stays between you and your therapist",
        icon: Heart,
        iconClassName: "text-[hsl(var(--primary))]",
        iconBgClassName: "flex items-center mt-[1rem] justify-center w-15 h-15 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))]"
    },
    {
        title: "No Judgment, Ever",
        description: "Therapists create a safe space for honest self-exploration",
        icon: Flower2,
        iconClassName: "text-[hsl(var(--primary))]",
        iconBgClassName: "flex items-center mt-[1rem] justify-center w-15 h-15 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))]"
    },
    {
        title: "You Set the Pace",
        description: "Therapy moves at your comfort level—there's no rush",
        icon: Waves,
        iconClassName: "text-[hsl(var(--primary))]",
        iconBgClassName: "flex items-center mt-[1rem] justify-center w-15 h-15 rounded-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))]"
    }
]

const TrustedSection = () => {
    return (
        <div>
            {
                features.map(({title, description, icon: Icon, iconClassName, iconBgClassName}) => {
                    return(
                    <div key={title} className="grid grid-cols-[auto_1fr] gap-4 items-start">
                        <div className={`${iconBgClassName}`}>
                            <Icon className={`w-6 h-6 ${iconClassName}`} />
                        </div>
                        <div>
                            <div>
                                {title}
                            </div>
                            <div>
                                {description}
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default TrustedSection;