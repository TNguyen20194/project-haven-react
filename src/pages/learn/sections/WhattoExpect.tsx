import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.20,
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
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const WhatToExpect = () => {
  return (
    <section className="p-12 mb-8 bg-[hsl(var(--background-alt)/0.5)]">
      <motion.div
        className="max-w-[56rem] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex items-center gap-3 mb-5" variants={fadeUp}>
          <IconBadge
            icon={Lightbulb}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">What to Expect</h3>
        </motion.div>
        <motion.p className="p-text" variants={fadeUp}>
          Your first therapy session is usually about getting to know each
          other. The therapist will ask about what brought you in, your
          background, and what you hope to achieve. There's no pressure to share
          more than you're comfortable with.
        </motion.p>
        <motion.p className="p-text mt-5" variants={fadeUp}>
          Sessions typically last 45–60 minutes and happen weekly or biweekly.
          Over time, you and your therapist will work together on strategies and
          insights tailored to your goals.
        </motion.p>
        <motion.p className="p-text mt-5" variants={fadeUp}>
          Everything you share is confidential. Therapists are bound by strict
          ethical and legal guidelines to protect your privacy, with very few
          exceptions related to safety.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WhatToExpect;
