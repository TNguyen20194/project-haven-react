import ResultCard from "./result-card/ResultCard";
import { categories } from "@/data/categories";
import { mockScoresByCategory } from "@/data/mockResult";
import { getStatus } from "@/utilities/getStatus";

const ResultCardList = () => {
  return (
    <div className="space-y-5">
        {categories.map((category) => {

        const score = mockScoresByCategory[category.id] ?? 0 ;
        const status = getStatus(score);

        return (
            <ResultCard 
            key={category.id}
            {...category}
            status={status}
            />
        )
        })}
    </div>
  )
};

export default ResultCardList;
