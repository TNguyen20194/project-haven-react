import { questions } from "@/data/questions";

export const isAssessmentComplete = (answers: Record<string, string>) => {
  return questions.every((question) => answers[question.id] !== undefined);
};
