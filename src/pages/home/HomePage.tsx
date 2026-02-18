import HeroSection from "./sections/hero/HeroSection";
import QuoteSection from "./sections/quote/QuoteSection";
import HowWeHelpSection from "./sections/how-we-help/HowWeHelpSection";
import WhatIsTherapySection from "./sections/what-is-therapy/WhatIsTherapySection";
import CTABannerSection from "./sections/cta-banner/CTABannerSection";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <HowWeHelpSection />
        <WhatIsTherapySection />
        <CTABannerSection
          title="Ready to Take the First Step?"
          description="Take our free self-assessment to learn more about your mental wellness, or book a consultation with a licensed therapist when you're ready."
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
