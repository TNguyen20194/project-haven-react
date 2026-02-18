import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Scale } from "lucide-react";
import MythFactCard from "@/components/section/MythFactCard";

const MythsVsFacts = () => {
  return (
    <section className="p-14 bg-[hsl(var(--background-alt)/0.5)]">
      <div className="max-w-[56rem] mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <IconBadge
            icon={Scale}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Myths vs. Facts</h3>
        </div>

        <div className="max-w-[72rem] mx-auto text-center">
          <div className="grid gap-5">
          <MythFactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythsVsFacts;
