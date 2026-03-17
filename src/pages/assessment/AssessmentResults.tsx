import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { CircleCheck } from "lucide-react";
import DisclaimerBanner from "@/components/section/DisclaimerBanner";
import ResultCardList from "@/components/section/ResultCardList";
import ProfessionalSupport from "@/components/section/ProfessionalSupport";
import { useAssessmentStore } from "@/store/assessment.store";
import { useNavigate } from "react-router";
import Button from "@/components/UI/buttons/CTAbutton";

const AssessmentResults = () => {
  const resetAssessment = useAssessmentStore((state) => state.resetAssessment);
  const navigate = useNavigate();
  const answers = useAssessmentStore((state) => state.answers);

  const handleResetAssessment = () => {
    resetAssessment();
    navigate("/assessment");
  };

  console.log(answers);

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

        <div className="text-center mt-10">
          <Button
            variant="secondary"
            size="md"
            aria-label="Retake Assessment"
            className="hover:bg-[hsl(var(--accent))]! hover:text-[hsl(var(--white))]! hover:dark:text-[hsl(var(--green-1-reversed))]!"
            onClick={handleResetAssessment}
          >
            Retake Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentResults;
