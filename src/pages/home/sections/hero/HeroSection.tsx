import Button from "@/components/UI/buttons/CTAbutton";
import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import "./hero.style.css";
import { Link } from "react-router";
import therapistIllustration from "@/assets/therapist/therapist-1a.png";
import blob from "@/assets/decorative/blob.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div>
          <Badge
            icon={BookOpen}
            iconClassName="text-[hsl(var(--coral))]"
            className="mb-[1.1rem]"
          >
            Free Mental Health Education
          </Badge>
        </div>

        <div className="hero-illustration">
          <img src={blob} alt="" className="hero-blob" />
          <img
            src={therapistIllustration}
            alt="Therapist talking with a client"
            className="hero-therapist"
          />
        </div>

        <h1 className="hero-title">
          Explore <span className="text-primary">Therapy</span> & Understand
          Your Mind
        </h1>
        <p className="hero-text">
          Feeling overwhelmed, stuck, or unsure where to start? Explore what
          therapy is, take a free self-assessment, and discover resources to
          support your well-being.
        </p>

        <div className="grid justify-center gap-6 mt-12">
          <Button
            asChild
            variant="primary"
            size="lg"
            aria-label="Take the Free Assessment"
            className="text-shadow-md"
          >
            <Link to="/assessment">Start Your Free Assessment</Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            aria-label="Take the Free Assessment"
            className="text-shadow-md hover:bg-[hsl(var(--primary)/0.3)]!"
          >
            <Link to="/learn">Learn What Therapy Is</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// ADD scroll bar color
