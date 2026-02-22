type StatusProps = {
    status: StatusLevel,
    className?: string,
}

type StatusLevel = "Low" | "Moderate" | "Elevated" | "High";

const STATUS_STYLES: Record<StatusLevel, string > = {
    Low: "bg-[hsl(var(--muted-1))] text-[hsl(var(--primary))]",
    Moderate: "bg-[hsl(var(--yellow)/0.8)] text-[hsl(var(--coral)/0.9)]",
    Elevated: "bg-[hsl(var(--accent)/0.5)] text-[hsl(var(--accent))]",
    High: "bg-[hsl(var(--coral)/0.5)] text-[hsl(var(--coral))]",
}


const StatusPill = ({
    status,
    className = "",
}:  StatusProps) => {
    return (
        <div className={`inline-flex items-center text-[14px] rounded-full px-3 h-8 ${STATUS_STYLES[status]} ${className}`}>
                {status}
        </div>
    )
};

export default StatusPill;