import React from "react";
import Category from "./Category";
import Price from "./Price";
import Recommended from "./Recommended";
import SearchItem from "./Search";

function SearchStore() {
    return (
        <div className="d-flex flex-column">
            <SearchItem/>
            <Recommended/>
            < Category/>
            <Price/>
   

        </div>
    )
}

export default SearchStore;