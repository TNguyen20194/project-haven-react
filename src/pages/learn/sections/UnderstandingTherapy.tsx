import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import groupTherapy from "@/assets/therapist/group-therapy1.webp";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const UnderstandingTherapy = () => {
  return (
    <section className="hero hero-secondary">
      <motion.div
        className="hero-container max-w-[46rem]!"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
          variants={imageVariant}
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
