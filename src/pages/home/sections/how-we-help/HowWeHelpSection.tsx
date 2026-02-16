import "./howwehelp.style.css";
import Badge from "@/components/UI/badge/Badge";
import EducationCard from "@/components/section/LearnSection";
import { Sparkles } from "lucide-react";

const HowWeHelpSection = () => {
  return (
    <section className="resources section-container">
      <div className="resources__inner">
        <Badge
          icon={Sparkles}
          iconClassName="text-[hsl(var(--accent))]"
          className="mb-[1.5rem]"
        >
          Discover What Therapy Can Offer
        </Badge>
        <h2 className="section-heading mb-5">What You'll Learn</h2>

        <p className="mx-auto max-w-[42rem] text-center text-[hsl(var(--primary-alt))] mb-12 text-[1.12rem]">
          Whether you're simply curious or considering therapy, these resources
          can help you understand what to expect.
        </p>

        <div className="service-grid">
          <EducationCard />
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
