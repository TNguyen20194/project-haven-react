type StatusProps = {
    status: StatusLevel,
    className?: string,
}

type StatusLevel = "low" | "moderate" | "elevated" | "high";

const STATUS_STYLES: Record<StatusLevel, string > = {
    low: "bg-[hsl(var(--muted-1))] text-[hsl(var(--primary))]",
    moderate: "bg-[hsl(var(--yellow)/0.8)] text-[hsl(var(--coral)/0.9)]",
    elevated: "bg-[hsl(var(--accent)/0.5)] text-[hsl(var(--accent))]",
    high: "bg-[hsl(var(--coral)/0.5)] text-[hsl(var(--coral))]",
}


const StatusPill = ({
    status,
    className = "",
}:  StatusProps) => {
    return (
        <div className={`inline-flex items-center text-[14px] rounded-full px-3 h-8 capitalize ${STATUS_STYLES[status]} ${className}`}>
                {status}
        </div>
    )
};

export default StatusPill;