import IconBadge from "../../UI/feature-icon/IconBadge";
import StatusPill from "@/components/UI/status-pill/StatusPill";
import type { LucideIcon } from "lucide-react";
import type { StatusLevel } from "@/components/UI/status-pill/StatusPill";

type ResultCardProps = {
  icon: LucideIcon;
  label: string;
  description: string;
  status: StatusLevel;
  iconClass?: string
};

const ResultCard = ({ icon, label, description, status, iconClass }: ResultCardProps) => (
  <div className="p-5 bg-[hsl(var(--background))] shadow-sm rounded-lg">
    <div className="flex flex-col gap-6 justify-between items-center sm:flex-row">
      <div className="flex items-center gap-2">
        <IconBadge
          icon={icon}
          iconClassName={`w-6 h-6 ${iconClass}`}
          wrapperClassName="w-12 h-12 rounded-full"
        />
        <h4 className="text-[1.12rem] text-[hsl(var(--green-1))] font-medium">
          {label}
        </h4>
      </div>

      {/*  <StatusPill status={calculateStatus}/> */}
      <StatusPill status={status} />
    </div>
    <div className="text-[hsl(var(--green-1))] text-[1rem] mt-5">
      {description}
    </div>
  </div>
);
export default ResultCard;
