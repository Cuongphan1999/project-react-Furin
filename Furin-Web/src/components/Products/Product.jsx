import React from "react";
import { FaStar } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import cartSlice from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
function Product({product}) {
    const {img, title, star, prevPrice, newPrice } = product 
    const dispatch = useDispatch()
    const handleAddToCart = (product) =>{
        dispatch(cartSlice.actions.addToCart(product))
        toast.success(`${product.title} added to cart successfully`)
    }    
return (
        <div className="col-md-3 mb-4">
            <div className="card d-flex align-items-center pt-2">
                <img src={img} 
                    className="card-image-top" alt="" 
                    style={{width: "60%"}}
                />
                <div className="card-body">
                    <p className="fw-bolder">{title}</p>
                    <div className="d-flex align-items-center mb-2">
                        <div className="me-1">
                            {
                                (new Array(star).fill(1)).map((value, index) => (
                                    <FaStar key={index} color="yellow" />
                                ))
                            }
                           
                        </div>
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                         <div>
                            <del className="line-through me-2">${prevPrice}</del>
                            <span>${newPrice}</span>
                        </div>   
                        <BsCartPlusFill size={25} className="btn-cart"
                        onClick={() => handleAddToCart(product)}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;