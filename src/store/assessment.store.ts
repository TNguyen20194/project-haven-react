import { create } from "zustand";
import { persist } from "zustand/middleware";

type AssessmenStore = {
    currentIndex: number;
    answers: Record<string, string>;
    setCurrentIndex: (index: number) => void;
    setAnswers: (questionId: string, value: string) => void;
    resetIndex: () => void;
    resetAssessment: () => void;
};

export const useAssessmentStore = create<AssessmenStore>() (
    persist(
        (set) => ({
            currentIndex: 0,
            answers: {},

            setCurrentIndex: (index) => set({ currentIndex: index }),

            setAnswers: (questionId, value) =>
                set((state) => ({
                    answers: {
                        ...state.answers,
                        [questionId]: value,
                    },
                })),

            resetIndex: () =>
                set({ currentIndex: 0 }),

            resetAssessment: () =>
                set({
                    currentIndex: 0,
                    answers: {}
                }),
        }),
        {
            name: "assessment-storage"
        },
    ),
);




