import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import groupTherapy from "@/assets/therapist/group-therapy1.webp";
import { motion } from "motion/react";
import {
  sectionVariants,
  fadeUp,
  imageReveal,
  defaultViewport,
} from "@/lib/animations";

const UnderstandingTherapy = () => {
  return (
    <section className="hero hero-secondary">
      <motion.div
        className="hero-container max-w-[46rem]!"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div variants={fadeUp}>
          <Badge
            icon={BookOpen}
            iconClassName="text-[hsl(var(--blue))]"
            className="mb-[1.1rem]"
          >
            Educational Resource
          </Badge>
        </motion.div>

        <motion.h2 className="section-heading mb-6" variants={fadeUp}>
          Understanding Therapy
        </motion.h2>

        <motion.div
          className="w-full max-w-2xl my-10 mx-auto"
          variants={imageReveal}
        >
          <img
            src={groupTherapy}
            alt="Group therapy session with empathy and care"
            className="w-full h-full"
          />
        </motion.div>
        <motion.p 
        className="text-[hsl(var(--green-1))] text-[1.25rem] mt-12"
        variants={fadeUp}
        >
          Therapy can feel unfamiliar if you've never tried it. This page is
          here to help you understand what therapy is, how it works, and how it
          might help you.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default UnderstandingTherapy;
