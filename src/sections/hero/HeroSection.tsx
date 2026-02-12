import Button from "../../components/buttons/CTAbutton";
import Badge from "../../components/badge/Badge";
import { Heart } from "lucide-react";
import "./hero.style.css"

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-container">
               <Badge icon={Heart} className="mb-[1.1rem]">Professional Mental Health Support</Badge>

                <h1 className="hero-title">Your Journey to <span className="text-primary">Wellness</span> Starts Here</h1>
                <p className="hero-text">Curious about therapy but not sure where to start? Explore what therapy is, take a free self-assessment, and discover resources to support your well-being.</p>

                <Button type="button" variant="primary" size="lg" className="mt-10">Take the Free Assessment</Button>
            </div>
        </section>
    )
}

export default HeroSection;