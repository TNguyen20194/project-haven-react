import { Heart } from "lucide-react";
import IconBadge from "../../UI/feature-icon/IconBadge";
import StatusPill from "@/components/UI/status-pill/StatusPill";

const ResultCard = () => {
  return (
    <div className="p-5 mt-5 bg-[hsl(var(--background))] shadow-sm rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <IconBadge icon={Heart}  iconClassName={`w-6 h-6`}
            wrapperClassName="w-12 h-12 rounded-full"/>
          <h4 className="text-[1.12rem] text-[hsl(var(--green-1))] font-medium">Emotional Regulation</h4>
        </div>
        <StatusPill status="Moderate"/>
      </div>
      <div>
        <p>{/* Description */}</p>
      </div>
    </div>
  );
};

export default ResultCard;
