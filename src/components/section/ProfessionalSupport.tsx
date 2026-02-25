import Button from "../UI/buttons/CTAbutton";
import { Link } from "react-router-dom";

const ProfessionalSupport = () => {
  return (
    <div className="p-5 bg-[hsl(var(--primary))] shadow-sm rounded-lg mt-10">
      <div className="flex flex-col gap-6 justify-between items-center sm:flex-row">
        <div className="flex items-center gap-2">
          <h4 className="text-[1.12rem] text-[hsl(var(--white))] font-medium">
            Considering Professional Support?
          </h4>
        </div>
      </div>
      <div className="text-[hsl(var(--white))] text-[1rem] mt-4">
        Based on your responses, you may benefit from speaking with a licensed therapist. There's no obligation—exploring your options is a positive step.
      </div>

      <Button
          asChild
          variant="secondary"
          size="lg"
          aria-label="Book a Free Consultation"
          className="mt-8 text-shadow-xs"
        >
          <Link to="">

         Book a Free Consultation
          </Link>
        </Button>
    </div>
  );
};

export default ProfessionalSupport;
