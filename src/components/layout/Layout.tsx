import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto overflow-x-hidden mt-[var(--header-h)]">
                <Outlet />
            <Footer />
            </div>
        </div>
    )
};


export default Layout;