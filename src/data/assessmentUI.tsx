import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Heart } from "lucide-react";

interface ResultCardProps {
    icon: React.ReactElement;
    title: string;
    statusPill: React.ReactElement;
    description: string;
};

const ResultCardData: ResultCardProps[] = [
    {
        icon: <IconBadge icon={Heart}/> ,
        title: "Emotional Regulation",
        statusPill: ,
        description: "Journaling and deep breathing exercises can help with occasional emotional overwhelm."
    },
];