import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { ClipboardCheck } from "lucide-react";

const AssessmentResult = () => {
    return (
           <section className="relative z-10 px-6 py-10 min-h-[calc(100vh-var(--header-h))] bg-[hsl(var(--background-alt)/0.5)] overflow-hidden">
      {/* Background Layer */}
      {/* <div
        className="absolute rounded-full bottom-10 right-10 w-[350px] h-[350px] overflow-hidden bg-no-repeat bg-center bg-cover opacity-90 pointer-events-none"
        style={{ backgroundImage: `url(${flower3})` }}
      /> */}

      <div className="relative z-10 max-w-[56rem] mx-auto ">
        <div className="flex items-center gap-3 mb-5">
          <IconBadge
            icon={ClipboardCheck}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Your Self-Assessment Results</h3>
        </div>
        <p className="p-text">
          Here's a summary based on your responses. This is for educational purposes only and is not a diagnosis.
        </p>
      </div>


    </section>
    )
};

export default AssessmentResult;

