import HeroSection from "../sections/HeroSection"
import QuoteSection from "../sections/QuoteSection"
import HowWeCanHelpSection from "../sections/HowWeHelpSection"
import AboutSection from "../sections/AboutSection"
import CTABannerSection from "../sections/CTABannerSection"

const HomePage = () => {
    return (

        <div>
            <HeroSection />
            <QuoteSection />
            <section id="services">
                <HowWeCanHelpSection />
            </section>
            <section id="about">
                <AboutSection />
            </section>
            <CTABannerSection />
        </div>
    )
}

export default HomePage