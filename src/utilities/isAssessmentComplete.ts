import { questions } from "@/data/questions";

export const isAssessmentComplete = (answers: Record<string, string>) => {
   return Object.keys(answers).length === questions.length;
}