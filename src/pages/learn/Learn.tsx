import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import UnderstandingTherapy from "./sections/UnderstandingTherapy";
import WhatToExpect from "./sections/WhattoExpect";

const Learn = () => {
    return (
        <div>
        <Header />
        <main>
            <UnderstandingTherapy />
            <WhatToExpect />
        </main>
        <Footer />
        </div>
    )
};

export default Learn;