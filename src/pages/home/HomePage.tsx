import HeroSection from "./sections/hero/HeroSection";
import QuoteSection from "./sections/quote/QuoteSection";
import HowWeHelpSection from "./sections/how-we-help/HowWeHelpSection";
import WhatIsTherapySection from "./sections/what-is-therapy/WhatIsTherapySection";
import CTABannerSection from "./sections/cta-banner/CTABannerSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <section id="services">
        <HowWeHelpSection />
      </section>
      <section id="about">
        <WhatIsTherapySection />
      </section>
      <CTABannerSection />
    </div>
  );
};

export default HomePage;
