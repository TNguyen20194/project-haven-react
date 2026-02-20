import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router";

//Use Outlet as a placeholder for rendering matching child routes within a parent component's layout (Layout)

const MainLayout = () => {
    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto overflow-x-hidden mt-[var(--header-h)]">
                <Outlet />
            {<Footer />}
            </div>
        </div>
    )
};


export default MainLayout;