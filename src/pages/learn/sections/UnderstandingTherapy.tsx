import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import groupTherapy from "@/assets/therapist/group-therapy2.webp"

const UnderstandingTherapy = () => {
  return (
    <section className="hero hero-secondary">
      <div className="hero-container max-w-[46rem]!">
        <Badge
          icon={BookOpen}
          iconClassName="text-[hsl(var(--blue))]"
          className="mb-[1.1rem]"
        >
          Educational Resource
        </Badge>

        <h2 className="section-heading mb-6">Understanding Therapy</h2>

         <div className="w-full max-w-2xl my-10 mx-auto">
          <img
            src={groupTherapy}
            alt="Group therapy session with empathy and care"
            className="w-full h-full"
          />
        </div>
        <p className="text-[hsl(var(--green-1))] text-[1.25rem] mt-12">
          Therapy can feel unfamiliar if you've never tried it. This page is
          here to help you understand what therapy is, how it works, and how it
          might help you.
        </p>

       
      </div>
    </section>
  );
};

export default UnderstandingTherapy;
