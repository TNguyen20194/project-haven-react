import "./ctabanner.style.css";
import Button from "../../components/buttons/CTAbutton";
import { Flower2, Quote, CloudSun, SunIcon } from "lucide-react";

const CTABannerSection = () => {
  return (
    <section className="resources-container">
      <div className="resources-container__inner">
        
        <div className="emblem-wrapper bg-[hsl(var(--secondary)/0.5)]">
          <CloudSun className="emblem text-[hsl(var(--white))] w-24 h-24"/>
        </div>

        <h2 className="section-heading">
          Ready to Take the First Step?
        </h2>

        <p>
          Take our free self-assessment to learn more about your mental
          wellness, or book a consultation with a licensed therapist when you're
          ready.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 mt-9"> 
            <span className="h-px w-10 bg-white/40"></span>
            <Flower2 className="w-5 h-5 text-[hsl(var(--soft-white))]" />
            <span className="h-[2px] w-10 bg-white/40"></span> 
        </div>

        <div className="flex align-center justify-center gap-4 mt-8">
          <Button
            type="button"
            aria-label="Book a Consultation"
            variant="secondary"
            size="lg"
          >
            Book a Consultation
          </Button>
          <Button
            type="button"
            aria-label="Take the Free Assessment"
            variant="outline"
            size="lg"
          >
            Take the Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
