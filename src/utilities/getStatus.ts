import type { StatusLevel } from "@/components/UI/status-pill/StatusPill";

export const getStatus = (score: number): StatusLevel => {
    if(score <= 3) return "low";
    if(score <= 6) return "moderate";
    if(score <= 9) return "elevated";
    return "high";
}