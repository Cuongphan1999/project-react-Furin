import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            { children }
            <Footer/>
        </>
    )
}

export default MainLayout