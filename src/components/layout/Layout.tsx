import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router";

//Use Outlet as a placeholder for rendering matching child routes within a parent component's layout (Layout)

const Layout = () => {
    // Get the current route path with useLocation
    // If route path starts with "/assessment"
    // Hide the footer
    const {pathname} = useLocation();
    const hideFooter = pathname.startsWith("/assessment")


    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto overflow-x-hidden mt-[var(--header-h)]">
                <Outlet />
            {!hideFooter && <Footer />}
            </div>
        </div>
    )
};


export default Layout;