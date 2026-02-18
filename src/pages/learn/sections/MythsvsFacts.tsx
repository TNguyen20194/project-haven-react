import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Scale } from "lucide-react";

const MythsVsFacts = () => {
  return (
    <section className="p-12 bg-[hsl(var(--background-alt)/0.5)]">
      <div className="max-w-[56rem] mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <IconBadge
            icon={Scale}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Myths vs. Facts</h3>
        </div>
      </div>
    </section>
  );
};

export default MythsVsFacts;
