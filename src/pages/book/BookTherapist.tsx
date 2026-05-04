const BookTherapist = () => {
  return (
    <section className="relative z-10 px-6 py-10 overflow-hidden">
      <div className="relative z-10 max-w-[72rem] mx-auto">
        <h2 className="section-heading">Book a Therapist</h2>
        <div className="mt-8 overflow-hidden rounded-[10px] border border-[#dcded7] bg-[hsl(var(--white))] shadow-md">
          <iframe
            src="https://julietran.janeapp.com/#staff_member/1"
            title="Book a Therapist"
            className="h-[80vh] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookTherapist;
