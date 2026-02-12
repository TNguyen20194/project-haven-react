import "./quote.style.css";
import { Quote } from "lucide-react";
import QuoteBlock from "../../components/quote/QuoteBlock";

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quote-card">
        <div className="emblem-wrapper bg-[hsl(var(--muted))]">
          <Quote className="emblem text-primary w-24 h-24"/>
        </div>
        <QuoteBlock />
      </div>
    </section>
  );
};

export default QuoteSection;
