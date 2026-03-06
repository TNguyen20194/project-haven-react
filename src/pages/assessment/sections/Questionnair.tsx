import { Progress } from "@/components/UI/progress";
import { useForm } from "@tanstack/react-form";
import { Toaster } from "@/components/UI/sonner";
import Button from "@/components/UI/buttons/CTAbutton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/UI/card";
import { Input } from "@/components/UI/input";
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldLabel, FieldTitle } from "@/components/UI/field";

const Questionnaire = () => {
  return (
    <Progress value={33} />
  );
};

export default Questionnaire;
