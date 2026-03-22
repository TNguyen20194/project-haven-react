import { Check, type LucideIcon } from "lucide-react";
import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { UserSearch } from "lucide-react";
import groupTherapy from "@/assets/therapist/group-therapy3.webp";
import Button from "@/components/UI/buttons/CTAbutton";
import { useAssessmentEntry } from "@/hooks/AssessmentEntryContext";
import { motion } from "motion/react";
import {
  sectionVariants,
  fadeUp,
  listContainer,
  listItem,
  ctaReveal,
  imageReveal,
  defaultViewport,
} from "@/lib/animations";

interface TherapyCatergory {
  icon: LucideIcon;
  id: string;
  body: string;
  iconClass?: string;
}

const therapyCards: TherapyCatergory[] = [
  {
    icon: Check,
    id: "therapy-1",
    body: "you’ve been feeling overwhelmed, anxious, or emotionally drained",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-2",
    body: "stress is starting to affect your sleep, focus, or relationships",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-3",
    body: "you notice patterns in your thoughts or behaviors that are hard to change",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-4",
    body: "you’re going through a life transition (career, loss, family changes)",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-5",
    body: "you want to understand yourself better and grow emotionally",
    iconClass: "text-[hsl(var(--teal))]",
  },
];

const HowTherapyMightHelp = () => {
  const { handleAssessmentEntry } = useAssessmentEntry();

  return (
    <section className="p-10">
      <motion.div
        className="max-w-[56rem] mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          variants={fadeUp}
        >
          <IconBadge
            icon={UserSearch}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">If This Feels Familiar</h3>
        </motion.div>
        <motion.p
          className="text-[hsl(var(--green-1))] text-[1.12rem]"
          variants={fadeUp}
        >
          You don't need to be in crisis to benefit from therapy. Many people
          seek support when they notice patterns or challenges they would like
          help understanding.
        </motion.p>

        <motion.div
          className="mt-10 max-w-5xl rounded-[1.5rem] border border-black/5 bg-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={listContainer}
          viewport={defaultViewport}
        >
          {therapyCards.map(({ icon, id, body, iconClass }, index) => {
            const isLastItem = index === therapyCards.length - 1;

            return (
              <motion.div
                key={id}
                className={`group flex items-center gap-5 px-8 py-6 transition-colors duration-200 hover:bg-[hsl(var(--teal))]/9 ${!isLastItem ? "border-b border-b-black/5" : ""}`}
                variants={listItem}
              >
                <IconBadge
                  icon={icon}
                  iconClassName={`w-4 h-4 ${iconClass}`}
                  wrapperClassName="w-10 h-10 rounded-full transition-colors duration-200 "
                />
                <p className="font-normal mt-0 leading-8">{body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.5rem] border border-[hsl(var(--teal))]/10 bg-white/70 px-6 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-8"
          variants={ctaReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="p-text! text-xl font-semibold tracking-tight">
                You don’t have to figure this out alone.
              </p>
              <p className="p-text! mt-2 text-[1rem] leading-7">
                Take a short assessment to get a clearer starting point and find
                support that fits your needs.
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              aria-label="Take a Short Assessment"
              className="shrink-0 px-6 !text-[1rem] shadow-md text-center"
              onClick={handleAssessmentEntry}
            >
              Take a Short Assessment
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-2xl mt-10 mx-auto"
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={groupTherapy}
            alt="Group therapy session with empathy and care"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowTherapyMightHelp;
