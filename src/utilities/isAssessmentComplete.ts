import { appQuestions} from "@/data/questions";

export const isAssessmentComplete = (answers: Record<string, string>) => {
  return appQuestions.every((question) => answers[question.id] !== undefined);
};
