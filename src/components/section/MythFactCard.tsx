import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import { listItem } from "@/lib/animations";
interface MythFactCardProps {
  id: string;
  myth: string;
  fact: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const mythFactCard = ({
  id,
  myth,
  fact,
  isOpen,
  onToggle,
}: MythFactCardProps) => {
  return (
    <motion.button
      type="button"
      onClick={() => onToggle(id)}
      className="feature-card w-full text-left"
      variants={listItem}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[hsl(var(--green-1))] text-left mt-0!">
          <span className="font-semibold text-[hsl(var(--coral))]">Myth:</span>{" "}
          "{myth}"
        </p>

        <ChevronDown
          className={`h-5 w-5 shrink-0 mt-1 transition-transform duration-300 
                  ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
      >
        <div className="overflow-hidden">
          <p className="translate-y-0 !mt-0">
            <span className="font-semibold text-primary">Fact:</span>{" "}
            <span className="font-normal">{fact}</span>
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default mythFactCard;
