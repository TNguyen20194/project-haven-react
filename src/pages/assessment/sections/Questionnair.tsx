import { Progress } from "@/components/UI/progress";
import { useForm } from "@tanstack/react-form";
import { Toaster } from "@/components/UI/sonner";
import Button from "@/components/UI/buttons/CTAbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldLabel,
  FieldTitle,
} from "@/components/UI/field";

const Questionnaire = () => {
  return (
    <div>
      <div className="mt-5">
        <span>Progress</span>
        <Progress className="h-3 rounded-full" />
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Test</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Questionnaire;
