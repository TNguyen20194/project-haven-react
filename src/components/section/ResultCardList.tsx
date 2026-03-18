import ResultCard from "./result-card/ResultCard";
import { categories } from "@/data/categories";
import { questions } from "@/data/questions";
import { useAssessmentStore } from "@/store/assessment.store";
import { getCategoryScore } from "@/utilities/getCategoryScore";
import { getStatus } from "@/utilities/getStatus";

const ResultCardList = () => {
   const answers = useAssessmentStore((state) => state.answers);

  return (
    <div className="space-y-5">
        {categories.map((category) => {

        // Calulate score to get status level and description
        // Pass status and description into child component

        const score = getCategoryScore(category.id, questions, answers);
        const status = getStatus(score);
        const description = category.description[status];

        console.log("Category: ", category, "Score:", score)

        return (
            <ResultCard
            key={category.id}
            {...category}
            description={description}
            status={status}
            />
        )
        })}
    </div>
  )
};

export default ResultCardList;
