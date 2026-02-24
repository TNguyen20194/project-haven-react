import Badge from "@/components/UI/badge/Badge";
import { BookOpen } from "lucide-react";
import flower2 from "@/assets/decorative/therapy-flower-2.webp";

const UnderstandingTherapy = () => {
  return (
    <section className="px-6 py-15 mb-8">
      <div className="max-w-[46rem] mx-auto text-center">
        <Badge
          icon={BookOpen}
          iconClassName="text-[hsl(var(--blue))]"
          className="mb-[1.1rem]"
        >
          Educational Resource
        </Badge>

        <h2 className="section-heading mb-6">Understanding Therapy</h2>

         <div className="aspect-square w-full max-w-sm my-10 mx-auto">
          <img
            src={flower2}
            alt="Understanding Therapy"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <p className="text-[hsl(var(--green-1))] text-[1.25rem]">
          Therapy can feel unfamiliar if you've never tried it. This page is
          here to help you understand what therapy is, how it works, and how it
          might help you.
        </p>

       
      </div>
    </section>
  );
};

export default UnderstandingTherapy;
