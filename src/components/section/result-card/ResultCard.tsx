import IconBadge from "../../UI/feature-icon/IconBadge";
import StatusPill from "@/components/UI/status-pill/StatusPill";
import type { LucideIcon } from "lucide-react";
import type { StatusLevel } from "@/components/UI/status-pill/StatusPill";


type ResultCardProps = {
  icon: LucideIcon;
  label: string;
  description: string;
  status: StatusLevel;
};

const ResultCard = ({ icon, label, description, status } : ResultCardProps) => (
  <div className="p-5 bg-[hsl(var(--background))] shadow-sm rounded-lg">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <IconBadge
          icon={icon}
          iconClassName={`w-6 h-6`}
          wrapperClassName="w-12 h-12 rounded-full"
        />
        <h4 className="text-[1.12rem] text-[hsl(var(--green-1))] font-medium">
          {label}
        </h4>
      </div>

{/*  <StatusPill status={calculateStatus}/> */}
      <StatusPill status={status}/>
    </div>
    <div className="text-[hsl(var(--green-1))] text-[1rem] mt-5">{description}</div>
  </div>
);
export default ResultCard;
