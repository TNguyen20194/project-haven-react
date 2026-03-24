import "./whatistherapy.style.css";
import Badge from "@/components/UI/badge/Badge";
import { Flower } from "lucide-react";
import therapyMind from "@/assets/therapist/therapy-mind.webp";
import TrustedSection from "@/components/section/TrustedSection";
import Button from "@/components/UI/buttons/CTAbutton";
import { useAssessmentEntry } from "@/hooks/AssessmentEntryContext";
import { features } from "@/data/trustedSection";
import { motion } from "motion/react";
import {
  sectionVariants,
  fadeUp,
  imageReveal,
  defaultViewport,
  listContainer,
} from "@/lib/animations";

const highlight = "text-[hsl(var(--primary))] font-medium";

const WhatIsTherapySection = () => {
  const { handleAssessmentEntry } = useAssessmentEntry();

  return (
    <section className="therapy section-container">
      <motion.div 
      className="max-w-[64rem] mx-auto"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      >
        <motion.div 
        className="mx-auto text-center mb-[3rem]"
        variants={fadeUp}
        >
          <Badge
            icon={Flower}
            iconClassName="text-[hsl(var(--pink))]"
            className="mb-[1.1rem]"
          >
            Understanding Therapy
          </Badge>
          <h2 className="section-heading mb-5">What Is Therapy, Really?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="order-2 md:order-1 grid place-items-start">
            <motion.div 
            className="w-full max-w-sm mx-auto"
            variants={imageReveal}
            >
              <img
                src={therapyMind}
                alt="Growing mind in bloom"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          <div className="order-1 md:order-2 text-[1.12rem]">
            <motion.p
            variants={fadeUp}
            >
              Therapy is a{" "}
              <span className={highlight}>safe, confidential conversation</span>{" "}
              with a trained professional who helps you understand your
              thoughts, feelings, and behaviors. It's not just for people in
              crisis—it's for anyone who wants to grow, heal, or simply
              understand themselves better.
            </motion.p>
            <motion.p
            variants={fadeUp}
            >
              There are many types of therapy, from{" "}
              <span className={highlight}>
                Cognitive Behavioral Therapy (CBT)
              </span>
              to mindfulness-based approaches. The right fit depends on your
              unique needs and goals—and that's completely okay to explore.
            </motion.p>

            <motion.div 
            className="space-y-4"
            variants={listContainer}
            >
              {features.map(
                ({ id, title, description, icon, iconClassName }) => (
                  <TrustedSection
                    key={id}
                    title={title}
                    description={description}
                    icon={icon}
                    iconClassName={iconClassName}
                  />
                ),
              )}
            </motion.div>
          </div>
        </div>

        <motion.div 
        className="text-center mt-12"
        variants={fadeUp}
        >
          <Button
            variant="primary"
            size="lg"
            aria-label="Take the Free Assessment"
            className="w-[260px]"
            onClick={handleAssessmentEntry}
          >
            Take the Free Assessment
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatIsTherapySection;
