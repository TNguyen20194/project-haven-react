import type { Question } from "@/data/questions";

export const getCategoryScore = (
    categoryId: string,
    questions: Question[],
    answers: Record<string, string>
) => {

  const categoryQuestions = questions.filter((question) => question.categoryId === categoryId);

  let total = 0;

  console.log("category questions: ", categoryQuestions)

  categoryQuestions.forEach((question) => {
    const answer = answers[question.id] || 0;

    if(answer !== undefined) {
        total += Number(answer)
    }
  });

  return total;
};