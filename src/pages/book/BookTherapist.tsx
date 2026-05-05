import { CalendarCheck, ExternalLink, ShieldCheck } from "lucide-react";

const BookTherapist = () => {
  return (
    <section className="relative z-10 w-full px-6 py-10 overflow-hidden">
      <div className="relative z-10 max-w-[68rem] mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                <CalendarCheck className="h-6 w-6" />
              </div>

              <h2 className="section-heading !text-left leading-none">
                Book a Therapist
              </h2>
            </div>

            <p className="p-text mt-5 max-w-[42rem] !text-[1.15rem] leading-relaxed">
             Booking is handled securely through Jane. You’ll be taken to Jane’s trusted booking system to choose a time that works for you.
            </p>

            <a
              href="https://julietran.janeapp.com/#staff_member/1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-8 py-3 text-[hsl(var(--white))] font-medium transition hover:bg-[hsl(var(--primary)/0.9)]"
            >
              Continue to Booking
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[10px] border border-[#dcded7] bg-[hsl(var(--white))] p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--background))] text-[hsl(var(--primary))]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-[1.25rem] font-semibold text-[hsl(var(--green-1))]">
                  Secure booking through Jane
                </h3>
                <p className="p-text mt-2 leading-relaxed">
                  Secure booking through Jane. Your appointment opens in Jane’s
                  trusted booking system to help keep your information
                  protected.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-[#dcded7] pt-5">
              <p className="text-[0.95rem] font-medium text-[hsl(var(--green-1))]">
                What happens next
              </p>
              <ul className="space-y-3 text-[0.95rem] leading-relaxed text-[hsl(var(--green-1))]/80">
                <li className="flex gap-3">
                  <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                  <span>Choose an available appointment time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                  <span>Complete the booking details securely in Jane.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                  <span>
                    Return here anytime to keep learning or reflect&nbsp;again.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTherapist;
