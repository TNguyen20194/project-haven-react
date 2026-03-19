import { Check, type LucideIcon } from "lucide-react";
import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { UserSearch } from "lucide-react";
import groupTherapy from "@/assets/therapist/group-therapy3.webp";

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
    body: "you feel overwhelmed, anxious, or emotionally drained",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-2",
    body: "stress is affecting your sleep, focus, or relationships",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-3",
    body: "you feel stuck in repeating patterns",
    iconClass: "text-[hsl(var(--teal))]",
  },
  {
    icon: Check,
    id: "therapy-4",
    body: "you're navigating a life transition (career change, loss, family changes)",
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
  return (
    <section className="py-8">
      <div className="max-w-[56rem] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-5">
          <IconBadge
            icon={UserSearch}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">How to Know if Therapy Might Help</h3>
        </div>
        <p className="text-[hsl(var(--green-1))] text-[1.12rem]">
          You don't need to be in crisis to benefit from therapy. Many people
          seek support when they notice patterns or challenges they would like
          help understanding.
        </p>

        <div className="mt-10 space-y-5">
          {therapyCards.map(({ icon, id, body, iconClass }) => {
            return (
              <div key={id} className="feature-card !p-3">
                <div className="flex items-center justify-items-start gap-3">
                  <IconBadge
                    icon={icon}
                    iconClassName={`"w-6 h-6 ${iconClass}`}
                    wrapperClassName="w-10 h-10 rounded-full"
                  />
                  <p className="!font-normal !mt-0">{body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[hsl(var(--green-1))] text-[1.12rem] mt-10">
         Therapy can provide a supportive space to reflect, gain insight, and build healthier coping strategies.
        </p>

        <div className="w-full max-w-2xl mt-10 mx-auto">
          <img
            src={groupTherapy}
            alt="Group therapy session with empathy and care"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HowTherapyMightHelp;
