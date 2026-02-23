import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../scroll-to-top/ScrollToTop";

//Use Outlet as a placeholder for rendering matching child routes within a parent component's layout (Layout)

const MainLayout = () => {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
