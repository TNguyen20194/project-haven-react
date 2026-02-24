export type StatusLevel = "low" | "moderate" | "elevated" | "high";

type StatusProps = {
    status: StatusLevel,
    className?: string,
};


const STATUS_STYLES: Record<StatusLevel, string> = {
    low: "bg-[hsl(var(--low-bg-green))] text-[hsl(var(--low-text-green))]",
    moderate: "bg-[hsl(var(--moderate-bg-yellow))] text-[hsl(var(--moderate-text-yellow))]",
    elevated: "bg-[hsl(var(--elevated-bg-orange))] text-[hsl(var(--elevated-text-orange))] ",
    high: "bg-[hsl(var(--high-bg-red))] text-[hsl(var(--high-text-red))]",
};

const STATUS_LABEL: Record<StatusLevel, string> = {
    low: "Low concern",
    moderate: "Moderate",
    elevated: "Elevated",
    high: "High concern",
};

const StatusPill = ({
    status,
    className = "",
}:  StatusProps) => {
    return (
        <div className={`inline-flex items-center justify-center whitespace-nowrap text-[14px] rounded-full w-[125px] h-8 font-medium ${STATUS_STYLES[status]} ${className}`}>
                {STATUS_LABEL[status]}
        </div>
    )
};

export default StatusPill;