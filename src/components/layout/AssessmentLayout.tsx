import Header from "./header/Header";
import { Outlet } from "react-router";

const AssessmentLayout = () => {
  return (
    <main className="min-h-screen bg-[hsl(var(--background-alt)/0.5)] ">
      <Header />
      <Outlet />
    </main>
  );
};

export default AssessmentLayout;
