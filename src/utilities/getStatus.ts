import type { StatusLevel } from "@/components/UI/status-pill/StatusPill";

export const getStatus = (score: number): StatusLevel => {
    if(score <= 3) return "low";
    if(score <= 7) return "moderate";
    if(score <= 11) return "elevated";
    return "high";
}