import type { appQuestion } from "@/data/questions";

export type AppResultLevel = "low" | "moderate" | "high";

export type AppResultContent = {
  level: AppResultLevel;
  label: string;
  headline: string;
  range: string;
  meaning: string;
  body: string[];
  suggestions: string[];
  closing: string;
};

const REVERSE_SCORED_QUESTIONS_IDS = new Set([
  "question-5",
  "question-8",
  "question-9",
  "question-10",
]);

export const getScoreAnswer = (questionId: string, value: string) => {
  const score = Number(value);

  if (Number.isNaN(score)) return 0;

  return REVERSE_SCORED_QUESTIONS_IDS.has(questionId) ? 6 - score : score;
};

export const getAssessmentTotalScore = (
  questions: appQuestion[],
  answers: Record<string, string>,
) => {
  return questions.reduce((total, question) => {
    const answer = answers[question.id];

    if (answer === undefined) return total;

    return total + getScoreAnswer(question.id, answer);
  }, 0);
};

export const getAssessmentResultLevel = (score: number): AppResultLevel => {
  if (score <= 20) return "low";
  if (score <= 34) return "moderate";
  return "high";
};

export const assessmentResultContent: Record<AppResultLevel, AppResultContent> =
  {
    low: {
      level: "low",
      label: "Feeling Balanced",
      headline: "You're in a good place right now",
      range: "10-20",
      meaning:
        "You're generally  doing well and managing day-to-day stress effectively.",
      body: [
        "Based on your response, you seem to have a healthy balance in your day-to-day life. You're managing stress, maintaining your energy, and staying connected in ways that support your well-being.",
        "That doesn't mean everything is perfect, but you've got a solid foundation. The goal now is to maintain what's working and continue making space for yourself.",
      ],
      suggestions: [
        "Keep a simple daily routine that supports your energy",
        "Make time for things you enjoy, even small moments",
        "Stay connected with people who uplift you",
        "Check in with yourself regularly",
      ],
      closing:
        "Small, consistent habits can go a long way. Keep doing what's working for you.",
    },
    moderate: {
      level: "moderate",
      label: "Could Use Some Support",
      headline: "You might be feeling a bit stretched right now",
      range: "21-34",
      meaning:
        "You may be experiencing some stress, fatigue, or imbalance that could benefit from attention.",
      body: [
        "Your responses suggest that things may feel a little off balance lately. You could be dealing with stress, low energy, or not having enough time to recharge.",
        "This is very common, and the good news is that small adjustments can make a meaningful difference.",
      ],
      suggestions: [
        "Set aside short breaks during your day, even 10-15 minutes",
        "Try simple stress-reducing activities like walking, music, or deep breathing",
        "Create a wind-down routine before bed",
        "Focus on one or two priorities instead of everything at once",
      ],
      closing:
        "You don't have to fix everything at once. Start small and build from there.",
    },
    high: {
      level: "high",
      label: "Time to Recharge",
      headline: "You may need some time to reset and reconnect",
      range: "35-50",
      meaning:
        "You may be feeling consistently overwhelmed, drained, or disconnected.",
      body: [
        "Based on your responses, you might be feeling overwhelmed, drained, or disconnected right now. When things build up like this, it can make even small tasks feel like a lot.",
        "You're not alone in feeling this way, and it may be a sign that your mind and body need extra care and support right now.",
      ],
      suggestions: [
        "Focus on the basics: rest, meals, hydration",
        "Break your day into small, manageable steps",
        "Try guided relaxation or calming exercises",
        "Limit anything that feels overwhelming where possible",
        "Consider reaching out to someone you trust for support",
      ],
      closing:
        "Taking care of yourself is not a luxury. It's something you deserve.",
    },
  };

export const getAssessmentResultContent = (score: number) => {
  return assessmentResultContent[getAssessmentResultLevel(score)];
};
