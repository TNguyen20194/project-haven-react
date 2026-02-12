import "./ctabanner.style.css"
import Button from "../../components/buttons/CTAbutton";
import { Flower2 } from "lucide-react";

const CTABannerSection = () => {
    return (
        <section className="resources-container">
            <div className="inner-container">
                <h2 className="section-heading section-heading__resources">Ready to Take the First Step?</h2>
                <p className="section-heading__text resources-text">Take our free self-assessment to learn more about your mental wellness, or book a consultation with a licensed therapist when you're ready.</p>

                <Flower2 className="flex align-center justify-center text-[hsl(var(--soft-white))] w-5 h-5"/>

                <Button type="button" aria-label="Take the Free Assessment" variant="primary">Take the Free Assessment</Button>

                <Button type="button" aria-label="Book a Consultation">Book a Consultation</Button>


                {/* <Button type="button" variant="primary" size="lg" className="mt-10">Take the Free Assessment</Button>

                <button type="button" id="createProfileBtn" className="button button-cta button-cta__profile rounded-full">Create Your Profile</button> */}
            </div>
        </section>
    )
}

export default CTABannerSection;