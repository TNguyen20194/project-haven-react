import { useState } from "react";
import { ChevronDown } from "lucide-react";
interface MythFactCardProps {
  icon?: React.ReactElement;
  id: string;
  myth: string;
  fact: string;
}

const mythFactList: MythFactCardProps[] = [
  {
    id: "myth-1",
    myth: "Therapy is only for people with severe mental illness.",
    fact: "Therapy benefits anyone looking to improve their well-being, manage stress, navigate life changes, or simply understand themselves better.",
  },
  {
    id: "myth-2",
    myth: "Going to therapy means you're weak.",
    fact: "Seeking help is a sign of strength and self-awareness. It takes courage to work on yourself.",
  },
  {
    id: "myth-3",
    myth: "A therapist will tell you what to do.",
    fact: "Therapists guide you to discover your own solutions. They provide tools and perspectives, but you remain in control of your decisions.",
  },
  {
    id: "myth-4",
    myth: "Therapy takes years to work.",
    fact: "Many people see improvements within a few sessions. The duration depends on your goals—some concerns can be addressed in weeks, others benefit from longer support.",
  },
  {
    id: "myth-5",
    myth: "You have to lie on a couch and talk about your childhood.",
    fact: "Modern therapy takes many forms. Sessions can involve conversations, exercises, goal-setting, and practical strategies tailored to your needs.",
  },
];

const mythFactCard = () => {
  const [openMyth, setOpenMyth] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenMyth((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {mythFactList.map(({ id, myth, fact }) => {
        const isOpen = openMyth === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => handleToggle(id)}
            className="feature-card w-full text-left"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[hsl(var(--green-1))] text-left mt-0!">
                <span className="font-semibold text-[hsl(var(--coral))]">
                  Myth:
                </span>{" "}
                "{myth}"
              </p>

              <ChevronDown
                className={`h-5 w-5 shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4 " : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                <div className="overflow-hidden">
                  <p className="translate-y-0">
                    <span className="font-semibold text-primary">Fact:</span>{" "}
                    <span className="font-normal">{fact}</span>
                  </p>
                </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default mythFactCard;
