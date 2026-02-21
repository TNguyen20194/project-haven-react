import HeroSection from "./sections/hero/HeroSection";
import QuoteSection from "./sections/quote/QuoteSection";
import HowWeHelpSection from "./sections/how-we-help/HowWeHelpSection";
import WhatIsTherapySection from "./sections/what-is-therapy/WhatIsTherapySection";
import CTABannerSection from "./sections/cta-banner/CTABannerSection";

const HomePage = () => {
  return (
      <main>
        <HeroSection />
        <QuoteSection />
        <HowWeHelpSection />
        <WhatIsTherapySection />
        {/* FAQ Page */}
        <CTABannerSection
          title="Clarity Starts With One Small Step."
          description="Take our free self-assessment to learn more about your mental wellness, or book a consultation with a licensed therapist when you're ready."
        />
      </main>
  );
};

export default HomePage;
