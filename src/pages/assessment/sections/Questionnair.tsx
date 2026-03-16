import { useState } from "react";
import { Progress } from "@/components/UI/progress";
import { useForm } from "@tanstack/react-form";
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
  const currentIndex = 0;
  const currentQuestion = questions[currentIndex];

  const [selectedOption, setSelectedOption] = useState("");

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const options = Object.entries(currentQuestion.options).sort(
    ([a], [b]) => Number(a) - Number(b),
  );

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
          className="h-3 rounded-full h-3 bg-[#dfe5dc] [&>div]:bg-[hsl(var(--primary))]"
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
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-4"
          >
            {options.map(([value, label]) => (
              <Label
                key={value}
                htmlFor={`option-${value}`}
                className={`flex cursor-pointer items-center gap-4 rounded-[10px] border px-5 py-4 bg-hsl[var(--white)] transition ${
                  selectedOption === value
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--background)/0.8)]"
                    : "border-[#d9d9d3] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--background-alt)))]"
                }`}
              >
                <RadioGroupItem value={value} id={`option-${value}`} />
                <span className="text-[15px] text-[hsl(var(--green-1))] leading-relaxed">
                  {label}
                </span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default Questionnaire;
