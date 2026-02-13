import "./badge.style.css";

type BadgeIcon = {
  icon?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
};

const Badge = ({
  icon: Icon,
  children,
  className = "",
  iconClassName = "",
}: BadgeIcon) => {
  return (
    <div className={`title-badge rounded-full ${className}`}>
      {Icon && <Icon className={`w-4 h-4 ${iconClassName}`} />}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
