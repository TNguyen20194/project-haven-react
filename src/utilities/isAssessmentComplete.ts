import { questions } from "@/data/questions";

export const isAssessmentComlete = (answers: Record<string, string>) => {
   return Object.keys(answers).length === questions.length;
}