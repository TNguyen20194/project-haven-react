import "./howwehelp.style.css";
import Badge from "@/components/UI/badge/Badge";
import EducationCard from "@/components/section/LearnSection";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import {
  sectionVariants,
  fadeUp,
  defaultViewport,
} from "@/lib/animations";
import { educationCard } from "@/data/educationCard";

const HowWeHelpSection = () => {
  return (
    <section className="resources section-container">
      <motion.div
        className="resources__inner"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div variants={fadeUp}>
          <Badge
            icon={Sparkles}
            iconClassName="text-[hsl(var(--accent))]"
            className="mb-[1.5rem]"
          >
            Discover What Therapy Can Offer
          </Badge>
          <h2 className="section-heading mb-5">What You'll Learn</h2>
        </motion.div>

        <motion.p
          className="mx-auto max-w-[42rem] text-center text-[hsl(var(--primary-alt))] mb-12 text-[1.12rem]"
          variants={fadeUp}
        >
          Whether you're simply curious or considering therapy, these resources
          can help you understand what to expect.
        </motion.p>

        <motion.div 
        className="service-grid" 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}}
        >
          {educationCard.map(({ id, icon, title, body, iconClass }) => (
            <EducationCard
              key={id}
              icon={icon}
              title={title}
              body={body}
              iconClass={iconClass}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowWeHelpSection;
