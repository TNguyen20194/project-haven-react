import Button from "@/components/UI/buttons/CTAbutton";
import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import "./hero.style.css";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <Badge
          icon={BookOpen}
          iconClassName="text-[hsl(var(--coral))]"
          className="mb-[1.1rem]"
        >
          Free Mental Health Education
        </Badge>

        <h1 className="hero-title">
          Explore <span className="text-primary">Therapy</span> & Understand
          Your Mind
        </h1>
        <p className="hero-text">
          Curious about therapy but not sure where to start? Explore what
          therapy is, take a free self-assessment, and discover resources to
          support your well-being.
        </p>

        <Button
          asChild
          variant="primary"
          size="lg"
          aria-label="Take the Free Assessment"
          className="mt-10"
        >
          <Link to="/assessment">

          Take the Free Assessment
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
