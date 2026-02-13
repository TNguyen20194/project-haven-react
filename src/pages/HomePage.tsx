import HeroSection from "../sections/hero/HeroSection"
import QuoteSection from "../sections/quote/QuoteSection"
import HowWeCanHelpSection from "../sections/howwehelp/HowWeHelpSection"
import WhatIsTherapySection from "../sections/what is therapy/WhatIsTherapySection"
import CTABannerSection from "../sections/cta banner/CTABannerSection"

const HomePage = () => {
    return (

        <div>
            <HeroSection />
            <QuoteSection />
            <section id="services">
                <HowWeCanHelpSection />
            </section>
            <section id="about">
                <WhatIsTherapySection />
            </section>
            <CTABannerSection />
        </div>
    )
}

export default HomePage