import "./quote.style.css";
import { Quote } from "lucide-react";
import QuoteBlock from "@/components/UI/quote/QuoteBlock";
import IconBadge from "@/components/UI/feature-icon/IconBadge";

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quote-card">

        <div className="flex justify-center">
          <IconBadge
            icon={Quote}
            iconClassName="w-8 h-8 text-primary"
            wrapperClassName="w-16 h-16 rounded-full mb-6"
          />
        </div>

        <QuoteBlock />
      </div>
    </section>
  );
};

export default QuoteSection;
