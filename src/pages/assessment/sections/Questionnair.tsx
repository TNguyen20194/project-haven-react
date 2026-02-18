import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { ClipboardCheck} from "lucide-react";

const Questionnaire = () => {
  return (
    <section className="px-6 py-12 bg-[hsl(var(--background-alt)/0.5)]">
      <div className="max-w-[56rem] mx-auto ">
        <div className="flex items-center gap-3 mb-5">
          <IconBadge
            icon={ClipboardCheck}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Explore Your Mental Wellness</h3>
        </div>
        <p className="p-text">
          Answer a few questions to learn more about your mental wellness. This is completely anonymous and free.
        </p>
      </div>
    </section>
  );
};

export default Questionnaire;
