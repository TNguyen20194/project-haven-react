import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { CircleCheck } from "lucide-react";
import DisclaimerBanner from "@/components/section/DisclaimerBanner";
import ResultCardList from "@/components/section/ResultCardList";
import ProfessionalSupport from "@/components/section/ProfessionalSupport";

const AssessmentResult = () => {
  return (
    <section className="relative z-10 px-6 py-10 overflow-hidden">
      <div className="relative z-10 max-w-[48rem] mx-auto ">
        <div className="flex items-center gap-3 mb-5">
          <IconBadge
            icon={CircleCheck}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Your Self-Assessment Results</h3>
        </div>
        <p className="p-text">
          Here's a summary based on your responses. This is for educational
          purposes only and is not a diagnosis.
        </p>

        <DisclaimerBanner />

        <ResultCardList />

        <ProfessionalSupport />
      </div>
    </section>
  );
};

export default AssessmentResult;
