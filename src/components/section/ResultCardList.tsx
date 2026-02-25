import ResultCard from "./result-card/ResultCard";
import { categories } from "@/data/categories";
import { mockScoresByCategory } from "@/data/mockResult";
import { getStatus } from "@/utilities/getStatus";

const ResultCardList = () => {
  return (
    <div className="space-y-5">
        {categories.map((category) => {

        // Calulate score to get status level and description
        // Pass status and description into child component

        const score = mockScoresByCategory[category.id] ?? 0;
        const status = getStatus(score);
        const description = category.description[status];

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
