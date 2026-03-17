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
            title: "!text-[16px] !font-semibold !text-white",
            description: "!text-[16px] !text-white/90",
          },
        }}
      />

      <Outlet />
    </main>
  );
};

export default AssessmentLayout;
