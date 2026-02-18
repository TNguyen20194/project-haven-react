import Button from "@/components/UI/buttons/CTAbutton";
import { Flower2, CloudSun } from "lucide-react";
import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Link } from "react-router";



const ExploreFurther = () => {
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

        <h2 className="section-heading mb-6">Ready to Explore Further?</h2>

        <p>
          Take our anonymous self-assessment to learn more about your well-being, or connect with a professional when you're ready.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 mt-9">
          <span className="h-px w-10 bg-[hsl(var(--white)/0.5)]"></span>
          <Flower2 className="w-5 h-5 text-[hsl(var(--soft-white))]" />
          <span className="h-[2px] w-10 bg-[hsl(var(--white)/0.5)]"></span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 ">
          <Button
            type="button"
            aria-label="Take the Assessment"
            variant="secondary"
            size="lg"
            className="w-[294px]"
          >
            Book a Consultation
          </Button>
          <Button
            asChild
            aria-label="Book a Consultation"
            variant="outline"
            size="lg"
          >
            <Link to="/assessment">Take the Free Assessment</Link>
          </Button>
        </div>
      </div>
    </section>
    )
};

export default ExploreFurther;