import Header from "./header/Header";
import { Outlet } from "react-router";

const AssessmentLayout = () => {

    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto overflow-x-hidden mt-[var(--header-h)]">
                <Outlet />
            </div>
        </div>
    )
};


export default AssessmentLayout;