import "./ctabanner.stye.css";
import Button from "@/components/UI/buttons/CTAbutton";
import { Flower2, CloudSun } from "lucide-react";
import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Link } from "react-router";

const CTABannerSection = () => {
  return (
    <section className="consultation section-container">
      <div className="consultation__inner">
        <div className="flex justify-center">
          <IconBadge
            icon={CloudSun}
            iconClassName="text-[hsl(var(--white))] w-8 h-8"
            wrapperClassName="bg-[hsl(var(--secondary)/0.16)] w-16 h-16 rounded-full border-none mb-6"
          />
        </div>

        <h2 className="section-heading mb-6">Ready to Take the First Step?</h2>

        <p>
          Take our free self-assessment to learn more about your mental
          wellness, or book a consultation with a licensed therapist when you're
          ready.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 mt-9">
          <span className="h-px w-10 bg-[hsl(var(--white)/0.5)]"></span>
          <Flower2 className="w-5 h-5 text-[hsl(var(--soft-white))]" />
          <span className="h-[2px] w-10 bg-[hsl(var(--white)/0.5)]"></span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 ">
          <Button
            type="button"
            aria-label="Book a Consultation"
            variant="secondary"
            size="lg"
            className="w-[294px]"
          >
            Book a Consultation
          </Button>
          <Button
            asChild
            aria-label="Take the Free Assessment"
            variant="outline"
            size="lg"
          >
            <Link to="/assessment">Take the Free Assessment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
