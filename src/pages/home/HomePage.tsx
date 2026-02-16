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
        <CTABannerSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
