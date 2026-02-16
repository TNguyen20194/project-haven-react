import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";

const UnderstandingTherapy = () => {
  return (
    <section className="pt-32 px-6 py-4 mb-8">
      <div className="max-w-[46rem] mx-auto text-center">
        <Badge
          icon={BookOpen}
          iconClassName="text-[hsl(var(--blue))]"
          className="mb-[1.1rem]"
        >
          Educational Resource
        </Badge>

        <h2 className="section-heading mb-6">Understanding Therapy</h2>
        <p className="text-[hsl(var(--green-1))] text-[1.12rem]">
          Therapy can feel unfamiliar if you've never tried it. This page is
          here to help you understand what therapy is, how it works, and how it
          might help you.
        </p>
      </div>
    </section>
  );
};

export default UnderstandingTherapy;
