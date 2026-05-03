type DisclaimerProps = {
  description: React.ReactNode,
  title?: string,
  wrapperClassName?: string,
  textClassName?: string
}

const DisclaimerBanner = ({
  description,
  title = "",
  wrapperClassName = "",
  textClassName = "",
}: DisclaimerProps) => {
  return (
    <div className={`rounded-2xl bg-[hsl(var(--muted-1))] p-6 mt-6 mb-6 shadow-sm ${wrapperClassName}`}>
      <p className={`p-text ${textClassName}`}>
        <strong>{title}</strong> {description}
      </p>
    </div>
  );
};

export default DisclaimerBanner;
