import Button from "../UI/buttons/CTAbutton";
import IconBadge from "../UI/feature-icon/IconBadge";
import { Flower2, type LucideIcon } from "lucide-react";
import { Link } from "lucide-react";

interface SectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  primaryCta: { label: string; href: string};
  secondaryCta: {label: string; href: string}
};

const CTASection = ({
    icon,
    title,
    description,
    primaryCta,
    secondaryCta
} : SectionProps) => {
    <section className="consultation section-container">
      <div className="consultation__inner">
        <div className="flex justify-center">
          <IconBadge
            icon={icon}
            iconClassName="text-[hsl(var(--white))] w-8 h-8"
            wrapperClassName="bg-[hsl(var(--secondary)/0.16)] w-16 h-16 rounded-full border-none mb-6"
          />
        </div>

        <h2 className="section-heading mb-6">{title}</h2>

        <p>
          {description}
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 mt-9">
          <span className="h-px w-10 bg-[hsl(var(--white)/0.5)]"></span>
          <Flower2 className="w-5 h-5 text-[hsl(var(--soft-white))]" />
          <span className="h-[2px] w-10 bg-[hsl(var(--white)/0.5)]"></span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 ">
          { primaryCta && (
            <Button
            type="button"
            aria-label={primaryCta.label}
            variant="secondary"
            size="lg"
            className="w-[294px]"
          >
            {primaryCta.label}
          </Button>)}
          { secondaryCta && (
            <Button
            asChild
            aria-label={secondaryCta.label}
            variant="outline"
            size="lg"
          >
            <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>)}
        </div>
      </div>
    </section>
};

export default CTASection;

