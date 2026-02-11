import Button from "../../components/buttons/CTAbutton";
import Badge from "../../components/badge/Badge";
import { Heart, BookOpen, Sparkles, Flower2 } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-container">
               <Badge icon={Heart}>Professional Mental Health Support</Badge>

                <h1 className="hero-title">Your Journey to
                    <span className="text-primary">Wellness</span> Starts Here</h1>
                <p className="hero-text">Compassionate, evidence-based therapy tailored to your unique needs. Take the first step towards a healthier, happier you.</p>

                <Button type="button" variant="primary" size="lg" className="mt-10">Take the Free Assessment</Button>
            </div>
        </section>
    )
}

export default HeroSection;