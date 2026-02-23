import Header from "./header/Header";
import { Outlet } from "react-router";

const AssessmentLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default AssessmentLayout;
