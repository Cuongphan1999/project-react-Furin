import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 const productsSlice = createSlice({
    name: 'productList',
    initialState: {
        status: 'idle',
        products: []
    },
    reducers: {
        fetchProducts: (state, action ) => {
            state = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductThunkAction.pending, (state, action) => {
            state.status = "Loading..."
        })
        builder.addCase(fetchProductThunkAction.fulfilled, (state, action) => {
            state.status = "idle"
            state.products = [...action.payload]
        })
    }

})
export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction', async () =>{
    let productListRes = await fetch('http://localhost:8080/products')
    let data = await productListRes.json()
    return data
})
export default productsSlice