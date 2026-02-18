import TherapyCategoriesSection from "@/components/section/TherapyCategoriesSection";

const TypesOfTherapy = () => {
  return (
    <section className="pt-8 px-6 py-4 mb-8">
      <div className="max-w-[42rem] mx-auto text-center mb-10">
        <h3 className="sub-heading mb-5">Common Types of Therapy</h3>
        <p className="text-[hsl(var(--green-1))] text-[1.12rem]">
          There's no one-size-fits-all approach. Here are some widely used
          methods—a&nbsp;therapist can help you find the best fit.
        </p>
      </div>

      <div className="max-w-[72rem] mx-auto text-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <TherapyCategoriesSection />
        </div>
      </div>
    </section>
  );
};

export default TypesOfTherapy;
