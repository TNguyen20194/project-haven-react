import UnderstandingTherapy from "./sections/UnderstandingTherapy";
import WhatToExpect from "./sections/WhattoExpect";
import TypesOfTherapy from "./sections/TypesOfTherapy";
import HowTherapyMightHelp from "./sections/HowTherapyMightHelp";
import MythsVsFacts from "./sections/MythsVsFactsSection";
import CTABannerSection from "../home/sections/cta-banner/CTABannerSection";

const Learn = () => {
  return (
    <div>
      <main>
        <UnderstandingTherapy />
        <WhatToExpect />
        <HowTherapyMightHelp />
        <TypesOfTherapy />
        <MythsVsFacts />
        <CTABannerSection
          title="Ready to Explore Further?"
          description="Take our anonymous self-assessment to learn more about your well-being, or connect with a professional when you're ready."
        />
      </main>
    </div>
  );
};

export default Learn;
