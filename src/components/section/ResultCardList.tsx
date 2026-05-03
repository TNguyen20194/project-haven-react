import { Card, CardContent, CardHeader, CardTitle } from "../UI/card";
import { appQuestions } from "@/data/questions";
import { useAssessmentStore } from "@/store/assessment.store";
import {
  getAssessmentResultContent,
  getAssessmentTotalScore,
} from "@/utilities/getAssessmentResult";
import { BatteryMedium, Leaf, Waves } from "lucide-react";

const RESULT_STYLES = {
  low: {
    icon: Leaf,
    iconClass: "text-[hsl(var(--low-text-green))]",
    badgeClass:
      "bg-[hsl(var(--low-bg-green))] text-[hsl(var(--low-text-green))]",
  },
  moderate: {
    icon: BatteryMedium,
    iconClass: "text-[hsl(var(--moderate-text-yellow))]",
    badgeClass:
      "bg-[hsl(var(--moderate-bg-yellow))] text-[hsl(var(--moderate-text-yellow))]",
  },
  high: {
    icon: Waves,
    iconClass: "text-[hsl(var(--high-text-red))]",
    badgeClass: "bg-[hsl(var(--high-bg-red))] text-[hsl(var(--high-text-red))]",
  },
};

const ResultCardList = () => {
  const answers = useAssessmentStore((state) => state.answers);

  const totalScore = getAssessmentTotalScore(appQuestions, answers);
  const result = getAssessmentResultContent(totalScore);
  const resultStyle = RESULT_STYLES[result.level];
  const ResultIcon = resultStyle.icon;

  return (
    <Card className="mt-8 rounded-[10px] border border-[#dcded7] bg-[hsl(var(--white))] shadow-md">
      <CardHeader className="gap-4 px-6 pb-2">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--background))]">
            <ResultIcon className={`h-6 w-6 ${resultStyle.iconClass}`} />
          </div>
        </div>

        <div>
          <CardTitle>
            <h4 className="text-[1.5rem] font-semibold leading-tight text-[hsl(var(--green-1))]">
              {result.label}
            </h4>
          </CardTitle>
          <p className="mt-2 text-[1rem] font-medium text-[hsl(var(--green-1))]">
            {result.headline}
          </p>
        </div>

        <div
          className={`inline-flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-medium ${resultStyle.badgeClass}`}
        >
          Score {totalScore} / 50
        </div>
      </CardHeader>

      <CardContent className="space-y-6 px-6">
        <div className="rounded-[8px] border border-black/5 bg-[hsl(var(--background))] p-4">
          <p className="text-sm font-semibold text-[hsl(var(--green-1))]">
            Support range: {result.range}
          </p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[hsl(var(--green-1))]/80">
            {result.meaning}
          </p>
        </div>
        <div className="space-y-3 text-[1rem] leading-relaxed text-[hsl(var(--green-1))]">
          {result.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h5 className="text-[1rem] font-semibold text-[hsl(var(--green-1))]">
            Suggestion for You
          </h5>
          <ul className="mt-3 space-y-2 text-[0.98rem] leading-relaxed text-[hsl(var(--green-1))]">
            {result.suggestions.map((suggestion) => (
              <li key={suggestion} className="flex gap-3">
                <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="rounded-[8px] bg-[hsl(var(--background))] p-4 text-[0.98rem] font-medium leading-relaxed text-[hsl(var(--green-1))]">
          {result.closing}
        </p>
      </CardContent>
    </Card>
  );
};

export default ResultCardList;
