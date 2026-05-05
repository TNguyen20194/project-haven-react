import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

//Use Outlet as a placeholder for rendering matching child routes within a parent component's layout (Layout)

const MainLayout = () => {
  return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center">
          <Outlet />
        </div>
        <Footer />
      </main>
  );
};

export default MainLayout;
