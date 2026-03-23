import IconBadge from "../UI/feature-icon/IconBadge";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  iconClassName?: string;
}

const TrustedSection = ({
  title,
  description,
  icon,
  iconClassName,
}: FeatureCardProps) => {
  return (
      <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
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
};

export default TrustedSection;
