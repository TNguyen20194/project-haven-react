import TherapyCategoriesSection from "@/components/section/TherapyCategoriesSection";
import { motion } from "motion/react";
import {
  sectionVariants,
  fadeUp,
  defaultViewport,
} from "@/lib/animations";

const TypesOfTherapy = () => {
  return (
    <section className="pt-8 px-6 py-4 mb-8">
      <motion.div 
      className="max-w-[42rem] mx-auto text-center mb-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      >
        <motion.h3 
        className="sub-heading mb-5"
        variants={fadeUp}
        >
          Common Types of Therapy
          </motion.h3>
        <motion.p 
        className="text-[hsl(var(--green-1))] text-[1.12rem]"
        variants={fadeUp}
        >
          There is no one size fits all approach. Here are some widely used methods, and a therapist can help you find the best fit.
        </motion.p>
      </motion.div>

      <motion.div 
      className="max-w-[72rem] mx-auto text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <TherapyCategoriesSection />
        </div>
      </motion.div>
    </section>
  );
};

export default TypesOfTherapy;
