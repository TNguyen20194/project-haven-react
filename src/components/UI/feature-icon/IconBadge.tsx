interface IconBadgeProps {
  icon: React.ElementType;
  iconClassName?: string;
  wrapperClassName?: string;
}

const default_wrapper =
  "flex items-center justify-center shrink-0 bg-[hsl(var(--muted))] border border-[hsl(var(--border))]";

const default_icon = "w-5 h-5";

const IconBadge = ({
  icon: Icon,
  iconClassName = "",
  wrapperClassName = "",
} : IconBadgeProps) => {
  return (
    <div className={`${default_wrapper} ${wrapperClassName}`}>
      <Icon className={`${default_icon} ${iconClassName}`} />
    </div>
  );
};

export default IconBadge;
