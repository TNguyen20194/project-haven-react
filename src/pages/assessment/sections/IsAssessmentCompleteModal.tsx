import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/UI/alert-dialog";
import Button from "@/components/UI/buttons/CTAbutton";
import { X } from "lucide-react";

type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onViewResult: () => void;
  onRetake: () => void;
};

const IsAssessmentCompleteModal = ({
  open,
  onOpenChange,
  onViewResult,
  onRetake,
}: AlertDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[480px] rounded-2xl border border-[#dcded7] bg-[hsl(var(--white))]">
        <AlertDialogCancel asChild>
          <button
            className="absolute right-4 top-4 flex items-center justify-center w-8! h-8! rounded-full p-0! text-[hsl(var(--primary))]/70 hover:text-[hsl(var(--primary))]! bg-[hsl(var(--white))]! transition shadow-sm bg-white"
            aria-label="Close modal"
          >
            <X className="h-[18px]! w-[18px]!" />
          </button>
        </AlertDialogCancel>

        <AlertDialogHeader>
          <AlertDialogTitle className="text-[1.5rem] font-semibold text-[hsl(var(--green-1))]">
            You've already completed this assessment
          </AlertDialogTitle>

          <AlertDialogDescription className="pt-2 text-[15px] leading-relaxed text-[hsl(var(--green-1))]/80">
            Your results are already available.
            <br />
            You can review them or retake the assessment.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <p className="text-sm text-[hsl(var(--green-1))]/70">
          Retaking will replace your current answers.
        </p>

        <AlertDialogFooter className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            onClick={onRetake}
            type="button"
            className="hover:bg-[hsl(var(--primary)/0.3)]!"
          >
            Retake Assessment
          </Button>

          <Button variant="primary" onClick={onViewResult} type="button">
            View Results
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default IsAssessmentCompleteModal;
