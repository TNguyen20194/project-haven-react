import { useState } from "react";
import { Progress } from "@/components/UI/progress";
import { Toaster } from "@/components/UI/sonner";
import Button from "@/components/UI/buttons/CTAbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldLabel,
  FieldTitle,
} from "@/components/UI/field";
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group";
import { Label } from "@/components/ui/label";
import { questions } from "@/data/questions";

const Questionnaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id] ?? "";

  console.log(currentQuestion, answers)


  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const options = Object.entries(currentQuestion.options).sort(
    ([a], [b]) => Number(a) - Number(b),
  );

  const handleSelectOption = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  };
  
  const handleNext = () => {
    if(!currentAnswer) {
      toast.warning("Please answer the question", {
        description: "This field is required to continue.",
      });
      return;
    };

    if(currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      console.log("Assessment complete", answers)
    }
  };

  const handleBack = () => {
    if(currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
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

      <Card className="mt-8 rounded-[10px] border-1 border-[#dcded7] bg-hsl[var(--white)] shadow-md">
        <CardHeader className="space-y-2 px-6 pb-4 pt-4">
          <CardTitle>
            <h4 className="text-[1.5rem] text-[hsl(var(--green-1))] font-semibold">
              Question {currentIndex + 1}
            </h4>
          </CardTitle>
          <CardDescription>
            <p className="p-text leading-relaxed">{currentQuestion.prompt}</p>
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
                className={`flex cursor-pointer items-center gap-4 rounded-[10px] border px-5 py-4 bg-hsl[var(--white)] transition ${
                  currentAnswer === value
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--background)/0.8)]"
                    : "border-[#d9d9d3] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--background-alt)))]"
                }`}
              >
                <RadioGroupItem
                value={value}
                id={`option-${value}`}
                className="accent-[hsl(var(--primary))]"
                />
                <span className="text-[15px] text-[hsl(var(--green-1))] leading-relaxed">
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
          className="text-shadow-md text-[15px] w-[100px]"
          onClick={handleBack}
          disabled={currentIndex === 0}
          type="button"
          >
            Back
          </Button>

          <Button
          variant="primary"
          size="md"
          aria-label="Back button"
          className="text-shadow-md text-[15px] w-[100px]"
          onClick={handleNext}
          type="button"
          >
           {currentIndex === questions.length - 1 ? "Finish" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Questionnaire;
