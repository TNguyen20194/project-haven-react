import IconBadge from "../UI/feature-icon/IconBadge";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface EducationCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  iconClass?: string;
};

const EducationCard = ({
  icon,
  title,
  body,
  iconClass
}: EducationCardProps) => {
    return (
      <motion.div
      className="feature-card"
      >
        <IconBadge
        icon={icon}
        iconClassName={`${iconClass} w-7 h-7`}
        wrapperClassName="w-15 h-15 rounded-2xl mt-[1rem]"
        />
        <h3>{title}</h3>
        <p>{body}</p>
      </motion.div>
    );
};

export default EducationCard;
