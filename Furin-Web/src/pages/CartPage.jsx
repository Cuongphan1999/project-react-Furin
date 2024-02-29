import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../redux-toolkit/selectors";
import cartSlice, { checkoutCartThunkAction } from "../slices/cartSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
const schema = yup.object({
    fullname: yup.string().required(),
    mobile: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required()
})
function CartPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const cart = useSelector(cartSelector)
    const { cartInfo, cartDetails, CartId, customerInfo} = cart
    const dispatch = useDispatch()
    const handleIncrementQuantity = (cartItem) => {
        dispatch(cartSlice.actions.incrementQuantity(cartItem))
        toast.success(`${cartItem.title} Increment quantity success`)
    }
    const handleDescrementQuantity = (cartItem) => {
        dispatch(cartSlice.actions.descrementQuantity(cartItem))
        toast.success(`${cartItem.title} Descrement quantity success`)
    }
    const handleRemoveCartItem = (cartItem) => {
        Swal.fire({
            title: "Remove cart item",
            text: 'Are you sure to remove cart ?',
            showCancelButton: true,
            confirmButtonColor: '#B30F15',
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(cartSlice.actions.removeCartItem(cartItem))
                toast.info(`${cartItem.title} Removed cart item success`)
            }
        })
    }
    const handleCustomerInfo = async (values) =>{
        Swal.fire({
            title: "Are you Checkout?",
            text: 'Are you sure to remove cart ?',
            showCancelButton: true,
            confirmButtonColor: '#B30F15',
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                const data ={
                    CartId: CartId,
                    cartInfo: {
                        ...cartInfo
                    },
                    cartDetails: {
                        ...cartDetails
                    },
                    customerInfo: {
                        ...values
                    }
                }
                dispatch(checkoutCartThunkAction(data))
                console.log(data)
                toast.info(`Add cart success`)
                reset()
            }
        })
        
    }
    return (
        <MainLayout>
            <div className="container py-4 ">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className=" py-2">Cart Detail</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">

                        <table className="table cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th className="text-end">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    cartDetails?.map((cartItem) => (
                                        <tr key={cartItem.id}>
                                            <td style={{ maxWidth: '200px' }}>
                                                <div className="d-flex align-items-center">
                                                    <img className="product-image" src={cartItem.img} alt="" />
                                                    <div className="d-inline">
                                                        <div className="d-block fw-bolder mb-2">{cartItem.title}</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="text-end">
                                                ${cartItem.newPrice}
                                            </td>
                                            <td >
                                                <div className="cart-quantity-wrap">
                                                    <div className="cart-quantity">
                                                        {
                                                            cartItem.quantity > 1 ? (
                                                                <span onClick={() => handleDescrementQuantity(cartItem)}>-</span>
                                                            ) : (
                                                                <span>-</span>
                                                            )
                                                        }

                                                        <span>{cartItem.quantity}</span>
                                                        <span
                                                            onClick={() => handleIncrementQuantity(cartItem)}
                                                        >+</span>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="text-end">
                                                ${cartItem.amount}
                                            </td>
                                            <td>
                                                <div className="action-wrap">
                                                    <span className="btn-remove"
                                                        onClick={() => handleRemoveCartItem(cartItem)}
                                                    >&times;</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4" style={{ minWidth: '300px' }}>
                        <div className="order-summary p-3">
                            <h3 className="border-bottom py-2">Order Summary</h3>
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span>Subtotal</span>
                                    <span className="fw-bolder">${cartInfo.subTotal}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <span>Shipping</span>
                                    <span className="fw-bolder">{`${cartInfo.shipping ? cartInfo.shipping : "free"}`}</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top mt-2 py-2">
                                <span className="fs-6">Total</span>
                                <span className="fw-bolder fs-6">${cartInfo.total}</span>
                            </div>
                        </div>
                       
                       
                       
                    </div>
                    <div className="col-md-4" style={{ minWidth: '800px' }}>
                    <form onSubmit={handleSubmit(handleCustomerInfo)}>
                            <div className="customer-info p-3">
                                <h3 className="py-2">Customer Info</h3>
                                <div className="form-group mb-3">
                                    <label className="form-label">Fullname</label>
                                    <input type="text"
                                        className={`${errors.fullname?.message ? 'is-invalid' : ''} form-control`}
                                        placeholder="Fullname"
                                        {...register('fullname')}
                                    />
                                     <span className="invalid-feedback">{errors.fullname?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text"
                                        className={`${errors.email?.message ? 'is-invalid' : ''} form-control`}
                                        placeholder="Email"
                                        {...register('email')}
                                    />
                                    <span className="invalid-feedback">{errors.email?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Mobile</label>
                                    <input type="text"
                                       className={`${errors.mobile?.message ? 'is-invalid' : ''} form-control`}
                                        placeholder="Mobile"
                                        {...register('mobile')}
                                    />
                                    <span className="invalid-feedback">{errors.mobile?.message}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text"
                                        className={`${errors.address?.message ? 'is-invalid' : ''} form-control`}
                                        placeholder="Address"
                                        {...register('address')}
                                    />
                                    <span className="invalid-feedback">{errors.address?.message}</span>
                                </div>
                               
                            </div>
                            <div className="py-3 mt-2 d-flex align-items-center justify-content-left  btn-checkout">
                                <button type="submit" className="btn btn-primary ">
                                    CHECKOUT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row col-md-12">
                    <Link to={'/furni'}>
                    <FaArrowCircleLeft/> Go to Shopping
                    </Link>
                    
                </div>
            </div>
        </MainLayout>
    )
}

export default CartPage