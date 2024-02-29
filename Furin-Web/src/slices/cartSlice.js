import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v1 as uuid } from 'uuid';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartInfo: {
            subTotal: 0,
            shipping: 0,
            total: 0,
            status: 'draft'
        },
        cartDetails: [

        ], 
        customerInfo: {
            fullname: '',
            address: '',
            email:'',
            mobile: ''
        },

    },
    reducers: {
        addToCart: (state, action) => {
            let cartItem = state.cartDetails.find((cartItem) => cartItem.id === action.payload.id)
            if (cartItem?.id) { 
                cartItem.quantity = Number(cartItem.quantity) + 1
                cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice
            }
            else { 
                state.cartDetails.push({
                    ...action.payload,
                    quantity: 1,
                    amount: action.payload.newPrice
                })
            }
            let newSubTotal = 0;
            for (let item of state.cartDetails) {
                newSubTotal += Number(item.amount)
            }
            let newTotal = newSubTotal + Number(state.shipping)
            state.cartInfo.subTotal = newSubTotal;
            state.cartInfo.total = newTotal
        },
        incrementQuantity: (state, action) => {
            let cartItem = state.cartDetails.find((cartItem) => cartItem.id === action.payload.id)
            cartItem.quantity = Number(cartItem.quantity) + 1
            cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice

            let newSubTotal = 0;
            for (let item of state.cartDetails) {
                newSubTotal += Number(item.amount)
            }
            state.cartInfo.subTotal = newSubTotal;
            state.cartInfo.total = state.cartInfo.subTotal + state.cartInfo.shipping
        },
        descrementQuantity: (state, action) => {
            let cartItem = state.cartDetails.find((cartItem) => cartItem.id === action.payload.id)
            cartItem.quantity = Number(cartItem.quantity) - 1
            cartItem.amount = Number(cartItem.quantity) * cartItem.newPrice

            let newSubTotal = 0;
            for (let item of state.cartDetails) {
                newSubTotal += Number(item.amount)
            }
            state.cartInfo.subTotal = newSubTotal;
            state.cartInfo.total = state.cartInfo.subTotal + state.cartInfo.shipping
        },
        removeCartItem: (state, action) => {
            state.cartDetails = state.cartDetails.filter((cartItem) => cartItem.id !== action.payload.id)

            let newSubTotal = 0;
            for (let item of state.cartDetails) {
                newSubTotal += Number(item.amount)
            }
            state.cartInfo.subTotal = newSubTotal;
            state.cartInfo.total = state.cartInfo.subTotal + state.cartInfo.shipping
        },
        CreateCustomerInfo: (state, action) => {
            state.customerInfo = action.payload
        }  
    },
    extraReducers: (builder) => {
        builder
        .addCase(checkoutCartThunkAction.pending, (state, action) => {

        })
        .addCase(checkoutCartThunkAction.fulfilled, (state, action) => {
            state.cardId = uuid() 
    
               state.cartInfo = {
                    subTotal: 0,
                    shipping: 0,
                    total: 0, 
                }
                state.cartDetails = []
                state.customerInfo = {
                    fullname: '',
                    address: '',
                    email:'',
                    mobile: ''
                }
        
            
        })
    }
    
    
})
export const checkoutCartThunkAction = createAsyncThunk('cart/checkout', async (data) =>{
       let checkoutRes = await fetch('http://localhost:8080/orderList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       })
       let resultData = await checkoutRes.json()
       return resultData
})
export default cartSlice;