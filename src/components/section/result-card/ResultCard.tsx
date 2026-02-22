import { Flower2, Heart, Waves, Sun, TreeDeciduous } from "lucide-react";
import IconBadge from "../../UI/feature-icon/IconBadge";
import StatusPill from "@/components/UI/status-pill/StatusPill";

const categories = [
  {
    icon: Heart,
    label: "Emotional Regulation"
  },
  {
    icon: Waves,
    label: "Sleep Health"
  },
  {
    icon: Flower2,
    label: "Anxiety"
  },
  {
    icon: Sun,
    label: "Motivation & Interest"
  },
  {
    icon: TreeDeciduous,
    label: "Stress Coping"
  },
  {
    icon: Heart,
    label: "Relationships"
  },
  {
    icon: Waves,
    label: "Trauma Impact"
  },
  {
    icon: Flower2,
    label: "Self Image"
  },
];

const ResultCard = () =>
  categories.map(({icon, label}) => {
    return (
      <div key={label} className="p-5 mt-5 bg-[hsl(var(--background))] shadow-sm rounded-lg">
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
          <StatusPill status="moderate" />
        </div>
        <div>
          <p>{/* Description */}</p>
        </div>
      </div>
    );
  });

export default ResultCard;
