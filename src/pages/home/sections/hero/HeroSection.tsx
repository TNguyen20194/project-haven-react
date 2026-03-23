import Button from "@/components/UI/buttons/CTAbutton";
import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import "./hero.style.css";
import { Link } from "react-router";
import therapistIllustration from "@/assets/therapist/therapist-1a.png";
import blob from "@/assets/decorative/blob.png";
import { useAssessmentEntry } from "@/hooks/AssessmentEntryContext";
import { motion } from "motion/react";
import {
  sectionVariants,
  fadeUp,
  defaultViewport,
} from "@/lib/animations";

const HeroSection = () => {
  const { handleAssessmentEntry } = useAssessmentEntry();

  return (
    <section className="hero">
      <motion.div 
      className="hero-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      >
        <motion.div
        variants={fadeUp}
        >
          <Badge
            icon={BookOpen}
            iconClassName="text-[hsl(var(--coral))]"
            className="mb-[1.1rem]"
          >
            Free Mental Health Education
          </Badge>
        </motion.div>

        <motion.div 
        className="hero-illustration"
        variants={fadeUp}
        >
          <img src={blob} alt="" className="hero-blob" />
          <img
            src={therapistIllustration}
            alt="Therapist talking with a client"
            className="hero-therapist"
          />
        </motion.div>

        <motion.h1 
        className="hero-title"
        variants={fadeUp}
        >
          Explore <span className="text-primary">Therapy</span> & Understand
          Your Mind
        </motion.h1>
        <motion.p 
        className="hero-text"
        variants={fadeUp}
        >
          Feeling overwhelmed, stuck, or unsure where to start? Explore what
          therapy is, take a free self-assessment, and discover resources to
          support your well-being.
        </motion.p>

        <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-15"
        variants={fadeUp}
        >
          <Button
            variant="primary"
            size="lg"
            aria-label="Take the Free Assessment"
            className="text-shadow-md w-[270px]"
            onClick={handleAssessmentEntry}
          >
           Start Your Free Assessment
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            aria-label="Take the Free Assessment"
            className="hover:bg-[hsl(var(--primary)/0.3)]! w-[270px]"
          >
            <Link to="/learn">Learn What Therapy Is</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

// ADD scroll bar color
