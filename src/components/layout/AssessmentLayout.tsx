import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/UI/sonner";

const AssessmentLayout = () => {
  return (
    <main className="min-h-screen bg-[hsl(var(--background-alt)/0.5)] ">
      <Header />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          classNames: {
            toast: "rounded-2xl shadow-lg border-none px-6 py-5",
            warning: "!bg-[#EF4444] !text-white !border-none",
            loading: "!bg-[hsl(var(--moderate-bg-yellow))] !text-[hsl(var(--green-1))] !border-none",
            success: "!bg-[hsl(var(--primary))] !text-white !border-none",
            title: "!text-[16px] !font-semibold",
            description: "!text-[16px]",
          },
        }}
      />

      <Outlet />
    </main>
  );
};

export default AssessmentLayout;
