import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { CircleCheck } from "lucide-react";
import DisclaimerBanner from "@/components/section/DisclaimerBanner";
import ResultCardList from "@/components/section/ResultCardList";
import ProfessionalSupport from "@/components/section/ProfessionalSupport";
import { useAssessmentStore } from "@/store/assessment.store";
import { useNavigate } from "react-router";
import { Loader2 } from "lucide-react";
import Button from "@/components/UI/buttons/CTAbutton";
import { useState } from "react";
import { questions } from "@/data/questions";
import ResultsNotFound from "./ResultsNotFound";

const AssessmentResults = () => {
  const [isResetting, setIsResetting] = useState(false);

  const resetAssessment = useAssessmentStore((state) => state.resetAssessment);
  const navigate = useNavigate();

  // Check if assessment is completed
  // If not, direct to ResultsNotFound page
  const answers = useAssessmentStore((state) => state.answers);
  const hasCompletedAssessment =
    Object.keys(answers).length === questions.length;

  if (!hasCompletedAssessment) {
    return <ResultsNotFound />;
  }

  const handleResetAssessment = () => {
    setIsResetting(true);

    setTimeout(() => {
      resetAssessment();
      navigate("/assessment");
    }, 500);
  };

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

        <DisclaimerBanner
          description={
            <>
              This self-assessment is for educational and informational purposes
              only. It is not a clinical diagnosis or a substitute for
              professional medical advice.
              <br />
              <br />
              If you are experiencing distress or concerns about your mental
              health, we encourage you to speak with a licensed mental health
              professional.
            </>
          }
        />

        <ResultCardList />

        <ProfessionalSupport />

        <div className="text-center mt-10">
          <Button
            variant="secondary"
            size="md"
            aria-label="Retake Assessment"
            className="hover:bg-[hsl(var(--accent))]! hover:text-[hsl(var(--white))]! hover:dark:text-[hsl(var(--green-1-reversed))]!"
            onClick={handleResetAssessment}
            disabled={isResetting}
          >
            {isResetting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Resetting...
              </span>
            ) : (
              "Retake Assessment"
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentResults;
