import IconBadge from "@/components/UI/feature-icon/IconBadge";
import { Lightbulb } from "lucide-react";

const WhatToExpect = () => {
  return (
    <section className="p-12 mb-8 bg-[hsl(var(--background-alt)/0.5)]">
      <div className="max-w-[56rem] mx-auto">
        <div className="flex items-center gap-2 mb-5">
        <IconBadge icon={Lightbulb} wrapperClassName="rounded-full w-12 h-12" iconClassName="text-[hsl(var(--primary))] h-7 w-7"/>
        <h3 className="sub-heading">What to Expect</h3>
        </div>
        <p className="p-text">
          Your first therapy session is usually about getting to know each
          other. The therapist will ask about what brought you in, your
          background, and what you hope to achieve. There's no pressure to share
          more than you're comfortable with.
        </p>
        <p className="p-text mt-5">
          Sessions typically last 45–60 minutes and happen weekly or biweekly.
          Over time, you and your therapist will work together on strategies and
          insights tailored to your goals.
        </p>
        <p className="p-text mt-5">
          Everything you share is confidential. Therapists are bound by strict
          ethical and legal guidelines to protect your privacy, with very few
          exceptions related to safety.
        </p>
      </div>
    </section>
  );
};

export default WhatToExpect;
