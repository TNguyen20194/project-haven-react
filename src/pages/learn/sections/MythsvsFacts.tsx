import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Scale } from "lucide-react";
import MythFactCard from "@/components/section/MythFactCard";
import { motion } from "motion/react";
import {
  sectionVariants,
  listContainer,
  fadeUp,
  defaultViewport,
} from "@/lib/animations";

const MythsVsFacts = () => {
  return (
    <section className="p-14 bg-[hsl(var(--background-alt)/0.5)]">
      <motion.div
        className="max-w-[56rem] mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          variants={fadeUp}
        >
          <IconBadge
            icon={Scale}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Myths vs. Facts</h3>
        </motion.div>

        <motion.div
          className="max-w-[72rem] mx-auto text-center"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-5">
            <MythFactCard />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MythsVsFacts;
