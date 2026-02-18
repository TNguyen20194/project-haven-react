import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import UnderstandingTherapy from "./sections/UnderstandingTherapy";
import WhatToExpect from "./sections/WhattoExpect";
import TypesOfTherapy from "./sections/TypesofTherapy";

const Learn = () => {
    return (
        <div>
        <Header />
        <main>
            <UnderstandingTherapy />
            <WhatToExpect />
            <TypesOfTherapy />
        </main>
        <Footer />
        </div>
    )
};

export default Learn;