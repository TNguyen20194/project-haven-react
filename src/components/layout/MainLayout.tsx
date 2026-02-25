import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

//Use Outlet as a placeholder for rendering matching child routes within a parent component's layout (Layout)

const MainLayout = () => {
  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
