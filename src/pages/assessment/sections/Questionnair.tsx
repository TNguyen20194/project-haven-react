import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { ClipboardCheck } from "lucide-react";
import flower3 from "@/assets/decorative/therapy-flower-3.jpg";

const Questionnaire = () => {
  return (
    <section className="relative  z-10 px-6 py-10 bg-[hsl(var(--background-alt)/0.5)] overflow-hidden">
      {/* Background Layer */}
      {/* <div
        className="absolute rounded-full bottom-10 right-10 w-[350px] h-[350px] overflow-hidden bg-no-repeat bg-center bg-cover opacity-90 pointer-events-none"
        style={{ backgroundImage: `url(${flower3})` }}
      /> */}

      <div className="relative z-10 max-w-[56rem] mx-auto ">
        <div className="flex items-center gap-3 mb-5">
          <IconBadge
            icon={ClipboardCheck}
            wrapperClassName="rounded-full w-12 h-12"
            iconClassName="text-[hsl(var(--primary))] h-7 w-7"
          />
          <h3 className="sub-heading">Explore Your Mental Wellness</h3>
        </div>
        <p className="p-text">
          Answer a few questions to learn more about your mental wellness. This
          is completely anonymous and free.
        </p>
      </div>

        {/* Questionnaire */}

      {/* <div className="absolute bottom-10 right-10 aspect-square w-full max-w-[300px]">
        <img
          src={flower3}
          alt="Explore Your Mental Wellness"
          className="w-full h-full rounded-full object-cover"
        />
      </div> */}
    </section>
  );
};

export default Questionnaire;
