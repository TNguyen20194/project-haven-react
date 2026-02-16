import "./whatistherapy.style.css";
import Badge from "@/components/UI/badge/Badge";
import { Heart } from "lucide-react";
import flower from "@/assets/therapy-flower.jpg";
import TrustedSection from "@/components/section/TrustedSection";

const WhatIsTherapySection = () => {
  return (
    <section className="therapy section-container">
      <div className="therapy__inner">
        <div className="mb-8 mx-auto text-center mb-[3rem]">
          <Badge
            icon={Heart}
            iconClassName="text-[hsl(var(--pink))]"
            className="mb-[1.1rem]"
          >
            Understanding Therapy
          </Badge>
          <h2 className="section-heading mb-5">What Is Therapy, Really?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="order-2 md:order-1 grid place-items-start">
            <div className="aspect-square w-full max-w-md">
              <img
                src={flower}
                alt="what is therapy"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[1.12rem]">
              Therapy is a{" "}
              <span className="text-[hsl(var(--primary))] font-medium">
                safe, confidential conversation
              </span>{" "}
              with a trained professional who helps you understand your
              thoughts, feelings, and behaviors. It's not just for people in
              crisis—it's for anyone who wants to grow, heal, or simply
              understand themselves better.
            </p>
            <p className="text-[1.12rem]">
              There are many types of therapy, from{" "}
              <span className="text-[hsl(var(--primary))] font-medium">
                Cognitive Behavioral Therapy (CBT)
              </span>
              to mindfulness-based approaches. The right fit depends on your
              unique needs and goals—and that's completely okay to explore.
            </p>
            <TrustedSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTherapySection;
