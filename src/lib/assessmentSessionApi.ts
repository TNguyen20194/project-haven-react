const DASHBOARD_API_URL = "http://localhost:3000";

type AssessmentSessionPayLoad = {
  questionCount: number;
  resultLevel: "low" | "moderate" | "high";
  score: number;
  completedAt: string;
};

export const createAssessmentSession = async (
  payload: AssessmentSessionPayLoad,
) => {
    const response = await fetch(`${DASHBOARD_API_URL}/api/assessment-sessions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if(!response.ok) {
        throw new Error("Unable to save assessment session");
    }

    return response.json()
};
