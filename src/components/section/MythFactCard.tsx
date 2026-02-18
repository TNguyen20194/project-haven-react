interface MythFactCardProps {
  icon?: React.ReactElement;
  myth: string;
  fact: string;
}

const MythFactList: MythFactCardProps[] = [
  {
    myth: "Therapy is only for people with severe mental illness.",
    fact: "Therapy benefits anyone looking to improve their well-being, manage stress, navigate life changes, or simply understand themselves better.",
  },
  {
    myth: "Going to therapy means you're weak.",
    fact: "Seeking help is a sign of strength and self-awareness. It takes courage to work on yourself.",
  },
  {
    myth: "A therapist will tell you what to do.",
    fact: "Therapists guide you to discover your own solutions. They provide tools and perspectives, but you remain in control of your decisions.",
  },
  {
    myth: "Therapy takes years to work.",
    fact: "Many people see improvements within a few sessions. The duration depends on your goals—some concerns can be addressed in weeks, others benefit from longer support.",
  },
  {
    myth: "You have to lie on a couch and talk about your childhood.",
    fact: "Modern therapy takes many forms. Sessions can involve conversations, exercises, goal-setting, and practical strategies tailored to your needs.",
  },
];

const MythFactCard = () => {
  return MythFactList.map(({ myth, fact }) => {
    return (
      <div key={myth} className="feature-card hover:shadow-none!">
        <p className="font-semibold text-[hsl(var(--green-1))] text-left mt-0!">
          <span className="text-[hsl(var(--coral))]">Myth:</span>{" "}
          "{myth}"
        </p>
        <p>
          <span className="text-primary font-semibold">Fact:</span> {fact}
        </p>
      </div>
    );
  });
};

export default MythFactCard;
