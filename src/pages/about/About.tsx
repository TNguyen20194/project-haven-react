import Button from "@/components/UI/buttons/CTAbutton";
import { Link } from "react-router-dom";
import julieImage from "@/assets/project UI/julie-tran.webp";

import { CalendarCheck, ExternalLink, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="px-6 py-20 bg-[hsl(var(--background))]">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div>
          <h2 className="section-heading mb-8 text-center">All About Me</h2>

          <div className="space-y-6 text-[1rem] leading-relaxed text-[hsl(var(--green-1))]">
            <p>
              Hi, I’m Julie Tran, a Registered Psychotherapist (Qualifying). I’m
              glad you’re here.
            </p>
            <p>
              Starting therapy is often a meaningful step, especially when
              you’ve been managing a lot on your own. Many of the people I work
              with feel overwhelmed, stuck in their thoughts, or disconnected
              from themselves while trying to keep up with daily life. You might
              be functioning on the outside but feeling exhausted, anxious, or
              uncertain on the inside. If that resonates with you, you’re not
              alone.
            </p>
            <p>
              I support young adults, adults and seniors navigating anxiety,
              stress, burnout, and life transitions. In our work together, we
              slow things down and make space to better understand what you’re
              experiencing, not just manage the symptoms, but explore what’s
              underneath them. My goal is to help you feel more grounded, clear,
              and connected to yourself again.
            </p>
            <p>
              My approach is collaborative and compassionate, drawing from
              evidence-based therapies such as CBT, ACT, DBT, Solution Focused
              and Mindfulness based practices. Therapy with me is a space where
              you can show up as you are without pressure to have it all figured
              out. Together, we focus on building practical tools while also
              deepening insight and self understanding.
            </p>
            <p>
              I bring experience working in both community and private practice
              settings, along with my background as a Certified Recreation
              Therapy Specialist and former Director of Resident and Family
              Services. This has given me a broad understanding of mental health
              across different life experiences and care environments.
            </p>
            <p>
              Outside of my work, I find grounding in creative expression, time
              outdoors, traveling, and meaningful connection with loved ones.
              These moments help me stay present and balanced in my own life.
            </p>
            <p>
              If you’re considering therapy, I want you to know that you don’t
              have to navigate things alone. When you’re ready, I’m here to walk
              alongside you as you begin that process.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button type="button" variant="primary" size="md">
              <Link to="/book">Book a Session With Me</Link>
            </Button>

            <Button type="button" variant="secondary" size="md">
              <Link to="/assessment">Try the Free Assessment</Link>
            </Button>
          </div>
        </div>
        <div className="lg:sticky lg:top-28">
            <img src={julieImage} alt="Julie Tran" className="h-auto w-full rounded-[18px] object-cover shadow-md"/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
