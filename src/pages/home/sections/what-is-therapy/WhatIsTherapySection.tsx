import Badge from "@/components/UI/badge/Badge";
import { Heart } from "lucide-react";

const WhatIsTherapySection = () => {
  return (
    <section id="about" className="about-container">
      <div className="inner-container">
        <div className="text-center">
          <Badge
            icon={Heart}
            iconClassName="text-[hsl(var(--pink))]"
            className="mb-[1.1rem]"
          >
            Understanding Therapy
          </Badge>
        </div>
        <h2 className="section-heading">What Is Therapy, Really?</h2>
        <p className="section-heading__text about-text">
          With over 15 years of experience in mental health counseling, our
          practice specializes in anxiety, depression, trauma, and relationship
          issues. We believe in creating a safe, non-judgmental space where you
          can explore your thoughts and feelings at your own pace.
        </p>
        <p className="section-heading__text about-text">
          Our approach combines evidence-based therapies including Cognitive
          Behavioral Therapy (CBT), Mindfulness practices, and Person-Centered
          techniques to support your unique healing journey.
        </p>
      </div>
    </section>
  );
};

export default WhatIsTherapySection;
