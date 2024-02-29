import React from "react";
import Products from "../components/Products/Products";
import MainLayout from "../layouts/MainLayout";
import SearchStore from "../components/search-stores/storenav";

function FurniPage() {
    return (
        <MainLayout>
            <div className='container d-flex' style={{ backgroundColor: "#c2c9c9" }}>
                <div style={{ minWidth: "180px" }}>
                <SearchStore/>
                    <Products />
                </div>
            </div>
        </MainLayout>
    )
}

export default FurniPage