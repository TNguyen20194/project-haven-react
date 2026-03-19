import { useAssessmentStore } from "@/store/assessment.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/UI/progress";
import { toast } from "sonner";
import Button from "@/components/UI/buttons/CTAbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group";
import { Label } from "@/components/UI/label";
import { questions } from "@/data/questions";
import { Loader2 } from "lucide-react";
import DisclaimerBanner from "@/components/section/DisclaimerBanner";

const Questionnaire = () => {
  const [isFinishing, setIsFinishing] = useState(false);

  const navigate = useNavigate();

  const currentIndex = useAssessmentStore((state) => state.currentIndex);
  const answers = useAssessmentStore((state) => state.answers);

  const setCurrentIndex = useAssessmentStore((state) => state.setCurrentIndex);
  const setAnswers = useAssessmentStore((state) => state.setAnswers);
  const resetIndex = useAssessmentStore((state) => state.resetIndex);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id] ?? "";

  /*
Example

  answers = {
    "emotional-regulation-1" : "2"
    "emotional-regulation-2" : "0"
    "emotional-regulation-3" : "1"
    }

  answers["emotional-regulation-1"] = "2"

  currentQuestion.id = "emotional-regulation-1"
  value = "2"

  */

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const options = Object.entries(currentQuestion.options).sort(
    ([a], [b]) => Number(a) - Number(b),
  );

  const handleSelectOption = (value: string) => {
    setAnswers(currentQuestion.id, value);
  };

  const handleNext = () => {
    // if (!currentAnswer) {
    //   toast.warning("Please answer the question", {
    //     description: "This field is required to continue.",
    //   });
    //   return;
    // }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinishing(true);

      const toastId = toast.loading("Preparing your results...", {
        description: (
          <span className="text-[hsl(var(--green-1))]/80">
            Please wait a moment
          </span>
        ),
        icon: (
          <Loader2 className="h-5 w-5 animate-spin text-[hsl(var(--white))] shrink-0" />
        ),
        duration: Infinity,
      });

      setTimeout(() => {
        toast.success("Your results are ready.", {
          id: toastId,
          description: "Loading your results now.",
          duration: 1200,
        });

        setTimeout(() => {
          resetIndex();
          navigate("/assessment/results");
        }, 1200);
      }, 2000);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mt-6">
      <div className="space-y-2">
        <div className="flex justify-between text-[hsl(var(--green-1))]">
          <span>Progress</span>
          <span>
            <strong>{progress}%</strong>
          </span>
        </div>

        <Progress
          value={progress}
          className="h-4 rounded-full bg-[#dfe5dc] [&>div]:bg-[hsl(var(--primary))]"
        />
      </div>

      <Card className="mt-8 rounded-[10px] border border-[#dcded7] bg-[hsl(var(--white))] shadow-md">
        <CardHeader className="space-y-2 px-6 pb-4 pt-4">
          <CardTitle>
            <h4 className="text-[1.5rem] text-[hsl(var(--green-1))] font-semibold">
              Question {currentIndex + 1} /{questions.length}
            </h4>
          </CardTitle>
          <CardDescription>
            <p className="p-text !text-[1.25rem] text-[hsl(var(--green-1))] leading-relaxed">
              {currentQuestion.prompt}
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 px-6 pb-4">
          <RadioGroup
            value={currentAnswer}
            onValueChange={handleSelectOption}
            className="space-y-4"
          >
            {options.map(([value, label]) => (
              <Label
                key={value}
                htmlFor={`option-${value}`}
                className={`flex cursor-pointer items-center gap-4 rounded-[10px] border px-5 py-4 bg-[hsl(var(--white))] transition ${
                  currentAnswer === value
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--background)/0.8)]"
                    : "border-[#d9d9d3] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--background-alt))]"
                }`}
              >
                <RadioGroupItem
                  value={value}
                  id={`option-${value}`}
                  className="!text-[hsl(var(--primary))]"
                />
                <span className="text-[15px] text-[hsl(var(--green-1))] leading-relaxed font-normal">
                  {label}
                </span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>

        <CardFooter className="flex justify-between px-6 pb-2">
          <Button
            variant="secondary"
            size="md"
            aria-label="Back button"
            className="text-[15px] w-[130px]
              hover:bg-[hsl(var(--primary)/0.3)]!
              disabled:bg-[#c8cec3]
              disabled:text-white
              disabled:cursor-not-allowed
              disabled:hover:bg-[#c8cec3]!"
            onClick={handleBack}
            disabled={currentIndex === 0 || isFinishing}
            type="button"
          >
            Back
          </Button>

          <Button
            variant="primary"
            size="md"
            aria-label={
              currentIndex === questions.length - 1 ? "See Results" : "Next"
            }
            className={`text-[15px] w-[130px] ${
              !currentAnswer
                ? "!bg-[#c8cec3] text-white cursor-not-allowed"
                : "bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/0.9)]"
            }`}
            onClick={handleNext}
            disabled={isFinishing || !currentAnswer}
            type="button"
          >
            {isFinishing
              ? "Analyzing..."
              : currentIndex === questions.length - 1
                ? "See Results"
                : "Next"}
          </Button>
        </CardFooter>
      </Card>

      <DisclaimerBanner
        wrapperClassName="border border-[hsl(var(--border))] mt-10"
        textClassName="!text-sm text-[hsl(var(--green-1))]/80"
        description={
          <>
            This self-assessment is designed to help you reflect on your
            well-being. It is not a clinical diagnosis.
          </>
        }
      />
    </div>
  );
};

export default Questionnaire;
