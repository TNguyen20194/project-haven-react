import { useNavigate } from "react-router";
import Button from "@/components/UI/buttons/CTAbutton";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const ResultsNotFound = () => {
    const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleStartAssessment = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/assessment");
    }, 500);
  };

  return (
    <section className="relative z-10 px-6 py-10 overflow-hidden">
      <div className="relative z-10 max-w-[48rem] mx-auto text-center space-y-6">
        <h2 className="section-heading">No Results Yet</h2>
        <p className="p-text leading-relaxed">
          We could not find any completed assessment results. <br/>Please take our self-assessment questionnaire to see your personalized results.
        </p>
        <Button
          variant="primary"
          size="md"
          aria-label="Take the Assessment"
          onClick={handleStartAssessment}
          disabled={isLoading}
        >
          {isLoading? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Preparing your Assessment...
            </span>
          ) : (
            "Take the Assessment"
          )}
        </Button>
      </div>
    </section>
  );
};

export default ResultsNotFound;
