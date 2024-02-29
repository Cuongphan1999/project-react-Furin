import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { remainProducts } from "../../redux-toolkit/selectors";
import { fetchProductThunkAction } from "../../slices/productsSlice";

function Products(){
    const dispatch = useDispatch()
    useEffect (() => {
        dispatch(fetchProductThunkAction())
    }, [])
    const remainProductList = useSelector(remainProducts)
    
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    remainProductList?.map((product) =>(
                        <Product key={product.id} product={product}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Products;