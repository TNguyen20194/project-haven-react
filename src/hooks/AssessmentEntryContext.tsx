import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { useNavigate } from "react-router";
import { useAssessmentStore } from "@/store/assessment.store";
import { isAssessmentComplete } from "@/utilities/isAssessmentComplete";
import IsAssessmentCompleteModal from "@/pages/assessment/sections/IsAssessmentCompleteModal";

type AssessmentEntryContextType = {
  handleAssessmentEntry: () => void;
};

const AssessmentEntryContext = createContext<AssessmentEntryContextType | null>(
  null,
);

type Props = {
  children: ReactNode;
};

export const AssessmentEntryProvider = ({ children }: Props) => {
    const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

    const navigate = useNavigate();

    const answers = useAssessmentStore((state) => state.answers);
    const resetAssessment = useAssessmentStore((state) => state.resetAssessment);

    const hasCompletedAssessment = isAssessmentComplete(answers);

    const handleAssessmentEntry = () => {
        if(hasCompletedAssessment) {
            setIsAssessmentModalOpen(true);
            return;
        };

        navigate("/assessment");
    };

    const handleViewResult = () => {
        setIsAssessmentModalOpen(false);
        navigate("/assessment/results");
    };

    const handleRetake = () => {
        resetAssessment();
        setIsAssessmentModalOpen(false);
        navigate("/assessment");
    };

    const value = useMemo(
        () => ({
            handleAssessmentEntry,
        }),
        [hasCompletedAssessment]
    )

    return (
        <AssessmentEntryContext.Provider value={value}>
            {children}

            <IsAssessmentCompleteModal
            open={isAssessmentModalOpen}
            onOpenChange={setIsAssessmentModalOpen}
            onRetake={handleRetake}
            onViewResult={handleViewResult}
            />
        </AssessmentEntryContext.Provider>
    )
};

export const useAssessmentEntry = () => {
    const context = useContext(AssessmentEntryContext);

    if(!context) {
        throw new Error("useAssessmentEntry must be used inside AssessmentEntryProvider");
    }

    return context;
}
