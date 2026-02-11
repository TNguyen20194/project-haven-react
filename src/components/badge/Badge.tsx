import "./badge.style.css"

type BadgeIcon = {
    icon?: React.ElementType,
    children: React.ReactNode,
    className?: string
}

const Badge = (
    { icon: Icon, children, className="" } : BadgeIcon
) => {
  return (
    <div className={`title-badge rounded-full ${className}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
