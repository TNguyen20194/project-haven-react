import "./quote.style.css";
import { Quote } from "lucide-react";
import QuoteBlock from "../../components/quote/QuoteBlock";

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="quote-card">
        <div className="quote-icon-wrapper">
          <Quote className="quote-icon text-primary w-24 h-24"/>
        </div>
        <QuoteBlock />
      </div>
    </section>
  );
};

export default QuoteSection;
